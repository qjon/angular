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
export class FilesListComponent {
    /**
     * @param {?} configuration
     * @param {?} store
     * @param {?} fileManagerDispatcher
     * @param {?} notifications
     * @param {?} fileManagerEffects
     */
    constructor(configuration, store, fileManagerDispatcher, notifications, fileManagerEffects) {
        this.configuration = configuration;
        this.store = store;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onPreviewFile = new EventEmitter();
        this.onCropFile = new EventEmitter();
        this.onSelectFile = new EventEmitter();
        this.removeTitle = 'Remove file';
        this.dragZone = FILEMANAGER_TREE_NAME;
        fileManagerEffects.deleteFileSuccess$
            .subscribe((action) => {
            notifications.success('File delete', `${action.payload.file.name} has been deleted`);
        });
    }
    /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        this.store.dispatch(new DeleteFileAction({ file }));
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getRemoveMessage(file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    }
    /**
     * @param {?} fileEvent
     * @return {?}
     */
    openPreview(fileEvent) {
        this.onPreviewFile.emit(fileEvent);
    }
    /**
     * @param {?} fileEvent
     * @return {?}
     */
    openCrop(fileEvent) {
        this.onCropFile.emit(fileEvent);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    toggleSelection(file) {
        if (file.selected) {
            this.store.dispatch(new UnSelectFileAction({ file }));
        }
        else {
            this.store.dispatch(new SelectFileAction({ file }));
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    isSelected(file) {
        return this.selectedFiles.indexOf(file.getId().toString()) > -1;
    }
}
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
FilesListComponent.ctorParameters = () => [
    { type: FileManagerConfiguration },
    { type: Store },
    { type: FileManagerDispatcherService },
    { type: NotificationsService },
    { type: FileManagerEffectsService }
];
FilesListComponent.propDecorators = {
    files: [{ type: Input }],
    selectedFiles: [{ type: Input }],
    onPreviewFile: [{ type: Output }],
    onCropFile: [{ type: Output }],
    onSelectFile: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXNMaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL2ZpbGVzTGlzdC9maWxlc0xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSWpILE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBRTNGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFbEMsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFVcEcsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFvQjdCLFlBQTBCLGFBQXVDLEVBQ3RDLEtBQStCLEVBQy9CLHFCQUFtRCxFQUMzRCxhQUFtQyxFQUNuQyxrQkFBNkM7UUFKdEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBOEI7UUFkdkUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyxnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUU1QixhQUFRLEdBQUcscUJBQXFCLENBQUM7UUFRdEMsa0JBQWtCLENBQUMsa0JBQWtCO2FBQ2xDLFNBQVMsQ0FBQyxDQUFDLE1BQTBCLEVBQUUsRUFBRTtZQUN4QyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQW1CLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7Ozs7SUFPTSxVQUFVLENBQUMsSUFBZ0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLElBQWdCO1FBQ3RDLE9BQU8sMkJBQTJCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxTQUFxQjtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxTQUFxQjtRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxJQUFnQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLElBQWU7UUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUF2RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix5WEFBMkI7Z0JBRTNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFoQk8sd0JBQXdCO1lBTXhCLEtBQUs7WUFKTCw0QkFBNEI7WUFDNUIsb0JBQW9CO1lBQ3BCLHlCQUF5Qjs7O29CQWU5QixLQUFLOzRCQUdMLEtBQUs7NEJBR0wsTUFBTTt5QkFHTixNQUFNOzJCQUdOLE1BQU07Ozs7SUFaUCxtQ0FDMEI7O0lBRTFCLDJDQUMrQjs7SUFFL0IsMkNBQzBDOztJQUUxQyx3Q0FDdUM7O0lBRXZDLDBDQUN5Qzs7SUFFekMseUNBQW1DOztJQUVuQyxzQ0FBd0M7O0lBRXJCLDJDQUE4Qzs7Ozs7SUFDOUMsbUNBQXVDOzs7OztJQUN2QyxtREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4vZmlsZS5tb2RlbCc7XG5pbXBvcnQge0lGaWxlRXZlbnR9IGZyb20gJy4vaW50ZXJmYWNlL0lGaWxlRXZlbnQnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuL2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuLi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQWN0aW9ufSBmcm9tICcuLi9zdG9yZS9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2V9IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci1kaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zU2VydmljZX0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2V9IGZyb20gJy4uL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7RklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuLi9zdG9yZS9maWxlTWFuYWdlckFwaUFic3RyYWN0LmNsYXNzJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyU3RhdGV9IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7RGVsZXRlRmlsZUFjdGlvbiwgU2VsZWN0RmlsZUFjdGlvbiwgVW5TZWxlY3RGaWxlQWN0aW9ufSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZmlsZXMtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlcy5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZXMtbGlzdC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZXNMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGZpbGVzOiBGaWxlTW9kZWxbXTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2VsZWN0ZWRGaWxlczogc3RyaW5nW107XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblByZXZpZXdGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25Dcm9wRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uU2VsZWN0RmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgcmVtb3ZlVGl0bGUgPSAnUmVtb3ZlIGZpbGUnO1xuXG4gIHB1YmxpYyBkcmFnWm9uZSA9IEZJTEVNQU5BR0VSX1RSRUVfTkFNRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElGaWxlTWFuYWdlclN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmlsZU1hbmFnZXJEaXNwYXRjaGVyOiBGaWxlTWFuYWdlckRpc3BhdGNoZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBmaWxlTWFuYWdlckVmZmVjdHM6IEZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2UpIHtcblxuICAgIGZpbGVNYW5hZ2VyRWZmZWN0cy5kZWxldGVGaWxlU3VjY2VzcyRcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbnMuc3VjY2VzcygnRmlsZSBkZWxldGUnLCBgJHthY3Rpb24ucGF5bG9hZC5maWxlLm5hbWV9IGhhcyBiZWVuIGRlbGV0ZWRgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gY2xpY2tlZCBvbiBidXR0b24gXCJkZWxldGUgZmlsZVwiXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlXG4gICAqL1xuICBwdWJsaWMgZGVsZXRlRmlsZShmaWxlOiBJRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlRmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZW1vdmVNZXNzYWdlKGZpbGU6IElGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gJ1lvdSBhcmUgdHJ5IHRvIGRlbGV0ZSA8Yj4nICsgZmlsZS5uYW1lICsgJzwvYj4uIEFyZSB5b3Ugc3VyZT8nO1xuICB9XG5cbiAgcHVibGljIG9wZW5QcmV2aWV3KGZpbGVFdmVudDogSUZpbGVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25QcmV2aWV3RmlsZS5lbWl0KGZpbGVFdmVudCk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkNyb3AoZmlsZUV2ZW50OiBJRmlsZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkNyb3BGaWxlLmVtaXQoZmlsZUV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3Rpb24oZmlsZTogSUZpbGVNb2RlbCk6IHZvaWQge1xuICAgIGlmIChmaWxlLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVblNlbGVjdEZpbGVBY3Rpb24oe2ZpbGV9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlbGVjdEZpbGVBY3Rpb24oe2ZpbGV9KSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzU2VsZWN0ZWQoZmlsZTogRmlsZU1vZGVsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRGaWxlcy5pbmRleE9mKGZpbGUuZ2V0SWQoKS50b1N0cmluZygpKSA+IC0xO1xuICB9XG59XG4iXX0=