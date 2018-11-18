/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FileManagerActionsService } from './fileManagerActions.service';
import { ChooseFilesAction, CropFileAction, DeleteFileAction, DeleteSelectedFilesAction, InverseFilesSelectionAction, LoadFilesAction, SelectAllFilesAction, SelectFileAction, UnSelectAllFilesAction, UnSelectFileAction, UploadFilesAction, UploadFilesErrorAction, UploadFilesSuccessAction } from './file-manager.action';
/**
 * \@Deprecated - Will be removed in 3.0.0
 */
export class FileManagerDispatcherService {
    /**
     * @param {?} store
     * @param {?} fileManagerActions
     */
    constructor(store, fileManagerActions) {
        this.store = store;
        this.fileManagerActions = fileManagerActions;
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    chooseFiles(files) {
        this.store.dispatch(new ChooseFilesAction({ files }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        this.store.dispatch(new CropFileAction({ bounds, file }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        this.store.dispatch(new DeleteFileAction({ file }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    deleteSelectedFiles(files) {
        this.store.dispatch(new DeleteSelectedFilesAction({ files }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     * @return {?}
     */
    inverseSelection() {
        this.store.dispatch(new InverseFilesSelectionAction());
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     * @param {?} folderId
     * @return {?}
     */
    loadFiles(folderId) {
        this.store.dispatch(new LoadFilesAction({ folderId }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     * @return {?}
     */
    selectAllFiles() {
        this.store.dispatch(new SelectAllFilesAction());
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    selectFile(file) {
        this.store.dispatch(new SelectFileAction({ file }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     * @return {?}
     */
    unSelectAllFiles() {
        this.store.dispatch(new UnSelectAllFilesAction());
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    unSelectFile(file) {
        this.store.dispatch(new UnSelectFileAction({ file }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     * @param {?} file
     * @return {?}
     */
    uploadError(file) {
        this.store.dispatch(new UploadFilesErrorAction({ files: [file] }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     * @param {?} file
     * @return {?}
     */
    upload(file) {
        this.store.dispatch(new UploadFilesAction({ files: [file] }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     * @param {?} file
     * @return {?}
     */
    uploadSuccess(file) {
        this.store.dispatch(new UploadFilesSuccessAction({ files: [file] }));
    }
}
FileManagerDispatcherService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerDispatcherService.ctorParameters = () => [
    { type: Store },
    { type: FileManagerActionsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileManagerDispatcherService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    FileManagerDispatcherService.prototype.fileManagerActions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1tYW5hZ2VyLWRpc3BhdGNoZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3N0b3JlL2ZpbGUtbWFuYWdlci1kaXNwYXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUVsQyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUl2RSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIseUJBQXlCLEVBQ3pCLDJCQUEyQixFQUMzQixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQ3hGLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFNL0IsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUFFdkMsWUFBb0IsS0FBK0IsRUFBVSxrQkFBNkM7UUFBdEYsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJCO0lBQzFHLENBQUM7Ozs7OztJQUtNLFdBQVcsQ0FBQyxLQUFtQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7Ozs7SUFLTSxRQUFRLENBQUMsSUFBZ0IsRUFBRSxNQUFtQjtRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBS00sVUFBVSxDQUFDLElBQWdCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBS00sbUJBQW1CLENBQUMsS0FBZTtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBS00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUtNLFNBQVMsQ0FBQyxRQUF1QjtRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUtNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBS00sVUFBVSxDQUFDLElBQWdCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFLTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBS00sWUFBWSxDQUFDLElBQWdCO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBS00sV0FBVyxDQUFDLElBQWdCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFLTSxNQUFNLENBQUMsSUFBZ0I7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUtNLGFBQWEsQ0FBQyxJQUFnQjtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBL0ZGLFVBQVU7Ozs7WUF0QkgsS0FBSztZQUVMLHlCQUF5Qjs7Ozs7OztJQXVCbkIsNkNBQXVDOzs7OztJQUFFLDBEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZX0gZnJvbSAnLi9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lDcm9wQm91bmRzfSBmcm9tICcuLi9jcm9wL0lDcm9wQm91bmRzJztcbmltcG9ydCB7XG4gIENob29zZUZpbGVzQWN0aW9uLFxuICBDcm9wRmlsZUFjdGlvbixcbiAgRGVsZXRlRmlsZUFjdGlvbixcbiAgRGVsZXRlU2VsZWN0ZWRGaWxlc0FjdGlvbixcbiAgSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uLFxuICBMb2FkRmlsZXNBY3Rpb24sXG4gIFNlbGVjdEFsbEZpbGVzQWN0aW9uLFxuICBTZWxlY3RGaWxlQWN0aW9uLFxuICBVblNlbGVjdEFsbEZpbGVzQWN0aW9uLFxuICBVblNlbGVjdEZpbGVBY3Rpb24sIFVwbG9hZEZpbGVzQWN0aW9uLCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uLCBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuLyoqXG4gKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+LCBwcml2YXRlIGZpbGVNYW5hZ2VyQWN0aW9uczogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBDaG9vc2VGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgY2hvb3NlRmlsZXMoZmlsZXM6IElPdXRlckZpbGVbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENob29zZUZpbGVzQWN0aW9uKHtmaWxlc30pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggQ3JvcEZpbGVBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlKGZpbGU6IElGaWxlTW9kZWwsIGJvdW5kczogSUNyb3BCb3VuZHMpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDcm9wRmlsZUFjdGlvbih7Ym91bmRzLCBmaWxlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBEZWxldGVGaWxlQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBkZWxldGVGaWxlKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBkZWxldGVTZWxlY3RlZEZpbGVzKGZpbGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24oe2ZpbGVzfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGludmVyc2VTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBMb2FkRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGxvYWRGaWxlcyhmb2xkZXJJZDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRGaWxlc0FjdGlvbih7Zm9sZGVySWR9KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFNlbGVjdEFsbEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RBbGxGaWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggU2VsZWN0RmlsZUFjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgc2VsZWN0RmlsZShmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VsZWN0RmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVW5TZWxlY3RBbGxGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdW5TZWxlY3RBbGxGaWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVblNlbGVjdEFsbEZpbGVzQWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBVblNlbGVjdEZpbGVBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0RmlsZShmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWRFcnJvcihmaWxlOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNFcnJvckFjdGlvbih7ZmlsZXM6IFtmaWxlXX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVXBsb2FkRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVwbG9hZChmaWxlOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNBY3Rpb24oe2ZpbGVzOiBbZmlsZV19KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkU3VjY2VzcyhmaWxlOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogW2ZpbGVdfSkpO1xuICB9XG59XG4iXX0=