(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('@angular/forms'), require('ngx-contextmenu'), require('@ngrx/effects'), require('@angular/animations'), require('rxjs/operators'), require('rxjs'), require('lodash.isequal'), require('@angular/common/http'), require('@angular/common'), require('ng2-dnd'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@rign/angular2-tree', ['exports', '@ngrx/store', '@angular/core', '@angular/forms', 'ngx-contextmenu', '@ngrx/effects', '@angular/animations', 'rxjs/operators', 'rxjs', 'lodash.isequal', '@angular/common/http', '@angular/common', 'ng2-dnd', '@ngx-translate/core'], factory) :
    (factory((global.rign = global.rign || {}, global.rign['angular2-tree'] = {}),global.store,global.ng.core,global.ng.forms,global.ngxContextmenu,global.effects,global.ng.animations,global.rxjs.operators,global.rxjs,global._isEqual,global.ng.common.http,global.ng.common,global.ng2Dnd,global.core$1));
}(this, (function (exports,store,core,forms,ngxContextmenu,effects,animations,operators,rxjs,_isEqual,http,common,ng2Dnd,core$1) { 'use strict';

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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
    function copyState(state, treeId) {
        if (treeId === void 0) {
            treeId = null;
        }
        /** @type {?} */
        var newState = __assign({}, state);
        // todo: find better way to clone object
        if (treeId) {
            newState[treeId] = {
                nodes: {
                    entities: __assign({}, state[treeId].nodes.entities),
                    previouslySelected: state[treeId].nodes.previouslySelected,
                    selected: state[treeId].nodes.selected,
                    rootNodes: __spread(state[treeId].nodes.rootNodes),
                    expanded: __spread(state[treeId].nodes.expanded),
                },
                configuration: __assign({}, state[treeId].configuration)
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
    function expandNode(state, action) {
        /** @type {?} */
        var treeId = action.payload.treeId;
        /** @type {?} */
        var newState = copyState(state, treeId);
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
            newState[treeId].nodes.rootNodes = __spread(newState[treeId].nodes.rootNodes, [NEW_NODE_ID]);
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
    function registerTree(state, action) {
        /** @type {?} */
        var newState = copyState(state);
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
        if (parents === void 0) {
            parents = [];
        }
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
    function markTreeAsFullyLoaded(state, action) {
        /** @type {?} */
        var treeId = action.payload.treeId;
        /** @type {?} */
        var newState = copyState(state, treeId);
        newState[treeId].configuration = __assign({}, newState[treeId].configuration, { isFullyLoaded: true });
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
        newState[treeId].configuration = __assign({}, newState[treeId].configuration, action.payload.configuration);
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
    function treeReducer(state, action) {
        if (state === void 0) {
            state = {};
        }
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
    var treeStateSelector = store.createFeatureSelector('trees');
    /**
     * @param {?} treeId
     * @return {?}
     */
    function treeSelector(treeId) {
        return store.createSelector(treeStateSelector, function (state) { return state[treeId] || null; });
    }
    /**
     * @param {?} treeId
     * @return {?}
     */
    function treeConfigurationSelector(treeId) {
        return store.createSelector(treeStateSelector, function (state) { return state[treeId].configuration || null; });
    }
    /**
     * @param {?} treeId
     * @return {?}
     */
    function expandedNodesSelector(treeId) {
        return store.createSelector(treeStateSelector, function (state) { return state[treeId].nodes.expanded || []; });
    }
    /**
     * @param {?} treeId
     * @return {?}
     */
    function selectedNodeSelector(treeId) {
        return store.createSelector(treeStateSelector, function (state) { return state[treeId].nodes.selected || null; });
    }
    /**
     * @param {?} treeId
     * @return {?}
     */
    function previouslySelectedNodeSelector(treeId) {
        return store.createSelector(treeStateSelector, function (state) { return state[treeId].nodes.previouslySelected || null; });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function expand() {
        return animations.trigger('expand', [
            animations.state('*', animations.style({ 'overflow-y': 'hidden' })),
            animations.state('void', animations.style({ 'overflow-y': 'hidden' })),
            animations.transition('* => void', [
                animations.style({ height: '*' }),
                animations.animate(300, animations.style({ height: 0 }))
            ]),
            animations.transition('void => *', [
                animations.style({ height: '0' }),
                animations.animate(300, animations.style({ height: '*' }))
            ])
        ]);
    }
    var ItemComponent = /** @class */ (function () {
        function ItemComponent(contextMenuService, actions$, store$$1, cdr) {
            this.contextMenuService = contextMenuService;
            this.actions$ = actions$;
            this.store = store$$1;
            this.cdr = cdr;
            this.isExpanded = false;
            this.isSelected = false;
            /**
             * Form field to change data name
             */
            this.nameField = new forms.FormControl();
            this.isEditMode = false;
            this.children$ = rxjs.empty();
            this.isStartSave = false;
            this.subscription = new rxjs.Subscription();
        }
        Object.defineProperty(ItemComponent.prototype, "node", {
            get: /**
             * @return {?}
             */ function () {
                return this._node;
            },
            /**
             * Node instance
             */
            set: /**
             * Node instance
             * @param {?} node
             * @return {?}
             */ function (node) {
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
                    .pipe(store.select(previouslySelectedNodeSelector(this.node.treeId)), operators.filter(function (previouslySelected) { return previouslySelected === _this.node.id; }))
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
                    .pipe(operators.filter(function (action) { return action.payload.node === _this.node; }))
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
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'ri-tree-item',
                        template: "<div class=\"tree-item\"\n     [ngClass]=\"{'tree-item-selected': isSelected && !treeModel.wasPreviouslySelected(node.id)}\"\n     (contextmenu)=\"onContextMenu($event)\"\n     riDroppable\n     riDraggable\n     [dragZone]=\"treeModel.configuration.dragZone\"\n     [dropConfig]=\"{dropAllowedCssClass: 'drop-allowed', dropZone: treeModel.configuration.dropZone}\"\n     [data]=\"node\"\n     id=\"node-{{node.id}}\"\n>\n  <i *ngIf=\"!isExpanded\" (click)=\"expand()\" class=\"fa fa-caret-right pointer\"></i>\n  <i *ngIf=\"isExpanded\" (click)=\"collapse()\" class=\"fa fa-caret-down pointer\"></i>\n  <span *ngIf=\"!isEditMode\" class=\"tree-item-name\" (click)=\"onSelect()\">{{node.name}}</span>\n  <form name=\"form\">\n    <input #inputElement type=\"text\" class=\"form-control\" *ngIf=\"isEditMode\" [formControl]=\"nameField\"\n           name=\"name\" (keydown)=\"onChange($event)\" (blur)=\"onBlur()\"/>\n  </form>\n</div>\n<div class=\"tree\" *ngIf=\"isExpanded\" [@expand]>\n  <ri-tree-item *ngFor=\"let child of children$ | async; trackBy: trackByFn\"\n                [node]=\"child\"\n                [treeModel]=\"treeModel\"\n                [isExpanded]=\"treeModel.isExpanded(child)\"\n                [isSelected]=\"treeModel.isSelected(child)\"\n                [contextMenu]=\"contextMenu\"></ri-tree-item>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        animations: [expand()],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ItemComponent.ctorParameters = function () {
            return [
                { type: ngxContextmenu.ContextMenuService },
                { type: effects.Actions },
                { type: store.Store },
                { type: core.ChangeDetectorRef }
            ];
        };
        ItemComponent.propDecorators = {
            input: [{ type: core.ViewChild, args: ['inputElement',] }],
            node: [{ type: core.Input }],
            treeModel: [{ type: core.Input }],
            contextMenu: [{ type: core.Input }],
            isExpanded: [{ type: core.Input }],
            isSelected: [{ type: core.Input }]
        };
        return ItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragAndDrop = /** @class */ (function () {
        function DragAndDrop() {
            this.dropStream$ = new rxjs.Subject();
            this.dragStream$ = new rxjs.BehaviorSubject(null);
            this.drop$ = this.dropStream$
                .pipe(operators.withLatestFrom(this.dragStream$), operators.map(function (_a) {
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
            { type: core.Injectable }
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
        function TreeComponent(store$$1, dragAndDrop) {
            this.store = store$$1;
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
            this.subscription = new rxjs.Subscription();
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
                    .pipe(operators.filter(function (data) {
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
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'ri-tree',
                        template: "<div class=\"tree\">\n  <button *ngIf=\"treeModel.configuration.showAddButton\" class=\"btn btn-dark add-node-button\" (click)=\"onAdd()\">\n    <i class=\"fa fa-plus\"></i> {{'RI_TREE_LBL_ADD_NODE' | translate}}\n  </button>\n  <!--@formatter:off-->\n  <div #customTemplate><ng-content></ng-content></div>\n  <!--@formatter:on-->\n  <div *ngIf=\"customTemplate.childNodes.length === 0\">\n    <ri-tree-item\n      class=\"root-node\"\n      *ngFor=\"let node of rootNodes$ | async; trackBy: trackByFn\"\n      [node]=\"node\"\n      [treeModel]=\"treeModel\"\n      [isSelected]=\"treeModel.isSelected(node)\"\n      [isExpanded]=\"treeModel.isExpanded(node)\"\n      [contextMenu]=\"contextMenu\"></ri-tree-item>\n  </div>\n  <ri-dropzone [treeModel]=\"treeModel\"></ri-dropzone>\n  <context-menu id=\"context-menu-{{treeModel.treeId}}\" #contextMenu>\n    <ng-template *ngFor=\"let menuItem of menuList\" contextMenuItem let-item\n                 (execute)=\"onContextMenuClick(menuItem.name, $event.item)\">\n      <span class=\"{{menuItem.iconCls}}\" style=\"width: 20px; display: inline-block;\"></span>\n      {{menuItem.text | translate}}\n    </ng-template>\n  </context-menu>\n</div>\n",
                        styles: [".tree{list-style-type:none;margin:0;padding-left:0;position:relative}.tree .dropdown{position:inherit}.tree .dropdown-menu{position:absolute!important}.tree .pointer{cursor:pointer}.tree .tree{margin-left:20px}.tree .tree-edit-btn,.tree .tree-remove-btn{display:none}.tree .tree-item{padding:2px 0}.tree .tree-item.drop-allowed .tree-item-name{background-color:rgba(255,0,0,.3)}.tree .tree-item.tree-item-selected>.tree-item-name{padding:0 1px;border:1px solid #4684ee;background-color:#549dee}.tree .tree-item i{text-align:center}.tree .tree-item .no-children{display:inline-block;width:8px}.tree .tree-item .tree-item-name{display:inline-block;line-height:22px;height:22px;padding:0 2px;cursor:pointer}.tree .tree-item .tree-item-name:hover{background-color:rgba(161,197,238,.2)}.tree .tree-item .tree-item-name:hover .tree-edit-btn,.tree .tree-item .tree-item-name:hover .tree-remove-btn,.tree .tree-item form{display:inline-block}.tree .tree-item form input{width:auto}"]
                    }] }
        ];
        /** @nocollapse */
        TreeComponent.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: DragAndDrop }
            ];
        };
        TreeComponent.propDecorators = {
            treeModel: [{ type: core.Input }],
            contextMenu: [{ type: core.ViewChild, args: ['contextMenu',] }]
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
            { type: core.Directive, args: [{
                        selector: '[riDraggable]'
                    },] }
        ];
        /** @nocollapse */
        DraggableDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer },
                { type: DragAndDrop }
            ];
        };
        DraggableDirective.propDecorators = {
            data: [{ type: core.Input }],
            dragZone: [{ type: core.Input }],
            sourceType: [{ type: core.Input }]
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
                if (dropAllowed === void 0) {
                    dropAllowed = false;
                }
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
                if (add === void 0) {
                    add = false;
                }
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
            { type: core.Directive, args: [{
                        selector: '[riDroppable]'
                    },] }
        ];
        /** @nocollapse */
        DroppableDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer },
                { type: DragAndDrop }
            ];
        };
        DroppableDirective.propDecorators = {
            data: [{ type: core.Input }],
            dropConfig: [{ type: core.Input }]
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
                .pipe(operators.map(function (dragElement) {
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
                .pipe(operators.map(function (data) {
                return false;
            }));
            this.isOpen$ = rxjs.merge(isDragStart$, isDragEnd$);
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
            { type: core.Component, args: [{
                        selector: 'ri-dropzone',
                        template: "<div *ngIf=\"isOpen$ | async\" (drop)=\"onDrop()\" (dragover)=\"onDragOver($event)\" class=\"dropzone\">\n  {{'RI_TREE_LBL_DROP_ZONE' | translate}}\n</div>\n",
                        styles: [".dropzone{display:inline-block;border:1px dotted red;padding:10px;background-color:rgba(255,0,0,.3)}"]
                    }] }
        ];
        /** @nocollapse */
        DropzoneComponent.ctorParameters = function () {
            return [
                { type: DragAndDrop }
            ];
        };
        DropzoneComponent.propDecorators = {
            treeModel: [{ type: core.Input }],
            dropZone: [{ type: core.Input }]
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
            { type: core.Injectable }
        ];
        return NodeDispatcherService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TreeEffectsService = /** @class */ (function () {
        function TreeEffectsService(actions$, nodeDispatcherService, store$$1) {
            var _this = this;
            this.actions$ = actions$;
            this.nodeDispatcherService = nodeDispatcherService;
            this.store = store$$1;
            this.register$ = this.actions$
                .pipe(effects.ofType(TreeActionTypes.TREE_REGISTER), operators.map(function (action) {
                if (action.payload.silent) {
                    return new TreeSetAllNodesAction({ treeId: action.payload.treeId, nodes: action.payload.nodes });
                }
                else {
                    return new TreeLoadNodesAction({ treeId: action.payload.treeId, id: null });
                }
            }));
            this.load$ = this.actions$
                .pipe(effects.ofType(TreeActionTypes.TREE_LOAD), operators.mergeMap(function (action) {
                return _this.loadNodes(action.payload.treeId, action.payload.id)
                    .pipe(operators.map(function (nodesData) {
                    return new TreeLoadNodesSuccessAction({
                        treeId: action.payload.treeId,
                        id: action.payload.id,
                        nodes: nodesData
                    });
                }), operators.catchError(function () {
                    return rxjs.of(new TreeLoadNodesErrorAction({
                        treeId: action.payload.treeId,
                        id: action.payload.id
                    }));
                }));
            }));
            this.delete$ = this.actions$
                .pipe(effects.ofType(TreeActionTypes.TREE_DELETE_NODE), operators.switchMap(function (action) {
                return _this.deleteNode(action.payload.treeId, action.payload.node)
                    .pipe(operators.map(function () { return new TreeDeleteNodeSuccessAction(__assign({}, action.payload)); }), operators.catchError(function () { return rxjs.of(new TreeDeleteNodeErrorAction(__assign({}, action.payload))); }));
            }));
            this.save$ = this.actions$
                .pipe(effects.ofType(TreeActionTypes.TREE_SAVE_NODE), operators.switchMap(function (action) {
                return _this.saveNode(action.payload.treeId, __assign({}, action.payload.node))
                    .pipe(operators.map(function (node) {
                    return new TreeSaveNodeSuccessAction({
                        treeId: action.payload.treeId,
                        oldNode: action.payload.node,
                        node: node
                    });
                }), operators.catchError(function () { return rxjs.of(new TreeSaveNodeErrorAction(__assign({}, action.payload))); }));
            }));
            this.move$ = this.actions$
                .pipe(effects.ofType(TreeActionTypes.TREE_MOVE_NODE), operators.filter(function (action) {
                return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
            }), operators.switchMap(function (action) {
                /** @type {?} */
                var source = ( /** @type {?} */(__assign({}, action.payload.oldNode)));
                /** @type {?} */
                var target = Boolean(action.payload.node) ? __assign({}, action.payload.node) : null;
                return _this.moveNode(action.payload.treeId, source, target)
                    .pipe(operators.map(function (node) {
                    return {
                        treeId: action.payload.treeId,
                        oldNode: action.payload.oldNode,
                        node: node
                    };
                }), operators.switchMap(function (data) {
                    return _this.store.select(treeConfigurationSelector(action.payload.treeId))
                        .pipe(operators.take(1), operators.map(function (configuration) {
                        return {
                            configuration: configuration,
                            data: data
                        };
                    }));
                }), operators.catchError(function () {
                    /** @type {?} */
                    var newAction = new TreeMoveNodeErrorAction({
                        treeId: action.payload.treeId,
                        source: action.payload.oldNode,
                        target: action.payload.node
                    });
                    return rxjs.of(newAction);
                }));
            }), operators.mergeMap(function (value) {
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
                .pipe(effects.ofType(TreeActionTypes.TREE_EXPAND_NODE), operators.switchMap(function (action) {
                return _this.store
                    .pipe(store.select(treeSelector(action.payload.treeId)), operators.take(1), operators.filter(function (treeState) { return !treeState.configuration.isFullyLoaded; }), operators.map(function () {
                    return new TreeLoadNodesAction({
                        treeId: action.payload.treeId,
                        id: action.payload.id
                    });
                }));
            }));
            this.insert$ = this.actions$
                .pipe(effects.ofType(TreeActionTypes.TREE_INSERT_NODE), operators.filter(function (action) { return !!action.payload.parentId; }), operators.map(function (action) {
                return new TreeExpandNodeAction({ treeId: action.payload.treeId, id: action.payload.parentId });
            }));
            this.initPathForFullyLoadedTreeEffect$ = this.actions$
                .pipe(effects.ofType(TreeActionTypes.TREE_LOAD_PATH), operators.switchMap(function (action) {
                return _this.store.select(treeConfigurationSelector(action.payload.treeId))
                    .pipe(operators.take(1), operators.map(function (configuration) {
                    return { action: action, configuration: configuration };
                }));
            }), operators.map(function (value) {
                var action = value.action, configuration = value.configuration;
                if (configuration.isFullyLoaded) {
                    return action.payload.ids.map(function (id) { return new TreeExpandNodeAction({ treeId: action.payload.treeId, id: id }); });
                }
                else {
                    /** @type {?} */
                    var loadActions = action.payload.ids.map(function (id) { return _this.loadNodes(action.payload.treeId, id); });
                    return rxjs.combineLatest(loadActions)
                        .pipe(operators.take(1), operators.mergeMap(function (data) {
                        /** @type {?} */
                        var loadSuccess = data.map(function (nodes, index) {
                            return new TreeLoadNodesSuccessAction({
                                treeId: action.payload.treeId,
                                id: action.payload.ids[index],
                                nodes: nodes
                            });
                        });
                        /** @type {?} */
                        var expandNodes = action.payload.ids.map(function (id) {
                            return new TreeExpandNodeAction({
                                treeId: action.payload.treeId,
                                id: id
                            });
                        });
                        return __spread(loadSuccess, expandNodes);
                    }));
                }
            }), operators.mergeMap(function (actions) { return actions; }));
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
                return node.id ? nodeService.remove(node.id) : rxjs.of(node);
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TreeEffectsService.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: NodeDispatcherService },
                { type: store.Store }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], TreeEffectsService.prototype, "register$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], TreeEffectsService.prototype, "load$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], TreeEffectsService.prototype, "delete$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], TreeEffectsService.prototype, "save$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], TreeEffectsService.prototype, "move$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], TreeEffectsService.prototype, "expand$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], TreeEffectsService.prototype, "insert$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], TreeEffectsService.prototype, "initPathForFullyLoadedTreeEffect$", void 0);
        return TreeEffectsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var isEqual = _isEqual;
    var TreeModel = /** @class */ (function () {
        function TreeModel(store$$1, treeData$, configuration, _fullyLoaded) {
            if (_fullyLoaded === void 0) {
                _fullyLoaded = false;
            }
            var _this = this;
            this.store = store$$1;
            this.treeData$ = treeData$;
            this.configuration = configuration;
            this._fullyLoaded = _fullyLoaded;
            this.selected = null;
            this.previouslySelected = null;
            this.subscription = new rxjs.Subscription();
            this.nodes$ = this.treeData$
                .pipe(operators.distinctUntilChanged(function (prev, next) {
                return isEqual(prev.nodes.entities, next.nodes.entities);
            }), operators.map(function (treeData) { return treeData.nodes.entities; }));
            this.rootNodes$ = this.treeData$
                .pipe(operators.map(function (treeData) { return treeData.nodes.rootNodes.map(function (id) { return treeData.nodes.entities[id]; }).sort(_this.sortNodes); }), operators.distinctUntilChanged());
            this.currentSelectedNode$ = this.treeData$
                .pipe(operators.map(function (treeData) {
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
             */ function () {
                return this.configuration.treeId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TreeModel.prototype, "isFullyLoaded", {
            get: /**
             * @return {?}
             */ function () {
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
                return rxjs.combineLatest(this.currentSelectedNode$, this.nodes$)
                    .pipe(operators.map(function (_a) {
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
                    .pipe(operators.map(function (state) { return _this.getNodesByParentId(state, nodeId); }), operators.map(function (nodes) {
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
            function (state, id) {
                return Object.keys(state)
                    .filter(function (key) { return state[key].parentId === id; })
                    .map(function (key) { return state[key]; });
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
                    .pipe(store.select(expandedNodesSelector(this.treeId)))
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
                    .pipe(store.select(selectedNodeSelector(this.treeId)))
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
                    .pipe(store.select(previouslySelectedNodeSelector(this.treeId)))
                    .subscribe(function (selected) { return _this.previouslySelected = selected; }));
            };
        return TreeModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TreeModelGeneratorService = /** @class */ (function () {
        function TreeModelGeneratorService(nodeDispatcherService, store$$1) {
            this.nodeDispatcherService = nodeDispatcherService;
            this.store = store$$1;
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
                if (nodes === void 0) {
                    nodes = null;
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TreeModelGeneratorService.ctorParameters = function () {
            return [
                { type: NodeDispatcherService },
                { type: store.Store }
            ];
        };
        return TreeModelGeneratorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParentsListComponent = /** @class */ (function () {
        function ParentsListComponent(store$$1) {
            this.store = store$$1;
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
            { type: core.Component, args: [{
                        selector: 'ri-tree-parents-list',
                        template: "<ul class=\"ri-tree-parents-list\">\n  <li class=\"fa fa-home\" (click)=\"selectNode(null, false)\"></li>\n  <li *ngFor=\"let node of parents$ | async; last as isLast\" (click)=\"selectNode(node, isLast)\">{{node.name}}\n  </li>\n</ul>\n",
                        styles: [".ri-tree-parents-list{list-style-type:none;margin:0;padding:0}.ri-tree-parents-list li{display:inline-block;cursor:pointer;color:#777}.ri-tree-parents-list li:after,.ri-tree-parents-list li:first-child,.ri-tree-parents-list li:last-child{color:#000}.ri-tree-parents-list li:not(:last-child):after{content:'/';display:inline-block;width:10px;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        ParentsListComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        ParentsListComponent.propDecorators = {
            treeModel: [{ type: core.Input }]
        };
        return ParentsListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NODE_SERVICE = new core.InjectionToken('NODE_SERVICE');
    var NodeService = /** @class */ (function () {
        function NodeService(http$$1) {
            this.http = http$$1;
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
             */ function () {
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
                if (nodeId === void 0) {
                    nodeId = '';
                }
                /** @type {?} */
                var params = new http.HttpParams().set('nodeId', nodeId);
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
                if (parentNodeId === void 0) {
                    parentNodeId = null;
                }
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
                var params = new http.HttpParams().set('nodeId', nodeId);
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
                if (destNodeId === void 0) {
                    destNodeId = null;
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NodeService.ctorParameters = function () {
            return [
                { type: http.HttpClient }
            ];
        };
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TreeInitializerService.ctorParameters = function () {
            return [
                { type: TreeModelGeneratorService },
                { type: NodeDispatcherService }
            ];
        };
        return TreeInitializerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NODE_DISPATCHER_TOKEN = new core.InjectionToken('NodeDispatcherService');
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            ngxContextmenu.ContextMenuModule,
                            ng2Dnd.DndModule,
                            effects.EffectsModule.forFeature([TreeEffectsService]),
                            http.HttpClientModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            store.StoreModule.forFeature('trees', treeReducer),
                            core$1.TranslateModule,
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
                            ng2Dnd.DraggableComponent,
                            ParentsListComponent,
                            store.StoreModule,
                            effects.EffectsModule,
                        ],
                        providers: [
                            { provide: NODE_SERVICE, useClass: NodeService, multi: true }
                        ],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        TreeModule.ctorParameters = function () {
            return [
                { type: core$1.TranslateService }
            ];
        };
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

    exports.NODE_DISPATCHER_TOKEN = NODE_DISPATCHER_TOKEN;
    exports.TreeModule = TreeModule;
    exports.TreeComponent = TreeComponent;
    exports.expand = expand;
    exports.ItemComponent = ItemComponent;
    exports.TreeModel = TreeModel;
    exports.NODE_SERVICE = NODE_SERVICE;
    exports.NodeService = NodeService;
    exports.ParentsListComponent = ParentsListComponent;
    exports.NodeDispatcherService = NodeDispatcherService;
    exports.TreeModelGeneratorService = TreeModelGeneratorService;
    exports.TreeInitializerService = TreeInitializerService;
    exports.TreeActionTypes = TreeActionTypes;
    exports.TreeCollapseNodeAction = TreeCollapseNodeAction;
    exports.TreeDeleteNodeAction = TreeDeleteNodeAction;
    exports.TreeDeleteNodeErrorAction = TreeDeleteNodeErrorAction;
    exports.TreeDeleteNodeSuccessAction = TreeDeleteNodeSuccessAction;
    exports.TreeEditNodeStartAction = TreeEditNodeStartAction;
    exports.TreeExpandNodeAction = TreeExpandNodeAction;
    exports.TreeInsertNodeAction = TreeInsertNodeAction;
    exports.TreeLoadNodesAction = TreeLoadNodesAction;
    exports.TreeLoadNodesErrorAction = TreeLoadNodesErrorAction;
    exports.TreeLoadNodesSuccessAction = TreeLoadNodesSuccessAction;
    exports.TreeLoadPathAction = TreeLoadPathAction;
    exports.TreeMarkAsFullyLoadedAction = TreeMarkAsFullyLoadedAction;
    exports.TreeMoveNodeAction = TreeMoveNodeAction;
    exports.TreeMoveNodeErrorAction = TreeMoveNodeErrorAction;
    exports.TreeMoveNodeSuccessAction = TreeMoveNodeSuccessAction;
    exports.TreeRegisterAction = TreeRegisterAction;
    exports.TreeSaveNodeAction = TreeSaveNodeAction;
    exports.TreeSaveNodeErrorAction = TreeSaveNodeErrorAction;
    exports.TreeSaveNodeSuccessAction = TreeSaveNodeSuccessAction;
    exports.TreeSelectNodeAction = TreeSelectNodeAction;
    exports.TreeSetAllNodesAction = TreeSetAllNodesAction;
    exports.TreeSetConfigurationAction = TreeSetConfigurationAction;
    exports.TreeEffectsService = TreeEffectsService;
    exports.treeReducer = treeReducer;
    exports.treeSelector = treeSelector;
    exports.treeConfigurationSelector = treeConfigurationSelector;
    exports.expandedNodesSelector = expandedNodesSelector;
    exports.selectedNodeSelector = selectedNodeSelector;
    exports.previouslySelectedNodeSelector = previouslySelectedNodeSelector;
    exports.NEW_NODE_ID = NEW_NODE_ID;
    exports.emptyTreeData = emptyTreeData;
    exports.treeStateSelector = treeStateSelector;
    exports.DragAndDrop = DragAndDrop;
    exports.DraggableDirective = DraggableDirective;
    exports.DroppableDirective = DroppableDirective;
    exports.DropzoneComponent = DropzoneComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnbi1hbmd1bGFyMi10cmVlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZS50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL3N0b3JlL3RyZWVSZWR1Y2VyLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9kcmFnQW5kRHJvcC9kcmFnQW5kRHJvcC5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi90cmVlLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvZHJhZ0FuZERyb3AvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvZHJhZ0FuZERyb3AvZHJvcHBhYmxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvZHJhZ0FuZERyb3AvZHJvcHpvbmUvZHJvcHpvbmUuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zZXJ2aWNlL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zdG9yZS90cmVlRWZmZWN0cy5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9tb2RlbHMvVHJlZU1vZGVsLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9zZXJ2aWNlL3RyZWVNb2RlbEdlbmVyYXRvci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlL2xpYi9wYXJlbnRzLWxpc3QvcGFyZW50cy1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvc2VydmljZS9ub2RlLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvbGliL3NlcnZpY2UvaW5pdGlhbGl6ZXIuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS9saWIvdHJlZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SUNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvSUNvbmZpZ3VyYXRpb24nO1xuXG5leHBvcnQgZW51bSBUcmVlQWN0aW9uVHlwZXMge1xuICBUUkVFX1NBVkVfTk9ERSA9ICdUUkVFX1NBVkVfTk9ERScsXG4gIFRSRUVfU0FWRV9OT0RFX1NVQ0NFU1MgPSAnVFJFRV9TQVZFX05PREVfU1VDQ0VTUycsXG4gIFRSRUVfU0FWRV9OT0RFX0VSUk9SID0gJ1RSRUVfU0FWRV9OT0RFX0VSUk9SJyxcbiAgVFJFRV9ERUxFVEVfTk9ERSA9ICdUUkVFX0RFTEVURV9OT0RFJyxcbiAgVFJFRV9ERUxFVEVfTk9ERV9TVUNDRVNTID0gJ1RSRUVfREVMRVRFX05PREVfU1VDQ0VTUycsXG4gIFRSRUVfREVMRVRFX05PREVfRVJST1IgPSAnVFJFRV9ERUxFVEVfTk9ERV9FUlJPUicsXG4gIFRSRUVfRURJVF9OT0RFX1NUQVJUID0gJ1RSRUVfRURJVF9OT0RFX1NUQVJUJyxcbiAgVFJFRV9DT0xMQVBTRV9OT0RFID0gJ1RSRUVfQ09MTEFQU0VfTk9ERScsXG4gIFRSRUVfRVhQQU5EX05PREUgPSAnVFJFRV9FWFBBTkRfTk9ERScsXG4gIFRSRUVfSU5TRVJUX05PREUgPSAnVFJFRV9JTlNFUlRfTk9ERScsXG4gIFRSRUVfTE9BRCA9ICdUUkVFX0xPQUQnLFxuICBUUkVFX0xPQURfUEFUSCA9ICdUUkVFX0xPQURfUEFUSCcsXG4gIFRSRUVfTE9BRF9TVUNDRVNTID0gJ1RSRUVfTE9BRF9TVUNDRVNTJyxcbiAgVFJFRV9MT0FEX0VSUk9SID0gJ1RSRUVfTE9BRF9FUlJPUicsXG4gIFRSRUVfTUFSS19BU19GVUxMWV9MT0FERUQgPSAnVFJFRV9NQVJLX0FTX0ZVTExZX0xPQURFRCcsXG4gIFRSRUVfTU9WRV9OT0RFID0gJ1RSRUVfTU9WRV9OT0RFJyxcbiAgVFJFRV9NT1ZFX05PREVfU1VDQ0VTUyA9ICdUUkVFX01PVkVfTk9ERV9TVUNDRVNTJyxcbiAgVFJFRV9NT1ZFX05PREVfRVJST1IgPSAnVFJFRV9NT1ZFX05PREVfRVJST1InLFxuICBUUkVFX1JFR0lTVEVSID0gJ1RSRUVfUkVHSVNURVInLFxuICBUUkVFX1NFTEVDVF9OT0RFID0gJ1RSRUVfU0VMRUNUX05PREUnLFxuICBUUkVFX1NFVF9BTExfTk9ERVMgPSAnVFJFRV9TRVRfQUxMX05PREVTJyxcbiAgVFJFRV9TRVRfQ09ORklHVVJBVElPTiA9ICdUUkVFX1NFVF9DT05GSUdVUkFUSU9OJ1xufVxuXG5leHBvcnQgY2xhc3MgVHJlZUNvbGxhcHNlTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9DT0xMQVBTRV9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZURlbGV0ZU5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfREVMRVRFX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlRGVsZXRlTm9kZUVycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFX0VSUk9SO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZURlbGV0ZU5vZGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9FRElUX05PREVfU1RBUlQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVFeHBhbmROb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VYUEFORF9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUluc2VydE5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfSU5TRVJUX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBwYXJlbnRJZDogc3RyaW5nIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTG9hZE5vZGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQUQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTG9hZE5vZGVzRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRF9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQURfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcsIG5vZGVzOiBJT3V0ZXJOb2RlW10gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVMb2FkUGF0aEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1BBVEg7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZHM6IHN0cmluZ1tdIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTWFya0FzRnVsbHlMb2FkZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTUFSS19BU19GVUxMWV9MT0FERUQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTW92ZU5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTU9WRV9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgc291cmNlT2ZEcm9wcGVkRGF0YTogc3RyaW5nLCBvbGROb2RlOiBhbnksIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVNb3ZlTm9kZUVycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHNvdXJjZTogSU91dGVyTm9kZSwgdGFyZ2V0OiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTW92ZU5vZGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgc291cmNlOiBJT3V0ZXJOb2RlLCB0YXJnZXQ6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVSZWdpc3RlckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9SRUdJU1RFUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHNpbGVudDogYm9vbGVhbiwgbm9kZXM6IElPdXRlck5vZGVbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVNhdmVOb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NBVkVfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTYXZlTm9kZUVycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NBVkVfTk9ERV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTYXZlTm9kZVN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0FWRV9OT0RFX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlLCBvbGROb2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2VsZWN0Tm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TRUxFQ1RfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTZXRBbGxOb2Rlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TRVRfQUxMX05PREVTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZXM6IElPdXRlck5vZGVbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VUX0NPTkZJR1VSQVRJT047XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbiB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBUcmVlQWN0aW9uID1cbiAgVHJlZUNvbGxhcHNlTm9kZUFjdGlvblxuICB8IFRyZWVEZWxldGVOb2RlQWN0aW9uXG4gIHwgVHJlZURlbGV0ZU5vZGVFcnJvckFjdGlvblxuICB8IFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uXG4gIHwgVHJlZUV4cGFuZE5vZGVBY3Rpb25cbiAgfCBUcmVlSW5zZXJ0Tm9kZUFjdGlvblxuICB8IFRyZWVMb2FkTm9kZXNBY3Rpb25cbiAgfCBUcmVlTG9hZE5vZGVzRXJyb3JBY3Rpb25cbiAgfCBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uXG4gIHwgVHJlZUxvYWRQYXRoQWN0aW9uXG4gIHwgVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uXG4gIHwgVHJlZU1vdmVOb2RlQWN0aW9uXG4gIHwgVHJlZU1vdmVOb2RlRXJyb3JBY3Rpb25cbiAgfCBUcmVlTW92ZU5vZGVTdWNjZXNzQWN0aW9uXG4gIHwgVHJlZVJlZ2lzdGVyQWN0aW9uXG4gIHwgVHJlZVNhdmVOb2RlQWN0aW9uXG4gIHwgVHJlZVNhdmVOb2RlRXJyb3JBY3Rpb25cbiAgfCBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uXG4gIHwgVHJlZVNlbGVjdE5vZGVBY3Rpb25cbiAgfCBUcmVlU2V0QWxsTm9kZXNBY3Rpb25cbiAgfCBUcmVlU2V0Q29uZmlndXJhdGlvbkFjdGlvblxuICA7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7SVRyZWVDb25maWd1cmF0aW9uLCBJVHJlZURhdGEsIElUcmVlTm9kZXMsIElUcmVlU3RhdGV9IGZyb20gJy4vSVRyZWVTdGF0ZSc7XG5pbXBvcnQge1xuICBUcmVlQWN0aW9uLFxuICBUcmVlQWN0aW9uVHlwZXMsXG4gIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24sXG4gIFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbixcbiAgVHJlZUV4cGFuZE5vZGVBY3Rpb24sXG4gIFRyZWVJbnNlcnROb2RlQWN0aW9uLFxuICBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbixcbiAgVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uLFxuICBUcmVlTW92ZU5vZGVTdWNjZXNzQWN0aW9uLFxuICBUcmVlUmVnaXN0ZXJBY3Rpb24sXG4gIFRyZWVTYXZlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVTZWxlY3ROb2RlQWN0aW9uLFxuICBUcmVlU2V0QWxsTm9kZXNBY3Rpb24sXG4gIFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uXG59IGZyb20gJy4vdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge2NyZWF0ZUZlYXR1cmVTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3J9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7TWVtb2l6ZWRTZWxlY3Rvcn0gZnJvbSAnQG5ncngvc3RvcmUvc3JjL3NlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IE5FV19OT0RFX0lEID0gJ3JpLW5ldy1ub2RlLWlkJztcblxuZXhwb3J0IGNvbnN0IGVtcHR5VHJlZURhdGE6IElUcmVlRGF0YSA9IHtcbiAgbm9kZXM6IHtcbiAgICBlbnRpdGllczoge30sXG4gICAgcHJldmlvdXNseVNlbGVjdGVkOiBudWxsLFxuICAgIHNlbGVjdGVkOiBudWxsLFxuICAgIHJvb3ROb2RlczogW10sXG4gICAgZXhwYW5kZWQ6IFtdLFxuICB9LFxuICBjb25maWd1cmF0aW9uOiB7XG4gICAgaXNGdWxseUxvYWRlZDogZmFsc2VcbiAgfVxufTtcblxuZnVuY3Rpb24gY29weVN0YXRlKHN0YXRlOiBJVHJlZVN0YXRlLCB0cmVlSWQ6IHN0cmluZyA9IG51bGwpIHtcbiAgY29uc3QgbmV3U3RhdGUgPSB7Li4uc3RhdGV9O1xuXG4gIC8vIHRvZG86IGZpbmQgYmV0dGVyIHdheSB0byBjbG9uZSBvYmplY3RcbiAgaWYgKHRyZWVJZCkge1xuICAgIG5ld1N0YXRlW3RyZWVJZF0gPSB7XG4gICAgICBub2Rlczoge1xuICAgICAgICBlbnRpdGllczogey4uLnN0YXRlW3RyZWVJZF0ubm9kZXMuZW50aXRpZXN9LFxuICAgICAgICBwcmV2aW91c2x5U2VsZWN0ZWQ6IHN0YXRlW3RyZWVJZF0ubm9kZXMucHJldmlvdXNseVNlbGVjdGVkLFxuICAgICAgICBzZWxlY3RlZDogc3RhdGVbdHJlZUlkXS5ub2Rlcy5zZWxlY3RlZCxcbiAgICAgICAgcm9vdE5vZGVzOiBbLi4uc3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXNdLFxuICAgICAgICBleHBhbmRlZDogWy4uLnN0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWRdLFxuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHsuLi5zdGF0ZVt0cmVlSWRdLmNvbmZpZ3VyYXRpb259XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnRyZWVJZCk7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgdHJlZVN0YXRlID0gbmV3U3RhdGVbdHJlZUlkXTtcbiAgY29uc3Qgbm9kZSA9IGFjdGlvbi5wYXlsb2FkLm5vZGU7XG4gIGNvbnN0IHBhcmVudElkID0gbm9kZS5wYXJlbnRJZDtcblxuICBkZWxldGUgdHJlZVN0YXRlLm5vZGVzLmVudGl0aWVzW25vZGUuaWRdO1xuXG4gIGlmIChwYXJlbnRJZCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHsuLi50cmVlU3RhdGUubm9kZXMuZW50aXRpZXNbcGFyZW50SWRdfTtcblxuICAgIGlmIChwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbi5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gbm9kZS5pZCk7XG4gICAgfVxuICAgIHRyZWVTdGF0ZS5ub2Rlcy5lbnRpdGllc1twYXJlbnRJZF0gPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgdHJlZVN0YXRlLm5vZGVzLnJvb3ROb2RlcyA9IHRyZWVTdGF0ZS5ub2Rlcy5yb290Tm9kZXMuZmlsdGVyKChpZCkgPT4gaWQgIT09IG5vZGUuaWQpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWROb2RlcyhzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbikge1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgYWN0aW9uLnBheWxvYWQudHJlZUlkKTtcbiAgbGV0IHBhcmVudDogSU91dGVyTm9kZSB8IG51bGwgPSBudWxsO1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IHBhcmVudElkID0gYWN0aW9uLnBheWxvYWQuaWQ7XG5cbiAgaWYgKHBhcmVudElkKSB7XG4gICAgcGFyZW50ID0gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1twYXJlbnRJZF07XG4gICAgcGFyZW50LmNoaWxkcmVuID0gW107XG4gIH0gZWxzZSB7XG4gICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllcyA9IHt9O1xuICB9XG5cbiAgYWN0aW9uLnBheWxvYWQubm9kZXMuZm9yRWFjaCgobm9kZURhdGE6IElPdXRlck5vZGUpID0+IHtcbiAgICBub2RlRGF0YS50cmVlSWQgPSB0cmVlSWQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZURhdGEuaWQpO1xuICAgICAgbm9kZURhdGEucGFyZW50cyA9IFsuLi5wYXJlbnQucGFyZW50cywgLi4uW3BhcmVudC5pZF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlRGF0YS5wYXJlbnRzID0gW107XG4gICAgfVxuXG4gICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tub2RlRGF0YS5pZF0gPSBub2RlRGF0YTtcblxuICAgIGlmICghcGFyZW50SWQpIHtcbiAgICAgIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMucm9vdE5vZGVzLnB1c2gobm9kZURhdGEuaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5cbmZ1bmN0aW9uIGV4cGFuZE5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZUV4cGFuZE5vZGVBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgdHJlZUlkKTtcbiAgY29uc3Qgbm9kZUlkID0gYWN0aW9uLnBheWxvYWQuaWQ7XG5cbiAgLy8gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tub2RlSWRdID0gT2JqZWN0LmFzc2lnbih7fSwgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllc1tub2RlSWRdLCB7aXNFeHBhbmRlZDogdHJ1ZX0pO1xuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmV4cGFuZGVkID0gWy4uLm5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZXhwYW5kZWQsIG5vZGVJZF07XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5cbmZ1bmN0aW9uIGNvbGxhcHNlTm9kZShzdGF0ZTogSVRyZWVTdGF0ZSwgYWN0aW9uOiBUcmVlQ29sbGFwc2VOb2RlQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG4gIGNvbnN0IG5vZGVJZCA9IGFjdGlvbi5wYXlsb2FkLmlkO1xuXG4gIC8vIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZW50aXRpZXNbbm9kZUlkXSA9IHsuLi5uZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmVudGl0aWVzW25vZGVJZF0sIC4uLntpc0V4cGFuZGVkOiBmYWxzZX19O1xuICBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLmV4cGFuZGVkID0gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5leHBhbmRlZC5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gbm9kZUlkKTtcblxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuXG5mdW5jdGlvbiBpbnNlcnROb2RlKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVJbnNlcnROb2RlQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG4gIGNvbnN0IHBhcmVudElkID0gYWN0aW9uLnBheWxvYWQucGFyZW50SWQ7XG4gIGNvbnN0IG5ld05vZGU6IElPdXRlck5vZGUgPSB7XG4gICAgaWQ6IE5FV19OT0RFX0lELFxuICAgIHRyZWVJZDogdHJlZUlkLFxuICAgIG5hbWU6ICdOZXcgZGF0YScsXG4gICAgcGFyZW50SWQ6IHBhcmVudElkLFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBwYXJlbnRzOiBbXSxcbiAgICBpc0V4cGFuZGVkOiBmYWxzZVxuICB9O1xuXG4gIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZW50aXRpZXNbTkVXX05PREVfSURdID0gbmV3Tm9kZTtcblxuICBpZiAoIXBhcmVudElkKSB7XG4gICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMgPSBbLi4ubmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMsIE5FV19OT0RFX0lEXTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2F2ZU5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbik6IElUcmVlU3RhdGUge1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgYWN0aW9uLnBheWxvYWQudHJlZUlkKTtcbiAgY29uc3Qgb2xkID0gYWN0aW9uLnBheWxvYWQub2xkTm9kZTtcbiAgY29uc3QgbmV3Tm9kZSA9IGFjdGlvbi5wYXlsb2FkLm5vZGU7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgdHJlZVN0YXRlID0gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllcztcblxuICBpZiAodHJlZVN0YXRlW05FV19OT0RFX0lEXSkge1xuICAgIGRlbGV0ZSB0cmVlU3RhdGVbTkVXX05PREVfSURdO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSB0cmVlU3RhdGVbb2xkLmlkXTtcbiAgfVxuXG4gIGNvbnN0IG5vZGVJZCA9IG5ld05vZGUuaWQ7XG4gIHRyZWVTdGF0ZVtub2RlSWRdID0gbmV3Tm9kZTtcblxuICBjb25zdCBwYXJlbnRJZCA9IG5ld05vZGUucGFyZW50SWQ7XG4gIGNvbnN0IHBhcmVudCA9IHRyZWVTdGF0ZVtwYXJlbnRJZF0gfHwgbnVsbDtcblxuICBuZXdOb2RlLnBhcmVudHMgPSBbXTtcblxuICBpZiAocGFyZW50SWQpIHtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBpZiAoIXBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZUlkKTtcblxuICAgICAgbmV3Tm9kZS5wYXJlbnRzID0gWy4uLnBhcmVudC5wYXJlbnRzLCBwYXJlbnQuaWRdO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvbGQuaWQgPT09IE5FV19OT0RFX0lEKSB7XG4gICAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMgPSBuZXdTdGF0ZVt0cmVlSWRdLm5vZGVzLnJvb3ROb2Rlcy5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gTkVXX05PREVfSUQpO1xuICAgIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMucm9vdE5vZGVzLnB1c2gobm9kZUlkKTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZnVuY3Rpb24gbW92ZU5vZGUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvbikge1xuICBjb25zdCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSwgYWN0aW9uLnBheWxvYWQudHJlZUlkKTtcbiAgY29uc3Qgb2xkTm9kZSA9IGFjdGlvbi5wYXlsb2FkLnNvdXJjZTtcbiAgY29uc3QgbmV3Tm9kZSA9IGFjdGlvbi5wYXlsb2FkLnRhcmdldDtcbiAgY29uc3QgdHJlZUlkID0gYWN0aW9uLnBheWxvYWQudHJlZUlkO1xuICBjb25zdCB0cmVlRGF0YSA9IG5ld1N0YXRlW3RyZWVJZF07XG4gIGNvbnN0IHRyZWVTdGF0ZSA9IG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMuZW50aXRpZXM7XG5cbiAgLy8gcmVtb3ZlIGluZm8gYWJvdXQgcmVtb3ZlZCBjaGlsZFxuICBpZiAob2xkTm9kZS5wYXJlbnRJZCkge1xuICAgIHRyZWVTdGF0ZVtvbGROb2RlLnBhcmVudElkXS5jaGlsZHJlbiA9IHRyZWVTdGF0ZVtvbGROb2RlLnBhcmVudElkXS5jaGlsZHJlbi5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gb2xkTm9kZS5pZCk7XG4gIH0gZWxzZSB7XG4gICAgdHJlZURhdGEubm9kZXMucm9vdE5vZGVzID0gdHJlZURhdGEubm9kZXMucm9vdE5vZGVzLmZpbHRlcigoaWQpID0+IGlkICE9PSBvbGROb2RlLmlkKTtcbiAgfVxuXG4gIC8vIGFkZCBpbmZvIGFib3V0IG1vdmVkIG5vZGVcbiAgaWYgKG5ld05vZGUucGFyZW50SWQpIHtcbiAgICBjb25zdCBuZXdQYXJlbnQgPSB0cmVlU3RhdGVbbmV3Tm9kZS5wYXJlbnRJZF07XG5cbiAgICBpZiAobmV3UGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICBuZXdQYXJlbnQuY2hpbGRyZW4ucHVzaChuZXdOb2RlLmlkKTtcbiAgICB9XG5cbiAgICBuZXdOb2RlLnBhcmVudHMgPSBbLi4ubmV3UGFyZW50LnBhcmVudHMsIG5ld1BhcmVudC5pZF07XG4gIH0gZWxzZSB7XG4gICAgdHJlZURhdGEubm9kZXMucm9vdE5vZGVzLnB1c2gobmV3Tm9kZS5pZCk7XG4gICAgbmV3Tm9kZS5wYXJlbnRzID0gW107XG4gIH1cblxuICAvLyByZXBsYWNlIG5vZGUgZGF0YVxuICB0cmVlU3RhdGVbbmV3Tm9kZS5pZF0gPSB7Li4ubmV3Tm9kZX07XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlclRyZWUoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVJlZ2lzdGVyQWN0aW9uKSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlKTtcblxuICBuZXdTdGF0ZVthY3Rpb24ucGF5bG9hZC50cmVlSWRdID0ge1xuICAgIG5vZGVzOiB7XG4gICAgICBlbnRpdGllczogey4uLmVtcHR5VHJlZURhdGEubm9kZXMuZW50aXRpZXN9LFxuICAgICAgcHJldmlvdXNseVNlbGVjdGVkOiBlbXB0eVRyZWVEYXRhLm5vZGVzLnByZXZpb3VzbHlTZWxlY3RlZCxcbiAgICAgIHNlbGVjdGVkOiBlbXB0eVRyZWVEYXRhLm5vZGVzLnNlbGVjdGVkLFxuICAgICAgcm9vdE5vZGVzOiBbLi4uZW1wdHlUcmVlRGF0YS5ub2Rlcy5yb290Tm9kZXNdLFxuICAgICAgZXhwYW5kZWQ6IFsuLi5lbXB0eVRyZWVEYXRhLm5vZGVzLmV4cGFuZGVkXVxuICAgIH0sXG4gICAgY29uZmlndXJhdGlvbjogey4uLmVtcHR5VHJlZURhdGEuY29uZmlndXJhdGlvbn1cbiAgfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gc2V0QWxsTm9kZXMoc3RhdGU6IElUcmVlU3RhdGUsIGFjdGlvbjogVHJlZVNldEFsbE5vZGVzQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC50cmVlSWQpO1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IG5vZGVzID0gYWN0aW9uLnBheWxvYWQubm9kZXM7XG4gIGNvbnN0IG5ld05vZGVzOiBJVHJlZU5vZGVzID0ge307XG4gIGNvbnN0IGlkczogc3RyaW5nW10gPSBub2Rlcy5tYXAoKG5vZGVEYXRhOiBJT3V0ZXJOb2RlKSA9PiBub2RlRGF0YS5pZCk7XG5cbiAgbm9kZXMuZm9yRWFjaCgobm9kZURhdGE6IElPdXRlck5vZGUpID0+IHtcbiAgICBub2RlRGF0YS50cmVlSWQgPSB0cmVlSWQ7XG4gICAgbmV3Tm9kZXNbbm9kZURhdGEuaWRdID0gbm9kZURhdGE7XG5cbiAgICBpZiAobm9kZURhdGEucGFyZW50SWQgPT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMucm9vdE5vZGVzLnB1c2gobm9kZURhdGEuaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5yb290Tm9kZXMuZm9yRWFjaCgoaWQpID0+IHVwZGF0ZVBhcmVudHMobmV3Tm9kZXMsIGlkKSk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5lbnRpdGllcyA9IG5ld05vZGVzO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFyZW50cyhub2RlczogSVRyZWVOb2Rlcywgbm9kZUlkOiBzdHJpbmcsIHBhcmVudHM6IHN0cmluZ1tdID0gW10pOiB2b2lkIHtcbiAgY29uc3Qgbm9kZTogSU91dGVyTm9kZSA9IG5vZGVzW25vZGVJZF07XG5cbiAgaWYgKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudHMgPSBbLi4ucGFyZW50c107XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXdQYXJlbnRzID0gWy4uLnBhcmVudHMsIC4uLltub2RlLmlkXV07XG5cbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZElkID0+IHVwZGF0ZVBhcmVudHMobm9kZXMsIGNoaWxkSWQsIG5ld1BhcmVudHMpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya1RyZWVBc0Z1bGx5TG9hZGVkKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvbik6IElUcmVlU3RhdGUge1xuICBjb25zdCB0cmVlSWQgPSBhY3Rpb24ucGF5bG9hZC50cmVlSWQ7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCB0cmVlSWQpO1xuXG4gIG5ld1N0YXRlW3RyZWVJZF0uY29uZmlndXJhdGlvbiA9IHsuLi5uZXdTdGF0ZVt0cmVlSWRdLmNvbmZpZ3VyYXRpb24sIC4uLntpc0Z1bGx5TG9hZGVkOiB0cnVlfX07XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBzZXRDb25maWd1cmF0aW9uKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uKTogSVRyZWVTdGF0ZSB7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3QgbmV3U3RhdGUgPSBjb3B5U3RhdGUoc3RhdGUsIHRyZWVJZCk7XG5cbiAgbmV3U3RhdGVbdHJlZUlkXS5jb25maWd1cmF0aW9uID0gey4uLm5ld1N0YXRlW3RyZWVJZF0uY29uZmlndXJhdGlvbiwgLi4uYWN0aW9uLnBheWxvYWQuY29uZmlndXJhdGlvbn07XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3ROb2RlKHN0YXRlOiBJVHJlZVN0YXRlLCBhY3Rpb246IFRyZWVTZWxlY3ROb2RlQWN0aW9uKSB7XG4gIGNvbnN0IHRyZWVJZCA9IGFjdGlvbi5wYXlsb2FkLnRyZWVJZDtcbiAgY29uc3Qgbm9kZSA9IGFjdGlvbi5wYXlsb2FkLm5vZGU7XG4gIGNvbnN0IG5ld1N0YXRlID0gY29weVN0YXRlKHN0YXRlLCB0cmVlSWQpO1xuXG4gIG5ld1N0YXRlW3RyZWVJZF0ubm9kZXMucHJldmlvdXNseVNlbGVjdGVkID0gbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5zZWxlY3RlZDtcbiAgbmV3U3RhdGVbdHJlZUlkXS5ub2Rlcy5zZWxlY3RlZCA9IG5vZGUgPyBub2RlLmlkIDogbnVsbDtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmVlUmVkdWNlcihzdGF0ZTogSVRyZWVTdGF0ZSA9IHt9LCBhY3Rpb246IFRyZWVBY3Rpb24pOiBJVHJlZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfUkVHSVNURVI6XG4gICAgICByZXR1cm4gcmVnaXN0ZXJUcmVlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfU0FWRV9OT0RFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gc2F2ZU5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHJlbW92ZU5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9JTlNFUlRfTk9ERTpcbiAgICAgIHJldHVybiBpbnNlcnROb2RlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIGxvYWROb2RlcyhzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIG1vdmVOb2RlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VUX0FMTF9OT0RFUzpcbiAgICAgIHJldHVybiBzZXRBbGxOb2RlcyhzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX01BUktfQVNfRlVMTFlfTE9BREVEOlxuICAgICAgcmV0dXJuIG1hcmtUcmVlQXNGdWxseUxvYWRlZChzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFVF9DT05GSUdVUkFUSU9OOlxuICAgICAgcmV0dXJuIHNldENvbmZpZ3VyYXRpb24oc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9FWFBBTkRfTk9ERTpcbiAgICAgIHJldHVybiBleHBhbmROb2RlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfQ09MTEFQU0VfTk9ERTpcbiAgICAgIHJldHVybiBjb2xsYXBzZU5vZGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TRUxFQ1RfTk9ERTpcbiAgICAgIHJldHVybiBzZWxlY3ROb2RlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfREVMRVRFX05PREU6XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9FRElUX05PREVfU1RBUlQ6XG4gICAgY2FzZSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEOlxuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfTU9WRV9OT0RFOlxuICAgIGNhc2UgVHJlZUFjdGlvblR5cGVzLlRSRUVfU0FWRV9OT0RFOlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgdHJlZVN0YXRlU2VsZWN0b3I6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBJVHJlZVN0YXRlPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxJVHJlZVN0YXRlPigndHJlZXMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVTZWxlY3Rvcih0cmVlSWQ6IHN0cmluZyk6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBJVHJlZURhdGE+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKHRyZWVTdGF0ZVNlbGVjdG9yLCAoc3RhdGU6IElUcmVlU3RhdGUpID0+IHN0YXRlW3RyZWVJZF0gfHwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmVlQ29uZmlndXJhdGlvblNlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElUcmVlQ29uZmlndXJhdGlvbj4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IodHJlZVN0YXRlU2VsZWN0b3IsIChzdGF0ZTogSVRyZWVTdGF0ZSkgPT4gc3RhdGVbdHJlZUlkXS5jb25maWd1cmF0aW9uIHx8IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kZWROb2Rlc1NlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcih0cmVlU3RhdGVTZWxlY3RvciwgKHN0YXRlOiBJVHJlZVN0YXRlKSA9PiBzdGF0ZVt0cmVlSWRdLm5vZGVzLmV4cGFuZGVkIHx8IFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdGVkTm9kZVNlbGVjdG9yKHRyZWVJZDogc3RyaW5nKTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZz4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IodHJlZVN0YXRlU2VsZWN0b3IsIChzdGF0ZTogSVRyZWVTdGF0ZSkgPT4gc3RhdGVbdHJlZUlkXS5ub2Rlcy5zZWxlY3RlZCB8fCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZpb3VzbHlTZWxlY3RlZE5vZGVTZWxlY3Rvcih0cmVlSWQ6IHN0cmluZyk6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmc+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKHRyZWVTdGF0ZVNlbGVjdG9yLCAoc3RhdGU6IElUcmVlU3RhdGUpID0+IHN0YXRlW3RyZWVJZF0ubm9kZXMucHJldmlvdXNseVNlbGVjdGVkIHx8IG51bGwpO1xufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb250ZXh0TWVudUNvbXBvbmVudCwgQ29udGV4dE1lbnVTZXJ2aWNlfSBmcm9tICduZ3gtY29udGV4dG1lbnUnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtcbiAgVHJlZUFjdGlvblR5cGVzLFxuICBUcmVlQ29sbGFwc2VOb2RlQWN0aW9uLFxuICBUcmVlRGVsZXRlTm9kZUFjdGlvbixcbiAgVHJlZUVkaXROb2RlU3RhcnRBY3Rpb24sXG4gIFRyZWVFeHBhbmROb2RlQWN0aW9uLFxuICBUcmVlU2F2ZU5vZGVBY3Rpb24sXG4gIFRyZWVTZWxlY3ROb2RlQWN0aW9uXG59IGZyb20gJy4uL3N0b3JlL3RyZWVBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlTW9kZWx9IGZyb20gJy4uL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtBY3Rpb25zfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zL3NyYy9hbmltYXRpb25fbWV0YWRhdGEnO1xuaW1wb3J0IHtzZWxlY3QsIFN0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lUcmVlU3RhdGV9IGZyb20gJy4uL3N0b3JlL0lUcmVlU3RhdGUnO1xuaW1wb3J0IHtORVdfTk9ERV9JRCwgcHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yfSBmcm9tICcuLi9zdG9yZS90cmVlUmVkdWNlcic7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtlbXB0eSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kKCk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKCdleHBhbmQnLCBbXG4gICAgc3RhdGUoJyonLCBzdHlsZSh7J292ZXJmbG93LXknOiAnaGlkZGVuJ30pKSxcbiAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsnb3ZlcmZsb3cteSc6ICdoaWRkZW4nfSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIHN0eWxlKHtoZWlnaHQ6ICcqJ30pLFxuICAgICAgYW5pbWF0ZSgzMDAsIHN0eWxlKHtoZWlnaHQ6IDB9KSlcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICBzdHlsZSh7aGVpZ2h0OiAnMCd9KSxcbiAgICAgIGFuaW1hdGUoMzAwLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSlcbiAgICBdKVxuICBdKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAncmktdHJlZS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbZXhwYW5kKCldXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIElucHV0IGZpZWxkIHdoZXJlIHdlIGNhbiBjaGFuZ2UgZGF0YSBuYW1lXG4gICAqL1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dDogYW55O1xuXG4gIC8qKlxuICAgKiBOb2RlIGluc3RhbmNlXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG5vZGUobm9kZTogSU91dGVyTm9kZSkge1xuICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgdGhpcy5pbml0RWRpdE1vZGVJZk5lZWRlZChub2RlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbm9kZSgpOiBJT3V0ZXJOb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0cmVlTW9kZWw6IFRyZWVNb2RlbDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29udGV4dE1lbnU6IENvbnRleHRNZW51Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogRm9ybSBmaWVsZCB0byBjaGFuZ2UgZGF0YSBuYW1lXG4gICAqL1xuICBwdWJsaWMgbmFtZUZpZWxkID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgcHVibGljIGlzRWRpdE1vZGUgPSBmYWxzZTtcblxuICBwdWJsaWMgY2hpbGRyZW4kOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4gPSBlbXB0eSgpO1xuXG4gIHByb3RlY3RlZCBpc1N0YXJ0U2F2ZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHJvdGVjdGVkIF9ub2RlOiBJT3V0ZXJOb2RlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29udGV4dE1lbnVTZXJ2aWNlOiBDb250ZXh0TWVudVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyh2YWx1ZXMpOiB2b2lkIHtcbiAgICAvLyBpZiBub2RlIGlzIGFkZGVkIHRvIHRoZSB0cmVlIHRoZW4gc29tZSBwYXJ0IG9mIG5vZGVzIGlzIG1vdmluZyBkb3duXG4gICAgLy8gYW5kIHRoZSBuZXcgb25lIGlzIGluc2VydGVkLCB0aGVuIGFsbCBzdWIgbm9kZXMgc2hvdWxkIGJlIHJld3JpdHRlblxuICAgIGNvbnN0IG5vZGUgPSB2YWx1ZXMubm9kZTtcblxuICAgIGlmIChub2RlICYmICFub2RlLmZpcnN0Q2hhbmdlICYmIG5vZGUucHJldmlvdXNWYWx1ZS5pZCAhPT0gbm9kZS5jdXJyZW50VmFsdWUuaWQpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4kID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hpbGRyZW4kID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVGb3JPbkVkaXQoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KHByZXZpb3VzbHlTZWxlY3RlZE5vZGVTZWxlY3Rvcih0aGlzLm5vZGUudHJlZUlkKSksXG4gICAgICAgICAgZmlsdGVyKChwcmV2aW91c2x5U2VsZWN0ZWQ6IHN0cmluZykgPT4gcHJldmlvdXNseVNlbGVjdGVkID09PSB0aGlzLm5vZGUuaWQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlIG5vZGVcbiAgICovXG4gIHB1YmxpYyBjb2xsYXBzZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlQ29sbGFwc2VOb2RlQWN0aW9uKHtcbiAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgaWQ6IHRoaXMubm9kZS5pZCxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwYW5kIG5vZGVcbiAgICovXG4gIHB1YmxpYyBleHBhbmQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZUV4cGFuZE5vZGVBY3Rpb24oe3RyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLCBpZDogdGhpcy5ub2RlLmlkfSkpO1xuICB9XG5cbiAgcHVibGljIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy5pc1N0YXJ0U2F2ZSkge1xuICAgICAgdGhpcy5pc1N0YXJ0U2F2ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuZG9DaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMudW5kb0NoYW5nZXMoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLmlzU3RhcnRTYXZlID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG5vZGU6IElPdXRlck5vZGUgPSB7XG4gICAgICAgIGlkOiB0aGlzLm5vZGUuaWQsXG4gICAgICAgIHRyZWVJZDogdGhpcy5ub2RlLnRyZWVJZCxcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lRmllbGQudmFsdWUsXG4gICAgICAgIHBhcmVudElkOiB0aGlzLm5vZGUucGFyZW50SWQsXG4gICAgICAgIGNoaWxkcmVuOiB0aGlzLm5vZGUuY2hpbGRyZW4sXG4gICAgICAgIHBhcmVudHM6IHRoaXMubm9kZS5wYXJlbnRzLFxuICAgICAgICBpc0V4cGFuZGVkOiBmYWxzZVxuICAgICAgfTtcblxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZVNhdmVOb2RlQWN0aW9uKHtcbiAgICAgICAgdHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsXG4gICAgICAgIG5vZGUsXG4gICAgICB9KSk7XG4gICAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Db250ZXh0TWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMudHJlZU1vZGVsLmNvbmZpZ3VyYXRpb24uZGlzYWJsZUNvbnRleHRNZW51KSB7XG4gICAgICB0aGlzLmNvbnRleHRNZW51U2VydmljZS5zaG93Lm5leHQoe1xuICAgICAgICBjb250ZXh0TWVudTogdGhpcy5jb250ZXh0TWVudSxcbiAgICAgICAgZXZlbnQ6ICRldmVudCxcbiAgICAgICAgaXRlbTogdGhpcy5ub2RlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZVNlbGVjdE5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZTogbnVsbCxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZVNlbGVjdE5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZTogdGhpcy5ub2RlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0cmFja0J5Rm4oaXRlbTogSU91dGVyTm9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2hpbGRyZW4oKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwuZ2V0Q2hpbGRyZW4odGhpcy5ub2RlLmlkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0RWRpdE1vZGVJZk5lZWRlZChub2RlOiBJT3V0ZXJOb2RlKSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0VkaXRNb2RlID0gbm9kZS5pZCA9PT0gTkVXX05PREVfSUQ7XG5cbiAgICBpZiAodGhpcy5pc0VkaXRNb2RlKSB7XG4gICAgICB0aGlzLm5hbWVGaWVsZC5zZXRWYWx1ZSgnJyk7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGlzTmV3Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlLmlkID09PSBORVdfTk9ERV9JRDtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRGb2N1cygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVGb3JPbkVkaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5hY3Rpb25zJFxuICAgICAgICAub2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VESVRfTk9ERV9TVEFSVClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKChhY3Rpb246IFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZC5ub2RlID09PSB0aGlzLm5vZGUpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoYWN0aW9uOiBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMubmFtZUZpZWxkLnNldFZhbHVlKHRoaXMubm9kZS5uYW1lKTtcbiAgICAgICAgICB0aGlzLmlzRWRpdE1vZGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVuZG9DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuaXNOZXdOb2RlKCkpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVEZWxldGVOb2RlQWN0aW9uKHtcbiAgICAgICAgdHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsXG4gICAgICAgIG5vZGU6IHRoaXMubm9kZSxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lEcmFnQW5kRHJvcCwgSURyYWdFbGVtZW50LCBJRHJvcEVsZW1lbnR9IGZyb20gJy4uL2ludGVyZmFjZXMvSURyYWdBbmREcm9wJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCB3aXRoTGF0ZXN0RnJvbX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3Age1xuICBwdWJsaWMgc3RhdGljIERST1BfREFUQV9UWVBFID0gJ1RSRUVfTk9ERSc7XG5cbiAgcHJvdGVjdGVkIGRyb3BTdHJlYW0kOiBTdWJqZWN0PElEcm9wRWxlbWVudCB8IG51bGw+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJvdGVjdGVkIGRyYWdTdHJlYW0kOiBCZWhhdmlvclN1YmplY3Q8SURyYWdFbGVtZW50IHwgbnVsbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIHB1YmxpYyBkcm9wJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRyb3AkID0gdGhpcy5kcm9wU3RyZWFtJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuZHJhZ1N0cmVhbSQpLFxuICAgICAgICBtYXAoKFtkcm9wTm9kZSwgZHJhZ05vZGVdOiBbSURyb3BFbGVtZW50LCBJRHJhZ0VsZW1lbnRdKTogSURyYWdBbmREcm9wID0+IHtcbiAgICAgICAgICByZXR1cm4ge2RyYWdOb2RlOiBkcmFnTm9kZSwgZHJvcE5vZGU6IGRyb3BOb2RlLCB0eXBlOiBkcmFnTm9kZS50eXBlfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgZHJhZ1N0YXJ0KGRyYWdFbGVtZW50OiBJRHJhZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmRyYWdTdHJlYW0kLm5leHQoZHJhZ0VsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIGRyYWdFbmQoZHJvcEVsZW1lbnQ6IElEcm9wRWxlbWVudCB8IG51bGwpIHtcbiAgICB0aGlzLmRyb3BTdHJlYW0kLm5leHQoZHJvcEVsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIGdldERyYWdTdHJlYW0oKTogQmVoYXZpb3JTdWJqZWN0PElEcmFnRWxlbWVudCB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5kcmFnU3RyZWFtJDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMYXN0RHJhZ0VsZW1lbnQoKTogSURyYWdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5kcmFnU3RyZWFtJC5nZXRWYWx1ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0lDb250ZXh0TWVudX0gZnJvbSAnLi9pbnRlcmZhY2VzL0lDb250ZXh0TWVudSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi9tb2RlbHMvVHJlZU1vZGVsJztcbmltcG9ydCB7Q29udGV4dE1lbnVDb21wb25lbnR9IGZyb20gJ25neC1jb250ZXh0bWVudSc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL2RyYWdBbmREcm9wL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHtJRHJhZ0FuZERyb3B9IGZyb20gJy4vaW50ZXJmYWNlcy9JRHJhZ0FuZERyb3AnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICcuL3N0b3JlL0lUcmVlU3RhdGUnO1xuaW1wb3J0IHtmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFRyZWVEZWxldGVOb2RlQWN0aW9uLFxuICBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbixcbiAgVHJlZUluc2VydE5vZGVBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZUFjdGlvblxufSBmcm9tICcuL3N0b3JlL3RyZWVBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdyaS10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmVlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB0cmVlTW9kZWw6IFRyZWVNb2RlbDtcblxuICBAVmlld0NoaWxkKCdjb250ZXh0TWVudScpIGNvbnRleHRNZW51OiBDb250ZXh0TWVudUNvbXBvbmVudDtcblxuICAvKipcbiAgICogTGlzdCBvZiBkZWZhdWx0IG9wdGlvbnMgZm9yIGNvbnRleHQgbWVudVxuICAgKi9cbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogSUNvbnRleHRNZW51W10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ29uRWRpdCcsXG4gICAgICB0ZXh0OiAnUklfVFJFRV9MQkxfRURJVF9OT0RFJyxcbiAgICAgIGljb25DbHM6ICdmYSBmYS1lZGl0J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ29uRGVsZXRlJyxcbiAgICAgIHRleHQ6ICdSSV9UUkVFX0xCTF9SRU1PVkVfTk9ERScsXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtdHJhc2gnXG4gICAgfVxuICBdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvbnRleHQgbWVudSBpdGVtc1xuICAgKi9cbiAgcHVibGljIG1lbnVMaXN0OiBJQ29udGV4dE1lbnVbXSA9IFtdO1xuXG4gIHB1YmxpYyByb290Tm9kZXMkOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT47XG5cbiAgcHJvdGVjdGVkIGN1cnJlbnRTZWxlY3RlZE5vZGU6IElPdXRlck5vZGU7XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBkcmFnQW5kRHJvcDogRHJhZ0FuZERyb3ApIHtcblxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWdpc3Rlck1vdmUoKTtcblxuICAgIHRoaXMucm9vdE5vZGVzJCA9IHRoaXMudHJlZU1vZGVsLnJvb3ROb2RlcyQ7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnRyZWVNb2RlbC5jdXJyZW50U2VsZWN0ZWROb2RlJFxuICAgICAgICAuc3Vic2NyaWJlKChub2RlOiBJT3V0ZXJOb2RlKSA9PiB0aGlzLmN1cnJlbnRTZWxlY3RlZE5vZGUgPSBub2RlKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoZGF0YTogYW55KSB7XG4gICAgdGhpcy5tZW51TGlzdCA9IFtdO1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5tZW51TGlzdC5wdXNoKGl0ZW0pKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFkZCgpIHtcbiAgICBjb25zdCBwYXJlbnRJZCA9IHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSA/IHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZS5pZCA6IG51bGw7XG5cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlSW5zZXJ0Tm9kZUFjdGlvbih7dHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsIHBhcmVudElkfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIHNlbGVjdCBpdGVtIGZyb20gY29udGV4dCBtZW51XG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIC0gbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIG5vZGUgLSBkYXRhIGl0ZW1cbiAgICovXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51Q2xpY2sobmFtZTogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlKSB7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ29uRWRpdCc6XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbih7bm9kZX0pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvbkRlbGV0ZSc6XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVEZWxldGVOb2RlQWN0aW9uKHt0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCwgbm9kZX0pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oJ1Vua25vd24gY29udGV4dCBtZW51IGFjdGlvbjogJyArIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0cmFja0J5Rm4oaXRlbTogSU91dGVyTm9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgZGF0YSBcIm1vdmUgZXZlbnRcIlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyTW92ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmVlTW9kZWwuY29uZmlndXJhdGlvbi5kaXNhYmxlTW92ZU5vZGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnQW5kRHJvcC5kcm9wJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZGF0YTogSURyYWdBbmREcm9wKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gRHJhZ0FuZERyb3AuRFJPUF9EQVRBX1RZUEUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmRyb3BOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLmRyb3BOb2RlLmRhdGEudHJlZUlkID09PSB0aGlzLnRyZWVNb2RlbC50cmVlSWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZGF0YS5kcmFnTm9kZS5kYXRhLnRyZWVJZCA9PT0gdGhpcy50cmVlTW9kZWwudHJlZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5kcm9wTm9kZSAmJiBkYXRhLmRyb3BOb2RlLnpvbmVzICYmIGRhdGEuZHJvcE5vZGUuem9uZXMuaW5kZXhPZihkYXRhLmRyYWdOb2RlLnpvbmVJZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogSURyYWdBbmREcm9wKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyb3BOb2RlID0gZGF0YS5kcm9wTm9kZSA/IGRhdGEuZHJvcE5vZGUuZGF0YSA6IG51bGw7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVNb3ZlTm9kZUFjdGlvbih7XG4gICAgICAgICAgICBzb3VyY2VPZkRyb3BwZWREYXRhOiBkYXRhLnR5cGUsXG4gICAgICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgICAgIG9sZE5vZGU6IGRhdGEuZHJhZ05vZGUuZGF0YSxcbiAgICAgICAgICAgIG5vZGU6IGRyb3BOb2RlXG4gICAgICAgICAgfVxuICAgICAgICApKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JpRHJhZ2dhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBkcmFnWm9uZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHNvdXJjZVR5cGU6IHN0cmluZyA9IERyYWdBbmREcm9wLkRST1BfREFUQV9UWVBFO1xuXG4gIHB1YmxpYyBkcmFnRW5hYmxlZCA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGRyYWdBbmREcm9wOiBEcmFnQW5kRHJvcCkge1xuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJhZ3N0YXJ0JywgKCRldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vbkRyYWdTdGFydCgkZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIubGlzdGVuKGVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgLy8gb24gZHJhZyBlbmQgd2UgcmVzZXQgbGFzdCBkcmFnIGVsZW1lbnQgKHRoaXMgZXZlbnQgaXMgZmlyZWQgYWZ0ZXIgZHJvcClcbiAgICAgIHRoaXMuZHJhZ0FuZERyb3AuZHJhZ1N0YXJ0KG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdTdGFydCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIHRoaXMuZHJhZ0FuZERyb3AuZHJhZ1N0YXJ0KHt6b25lSWQ6IHRoaXMuZHJhZ1pvbmUsIGRhdGE6IHRoaXMuZGF0YSwgdHlwZTogdGhpcy5zb3VyY2VUeXBlfSk7XG5cbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnY29weSc7XG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kcmFnZ2FibGUgPSB0aGlzLmRyYWdFbmFibGVkO1xuXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHJhZ2dhYmxlRGlyZWN0aXZlIG5lZWRzIGRhdGEnKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3BDb25maWcge1xuICBkcm9wQWxsb3dlZENzc0NsYXNzPzogc3RyaW5nO1xuICBkcm9wWm9uZT86IHN0cmluZ1tdIHwgbnVsbDtcbn1cblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmlEcm9wcGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhOiBJT3V0ZXJOb2RlO1xuICBASW5wdXQoKSBkcm9wQ29uZmlnOiBEcm9wQ29uZmlnID0ge307XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByb3RlY3RlZCBkcmFnQW5kRHJvcDogRHJhZ0FuZERyb3ApIHtcbiAgICByZW5kZXJlci5saXN0ZW4oZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJywgKCRldmVudCkgPT4ge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkcm9wQWxsb3dlZCA9IHRoaXMuaXNEcm9wQWxsb3dlZCgpO1xuXG4gICAgICB0aGlzLmNoYW5nZVRhcmdldEN1cnNvcigkZXZlbnQsIGRyb3BBbGxvd2VkKTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcENsYXNzKGRyb3BBbGxvd2VkKTtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJywgKCRldmVudCkgPT4ge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvZ2dsZURyb3BDbGFzcyhmYWxzZSk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJlci5saXN0ZW4oZWwubmF0aXZlRWxlbWVudCwgJ2Ryb3AnLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZURyb3BDbGFzcyhmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoKSkge1xuICAgICAgICB0aGlzLmRyYWdBbmREcm9wLmRyYWdFbmQoe3pvbmVzOiB0aGlzLmRyb3BDb25maWcuZHJvcFpvbmUsIGRhdGE6IHRoaXMuZGF0YX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdENvbmZpZygpO1xuXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHJvcHBhYmxlRGlyZWN0aXZlIG5lZWRzIGRhdGEnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9yIHJlbW92ZSBhZGRpdGlvbmFsIGNsYXNzIHdoZW4gZHJvcCBhbGxvd2VkXG4gICAqIEBwYXJhbSBkcm9wQWxsb3dlZFxuICAgKi9cbiAgcHJpdmF0ZSB0b2dnbGVEcm9wQ2xhc3MoZHJvcEFsbG93ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5kcm9wQ29uZmlnLmRyb3BBbGxvd2VkQ3NzQ2xhc3MsIGRyb3BBbGxvd2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEcm9wQWxsb3dlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsYXN0RHJhZ0VsZW1lbnQgPSB0aGlzLmRyYWdBbmREcm9wLmdldExhc3REcmFnRWxlbWVudCgpO1xuICAgIGNvbnN0IHNvdXJjZSA9IGxhc3REcmFnRWxlbWVudC5kYXRhO1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkcm9wWm9uZSA9IHRoaXMuZHJvcENvbmZpZy5kcm9wWm9uZTtcblxuICAgIGlmIChkcm9wWm9uZSAmJiBkcm9wWm9uZS5sZW5ndGggPiAwICYmIGRyb3Bab25lLmluZGV4T2YobGFzdERyYWdFbGVtZW50LnpvbmVJZCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdG9kbzogY2hlY2sgZHJhZyBhbmQgZHJvcCB6b25lc1xuICAgIHJldHVybiAhKHNvdXJjZSA9PT0gdGFyZ2V0IHx8IHRhcmdldC5pZCA9PT0gc291cmNlLnBhcmVudElkIHx8IHRhcmdldC5wYXJlbnRzLmluZGV4T2Yoc291cmNlLmlkKSA+IC0xKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hhbmdlIGRyYWcgZXZlbnQgY3Vyc29yXG4gICAqIEBwYXJhbSAkZXZlbnRcbiAgICogQHBhcmFtIGFkZFxuICAgKi9cbiAgcHJpdmF0ZSBjaGFuZ2VUYXJnZXRDdXJzb3IoJGV2ZW50OiBEcmFnRXZlbnQsIGFkZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3Vyc29yVHlwZSA9IGFkZCA/ICdjb3B5JyA6ICdub25lJztcblxuICAgICRldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IGN1cnNvclR5cGU7XG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gY3Vyc29yVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIGNvbmZpZ3VyYXRpb24gb3B0aW9ucywgdXNlIGRlZmF1bHQgb3IgcGFzc2VkXG4gICAqL1xuICBwcml2YXRlIGluaXRDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZzogRHJvcENvbmZpZyA9IHtcbiAgICAgIGRyb3BBbGxvd2VkQ3NzQ2xhc3M6ICdkcm9wLWFsbG93ZWQnXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHRDb25maWcpIHtcbiAgICAgIGlmIChkZWZhdWx0Q29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5kcm9wQ29uZmlnW2tleV0gPSB0aGlzLmRyb3BDb25maWdba2V5XSB8fCBkZWZhdWx0Q29uZmlnW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmVlTW9kZWx9IGZyb20gJy4uLy4uL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi4vZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0lEcmFnQW5kRHJvcCwgSURyYWdFbGVtZW50fSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lEcmFnQW5kRHJvcCc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHttZXJnZSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWRyb3B6b25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3B6b25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcHpvbmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wem9uZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuICBASW5wdXQoKSBkcm9wWm9uZTogc3RyaW5nW10gPSBbXTtcblxuICBwdWJsaWMgaXNPcGVuJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZHJhZ0FuZERyb3A6IERyYWdBbmREcm9wKSB7XG5cbiAgICBjb25zdCBpc0RyYWdTdGFydCQgPSB0aGlzLmRyYWdBbmREcm9wLmdldERyYWdTdHJlYW0oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoZHJhZ0VsZW1lbnQ6IElEcmFnRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRHJhZ0VsZW1lbnQgPSAhIWRyYWdFbGVtZW50ICYmICEhZHJhZ0VsZW1lbnQuZGF0YTtcblxuICAgICAgICAgIGlmIChpc0RyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZHJhZ0VsZW1lbnQudHlwZSA9PT0gRHJhZ0FuZERyb3AuRFJPUF9EQVRBX1RZUEUpIHtcbiAgICAgICAgICAgICAgY29uc3QgaXNOb3RSb290RWxlbWVudCA9IGRyYWdFbGVtZW50LmRhdGEucGFyZW50SWQ7XG4gICAgICAgICAgICAgIGNvbnN0IGlzRnJvbUN1cnJlbnRUcmVlID0gZHJhZ0VsZW1lbnQuZGF0YS50cmVlSWQgPT09IHRoaXMudHJlZU1vZGVsLnRyZWVJZDtcblxuICAgICAgICAgICAgICByZXR1cm4gKGlzTm90Um9vdEVsZW1lbnQgJiYgaXNGcm9tQ3VycmVudFRyZWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnN0IGlzRHJhZ0VuZCQgPSB0aGlzLmRyYWdBbmREcm9wLmRyb3AkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkYXRhOiBJRHJhZ0FuZERyb3ApOiBib29sZWFuID0+IHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgdGhpcy5pc09wZW4kID0gbWVyZ2UoaXNEcmFnU3RhcnQkLCBpc0RyYWdFbmQkKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyb3AoKSB7XG4gICAgdGhpcy5kcmFnQW5kRHJvcC5kcmFnRW5kKG51bGwpO1xuICB9XG5cbiAgcHVibGljIG9uRHJhZ092ZXIoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lOb2RlU2VydmljZX0gZnJvbSAnLi9ub2RlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm9kZURpc3BhdGNoZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub2RlU2VydmljZXM6IHsgW2tleTogc3RyaW5nXTogSU5vZGVTZXJ2aWNlIH0gPSB7fTtcblxuICBwdWJsaWMgcmVnaXN0ZXJTZXJ2aWNlKG5hbWU6IHN0cmluZywgbm9kZVNlcnZpY2U6IElOb2RlU2VydmljZSk6IHZvaWQge1xuICAgIHRoaXMubm9kZVNlcnZpY2VzW25hbWVdID0gbm9kZVNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IElOb2RlU2VydmljZSB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy5ub2RlU2VydmljZXNbbmFtZV0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlU2VydmljZXNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlZmF1bHQgbm9kZSBzZXJ2aWNlIHByb3ZpZGVyXG4gICAgICB0aHJvdyBFcnJvcihgTm8gdHJlZSBzZXJ2aWNlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZX0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBUcmVlQWN0aW9uLFxuICBUcmVlQWN0aW9uVHlwZXMsXG4gIFRyZWVEZWxldGVOb2RlQWN0aW9uLFxuICBUcmVlRGVsZXRlTm9kZUVycm9yQWN0aW9uLFxuICBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVFeHBhbmROb2RlQWN0aW9uLFxuICBUcmVlSW5zZXJ0Tm9kZUFjdGlvbixcbiAgVHJlZUxvYWROb2Rlc0FjdGlvbixcbiAgVHJlZUxvYWROb2Rlc0Vycm9yQWN0aW9uLFxuICBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbixcbiAgVHJlZUxvYWRQYXRoQWN0aW9uLFxuICBUcmVlTW92ZU5vZGVBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZUVycm9yQWN0aW9uLFxuICBUcmVlTW92ZU5vZGVTdWNjZXNzQWN0aW9uLFxuICBUcmVlUmVnaXN0ZXJBY3Rpb24sXG4gIFRyZWVTYXZlTm9kZUFjdGlvbixcbiAgVHJlZVNhdmVOb2RlRXJyb3JBY3Rpb24sXG4gIFRyZWVTYXZlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVTZXRBbGxOb2Rlc0FjdGlvblxufSBmcm9tICcuL3RyZWVBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lUcmVlQWN0aW9uUGF5bG9hZCwgSVRyZWVDb25maWd1cmF0aW9uLCBJVHJlZURhdGEsIElUcmVlU3RhdGV9IGZyb20gJy4vSVRyZWVTdGF0ZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuLi9kcmFnQW5kRHJvcC9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgZmlsdGVyLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7c2VsZWN0LCBTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtORVdfTk9ERV9JRCwgdHJlZUNvbmZpZ3VyYXRpb25TZWxlY3RvciwgdHJlZVNlbGVjdG9yfSBmcm9tICcuL3RyZWVSZWR1Y2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVFZmZlY3RzU2VydmljZSB7XG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgcmVnaXN0ZXIkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX1JFR0lTVEVSKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBUcmVlUmVnaXN0ZXJBY3Rpb24pOiBUcmVlQWN0aW9uID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLnNpbGVudCkge1xuICAgICAgICAgIHJldHVybiBuZXcgVHJlZVNldEFsbE5vZGVzQWN0aW9uKHt0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgbm9kZXM6IGFjdGlvbi5wYXlsb2FkLm5vZGVzfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUcmVlTG9hZE5vZGVzQWN0aW9uKHt0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgaWQ6IG51bGx9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgbG9hZCQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRCksXG4gICAgICBtZXJnZU1hcCgoYWN0aW9uOiBUcmVlTG9hZE5vZGVzQWN0aW9uKSA9PiB0aGlzLmxvYWROb2RlcyhhY3Rpb24ucGF5bG9hZC50cmVlSWQsIGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKG5vZGVzRGF0YTogSU91dGVyTm9kZVtdKTogVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb24gPT4gbmV3IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uKHtcbiAgICAgICAgICAgIHRyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLFxuICAgICAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgICAgICAgbm9kZXM6IG5vZGVzRGF0YVxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBUcmVlTG9hZE5vZGVzRXJyb3JBY3Rpb24oe1xuICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgICB9KSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBkZWxldGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlRGVsZXRlTm9kZUFjdGlvbikgPT4gdGhpcy5kZWxldGVOb2RlKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgYWN0aW9uLnBheWxvYWQubm9kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpOiBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb24gPT4gbmV3IFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbih7Li4uYWN0aW9uLnBheWxvYWR9KSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKTogT2JzZXJ2YWJsZTxUcmVlRGVsZXRlTm9kZUVycm9yQWN0aW9uPiA9PiBvZihuZXcgVHJlZURlbGV0ZU5vZGVFcnJvckFjdGlvbih7Li4uYWN0aW9uLnBheWxvYWR9KSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBzYXZlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVTYXZlTm9kZUFjdGlvbikgPT4gdGhpcy5zYXZlTm9kZShhY3Rpb24ucGF5bG9hZC50cmVlSWQsIHsuLi5hY3Rpb24ucGF5bG9hZC5ub2RlfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChub2RlOiBJT3V0ZXJOb2RlKTogVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbiA9PiBuZXcgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbih7XG4gICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgIG9sZE5vZGU6IGFjdGlvbi5wYXlsb2FkLm5vZGUsXG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFRyZWVTYXZlTm9kZUVycm9yQWN0aW9uKHsuLi5hY3Rpb24ucGF5bG9hZH0pKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBtb3ZlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREUpLFxuICAgICAgZmlsdGVyKChhY3Rpb246IFRyZWVNb3ZlTm9kZUFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuc291cmNlT2ZEcm9wcGVkRGF0YSA9PT0gRHJhZ0FuZERyb3AuRFJPUF9EQVRBX1RZUEU7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlTW92ZU5vZGVBY3Rpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSA8SU91dGVyTm9kZT57Li4uYWN0aW9uLnBheWxvYWQub2xkTm9kZX07XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gQm9vbGVhbihhY3Rpb24ucGF5bG9hZC5ub2RlKSA/IHsuLi5hY3Rpb24ucGF5bG9hZC5ub2RlfSA6IG51bGw7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTm9kZShhY3Rpb24ucGF5bG9hZC50cmVlSWQsIHNvdXJjZSwgdGFyZ2V0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgobm9kZTogSU91dGVyTm9kZSk6IElUcmVlQWN0aW9uUGF5bG9hZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHRyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLFxuICAgICAgICAgICAgICAgICAgb2xkTm9kZTogYWN0aW9uLnBheWxvYWQub2xkTm9kZSxcbiAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKChkYXRhOiBJVHJlZUFjdGlvblBheWxvYWQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QodHJlZUNvbmZpZ3VyYXRpb25TZWxlY3RvcihhY3Rpb24ucGF5bG9hZC50cmVlSWQpKVxuICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgICAgIG1hcCgoY29uZmlndXJhdGlvbjogSVRyZWVDb25maWd1cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBY3Rpb24gPSBuZXcgVHJlZU1vdmVOb2RlRXJyb3JBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbi5wYXlsb2FkLm9sZE5vZGUsXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFjdGlvbi5wYXlsb2FkLm5vZGVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvZihuZXdBY3Rpb24pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIG1lcmdlTWFwKCh2YWx1ZTogeyBkYXRhOiBJVHJlZUFjdGlvblBheWxvYWQsIGNvbmZpZ3VyYXRpb246IElUcmVlQ29uZmlndXJhdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB2YWx1ZS5kYXRhO1xuICAgICAgICBjb25zdCBhY3Rpb25zOiBUcmVlQWN0aW9uW10gPSBbXG4gICAgICAgICAgbmV3IFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb24oe3RyZWVJZDogZGF0YS50cmVlSWQsIHNvdXJjZTogZGF0YS5vbGROb2RlLCB0YXJnZXQ6IGRhdGEubm9kZX0pLFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmICghdmFsdWUuY29uZmlndXJhdGlvbi5pc0Z1bGx5TG9hZGVkKSB7XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKG5ldyBUcmVlTG9hZE5vZGVzQWN0aW9uKHt0cmVlSWQ6IGRhdGEudHJlZUlkLCBpZDogZGF0YS5ub2RlLnBhcmVudElkfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICB9KVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBleHBhbmQkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VYUEFORF9OT0RFKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlRXhwYW5kTm9kZUFjdGlvbikgPT5cbiAgICAgICAgdGhpcy5zdG9yZVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KHRyZWVTZWxlY3RvcihhY3Rpb24ucGF5bG9hZC50cmVlSWQpKSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBmaWx0ZXIoKHRyZWVTdGF0ZTogSVRyZWVEYXRhKSA9PiAhdHJlZVN0YXRlLmNvbmZpZ3VyYXRpb24uaXNGdWxseUxvYWRlZCksXG4gICAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFRyZWVMb2FkTm9kZXNBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgaW5zZXJ0JCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9JTlNFUlRfTk9ERSksXG4gICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZUluc2VydE5vZGVBY3Rpb24pID0+ICEhYWN0aW9uLnBheWxvYWQucGFyZW50SWQpLFxuICAgICAgbWFwKChhY3Rpb246IFRyZWVJbnNlcnROb2RlQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgVHJlZUV4cGFuZE5vZGVBY3Rpb24oe3RyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLCBpZDogYWN0aW9uLnBheWxvYWQucGFyZW50SWR9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGluaXRQYXRoRm9yRnVsbHlMb2FkZWRUcmVlRWZmZWN0JCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1BBVEgpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVMb2FkUGF0aEFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QodHJlZUNvbmZpZ3VyYXRpb25TZWxlY3RvcihhY3Rpb24ucGF5bG9hZC50cmVlSWQpKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIG1hcCgoY29uZmlndXJhdGlvbjogSVRyZWVDb25maWd1cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7YWN0aW9uLCBjb25maWd1cmF0aW9ufTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKCh2YWx1ZTogeyBhY3Rpb246IFRyZWVMb2FkUGF0aEFjdGlvbiwgY29uZmlndXJhdGlvbjogSVRyZWVDb25maWd1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgICBjb25zdCB7YWN0aW9uLCBjb25maWd1cmF0aW9ufSA9IHZhbHVlO1xuXG4gICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uaXNGdWxseUxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmlkcy5tYXAoKGlkOiBzdHJpbmcpID0+IG5ldyBUcmVlRXhwYW5kTm9kZUFjdGlvbih7dHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsIGlkfSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkQWN0aW9ucyA9IGFjdGlvbi5wYXlsb2FkLmlkcy5tYXAoKGlkOiBzdHJpbmcpID0+IHRoaXMubG9hZE5vZGVzKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgaWQpKTtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KGxvYWRBY3Rpb25zKVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIG1lcmdlTWFwKChkYXRhOiBJT3V0ZXJOb2RlW11bXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZFN1Y2Nlc3MgPSBkYXRhLm1hcCgobm9kZXM6IElPdXRlck5vZGVbXSwgaW5kZXgpID0+IG5ldyBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHRyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLFxuICAgICAgICAgICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWRzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZE5vZGVzID0gYWN0aW9uLnBheWxvYWQuaWRzLm1hcCgoaWQ6IHN0cmluZykgPT4gbmV3IFRyZWVFeHBhbmROb2RlQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ubG9hZFN1Y2Nlc3MsIC4uLmV4cGFuZE5vZGVzXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIG1lcmdlTWFwKChhY3Rpb25zOiBhbnlbXSkgPT4gYWN0aW9ucylcbiAgICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+KSB7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVsZXRlTm9kZSh0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IG5vZGVTZXJ2aWNlID0gdGhpcy5ub2RlRGlzcGF0Y2hlclNlcnZpY2UuZ2V0KHRyZWVJZCk7XG5cbiAgICByZXR1cm4gbm9kZS5pZCA/IG5vZGVTZXJ2aWNlLnJlbW92ZShub2RlLmlkKSA6IG9mKG5vZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvYWROb2Rlcyh0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB8IG51bGwpIHtcbiAgICBjb25zdCBub2RlU2VydmljZSA9IHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpO1xuXG4gICAgcmV0dXJuIG5vZGVTZXJ2aWNlLmxvYWQoaWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNhdmVOb2RlKHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3Qgbm9kZVNlcnZpY2UgPSB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5nZXQodHJlZUlkKTtcblxuICAgIGlmIChub2RlLmlkID09PSBORVdfTk9ERV9JRCkge1xuICAgICAgcmV0dXJuIG5vZGVTZXJ2aWNlLmFkZChub2RlLCBub2RlLnBhcmVudElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGVTZXJ2aWNlLnVwZGF0ZShub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgbW92ZU5vZGUodHJlZUlkOiBzdHJpbmcsIHNvdXJjZTogSU91dGVyTm9kZSwgdGFyZ2V0OiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3Qgbm9kZVNlcnZpY2UgPSB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5nZXQodHJlZUlkKTtcblxuICAgIHJldHVybiBub2RlU2VydmljZS5tb3ZlKHNvdXJjZSwgdGFyZ2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge0lUcmVlRGF0YSwgSVRyZWVOb2RlcywgSVRyZWVTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIF9pc0VxdWFsIGZyb20gJ2xvZGFzaC5pc2VxdWFsJztcbmltcG9ydCB7XG4gIGV4cGFuZGVkTm9kZXNTZWxlY3RvcixcbiAgTkVXX05PREVfSUQsXG4gIHByZXZpb3VzbHlTZWxlY3RlZE5vZGVTZWxlY3RvcixcbiAgc2VsZWN0ZWROb2RlU2VsZWN0b3Jcbn0gZnJvbSAnLi4vc3RvcmUvdHJlZVJlZHVjZXInO1xuaW1wb3J0IHtzZWxlY3QsIFN0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1RyZWVMb2FkUGF0aEFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IGlzRXF1YWwgPSBfaXNFcXVhbDtcblxuZXhwb3J0IGNsYXNzIFRyZWVNb2RlbCB7XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uLnRyZWVJZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNGdWxseUxvYWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsbHlMb2FkZWQ7XG4gIH1cblxuICBwdWJsaWMgbm9kZXMkOiBPYnNlcnZhYmxlPElUcmVlTm9kZXM+O1xuICBwdWJsaWMgcm9vdE5vZGVzJDogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+O1xuICBwdWJsaWMgY3VycmVudFNlbGVjdGVkTm9kZSQ6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG4gIHByaXZhdGUgZXhwYW5kZWQ6IFNldDxzdHJpbmc+O1xuICBwcml2YXRlIHNlbGVjdGVkOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHByZXZpb3VzbHlTZWxlY3RlZDogc3RyaW5nID0gbnVsbDtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCB0cmVlRGF0YSQ6IE9ic2VydmFibGU8SVRyZWVEYXRhPixcbiAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfZnVsbHlMb2FkZWQgPSBmYWxzZSkge1xuICAgIHRoaXMubm9kZXMkID0gdGhpcy50cmVlRGF0YSRcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldjogSVRyZWVEYXRhLCBuZXh0OiBJVHJlZURhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gaXNFcXVhbChwcmV2Lm5vZGVzLmVudGl0aWVzLCBuZXh0Lm5vZGVzLmVudGl0aWVzKTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgodHJlZURhdGE6IElUcmVlRGF0YSk6IElUcmVlTm9kZXMgPT4gdHJlZURhdGEubm9kZXMuZW50aXRpZXMpXG4gICAgICApO1xuXG4gICAgdGhpcy5yb290Tm9kZXMkID0gdGhpcy50cmVlRGF0YSRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHRyZWVEYXRhOiBJVHJlZURhdGEpOiBJT3V0ZXJOb2RlW10gPT4gdHJlZURhdGEubm9kZXMucm9vdE5vZGVzLm1hcCgoaWQpID0+IHRyZWVEYXRhLm5vZGVzLmVudGl0aWVzW2lkXSkuc29ydCh0aGlzLnNvcnROb2RlcykpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKTtcblxuICAgIHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSQgPSB0aGlzLnRyZWVEYXRhJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgodHJlZURhdGE6IElUcmVlRGF0YSk6IElPdXRlck5vZGUgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGVzRGF0YSA9IHRyZWVEYXRhLm5vZGVzO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBub2Rlc0RhdGEuc2VsZWN0ZWQ7XG5cbiAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRJZCA/IG5vZGVzRGF0YS5lbnRpdGllc1tzZWxlY3RlZElkXSA6IG51bGw7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldjogSU91dGVyTm9kZSwgbmV4dDogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAvLyAgIHJldHVybiBpc0VxdWFsKHByZXYgPyBwcmV2LmlkIDogbnVsbCwgbmV4dCA/IG5leHQuaWQgOiBudWxsKVxuICAgICAgICAvLyB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuaW5pdENvbmZpZ3VyYXRpb24oKTtcbiAgICB0aGlzLnN1YnNjcmliZUV4cGFuZGVkKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RlZCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlUHJldmlvdXNseVNlbGVjdGVkKCk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmVudHNMaXN0KCk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZE5vZGUkLFxuICAgICAgdGhpcy5ub2RlcyRcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChbY3VycmVudE5vZGUsIG5vZGVzXTogW0lPdXRlck5vZGUsIElUcmVlTm9kZXNdKTogSU91dGVyTm9kZVtdID0+IHtcbiAgICAgICAgICBpZiAoIUJvb2xlYW4oY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcGFyZW50czogSU91dGVyTm9kZVtdID0gY3VycmVudE5vZGUucGFyZW50cy5tYXAoaWQgPT4gbm9kZXNbaWRdKTtcblxuICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hpbGRyZW4obm9kZUlkOiBzdHJpbmcgfCBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHN0YXRlOiBJVHJlZU5vZGVzKTogSU91dGVyTm9kZVtdID0+IHRoaXMuZ2V0Tm9kZXNCeVBhcmVudElkKHN0YXRlLCBub2RlSWQpKSxcbiAgICAgICAgbWFwKChub2RlczogSU91dGVyTm9kZVtdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5ub2Rlc10uc29ydCh0aGlzLnNvcnROb2Rlcyk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGluaXRQYXRoKHBhdGg6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZUxvYWRQYXRoQWN0aW9uKHt0cmVlSWQ6IHRoaXMuY29uZmlndXJhdGlvbi50cmVlSWQsIGlkczogcGF0aH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4cGFuZGVkKG5vZGU6IElPdXRlck5vZGUpOiBib29sZWFuIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZC5oYXMobm9kZS5pZCk7XG4gIH1cblxuICBwdWJsaWMgaXNTZWxlY3RlZChub2RlOiBJT3V0ZXJOb2RlKTogYm9vbGVhbiB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgPT09IG5vZGUuaWQ7XG4gIH1cblxuICBwdWJsaWMgd2FzUHJldmlvdXNseVNlbGVjdGVkKG5vZGVJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNseVNlbGVjdGVkID09PSBub2RlSWQ7XG4gIH1cblxuICBwcml2YXRlIGluaXRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbiA9IHtcbiAgICAgIGRpc2FibGVNb3ZlTm9kZXM6IGZhbHNlLFxuICAgICAgZHJhZ1pvbmU6IG51bGwsXG4gICAgICBkcm9wWm9uZTogbnVsbCxcbiAgICAgIHRyZWVJZDogJ3RyZWUnLFxuICAgICAgc2hvd0FkZEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGlzQW5pbWF0aW9uOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdENvbmZpZ3VyYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbltrZXldID0gZGVmYXVsdENvbmZpZ3VyYXRpb25ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5vZGVzQnlQYXJlbnRJZChzdGF0ZTogSVRyZWVOb2RlcywgaWQ6IHN0cmluZyB8IG51bGwpOiBJT3V0ZXJOb2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZSlcbiAgICAgIC5maWx0ZXIoKGtleTogc3RyaW5nKSA9PiBzdGF0ZVtrZXldLnBhcmVudElkID09PSBpZClcbiAgICAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBzdGF0ZVtrZXldKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydE5vZGVzKGZpcnN0OiBJT3V0ZXJOb2RlLCBzZWNvbmQ6IElPdXRlck5vZGUpOiBudW1iZXIge1xuICAgIGlmIChzZWNvbmQuaWQgPT09IE5FV19OT0RFX0lEKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Lm5hbWUgPiBzZWNvbmQubmFtZSA/IDEgOiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRXhwYW5kZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zdG9yZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzZWxlY3QoZXhwYW5kZWROb2Rlc1NlbGVjdG9yKHRoaXMudHJlZUlkKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChleHBhbmRlZDogc3RyaW5nW10pID0+IHRoaXMuZXhwYW5kZWQgPSBuZXcgU2V0KGV4cGFuZGVkKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnN0b3JlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNlbGVjdChzZWxlY3RlZE5vZGVTZWxlY3Rvcih0aGlzLnRyZWVJZCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc2VsZWN0ZWQ6IHN0cmluZykgPT4gdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVByZXZpb3VzbHlTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnN0b3JlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNlbGVjdChwcmV2aW91c2x5U2VsZWN0ZWROb2RlU2VsZWN0b3IodGhpcy50cmVlSWQpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHNlbGVjdGVkOiBzdHJpbmcpID0+IHRoaXMucHJldmlvdXNseVNlbGVjdGVkID0gc2VsZWN0ZWQpXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvSUNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtUcmVlTW9kZWx9IGZyb20gJy4uL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHt0cmVlU2VsZWN0b3J9IGZyb20gJy4uL3N0b3JlL3RyZWVSZWR1Y2VyJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SVRyZWVTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge1xuICBUcmVlTWFya0FzRnVsbHlMb2FkZWRBY3Rpb24sXG4gIFRyZWVSZWdpc3RlckFjdGlvbixcbiAgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb25cbn0gZnJvbSAnLi4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPikge1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVRyZWVNb2RlbChjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbiwgbm9kZXM6IElPdXRlck5vZGVbXSA9IG51bGwpOiBUcmVlTW9kZWwge1xuICAgIGNvbnN0IHRyZWVJZCA9IGNvbmZpZ3VyYXRpb24udHJlZUlkO1xuICAgIGNvbnN0IGlzRnVsbHlMb2FkZWQgPSBCb29sZWFuKG5vZGVzKTtcblxuICAgIC8vIHJlZ2lzdGVyIG5ldyB0cmVlIGluIHN0b3JlXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZVJlZ2lzdGVyQWN0aW9uKHtcbiAgICAgIHRyZWVJZCxcbiAgICAgIHNpbGVudDogaXNGdWxseUxvYWRlZCxcbiAgICAgIG5vZGVzXG4gICAgfSkpO1xuXG4gICAgLy8gaW5pdCB0cmVlIGNvbmZpZ3VyYXRpb25cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2V0Q29uZmlndXJhdGlvbkFjdGlvbih7dHJlZUlkLCBjb25maWd1cmF0aW9ufSkpO1xuXG4gICAgaWYgKEJvb2xlYW4obm9kZXMpKSB7XG4gICAgICB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5nZXQodHJlZUlkKS5zZXRBbGxOb2Rlcyhub2Rlcyk7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlTWFya0FzRnVsbHlMb2FkZWRBY3Rpb24oe3RyZWVJZH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2xkZXJzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHRyZWVTZWxlY3Rvcihjb25maWd1cmF0aW9uLnRyZWVJZCkpO1xuXG4gICAgcmV0dXJuIG5ldyBUcmVlTW9kZWwodGhpcy5zdG9yZSwgZm9sZGVycyQsIGNvbmZpZ3VyYXRpb24sIGlzRnVsbHlMb2FkZWQpO1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtUcmVlU2VsZWN0Tm9kZUFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0lUcmVlU3RhdGV9IGZyb20gJy4uL3N0b3JlL0lUcmVlU3RhdGUnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS10cmVlLXBhcmVudHMtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJlbnRzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJlbnRzLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJlbnRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0cmVlTW9kZWw6IFRyZWVNb2RlbDtcblxuICBwdWJsaWMgcGFyZW50cyQ6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPikge1xuXG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYXJlbnRzJCA9IHRoaXMudHJlZU1vZGVsLmdldFBhcmVudHNMaXN0KCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Tm9kZShub2RlOiBJT3V0ZXJOb2RlLCBpc0N1cnJlbnRTZWxlY3RlZE5vZGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWlzQ3VycmVudFNlbGVjdGVkTm9kZSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZVNlbGVjdE5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZSxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtJQXBpQ29uZmlnfSBmcm9tICcuLi9JQXBpQ29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vZGVTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgdHJlZUlkOiBzdHJpbmc7XG5cbiAgbG9hZChub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPjtcblxuICBhZGQobm9kZTogSU91dGVyTm9kZSwgcGFyZW50Tm9kZUlkOiBzdHJpbmcgfCBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcblxuICBtb3ZlKHNyY05vZGU6IElPdXRlck5vZGUsIHRhcmdldE5vZGU6IElPdXRlck5vZGUgfCBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcblxuICB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG5cbiAgcmVtb3ZlKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcblxuICBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5PREVfU0VSVklDRSA9IG5ldyBJbmplY3Rpb25Ub2tlbignTk9ERV9TRVJWSUNFJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb2RlU2VydmljZSBpbXBsZW1lbnRzIElOb2RlU2VydmljZSB7XG4gIHByb3RlY3RlZCBhcGlDb25maWc6IElBcGlDb25maWcgPSB7XG4gICAgYWRkVXJsOiAnL2FwaS9ub2RlcycsXG4gICAgZ2V0VXJsOiAnL2FwaS9ub2RlcycsXG4gICAgbW92ZVVybDogJy9hcGkvbm9kZXMvbW92ZScsXG4gICAgdXBkYXRlVXJsOiAnL2FwaS9ub2RlcycsXG4gICAgcmVtb3ZlVXJsOiAnL2FwaS9ub2RlcycsXG4gIH07XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3RyZWUnO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICBwdWJsaWMgc2V0QWxsTm9kZXMobm9kZXM6IElPdXRlck5vZGVbXSk6IHZvaWQge1xuXG4gIH1cblxuICBwdWJsaWMgbG9hZChub2RlSWQgPSAnJyk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ25vZGVJZCcsIG5vZGVJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJT3V0ZXJOb2RlW10+KHRoaXMuZ2V0UGF0aCgnR0VUJywgbm9kZUlkKSwge3BhcmFtc30pO1xuICB9XG5cblxuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxJT3V0ZXJOb2RlPih0aGlzLmdldFBhdGgoJ0NSRUFURScsIHBhcmVudE5vZGVJZCksIHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBwYXJlbnROb2RlSWQ6IHBhcmVudE5vZGVJZFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBzcmNJZCA9IHNyY05vZGUuaWQ7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSB0YXJnZXROb2RlID8gdGFyZ2V0Tm9kZS5pZCA6IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmdldFBhdGgoJ01PVkUnLCBzcmNJZCwgdGFyZ2V0SWQpLCB7c291cmNlOiBzcmNJZCwgdGFyZ2V0OiB0YXJnZXRJZH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8SU91dGVyTm9kZT4odGhpcy5nZXRQYXRoKCdVUERBVEUnLCBub2RlLmlkKSwgbm9kZSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ25vZGVJZCcsIG5vZGVJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxJT3V0ZXJOb2RlPih0aGlzLmdldFBhdGgoJ1JFTU9WRScsIG5vZGVJZCksIHtwYXJhbXN9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYXRoKHR5cGU6IHN0cmluZywgbm9kZUlkOiBzdHJpbmcsIGRlc3ROb2RlSWQ6IHN0cmluZyA9IG51bGwpIHtcbiAgICBpZiAoIXRoaXMuYXBpQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEFQSSBjb25maWd1cmF0aW9uIGZvciBUcmVlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsTWFwID0ge1xuICAgICAgJ0dFVCc6IHRoaXMuYXBpQ29uZmlnLmdldFVybCxcbiAgICAgICdDUkVBVEUnOiB0aGlzLmFwaUNvbmZpZy5hZGRVcmwsXG4gICAgICAnUkVNT1ZFJzogdGhpcy5hcGlDb25maWcucmVtb3ZlVXJsLFxuICAgICAgJ1VQREFURSc6IHRoaXMuYXBpQ29uZmlnLnVwZGF0ZVVybCxcbiAgICAgICdNT1ZFJzogdGhpcy5hcGlDb25maWcubW92ZVVybFxuICAgIH07XG5cbiAgICBsZXQgcGF0aCA9IHRoaXMucmVwbGFjZU5vZGVJZCh1cmxNYXBbdHlwZV0sIG5vZGVJZCk7XG5cbiAgICBpZiAoZGVzdE5vZGVJZCkge1xuICAgICAgcGF0aCA9IHRoaXMucmVwbGFjZURlc3ROb2RlSWQocGF0aCwgZGVzdE5vZGVJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVwbGFjZU5vZGVJZCh1cmw6IHN0cmluZywgbm9kZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLnJlcGxhY2UoJ3tub2RlSWR9Jywgbm9kZUlkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXBsYWNlRGVzdE5vZGVJZCh1cmw6IHN0cmluZywgbm9kZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLnJlcGxhY2UoJ3tkZXN0Tm9kZUlkfScsIG5vZGVJZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2V9IGZyb20gJy4vdHJlZU1vZGVsR2VuZXJhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtOb2RlRGlzcGF0Y2hlclNlcnZpY2V9IGZyb20gJy4vbm9kZXNEaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtJTm9kZVNlcnZpY2V9IGZyb20gJy4vbm9kZS5zZXJ2aWNlJztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuLi9tb2RlbHMvVHJlZU1vZGVsJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7SUNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvSUNvbmZpZ3VyYXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZUluaXRpYWxpemVyU2VydmljZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2U6IFRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIG5vZGVEaXNwYXRjaGVyU2VydmljZTogTm9kZURpc3BhdGNoZXJTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBpbml0KHRyZWVDb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgdHJlZUFwaTogSU5vZGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBsb2FkZWROb2Rlcz86IElPdXRlck5vZGVbXSk6IFRyZWVNb2RlbCB7XG4gICAgdGhpcy5ub2RlRGlzcGF0Y2hlclNlcnZpY2UucmVnaXN0ZXJTZXJ2aWNlKHRyZWVDb25maWd1cmF0aW9uLnRyZWVJZCwgdHJlZUFwaSk7XG5cbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlLmNyZWF0ZVRyZWVNb2RlbCh0cmVlQ29uZmlndXJhdGlvbiwgbG9hZGVkTm9kZXMpO1xuICB9XG59XG4iLCJpbXBvcnQge0NVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9pdGVtL2l0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VHJlZUNvbXBvbmVudH0gZnJvbSAnLi90cmVlLmNvbXBvbmVudCc7XG5pbXBvcnQge0RuZE1vZHVsZSwgRHJhZ2dhYmxlQ29tcG9uZW50fSBmcm9tICduZzItZG5kJztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0RyYWdnYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9kcmFnQW5kRHJvcC9kcmFnZ2FibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7RHJvcHBhYmxlRGlyZWN0aXZlfSBmcm9tICcuL2RyYWdBbmREcm9wL2Ryb3BwYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtEcm9wem9uZUNvbXBvbmVudH0gZnJvbSAnLi9kcmFnQW5kRHJvcC9kcm9wem9uZS9kcm9wem9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHtTdG9yZU1vZHVsZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtFZmZlY3RzTW9kdWxlfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7VHJlZUVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL3RyZWVFZmZlY3RzLnNlcnZpY2UnO1xuaW1wb3J0IHtOb2RlRGlzcGF0Y2hlclNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Q29udGV4dE1lbnVNb2R1bGV9IGZyb20gJ25neC1jb250ZXh0bWVudSc7XG5pbXBvcnQge3RyZWVSZWR1Y2VyfSBmcm9tICcuL3N0b3JlL3RyZWVSZWR1Y2VyJztcbmltcG9ydCB7VHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL3RyZWVNb2RlbEdlbmVyYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7UGFyZW50c0xpc3RDb21wb25lbnR9IGZyb20gJy4vcGFyZW50cy1saXN0L3BhcmVudHMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtOT0RFX1NFUlZJQ0UsIE5vZGVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2Uvbm9kZS5zZXJ2aWNlJztcbmltcG9ydCB7VHJlZUluaXRpYWxpemVyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL2luaXRpYWxpemVyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgTk9ERV9ESVNQQVRDSEVSX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPE5vZGVEaXNwYXRjaGVyU2VydmljZT4oJ05vZGVEaXNwYXRjaGVyU2VydmljZScpO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbnRleHRNZW51TW9kdWxlLFxuICAgIERuZE1vZHVsZSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1RyZWVFZmZlY3RzU2VydmljZV0pLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCd0cmVlcycsIHRyZWVSZWR1Y2VyKSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRyZWVDb21wb25lbnQsXG4gICAgSXRlbUNvbXBvbmVudCxcbiAgICBEcmFnZ2FibGVEaXJlY3RpdmUsXG4gICAgRHJvcHBhYmxlRGlyZWN0aXZlLFxuICAgIERyb3B6b25lQ29tcG9uZW50LFxuICAgIFBhcmVudHNMaXN0Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHJlZUNvbXBvbmVudCxcbiAgICBJdGVtQ29tcG9uZW50LFxuICAgIERyYWdnYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wcGFibGVEaXJlY3RpdmUsXG4gICAgRHJvcHpvbmVDb21wb25lbnQsXG4gICAgRHJhZ2dhYmxlQ29tcG9uZW50LFxuICAgIFBhcmVudHNMaXN0Q29tcG9uZW50LFxuICAgIFN0b3JlTW9kdWxlLFxuICAgIEVmZmVjdHNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBOT0RFX1NFUlZJQ0UsIHVzZUNsYXNzOiBOb2RlU2VydmljZSwgbXVsdGk6IHRydWV9XG4gIF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTW9kdWxlIHtcblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmVlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERyYWdBbmREcm9wLFxuICAgICAgICBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgIFRyZWVFZmZlY3RzU2VydmljZSxcbiAgICAgICAgVHJlZUluaXRpYWxpemVyU2VydmljZSxcbiAgICAgICAgVHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmb3JGZWF0dXJlKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHJlZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW10sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgIHRoaXMuc2V0VHJhbnNsYXRpb25Gb3JFTigpO1xuICAgIHRoaXMuc2V0VHJhbnNsYXRpb25Gb3JQTCgpO1xuICAgIHRoaXMudHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdlbicpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmFuc2xhdGlvbkZvclBMKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKCdwbCcsIHtcbiAgICAgIFJJX1RSRUVfTEJMX0FERF9OT0RFOiAnRG9kYWonLFxuICAgICAgUklfVFJFRV9MQkxfRURJVF9OT0RFOiAnRWR5dHVqJyxcbiAgICAgIFJJX1RSRUVfTEJMX1JFTU9WRV9OT0RFOiAnVXN1w4XChCcsXG4gICAgICBSSV9UUkVFX0xCTF9EUk9QX1pPTkU6ICdVcHXDhcKbw4TChyB0dXRhaidcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJhbnNsYXRpb25Gb3JFTigpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbignZW4nLCB7XG4gICAgICBSSV9UUkVFX0xCTF9BRERfTk9ERTogJ0FkZCBkYXRhJyxcbiAgICAgIFJJX1RSRUVfTEJMX0VESVRfTk9ERTogJ0VkaXQgZGF0YScsXG4gICAgICBSSV9UUkVFX0xCTF9SRU1PVkVfTk9ERTogJ0RlbGV0ZSBkYXRhJyxcbiAgICAgIFJJX1RSRUVfTEJMX0RST1BfWk9ORTogJ0Ryb3AgaGVyZSB0byBtb3ZlIGRhdGEgdG8gcm9vdCBsZXZlbCdcbiAgICB9KTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlRmVhdHVyZVNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwic3RvcmUiLCJGb3JtQ29udHJvbCIsImVtcHR5IiwiU3Vic2NyaXB0aW9uIiwic2VsZWN0IiwiZmlsdGVyIiwiQ29tcG9uZW50IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNvbnRleHRNZW51U2VydmljZSIsIkFjdGlvbnMiLCJTdG9yZSIsIkNoYW5nZURldGVjdG9yUmVmIiwiVmlld0NoaWxkIiwiSW5wdXQiLCJTdWJqZWN0IiwiQmVoYXZpb3JTdWJqZWN0Iiwid2l0aExhdGVzdEZyb20iLCJtYXAiLCJJbmplY3RhYmxlIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyIiwibWVyZ2UiLCJvZlR5cGUiLCJtZXJnZU1hcCIsImNhdGNoRXJyb3IiLCJvZiIsInN3aXRjaE1hcCIsInRha2UiLCJjb21iaW5lTGF0ZXN0IiwidHNsaWJfMS5fX2RlY29yYXRlIiwiRWZmZWN0IiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJ0c2xpYl8xLl9fc3ByZWFkIiwiSW5qZWN0aW9uVG9rZW4iLCJodHRwIiwiSHR0cFBhcmFtcyIsIkh0dHBDbGllbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNvbnRleHRNZW51TW9kdWxlIiwiRG5kTW9kdWxlIiwiRWZmZWN0c01vZHVsZSIsIkh0dHBDbGllbnRNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIlRyYW5zbGF0ZU1vZHVsZSIsIkRyYWdnYWJsZUNvbXBvbmVudCIsIkNVU1RPTV9FTEVNRU5UU19TQ0hFTUEiLCJUcmFuc2xhdGVTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUFLRSxnQkFBaUIsZ0JBQWdCO1FBQ2pDLHdCQUF5Qix3QkFBd0I7UUFDakQsc0JBQXVCLHNCQUFzQjtRQUM3QyxrQkFBbUIsa0JBQWtCO1FBQ3JDLDBCQUEyQiwwQkFBMEI7UUFDckQsd0JBQXlCLHdCQUF3QjtRQUNqRCxzQkFBdUIsc0JBQXNCO1FBQzdDLG9CQUFxQixvQkFBb0I7UUFDekMsa0JBQW1CLGtCQUFrQjtRQUNyQyxrQkFBbUIsa0JBQWtCO1FBQ3JDLFdBQVksV0FBVztRQUN2QixnQkFBaUIsZ0JBQWdCO1FBQ2pDLG1CQUFvQixtQkFBbUI7UUFDdkMsaUJBQWtCLGlCQUFpQjtRQUNuQywyQkFBNEIsMkJBQTJCO1FBQ3ZELGdCQUFpQixnQkFBZ0I7UUFDakMsd0JBQXlCLHdCQUF3QjtRQUNqRCxzQkFBdUIsc0JBQXNCO1FBQzdDLGVBQWdCLGVBQWU7UUFDL0Isa0JBQW1CLGtCQUFrQjtRQUNyQyxvQkFBcUIsb0JBQW9CO1FBQ3pDLHdCQUF5Qix3QkFBd0I7OztRQU1qRCxnQ0FBMEIsT0FBdUM7WUFBdkMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0M7WUFGeEQsU0FBSSxHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztTQUlsRDtRQUNILDZCQUFDO0lBQUQsQ0FBQyxJQUFBOztRQUtDLDhCQUEwQixPQUE2QztZQUE3QyxZQUFPLEdBQVAsT0FBTyxDQUFzQztZQUY5RCxTQUFJLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1NBSWhEO1FBQ0gsMkJBQUM7SUFBRCxDQUFDLElBQUE7O1FBS0MsbUNBQTBCLE9BQTZDO1lBQTdDLFlBQU8sR0FBUCxPQUFPLENBQXNDO1lBRjlELFNBQUksR0FBRyxlQUFlLENBQUMsc0JBQXNCLENBQUM7U0FJdEQ7UUFDSCxnQ0FBQztJQUFELENBQUMsSUFBQTs7UUFLQyxxQ0FBMEIsT0FBNkM7WUFBN0MsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7WUFGOUQsU0FBSSxHQUFHLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQztTQUl4RDtRQUNILGtDQUFDO0lBQUQsQ0FBQyxJQUFBOztRQUtDLGlDQUEwQixPQUE2QjtZQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtZQUY5QyxTQUFJLEdBQUcsZUFBZSxDQUFDLG9CQUFvQixDQUFDO1NBSXBEO1FBQ0gsOEJBQUM7SUFBRCxDQUFDLElBQUE7O1FBS0MsOEJBQTBCLE9BQXVDO1lBQXZDLFlBQU8sR0FBUCxPQUFPLENBQWdDO1lBRnhELFNBQUksR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7U0FJaEQ7UUFDSCwyQkFBQztJQUFELENBQUMsSUFBQTs7UUFLQyw4QkFBMEIsT0FBNkM7WUFBN0MsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7WUFGOUQsU0FBSSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUloRDtRQUNILDJCQUFDO0lBQUQsQ0FBQyxJQUFBOztRQUtDLDZCQUEwQixPQUF1QztZQUF2QyxZQUFPLEdBQVAsT0FBTyxDQUFnQztZQUZ4RCxTQUFJLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztTQUl6QztRQUNILDBCQUFDO0lBQUQsQ0FBQyxJQUFBOztRQUtDLGtDQUEwQixPQUF1QztZQUF2QyxZQUFPLEdBQVAsT0FBTyxDQUFnQztZQUZ4RCxTQUFJLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQztTQUkvQztRQUNILCtCQUFDO0lBQUQsQ0FBQyxJQUFBOztRQUtDLG9DQUEwQixPQUE0RDtZQUE1RCxZQUFPLEdBQVAsT0FBTyxDQUFxRDtZQUY3RSxTQUFJLEdBQUcsZUFBZSxDQUFDLGlCQUFpQixDQUFDO1NBSWpEO1FBQ0gsaUNBQUM7SUFBRCxDQUFDLElBQUE7O1FBS0MsNEJBQTBCLE9BQTBDO1lBQTFDLFlBQU8sR0FBUCxPQUFPLENBQW1DO1lBRjNELFNBQUksR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDO1NBSTlDO1FBQ0gseUJBQUM7SUFBRCxDQUFDLElBQUE7O1FBS0MscUNBQTBCLE9BQTJCO1lBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1lBRjVDLFNBQUksR0FBRyxlQUFlLENBQUMseUJBQXlCLENBQUM7U0FJekQ7UUFDSCxrQ0FBQztJQUFELENBQUMsSUFBQTs7UUFLQyw0QkFBMEIsT0FBd0Y7WUFBeEYsWUFBTyxHQUFQLE9BQU8sQ0FBaUY7WUFGekcsU0FBSSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUM7U0FJOUM7UUFDSCx5QkFBQztJQUFELENBQUMsSUFBQTs7UUFLQyxpQ0FBMEIsT0FBbUU7WUFBbkUsWUFBTyxHQUFQLE9BQU8sQ0FBNEQ7WUFGcEYsU0FBSSxHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztTQUlwRDtRQUNILDhCQUFDO0lBQUQsQ0FBQyxJQUFBOztRQUtDLG1DQUEwQixPQUFtRTtZQUFuRSxZQUFPLEdBQVAsT0FBTyxDQUE0RDtZQUZwRixTQUFJLEdBQUcsZUFBZSxDQUFDLHNCQUFzQixDQUFDO1NBSXREO1FBQ0gsZ0NBQUM7SUFBRCxDQUFDLElBQUE7O1FBS0MsNEJBQTBCLE9BQWlFO1lBQWpFLFlBQU8sR0FBUCxPQUFPLENBQTBEO1lBRmxGLFNBQUksR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO1NBSTdDO1FBQ0gseUJBQUM7SUFBRCxDQUFDLElBQUE7O1FBS0MsNEJBQTBCLE9BQTZDO1lBQTdDLFlBQU8sR0FBUCxPQUFPLENBQXNDO1lBRjlELFNBQUksR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDO1NBSTlDO1FBQ0gseUJBQUM7SUFBRCxDQUFDLElBQUE7O1FBS0MsaUNBQTBCLE9BQTZDO1lBQTdDLFlBQU8sR0FBUCxPQUFPLENBQXNDO1lBRjlELFNBQUksR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUM7U0FJcEQ7UUFDSCw4QkFBQztJQUFELENBQUMsSUFBQTs7UUFLQyxtQ0FBMEIsT0FBa0U7WUFBbEUsWUFBTyxHQUFQLE9BQU8sQ0FBMkQ7WUFGbkYsU0FBSSxHQUFHLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztTQUl0RDtRQUNILGdDQUFDO0lBQUQsQ0FBQyxJQUFBOztRQUtDLDhCQUEwQixPQUE2QztZQUE3QyxZQUFPLEdBQVAsT0FBTyxDQUFzQztZQUY5RCxTQUFJLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1NBSWhEO1FBQ0gsMkJBQUM7SUFBRCxDQUFDLElBQUE7O1FBS0MsK0JBQTBCLE9BQWdEO1lBQWhELFlBQU8sR0FBUCxPQUFPLENBQXlDO1lBRmpFLFNBQUksR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUM7U0FJbEQ7UUFDSCw0QkFBQztJQUFELENBQUMsSUFBQTs7UUFLQyxvQ0FBMEIsT0FBMEQ7WUFBMUQsWUFBTyxHQUFQLE9BQU8sQ0FBbUQ7WUFGM0UsU0FBSSxHQUFHLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztTQUl0RDtRQUNILGlDQUFDO0lBQUQsQ0FBQzs7SUMzTUQ7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsT0FBTyxDQUFDLENBQUM7U0FDWixDQUFBO1FBQ0QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUE7QUFFRCxhQVVnQixVQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNwRCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFDMUgsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7QUFFRCxhQUlnQixVQUFVLENBQUMsV0FBVyxFQUFFLGFBQWE7UUFDakQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25JLENBQUM7QUFFRCxhQW9EZ0IsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUk7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLEtBQUssRUFBRTtZQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUFFO2dCQUMvQjtZQUNKLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtvQkFDTztnQkFBRSxJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQUU7U0FDcEM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7QUFFRCxhQUFnQixRQUFRO1FBQ3BCLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztBQ3JIRCxRQUFhLFdBQVcsR0FBRyxnQkFBZ0I7O0FBRTNDLFFBQWEsYUFBYSxHQUFjO1FBQ3RDLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxFQUFFO1lBQ1osa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixRQUFRLEVBQUUsSUFBSTtZQUNkLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUNELGFBQWEsRUFBRTtZQUNiLGFBQWEsRUFBRSxLQUFLO1NBQ3JCO0tBQ0Y7Ozs7OztJQUVELFNBQVMsU0FBUyxDQUFDLEtBQWlCLEVBQUUsTUFBcUI7UUFBckIsdUJBQUE7WUFBQSxhQUFxQjs7O1lBQ25ELFFBQVEsZ0JBQU8sS0FBSyxDQUFDOztRQUczQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRztnQkFDakIsS0FBSyxFQUFFO29CQUNMLFFBQVEsZUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQkFDM0Msa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7b0JBQzFELFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVE7b0JBQ3RDLFNBQVMsV0FBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztvQkFDN0MsUUFBUSxXQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2lCQUM1QztnQkFDRCxhQUFhLGVBQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQzthQUNoRCxDQUFDO1NBQ0g7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFpQixFQUFFLE1BQW1DOztZQUNsRSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7WUFDbEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDOUIsU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7O1lBQzVCLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7O1lBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUU5QixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV6QyxJQUFJLFFBQVEsRUFBRTs7Z0JBQ04sUUFBTSxnQkFBTyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0RCxJQUFJLFFBQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ25CLFFBQU0sQ0FBQyxRQUFRLEdBQUcsUUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUM7YUFDbEU7WUFDRCxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFNLENBQUM7U0FDN0M7YUFBTTtZQUNMLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxHQUFBLENBQUMsQ0FBQztTQUN0RjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUdELFNBQVMsU0FBUyxDQUFDLEtBQWlCLEVBQUUsTUFBa0M7O1lBQ2hFLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztZQUNwRCxNQUFNLEdBQXNCLElBQUk7O1lBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07O1lBQzlCLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFFbEMsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUN0QztRQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQW9CO1lBQ2hELFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsUUFBUSxDQUFDLE9BQU8sWUFBTyxNQUFNLENBQUMsT0FBTyxFQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7YUFDdkI7WUFFRCxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBRXhELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNwRDtTQUNGLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUdELFNBQVMsVUFBVSxDQUFDLEtBQWlCLEVBQUUsTUFBNEI7O1lBQzNELE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07O1lBQzlCLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzs7WUFDbkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTs7UUFHaEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLFlBQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUUsTUFBTSxFQUFDLENBQUM7UUFFL0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBR0QsU0FBUyxZQUFZLENBQUMsS0FBaUIsRUFBRSxNQUE4Qjs7WUFDL0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDOUIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDOztZQUNuQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztRQUdoQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLEtBQUssTUFBTSxHQUFBLENBQUMsQ0FBQztRQUdoRyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFHRCxTQUFTLFVBQVUsQ0FBQyxLQUFpQixFQUFFLE1BQTRCOztZQUMzRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztZQUM5QixRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7O1lBQ25DLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVE7O1lBQ2xDLE9BQU8sR0FBZTtZQUMxQixFQUFFLEVBQUUsV0FBVztZQUNmLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1NBQ2xCO1FBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBRXZELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsWUFBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRSxXQUFXLEVBQUMsQ0FBQztTQUN2RjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELFNBQVMsUUFBUSxDQUFDLEtBQWlCLEVBQUUsTUFBaUM7O1lBQzlELFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztZQUNsRCxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPOztZQUM1QixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztZQUM3QixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztZQUM5QixTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBRWpELElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFCLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUI7O1lBRUssTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUFFO1FBQ3pCLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7O1lBRXRCLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUTs7WUFDM0IsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO1FBRTFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRXJCLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2lCQUN0QjtnQkFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFN0IsT0FBTyxDQUFDLE9BQU8sWUFBTyxNQUFNLENBQUMsT0FBTyxHQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQzthQUNsRDtTQUNGO2FBQU0sSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLEtBQUssV0FBVyxHQUFBLENBQUMsQ0FBQztZQUN2RyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFRCxTQUFTLFFBQVEsQ0FBQyxLQUFpQixFQUFFLE1BQWlDOztZQUM5RCxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7WUFDbEQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDL0IsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDL0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDOUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7O1lBQzNCLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVE7O1FBR2pELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUM7U0FDL0c7YUFBTTtZQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxHQUFBLENBQUMsQ0FBQztTQUN2Rjs7UUFHRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7O2dCQUNkLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUU3QyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNyQztZQUVELE9BQU8sQ0FBQyxPQUFPLFlBQU8sU0FBUyxDQUFDLE9BQU8sR0FBRSxTQUFTLENBQUMsRUFBRSxFQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDdEI7O1FBR0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0JBQU8sT0FBTyxDQUFDLENBQUM7UUFFckMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxZQUFZLENBQUMsS0FBaUIsRUFBRSxNQUEwQjs7WUFDM0QsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUc7WUFDaEMsS0FBSyxFQUFFO2dCQUNMLFFBQVEsZUFBTSxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDM0Msa0JBQWtCLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7Z0JBQzFELFFBQVEsRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQ3RDLFNBQVMsV0FBTSxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztnQkFDN0MsUUFBUSxXQUFNLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQzVDO1lBQ0QsYUFBYSxlQUFNLGFBQWEsQ0FBQyxhQUFhLENBQUM7U0FDaEQsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUdELFNBQVMsV0FBVyxDQUFDLEtBQWlCLEVBQUUsTUFBNkI7O1lBQzdELFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztZQUNsRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztZQUM5QixLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLOztZQUM1QixRQUFRLEdBQWUsRUFBRTs7WUFDekIsR0FBRyxHQUFhLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFvQixJQUFLLE9BQUEsUUFBUSxDQUFDLEVBQUUsR0FBQSxDQUFDO1FBRXRFLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFvQjtZQUNqQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN6QixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUVqQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO2dCQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBQSxDQUFDLENBQUM7UUFFOUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRTNDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUFpQixFQUFFLE1BQWMsRUFBRSxPQUFzQjtRQUF0Qix3QkFBQTtZQUFBLFlBQXNCOzs7WUFDeEUsSUFBSSxHQUFlLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFdEMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsT0FBTyxZQUFPLE9BQU8sQ0FBQyxDQUFDO1lBRTVCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztvQkFDdEIsWUFBVSxZQUFPLE9BQU8sRUFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFVLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDN0U7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVELFNBQVMscUJBQXFCLENBQUMsS0FBaUIsRUFBRSxNQUFtQzs7WUFDN0UsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDOUIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBRXpDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLGdCQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLEVBQUssRUFBQyxhQUFhLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUUvRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFRCxTQUFTLGdCQUFnQixDQUFDLEtBQWlCLEVBQUUsTUFBa0M7O1lBQ3ZFLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07O1lBQzlCLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztRQUV6QyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxnQkFBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdEcsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxVQUFVLENBQUMsS0FBaUIsRUFBRSxNQUE0Qjs7WUFDM0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7WUFDOUIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7WUFDMUIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBRXpDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDNUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXhELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztBQUVELGFBQWdCLFdBQVcsQ0FBQyxLQUFzQixFQUFFLE1BQWtCO1FBQTFDLHNCQUFBO1lBQUEsVUFBc0I7O1FBQ2hELFFBQVEsTUFBTSxDQUFDLElBQUk7WUFDakIsS0FBSyxlQUFlLENBQUMsYUFBYTtnQkFDaEMsT0FBTyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssZUFBZSxDQUFDLHNCQUFzQjtnQkFDekMsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLEtBQUssZUFBZSxDQUFDLHdCQUF3QjtnQkFDM0MsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssZUFBZSxDQUFDLGdCQUFnQjtnQkFDbkMsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssZUFBZSxDQUFDLGlCQUFpQjtnQkFDcEMsT0FBTyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLEtBQUssZUFBZSxDQUFDLHNCQUFzQjtnQkFDekMsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLEtBQUssZUFBZSxDQUFDLGtCQUFrQjtnQkFDckMsT0FBTyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssZUFBZSxDQUFDLHlCQUF5QjtnQkFDNUMsT0FBTyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsS0FBSyxlQUFlLENBQUMsc0JBQXNCO2dCQUN6QyxPQUFPLGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6QyxLQUFLLGVBQWUsQ0FBQyxnQkFBZ0I7Z0JBQ25DLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLGVBQWUsQ0FBQyxrQkFBa0I7Z0JBQ3JDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGVBQWUsQ0FBQyxnQkFBZ0I7Z0JBQ25DLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0QyxLQUFLLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztZQUMxQyxLQUFLLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDL0IsS0FBSyxlQUFlLENBQUMsY0FBYyxDQUFDO1lBQ3BDLEtBQUssZUFBZSxDQUFDLGNBQWM7Z0JBQ2pDLE9BQU8sS0FBSyxDQUFDO1lBQ2Y7Z0JBQ0UsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFFSCxDQUFDOztBQUVELFFBQWEsaUJBQWlCLEdBQXlDQSwyQkFBcUIsQ0FBYSxPQUFPLENBQUM7Ozs7O0FBRWpILGFBQWdCLFlBQVksQ0FBQyxNQUFjO1FBQ3pDLE9BQU9DLG9CQUFjLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxLQUFpQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBQSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7QUFFRCxhQUFnQix5QkFBeUIsQ0FBQyxNQUFjO1FBQ3RELE9BQU9BLG9CQUFjLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxLQUFpQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsSUFBSSxJQUFJLEdBQUEsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7O0FBRUQsYUFBZ0IscUJBQXFCLENBQUMsTUFBYztRQUNsRCxPQUFPQSxvQkFBYyxDQUFDLGlCQUFpQixFQUFFLFVBQUMsS0FBaUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQUM7SUFDdEcsQ0FBQzs7Ozs7QUFFRCxhQUFnQixvQkFBb0IsQ0FBQyxNQUFjO1FBQ2pELE9BQU9BLG9CQUFjLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxLQUFpQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxHQUFBLENBQUMsQ0FBQztJQUN4RyxDQUFDOzs7OztBQUVELGFBQWdCLDhCQUE4QixDQUFDLE1BQWM7UUFDM0QsT0FBT0Esb0JBQWMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEtBQWlCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixJQUFJLElBQUksR0FBQSxDQUFDLENBQUM7SUFDbEgsQ0FBQzs7Ozs7O0FDelhEOzs7QUFrQ0EsYUFBZ0IsTUFBTTtRQUNwQixPQUFPQyxrQkFBTyxDQUFDLFFBQVEsRUFBRTtZQUN2QkMsZ0JBQUssQ0FBQyxHQUFHLEVBQUVDLGdCQUFLLENBQUMsRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUMzQ0QsZ0JBQUssQ0FBQyxNQUFNLEVBQUVDLGdCQUFLLENBQUMsRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUM5Q0MscUJBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RCRCxnQkFBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2dCQUNwQkUsa0JBQU8sQ0FBQyxHQUFHLEVBQUVGLGdCQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUNqQyxDQUFDO1lBQ0ZDLHFCQUFVLENBQUMsV0FBVyxFQUFFO2dCQUN0QkQsZ0JBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztnQkFDcEJFLGtCQUFPLENBQUMsR0FBRyxFQUFFRixnQkFBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7YUFDbkMsQ0FBQztTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7QUFFRDtRQXVERSx1QkFBNkIsa0JBQXNDLEVBQ3RDLFFBQWlCLEVBQ2pCRyxRQUF3QixFQUN4QixHQUFzQjtZQUh0Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1lBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVM7WUFDakIsVUFBSyxHQUFMQSxRQUFLLENBQW1CO1lBQ3hCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1lBdkI1QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1lBR25CLGVBQVUsR0FBRyxLQUFLLENBQUM7Ozs7WUFLbkIsY0FBUyxHQUFHLElBQUlDLGlCQUFXLEVBQUUsQ0FBQztZQUU5QixlQUFVLEdBQUcsS0FBSyxDQUFDO1lBRW5CLGNBQVMsR0FBNkJDLFVBQUssRUFBRSxDQUFDO1lBRTNDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1lBRXBCLGlCQUFZLEdBQUcsSUFBSUMsaUJBQVksRUFBRSxDQUFDO1NBUTNDO1FBMUNELHNCQUNXLCtCQUFJOzs7Z0JBTWY7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25COzs7Ozs7OztnQkFURCxVQUNnQixJQUFnQjtnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBRWxCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQzs7O1dBQUE7Ozs7O1FBdUNNLG1DQUFXOzs7O1lBQWxCLFVBQW1CLE1BQU07Ozs7b0JBR2pCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSTtnQkFFeEIsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO29CQUMvRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDckM7YUFDRjs7OztRQUVNLG1DQUFXOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNqQzs7OztRQUVNLGdDQUFROzs7WUFBZjtnQkFBQSxpQkFhQztnQkFaQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFcEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBRTFCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsS0FBSztxQkFDUCxJQUFJLENBQ0hDLFlBQU0sQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQ3hEQyxnQkFBTSxDQUFDLFVBQUMsa0JBQTBCLElBQUssT0FBQSxrQkFBa0IsS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQzVFO3FCQUNBLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBQSxDQUFDLENBQzVDLENBQUM7YUFDSDs7Ozs7Ozs7UUFLTSxnQ0FBUTs7OztZQUFmO2dCQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUM7b0JBQzdDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07b0JBQzdCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7aUJBQ2pCLENBQUMsQ0FBQyxDQUFDO2FBQ0w7Ozs7Ozs7O1FBS00sOEJBQU07Ozs7WUFBYjtnQkFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNsRzs7OztRQUVNLDhCQUFNOzs7WUFBYjtnQkFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0Y7Ozs7O1FBRU0sZ0NBQVE7Ozs7WUFBZixVQUFnQixLQUFvQjtnQkFDbEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUV4QixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO29CQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOzt3QkFDbEIsSUFBSSxHQUFlO3dCQUN2QixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO3dCQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO3dCQUMxQixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO3dCQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO3dCQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUMxQixVQUFVLEVBQUUsS0FBSztxQkFDbEI7b0JBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQzt3QkFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDN0IsSUFBSSxNQUFBO3FCQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2lCQUN6QjthQUNGOzs7OztRQUVNLHFDQUFhOzs7O1lBQXBCLFVBQXFCLE1BQWtCO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUU7b0JBQ3BELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNoQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7d0JBQzdCLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDaEIsQ0FBQyxDQUFDO2lCQUNKO2dCQUVELE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzFCOzs7O1FBRU0sZ0NBQVE7OztZQUFmO2dCQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQzt3QkFDM0MsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDN0IsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxDQUFDLENBQUM7aUJBQ0w7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQzt3QkFDM0MsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3FCQUNoQixDQUFDLENBQUMsQ0FBQztpQkFDTDthQUNGOzs7OztRQUVNLGlDQUFTOzs7O1lBQWhCLFVBQWlCLElBQWdCO2dCQUMvQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDaEI7Ozs7O1FBRVMsbUNBQVc7Ozs7WUFBckI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEOzs7Ozs7UUFFUyw0Q0FBb0I7Ozs7O1lBQTlCLFVBQStCLElBQWdCO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FBQztnQkFFMUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjthQUNGOzs7OztRQUVTLGlDQUFTOzs7O1lBQW5CO2dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDO2FBQ3JDOzs7OztRQUVTLGdDQUFROzs7O1lBQWxCO2dCQUFBLGlCQUVDO2dCQURDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RDs7Ozs7UUFFUywwQ0FBa0I7Ozs7WUFBNUI7Z0JBQUEsaUJBY0M7Z0JBYkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxRQUFRO3FCQUNWLE1BQU0sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUM7cUJBQzVDLElBQUksQ0FDSEEsZ0JBQU0sQ0FBQyxVQUFDLE1BQStCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsSUFBSSxHQUFBLENBQUMsQ0FDL0U7cUJBQ0EsU0FBUyxDQUFDLFVBQUMsTUFBK0I7b0JBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pCLENBQUMsQ0FDTCxDQUFDO2FBQ0g7Ozs7O1FBRVMsbUNBQVc7Ozs7WUFBckI7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBRXhCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO29CQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDO3dCQUMzQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNO3dCQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7cUJBQ2hCLENBQUMsQ0FBQyxDQUFDO2lCQUNMO2FBQ0Y7O29CQTdORkMsY0FBUyxTQUFDO3dCQUNULGFBQWEsRUFBRUMsc0JBQWlCLENBQUMsSUFBSTt3QkFDckMsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLHcwQ0FBb0M7d0JBRXBDLGVBQWUsRUFBRUMsNEJBQXVCLENBQUMsTUFBTTt3QkFDL0MsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7O3FCQUN2Qjs7Ozs7d0JBNUM2QkMsaUNBQWtCO3dCQVl4Q0MsZUFBTzt3QkFHQ0MsV0FBSzt3QkF6Qm5CQyxzQkFBaUI7Ozs7NEJBMkRoQkMsY0FBUyxTQUFDLGNBQWM7MkJBS3hCQyxVQUFLO2dDQVdMQSxVQUFLO2tDQUdMQSxVQUFLO2lDQUdMQSxVQUFLO2lDQUdMQSxVQUFLOztRQXlMUixvQkFBQztLQTlORDs7Ozs7OztRQ25DRTtZQUxVLGdCQUFXLEdBQWlDLElBQUlDLFlBQU8sRUFBRSxDQUFDO1lBQzFELGdCQUFXLEdBQXlDLElBQUlDLG9CQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFLdEYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVztpQkFDMUIsSUFBSSxDQUNIQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDaENDLGFBQUcsQ0FBQyxVQUFDLEVBQWtEO29CQUFsRCxrQkFBa0QsRUFBakQsZ0JBQVEsRUFBRSxnQkFBUTtnQkFDdEIsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO2FBQ3RFLENBQUMsQ0FDSCxDQUFDO1NBQ0w7Ozs7O1FBRU0sK0JBQVM7Ozs7WUFBaEIsVUFBaUIsV0FBeUI7Z0JBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BDOzs7OztRQUVNLDZCQUFPOzs7O1lBQWQsVUFBZSxXQUFnQztnQkFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEM7Ozs7UUFFTSxtQ0FBYTs7O1lBQXBCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN6Qjs7OztRQUVNLHdDQUFrQjs7O1lBQXpCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQztRQS9CYSwwQkFBYyxHQUFHLFdBQVcsQ0FBQzs7b0JBRjVDQyxlQUFVOzs7O1FBa0NYLGtCQUFDO0tBbENEOzs7Ozs7QUNMQTtRQXdERSx1QkFBNkJuQixRQUF3QixFQUN4QixXQUF3QjtZQUR4QixVQUFLLEdBQUxBLFFBQUssQ0FBbUI7WUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Ozs7WUF6QjdDLG1CQUFjLEdBQW1CO2dCQUN2QztvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxJQUFJLEVBQUUsdUJBQXVCO29CQUM3QixPQUFPLEVBQUUsWUFBWTtpQkFDdEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLElBQUksRUFBRSx5QkFBeUI7b0JBQy9CLE9BQU8sRUFBRSxhQUFhO2lCQUN2QjthQUNGLENBQUM7Ozs7WUFLSyxhQUFRLEdBQW1CLEVBQUUsQ0FBQztZQU0zQixpQkFBWSxHQUFHLElBQUlHLGlCQUFZLEVBQUUsQ0FBQztTQUszQzs7OztRQUVNLG1DQUFXOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNqQzs7OztRQUVNLGdDQUFROzs7WUFBZjtnQkFBQSxpQkFTQztnQkFSQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBRXBCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7Z0JBRTVDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQjtxQkFDaEMsU0FBUyxDQUFDLFVBQUMsSUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUEsQ0FBQyxDQUNwRSxDQUFDO2FBQ0g7Ozs7O1FBRU0sbUNBQVc7Ozs7WUFBbEIsVUFBbUIsSUFBUztnQkFBNUIsaUJBR0M7Z0JBRkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ2pFOzs7O1FBRU0sNkJBQUs7OztZQUFaOztvQkFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEdBQUcsSUFBSTtnQkFFOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLFVBQUEsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUMxRjs7Ozs7Ozs7Ozs7Ozs7UUFRTSwwQ0FBa0I7Ozs7Ozs7WUFBekIsVUFBMEIsSUFBWSxFQUFFLElBQWdCO2dCQUV0RCxRQUFRLElBQUk7b0JBQ1YsS0FBSyxRQUFRO3dCQUNYLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxNQUFNO29CQUNSLEtBQUssVUFBVTt3QkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRixNQUFNO29CQUNSO3dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ3hEO2FBQ0Y7Ozs7O1FBRU0saUNBQVM7Ozs7WUFBaEIsVUFBaUIsSUFBZ0I7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNoQjs7Ozs7Ozs7O1FBS1Msb0NBQVk7Ozs7O1lBQXRCO2dCQUFBLGlCQWlDQztnQkFoQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDakQsT0FBTztpQkFDUjtnQkFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7cUJBQ25CLElBQUksQ0FDSEUsZ0JBQU0sQ0FBQyxVQUFDLElBQWtCO29CQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLGNBQWMsRUFBRTt3QkFDNUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOzRCQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzt5QkFDNUQ7NkJBQU07NEJBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7eUJBQzVEO3FCQUNGO3lCQUFNO3dCQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDcEcsT0FBTyxLQUFLLENBQUM7eUJBQ2Q7d0JBRUQsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0YsQ0FBQyxDQUNIO3FCQUNBLFNBQVMsQ0FBQyxVQUFDLElBQWtCOzt3QkFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSTtvQkFDMUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQzt3QkFDdkMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQzlCLE1BQU0sRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07d0JBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7d0JBQzNCLElBQUksRUFBRSxRQUFRO3FCQUNmLENBQ0YsQ0FBQyxDQUFDO2lCQUNKLENBQUMsQ0FBQzthQUNOOztvQkFsSUZDLGNBQVMsU0FBQzt3QkFDVCxhQUFhLEVBQUVDLHNCQUFpQixDQUFDLElBQUk7d0JBQ3JDLFFBQVEsRUFBRSxTQUFTO3dCQUNuQix3ckNBQW9DOztxQkFFckM7Ozs7O3dCQWhCT0ksV0FBSzt3QkFGTCxXQUFXOzs7O2dDQW9CaEJHLFVBQUs7a0NBRUxELGNBQVMsU0FBQyxhQUFhOztRQTBIMUIsb0JBQUM7S0FuSUQ7Ozs7OztBQ2xCQTtRQWFFLDRCQUE2QixFQUFjLEVBQ2hCLFFBQWtCLEVBQ2hCLFdBQXdCO1lBRnJELGlCQWFDO1lBYjRCLE9BQUUsR0FBRixFQUFFLENBQVk7WUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtZQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQVA1QyxhQUFRLEdBQWtCLElBQUksQ0FBQztZQUMvQixlQUFVLEdBQVcsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUVsRCxnQkFBVyxHQUFHLElBQUksQ0FBQztZQUt4QixRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQUMsTUFBTTtnQkFDcEQsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMxQjthQUNGLENBQUMsQ0FBQztZQUVILFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUU7O2dCQUUzQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUM7U0FDSjs7Ozs7O1FBRU8sd0NBQVc7Ozs7O1lBQW5CLFVBQW9CLE1BQWlCO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztnQkFFNUYsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUMzQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDekM7Ozs7UUFFTSxxQ0FBUTs7O1lBQWY7Z0JBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBRW5ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztpQkFDbEQ7YUFDRjs7b0JBdENGTyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7cUJBQzFCOzs7Ozt3QkFMa0JDLGVBQVU7d0JBQWlCQyxhQUFRO3dCQUM5QyxXQUFXOzs7OzJCQU1oQlIsVUFBSzsrQkFDTEEsVUFBSztpQ0FDTEEsVUFBSzs7UUFpQ1IseUJBQUM7S0F2Q0Q7Ozs7OztBQ0hBO1FBaUJFLDRCQUE2QixFQUFjLEVBQVUsUUFBa0IsRUFBWSxXQUF3QjtZQUEzRyxpQkFxQkM7WUFyQjRCLE9BQUUsR0FBRixFQUFFLENBQVk7WUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1lBQVksZ0JBQVcsR0FBWCxXQUFXLENBQWE7WUFGbEcsZUFBVSxHQUFlLEVBQUUsQ0FBQztZQXlDN0Isa0JBQWEsR0FBRzs7b0JBQ2hCLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFOztvQkFDdkQsTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJOztvQkFDN0IsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJOztvQkFDbEIsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFFekMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3RGLE9BQU8sS0FBSyxDQUFDO2lCQUNkOztnQkFHRCxPQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEcsQ0FBQztZQWxEQSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQUMsTUFBTTtnQkFDbkQsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOztvQkFDbEIsV0FBVyxHQUFHLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBRXhDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFDLE1BQU07Z0JBQ3BELE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QixDQUFDLENBQUM7WUFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFO2dCQUN4QyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU1QixJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtvQkFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO2lCQUM5RTthQUNGLENBQUMsQ0FBQztTQUNKOzs7O1FBRU0scUNBQVE7OztZQUFmO2dCQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2lCQUNsRDthQUNGOzs7Ozs7Ozs7OztRQU1PLDRDQUFlOzs7Ozs7WUFBdkIsVUFBd0IsV0FBbUI7Z0JBQW5CLDRCQUFBO29CQUFBLG1CQUFtQjs7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDeEc7Ozs7Ozs7Ozs7Ozs7UUFxQk8sK0NBQWtCOzs7Ozs7O1lBQTFCLFVBQTJCLE1BQWlCLEVBQUUsR0FBVztnQkFBWCxvQkFBQTtvQkFBQSxXQUFXOzs7b0JBQ2pELFVBQVUsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU07Z0JBRXhDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztnQkFDL0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQzdDOzs7Ozs7Ozs7UUFLTyx1Q0FBVTs7Ozs7WUFBbEI7O29CQUNRLGFBQWEsR0FBZTtvQkFDaEMsbUJBQW1CLEVBQUUsY0FBYztpQkFDcEM7Z0JBRUQsS0FBSyxJQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUU7b0JBQy9CLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDbkU7aUJBQ0Y7YUFDRjs7b0JBckZGTSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7cUJBQzFCOzs7Ozt3QkFaa0JDLGVBQVU7d0JBQWlCQyxhQUFRO3dCQUM5QyxXQUFXOzs7OzJCQWFoQlIsVUFBSztpQ0FDTEEsVUFBSzs7UUFpRlIseUJBQUM7S0F0RkQ7Ozs7OztBQ1ZBO1FBa0JFLDJCQUFtQixXQUF3QjtZQUEzQyxpQkE4QkM7WUE5QmtCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBSmxDLGFBQVEsR0FBYSxFQUFFLENBQUM7O2dCQU16QixZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7aUJBQ2xELElBQUksQ0FDSEksYUFBRyxDQUFDLFVBQUMsV0FBeUI7O29CQUN0QixhQUFhLEdBQUcsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBRXpELElBQUksYUFBYSxFQUFFO29CQUNqQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLGNBQWMsRUFBRTs7NEJBQzdDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUTs7NEJBQzVDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFFM0UsT0FBTyxDQUFDLGdCQUFnQixJQUFJLGlCQUFpQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7cUJBQy9EO3lCQUFNO3dCQUNMLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGO2dCQUVELE9BQU8sS0FBSyxDQUFDO2FBQ2QsQ0FBQyxDQUNIOztnQkFFRyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2lCQUN0QyxJQUFJLENBQ0hBLGFBQUcsQ0FBQyxVQUFDLElBQWtCO2dCQUNyQixPQUFPLEtBQUssQ0FBQzthQUNkLENBQUMsQ0FDSDtZQUVILElBQUksQ0FBQyxPQUFPLEdBQUdLLFVBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDaEQ7Ozs7UUFFTSxrQ0FBTTs7O1lBQWI7Z0JBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7Ozs7O1FBRU0sc0NBQVU7Ozs7WUFBakIsVUFBa0IsTUFBTTtnQkFDdEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3pCOztvQkFqREZqQixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLHlLQUF3Qzs7cUJBRXpDOzs7Ozt3QkFUTyxXQUFXOzs7O2dDQVdoQlEsVUFBSzsrQkFDTEEsVUFBSzs7UUEyQ1Isd0JBQUM7S0FsREQ7Ozs7OztBQ1BBO1FBR0E7WUFFVSxpQkFBWSxHQUFvQyxFQUFFLENBQUM7U0FjNUQ7Ozs7OztRQVpRLCtDQUFlOzs7OztZQUF0QixVQUF1QixJQUFZLEVBQUUsV0FBeUI7Z0JBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO2FBQ3ZDOzs7OztRQUVNLG1DQUFHOzs7O1lBQVYsVUFBVyxJQUFZO2dCQUNyQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ3BDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEM7cUJBQU07O29CQUVMLE1BQU0sS0FBSyxDQUFDLCtCQUE2QixJQUFNLENBQUMsQ0FBQztpQkFDbEQ7YUFDRjs7b0JBZkZLLGVBQVU7O1FBZ0JYLDRCQUFDO0tBaEJEOzs7Ozs7O1FDaU9FLDRCQUFvQixRQUFpQixFQUNqQixxQkFBNEMsRUFDNUNuQixRQUF3QjtZQUY1QyxpQkFHQztZQUhtQixhQUFRLEdBQVIsUUFBUSxDQUFTO1lBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7WUFDNUMsVUFBSyxHQUFMQSxRQUFLLENBQW1CO1lBbk1yQyxjQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVE7aUJBQzdCLElBQUksQ0FDSHdCLGNBQU0sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEVBQ3JDTixhQUFHLENBQUMsVUFBQyxNQUEwQjtnQkFDN0IsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDekIsT0FBTyxJQUFJLHFCQUFxQixDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7aUJBQ2hHO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztpQkFDM0U7YUFDRixDQUFDLENBQ0gsQ0FBQztZQUdHLFVBQUssR0FBRyxJQUFJLENBQUMsUUFBUTtpQkFDekIsSUFBSSxDQUNITSxjQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUNqQ0Msa0JBQVEsQ0FBQyxVQUFDLE1BQTJCO2dCQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztxQkFDL0YsSUFBSSxDQUNIUCxhQUFHLENBQUMsVUFBQyxTQUF1QjtvQkFBaUMsT0FBQSxJQUFJLDBCQUEwQixDQUFDO3dCQUMxRixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO3dCQUM3QixFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNyQixLQUFLLEVBQUUsU0FBUztxQkFDakIsQ0FBQztpQkFBQSxDQUFDLEVBQ0hRLG9CQUFVLENBQUM7b0JBQU0sT0FBQUMsT0FBRSxDQUFDLElBQUksd0JBQXdCLENBQUM7d0JBQy9DLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07d0JBQzdCLEVBQUUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7cUJBQ3RCLENBQUMsQ0FBQztpQkFBQSxDQUFDLENBQ0w7YUFBQSxDQUNGLENBQ0YsQ0FBQztZQUlHLFlBQU8sR0FBRyxJQUFJLENBQUMsUUFBUTtpQkFDM0IsSUFBSSxDQUNISCxjQUFNLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEVBQ3hDSSxtQkFBUyxDQUFDLFVBQUMsTUFBNEI7Z0JBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3FCQUNwRyxJQUFJLENBQ0hWLGFBQUcsQ0FBQyxjQUFtQyxPQUFBLElBQUksMkJBQTJCLGNBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFBLENBQUMsRUFDNUZRLG9CQUFVLENBQUMsY0FBNkMsT0FBQUMsT0FBRSxDQUFDLElBQUkseUJBQXlCLGNBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUNoSDthQUFBLENBQ0YsQ0FDRixDQUFDO1lBSUcsVUFBSyxHQUFHLElBQUksQ0FBQyxRQUFRO2lCQUN6QixJQUFJLENBQ0hILGNBQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQ3RDSSxtQkFBUyxDQUFDLFVBQUMsTUFBMEI7Z0JBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxlQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO3FCQUNyRyxJQUFJLENBQ0hWLGFBQUcsQ0FBQyxVQUFDLElBQWdCO29CQUFnQyxPQUFBLElBQUkseUJBQXlCLENBQUM7d0JBQ2pGLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07d0JBQzdCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7d0JBQzVCLElBQUksTUFBQTtxQkFDTCxDQUFDO2lCQUFBLENBQUMsRUFDSFEsb0JBQVUsQ0FBQyxjQUFNLE9BQUFDLE9BQUUsQ0FBQyxJQUFJLHVCQUF1QixjQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDdkU7YUFBQSxDQUNGLENBQ0YsQ0FBQztZQUdHLFVBQUssR0FBRyxJQUFJLENBQUMsUUFBUTtpQkFDekIsSUFBSSxDQUNISCxjQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUN0Q25CLGdCQUFNLENBQUMsVUFBQyxNQUEwQjtnQkFDaEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixLQUFLLFdBQVcsQ0FBQyxjQUFjLENBQUM7YUFDMUUsQ0FBQyxFQUNGdUIsbUJBQVMsQ0FBQyxVQUFDLE1BQTBCOztvQkFDM0IsTUFBTSxtQ0FBbUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUM7O29CQUNoRCxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUk7Z0JBRTdFLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO3FCQUN4RCxJQUFJLENBQ0hWLGFBQUcsQ0FBQyxVQUFDLElBQWdCO29CQUNuQixPQUFPO3dCQUNMLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07d0JBQzdCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87d0JBQy9CLElBQUksRUFBRSxJQUFJO3FCQUNYLENBQUM7aUJBQ0gsQ0FBQyxFQUNGVSxtQkFBUyxDQUFDLFVBQUMsSUFBd0I7b0JBQ2pDLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDdkUsSUFBSSxDQUNIQyxjQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1BYLGFBQUcsQ0FBQyxVQUFDLGFBQWlDO3dCQUNwQyxPQUFPOzRCQUNMLGFBQWEsZUFBQTs0QkFDYixJQUFJLE1BQUE7eUJBQ0wsQ0FBQztxQkFDSCxDQUFDLENBQ0gsQ0FBQztpQkFDTCxDQUFDLEVBQ0ZRLG9CQUFVLENBQUM7O3dCQUNILFNBQVMsR0FBRyxJQUFJLHVCQUF1QixDQUFDO3dCQUM1QyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO3dCQUM3QixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO3dCQUM5QixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO3FCQUM1QixDQUFDO29CQUVGLE9BQU9DLE9BQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDdEIsQ0FBQyxDQUNILENBQUM7YUFDTCxDQUNGLEVBQ0RGLGtCQUFRLENBQUMsVUFBQyxLQUFzRTs7b0JBQ3hFLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTs7b0JBQ2pCLE9BQU8sR0FBaUI7b0JBQzVCLElBQUkseUJBQXlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDO2lCQUM5RjtnQkFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7b0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEY7Z0JBRUQsT0FBTyxPQUFPLENBQUM7YUFDaEIsQ0FBQyxDQUNILENBQUM7WUFHRyxZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVE7aUJBQzNCLElBQUksQ0FDSEQsY0FBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN4Q0ksbUJBQVMsQ0FBQyxVQUFDLE1BQTRCO2dCQUNyQyxPQUFBLEtBQUksQ0FBQyxLQUFLO3FCQUNQLElBQUksQ0FDSHhCLFlBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMzQ3lCLGNBQUksQ0FBQyxDQUFDLENBQUMsRUFDUHhCLGdCQUFNLENBQUMsVUFBQyxTQUFvQixJQUFLLE9BQUEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBQSxDQUFDLEVBQ3hFYSxhQUFHLENBQUM7b0JBQ0YsT0FBTyxJQUFJLG1CQUFtQixDQUFDO3dCQUMzQixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO3dCQUM3QixFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO3FCQUN0QixDQUNGLENBQUM7aUJBQ0gsQ0FBQyxDQUNIO2FBQUEsQ0FDSixDQUNGLENBQUM7WUFHRyxZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVE7aUJBQzNCLElBQUksQ0FDSE0sY0FBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN4Q25CLGdCQUFNLENBQUMsVUFBQyxNQUE0QixJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFBLENBQUMsRUFDbkVhLGFBQUcsQ0FBQyxVQUFDLE1BQTRCO2dCQUMvQixPQUFPLElBQUksb0JBQW9CLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQzthQUMvRixDQUFDLENBQ0gsQ0FBQztZQUdHLHNDQUFpQyxHQUFHLElBQUksQ0FBQyxRQUFRO2lCQUNyRCxJQUFJLENBQ0hNLGNBQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQ3RDSSxtQkFBUyxDQUFDLFVBQUMsTUFBMEI7Z0JBQ25DLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDdkUsSUFBSSxDQUNIQyxjQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1BYLGFBQUcsQ0FBQyxVQUFDLGFBQWlDO29CQUNwQyxPQUFPLEVBQUMsTUFBTSxRQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUMsQ0FBQztpQkFDaEMsQ0FBQyxDQUNILENBQUM7YUFDTCxDQUFDLEVBQ0ZBLGFBQUcsQ0FBQyxVQUFDLEtBQXdFO2dCQUNsRSxJQUFBLHFCQUFNLEVBQUUsbUNBQWE7Z0JBRTVCLElBQUksYUFBYSxDQUFDLGFBQWEsRUFBRTtvQkFDL0IsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFVLElBQUssT0FBQSxJQUFJLG9CQUFvQixDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBQSxFQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7aUJBQzlHO3FCQUFNOzt3QkFDQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBQSxDQUFDO29CQUNyRyxPQUFPWSxrQkFBYSxDQUFDLFdBQVcsQ0FBQzt5QkFDOUIsSUFBSSxDQUNIRCxjQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1BKLGtCQUFRLENBQUMsVUFBQyxJQUFvQjs7NEJBQ3RCLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBbUIsRUFBRSxLQUFLOzRCQUFLLE9BQUEsSUFBSSwwQkFBMEIsQ0FBQztnQ0FDMUYsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTtnQ0FDN0IsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQ0FDN0IsS0FBSyxPQUFBOzZCQUNOLENBQUM7eUJBQUEsQ0FBQzs7NEJBQ0csV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVU7NEJBQUssT0FBQSxJQUFJLG9CQUFvQixDQUFDO2dDQUNsRixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO2dDQUM3QixFQUFFLElBQUE7NkJBQ0gsQ0FBQzt5QkFBQSxDQUFDO3dCQUVILGdCQUFXLFdBQVcsRUFBSyxXQUFXLEVBQUU7cUJBQ3pDLENBQUMsQ0FDSCxDQUFDO2lCQUNMO2FBQ0YsQ0FDRixFQUNEQSxrQkFBUSxDQUFDLFVBQUMsT0FBYyxJQUFLLE9BQUEsT0FBTyxHQUFBLENBQUMsQ0FDdEMsQ0FBQztTQUtIOzs7Ozs7O1FBRVMsdUNBQVU7Ozs7OztZQUFwQixVQUFxQixNQUFjLEVBQUUsSUFBZ0I7O29CQUM3QyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBRTFELE9BQU8sSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBR0UsT0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pEOzs7Ozs7O1FBRVMsc0NBQVM7Ozs7OztZQUFuQixVQUFvQixNQUFjLEVBQUUsRUFBaUI7O29CQUM3QyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBRTFELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3Qjs7Ozs7OztRQUVTLHFDQUFROzs7Ozs7WUFBbEIsVUFBbUIsTUFBYyxFQUFFLElBQWdCOztvQkFDM0MsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUUxRCxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssV0FBVyxFQUFFO29CQUMzQixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0wsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQzthQUNGOzs7Ozs7OztRQUVTLHFDQUFROzs7Ozs7O1lBQWxCLFVBQW1CLE1BQWMsRUFBRSxNQUFrQixFQUFFLE1BQWtCOztvQkFDakUsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUUxRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3pDOztvQkFuT0ZSLGVBQVU7Ozs7O3dCQS9CSFQsZUFBTzt3QkF5QlAscUJBQXFCO3dCQUdiQyxXQUFLOzs7UUFNbkJvQjtZQURDQyxjQUFNLEVBQUU7OzZEQVdMO1FBR0pEO1lBRENDLGNBQU0sRUFBRTs7eURBaUJMO1FBSUpEO1lBRENDLGNBQU0sRUFBRTs7MkRBVUw7UUFJSkQ7WUFEQ0MsY0FBTSxFQUFFOzt5REFjTDtRQUdKRDtZQURDQyxjQUFNLEVBQUU7O3lEQXdETDtRQUdKRDtZQURDQyxjQUFNLEVBQUU7OzJEQW1CTDtRQUdKRDtZQURDQyxjQUFNLEVBQUU7OzJEQVFMO1FBR0pEO1lBRENDLGNBQU0sRUFBRTs7cUZBeUNMO1FBa0NOLHlCQUFDO0tBcE9EOzs7Ozs7O1FDakJNLE9BQU8sR0FBRyxRQUFRO0FBRXhCO1FBbUJFLG1CQUE2QmhDLFFBQXdCLEVBQ3hCLFNBQWdDLEVBQ25DLGFBQTZCLEVBQzFCLFlBQW9CO1lBQXBCLDZCQUFBO2dCQUFBLG9CQUFvQjs7WUFIakQsaUJBbUNDO1lBbkM0QixVQUFLLEdBQUxBLFFBQUssQ0FBbUI7WUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBdUI7WUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQWdCO1lBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1lBUnpDLGFBQVEsR0FBVyxJQUFJLENBQUM7WUFDeEIsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO1lBRWxDLGlCQUFZLEdBQUcsSUFBSUcsaUJBQVksRUFBRSxDQUFDO1lBTXhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7aUJBQ3pCLElBQUksQ0FDSDhCLDhCQUFvQixDQUFDLFVBQUMsSUFBZSxFQUFFLElBQWU7Z0JBQ3BELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUQsQ0FBQyxFQUNGZixhQUFHLENBQUMsVUFBQyxRQUFtQixJQUFpQixPQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFBLENBQUMsQ0FDbEUsQ0FBQztZQUVKLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7aUJBQzdCLElBQUksQ0FDSEEsYUFBRyxDQUFDLFVBQUMsUUFBbUIsSUFBbUIsT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBQSxDQUFDLEVBQ2xJZSw4QkFBb0IsRUFBRSxDQUN2QixDQUFDO1lBRUosSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTO2lCQUN2QyxJQUFJLENBQ0hmLGFBQUcsQ0FBQyxVQUFDLFFBQW1COztvQkFDaEIsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLOztvQkFDMUIsVUFBVSxHQUFHLFNBQVMsQ0FBQyxRQUFRO2dCQUVyQyxPQUFPLFVBQVUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMzRCxDQUFDLENBSUgsQ0FBQztZQUVKLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1NBQ3BDO1FBcERELHNCQUFXLDZCQUFNOzs7Z0JBQWpCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7YUFDbEM7OztXQUFBO1FBRUQsc0JBQVcsb0NBQWE7OztnQkFBeEI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzFCOzs7V0FBQTs7OztRQWdETSwyQkFBTzs7O1lBQWQ7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNqQzs7OztRQUVNLGtDQUFjOzs7WUFBckI7Z0JBQ0UsT0FBT1ksa0JBQWEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsTUFBTSxDQUNaO3FCQUNFLElBQUksQ0FDSFosYUFBRyxDQUFDLFVBQUMsRUFBOEM7d0JBQTlDLGtCQUE4QyxFQUE3QyxtQkFBVyxFQUFFLGFBQUs7b0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7d0JBQ3pCLE9BQU8sRUFBRSxDQUFDO3FCQUNYOzt3QkFFSyxPQUFPLEdBQWlCLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFBLENBQUM7b0JBRXRFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRTFCLE9BQU8sT0FBTyxDQUFDO2lCQUNoQixDQUFDLENBQ0gsQ0FBQzthQUNMOzs7OztRQUVNLCtCQUFXOzs7O1lBQWxCLFVBQW1CLE1BQXFCO2dCQUF4QyxpQkFRQztnQkFQQyxPQUFPLElBQUksQ0FBQyxNQUFNO3FCQUNmLElBQUksQ0FDSEEsYUFBRyxDQUFDLFVBQUMsS0FBaUIsSUFBbUIsT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFBLENBQUMsRUFDaEZBLGFBQUcsQ0FBQyxVQUFDLEtBQW1CO29CQUN0QixPQUFPZ0IsU0FBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDeEMsQ0FBQyxDQUNILENBQUM7YUFDTDs7Ozs7UUFFTSw0QkFBUTs7OztZQUFmLFVBQWdCLElBQWM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQzthQUM3Rjs7Ozs7UUFFTSw4QkFBVTs7OztZQUFqQixVQUFrQixJQUFnQjtnQkFDaEMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDVCxPQUFPLEtBQUssQ0FBQztpQkFDZDtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNuQzs7Ozs7UUFFTSw4QkFBVTs7OztZQUFqQixVQUFrQixJQUFnQjtnQkFDaEMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDVCxPQUFPLEtBQUssQ0FBQztpQkFDZDtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNsQzs7Ozs7UUFFTSx5Q0FBcUI7Ozs7WUFBNUIsVUFBNkIsTUFBYztnQkFDekMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssTUFBTSxDQUFDO2FBQzNDOzs7OztRQUVPLHFDQUFpQjs7OztZQUF6Qjs7b0JBQ1Esb0JBQW9CLEdBQW1CO29CQUMzQyxnQkFBZ0IsRUFBRSxLQUFLO29CQUN2QixRQUFRLEVBQUUsSUFBSTtvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxhQUFhLEVBQUUsSUFBSTtvQkFDbkIsV0FBVyxFQUFFLEtBQUs7aUJBQ25CO2dCQUVELEtBQUssSUFBTSxHQUFHLElBQUksb0JBQW9CLEVBQUU7b0JBQ3RDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7d0JBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3JEO2lCQUNGO2FBQ0Y7Ozs7Ozs7UUFFTyxzQ0FBa0I7Ozs7OztZQUExQixVQUEyQixLQUFpQixFQUFFLEVBQWlCO2dCQUM3RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3FCQUN0QixNQUFNLENBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxLQUFLLEVBQUUsR0FBQSxDQUFDO3FCQUNuRCxHQUFHLENBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ3JDOzs7Ozs7O1FBRU8sNkJBQVM7Ozs7OztZQUFqQixVQUFrQixLQUFpQixFQUFFLE1BQWtCO2dCQUNyRCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssV0FBVyxFQUFFO29CQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNYO2dCQUVELE9BQU8sS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQzs7Ozs7UUFFTyxxQ0FBaUI7Ozs7WUFBekI7Z0JBQUEsaUJBUUM7Z0JBUEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxLQUFLO3FCQUNQLElBQUksQ0FDSDlCLFlBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDM0M7cUJBQ0EsU0FBUyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUEsQ0FBQyxDQUN4RSxDQUFDO2FBQ0g7Ozs7O1FBRU8scUNBQWlCOzs7O1lBQXpCO2dCQUFBLGlCQVFDO2dCQVBDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsS0FBSztxQkFDUCxJQUFJLENBQ0hBLFlBQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDMUM7cUJBQ0EsU0FBUyxDQUFDLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFBLENBQUMsQ0FDN0QsQ0FBQzthQUNIOzs7OztRQUVPLCtDQUEyQjs7OztZQUFuQztnQkFBQSxpQkFRQztnQkFQQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLEtBQUs7cUJBQ1AsSUFBSSxDQUNIQSxZQUFNLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3BEO3FCQUNBLFNBQVMsQ0FBQyxVQUFDLFFBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxHQUFBLENBQUMsQ0FDdkUsQ0FBQzthQUNIO1FBQ0gsZ0JBQUM7SUFBRCxDQUFDOzs7Ozs7QUMvTEQ7UUFnQkUsbUNBQTJCLHFCQUE0QyxFQUM1Q0osUUFBd0I7WUFEeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtZQUM1QyxVQUFLLEdBQUxBLFFBQUssQ0FBbUI7U0FDbEQ7Ozs7OztRQUVNLG1EQUFlOzs7OztZQUF0QixVQUF1QixhQUE2QixFQUFFLEtBQTBCO2dCQUExQixzQkFBQTtvQkFBQSxZQUEwQjs7O29CQUN4RSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU07O29CQUM3QixhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzs7Z0JBR3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUM7b0JBQ3pDLE1BQU0sUUFBQTtvQkFDTixNQUFNLEVBQUUsYUFBYTtvQkFDckIsS0FBSyxPQUFBO2lCQUNOLENBQUMsQ0FBQyxDQUFDOztnQkFHSixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLEVBQUMsTUFBTSxRQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTdFLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNsQixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoRTs7b0JBRUssUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXRFLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQzFFOztvQkE1QkZtQixlQUFVOzs7Ozt3QkFSSCxxQkFBcUI7d0JBRnJCUixXQUFLOzs7UUF1Q2IsZ0NBQUM7S0E3QkQ7Ozs7OztBQ2RBO1FBbUJFLDhCQUE2QlgsUUFBd0I7WUFBeEIsVUFBSyxHQUFMQSxRQUFLLENBQW1CO1NBRXBEOzs7O1FBRU0sdUNBQVE7OztZQUFmO2dCQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNqRDs7Ozs7O1FBRU0seUNBQVU7Ozs7O1lBQWpCLFVBQWtCLElBQWdCLEVBQUUscUJBQThCO2dCQUNoRSxJQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQW9CLENBQUM7d0JBQzNDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07d0JBQzdCLElBQUksTUFBQTtxQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTDthQUNGOztvQkExQkZNLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyx5UEFBNEM7O3FCQUU3Qzs7Ozs7d0JBTk9LLFdBQUs7Ozs7Z0NBUVZHLFVBQUs7O1FBc0JSLDJCQUFDO0tBNUJEOzs7Ozs7QUNSQTtBQXNCQSxRQUFhLFlBQVksR0FBRyxJQUFJcUIsbUJBQWMsQ0FBQyxjQUFjLENBQUM7QUFFOUQ7UUFjRSxxQkFBNkJDLE9BQWdCO1lBQWhCLFNBQUksR0FBSkEsT0FBSSxDQUFZO1lBWm5DLGNBQVMsR0FBZTtnQkFDaEMsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixTQUFTLEVBQUUsWUFBWTtnQkFDdkIsU0FBUyxFQUFFLFlBQVk7YUFDeEIsQ0FBQztTQU9EO1FBTEQsc0JBQVcsK0JBQU07OztnQkFBakI7Z0JBQ0UsT0FBTyxNQUFNLENBQUM7YUFDZjs7O1dBQUE7Ozs7O1FBS00saUNBQVc7Ozs7WUFBbEIsVUFBbUIsS0FBbUI7YUFFckM7Ozs7O1FBRU0sMEJBQUk7Ozs7WUFBWCxVQUFZLE1BQVc7Z0JBQVgsdUJBQUE7b0JBQUEsV0FBVzs7O29CQUNmLE1BQU0sR0FBRyxJQUFJQyxlQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztnQkFFckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQzthQUMzRTs7Ozs7O1FBR00seUJBQUc7Ozs7O1lBQVYsVUFBVyxJQUFnQixFQUFFLFlBQTJCO2dCQUEzQiw2QkFBQTtvQkFBQSxtQkFBMkI7O2dCQUN0RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFO29CQUN0RSxJQUFJLEVBQUUsSUFBSTtvQkFDVixZQUFZLEVBQUUsWUFBWTtpQkFDM0IsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztRQUVNLDBCQUFJOzs7OztZQUFYLFVBQVksT0FBbUIsRUFBRSxVQUE2Qjs7b0JBQ3RELEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRTs7b0JBQ2xCLFFBQVEsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsR0FBRyxJQUFJO2dCQUVsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7YUFDNUc7Ozs7O1FBRU0sNEJBQU07Ozs7WUFBYixVQUFjLElBQWdCO2dCQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN6RTs7Ozs7UUFFTSw0QkFBTTs7OztZQUFiLFVBQWMsTUFBYzs7b0JBQ3BCLE1BQU0sR0FBRyxJQUFJQSxlQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztnQkFFckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQzthQUMvRTs7Ozs7Ozs7UUFFUyw2QkFBTzs7Ozs7OztZQUFqQixVQUFrQixJQUFZLEVBQUUsTUFBYyxFQUFFLFVBQXlCO2dCQUF6QiwyQkFBQTtvQkFBQSxpQkFBeUI7O2dCQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2lCQUNsRDs7b0JBRUssTUFBTSxHQUFHO29CQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07b0JBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07b0JBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7b0JBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7b0JBQ2xDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87aUJBQy9COztvQkFFRyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDO2dCQUVuRCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDakQ7Z0JBRUQsT0FBTyxJQUFJLENBQUM7YUFDYjs7Ozs7OztRQUVTLG1DQUFhOzs7Ozs7WUFBdkIsVUFBd0IsR0FBVyxFQUFFLE1BQWM7Z0JBQ2pELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDeEM7Ozs7Ozs7UUFFUyx1Q0FBaUI7Ozs7OztZQUEzQixVQUE0QixHQUFXLEVBQUUsTUFBYztnQkFDckQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM1Qzs7b0JBaEZGbEIsZUFBVTs7Ozs7d0JBcEJIbUIsZUFBVTs7O1FBcUdsQixrQkFBQztLQWpGRDs7Ozs7O0FDeEJBO1FBVUUsZ0NBQTJCLHlCQUFvRCxFQUNwRCxxQkFBNEM7WUFENUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtZQUNwRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1NBRXRFOzs7Ozs7O1FBRU0scUNBQUk7Ozs7OztZQUFYLFVBQVksaUJBQWlDLEVBQ2pDLE9BQXFCLEVBQ3JCLFdBQTBCO2dCQUNwQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFOUUsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZGOztvQkFiRm5CLGVBQVU7Ozs7O3dCQVBILHlCQUF5Qjt3QkFDekIscUJBQXFCOzs7UUFvQjdCLDZCQUFDO0tBZEQ7Ozs7OztBQ1JBO0FBdUJBLFFBQWEscUJBQXFCLEdBQUcsSUFBSWdCLG1CQUFjLENBQXdCLHVCQUF1QixDQUFDO0FBRXZHO1FBMERFLG9CQUEyQixTQUEyQjtZQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtZQUNwRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQzs7OztRQXhCYSxrQkFBTzs7O1lBQXJCO2dCQUNFLE9BQU87b0JBQ0wsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFNBQVMsRUFBRTt3QkFDVCxXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixzQkFBc0I7d0JBQ3RCLHlCQUF5QjtxQkFDMUI7aUJBQ0YsQ0FBQzthQUNIOzs7O1FBRWEscUJBQVU7OztZQUF4QjtnQkFDRSxPQUFPO29CQUNMLFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTLEVBQUUsRUFBRTtpQkFDZCxDQUFDO2FBQ0g7Ozs7O1FBUU8sd0NBQW1COzs7O1lBQTNCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtvQkFDbEMsb0JBQW9CLEVBQUUsT0FBTztvQkFDN0IscUJBQXFCLEVBQUUsUUFBUTtvQkFDL0IsdUJBQXVCLEVBQUUsTUFBTTtvQkFDL0IscUJBQXFCLEVBQUUsYUFBYTtpQkFDckMsQ0FBQyxDQUFDO2FBQ0o7Ozs7O1FBRU8sd0NBQW1COzs7O1lBQTNCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtvQkFDbEMsb0JBQW9CLEVBQUUsVUFBVTtvQkFDaEMscUJBQXFCLEVBQUUsV0FBVztvQkFDbEMsdUJBQXVCLEVBQUUsYUFBYTtvQkFDdEMscUJBQXFCLEVBQUUsc0NBQXNDO2lCQUM5RCxDQUFDLENBQUM7YUFDSjs7b0JBaEZGSSxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMsZ0NBQWlCOzRCQUNqQkMsZ0JBQVM7NEJBQ1RDLHFCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDOUNDLHFCQUFnQjs0QkFDaEJDLGlCQUFXOzRCQUNYQyx5QkFBbUI7NEJBQ25CQyxpQkFBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDOzRCQUM1Q0Msc0JBQWU7eUJBQ2hCO3dCQUNELFlBQVksRUFBRTs0QkFDWixhQUFhOzRCQUNiLGFBQWE7NEJBQ2Isa0JBQWtCOzRCQUNsQixrQkFBa0I7NEJBQ2xCLGlCQUFpQjs0QkFDakIsb0JBQW9CO3lCQUNyQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsYUFBYTs0QkFDYixhQUFhOzRCQUNiLGtCQUFrQjs0QkFDbEIsa0JBQWtCOzRCQUNsQixpQkFBaUI7NEJBQ2pCQyx5QkFBa0I7NEJBQ2xCLG9CQUFvQjs0QkFDcEJGLGlCQUFXOzRCQUNYSixxQkFBYTt5QkFDZDt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQzt5QkFDNUQ7d0JBQ0QsT0FBTyxFQUFFLENBQUNPLDJCQUFzQixDQUFDO3FCQUNsQzs7Ozs7d0JBOUN3QkMsdUJBQWdCOzs7UUE0RnpDLGlCQUFDO0tBakZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9