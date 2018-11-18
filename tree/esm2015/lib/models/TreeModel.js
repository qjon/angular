/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { distinctUntilChanged, map } from 'rxjs/operators';
import * as _isEqual from 'lodash.isequal';
import { expandedNodesSelector, NEW_NODE_ID, previouslySelectedNodeSelector, selectedNodeSelector } from '../store/treeReducer';
import { select } from '@ngrx/store';
import { TreeLoadPathAction } from '../store/treeActions.service';
import { combineLatest, Subscription } from 'rxjs';
/** @type {?} */
const isEqual = _isEqual;
export class TreeModel {
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
            .pipe(map((state) => this.getNodesByParentId(state, nodeId)), map((nodes) => {
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
    getNodesByParentId(state, id) {
        return Object.keys(state)
            .filter((key) => state[key].parentId === id)
            .map((key) => state[key]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlZU1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvVHJlZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxLQUFLLFFBQVEsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLFdBQVcsRUFDWCw4QkFBOEIsRUFDOUIsb0JBQW9CLEVBQ3JCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLE1BQU0sRUFBUSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxFQUFjLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7TUFFdkQsT0FBTyxHQUFHLFFBQVE7QUFFeEIsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7SUFtQnBCLFlBQTZCLEtBQXdCLEVBQ3hCLFNBQWdDLEVBQ25DLGFBQTZCLEVBQzFCLGVBQWUsS0FBSztRQUhwQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUF1QjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFSekMsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4Qix1QkFBa0IsR0FBVyxJQUFJLENBQUM7UUFFbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7YUFDekIsSUFBSSxDQUNILG9CQUFvQixDQUFDLENBQUMsSUFBZSxFQUFFLElBQWUsRUFBRSxFQUFFO1lBQ3hELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMs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QUksQ0FBQyxLQUFLO2FBQ1AsSUFBSSxDQUNILE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDcEQ7YUFDQSxTQUFTLENBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQXBLQywyQkFBc0M7O0lBQ3RDLCtCQUE0Qzs7SUFDNUMseUNBQW9EOzs7OztJQUNwRCw2QkFBOEI7Ozs7O0lBQzlCLDZCQUFnQzs7Ozs7SUFDaEMsdUNBQTBDOzs7OztJQUUxQyxpQ0FBMEM7Ozs7O0lBRXZCLDBCQUFrQzs7Ozs7SUFDbEMsOEJBQTBDOztJQUMxQyxrQ0FBb0M7Ozs7O0lBQ3BDLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7SUNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvSUNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtJVHJlZURhdGEsIElUcmVlTm9kZXMsIElUcmVlU3RhdGV9IGZyb20gJy4uL3N0b3JlL0lUcmVlU3RhdGUnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBfaXNFcXVhbCBmcm9tICdsb2Rhc2guaXNlcXVhbCc7XG5pbXBvcnQge1xuICBleHBhbmRlZE5vZGVzU2VsZWN0b3IsXG4gIE5FV19OT0RFX0lELFxuICBwcmV2aW91c2x5U2VsZWN0ZWROb2RlU2VsZWN0b3IsXG4gIHNlbGVjdGVkTm9kZVNlbGVjdG9yXG59IGZyb20gJy4uL3N0b3JlL3RyZWVSZWR1Y2VyJztcbmltcG9ydCB7c2VsZWN0LCBTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtUcmVlTG9hZFBhdGhBY3Rpb259IGZyb20gJy4uL3N0b3JlL3RyZWVBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5jb25zdCBpc0VxdWFsID0gX2lzRXF1YWw7XG5cbmV4cG9ydCBjbGFzcyBUcmVlTW9kZWwge1xuXG4gIHB1YmxpYyBnZXQgdHJlZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbi50cmVlSWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRnVsbHlMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGx5TG9hZGVkO1xuICB9XG5cbiAgcHVibGljIG5vZGVzJDogT2JzZXJ2YWJsZTxJVHJlZU5vZGVzPjtcbiAgcHVibGljIHJvb3ROb2RlcyQ6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPjtcbiAgcHVibGljIGN1cnJlbnRTZWxlY3RlZE5vZGUkOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuICBwcml2YXRlIGV4cGFuZGVkOiBTZXQ8c3RyaW5nPjtcbiAgcHJpdmF0ZSBzZWxlY3RlZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBwcmV2aW91c2x5U2VsZWN0ZWQ6IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgdHJlZURhdGEkOiBPYnNlcnZhYmxlPElUcmVlRGF0YT4sXG4gICAgICAgICAgICAgICAgICAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Z1bGx5TG9hZGVkID0gZmFsc2UpIHtcbiAgICB0aGlzLm5vZGVzJCA9IHRoaXMudHJlZURhdGEkXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXY6IElUcmVlRGF0YSwgbmV4dDogSVRyZWVEYXRhKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGlzRXF1YWwocHJldi5ub2Rlcy5lbnRpdGllcywgbmV4dC5ub2Rlcy5lbnRpdGllcyk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHRyZWVEYXRhOiBJVHJlZURhdGEpOiBJVHJlZU5vZGVzID0+IHRyZWVEYXRhLm5vZGVzLmVudGl0aWVzKVxuICAgICAgKTtcblxuICAgIHRoaXMucm9vdE5vZGVzJCA9IHRoaXMudHJlZURhdGEkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh0cmVlRGF0YTogSVRyZWVEYXRhKTogSU91dGVyTm9kZVtdID0+IHRyZWVEYXRhLm5vZGVzLnJvb3ROb2Rlcy5tYXAoKGlkKSA9PiB0cmVlRGF0YS5ub2Rlcy5lbnRpdGllc1tpZF0pLnNvcnQodGhpcy5zb3J0Tm9kZXMpKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICk7XG5cbiAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZE5vZGUkID0gdGhpcy50cmVlRGF0YSRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHRyZWVEYXRhOiBJVHJlZURhdGEpOiBJT3V0ZXJOb2RlID0+IHtcbiAgICAgICAgICBjb25zdCBub2Rlc0RhdGEgPSB0cmVlRGF0YS5ub2RlcztcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZElkID0gbm9kZXNEYXRhLnNlbGVjdGVkO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkSWQgPyBub2Rlc0RhdGEuZW50aXRpZXNbc2VsZWN0ZWRJZF0gOiBudWxsO1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXY6IElPdXRlck5vZGUsIG5leHQ6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgLy8gICByZXR1cm4gaXNFcXVhbChwcmV2ID8gcHJldi5pZCA6IG51bGwsIG5leHQgPyBuZXh0LmlkIDogbnVsbClcbiAgICAgICAgLy8gfSlcbiAgICAgICk7XG5cbiAgICB0aGlzLmluaXRDb25maWd1cmF0aW9uKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVFeHBhbmRlZCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0ZWQoKTtcbiAgICB0aGlzLnN1YnNjcmliZVByZXZpb3VzbHlTZWxlY3RlZCgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJlbnRzTGlzdCgpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlJCxcbiAgICAgIHRoaXMubm9kZXMkXG4gICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoW2N1cnJlbnROb2RlLCBub2Rlc106IFtJT3V0ZXJOb2RlLCBJVHJlZU5vZGVzXSk6IElPdXRlck5vZGVbXSA9PiB7XG4gICAgICAgICAgaWYgKCFCb29sZWFuKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhcmVudHM6IElPdXRlck5vZGVbXSA9IGN1cnJlbnROb2RlLnBhcmVudHMubWFwKGlkID0+IG5vZGVzW2lkXSk7XG5cbiAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGdldENoaWxkcmVuKG5vZGVJZDogc3RyaW5nIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChzdGF0ZTogSVRyZWVOb2Rlcyk6IElPdXRlck5vZGVbXSA9PiB0aGlzLmdldE5vZGVzQnlQYXJlbnRJZChzdGF0ZSwgbm9kZUlkKSksXG4gICAgICAgIG1hcCgobm9kZXM6IElPdXRlck5vZGVbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBbLi4ubm9kZXNdLnNvcnQodGhpcy5zb3J0Tm9kZXMpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0UGF0aChwYXRoOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVMb2FkUGF0aEFjdGlvbih7dHJlZUlkOiB0aGlzLmNvbmZpZ3VyYXRpb24udHJlZUlkLCBpZHM6IHBhdGh9KSk7XG4gIH1cblxuICBwdWJsaWMgaXNFeHBhbmRlZChub2RlOiBJT3V0ZXJOb2RlKTogYm9vbGVhbiB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWQuaGFzKG5vZGUuaWQpO1xuICB9XG5cbiAgcHVibGljIGlzU2VsZWN0ZWQobm9kZTogSU91dGVyTm9kZSk6IGJvb2xlYW4ge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkID09PSBub2RlLmlkO1xuICB9XG5cbiAgcHVibGljIHdhc1ByZXZpb3VzbHlTZWxlY3RlZChub2RlSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByZXZpb3VzbHlTZWxlY3RlZCA9PT0gbm9kZUlkO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q29uZmlndXJhdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICBkaXNhYmxlTW92ZU5vZGVzOiBmYWxzZSxcbiAgICAgIGRyYWdab25lOiBudWxsLFxuICAgICAgZHJvcFpvbmU6IG51bGwsXG4gICAgICB0cmVlSWQ6ICd0cmVlJyxcbiAgICAgIHNob3dBZGRCdXR0b246IHRydWUsXG4gICAgICBpc0FuaW1hdGlvbjogZmFsc2UsXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHRDb25maWd1cmF0aW9uKSB7XG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9IGRlZmF1bHRDb25maWd1cmF0aW9uW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROb2Rlc0J5UGFyZW50SWQoc3RhdGU6IElUcmVlTm9kZXMsIGlkOiBzdHJpbmcgfCBudWxsKTogSU91dGVyTm9kZVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3RhdGUpXG4gICAgICAuZmlsdGVyKChrZXk6IHN0cmluZykgPT4gc3RhdGVba2V5XS5wYXJlbnRJZCA9PT0gaWQpXG4gICAgICAubWFwKChrZXk6IHN0cmluZykgPT4gc3RhdGVba2V5XSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnROb2RlcyhmaXJzdDogSU91dGVyTm9kZSwgc2Vjb25kOiBJT3V0ZXJOb2RlKTogbnVtYmVyIHtcbiAgICBpZiAoc2Vjb25kLmlkID09PSBORVdfTk9ERV9JRCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdC5uYW1lID4gc2Vjb25kLm5hbWUgPyAxIDogLTE7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUV4cGFuZGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KGV4cGFuZGVkTm9kZXNTZWxlY3Rvcih0aGlzLnRyZWVJZCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoZXhwYW5kZWQ6IHN0cmluZ1tdKSA9PiB0aGlzLmV4cGFuZGVkID0gbmV3IFNldChleHBhbmRlZCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zdG9yZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzZWxlY3Qoc2VsZWN0ZWROb2RlU2VsZWN0b3IodGhpcy50cmVlSWQpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHNlbGVjdGVkOiBzdHJpbmcpID0+IHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVQcmV2aW91c2x5U2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zdG9yZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzZWxlY3QocHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yKHRoaXMudHJlZUlkKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzZWxlY3RlZDogc3RyaW5nKSA9PiB0aGlzLnByZXZpb3VzbHlTZWxlY3RlZCA9IHNlbGVjdGVkKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==