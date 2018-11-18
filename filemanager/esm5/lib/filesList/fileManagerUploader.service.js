/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { ExtendedFileUploader } from '../services/extendedFileUplaoder.service';
import { FilemanagerNotifcations } from '../services/FilemanagerNotifcations';
var FileManagerUploader = /** @class */ (function () {
    function FileManagerUploader(configuration, filemanagerNotification) {
        /** @type {?} */
        var options = {
            allowedMimeType: configuration.mimeTypes,
            url: configuration.urls.filesUrl,
            maxFileSize: configuration.maxFileSize
        };
        this.uploader = new ExtendedFileUploader(options, filemanagerNotification);
    }
    /**
     * @return {?}
     */
    FileManagerUploader.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.uploader.authToken = null;
        this.uploader.setOptions(this.getDefaultOptions());
    };
    /**
     * @return {?}
     */
    FileManagerUploader.prototype.getDefaultOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        options['removeAfterUpload'] = true;
        options['autoUpload'] = true;
        options['method'] = 'POST';
        return options;
    };
    /**
     * @param {?} token
     * @return {?}
     */
    FileManagerUploader.prototype.setAuthorizationToken = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        this.uploader.authToken = token;
    };
    /**
     * @param {?} directoryId
     * @return {?}
     */
    FileManagerUploader.prototype.setDirectoryId = /**
     * @param {?} directoryId
     * @return {?}
     */
    function (directoryId) {
        /** @type {?} */
        var options = this.getDefaultOptions();
        options['headers'] = [{ name: 'folderId', value: directoryId.toString() }];
        this.uploader.setOptions(options);
        return this;
    };
    FileManagerUploader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerUploader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] },
        { type: FilemanagerNotifcations }
    ]; };
    return FileManagerUploader;
}());
export { FileManagerUploader };
if (false) {
    /** @type {?} */
    FileManagerUploader.prototype.uploader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvZmlsZXNMaXN0L2ZpbGVNYW5hZ2VyVXBsb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFOUUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFHNUU7SUFJRSw2QkFBdUQsYUFBd0MsRUFDNUUsdUJBQWdEOztZQUMzRCxPQUFPLEdBQXdCO1lBQ25DLGVBQWUsRUFBRSxhQUFhLENBQUMsU0FBUztZQUN4QyxHQUFHLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2hDLFdBQVcsRUFBRSxhQUFhLENBQUMsV0FBVztTQUN2QztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7O0lBRU0sbUNBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVNLCtDQUFpQjs7O0lBQXhCOztZQUNRLE9BQU8sR0FBRyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7UUFFM0IsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTSxtREFBcUI7Ozs7SUFBNUIsVUFBNkIsS0FBYTtRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSw0Q0FBYzs7OztJQUFyQixVQUFzQixXQUE0Qjs7WUFDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUV4QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkF6Q0YsVUFBVTs7OztnREFJVyxNQUFNLFNBQUMsMEJBQTBCO2dCQVAvQyx1QkFBdUI7O0lBNkMvQiwwQkFBQztDQUFBLEFBMUNELElBMENDO1NBekNZLG1CQUFtQjs7O0lBQzlCLHVDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXh0ZW5kZWRGaWxlVXBsb2FkZXJ9IGZyb20gJy4uL3NlcnZpY2VzL2V4dGVuZGVkRmlsZVVwbGFvZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuLi9jb25maWd1cmF0aW9uL0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9uc30gZnJvbSAnLi4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtGaWxlVXBsb2FkZXJPcHRpb25zfSBmcm9tICduZzItZmlsZS11cGxvYWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJVcGxvYWRlciB7XG4gIHB1YmxpYyB1cGxvYWRlcjogRXh0ZW5kZWRGaWxlVXBsb2FkZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbicpIGNvbmZpZ3VyYXRpb246IElGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBmaWxlbWFuYWdlck5vdGlmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBjb25zdCBvcHRpb25zOiBGaWxlVXBsb2FkZXJPcHRpb25zID0ge1xuICAgICAgYWxsb3dlZE1pbWVUeXBlOiBjb25maWd1cmF0aW9uLm1pbWVUeXBlcyxcbiAgICAgIHVybDogY29uZmlndXJhdGlvbi51cmxzLmZpbGVzVXJsLFxuICAgICAgbWF4RmlsZVNpemU6IGNvbmZpZ3VyYXRpb24ubWF4RmlsZVNpemVcbiAgICB9O1xuXG4gICAgdGhpcy51cGxvYWRlciA9IG5ldyBFeHRlbmRlZEZpbGVVcGxvYWRlcihvcHRpb25zLCBmaWxlbWFuYWdlck5vdGlmaWNhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy51cGxvYWRlci5hdXRoVG9rZW4gPSBudWxsO1xuICAgIHRoaXMudXBsb2FkZXIuc2V0T3B0aW9ucyh0aGlzLmdldERlZmF1bHRPcHRpb25zKCkpO1xuICB9XG5cbiAgcHVibGljIGdldERlZmF1bHRPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgICBvcHRpb25zWydyZW1vdmVBZnRlclVwbG9hZCddID0gdHJ1ZTtcbiAgICBvcHRpb25zWydhdXRvVXBsb2FkJ10gPSB0cnVlO1xuICAgIG9wdGlvbnNbJ21ldGhvZCddID0gJ1BPU1QnO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgc2V0QXV0aG9yaXphdGlvblRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwbG9hZGVyLmF1dGhUb2tlbiA9IHRva2VuO1xuICB9XG5cbiAgcHVibGljIHNldERpcmVjdG9yeUlkKGRpcmVjdG9yeUlkOiBzdHJpbmcgfCBudW1iZXIpOiBGaWxlTWFuYWdlclVwbG9hZGVyIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXREZWZhdWx0T3B0aW9ucygpO1xuXG4gICAgb3B0aW9uc1snaGVhZGVycyddID0gW3tuYW1lOiAnZm9sZGVySWQnLCB2YWx1ZTogZGlyZWN0b3J5SWQudG9TdHJpbmcoKX1dO1xuXG4gICAgdGhpcy51cGxvYWRlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==