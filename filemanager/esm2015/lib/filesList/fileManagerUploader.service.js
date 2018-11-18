/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { ExtendedFileUploader } from '../services/extendedFileUplaoder.service';
import { FilemanagerNotifcations } from '../services/FilemanagerNotifcations';
export class FileManagerUploader {
    /**
     * @param {?} configuration
     * @param {?} filemanagerNotification
     */
    constructor(configuration, filemanagerNotification) {
        /** @type {?} */
        const options = {
            allowedMimeType: configuration.mimeTypes,
            url: configuration.urls.filesUrl,
            maxFileSize: configuration.maxFileSize
        };
        this.uploader = new ExtendedFileUploader(options, filemanagerNotification);
    }
    /**
     * @return {?}
     */
    clear() {
        this.uploader.authToken = null;
        this.uploader.setOptions(this.getDefaultOptions());
    }
    /**
     * @return {?}
     */
    getDefaultOptions() {
        /** @type {?} */
        const options = {};
        options['removeAfterUpload'] = true;
        options['autoUpload'] = true;
        options['method'] = 'POST';
        return options;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    setAuthorizationToken(token) {
        this.uploader.authToken = token;
    }
    /**
     * @param {?} directoryId
     * @return {?}
     */
    setDirectoryId(directoryId) {
        /** @type {?} */
        const options = this.getDefaultOptions();
        options['headers'] = [{ name: 'folderId', value: directoryId.toString() }];
        this.uploader.setOptions(options);
        return this;
    }
}
FileManagerUploader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerUploader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] },
    { type: FilemanagerNotifcations }
];
if (false) {
    /** @type {?} */
    FileManagerUploader.prototype.uploader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvZmlsZXNMaXN0L2ZpbGVNYW5hZ2VyVXBsb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFOUUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFJNUUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFHOUIsWUFBdUQsYUFBd0MsRUFDNUUsdUJBQWdEOztjQUMzRCxPQUFPLEdBQXdCO1lBQ25DLGVBQWUsRUFBRSxhQUFhLENBQUMsU0FBUztZQUN4QyxHQUFHLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2hDLFdBQVcsRUFBRSxhQUFhLENBQUMsV0FBVztTQUN2QztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7O0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFTSxpQkFBaUI7O2NBQ2hCLE9BQU8sR0FBRyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7UUFFM0IsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxXQUE0Qjs7Y0FDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUV4QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUF6Q0YsVUFBVTs7Ozs0Q0FJVyxNQUFNLFNBQUMsMEJBQTBCO1lBUC9DLHVCQUF1Qjs7OztJQUs3Qix1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0V4dGVuZGVkRmlsZVVwbG9hZGVyfSBmcm9tICcuLi9zZXJ2aWNlcy9leHRlbmRlZEZpbGVVcGxhb2Rlci5zZXJ2aWNlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi9JRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJztcbmltcG9ydCB7RmlsZW1hbmFnZXJOb3RpZmNhdGlvbnN9IGZyb20gJy4uL3NlcnZpY2VzL0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zJztcbmltcG9ydCB7RmlsZVVwbG9hZGVyT3B0aW9uc30gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyVXBsb2FkZXIge1xuICBwdWJsaWMgdXBsb2FkZXI6IEV4dGVuZGVkRmlsZVVwbG9hZGVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihASW5qZWN0KCdmaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24nKSBjb25maWd1cmF0aW9uOiBJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgZmlsZW1hbmFnZXJOb3RpZmljYXRpb246IEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zKSB7XG4gICAgY29uc3Qgb3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucyA9IHtcbiAgICAgIGFsbG93ZWRNaW1lVHlwZTogY29uZmlndXJhdGlvbi5taW1lVHlwZXMsXG4gICAgICB1cmw6IGNvbmZpZ3VyYXRpb24udXJscy5maWxlc1VybCxcbiAgICAgIG1heEZpbGVTaXplOiBjb25maWd1cmF0aW9uLm1heEZpbGVTaXplXG4gICAgfTtcblxuICAgIHRoaXMudXBsb2FkZXIgPSBuZXcgRXh0ZW5kZWRGaWxlVXBsb2FkZXIob3B0aW9ucywgZmlsZW1hbmFnZXJOb3RpZmljYXRpb24pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMudXBsb2FkZXIuYXV0aFRva2VuID0gbnVsbDtcbiAgICB0aGlzLnVwbG9hZGVyLnNldE9wdGlvbnModGhpcy5nZXREZWZhdWx0T3B0aW9ucygpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgb3B0aW9uc1sncmVtb3ZlQWZ0ZXJVcGxvYWQnXSA9IHRydWU7XG4gICAgb3B0aW9uc1snYXV0b1VwbG9hZCddID0gdHJ1ZTtcbiAgICBvcHRpb25zWydtZXRob2QnXSA9ICdQT1NUJztcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcHVibGljIHNldEF1dGhvcml6YXRpb25Ub2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy51cGxvYWRlci5hdXRoVG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXREaXJlY3RvcnlJZChkaXJlY3RvcnlJZDogc3RyaW5nIHwgbnVtYmVyKTogRmlsZU1hbmFnZXJVcGxvYWRlciB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RGVmYXVsdE9wdGlvbnMoKTtcblxuICAgIG9wdGlvbnNbJ2hlYWRlcnMnXSA9IFt7bmFtZTogJ2ZvbGRlcklkJywgdmFsdWU6IGRpcmVjdG9yeUlkLnRvU3RyaW5nKCl9XTtcblxuICAgIHRoaXMudXBsb2FkZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=