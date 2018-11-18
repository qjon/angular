/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { NodeService } from '@rign/angular2-tree';
import { HttpClient } from '@angular/common/http';
var TreeService = /** @class */ (function (_super) {
    tslib_1.__extends(TreeService, _super);
    function TreeService(http, configuration) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.apiConfig = {
            addUrl: configuration.urls.foldersUrl,
            getUrl: configuration.urls.foldersUrl,
            updateUrl: configuration.urls.foldersUrl,
            removeUrl: configuration.urls.foldersUrl,
            moveUrl: configuration.urls.folderMoveUrl
        };
        return _this;
    }
    TreeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TreeService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] }
    ]; };
    return TreeService;
}(NodeService));
export { TreeService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TreeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvY29uZmlndXJhdGlvbi90cmVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhEO0lBQ2lDLHVDQUFXO0lBQzFDLHFCQUE2QixJQUFnQixFQUFzQyxhQUF3QztRQUEzSCxZQUNFLGtCQUFNLElBQUksQ0FBQyxTQVNaO1FBVjRCLFVBQUksR0FBSixJQUFJLENBQVk7UUFHM0MsS0FBSSxDQUFDLFNBQVMsR0FBRztZQUNmLE1BQU0sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDckMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNyQyxTQUFTLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3hDLFNBQVMsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDeEMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYTtTQUMxQyxDQUFDOztJQUNKLENBQUM7O2dCQVpGLFVBQVU7Ozs7Z0JBRkgsVUFBVTtnREFJZ0MsTUFBTSxTQUFDLDBCQUEwQjs7SUFXbkYsa0JBQUM7Q0FBQSxBQWJELENBQ2lDLFdBQVcsR0FZM0M7U0FaWSxXQUFXOzs7Ozs7SUFDSCwyQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05vZGVTZXJ2aWNlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9JRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZVNlcnZpY2UgZXh0ZW5kcyBOb2RlU2VydmljZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIHN1cGVyKGh0dHApO1xuXG4gICAgdGhpcy5hcGlDb25maWcgPSB7XG4gICAgICBhZGRVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJzVXJsLFxuICAgICAgZ2V0VXJsOiBjb25maWd1cmF0aW9uLnVybHMuZm9sZGVyc1VybCxcbiAgICAgIHVwZGF0ZVVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlcnNVcmwsXG4gICAgICByZW1vdmVVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJzVXJsLFxuICAgICAgbW92ZVVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlck1vdmVVcmxcbiAgICB9O1xuICB9XG59XG4iXX0=