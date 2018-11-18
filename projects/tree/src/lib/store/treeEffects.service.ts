import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  TreeAction,
  TreeActionTypes,
  TreeDeleteNodeAction,
  TreeDeleteNodeErrorAction,
  TreeDeleteNodeSuccessAction,
  TreeExpandNodeAction,
  TreeInsertNodeAction,
  TreeLoadNodesAction,
  TreeLoadNodesErrorAction,
  TreeLoadNodesSuccessAction,
  TreeLoadPathAction,
  TreeMoveNodeAction,
  TreeMoveNodeErrorAction,
  TreeMoveNodeSuccessAction,
  TreeRegisterAction,
  TreeSaveNodeAction,
  TreeSaveNodeErrorAction,
  TreeSaveNodeSuccessAction,
  TreeSetAllNodesAction
} from './treeActions.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {combineLatest, Observable, of} from 'rxjs';
import {ITreeActionPayload, ITreeConfiguration, ITreeData, ITreeState} from './ITreeState';
import {NodeDispatcherService} from '../service/nodesDispatcher.service';
import {DragAndDrop} from '../dragAndDrop/dragAndDrop.service';
import {catchError, filter, map, mergeMap, switchMap, take} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {NEW_NODE_ID, treeConfigurationSelector, treeSelector} from './treeReducer';

@Injectable()
export class TreeEffectsService {
  @Effect()
  public register$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_REGISTER),
      map((action: TreeRegisterAction): TreeAction => {
        if (action.payload.silent) {
          return new TreeSetAllNodesAction({treeId: action.payload.treeId, nodes: action.payload.nodes});
        } else {
          return new TreeLoadNodesAction({treeId: action.payload.treeId, id: null});
        }
      })
    );

  @Effect()
  public load$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_LOAD),
      mergeMap((action: TreeLoadNodesAction) => this.loadNodes(action.payload.treeId, action.payload.id)
        .pipe(
          map((nodesData: IOuterNode[]): TreeLoadNodesSuccessAction => new TreeLoadNodesSuccessAction({
            treeId: action.payload.treeId,
            id: action.payload.id,
            nodes: nodesData
          })),
          catchError(() => of(new TreeLoadNodesErrorAction({
            treeId: action.payload.treeId,
            id: action.payload.id
          })))
        )
      )
    );


  @Effect()
  public delete$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_DELETE_NODE),
      switchMap((action: TreeDeleteNodeAction) => this.deleteNode(action.payload.treeId, action.payload.node)
        .pipe(
          map((): TreeDeleteNodeSuccessAction => new TreeDeleteNodeSuccessAction({...action.payload})),
          catchError((): Observable<TreeDeleteNodeErrorAction> => of(new TreeDeleteNodeErrorAction({...action.payload})))
        )
      )
    );


  @Effect()
  public save$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_SAVE_NODE),
      switchMap((action: TreeSaveNodeAction) => this.saveNode(action.payload.treeId, {...action.payload.node})
        .pipe(
          map((node: IOuterNode): TreeSaveNodeSuccessAction => new TreeSaveNodeSuccessAction({
            treeId: action.payload.treeId,
            oldNode: action.payload.node,
            node
          })),
          catchError(() => of(new TreeSaveNodeErrorAction({...action.payload})))
        )
      )
    );

  @Effect()
  public move$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_MOVE_NODE),
      filter((action: TreeMoveNodeAction) => {
        return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
      }),
      switchMap((action: TreeMoveNodeAction) => {
          const source = <IOuterNode>{...action.payload.oldNode};
          const target = Boolean(action.payload.node) ? {...action.payload.node} : null;

          return this.moveNode(action.payload.treeId, source, target)
            .pipe(
              map((node: IOuterNode): ITreeActionPayload => {
                return {
                  treeId: action.payload.treeId,
                  oldNode: action.payload.oldNode,
                  node: node
                };
              }),
              switchMap((data: ITreeActionPayload) => {
                return this.store.select(treeConfigurationSelector(action.payload.treeId))
                  .pipe(
                    take(1),
                    map((configuration: ITreeConfiguration) => {
                      return {
                        configuration,
                        data
                      };
                    })
                  );
              }),
              catchError(() => {
                const newAction = new TreeMoveNodeErrorAction({
                  treeId: action.payload.treeId,
                  source: action.payload.oldNode,
                  target: action.payload.node
                });

                return of(newAction);
              })
            );
        }
      ),
      mergeMap((value: { data: ITreeActionPayload, configuration: ITreeConfiguration }) => {
        const data = value.data;
        const actions: TreeAction[] = [
          new TreeMoveNodeSuccessAction({treeId: data.treeId, source: data.oldNode, target: data.node}),
        ];

        if (!value.configuration.isFullyLoaded) {
          actions.push(new TreeLoadNodesAction({treeId: data.treeId, id: data.node.parentId}));
        }

        return actions;
      })
    );

  @Effect()
  public expand$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_EXPAND_NODE),
      switchMap((action: TreeExpandNodeAction) =>
        this.store
          .pipe(
            select(treeSelector(action.payload.treeId)),
            take(1),
            filter((treeState: ITreeData) => !treeState.configuration.isFullyLoaded),
            map(() => {
              return new TreeLoadNodesAction({
                  treeId: action.payload.treeId,
                  id: action.payload.id
                }
              );
            })
          )
      )
    );

  @Effect()
  public insert$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_INSERT_NODE),
      filter((action: TreeInsertNodeAction) => !!action.payload.parentId),
      map((action: TreeInsertNodeAction) => {
        return new TreeExpandNodeAction({treeId: action.payload.treeId, id: action.payload.parentId});
      })
    );

  @Effect()
  public initPathForFullyLoadedTreeEffect$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_LOAD_PATH),
      switchMap((action: TreeLoadPathAction) => {
        return this.store.select(treeConfigurationSelector(action.payload.treeId))
          .pipe(
            take(1),
            map((configuration: ITreeConfiguration) => {
              return {action, configuration};
            })
          );
      }),
      map((value: { action: TreeLoadPathAction, configuration: ITreeConfiguration }) => {
          const {action, configuration} = value;

          if (configuration.isFullyLoaded) {
            return action.payload.ids.map((id: string) => new TreeExpandNodeAction({treeId: action.payload.treeId, id}));
          } else {
            const loadActions = action.payload.ids.map((id: string) => this.loadNodes(action.payload.treeId, id));
            return combineLatest(loadActions)
              .pipe(
                take(1),
                mergeMap((data: IOuterNode[][]) => {
                  const loadSuccess = data.map((nodes: IOuterNode[], index) => new TreeLoadNodesSuccessAction({
                    treeId: action.payload.treeId,
                    id: action.payload.ids[index],
                    nodes
                  }));
                  const expandNodes = action.payload.ids.map((id: string) => new TreeExpandNodeAction({
                    treeId: action.payload.treeId,
                    id
                  }));

                  return [...loadSuccess, ...expandNodes];
                })
              );
          }
        }
      ),
      mergeMap((actions: any[]) => actions)
    );

  constructor(private actions$: Actions,
              private nodeDispatcherService: NodeDispatcherService,
              private store: Store<ITreeState>) {
  }

  protected deleteNode(treeId: string, node: IOuterNode): Observable<IOuterNode> {
    const nodeService = this.nodeDispatcherService.get(treeId);

    return node.id ? nodeService.remove(node.id) : of(node);
  }

  protected loadNodes(treeId: string, id: string | null) {
    const nodeService = this.nodeDispatcherService.get(treeId);

    return nodeService.load(id);
  }

  protected saveNode(treeId: string, node: IOuterNode): Observable<IOuterNode> {
    const nodeService = this.nodeDispatcherService.get(treeId);

    if (node.id === NEW_NODE_ID) {
      return nodeService.add(node, node.parentId);
    } else {
      return nodeService.update(node);
    }
  }

  protected moveNode(treeId: string, source: IOuterNode, target: IOuterNode): Observable<IOuterNode> {
    const nodeService = this.nodeDispatcherService.get(treeId);

    return nodeService.move(source, target);
  }
}
