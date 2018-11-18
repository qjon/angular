import {IOuterNode} from '../interfaces/IOuterNode';
import {IConfiguration} from '../interfaces/IConfiguration';
import {ITreeData, ITreeNodes, ITreeState} from '../store/ITreeState';
import {distinctUntilChanged, map} from 'rxjs/operators';
import * as _isEqual from 'lodash.isequal';
import {
  expandedNodesSelector,
  NEW_NODE_ID,
  previouslySelectedNodeSelector,
  selectedNodeSelector
} from '../store/treeReducer';
import {select, Store} from '@ngrx/store';
import {TreeLoadPathAction} from '../store/treeActions.service';
import {combineLatest, Observable, Subscription} from 'rxjs';

const isEqual = _isEqual;

export class TreeModel {

  public get treeId(): string {
    return this.configuration.treeId;
  }

  public get isFullyLoaded(): boolean {
    return this._fullyLoaded;
  }

  public nodes$: Observable<ITreeNodes>;
  public rootNodes$: Observable<IOuterNode[]>;
  public currentSelectedNode$: Observable<IOuterNode>;
  private expanded: Set<string>;
  private selected: string = null;
  private previouslySelected: string = null;

  private subscription = new Subscription();

  public constructor(protected store: Store<ITreeState>,
                     protected treeData$: Observable<ITreeData>,
                     public configuration: IConfiguration,
                     protected _fullyLoaded = false) {
    this.nodes$ = this.treeData$
      .pipe(
        distinctUntilChanged((prev: ITreeData, next: ITreeData) => {
          return isEqual(prev.nodes.entities, next.nodes.entities);
        }),
        map((treeData: ITreeData): ITreeNodes => treeData.nodes.entities)
      );

    this.rootNodes$ = this.treeData$
      .pipe(
        map((treeData: ITreeData): IOuterNode[] => treeData.nodes.rootNodes.map((id) => treeData.nodes.entities[id]).sort(this.sortNodes)),
        distinctUntilChanged(),
      );

    this.currentSelectedNode$ = this.treeData$
      .pipe(
        map((treeData: ITreeData): IOuterNode => {
          const nodesData = treeData.nodes;
          const selectedId = nodesData.selected;

          return selectedId ? nodesData.entities[selectedId] : null;
        }),
        // distinctUntilChanged((prev: IOuterNode, next: IOuterNode) => {
        //   return isEqual(prev ? prev.id : null, next ? next.id : null)
        // })
      );

    this.initConfiguration();
    this.subscribeExpanded();
    this.subscribeSelected();
    this.subscribePreviouslySelected();
  }

  public destroy(): void {
    this.subscription.unsubscribe();
  }

  public getParentsList(): Observable<IOuterNode[]> {
    return combineLatest(
      this.currentSelectedNode$,
      this.nodes$
    )
      .pipe(
        map(([currentNode, nodes]: [IOuterNode, ITreeNodes]): IOuterNode[] => {
          if (!Boolean(currentNode)) {
            return [];
          }

          const parents: IOuterNode[] = currentNode.parents.map(id => nodes[id]);

          parents.push(currentNode);

          return parents;
        })
      );
  }

  public getChildren(nodeId: string | null): Observable<IOuterNode[]> {
    return this.nodes$
      .pipe(
        map((state: ITreeNodes): IOuterNode[] => this.getNodesByParentId(state, nodeId)),
        map((nodes: IOuterNode[]) => {
          return [...nodes].sort(this.sortNodes);
        })
      );
  }

  public initPath(path: string[]): void {
    this.store.dispatch(new TreeLoadPathAction({treeId: this.configuration.treeId, ids: path}));
  }

  public isExpanded(node: IOuterNode): boolean {
    if (!node) {
      return false;
    }

    return this.expanded.has(node.id);
  }

  public isSelected(node: IOuterNode): boolean {
    if (!node) {
      return false;
    }

    return this.selected === node.id;
  }

  public wasPreviouslySelected(nodeId: string): boolean {
    return this.previouslySelected === nodeId;
  }

  private initConfiguration(): void {
    const defaultConfiguration: IConfiguration = {
      disableMoveNodes: false,
      dragZone: null,
      dropZone: null,
      treeId: 'tree',
      showAddButton: true,
      isAnimation: false,
    };

    for (const key in defaultConfiguration) {
      if (this.configuration[key] === undefined) {
        this.configuration[key] = defaultConfiguration[key];
      }
    }
  }

  private getNodesByParentId(state: ITreeNodes, id: string | null): IOuterNode[] {
    return Object.keys(state)
      .filter((key: string) => state[key].parentId === id)
      .map((key: string) => state[key]);
  }

  private sortNodes(first: IOuterNode, second: IOuterNode): number {
    if (second.id === NEW_NODE_ID) {
      return -1;
    }

    return first.name > second.name ? 1 : -1;
  }

  private subscribeExpanded(): void {
    this.subscription.add(
      this.store
        .pipe(
          select(expandedNodesSelector(this.treeId))
        )
        .subscribe((expanded: string[]) => this.expanded = new Set(expanded))
    );
  }

  private subscribeSelected(): void {
    this.subscription.add(
      this.store
        .pipe(
          select(selectedNodeSelector(this.treeId))
        )
        .subscribe((selected: string) => this.selected = selected)
    );
  }

  private subscribePreviouslySelected(): void {
    this.subscription.add(
      this.store
        .pipe(
          select(previouslySelectedNodeSelector(this.treeId))
        )
        .subscribe((selected: string) => this.previouslySelected = selected)
    );
  }
}
