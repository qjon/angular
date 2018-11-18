/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TreeActionTypes, TreeDeleteNodeErrorAction, TreeDeleteNodeSuccessAction, TreeExpandNodeAction, TreeLoadNodesAction, TreeLoadNodesErrorAction, TreeLoadNodesSuccessAction, TreeMoveNodeErrorAction, TreeMoveNodeSuccessAction, TreeSaveNodeErrorAction, TreeSaveNodeSuccessAction, TreeSetAllNodesAction } from './treeActions.service';
import { combineLatest, of } from 'rxjs';
import { NodeDispatcherService } from '../service/nodesDispatcher.service';
import { DragAndDrop } from '../dragAndDrop/dragAndDrop.service';
import { catchError, filter, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { NEW_NODE_ID, treeConfigurationSelector, treeSelector } from './treeReducer';
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
            .pipe(map(function () { return new TreeDeleteNodeSuccessAction(tslib_1.__assign({}, action.payload)); }), catchError(function () { return of(new TreeDeleteNodeErrorAction(tslib_1.__assign({}, action.payload))); })); }));
        this.save$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_SAVE_NODE), switchMap(function (action) { return _this.saveNode(action.payload.treeId, tslib_1.__assign({}, action.payload.node))
            .pipe(map(function (node) { return new TreeSaveNodeSuccessAction({
            treeId: action.payload.treeId,
            oldNode: action.payload.node,
            node: node
        }); }), catchError(function () { return of(new TreeSaveNodeErrorAction(tslib_1.__assign({}, action.payload))); })); }));
        this.move$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_MOVE_NODE), filter(function (action) {
            return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
        }), switchMap(function (action) {
            /** @type {?} */
            var source = (/** @type {?} */ (tslib_1.__assign({}, action.payload.oldNode)));
            /** @type {?} */
            var target = Boolean(action.payload.node) ? tslib_1.__assign({}, action.payload.node) : null;
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
                    return tslib_1.__spread(loadSuccess, expandNodes);
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
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TreeEffectsService.prototype, "register$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TreeEffectsService.prototype, "load$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TreeEffectsService.prototype, "delete$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TreeEffectsService.prototype, "save$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TreeEffectsService.prototype, "move$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TreeEffectsService.prototype, "expand$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TreeEffectsService.prototype, "insert$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TreeEffectsService.prototype, "initPathForFullyLoadedTreeEffect$", void 0);
    return TreeEffectsService;
}());
export { TreeEffectsService };
if (false) {
    /** @type {?} */
    TreeEffectsService.prototype.register$;
    /** @type {?} */
    TreeEffectsService.prototype.load$;
    /** @type {?} */
    TreeEffectsService.prototype.delete$;
    /** @type {?} */
    TreeEffectsService.prototype.save$;
    /** @type {?} */
    TreeEffectsService.prototype.move$;
    /** @type {?} */
    TreeEffectsService.prototype.expand$;
    /** @type {?} */
    TreeEffectsService.prototype.insert$;
    /** @type {?} */
    TreeEffectsService.prototype.initPathForFullyLoadedTreeEffect$;
    /**
     * @type {?}
     * @private
     */
    TreeEffectsService.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    TreeEffectsService.prototype.nodeDispatcherService;
    /**
     * @type {?}
     * @private
     */
    TreeEffectsService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZUVmZmVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvc3RvcmUvdHJlZUVmZmVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFFTCxlQUFlLEVBRWYseUJBQXlCLEVBQ3pCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFFcEIsbUJBQW1CLEVBQ25CLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFHMUIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUd6Qix1QkFBdUIsRUFDdkIseUJBQXlCLEVBQ3pCLHFCQUFxQixFQUN0QixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFBQyxhQUFhLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRixPQUFPLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUMsV0FBVyxFQUFFLHlCQUF5QixFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVuRjtJQW9NRSw0QkFBb0IsUUFBaUIsRUFDakIscUJBQTRDLEVBQzVDLEtBQXdCO1FBRjVDLGlCQUdDO1FBSG1CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsMEJBQXFCLEdBQXJC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ekIsbURBQW9EOzs7OztJQUNwRCxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZX0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBUcmVlQWN0aW9uLFxuICBUcmVlQWN0aW9uVHlwZXMsXG4gIFRyZWVEZWxldGVOb2RlQWN0aW9uLFxuICBUcmVlRGVsZXRlTm9kZUVycm9yQWN0aW9uLFxuICBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVFeHBhbmROb2RlQWN0aW9uLFxuICBUcmVlSW5zZXJ0Tm9kZUFjdGlvbixcbiAgVHJlZUxvYWROb2Rlc0FjdGlvbixcbiAgVHJlZUxvYWROb2Rlc0Vycm9yQWN0aW9uLFxuICBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbixcbiAgVHJlZUxvYWRQYXRoQWN0aW9uLFxuICBUcmVlTW92ZU5vZGVBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZUVycm9yQWN0aW9uLFxuICBUcmVlTW92ZU5vZGVTdWNjZXNzQWN0aW9uLFxuICBUcmVlUmVnaXN0ZXJBY3Rpb24sXG4gIFRyZWVTYXZlTm9kZUFjdGlvbixcbiAgVHJlZVNhdmVOb2RlRXJyb3JBY3Rpb24sXG4gIFRyZWVTYXZlTm9kZVN1Y2Nlc3NBY3Rpb24sXG4gIFRyZWVTZXRBbGxOb2Rlc0FjdGlvblxufSBmcm9tICcuL3RyZWVBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lUcmVlQWN0aW9uUGF5bG9hZCwgSVRyZWVDb25maWd1cmF0aW9uLCBJVHJlZURhdGEsIElUcmVlU3RhdGV9IGZyb20gJy4vSVRyZWVTdGF0ZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuLi9kcmFnQW5kRHJvcC9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgZmlsdGVyLCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7c2VsZWN0LCBTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtORVdfTk9ERV9JRCwgdHJlZUNvbmZpZ3VyYXRpb25TZWxlY3RvciwgdHJlZVNlbGVjdG9yfSBmcm9tICcuL3RyZWVSZWR1Y2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVFZmZlY3RzU2VydmljZSB7XG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgcmVnaXN0ZXIkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX1JFR0lTVEVSKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBUcmVlUmVnaXN0ZXJBY3Rpb24pOiBUcmVlQWN0aW9uID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLnNpbGVudCkge1xuICAgICAgICAgIHJldHVybiBuZXcgVHJlZVNldEFsbE5vZGVzQWN0aW9uKHt0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgbm9kZXM6IGFjdGlvbi5wYXlsb2FkLm5vZGVzfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUcmVlTG9hZE5vZGVzQWN0aW9uKHt0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgaWQ6IG51bGx9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgbG9hZCQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRCksXG4gICAgICBtZXJnZU1hcCgoYWN0aW9uOiBUcmVlTG9hZE5vZGVzQWN0aW9uKSA9PiB0aGlzLmxvYWROb2RlcyhhY3Rpb24ucGF5bG9hZC50cmVlSWQsIGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKG5vZGVzRGF0YTogSU91dGVyTm9kZVtdKTogVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb24gPT4gbmV3IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uKHtcbiAgICAgICAgICAgIHRyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLFxuICAgICAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgICAgICAgbm9kZXM6IG5vZGVzRGF0YVxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBUcmVlTG9hZE5vZGVzRXJyb3JBY3Rpb24oe1xuICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgICB9KSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBkZWxldGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlRGVsZXRlTm9kZUFjdGlvbikgPT4gdGhpcy5kZWxldGVOb2RlKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgYWN0aW9uLnBheWxvYWQubm9kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpOiBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb24gPT4gbmV3IFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbih7Li4uYWN0aW9uLnBheWxvYWR9KSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKTogT2JzZXJ2YWJsZTxUcmVlRGVsZXRlTm9kZUVycm9yQWN0aW9uPiA9PiBvZihuZXcgVHJlZURlbGV0ZU5vZGVFcnJvckFjdGlvbih7Li4uYWN0aW9uLnBheWxvYWR9KSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBzYXZlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVTYXZlTm9kZUFjdGlvbikgPT4gdGhpcy5zYXZlTm9kZShhY3Rpb24ucGF5bG9hZC50cmVlSWQsIHsuLi5hY3Rpb24ucGF5bG9hZC5ub2RlfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChub2RlOiBJT3V0ZXJOb2RlKTogVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbiA9PiBuZXcgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbih7XG4gICAgICAgICAgICB0cmVlSWQ6IGFjdGlvbi5wYXlsb2FkLnRyZWVJZCxcbiAgICAgICAgICAgIG9sZE5vZGU6IGFjdGlvbi5wYXlsb2FkLm5vZGUsXG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFRyZWVTYXZlTm9kZUVycm9yQWN0aW9uKHsuLi5hY3Rpb24ucGF5bG9hZH0pKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBtb3ZlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREUpLFxuICAgICAgZmlsdGVyKChhY3Rpb246IFRyZWVNb3ZlTm9kZUFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuc291cmNlT2ZEcm9wcGVkRGF0YSA9PT0gRHJhZ0FuZERyb3AuRFJPUF9EQVRBX1RZUEU7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlTW92ZU5vZGVBY3Rpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSA8SU91dGVyTm9kZT57Li4uYWN0aW9uLnBheWxvYWQub2xkTm9kZX07XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gQm9vbGVhbihhY3Rpb24ucGF5bG9hZC5ub2RlKSA/IHsuLi5hY3Rpb24ucGF5bG9hZC5ub2RlfSA6IG51bGw7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTm9kZShhY3Rpb24ucGF5bG9hZC50cmVlSWQsIHNvdXJjZSwgdGFyZ2V0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgobm9kZTogSU91dGVyTm9kZSk6IElUcmVlQWN0aW9uUGF5bG9hZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHRyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLFxuICAgICAgICAgICAgICAgICAgb2xkTm9kZTogYWN0aW9uLnBheWxvYWQub2xkTm9kZSxcbiAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKChkYXRhOiBJVHJlZUFjdGlvblBheWxvYWQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QodHJlZUNvbmZpZ3VyYXRpb25TZWxlY3RvcihhY3Rpb24ucGF5bG9hZC50cmVlSWQpKVxuICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgICAgIG1hcCgoY29uZmlndXJhdGlvbjogSVRyZWVDb25maWd1cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBY3Rpb24gPSBuZXcgVHJlZU1vdmVOb2RlRXJyb3JBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbi5wYXlsb2FkLm9sZE5vZGUsXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFjdGlvbi5wYXlsb2FkLm5vZGVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvZihuZXdBY3Rpb24pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIG1lcmdlTWFwKCh2YWx1ZTogeyBkYXRhOiBJVHJlZUFjdGlvblBheWxvYWQsIGNvbmZpZ3VyYXRpb246IElUcmVlQ29uZmlndXJhdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB2YWx1ZS5kYXRhO1xuICAgICAgICBjb25zdCBhY3Rpb25zOiBUcmVlQWN0aW9uW10gPSBbXG4gICAgICAgICAgbmV3IFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb24oe3RyZWVJZDogZGF0YS50cmVlSWQsIHNvdXJjZTogZGF0YS5vbGROb2RlLCB0YXJnZXQ6IGRhdGEubm9kZX0pLFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmICghdmFsdWUuY29uZmlndXJhdGlvbi5pc0Z1bGx5TG9hZGVkKSB7XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKG5ldyBUcmVlTG9hZE5vZGVzQWN0aW9uKHt0cmVlSWQ6IGRhdGEudHJlZUlkLCBpZDogZGF0YS5ub2RlLnBhcmVudElkfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICB9KVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBleHBhbmQkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VYUEFORF9OT0RFKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlRXhwYW5kTm9kZUFjdGlvbikgPT5cbiAgICAgICAgdGhpcy5zdG9yZVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KHRyZWVTZWxlY3RvcihhY3Rpb24ucGF5bG9hZC50cmVlSWQpKSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBmaWx0ZXIoKHRyZWVTdGF0ZTogSVRyZWVEYXRhKSA9PiAhdHJlZVN0YXRlLmNvbmZpZ3VyYXRpb24uaXNGdWxseUxvYWRlZCksXG4gICAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFRyZWVMb2FkTm9kZXNBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgaW5zZXJ0JCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9JTlNFUlRfTk9ERSksXG4gICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZUluc2VydE5vZGVBY3Rpb24pID0+ICEhYWN0aW9uLnBheWxvYWQucGFyZW50SWQpLFxuICAgICAgbWFwKChhY3Rpb246IFRyZWVJbnNlcnROb2RlQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgVHJlZUV4cGFuZE5vZGVBY3Rpb24oe3RyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLCBpZDogYWN0aW9uLnBheWxvYWQucGFyZW50SWR9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGluaXRQYXRoRm9yRnVsbHlMb2FkZWRUcmVlRWZmZWN0JCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1BBVEgpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IFRyZWVMb2FkUGF0aEFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QodHJlZUNvbmZpZ3VyYXRpb25TZWxlY3RvcihhY3Rpb24ucGF5bG9hZC50cmVlSWQpKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIG1hcCgoY29uZmlndXJhdGlvbjogSVRyZWVDb25maWd1cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7YWN0aW9uLCBjb25maWd1cmF0aW9ufTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKCh2YWx1ZTogeyBhY3Rpb246IFRyZWVMb2FkUGF0aEFjdGlvbiwgY29uZmlndXJhdGlvbjogSVRyZWVDb25maWd1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgICBjb25zdCB7YWN0aW9uLCBjb25maWd1cmF0aW9ufSA9IHZhbHVlO1xuXG4gICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uaXNGdWxseUxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmlkcy5tYXAoKGlkOiBzdHJpbmcpID0+IG5ldyBUcmVlRXhwYW5kTm9kZUFjdGlvbih7dHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsIGlkfSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkQWN0aW9ucyA9IGFjdGlvbi5wYXlsb2FkLmlkcy5tYXAoKGlkOiBzdHJpbmcpID0+IHRoaXMubG9hZE5vZGVzKGFjdGlvbi5wYXlsb2FkLnRyZWVJZCwgaWQpKTtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KGxvYWRBY3Rpb25zKVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIG1lcmdlTWFwKChkYXRhOiBJT3V0ZXJOb2RlW11bXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZFN1Y2Nlc3MgPSBkYXRhLm1hcCgobm9kZXM6IElPdXRlck5vZGVbXSwgaW5kZXgpID0+IG5ldyBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHRyZWVJZDogYWN0aW9uLnBheWxvYWQudHJlZUlkLFxuICAgICAgICAgICAgICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuaWRzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZE5vZGVzID0gYWN0aW9uLnBheWxvYWQuaWRzLm1hcCgoaWQ6IHN0cmluZykgPT4gbmV3IFRyZWVFeHBhbmROb2RlQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgdHJlZUlkOiBhY3Rpb24ucGF5bG9hZC50cmVlSWQsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4ubG9hZFN1Y2Nlc3MsIC4uLmV4cGFuZE5vZGVzXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIG1lcmdlTWFwKChhY3Rpb25zOiBhbnlbXSkgPT4gYWN0aW9ucylcbiAgICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+KSB7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVsZXRlTm9kZSh0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IG5vZGVTZXJ2aWNlID0gdGhpcy5ub2RlRGlzcGF0Y2hlclNlcnZpY2UuZ2V0KHRyZWVJZCk7XG5cbiAgICByZXR1cm4gbm9kZS5pZCA/IG5vZGVTZXJ2aWNlLnJlbW92ZShub2RlLmlkKSA6IG9mKG5vZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvYWROb2Rlcyh0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB8IG51bGwpIHtcbiAgICBjb25zdCBub2RlU2VydmljZSA9IHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpO1xuXG4gICAgcmV0dXJuIG5vZGVTZXJ2aWNlLmxvYWQoaWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNhdmVOb2RlKHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3Qgbm9kZVNlcnZpY2UgPSB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5nZXQodHJlZUlkKTtcblxuICAgIGlmIChub2RlLmlkID09PSBORVdfTk9ERV9JRCkge1xuICAgICAgcmV0dXJuIG5vZGVTZXJ2aWNlLmFkZChub2RlLCBub2RlLnBhcmVudElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGVTZXJ2aWNlLnVwZGF0ZShub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgbW92ZU5vZGUodHJlZUlkOiBzdHJpbmcsIHNvdXJjZTogSU91dGVyTm9kZSwgdGFyZ2V0OiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3Qgbm9kZVNlcnZpY2UgPSB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5nZXQodHJlZUlkKTtcblxuICAgIHJldHVybiBub2RlU2VydmljZS5tb3ZlKHNvdXJjZSwgdGFyZ2V0KTtcbiAgfVxufVxuIl19