import { Actions } from '@ngrx/effects';
import { TreeAction, TreeDeleteNodeErrorAction, TreeDeleteNodeSuccessAction, TreeExpandNodeAction, TreeLoadNodesAction, TreeLoadNodesErrorAction, TreeLoadNodesSuccessAction, TreeSaveNodeErrorAction, TreeSaveNodeSuccessAction } from './treeActions.service';
import { IOuterNode } from '../interfaces/IOuterNode';
import { Observable } from 'rxjs';
import { ITreeState } from './ITreeState';
import { NodeDispatcherService } from '../service/nodesDispatcher.service';
import { Store } from '@ngrx/store';
export declare class TreeEffectsService {
    private actions$;
    private nodeDispatcherService;
    private store;
    register$: Observable<TreeAction>;
    load$: Observable<TreeLoadNodesErrorAction | TreeLoadNodesSuccessAction>;
    delete$: Observable<TreeDeleteNodeErrorAction | TreeDeleteNodeSuccessAction>;
    save$: Observable<TreeSaveNodeErrorAction | TreeSaveNodeSuccessAction>;
    move$: Observable<TreeAction>;
    expand$: Observable<TreeLoadNodesAction>;
    insert$: Observable<TreeExpandNodeAction>;
    initPathForFullyLoadedTreeEffect$: Observable<any>;
    constructor(actions$: Actions, nodeDispatcherService: NodeDispatcherService, store: Store<ITreeState>);
    protected deleteNode(treeId: string, node: IOuterNode): Observable<IOuterNode>;
    protected loadNodes(treeId: string, id: string | null): Observable<IOuterNode[]>;
    protected saveNode(treeId: string, node: IOuterNode): Observable<IOuterNode>;
    protected moveNode(treeId: string, source: IOuterNode, target: IOuterNode): Observable<IOuterNode>;
}
