/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UUID } from 'angular2-uuid';
import { Injectable } from '@angular/core';
import { concatMap, map } from 'rxjs/operators';
import { fromEvent, of } from 'rxjs';
/**
 * @record
 */
export function IFileDataProperties() { }
if (false) {
    /** @type {?} */
    IFileDataProperties.prototype.id;
    /** @type {?} */
    IFileDataProperties.prototype.folderId;
    /** @type {?} */
    IFileDataProperties.prototype.name;
    /** @type {?} */
    IFileDataProperties.prototype.size;
    /** @type {?} */
    IFileDataProperties.prototype.data;
    /** @type {?} */
    IFileDataProperties.prototype.type;
    /** @type {?|undefined} */
    IFileDataProperties.prototype.width;
    /** @type {?|undefined} */
    IFileDataProperties.prototype.height;
    /** @type {?|undefined} */
    IFileDataProperties.prototype.selected;
}
/**
 * @record
 */
export function IImageDimensions() { }
if (false) {
    /** @type {?} */
    IImageDimensions.prototype.width;
    /** @type {?} */
    IImageDimensions.prototype.height;
}
var ImageDataConverter = /** @class */ (function () {
    function ImageDataConverter() {
    }
    /**
     * @param {?} file
     * @param {?} folderId
     * @return {?}
     */
    ImageDataConverter.prototype.getProperties = /**
     * @param {?} file
     * @param {?} folderId
     * @return {?}
     */
    function (file, folderId) {
        var _this = this;
        /** @type {?} */
        var properties = {
            id: UUID.UUID(),
            folderId: folderId,
            name: file.name,
            size: file.size,
            type: file.type,
            data: ''
        };
        /** @type {?} */
        var reader = this.getBase64FromFile(file);
        return reader
            .pipe(concatMap(function (data) {
            properties.data = data;
            if (properties.type.indexOf('image') === 0) {
                return _this.getImageDimensions(data);
            }
            else {
                return of({ width: 0, height: 0 });
            }
        }), map(function (dimensions) {
            properties.width = dimensions.width;
            properties.height = dimensions.height;
            return properties;
        }));
    };
    /**
     * Create observable which return image as base64 data
     */
    /**
     * Create observable which return image as base64 data
     * @private
     * @param {?} file
     * @return {?}
     */
    ImageDataConverter.prototype.getBase64FromFile = /**
     * Create observable which return image as base64 data
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var reader = new FileReader();
        reader.readAsDataURL(file);
        return fromEvent(reader, 'load')
            .pipe(map(function () {
            return reader.result.toString();
        }));
    };
    /**
     * Create observable which return dimensions of the image
     */
    /**
     * Create observable which return dimensions of the image
     * @private
     * @param {?} data
     * @return {?}
     */
    ImageDataConverter.prototype.getImageDimensions = /**
     * Create observable which return dimensions of the image
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var image = new Image();
        image.src = data;
        image.style.display = 'none';
        /** @type {?} */
        var loadImage = fromEvent(image, 'load')
            .pipe(map(function () {
            return {
                width: image.naturalWidth,
                height: image.naturalHeight
            };
        }));
        document.body.appendChild(image);
        return loadImage;
    };
    ImageDataConverter.decorators = [
        { type: Injectable }
    ];
    return ImageDataConverter;
}());
export { ImageDataConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VEYXRhQ29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFNBQVMsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFFL0MseUNBVUM7OztJQVRDLGlDQUFvQjs7SUFDcEIsdUNBQWlCOztJQUNqQixtQ0FBYTs7SUFDYixtQ0FBYTs7SUFDYixtQ0FBYTs7SUFDYixtQ0FBYTs7SUFDYixvQ0FBZTs7SUFDZixxQ0FBZ0I7O0lBQ2hCLHVDQUFtQjs7Ozs7QUFHckIsc0NBR0M7OztJQUZDLGlDQUFjOztJQUNkLGtDQUFlOztBQUdqQjtJQUFBO0lBd0VBLENBQUM7Ozs7OztJQXRFUSwwQ0FBYTs7Ozs7SUFBcEIsVUFBcUIsSUFBVSxFQUFFLFFBQWdCO1FBQWpELGlCQThCQzs7WUE3Qk8sVUFBVSxHQUF3QjtZQUN0QyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxFQUFFO1NBQ1Q7O1lBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFFM0MsT0FBTyxNQUFNO2FBQ1YsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFDLElBQVk7WUFDckIsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFFdkIsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUNsQztRQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFDLFVBQTRCO1lBQy9CLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNwQyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFFdEMsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLDhDQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLElBQVU7O1lBQzVCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUMvQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRzNCLE9BQU8sU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7YUFDN0IsSUFBSSxDQUNILEdBQUcsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0ssK0NBQWtCOzs7Ozs7SUFBMUIsVUFBMkIsSUFBWTs7WUFDL0IsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFO1FBQ3pCLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7WUFFdkIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ3ZDLElBQUksQ0FDSCxHQUFHLENBQUM7WUFDRixPQUFPO2dCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsWUFBWTtnQkFDekIsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhO2FBQzVCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSDtRQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7O2dCQXZFRixVQUFVOztJQXdFWCx5QkFBQztDQUFBLEFBeEVELElBd0VDO1NBdkVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VVVJRH0gZnJvbSAnYW5ndWxhcjItdXVpZCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb25jYXRNYXAsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmlsZURhdGFQcm9wZXJ0aWVzIHtcbiAgaWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgZm9sZGVySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIGRhdGE6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlRGltZW5zaW9ucyB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VEYXRhQ29udmVydGVyIHtcbiAgcHVibGljIGdldFByb3BlcnRpZXMoZmlsZTogRmlsZSwgZm9sZGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SUZpbGVEYXRhUHJvcGVydGllcz4ge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IElGaWxlRGF0YVByb3BlcnRpZXMgPSB7XG4gICAgICBpZDogVVVJRC5VVUlEKCksXG4gICAgICBmb2xkZXJJZDogZm9sZGVySWQsXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBkYXRhOiAnJ1xuICAgIH07XG5cbiAgICBjb25zdCByZWFkZXIgPSB0aGlzLmdldEJhc2U2NEZyb21GaWxlKGZpbGUpO1xuXG4gICAgcmV0dXJuIHJlYWRlclxuICAgICAgLnBpcGUoXG4gICAgICAgIGNvbmNhdE1hcCgoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcHJvcGVydGllcy5kYXRhID0gZGF0YTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VEaW1lbnNpb25zKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKGRpbWVuc2lvbnM6IElJbWFnZURpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgICBwcm9wZXJ0aWVzLndpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICBwcm9wZXJ0aWVzLmhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBvYnNlcnZhYmxlIHdoaWNoIHJldHVybiBpbWFnZSBhcyBiYXNlNjQgZGF0YVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRCYXNlNjRGcm9tRmlsZShmaWxlOiBGaWxlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuXG5cbiAgICByZXR1cm4gZnJvbUV2ZW50KHJlYWRlciwgJ2xvYWQnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG9ic2VydmFibGUgd2hpY2ggcmV0dXJuIGRpbWVuc2lvbnMgb2YgdGhlIGltYWdlXG4gICAqL1xuICBwcml2YXRlIGdldEltYWdlRGltZW5zaW9ucyhkYXRhOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElJbWFnZURpbWVuc2lvbnM+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGRhdGE7XG4gICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnN0IGxvYWRJbWFnZSA9IGZyb21FdmVudChpbWFnZSwgJ2xvYWQnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBpbWFnZS5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGltYWdlLm5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgcmV0dXJuIGxvYWRJbWFnZTtcbiAgfVxufVxuIl19