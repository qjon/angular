/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FileUploader } from 'ng2-file-upload';
import { ImageDataConverter } from './imageDataConverter.service';
export class ExtendedFileUploader extends FileUploader {
    /**
     * @param {?} options
     * @param {?} filemanagerNotification
     */
    constructor(options, filemanagerNotification) {
        super(options);
        this.filemanagerNotification = filemanagerNotification;
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter, options) {
        /** @type {?} */
        const notification = {
            type: 'alert',
            title: 'Add file to queue',
            message: `File not add to queue`
        };
        if (filter.name === 'fileSize') {
            notification.message = `File size is too large - max size  is ${options.maxFileSize / 1024} KB`;
        }
        else {
            notification.message = `File mime type "${item.type}" is not allowed`;
        }
        this.filemanagerNotification.sendNotification(notification);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        if (this.options.url) {
            super.uploadItem(value);
        }
        else {
            /** @type {?} */
            const imageDataConverter = new ImageDataConverter();
            this._onProgressItem(value, 0);
            if (this.isUploading) {
                return;
            }
            this.isUploading = true;
            /** @type {?} */
            const header = this.options.headers.find((object) => object.name === 'folderId');
            this._onProgressItem(value, 50);
            imageDataConverter.getProperties(value._file, header.value)
                .subscribe((file) => {
                this.isUploading = false;
                this._onProgressItem(value, 100);
                this._onCompleteItem(value, JSON.stringify(file), 200, {});
            });
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExtendedFileUploader.prototype.filemanagerNotification;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5kZWRGaWxlVXBsYW9kZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4dGVuZGVkRmlsZVVwbGFvZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVyxZQUFZLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFDNUUsT0FBTyxFQUFzQixrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBSXJGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxZQUFZOzs7OztJQUVwRCxZQUFtQixPQUE0QixFQUFVLHVCQUFnRDtRQUN2RyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFEd0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUV6RyxDQUFDOzs7Ozs7O0lBRU0sc0JBQXNCLENBQUMsSUFBb0IsRUFBRSxNQUFXLEVBQUUsT0FBNEI7O2NBQ3JGLFlBQVksR0FBa0I7WUFDbEMsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsbUJBQW1CO1lBQzFCLE9BQU8sRUFBRSx1QkFBdUI7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLFlBQVksQ0FBQyxPQUFPLEdBQUcseUNBQXlDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUM7U0FDakc7YUFBTTtZQUNMLFlBQVksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNwQixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO2FBQU07O2tCQUNDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7a0JBRWxCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO1lBRXJGLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ3hELFNBQVMsQ0FBQyxDQUFDLElBQXlCLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBRXpCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUE1Q2tELHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZUl0ZW0sIEZpbGVVcGxvYWRlciwgRmlsZVVwbG9hZGVyT3B0aW9uc30gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcbmltcG9ydCB7SUZpbGVEYXRhUHJvcGVydGllcywgSW1hZ2VEYXRhQ29udmVydGVyfSBmcm9tICcuL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMsIElOb3RpZmljYXRpb259IGZyb20gJy4vRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtGaWxlTGlrZU9iamVjdH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkL2ZpbGUtbGlrZS1vYmplY3QuY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRGaWxlVXBsb2FkZXIgZXh0ZW5kcyBGaWxlVXBsb2FkZXIge1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBGaWxlVXBsb2FkZXJPcHRpb25zLCBwcml2YXRlIGZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uOiBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIG9uV2hlbkFkZGluZ0ZpbGVGYWlsZWQoaXRlbTogRmlsZUxpa2VPYmplY3QsIGZpbHRlcjogYW55LCBvcHRpb25zOiBGaWxlVXBsb2FkZXJPcHRpb25zKSB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uID0ge1xuICAgICAgdHlwZTogJ2FsZXJ0JyxcbiAgICAgIHRpdGxlOiAnQWRkIGZpbGUgdG8gcXVldWUnLFxuICAgICAgbWVzc2FnZTogYEZpbGUgbm90IGFkZCB0byBxdWV1ZWBcbiAgICB9O1xuXG4gICAgaWYgKGZpbHRlci5uYW1lID09PSAnZmlsZVNpemUnKSB7XG4gICAgICBub3RpZmljYXRpb24ubWVzc2FnZSA9IGBGaWxlIHNpemUgaXMgdG9vIGxhcmdlIC0gbWF4IHNpemUgIGlzICR7b3B0aW9ucy5tYXhGaWxlU2l6ZSAvIDEwMjR9IEtCYDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPSBgRmlsZSBtaW1lIHR5cGUgXCIke2l0ZW0udHlwZX1cIiBpcyBub3QgYWxsb3dlZGA7XG4gICAgfVxuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RpZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZEl0ZW0odmFsdWU6IEZpbGVJdGVtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy51cmwpIHtcbiAgICAgIHN1cGVyLnVwbG9hZEl0ZW0odmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWFnZURhdGFDb252ZXJ0ZXIgPSBuZXcgSW1hZ2VEYXRhQ29udmVydGVyKCk7XG4gICAgICB0aGlzLl9vblByb2dyZXNzSXRlbSh2YWx1ZSwgMCk7XG5cbiAgICAgIGlmICh0aGlzLmlzVXBsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMub3B0aW9ucy5oZWFkZXJzLmZpbmQoKG9iamVjdDogYW55KSA9PiBvYmplY3QubmFtZSA9PT0gJ2ZvbGRlcklkJyk7XG5cbiAgICAgIHRoaXMuX29uUHJvZ3Jlc3NJdGVtKHZhbHVlLCA1MCk7XG4gICAgICBpbWFnZURhdGFDb252ZXJ0ZXIuZ2V0UHJvcGVydGllcyh2YWx1ZS5fZmlsZSwgaGVhZGVyLnZhbHVlKVxuICAgICAgICAuc3Vic2NyaWJlKChmaWxlOiBJRmlsZURhdGFQcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgdGhpcy5fb25Qcm9ncmVzc0l0ZW0odmFsdWUsIDEwMCk7XG4gICAgICAgICAgdGhpcy5fb25Db21wbGV0ZUl0ZW0odmFsdWUsIEpTT04uc3RyaW5naWZ5KGZpbGUpLCAyMDAsIHt9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=