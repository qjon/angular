import { __read, __spread, __assign, __decorate, __metadata } from 'tslib';
import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { distinctUntilChanged, map, filter, withLatestFrom, catchError, mergeMap, switchMap, take } from 'rxjs/operators';
import * as _isEqual from 'lodash.isequal';
import { combineLatest, Subscription, empty, BehaviorSubject, Subject, merge, of } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation, Injectable, Directive, ElementRef, Renderer, InjectionToken, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContextMenuService, ContextMenuModule } from 'ngx-contextmenu';
import { Actions, Effect, ofType, EffectsModule } from '@ngrx/effects';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DndModule, DraggableComponent } from 'ng2-dnd';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var TreeActionTypes = {
    TREE_SAVE_NODE: 'TREE_SAVE_NODE',
    TREE_SAVE_NODE_SUCCESS: 'TREE_SAVE_NODE_SUCCESS',
    TREE_SAVE_NODE_ERROR: 'TREE_SAVE_NODE_ERROR',
    TREE_DELETE_NODE: 'TREE_DELETE_NODE',
    TREE_DELETE_NODE_SUCCESS: 'TREE_DELETE_NODE_SUCCESS',
    TREE_DELETE_NODE_ERROR: 'TREE_DELETE_NODE_ERROR',
    TREE_EDIT_NODE_START: 'TREE_EDIT_NODE_START',
    TREE_COLLAPSE_NODE: 'TREE_COLLAPSE_NODE',
    TREE_EXPAND_NODE: 'TREE_EXPAND_NODE',
    TREE_INSERT_NODE: 'TREE_INSERT_NODE',
    TREE_LOAD: 'TREE_LOAD',
    TREE_LOAD_PATH: 'TREE_LOAD_PATH',
    TREE_LOAD_SUCCESS: 'TREE_LOAD_SUCCESS',
    TREE_LOAD_ERROR: 'TREE_LOAD_ERROR',
    TREE_MARK_AS_FULLY_LOADED: 'TREE_MARK_AS_FULLY_LOADED',
    TREE_MOVE_NODE: 'TREE_MOVE_NODE',
    TREE_MOVE_NODE_SUCCESS: 'TREE_MOVE_NODE_SUCCESS',
    TREE_MOVE_NODE_ERROR: 'TREE_MOVE_NODE_ERROR',
    TREE_REGISTER: 'TREE_REGISTER',
    TREE_SELECT_NODE: 'TREE_SELECT_NODE',
    TREE_SET_ALL_NODES: 'TREE_SET_ALL_NODES',
    TREE_SET_CONFIGURATION: 'TREE_SET_CONFIGURATION',
};
var TreeCollapseNodeAction = /** @class */ (function () {
    function TreeCollapseNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_COLLAPSE_NODE;
    }
    return TreeCollapseNodeAction;
}());
var TreeDeleteNodeAction = /** @class */ (function () {
    function TreeDeleteNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE;
    }
    return TreeDeleteNodeAction;
}());
var TreeDeleteNodeErrorAction = /** @class */ (function () {
    function TreeDeleteNodeErrorAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE_ERROR;
    }
    return TreeDeleteNodeErrorAction;
}());
var TreeDeleteNodeSuccessAction = /** @class */ (function () {
    function TreeDeleteNodeSuccessAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE_SUCCESS;
    }
    return TreeDeleteNodeSuccessAction;
}());
var TreeEditNodeStartAction = /** @class */ (function () {
    function TreeEditNodeStartAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_EDIT_NODE_START;
    }
    return TreeEditNodeStartAction;
}());
var TreeExpandNodeAction = /** @class */ (function () {
    function TreeExpandNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_EXPAND_NODE;
    }
    return TreeExpandNodeAction;
}());
var TreeInsertNodeAction = /** @class */ (function () {
    function TreeInsertNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_INSERT_NODE;
    }
    return TreeInsertNodeAction;
}());
var TreeLoadNodesAction = /** @class */ (function () {
    function TreeLoadNodesAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD;
    }
    return TreeLoadNodesAction;
}());
var TreeLoadNodesErrorAction = /** @class */ (function () {
    function TreeLoadNodesErrorAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_ERROR;
    }
    return TreeLoadNodesErrorAction;
}());
var TreeLoadNodesSuccessAction = /** @class */ (function () {
    function TreeLoadNodesSuccessAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_SUCCESS;
    }
    return TreeLoadNodesSuccessAction;
}());
var TreeLoadPathAction = /** @class */ (function () {
    function TreeLoadPathAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_PATH;
    }
    return TreeLoadPathAction;
}());
var TreeMarkAsFullyLoadedAction = /** @class */ (function () {
    function TreeMarkAsFullyLoadedAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MARK_AS_FULLY_LOADED;
    }
    return TreeMarkAsFullyLoadedAction;
}());
var TreeMoveNodeAction = /** @class */ (function () {
    function TreeMoveNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE;
    }
    return TreeMoveNodeAction;
}());
var TreeMoveNodeErrorAction = /** @class */ (function () {
    function TreeMoveNodeErrorAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE_ERROR;
    }
    return TreeMoveNodeErrorAction;
}());
var TreeMoveNodeSuccessAction = /** @class */ (function () {
    function TreeMoveNodeSuccessAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE_SUCCESS;
    }
    return TreeMoveNodeSuccessAction;
}());
var TreeRegisterAction = /** @class */ (function () {
    function TreeRegisterAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_REGISTER;
    }
    return TreeRegisterAction;
}());
var TreeSaveNodeAction = /** @class */ (function () {
    function TreeSaveNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE;
    }
    return TreeSaveNodeAction;
}());
var TreeSaveNodeErrorAction = /** @class */ (function () {
    function TreeSaveNodeErrorAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE_ERROR;
    }
    return TreeSaveNodeErrorAction;
}());
var TreeSaveNodeSuccessAction = /** @class */ (function () {
    function TreeSaveNodeSuccessAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE_SUCCESS;
    }
    return TreeSaveNodeSuccessAction;
}());
var TreeSelectNodeAction = /** @class */ (function () {
    function TreeSelectNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SELECT_NODE;
    }
    return TreeSelectNodeAction;
}());
var TreeSetAllNodesAction = /** @class */ (function () {
    function TreeSetAllNodesAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SET_ALL_NODES;
    }
    return TreeSetAllNodesAction;
}());
var TreeSetConfigurationAction = /** @class */ (function () {
    function TreeSetConfigurationAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SET_CONFIGURATION;
    }
    return TreeSetConfigurationAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NEW_NODE_ID = 'ri-new-node-id';
/** @type {?} */
var emptyTreeData = {
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
function copyState(state$$1, treeId) {
    if (treeId === void 0) { treeId = null; }
    /** @type {?} */
    var newState = __assign({}, state$$1);
    // todo: find better way to clone object
    if (treeId) {
        newState[treeId] = {
            nodes: {
                entities: __assign({}, state$$1[treeId].nodes.entities),
                previouslySelected: state$$1[treeId].nodes.previouslySelected,
                selected: state$$1[treeId].nodes.selected,
                rootNodes: __spread(state$$1[treeId].nodes.rootNodes),
                expanded: __spread(state$$1[treeId].nodes.expanded),
            },
            configuration: __assign({}, state$$1[treeId].configuration)
        };
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function removeNode(state$$1, action) {
    /** @type {?} */
    var newState = copyState(state$$1, action.payload.treeId);
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
        var parent_1 = __assign({}, treeState.nodes.entities[parentId]);
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
function loadNodes(state$$1, action) {
    /** @type {?} */
    var newState = copyState(state$$1, action.payload.treeId);
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
            nodeData.parents = __spread(parent.parents, [parent.id]);
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
function expandNode(state$$1, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state$$1, treeId);
    /** @type {?} */
    var nodeId = action.payload.id;
    // newState[treeId].nodes.entities[nodeId] = Object.assign({}, newState[treeId].nodes.entities[nodeId], {isExpanded: true});
    newState[treeId].nodes.expanded = __spread(newState[treeId].nodes.expanded, [nodeId]);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function collapseNode(state$$1, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state$$1, treeId);
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
function insertNode(state$$1, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state$$1, treeId);
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
        newState[treeId].nodes.rootNodes = __spread(newState[treeId].nodes.rootNodes, [NEW_NODE_ID]);
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function saveNode(state$$1, action) {
    /** @type {?} */
    var newState = copyState(state$$1, action.payload.treeId);
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
            newNode.parents = __spread(parent.parents, [parent.id]);
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
function moveNode(state$$1, action) {
    /** @type {?} */
    var newState = copyState(state$$1, action.payload.treeId);
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
        newNode.parents = __spread(newParent.parents, [newParent.id]);
    }
    else {
        treeData.nodes.rootNodes.push(newNode.id);
        newNode.parents = [];
    }
    // replace node data
    treeState[newNode.id] = __assign({}, newNode);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function registerTree(state$$1, action) {
    /** @type {?} */
    var newState = copyState(state$$1);
    newState[action.payload.treeId] = {
        nodes: {
            entities: __assign({}, emptyTreeData.nodes.entities),
            previouslySelected: emptyTreeData.nodes.previouslySelected,
            selected: emptyTreeData.nodes.selected,
            rootNodes: __spread(emptyTreeData.nodes.rootNodes),
            expanded: __spread(emptyTreeData.nodes.expanded)
        },
        configuration: __assign({}, emptyTreeData.configuration)
    };
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function setAllNodes(state$$1, action) {
    /** @type {?} */
    var newState = copyState(state$$1, action.payload.treeId);
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
        node.parents = __spread(parents);
        if (node.children.length > 0) {
            /** @type {?} */
            var newParents_1 = __spread(parents, [node.id]);
            node.children.forEach(function (childId) { return updateParents(nodes, childId, newParents_1); });
        }
    }
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function markTreeAsFullyLoaded(state$$1, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state$$1, treeId);
    newState[treeId].configuration = __assign({}, newState[treeId].configuration, { isFullyLoaded: true });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function setConfiguration(state$$1, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var newState = copyState(state$$1, treeId);
    newState[treeId].configuration = __assign({}, newState[treeId].configuration, action.payload.configuration);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function selectNode(state$$1, action) {
    /** @type {?} */
    var treeId = action.payload.treeId;
    /** @type {?} */
    var node = action.payload.node;
    /** @type {?} */
    var newState = copyState(state$$1, treeId);
    newState[treeId].nodes.previouslySelected = newState[treeId].nodes.selected;
    newState[treeId].nodes.selected = node ? node.id : null;
    return newState;
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function treeReducer(state$$1, action) {
    if (state$$1 === void 0) { state$$1 = {}; }
    switch (action.type) {
        case TreeActionTypes.TREE_REGISTER:
            return registerTree(state$$1, action);
        case TreeActionTypes.TREE_SAVE_NODE_SUCCESS:
            return saveNode(state$$1, action);
        case TreeActionTypes.TREE_DELETE_NODE_SUCCESS:
            return removeNode(state$$1, action);
        case TreeActionTypes.TREE_INSERT_NODE:
            return insertNode(state$$1, action);
        case TreeActionTypes.TREE_LOAD_SUCCESS:
            return loadNodes(state$$1, action);
        case TreeActionTypes.TREE_MOVE_NODE_SUCCESS:
            return moveNode(state$$1, action);
        case TreeActionTypes.TREE_SET_ALL_NODES:
            return setAllNodes(state$$1, action);
        case TreeActionTypes.TREE_MARK_AS_FULLY_LOADED:
            return markTreeAsFullyLoaded(state$$1, action);
        case TreeActionTypes.TREE_SET_CONFIGURATION:
            return setConfiguration(state$$1, action);
        case TreeActionTypes.TREE_EXPAND_NODE:
            return expandNode(state$$1, action);
        case TreeActionTypes.TREE_COLLAPSE_NODE:
            return collapseNode(state$$1, action);
        case TreeActionTypes.TREE_SELECT_NODE:
            return selectNode(state$$1, action);
        case TreeActionTypes.TREE_DELETE_NODE:
        case TreeActionTypes.TREE_EDIT_NODE_START:
        case TreeActionTypes.TREE_LOAD:
        case TreeActionTypes.TREE_MOVE_NODE:
        case TreeActionTypes.TREE_SAVE_NODE:
            return state$$1;
        default:
            return state$$1;
    }
}
/** @type {?} */
var treeStateSelector = createFeatureSelector('trees');
/**
 * @param {?} treeId
 * @return {?}
 */
function treeSelector(treeId) {
    return createSelector(treeStateSelector, function (state$$1) { return state$$1[treeId] || null; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
function treeConfigurationSelector(treeId) {
    return createSelector(treeStateSelector, function (state$$1) { return state$$1[treeId].configuration || null; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
function expandedNodesSelector(treeId) {
    return createSelector(treeStateSelector, function (state$$1) { return state$$1[treeId].nodes.expanded || []; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
function selectedNodeSelector(treeId) {
    return createSelector(treeStateSelector, function (state$$1) { return state$$1[treeId].nodes.selected || null; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
function previouslySelectedNodeSelector(treeId) {
    return createSelector(treeStateSelector, function (state$$1) { return state$$1[treeId].nodes.previouslySelected || null; });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isEqual = _isEqual;
var TreeModel = /** @class */ (function () {
    function TreeModel(store, treeData$, configuration, _fullyLoaded) {
        if (_fullyLoaded === void 0) { _fullyLoaded = false; }
        var _this = this;
        this.store = store;
        this.treeData$ = treeData$;
        this.configuration = configuration;
        this._fullyLoaded = _fullyLoaded;
        this.selected = null;
        this.previouslySelected = null;
        this.subscription = new Subscription();
        this.nodes$ = this.treeData$
            .pipe(distinctUntilChanged(function (prev, next) {
            return isEqual(prev.nodes.entities, next.nodes.entities);
        }), map(function (treeData) { return treeData.nodes.entities; }));
        this.rootNodes$ = this.treeData$
            .pipe(map(function (treeData) { return treeData.nodes.rootNodes.map(function (id) { return treeData.nodes.entities[id]; }).sort(_this.sortNodes); }), distinctUntilChanged());
        this.currentSelectedNode$ = this.treeData$
            .pipe(map(function (treeData) {
            /** @type {?} */
            var nodesData = treeData.nodes;
            /** @type {?} */
            var selectedId = nodesData.selected;
            return selectedId ? nodesData.entities[selectedId] : null;
        }));
        this.initConfiguration();
        this.subscribeExpanded();
        this.subscribeSelected();
        this.subscribePreviouslySelected();
    }
    Object.defineProperty(TreeModel.prototype, "treeId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.configuration.treeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "isFullyLoaded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fullyLoaded;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TreeModel.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    TreeModel.prototype.getParentsList = /**
     * @return {?}
     */
    function () {
        return combineLatest(this.currentSelectedNode$, this.nodes$)
            .pipe(map(function (_a) {
            var _b = __read(_a, 2), currentNode = _b[0], nodes = _b[1];
            if (!Boolean(currentNode)) {
                return [];
            }
            /** @type {?} */
            var parents = currentNode.parents.map(function (id) { return nodes[id]; });
            parents.push(currentNode);
            return parents;
        }));
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    TreeModel.prototype.getChildren = /**
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        return this.nodes$
            .pipe(map(function (state$$1) { return _this.getNodesByParentId(state$$1, nodeId); }), map(function (nodes) {
            return __spread(nodes).sort(_this.sortNodes);
        }));
    };
    /**
     * @param {?} path
     * @return {?}
     */
    TreeModel.prototype.initPath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.store.dispatch(new TreeLoadPathAction({ treeId: this.configuration.treeId, ids: path }));
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeModel.prototype.isExpanded = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!node) {
            return false;
        }
        return this.expanded.has(node.id);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeModel.prototype.isSelected = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!node) {
            return false;
        }
        return this.selected === node.id;
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    TreeModel.prototype.wasPreviouslySelected = /**
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.previouslySelected === nodeId;
    };
    /**
     * @private
     * @return {?}
     */
    TreeModel.prototype.initConfiguration = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultConfiguration = {
            disableMoveNodes: false,
            dragZone: null,
            dropZone: null,
            treeId: 'tree',
            showAddButton: true,
            isAnimation: false,
        };
        for (var key in defaultConfiguration) {
            if (this.configuration[key] === undefined) {
                this.configuration[key] = defaultConfiguration[key];
            }
        }
    };
    /**
     * @private
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    TreeModel.prototype.getNodesByParentId = /**
     * @private
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    function (state$$1, id) {
        return Object.keys(state$$1)
            .filter(function (key) { return state$$1[key].parentId === id; })
            .map(function (key) { return state$$1[key]; });
    };
    /**
     * @private
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    TreeModel.prototype.sortNodes = /**
     * @private
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        if (second.id === NEW_NODE_ID) {
            return -1;
        }
        return first.name > second.name ? 1 : -1;
    };
    /**
     * @private
     * @return {?}
     */
    TreeModel.prototype.subscribeExpanded = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.store
            .pipe(select(expandedNodesSelector(this.treeId)))
            .subscribe(function (expanded) { return _this.expanded = new Set(expanded); }));
    };
    /**
     * @private
     * @return {?}
     */
    TreeModel.prototype.subscribeSelected = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.store
            .pipe(select(selectedNodeSelector(this.treeId)))
            .subscribe(function (selected) { return _this.selected = selected; }));
    };
    /**
     * @private
     * @return {?}
     */
    TreeModel.prototype.subscribePreviouslySelected = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.store
            .pipe(select(previouslySelectedNodeSelector(this.treeId)))
            .subscribe(function (selected) { return _this.previouslySelected = selected; }));
    };
    return TreeModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function expand() {
    return trigger('expand', [
        state('*', style({ 'overflow-y': 'hidden' })),
        state('void', style({ 'overflow-y': 'hidden' })),
        transition('* => void', [
            style({ height: '*' }),
            animate(300, style({ height: 0 }))
        ]),
        transition('void => *', [
            style({ height: '0' }),
            animate(300, style({ height: '*' }))
        ])
    ]);
}
var ItemComponent = /** @class */ (function () {
    function ItemComponent(contextMenuService, actions$, store, cdr) {
        this.contextMenuService = contextMenuService;
        this.actions$ = actions$;
        this.store = store;
        this.cdr = cdr;
        this.isExpanded = false;
        this.isSelected = false;
        /**
         * Form field to change data name
         */
        this.nameField = new FormControl();
        this.isEditMode = false;
        this.children$ = empty();
        this.isStartSave = false;
        this.subscription = new Subscription();
    }
    Object.defineProperty(ItemComponent.prototype, "node", {
        get: /**
         * @return {?}
         */
        function () {
            return this._node;
        },
        /**
         * Node instance
         */
        set: /**
         * Node instance
         * @param {?} node
         * @return {?}
         */
        function (node) {
            this._node = node;
            this.initEditModeIfNeeded(node);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} values
     * @return {?}
     */
    ItemComponent.prototype.ngOnChanges = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        // if node is added to the tree then some part of nodes is moving down
        // and the new one is inserted, then all sub nodes should be rewritten
        /** @type {?} */
        var node = values.node;
        if (node && !node.firstChange && node.previousValue.id !== node.currentValue.id) {
            this.children$ = this.getChildren();
        }
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.children$ = this.getChildren();
        this.subscribeForOnEdit();
        this.subscription.add(this.store
            .pipe(select(previouslySelectedNodeSelector(this.node.treeId)), filter(function (previouslySelected) { return previouslySelected === _this.node.id; }))
            .subscribe(function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * Collapse node
     */
    /**
     * Collapse node
     * @return {?}
     */
    ItemComponent.prototype.collapse = /**
     * Collapse node
     * @return {?}
     */
    function () {
        this.store.dispatch(new TreeCollapseNodeAction({
            treeId: this.treeModel.treeId,
            id: this.node.id,
        }));
    };
    /**
     * Expand node
     */
    /**
     * Expand node
     * @return {?}
     */
    ItemComponent.prototype.expand = /**
     * Expand node
     * @return {?}
     */
    function () {
        this.store.dispatch(new TreeExpandNodeAction({ treeId: this.treeModel.treeId, id: this.node.id }));
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        if (this.isStartSave) {
            this.isStartSave = false;
        }
        else {
            this.undoChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (event.keyCode === 27) {
            this.undoChanges();
        }
        else if (event.keyCode === 13) {
            this.isStartSave = true;
            /** @type {?} */
            var node = {
                id: this.node.id,
                treeId: this.node.treeId,
                name: this.nameField.value,
                parentId: this.node.parentId,
                children: this.node.children,
                parents: this.node.parents,
                isExpanded: false
            };
            this.store.dispatch(new TreeSaveNodeAction({
                treeId: this.treeModel.treeId,
                node: node,
            }));
            this.isEditMode = false;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ItemComponent.prototype.onContextMenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.treeModel.configuration.disableContextMenu) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: $event,
                item: this.node
            });
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.onSelect = /**
     * @return {?}
     */
    function () {
        if (this.isSelected) {
            this.store.dispatch(new TreeSelectNodeAction({
                treeId: this.treeModel.treeId,
                node: null,
            }));
        }
        else {
            this.store.dispatch(new TreeSelectNodeAction({
                treeId: this.treeModel.treeId,
                node: this.node,
            }));
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemComponent.prototype.trackByFn = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.id;
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.getChildren = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.treeModel.getChildren(this.node.id);
    };
    /**
     * @protected
     * @param {?} node
     * @return {?}
     */
    ItemComponent.prototype.initEditModeIfNeeded = /**
     * @protected
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!node) {
            return;
        }
        this.isEditMode = node.id === NEW_NODE_ID;
        if (this.isEditMode) {
            this.nameField.setValue('');
            this.setFocus();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.isNewNode = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.node.id === NEW_NODE_ID;
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.setFocus = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.input.nativeElement.focus(); }, 0);
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.subscribeForOnEdit = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.actions$
            .ofType(TreeActionTypes.TREE_EDIT_NODE_START)
            .pipe(filter(function (action) { return action.payload.node === _this.node; }))
            .subscribe(function (action) {
            _this.nameField.setValue(_this.node.name);
            _this.isEditMode = true;
            _this.cdr.markForCheck();
            _this.setFocus();
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.undoChanges = /**
     * @protected
     * @return {?}
     */
    function () {
        this.isEditMode = false;
        if (this.isNewNode()) {
            this.store.dispatch(new TreeDeleteNodeAction({
                treeId: this.treeModel.treeId,
                node: this.node,
            }));
        }
    };
    ItemComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'ri-tree-item',
                    template: "<div class=\"tree-item\"\n     [ngClass]=\"{'tree-item-selected': isSelected && !treeModel.wasPreviouslySelected(node.id)}\"\n     (contextmenu)=\"onContextMenu($event)\"\n     riDroppable\n     riDraggable\n     [dragZone]=\"treeModel.configuration.dragZone\"\n     [dropConfig]=\"{dropAllowedCssClass: 'drop-allowed', dropZone: treeModel.configuration.dropZone}\"\n     [data]=\"node\"\n     id=\"node-{{node.id}}\"\n>\n  <i *ngIf=\"!isExpanded\" (click)=\"expand()\" class=\"fa fa-caret-right pointer\"></i>\n  <i *ngIf=\"isExpanded\" (click)=\"collapse()\" class=\"fa fa-caret-down pointer\"></i>\n  <span *ngIf=\"!isEditMode\" class=\"tree-item-name\" (click)=\"onSelect()\">{{node.name}}</span>\n  <form name=\"form\">\n    <input #inputElement type=\"text\" class=\"form-control\" *ngIf=\"isEditMode\" [formControl]=\"nameField\"\n           name=\"name\" (keydown)=\"onChange($event)\" (blur)=\"onBlur()\"/>\n  </form>\n</div>\n<div class=\"tree\" *ngIf=\"isExpanded\" [@expand]>\n  <ri-tree-item *ngFor=\"let child of children$ | async; trackBy: trackByFn\"\n                [node]=\"child\"\n                [treeModel]=\"treeModel\"\n                [isExpanded]=\"treeModel.isExpanded(child)\"\n                [isSelected]=\"treeModel.isSelected(child)\"\n                [contextMenu]=\"contextMenu\"></ri-tree-item>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [expand()],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ItemComponent.ctorParameters = function () { return [
        { type: ContextMenuService },
        { type: Actions },
        { type: Store },
        { type: ChangeDetectorRef }
    ]; };
    ItemComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['inputElement',] }],
        node: [{ type: Input }],
        treeModel: [{ type: Input }],
        contextMenu: [{ type: Input }],
        isExpanded: [{ type: Input }],
        isSelected: [{ type: Input }]
    };
    return ItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragAndDrop = /** @class */ (function () {
    function DragAndDrop() {
        this.dropStream$ = new Subject();
        this.dragStream$ = new BehaviorSubject(null);
        this.drop$ = this.dropStream$
            .pipe(withLatestFrom(this.dragStream$), map(function (_a) {
            var _b = __read(_a, 2), dropNode = _b[0], dragNode = _b[1];
            return { dragNode: dragNode, dropNode: dropNode, type: dragNode.type };
        }));
    }
    /**
     * @param {?} dragElement
     * @return {?}
     */
    DragAndDrop.prototype.dragStart = /**
     * @param {?} dragElement
     * @return {?}
     */
    function (dragElement) {
        this.dragStream$.next(dragElement);
    };
    /**
     * @param {?} dropElement
     * @return {?}
     */
    DragAndDrop.prototype.dragEnd = /**
     * @param {?} dropElement
     * @return {?}
     */
    function (dropElement) {
        this.dropStream$.next(dropElement);
    };
    /**
     * @return {?}
     */
    DragAndDrop.prototype.getDragStream = /**
     * @return {?}
     */
    function () {
        return this.dragStream$;
    };
    /**
     * @return {?}
     */
    DragAndDrop.prototype.getLastDragElement = /**
     * @return {?}
     */
    function () {
        return this.dragStream$.getValue();
    };
    DragAndDrop.DROP_DATA_TYPE = 'TREE_NODE';
    DragAndDrop.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DragAndDrop.ctorParameters = function () { return []; };
    return DragAndDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeComponent = /** @class */ (function () {
    function TreeComponent(store, dragAndDrop) {
        this.store = store;
        this.dragAndDrop = dragAndDrop;
        /**
         * List of default options for context menu
         */
        this.defaultOptions = [
            {
                name: 'onEdit',
                text: 'RI_TREE_LBL_EDIT_NODE',
                iconCls: 'fa fa-edit'
            },
            {
                name: 'onDelete',
                text: 'RI_TREE_LBL_REMOVE_NODE',
                iconCls: 'fa fa-trash'
            }
        ];
        /**
         * List of context menu items
         */
        this.menuList = [];
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    TreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    TreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.registerMove();
        this.rootNodes$ = this.treeModel.rootNodes$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe(function (node) { return _this.currentSelectedNode = node; }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TreeComponent.prototype.ngOnChanges = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.menuList = [];
        this.defaultOptions.forEach(function (item) { return _this.menuList.push(item); });
    };
    /**
     * @return {?}
     */
    TreeComponent.prototype.onAdd = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parentId = this.currentSelectedNode ? this.currentSelectedNode.id : null;
        this.store.dispatch(new TreeInsertNodeAction({ treeId: this.treeModel.treeId, parentId: parentId }));
    };
    /**
     * On select item from context menu
     *
     * @param name - name of the event
     * @param node - data item
     */
    /**
     * On select item from context menu
     *
     * @param {?} name - name of the event
     * @param {?} node - data item
     * @return {?}
     */
    TreeComponent.prototype.onContextMenuClick = /**
     * On select item from context menu
     *
     * @param {?} name - name of the event
     * @param {?} node - data item
     * @return {?}
     */
    function (name, node) {
        switch (name) {
            case 'onEdit':
                event.stopPropagation();
                this.store.dispatch(new TreeEditNodeStartAction({ node: node }));
                break;
            case 'onDelete':
                this.store.dispatch(new TreeDeleteNodeAction({ treeId: this.treeModel.treeId, node: node }));
                break;
            default:
                console.warn('Unknown context menu action: ' + name);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TreeComponent.prototype.trackByFn = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.id;
    };
    /**
     * Register data "move event"
     */
    /**
     * Register data "move event"
     * @protected
     * @return {?}
     */
    TreeComponent.prototype.registerMove = /**
     * Register data "move event"
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.treeModel.configuration.disableMoveNodes) {
            return;
        }
        this.dragAndDrop.drop$
            .pipe(filter(function (data) {
            if (data.type === DragAndDrop.DROP_DATA_TYPE) {
                if (data.dropNode) {
                    return data.dropNode.data.treeId === _this.treeModel.treeId;
                }
                else {
                    return data.dragNode.data.treeId === _this.treeModel.treeId;
                }
            }
            else {
                if (data.dropNode && data.dropNode.zones && data.dropNode.zones.indexOf(data.dragNode.zoneId) === -1) {
                    return false;
                }
                return true;
            }
        }))
            .subscribe(function (data) {
            /** @type {?} */
            var dropNode = data.dropNode ? data.dropNode.data : null;
            _this.store.dispatch(new TreeMoveNodeAction({
                sourceOfDroppedData: data.type,
                treeId: _this.treeModel.treeId,
                oldNode: data.dragNode.data,
                node: dropNode
            }));
        });
    };
    TreeComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'ri-tree',
                    template: "<div class=\"tree\">\n  <button *ngIf=\"treeModel.configuration.showAddButton\" class=\"btn btn-dark add-node-button\" (click)=\"onAdd()\">\n    <i class=\"fa fa-plus\"></i> {{'RI_TREE_LBL_ADD_NODE' | translate}}\n  </button>\n  <!--@formatter:off-->\n  <div #customTemplate><ng-content></ng-content></div>\n  <!--@formatter:on-->\n  <div *ngIf=\"customTemplate.childNodes.length === 0\">\n    <ri-tree-item\n      class=\"root-node\"\n      *ngFor=\"let node of rootNodes$ | async; trackBy: trackByFn\"\n      [node]=\"node\"\n      [treeModel]=\"treeModel\"\n      [isSelected]=\"treeModel.isSelected(node)\"\n      [isExpanded]=\"treeModel.isExpanded(node)\"\n      [contextMenu]=\"contextMenu\"></ri-tree-item>\n  </div>\n  <ri-dropzone [treeModel]=\"treeModel\"></ri-dropzone>\n  <context-menu id=\"context-menu-{{treeModel.treeId}}\" #contextMenu>\n    <ng-template *ngFor=\"let menuItem of menuList\" contextMenuItem let-item\n                 (execute)=\"onContextMenuClick(menuItem.name, $event.item)\">\n      <span class=\"{{menuItem.iconCls}}\" style=\"width: 20px; display: inline-block;\"></span>\n      {{menuItem.text | translate}}\n    </ng-template>\n  </context-menu>\n</div>\n",
                    styles: [".tree{list-style-type:none;margin:0;padding-left:0;position:relative}.tree .dropdown{position:inherit}.tree .dropdown-menu{position:absolute!important}.tree .pointer{cursor:pointer}.tree .tree{margin-left:20px}.tree .tree-edit-btn,.tree .tree-remove-btn{display:none}.tree .tree-item{padding:2px 0}.tree .tree-item.drop-allowed .tree-item-name{background-color:rgba(255,0,0,.3)}.tree .tree-item.tree-item-selected>.tree-item-name{padding:0 1px;border:1px solid #4684ee;background-color:#549dee}.tree .tree-item i{text-align:center}.tree .tree-item .no-children{display:inline-block;width:8px}.tree .tree-item .tree-item-name{display:inline-block;line-height:22px;height:22px;padding:0 2px;cursor:pointer}.tree .tree-item .tree-item-name:hover{background-color:rgba(161,197,238,.2)}.tree .tree-item .tree-item-name:hover .tree-edit-btn,.tree .tree-item .tree-item-name:hover .tree-remove-btn,.tree .tree-item form{display:inline-block}.tree .tree-item form input{width:auto}"]
                }] }
    ];
    /** @nocollapse */
    TreeComponent.ctorParameters = function () { return [
        { type: Store },
        { type: DragAndDrop }
    ]; };
    TreeComponent.propDecorators = {
        treeModel: [{ type: Input }],
        contextMenu: [{ type: ViewChild, args: ['contextMenu',] }]
    };
    return TreeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, renderer, dragAndDrop) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dragZone = null;
        this.sourceType = DragAndDrop.DROP_DATA_TYPE;
        this.dragEnabled = true;
        renderer.listen(el.nativeElement, 'dragstart', function ($event) {
            if (_this.dragEnabled) {
                _this.onDragStart($event);
            }
        });
        renderer.listen(el.nativeElement, 'dragend', function () {
            // on drag end we reset last drag element (this event is fired after drop)
            _this.dragAndDrop.dragStart(null);
        });
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    DraggableDirective.prototype.onDragStart = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.dragAndDrop.dragStart({ zoneId: this.dragZone, data: this.data, type: this.sourceType });
        $event.dataTransfer.effectAllowed = 'copy';
        $event.dataTransfer.dropEffect = 'copy';
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.draggable = this.dragEnabled;
        if (!this.data) {
            throw new Error('DraggableDirective needs data');
        }
    };
    DraggableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[riDraggable]'
                },] }
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer },
        { type: DragAndDrop }
    ]; };
    DraggableDirective.propDecorators = {
        data: [{ type: Input }],
        dragZone: [{ type: Input }],
        sourceType: [{ type: Input }]
    };
    return DraggableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el, renderer, dragAndDrop) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dropConfig = {};
        this.isDropAllowed = function () {
            /** @type {?} */
            var lastDragElement = this.dragAndDrop.getLastDragElement();
            /** @type {?} */
            var source = lastDragElement.data;
            /** @type {?} */
            var target = this.data;
            /** @type {?} */
            var dropZone = this.dropConfig.dropZone;
            if (dropZone && dropZone.length > 0 && dropZone.indexOf(lastDragElement.zoneId) === -1) {
                return false;
            }
            // todo: check drag and drop zones
            return !(source === target || target.id === source.parentId || target.parents.indexOf(source.id) > -1);
        };
        renderer.listen(el.nativeElement, 'dragover', function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var dropAllowed = _this.isDropAllowed();
            _this.changeTargetCursor($event, dropAllowed);
            _this.toggleDropClass(dropAllowed);
        });
        renderer.listen(el.nativeElement, 'dragleave', function ($event) {
            $event.preventDefault();
            _this.toggleDropClass(false);
        });
        renderer.listen(el.nativeElement, 'drop', function () {
            _this.toggleDropClass(false);
            if (_this.isDropAllowed()) {
                _this.dragAndDrop.dragEnd({ zones: _this.dropConfig.dropZone, data: _this.data });
            }
        });
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initConfig();
        if (!this.data) {
            throw new Error('DroppableDirective needs data');
        }
    };
    /**
     * Add or remove additional class when drop allowed
     * @param dropAllowed
     */
    /**
     * Add or remove additional class when drop allowed
     * @private
     * @param {?=} dropAllowed
     * @return {?}
     */
    DroppableDirective.prototype.toggleDropClass = /**
     * Add or remove additional class when drop allowed
     * @private
     * @param {?=} dropAllowed
     * @return {?}
     */
    function (dropAllowed) {
        if (dropAllowed === void 0) { dropAllowed = false; }
        this.renderer.setElementClass(this.el.nativeElement, this.dropConfig.dropAllowedCssClass, dropAllowed);
    };
    /**
     * Change drag event cursor
     * @param $event
     * @param add
     */
    /**
     * Change drag event cursor
     * @private
     * @param {?} $event
     * @param {?=} add
     * @return {?}
     */
    DroppableDirective.prototype.changeTargetCursor = /**
     * Change drag event cursor
     * @private
     * @param {?} $event
     * @param {?=} add
     * @return {?}
     */
    function ($event, add) {
        if (add === void 0) { add = false; }
        /** @type {?} */
        var cursorType = add ? 'copy' : 'none';
        $event.dataTransfer.effectAllowed = cursorType;
        $event.dataTransfer.dropEffect = cursorType;
    };
    /**
     * initialize configuration options, use default or passed
     */
    /**
     * initialize configuration options, use default or passed
     * @private
     * @return {?}
     */
    DroppableDirective.prototype.initConfig = /**
     * initialize configuration options, use default or passed
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultConfig = {
            dropAllowedCssClass: 'drop-allowed'
        };
        for (var key in defaultConfig) {
            if (defaultConfig.hasOwnProperty(key)) {
                this.dropConfig[key] = this.dropConfig[key] || defaultConfig[key];
            }
        }
    };
    DroppableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[riDroppable]'
                },] }
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer },
        { type: DragAndDrop }
    ]; };
    DroppableDirective.propDecorators = {
        data: [{ type: Input }],
        dropConfig: [{ type: Input }]
    };
    return DroppableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropzoneComponent = /** @class */ (function () {
    function DropzoneComponent(dragAndDrop) {
        var _this = this;
        this.dragAndDrop = dragAndDrop;
        this.dropZone = [];
        /** @type {?} */
        var isDragStart$ = this.dragAndDrop.getDragStream()
            .pipe(map(function (dragElement) {
            /** @type {?} */
            var isDragElement = !!dragElement && !!dragElement.data;
            if (isDragElement) {
                if (dragElement.type === DragAndDrop.DROP_DATA_TYPE) {
                    /** @type {?} */
                    var isNotRootElement = dragElement.data.parentId;
                    /** @type {?} */
                    var isFromCurrentTree = dragElement.data.treeId === _this.treeModel.treeId;
                    return (isNotRootElement && isFromCurrentTree) ? true : false;
                }
                else {
                    return true;
                }
            }
            return false;
        }));
        /** @type {?} */
        var isDragEnd$ = this.dragAndDrop.drop$
            .pipe(map(function (data) {
            return false;
        }));
        this.isOpen$ = merge(isDragStart$, isDragEnd$);
    }
    /**
     * @return {?}
     */
    DropzoneComponent.prototype.onDrop = /**
     * @return {?}
     */
    function () {
        this.dragAndDrop.dragEnd(null);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DropzoneComponent.prototype.onDragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
    };
    DropzoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-dropzone',
                    template: "<div *ngIf=\"isOpen$ | async\" (drop)=\"onDrop()\" (dragover)=\"onDragOver($event)\" class=\"dropzone\">\n  {{'RI_TREE_LBL_DROP_ZONE' | translate}}\n</div>\n",
                    styles: [".dropzone{display:inline-block;border:1px dotted red;padding:10px;background-color:rgba(255,0,0,.3)}"]
                }] }
    ];
    /** @nocollapse */
    DropzoneComponent.ctorParameters = function () { return [
        { type: DragAndDrop }
    ]; };
    DropzoneComponent.propDecorators = {
        treeModel: [{ type: Input }],
        dropZone: [{ type: Input }]
    };
    return DropzoneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NodeDispatcherService = /** @class */ (function () {
    function NodeDispatcherService() {
        this.nodeServices = {};
    }
    /**
     * @param {?} name
     * @param {?} nodeService
     * @return {?}
     */
    NodeDispatcherService.prototype.registerService = /**
     * @param {?} name
     * @param {?} nodeService
     * @return {?}
     */
    function (name, nodeService) {
        this.nodeServices[name] = nodeService;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NodeDispatcherService.prototype.get = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (Boolean(this.nodeServices[name])) {
            return this.nodeServices[name];
        }
        else {
            // default node service provider
            throw Error("No tree service with name " + name);
        }
    };
    NodeDispatcherService.decorators = [
        { type: Injectable }
    ];
    return NodeDispatcherService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeEffectsService = /** @class */ (function () {
    function TreeEffectsService(actions$, nodeDispatcherService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.nodeDispatcherService = nodeDispatcherService;
        this.store = store;
        this.register$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_REGISTER), map(function (action) {
            if (action.payload.silent) {
                return new TreeSetAllNodesAction({ treeId: action.payload.treeId, nodes: action.payload.nodes });
            }
            else {
                return new TreeLoadNodesAction({ treeId: action.payload.treeId, id: null });
            }
        }));
        this.load$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_LOAD), mergeMap(function (action) { return _this.loadNodes(action.payload.treeId, action.payload.id)
            .pipe(map(function (nodesData) { return new TreeLoadNodesSuccessAction({
            treeId: action.payload.treeId,
            id: action.payload.id,
            nodes: nodesData
        }); }), catchError(function () { return of(new TreeLoadNodesErrorAction({
            treeId: action.payload.treeId,
            id: action.payload.id
        })); })); }));
        this.delete$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_DELETE_NODE), switchMap(function (action) { return _this.deleteNode(action.payload.treeId, action.payload.node)
            .pipe(map(function () { return new TreeDeleteNodeSuccessAction(__assign({}, action.payload)); }), catchError(function () { return of(new TreeDeleteNodeErrorAction(__assign({}, action.payload))); })); }));
        this.save$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_SAVE_NODE), switchMap(function (action) { return _this.saveNode(action.payload.treeId, __assign({}, action.payload.node))
            .pipe(map(function (node) { return new TreeSaveNodeSuccessAction({
            treeId: action.payload.treeId,
            oldNode: action.payload.node,
            node: node
        }); }), catchError(function () { return of(new TreeSaveNodeErrorAction(__assign({}, action.payload))); })); }));
        this.move$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_MOVE_NODE), filter(function (action) {
            return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
        }), switchMap(function (action) {
            /** @type {?} */
            var source = (/** @type {?} */ (__assign({}, action.payload.oldNode)));
            /** @type {?} */
            var target = Boolean(action.payload.node) ? __assign({}, action.payload.node) : null;
            return _this.moveNode(action.payload.treeId, source, target)
                .pipe(map(function (node) {
                return {
                    treeId: action.payload.treeId,
                    oldNode: action.payload.oldNode,
                    node: node
                };
            }), switchMap(function (data) {
                return _this.store.select(treeConfigurationSelector(action.payload.treeId))
                    .pipe(take(1), map(function (configuration) {
                    return {
                        configuration: configuration,
                        data: data
                    };
                }));
            }), catchError(function () {
                /** @type {?} */
                var newAction = new TreeMoveNodeErrorAction({
                    treeId: action.payload.treeId,
                    source: action.payload.oldNode,
                    target: action.payload.node
                });
                return of(newAction);
            }));
        }), mergeMap(function (value) {
            /** @type {?} */
            var data = value.data;
            /** @type {?} */
            var actions = [
                new TreeMoveNodeSuccessAction({ treeId: data.treeId, source: data.oldNode, target: data.node }),
            ];
            if (!value.configuration.isFullyLoaded) {
                actions.push(new TreeLoadNodesAction({ treeId: data.treeId, id: data.node.parentId }));
            }
            return actions;
        }));
        this.expand$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_EXPAND_NODE), switchMap(function (action) {
            return _this.store
                .pipe(select(treeSelector(action.payload.treeId)), take(1), filter(function (treeState) { return !treeState.configuration.isFullyLoaded; }), map(function () {
                return new TreeLoadNodesAction({
                    treeId: action.payload.treeId,
                    id: action.payload.id
                });
            }));
        }));
        this.insert$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_INSERT_NODE), filter(function (action) { return !!action.payload.parentId; }), map(function (action) {
            return new TreeExpandNodeAction({ treeId: action.payload.treeId, id: action.payload.parentId });
        }));
        this.initPathForFullyLoadedTreeEffect$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_LOAD_PATH), switchMap(function (action) {
            return _this.store.select(treeConfigurationSelector(action.payload.treeId))
                .pipe(take(1), map(function (configuration) {
                return { action: action, configuration: configuration };
            }));
        }), map(function (value) {
            var action = value.action, configuration = value.configuration;
            if (configuration.isFullyLoaded) {
                return action.payload.ids.map(function (id) { return new TreeExpandNodeAction({ treeId: action.payload.treeId, id: id }); });
            }
            else {
                /** @type {?} */
                var loadActions = action.payload.ids.map(function (id) { return _this.loadNodes(action.payload.treeId, id); });
                return combineLatest(loadActions)
                    .pipe(take(1), mergeMap(function (data) {
                    /** @type {?} */
                    var loadSuccess = data.map(function (nodes, index) { return new TreeLoadNodesSuccessAction({
                        treeId: action.payload.treeId,
                        id: action.payload.ids[index],
                        nodes: nodes
                    }); });
                    /** @type {?} */
                    var expandNodes = action.payload.ids.map(function (id) { return new TreeExpandNodeAction({
                        treeId: action.payload.treeId,
                        id: id
                    }); });
                    return __spread(loadSuccess, expandNodes);
                }));
            }
        }), mergeMap(function (actions) { return actions; }));
    }
    /**
     * @protected
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeEffectsService.prototype.deleteNode = /**
     * @protected
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        /** @type {?} */
        var nodeService = this.nodeDispatcherService.get(treeId);
        return node.id ? nodeService.remove(node.id) : of(node);
    };
    /**
     * @protected
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeEffectsService.prototype.loadNodes = /**
     * @protected
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        /** @type {?} */
        var nodeService = this.nodeDispatcherService.get(treeId);
        return nodeService.load(id);
    };
    /**
     * @protected
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeEffectsService.prototype.saveNode = /**
     * @protected
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        /** @type {?} */
        var nodeService = this.nodeDispatcherService.get(treeId);
        if (node.id === NEW_NODE_ID) {
            return nodeService.add(node, node.parentId);
        }
        else {
            return nodeService.update(node);
        }
    };
    /**
     * @protected
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    TreeEffectsService.prototype.moveNode = /**
     * @protected
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (treeId, source, target) {
        /** @type {?} */
        var nodeService = this.nodeDispatcherService.get(treeId);
        return nodeService.move(source, target);
    };
    TreeEffectsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TreeEffectsService.ctorParameters = function () { return [
        { type: Actions },
        { type: NodeDispatcherService },
        { type: Store }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "register$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "load$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "delete$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "save$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "move$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "expand$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "insert$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "initPathForFullyLoadedTreeEffect$", void 0);
    return TreeEffectsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeModelGeneratorService = /** @class */ (function () {
    function TreeModelGeneratorService(nodeDispatcherService, store) {
        this.nodeDispatcherService = nodeDispatcherService;
        this.store = store;
    }
    /**
     * @param {?} configuration
     * @param {?=} nodes
     * @return {?}
     */
    TreeModelGeneratorService.prototype.createTreeModel = /**
     * @param {?} configuration
     * @param {?=} nodes
     * @return {?}
     */
    function (configuration, nodes) {
        if (nodes === void 0) { nodes = null; }
        /** @type {?} */
        var treeId = configuration.treeId;
        /** @type {?} */
        var isFullyLoaded = Boolean(nodes);
        // register new tree in store
        this.store.dispatch(new TreeRegisterAction({
            treeId: treeId,
            silent: isFullyLoaded,
            nodes: nodes
        }));
        // init tree configuration
        this.store.dispatch(new TreeSetConfigurationAction({ treeId: treeId, configuration: configuration }));
        if (Boolean(nodes)) {
            this.nodeDispatcherService.get(treeId).setAllNodes(nodes);
            this.store.dispatch(new TreeMarkAsFullyLoadedAction({ treeId: treeId }));
        }
        /** @type {?} */
        var folders$ = this.store.select(treeSelector(configuration.treeId));
        return new TreeModel(this.store, folders$, configuration, isFullyLoaded);
    };
    TreeModelGeneratorService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TreeModelGeneratorService.ctorParameters = function () { return [
        { type: NodeDispatcherService },
        { type: Store }
    ]; };
    return TreeModelGeneratorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParentsListComponent = /** @class */ (function () {
    function ParentsListComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ParentsListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.parents$ = this.treeModel.getParentsList();
    };
    /**
     * @param {?} node
     * @param {?} isCurrentSelectedNode
     * @return {?}
     */
    ParentsListComponent.prototype.selectNode = /**
     * @param {?} node
     * @param {?} isCurrentSelectedNode
     * @return {?}
     */
    function (node, isCurrentSelectedNode) {
        if (!isCurrentSelectedNode) {
            this.store.dispatch(new TreeSelectNodeAction({
                treeId: this.treeModel.treeId,
                node: node,
            }));
        }
    };
    ParentsListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-tree-parents-list',
                    template: "<ul class=\"ri-tree-parents-list\">\n  <li class=\"fa fa-home\" (click)=\"selectNode(null, false)\"></li>\n  <li *ngFor=\"let node of parents$ | async; last as isLast\" (click)=\"selectNode(node, isLast)\">{{node.name}}\n  </li>\n</ul>\n",
                    styles: [".ri-tree-parents-list{list-style-type:none;margin:0;padding:0}.ri-tree-parents-list li{display:inline-block;cursor:pointer;color:#777}.ri-tree-parents-list li:after,.ri-tree-parents-list li:first-child,.ri-tree-parents-list li:last-child{color:#000}.ri-tree-parents-list li:not(:last-child):after{content:'/';display:inline-block;width:10px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ParentsListComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    ParentsListComponent.propDecorators = {
        treeModel: [{ type: Input }]
    };
    return ParentsListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NODE_SERVICE = new InjectionToken('NODE_SERVICE');
var NodeService = /** @class */ (function () {
    function NodeService(http) {
        this.http = http;
        this.apiConfig = {
            addUrl: '/api/nodes',
            getUrl: '/api/nodes',
            moveUrl: '/api/nodes/move',
            updateUrl: '/api/nodes',
            removeUrl: '/api/nodes',
        };
    }
    Object.defineProperty(NodeService.prototype, "treeId", {
        get: /**
         * @return {?}
         */
        function () {
            return 'tree';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} nodes
     * @return {?}
     */
    NodeService.prototype.setAllNodes = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
    };
    /**
     * @param {?=} nodeId
     * @return {?}
     */
    NodeService.prototype.load = /**
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        if (nodeId === void 0) { nodeId = ''; }
        /** @type {?} */
        var params = new HttpParams().set('nodeId', nodeId);
        return this.http.get(this.getPath('GET', nodeId), { params: params });
    };
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    NodeService.prototype.add = /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    function (node, parentNodeId) {
        if (parentNodeId === void 0) { parentNodeId = null; }
        return this.http.post(this.getPath('CREATE', parentNodeId), {
            node: node,
            parentNodeId: parentNodeId
        });
    };
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    NodeService.prototype.move = /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    function (srcNode, targetNode) {
        /** @type {?} */
        var srcId = srcNode.id;
        /** @type {?} */
        var targetId = targetNode ? targetNode.id : null;
        return this.http.put(this.getPath('MOVE', srcId, targetId), { source: srcId, target: targetId });
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NodeService.prototype.update = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.http.put(this.getPath('UPDATE', node.id), node);
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.remove = /**
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        /** @type {?} */
        var params = new HttpParams().set('nodeId', nodeId);
        return this.http.delete(this.getPath('REMOVE', nodeId), { params: params });
    };
    /**
     * @protected
     * @param {?} type
     * @param {?} nodeId
     * @param {?=} destNodeId
     * @return {?}
     */
    NodeService.prototype.getPath = /**
     * @protected
     * @param {?} type
     * @param {?} nodeId
     * @param {?=} destNodeId
     * @return {?}
     */
    function (type, nodeId, destNodeId) {
        if (destNodeId === void 0) { destNodeId = null; }
        if (!this.apiConfig) {
            throw new Error('No API configuration for Tree');
        }
        /** @type {?} */
        var urlMap = {
            'GET': this.apiConfig.getUrl,
            'CREATE': this.apiConfig.addUrl,
            'REMOVE': this.apiConfig.removeUrl,
            'UPDATE': this.apiConfig.updateUrl,
            'MOVE': this.apiConfig.moveUrl
        };
        /** @type {?} */
        var path = this.replaceNodeId(urlMap[type], nodeId);
        if (destNodeId) {
            path = this.replaceDestNodeId(path, destNodeId);
        }
        return path;
    };
    /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.replaceNodeId = /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    function (url, nodeId) {
        return url.replace('{nodeId}', nodeId);
    };
    /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.replaceDestNodeId = /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    function (url, nodeId) {
        return url.replace('{destNodeId}', nodeId);
    };
    NodeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NodeService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return NodeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeInitializerService = /** @class */ (function () {
    function TreeInitializerService(treeModelGeneratorService, nodeDispatcherService) {
        this.treeModelGeneratorService = treeModelGeneratorService;
        this.nodeDispatcherService = nodeDispatcherService;
    }
    /**
     * @param {?} treeConfiguration
     * @param {?} treeApi
     * @param {?=} loadedNodes
     * @return {?}
     */
    TreeInitializerService.prototype.init = /**
     * @param {?} treeConfiguration
     * @param {?} treeApi
     * @param {?=} loadedNodes
     * @return {?}
     */
    function (treeConfiguration, treeApi, loadedNodes) {
        this.nodeDispatcherService.registerService(treeConfiguration.treeId, treeApi);
        return this.treeModelGeneratorService.createTreeModel(treeConfiguration, loadedNodes);
    };
    TreeInitializerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TreeInitializerService.ctorParameters = function () { return [
        { type: TreeModelGeneratorService },
        { type: NodeDispatcherService }
    ]; };
    return TreeInitializerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NODE_DISPATCHER_TOKEN = new InjectionToken('NodeDispatcherService');
var TreeModule = /** @class */ (function () {
    function TreeModule(translate) {
        this.translate = translate;
        this.setTranslationForEN();
        this.setTranslationForPL();
        this.translate.setDefaultLang('en');
    }
    /**
     * @return {?}
     */
    TreeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TreeModule,
            providers: [
                DragAndDrop,
                NodeDispatcherService,
                TreeEffectsService,
                TreeInitializerService,
                TreeModelGeneratorService,
            ]
        };
    };
    /**
     * @return {?}
     */
    TreeModule.forFeature = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TreeModule,
            providers: [],
        };
    };
    /**
     * @private
     * @return {?}
     */
    TreeModule.prototype.setTranslationForPL = /**
     * @private
     * @return {?}
     */
    function () {
        this.translate.setTranslation('pl', {
            RI_TREE_LBL_ADD_NODE: 'Dodaj',
            RI_TREE_LBL_EDIT_NODE: 'Edytuj',
            RI_TREE_LBL_REMOVE_NODE: 'Usuń',
            RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj'
        });
    };
    /**
     * @private
     * @return {?}
     */
    TreeModule.prototype.setTranslationForEN = /**
     * @private
     * @return {?}
     */
    function () {
        this.translate.setTranslation('en', {
            RI_TREE_LBL_ADD_NODE: 'Add data',
            RI_TREE_LBL_EDIT_NODE: 'Edit data',
            RI_TREE_LBL_REMOVE_NODE: 'Delete data',
            RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level'
        });
    };
    TreeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ContextMenuModule,
                        DndModule,
                        EffectsModule.forFeature([TreeEffectsService]),
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        StoreModule.forFeature('trees', treeReducer),
                        TranslateModule,
                    ],
                    declarations: [
                        TreeComponent,
                        ItemComponent,
                        DraggableDirective,
                        DroppableDirective,
                        DropzoneComponent,
                        ParentsListComponent,
                    ],
                    exports: [
                        TreeComponent,
                        ItemComponent,
                        DraggableDirective,
                        DroppableDirective,
                        DropzoneComponent,
                        DraggableComponent,
                        ParentsListComponent,
                        StoreModule,
                        EffectsModule,
                    ],
                    providers: [
                        { provide: NODE_SERVICE, useClass: NodeService, multi: true }
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    /** @nocollapse */
    TreeModule.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    return TreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NODE_DISPATCHER_TOKEN, TreeModule, TreeComponent, expand, ItemComponent, TreeModel, NODE_SERVICE, NodeService, ParentsListComponent, NodeDispatcherService, TreeModelGeneratorService, TreeInitializerService, TreeActionTypes, TreeCollapseNodeAction, TreeDeleteNodeAction, TreeDeleteNodeErrorAction, TreeDeleteNodeSuccessAction, TreeEditNodeStartAction, TreeExpandNodeAction, TreeInsertNodeAction, TreeLoadNodesAction, TreeLoadNodesErrorAction, TreeLoadNodesSuccessAction, TreeLoadPathAction, TreeMarkAsFullyLoadedAction, TreeMoveNodeAction, TreeMoveNodeErrorAction, TreeMoveNodeSuccessAction, TreeRegisterAction, TreeSaveNodeAction, TreeSaveNodeErrorAction, TreeSaveNodeSuccessAction, TreeSelectNodeAction, TreeSetAllNodesAction, TreeSetConfigurationAction, TreeEffectsService, treeReducer, treeSelector, treeConfigurationSelector, expandedNodesSelector, selectedNodeSelector, previouslySelectedNodeSelector, NEW_NODE_ID, emptyTreeData, treeStateSelector, DragAndDrop, DraggableDirective, DroppableDirective, DropzoneComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnbi1hbmd1bGFyMi10cmVlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zdG9yZS90cmVlUmVkdWNlci50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvbW9kZWxzL1RyZWVNb2RlbC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvaXRlbS9pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvZHJhZ0FuZERyb3AvZHJhZ0FuZERyb3Auc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvdHJlZS5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL2RyYWdBbmREcm9wL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL2RyYWdBbmREcm9wL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL2RyYWdBbmREcm9wL2Ryb3B6b25lL2Ryb3B6b25lLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvc2VydmljZS9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvc3RvcmUvdHJlZUVmZmVjdHMuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvc2VydmljZS90cmVlTW9kZWxHZW5lcmF0b3Iuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvcGFyZW50cy1saXN0L3BhcmVudHMtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL3NlcnZpY2Uvbm9kZS5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zZXJ2aWNlL2luaXRpYWxpemVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL3RyZWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7QWN0aW9ufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lDb25maWd1cmF0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGVudW0gVHJlZUFjdGlvblR5cGVzIHtcbiAgVFJFRV9TQVZFX05PREUgPSAnVFJFRV9TQVZFX05PREUnLFxuICBUUkVFX1NBVkVfTk9ERV9TVUNDRVNTID0gJ1RSRUVfU0FWRV9OT0RFX1NVQ0NFU1MnLFxuICBUUkVFX1NBVkVfTk9ERV9FUlJPUiA9ICdUUkVFX1NBVkVfTk9ERV9FUlJPUicsXG4gIFRSRUVfREVMRVRFX05PREUgPSAnVFJFRV9ERUxFVEVfTk9ERScsXG4gIFRSRUVfREVMRVRFX05PREVfU1VDQ0VTUyA9ICdUUkVFX0RFTEVURV9OT0RFX1NVQ0NFU1MnLFxuICBUUkVFX0RFTEVURV9OT0RFX0VSUk9SID0gJ1RSRUVfREVMRVRFX05PREVfRVJST1InLFxuICBUUkVFX0VESVRfTk9ERV9TVEFSVCA9ICdUUkVFX0VESVRfTk9ERV9TVEFSVCcsXG4gIFRSRUVfQ09MTEFQU0VfTk9ERSA9ICdUUkVFX0NPTExBUFNFX05PREUnLFxuICBUUkVFX0VYUEFORF9OT0RFID0gJ1RSRUVfRVhQQU5EX05PREUnLFxuICBUUkVFX0lOU0VSVF9OT0RFID0gJ1RSRUVfSU5TRVJUX05PREUnLFxuICBUUkVFX0xPQUQgPSAnVFJFRV9MT0FEJyxcbiAgVFJFRV9MT0FEX1BBVEggPSAnVFJFRV9MT0FEX1BBVEgnLFxuICBUUkVFX0xPQURfU1VDQ0VTUyA9ICdUUkVFX0xPQURfU1VDQ0VTUycsXG4gIFRSRUVfTE9BRF9FUlJPUiA9ICdUUkVFX0xPQURfRVJST1InLFxuICBUUkVFX01BUktfQVNfRlVMTFlfTE9BREVEID0gJ1RSRUVfTUFSS19BU19GVUxMWV9MT0FERUQnLFxuICBUUkVFX01PVkVfTk9ERSA9ICdUUkVFX01PVkVfTk9ERScsXG4gIFRSRUVfTU9WRV9OT0RFX1NVQ0NFU1MgPSAnVFJFRV9NT1ZFX05PREVfU1VDQ0VTUycsXG4gIFRSRUVfTU9WRV9OT0RFX0VSUk9SID0gJ1RSRUVfTU9WRV9OT0RFX0VSUk9SJyxcbiAgVFJFRV9SRUdJU1RFUiA9ICdUUkVFX1JFR0lTVEVSJyxcbiAgVFJFRV9TRUxFQ1RfTk9ERSA9ICdUUkVFX1NFTEVDVF9OT0RFJyxcbiAgVFJFRV9TRVRfQUxMX05PREVTID0gJ1RSRUVfU0VUX0FMTF9OT0RFUycsXG4gIFRSRUVfU0VUX0NPTkZJR1VSQVRJT04gPSAnVFJFRV9TRVRfQ09ORklHVVJBVElPTidcbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfQ09MTEFQU0VfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVEZWxldGVOb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZURlbGV0ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUVkaXROb2RlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfRURJVF9OT0RFX1NUQVJUO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlRXhwYW5kTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9FWFBBTkRfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVJbnNlcnROb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0lOU0VSVF9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgcGFyZW50SWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUxvYWROb2Rlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUxvYWROb2Rlc0Vycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQURfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nLCBub2RlczogSU91dGVyTm9kZVtdIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTG9hZFBhdGhBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRF9QQVRIO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWRzOiBzdHJpbmdbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX01BUktfQVNfRlVMTFlfTE9BREVEO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1vdmVOb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHNvdXJjZU9mRHJvcHBlZERhdGE6IHN0cmluZywgb2xkTm9kZTogYW55LCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTW92ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBzb3VyY2U6IElPdXRlck5vZGUsIHRhcmdldDogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHNvdXJjZTogSU91dGVyTm9kZSwgdGFyZ2V0OiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlUmVnaXN0ZXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfUkVHSVNURVI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBzaWxlbnQ6IGJvb2xlYW4sIG5vZGVzOiBJT3V0ZXJOb2RlW10gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTYXZlTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2F2ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NBVkVfTk9ERV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSwgb2xkTm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVNlbGVjdE5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VMRUNUX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2V0QWxsTm9kZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VUX0FMTF9OT0RFUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGVzOiBJT3V0ZXJOb2RlW10gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFVF9DT05GSUdVUkFUSU9OO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVHJlZUFjdGlvbiA9XG4gIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb25cbiAgfCBUcmVlRGVsZXRlTm9kZUFjdGlvblxuICB8IFRyZWVEZWxldGVOb2RlRXJyb3JBY3Rpb25cbiAgfCBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlRWRpdE5vZGVTdGFydEFjdGlvblxuICB8IFRyZWVFeHBhbmROb2RlQWN0aW9uXG4gIHwgVHJlZUluc2VydE5vZGVBY3Rpb25cbiAgfCBUcmVlTG9hZE5vZGVzQWN0aW9uXG4gIHwgVHJlZUxvYWROb2Rlc0Vycm9yQWN0aW9uXG4gIHwgVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVMb2FkUGF0aEFjdGlvblxuICB8IFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvblxuICB8IFRyZWVNb3ZlTm9kZUFjdGlvblxuICB8IFRyZWVNb3ZlTm9kZUVycm9yQWN0aW9uXG4gIHwgVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVSZWdpc3RlckFjdGlvblxuICB8IFRyZWVTYXZlTm9kZUFjdGlvblxuICB8IFRyZWVTYXZlTm9kZUVycm9yQWN0aW9uXG4gIHwgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVTZWxlY3ROb2RlQWN0aW9uXG4gIHwgVHJlZVNldEFsbE5vZGVzQWN0aW9uXG4gIHwgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb25cbiAgO1xuIiwiaW1wb3J0IHtJVHJlZUNvbmZpZ3VyYXRpb24sIElUcmVlRGF0YSwgSVRyZWVOb2RlcywgSVRyZWVTdGF0ZX0gZnJvbSAnLi9JVHJlZVN0YXRlJztcbmltcG9ydCB7XG4gIFRyZWVBY3Rpb24sXG4gIFRyZWVBY3Rpb25UeXBlcyxcbiAgVHJlZUNvbGxhcHNlTm9kZUFjdGlvbixcbiAgVHJlZURlbGV0ZU5vZGVTdWNjZXNzQWN0aW9uLFxuICBUcmVlRXhwYW5kTm9kZUFjdGlvbixcbiAgVHJlZUluc2VydE5vZGVBY3Rpb24sXG4gIFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uLFxuICBUcmVlTWFya0FzRnVsbHlMb2FkZWRBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVSZWdpc3RlckFjdGlvbixcbiAgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbixcbiAgVHJlZVNlbGVjdE5vZGVBY3Rpb24sXG4gIFRyZWVTZXRBbGxOb2Rlc0FjdGlvbixcbiAgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb25cbn0gZnJvbSAnLi90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7Y3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvcn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtNZW1vaXplZFNlbGVjdG9yfSBmcm9tICdAbmdyeC9zdG9yZS9zcmMvc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgTkVXX05PREVfSUQgPSAncmktbmV3LW5vZGUtaWQnO1xuXG5leHBvcnQgY29uc3QgZW1wdHlUcmVlRGF0YTogSVRyZWVEYXRhID0ge1xuICBub2Rlczoge1xuICAgIGVudGl0aWVzOiB7fSxcbiAgICBwcmV2aW91c2x5U2VsZWN0ZWQ6IG51bGwsXG4gICAgc2VsZWN0ZWQ6IG51bGwsXG4gICAgcm9vdE5vZGVzOiBbXSxcbiAgICBleHBhbmRlZDogW10sXG4gIH0sXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICBpc0Z1bGx5TG9hZGVkOiBmYWxzZVxuICB9XG59O1xuXG5mdW5jdGlvbiBjb3B5U3RhdGUoc3RhdGU6IElUcmVlU3RhdGUsIHRyZWVJZDogc3RyaW5nID0gbnVsbCkge1xuICBjb25zdCBuZXdTdGF0ZSA9IHsuLi5zdGF0ZX07XG5cbiAgLy8gdG9kbzogZmluZCBiZXR0ZXIgd2F5IHRvIGNsb25lIG9iamVjdFxuICBpZiAodHJlZUlkKSB7XG4gICAgbmV3U3RhdGVbdHJlZUlkXSA9IHtcbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIGVudGl0aWVzOiB7Li4uc3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc30sXG4gICAgICAgIHByZXZpb3VzbHlTZWxlY3RlZDogc3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQsXG4gICAgICAgIHNlbGVjdGVkOiBzdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkLFxuICAgICAgICByb290Tm9kZXM6IFsuLi5zdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2Rlc10sXG4gICAgICAgIGV4cGFuZGVkOiBbLi4uc3RhdGVbdHJlZUlkXS5ub2Rlcy5leHBhbmRlZF0sXG4gICAgICB9LFxuICAgICAgY29uZmlndXJhdGlvbjogey4uLnN0YXRlW3RyZWVJZF0uY29uZmlndXJhdGlvbn1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbik6IElUcmVlU3RhdGUge1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgYWN0aW9uLnBheWxvYWQudHJlZUlkKTtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCB0cmVlU3RhdGUgPSBuZXdTdGF0ZVt0cmVlSWRdO1xuICBjb25zdCBub2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgcGFyZW50SWQgPSBub2RlLnBhcmVudElkO1xuXG4gIGRlbGV0ZSB0cmVlU3RhdGUubm9kZXMuZW50aXRpZXNbbm9kZS5pZF07XG5cbiAgaWYgKHBhcmVudElkKSB7XG4gICAgY29uc3QgcGFyZW50ID0gey4uLnRyZWVTdGF0ZS5ub2Rlcy5lbnRpdGllc1twYXJlbnRJZF19O1xuXG4gICAgaWYgKHBhcmVudC5jaGlsZHJlbikge1xuICAgICAgcGFyZW50LmNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuLmZpbHRlcigoaWQpID0+IGlkICE9PSBub2RlLmlkKTtcbiAgICB9XG4gICAgdHJlZVN0YXRlLm5vZGVzLmVudGl0aWVzW3BhcmVudElkXSA9IHBhcmVudDtcbiAgfSBlbHNlIHtcbiAgICB0cmVlU3RhdGUubm9kZXMucm9vdE5vZGVzID0gdHJlZVN0YXRlLm5vZGVzLnJvb3ROb2Rlcy5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gbm9kZS5pZCk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gbG9hZE5vZGVzKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uKSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBsZXQgcGFyZW50OiBJT3V0ZXJOb2RlIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgcGFyZW50SWQgPSBhY3Rpb24ucGF5bG9hZC5pZDtcblxuICBpZiAocGFyZW50SWQpIHtcbiAgICBwYXJlbnQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW3BhcmVudElkXTtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzID0ge307XG4gIH1cblxuICBhY3Rpb24ucGF5bG9hZC5ub2Rlcy5mb3JFYWNoKChub2RlRGF0YTogSU91dGVyTm9kZSkgPT4ge1xuICAgIG5vZGVEYXRhLnRyZWVJZCA9IHRyZWVJZDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlRGF0YS5pZCk7XG4gICAgICBub2RlRGF0YS5wYXJlbnRzID0gWy4uLnBhcmVudC5wYXJlbnRzLCAuLi5bcGFyZW50LmlkXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVEYXRhLnBhcmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVEYXRhLmlkXSA9IG5vZGVEYXRhO1xuXG4gICAgaWYgKCFwYXJlbnRJZCkge1xuICAgICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlRGF0YS5pZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gZXhwYW5kTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlRXhwYW5kTm9kZUFjdGlvbik6IElUcmVlU3RhdGUge1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCB0cmVlSWQpO1xuICBjb25zdCBub2RlSWQgPSBhY3Rpb24ucGF5bG9hZC5pZDtcblxuICAvLyBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVJZF0gPSBPYmplY3QuYXNzaWduKHt9LCBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVJZF0sIHtpc0V4cGFuZGVkOiB0cnVlfSk7XG4gIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgPSBbLi4ubmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5leHBhbmRlZCwgbm9kZUlkXTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gY29sbGFwc2VOb2RlKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcbiAgY29uc3Qgbm9kZUlkID0gYWN0aW9uLnBheWxvYWQuaWQ7XG5cbiAgLy8gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tub2RlSWRdID0gey4uLm5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZW50aXRpZXNbbm9kZUlkXSwgLi4ue2lzRXhwYW5kZWQ6IGZhbHNlfX07XG4gIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmV4cGFuZGVkLmZpbHRlcigoaWQpID0+IGlkICE9PSBub2RlSWQpO1xuXG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5cbmZ1bmN0aW9uIGluc2VydE5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZUluc2VydE5vZGVBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcbiAgY29uc3QgcGFyZW50SWQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJZDtcbiAgY29uc3QgbmV3Tm9kZTogSU91dGVyTm9kZSA9IHtcbiAgICBpZDogTkVXX05PREVfSUQsXG4gICAgdHJlZUlkOiB0cmVlSWQsXG4gICAgbmFtZTogJ05ldyBkYXRhJyxcbiAgICBwYXJlbnRJZDogcGFyZW50SWQsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIHBhcmVudHM6IFtdLFxuICAgIGlzRXhwYW5kZWQ6IGZhbHNlXG4gIH07XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tORVdfTk9ERV9JRF0gPSBuZXdOb2RlO1xuXG4gIGlmICghcGFyZW50SWQpIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcyA9IFsuLi5uZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcywgTkVXX05PREVfSURdO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBzYXZlTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBjb25zdCBvbGQgPSBhY3Rpb24ucGF5bG9hZC5vbGROb2RlO1xuICBjb25zdCBuZXdOb2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCB0cmVlU3RhdGUgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzO1xuXG4gIGlmICh0cmVlU3RhdGVbTkVXX05PREVfSURdKSB7XG4gICAgZGVsZXRlIHRyZWVTdGF0ZVtORVdfTk9ERV9JRF07XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIHRyZWVTdGF0ZVtvbGQuaWRdO1xuICB9XG5cbiAgY29uc3Qgbm9kZUlkID0gbmV3Tm9kZS5pZDtcbiAgdHJlZVN0YXRlW25vZGVJZF0gPSBuZXdOb2RlO1xuXG4gIGNvbnN0IHBhcmVudElkID0gbmV3Tm9kZS5wYXJlbnRJZDtcbiAgY29uc3QgcGFyZW50ID0gdHJlZVN0YXRlW3BhcmVudElkXSB8fCBudWxsO1xuXG4gIG5ld05vZGUucGFyZW50cyA9IFtdO1xuXG4gIGlmIChwYXJlbnRJZCkge1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlSWQpO1xuXG4gICAgICBuZXdOb2RlLnBhcmVudHMgPSBbLi4ucGFyZW50LnBhcmVudHMsIHBhcmVudC5pZF07XG4gICAgfVxuICB9IGVsc2UgaWYgKG9sZC5pZCA9PT0gTkVXX05PREVfSUQpIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcyA9IG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMucm9vdE5vZGVzLmZpbHRlcigoaWQpID0+IGlkICE9PSBORVdfTk9ERV9JRCk7XG4gICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlSWQpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBtb3ZlTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlTW92ZU5vZGVTdWNjZXNzQWN0aW9uKSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBjb25zdCBvbGROb2RlID0gYWN0aW9uLnBheWxvYWQuc291cmNlO1xuICBjb25zdCBuZXdOb2RlID0gYWN0aW9uLnBheWxvYWQudGFyZ2V0O1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IHRyZWVEYXRhID0gbmV3U3RhdGVbdHJlZUlkXTtcbiAgY29uc3QgdHJlZVN0YXRlID0gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllcztcblxuICAvLyByZW1vdmUgaW5mbyBhYm91dCByZW1vdmVkIGNoaWxkXG4gIGlmIChvbGROb2RlLnBhcmVudElkKSB7XG4gICAgdHJlZVN0YXRlW29sZE5vZGUucGFyZW50SWRdLmNoaWxkcmVuID0gdHJlZVN0YXRlW29sZE5vZGUucGFyZW50SWRdLmNoaWxkcmVuLmZpbHRlcigoaWQpID0+IGlkICE9PSBvbGROb2RlLmlkKTtcbiAgfSBlbHNlIHtcbiAgICB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMgPSB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMuZmlsdGVyKChpZCkgPT4gaWQgIT09IG9sZE5vZGUuaWQpO1xuICB9XG5cbiAgLy8gYWRkIGluZm8gYWJvdXQgbW92ZWQgbm9kZVxuICBpZiAobmV3Tm9kZS5wYXJlbnRJZCkge1xuICAgIGNvbnN0IG5ld1BhcmVudCA9IHRyZWVTdGF0ZVtuZXdOb2RlLnBhcmVudElkXTtcblxuICAgIGlmIChuZXdQYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgIG5ld1BhcmVudC5jaGlsZHJlbi5wdXNoKG5ld05vZGUuaWQpO1xuICAgIH1cblxuICAgIG5ld05vZGUucGFyZW50cyA9IFsuLi5uZXdQYXJlbnQucGFyZW50cywgbmV3UGFyZW50LmlkXTtcbiAgfSBlbHNlIHtcbiAgICB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMucHVzaChuZXdOb2RlLmlkKTtcbiAgICBuZXdOb2RlLnBhcmVudHMgPSBbXTtcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugbm9kZSBkYXRhXG4gIHRyZWVTdGF0ZVtuZXdOb2RlLmlkXSA9IHsuLi5uZXdOb2RlfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJlZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlUmVnaXN0ZXJBY3Rpb24pIHtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUpO1xuXG4gIG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLnRyZWVJZF0gPSB7XG4gICAgbm9kZXM6IHtcbiAgICAgIGVudGl0aWVzOiB7Li4uZW1wdHlUcmVlRGF0YS5ub2Rlcy5lbnRpdGllc30sXG4gICAgICBwcmV2aW91c2x5U2VsZWN0ZWQ6IGVtcHR5VHJlZURhdGEubm9kZXMucHJldmlvdXNseVNlbGVjdGVkLFxuICAgICAgc2VsZWN0ZWQ6IGVtcHR5VHJlZURhdGEubm9kZXMuc2VsZWN0ZWQsXG4gICAgICByb290Tm9kZXM6IFsuLi5lbXB0eVRyZWVEYXRhLm5vZGVzLnJvb3ROb2Rlc10sXG4gICAgICBleHBhbmRlZDogWy4uLmVtcHR5VHJlZURhdGEubm9kZXMuZXhwYW5kZWRdXG4gICAgfSxcbiAgICBjb25maWd1cmF0aW9uOiB7Li4uZW1wdHlUcmVlRGF0YS5jb25maWd1cmF0aW9ufVxuICB9O1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuXG5mdW5jdGlvbiBzZXRBbGxOb2RlcyhzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlU2V0QWxsTm9kZXNBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnRyZWVJZCk7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3Qgbm9kZXMgPSBhY3Rpb24ucGF5bG9hZC5ub2RlcztcbiAgY29uc3QgbmV3Tm9kZXM6IElUcmVlTm9kZXMgPSB7fTtcbiAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IG5vZGVzLm1hcCgobm9kZURhdGE6IElPdXRlck5vZGUpID0+IG5vZGVEYXRhLmlkKTtcblxuICBub2Rlcy5mb3JFYWNoKChub2RlRGF0YTogSU91dGVyTm9kZSkgPT4ge1xuICAgIG5vZGVEYXRhLnRyZWVJZCA9IHRyZWVJZDtcbiAgICBuZXdOb2Rlc1tub2RlRGF0YS5pZF0gPSBub2RlRGF0YTtcblxuICAgIGlmIChub2RlRGF0YS5wYXJlbnRJZCA9PT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlRGF0YS5pZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2Rlcy5mb3JFYWNoKChpZCkgPT4gdXBkYXRlUGFyZW50cyhuZXdOb2RlcywgaWQpKTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzID0gbmV3Tm9kZXM7XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRzKG5vZGVzOiBJVHJlZU5vZGVzLCBub2RlSWQ6IHN0cmluZywgcGFyZW50czogc3RyaW5nW10gPSBbXSk6IHZvaWQge1xuICBjb25zdCBub2RlOiBJT3V0ZXJOb2RlID0gbm9kZXNbbm9kZUlkXTtcblxuICBpZiAobm9kZSkge1xuICAgIG5vZGUucGFyZW50cyA9IFsuLi5wYXJlbnRzXTtcblxuICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSBbLi4ucGFyZW50cywgLi4uW25vZGUuaWRdXTtcblxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkSWQgPT4gdXBkYXRlUGFyZW50cyhub2RlcywgY2hpbGRJZCwgbmV3UGFyZW50cykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrVHJlZUFzRnVsbHlMb2FkZWQoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5jb25maWd1cmF0aW9uID0gey4uLm5ld1N0YXRlW3RyZWVJZF0uY29uZmlndXJhdGlvbiwgLi4ue2lzRnVsbHlMb2FkZWQ6IHRydWV9fTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNldENvbmZpZ3VyYXRpb24oc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLmNvbmZpZ3VyYXRpb24gPSB7Li4ubmV3U3RhdGVbdHJlZUlkXS5jb25maWd1cmF0aW9uLCAuLi5hY3Rpb24ucGF5bG9hZC5jb25maWd1cmF0aW9ufTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVNlbGVjdE5vZGVBY3Rpb24pIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBub2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkO1xuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkID0gbm9kZSA/IG5vZGUuaWQgOiBudWxsO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVSZWR1Y2VyKHN0YXRlOiBJVHJlZVN0YXRlID0ge30sIGFjdGlvbjogVHJlZUFjdGlvbik6IElUcmVlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9SRUdJU1RFUjpcbiAgICAgIHJldHVybiByZWdpc3RlclRyZWUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBzYXZlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gcmVtb3ZlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0lOU0VSVF9OT0RFOlxuICAgICAgcmV0dXJuIGluc2VydE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gbG9hZE5vZGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfTU9WRV9OT0RFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gbW92ZU5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TRVRfQUxMX05PREVTOlxuICAgICAgcmV0dXJuIHNldEFsbE5vZGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfTUFSS19BU19GVUxMWV9MT0FERUQ6XG4gICAgICByZXR1cm4gbWFya1RyZWVBc0Z1bGx5TG9hZGVkKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VUX0NPTkZJR1VSQVRJT046XG4gICAgICByZXR1cm4gc2V0Q29uZmlndXJhdGlvbihzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VYUEFORF9OT0RFOlxuICAgICAgcmV0dXJuIGV4cGFuZE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9DT0xMQVBTRV9OT0RFOlxuICAgICAgcmV0dXJuIGNvbGxhcHNlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFTEVDVF9OT0RFOlxuICAgICAgcmV0dXJuIHNlbGVjdE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERTpcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VESVRfTk9ERV9TVEFSVDpcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQUQ6XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREU6XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREU6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCB0cmVlU3RhdGVTZWxlY3RvcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElUcmVlU3RhdGU+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPElUcmVlU3RhdGU+KCd0cmVlcycpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJlZVNlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElUcmVlRGF0YT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IodHJlZVN0YXRlU2VsZWN0b3IsIChzdGF0ZTogSVRyZWVTdGF0ZSkgPT4gc3RhdGVbdHJlZUlkXSB8fCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVDb25maWd1cmF0aW9uU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgSVRyZWVDb25maWd1cmF0aW9uPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcih0cmVlU3RhdGVTZWxlY3RvciwgKHN0YXRlOiBJVHJlZVN0YXRlKSA9PiBzdGF0ZVt0cmVlSWRdLmNvbmZpZ3VyYXRpb24gfHwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRlZE5vZGVzU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nW10+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKHRyZWVTdGF0ZVNlbGVjdG9yLCAoc3RhdGU6IElUcmVlU3RhdGUpID0+IHN0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgfHwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0ZWROb2RlU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcih0cmVlU3RhdGVTZWxlY3RvciwgKHN0YXRlOiBJVHJlZVN0YXRlKSA9PiBzdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkIHx8IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZz4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IodHJlZVN0YXRlU2VsZWN0b3IsIChzdGF0ZTogSVRyZWVTdGF0ZSkgPT4gc3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQgfHwgbnVsbCk7XG59XG4iLCJpbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0lDb25maWd1cmF0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SVRyZWVEYXRhLCBJVHJlZU5vZGVzLCBJVHJlZVN0YXRlfSBmcm9tICcuLi9zdG9yZS9JVHJlZVN0YXRlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgX2lzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuaW1wb3J0IHtcbiAgZXhwYW5kZWROb2Rlc1NlbGVjdG9yLFxuICBORVdfTk9ERV9JRCxcbiAgcHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yLFxuICBzZWxlY3RlZE5vZGVTZWxlY3RvclxufSBmcm9tICcuLi9zdG9yZS90cmVlUmVkdWNlcic7XG5pbXBvcnQge3NlbGVjdCwgU3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7VHJlZUxvYWRQYXRoQWN0aW9ufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuY29uc3QgaXNFcXVhbCA9IF9pc0VxdWFsO1xuXG5leHBvcnQgY2xhc3MgVHJlZU1vZGVsIHtcblxuICBwdWJsaWMgZ2V0IHRyZWVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb24udHJlZUlkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0Z1bGx5TG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mdWxseUxvYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBub2RlcyQ6IE9ic2VydmFibGU8SVRyZWVOb2Rlcz47XG4gIHB1YmxpYyByb290Tm9kZXMkOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT47XG4gIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWROb2RlJDogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcbiAgcHJpdmF0ZSBleHBhbmRlZDogU2V0PHN0cmluZz47XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgcHJldmlvdXNseVNlbGVjdGVkOiBzdHJpbmcgPSBudWxsO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIHRyZWVEYXRhJDogT2JzZXJ2YWJsZTxJVHJlZURhdGE+LFxuICAgICAgICAgICAgICAgICAgICAgcHVibGljIGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9mdWxseUxvYWRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5ub2RlcyQgPSB0aGlzLnRyZWVEYXRhJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJVHJlZURhdGEsIG5leHQ6IElUcmVlRGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpc0VxdWFsKHByZXYubm9kZXMuZW50aXRpZXMsIG5leHQubm9kZXMuZW50aXRpZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKCh0cmVlRGF0YTogSVRyZWVEYXRhKTogSVRyZWVOb2RlcyA9PiB0cmVlRGF0YS5ub2Rlcy5lbnRpdGllcylcbiAgICAgICk7XG5cbiAgICB0aGlzLnJvb3ROb2RlcyQgPSB0aGlzLnRyZWVEYXRhJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgodHJlZURhdGE6IElUcmVlRGF0YSk6IElPdXRlck5vZGVbXSA9PiB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMubWFwKChpZCkgPT4gdHJlZURhdGEubm9kZXMuZW50aXRpZXNbaWRdKS5zb3J0KHRoaXMuc29ydE5vZGVzKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApO1xuXG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlJCA9IHRoaXMudHJlZURhdGEkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh0cmVlRGF0YTogSVRyZWVEYXRhKTogSU91dGVyTm9kZSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZXNEYXRhID0gdHJlZURhdGEubm9kZXM7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZCA9IG5vZGVzRGF0YS5zZWxlY3RlZDtcblxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZElkID8gbm9kZXNEYXRhLmVudGl0aWVzW3NlbGVjdGVkSWRdIDogbnVsbDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJT3V0ZXJOb2RlLCBuZXh0OiBJT3V0ZXJOb2RlKSA9PiB7XG4gICAgICAgIC8vICAgcmV0dXJuIGlzRXF1YWwocHJldiA/IHByZXYuaWQgOiBudWxsLCBuZXh0ID8gbmV4dC5pZCA6IG51bGwpXG4gICAgICAgIC8vIH0pXG4gICAgICApO1xuXG4gICAgdGhpcy5pbml0Q29uZmlndXJhdGlvbigpO1xuICAgIHRoaXMuc3Vic2NyaWJlRXhwYW5kZWQoKTtcbiAgICB0aGlzLnN1YnNjcmliZVNlbGVjdGVkKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVQcmV2aW91c2x5U2VsZWN0ZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyZW50c0xpc3QoKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSQsXG4gICAgICB0aGlzLm5vZGVzJFxuICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFtjdXJyZW50Tm9kZSwgbm9kZXNdOiBbSU91dGVyTm9kZSwgSVRyZWVOb2Rlc10pOiBJT3V0ZXJOb2RlW10gPT4ge1xuICAgICAgICAgIGlmICghQm9vbGVhbihjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXJlbnRzOiBJT3V0ZXJOb2RlW10gPSBjdXJyZW50Tm9kZS5wYXJlbnRzLm1hcChpZCA9PiBub2Rlc1tpZF0pO1xuXG4gICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZHJlbihub2RlSWQ6IHN0cmluZyB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhdGU6IElUcmVlTm9kZXMpOiBJT3V0ZXJOb2RlW10gPT4gdGhpcy5nZXROb2Rlc0J5UGFyZW50SWQoc3RhdGUsIG5vZGVJZCkpLFxuICAgICAgICBtYXAoKG5vZGVzOiBJT3V0ZXJOb2RlW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gWy4uLm5vZGVzXS5zb3J0KHRoaXMuc29ydE5vZGVzKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgaW5pdFBhdGgocGF0aDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlTG9hZFBhdGhBY3Rpb24oe3RyZWVJZDogdGhpcy5jb25maWd1cmF0aW9uLnRyZWVJZCwgaWRzOiBwYXRofSkpO1xuICB9XG5cbiAgcHVibGljIGlzRXhwYW5kZWQobm9kZTogSU91dGVyTm9kZSk6IGJvb2xlYW4ge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkLmhhcyhub2RlLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKG5vZGU6IElPdXRlck5vZGUpOiBib29sZWFuIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCA9PT0gbm9kZS5pZDtcbiAgfVxuXG4gIHB1YmxpYyB3YXNQcmV2aW91c2x5U2VsZWN0ZWQobm9kZUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c2x5U2VsZWN0ZWQgPT09IG5vZGVJZDtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uID0ge1xuICAgICAgZGlzYWJsZU1vdmVOb2RlczogZmFsc2UsXG4gICAgICBkcmFnWm9uZTogbnVsbCxcbiAgICAgIGRyb3Bab25lOiBudWxsLFxuICAgICAgdHJlZUlkOiAndHJlZScsXG4gICAgICBzaG93QWRkQnV0dG9uOiB0cnVlLFxuICAgICAgaXNBbmltYXRpb246IGZhbHNlLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZWZhdWx0Q29uZmlndXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uW2tleV0gPSBkZWZhdWx0Q29uZmlndXJhdGlvbltrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Tm9kZXNCeVBhcmVudElkKHN0YXRlOiBJVHJlZU5vZGVzLCBpZDogc3RyaW5nIHwgbnVsbCk6IElPdXRlck5vZGVbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKVxuICAgICAgLmZpbHRlcigoa2V5OiBzdHJpbmcpID0+IHN0YXRlW2tleV0ucGFyZW50SWQgPT09IGlkKVxuICAgICAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IHN0YXRlW2tleV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Tm9kZXMoZmlyc3Q6IElPdXRlck5vZGUsIHNlY29uZDogSU91dGVyTm9kZSk6IG51bWJlciB7XG4gICAgaWYgKHNlY29uZC5pZCA9PT0gTkVXX05PREVfSUQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3QubmFtZSA+IHNlY29uZC5uYW1lID8gMSA6IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVFeHBhbmRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnN0b3JlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNlbGVjdChleHBhbmRlZE5vZGVzU2VsZWN0b3IodGhpcy50cmVlSWQpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGV4cGFuZGVkOiBzdHJpbmdbXSkgPT4gdGhpcy5leHBhbmRlZCA9IG5ldyBTZXQoZXhwYW5kZWQpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVNlbGVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KHNlbGVjdGVkTm9kZVNlbGVjdG9yKHRoaXMudHJlZUlkKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzZWxlY3RlZDogc3RyaW5nKSA9PiB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlUHJldmlvdXNseVNlbGVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KHByZXZpb3VzbHlTZWxlY3RlZE5vZGVTZWxlY3Rvcih0aGlzLnRyZWVJZCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc2VsZWN0ZWQ6IHN0cmluZykgPT4gdGhpcy5wcmV2aW91c2x5U2VsZWN0ZWQgPSBzZWxlY3RlZClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbnRleHRNZW51Q29tcG9uZW50LCBDb250ZXh0TWVudVNlcnZpY2V9IGZyb20gJ25neC1jb250ZXh0bWVudSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge1xuICBUcmVlQWN0aW9uVHlwZXMsXG4gIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24sXG4gIFRyZWVEZWxldGVOb2RlQWN0aW9uLFxuICBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbixcbiAgVHJlZUV4cGFuZE5vZGVBY3Rpb24sXG4gIFRyZWVTYXZlTm9kZUFjdGlvbixcbiAgVHJlZVNlbGVjdE5vZGVBY3Rpb25cbn0gZnJvbSAnLi4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge0FjdGlvbnN9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGF9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvc3JjL2FuaW1hdGlvbl9tZXRhZGF0YSc7XG5pbXBvcnQge3NlbGVjdCwgU3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SVRyZWVTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge05FV19OT0RFX0lELCBwcmV2aW91c2x5U2VsZWN0ZWROb2RlU2VsZWN0b3J9IGZyb20gJy4uL3N0b3JlL3RyZWVSZWR1Y2VyJztcbmltcG9ydCB7ZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2VtcHR5LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmQoKTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoJ2V4cGFuZCcsIFtcbiAgICBzdGF0ZSgnKicsIHN0eWxlKHsnb3ZlcmZsb3cteSc6ICdoaWRkZW4nfSkpLFxuICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeydvdmVyZmxvdy15JzogJ2hpZGRlbid9KSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgc3R5bGUoe2hlaWdodDogJyonfSksXG4gICAgICBhbmltYXRlKDMwMCwgc3R5bGUoe2hlaWdodDogMH0pKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHtoZWlnaHQ6ICcwJ30pLFxuICAgICAgYW5pbWF0ZSgzMDAsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKVxuICAgIF0pXG4gIF0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdyaS10cmVlLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtleHBhbmQoKV1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogSW5wdXQgZmllbGQgd2hlcmUgd2UgY2FuIGNoYW5nZSBkYXRhIG5hbWVcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0OiBhbnk7XG5cbiAgLyoqXG4gICAqIE5vZGUgaW5zdGFuY2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbm9kZShub2RlOiBJT3V0ZXJOb2RlKSB7XG4gICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICB0aGlzLmluaXRFZGl0TW9kZUlmTmVlZGVkKG5vZGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBub2RlKCk6IElPdXRlck5vZGUge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb250ZXh0TWVudTogQ29udGV4dE1lbnVDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzRXhwYW5kZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBGb3JtIGZpZWxkIHRvIGNoYW5nZSBkYXRhIG5hbWVcbiAgICovXG4gIHB1YmxpYyBuYW1lRmllbGQgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBwdWJsaWMgaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjaGlsZHJlbiQ6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiA9IGVtcHR5KCk7XG5cbiAgcHJvdGVjdGVkIGlzU3RhcnRTYXZlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcm90ZWN0ZWQgX25vZGU6IElPdXRlck5vZGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb250ZXh0TWVudVNlcnZpY2U6IENvbnRleHRNZW51U2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKHZhbHVlcyk6IHZvaWQge1xuICAgIC8vIGlmIG5vZGUgaXMgYWRkZWQgdG8gdGhlIHRyZWUgdGhlbiBzb21lIHBhcnQgb2Ygbm9kZXMgaXMgbW92aW5nIGRvd25cbiAgICAvLyBhbmQgdGhlIG5ldyBvbmUgaXMgaW5zZXJ0ZWQsIHRoZW4gYWxsIHN1YiBub2RlcyBzaG91bGQgYmUgcmV3cml0dGVuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlcy5ub2RlO1xuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZmlyc3RDaGFuZ2UgJiYgbm9kZS5wcmV2aW91c1ZhbHVlLmlkICE9PSBub2RlLmN1cnJlbnRWYWx1ZS5pZCkge1xuICAgICAgdGhpcy5jaGlsZHJlbiQgPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiQgPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUZvck9uRWRpdCgpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zdG9yZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzZWxlY3QocHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yKHRoaXMubm9kZS50cmVlSWQpKSxcbiAgICAgICAgICBmaWx0ZXIoKHByZXZpb3VzbHlTZWxlY3RlZDogc3RyaW5nKSA9PiBwcmV2aW91c2x5U2VsZWN0ZWQgPT09IHRoaXMubm9kZS5pZClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGFwc2Ugbm9kZVxuICAgKi9cbiAgcHVibGljIGNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24oe1xuICAgICAgdHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsXG4gICAgICBpZDogdGhpcy5ub2RlLmlkLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmQgbm9kZVxuICAgKi9cbiAgcHVibGljIGV4cGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlRXhwYW5kTm9kZUFjdGlvbih7dHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsIGlkOiB0aGlzLm5vZGUuaWR9KSk7XG4gIH1cblxuICBwdWJsaWMgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLmlzU3RhcnRTYXZlKSB7XG4gICAgICB0aGlzLmlzU3RhcnRTYXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5kb0NoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy51bmRvQ2hhbmdlcygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuaXNTdGFydFNhdmUgPSB0cnVlO1xuICAgICAgY29uc3Qgbm9kZTogSU91dGVyTm9kZSA9IHtcbiAgICAgICAgaWQ6IHRoaXMubm9kZS5pZCxcbiAgICAgICAgdHJlZUlkOiB0aGlzLm5vZGUudHJlZUlkLFxuICAgICAgICBuYW1lOiB0aGlzLm5hbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgcGFyZW50SWQ6IHRoaXMubm9kZS5wYXJlbnRJZCxcbiAgICAgICAgY2hpbGRyZW46IHRoaXMubm9kZS5jaGlsZHJlbixcbiAgICAgICAgcGFyZW50czogdGhpcy5ub2RlLnBhcmVudHMsXG4gICAgICAgIGlzRXhwYW5kZWQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2F2ZU5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZSxcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KCRldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy50cmVlTW9kZWwuY29uZmlndXJhdGlvbi5kaXNhYmxlQ29udGV4dE1lbnUpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVTZXJ2aWNlLnNob3cubmV4dCh7XG4gICAgICAgIGNvbnRleHRNZW51OiB0aGlzLmNvbnRleHRNZW51LFxuICAgICAgICBldmVudDogJGV2ZW50LFxuICAgICAgICBpdGVtOiB0aGlzLm5vZGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlOiBudWxsLFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlOiB0aGlzLm5vZGUsXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrQnlGbihpdGVtOiBJT3V0ZXJOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDaGlsZHJlbigpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbC5nZXRDaGlsZHJlbih0aGlzLm5vZGUuaWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRFZGl0TW9kZUlmTmVlZGVkKG5vZGU6IElPdXRlck5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzRWRpdE1vZGUgPSBub2RlLmlkID09PSBORVdfTk9ERV9JRDtcblxuICAgIGlmICh0aGlzLmlzRWRpdE1vZGUpIHtcbiAgICAgIHRoaXMubmFtZUZpZWxkLnNldFZhbHVlKCcnKTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNOZXdOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUuaWQgPT09IE5FV19OT0RFX0lEO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldEZvY3VzKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUZvck9uRWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAgIC5vZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfRURJVF9OT0RFX1NUQVJUKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZUVkaXROb2RlU3RhcnRBY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkLm5vZGUgPT09IHRoaXMubm9kZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChhY3Rpb246IFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5uYW1lRmllbGQuc2V0VmFsdWUodGhpcy5ub2RlLm5hbWUpO1xuICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdW5kb0NoYW5nZXMoKSB7XG4gICAgdGhpcy5pc0VkaXRNb2RlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5pc05ld05vZGUoKSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZURlbGV0ZU5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZTogdGhpcy5ub2RlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SURyYWdBbmREcm9wLCBJRHJhZ0VsZW1lbnQsIElEcm9wRWxlbWVudH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JRHJhZ0FuZERyb3AnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHdpdGhMYXRlc3RGcm9tfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnQW5kRHJvcCB7XG4gIHB1YmxpYyBzdGF0aWMgRFJPUF9EQVRBX1RZUEUgPSAnVFJFRV9OT0RFJztcblxuICBwcm90ZWN0ZWQgZHJvcFN0cmVhbSQ6IFN1YmplY3Q8SURyb3BFbGVtZW50IHwgbnVsbD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcm90ZWN0ZWQgZHJhZ1N0cmVhbSQ6IEJlaGF2aW9yU3ViamVjdDxJRHJhZ0VsZW1lbnQgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHVibGljIGRyb3AkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZHJvcCQgPSB0aGlzLmRyb3BTdHJlYW0kXG4gICAgICAucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5kcmFnU3RyZWFtJCksXG4gICAgICAgIG1hcCgoW2Ryb3BOb2RlLCBkcmFnTm9kZV06IFtJRHJvcEVsZW1lbnQsIElEcmFnRWxlbWVudF0pOiBJRHJhZ0FuZERyb3AgPT4ge1xuICAgICAgICAgIHJldHVybiB7ZHJhZ05vZGU6IGRyYWdOb2RlLCBkcm9wTm9kZTogZHJvcE5vZGUsIHR5cGU6IGRyYWdOb2RlLnR5cGV9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmFnU3RhcnQoZHJhZ0VsZW1lbnQ6IElEcmFnRWxlbWVudCkge1xuICAgIHRoaXMuZHJhZ1N0cmVhbSQubmV4dChkcmFnRWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgZHJhZ0VuZChkcm9wRWxlbWVudDogSURyb3BFbGVtZW50IHwgbnVsbCkge1xuICAgIHRoaXMuZHJvcFN0cmVhbSQubmV4dChkcm9wRWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RHJhZ1N0cmVhbSgpOiBCZWhhdmlvclN1YmplY3Q8SURyYWdFbGVtZW50IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmRyYWdTdHJlYW0kO1xuICB9XG5cbiAgcHVibGljIGdldExhc3REcmFnRWxlbWVudCgpOiBJRHJhZ0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRyYWdTdHJlYW0kLmdldFZhbHVlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7SUNvbnRleHRNZW51fSBmcm9tICcuL2ludGVyZmFjZXMvSUNvbnRleHRNZW51JztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtDb250ZXh0TWVudUNvbXBvbmVudH0gZnJvbSAnbmd4LWNvbnRleHRtZW51JztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0lEcmFnQW5kRHJvcH0gZnJvbSAnLi9pbnRlcmZhY2VzL0lEcmFnQW5kRHJvcCc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lUcmVlU3RhdGV9IGZyb20gJy4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgVHJlZURlbGV0ZU5vZGVBY3Rpb24sXG4gIFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uLFxuICBUcmVlSW5zZXJ0Tm9kZUFjdGlvbixcbiAgVHJlZU1vdmVOb2RlQWN0aW9uXG59IGZyb20gJy4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ3JpLXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRleHRNZW51JykgY29udGV4dE1lbnU6IENvbnRleHRNZW51Q29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGRlZmF1bHQgb3B0aW9ucyBmb3IgY29udGV4dCBtZW51XG4gICAqL1xuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBJQ29udGV4dE1lbnVbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnb25FZGl0JyxcbiAgICAgIHRleHQ6ICdSSV9UUkVFX0xCTF9FRElUX05PREUnLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWVkaXQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnb25EZWxldGUnLFxuICAgICAgdGV4dDogJ1JJX1RSRUVfTEJMX1JFTU9WRV9OT0RFJyxcbiAgICAgIGljb25DbHM6ICdmYSBmYS10cmFzaCdcbiAgICB9XG4gIF07XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgY29udGV4dCBtZW51IGl0ZW1zXG4gICAqL1xuICBwdWJsaWMgbWVudUxpc3Q6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIHJvb3ROb2RlcyQ6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPjtcblxuICBwcm90ZWN0ZWQgY3VycmVudFNlbGVjdGVkTm9kZTogSU91dGVyTm9kZTtcblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGRyYWdBbmREcm9wOiBEcmFnQW5kRHJvcCkge1xuXG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyTW92ZSgpO1xuXG4gICAgdGhpcy5yb290Tm9kZXMkID0gdGhpcy50cmVlTW9kZWwucm9vdE5vZGVzJDtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudHJlZU1vZGVsLmN1cnJlbnRTZWxlY3RlZE5vZGUkXG4gICAgICAgIC5zdWJzY3JpYmUoKG5vZGU6IElPdXRlck5vZGUpID0+IHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSA9IG5vZGUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLm1lbnVMaXN0ID0gW107XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLm1lbnVMaXN0LnB1c2goaXRlbSkpO1xuICB9XG5cbiAgcHVibGljIG9uQWRkKCkge1xuICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlID8gdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlLmlkIDogbnVsbDtcblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVJbnNlcnROb2RlQWN0aW9uKHt0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCwgcGFyZW50SWR9KSk7XG4gIH1cblxuICAvKipcbiAgICogT24gc2VsZWN0IGl0ZW0gZnJvbSBjb250ZXh0IG1lbnVcbiAgICpcbiAgICogQHBhcmFtIG5hbWUgLSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0gbm9kZSAtIGRhdGEgaXRlbVxuICAgKi9cbiAgcHVibGljIG9uQ29udGV4dE1lbnVDbGljayhuYW1lOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUpIHtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnb25FZGl0JzpcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uKHtub2RlfSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29uRGVsZXRlJzpcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZURlbGV0ZU5vZGVBY3Rpb24oe3RyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLCBub2RlfSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybignVW5rbm93biBjb250ZXh0IG1lbnUgYWN0aW9uOiAnICsgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrQnlGbihpdGVtOiBJT3V0ZXJOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBkYXRhIFwibW92ZSBldmVudFwiXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXJNb3ZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyZWVNb2RlbC5jb25maWd1cmF0aW9uLmRpc2FibGVNb3ZlTm9kZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdBbmREcm9wLmRyb3AkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChkYXRhOiBJRHJhZ0FuZERyb3ApID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuZHJvcE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZHJvcE5vZGUuZGF0YS50cmVlSWQgPT09IHRoaXMudHJlZU1vZGVsLnRyZWVJZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLmRyYWdOb2RlLmRhdGEudHJlZUlkID09PSB0aGlzLnRyZWVNb2RlbC50cmVlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmRyb3BOb2RlICYmIGRhdGEuZHJvcE5vZGUuem9uZXMgJiYgZGF0YS5kcm9wTm9kZS56b25lcy5pbmRleE9mKGRhdGEuZHJhZ05vZGUuem9uZUlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiBJRHJhZ0FuZERyb3ApID0+IHtcbiAgICAgICAgY29uc3QgZHJvcE5vZGUgPSBkYXRhLmRyb3BOb2RlID8gZGF0YS5kcm9wTm9kZS5kYXRhIDogbnVsbDtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZU1vdmVOb2RlQWN0aW9uKHtcbiAgICAgICAgICAgIHNvdXJjZU9mRHJvcHBlZERhdGE6IGRhdGEudHlwZSxcbiAgICAgICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICAgICAgb2xkTm9kZTogZGF0YS5kcmFnTm9kZS5kYXRhLFxuICAgICAgICAgICAgbm9kZTogZHJvcE5vZGVcbiAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmlEcmFnZ2FibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGRyYWdab25lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc291cmNlVHlwZTogc3RyaW5nID0gRHJhZ0FuZERyb3AuRFJPUF9EQVRBX1RZUEU7XG5cbiAgcHVibGljIGRyYWdFbmFibGVkID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZHJhZ0FuZERyb3A6IERyYWdBbmREcm9wKSB7XG4gICAgcmVuZGVyZXIubGlzdGVuKGVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnLCAoJGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCkge1xuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0KCRldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW5kZXJlci5saXN0ZW4oZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAvLyBvbiBkcmFnIGVuZCB3ZSByZXNldCBsYXN0IGRyYWcgZWxlbWVudCAodGhpcyBldmVudCBpcyBmaXJlZCBhZnRlciBkcm9wKVxuICAgICAgdGhpcy5kcmFnQW5kRHJvcC5kcmFnU3RhcnQobnVsbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5kcmFnQW5kRHJvcC5kcmFnU3RhcnQoe3pvbmVJZDogdGhpcy5kcmFnWm9uZSwgZGF0YTogdGhpcy5kYXRhLCB0eXBlOiB0aGlzLnNvdXJjZVR5cGV9KTtcblxuICAgICRldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdjb3B5JztcbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRoaXMuZHJhZ0VuYWJsZWQ7XG5cbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcmFnZ2FibGVEaXJlY3RpdmUgbmVlZHMgZGF0YScpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcENvbmZpZyB7XG4gIGRyb3BBbGxvd2VkQ3NzQ2xhc3M/OiBzdHJpbmc7XG4gIGRyb3Bab25lPzogc3RyaW5nW10gfCBudWxsO1xufVxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyaURyb3BwYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IElPdXRlck5vZGU7XG4gIEBJbnB1dCgpIGRyb3BDb25maWc6IERyb3BDb25maWcgPSB7fTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJvdGVjdGVkIGRyYWdBbmREcm9wOiBEcmFnQW5kRHJvcCkge1xuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInLCAoJGV2ZW50KSA9PiB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRyb3BBbGxvd2VkID0gdGhpcy5pc0Ryb3BBbGxvd2VkKCk7XG5cbiAgICAgIHRoaXMuY2hhbmdlVGFyZ2V0Q3Vyc29yKCRldmVudCwgZHJvcEFsbG93ZWQpO1xuICAgICAgdGhpcy50b2dnbGVEcm9wQ2xhc3MoZHJvcEFsbG93ZWQpO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIubGlzdGVuKGVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnLCAoJGV2ZW50KSA9PiB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcENsYXNzKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJvcCcsICgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcENsYXNzKGZhbHNlKTtcblxuICAgICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZCgpKSB7XG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AuZHJhZ0VuZCh7em9uZXM6IHRoaXMuZHJvcENvbmZpZy5kcm9wWm9uZSwgZGF0YTogdGhpcy5kYXRhfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0Q29uZmlnKCk7XG5cbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcm9wcGFibGVEaXJlY3RpdmUgbmVlZHMgZGF0YScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb3IgcmVtb3ZlIGFkZGl0aW9uYWwgY2xhc3Mgd2hlbiBkcm9wIGFsbG93ZWRcbiAgICogQHBhcmFtIGRyb3BBbGxvd2VkXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZURyb3BDbGFzcyhkcm9wQWxsb3dlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmRyb3BDb25maWcuZHJvcEFsbG93ZWRDc3NDbGFzcywgZHJvcEFsbG93ZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Ryb3BBbGxvd2VkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxhc3REcmFnRWxlbWVudCA9IHRoaXMuZHJhZ0FuZERyb3AuZ2V0TGFzdERyYWdFbGVtZW50KCk7XG4gICAgY29uc3Qgc291cmNlID0gbGFzdERyYWdFbGVtZW50LmRhdGE7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRyb3Bab25lID0gdGhpcy5kcm9wQ29uZmlnLmRyb3Bab25lO1xuXG4gICAgaWYgKGRyb3Bab25lICYmIGRyb3Bab25lLmxlbmd0aCA+IDAgJiYgZHJvcFpvbmUuaW5kZXhPZihsYXN0RHJhZ0VsZW1lbnQuem9uZUlkKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0b2RvOiBjaGVjayBkcmFnIGFuZCBkcm9wIHpvbmVzXG4gICAgcmV0dXJuICEoc291cmNlID09PSB0YXJnZXQgfHwgdGFyZ2V0LmlkID09PSBzb3VyY2UucGFyZW50SWQgfHwgdGFyZ2V0LnBhcmVudHMuaW5kZXhPZihzb3VyY2UuaWQpID4gLTEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZHJhZyBldmVudCBjdXJzb3JcbiAgICogQHBhcmFtICRldmVudFxuICAgKiBAcGFyYW0gYWRkXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZVRhcmdldEN1cnNvcigkZXZlbnQ6IERyYWdFdmVudCwgYWRkID0gZmFsc2UpIHtcbiAgICBjb25zdCBjdXJzb3JUeXBlID0gYWRkID8gJ2NvcHknIDogJ25vbmUnO1xuXG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gY3Vyc29yVHlwZTtcbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBjdXJzb3JUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIGluaXRpYWxpemUgY29uZmlndXJhdGlvbiBvcHRpb25zLCB1c2UgZGVmYXVsdCBvciBwYXNzZWRcbiAgICovXG4gIHByaXZhdGUgaW5pdENvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnOiBEcm9wQ29uZmlnID0ge1xuICAgICAgZHJvcEFsbG93ZWRDc3NDbGFzczogJ2Ryb3AtYWxsb3dlZCdcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdENvbmZpZykge1xuICAgICAgaWYgKGRlZmF1bHRDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLmRyb3BDb25maWdba2V5XSA9IHRoaXMuZHJvcENvbmZpZ1trZXldIHx8IGRlZmF1bHRDb25maWdba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuLi9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7SURyYWdBbmREcm9wLCBJRHJhZ0VsZW1lbnR9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSURyYWdBbmREcm9wJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge21lcmdlLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZHJvcHpvbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcHpvbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wem9uZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3B6b25lQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG4gIEBJbnB1dCgpIGRyb3Bab25lOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHB1YmxpYyBpc09wZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkcmFnQW5kRHJvcDogRHJhZ0FuZERyb3ApIHtcblxuICAgIGNvbnN0IGlzRHJhZ1N0YXJ0JCA9IHRoaXMuZHJhZ0FuZERyb3AuZ2V0RHJhZ1N0cmVhbSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkcmFnRWxlbWVudDogSURyYWdFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgY29uc3QgaXNEcmFnRWxlbWVudCA9ICEhZHJhZ0VsZW1lbnQgJiYgISFkcmFnRWxlbWVudC5kYXRhO1xuXG4gICAgICAgICAgaWYgKGlzRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChkcmFnRWxlbWVudC50eXBlID09PSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCBpc05vdFJvb3RFbGVtZW50ID0gZHJhZ0VsZW1lbnQuZGF0YS5wYXJlbnRJZDtcbiAgICAgICAgICAgICAgY29uc3QgaXNGcm9tQ3VycmVudFRyZWUgPSBkcmFnRWxlbWVudC5kYXRhLnRyZWVJZCA9PT0gdGhpcy50cmVlTW9kZWwudHJlZUlkO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoaXNOb3RSb290RWxlbWVudCAmJiBpc0Zyb21DdXJyZW50VHJlZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29uc3QgaXNEcmFnRW5kJCA9IHRoaXMuZHJhZ0FuZERyb3AuZHJvcCRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGRhdGE6IElEcmFnQW5kRHJvcCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICB0aGlzLmlzT3BlbiQgPSBtZXJnZShpc0RyYWdTdGFydCQsIGlzRHJhZ0VuZCQpO1xuICB9XG5cbiAgcHVibGljIG9uRHJvcCgpIHtcbiAgICB0aGlzLmRyYWdBbmREcm9wLmRyYWdFbmQobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgb25EcmFnT3ZlcigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SU5vZGVTZXJ2aWNlfSBmcm9tICcuL25vZGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb2RlRGlzcGF0Y2hlclNlcnZpY2Uge1xuICBwcml2YXRlIG5vZGVTZXJ2aWNlczogeyBba2V5OiBzdHJpbmddOiBJTm9kZVNlcnZpY2UgfSA9IHt9O1xuXG4gIHB1YmxpYyByZWdpc3RlclNlcnZpY2UobmFtZTogc3RyaW5nLCBub2RlU2VydmljZTogSU5vZGVTZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlU2VydmljZXNbbmFtZV0gPSBub2RlU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogSU5vZGVTZXJ2aWNlIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLm5vZGVTZXJ2aWNlc1tuYW1lXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVTZXJ2aWNlc1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCBub2RlIHNlcnZpY2UgcHJvdmlkZXJcbiAgICAgIHRocm93IEVycm9yKGBObyB0cmVlIHNlcnZpY2Ugd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7XG4gIFRyZWVBY3Rpb24sXG4gIFRyZWVBY3Rpb25UeXBlcyxcbiAgVHJlZURlbGV0ZU5vZGVBY3Rpb24sXG4gIFRyZWVEZWxldGVOb2RlRXJyb3JBY3Rpb24sXG4gIFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbixcbiAgVHJlZUV4cGFuZE5vZGVBY3Rpb24sXG4gIFRyZWVJbnNlcnROb2RlQWN0aW9uLFxuICBUcmVlTG9hZE5vZGVzQWN0aW9uLFxuICBUcmVlTG9hZE5vZGVzRXJyb3JBY3Rpb24sXG4gIFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uLFxuICBUcmVlTG9hZFBhdGhBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZUFjdGlvbixcbiAgVHJlZU1vdmVOb2RlRXJyb3JBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVSZWdpc3RlckFjdGlvbixcbiAgVHJlZVNhdmVOb2RlQWN0aW9uLFxuICBUcmVlU2F2ZU5vZGVFcnJvckFjdGlvbixcbiAgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbixcbiAgVHJlZVNldEFsbE5vZGVzQWN0aW9uXG59IGZyb20gJy4vdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SVRyZWVBY3Rpb25QYXlsb2FkLCBJVHJlZUNvbmZpZ3VyYXRpb24sIElUcmVlRGF0YSwgSVRyZWVTdGF0ZX0gZnJvbSAnLi9JVHJlZVN0YXRlJztcbmltcG9ydCB7Tm9kZURpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4uL2RyYWdBbmREcm9wL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBmaWx0ZXIsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtzZWxlY3QsIFN0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge05FV19OT0RFX0lELCB0cmVlQ29uZmlndXJhdGlvblNlbGVjdG9yLCB0cmVlU2VsZWN0b3J9IGZyb20gJy4vdHJlZVJlZHVjZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZUVmZmVjdHNTZXJ2aWNlIHtcbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyByZWdpc3RlciQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfUkVHSVNURVIpLFxuICAgICAgbWFwKChhY3Rpb246IFRyZWVSZWdpc3RlckFjdGlvbik6IFRyZWVBY3Rpb24gPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuc2lsZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUcmVlU2V0QWxsTm9kZXNBY3Rpb24oe3RyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLCBub2RlczogYWN0aW9uLnBheWxvYWQubm9kZXN9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFRyZWVMb2FkTm9kZXNBY3Rpb24oe3RyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLCBpZDogbnVsbH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBsb2FkJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEKSxcbiAgICAgIG1lcmdlTWFwKChhY3Rpb246IFRyZWVMb2FkTm9kZXNBY3Rpb24pID0+IHRoaXMubG9hZE5vZGVzKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgobm9kZXNEYXRhOiBJT3V0ZXJOb2RlW10pOiBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbiA9PiBuZXcgVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb24oe1xuICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWQsXG4gICAgICAgICAgICBub2Rlczogbm9kZXNEYXRhXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFRyZWVMb2FkTm9kZXNFcnJvckFjdGlvbih7XG4gICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgIH0pKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cblxuICBARWZmZWN0KClcbiAgcHVibGljIGRlbGV0ZSQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfREVMRVRFX05PREUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVEZWxldGVOb2RlQWN0aW9uKSA9PiB0aGlzLmRlbGV0ZU5vZGUoYWN0aW9uLnBheWxvYWQudHJlZUlkLCBhY3Rpb24ucGF5bG9hZC5ub2RlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCk6IFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbiA9PiBuZXcgVHJlZURlbGV0ZU5vZGVTdWNjZXNzQWN0aW9uKHsuLi5hY3Rpb24ucGF5bG9hZH0pKSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpOiBPYnNlcnZhYmxlPFRyZWVEZWxldGVOb2RlRXJyb3JBY3Rpb24+ID0+IG9mKG5ldyBUcmVlRGVsZXRlTm9kZUVycm9yQWN0aW9uKHsuLi5hY3Rpb24ucGF5bG9hZH0pKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cblxuICBARWZmZWN0KClcbiAgcHVibGljIHNhdmUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NBVkVfTk9ERSksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogVHJlZVNhdmVOb2RlQWN0aW9uKSA9PiB0aGlzLnNhdmVOb2RlKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgey4uLmFjdGlvbi5wYXlsb2FkLm5vZGV9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKG5vZGU6IElPdXRlck5vZGUpOiBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uID0+IG5ldyBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uKHtcbiAgICAgICAgICAgIHRyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLFxuICAgICAgICAgICAgb2xkTm9kZTogYWN0aW9uLnBheWxvYWQubm9kZSxcbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgVHJlZVNhdmVOb2RlRXJyb3JBY3Rpb24oey4uLmFjdGlvbi5wYXlsb2FkfSkpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIG1vdmUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERSksXG4gICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZU1vdmVOb2RlQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5zb3VyY2VPZkRyb3BwZWREYXRhID09PSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVNb3ZlTm9kZUFjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IDxJT3V0ZXJOb2RlPnsuLi5hY3Rpb24ucGF5bG9hZC5vbGROb2RlfTtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBCb29sZWFuKGFjdGlvbi5wYXlsb2FkLm5vZGUpID8gey4uLmFjdGlvbi5wYXlsb2FkLm5vZGV9IDogbnVsbDtcblxuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVOb2RlKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgc291cmNlLCB0YXJnZXQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChub2RlOiBJT3V0ZXJOb2RlKTogSVRyZWVBY3Rpb25QYXlsb2FkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICBvbGROb2RlOiBhY3Rpb24ucGF5bG9hZC5vbGROb2RlLFxuICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoKGRhdGE6IElUcmVlQWN0aW9uUGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdCh0cmVlQ29uZmlndXJhdGlvblNlbGVjdG9yKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCkpXG4gICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwKChjb25maWd1cmF0aW9uOiBJVHJlZUNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FjdGlvbiA9IG5ldyBUcmVlTW92ZU5vZGVFcnJvckFjdGlvbih7XG4gICAgICAgICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9uLnBheWxvYWQub2xkTm9kZSxcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogYWN0aW9uLnBheWxvYWQubm9kZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ld0FjdGlvbik7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApLFxuICAgICAgbWVyZ2VNYXAoKHZhbHVlOiB7IGRhdGE6IElUcmVlQWN0aW9uUGF5bG9hZCwgY29uZmlndXJhdGlvbjogSVRyZWVDb25maWd1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHZhbHVlLmRhdGE7XG4gICAgICAgIGNvbnN0IGFjdGlvbnM6IFRyZWVBY3Rpb25bXSA9IFtcbiAgICAgICAgICBuZXcgVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvbih7dHJlZUlkOiBkYXRhLnRyZWVJZCwgc291cmNlOiBkYXRhLm9sZE5vZGUsIHRhcmdldDogZGF0YS5ub2RlfSksXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKCF2YWx1ZS5jb25maWd1cmF0aW9uLmlzRnVsbHlMb2FkZWQpIHtcbiAgICAgICAgICBhY3Rpb25zLnB1c2gobmV3IFRyZWVMb2FkTm9kZXNBY3Rpb24oe3RyZWVJZDogZGF0YS50cmVlSWQsIGlkOiBkYXRhLm5vZGUucGFyZW50SWR9KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgIH0pXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGV4cGFuZCQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfRVhQQU5EX05PREUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVFeHBhbmROb2RlQWN0aW9uKSA9PlxuICAgICAgICB0aGlzLnN0b3JlXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzZWxlY3QodHJlZVNlbGVjdG9yKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCkpLFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIGZpbHRlcigodHJlZVN0YXRlOiBJVHJlZURhdGEpID0+ICF0cmVlU3RhdGUuY29uZmlndXJhdGlvbi5pc0Z1bGx5TG9hZGVkKSxcbiAgICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVHJlZUxvYWROb2Rlc0FjdGlvbih7XG4gICAgICAgICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBpbnNlcnQkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0lOU0VSVF9OT0RFKSxcbiAgICAgIGZpbHRlcigoYWN0aW9uOiBUcmVlSW5zZXJ0Tm9kZUFjdGlvbikgPT4gISFhY3Rpb24ucGF5bG9hZC5wYXJlbnRJZCksXG4gICAgICBtYXAoKGFjdGlvbjogVHJlZUluc2VydE5vZGVBY3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVlRXhwYW5kTm9kZUFjdGlvbih7dHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsIGlkOiBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJZH0pO1xuICAgICAgfSlcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgaW5pdFBhdGhGb3JGdWxseUxvYWRlZFRyZWVFZmZlY3QkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQURfUEFUSCksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogVHJlZUxvYWRQYXRoQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdCh0cmVlQ29uZmlndXJhdGlvblNlbGVjdG9yKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCkpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgbWFwKChjb25maWd1cmF0aW9uOiBJVHJlZUNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHthY3Rpb24sIGNvbmZpZ3VyYXRpb259O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAoKHZhbHVlOiB7IGFjdGlvbjogVHJlZUxvYWRQYXRoQWN0aW9uLCBjb25maWd1cmF0aW9uOiBJVHJlZUNvbmZpZ3VyYXRpb24gfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHthY3Rpb24sIGNvbmZpZ3VyYXRpb259ID0gdmFsdWU7XG5cbiAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5pc0Z1bGx5TG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuaWRzLm1hcCgoaWQ6IHN0cmluZykgPT4gbmV3IFRyZWVFeHBhbmROb2RlQWN0aW9uKHt0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgaWR9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRBY3Rpb25zID0gYWN0aW9uLnBheWxvYWQuaWRzLm1hcCgoaWQ6IHN0cmluZykgPT4gdGhpcy5sb2FkTm9kZXMoYWN0aW9uLnBheWxvYWQudHJlZUlkLCBpZCkpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QobG9hZEFjdGlvbnMpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgbWVyZ2VNYXAoKGRhdGE6IElPdXRlck5vZGVbXVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsb2FkU3VjY2VzcyA9IGRhdGEubWFwKChub2RlczogSU91dGVyTm9kZVtdLCBpbmRleCkgPT4gbmV3IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZHNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBub2Rlc1xuICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXhwYW5kTm9kZXMgPSBhY3Rpb24ucGF5bG9hZC5pZHMubWFwKChpZDogc3RyaW5nKSA9PiBuZXcgVHJlZUV4cGFuZE5vZGVBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5sb2FkU3VjY2VzcywgLi4uZXhwYW5kTm9kZXNdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgbWVyZ2VNYXAoKGFjdGlvbnM6IGFueVtdKSA9PiBhY3Rpb25zKVxuICAgICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub2RlRGlzcGF0Y2hlclNlcnZpY2U6IE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4pIHtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWxldGVOb2RlKHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3Qgbm9kZVNlcnZpY2UgPSB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5nZXQodHJlZUlkKTtcblxuICAgIHJldHVybiBub2RlLmlkID8gbm9kZVNlcnZpY2UucmVtb3ZlKG5vZGUuaWQpIDogb2Yobm9kZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9hZE5vZGVzKHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nIHwgbnVsbCkge1xuICAgIGNvbnN0IG5vZGVTZXJ2aWNlID0gdGhpcy5ub2RlRGlzcGF0Y2hlclNlcnZpY2UuZ2V0KHRyZWVJZCk7XG5cbiAgICByZXR1cm4gbm9kZVNlcnZpY2UubG9hZChpZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2F2ZU5vZGUodHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBub2RlU2VydmljZSA9IHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpO1xuXG4gICAgaWYgKG5vZGUuaWQgPT09IE5FV19OT0RFX0lEKSB7XG4gICAgICByZXR1cm4gbm9kZVNlcnZpY2UuYWRkKG5vZGUsIG5vZGUucGFyZW50SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZVNlcnZpY2UudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBtb3ZlTm9kZSh0cmVlSWQ6IHN0cmluZywgc291cmNlOiBJT3V0ZXJOb2RlLCB0YXJnZXQ6IElPdXRlck5vZGUpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBub2RlU2VydmljZSA9IHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpO1xuXG4gICAgcmV0dXJuIG5vZGVTZXJ2aWNlLm1vdmUoc291cmNlLCB0YXJnZXQpO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge3RyZWVTZWxlY3Rvcn0gZnJvbSAnLi4vc3RvcmUvdHJlZVJlZHVjZXInO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICcuLi9zdG9yZS9JVHJlZVN0YXRlJztcbmltcG9ydCB7Tm9kZURpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7XG4gIFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvbixcbiAgVHJlZVJlZ2lzdGVyQWN0aW9uLFxuICBUcmVlU2V0Q29uZmlndXJhdGlvbkFjdGlvblxufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBub2RlRGlzcGF0Y2hlclNlcnZpY2U6IE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+KSB7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVHJlZU1vZGVsKGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLCBub2RlczogSU91dGVyTm9kZVtdID0gbnVsbCk6IFRyZWVNb2RlbCB7XG4gICAgY29uc3QgdHJlZUlkID0gY29uZmlndXJhdGlvbi50cmVlSWQ7XG4gICAgY29uc3QgaXNGdWxseUxvYWRlZCA9IEJvb2xlYW4obm9kZXMpO1xuXG4gICAgLy8gcmVnaXN0ZXIgbmV3IHRyZWUgaW4gc3RvcmVcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlUmVnaXN0ZXJBY3Rpb24oe1xuICAgICAgdHJlZUlkLFxuICAgICAgc2lsZW50OiBpc0Z1bGx5TG9hZGVkLFxuICAgICAgbm9kZXNcbiAgICB9KSk7XG5cbiAgICAvLyBpbml0IHRyZWUgY29uZmlndXJhdGlvblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uKHt0cmVlSWQsIGNvbmZpZ3VyYXRpb259KSk7XG5cbiAgICBpZiAoQm9vbGVhbihub2RlcykpIHtcbiAgICAgIHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpLnNldEFsbE5vZGVzKG5vZGVzKTtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvbih7dHJlZUlkfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvbGRlcnMkID0gdGhpcy5zdG9yZS5zZWxlY3QodHJlZVNlbGVjdG9yKGNvbmZpZ3VyYXRpb24udHJlZUlkKSk7XG5cbiAgICByZXR1cm4gbmV3IFRyZWVNb2RlbCh0aGlzLnN0b3JlLCBmb2xkZXJzJCwgY29uZmlndXJhdGlvbiwgaXNGdWxseUxvYWRlZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuLi9tb2RlbHMvVHJlZU1vZGVsJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge1RyZWVTZWxlY3ROb2RlQWN0aW9ufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SVRyZWVTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLXRyZWUtcGFyZW50cy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmVudHMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhcmVudHMtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIHB1YmxpYyBwYXJlbnRzJDogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+KSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudHMkID0gdGhpcy50cmVlTW9kZWwuZ2V0UGFyZW50c0xpc3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3ROb2RlKG5vZGU6IElPdXRlck5vZGUsIGlzQ3VycmVudFNlbGVjdGVkTm9kZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghaXNDdXJyZW50U2VsZWN0ZWROb2RlKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQge0luamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0lBcGlDb25maWd9IGZyb20gJy4uL0lBcGlDb25maWcuc2VydmljZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm9kZVNlcnZpY2Uge1xuICByZWFkb25seSB0cmVlSWQ6IHN0cmluZztcblxuICBsb2FkKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+O1xuXG4gIGFkZChub2RlOiBJT3V0ZXJOb2RlLCBwYXJlbnROb2RlSWQ6IHN0cmluZyB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuXG4gIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuXG4gIHVwZGF0ZShub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcblxuICByZW1vdmUobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuXG4gIHNldEFsbE5vZGVzKG5vZGVzOiBJT3V0ZXJOb2RlW10pOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgTk9ERV9TRVJWSUNFID0gbmV3IEluamVjdGlvblRva2VuKCdOT0RFX1NFUlZJQ0UnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vZGVTZXJ2aWNlIGltcGxlbWVudHMgSU5vZGVTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGFwaUNvbmZpZzogSUFwaUNvbmZpZyA9IHtcbiAgICBhZGRVcmw6ICcvYXBpL25vZGVzJyxcbiAgICBnZXRVcmw6ICcvYXBpL25vZGVzJyxcbiAgICBtb3ZlVXJsOiAnL2FwaS9ub2Rlcy9tb3ZlJyxcbiAgICB1cGRhdGVVcmw6ICcvYXBpL25vZGVzJyxcbiAgICByZW1vdmVVcmw6ICcvYXBpL25vZGVzJyxcbiAgfTtcblxuICBwdWJsaWMgZ2V0IHRyZWVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAndHJlZSc7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG5cbiAgfVxuXG4gIHB1YmxpYyBsb2FkKG5vZGVJZCA9ICcnKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnbm9kZUlkJywgbm9kZUlkKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PElPdXRlck5vZGVbXT4odGhpcy5nZXRQYXRoKCdHRVQnLCBub2RlSWQpLCB7cGFyYW1zfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBhZGQobm9kZTogSU91dGVyTm9kZSwgcGFyZW50Tm9kZUlkOiBzdHJpbmcgPSBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PElPdXRlck5vZGU+KHRoaXMuZ2V0UGF0aCgnQ1JFQVRFJywgcGFyZW50Tm9kZUlkKSwge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIHBhcmVudE5vZGVJZDogcGFyZW50Tm9kZUlkXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHNyY0lkID0gc3JjTm9kZS5pZDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldE5vZGUgPyB0YXJnZXROb2RlLmlkIDogbnVsbDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PElPdXRlck5vZGU+KHRoaXMuZ2V0UGF0aCgnTU9WRScsIHNyY0lkLCB0YXJnZXRJZCksIHtzb3VyY2U6IHNyY0lkLCB0YXJnZXQ6IHRhcmdldElkfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKG5vZGU6IElPdXRlck5vZGUpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmdldFBhdGgoJ1VQREFURScsIG5vZGUuaWQpLCBub2RlKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnbm9kZUlkJywgbm9kZUlkKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPElPdXRlck5vZGU+KHRoaXMuZ2V0UGF0aCgnUkVNT1ZFJywgbm9kZUlkKSwge3BhcmFtc30pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhdGgodHlwZTogc3RyaW5nLCBub2RlSWQ6IHN0cmluZywgZGVzdE5vZGVJZDogc3RyaW5nID0gbnVsbCkge1xuICAgIGlmICghdGhpcy5hcGlDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gQVBJIGNvbmZpZ3VyYXRpb24gZm9yIFRyZWUnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmxNYXAgPSB7XG4gICAgICAnR0VUJzogdGhpcy5hcGlDb25maWcuZ2V0VXJsLFxuICAgICAgJ0NSRUFURSc6IHRoaXMuYXBpQ29uZmlnLmFkZFVybCxcbiAgICAgICdSRU1PVkUnOiB0aGlzLmFwaUNvbmZpZy5yZW1vdmVVcmwsXG4gICAgICAnVVBEQVRFJzogdGhpcy5hcGlDb25maWcudXBkYXRlVXJsLFxuICAgICAgJ01PVkUnOiB0aGlzLmFwaUNvbmZpZy5tb3ZlVXJsXG4gICAgfTtcblxuICAgIGxldCBwYXRoID0gdGhpcy5yZXBsYWNlTm9kZUlkKHVybE1hcFt0eXBlXSwgbm9kZUlkKTtcblxuICAgIGlmIChkZXN0Tm9kZUlkKSB7XG4gICAgICBwYXRoID0gdGhpcy5yZXBsYWNlRGVzdE5vZGVJZChwYXRoLCBkZXN0Tm9kZUlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXBsYWNlTm9kZUlkKHVybDogc3RyaW5nLCBub2RlSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwucmVwbGFjZSgne25vZGVJZH0nLCBub2RlSWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcGxhY2VEZXN0Tm9kZUlkKHVybDogc3RyaW5nLCBub2RlSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwucmVwbGFjZSgne2Rlc3ROb2RlSWR9Jywgbm9kZUlkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZX0gZnJvbSAnLi90cmVlTW9kZWxHZW5lcmF0b3Iuc2VydmljZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge0lOb2RlU2VydmljZX0gZnJvbSAnLi9ub2RlLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlTW9kZWx9IGZyb20gJy4uL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZTogVHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UpIHtcblxuICB9XG5cbiAgcHVibGljIGluaXQodHJlZUNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICB0cmVlQXBpOiBJTm9kZVNlcnZpY2UsXG4gICAgICAgICAgICAgIGxvYWRlZE5vZGVzPzogSU91dGVyTm9kZVtdKTogVHJlZU1vZGVsIHtcbiAgICB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5yZWdpc3RlclNlcnZpY2UodHJlZUNvbmZpZ3VyYXRpb24udHJlZUlkLCB0cmVlQXBpKTtcblxuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2UuY3JlYXRlVHJlZU1vZGVsKHRyZWVDb25maWd1cmF0aW9uLCBsb2FkZWROb2Rlcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJdGVtQ29tcG9uZW50fSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUcmVlQ29tcG9uZW50fSBmcm9tICcuL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7RG5kTW9kdWxlLCBEcmFnZ2FibGVDb21wb25lbnR9IGZyb20gJ25nMi1kbmQnO1xuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9kcmFnQW5kRHJvcC9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7RHJhZ2dhYmxlRGlyZWN0aXZlfSBmcm9tICcuL2RyYWdBbmREcm9wL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtEcm9wcGFibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJvcHBhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0Ryb3B6b25lQ29tcG9uZW50fSBmcm9tICcuL2RyYWdBbmREcm9wL2Ryb3B6b25lL2Ryb3B6b25lLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0b3JlTW9kdWxlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0VmZmVjdHNNb2R1bGV9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtUcmVlRWZmZWN0c1NlcnZpY2V9IGZyb20gJy4vc3RvcmUvdHJlZUVmZmVjdHMuc2VydmljZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb250ZXh0TWVudU1vZHVsZX0gZnJvbSAnbmd4LWNvbnRleHRtZW51JztcbmltcG9ydCB7dHJlZVJlZHVjZXJ9IGZyb20gJy4vc3RvcmUvdHJlZVJlZHVjZXInO1xuaW1wb3J0IHtUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvdHJlZU1vZGVsR2VuZXJhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtQYXJlbnRzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9wYXJlbnRzLWxpc3QvcGFyZW50cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge05PREVfU0VSVklDRSwgTm9kZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9ub2RlLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBOT0RFX0RJU1BBVENIRVJfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Tm9kZURpc3BhdGNoZXJTZXJ2aWNlPignTm9kZURpc3BhdGNoZXJTZXJ2aWNlJyk7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgRG5kTW9kdWxlLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbVHJlZUVmZmVjdHNTZXJ2aWNlXSksXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ3RyZWVzJywgdHJlZVJlZHVjZXIpLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJlZUNvbXBvbmVudCxcbiAgICBJdGVtQ29tcG9uZW50LFxuICAgIERyYWdnYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wcGFibGVEaXJlY3RpdmUsXG4gICAgRHJvcHpvbmVDb21wb25lbnQsXG4gICAgUGFyZW50c0xpc3RDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmVlQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnQsXG4gICAgRHJhZ2dhYmxlRGlyZWN0aXZlLFxuICAgIERyb3BwYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wem9uZUNvbXBvbmVudCxcbiAgICBEcmFnZ2FibGVDb21wb25lbnQsXG4gICAgUGFyZW50c0xpc3RDb21wb25lbnQsXG4gICAgU3RvcmVNb2R1bGUsXG4gICAgRWZmZWN0c01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE5PREVfU0VSVklDRSwgdXNlQ2xhc3M6IE5vZGVTZXJ2aWNlLCBtdWx0aTogdHJ1ZX1cbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge1xuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRyZWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRHJhZ0FuZERyb3AsXG4gICAgICAgIE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgVHJlZUVmZmVjdHNTZXJ2aWNlLFxuICAgICAgICBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgICAgICBUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlLFxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvckZlYXR1cmUoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmVlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXRUcmFuc2xhdGlvbkZvckVOKCk7XG4gICAgdGhpcy5zZXRUcmFuc2xhdGlvbkZvclBMKCk7XG4gICAgdGhpcy50cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyYW5zbGF0aW9uRm9yUEwoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ3BsJywge1xuICAgICAgUklfVFJFRV9MQkxfQUREX05PREU6ICdEb2RhaicsXG4gICAgICBSSV9UUkVFX0xCTF9FRElUX05PREU6ICdFZHl0dWonLFxuICAgICAgUklfVFJFRV9MQkxfUkVNT1ZFX05PREU6ICdVc3XDhcKEJyxcbiAgICAgIFJJX1RSRUVfTEJMX0RST1BfWk9ORTogJ1VwdcOFwpvDhMKHIHR1dGFqJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmFuc2xhdGlvbkZvckVOKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKCdlbicsIHtcbiAgICAgIFJJX1RSRUVfTEJMX0FERF9OT0RFOiAnQWRkIGRhdGEnLFxuICAgICAgUklfVFJFRV9MQkxfRURJVF9OT0RFOiAnRWRpdCBkYXRhJyxcbiAgICAgIFJJX1RSRUVfTEJMX1JFTU9WRV9OT0RFOiAnRGVsZXRlIGRhdGEnLFxuICAgICAgUklfVFJFRV9MQkxfRFJPUF9aT05FOiAnRHJvcCBoZXJlIHRvIG1vdmUgZGF0YSB0byByb290IGxldmVsJ1xuICAgIH0pO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJzdGF0ZSIsInRzbGliXzEuX19zcHJlYWQiLCJ0c2xpYl8xLl9fZGVjb3JhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtFLGdCQUFpQixnQkFBZ0I7SUFDakMsd0JBQXlCLHdCQUF3QjtJQUNqRCxzQkFBdUIsc0JBQXNCO0lBQzdDLGtCQUFtQixrQkFBa0I7SUFDckMsMEJBQTJCLDBCQUEwQjtJQUNyRCx3QkFBeUIsd0JBQXdCO0lBQ2pELHNCQUF1QixzQkFBc0I7SUFDN0Msb0JBQXFCLG9CQUFvQjtJQUN6QyxrQkFBbUIsa0JBQWtCO0lBQ3JDLGtCQUFtQixrQkFBa0I7SUFDckMsV0FBWSxXQUFXO0lBQ3ZC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