import {ITreeConfiguration, ITreeData, ITreeNodes, ITreeState} from './ITreeState';
import {
  TreeAction,
  TreeActionTypes,
  TreeCollapseNodeAction,
  TreeDeleteNodeSuccessAction,
  TreeExpandNodeAction,
  TreeInsertNodeAction,
  TreeLoadNodesSuccessAction,
  TreeMarkAsFullyLoadedAction,
  TreeMoveNodeSuccessAction,
  TreeRegisterAction,
  TreeSaveNodeSuccessAction,
  TreeSelectNodeAction,
  TreeSetAllNodesAction,
  TreeSetConfigurationAction
} from './treeActions.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MemoizedSelector} from '@ngrx/store/src/selector';

export const NEW_NODE_ID = 'ri-new-node-id';

export const emptyTreeData: ITreeData = {
  nodes: {
    entities: {},
    previouslySelected: null,
    selected: null,
    rootNodes: [],
    expanded: [],
  },
  configuration: {
    isFullyLoaded: false
  }
};

function copyState(state: ITreeState, treeId: string = null) {
  const newState = {...state};

  if (treeId) {
    newState[treeId] = {
      nodes: {
        entities: {...state[treeId].nodes.entities},
        previouslySelected: state[treeId].nodes.previouslySelected,
        selected: state[treeId].nodes.selected,
        rootNodes: [...state[treeId].nodes.rootNodes],
        expanded: [...state[treeId].nodes.expanded],
      },
      configuration: {...state[treeId].configuration}
    };
  }

  return newState;
}

function removeNode(state: ITreeState, action: TreeDeleteNodeSuccessAction): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const treeId = action.payload.treeId;
  const treeState = newState[treeId];
  const node = action.payload.node;
  const parentId = node.parentId;

  delete treeState.nodes.entities[node.id];

  if (parentId) {
    const parent = {...treeState.nodes.entities[parentId]};

    if (parent.children) {
      parent.children = parent.children.filter((id) => id !== node.id);
    }
    treeState.nodes.entities[parentId] = parent;
  } else {
    treeState.nodes.rootNodes = treeState.nodes.rootNodes.filter((id) => id !== node.id);
  }

  return newState;
}


function loadNodes(state: ITreeState, action: TreeLoadNodesSuccessAction) {
  const newState = copyState(state, action.payload.treeId);
  let parent: IOuterNode | null = null;
  const treeId = action.payload.treeId;
  const parentId = action.payload.id;

  if (parentId) {
    parent = newState[treeId].nodes.entities[parentId];
    parent.children = [];
  } else {
    newState[treeId].nodes.entities = {};
  }

  action.payload.nodes.forEach((nodeData: IOuterNode) => {
    nodeData.treeId = treeId;
    if (parent) {
      parent.children.push(nodeData.id);
      nodeData.parents = [...parent.parents, ...[parent.id]];
    } else {
      nodeData.parents = [];
    }

    newState[treeId].nodes.entities[nodeData.id] = nodeData;

    if (!parentId) {
      newState[treeId].nodes.rootNodes.push(nodeData.id);
    }
  });

  return newState;
}


function expandNode(state: ITreeState, action: TreeExpandNodeAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);
  const nodeId = action.payload.id;

  // newState[treeId].nodes.entities[nodeId] = Object.assign({}, newState[treeId].nodes.entities[nodeId], {isExpanded: true});
  newState[treeId].nodes.expanded = [...newState[treeId].nodes.expanded, nodeId];

  return newState;
}


function collapseNode(state: ITreeState, action: TreeCollapseNodeAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);
  const nodeId = action.payload.id;

  // newState[treeId].nodes.entities[nodeId] = {...newState[treeId].nodes.entities[nodeId], ...{isExpanded: false}};
  newState[treeId].nodes.expanded = newState[treeId].nodes.expanded.filter((id) => id !== nodeId);


  return newState;
}


function insertNode(state: ITreeState, action: TreeInsertNodeAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);
  const parentId = action.payload.parentId;
  const newNode: IOuterNode = {
    id: NEW_NODE_ID,
    treeId: treeId,
    name: 'New data',
    parentId: parentId,
    children: [],
    parents: [],
    isExpanded: false
  };

  newState[treeId].nodes.entities[NEW_NODE_ID] = newNode;

  if (!parentId) {
    newState[treeId].nodes.rootNodes = [...newState[treeId].nodes.rootNodes, NEW_NODE_ID];
  }

  return newState;
}

function saveNode(state: ITreeState, action: TreeSaveNodeSuccessAction): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const old = action.payload.oldNode;
  const newNode = action.payload.node;
  const treeId = action.payload.treeId;
  const treeState = newState[treeId].nodes.entities;

  if (treeState[NEW_NODE_ID]) {
    delete treeState[NEW_NODE_ID];
  } else {
    delete treeState[old.id];
  }

  const nodeId = newNode.id;
  treeState[nodeId] = newNode;

  const parentId = newNode.parentId;
  const parent = treeState[parentId] || null;

  newNode.parents = [];

  if (parentId) {
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }

      parent.children.push(nodeId);

      newNode.parents = [...parent.parents, parent.id];
    }
  } else if (old.id === NEW_NODE_ID) {
    newState[treeId].nodes.rootNodes = newState[treeId].nodes.rootNodes.filter((id) => id !== NEW_NODE_ID);
    newState[treeId].nodes.rootNodes.push(nodeId);
  }

  return newState;
}

function moveNode(state: ITreeState, action: TreeMoveNodeSuccessAction) {
  const newState = copyState(state, action.payload.treeId);
  const oldNode = action.payload.source;
  const newNode = action.payload.target;
  const treeId = action.payload.treeId;
  const treeData = newState[treeId];
  const treeState = newState[treeId].nodes.entities;

  // remove info about removed child
  if (oldNode.parentId) {
    treeState[oldNode.parentId].children = treeState[oldNode.parentId].children.filter((id) => id !== oldNode.id);
  } else {
    treeData.nodes.rootNodes = treeData.nodes.rootNodes.filter((id) => id !== oldNode.id);
  }

  // add info about moved node
  if (newNode.parentId) {
    const newParent = treeState[newNode.parentId];

    if (newParent.children) {
      newParent.children.push(newNode.id);
    }

    newNode.parents = [...newParent.parents, newParent.id];
  } else {
    treeData.nodes.rootNodes.push(newNode.id);
    newNode.parents = [];
  }

  // replace node data
  treeState[newNode.id] = {...newNode};

  return newState;
}

function registerTree(state: ITreeState, action: TreeRegisterAction) {
  const newState = copyState(state);

  newState[action.payload.treeId] = {
    nodes: {
      entities: {...emptyTreeData.nodes.entities},
      previouslySelected: emptyTreeData.nodes.previouslySelected,
      selected: emptyTreeData.nodes.selected,
      rootNodes: [...emptyTreeData.nodes.rootNodes],
      expanded: [...emptyTreeData.nodes.expanded]
    },
    configuration: {...emptyTreeData.configuration}
  };

  return newState;
}


function setAllNodes(state: ITreeState, action: TreeSetAllNodesAction): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const treeId = action.payload.treeId;
  const nodes = action.payload.nodes;
  const newNodes: ITreeNodes = {};
  const ids: string[] = nodes.map((nodeData: IOuterNode) => nodeData.id);

  nodes.forEach((nodeData: IOuterNode) => {
    nodeData.treeId = treeId;
    newNodes[nodeData.id] = nodeData;

    if (nodeData.parentId === null) {
      newState[treeId].nodes.rootNodes.push(nodeData.id);
    }
  });

  newState[treeId].nodes.rootNodes.forEach((id) => updateParents(newNodes, id));

  newState[treeId].nodes.entities = newNodes;

  return newState;
}

function updateParents(nodes: ITreeNodes, nodeId: string, parents: string[] = []): void {
  const node: IOuterNode = nodes[nodeId];

  if (node) {
    node.parents = [...parents];

    if (node.children.length > 0) {
      const newParents = [...parents, ...[node.id]];

      node.children.forEach(childId => updateParents(nodes, childId, newParents));
    }
  }
}

function markTreeAsFullyLoaded(state: ITreeState, action: TreeMarkAsFullyLoadedAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);

  newState[treeId].configuration = {...newState[treeId].configuration, ...{isFullyLoaded: true}};

  return newState;
}

function setConfiguration(state: ITreeState, action: TreeSetConfigurationAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);

  newState[treeId].configuration = {...newState[treeId].configuration, ...action.payload.configuration};

  return newState;
}

function selectNode(state: ITreeState, action: TreeSelectNodeAction) {
  const treeId = action.payload.treeId;
  const node = action.payload.node;
  const newState = copyState(state, treeId);

  newState[treeId].nodes.previouslySelected = newState[treeId].nodes.selected;
  newState[treeId].nodes.selected = node ? node.id : null;

  return newState;
}

export function treeReducer(state: ITreeState = {}, action: TreeAction): ITreeState {
  switch (action.type) {
    case TreeActionTypes.TREE_REGISTER:
      return registerTree(state, action);
    case TreeActionTypes.TREE_SAVE_NODE_SUCCESS:
      return saveNode(state, action);
    case TreeActionTypes.TREE_DELETE_NODE_SUCCESS:
      return removeNode(state, action);
    case TreeActionTypes.TREE_INSERT_NODE:
      return insertNode(state, action);
    case TreeActionTypes.TREE_LOAD_SUCCESS:
      return loadNodes(state, action);
    case TreeActionTypes.TREE_MOVE_NODE_SUCCESS:
      return moveNode(state, action);
    case TreeActionTypes.TREE_SET_ALL_NODES:
      return setAllNodes(state, action);
    case TreeActionTypes.TREE_MARK_AS_FULLY_LOADED:
      return markTreeAsFullyLoaded(state, action);
    case TreeActionTypes.TREE_SET_CONFIGURATION:
      return setConfiguration(state, action);
    case TreeActionTypes.TREE_EXPAND_NODE:
      return expandNode(state, action);
    case TreeActionTypes.TREE_COLLAPSE_NODE:
      return collapseNode(state, action);
    case TreeActionTypes.TREE_SELECT_NODE:
      return selectNode(state, action);
    case TreeActionTypes.TREE_DELETE_NODE:
    case TreeActionTypes.TREE_EDIT_NODE_START:
    case TreeActionTypes.TREE_LOAD:
    case TreeActionTypes.TREE_MOVE_NODE:
    case TreeActionTypes.TREE_SAVE_NODE:
      return state;
    default:
      return state;
  }

}

export const treeStateSelector: MemoizedSelector<object, ITreeState> = createFeatureSelector<ITreeState>('trees');

export function treeSelector(treeId: string): MemoizedSelector<object, ITreeData> {
  return createSelector(treeStateSelector, (state: ITreeState) => state[treeId] || null);
}

export function treeConfigurationSelector(treeId: string): MemoizedSelector<object, ITreeConfiguration> {
  return createSelector(treeStateSelector, (state: ITreeState) => state[treeId].configuration || null);
}

export function expandedNodesSelector(treeId: string): MemoizedSelector<object, string[]> {
  return createSelector(treeStateSelector, (state: ITreeState) => state[treeId].nodes.expanded || []);
}

export function selectedNodeSelector(treeId: string): MemoizedSelector<object, string> {
  return createSelector(treeStateSelector, (state: ITreeState) => state[treeId].nodes.selected || null);
}

export function previouslySelectedNodeSelector(treeId: string): MemoizedSelector<object, string> {
  return createSelector(treeStateSelector, (state: ITreeState) => state[treeId].nodes.previouslySelected || null);
}
