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
export class TreeModelGeneratorService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZU1vZGVsR2VuZXJhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvdHJlZU1vZGVsR2VuZXJhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWxDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRWhFLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0Isa0JBQWtCLEVBQ2xCLDBCQUEwQixFQUMzQixNQUFNLDhCQUE4QixDQUFDO0FBR3RDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBQ3BDLFlBQTJCLHFCQUE0QyxFQUM1QyxLQUF3QjtRQUR4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFVBQUssR0FBTCxLQUFLLENBQW1CO0lBQ25ELENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxhQUE2QixFQUFFLFFBQXNCLElBQUk7O2NBQ3hFLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTTs7Y0FDN0IsYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFcEMsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUM7WUFDekMsTUFBTTtZQUNOLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLEtBQUs7U0FDTixDQUFDLENBQUMsQ0FBQztRQUVKLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hFOztjQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRFLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzNFLENBQUM7OztZQTVCRixVQUFVOzs7O1lBUkgscUJBQXFCO1lBRnJCLEtBQUs7Ozs7Ozs7SUFZUSwwREFBb0Q7Ozs7O0lBQ3BELDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lDb25maWd1cmF0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb25maWd1cmF0aW9uJztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuLi9tb2RlbHMvVHJlZU1vZGVsJztcbmltcG9ydCB7dHJlZVNlbGVjdG9yfSBmcm9tICcuLi9zdG9yZS90cmVlUmVkdWNlcic7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lUcmVlU3RhdGV9IGZyb20gJy4uL3N0b3JlL0lUcmVlU3RhdGUnO1xuaW1wb3J0IHtOb2RlRGlzcGF0Y2hlclNlcnZpY2V9IGZyb20gJy4vbm9kZXNEaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtcbiAgVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uLFxuICBUcmVlUmVnaXN0ZXJBY3Rpb24sXG4gIFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uXG59IGZyb20gJy4uL3N0b3JlL3RyZWVBY3Rpb25zLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vZGVEaXNwYXRjaGVyU2VydmljZTogTm9kZURpc3BhdGNoZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4pIHtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUcmVlTW9kZWwoY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24sIG5vZGVzOiBJT3V0ZXJOb2RlW10gPSBudWxsKTogVHJlZU1vZGVsIHtcbiAgICBjb25zdCB0cmVlSWQgPSBjb25maWd1cmF0aW9uLnRyZWVJZDtcbiAgICBjb25zdCBpc0Z1bGx5TG9hZGVkID0gQm9vbGVhbihub2Rlcyk7XG5cbiAgICAvLyByZWdpc3RlciBuZXcgdHJlZSBpbiBzdG9yZVxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVSZWdpc3RlckFjdGlvbih7XG4gICAgICB0cmVlSWQsXG4gICAgICBzaWxlbnQ6IGlzRnVsbHlMb2FkZWQsXG4gICAgICBub2Rlc1xuICAgIH0pKTtcblxuICAgIC8vIGluaXQgdHJlZSBjb25maWd1cmF0aW9uXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb24oe3RyZWVJZCwgY29uZmlndXJhdGlvbn0pKTtcblxuICAgIGlmIChCb29sZWFuKG5vZGVzKSkge1xuICAgICAgdGhpcy5ub2RlRGlzcGF0Y2hlclNlcnZpY2UuZ2V0KHRyZWVJZCkuc2V0QWxsTm9kZXMobm9kZXMpO1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uKHt0cmVlSWR9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9sZGVycyQgPSB0aGlzLnN0b3JlLnNlbGVjdCh0cmVlU2VsZWN0b3IoY29uZmlndXJhdGlvbi50cmVlSWQpKTtcblxuICAgIHJldHVybiBuZXcgVHJlZU1vZGVsKHRoaXMuc3RvcmUsIGZvbGRlcnMkLCBjb25maWd1cmF0aW9uLCBpc0Z1bGx5TG9hZGVkKTtcbiAgfVxufVxuIl19