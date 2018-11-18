/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { FileManagerDispatcherService } from '../store/file-manager-dispatcher.service';
import { NotificationsService } from 'angular2-notifications';
import { FileManagerEffectsService } from '../store/fileManagerEffects.service';
import { FILEMANAGER_TREE_NAME } from '../store/fileManagerApiAbstract.class';
import { Store } from '@ngrx/store';
import { DeleteFileAction, SelectFileAction, UnSelectFileAction } from '../store/file-manager.action';
var FilesListComponent = /** @class */ (function () {
    function FilesListComponent(configuration, store, fileManagerDispatcher, notifications, fileManagerEffects) {
        this.configuration = configuration;
        this.store = store;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onPreviewFile = new EventEmitter();
        this.onCropFile = new EventEmitter();
        this.onSelectFile = new EventEmitter();
        this.removeTitle = 'Remove file';
        this.dragZone = FILEMANAGER_TREE_NAME;
        fileManagerEffects.deleteFileSuccess$
            .subscribe(function (action) {
            notifications.success('File delete', action.payload.file.name + " has been deleted");
        });
    }
    /**
     * Fired when clicked on button "delete file"
     *
     * @param file
     */
    /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} file
     * @return {?}
     */
    FilesListComponent.prototype.deleteFile = /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new DeleteFileAction({ file: file }));
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FilesListComponent.prototype.getRemoveMessage = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    };
    /**
     * @param {?} fileEvent
     * @return {?}
     */
    FilesListComponent.prototype.openPreview = /**
     * @param {?} fileEvent
     * @return {?}
     */
    function (fileEvent) {
        this.onPreviewFile.emit(fileEvent);
    };
    /**
     * @param {?} fileEvent
     * @return {?}
     */
    FilesListComponent.prototype.openCrop = /**
     * @param {?} fileEvent
     * @return {?}
     */
    function (fileEvent) {
        this.onCropFile.emit(fileEvent);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FilesListComponent.prototype.toggleSelection = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (file.selected) {
            this.store.dispatch(new UnSelectFileAction({ file: file }));
        }
        else {
            this.store.dispatch(new SelectFileAction({ file: file }));
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FilesListComponent.prototype.isSelected = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this.selectedFiles.indexOf(file.getId().toString()) > -1;
    };
    FilesListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-files-list',
                    template: "<div class=\"files-list\">\n  <div class=\"file\" *ngFor=\"let file of files\" [ngClass]=\"{'selected': isSelected(file)}\"  riDraggable [data]=\"file.toJSON()\" [sourceType]=\"'FILE'\" [dragZone]=\"dragZone\">\n    <ri-file-component [file]=\"file\" (onPreviewFile)=\"openPreview($event)\" (onCropFile)=\"openCrop($event)\"></ri-file-component>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".files-list .file{display:inline-block;position:relative;cursor:pointer;text-align:center;width:140px;height:110px;padding:5px;border:1px solid #ccc;background-color:#eee;border-radius:10px;margin:0 0 20px 20px}.files-list .file .file-img{width:128px;height:98px;background-size:cover;background-repeat:no-repeat}.files-list .file .file-img.file-img-symbol{background-size:contain;background-position-x:50%}.files-list .file .file-name{display:none;position:absolute;bottom:0;left:0;right:0;text-align:center;background-color:rgba(238,238,238,.5)}.files-list .file .file-menu{display:none;position:absolute;top:30%;left:0;right:0;text-align:center}.files-list .file .file-selection-input{display:none;position:absolute;top:3px;left:3px;cursor:pointer;z-index:10}.files-list .file .file-selection-input .checked{display:none}.files-list .file .file-selection-input .unchecked{display:block}.files-list .file:hover .file-img{opacity:.3}.files-list .file:hover .file-menu,.files-list .file:hover .file-name,.files-list .file:hover .file-selection-input{display:block}.files-list .file.selected{border-color:#fff33a;background-color:rgba(255,243,58,.5)}.files-list .file.selected .file-name{background-color:rgba(255,243,58,.5)}.files-list .file.selected .file-menu,.files-list .file.selected .file-selection-input{display:none}.files-list .file.selected .file-selection-input .checked{display:block}.files-list .file.selected .file-selection-input .unchecked{display:none}.files-list .file.selected:hover .file-selection-input{display:block}"]
                }] }
    ];
    /** @nocollapse */
    FilesListComponent.ctorParameters = function () { return [
        { type: FileManagerConfiguration },
        { type: Store },
        { type: FileManagerDispatcherService },
        { type: NotificationsService },
        { type: FileManagerEffectsService }
    ]; };
    FilesListComponent.propDecorators = {
        files: [{ type: Input }],
        selectedFiles: [{ type: Input }],
        onPreviewFile: [{ type: Output }],
        onCropFile: [{ type: Output }],
        onSelectFile: [{ type: Output }]
    };
    return FilesListComponent;
}());
export { FilesListComponent };
if (false) {
    /** @type {?} */
    FilesListComponent.prototype.files;
    /** @type {?} */
    FilesListComponent.prototype.selectedFiles;
    /** @type {?} */
    FilesListComponent.prototype.onPreviewFile;
    /** @type {?} */
    FilesListComponent.prototype.onCropFile;
    /** @type {?} */
    FilesListComponent.prototype.onSelectFile;
    /** @type {?} */
    FilesListComponent.prototype.removeTitle;
    /** @type {?} */
    FilesListComponent.prototype.dragZone;
    /** @type {?} */
    FilesListComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    FilesListComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    FilesListComponent.prototype.fileManagerDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXNMaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL2ZpbGVzTGlzdC9maWxlc0xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSWpILE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBRTNGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFbEMsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFFcEc7SUE0QkUsNEJBQTBCLGFBQXVDLEVBQ3RDLEtBQStCLEVBQy9CLHFCQUFtRCxFQUMzRCxhQUFtQyxFQUNuQyxrQkFBNkM7UUFKdEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBOEI7UUFkdkUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyxnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUU1QixhQUFRLEdBQUcscUJBQXFCLENBQUM7UUFRdEMsa0JBQWtCLENBQUMsa0JBQWtCO2FBQ2xDLFNBQVMsQ0FBQyxVQUFDLE1BQTBCO1lBQ3BDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQW1CLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksdUNBQVU7Ozs7OztJQUFqQixVQUFrQixJQUFnQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSw2Q0FBZ0I7Ozs7SUFBdkIsVUFBd0IsSUFBZ0I7UUFDdEMsT0FBTywyQkFBMkIsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRU0sd0NBQVc7Ozs7SUFBbEIsVUFBbUIsU0FBcUI7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTSxxQ0FBUTs7OztJQUFmLFVBQWdCLFNBQXFCO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0sNENBQWU7Ozs7SUFBdEIsVUFBdUIsSUFBZ0I7UUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7SUFFTSx1Q0FBVTs7OztJQUFqQixVQUFrQixJQUFlO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIseVhBQTJCO29CQUUzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFoQk8sd0JBQXdCO2dCQU14QixLQUFLO2dCQUpMLDRCQUE0QjtnQkFDNUIsb0JBQW9CO2dCQUNwQix5QkFBeUI7Ozt3QkFlOUIsS0FBSztnQ0FHTCxLQUFLO2dDQUdMLE1BQU07NkJBR04sTUFBTTsrQkFHTixNQUFNOztJQW1EVCx5QkFBQztDQUFBLEFBeEVELElBd0VDO1NBaEVZLGtCQUFrQjs7O0lBQzdCLG1DQUMwQjs7SUFFMUIsMkNBQytCOztJQUUvQiwyQ0FDMEM7O0lBRTFDLHdDQUN1Qzs7SUFFdkMsMENBQ3lDOztJQUV6Qyx5Q0FBbUM7O0lBRW5DLHNDQUF3Qzs7SUFFckIsMkNBQThDOzs7OztJQUM5QyxtQ0FBdUM7Ozs7O0lBQ3ZDLG1EQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVNb2RlbH0gZnJvbSAnLi9maWxlLm1vZGVsJztcbmltcG9ydCB7SUZpbGVFdmVudH0gZnJvbSAnLi9pbnRlcmZhY2UvSUZpbGVFdmVudCc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4vaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJBY3Rpb259IGZyb20gJy4uL3N0b3JlL2ZpbGVNYW5hZ2VyQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLWRpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcbmltcG9ydCB7RmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZX0gZnJvbSAnLi4vc3RvcmUvZmlsZU1hbmFnZXJFZmZlY3RzLnNlcnZpY2UnO1xuaW1wb3J0IHtGSUxFTUFOQUdFUl9UUkVFX05BTUV9IGZyb20gJy4uL3N0b3JlL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLnJlZHVjZXInO1xuaW1wb3J0IHtEZWxldGVGaWxlQWN0aW9uLCBTZWxlY3RGaWxlQWN0aW9uLCBVblNlbGVjdEZpbGVBY3Rpb259IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1maWxlcy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGVzLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlcy1saXN0LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWxlc0xpc3RDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsZXM6IEZpbGVNb2RlbFtdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZWxlY3RlZEZpbGVzOiBzdHJpbmdbXTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uUHJldmlld0ZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkNyb3BGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25TZWxlY3RGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyByZW1vdmVUaXRsZSA9ICdSZW1vdmUgZmlsZSc7XG5cbiAgcHVibGljIGRyYWdab25lID0gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlTWFuYWdlckRpc3BhdGNoZXI6IEZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIGZpbGVNYW5hZ2VyRWZmZWN0czogRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSkge1xuXG4gICAgZmlsZU1hbmFnZXJFZmZlY3RzLmRlbGV0ZUZpbGVTdWNjZXNzJFxuICAgICAgLnN1YnNjcmliZSgoYWN0aW9uOiBJRmlsZU1hbmFnZXJBY3Rpb24pID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9ucy5zdWNjZXNzKCdGaWxlIGRlbGV0ZScsIGAke2FjdGlvbi5wYXlsb2FkLmZpbGUubmFtZX0gaGFzIGJlZW4gZGVsZXRlZGApO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBjbGlja2VkIG9uIGJ1dHRvbiBcImRlbGV0ZSBmaWxlXCJcbiAgICpcbiAgICogQHBhcmFtIGZpbGVcbiAgICovXG4gIHB1YmxpYyBkZWxldGVGaWxlKGZpbGU6IElGaWxlTW9kZWwpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICB9XG5cbiAgcHVibGljIGdldFJlbW92ZU1lc3NhZ2UoZmlsZTogSUZpbGVNb2RlbCkge1xuICAgIHJldHVybiAnWW91IGFyZSB0cnkgdG8gZGVsZXRlIDxiPicgKyBmaWxlLm5hbWUgKyAnPC9iPi4gQXJlIHlvdSBzdXJlPyc7XG4gIH1cblxuICBwdWJsaWMgb3BlblByZXZpZXcoZmlsZUV2ZW50OiBJRmlsZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vblByZXZpZXdGaWxlLmVtaXQoZmlsZUV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuQ3JvcChmaWxlRXZlbnQ6IElGaWxlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ3JvcEZpbGUuZW1pdChmaWxlRXZlbnQpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNlbGVjdGlvbihmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgaWYgKGZpbGUuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0RmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VsZWN0RmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNTZWxlY3RlZChmaWxlOiBGaWxlTW9kZWwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEZpbGVzLmluZGV4T2YoZmlsZS5nZXRJZCgpLnRvU3RyaW5nKCkpID4gLTE7XG4gIH1cbn1cbiJdfQ==