/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TreeActionTypes } from './treeActions.service';
import { createFeatureSelector, createSelector } from '@ngrx/store';
/** @type {?} */
export var NEW_NODE_ID = 'ri-new-node-id';
/** @type {?} */
export var emptyTreeData = {
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
/**
 * @param {?} state
 * @param {?=} treeId
 * @return {?}
 */
function copyState(state, treeId) {
    if (treeId === void 0) { treeId = null; }
    /** @type {?} */
    var newState = tslib_1.__assign({}, state);
    // todo: find better way to clone object
    if (treeId) {
        newState[treeId] = {
            nodes: {
                entities: tslib_1.__assign({}, state[treeId].nodes.entities),
                previouslySelected: state[treeId].nodes.previouslySelected,
                selected: state[treeId].nodes.selected,
                rootNodes: tslib_1.__spread(state[treeId].nodes.rootNodes),
                expanded: tslib_1.__spread(state[treeId].nodes.expanded),
            },
            configuration: tslib_1.__assign({}, state[treeId].configuration)
        };
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function removeNode(state, action) {
    /** @type {?} */
    var newState = copyState(state, action.payload.treeId);
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var treeState = newState[treeId];
    /** @type {?} */
    var node = action.payload.node;
    /** @type {?} */
    var parentId = node.parentId;
    delete treeState.nodes.entities[node.id];
    if (parentId) {
        /** @type {?} */
        var parent_1 = tslib_1.__assign({}, treeState.nodes.entities[parentId]);
        if (parent_1.children) {
            parent_1.children = parent_1.children.filter(function (id) { return id !== node.id; });
        }
        treeState.nodes.entities[parentId] = parent_1;
    }
    else {
        treeState.nodes.rootNodes = treeState.nodes.rootNodes.filter(function (id) { return id !== node.id; });
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function loadNodes(state, action) {
    /** @type {?} */
    var newState = copyState(state, action.payload.treeId);
    /** @type {?} */
    var parent = null;
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var parentId = action.payload.id;
    if (parentId) {
        parent = newState[treeId].nodes.entities[parentId];
        parent.children = [];
    }
    else {
        newState[treeId].nodes.entities = {};
    }
    action.payload.nodes.forEach(function (nodeData) {
        nodeData.treeId = treeId;
        if (parent) {
            parent.children.push(nodeData.id);
            nodeData.parents = tslib_1.__spread(parent.parents, [parent.id]);
        }
        else {
            nodeData.parents = [];
        }
        newState[treeId].nodes.entities[nodeData.id] = nodeData;
        if (!parentId) {
            newState[treeId].nodes.rootNodes.push(nodeData.id);
        }
    });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function expandNode(state, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state, treeId);
    /** @type {?} */
    var nodeId = action.payload.id;
    // newState[treeId].nodes.entities[nodeId] = Object.assign({}, newState[treeId].nodes.entities[nodeId], {isExpanded: true});
    newState[treeId].nodes.expanded = tslib_1.__spread(newState[treeId].nodes.expanded, [nodeId]);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function collapseNode(state, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state, treeId);
    /** @type {?} */
    var nodeId = action.payload.id;
    // newState[treeId].nodes.entities[nodeId] = {...newState[treeId].nodes.entities[nodeId], ...{isExpanded: false}};
    newState[treeId].nodes.expanded = newState[treeId].nodes.expanded.filter(function (id) { return id !== nodeId; });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function insertNode(state, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state, treeId);
    /** @type {?} */
    var parentId = action.payload.parentId;
    /** @type {?} */
    var newNode = {
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
        newState[treeId].nodes.rootNodes = tslib_1.__spread(newState[treeId].nodes.rootNodes, [NEW_NODE_ID]);
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function saveNode(state, action) {
    /** @type {?} */
    var newState = copyState(state, action.payload.treeId);
    /** @type {?} */
    var old = action.payload.oldNode;
    /** @type {?} */
    var newNode = action.payload.node;
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var treeState = newState[treeId].nodes.entities;
    if (treeState[NEW_NODE_ID]) {
        delete treeState[NEW_NODE_ID];
    }
    else {
        delete treeState[old.id];
    }
    /** @type {?} */
    var nodeId = newNode.id;
    treeState[nodeId] = newNode;
    /** @type {?} */
    var parentId = newNode.parentId;
    /** @type {?} */
    var parent = treeState[parentId] || null;
    newNode.parents = [];
    if (parentId) {
        if (parent) {
            if (!parent.children) {
                parent.children = [];
            }
            parent.children.push(nodeId);
            newNode.parents = tslib_1.__spread(parent.parents, [parent.id]);
        }
    }
    else if (old.id === NEW_NODE_ID) {
        newState[treeId].nodes.rootNodes = newState[treeId].nodes.rootNodes.filter(function (id) { return id !== NEW_NODE_ID; });
        newState[treeId].nodes.rootNodes.push(nodeId);
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function moveNode(state, action) {
    /** @type {?} */
    var newState = copyState(state, action.payload.treeId);
    /** @type {?} */
    var oldNode = action.payload.source;
    /** @type {?} */
    var newNode = action.payload.target;
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var treeData = newState[treeId];
    /** @type {?} */
    var treeState = newState[treeId].nodes.entities;
    // remove info about removed child
    if (oldNode.parentId) {
        treeState[oldNode.parentId].children = treeState[oldNode.parentId].children.filter(function (id) { return id !== oldNode.id; });
    }
    else {
        treeData.nodes.rootNodes = treeData.nodes.rootNodes.filter(function (id) { return id !== oldNode.id; });
    }
    // add info about moved node
    if (newNode.parentId) {
        /** @type {?} */
        var newParent = treeState[newNode.parentId];
        if (newParent.children) {
            newParent.children.push(newNode.id);
        }
        newNode.parents = tslib_1.__spread(newParent.parents, [newParent.id]);
    }
    else {
        treeData.nodes.rootNodes.push(newNode.id);
        newNode.parents = [];
    }
    // replace node data
    treeState[newNode.id] = tslib_1.__assign({}, newNode);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function registerTree(state, action) {
    /** @type {?} */
    var newState = copyState(state);
    newState[action.payload.treeId] = {
        nodes: {
            entities: tslib_1.__assign({}, emptyTreeData.nodes.entities),
            previouslySelected: emptyTreeData.nodes.previouslySelected,
            selected: emptyTreeData.nodes.selected,
            rootNodes: tslib_1.__spread(emptyTreeData.nodes.rootNodes),
            expanded: tslib_1.__spread(emptyTreeData.nodes.expanded)
        },
        configuration: tslib_1.__assign({}, emptyTreeData.configuration)
    };
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function setAllNodes(state, action) {
    /** @type {?} */
    var newState = copyState(state, action.payload.treeId);
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var nodes = action.payload.nodes;
    /** @type {?} */
    var newNodes = {};
    /** @type {?} */
    var ids = nodes.map(function (nodeData) { return nodeData.id; });
    nodes.forEach(function (nodeData) {
        nodeData.treeId = treeId;
        newNodes[nodeData.id] = nodeData;
        if (nodeData.parentId === null) {
            newState[treeId].nodes.rootNodes.push(nodeData.id);
        }
    });
    newState[treeId].nodes.rootNodes.forEach(function (id) { return updateParents(newNodes, id); });
    newState[treeId].nodes.entities = newNodes;
    return newState;
}
/**
 * @param {?} nodes
 * @param {?} nodeId
 * @param {?=} parents
 * @return {?}
 */
function updateParents(nodes, nodeId, parents) {
    if (parents === void 0) { parents = []; }
    /** @type {?} */
    var node = nodes[nodeId];
    if (node) {
        node.parents = tslib_1.__spread(parents);
        if (node.children.length > 0) {
            /** @type {?} */
            var newParents_1 = tslib_1.__spread(parents, [node.id]);
            node.children.forEach(function (childId) { return updateParents(nodes, childId, newParents_1); });
        }
    }
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function markTreeAsFullyLoaded(state, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state, treeId);
    newState[treeId].configuration = tslib_1.__assign({}, newState[treeId].configuration, { isFullyLoaded: true });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function setConfiguration(state, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state, treeId);
    newState[treeId].configuration = tslib_1.__assign({}, newState[treeId].configuration, action.payload.configuration);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function selectNode(state, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var node = action.payload.node;
    /** @type {?} */
    var newState = copyState(state, treeId);
    newState[treeId].nodes.previouslySelected = newState[treeId].nodes.selected;
    newState[treeId].nodes.selected = node ? node.id : null;
    return newState;
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function treeReducer(state, action) {
    if (state === void 0) { state = {}; }
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
/** @type {?} */
export var treeStateSelector = createFeatureSelector('trees');
/**
 * @param {?} treeId
 * @return {?}
 */
export function treeSelector(treeId) {
    return createSelector(treeStateSelector, function (state) { return state[treeId] || null; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
export function treeConfigurationSelector(treeId) {
    return createSelector(treeStateSelector, function (state) { return state[treeId].configuration || null; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
export function expandedNodesSelector(treeId) {
    return createSelector(treeStateSelector, function (state) { return state[treeId].nodes.expanded || []; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
export function selectedNodeSelector(treeId) {
    return createSelector(treeStateSelector, function (state) { return state[treeId].nodes.selected || null; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
export function previouslySelectedNodeSelector(treeId) {
    return createSelector(treeStateSelector, function (state) { return state[treeId].nodes.previouslySelected || null; });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZVJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3N0b3JlL3RyZWVSZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUVMLGVBQWUsRUFhaEIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUMscUJBQXFCLEVBQUUsY0FBYyxFQUFDLE1BQU0sYUFBYSxDQUFDOztBQUdsRSxNQUFNLEtBQU8sV0FBVyxHQUFHLGdCQUFnQjs7QUFFM0MsTUFBTSxLQUFPLGFBQWEsR0FBYztJQUN0QyxLQUFLLEVBQUU7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsUUFBUSxFQUFFLElBQUk7UUFDZCxTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFDRCxhQUFhLEVBQUU7UUFDYixhQUFhLEVBQUUsS0FBSztLQUNyQjtDQUNGOzs7Ozs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUFpQixFQUFFLE1BQXFCO0lBQXJCLHVCQUFBLEVBQUEsYUFBcUI7O1FBQ25ELFFBQVEsd0JBQU8sS0FBSyxDQUFDO0lBRTNCLHdDQUF3QztJQUN4QyxJQUFJLE1BQU0sRUFBRTtRQUNWLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRztZQUNqQixLQUFLLEVBQUU7Z0JBQ0wsUUFBUSx1QkFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDM0Msa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7Z0JBQzFELFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQ3RDLFNBQVMsbUJBQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQzdDLFFBQVEs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Q0FBQyxpQkFBaUIsRUFBRSxVQUFDLEtBQWlCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQWxDLENBQWtDLENBQUMsQ0FBQztBQUN0RyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxNQUFjO0lBQ2pELE9BQU8sY0FBYyxDQUFDLGlCQUFpQixFQUFFLFVBQUMsS0FBaUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0FBQ3hHLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDhCQUE4QixDQUFDLE1BQWM7SUFDM0QsT0FBTyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxLQUFpQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLEVBQTlDLENBQThDLENBQUMsQ0FBQztBQUNsSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVHJlZUNvbmZpZ3VyYXRpb24sIElUcmVlRGF0YSwgSVRyZWVOb2RlcywgSVRyZWVTdGF0ZX0gZnJvbSAnLi9JVHJlZVN0YXRlJztcbmltcG9ydCB7XG4gIFRyZWVBY3Rpb24sXG4gIFRyZWVBY3Rpb25UeXBlcyxcbiAgVHJlZUNvbGxhcHNlTm9kZUFjdGlvbixcbiAgVHJlZURlbGV0ZU5vZGVTdWNjZXNzQWN0aW9uLFxuICBUcmVlRXhwYW5kTm9kZUFjdGlvbixcbiAgVHJlZUluc2VydE5vZGVBY3Rpb24sXG4gIFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uLFxuICBUcmVlTWFya0FzRnVsbHlMb2FkZWRBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVSZWdpc3RlckFjdGlvbixcbiAgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbixcbiAgVHJlZVNlbGVjdE5vZGVBY3Rpb24sXG4gIFRyZWVTZXRBbGxOb2Rlc0FjdGlvbixcbiAgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb25cbn0gZnJvbSAnLi90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7Y3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvcn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtNZW1vaXplZFNlbGVjdG9yfSBmcm9tICdAbmdyeC9zdG9yZS9zcmMvc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgTkVXX05PREVfSUQgPSAncmktbmV3LW5vZGUtaWQnO1xuXG5leHBvcnQgY29uc3QgZW1wdHlUcmVlRGF0YTogSVRyZWVEYXRhID0ge1xuICBub2Rlczoge1xuICAgIGVudGl0aWVzOiB7fSxcbiAgICBwcmV2aW91c2x5U2VsZWN0ZWQ6IG51bGwsXG4gICAgc2VsZWN0ZWQ6IG51bGwsXG4gICAgcm9vdE5vZGVzOiBbXSxcbiAgICBleHBhbmRlZDogW10sXG4gIH0sXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICBpc0Z1bGx5TG9hZGVkOiBmYWxzZVxuICB9XG59O1xuXG5mdW5jdGlvbiBjb3B5U3RhdGUoc3RhdGU6IElUcmVlU3RhdGUsIHRyZWVJZDogc3RyaW5nID0gbnVsbCkge1xuICBjb25zdCBuZXdTdGF0ZSA9IHsuLi5zdGF0ZX07XG5cbiAgLy8gdG9kbzogZmluZCBiZXR0ZXIgd2F5IHRvIGNsb25lIG9iamVjdFxuICBpZiAodHJlZUlkKSB7XG4gICAgbmV3U3RhdGVbdHJlZUlkXSA9IHtcbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIGVudGl0aWVzOiB7Li4uc3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc30sXG4gICAgICAgIHByZXZpb3VzbHlTZWxlY3RlZDogc3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQsXG4gICAgICAgIHNlbGVjdGVkOiBzdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkLFxuICAgICAgICByb290Tm9kZXM6IFsuLi5zdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2Rlc10sXG4gICAgICAgIGV4cGFuZGVkOiBbLi4uc3RhdGVbdHJlZUlkXS5ub2Rlcy5leHBhbmRlZF0sXG4gICAgICB9LFxuICAgICAgY29uZmlndXJhdGlvbjogey4uLnN0YXRlW3RyZWVJZF0uY29uZmlndXJhdGlvbn1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbik6IElUcmVlU3RhdGUge1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgYWN0aW9uLnBheWxvYWQudHJlZUlkKTtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCB0cmVlU3RhdGUgPSBuZXdTdGF0ZVt0cmVlSWRdO1xuICBjb25zdCBub2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgcGFyZW50SWQgPSBub2RlLnBhcmVudElkO1xuXG4gIGRlbGV0ZSB0cmVlU3RhdGUubm9kZXMuZW50aXRpZXNbbm9kZS5pZF07XG5cbiAgaWYgKHBhcmVudElkKSB7XG4gICAgY29uc3QgcGFyZW50ID0gey4uLnRyZWVTdGF0ZS5ub2Rlcy5lbnRpdGllc1twYXJlbnRJZF19O1xuXG4gICAgaWYgKHBhcmVudC5jaGlsZHJlbikge1xuICAgICAgcGFyZW50LmNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuLmZpbHRlcigoaWQpID0+IGlkICE9PSBub2RlLmlkKTtcbiAgICB9XG4gICAgdHJlZVN0YXRlLm5vZGVzLmVudGl0aWVzW3BhcmVudElkXSA9IHBhcmVudDtcbiAgfSBlbHNlIHtcbiAgICB0cmVlU3RhdGUubm9kZXMucm9vdE5vZGVzID0gdHJlZVN0YXRlLm5vZGVzLnJvb3ROb2Rlcy5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gbm9kZS5pZCk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gbG9hZE5vZGVzKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uKSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBsZXQgcGFyZW50OiBJT3V0ZXJOb2RlIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgcGFyZW50SWQgPSBhY3Rpb24ucGF5bG9hZC5pZDtcblxuICBpZiAocGFyZW50SWQpIHtcbiAgICBwYXJlbnQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW3BhcmVudElkXTtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzID0ge307XG4gIH1cblxuICBhY3Rpb24ucGF5bG9hZC5ub2Rlcy5mb3JFYWNoKChub2RlRGF0YTogSU91dGVyTm9kZSkgPT4ge1xuICAgIG5vZGVEYXRhLnRyZWVJZCA9IHRyZWVJZDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlRGF0YS5pZCk7XG4gICAgICBub2RlRGF0YS5wYXJlbnRzID0gWy4uLnBhcmVudC5wYXJlbnRzLCAuLi5bcGFyZW50LmlkXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVEYXRhLnBhcmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVEYXRhLmlkXSA9IG5vZGVEYXRhO1xuXG4gICAgaWYgKCFwYXJlbnRJZCkge1xuICAgICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlRGF0YS5pZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gZXhwYW5kTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlRXhwYW5kTm9kZUFjdGlvbik6IElUcmVlU3RhdGUge1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCB0cmVlSWQpO1xuICBjb25zdCBub2RlSWQgPSBhY3Rpb24ucGF5bG9hZC5pZDtcblxuICAvLyBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVJZF0gPSBPYmplY3QuYXNzaWduKHt9LCBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVJZF0sIHtpc0V4cGFuZGVkOiB0cnVlfSk7XG4gIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgPSBbLi4ubmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5leHBhbmRlZCwgbm9kZUlkXTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gY29sbGFwc2VOb2RlKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcbiAgY29uc3Qgbm9kZUlkID0gYWN0aW9uLnBheWxvYWQuaWQ7XG5cbiAgLy8gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tub2RlSWRdID0gey4uLm5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZW50aXRpZXNbbm9kZUlkXSwgLi4ue2lzRXhwYW5kZWQ6IGZhbHNlfX07XG4gIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmV4cGFuZGVkLmZpbHRlcigoaWQpID0+IGlkICE9PSBub2RlSWQpO1xuXG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5cbmZ1bmN0aW9uIGluc2VydE5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZUluc2VydE5vZGVBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcbiAgY29uc3QgcGFyZW50SWQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJZDtcbiAgY29uc3QgbmV3Tm9kZTogSU91dGVyTm9kZSA9IHtcbiAgICBpZDogTkVXX05PREVfSUQsXG4gICAgdHJlZUlkOiB0cmVlSWQsXG4gICAgbmFtZTogJ05ldyBkYXRhJyxcbiAgICBwYXJlbnRJZDogcGFyZW50SWQsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIHBhcmVudHM6IFtdLFxuICAgIGlzRXhwYW5kZWQ6IGZhbHNlXG4gIH07XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tORVdfTk9ERV9JRF0gPSBuZXdOb2RlO1xuXG4gIGlmICghcGFyZW50SWQpIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcyA9IFsuLi5uZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcywgTkVXX05PREVfSURdO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBzYXZlTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBjb25zdCBvbGQgPSBhY3Rpb24ucGF5bG9hZC5vbGROb2RlO1xuICBjb25zdCBuZXdOb2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCB0cmVlU3RhdGUgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzO1xuXG4gIGlmICh0cmVlU3RhdGVbTkVXX05PREVfSURdKSB7XG4gICAgZGVsZXRlIHRyZWVTdGF0ZVtORVdfTk9ERV9JRF07XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIHRyZWVTdGF0ZVtvbGQuaWRdO1xuICB9XG5cbiAgY29uc3Qgbm9kZUlkID0gbmV3Tm9kZS5pZDtcbiAgdHJlZVN0YXRlW25vZGVJZF0gPSBuZXdOb2RlO1xuXG4gIGNvbnN0IHBhcmVudElkID0gbmV3Tm9kZS5wYXJlbnRJZDtcbiAgY29uc3QgcGFyZW50ID0gdHJlZVN0YXRlW3BhcmVudElkXSB8fCBudWxsO1xuXG4gIG5ld05vZGUucGFyZW50cyA9IFtdO1xuXG4gIGlmIChwYXJlbnRJZCkge1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlSWQpO1xuXG4gICAgICBuZXdOb2RlLnBhcmVudHMgPSBbLi4ucGFyZW50LnBhcmVudHMsIHBhcmVudC5pZF07XG4gICAgfVxuICB9IGVsc2UgaWYgKG9sZC5pZCA9PT0gTkVXX05PREVfSUQpIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcyA9IG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMucm9vdE5vZGVzLmZpbHRlcigoaWQpID0+IGlkICE9PSBORVdfTk9ERV9JRCk7XG4gICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlSWQpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBtb3ZlTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlTW92ZU5vZGVTdWNjZXNzQWN0aW9uKSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBjb25zdCBvbGROb2RlID0gYWN0aW9uLnBheWxvYWQuc291cmNlO1xuICBjb25zdCBuZXdOb2RlID0gYWN0aW9uLnBheWxvYWQudGFyZ2V0O1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IHRyZWVEYXRhID0gbmV3U3RhdGVbdHJlZUlkXTtcbiAgY29uc3QgdHJlZVN0YXRlID0gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllcztcblxuICAvLyByZW1vdmUgaW5mbyBhYm91dCByZW1vdmVkIGNoaWxkXG4gIGlmIChvbGROb2RlLnBhcmVudElkKSB7XG4gICAgdHJlZVN0YXRlW29sZE5vZGUucGFyZW50SWRdLmNoaWxkcmVuID0gdHJlZVN0YXRlW29sZE5vZGUucGFyZW50SWRdLmNoaWxkcmVuLmZpbHRlcigoaWQpID0+IGlkICE9PSBvbGROb2RlLmlkKTtcbiAgfSBlbHNlIHtcbiAgICB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMgPSB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMuZmlsdGVyKChpZCkgPT4gaWQgIT09IG9sZE5vZGUuaWQpO1xuICB9XG5cbiAgLy8gYWRkIGluZm8gYWJvdXQgbW92ZWQgbm9kZVxuICBpZiAobmV3Tm9kZS5wYXJlbnRJZCkge1xuICAgIGNvbnN0IG5ld1BhcmVudCA9IHRyZWVTdGF0ZVtuZXdOb2RlLnBhcmVudElkXTtcblxuICAgIGlmIChuZXdQYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgIG5ld1BhcmVudC5jaGlsZHJlbi5wdXNoKG5ld05vZGUuaWQpO1xuICAgIH1cblxuICAgIG5ld05vZGUucGFyZW50cyA9IFsuLi5uZXdQYXJlbnQucGFyZW50cywgbmV3UGFyZW50LmlkXTtcbiAgfSBlbHNlIHtcbiAgICB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMucHVzaChuZXdOb2RlLmlkKTtcbiAgICBuZXdOb2RlLnBhcmVudHMgPSBbXTtcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugbm9kZSBkYXRhXG4gIHRyZWVTdGF0ZVtuZXdOb2RlLmlkXSA9IHsuLi5uZXdOb2RlfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJlZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlUmVnaXN0ZXJBY3Rpb24pIHtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUpO1xuXG4gIG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLnRyZWVJZF0gPSB7XG4gICAgbm9kZXM6IHtcbiAgICAgIGVudGl0aWVzOiB7Li4uZW1wdHlUcmVlRGF0YS5ub2Rlcy5lbnRpdGllc30sXG4gICAgICBwcmV2aW91c2x5U2VsZWN0ZWQ6IGVtcHR5VHJlZURhdGEubm9kZXMucHJldmlvdXNseVNlbGVjdGVkLFxuICAgICAgc2VsZWN0ZWQ6IGVtcHR5VHJlZURhdGEubm9kZXMuc2VsZWN0ZWQsXG4gICAgICByb290Tm9kZXM6IFsuLi5lbXB0eVRyZWVEYXRhLm5vZGVzLnJvb3ROb2Rlc10sXG4gICAgICBleHBhbmRlZDogWy4uLmVtcHR5VHJlZURhdGEubm9kZXMuZXhwYW5kZWRdXG4gICAgfSxcbiAgICBjb25maWd1cmF0aW9uOiB7Li4uZW1wdHlUcmVlRGF0YS5jb25maWd1cmF0aW9ufVxuICB9O1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuXG5mdW5jdGlvbiBzZXRBbGxOb2RlcyhzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlU2V0QWxsTm9kZXNBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnRyZWVJZCk7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3Qgbm9kZXMgPSBhY3Rpb24ucGF5bG9hZC5ub2RlcztcbiAgY29uc3QgbmV3Tm9kZXM6IElUcmVlTm9kZXMgPSB7fTtcbiAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IG5vZGVzLm1hcCgobm9kZURhdGE6IElPdXRlck5vZGUpID0+IG5vZGVEYXRhLmlkKTtcblxuICBub2Rlcy5mb3JFYWNoKChub2RlRGF0YTogSU91dGVyTm9kZSkgPT4ge1xuICAgIG5vZGVEYXRhLnRyZWVJZCA9IHRyZWVJZDtcbiAgICBuZXdOb2Rlc1tub2RlRGF0YS5pZF0gPSBub2RlRGF0YTtcblxuICAgIGlmIChub2RlRGF0YS5wYXJlbnRJZCA9PT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlRGF0YS5pZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2Rlcy5mb3JFYWNoKChpZCkgPT4gdXBkYXRlUGFyZW50cyhuZXdOb2RlcywgaWQpKTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzID0gbmV3Tm9kZXM7XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRzKG5vZGVzOiBJVHJlZU5vZGVzLCBub2RlSWQ6IHN0cmluZywgcGFyZW50czogc3RyaW5nW10gPSBbXSk6IHZvaWQge1xuICBjb25zdCBub2RlOiBJT3V0ZXJOb2RlID0gbm9kZXNbbm9kZUlkXTtcblxuICBpZiAobm9kZSkge1xuICAgIG5vZGUucGFyZW50cyA9IFsuLi5wYXJlbnRzXTtcblxuICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSBbLi4ucGFyZW50cywgLi4uW25vZGUuaWRdXTtcblxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkSWQgPT4gdXBkYXRlUGFyZW50cyhub2RlcywgY2hpbGRJZCwgbmV3UGFyZW50cykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrVHJlZUFzRnVsbHlMb2FkZWQoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5jb25maWd1cmF0aW9uID0gey4uLm5ld1N0YXRlW3RyZWVJZF0uY29uZmlndXJhdGlvbiwgLi4ue2lzRnVsbHlMb2FkZWQ6IHRydWV9fTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNldENvbmZpZ3VyYXRpb24oc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLmNvbmZpZ3VyYXRpb24gPSB7Li4ubmV3U3RhdGVbdHJlZUlkXS5jb25maWd1cmF0aW9uLCAuLi5hY3Rpb24ucGF5bG9hZC5jb25maWd1cmF0aW9ufTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVNlbGVjdE5vZGVBY3Rpb24pIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBub2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkO1xuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkID0gbm9kZSA/IG5vZGUuaWQgOiBudWxsO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVSZWR1Y2VyKHN0YXRlOiBJVHJlZVN0YXRlID0ge30sIGFjdGlvbjogVHJlZUFjdGlvbik6IElUcmVlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9SRUdJU1RFUjpcbiAgICAgIHJldHVybiByZWdpc3RlclRyZWUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBzYXZlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gcmVtb3ZlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0lOU0VSVF9OT0RFOlxuICAgICAgcmV0dXJuIGluc2VydE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gbG9hZE5vZGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfTU9WRV9OT0RFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gbW92ZU5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TRVRfQUxMX05PREVTOlxuICAgICAgcmV0dXJuIHNldEFsbE5vZGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfTUFSS19BU19GVUxMWV9MT0FERUQ6XG4gICAgICByZXR1cm4gbWFya1RyZWVBc0Z1bGx5TG9hZGVkKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VUX0NPTkZJR1VSQVRJT046XG4gICAgICByZXR1cm4gc2V0Q29uZmlndXJhdGlvbihzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VYUEFORF9OT0RFOlxuICAgICAgcmV0dXJuIGV4cGFuZE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9DT0xMQVBTRV9OT0RFOlxuICAgICAgcmV0dXJuIGNvbGxhcHNlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFTEVDVF9OT0RFOlxuICAgICAgcmV0dXJuIHNlbGVjdE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERTpcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VESVRfTk9ERV9TVEFSVDpcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQUQ6XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREU6XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREU6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCB0cmVlU3RhdGVTZWxlY3RvcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElUcmVlU3RhdGU+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPElUcmVlU3RhdGU+KCd0cmVlcycpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJlZVNlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElUcmVlRGF0YT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IodHJlZVN0YXRlU2VsZWN0b3IsIChzdGF0ZTogSVRyZWVTdGF0ZSkgPT4gc3RhdGVbdHJlZUlkXSB8fCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVDb25maWd1cmF0aW9uU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgSVRyZWVDb25maWd1cmF0aW9uPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcih0cmVlU3RhdGVTZWxlY3RvciwgKHN0YXRlOiBJVHJlZVN0YXRlKSA9PiBzdGF0ZVt0cmVlSWRdLmNvbmZpZ3VyYXRpb24gfHwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRlZE5vZGVzU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nW10+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKHRyZWVTdGF0ZVNlbGVjdG9yLCAoc3RhdGU6IElUcmVlU3RhdGUpID0+IHN0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgfHwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0ZWROb2RlU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcih0cmVlU3RhdGVTZWxlY3RvciwgKHN0YXRlOiBJVHJlZVN0YXRlKSA9PiBzdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkIHx8IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZz4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IodHJlZVN0YXRlU2VsZWN0b3IsIChzdGF0ZTogSVRyZWVTdGF0ZSkgPT4gc3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQgfHwgbnVsbCk7XG59XG4iXX0=