/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { NodeService } from '@rign/angular2-tree';
import { HttpClient } from '@angular/common/http';
export class TreeService extends NodeService {
    /**
     * @param {?} http
     * @param {?} configuration
     */
    constructor(http, configuration) {
        super(http);
        this.http = http;
        this.apiConfig = {
            addUrl: configuration.urls.foldersUrl,
            getUrl: configuration.urls.foldersUrl,
            updateUrl: configuration.urls.foldersUrl,
            removeUrl: configuration.urls.foldersUrl,
            moveUrl: configuration.urls.folderMoveUrl
        };
    }
}
TreeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TreeService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TreeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvY29uZmlndXJhdGlvbi90cmVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHaEQsTUFBTSxPQUFPLFdBQVksU0FBUSxXQUFXOzs7OztJQUMxQyxZQUE2QixJQUFnQixFQUFzQyxhQUF3QztRQUN6SCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFEZSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBRzNDLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixNQUFNLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3JDLE1BQU0sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDckMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUN4QyxTQUFTLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3hDLE9BQU8sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWE7U0FDMUMsQ0FBQztJQUNKLENBQUM7OztZQVpGLFVBQVU7Ozs7WUFGSCxVQUFVOzRDQUlnQyxNQUFNLFNBQUMsMEJBQTBCOzs7Ozs7O0lBQTlELDJCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tm9kZVNlcnZpY2V9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlU2VydmljZSBleHRlbmRzIE5vZGVTZXJ2aWNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KCdmaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24nKSBjb25maWd1cmF0aW9uOiBJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uKSB7XG4gICAgc3VwZXIoaHR0cCk7XG5cbiAgICB0aGlzLmFwaUNvbmZpZyA9IHtcbiAgICAgIGFkZFVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlcnNVcmwsXG4gICAgICBnZXRVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJzVXJsLFxuICAgICAgdXBkYXRlVXJsOiBjb25maWd1cmF0aW9uLnVybHMuZm9sZGVyc1VybCxcbiAgICAgIHJlbW92ZVVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlcnNVcmwsXG4gICAgICBtb3ZlVXJsOiBjb25maWd1cmF0aW9uLnVybHMuZm9sZGVyTW92ZVVybFxuICAgIH07XG4gIH1cbn1cbiJdfQ==