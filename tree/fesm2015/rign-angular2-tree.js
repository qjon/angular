import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { distinctUntilChanged, map, filter, withLatestFrom, catchError, mergeMap, switchMap, take } from 'rxjs/operators';
import * as _isEqual from 'lodash.isequal';
import { combineLatest, Subscription, empty, BehaviorSubject, Subject, merge, of } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation, Injectable, Directive, ElementRef, Renderer, InjectionToken, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContextMenuService, ContextMenuModule } from 'ngx-contextmenu';
import { Actions, Effect, ofType, EffectsModule } from '@ngrx/effects';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { __decorate, __metadata } from 'tslib';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DndModule, DraggableComponent } from 'ng2-dnd';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const TreeActionTypes = {
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
class TreeCollapseNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_COLLAPSE_NODE;
    }
}
class TreeDeleteNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE;
    }
}
class TreeDeleteNodeErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE_ERROR;
    }
}
class TreeDeleteNodeSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE_SUCCESS;
    }
}
class TreeEditNodeStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_EDIT_NODE_START;
    }
}
class TreeExpandNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_EXPAND_NODE;
    }
}
class TreeInsertNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_INSERT_NODE;
    }
}
class TreeLoadNodesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD;
    }
}
class TreeLoadNodesErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_ERROR;
    }
}
class TreeLoadNodesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_SUCCESS;
    }
}
class TreeLoadPathAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_PATH;
    }
}
class TreeMarkAsFullyLoadedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MARK_AS_FULLY_LOADED;
    }
}
class TreeMoveNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE;
    }
}
class TreeMoveNodeErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE_ERROR;
    }
}
class TreeMoveNodeSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE_SUCCESS;
    }
}
class TreeRegisterAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_REGISTER;
    }
}
class TreeSaveNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE;
    }
}
class TreeSaveNodeErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE_ERROR;
    }
}
class TreeSaveNodeSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE_SUCCESS;
    }
}
class TreeSelectNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SELECT_NODE;
    }
}
class TreeSetAllNodesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SET_ALL_NODES;
    }
}
class TreeSetConfigurationAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SET_CONFIGURATION;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NEW_NODE_ID = 'ri-new-node-id';
/** @type {?} */
const emptyTreeData = {
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
function copyState(state$$1, treeId = null) {
    /** @type {?} */
    const newState = Object.assign({}, state$$1);
    // todo: find better way to clone object
    if (treeId) {
        newState[treeId] = {
            nodes: {
                entities: Object.assign({}, state$$1[treeId].nodes.entities),
                previouslySelected: state$$1[treeId].nodes.previouslySelected,
                selected: state$$1[treeId].nodes.selected,
                rootNodes: [...state$$1[treeId].nodes.rootNodes],
                expanded: [...state$$1[treeId].nodes.expanded],
            },
            configuration: Object.assign({}, state$$1[treeId].configuration)
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
    const newState = copyState(state$$1, action.payload.treeId);
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const treeState = newState[treeId];
    /** @type {?} */
    const node = action.payload.node;
    /** @type {?} */
    const parentId = node.parentId;
    delete treeState.nodes.entities[node.id];
    if (parentId) {
        /** @type {?} */
        const parent = Object.assign({}, treeState.nodes.entities[parentId]);
        if (parent.children) {
            parent.children = parent.children.filter((id) => id !== node.id);
        }
        treeState.nodes.entities[parentId] = parent;
    }
    else {
        treeState.nodes.rootNodes = treeState.nodes.rootNodes.filter((id) => id !== node.id);
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
    const newState = copyState(state$$1, action.payload.treeId);
    /** @type {?} */
    let parent = null;
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const parentId = action.payload.id;
    if (parentId) {
        parent = newState[treeId].nodes.entities[parentId];
        parent.children = [];
    }
    else {
        newState[treeId].nodes.entities = {};
    }
    action.payload.nodes.forEach((nodeData) => {
        nodeData.treeId = treeId;
        if (parent) {
            parent.children.push(nodeData.id);
            nodeData.parents = [...parent.parents, ...[parent.id]];
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
    const treeId = action.payload.treeId;
    /** @type {?} */
    const newState = copyState(state$$1, treeId);
    /** @type {?} */
    const nodeId = action.payload.id;
    // newState[treeId].nodes.entities[nodeId] = Object.assign({}, newState[treeId].nodes.entities[nodeId], {isExpanded: true});
    newState[treeId].nodes.expanded = [...newState[treeId].nodes.expanded, nodeId];
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function collapseNode(state$$1, action) {
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const newState = copyState(state$$1, treeId);
    /** @type {?} */
    const nodeId = action.payload.id;
    // newState[treeId].nodes.entities[nodeId] = {...newState[treeId].nodes.entities[nodeId], ...{isExpanded: false}};
    newState[treeId].nodes.expanded = newState[treeId].nodes.expanded.filter((id) => id !== nodeId);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function insertNode(state$$1, action) {
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const newState = copyState(state$$1, treeId);
    /** @type {?} */
    const parentId = action.payload.parentId;
    /** @type {?} */
    const newNode = {
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
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function saveNode(state$$1, action) {
    /** @type {?} */
    const newState = copyState(state$$1, action.payload.treeId);
    /** @type {?} */
    const old = action.payload.oldNode;
    /** @type {?} */
    const newNode = action.payload.node;
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const treeState = newState[treeId].nodes.entities;
    if (treeState[NEW_NODE_ID]) {
        delete treeState[NEW_NODE_ID];
    }
    else {
        delete treeState[old.id];
    }
    /** @type {?} */
    const nodeId = newNode.id;
    treeState[nodeId] = newNode;
    /** @type {?} */
    const parentId = newNode.parentId;
    /** @type {?} */
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
    }
    else if (old.id === NEW_NODE_ID) {
        newState[treeId].nodes.rootNodes = newState[treeId].nodes.rootNodes.filter((id) => id !== NEW_NODE_ID);
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
    const newState = copyState(state$$1, action.payload.treeId);
    /** @type {?} */
    const oldNode = action.payload.source;
    /** @type {?} */
    const newNode = action.payload.target;
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const treeData = newState[treeId];
    /** @type {?} */
    const treeState = newState[treeId].nodes.entities;
    // remove info about removed child
    if (oldNode.parentId) {
        treeState[oldNode.parentId].children = treeState[oldNode.parentId].children.filter((id) => id !== oldNode.id);
    }
    else {
        treeData.nodes.rootNodes = treeData.nodes.rootNodes.filter((id) => id !== oldNode.id);
    }
    // add info about moved node
    if (newNode.parentId) {
        /** @type {?} */
        const newParent = treeState[newNode.parentId];
        if (newParent.children) {
            newParent.children.push(newNode.id);
        }
        newNode.parents = [...newParent.parents, newParent.id];
    }
    else {
        treeData.nodes.rootNodes.push(newNode.id);
        newNode.parents = [];
    }
    // replace node data
    treeState[newNode.id] = Object.assign({}, newNode);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function registerTree(state$$1, action) {
    /** @type {?} */
    const newState = copyState(state$$1);
    newState[action.payload.treeId] = {
        nodes: {
            entities: Object.assign({}, emptyTreeData.nodes.entities),
            previouslySelected: emptyTreeData.nodes.previouslySelected,
            selected: emptyTreeData.nodes.selected,
            rootNodes: [...emptyTreeData.nodes.rootNodes],
            expanded: [...emptyTreeData.nodes.expanded]
        },
        configuration: Object.assign({}, emptyTreeData.configuration)
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
    const newState = copyState(state$$1, action.payload.treeId);
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const nodes = action.payload.nodes;
    /** @type {?} */
    const newNodes = {};
    /** @type {?} */
    const ids = nodes.map((nodeData) => nodeData.id);
    nodes.forEach((nodeData) => {
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
/**
 * @param {?} nodes
 * @param {?} nodeId
 * @param {?=} parents
 * @return {?}
 */
function updateParents(nodes, nodeId, parents = []) {
    /** @type {?} */
    const node = nodes[nodeId];
    if (node) {
        node.parents = [...parents];
        if (node.children.length > 0) {
            /** @type {?} */
            const newParents = [...parents, ...[node.id]];
            node.children.forEach(childId => updateParents(nodes, childId, newParents));
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
    const treeId = action.payload.treeId;
    /** @type {?} */
    const newState = copyState(state$$1, treeId);
    newState[treeId].configuration = Object.assign({}, newState[treeId].configuration, { isFullyLoaded: true });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function setConfiguration(state$$1, action) {
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const newState = copyState(state$$1, treeId);
    newState[treeId].configuration = Object.assign({}, newState[treeId].configuration, action.payload.configuration);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function selectNode(state$$1, action) {
    /** @type {?} */
    const treeId = action.payload.treeId;
    /** @type {?} */
    const node = action.payload.node;
    /** @type {?} */
    const newState = copyState(state$$1, treeId);
    newState[treeId].nodes.previouslySelected = newState[treeId].nodes.selected;
    newState[treeId].nodes.selected = node ? node.id : null;
    return newState;
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function treeReducer(state$$1 = {}, action) {
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
const treeStateSelector = createFeatureSelector('trees');
/**
 * @param {?} treeId
 * @return {?}
 */
function treeSelector(treeId) {
    return createSelector(treeStateSelector, (state$$1) => state$$1[treeId] || null);
}
/**
 * @param {?} treeId
 * @return {?}
 */
function treeConfigurationSelector(treeId) {
    return createSelector(treeStateSelector, (state$$1) => state$$1[treeId].configuration || null);
}
/**
 * @param {?} treeId
 * @return {?}
 */
function expandedNodesSelector(treeId) {
    return createSelector(treeStateSelector, (state$$1) => state$$1[treeId].nodes.expanded || []);
}
/**
 * @param {?} treeId
 * @return {?}
 */
function selectedNodeSelector(treeId) {
    return createSelector(treeStateSelector, (state$$1) => state$$1[treeId].nodes.selected || null);
}
/**
 * @param {?} treeId
 * @return {?}
 */
function previouslySelectedNodeSelector(treeId) {
    return createSelector(treeStateSelector, (state$$1) => state$$1[treeId].nodes.previouslySelected || null);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const isEqual = _isEqual;
class TreeModel {
    /**
     * @param {?} store
     * @param {?} treeData$
     * @param {?} configuration
     * @param {?=} _fullyLoaded
     */
    constructor(store, treeData$, configuration, _fullyLoaded = false) {
        this.store = store;
        this.treeData$ = treeData$;
        this.configuration = configuration;
        this._fullyLoaded = _fullyLoaded;
        this.selected = null;
        this.previouslySelected = null;
        this.subscription = new Subscription();
        this.nodes$ = this.treeData$
            .pipe(distinctUntilChanged((prev, next) => {
            return isEqual(prev.nodes.entities, next.nodes.entities);
        }), map((treeData) => treeData.nodes.entities));
        this.rootNodes$ = this.treeData$
            .pipe(map((treeData) => treeData.nodes.rootNodes.map((id) => treeData.nodes.entities[id]).sort(this.sortNodes)), distinctUntilChanged());
        this.currentSelectedNode$ = this.treeData$
            .pipe(map((treeData) => {
            /** @type {?} */
            const nodesData = treeData.nodes;
            /** @type {?} */
            const selectedId = nodesData.selected;
            return selectedId ? nodesData.entities[selectedId] : null;
        }));
        this.initConfiguration();
        this.subscribeExpanded();
        this.subscribeSelected();
        this.subscribePreviouslySelected();
    }
    /**
     * @return {?}
     */
    get treeId() {
        return this.configuration.treeId;
    }
    /**
     * @return {?}
     */
    get isFullyLoaded() {
        return this._fullyLoaded;
    }
    /**
     * @return {?}
     */
    destroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    getParentsList() {
        return combineLatest(this.currentSelectedNode$, this.nodes$)
            .pipe(map(([currentNode, nodes]) => {
            if (!Boolean(currentNode)) {
                return [];
            }
            /** @type {?} */
            const parents = currentNode.parents.map(id => nodes[id]);
            parents.push(currentNode);
            return parents;
        }));
    }
    /**
     * @param {?} nodeId
     * @return {?}
     */
    getChildren(nodeId) {
        return this.nodes$
            .pipe(map((state$$1) => this.getNodesByParentId(state$$1, nodeId)), map((nodes) => {
            return [...nodes].sort(this.sortNodes);
        }));
    }
    /**
     * @param {?} path
     * @return {?}
     */
    initPath(path) {
        this.store.dispatch(new TreeLoadPathAction({ treeId: this.configuration.treeId, ids: path }));
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isExpanded(node) {
        if (!node) {
            return false;
        }
        return this.expanded.has(node.id);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isSelected(node) {
        if (!node) {
            return false;
        }
        return this.selected === node.id;
    }
    /**
     * @param {?} nodeId
     * @return {?}
     */
    wasPreviouslySelected(nodeId) {
        return this.previouslySelected === nodeId;
    }
    /**
     * @private
     * @return {?}
     */
    initConfiguration() {
        /** @type {?} */
        const defaultConfiguration = {
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
    /**
     * @private
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    getNodesByParentId(state$$1, id) {
        return Object.keys(state$$1)
            .filter((key) => state$$1[key].parentId === id)
            .map((key) => state$$1[key]);
    }
    /**
     * @private
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    sortNodes(first, second) {
        if (second.id === NEW_NODE_ID) {
            return -1;
        }
        return first.name > second.name ? 1 : -1;
    }
    /**
     * @private
     * @return {?}
     */
    subscribeExpanded() {
        this.subscription.add(this.store
            .pipe(select(expandedNodesSelector(this.treeId)))
            .subscribe((expanded) => this.expanded = new Set(expanded)));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeSelected() {
        this.subscription.add(this.store
            .pipe(select(selectedNodeSelector(this.treeId)))
            .subscribe((selected) => this.selected = selected));
    }
    /**
     * @private
     * @return {?}
     */
    subscribePreviouslySelected() {
        this.subscription.add(this.store
            .pipe(select(previouslySelectedNodeSelector(this.treeId)))
            .subscribe((selected) => this.previouslySelected = selected));
    }
}

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
class ItemComponent {
    /**
     * @param {?} contextMenuService
     * @param {?} actions$
     * @param {?} store
     * @param {?} cdr
     */
    constructor(contextMenuService, actions$, store, cdr) {
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
    /**
     * Node instance
     * @param {?} node
     * @return {?}
     */
    set node(node) {
        this._node = node;
        this.initEditModeIfNeeded(node);
    }
    /**
     * @return {?}
     */
    get node() {
        return this._node;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    ngOnChanges(values) {
        // if node is added to the tree then some part of nodes is moving down
        // and the new one is inserted, then all sub nodes should be rewritten
        /** @type {?} */
        const node = values.node;
        if (node && !node.firstChange && node.previousValue.id !== node.currentValue.id) {
            this.children$ = this.getChildren();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.children$ = this.getChildren();
        this.subscribeForOnEdit();
        this.subscription.add(this.store
            .pipe(select(previouslySelectedNodeSelector(this.node.treeId)), filter((previouslySelected) => previouslySelected === this.node.id))
            .subscribe(() => this.cdr.markForCheck()));
    }
    /**
     * Collapse node
     * @return {?}
     */
    collapse() {
        this.store.dispatch(new TreeCollapseNodeAction({
            treeId: this.treeModel.treeId,
            id: this.node.id,
        }));
    }
    /**
     * Expand node
     * @return {?}
     */
    expand() {
        this.store.dispatch(new TreeExpandNodeAction({ treeId: this.treeModel.treeId, id: this.node.id }));
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this.isStartSave) {
            this.isStartSave = false;
        }
        else {
            this.undoChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        event.stopPropagation();
        if (event.keyCode === 27) {
            this.undoChanges();
        }
        else if (event.keyCode === 13) {
            this.isStartSave = true;
            /** @type {?} */
            const node = {
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
                node,
            }));
            this.isEditMode = false;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onContextMenu($event) {
        if (!this.treeModel.configuration.disableContextMenu) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: $event,
                item: this.node
            });
        }
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @return {?}
     */
    onSelect() {
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    trackByFn(item) {
        return item.id;
    }
    /**
     * @protected
     * @return {?}
     */
    getChildren() {
        return this.treeModel.getChildren(this.node.id);
    }
    /**
     * @protected
     * @param {?} node
     * @return {?}
     */
    initEditModeIfNeeded(node) {
        if (!node) {
            return;
        }
        this.isEditMode = node.id === NEW_NODE_ID;
        if (this.isEditMode) {
            this.nameField.setValue('');
            this.setFocus();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    isNewNode() {
        return this.node.id === NEW_NODE_ID;
    }
    /**
     * @protected
     * @return {?}
     */
    setFocus() {
        setTimeout(() => this.input.nativeElement.focus(), 0);
    }
    /**
     * @protected
     * @return {?}
     */
    subscribeForOnEdit() {
        this.subscription.add(this.actions$
            .ofType(TreeActionTypes.TREE_EDIT_NODE_START)
            .pipe(filter((action) => action.payload.node === this.node))
            .subscribe((action) => {
            this.nameField.setValue(this.node.name);
            this.isEditMode = true;
            this.cdr.markForCheck();
            this.setFocus();
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    undoChanges() {
        this.isEditMode = false;
        if (this.isNewNode()) {
            this.store.dispatch(new TreeDeleteNodeAction({
                treeId: this.treeModel.treeId,
                node: this.node,
            }));
        }
    }
}
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
ItemComponent.ctorParameters = () => [
    { type: ContextMenuService },
    { type: Actions },
    { type: Store },
    { type: ChangeDetectorRef }
];
ItemComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['inputElement',] }],
    node: [{ type: Input }],
    treeModel: [{ type: Input }],
    contextMenu: [{ type: Input }],
    isExpanded: [{ type: Input }],
    isSelected: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragAndDrop {
    constructor() {
        this.dropStream$ = new Subject();
        this.dragStream$ = new BehaviorSubject(null);
        this.drop$ = this.dropStream$
            .pipe(withLatestFrom(this.dragStream$), map(([dropNode, dragNode]) => {
            return { dragNode: dragNode, dropNode: dropNode, type: dragNode.type };
        }));
    }
    /**
     * @param {?} dragElement
     * @return {?}
     */
    dragStart(dragElement) {
        this.dragStream$.next(dragElement);
    }
    /**
     * @param {?} dropElement
     * @return {?}
     */
    dragEnd(dropElement) {
        this.dropStream$.next(dropElement);
    }
    /**
     * @return {?}
     */
    getDragStream() {
        return this.dragStream$;
    }
    /**
     * @return {?}
     */
    getLastDragElement() {
        return this.dragStream$.getValue();
    }
}
DragAndDrop.DROP_DATA_TYPE = 'TREE_NODE';
DragAndDrop.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DragAndDrop.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeComponent {
    /**
     * @param {?} store
     * @param {?} dragAndDrop
     */
    constructor(store, dragAndDrop) {
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.registerMove();
        this.rootNodes$ = this.treeModel.rootNodes$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe((node) => this.currentSelectedNode = node));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ngOnChanges(data) {
        this.menuList = [];
        this.defaultOptions.forEach((item) => this.menuList.push(item));
    }
    /**
     * @return {?}
     */
    onAdd() {
        /** @type {?} */
        const parentId = this.currentSelectedNode ? this.currentSelectedNode.id : null;
        this.store.dispatch(new TreeInsertNodeAction({ treeId: this.treeModel.treeId, parentId }));
    }
    /**
     * On select item from context menu
     *
     * @param {?} name - name of the event
     * @param {?} node - data item
     * @return {?}
     */
    onContextMenuClick(name, node) {
        switch (name) {
            case 'onEdit':
                event.stopPropagation();
                this.store.dispatch(new TreeEditNodeStartAction({ node }));
                break;
            case 'onDelete':
                this.store.dispatch(new TreeDeleteNodeAction({ treeId: this.treeModel.treeId, node }));
                break;
            default:
                console.warn('Unknown context menu action: ' + name);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    trackByFn(item) {
        return item.id;
    }
    /**
     * Register data "move event"
     * @protected
     * @return {?}
     */
    registerMove() {
        if (this.treeModel.configuration.disableMoveNodes) {
            return;
        }
        this.dragAndDrop.drop$
            .pipe(filter((data) => {
            if (data.type === DragAndDrop.DROP_DATA_TYPE) {
                if (data.dropNode) {
                    return data.dropNode.data.treeId === this.treeModel.treeId;
                }
                else {
                    return data.dragNode.data.treeId === this.treeModel.treeId;
                }
            }
            else {
                if (data.dropNode && data.dropNode.zones && data.dropNode.zones.indexOf(data.dragNode.zoneId) === -1) {
                    return false;
                }
                return true;
            }
        }))
            .subscribe((data) => {
            /** @type {?} */
            const dropNode = data.dropNode ? data.dropNode.data : null;
            this.store.dispatch(new TreeMoveNodeAction({
                sourceOfDroppedData: data.type,
                treeId: this.treeModel.treeId,
                oldNode: data.dragNode.data,
                node: dropNode
            }));
        });
    }
}
TreeComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'ri-tree',
                template: "<div class=\"tree\">\n  <button *ngIf=\"treeModel.configuration.showAddButton\" class=\"btn btn-dark add-node-button\" (click)=\"onAdd()\">\n    <i class=\"fa fa-plus\"></i> {{'RI_TREE_LBL_ADD_NODE' | translate}}\n  </button>\n  <!--@formatter:off-->\n  <div #customTemplate><ng-content></ng-content></div>\n  <!--@formatter:on-->\n  <div *ngIf=\"customTemplate.childNodes.length === 0\">\n    <ri-tree-item\n      class=\"root-node\"\n      *ngFor=\"let node of rootNodes$ | async; trackBy: trackByFn\"\n      [node]=\"node\"\n      [treeModel]=\"treeModel\"\n      [isSelected]=\"treeModel.isSelected(node)\"\n      [isExpanded]=\"treeModel.isExpanded(node)\"\n      [contextMenu]=\"contextMenu\"></ri-tree-item>\n  </div>\n  <ri-dropzone [treeModel]=\"treeModel\"></ri-dropzone>\n  <context-menu id=\"context-menu-{{treeModel.treeId}}\" #contextMenu>\n    <ng-template *ngFor=\"let menuItem of menuList\" contextMenuItem let-item\n                 (execute)=\"onContextMenuClick(menuItem.name, $event.item)\">\n      <span class=\"{{menuItem.iconCls}}\" style=\"width: 20px; display: inline-block;\"></span>\n      {{menuItem.text | translate}}\n    </ng-template>\n  </context-menu>\n</div>\n",
                styles: [".tree{list-style-type:none;margin:0;padding-left:0;position:relative}.tree .dropdown{position:inherit}.tree .dropdown-menu{position:absolute!important}.tree .pointer{cursor:pointer}.tree .tree{margin-left:20px}.tree .tree-edit-btn,.tree .tree-remove-btn{display:none}.tree .tree-item{padding:2px 0}.tree .tree-item.drop-allowed .tree-item-name{background-color:rgba(255,0,0,.3)}.tree .tree-item.tree-item-selected>.tree-item-name{padding:0 1px;border:1px solid #4684ee;background-color:#549dee}.tree .tree-item i{text-align:center}.tree .tree-item .no-children{display:inline-block;width:8px}.tree .tree-item .tree-item-name{display:inline-block;line-height:22px;height:22px;padding:0 2px;cursor:pointer}.tree .tree-item .tree-item-name:hover{background-color:rgba(161,197,238,.2)}.tree .tree-item .tree-item-name:hover .tree-edit-btn,.tree .tree-item .tree-item-name:hover .tree-remove-btn,.tree .tree-item form{display:inline-block}.tree .tree-item form input{width:auto}"]
            }] }
];
/** @nocollapse */
TreeComponent.ctorParameters = () => [
    { type: Store },
    { type: DragAndDrop }
];
TreeComponent.propDecorators = {
    treeModel: [{ type: Input }],
    contextMenu: [{ type: ViewChild, args: ['contextMenu',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DraggableDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} dragAndDrop
     */
    constructor(el, renderer, dragAndDrop) {
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dragZone = null;
        this.sourceType = DragAndDrop.DROP_DATA_TYPE;
        this.dragEnabled = true;
        renderer.listen(el.nativeElement, 'dragstart', ($event) => {
            if (this.dragEnabled) {
                this.onDragStart($event);
            }
        });
        renderer.listen(el.nativeElement, 'dragend', () => {
            // on drag end we reset last drag element (this event is fired after drop)
            this.dragAndDrop.dragStart(null);
        });
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    onDragStart($event) {
        this.dragAndDrop.dragStart({ zoneId: this.dragZone, data: this.data, type: this.sourceType });
        $event.dataTransfer.effectAllowed = 'copy';
        $event.dataTransfer.dropEffect = 'copy';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.draggable = this.dragEnabled;
        if (!this.data) {
            throw new Error('DraggableDirective needs data');
        }
    }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[riDraggable]'
            },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer },
    { type: DragAndDrop }
];
DraggableDirective.propDecorators = {
    data: [{ type: Input }],
    dragZone: [{ type: Input }],
    sourceType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DroppableDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} dragAndDrop
     */
    constructor(el, renderer, dragAndDrop) {
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dropConfig = {};
        this.isDropAllowed = function () {
            /** @type {?} */
            const lastDragElement = this.dragAndDrop.getLastDragElement();
            /** @type {?} */
            const source = lastDragElement.data;
            /** @type {?} */
            const target = this.data;
            /** @type {?} */
            const dropZone = this.dropConfig.dropZone;
            if (dropZone && dropZone.length > 0 && dropZone.indexOf(lastDragElement.zoneId) === -1) {
                return false;
            }
            // todo: check drag and drop zones
            return !(source === target || target.id === source.parentId || target.parents.indexOf(source.id) > -1);
        };
        renderer.listen(el.nativeElement, 'dragover', ($event) => {
            $event.preventDefault();
            /** @type {?} */
            const dropAllowed = this.isDropAllowed();
            this.changeTargetCursor($event, dropAllowed);
            this.toggleDropClass(dropAllowed);
        });
        renderer.listen(el.nativeElement, 'dragleave', ($event) => {
            $event.preventDefault();
            this.toggleDropClass(false);
        });
        renderer.listen(el.nativeElement, 'drop', () => {
            this.toggleDropClass(false);
            if (this.isDropAllowed()) {
                this.dragAndDrop.dragEnd({ zones: this.dropConfig.dropZone, data: this.data });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initConfig();
        if (!this.data) {
            throw new Error('DroppableDirective needs data');
        }
    }
    /**
     * Add or remove additional class when drop allowed
     * @private
     * @param {?=} dropAllowed
     * @return {?}
     */
    toggleDropClass(dropAllowed = false) {
        this.renderer.setElementClass(this.el.nativeElement, this.dropConfig.dropAllowedCssClass, dropAllowed);
    }
    /**
     * Change drag event cursor
     * @private
     * @param {?} $event
     * @param {?=} add
     * @return {?}
     */
    changeTargetCursor($event, add = false) {
        /** @type {?} */
        const cursorType = add ? 'copy' : 'none';
        $event.dataTransfer.effectAllowed = cursorType;
        $event.dataTransfer.dropEffect = cursorType;
    }
    /**
     * initialize configuration options, use default or passed
     * @private
     * @return {?}
     */
    initConfig() {
        /** @type {?} */
        const defaultConfig = {
            dropAllowedCssClass: 'drop-allowed'
        };
        for (const key in defaultConfig) {
            if (defaultConfig.hasOwnProperty(key)) {
                this.dropConfig[key] = this.dropConfig[key] || defaultConfig[key];
            }
        }
    }
}
DroppableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[riDroppable]'
            },] }
];
/** @nocollapse */
DroppableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer },
    { type: DragAndDrop }
];
DroppableDirective.propDecorators = {
    data: [{ type: Input }],
    dropConfig: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropzoneComponent {
    /**
     * @param {?} dragAndDrop
     */
    constructor(dragAndDrop) {
        this.dragAndDrop = dragAndDrop;
        this.dropZone = [];
        /** @type {?} */
        const isDragStart$ = this.dragAndDrop.getDragStream()
            .pipe(map((dragElement) => {
            /** @type {?} */
            const isDragElement = !!dragElement && !!dragElement.data;
            if (isDragElement) {
                if (dragElement.type === DragAndDrop.DROP_DATA_TYPE) {
                    /** @type {?} */
                    const isNotRootElement = dragElement.data.parentId;
                    /** @type {?} */
                    const isFromCurrentTree = dragElement.data.treeId === this.treeModel.treeId;
                    return (isNotRootElement && isFromCurrentTree) ? true : false;
                }
                else {
                    return true;
                }
            }
            return false;
        }));
        /** @type {?} */
        const isDragEnd$ = this.dragAndDrop.drop$
            .pipe(map((data) => {
            return false;
        }));
        this.isOpen$ = merge(isDragStart$, isDragEnd$);
    }
    /**
     * @return {?}
     */
    onDrop() {
        this.dragAndDrop.dragEnd(null);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDragOver($event) {
        $event.preventDefault();
    }
}
DropzoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-dropzone',
                template: "<div *ngIf=\"isOpen$ | async\" (drop)=\"onDrop()\" (dragover)=\"onDragOver($event)\" class=\"dropzone\">\n  {{'RI_TREE_LBL_DROP_ZONE' | translate}}\n</div>\n",
                styles: [".dropzone{display:inline-block;border:1px dotted red;padding:10px;background-color:rgba(255,0,0,.3)}"]
            }] }
];
/** @nocollapse */
DropzoneComponent.ctorParameters = () => [
    { type: DragAndDrop }
];
DropzoneComponent.propDecorators = {
    treeModel: [{ type: Input }],
    dropZone: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NodeDispatcherService {
    constructor() {
        this.nodeServices = {};
    }
    /**
     * @param {?} name
     * @param {?} nodeService
     * @return {?}
     */
    registerService(name, nodeService) {
        this.nodeServices[name] = nodeService;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        if (Boolean(this.nodeServices[name])) {
            return this.nodeServices[name];
        }
        else {
            // default node service provider
            throw Error(`No tree service with name ${name}`);
        }
    }
}
NodeDispatcherService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeEffectsService {
    /**
     * @param {?} actions$
     * @param {?} nodeDispatcherService
     * @param {?} store
     */
    constructor(actions$, nodeDispatcherService, store) {
        this.actions$ = actions$;
        this.nodeDispatcherService = nodeDispatcherService;
        this.store = store;
        this.register$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_REGISTER), map((action) => {
            if (action.payload.silent) {
                return new TreeSetAllNodesAction({ treeId: action.payload.treeId, nodes: action.payload.nodes });
            }
            else {
                return new TreeLoadNodesAction({ treeId: action.payload.treeId, id: null });
            }
        }));
        this.load$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_LOAD), mergeMap((action) => this.loadNodes(action.payload.treeId, action.payload.id)
            .pipe(map((nodesData) => new TreeLoadNodesSuccessAction({
            treeId: action.payload.treeId,
            id: action.payload.id,
            nodes: nodesData
        })), catchError(() => of(new TreeLoadNodesErrorAction({
            treeId: action.payload.treeId,
            id: action.payload.id
        }))))));
        this.delete$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_DELETE_NODE), switchMap((action) => this.deleteNode(action.payload.treeId, action.payload.node)
            .pipe(map(() => new TreeDeleteNodeSuccessAction(Object.assign({}, action.payload))), catchError(() => of(new TreeDeleteNodeErrorAction(Object.assign({}, action.payload)))))));
        this.save$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_SAVE_NODE), switchMap((action) => this.saveNode(action.payload.treeId, Object.assign({}, action.payload.node))
            .pipe(map((node) => new TreeSaveNodeSuccessAction({
            treeId: action.payload.treeId,
            oldNode: action.payload.node,
            node
        })), catchError(() => of(new TreeSaveNodeErrorAction(Object.assign({}, action.payload)))))));
        this.move$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_MOVE_NODE), filter((action) => {
            return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
        }), switchMap((action) => {
            /** @type {?} */
            const source = (/** @type {?} */ (Object.assign({}, action.payload.oldNode)));
            /** @type {?} */
            const target = Boolean(action.payload.node) ? Object.assign({}, action.payload.node) : null;
            return this.moveNode(action.payload.treeId, source, target)
                .pipe(map((node) => {
                return {
                    treeId: action.payload.treeId,
                    oldNode: action.payload.oldNode,
                    node: node
                };
            }), switchMap((data) => {
                return this.store.select(treeConfigurationSelector(action.payload.treeId))
                    .pipe(take(1), map((configuration) => {
                    return {
                        configuration,
                        data
                    };
                }));
            }), catchError(() => {
                /** @type {?} */
                const newAction = new TreeMoveNodeErrorAction({
                    treeId: action.payload.treeId,
                    source: action.payload.oldNode,
                    target: action.payload.node
                });
                return of(newAction);
            }));
        }), mergeMap((value) => {
            /** @type {?} */
            const data = value.data;
            /** @type {?} */
            const actions = [
                new TreeMoveNodeSuccessAction({ treeId: data.treeId, source: data.oldNode, target: data.node }),
            ];
            if (!value.configuration.isFullyLoaded) {
                actions.push(new TreeLoadNodesAction({ treeId: data.treeId, id: data.node.parentId }));
            }
            return actions;
        }));
        this.expand$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_EXPAND_NODE), switchMap((action) => this.store
            .pipe(select(treeSelector(action.payload.treeId)), take(1), filter((treeState) => !treeState.configuration.isFullyLoaded), map(() => {
            return new TreeLoadNodesAction({
                treeId: action.payload.treeId,
                id: action.payload.id
            });
        }))));
        this.insert$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_INSERT_NODE), filter((action) => !!action.payload.parentId), map((action) => {
            return new TreeExpandNodeAction({ treeId: action.payload.treeId, id: action.payload.parentId });
        }));
        this.initPathForFullyLoadedTreeEffect$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_LOAD_PATH), switchMap((action) => {
            return this.store.select(treeConfigurationSelector(action.payload.treeId))
                .pipe(take(1), map((configuration) => {
                return { action, configuration };
            }));
        }), map((value) => {
            const { action, configuration } = value;
            if (configuration.isFullyLoaded) {
                return action.payload.ids.map((id) => new TreeExpandNodeAction({ treeId: action.payload.treeId, id }));
            }
            else {
                /** @type {?} */
                const loadActions = action.payload.ids.map((id) => this.loadNodes(action.payload.treeId, id));
                return combineLatest(loadActions)
                    .pipe(take(1), mergeMap((data) => {
                    /** @type {?} */
                    const loadSuccess = data.map((nodes, index) => new TreeLoadNodesSuccessAction({
                        treeId: action.payload.treeId,
                        id: action.payload.ids[index],
                        nodes
                    }));
                    /** @type {?} */
                    const expandNodes = action.payload.ids.map((id) => new TreeExpandNodeAction({
                        treeId: action.payload.treeId,
                        id
                    }));
                    return [...loadSuccess, ...expandNodes];
                }));
            }
        }), mergeMap((actions) => actions));
    }
    /**
     * @protected
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    deleteNode(treeId, node) {
        /** @type {?} */
        const nodeService = this.nodeDispatcherService.get(treeId);
        return node.id ? nodeService.remove(node.id) : of(node);
    }
    /**
     * @protected
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    loadNodes(treeId, id) {
        /** @type {?} */
        const nodeService = this.nodeDispatcherService.get(treeId);
        return nodeService.load(id);
    }
    /**
     * @protected
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    saveNode(treeId, node) {
        /** @type {?} */
        const nodeService = this.nodeDispatcherService.get(treeId);
        if (node.id === NEW_NODE_ID) {
            return nodeService.add(node, node.parentId);
        }
        else {
            return nodeService.update(node);
        }
    }
    /**
     * @protected
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    moveNode(treeId, source, target) {
        /** @type {?} */
        const nodeService = this.nodeDispatcherService.get(treeId);
        return nodeService.move(source, target);
    }
}
TreeEffectsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TreeEffectsService.ctorParameters = () => [
    { type: Actions },
    { type: NodeDispatcherService },
    { type: Store }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeModelGeneratorService {
    /**
     * @param {?} nodeDispatcherService
     * @param {?} store
     */
    constructor(nodeDispatcherService, store) {
        this.nodeDispatcherService = nodeDispatcherService;
        this.store = store;
    }
    /**
     * @param {?} configuration
     * @param {?=} nodes
     * @return {?}
     */
    createTreeModel(configuration, nodes = null) {
        /** @type {?} */
        const treeId = configuration.treeId;
        /** @type {?} */
        const isFullyLoaded = Boolean(nodes);
        // register new tree in store
        this.store.dispatch(new TreeRegisterAction({
            treeId,
            silent: isFullyLoaded,
            nodes
        }));
        // init tree configuration
        this.store.dispatch(new TreeSetConfigurationAction({ treeId, configuration }));
        if (Boolean(nodes)) {
            this.nodeDispatcherService.get(treeId).setAllNodes(nodes);
            this.store.dispatch(new TreeMarkAsFullyLoadedAction({ treeId }));
        }
        /** @type {?} */
        const folders$ = this.store.select(treeSelector(configuration.treeId));
        return new TreeModel(this.store, folders$, configuration, isFullyLoaded);
    }
}
TreeModelGeneratorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TreeModelGeneratorService.ctorParameters = () => [
    { type: NodeDispatcherService },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParentsListComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.parents$ = this.treeModel.getParentsList();
    }
    /**
     * @param {?} node
     * @param {?} isCurrentSelectedNode
     * @return {?}
     */
    selectNode(node, isCurrentSelectedNode) {
        if (!isCurrentSelectedNode) {
            this.store.dispatch(new TreeSelectNodeAction({
                treeId: this.treeModel.treeId,
                node,
            }));
        }
    }
}
ParentsListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-tree-parents-list',
                template: "<ul class=\"ri-tree-parents-list\">\n  <li class=\"fa fa-home\" (click)=\"selectNode(null, false)\"></li>\n  <li *ngFor=\"let node of parents$ | async; last as isLast\" (click)=\"selectNode(node, isLast)\">{{node.name}}\n  </li>\n</ul>\n",
                styles: [".ri-tree-parents-list{list-style-type:none;margin:0;padding:0}.ri-tree-parents-list li{display:inline-block;cursor:pointer;color:#777}.ri-tree-parents-list li:after,.ri-tree-parents-list li:first-child,.ri-tree-parents-list li:last-child{color:#000}.ri-tree-parents-list li:not(:last-child):after{content:'/';display:inline-block;width:10px;text-align:center}"]
            }] }
];
/** @nocollapse */
ParentsListComponent.ctorParameters = () => [
    { type: Store }
];
ParentsListComponent.propDecorators = {
    treeModel: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NODE_SERVICE = new InjectionToken('NODE_SERVICE');
class NodeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.apiConfig = {
            addUrl: '/api/nodes',
            getUrl: '/api/nodes',
            moveUrl: '/api/nodes/move',
            updateUrl: '/api/nodes',
            removeUrl: '/api/nodes',
        };
    }
    /**
     * @return {?}
     */
    get treeId() {
        return 'tree';
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    setAllNodes(nodes) {
    }
    /**
     * @param {?=} nodeId
     * @return {?}
     */
    load(nodeId = '') {
        /** @type {?} */
        const params = new HttpParams().set('nodeId', nodeId);
        return this.http.get(this.getPath('GET', nodeId), { params });
    }
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    add(node, parentNodeId = null) {
        return this.http.post(this.getPath('CREATE', parentNodeId), {
            node: node,
            parentNodeId: parentNodeId
        });
    }
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    move(srcNode, targetNode) {
        /** @type {?} */
        const srcId = srcNode.id;
        /** @type {?} */
        const targetId = targetNode ? targetNode.id : null;
        return this.http.put(this.getPath('MOVE', srcId, targetId), { source: srcId, target: targetId });
    }
    /**
     * @param {?} node
     * @return {?}
     */
    update(node) {
        return this.http.put(this.getPath('UPDATE', node.id), node);
    }
    /**
     * @param {?} nodeId
     * @return {?}
     */
    remove(nodeId) {
        /** @type {?} */
        const params = new HttpParams().set('nodeId', nodeId);
        return this.http.delete(this.getPath('REMOVE', nodeId), { params });
    }
    /**
     * @protected
     * @param {?} type
     * @param {?} nodeId
     * @param {?=} destNodeId
     * @return {?}
     */
    getPath(type, nodeId, destNodeId = null) {
        if (!this.apiConfig) {
            throw new Error('No API configuration for Tree');
        }
        /** @type {?} */
        const urlMap = {
            'GET': this.apiConfig.getUrl,
            'CREATE': this.apiConfig.addUrl,
            'REMOVE': this.apiConfig.removeUrl,
            'UPDATE': this.apiConfig.updateUrl,
            'MOVE': this.apiConfig.moveUrl
        };
        /** @type {?} */
        let path = this.replaceNodeId(urlMap[type], nodeId);
        if (destNodeId) {
            path = this.replaceDestNodeId(path, destNodeId);
        }
        return path;
    }
    /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    replaceNodeId(url, nodeId) {
        return url.replace('{nodeId}', nodeId);
    }
    /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    replaceDestNodeId(url, nodeId) {
        return url.replace('{destNodeId}', nodeId);
    }
}
NodeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NodeService.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeInitializerService {
    /**
     * @param {?} treeModelGeneratorService
     * @param {?} nodeDispatcherService
     */
    constructor(treeModelGeneratorService, nodeDispatcherService) {
        this.treeModelGeneratorService = treeModelGeneratorService;
        this.nodeDispatcherService = nodeDispatcherService;
    }
    /**
     * @param {?} treeConfiguration
     * @param {?} treeApi
     * @param {?=} loadedNodes
     * @return {?}
     */
    init(treeConfiguration, treeApi, loadedNodes) {
        this.nodeDispatcherService.registerService(treeConfiguration.treeId, treeApi);
        return this.treeModelGeneratorService.createTreeModel(treeConfiguration, loadedNodes);
    }
}
TreeInitializerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TreeInitializerService.ctorParameters = () => [
    { type: TreeModelGeneratorService },
    { type: NodeDispatcherService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NODE_DISPATCHER_TOKEN = new InjectionToken('NodeDispatcherService');
class TreeModule {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
        this.setTranslationForEN();
        this.setTranslationForPL();
        this.translate.setDefaultLang('en');
    }
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
    /**
     * @return {?}
     */
    static forFeature() {
        return {
            ngModule: TreeModule,
            providers: [],
        };
    }
    /**
     * @private
     * @return {?}
     */
    setTranslationForPL() {
        this.translate.setTranslation('pl', {
            RI_TREE_LBL_ADD_NODE: 'Dodaj',
            RI_TREE_LBL_EDIT_NODE: 'Edytuj',
            RI_TREE_LBL_REMOVE_NODE: 'Usuń',
            RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj'
        });
    }
    /**
     * @private
     * @return {?}
     */
    setTranslationForEN() {
        this.translate.setTranslation('en', {
            RI_TREE_LBL_ADD_NODE: 'Add data',
            RI_TREE_LBL_EDIT_NODE: 'Edit data',
            RI_TREE_LBL_REMOVE_NODE: 'Delete data',
            RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level'
        });
    }
}
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
TreeModule.ctorParameters = () => [
    { type: TranslateService }
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnbi1hbmd1bGFyMi10cmVlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zdG9yZS90cmVlUmVkdWNlci50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvbW9kZWxzL1RyZWVNb2RlbC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvaXRlbS9pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvZHJhZ0FuZERyb3AvZHJhZ0FuZERyb3Auc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvdHJlZS5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL2RyYWdBbmREcm9wL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL2RyYWdBbmREcm9wL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL2RyYWdBbmREcm9wL2Ryb3B6b25lL2Ryb3B6b25lLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvc2VydmljZS9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvc3RvcmUvdHJlZUVmZmVjdHMuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvc2VydmljZS90cmVlTW9kZWxHZW5lcmF0b3Iuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvcGFyZW50cy1saXN0L3BhcmVudHMtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL3NlcnZpY2Uvbm9kZS5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zZXJ2aWNlL2luaXRpYWxpemVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL3RyZWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7QWN0aW9ufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lDb25maWd1cmF0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGVudW0gVHJlZUFjdGlvblR5cGVzIHtcbiAgVFJFRV9TQVZFX05PREUgPSAnVFJFRV9TQVZFX05PREUnLFxuICBUUkVFX1NBVkVfTk9ERV9TVUNDRVNTID0gJ1RSRUVfU0FWRV9OT0RFX1NVQ0NFU1MnLFxuICBUUkVFX1NBVkVfTk9ERV9FUlJPUiA9ICdUUkVFX1NBVkVfTk9ERV9FUlJPUicsXG4gIFRSRUVfREVMRVRFX05PREUgPSAnVFJFRV9ERUxFVEVfTk9ERScsXG4gIFRSRUVfREVMRVRFX05PREVfU1VDQ0VTUyA9ICdUUkVFX0RFTEVURV9OT0RFX1NVQ0NFU1MnLFxuICBUUkVFX0RFTEVURV9OT0RFX0VSUk9SID0gJ1RSRUVfREVMRVRFX05PREVfRVJST1InLFxuICBUUkVFX0VESVRfTk9ERV9TVEFSVCA9ICdUUkVFX0VESVRfTk9ERV9TVEFSVCcsXG4gIFRSRUVfQ09MTEFQU0VfTk9ERSA9ICdUUkVFX0NPTExBUFNFX05PREUnLFxuICBUUkVFX0VYUEFORF9OT0RFID0gJ1RSRUVfRVhQQU5EX05PREUnLFxuICBUUkVFX0lOU0VSVF9OT0RFID0gJ1RSRUVfSU5TRVJUX05PREUnLFxuICBUUkVFX0xPQUQgPSAnVFJFRV9MT0FEJyxcbiAgVFJFRV9MT0FEX1BBVEggPSAnVFJFRV9MT0FEX1BBVEgnLFxuICBUUkVFX0xPQURfU1VDQ0VTUyA9ICdUUkVFX0xPQURfU1VDQ0VTUycsXG4gIFRSRUVfTE9BRF9FUlJPUiA9ICdUUkVFX0xPQURfRVJST1InLFxuICBUUkVFX01BUktfQVNfRlVMTFlfTE9BREVEID0gJ1RSRUVfTUFSS19BU19GVUxMWV9MT0FERUQnLFxuICBUUkVFX01PVkVfTk9ERSA9ICdUUkVFX01PVkVfTk9ERScsXG4gIFRSRUVfTU9WRV9OT0RFX1NVQ0NFU1MgPSAnVFJFRV9NT1ZFX05PREVfU1VDQ0VTUycsXG4gIFRSRUVfTU9WRV9OT0RFX0VSUk9SID0gJ1RSRUVfTU9WRV9OT0RFX0VSUk9SJyxcbiAgVFJFRV9SRUdJU1RFUiA9ICdUUkVFX1JFR0lTVEVSJyxcbiAgVFJFRV9TRUxFQ1RfTk9ERSA9ICdUUkVFX1NFTEVDVF9OT0RFJyxcbiAgVFJFRV9TRVRfQUxMX05PREVTID0gJ1RSRUVfU0VUX0FMTF9OT0RFUycsXG4gIFRSRUVfU0VUX0NPTkZJR1VSQVRJT04gPSAnVFJFRV9TRVRfQ09ORklHVVJBVElPTidcbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfQ09MTEFQU0VfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVEZWxldGVOb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZURlbGV0ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUVkaXROb2RlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfRURJVF9OT0RFX1NUQVJUO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlRXhwYW5kTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9FWFBBTkRfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVJbnNlcnROb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0lOU0VSVF9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgcGFyZW50SWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUxvYWROb2Rlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUxvYWROb2Rlc0Vycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQURfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nLCBub2RlczogSU91dGVyTm9kZVtdIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTG9hZFBhdGhBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRF9QQVRIO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWRzOiBzdHJpbmdbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX01BUktfQVNfRlVMTFlfTE9BREVEO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1vdmVOb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHNvdXJjZU9mRHJvcHBlZERhdGE6IHN0cmluZywgb2xkTm9kZTogYW55LCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTW92ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBzb3VyY2U6IElPdXRlck5vZGUsIHRhcmdldDogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHNvdXJjZTogSU91dGVyTm9kZSwgdGFyZ2V0OiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlUmVnaXN0ZXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfUkVHSVNURVI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBzaWxlbnQ6IGJvb2xlYW4sIG5vZGVzOiBJT3V0ZXJOb2RlW10gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTYXZlTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2F2ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NBVkVfTk9ERV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSwgb2xkTm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVNlbGVjdE5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VMRUNUX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2V0QWxsTm9kZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VUX0FMTF9OT0RFUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGVzOiBJT3V0ZXJOb2RlW10gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFVF9DT05GSUdVUkFUSU9OO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVHJlZUFjdGlvbiA9XG4gIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb25cbiAgfCBUcmVlRGVsZXRlTm9kZUFjdGlvblxuICB8IFRyZWVEZWxldGVOb2RlRXJyb3JBY3Rpb25cbiAgfCBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlRWRpdE5vZGVTdGFydEFjdGlvblxuICB8IFRyZWVFeHBhbmROb2RlQWN0aW9uXG4gIHwgVHJlZUluc2VydE5vZGVBY3Rpb25cbiAgfCBUcmVlTG9hZE5vZGVzQWN0aW9uXG4gIHwgVHJlZUxvYWROb2Rlc0Vycm9yQWN0aW9uXG4gIHwgVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVMb2FkUGF0aEFjdGlvblxuICB8IFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvblxuICB8IFRyZWVNb3ZlTm9kZUFjdGlvblxuICB8IFRyZWVNb3ZlTm9kZUVycm9yQWN0aW9uXG4gIHwgVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVSZWdpc3RlckFjdGlvblxuICB8IFRyZWVTYXZlTm9kZUFjdGlvblxuICB8IFRyZWVTYXZlTm9kZUVycm9yQWN0aW9uXG4gIHwgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVTZWxlY3ROb2RlQWN0aW9uXG4gIHwgVHJlZVNldEFsbE5vZGVzQWN0aW9uXG4gIHwgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb25cbiAgO1xuIiwiaW1wb3J0IHtJVHJlZUNvbmZpZ3VyYXRpb24sIElUcmVlRGF0YSwgSVRyZWVOb2RlcywgSVRyZWVTdGF0ZX0gZnJvbSAnLi9JVHJlZVN0YXRlJztcbmltcG9ydCB7XG4gIFRyZWVBY3Rpb24sXG4gIFRyZWVBY3Rpb25UeXBlcyxcbiAgVHJlZUNvbGxhcHNlTm9kZUFjdGlvbixcbiAgVHJlZURlbGV0ZU5vZGVTdWNjZXNzQWN0aW9uLFxuICBUcmVlRXhwYW5kTm9kZUFjdGlvbixcbiAgVHJlZUluc2VydE5vZGVBY3Rpb24sXG4gIFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uLFxuICBUcmVlTWFya0FzRnVsbHlMb2FkZWRBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVSZWdpc3RlckFjdGlvbixcbiAgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbixcbiAgVHJlZVNlbGVjdE5vZGVBY3Rpb24sXG4gIFRyZWVTZXRBbGxOb2Rlc0FjdGlvbixcbiAgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb25cbn0gZnJvbSAnLi90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7Y3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvcn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtNZW1vaXplZFNlbGVjdG9yfSBmcm9tICdAbmdyeC9zdG9yZS9zcmMvc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgTkVXX05PREVfSUQgPSAncmktbmV3LW5vZGUtaWQnO1xuXG5leHBvcnQgY29uc3QgZW1wdHlUcmVlRGF0YTogSVRyZWVEYXRhID0ge1xuICBub2Rlczoge1xuICAgIGVudGl0aWVzOiB7fSxcbiAgICBwcmV2aW91c2x5U2VsZWN0ZWQ6IG51bGwsXG4gICAgc2VsZWN0ZWQ6IG51bGwsXG4gICAgcm9vdE5vZGVzOiBbXSxcbiAgICBleHBhbmRlZDogW10sXG4gIH0sXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICBpc0Z1bGx5TG9hZGVkOiBmYWxzZVxuICB9XG59O1xuXG5mdW5jdGlvbiBjb3B5U3RhdGUoc3RhdGU6IElUcmVlU3RhdGUsIHRyZWVJZDogc3RyaW5nID0gbnVsbCkge1xuICBjb25zdCBuZXdTdGF0ZSA9IHsuLi5zdGF0ZX07XG5cbiAgLy8gdG9kbzogZmluZCBiZXR0ZXIgd2F5IHRvIGNsb25lIG9iamVjdFxuICBpZiAodHJlZUlkKSB7XG4gICAgbmV3U3RhdGVbdHJlZUlkXSA9IHtcbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIGVudGl0aWVzOiB7Li4uc3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc30sXG4gICAgICAgIHByZXZpb3VzbHlTZWxlY3RlZDogc3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQsXG4gICAgICAgIHNlbGVjdGVkOiBzdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkLFxuICAgICAgICByb290Tm9kZXM6IFsuLi5zdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2Rlc10sXG4gICAgICAgIGV4cGFuZGVkOiBbLi4uc3RhdGVbdHJlZUlkXS5ub2Rlcy5leHBhbmRlZF0sXG4gICAgICB9LFxuICAgICAgY29uZmlndXJhdGlvbjogey4uLnN0YXRlW3RyZWVJZF0uY29uZmlndXJhdGlvbn1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbik6IElUcmVlU3RhdGUge1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgYWN0aW9uLnBheWxvYWQudHJlZUlkKTtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCB0cmVlU3RhdGUgPSBuZXdTdGF0ZVt0cmVlSWRdO1xuICBjb25zdCBub2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgcGFyZW50SWQgPSBub2RlLnBhcmVudElkO1xuXG4gIGRlbGV0ZSB0cmVlU3RhdGUubm9kZXMuZW50aXRpZXNbbm9kZS5pZF07XG5cbiAgaWYgKHBhcmVudElkKSB7XG4gICAgY29uc3QgcGFyZW50ID0gey4uLnRyZWVTdGF0ZS5ub2Rlcy5lbnRpdGllc1twYXJlbnRJZF19O1xuXG4gICAgaWYgKHBhcmVudC5jaGlsZHJlbikge1xuICAgICAgcGFyZW50LmNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuLmZpbHRlcigoaWQpID0+IGlkICE9PSBub2RlLmlkKTtcbiAgICB9XG4gICAgdHJlZVN0YXRlLm5vZGVzLmVudGl0aWVzW3BhcmVudElkXSA9IHBhcmVudDtcbiAgfSBlbHNlIHtcbiAgICB0cmVlU3RhdGUubm9kZXMucm9vdE5vZGVzID0gdHJlZVN0YXRlLm5vZGVzLnJvb3ROb2Rlcy5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gbm9kZS5pZCk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gbG9hZE5vZGVzKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uKSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBsZXQgcGFyZW50OiBJT3V0ZXJOb2RlIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgcGFyZW50SWQgPSBhY3Rpb24ucGF5bG9hZC5pZDtcblxuICBpZiAocGFyZW50SWQpIHtcbiAgICBwYXJlbnQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW3BhcmVudElkXTtcbiAgICBwYXJlbnQuY2hpbGRyZW4gPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzID0ge307XG4gIH1cblxuICBhY3Rpb24ucGF5bG9hZC5ub2Rlcy5mb3JFYWNoKChub2RlRGF0YTogSU91dGVyTm9kZSkgPT4ge1xuICAgIG5vZGVEYXRhLnRyZWVJZCA9IHRyZWVJZDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlRGF0YS5pZCk7XG4gICAgICBub2RlRGF0YS5wYXJlbnRzID0gWy4uLnBhcmVudC5wYXJlbnRzLCAuLi5bcGFyZW50LmlkXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVEYXRhLnBhcmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVEYXRhLmlkXSA9IG5vZGVEYXRhO1xuXG4gICAgaWYgKCFwYXJlbnRJZCkge1xuICAgICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlRGF0YS5pZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gZXhwYW5kTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlRXhwYW5kTm9kZUFjdGlvbik6IElUcmVlU3RhdGUge1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCB0cmVlSWQpO1xuICBjb25zdCBub2RlSWQgPSBhY3Rpb24ucGF5bG9hZC5pZDtcblxuICAvLyBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVJZF0gPSBPYmplY3QuYXNzaWduKHt9LCBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVJZF0sIHtpc0V4cGFuZGVkOiB0cnVlfSk7XG4gIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgPSBbLi4ubmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5leHBhbmRlZCwgbm9kZUlkXTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gY29sbGFwc2VOb2RlKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcbiAgY29uc3Qgbm9kZUlkID0gYWN0aW9uLnBheWxvYWQuaWQ7XG5cbiAgLy8gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tub2RlSWRdID0gey4uLm5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZW50aXRpZXNbbm9kZUlkXSwgLi4ue2lzRXhwYW5kZWQ6IGZhbHNlfX07XG4gIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmV4cGFuZGVkLmZpbHRlcigoaWQpID0+IGlkICE9PSBub2RlSWQpO1xuXG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5cbmZ1bmN0aW9uIGluc2VydE5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZUluc2VydE5vZGVBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcbiAgY29uc3QgcGFyZW50SWQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJZDtcbiAgY29uc3QgbmV3Tm9kZTogSU91dGVyTm9kZSA9IHtcbiAgICBpZDogTkVXX05PREVfSUQsXG4gICAgdHJlZUlkOiB0cmVlSWQsXG4gICAgbmFtZTogJ05ldyBkYXRhJyxcbiAgICBwYXJlbnRJZDogcGFyZW50SWQsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIHBhcmVudHM6IFtdLFxuICAgIGlzRXhwYW5kZWQ6IGZhbHNlXG4gIH07XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tORVdfTk9ERV9JRF0gPSBuZXdOb2RlO1xuXG4gIGlmICghcGFyZW50SWQpIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcyA9IFsuLi5uZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcywgTkVXX05PREVfSURdO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBzYXZlTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBjb25zdCBvbGQgPSBhY3Rpb24ucGF5bG9hZC5vbGROb2RlO1xuICBjb25zdCBuZXdOb2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCB0cmVlU3RhdGUgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzO1xuXG4gIGlmICh0cmVlU3RhdGVbTkVXX05PREVfSURdKSB7XG4gICAgZGVsZXRlIHRyZWVTdGF0ZVtORVdfTk9ERV9JRF07XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIHRyZWVTdGF0ZVtvbGQuaWRdO1xuICB9XG5cbiAgY29uc3Qgbm9kZUlkID0gbmV3Tm9kZS5pZDtcbiAgdHJlZVN0YXRlW25vZGVJZF0gPSBuZXdOb2RlO1xuXG4gIGNvbnN0IHBhcmVudElkID0gbmV3Tm9kZS5wYXJlbnRJZDtcbiAgY29uc3QgcGFyZW50ID0gdHJlZVN0YXRlW3BhcmVudElkXSB8fCBudWxsO1xuXG4gIG5ld05vZGUucGFyZW50cyA9IFtdO1xuXG4gIGlmIChwYXJlbnRJZCkge1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlSWQpO1xuXG4gICAgICBuZXdOb2RlLnBhcmVudHMgPSBbLi4ucGFyZW50LnBhcmVudHMsIHBhcmVudC5pZF07XG4gICAgfVxuICB9IGVsc2UgaWYgKG9sZC5pZCA9PT0gTkVXX05PREVfSUQpIHtcbiAgICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2RlcyA9IG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMucm9vdE5vZGVzLmZpbHRlcigoaWQpID0+IGlkICE9PSBORVdfTk9ERV9JRCk7XG4gICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlSWQpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBtb3ZlTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlTW92ZU5vZGVTdWNjZXNzQWN0aW9uKSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBjb25zdCBvbGROb2RlID0gYWN0aW9uLnBheWxvYWQuc291cmNlO1xuICBjb25zdCBuZXdOb2RlID0gYWN0aW9uLnBheWxvYWQudGFyZ2V0O1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IHRyZWVEYXRhID0gbmV3U3RhdGVbdHJlZUlkXTtcbiAgY29uc3QgdHJlZVN0YXRlID0gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllcztcblxuICAvLyByZW1vdmUgaW5mbyBhYm91dCByZW1vdmVkIGNoaWxkXG4gIGlmIChvbGROb2RlLnBhcmVudElkKSB7XG4gICAgdHJlZVN0YXRlW29sZE5vZGUucGFyZW50SWRdLmNoaWxkcmVuID0gdHJlZVN0YXRlW29sZE5vZGUucGFyZW50SWRdLmNoaWxkcmVuLmZpbHRlcigoaWQpID0+IGlkICE9PSBvbGROb2RlLmlkKTtcbiAgfSBlbHNlIHtcbiAgICB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMgPSB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMuZmlsdGVyKChpZCkgPT4gaWQgIT09IG9sZE5vZGUuaWQpO1xuICB9XG5cbiAgLy8gYWRkIGluZm8gYWJvdXQgbW92ZWQgbm9kZVxuICBpZiAobmV3Tm9kZS5wYXJlbnRJZCkge1xuICAgIGNvbnN0IG5ld1BhcmVudCA9IHRyZWVTdGF0ZVtuZXdOb2RlLnBhcmVudElkXTtcblxuICAgIGlmIChuZXdQYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgIG5ld1BhcmVudC5jaGlsZHJlbi5wdXNoKG5ld05vZGUuaWQpO1xuICAgIH1cblxuICAgIG5ld05vZGUucGFyZW50cyA9IFsuLi5uZXdQYXJlbnQucGFyZW50cywgbmV3UGFyZW50LmlkXTtcbiAgfSBlbHNlIHtcbiAgICB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMucHVzaChuZXdOb2RlLmlkKTtcbiAgICBuZXdOb2RlLnBhcmVudHMgPSBbXTtcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugbm9kZSBkYXRhXG4gIHRyZWVTdGF0ZVtuZXdOb2RlLmlkXSA9IHsuLi5uZXdOb2RlfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJlZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlUmVnaXN0ZXJBY3Rpb24pIHtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUpO1xuXG4gIG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLnRyZWVJZF0gPSB7XG4gICAgbm9kZXM6IHtcbiAgICAgIGVudGl0aWVzOiB7Li4uZW1wdHlUcmVlRGF0YS5ub2Rlcy5lbnRpdGllc30sXG4gICAgICBwcmV2aW91c2x5U2VsZWN0ZWQ6IGVtcHR5VHJlZURhdGEubm9kZXMucHJldmlvdXNseVNlbGVjdGVkLFxuICAgICAgc2VsZWN0ZWQ6IGVtcHR5VHJlZURhdGEubm9kZXMuc2VsZWN0ZWQsXG4gICAgICByb290Tm9kZXM6IFsuLi5lbXB0eVRyZWVEYXRhLm5vZGVzLnJvb3ROb2Rlc10sXG4gICAgICBleHBhbmRlZDogWy4uLmVtcHR5VHJlZURhdGEubm9kZXMuZXhwYW5kZWRdXG4gICAgfSxcbiAgICBjb25maWd1cmF0aW9uOiB7Li4uZW1wdHlUcmVlRGF0YS5jb25maWd1cmF0aW9ufVxuICB9O1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuXG5mdW5jdGlvbiBzZXRBbGxOb2RlcyhzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlU2V0QWxsTm9kZXNBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnRyZWVJZCk7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3Qgbm9kZXMgPSBhY3Rpb24ucGF5bG9hZC5ub2RlcztcbiAgY29uc3QgbmV3Tm9kZXM6IElUcmVlTm9kZXMgPSB7fTtcbiAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IG5vZGVzLm1hcCgobm9kZURhdGE6IElPdXRlck5vZGUpID0+IG5vZGVEYXRhLmlkKTtcblxuICBub2Rlcy5mb3JFYWNoKChub2RlRGF0YTogSU91dGVyTm9kZSkgPT4ge1xuICAgIG5vZGVEYXRhLnRyZWVJZCA9IHRyZWVJZDtcbiAgICBuZXdOb2Rlc1tub2RlRGF0YS5pZF0gPSBub2RlRGF0YTtcblxuICAgIGlmIChub2RlRGF0YS5wYXJlbnRJZCA9PT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMucHVzaChub2RlRGF0YS5pZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2Rlcy5mb3JFYWNoKChpZCkgPT4gdXBkYXRlUGFyZW50cyhuZXdOb2RlcywgaWQpKTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzID0gbmV3Tm9kZXM7XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRzKG5vZGVzOiBJVHJlZU5vZGVzLCBub2RlSWQ6IHN0cmluZywgcGFyZW50czogc3RyaW5nW10gPSBbXSk6IHZvaWQge1xuICBjb25zdCBub2RlOiBJT3V0ZXJOb2RlID0gbm9kZXNbbm9kZUlkXTtcblxuICBpZiAobm9kZSkge1xuICAgIG5vZGUucGFyZW50cyA9IFsuLi5wYXJlbnRzXTtcblxuICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSBbLi4ucGFyZW50cywgLi4uW25vZGUuaWRdXTtcblxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkSWQgPT4gdXBkYXRlUGFyZW50cyhub2RlcywgY2hpbGRJZCwgbmV3UGFyZW50cykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrVHJlZUFzRnVsbHlMb2FkZWQoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5jb25maWd1cmF0aW9uID0gey4uLm5ld1N0YXRlW3RyZWVJZF0uY29uZmlndXJhdGlvbiwgLi4ue2lzRnVsbHlMb2FkZWQ6IHRydWV9fTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNldENvbmZpZ3VyYXRpb24oc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcblxuICBuZXdTdGF0ZVt0cmVlSWRdLmNvbmZpZ3VyYXRpb24gPSB7Li4ubmV3U3RhdGVbdHJlZUlkXS5jb25maWd1cmF0aW9uLCAuLi5hY3Rpb24ucGF5bG9hZC5jb25maWd1cmF0aW9ufTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVNlbGVjdE5vZGVBY3Rpb24pIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBub2RlID0gYWN0aW9uLnBheWxvYWQubm9kZTtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkO1xuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkID0gbm9kZSA/IG5vZGUuaWQgOiBudWxsO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVSZWR1Y2VyKHN0YXRlOiBJVHJlZVN0YXRlID0ge30sIGFjdGlvbjogVHJlZUFjdGlvbik6IElUcmVlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9SRUdJU1RFUjpcbiAgICAgIHJldHVybiByZWdpc3RlclRyZWUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBzYXZlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gcmVtb3ZlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0lOU0VSVF9OT0RFOlxuICAgICAgcmV0dXJuIGluc2VydE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gbG9hZE5vZGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfTU9WRV9OT0RFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gbW92ZU5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TRVRfQUxMX05PREVTOlxuICAgICAgcmV0dXJuIHNldEFsbE5vZGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfTUFSS19BU19GVUxMWV9MT0FERUQ6XG4gICAgICByZXR1cm4gbWFya1RyZWVBc0Z1bGx5TG9hZGVkKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VUX0NPTkZJR1VSQVRJT046XG4gICAgICByZXR1cm4gc2V0Q29uZmlndXJhdGlvbihzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VYUEFORF9OT0RFOlxuICAgICAgcmV0dXJuIGV4cGFuZE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9DT0xMQVBTRV9OT0RFOlxuICAgICAgcmV0dXJuIGNvbGxhcHNlTm9kZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFTEVDVF9OT0RFOlxuICAgICAgcmV0dXJuIHNlbGVjdE5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERTpcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VESVRfTk9ERV9TVEFSVDpcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQUQ6XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREU6XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREU6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCB0cmVlU3RhdGVTZWxlY3RvcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElUcmVlU3RhdGU+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPElUcmVlU3RhdGU+KCd0cmVlcycpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJlZVNlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElUcmVlRGF0YT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IodHJlZVN0YXRlU2VsZWN0b3IsIChzdGF0ZTogSVRyZWVTdGF0ZSkgPT4gc3RhdGVbdHJlZUlkXSB8fCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVDb25maWd1cmF0aW9uU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgSVRyZWVDb25maWd1cmF0aW9uPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcih0cmVlU3RhdGVTZWxlY3RvciwgKHN0YXRlOiBJVHJlZVN0YXRlKSA9PiBzdGF0ZVt0cmVlSWRdLmNvbmZpZ3VyYXRpb24gfHwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRlZE5vZGVzU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nW10+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKHRyZWVTdGF0ZVNlbGVjdG9yLCAoc3RhdGU6IElUcmVlU3RhdGUpID0+IHN0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQgfHwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0ZWROb2RlU2VsZWN0b3IodHJlZUlkOiBzdHJpbmcpOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcih0cmVlU3RhdGVTZWxlY3RvciwgKHN0YXRlOiBJVHJlZVN0YXRlKSA9PiBzdGF0ZVt0cmVlSWRdLm5vZGVzLnNlbGVjdGVkIHx8IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZz4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IodHJlZVN0YXRlU2VsZWN0b3IsIChzdGF0ZTogSVRyZWVTdGF0ZSkgPT4gc3RhdGVbdHJlZUlkXS5ub2Rlcy5wcmV2aW91c2x5U2VsZWN0ZWQgfHwgbnVsbCk7XG59XG4iLCJpbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0lDb25maWd1cmF0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SVRyZWVEYXRhLCBJVHJlZU5vZGVzLCBJVHJlZVN0YXRlfSBmcm9tICcuLi9zdG9yZS9JVHJlZVN0YXRlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgX2lzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuaW1wb3J0IHtcbiAgZXhwYW5kZWROb2Rlc1NlbGVjdG9yLFxuICBORVdfTk9ERV9JRCxcbiAgcHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yLFxuICBzZWxlY3RlZE5vZGVTZWxlY3RvclxufSBmcm9tICcuLi9zdG9yZS90cmVlUmVkdWNlcic7XG5pbXBvcnQge3NlbGVjdCwgU3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7VHJlZUxvYWRQYXRoQWN0aW9ufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuY29uc3QgaXNFcXVhbCA9IF9pc0VxdWFsO1xuXG5leHBvcnQgY2xhc3MgVHJlZU1vZGVsIHtcblxuICBwdWJsaWMgZ2V0IHRyZWVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb24udHJlZUlkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0Z1bGx5TG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mdWxseUxvYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBub2RlcyQ6IE9ic2VydmFibGU8SVRyZWVOb2Rlcz47XG4gIHB1YmxpYyByb290Tm9kZXMkOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT47XG4gIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWROb2RlJDogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcbiAgcHJpdmF0ZSBleHBhbmRlZDogU2V0PHN0cmluZz47XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgcHJldmlvdXNseVNlbGVjdGVkOiBzdHJpbmcgPSBudWxsO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIHRyZWVEYXRhJDogT2JzZXJ2YWJsZTxJVHJlZURhdGE+LFxuICAgICAgICAgICAgICAgICAgICAgcHVibGljIGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9mdWxseUxvYWRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5ub2RlcyQgPSB0aGlzLnRyZWVEYXRhJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJVHJlZURhdGEsIG5leHQ6IElUcmVlRGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpc0VxdWFsKHByZXYubm9kZXMuZW50aXRpZXMsIG5leHQubm9kZXMuZW50aXRpZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKCh0cmVlRGF0YTogSVRyZWVEYXRhKTogSVRyZWVOb2RlcyA9PiB0cmVlRGF0YS5ub2Rlcy5lbnRpdGllcylcbiAgICAgICk7XG5cbiAgICB0aGlzLnJvb3ROb2RlcyQgPSB0aGlzLnRyZWVEYXRhJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgodHJlZURhdGE6IElUcmVlRGF0YSk6IElPdXRlck5vZGVbXSA9PiB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMubWFwKChpZCkgPT4gdHJlZURhdGEubm9kZXMuZW50aXRpZXNbaWRdKS5zb3J0KHRoaXMuc29ydE5vZGVzKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApO1xuXG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlJCA9IHRoaXMudHJlZURhdGEkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh0cmVlRGF0YTogSVRyZWVEYXRhKTogSU91dGVyTm9kZSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZXNEYXRhID0gdHJlZURhdGEubm9kZXM7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZCA9IG5vZGVzRGF0YS5zZWxlY3RlZDtcblxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZElkID8gbm9kZXNEYXRhLmVudGl0aWVzW3NlbGVjdGVkSWRdIDogbnVsbDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJT3V0ZXJOb2RlLCBuZXh0OiBJT3V0ZXJOb2RlKSA9PiB7XG4gICAgICAgIC8vICAgcmV0dXJuIGlzRXF1YWwocHJldiA/IHByZXYuaWQgOiBudWxsLCBuZXh0ID8gbmV4dC5pZCA6IG51bGwpXG4gICAgICAgIC8vIH0pXG4gICAgICApO1xuXG4gICAgdGhpcy5pbml0Q29uZmlndXJhdGlvbigpO1xuICAgIHRoaXMuc3Vic2NyaWJlRXhwYW5kZWQoKTtcbiAgICB0aGlzLnN1YnNjcmliZVNlbGVjdGVkKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVQcmV2aW91c2x5U2VsZWN0ZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyZW50c0xpc3QoKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSQsXG4gICAgICB0aGlzLm5vZGVzJFxuICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFtjdXJyZW50Tm9kZSwgbm9kZXNdOiBbSU91dGVyTm9kZSwgSVRyZWVOb2Rlc10pOiBJT3V0ZXJOb2RlW10gPT4ge1xuICAgICAgICAgIGlmICghQm9vbGVhbihjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXJlbnRzOiBJT3V0ZXJOb2RlW10gPSBjdXJyZW50Tm9kZS5wYXJlbnRzLm1hcChpZCA9PiBub2Rlc1tpZF0pO1xuXG4gICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZHJlbihub2RlSWQ6IHN0cmluZyB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhdGU6IElUcmVlTm9kZXMpOiBJT3V0ZXJOb2RlW10gPT4gdGhpcy5nZXROb2Rlc0J5UGFyZW50SWQoc3RhdGUsIG5vZGVJZCkpLFxuICAgICAgICBtYXAoKG5vZGVzOiBJT3V0ZXJOb2RlW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gWy4uLm5vZGVzXS5zb3J0KHRoaXMuc29ydE5vZGVzKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgaW5pdFBhdGgocGF0aDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlTG9hZFBhdGhBY3Rpb24oe3RyZWVJZDogdGhpcy5jb25maWd1cmF0aW9uLnRyZWVJZCwgaWRzOiBwYXRofSkpO1xuICB9XG5cbiAgcHVibGljIGlzRXhwYW5kZWQobm9kZTogSU91dGVyTm9kZSk6IGJvb2xlYW4ge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkLmhhcyhub2RlLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKG5vZGU6IElPdXRlck5vZGUpOiBib29sZWFuIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCA9PT0gbm9kZS5pZDtcbiAgfVxuXG4gIHB1YmxpYyB3YXNQcmV2aW91c2x5U2VsZWN0ZWQobm9kZUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c2x5U2VsZWN0ZWQgPT09IG5vZGVJZDtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uID0ge1xuICAgICAgZGlzYWJsZU1vdmVOb2RlczogZmFsc2UsXG4gICAgICBkcmFnWm9uZTogbnVsbCxcbiAgICAgIGRyb3Bab25lOiBudWxsLFxuICAgICAgdHJlZUlkOiAndHJlZScsXG4gICAgICBzaG93QWRkQnV0dG9uOiB0cnVlLFxuICAgICAgaXNBbmltYXRpb246IGZhbHNlLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZWZhdWx0Q29uZmlndXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uW2tleV0gPSBkZWZhdWx0Q29uZmlndXJhdGlvbltrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Tm9kZXNCeVBhcmVudElkKHN0YXRlOiBJVHJlZU5vZGVzLCBpZDogc3RyaW5nIHwgbnVsbCk6IElPdXRlck5vZGVbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKVxuICAgICAgLmZpbHRlcigoa2V5OiBzdHJpbmcpID0+IHN0YXRlW2tleV0ucGFyZW50SWQgPT09IGlkKVxuICAgICAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IHN0YXRlW2tleV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Tm9kZXMoZmlyc3Q6IElPdXRlck5vZGUsIHNlY29uZDogSU91dGVyTm9kZSk6IG51bWJlciB7XG4gICAgaWYgKHNlY29uZC5pZCA9PT0gTkVXX05PREVfSUQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3QubmFtZSA+IHNlY29uZC5uYW1lID8gMSA6IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVFeHBhbmRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnN0b3JlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNlbGVjdChleHBhbmRlZE5vZGVzU2VsZWN0b3IodGhpcy50cmVlSWQpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGV4cGFuZGVkOiBzdHJpbmdbXSkgPT4gdGhpcy5leHBhbmRlZCA9IG5ldyBTZXQoZXhwYW5kZWQpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVNlbGVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KHNlbGVjdGVkTm9kZVNlbGVjdG9yKHRoaXMudHJlZUlkKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzZWxlY3RlZDogc3RyaW5nKSA9PiB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlUHJldmlvdXNseVNlbGVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KHByZXZpb3VzbHlTZWxlY3RlZE5vZGVTZWxlY3Rvcih0aGlzLnRyZWVJZCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc2VsZWN0ZWQ6IHN0cmluZykgPT4gdGhpcy5wcmV2aW91c2x5U2VsZWN0ZWQgPSBzZWxlY3RlZClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbnRleHRNZW51Q29tcG9uZW50LCBDb250ZXh0TWVudVNlcnZpY2V9IGZyb20gJ25neC1jb250ZXh0bWVudSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge1xuICBUcmVlQWN0aW9uVHlwZXMsXG4gIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24sXG4gIFRyZWVEZWxldGVOb2RlQWN0aW9uLFxuICBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbixcbiAgVHJlZUV4cGFuZE5vZGVBY3Rpb24sXG4gIFRyZWVTYXZlTm9kZUFjdGlvbixcbiAgVHJlZVNlbGVjdE5vZGVBY3Rpb25cbn0gZnJvbSAnLi4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge0FjdGlvbnN9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGF9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvc3JjL2FuaW1hdGlvbl9tZXRhZGF0YSc7XG5pbXBvcnQge3NlbGVjdCwgU3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SVRyZWVTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge05FV19OT0RFX0lELCBwcmV2aW91c2x5U2VsZWN0ZWROb2RlU2VsZWN0b3J9IGZyb20gJy4uL3N0b3JlL3RyZWVSZWR1Y2VyJztcbmltcG9ydCB7ZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2VtcHR5LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmQoKTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoJ2V4cGFuZCcsIFtcbiAgICBzdGF0ZSgnKicsIHN0eWxlKHsnb3ZlcmZsb3cteSc6ICdoaWRkZW4nfSkpLFxuICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeydvdmVyZmxvdy15JzogJ2hpZGRlbid9KSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgc3R5bGUoe2hlaWdodDogJyonfSksXG4gICAgICBhbmltYXRlKDMwMCwgc3R5bGUoe2hlaWdodDogMH0pKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHtoZWlnaHQ6ICcwJ30pLFxuICAgICAgYW5pbWF0ZSgzMDAsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKVxuICAgIF0pXG4gIF0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdyaS10cmVlLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtleHBhbmQoKV1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogSW5wdXQgZmllbGQgd2hlcmUgd2UgY2FuIGNoYW5nZSBkYXRhIG5hbWVcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0OiBhbnk7XG5cbiAgLyoqXG4gICAqIE5vZGUgaW5zdGFuY2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbm9kZShub2RlOiBJT3V0ZXJOb2RlKSB7XG4gICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICB0aGlzLmluaXRFZGl0TW9kZUlmTmVlZGVkKG5vZGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBub2RlKCk6IElPdXRlck5vZGUge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb250ZXh0TWVudTogQ29udGV4dE1lbnVDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzRXhwYW5kZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBGb3JtIGZpZWxkIHRvIGNoYW5nZSBkYXRhIG5hbWVcbiAgICovXG4gIHB1YmxpYyBuYW1lRmllbGQgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBwdWJsaWMgaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjaGlsZHJlbiQ6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiA9IGVtcHR5KCk7XG5cbiAgcHJvdGVjdGVkIGlzU3RhcnRTYXZlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcm90ZWN0ZWQgX25vZGU6IElPdXRlck5vZGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb250ZXh0TWVudVNlcnZpY2U6IENvbnRleHRNZW51U2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKHZhbHVlcyk6IHZvaWQge1xuICAgIC8vIGlmIG5vZGUgaXMgYWRkZWQgdG8gdGhlIHRyZWUgdGhlbiBzb21lIHBhcnQgb2Ygbm9kZXMgaXMgbW92aW5nIGRvd25cbiAgICAvLyBhbmQgdGhlIG5ldyBvbmUgaXMgaW5zZXJ0ZWQsIHRoZW4gYWxsIHN1YiBub2RlcyBzaG91bGQgYmUgcmV3cml0dGVuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlcy5ub2RlO1xuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZmlyc3RDaGFuZ2UgJiYgbm9kZS5wcmV2aW91c1ZhbHVlLmlkICE9PSBub2RlLmN1cnJlbnRWYWx1ZS5pZCkge1xuICAgICAgdGhpcy5jaGlsZHJlbiQgPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiQgPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUZvck9uRWRpdCgpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zdG9yZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzZWxlY3QocHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yKHRoaXMubm9kZS50cmVlSWQpKSxcbiAgICAgICAgICBmaWx0ZXIoKHByZXZpb3VzbHlTZWxlY3RlZDogc3RyaW5nKSA9PiBwcmV2aW91c2x5U2VsZWN0ZWQgPT09IHRoaXMubm9kZS5pZClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGFwc2Ugbm9kZVxuICAgKi9cbiAgcHVibGljIGNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24oe1xuICAgICAgdHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsXG4gICAgICBpZDogdGhpcy5ub2RlLmlkLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmQgbm9kZVxuICAgKi9cbiAgcHVibGljIGV4cGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlRXhwYW5kTm9kZUFjdGlvbih7dHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsIGlkOiB0aGlzLm5vZGUuaWR9KSk7XG4gIH1cblxuICBwdWJsaWMgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLmlzU3RhcnRTYXZlKSB7XG4gICAgICB0aGlzLmlzU3RhcnRTYXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5kb0NoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy51bmRvQ2hhbmdlcygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuaXNTdGFydFNhdmUgPSB0cnVlO1xuICAgICAgY29uc3Qgbm9kZTogSU91dGVyTm9kZSA9IHtcbiAgICAgICAgaWQ6IHRoaXMubm9kZS5pZCxcbiAgICAgICAgdHJlZUlkOiB0aGlzLm5vZGUudHJlZUlkLFxuICAgICAgICBuYW1lOiB0aGlzLm5hbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgcGFyZW50SWQ6IHRoaXMubm9kZS5wYXJlbnRJZCxcbiAgICAgICAgY2hpbGRyZW46IHRoaXMubm9kZS5jaGlsZHJlbixcbiAgICAgICAgcGFyZW50czogdGhpcy5ub2RlLnBhcmVudHMsXG4gICAgICAgIGlzRXhwYW5kZWQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2F2ZU5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZSxcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KCRldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy50cmVlTW9kZWwuY29uZmlndXJhdGlvbi5kaXNhYmxlQ29udGV4dE1lbnUpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVTZXJ2aWNlLnNob3cubmV4dCh7XG4gICAgICAgIGNvbnRleHRNZW51OiB0aGlzLmNvbnRleHRNZW51LFxuICAgICAgICBldmVudDogJGV2ZW50LFxuICAgICAgICBpdGVtOiB0aGlzLm5vZGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlOiBudWxsLFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlOiB0aGlzLm5vZGUsXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrQnlGbihpdGVtOiBJT3V0ZXJOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDaGlsZHJlbigpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbC5nZXRDaGlsZHJlbih0aGlzLm5vZGUuaWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRFZGl0TW9kZUlmTmVlZGVkKG5vZGU6IElPdXRlck5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzRWRpdE1vZGUgPSBub2RlLmlkID09PSBORVdfTk9ERV9JRDtcblxuICAgIGlmICh0aGlzLmlzRWRpdE1vZGUpIHtcbiAgICAgIHRoaXMubmFtZUZpZWxkLnNldFZhbHVlKCcnKTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNOZXdOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUuaWQgPT09IE5FV19OT0RFX0lEO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldEZvY3VzKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUZvck9uRWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAgIC5vZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfRURJVF9OT0RFX1NUQVJUKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZUVkaXROb2RlU3RhcnRBY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkLm5vZGUgPT09IHRoaXMubm9kZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChhY3Rpb246IFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5uYW1lRmllbGQuc2V0VmFsdWUodGhpcy5ub2RlLm5hbWUpO1xuICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdW5kb0NoYW5nZXMoKSB7XG4gICAgdGhpcy5pc0VkaXRNb2RlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5pc05ld05vZGUoKSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZURlbGV0ZU5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZTogdGhpcy5ub2RlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SURyYWdBbmREcm9wLCBJRHJhZ0VsZW1lbnQsIElEcm9wRWxlbWVudH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JRHJhZ0FuZERyb3AnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHdpdGhMYXRlc3RGcm9tfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnQW5kRHJvcCB7XG4gIHB1YmxpYyBzdGF0aWMgRFJPUF9EQVRBX1RZUEUgPSAnVFJFRV9OT0RFJztcblxuICBwcm90ZWN0ZWQgZHJvcFN0cmVhbSQ6IFN1YmplY3Q8SURyb3BFbGVtZW50IHwgbnVsbD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcm90ZWN0ZWQgZHJhZ1N0cmVhbSQ6IEJlaGF2aW9yU3ViamVjdDxJRHJhZ0VsZW1lbnQgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHVibGljIGRyb3AkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZHJvcCQgPSB0aGlzLmRyb3BTdHJlYW0kXG4gICAgICAucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5kcmFnU3RyZWFtJCksXG4gICAgICAgIG1hcCgoW2Ryb3BOb2RlLCBkcmFnTm9kZV06IFtJRHJvcEVsZW1lbnQsIElEcmFnRWxlbWVudF0pOiBJRHJhZ0FuZERyb3AgPT4ge1xuICAgICAgICAgIHJldHVybiB7ZHJhZ05vZGU6IGRyYWdOb2RlLCBkcm9wTm9kZTogZHJvcE5vZGUsIHR5cGU6IGRyYWdOb2RlLnR5cGV9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmFnU3RhcnQoZHJhZ0VsZW1lbnQ6IElEcmFnRWxlbWVudCkge1xuICAgIHRoaXMuZHJhZ1N0cmVhbSQubmV4dChkcmFnRWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgZHJhZ0VuZChkcm9wRWxlbWVudDogSURyb3BFbGVtZW50IHwgbnVsbCkge1xuICAgIHRoaXMuZHJvcFN0cmVhbSQubmV4dChkcm9wRWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RHJhZ1N0cmVhbSgpOiBCZWhhdmlvclN1YmplY3Q8SURyYWdFbGVtZW50IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmRyYWdTdHJlYW0kO1xuICB9XG5cbiAgcHVibGljIGdldExhc3REcmFnRWxlbWVudCgpOiBJRHJhZ0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRyYWdTdHJlYW0kLmdldFZhbHVlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7SUNvbnRleHRNZW51fSBmcm9tICcuL2ludGVyZmFjZXMvSUNvbnRleHRNZW51JztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtDb250ZXh0TWVudUNvbXBvbmVudH0gZnJvbSAnbmd4LWNvbnRleHRtZW51JztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0lEcmFnQW5kRHJvcH0gZnJvbSAnLi9pbnRlcmZhY2VzL0lEcmFnQW5kRHJvcCc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lUcmVlU3RhdGV9IGZyb20gJy4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgVHJlZURlbGV0ZU5vZGVBY3Rpb24sXG4gIFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uLFxuICBUcmVlSW5zZXJ0Tm9kZUFjdGlvbixcbiAgVHJlZU1vdmVOb2RlQWN0aW9uXG59IGZyb20gJy4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ3JpLXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRleHRNZW51JykgY29udGV4dE1lbnU6IENvbnRleHRNZW51Q29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGRlZmF1bHQgb3B0aW9ucyBmb3IgY29udGV4dCBtZW51XG4gICAqL1xuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBJQ29udGV4dE1lbnVbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnb25FZGl0JyxcbiAgICAgIHRleHQ6ICdSSV9UUkVFX0xCTF9FRElUX05PREUnLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWVkaXQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnb25EZWxldGUnLFxuICAgICAgdGV4dDogJ1JJX1RSRUVfTEJMX1JFTU9WRV9OT0RFJyxcbiAgICAgIGljb25DbHM6ICdmYSBmYS10cmFzaCdcbiAgICB9XG4gIF07XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgY29udGV4dCBtZW51IGl0ZW1zXG4gICAqL1xuICBwdWJsaWMgbWVudUxpc3Q6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIHJvb3ROb2RlcyQ6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPjtcblxuICBwcm90ZWN0ZWQgY3VycmVudFNlbGVjdGVkTm9kZTogSU91dGVyTm9kZTtcblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGRyYWdBbmREcm9wOiBEcmFnQW5kRHJvcCkge1xuXG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyTW92ZSgpO1xuXG4gICAgdGhpcy5yb290Tm9kZXMkID0gdGhpcy50cmVlTW9kZWwucm9vdE5vZGVzJDtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudHJlZU1vZGVsLmN1cnJlbnRTZWxlY3RlZE5vZGUkXG4gICAgICAgIC5zdWJzY3JpYmUoKG5vZGU6IElPdXRlck5vZGUpID0+IHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSA9IG5vZGUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLm1lbnVMaXN0ID0gW107XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLm1lbnVMaXN0LnB1c2goaXRlbSkpO1xuICB9XG5cbiAgcHVibGljIG9uQWRkKCkge1xuICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlID8gdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlLmlkIDogbnVsbDtcblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVJbnNlcnROb2RlQWN0aW9uKHt0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCwgcGFyZW50SWR9KSk7XG4gIH1cblxuICAvKipcbiAgICogT24gc2VsZWN0IGl0ZW0gZnJvbSBjb250ZXh0IG1lbnVcbiAgICpcbiAgICogQHBhcmFtIG5hbWUgLSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0gbm9kZSAtIGRhdGEgaXRlbVxuICAgKi9cbiAgcHVibGljIG9uQ29udGV4dE1lbnVDbGljayhuYW1lOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUpIHtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnb25FZGl0JzpcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uKHtub2RlfSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29uRGVsZXRlJzpcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZURlbGV0ZU5vZGVBY3Rpb24oe3RyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLCBub2RlfSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybignVW5rbm93biBjb250ZXh0IG1lbnUgYWN0aW9uOiAnICsgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrQnlGbihpdGVtOiBJT3V0ZXJOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBkYXRhIFwibW92ZSBldmVudFwiXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXJNb3ZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyZWVNb2RlbC5jb25maWd1cmF0aW9uLmRpc2FibGVNb3ZlTm9kZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdBbmREcm9wLmRyb3AkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChkYXRhOiBJRHJhZ0FuZERyb3ApID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuZHJvcE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZHJvcE5vZGUuZGF0YS50cmVlSWQgPT09IHRoaXMudHJlZU1vZGVsLnRyZWVJZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLmRyYWdOb2RlLmRhdGEudHJlZUlkID09PSB0aGlzLnRyZWVNb2RlbC50cmVlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmRyb3BOb2RlICYmIGRhdGEuZHJvcE5vZGUuem9uZXMgJiYgZGF0YS5kcm9wTm9kZS56b25lcy5pbmRleE9mKGRhdGEuZHJhZ05vZGUuem9uZUlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiBJRHJhZ0FuZERyb3ApID0+IHtcbiAgICAgICAgY29uc3QgZHJvcE5vZGUgPSBkYXRhLmRyb3BOb2RlID8gZGF0YS5kcm9wTm9kZS5kYXRhIDogbnVsbDtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZU1vdmVOb2RlQWN0aW9uKHtcbiAgICAgICAgICAgIHNvdXJjZU9mRHJvcHBlZERhdGE6IGRhdGEudHlwZSxcbiAgICAgICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICAgICAgb2xkTm9kZTogZGF0YS5kcmFnTm9kZS5kYXRhLFxuICAgICAgICAgICAgbm9kZTogZHJvcE5vZGVcbiAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmlEcmFnZ2FibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGRyYWdab25lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc291cmNlVHlwZTogc3RyaW5nID0gRHJhZ0FuZERyb3AuRFJPUF9EQVRBX1RZUEU7XG5cbiAgcHVibGljIGRyYWdFbmFibGVkID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZHJhZ0FuZERyb3A6IERyYWdBbmREcm9wKSB7XG4gICAgcmVuZGVyZXIubGlzdGVuKGVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnLCAoJGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCkge1xuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0KCRldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW5kZXJlci5saXN0ZW4oZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAvLyBvbiBkcmFnIGVuZCB3ZSByZXNldCBsYXN0IGRyYWcgZWxlbWVudCAodGhpcyBldmVudCBpcyBmaXJlZCBhZnRlciBkcm9wKVxuICAgICAgdGhpcy5kcmFnQW5kRHJvcC5kcmFnU3RhcnQobnVsbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5kcmFnQW5kRHJvcC5kcmFnU3RhcnQoe3pvbmVJZDogdGhpcy5kcmFnWm9uZSwgZGF0YTogdGhpcy5kYXRhLCB0eXBlOiB0aGlzLnNvdXJjZVR5cGV9KTtcblxuICAgICRldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdjb3B5JztcbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRoaXMuZHJhZ0VuYWJsZWQ7XG5cbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcmFnZ2FibGVEaXJlY3RpdmUgbmVlZHMgZGF0YScpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcENvbmZpZyB7XG4gIGRyb3BBbGxvd2VkQ3NzQ2xhc3M/OiBzdHJpbmc7XG4gIGRyb3Bab25lPzogc3RyaW5nW10gfCBudWxsO1xufVxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyaURyb3BwYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IElPdXRlck5vZGU7XG4gIEBJbnB1dCgpIGRyb3BDb25maWc6IERyb3BDb25maWcgPSB7fTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJvdGVjdGVkIGRyYWdBbmREcm9wOiBEcmFnQW5kRHJvcCkge1xuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInLCAoJGV2ZW50KSA9PiB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRyb3BBbGxvd2VkID0gdGhpcy5pc0Ryb3BBbGxvd2VkKCk7XG5cbiAgICAgIHRoaXMuY2hhbmdlVGFyZ2V0Q3Vyc29yKCRldmVudCwgZHJvcEFsbG93ZWQpO1xuICAgICAgdGhpcy50b2dnbGVEcm9wQ2xhc3MoZHJvcEFsbG93ZWQpO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIubGlzdGVuKGVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnLCAoJGV2ZW50KSA9PiB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcENsYXNzKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJvcCcsICgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcENsYXNzKGZhbHNlKTtcblxuICAgICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZCgpKSB7XG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AuZHJhZ0VuZCh7em9uZXM6IHRoaXMuZHJvcENvbmZpZy5kcm9wWm9uZSwgZGF0YTogdGhpcy5kYXRhfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0Q29uZmlnKCk7XG5cbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcm9wcGFibGVEaXJlY3RpdmUgbmVlZHMgZGF0YScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb3IgcmVtb3ZlIGFkZGl0aW9uYWwgY2xhc3Mgd2hlbiBkcm9wIGFsbG93ZWRcbiAgICogQHBhcmFtIGRyb3BBbGxvd2VkXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZURyb3BDbGFzcyhkcm9wQWxsb3dlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmRyb3BDb25maWcuZHJvcEFsbG93ZWRDc3NDbGFzcywgZHJvcEFsbG93ZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Ryb3BBbGxvd2VkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxhc3REcmFnRWxlbWVudCA9IHRoaXMuZHJhZ0FuZERyb3AuZ2V0TGFzdERyYWdFbGVtZW50KCk7XG4gICAgY29uc3Qgc291cmNlID0gbGFzdERyYWdFbGVtZW50LmRhdGE7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRyb3Bab25lID0gdGhpcy5kcm9wQ29uZmlnLmRyb3Bab25lO1xuXG4gICAgaWYgKGRyb3Bab25lICYmIGRyb3Bab25lLmxlbmd0aCA+IDAgJiYgZHJvcFpvbmUuaW5kZXhPZihsYXN0RHJhZ0VsZW1lbnQuem9uZUlkKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0b2RvOiBjaGVjayBkcmFnIGFuZCBkcm9wIHpvbmVzXG4gICAgcmV0dXJuICEoc291cmNlID09PSB0YXJnZXQgfHwgdGFyZ2V0LmlkID09PSBzb3VyY2UucGFyZW50SWQgfHwgdGFyZ2V0LnBhcmVudHMuaW5kZXhPZihzb3VyY2UuaWQpID4gLTEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZHJhZyBldmVudCBjdXJzb3JcbiAgICogQHBhcmFtICRldmVudFxuICAgKiBAcGFyYW0gYWRkXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZVRhcmdldEN1cnNvcigkZXZlbnQ6IERyYWdFdmVudCwgYWRkID0gZmFsc2UpIHtcbiAgICBjb25zdCBjdXJzb3JUeXBlID0gYWRkID8gJ2NvcHknIDogJ25vbmUnO1xuXG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gY3Vyc29yVHlwZTtcbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBjdXJzb3JUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIGluaXRpYWxpemUgY29uZmlndXJhdGlvbiBvcHRpb25zLCB1c2UgZGVmYXVsdCBvciBwYXNzZWRcbiAgICovXG4gIHByaXZhdGUgaW5pdENvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnOiBEcm9wQ29uZmlnID0ge1xuICAgICAgZHJvcEFsbG93ZWRDc3NDbGFzczogJ2Ryb3AtYWxsb3dlZCdcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdENvbmZpZykge1xuICAgICAgaWYgKGRlZmF1bHRDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLmRyb3BDb25maWdba2V5XSA9IHRoaXMuZHJvcENvbmZpZ1trZXldIHx8IGRlZmF1bHRDb25maWdba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuLi9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7SURyYWdBbmREcm9wLCBJRHJhZ0VsZW1lbnR9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSURyYWdBbmREcm9wJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge21lcmdlLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZHJvcHpvbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcHpvbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wem9uZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3B6b25lQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG4gIEBJbnB1dCgpIGRyb3Bab25lOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHB1YmxpYyBpc09wZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkcmFnQW5kRHJvcDogRHJhZ0FuZERyb3ApIHtcblxuICAgIGNvbnN0IGlzRHJhZ1N0YXJ0JCA9IHRoaXMuZHJhZ0FuZERyb3AuZ2V0RHJhZ1N0cmVhbSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkcmFnRWxlbWVudDogSURyYWdFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgY29uc3QgaXNEcmFnRWxlbWVudCA9ICEhZHJhZ0VsZW1lbnQgJiYgISFkcmFnRWxlbWVudC5kYXRhO1xuXG4gICAgICAgICAgaWYgKGlzRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChkcmFnRWxlbWVudC50eXBlID09PSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCBpc05vdFJvb3RFbGVtZW50ID0gZHJhZ0VsZW1lbnQuZGF0YS5wYXJlbnRJZDtcbiAgICAgICAgICAgICAgY29uc3QgaXNGcm9tQ3VycmVudFRyZWUgPSBkcmFnRWxlbWVudC5kYXRhLnRyZWVJZCA9PT0gdGhpcy50cmVlTW9kZWwudHJlZUlkO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoaXNOb3RSb290RWxlbWVudCAmJiBpc0Zyb21DdXJyZW50VHJlZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29uc3QgaXNEcmFnRW5kJCA9IHRoaXMuZHJhZ0FuZERyb3AuZHJvcCRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGRhdGE6IElEcmFnQW5kRHJvcCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICB0aGlzLmlzT3BlbiQgPSBtZXJnZShpc0RyYWdTdGFydCQsIGlzRHJhZ0VuZCQpO1xuICB9XG5cbiAgcHVibGljIG9uRHJvcCgpIHtcbiAgICB0aGlzLmRyYWdBbmREcm9wLmRyYWdFbmQobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgb25EcmFnT3ZlcigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SU5vZGVTZXJ2aWNlfSBmcm9tICcuL25vZGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb2RlRGlzcGF0Y2hlclNlcnZpY2Uge1xuICBwcml2YXRlIG5vZGVTZXJ2aWNlczogeyBba2V5OiBzdHJpbmddOiBJTm9kZVNlcnZpY2UgfSA9IHt9O1xuXG4gIHB1YmxpYyByZWdpc3RlclNlcnZpY2UobmFtZTogc3RyaW5nLCBub2RlU2VydmljZTogSU5vZGVTZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlU2VydmljZXNbbmFtZV0gPSBub2RlU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogSU5vZGVTZXJ2aWNlIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLm5vZGVTZXJ2aWNlc1tuYW1lXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVTZXJ2aWNlc1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCBub2RlIHNlcnZpY2UgcHJvdmlkZXJcbiAgICAgIHRocm93IEVycm9yKGBObyB0cmVlIHNlcnZpY2Ugd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7XG4gIFRyZWVBY3Rpb24sXG4gIFRyZWVBY3Rpb25UeXBlcyxcbiAgVHJlZURlbGV0ZU5vZGVBY3Rpb24sXG4gIFRyZWVEZWxldGVOb2RlRXJyb3JBY3Rpb24sXG4gIFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbixcbiAgVHJlZUV4cGFuZE5vZGVBY3Rpb24sXG4gIFRyZWVJbnNlcnROb2RlQWN0aW9uLFxuICBUcmVlTG9hZE5vZGVzQWN0aW9uLFxuICBUcmVlTG9hZE5vZGVzRXJyb3JBY3Rpb24sXG4gIFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uLFxuICBUcmVlTG9hZFBhdGhBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZUFjdGlvbixcbiAgVHJlZU1vdmVOb2RlRXJyb3JBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVSZWdpc3RlckFjdGlvbixcbiAgVHJlZVNhdmVOb2RlQWN0aW9uLFxuICBUcmVlU2F2ZU5vZGVFcnJvckFjdGlvbixcbiAgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbixcbiAgVHJlZVNldEFsbE5vZGVzQWN0aW9uXG59IGZyb20gJy4vdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SVRyZWVBY3Rpb25QYXlsb2FkLCBJVHJlZUNvbmZpZ3VyYXRpb24sIElUcmVlRGF0YSwgSVRyZWVTdGF0ZX0gZnJvbSAnLi9JVHJlZVN0YXRlJztcbmltcG9ydCB7Tm9kZURpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4uL2RyYWdBbmREcm9wL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBmaWx0ZXIsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtzZWxlY3QsIFN0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge05FV19OT0RFX0lELCB0cmVlQ29uZmlndXJhdGlvblNlbGVjdG9yLCB0cmVlU2VsZWN0b3J9IGZyb20gJy4vdHJlZVJlZHVjZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZUVmZmVjdHNTZXJ2aWNlIHtcbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyByZWdpc3RlciQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfUkVHSVNURVIpLFxuICAgICAgbWFwKChhY3Rpb246IFRyZWVSZWdpc3RlckFjdGlvbik6IFRyZWVBY3Rpb24gPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuc2lsZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUcmVlU2V0QWxsTm9kZXNBY3Rpb24oe3RyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLCBub2RlczogYWN0aW9uLnBheWxvYWQubm9kZXN9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFRyZWVMb2FkTm9kZXNBY3Rpb24oe3RyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLCBpZDogbnVsbH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBsb2FkJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEKSxcbiAgICAgIG1lcmdlTWFwKChhY3Rpb246IFRyZWVMb2FkTm9kZXNBY3Rpb24pID0+IHRoaXMubG9hZE5vZGVzKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgobm9kZXNEYXRhOiBJT3V0ZXJOb2RlW10pOiBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbiA9PiBuZXcgVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb24oe1xuICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWQsXG4gICAgICAgICAgICBub2Rlczogbm9kZXNEYXRhXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFRyZWVMb2FkTm9kZXNFcnJvckFjdGlvbih7XG4gICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgIH0pKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cblxuICBARWZmZWN0KClcbiAgcHVibGljIGRlbGV0ZSQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfREVMRVRFX05PREUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVEZWxldGVOb2RlQWN0aW9uKSA9PiB0aGlzLmRlbGV0ZU5vZGUoYWN0aW9uLnBheWxvYWQudHJlZUlkLCBhY3Rpb24ucGF5bG9hZC5ub2RlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCk6IFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbiA9PiBuZXcgVHJlZURlbGV0ZU5vZGVTdWNjZXNzQWN0aW9uKHsuLi5hY3Rpb24ucGF5bG9hZH0pKSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpOiBPYnNlcnZhYmxlPFRyZWVEZWxldGVOb2RlRXJyb3JBY3Rpb24+ID0+IG9mKG5ldyBUcmVlRGVsZXRlTm9kZUVycm9yQWN0aW9uKHsuLi5hY3Rpb24ucGF5bG9hZH0pKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cblxuICBARWZmZWN0KClcbiAgcHVibGljIHNhdmUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NBVkVfTk9ERSksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogVHJlZVNhdmVOb2RlQWN0aW9uKSA9PiB0aGlzLnNhdmVOb2RlKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgey4uLmFjdGlvbi5wYXlsb2FkLm5vZGV9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKG5vZGU6IElPdXRlck5vZGUpOiBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uID0+IG5ldyBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uKHtcbiAgICAgICAgICAgIHRyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLFxuICAgICAgICAgICAgb2xkTm9kZTogYWN0aW9uLnBheWxvYWQubm9kZSxcbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgVHJlZVNhdmVOb2RlRXJyb3JBY3Rpb24oey4uLmFjdGlvbi5wYXlsb2FkfSkpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIG1vdmUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERSksXG4gICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZU1vdmVOb2RlQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5zb3VyY2VPZkRyb3BwZWREYXRhID09PSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVNb3ZlTm9kZUFjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IDxJT3V0ZXJOb2RlPnsuLi5hY3Rpb24ucGF5bG9hZC5vbGROb2RlfTtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBCb29sZWFuKGFjdGlvbi5wYXlsb2FkLm5vZGUpID8gey4uLmFjdGlvbi5wYXlsb2FkLm5vZGV9IDogbnVsbDtcblxuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVOb2RlKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgc291cmNlLCB0YXJnZXQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChub2RlOiBJT3V0ZXJOb2RlKTogSVRyZWVBY3Rpb25QYXlsb2FkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICBvbGROb2RlOiBhY3Rpb24ucGF5bG9hZC5vbGROb2RlLFxuICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoKGRhdGE6IElUcmVlQWN0aW9uUGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdCh0cmVlQ29uZmlndXJhdGlvblNlbGVjdG9yKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCkpXG4gICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwKChjb25maWd1cmF0aW9uOiBJVHJlZUNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FjdGlvbiA9IG5ldyBUcmVlTW92ZU5vZGVFcnJvckFjdGlvbih7XG4gICAgICAgICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9uLnBheWxvYWQub2xkTm9kZSxcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogYWN0aW9uLnBheWxvYWQubm9kZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ld0FjdGlvbik7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApLFxuICAgICAgbWVyZ2VNYXAoKHZhbHVlOiB7IGRhdGE6IElUcmVlQWN0aW9uUGF5bG9hZCwgY29uZmlndXJhdGlvbjogSVRyZWVDb25maWd1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHZhbHVlLmRhdGE7XG4gICAgICAgIGNvbnN0IGFjdGlvbnM6IFRyZWVBY3Rpb25bXSA9IFtcbiAgICAgICAgICBuZXcgVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvbih7dHJlZUlkOiBkYXRhLnRyZWVJZCwgc291cmNlOiBkYXRhLm9sZE5vZGUsIHRhcmdldDogZGF0YS5ub2RlfSksXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKCF2YWx1ZS5jb25maWd1cmF0aW9uLmlzRnVsbHlMb2FkZWQpIHtcbiAgICAgICAgICBhY3Rpb25zLnB1c2gobmV3IFRyZWVMb2FkTm9kZXNBY3Rpb24oe3RyZWVJZDogZGF0YS50cmVlSWQsIGlkOiBkYXRhLm5vZGUucGFyZW50SWR9KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgIH0pXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGV4cGFuZCQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfRVhQQU5EX05PREUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVFeHBhbmROb2RlQWN0aW9uKSA9PlxuICAgICAgICB0aGlzLnN0b3JlXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzZWxlY3QodHJlZVNlbGVjdG9yKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCkpLFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIGZpbHRlcigodHJlZVN0YXRlOiBJVHJlZURhdGEpID0+ICF0cmVlU3RhdGUuY29uZmlndXJhdGlvbi5pc0Z1bGx5TG9hZGVkKSxcbiAgICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVHJlZUxvYWROb2Rlc0FjdGlvbih7XG4gICAgICAgICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBpbnNlcnQkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0lOU0VSVF9OT0RFKSxcbiAgICAgIGZpbHRlcigoYWN0aW9uOiBUcmVlSW5zZXJ0Tm9kZUFjdGlvbikgPT4gISFhY3Rpb24ucGF5bG9hZC5wYXJlbnRJZCksXG4gICAgICBtYXAoKGFjdGlvbjogVHJlZUluc2VydE5vZGVBY3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVlRXhwYW5kTm9kZUFjdGlvbih7dHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsIGlkOiBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJZH0pO1xuICAgICAgfSlcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgaW5pdFBhdGhGb3JGdWxseUxvYWRlZFRyZWVFZmZlY3QkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQURfUEFUSCksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogVHJlZUxvYWRQYXRoQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdCh0cmVlQ29uZmlndXJhdGlvblNlbGVjdG9yKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCkpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgbWFwKChjb25maWd1cmF0aW9uOiBJVHJlZUNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHthY3Rpb24sIGNvbmZpZ3VyYXRpb259O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAoKHZhbHVlOiB7IGFjdGlvbjogVHJlZUxvYWRQYXRoQWN0aW9uLCBjb25maWd1cmF0aW9uOiBJVHJlZUNvbmZpZ3VyYXRpb24gfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHthY3Rpb24sIGNvbmZpZ3VyYXRpb259ID0gdmFsdWU7XG5cbiAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5pc0Z1bGx5TG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuaWRzLm1hcCgoaWQ6IHN0cmluZykgPT4gbmV3IFRyZWVFeHBhbmROb2RlQWN0aW9uKHt0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgaWR9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRBY3Rpb25zID0gYWN0aW9uLnBheWxvYWQuaWRzLm1hcCgoaWQ6IHN0cmluZykgPT4gdGhpcy5sb2FkTm9kZXMoYWN0aW9uLnBheWxvYWQudHJlZUlkLCBpZCkpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QobG9hZEFjdGlvbnMpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgbWVyZ2VNYXAoKGRhdGE6IElPdXRlck5vZGVbXVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsb2FkU3VjY2VzcyA9IGRhdGEubWFwKChub2RlczogSU91dGVyTm9kZVtdLCBpbmRleCkgPT4gbmV3IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZHNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBub2Rlc1xuICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXhwYW5kTm9kZXMgPSBhY3Rpb24ucGF5bG9hZC5pZHMubWFwKChpZDogc3RyaW5nKSA9PiBuZXcgVHJlZUV4cGFuZE5vZGVBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5sb2FkU3VjY2VzcywgLi4uZXhwYW5kTm9kZXNdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgbWVyZ2VNYXAoKGFjdGlvbnM6IGFueVtdKSA9PiBhY3Rpb25zKVxuICAgICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub2RlRGlzcGF0Y2hlclNlcnZpY2U6IE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4pIHtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWxldGVOb2RlKHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3Qgbm9kZVNlcnZpY2UgPSB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5nZXQodHJlZUlkKTtcblxuICAgIHJldHVybiBub2RlLmlkID8gbm9kZVNlcnZpY2UucmVtb3ZlKG5vZGUuaWQpIDogb2Yobm9kZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9hZE5vZGVzKHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nIHwgbnVsbCkge1xuICAgIGNvbnN0IG5vZGVTZXJ2aWNlID0gdGhpcy5ub2RlRGlzcGF0Y2hlclNlcnZpY2UuZ2V0KHRyZWVJZCk7XG5cbiAgICByZXR1cm4gbm9kZVNlcnZpY2UubG9hZChpZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2F2ZU5vZGUodHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBub2RlU2VydmljZSA9IHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpO1xuXG4gICAgaWYgKG5vZGUuaWQgPT09IE5FV19OT0RFX0lEKSB7XG4gICAgICByZXR1cm4gbm9kZVNlcnZpY2UuYWRkKG5vZGUsIG5vZGUucGFyZW50SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZVNlcnZpY2UudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBtb3ZlTm9kZSh0cmVlSWQ6IHN0cmluZywgc291cmNlOiBJT3V0ZXJOb2RlLCB0YXJnZXQ6IElPdXRlck5vZGUpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBub2RlU2VydmljZSA9IHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpO1xuXG4gICAgcmV0dXJuIG5vZGVTZXJ2aWNlLm1vdmUoc291cmNlLCB0YXJnZXQpO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge3RyZWVTZWxlY3Rvcn0gZnJvbSAnLi4vc3RvcmUvdHJlZVJlZHVjZXInO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICcuLi9zdG9yZS9JVHJlZVN0YXRlJztcbmltcG9ydCB7Tm9kZURpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7XG4gIFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvbixcbiAgVHJlZVJlZ2lzdGVyQWN0aW9uLFxuICBUcmVlU2V0Q29uZmlndXJhdGlvbkFjdGlvblxufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBub2RlRGlzcGF0Y2hlclNlcnZpY2U6IE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+KSB7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVHJlZU1vZGVsKGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLCBub2RlczogSU91dGVyTm9kZVtdID0gbnVsbCk6IFRyZWVNb2RlbCB7XG4gICAgY29uc3QgdHJlZUlkID0gY29uZmlndXJhdGlvbi50cmVlSWQ7XG4gICAgY29uc3QgaXNGdWxseUxvYWRlZCA9IEJvb2xlYW4obm9kZXMpO1xuXG4gICAgLy8gcmVnaXN0ZXIgbmV3IHRyZWUgaW4gc3RvcmVcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlUmVnaXN0ZXJBY3Rpb24oe1xuICAgICAgdHJlZUlkLFxuICAgICAgc2lsZW50OiBpc0Z1bGx5TG9hZGVkLFxuICAgICAgbm9kZXNcbiAgICB9KSk7XG5cbiAgICAvLyBpbml0IHRyZWUgY29uZmlndXJhdGlvblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uKHt0cmVlSWQsIGNvbmZpZ3VyYXRpb259KSk7XG5cbiAgICBpZiAoQm9vbGVhbihub2RlcykpIHtcbiAgICAgIHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpLnNldEFsbE5vZGVzKG5vZGVzKTtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvbih7dHJlZUlkfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvbGRlcnMkID0gdGhpcy5zdG9yZS5zZWxlY3QodHJlZVNlbGVjdG9yKGNvbmZpZ3VyYXRpb24udHJlZUlkKSk7XG5cbiAgICByZXR1cm4gbmV3IFRyZWVNb2RlbCh0aGlzLnN0b3JlLCBmb2xkZXJzJCwgY29uZmlndXJhdGlvbiwgaXNGdWxseUxvYWRlZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuLi9tb2RlbHMvVHJlZU1vZGVsJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge1RyZWVTZWxlY3ROb2RlQWN0aW9ufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SVRyZWVTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLXRyZWUtcGFyZW50cy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmVudHMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhcmVudHMtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIHB1YmxpYyBwYXJlbnRzJDogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+KSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudHMkID0gdGhpcy50cmVlTW9kZWwuZ2V0UGFyZW50c0xpc3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3ROb2RlKG5vZGU6IElPdXRlck5vZGUsIGlzQ3VycmVudFNlbGVjdGVkTm9kZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghaXNDdXJyZW50U2VsZWN0ZWROb2RlKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQge0luamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0lBcGlDb25maWd9IGZyb20gJy4uL0lBcGlDb25maWcuc2VydmljZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm9kZVNlcnZpY2Uge1xuICByZWFkb25seSB0cmVlSWQ6IHN0cmluZztcblxuICBsb2FkKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+O1xuXG4gIGFkZChub2RlOiBJT3V0ZXJOb2RlLCBwYXJlbnROb2RlSWQ6IHN0cmluZyB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuXG4gIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuXG4gIHVwZGF0ZShub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcblxuICByZW1vdmUobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuXG4gIHNldEFsbE5vZGVzKG5vZGVzOiBJT3V0ZXJOb2RlW10pOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgTk9ERV9TRVJWSUNFID0gbmV3IEluamVjdGlvblRva2VuKCdOT0RFX1NFUlZJQ0UnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vZGVTZXJ2aWNlIGltcGxlbWVudHMgSU5vZGVTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGFwaUNvbmZpZzogSUFwaUNvbmZpZyA9IHtcbiAgICBhZGRVcmw6ICcvYXBpL25vZGVzJyxcbiAgICBnZXRVcmw6ICcvYXBpL25vZGVzJyxcbiAgICBtb3ZlVXJsOiAnL2FwaS9ub2Rlcy9tb3ZlJyxcbiAgICB1cGRhdGVVcmw6ICcvYXBpL25vZGVzJyxcbiAgICByZW1vdmVVcmw6ICcvYXBpL25vZGVzJyxcbiAgfTtcblxuICBwdWJsaWMgZ2V0IHRyZWVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAndHJlZSc7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG5cbiAgfVxuXG4gIHB1YmxpYyBsb2FkKG5vZGVJZCA9ICcnKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnbm9kZUlkJywgbm9kZUlkKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PElPdXRlck5vZGVbXT4odGhpcy5nZXRQYXRoKCdHRVQnLCBub2RlSWQpLCB7cGFyYW1zfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBhZGQobm9kZTogSU91dGVyTm9kZSwgcGFyZW50Tm9kZUlkOiBzdHJpbmcgPSBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PElPdXRlck5vZGU+KHRoaXMuZ2V0UGF0aCgnQ1JFQVRFJywgcGFyZW50Tm9kZUlkKSwge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIHBhcmVudE5vZGVJZDogcGFyZW50Tm9kZUlkXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHNyY0lkID0gc3JjTm9kZS5pZDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldE5vZGUgPyB0YXJnZXROb2RlLmlkIDogbnVsbDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PElPdXRlck5vZGU+KHRoaXMuZ2V0UGF0aCgnTU9WRScsIHNyY0lkLCB0YXJnZXRJZCksIHtzb3VyY2U6IHNyY0lkLCB0YXJnZXQ6IHRhcmdldElkfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKG5vZGU6IElPdXRlck5vZGUpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmdldFBhdGgoJ1VQREFURScsIG5vZGUuaWQpLCBub2RlKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnbm9kZUlkJywgbm9kZUlkKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPElPdXRlck5vZGU+KHRoaXMuZ2V0UGF0aCgnUkVNT1ZFJywgbm9kZUlkKSwge3BhcmFtc30pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhdGgodHlwZTogc3RyaW5nLCBub2RlSWQ6IHN0cmluZywgZGVzdE5vZGVJZDogc3RyaW5nID0gbnVsbCkge1xuICAgIGlmICghdGhpcy5hcGlDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gQVBJIGNvbmZpZ3VyYXRpb24gZm9yIFRyZWUnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmxNYXAgPSB7XG4gICAgICAnR0VUJzogdGhpcy5hcGlDb25maWcuZ2V0VXJsLFxuICAgICAgJ0NSRUFURSc6IHRoaXMuYXBpQ29uZmlnLmFkZFVybCxcbiAgICAgICdSRU1PVkUnOiB0aGlzLmFwaUNvbmZpZy5yZW1vdmVVcmwsXG4gICAgICAnVVBEQVRFJzogdGhpcy5hcGlDb25maWcudXBkYXRlVXJsLFxuICAgICAgJ01PVkUnOiB0aGlzLmFwaUNvbmZpZy5tb3ZlVXJsXG4gICAgfTtcblxuICAgIGxldCBwYXRoID0gdGhpcy5yZXBsYWNlTm9kZUlkKHVybE1hcFt0eXBlXSwgbm9kZUlkKTtcblxuICAgIGlmIChkZXN0Tm9kZUlkKSB7XG4gICAgICBwYXRoID0gdGhpcy5yZXBsYWNlRGVzdE5vZGVJZChwYXRoLCBkZXN0Tm9kZUlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXBsYWNlTm9kZUlkKHVybDogc3RyaW5nLCBub2RlSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwucmVwbGFjZSgne25vZGVJZH0nLCBub2RlSWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcGxhY2VEZXN0Tm9kZUlkKHVybDogc3RyaW5nLCBub2RlSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwucmVwbGFjZSgne2Rlc3ROb2RlSWR9Jywgbm9kZUlkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZX0gZnJvbSAnLi90cmVlTW9kZWxHZW5lcmF0b3Iuc2VydmljZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge0lOb2RlU2VydmljZX0gZnJvbSAnLi9ub2RlLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlTW9kZWx9IGZyb20gJy4uL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZTogVHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UpIHtcblxuICB9XG5cbiAgcHVibGljIGluaXQodHJlZUNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICB0cmVlQXBpOiBJTm9kZVNlcnZpY2UsXG4gICAgICAgICAgICAgIGxvYWRlZE5vZGVzPzogSU91dGVyTm9kZVtdKTogVHJlZU1vZGVsIHtcbiAgICB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5yZWdpc3RlclNlcnZpY2UodHJlZUNvbmZpZ3VyYXRpb24udHJlZUlkLCB0cmVlQXBpKTtcblxuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2UuY3JlYXRlVHJlZU1vZGVsKHRyZWVDb25maWd1cmF0aW9uLCBsb2FkZWROb2Rlcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJdGVtQ29tcG9uZW50fSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUcmVlQ29tcG9uZW50fSBmcm9tICcuL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7RG5kTW9kdWxlLCBEcmFnZ2FibGVDb21wb25lbnR9IGZyb20gJ25nMi1kbmQnO1xuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9kcmFnQW5kRHJvcC9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7RHJhZ2dhYmxlRGlyZWN0aXZlfSBmcm9tICcuL2RyYWdBbmREcm9wL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtEcm9wcGFibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJvcHBhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0Ryb3B6b25lQ29tcG9uZW50fSBmcm9tICcuL2RyYWdBbmREcm9wL2Ryb3B6b25lL2Ryb3B6b25lLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0b3JlTW9kdWxlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0VmZmVjdHNNb2R1bGV9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtUcmVlRWZmZWN0c1NlcnZpY2V9IGZyb20gJy4vc3RvcmUvdHJlZUVmZmVjdHMuc2VydmljZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb250ZXh0TWVudU1vZHVsZX0gZnJvbSAnbmd4LWNvbnRleHRtZW51JztcbmltcG9ydCB7dHJlZVJlZHVjZXJ9IGZyb20gJy4vc3RvcmUvdHJlZVJlZHVjZXInO1xuaW1wb3J0IHtUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvdHJlZU1vZGVsR2VuZXJhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtQYXJlbnRzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9wYXJlbnRzLWxpc3QvcGFyZW50cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge05PREVfU0VSVklDRSwgTm9kZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9ub2RlLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBOT0RFX0RJU1BBVENIRVJfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Tm9kZURpc3BhdGNoZXJTZXJ2aWNlPignTm9kZURpc3BhdGNoZXJTZXJ2aWNlJyk7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgRG5kTW9kdWxlLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbVHJlZUVmZmVjdHNTZXJ2aWNlXSksXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ3RyZWVzJywgdHJlZVJlZHVjZXIpLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJlZUNvbXBvbmVudCxcbiAgICBJdGVtQ29tcG9uZW50LFxuICAgIERyYWdnYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wcGFibGVEaXJlY3RpdmUsXG4gICAgRHJvcHpvbmVDb21wb25lbnQsXG4gICAgUGFyZW50c0xpc3RDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmVlQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnQsXG4gICAgRHJhZ2dhYmxlRGlyZWN0aXZlLFxuICAgIERyb3BwYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wem9uZUNvbXBvbmVudCxcbiAgICBEcmFnZ2FibGVDb21wb25lbnQsXG4gICAgUGFyZW50c0xpc3RDb21wb25lbnQsXG4gICAgU3RvcmVNb2R1bGUsXG4gICAgRWZmZWN0c01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE5PREVfU0VSVklDRSwgdXNlQ2xhc3M6IE5vZGVTZXJ2aWNlLCBtdWx0aTogdHJ1ZX1cbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge1xuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRyZWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRHJhZ0FuZERyb3AsXG4gICAgICAgIE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgVHJlZUVmZmVjdHNTZXJ2aWNlLFxuICAgICAgICBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgICAgICBUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlLFxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvckZlYXR1cmUoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmVlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXRUcmFuc2xhdGlvbkZvckVOKCk7XG4gICAgdGhpcy5zZXRUcmFuc2xhdGlvbkZvclBMKCk7XG4gICAgdGhpcy50cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyYW5zbGF0aW9uRm9yUEwoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ3BsJywge1xuICAgICAgUklfVFJFRV9MQkxfQUREX05PREU6ICdEb2RhaicsXG4gICAgICBSSV9UUkVFX0xCTF9FRElUX05PREU6ICdFZHl0dWonLFxuICAgICAgUklfVFJFRV9MQkxfUkVNT1ZFX05PREU6ICdVc3XDhcKEJyxcbiAgICAgIFJJX1RSRUVfTEJMX0RST1BfWk9ORTogJ1VwdcOFwpvDhMKHIHR1dGFqJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmFuc2xhdGlvbkZvckVOKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKCdlbicsIHtcbiAgICAgIFJJX1RSRUVfTEJMX0FERF9OT0RFOiAnQWRkIGRhdGEnLFxuICAgICAgUklfVFJFRV9MQkxfRURJVF9OT0RFOiAnRWRpdCBkYXRhJyxcbiAgICAgIFJJX1RSRUVfTEJMX1JFTU9WRV9OT0RFOiAnRGVsZXRlIGRhdGEnLFxuICAgICAgUklfVFJFRV9MQkxfRFJPUF9aT05FOiAnRHJvcCBoZXJlIHRvIG1vdmUgZGF0YSB0byByb290IGxldmVsJ1xuICAgIH0pO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJzdGF0ZSIsInRzbGliXzEuX19kZWNvcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0UsZ0JBQWlCLGdCQUFnQjtJQUNqQyx3QkFBeUIsd0JBQXdCO0lBQ2pELHNCQUF1QixzQkFBc0I7SUFDN0Msa0JBQW1CLGtCQUFrQjtJQUNyQywwQkFBMkIsMEJBQTBCO0lBQ3JELHdCQUF5Qix3QkFBd0I7SUFDakQsc0JBQXVCLHNCQUFzQjtJQUM3QyxvQkFBcUIsb0JBQW9CO0lBQ3pDLGtCQUFtQixrQkFBa0I7SUFDckMsa0JBQW1CLGtCQUFrQjtJQUNyQyxXQUFZLFdBQVc7SUFDdkIsZ0JBQWlCLGdCQUFnQjtJQUNq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