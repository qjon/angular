/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { distinctUntilChanged, map } from 'rxjs/operators';
import * as _isEqual from 'lodash.isequal';
import { expandedNodesSelector, NEW_NODE_ID, previouslySelectedNodeSelector, selectedNodeSelector } from '../store/treeReducer';
import { select } from '@ngrx/store';
import { TreeLoadPathAction } from '../store/treeActions.service';
import { combineLatest, Subscription } from 'rxjs';
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
            var _b = tslib_1.__read(_a, 2), currentNode = _b[0], nodes = _b[1];
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
            .pipe(map(function (state) { return _this.getNodesByParentId(state, nodeId); }), map(function (nodes) {
            return tslib_1.__spread(nodes).sort(_this.sortNodes);
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
export { TreeModel };
if (false) {
    /** @type {?} */
    TreeModel.prototype.nodes$;
    /** @type {?} */
    TreeModel.prototype.rootNodes$;
    /** @type {?} */
    TreeModel.prototype.currentSelectedNode$;
    /**
     * @type {?}
     * @private
     */
    TreeModel.prototype.expanded;
    /**
     * @type {?}
     * @private
     */
    TreeModel.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    TreeModel.prototype.previouslySelected;
    /**
     * @type {?}
     * @private
     */
    TreeModel.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    TreeModel.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    TreeModel.prototype.treeData$;
    /** @type {?} */
    TreeModel.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    TreeModel.prototype._fullyLoaded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlZU1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvVHJlZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sS0FBSyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixXQUFXLEVBQ1gsOEJBQThCLEVBQzlCLG9CQUFvQixFQUNyQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBQyxNQUFNLEVBQVEsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBYyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7O0lBRXZELE9BQU8sR0FBRyxRQUFRO0FBRXhCO0lBbUJFLG1CQUE2QixLQUF3QixFQUN4QixTQUFnQyxFQUNuQyxhQUE2QixFQUMxQixZQUFvQjtRQUFwQiw2QkFBQSxFQUFBLG9CQUFvQjtRQUhqRCxpQkFtQ0M7UUFuQzRCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQVJ6QyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFXLElBQUksQ0FBQztRQUVsQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUzthQUN6QixJQUFJLENBQ0gsb0JBQW9CLENBQUMsVUFBQyxJQUFlLEVBQUUsSUFBZTtZQUNwRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxD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QUs7YUFDUCxJQUFJLENBQ0gsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUMxQzthQUNBLFNBQVMsQ0FBQyxVQUFDLFFBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUM3RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTywrQ0FBMkI7Ozs7SUFBbkM7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsS0FBSzthQUNQLElBQUksQ0FDSCxNQUFNLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3BEO2FBQ0EsU0FBUyxDQUFDLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLEVBQWxDLENBQWtDLENBQUMsQ0FDdkUsQ0FBQztJQUNKLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUE5S0QsSUE4S0M7Ozs7SUFwS0MsMkJBQXNDOztJQUN0QywrQkFBNEM7O0lBQzVDLHlDQUFvRDs7Ozs7SUFDcEQsNkJBQThCOzs7OztJQUM5Qiw2QkFBZ0M7Ozs7O0lBQ2hDLHVDQUEwQzs7Ozs7SUFFMUMsaUNBQTBDOzs7OztJQUV2QiwwQkFBa0M7Ozs7O0lBQ2xDLDhCQUEwQzs7SUFDMUMsa0NBQW9DOzs7OztJQUNwQyxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0lDb25maWd1cmF0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SVRyZWVEYXRhLCBJVHJlZU5vZGVzLCBJVHJlZVN0YXRlfSBmcm9tICcuLi9zdG9yZS9JVHJlZVN0YXRlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgX2lzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuaW1wb3J0IHtcbiAgZXhwYW5kZWROb2Rlc1NlbGVjdG9yLFxuICBORVdfTk9ERV9JRCxcbiAgcHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yLFxuICBzZWxlY3RlZE5vZGVTZWxlY3RvclxufSBmcm9tICcuLi9zdG9yZS90cmVlUmVkdWNlcic7XG5pbXBvcnQge3NlbGVjdCwgU3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7VHJlZUxvYWRQYXRoQWN0aW9ufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuY29uc3QgaXNFcXVhbCA9IF9pc0VxdWFsO1xuXG5leHBvcnQgY2xhc3MgVHJlZU1vZGVsIHtcblxuICBwdWJsaWMgZ2V0IHRyZWVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb24udHJlZUlkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0Z1bGx5TG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mdWxseUxvYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBub2RlcyQ6IE9ic2VydmFibGU8SVRyZWVOb2Rlcz47XG4gIHB1YmxpYyByb290Tm9kZXMkOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT47XG4gIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWROb2RlJDogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcbiAgcHJpdmF0ZSBleHBhbmRlZDogU2V0PHN0cmluZz47XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgcHJldmlvdXNseVNlbGVjdGVkOiBzdHJpbmcgPSBudWxsO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIHRyZWVEYXRhJDogT2JzZXJ2YWJsZTxJVHJlZURhdGE+LFxuICAgICAgICAgICAgICAgICAgICAgcHVibGljIGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9mdWxseUxvYWRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5ub2RlcyQgPSB0aGlzLnRyZWVEYXRhJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJVHJlZURhdGEsIG5leHQ6IElUcmVlRGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpc0VxdWFsKHByZXYubm9kZXMuZW50aXRpZXMsIG5leHQubm9kZXMuZW50aXRpZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKCh0cmVlRGF0YTogSVRyZWVEYXRhKTogSVRyZWVOb2RlcyA9PiB0cmVlRGF0YS5ub2Rlcy5lbnRpdGllcylcbiAgICAgICk7XG5cbiAgICB0aGlzLnJvb3ROb2RlcyQgPSB0aGlzLnRyZWVEYXRhJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgodHJlZURhdGE6IElUcmVlRGF0YSk6IElPdXRlck5vZGVbXSA9PiB0cmVlRGF0YS5ub2Rlcy5yb290Tm9kZXMubWFwKChpZCkgPT4gdHJlZURhdGEubm9kZXMuZW50aXRpZXNbaWRdKS5zb3J0KHRoaXMuc29ydE5vZGVzKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApO1xuXG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlJCA9IHRoaXMudHJlZURhdGEkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh0cmVlRGF0YTogSVRyZWVEYXRhKTogSU91dGVyTm9kZSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZXNEYXRhID0gdHJlZURhdGEubm9kZXM7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZCA9IG5vZGVzRGF0YS5zZWxlY3RlZDtcblxuICAgICAgICAgIHJldHVybiBzZWxlY3RlZElkID8gbm9kZXNEYXRhLmVudGl0aWVzW3NlbGVjdGVkSWRdIDogbnVsbDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2OiBJT3V0ZXJOb2RlLCBuZXh0OiBJT3V0ZXJOb2RlKSA9PiB7XG4gICAgICAgIC8vICAgcmV0dXJuIGlzRXF1YWwocHJldiA/IHByZXYuaWQgOiBudWxsLCBuZXh0ID8gbmV4dC5pZCA6IG51bGwpXG4gICAgICAgIC8vIH0pXG4gICAgICApO1xuXG4gICAgdGhpcy5pbml0Q29uZmlndXJhdGlvbigpO1xuICAgIHRoaXMuc3Vic2NyaWJlRXhwYW5kZWQoKTtcbiAgICB0aGlzLnN1YnNjcmliZVNlbGVjdGVkKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVQcmV2aW91c2x5U2VsZWN0ZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyZW50c0xpc3QoKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSQsXG4gICAgICB0aGlzLm5vZGVzJFxuICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFtjdXJyZW50Tm9kZSwgbm9kZXNdOiBbSU91dGVyTm9kZSwgSVRyZWVOb2Rlc10pOiBJT3V0ZXJOb2RlW10gPT4ge1xuICAgICAgICAgIGlmICghQm9vbGVhbihjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXJlbnRzOiBJT3V0ZXJOb2RlW10gPSBjdXJyZW50Tm9kZS5wYXJlbnRzLm1hcChpZCA9PiBub2Rlc1tpZF0pO1xuXG4gICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZHJlbihub2RlSWQ6IHN0cmluZyB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhdGU6IElUcmVlTm9kZXMpOiBJT3V0ZXJOb2RlW10gPT4gdGhpcy5nZXROb2Rlc0J5UGFyZW50SWQoc3RhdGUsIG5vZGVJZCkpLFxuICAgICAgICBtYXAoKG5vZGVzOiBJT3V0ZXJOb2RlW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gWy4uLm5vZGVzXS5zb3J0KHRoaXMuc29ydE5vZGVzKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgaW5pdFBhdGgocGF0aDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlTG9hZFBhdGhBY3Rpb24oe3RyZWVJZDogdGhpcy5jb25maWd1cmF0aW9uLnRyZWVJZCwgaWRzOiBwYXRofSkpO1xuICB9XG5cbiAgcHVibGljIGlzRXhwYW5kZWQobm9kZTogSU91dGVyTm9kZSk6IGJvb2xlYW4ge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkLmhhcyhub2RlLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKG5vZGU6IElPdXRlck5vZGUpOiBib29sZWFuIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCA9PT0gbm9kZS5pZDtcbiAgfVxuXG4gIHB1YmxpYyB3YXNQcmV2aW91c2x5U2VsZWN0ZWQobm9kZUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c2x5U2VsZWN0ZWQgPT09IG5vZGVJZDtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uID0ge1xuICAgICAgZGlzYWJsZU1vdmVOb2RlczogZmFsc2UsXG4gICAgICBkcmFnWm9uZTogbnVsbCxcbiAgICAgIGRyb3Bab25lOiBudWxsLFxuICAgICAgdHJlZUlkOiAndHJlZScsXG4gICAgICBzaG93QWRkQnV0dG9uOiB0cnVlLFxuICAgICAgaXNBbmltYXRpb246IGZhbHNlLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZWZhdWx0Q29uZmlndXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uW2tleV0gPSBkZWZhdWx0Q29uZmlndXJhdGlvbltrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Tm9kZXNCeVBhcmVudElkKHN0YXRlOiBJVHJlZU5vZGVzLCBpZDogc3RyaW5nIHwgbnVsbCk6IElPdXRlck5vZGVbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKVxuICAgICAgLmZpbHRlcigoa2V5OiBzdHJpbmcpID0+IHN0YXRlW2tleV0ucGFyZW50SWQgPT09IGlkKVxuICAgICAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IHN0YXRlW2tleV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Tm9kZXMoZmlyc3Q6IElPdXRlck5vZGUsIHNlY29uZDogSU91dGVyTm9kZSk6IG51bWJlciB7XG4gICAgaWYgKHNlY29uZC5pZCA9PT0gTkVXX05PREVfSUQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3QubmFtZSA+IHNlY29uZC5uYW1lID8gMSA6IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVFeHBhbmRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnN0b3JlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNlbGVjdChleHBhbmRlZE5vZGVzU2VsZWN0b3IodGhpcy50cmVlSWQpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGV4cGFuZGVkOiBzdHJpbmdbXSkgPT4gdGhpcy5leHBhbmRlZCA9IG5ldyBTZXQoZXhwYW5kZWQpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVNlbGVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KHNlbGVjdGVkTm9kZVNlbGVjdG9yKHRoaXMudHJlZUlkKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzZWxlY3RlZDogc3RyaW5nKSA9PiB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlUHJldmlvdXNseVNlbGVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KHByZXZpb3VzbHlTZWxlY3RlZE5vZGVTZWxlY3Rvcih0aGlzLnRyZWVJZCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc2VsZWN0ZWQ6IHN0cmluZykgPT4gdGhpcy5wcmV2aW91c2x5U2VsZWN0ZWQgPSBzZWxlY3RlZClcbiAgICApO1xuICB9XG59XG4iXX0=