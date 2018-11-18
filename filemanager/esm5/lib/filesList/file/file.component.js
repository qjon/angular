/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FileManagerConfiguration } from '../../configuration/fileManagerConfiguration.service';
import { Store } from '@ngrx/store';
import { ChooseFilesAction, DeleteFileAction, SelectFileAction, UnSelectFileAction } from '../../store/file-manager.action';
var FileComponent = /** @class */ (function () {
    function FileComponent(configuration, store) {
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
     * @param file
     */
    /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    FileComponent.prototype.deleteFile = /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    function ($event, file) {
        this.store.dispatch(new DeleteFileAction({ file: file }));
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FileComponent.prototype.getRemoveMessage = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FileComponent.prototype.openPreview = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var fileEvent = {
            eventName: 'onPreviewFile',
            file: this.file
        };
        this.onPreviewFile.emit(fileEvent);
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FileComponent.prototype.openCrop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var fileEvent = {
            eventName: 'onCropFile',
            file: this.file
        };
        this.onCropFile.emit(fileEvent);
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    FileComponent.prototype.selectFile = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new SelectFileAction({ file: this.file }));
    };
    /**
     * @return {?}
     */
    FileComponent.prototype.unSelectFile = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new UnSelectFileAction({ file: this.file }));
    };
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    FileComponent.prototype.chooseFile = /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    function ($event, file) {
        this.store.dispatch(new ChooseFilesAction({ files: [file.toJSON()] }));
        $event.preventDefault();
        $event.stopPropagation();
    };
    FileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-file-component',
                    template: "<div *ngIf=\"configuration.isMultiSelection\" class=\"file-selection-input\">\n  <i class=\"fa fa-2x checked fa-check-square-o\" (click)=\"unSelectFile()\"></i>\n  <i class=\"fa fa-2x unchecked fa-square-o\" (click)=\"selectFile()\"></i>\n</div>\n<div class=\"rounded file-img\" [ngClass]=\"{'file-img-symbol': !file.isImage()}\"\n     [style.background-image]=\"'url(' + file.thumbnailUrl + ')'\"></div>\n<span class=\"file-name\">{{file.name}}</span>\n<div class=\"file-menu\">\n  <div class=\"btn-group btn-group-sm\">\n    <!-- Add message: [message]=\"getRemoveMessage(file)\" -->\n    <button mwlConfirmationPopover [title]=\"removeTitle\" [appendToBody]=\"true\"\n            [confirmText]=\"'Yes'\" [cancelText]=\"'No'\" placement=\"bottom\" (confirm)=\"deleteFile($event, file)\"\n            class=\"btn btn-sm btn-danger btn-icon\">\n      <i class=\"fa fa-trash\"></i>\n    </button>\n    <button (click)=\"openPreview($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-search\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"openCrop($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-crop\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"chooseFile($event, file)\" class=\"btn btn-sm btn-primary btn-icon\">\n      <i class=\"fa fa-image\"></i>\n    </button>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    FileComponent.ctorParameters = function () { return [
        { type: FileManagerConfiguration },
        { type: Store }
    ]; };
    FileComponent.propDecorators = {
        file: [{ type: Input }],
        onPreviewFile: [{ type: Output }],
        onCropFile: [{ type: Output }],
        onSelectFile: [{ type: Output }]
    };
    return FileComponent;
}());
export { FileComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9maWxlc0xpc3QvZmlsZS9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUU5RixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWxDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbkIsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6QztJQW9CRSx1QkFBMEIsYUFBdUMsRUFDdEMsS0FBK0I7UUFEaEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBWG5ELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUduQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdoQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxhQUFhLENBQUM7SUFJbkMsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ0ksa0NBQVU7Ozs7Ozs7SUFBakIsVUFBa0IsTUFBa0IsRUFBRSxJQUFnQjtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVNLHdDQUFnQjs7OztJQUF2QixVQUF3QixJQUFnQjtRQUN0QyxPQUFPLDJCQUEyQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFTSxtQ0FBVzs7OztJQUFsQixVQUFtQixNQUFrQjs7WUFDL0IsU0FBUyxHQUFlO1lBQzFCLFNBQVMsRUFBRSxlQUFlO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxnQ0FBUTs7OztJQUFmLFVBQWdCLE1BQWtCOztZQUM1QixTQUFTLEdBQWU7WUFDMUIsU0FBUyxFQUFFLFlBQVk7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRU0sa0NBQVU7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRU0sb0NBQVk7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFTSxrQ0FBVTs7Ozs7SUFBakIsVUFBa0IsTUFBa0IsRUFBRSxJQUFnQjtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckUsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkEzRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDIzQ0FBb0M7b0JBQ3BDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkFmTyx3QkFBd0I7Z0JBRXhCLEtBQUs7Ozt1QkFlVixLQUFLO2dDQUdMLE1BQU07NkJBR04sTUFBTTsrQkFHTixNQUFNOztJQTZEVCxvQkFBQztDQUFBLEFBNUVELElBNEVDO1NBdkVZLGFBQWE7OztJQUN4Qiw2QkFDd0I7O0lBRXhCLHNDQUMwQzs7SUFFMUMsbUNBQ3VDOztJQUV2QyxxQ0FDeUM7O0lBRXpDLG9DQUFtQzs7SUFFaEIsc0NBQThDOzs7OztJQUM5Qyw4QkFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7SUZpbGVFdmVudH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lGaWxlRXZlbnQnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJTdGF0ZX0gZnJvbSAnLi4vLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLnJlZHVjZXInO1xuaW1wb3J0IHtcbiAgQ2hvb3NlRmlsZXNBY3Rpb24sXG4gIERlbGV0ZUZpbGVBY3Rpb24sXG4gIFNlbGVjdEZpbGVBY3Rpb24sXG4gIFVuU2VsZWN0RmlsZUFjdGlvblxufSBmcm9tICcuLi8uLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZmlsZS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaWxlOiBJRmlsZU1vZGVsO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25QcmV2aWV3RmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uQ3JvcEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblNlbGVjdEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHJlbW92ZVRpdGxlID0gJ1JlbW92ZSBmaWxlJztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElGaWxlTWFuYWdlclN0YXRlPikge1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gY2xpY2tlZCBvbiBidXR0b24gXCJkZWxldGUgZmlsZVwiXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlXG4gICAqL1xuICBwdWJsaWMgZGVsZXRlRmlsZSgkZXZlbnQ6IE1vdXNlRXZlbnQsIGZpbGU6IElGaWxlTW9kZWwpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVGaWxlQWN0aW9uKHtmaWxlfSkpO1xuXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGdldFJlbW92ZU1lc3NhZ2UoZmlsZTogSUZpbGVNb2RlbCkge1xuICAgIHJldHVybiAnWW91IGFyZSB0cnkgdG8gZGVsZXRlIDxiPicgKyBmaWxlLm5hbWUgKyAnPC9iPi4gQXJlIHlvdSBzdXJlPyc7XG4gIH1cblxuICBwdWJsaWMgb3BlblByZXZpZXcoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGZpbGVFdmVudDogSUZpbGVFdmVudCA9IHtcbiAgICAgIGV2ZW50TmFtZTogJ29uUHJldmlld0ZpbGUnLFxuICAgICAgZmlsZTogdGhpcy5maWxlXG4gICAgfTtcbiAgICB0aGlzLm9uUHJldmlld0ZpbGUuZW1pdChmaWxlRXZlbnQpO1xuXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Dcm9wKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGxldCBmaWxlRXZlbnQ6IElGaWxlRXZlbnQgPSB7XG4gICAgICBldmVudE5hbWU6ICdvbkNyb3BGaWxlJyxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZVxuICAgIH07XG4gICAgdGhpcy5vbkNyb3BGaWxlLmVtaXQoZmlsZUV2ZW50KTtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RGaWxlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlbGVjdEZpbGVBY3Rpb24oe2ZpbGU6IHRoaXMuZmlsZX0pKTtcbiAgfVxuXG4gIHB1YmxpYyB1blNlbGVjdEZpbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKHtmaWxlOiB0aGlzLmZpbGV9KSk7XG4gIH1cblxuICBwdWJsaWMgY2hvb3NlRmlsZSgkZXZlbnQ6IE1vdXNlRXZlbnQsIGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaG9vc2VGaWxlc0FjdGlvbih7ZmlsZXM6IFtmaWxlLnRvSlNPTigpXX0pKTtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19