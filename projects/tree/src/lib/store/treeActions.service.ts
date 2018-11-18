import {IOuterNode} from '../interfaces/IOuterNode';
import {Action} from '@ngrx/store';
import {IConfiguration} from '../interfaces/IConfiguration';

export enum TreeActionTypes {
  TREE_SAVE_NODE = 'TREE_SAVE_NODE',
  TREE_SAVE_NODE_SUCCESS = 'TREE_SAVE_NODE_SUCCESS',
  TREE_SAVE_NODE_ERROR = 'TREE_SAVE_NODE_ERROR',
  TREE_DELETE_NODE = 'TREE_DELETE_NODE',
  TREE_DELETE_NODE_SUCCESS = 'TREE_DELETE_NODE_SUCCESS',
  TREE_DELETE_NODE_ERROR = 'TREE_DELETE_NODE_ERROR',
  TREE_EDIT_NODE_START = 'TREE_EDIT_NODE_START',
  TREE_COLLAPSE_NODE = 'TREE_COLLAPSE_NODE',
  TREE_EXPAND_NODE = 'TREE_EXPAND_NODE',
  TREE_INSERT_NODE = 'TREE_INSERT_NODE',
  TREE_LOAD = 'TREE_LOAD',
  TREE_LOAD_PATH = 'TREE_LOAD_PATH',
  TREE_LOAD_SUCCESS = 'TREE_LOAD_SUCCESS',
  TREE_LOAD_ERROR = 'TREE_LOAD_ERROR',
  TREE_MARK_AS_FULLY_LOADED = 'TREE_MARK_AS_FULLY_LOADED',
  TREE_MOVE_NODE = 'TREE_MOVE_NODE',
  TREE_MOVE_NODE_SUCCESS = 'TREE_MOVE_NODE_SUCCESS',
  TREE_MOVE_NODE_ERROR = 'TREE_MOVE_NODE_ERROR',
  TREE_REGISTER = 'TREE_REGISTER',
  TREE_SELECT_NODE = 'TREE_SELECT_NODE',
  TREE_SET_ALL_NODES = 'TREE_SET_ALL_NODES',
  TREE_SET_CONFIGURATION = 'TREE_SET_CONFIGURATION'
}

export class TreeCollapseNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_COLLAPSE_NODE;

  public constructor(public payload: { treeId: string, id: string }) {

  }
}

export class TreeDeleteNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_DELETE_NODE;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeDeleteNodeErrorAction implements Action {
  readonly type = TreeActionTypes.TREE_DELETE_NODE_ERROR;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeDeleteNodeSuccessAction implements Action {
  readonly type = TreeActionTypes.TREE_DELETE_NODE_SUCCESS;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeEditNodeStartAction implements Action {
  readonly type = TreeActionTypes.TREE_EDIT_NODE_START;

  public constructor(public payload: { node: IOuterNode }) {

  }
}

export class TreeExpandNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_EXPAND_NODE;

  public constructor(public payload: { treeId: string, id: string }) {

  }
}

export class TreeInsertNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_INSERT_NODE;

  public constructor(public payload: { treeId: string, parentId: string }) {

  }
}

export class TreeLoadNodesAction implements Action {
  readonly type = TreeActionTypes.TREE_LOAD;

  public constructor(public payload: { treeId: string, id: string }) {

  }
}

export class TreeLoadNodesErrorAction implements Action {
  readonly type = TreeActionTypes.TREE_LOAD_ERROR;

  public constructor(public payload: { treeId: string, id: string }) {

  }
}

export class TreeLoadNodesSuccessAction implements Action {
  readonly type = TreeActionTypes.TREE_LOAD_SUCCESS;

  public constructor(public payload: { treeId: string, id: string, nodes: IOuterNode[] }) {

  }
}

export class TreeLoadPathAction implements Action {
  readonly type = TreeActionTypes.TREE_LOAD_PATH;

  public constructor(public payload: { treeId: string, ids: string[] }) {

  }
}

export class TreeMarkAsFullyLoadedAction implements Action {
  readonly type = TreeActionTypes.TREE_MARK_AS_FULLY_LOADED;

  public constructor(public payload: { treeId: string }) {

  }
}

export class TreeMoveNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_MOVE_NODE;

  public constructor(public payload: { treeId: string, sourceOfDroppedData: string, oldNode: any, node: IOuterNode }) {

  }
}

export class TreeMoveNodeErrorAction implements Action {
  readonly type = TreeActionTypes.TREE_MOVE_NODE_ERROR;

  public constructor(public payload: { treeId: string, source: IOuterNode, target: IOuterNode }) {

  }
}

export class TreeMoveNodeSuccessAction implements Action {
  readonly type = TreeActionTypes.TREE_MOVE_NODE_SUCCESS;

  public constructor(public payload: { treeId: string, source: IOuterNode, target: IOuterNode }) {

  }
}

export class TreeRegisterAction implements Action {
  readonly type = TreeActionTypes.TREE_REGISTER;

  public constructor(public payload: { treeId: string, silent: boolean, nodes: IOuterNode[] }) {

  }
}

export class TreeSaveNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_SAVE_NODE;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeSaveNodeErrorAction implements Action {
  readonly type = TreeActionTypes.TREE_SAVE_NODE_ERROR;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeSaveNodeSuccessAction implements Action {
  readonly type = TreeActionTypes.TREE_SAVE_NODE_SUCCESS;

  public constructor(public payload: { treeId: string, node: IOuterNode, oldNode: IOuterNode }) {

  }
}

export class TreeSelectNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_SELECT_NODE;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeSetAllNodesAction implements Action {
  readonly type = TreeActionTypes.TREE_SET_ALL_NODES;

  public constructor(public payload: { treeId: string, nodes: IOuterNode[] }) {

  }
}

export class TreeSetConfigurationAction implements Action {
  readonly type = TreeActionTypes.TREE_SET_CONFIGURATION;

  public constructor(public payload: { treeId: string, configuration: IConfiguration }) {

  }
}

export type TreeAction =
  TreeCollapseNodeAction
  | TreeDeleteNodeAction
  | TreeDeleteNodeErrorAction
  | TreeDeleteNodeSuccessAction
  | TreeEditNodeStartAction
  | TreeExpandNodeAction
  | TreeInsertNodeAction
  | TreeLoadNodesAction
  | TreeLoadNodesErrorAction
  | TreeLoadNodesSuccessAction
  | TreeLoadNodesSuccessAction
  | TreeLoadPathAction
  | TreeMarkAsFullyLoadedAction
  | TreeMoveNodeAction
  | TreeMoveNodeErrorAction
  | TreeMoveNodeSuccessAction
  | TreeRegisterAction
  | TreeSaveNodeAction
  | TreeSaveNodeErrorAction
  | TreeSaveNodeSuccessAction
  | TreeSelectNodeAction
  | TreeSetAllNodesAction
  | TreeSetConfigurationAction
  ;
