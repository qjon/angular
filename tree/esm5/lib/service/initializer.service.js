/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TreeModelGeneratorService } from './treeModelGenerator.service';
import { NodeDispatcherService } from './nodesDispatcher.service';
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
export { TreeInitializerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9pbml0aWFsaXplci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBTWhFO0lBRUUsZ0NBQTJCLHlCQUFvRCxFQUNwRCxxQkFBNEM7UUFENUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBRXZFLENBQUM7Ozs7Ozs7SUFFTSxxQ0FBSTs7Ozs7O0lBQVgsVUFBWSxpQkFBaUMsRUFDakMsT0FBcUIsRUFDckIsV0FBMEI7UUFDcEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFOUUsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dCQWJGLFVBQVU7Ozs7Z0JBUEgseUJBQXlCO2dCQUN6QixxQkFBcUI7O0lBb0I3Qiw2QkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLHNCQUFzQjs7Ozs7O0lBQ2QsMkRBQTREOzs7OztJQUM1RCx1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tICcuL3RyZWVNb2RlbEdlbmVyYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7Tm9kZURpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7SU5vZGVTZXJ2aWNlfSBmcm9tICcuL25vZGUuc2VydmljZSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0lDb25maWd1cmF0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb25maWd1cmF0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVJbml0aWFsaXplclNlcnZpY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlOiBUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBub2RlRGlzcGF0Y2hlclNlcnZpY2U6IE5vZGVEaXNwYXRjaGVyU2VydmljZSkge1xuXG4gIH1cblxuICBwdWJsaWMgaW5pdCh0cmVlQ29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgIHRyZWVBcGk6IElOb2RlU2VydmljZSxcbiAgICAgICAgICAgICAgbG9hZGVkTm9kZXM/OiBJT3V0ZXJOb2RlW10pOiBUcmVlTW9kZWwge1xuICAgIHRoaXMubm9kZURpc3BhdGNoZXJTZXJ2aWNlLnJlZ2lzdGVyU2VydmljZSh0cmVlQ29uZmlndXJhdGlvbi50cmVlSWQsIHRyZWVBcGkpO1xuXG4gICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsR2VuZXJhdG9yU2VydmljZS5jcmVhdGVUcmVlTW9kZWwodHJlZUNvbmZpZ3VyYXRpb24sIGxvYWRlZE5vZGVzKTtcbiAgfVxufVxuIl19