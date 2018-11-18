/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TreeModelGeneratorService } from './treeModelGenerator.service';
import { NodeDispatcherService } from './nodesDispatcher.service';
export class TreeInitializerService {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeInitializerService.prototype.treeModelGeneratorService;
    /**
     * @type {?}
     * @private
     */
    TreeInitializerService.prototype.nodeDispatcherService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9pbml0aWFsaXplci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBT2hFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQTJCLHlCQUFvRCxFQUNwRCxxQkFBNEM7UUFENUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBRXZFLENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsaUJBQWlDLEVBQ2pDLE9BQXFCLEVBQ3JCLFdBQTBCO1FBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlFLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7WUFiRixVQUFVOzs7O1lBUEgseUJBQXlCO1lBQ3pCLHFCQUFxQjs7Ozs7OztJQVFSLDJEQUE0RDs7Ozs7SUFDNUQsdURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZX0gZnJvbSAnLi90cmVlTW9kZWxHZW5lcmF0b3Iuc2VydmljZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9ub2Rlc0Rpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge0lOb2RlU2VydmljZX0gZnJvbSAnLi9ub2RlLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlTW9kZWx9IGZyb20gJy4uL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZTogVHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UpIHtcblxuICB9XG5cbiAgcHVibGljIGluaXQodHJlZUNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICB0cmVlQXBpOiBJTm9kZVNlcnZpY2UsXG4gICAgICAgICAgICAgIGxvYWRlZE5vZGVzPzogSU91dGVyTm9kZVtdKTogVHJlZU1vZGVsIHtcbiAgICB0aGlzLm5vZGVEaXNwYXRjaGVyU2VydmljZS5yZWdpc3RlclNlcnZpY2UodHJlZUNvbmZpZ3VyYXRpb24udHJlZUlkLCB0cmVlQXBpKTtcblxuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2UuY3JlYXRlVHJlZU1vZGVsKHRyZWVDb25maWd1cmF0aW9uLCBsb2FkZWROb2Rlcyk7XG4gIH1cbn1cbiJdfQ==