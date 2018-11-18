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
export class ImageDataConverter {
    /**
     * @param {?} file
     * @param {?} folderId
     * @return {?}
     */
    getProperties(file, folderId) {
        /** @type {?} */
        const properties = {
            id: UUID.UUID(),
            folderId: folderId,
            name: file.name,
            size: file.size,
            type: file.type,
            data: ''
        };
        /** @type {?} */
        const reader = this.getBase64FromFile(file);
        return reader
            .pipe(concatMap((data) => {
            properties.data = data;
            if (properties.type.indexOf('image') === 0) {
                return this.getImageDimensions(data);
            }
            else {
                return of({ width: 0, height: 0 });
            }
        }), map((dimensions) => {
            properties.width = dimensions.width;
            properties.height = dimensions.height;
            return properties;
        }));
    }
    /**
     * Create observable which return image as base64 data
     * @private
     * @param {?} file
     * @return {?}
     */
    getBase64FromFile(file) {
        /** @type {?} */
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return fromEvent(reader, 'load')
            .pipe(map(() => {
            return reader.result.toString();
        }));
    }
    /**
     * Create observable which return dimensions of the image
     * @private
     * @param {?} data
     * @return {?}
     */
    getImageDimensions(data) {
        /** @type {?} */
        const image = new Image();
        image.src = data;
        image.style.display = 'none';
        /** @type {?} */
        const loadImage = fromEvent(image, 'load')
            .pipe(map(() => {
            return {
                width: image.naturalWidth,
                height: image.naturalHeight
            };
        }));
        document.body.appendChild(image);
        return loadImage;
    }
}
ImageDataConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VEYXRhQ29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFNBQVMsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFFL0MseUNBVUM7OztJQVRDLGlDQUFvQjs7SUFDcEIsdUNBQWlCOztJQUNqQixtQ0FBYTs7SUFDYixtQ0FBYTs7SUFDYixtQ0FBYTs7SUFDYixtQ0FBYTs7SUFDYixvQ0FBZTs7SUFDZixxQ0FBZ0I7O0lBQ2hCLHVDQUFtQjs7Ozs7QUFHckIsc0NBR0M7OztJQUZDLGlDQUFjOztJQUNkLGtDQUFlOztBQUlqQixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFDdEIsYUFBYSxDQUFDLElBQVUsRUFBRSxRQUFnQjs7Y0FDekMsVUFBVSxHQUF3QjtZQUN0QyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxFQUFFO1NBQ1Q7O2NBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFFM0MsT0FBTyxNQUFNO2FBQ1YsSUFBSSxDQUNILFNBQVMsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxVQUE0QixFQUFFLEVBQUU7WUFDbkMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3BDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUV0QyxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUtPLGlCQUFpQixDQUFDLElBQVU7O2NBQzVCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUMvQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRzNCLE9BQU8sU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7YUFDN0IsSUFBSSxDQUNILEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFLTyxrQkFBa0IsQ0FBQyxJQUFZOztjQUMvQixLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDekIsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztjQUV2QixTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7YUFDdkMsSUFBSSxDQUNILEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPO2dCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsWUFBWTtnQkFDekIsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhO2FBQzVCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSDtRQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7OztZQXZFRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVVUlEfSBmcm9tICdhbmd1bGFyMi11dWlkJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbmNhdE1hcCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2Zyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlRGF0YVByb3BlcnRpZXMge1xuICBpZDogc3RyaW5nIHwgbnVtYmVyO1xuICBmb2xkZXJJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgZGF0YTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEaW1lbnNpb25zIHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZURhdGFDb252ZXJ0ZXIge1xuICBwdWJsaWMgZ2V0UHJvcGVydGllcyhmaWxlOiBGaWxlLCBmb2xkZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJRmlsZURhdGFQcm9wZXJ0aWVzPiB7XG4gICAgY29uc3QgcHJvcGVydGllczogSUZpbGVEYXRhUHJvcGVydGllcyA9IHtcbiAgICAgIGlkOiBVVUlELlVVSUQoKSxcbiAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGRhdGE6ICcnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlYWRlciA9IHRoaXMuZ2V0QmFzZTY0RnJvbUZpbGUoZmlsZSk7XG5cbiAgICByZXR1cm4gcmVhZGVyXG4gICAgICAucGlwZShcbiAgICAgICAgY29uY2F0TWFwKChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBwcm9wZXJ0aWVzLmRhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMudHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZURpbWVuc2lvbnMoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZih7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoZGltZW5zaW9uczogSUltYWdlRGltZW5zaW9ucykgPT4ge1xuICAgICAgICAgIHByb3BlcnRpZXMud2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgICAgIHByb3BlcnRpZXMuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG9ic2VydmFibGUgd2hpY2ggcmV0dXJuIGltYWdlIGFzIGJhc2U2NCBkYXRhXG4gICAqL1xuICBwcml2YXRlIGdldEJhc2U2NEZyb21GaWxlKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cblxuICAgIHJldHVybiBmcm9tRXZlbnQocmVhZGVyLCAnbG9hZCcpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVhZGVyLnJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb2JzZXJ2YWJsZSB3aGljaCByZXR1cm4gZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0SW1hZ2VEaW1lbnNpb25zKGRhdGE6IHN0cmluZyk6IE9ic2VydmFibGU8SUltYWdlRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gZGF0YTtcbiAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgbG9hZEltYWdlID0gZnJvbUV2ZW50KGltYWdlLCAnbG9hZCcpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGltYWdlLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICByZXR1cm4gbG9hZEltYWdlO1xuICB9XG59XG4iXX0=