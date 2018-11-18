/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FileManagerConfiguration } from '../../configuration/fileManagerConfiguration.service';
import { Store } from '@ngrx/store';
import { ChooseFilesAction, DeleteFileAction, SelectFileAction, UnSelectFileAction } from '../../store/file-manager.action';
export class FileComponent {
    /**
     * @param {?} configuration
     * @param {?} store
     */
    constructor(configuration, store) {
        this.configuration = configuration;
        this.store = store;
        this.onPreviewFile = new EventEmitter();
        this.onCropFile = new EventEmitter();
        this.onSelectFile = new EventEmitter();
        this.removeTitle = 'Remove file';
    }
    /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    deleteFile($event, file) {
        this.store.dispatch(new DeleteFileAction({ file }));
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getRemoveMessage(file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    openPreview($event) {
        /** @type {?} */
        let fileEvent = {
            eventName: 'onPreviewFile',
            file: this.file
        };
        this.onPreviewFile.emit(fileEvent);
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    openCrop($event) {
        /** @type {?} */
        let fileEvent = {
            eventName: 'onCropFile',
            file: this.file
        };
        this.onCropFile.emit(fileEvent);
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @return {?}
     */
    selectFile() {
        this.store.dispatch(new SelectFileAction({ file: this.file }));
    }
    /**
     * @return {?}
     */
    unSelectFile() {
        this.store.dispatch(new UnSelectFileAction({ file: this.file }));
    }
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    chooseFile($event, file) {
        this.store.dispatch(new ChooseFilesAction({ files: [file.toJSON()] }));
        $event.preventDefault();
        $event.stopPropagation();
    }
}
FileComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-file-component',
                template: "<div *ngIf=\"configuration.isMultiSelection\" class=\"file-selection-input\">\n  <i class=\"fa fa-2x checked fa-check-square-o\" (click)=\"unSelectFile()\"></i>\n  <i class=\"fa fa-2x unchecked fa-square-o\" (click)=\"selectFile()\"></i>\n</div>\n<div class=\"rounded file-img\" [ngClass]=\"{'file-img-symbol': !file.isImage()}\"\n     [style.background-image]=\"'url(' + file.thumbnailUrl + ')'\"></div>\n<span class=\"file-name\">{{file.name}}</span>\n<div class=\"file-menu\">\n  <div class=\"btn-group btn-group-sm\">\n    <!-- Add message: [message]=\"getRemoveMessage(file)\" -->\n    <button mwlConfirmationPopover [title]=\"removeTitle\" [appendToBody]=\"true\"\n            [confirmText]=\"'Yes'\" [cancelText]=\"'No'\" placement=\"bottom\" (confirm)=\"deleteFile($event, file)\"\n            class=\"btn btn-sm btn-danger btn-icon\">\n      <i class=\"fa fa-trash\"></i>\n    </button>\n    <button (click)=\"openPreview($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-search\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"openCrop($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-crop\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"chooseFile($event, file)\" class=\"btn btn-sm btn-primary btn-icon\">\n      <i class=\"fa fa-image\"></i>\n    </button>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
FileComponent.ctorParameters = () => [
    { type: FileManagerConfiguration },
    { type: Store }
];
FileComponent.propDecorators = {
    file: [{ type: Input }],
    onPreviewFile: [{ type: Output }],
    onCropFile: [{ type: Output }],
    onSelectFile: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FileComponent.prototype.file;
    /** @type {?} */
    FileComponent.prototype.onPreviewFile;
    /** @type {?} */
    FileComponent.prototype.onCropFile;
    /** @type {?} */
    FileComponent.prototype.onSelectFile;
    /** @type {?} */
    FileComponent.prototype.removeTitle;
    /** @type {?} */
    FileComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    FileComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9maWxlc0xpc3QvZmlsZS9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUU5RixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWxDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbkIsTUFBTSxpQ0FBaUMsQ0FBQztBQU96QyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFleEIsWUFBMEIsYUFBdUMsRUFDdEMsS0FBK0I7UUFEaEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBWG5ELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUduQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdoQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxhQUFhLENBQUM7SUFJbkMsQ0FBQzs7Ozs7Ozs7SUFPTSxVQUFVLENBQUMsTUFBa0IsRUFBRSxJQUFnQjtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxJQUFnQjtRQUN0QyxPQUFPLDJCQUEyQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsTUFBa0I7O1lBQy9CLFNBQVMsR0FBZTtZQUMxQixTQUFTLEVBQUUsZUFBZTtZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLE1BQWtCOztZQUM1QixTQUFTLEdBQWU7WUFDMUIsU0FBUyxFQUFFLFlBQVk7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLE1BQWtCLEVBQUUsSUFBZ0I7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBM0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwyM0NBQW9DO2dCQUNwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQWZPLHdCQUF3QjtZQUV4QixLQUFLOzs7bUJBZVYsS0FBSzs0QkFHTCxNQUFNO3lCQUdOLE1BQU07MkJBR04sTUFBTTs7OztJQVRQLDZCQUN3Qjs7SUFFeEIsc0NBQzBDOztJQUUxQyxtQ0FDdUM7O0lBRXZDLHFDQUN5Qzs7SUFFekMsb0NBQW1DOztJQUVoQixzQ0FBOEM7Ozs7O0lBQzlDLDhCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtJRmlsZUV2ZW50fSBmcm9tICcuLi9pbnRlcmZhY2UvSUZpbGVFdmVudCc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuLi8uLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge1xuICBDaG9vc2VGaWxlc0FjdGlvbixcbiAgRGVsZXRlRmlsZUFjdGlvbixcbiAgU2VsZWN0RmlsZUFjdGlvbixcbiAgVW5TZWxlY3RGaWxlQWN0aW9uXG59IGZyb20gJy4uLy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1maWxlLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGZpbGU6IElGaWxlTW9kZWw7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblByZXZpZXdGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25Dcm9wRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uU2VsZWN0RmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgcmVtb3ZlVGl0bGUgPSAnUmVtb3ZlIGZpbGUnO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+KSB7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBjbGlja2VkIG9uIGJ1dHRvbiBcImRlbGV0ZSBmaWxlXCJcbiAgICpcbiAgICogQHBhcmFtIGZpbGVcbiAgICovXG4gIHB1YmxpYyBkZWxldGVGaWxlKCRldmVudDogTW91c2VFdmVudCwgZmlsZTogSUZpbGVNb2RlbCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZUZpbGVBY3Rpb24oe2ZpbGV9KSk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVtb3ZlTWVzc2FnZShmaWxlOiBJRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuICdZb3UgYXJlIHRyeSB0byBkZWxldGUgPGI+JyArIGZpbGUubmFtZSArICc8L2I+LiBBcmUgeW91IHN1cmU/JztcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUHJldmlldygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZmlsZUV2ZW50OiBJRmlsZUV2ZW50ID0ge1xuICAgICAgZXZlbnROYW1lOiAnb25QcmV2aWV3RmlsZScsXG4gICAgICBmaWxlOiB0aGlzLmZpbGVcbiAgICB9O1xuICAgIHRoaXMub25QcmV2aWV3RmlsZS5lbWl0KGZpbGVFdmVudCk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkNyb3AoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGZpbGVFdmVudDogSUZpbGVFdmVudCA9IHtcbiAgICAgIGV2ZW50TmFtZTogJ29uQ3JvcEZpbGUnLFxuICAgICAgZmlsZTogdGhpcy5maWxlXG4gICAgfTtcbiAgICB0aGlzLm9uQ3JvcEZpbGUuZW1pdChmaWxlRXZlbnQpO1xuXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdEZpbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VsZWN0RmlsZUFjdGlvbih7ZmlsZTogdGhpcy5maWxlfSkpO1xuICB9XG5cbiAgcHVibGljIHVuU2VsZWN0RmlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVblNlbGVjdEZpbGVBY3Rpb24oe2ZpbGU6IHRoaXMuZmlsZX0pKTtcbiAgfVxuXG4gIHB1YmxpYyBjaG9vc2VGaWxlKCRldmVudDogTW91c2VFdmVudCwgZmlsZTogSUZpbGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENob29zZUZpbGVzQWN0aW9uKHtmaWxlczogW2ZpbGUudG9KU09OKCldfSkpO1xuXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=