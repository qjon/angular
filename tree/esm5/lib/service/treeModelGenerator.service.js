/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TreeModel } from '../models/TreeModel';
import { treeSelector } from '../store/treeReducer';
import { Store } from '@ngrx/store';
import { NodeDispatcherService } from './nodesDispatcher.service';
import { TreeMarkAsFullyLoadedAction, TreeRegisterAction, TreeSetConfigurationAction } from '../store/treeActions.service';
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
export { TreeModelGeneratorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeModelGeneratorService.prototype.nodeDispatcherService;
    /**
     * @type {?}
     * @private
     */
    TreeModelGeneratorService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZU1vZGVsR2VuZXJhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvdHJlZU1vZGVsR2VuZXJhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWxDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRWhFLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0Isa0JBQWtCLEVBQ2xCLDBCQUEwQixFQUMzQixNQUFNLDhCQUE4QixDQUFDO0FBRXRDO0lBRUUsbUNBQTJCLHFCQUE0QyxFQUM1QyxLQUF3QjtRQUR4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFVBQUssR0FBTCxLQUFLLENBQW1CO0lBQ25ELENBQUM7Ozs7OztJQUVNLG1EQUFlOzs7OztJQUF0QixVQUF1QixhQUE2QixFQUFFLEtBQTBCO1FBQTFCLHNCQUFBLEVBQUEsWUFBMEI7O1lBQ3hFLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTTs7WUFDN0IsYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFcEMsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUM7WUFDekMsTUFBTSxRQUFBO1lBQ04sTUFBTSxFQUFFLGFBQWE7WUFDckIsS0FBSyxPQUFBO1NBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxFQUFDLE1BQU0sUUFBQSxFQUFFLGFBQWEsZUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdFLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLENBQUMsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNoRTs7WUFFSyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0RSxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkE1QkYsVUFBVTs7OztnQkFSSCxxQkFBcUI7Z0JBRnJCLEtBQUs7O0lBdUNiLGdDQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1QlkseUJBQXlCOzs7Ozs7SUFDakIsMERBQW9EOzs7OztJQUNwRCwwQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge3RyZWVTZWxlY3Rvcn0gZnJvbSAnLi4vc3RvcmUvdHJlZVJlZHVjZXInO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICcuLi9zdG9yZS9JVHJlZVN0YXRlJztcbmltcG9ydCB7Tm9kZURpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7XG4gIFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvbixcbiAgVHJlZVJlZ2lzdGVyQWN0aW9uLFxuICBUcmVlU2V0Q29uZmlndXJhdGlvbkFjdGlvblxufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBub2RlRGlzcGF0Y2hlclNlcnZpY2U6IE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+KSB7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVHJlZU1vZGVsKGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLCBub2RlczogSU91dGVyTm9kZVtdID0gbnVsbCk6IFRyZWVNb2RlbCB7XG4gICAgY29uc3QgdHJlZUlkID0gY29uZmlndXJhdGlvbi50cmVlSWQ7XG4gICAgY29uc3QgaXNGdWxseUxvYWRlZCA9IEJvb2xlYW4obm9kZXMpO1xuXG4gICAgLy8gcmVnaXN0ZXIgbmV3IHRyZWUgaW4gc3RvcmVcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlUmVnaXN0ZXJBY3Rpb24oe1xuICAgICAgdHJlZUlkLFxuICAgICAgc2lsZW50OiBpc0Z1bGx5TG9hZGVkLFxuICAgICAgbm9kZXNcbiAgICB9KSk7XG5cbiAgICAvLyBpbml0IHRyZWUgY29uZmlndXJhdGlvblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uKHt0cmVlSWQsIGNvbmZpZ3VyYXRpb259KSk7XG5cbiAgICBpZiAoQm9vbGVhbihub2RlcykpIHtcbiAgICAgIHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLmdldCh0cmVlSWQpLnNldEFsbE5vZGVzKG5vZGVzKTtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvbih7dHJlZUlkfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvbGRlcnMkID0gdGhpcy5zdG9yZS5zZWxlY3QodHJlZVNlbGVjdG9yKGNvbmZpZ3VyYXRpb24udHJlZUlkKSk7XG5cbiAgICByZXR1cm4gbmV3IFRyZWVNb2RlbCh0aGlzLnN0b3JlLCBmb2xkZXJzJCwgY29uZmlndXJhdGlvbiwgaXNGdWxseUxvYWRlZCk7XG4gIH1cbn1cbiJdfQ==