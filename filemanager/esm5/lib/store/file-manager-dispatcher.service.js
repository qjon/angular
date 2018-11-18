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
var FileManagerDispatcherService = /** @class */ (function () {
    function FileManagerDispatcherService(store, fileManagerActions) {
        this.store = store;
        this.fileManagerActions = fileManagerActions;
    }
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerDispatcherService.prototype.chooseFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.store.dispatch(new ChooseFilesAction({ files: files }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerDispatcherService.prototype.cropFile = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        this.store.dispatch(new CropFileAction({ bounds: bounds, file: file }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.deleteFile = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new DeleteFileAction({ file: file }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerDispatcherService.prototype.deleteSelectedFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.store.dispatch(new DeleteSelectedFilesAction({ files: files }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     * @return {?}
     */
    FileManagerDispatcherService.prototype.inverseSelection = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     * @return {?}
     */
    function () {
        this.store.dispatch(new InverseFilesSelectionAction());
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     * @param {?} folderId
     * @return {?}
     */
    FileManagerDispatcherService.prototype.loadFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        this.store.dispatch(new LoadFilesAction({ folderId: folderId }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     * @return {?}
     */
    FileManagerDispatcherService.prototype.selectAllFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     * @return {?}
     */
    function () {
        this.store.dispatch(new SelectAllFilesAction());
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.selectFile = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new SelectFileAction({ file: file }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     * @return {?}
     */
    FileManagerDispatcherService.prototype.unSelectAllFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     * @return {?}
     */
    function () {
        this.store.dispatch(new UnSelectAllFilesAction());
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.unSelectFile = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new UnSelectFileAction({ file: file }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.uploadError = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new UploadFilesErrorAction({ files: [file] }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.upload = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new UploadFilesAction({ files: [file] }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.uploadSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new UploadFilesSuccessAction({ files: [file] }));
    };
    FileManagerDispatcherService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerDispatcherService.ctorParameters = function () { return [
        { type: Store },
        { type: FileManagerActionsService }
    ]; };
    return FileManagerDispatcherService;
}());
export { FileManagerDispatcherService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1tYW5hZ2VyLWRpc3BhdGNoZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3N0b3JlL2ZpbGUtbWFuYWdlci1kaXNwYXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUVsQyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUl2RSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIseUJBQXlCLEVBQ3pCLDJCQUEyQixFQUMzQixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQ3hGLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFLL0I7SUFHRSxzQ0FBb0IsS0FBK0IsRUFBVSxrQkFBNkM7UUFBdEYsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJCO0lBQzFHLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksa0RBQVc7Ozs7O0lBQWxCLFVBQW1CLEtBQW1CO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSSwrQ0FBUTs7Ozs7O0lBQWYsVUFBZ0IsSUFBZ0IsRUFBRSxNQUFtQjtRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxFQUFDLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksaURBQVU7Ozs7O0lBQWpCLFVBQWtCLElBQWdCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLDBEQUFtQjs7Ozs7SUFBMUIsVUFBMkIsS0FBZTtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLHVEQUFnQjs7OztJQUF2QjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksZ0RBQVM7Ozs7O0lBQWhCLFVBQWlCLFFBQXVCO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLEVBQUMsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLHFEQUFjOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSxpREFBVTs7Ozs7SUFBakIsVUFBa0IsSUFBZ0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSx1REFBZ0I7Ozs7SUFBdkI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLG1EQUFZOzs7OztJQUFuQixVQUFvQixJQUFnQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSxrREFBVzs7Ozs7SUFBbEIsVUFBbUIsSUFBZ0I7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksNkNBQU07Ozs7O0lBQWIsVUFBYyxJQUFnQjtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSxvREFBYTs7Ozs7SUFBcEIsVUFBcUIsSUFBZ0I7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O2dCQS9GRixVQUFVOzs7O2dCQXRCSCxLQUFLO2dCQUVMLHlCQUF5Qjs7SUFvSGpDLG1DQUFDO0NBQUEsQUFoR0QsSUFnR0M7U0EvRlksNEJBQTRCOzs7Ozs7SUFFM0IsNkNBQXVDOzs7OztJQUFFLDBEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZX0gZnJvbSAnLi9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lDcm9wQm91bmRzfSBmcm9tICcuLi9jcm9wL0lDcm9wQm91bmRzJztcbmltcG9ydCB7XG4gIENob29zZUZpbGVzQWN0aW9uLFxuICBDcm9wRmlsZUFjdGlvbixcbiAgRGVsZXRlRmlsZUFjdGlvbixcbiAgRGVsZXRlU2VsZWN0ZWRGaWxlc0FjdGlvbixcbiAgSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uLFxuICBMb2FkRmlsZXNBY3Rpb24sXG4gIFNlbGVjdEFsbEZpbGVzQWN0aW9uLFxuICBTZWxlY3RGaWxlQWN0aW9uLFxuICBVblNlbGVjdEFsbEZpbGVzQWN0aW9uLFxuICBVblNlbGVjdEZpbGVBY3Rpb24sIFVwbG9hZEZpbGVzQWN0aW9uLCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uLCBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuLyoqXG4gKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+LCBwcml2YXRlIGZpbGVNYW5hZ2VyQWN0aW9uczogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBDaG9vc2VGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgY2hvb3NlRmlsZXMoZmlsZXM6IElPdXRlckZpbGVbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENob29zZUZpbGVzQWN0aW9uKHtmaWxlc30pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggQ3JvcEZpbGVBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlKGZpbGU6IElGaWxlTW9kZWwsIGJvdW5kczogSUNyb3BCb3VuZHMpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDcm9wRmlsZUFjdGlvbih7Ym91bmRzLCBmaWxlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBEZWxldGVGaWxlQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBkZWxldGVGaWxlKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBkZWxldGVTZWxlY3RlZEZpbGVzKGZpbGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24oe2ZpbGVzfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGludmVyc2VTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBMb2FkRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGxvYWRGaWxlcyhmb2xkZXJJZDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRGaWxlc0FjdGlvbih7Zm9sZGVySWR9KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFNlbGVjdEFsbEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RBbGxGaWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggU2VsZWN0RmlsZUFjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgc2VsZWN0RmlsZShmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VsZWN0RmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVW5TZWxlY3RBbGxGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdW5TZWxlY3RBbGxGaWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVblNlbGVjdEFsbEZpbGVzQWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBVblNlbGVjdEZpbGVBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0RmlsZShmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWRFcnJvcihmaWxlOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNFcnJvckFjdGlvbih7ZmlsZXM6IFtmaWxlXX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVXBsb2FkRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVwbG9hZChmaWxlOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNBY3Rpb24oe2ZpbGVzOiBbZmlsZV19KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkU3VjY2VzcyhmaWxlOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogW2ZpbGVdfSkpO1xuICB9XG59XG4iXX0=