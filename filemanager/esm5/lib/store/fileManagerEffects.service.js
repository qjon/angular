/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TreeActionTypes } from '@rign/angular2-tree';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FileManagerActionsService } from './fileManagerActions.service';
import { empty, of } from 'rxjs';
import { FileManagerApiService } from './fileManagerApi.service';
import { FilemanagerNotifcations } from '../services/FilemanagerNotifcations';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { CropFileErrorAction, CropFileSuccessAction, DeleteFileSuccessAction, DeleteSelectedFilesSuccessAction, LoadFilesAction, LoadFilesSuccessAction, MoveFilesErrorAction, MoveFilesSuccessAction, UploadFilesSuccessAction } from './file-manager.action';
var FileManagerEffectsService = /** @class */ (function () {
    function FileManagerEffectsService(actions$, fileManagerActions, filemanagerNotfication, fileManagerApiService) {
        var _this = this;
        this.actions$ = actions$;
        this.fileManagerActions = fileManagerActions;
        this.filemanagerNotfication = filemanagerNotfication;
        this.fileManagerApiService = fileManagerApiService;
        this.loadFiles$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_LOAD_FILES), switchMap(function (action) { return _this.loadFiles(action.payload.folderId)
            .pipe(map(function (files) {
            return new LoadFilesSuccessAction({ files: files });
        }), catchError(function (e) {
            return of(_this.onLoadFilesError(action.payload.folderId));
        })); }));
        this.cropFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE), switchMap(function (action) { return _this.cropFile(action.payload.file, action.payload.bounds)
            .pipe(map(function (result) {
            _this.filemanagerNotfication.sendNotification({
                type: 'success',
                title: 'Crop Image.',
                message: 'Image has been cropped.'
            });
            return new CropFileSuccessAction({ file: action.payload.file });
        }), catchError(function () { return of(new CropFileErrorAction({ file: action.payload.file })); })); }));
        this.deleteFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE), switchMap(function (action) { return _this.deleteFile(action.payload.file)
            .pipe(map(function (result) {
            return new DeleteFileSuccessAction({ file: action.payload.file });
        }), catchError(function () { return of(_this.onDeleteFileError(action.payload.file)); })); }));
        this.deleteFilesSelection$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION), switchMap(function (action) { return _this.deleteFilesSelection(action.payload.fileIds)
            .pipe(map(function (result) {
            return new DeleteSelectedFilesSuccessAction({ files: action.payload.fileIds });
        }), catchError(function () { return of(_this.onDeleteFilesSelectionError(action.payload.files)); })); }));
        this.uploadFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE), switchMap(function (action) { return _this.uploadFile(action.payload.files[0])
            .pipe(map(function (result) {
            return new UploadFilesSuccessAction({ files: [result] });
        }), catchError(function () {
            return empty();
        })); }));
        this.moveFile$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_MOVE_NODE), filter(function (action) {
            return action.payload.sourceOfDroppedData === 'FILE';
        }), switchMap(function (action) { return _this.moveFiles([(/** @type {?} */ (action.payload.oldNode))], action.payload.node)
            .pipe(map(function (result) {
            /** @type {?} */
            var folderId = ((/** @type {?} */ (action.payload.oldNode))).folderId;
            return new MoveFilesSuccessAction({ files: result, folderId: folderId });
        }), catchError(function () {
            return of(new MoveFilesErrorAction({ files: [(/** @type {?} */ (action.payload.oldNode))] }));
        })); }));
        this.filesMoveSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS), map(function (action) {
            _this.onMoveFilesSuccess();
            return new LoadFilesAction({ folderId: action.payload.folderId });
        }));
        this.uploadError$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR), map(function (action) {
            _this.filemanagerNotfication.sendNotification({
                type: 'alert',
                title: 'File upload',
                message: action.payload.files[0].name + " exists on the server in this directory"
            });
        }));
        this.cropFileSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS));
        this.deleteFileSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS));
        this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR))
            .subscribe(function (action) {
            _this.onCropFileError(action.payload.file);
        });
        this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR))
            .subscribe(function (action) {
            _this.onMoveFilesError();
        });
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerEffectsService.prototype.cropFile = /**
     * @protected
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
    };
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    FileManagerEffectsService.prototype.deleteFile = /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this.fileManagerApiService.removeFile(file.toJSON());
    };
    /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    FileManagerEffectsService.prototype.deleteFilesSelection = /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return this.fileManagerApiService.removeSelectedFiles(files);
    };
    /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    FileManagerEffectsService.prototype.loadFiles = /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        return this.fileManagerApiService.loadFiles(folderId);
    };
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    FileManagerEffectsService.prototype.uploadFile = /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this.fileManagerApiService.uploadFile(file);
    };
    /**
     * @protected
     * @param {?} files
     * @param {?=} folder
     * @return {?}
     */
    FileManagerEffectsService.prototype.moveFiles = /**
     * @protected
     * @param {?} files
     * @param {?=} folder
     * @return {?}
     */
    function (files, folder) {
        if (folder === void 0) { folder = null; }
        return this.fileManagerApiService.moveFile(files, folder);
    };
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    FileManagerEffectsService.prototype.onCropFileError = /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.filemanagerNotfication.sendNotification({
            type: 'alert',
            title: 'Crop Image',
            message: '[FILEMANAGER] Can not crop file'
        });
    };
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    FileManagerEffectsService.prototype.onDeleteFileError = /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete file',
            message: '[FILEMANAGER] Can not delete file' + file.name
        });
    };
    /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    FileManagerEffectsService.prototype.onDeleteFilesSelectionError = /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete selected files',
            message: '[FILEMANAGER] Not all files were deleted'
        });
    };
    /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    FileManagerEffectsService.prototype.onLoadFilesError = /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Load files',
            message: '[FILEMANAGER] Can not load files for folder ' + folderId
        });
    };
    /**
     * @protected
     * @return {?}
     */
    FileManagerEffectsService.prototype.onMoveFilesSuccess = /**
     * @protected
     * @return {?}
     */
    function () {
        this.filemanagerNotfication.sendNotification({
            type: 'success',
            title: 'Move files',
            message: 'File was successfully moved to folder'
        });
    };
    /**
     * @protected
     * @return {?}
     */
    FileManagerEffectsService.prototype.onMoveFilesError = /**
     * @protected
     * @return {?}
     */
    function () {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Move files',
            message: 'File was not successfully moved to new folder'
        });
    };
    FileManagerEffectsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerEffectsService.ctorParameters = function () { return [
        { type: Actions },
        { type: FileManagerActionsService },
        { type: FilemanagerNotifcations },
        { type: FileManagerApiService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "loadFiles$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "cropFile$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "deleteFile$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "deleteFilesSelection$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "uploadFile$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "moveFile$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "filesMoveSuccess$", void 0);
    return FileManagerEffectsService;
}());
export { FileManagerEffectsService };
if (false) {
    /** @type {?} */
    FileManagerEffectsService.prototype.loadFiles$;
    /** @type {?} */
    FileManagerEffectsService.prototype.cropFile$;
    /** @type {?} */
    FileManagerEffectsService.prototype.deleteFile$;
    /** @type {?} */
    FileManagerEffectsService.prototype.deleteFilesSelection$;
    /** @type {?} */
    FileManagerEffectsService.prototype.uploadFile$;
    /** @type {?} */
    FileManagerEffectsService.prototype.moveFile$;
    /** @type {?} */
    FileManagerEffectsService.prototype.filesMoveSuccess$;
    /** @type {?} */
    FileManagerEffectsService.prototype.uploadError$;
    /** @type {?} */
    FileManagerEffectsService.prototype.cropFileSuccess$;
    /** @type {?} */
    FileManagerEffectsService.prototype.deleteFileSuccess$;
    /**
     * @type {?}
     * @private
     */
    FileManagerEffectsService.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    FileManagerEffectsService.prototype.fileManagerActions;
    /**
     * @type {?}
     * @private
     */
    FileManagerEffectsService.prototype.filemanagerNotfication;
    /**
     * @type {?}
     * @private
     */
    FileManagerEffectsService.prototype.fileManagerApiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJFZmZlY3RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS9maWxlTWFuYWdlckVmZmVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUMseUJBQXlCLEVBQXFCLE1BQU0sOEJBQThCLENBQUM7QUFFM0YsT0FBTyxFQUFDLEtBQUssRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHM0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFFTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUFFLGdDQUFnQyxFQUFxQixlQUFlLEVBQzdGLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUEwQix3QkFBd0IsRUFDdkgsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQjtJQWtJRSxtQ0FBb0IsUUFBaUIsRUFDakIsa0JBQTZDLEVBQzdDLHNCQUErQyxFQUMvQyxxQkFBNEM7UUFIaEUsaUJBOEJDO1FBOUJtQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFDN0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF5QjtRQUMvQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBakl6RCxlQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDOUIsSUFBSSxDQUNILE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQyxFQUN4RCxTQUFTLENBQUMsVUFBQyxNQUEwQixJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUM5RSxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsS0FBbUI7WUFDdEIsT0FBTyxJQUFJLHNCQUFzQixDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLENBQUM7WUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUNILEVBUnVDLENBUXZDLENBQ0YsQ0FDRixDQUFDO1FBR0csY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQzdCLElBQUksQ0FDSCxNQUFNLENBQUMseUJBQXlCLENBQUMscUJBQXFCLENBQUMsRUFDdkQsU0FBUyxDQUFDLFVBQUMsTUFBMEIsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDaEcsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLE1BQWtCO1lBQ3JCLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLE9BQU8sRUFBRSx5QkFBeUI7YUFDbkMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLHFCQUFxQixDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxFQUF4RCxDQUF3RCxDQUFDLENBQzNFLEVBWHVDLENBV3ZDLENBQ0YsQ0FDRixDQUFDO1FBR0csZ0JBQVcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUMvQixJQUFJLENBQ0gsTUFBTSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLEVBQ3pELFNBQVMsQ0FBQyxVQUFDLE1BQTBCLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQzNFLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxNQUFlO1lBQ2xCLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUNsRSxFQU51QyxDQU12QyxDQUNGLENBQ0YsQ0FBQztRQUdHLDBCQUFxQixHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ3pDLElBQUksQ0FDSCxNQUFNLENBQUMseUJBQXlCLENBQUMsaUNBQWlDLENBQUMsRUFDbkUsU0FBUyxDQUFDLFVBQUMsTUFBMEIsSUFBSyxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUN4RixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsTUFBZTtZQUNsQixPQUFPLElBQUksZ0NBQWdDLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLEtBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTFELENBQTBELENBQUMsQ0FDN0UsRUFOdUMsQ0FNdkMsQ0FDRixDQUNGLENBQUM7UUFJRyxnQkFBVyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQy9CLElBQUksQ0FDSCxNQUFNLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsRUFDekQsU0FBUyxDQUFDLFVBQUMsTUFBMEIsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0UsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLE1BQWtCO1lBQ3JCLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUM7WUFDVCxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUNILEVBUnVDLENBUXZDLENBQ0YsQ0FDRixDQUFDO1FBR0csY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQzdCLElBQUksQ0FDSCxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUN0QyxNQUFNLENBQUMsVUFBQyxNQUEwQjtZQUNoQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEtBQUssTUFBTSxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxVQUFDLE1BQTBCLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsbUJBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2hILElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxNQUFvQjs7Z0JBQ2pCLFFBQVEsR0FBRyxDQUFDLG1CQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFBLENBQUMsQ0FBQyxRQUFRO1lBRTlELE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxtQkFBWSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsQ0FBQyxDQUFDLENBQ0gsRUFWdUMsQ0FVdkMsQ0FDRixDQUNGLENBQUM7UUFHRyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUTthQUNyQyxJQUFJLENBQ0gsTUFBTSxDQUFDLHlCQUF5QixDQUFDLDhCQUE4QixDQUFDLEVBQ2hFLEdBQUcsQ0FBQyxVQUFDLE1BQThCO1lBQ2pDLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBRTFCLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRyxpQkFBWSxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ2hDLElBQUksQ0FDSCxNQUFNLENBQUMseUJBQXlCLENBQUMsNkJBQTZCLENBQUMsRUFDL0QsR0FBRyxDQUFDLFVBQUMsTUFBOEI7WUFDakMsS0FBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDO2dCQUMzQyxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsT0FBTyxFQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksNENBQXlDO2FBQ2xGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNILENBQUM7UUFVRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDbEMsSUFBSSxDQUNILE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyw2QkFBNkIsQ0FBQyxDQUNoRSxDQUFDO1FBRUosSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ3BDLElBQUksQ0FDSCxNQUFNLENBQUMseUJBQXlCLENBQUMsK0JBQStCLENBQUMsQ0FDbEUsQ0FBQztRQUVKLElBQUksQ0FBQyxRQUFRO2FBQ1YsSUFBSSxDQUNILE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQywyQkFBMkIsQ0FBQyxDQUM5RDthQUNBLFNBQVMsQ0FBQyxVQUFDLE1BQTBCO1lBQ3BDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxRQUFRO2FBQ1YsSUFBSSxDQUNILE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUMvRDthQUNBLFNBQVMsQ0FBQyxVQUFDLE1BQTBCO1lBQ3BDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7OztJQUVTLDRDQUFROzs7Ozs7SUFBbEIsVUFBbUIsSUFBZ0IsRUFBRSxNQUFtQjtRQUN0RCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVTLDhDQUFVOzs7OztJQUFwQixVQUFxQixJQUFnQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRVMsd0RBQW9COzs7OztJQUE5QixVQUErQixLQUFlO1FBQzVDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVTLDZDQUFTOzs7OztJQUFuQixVQUFvQixRQUF1QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRVMsOENBQVU7Ozs7O0lBQXBCLFVBQXFCLElBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7O0lBRVMsNkNBQVM7Ozs7OztJQUFuQixVQUFvQixLQUFtQixFQUFFLE1BQXlCO1FBQXpCLHVCQUFBLEVBQUEsYUFBeUI7UUFDaEUsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFFUyxtREFBZTs7Ozs7SUFBekIsVUFBMEIsSUFBZ0I7UUFDeEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDO1lBQzNDLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLGlDQUFpQztTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFUyxxREFBaUI7Ozs7O0lBQTNCLFVBQTRCLElBQWdCO1FBQzFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQyxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE9BQU8sRUFBRSxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsSUFBSTtTQUN6RCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFUywrREFBMkI7Ozs7O0lBQXJDLFVBQXNDLEtBQW1CO1FBQ3ZELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQyxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSx1QkFBdUI7WUFDOUIsT0FBTyxFQUFFLDBDQUEwQztTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFUyxvREFBZ0I7Ozs7O0lBQTFCLFVBQTJCLFFBQWdCO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQyxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxZQUFZO1lBQ25CLE9BQU8sRUFBRSw4Q0FBOEMsR0FBRyxRQUFRO1NBQ25FLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRVMsc0RBQWtCOzs7O0lBQTVCO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDO1lBQzNDLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLHVDQUF1QztTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLG9EQUFnQjs7OztJQUExQjtRQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQyxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxZQUFZO1lBQ25CLE9BQU8sRUFBRSwrQ0FBK0M7U0FDekQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBeE9GLFVBQVU7Ozs7Z0JBbEJILE9BQU87Z0JBRVAseUJBQXlCO2dCQU16Qix1QkFBdUI7Z0JBRHZCLHFCQUFxQjs7SUFlM0I7UUFEQyxNQUFNLEVBQUU7O2lFQWNMO0lBR0o7UUFEQyxNQUFNLEVBQUU7O2dFQWlCTDtJQUdKO1FBREMsTUFBTSxFQUFFOztrRUFZTDtJQUdKO1FBREMsTUFBTSxFQUFFOzs0RUFZTDtJQUlKO1FBREMsTUFBTSxFQUFFOztrRUFjTDtJQUdKO1FBREMsTUFBTSxFQUFFOztnRUFtQkw7SUFHSjtRQURDLE1BQU0sRUFBRTs7d0VBU0w7SUF3SE4sZ0NBQUM7Q0FBQSxBQXpPRCxJQXlPQztTQXhPWSx5QkFBeUI7OztJQUVwQywrQ0FjSTs7SUFFSiw4Q0FpQkk7O0lBRUosZ0RBWUk7O0lBRUosMERBWUk7O0lBR0osZ0RBY0k7O0lBRUosOENBbUJJOztJQUVKLHNEQVNJOztJQUVKLGlEQVVJOztJQUVKLHFEQUEyRDs7SUFDM0QsdURBQStEOzs7OztJQUVuRCw2Q0FBeUI7Ozs7O0lBQ3pCLHVEQUFxRDs7Ozs7SUFDckQsMkRBQXVEOzs7OztJQUN2RCwwREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmVlQWN0aW9uVHlwZXN9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZX0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge0lPdXRlck5vZGUsIFRyZWVNb3ZlTm9kZUFjdGlvbn0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UsIElGaWxlTWFuYWdlckFjdGlvbn0gZnJvbSAnLi9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge2VtcHR5LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0lDcm9wQm91bmRzfSBmcm9tICcuLi9jcm9wL0lDcm9wQm91bmRzJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBcGlTZXJ2aWNlfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9uc30gZnJvbSAnLi4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDcm9wRmlsZUFjdGlvbixcbiAgQ3JvcEZpbGVFcnJvckFjdGlvbixcbiAgQ3JvcEZpbGVTdWNjZXNzQWN0aW9uLFxuICBEZWxldGVGaWxlU3VjY2Vzc0FjdGlvbiwgRGVsZXRlU2VsZWN0ZWRGaWxlc1N1Y2Nlc3NBY3Rpb24sIEZpbGVNYW5hZ2VyQWN0aW9uLCBMb2FkRmlsZXNBY3Rpb24sXG4gIExvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24sIE1vdmVGaWxlc0Vycm9yQWN0aW9uLCBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uLCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uLCBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2Uge1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgbG9hZEZpbGVzJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0xPQURfRklMRVMpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy5sb2FkRmlsZXMoYWN0aW9uLnBheWxvYWQuZm9sZGVySWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZmlsZXM6IElPdXRlckZpbGVbXSk6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXN9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YodGhpcy5vbkxvYWRGaWxlc0Vycm9yKGFjdGlvbi5wYXlsb2FkLmZvbGRlcklkKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBjcm9wRmlsZSQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy5jcm9wRmlsZShhY3Rpb24ucGF5bG9hZC5maWxlLCBhY3Rpb24ucGF5bG9hZC5ib3VuZHMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBJT3V0ZXJGaWxlKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIHRpdGxlOiAnQ3JvcCBJbWFnZS4nLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnSW1hZ2UgaGFzIGJlZW4gY3JvcHBlZC4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3JvcEZpbGVTdWNjZXNzQWN0aW9uKHtmaWxlOiBhY3Rpb24ucGF5bG9hZC5maWxlfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgQ3JvcEZpbGVFcnJvckFjdGlvbih7ZmlsZTogYWN0aW9uLnBheWxvYWQuZmlsZX0pKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBkZWxldGVGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBJRmlsZU1hbmFnZXJBY3Rpb24pID0+IHRoaXMuZGVsZXRlRmlsZShhY3Rpb24ucGF5bG9hZC5maWxlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogYm9vbGVhbik6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb24oe2ZpbGU6IGFjdGlvbi5wYXlsb2FkLmZpbGV9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHRoaXMub25EZWxldGVGaWxlRXJyb3IoYWN0aW9uLnBheWxvYWQuZmlsZSkpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGRlbGV0ZUZpbGVzU2VsZWN0aW9uJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTiksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB0aGlzLmRlbGV0ZUZpbGVzU2VsZWN0aW9uKGFjdGlvbi5wYXlsb2FkLmZpbGVJZHMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBib29sZWFuKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXM6IGFjdGlvbi5wYXlsb2FkLmZpbGVJZHN9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHRoaXMub25EZWxldGVGaWxlc1NlbGVjdGlvbkVycm9yKGFjdGlvbi5wYXlsb2FkLmZpbGVzKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyB1cGxvYWRGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBJRmlsZU1hbmFnZXJBY3Rpb24pID0+IHRoaXMudXBsb2FkRmlsZShhY3Rpb24ucGF5bG9hZC5maWxlc1swXSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IElPdXRlckZpbGUpOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXM6IFtyZXN1bHRdfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIG1vdmVGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREUpLFxuICAgICAgZmlsdGVyKChhY3Rpb246IFRyZWVNb3ZlTm9kZUFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuc291cmNlT2ZEcm9wcGVkRGF0YSA9PT0gJ0ZJTEUnO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogVHJlZU1vdmVOb2RlQWN0aW9uKSA9PiB0aGlzLm1vdmVGaWxlcyhbPElPdXRlckZpbGU+YWN0aW9uLnBheWxvYWQub2xkTm9kZV0sIGFjdGlvbi5wYXlsb2FkLm5vZGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBJT3V0ZXJGaWxlW10pOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJJZCA9ICg8SU91dGVyRmlsZT5hY3Rpb24ucGF5bG9hZC5vbGROb2RlKS5mb2xkZXJJZDtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogcmVzdWx0LCBmb2xkZXJJZH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBNb3ZlRmlsZXNFcnJvckFjdGlvbih7ZmlsZXM6IFs8SU91dGVyRmlsZT5hY3Rpb24ucGF5bG9hZC5vbGROb2RlXX0pKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGZpbGVzTW92ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub25Nb3ZlRmlsZXNTdWNjZXNzKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBMb2FkRmlsZXNBY3Rpb24oe2ZvbGRlcklkOiBhY3Rpb24ucGF5bG9hZC5mb2xkZXJJZH0pO1xuICAgICAgfSlcbiAgICApO1xuXG4gIHB1YmxpYyB1cGxvYWRFcnJvciQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VUExPQURfRklMRV9FUlJPUiksXG4gICAgICBtYXAoKGFjdGlvbjogVXBsb2FkRmlsZXNFcnJvckFjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdHlwZTogJ2FsZXJ0JyxcbiAgICAgICAgICB0aXRsZTogJ0ZpbGUgdXBsb2FkJyxcbiAgICAgICAgICBtZXNzYWdlOiBgJHthY3Rpb24ucGF5bG9hZC5maWxlc1swXS5uYW1lfSBleGlzdHMgb24gdGhlIHNlcnZlciBpbiB0aGlzIGRpcmVjdG9yeWBcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgcHVibGljIGNyb3BGaWxlU3VjY2VzcyQ6IE9ic2VydmFibGU8Q3JvcEZpbGVTdWNjZXNzQWN0aW9uPjtcbiAgcHVibGljIGRlbGV0ZUZpbGVTdWNjZXNzJDogT2JzZXJ2YWJsZTxEZWxldGVGaWxlU3VjY2Vzc0FjdGlvbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlTWFuYWdlckFjdGlvbnM6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZmlsZW1hbmFnZXJOb3RmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgZmlsZU1hbmFnZXJBcGlTZXJ2aWNlOiBGaWxlTWFuYWdlckFwaVNlcnZpY2UpIHtcblxuICAgIHRoaXMuY3JvcEZpbGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUylcbiAgICAgICk7XG5cbiAgICB0aGlzLmRlbGV0ZUZpbGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TVUNDRVNTKVxuICAgICAgKTtcblxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1IpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLm9uQ3JvcEZpbGVFcnJvcihhY3Rpb24ucGF5bG9hZC5maWxlKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX01PVkVfRklMRVNfRVJST1IpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLm9uTW92ZUZpbGVzRXJyb3IoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyb3BGaWxlKGZpbGU6IElGaWxlTW9kZWwsIGJvdW5kczogSUNyb3BCb3VuZHMpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UuY3JvcEZpbGUoZmlsZS50b0pTT04oKSwgYm91bmRzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWxldGVGaWxlKGZpbGU6IElGaWxlTW9kZWwpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UucmVtb3ZlRmlsZShmaWxlLnRvSlNPTigpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWxldGVGaWxlc1NlbGVjdGlvbihmaWxlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UucmVtb3ZlU2VsZWN0ZWRGaWxlcyhmaWxlcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9hZEZpbGVzKGZvbGRlcklkOiBzdHJpbmcgfCBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UubG9hZEZpbGVzKGZvbGRlcklkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGxvYWRGaWxlKGZpbGU6IElPdXRlckZpbGUpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UudXBsb2FkRmlsZShmaWxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBtb3ZlRmlsZXMoZmlsZXM6IElPdXRlckZpbGVbXSwgZm9sZGVyOiBJT3V0ZXJOb2RlID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZU1hbmFnZXJBcGlTZXJ2aWNlLm1vdmVGaWxlKGZpbGVzLCBmb2xkZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uQ3JvcEZpbGVFcnJvcihmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2FsZXJ0JyxcbiAgICAgIHRpdGxlOiAnQ3JvcCBJbWFnZScsXG4gICAgICBtZXNzYWdlOiAnW0ZJTEVNQU5BR0VSXSBDYW4gbm90IGNyb3AgZmlsZSdcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlbGV0ZUZpbGVFcnJvcihmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIHRpdGxlOiAnRGVsZXRlIGZpbGUnLFxuICAgICAgbWVzc2FnZTogJ1tGSUxFTUFOQUdFUl0gQ2FuIG5vdCBkZWxldGUgZmlsZScgKyBmaWxlLm5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlbGV0ZUZpbGVzU2VsZWN0aW9uRXJyb3IoZmlsZXM6IElPdXRlckZpbGVbXSk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ0RlbGV0ZSBzZWxlY3RlZCBmaWxlcycsXG4gICAgICBtZXNzYWdlOiAnW0ZJTEVNQU5BR0VSXSBOb3QgYWxsIGZpbGVzIHdlcmUgZGVsZXRlZCdcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkxvYWRGaWxlc0Vycm9yKGZvbGRlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgdGl0bGU6ICdMb2FkIGZpbGVzJyxcbiAgICAgIG1lc3NhZ2U6ICdbRklMRU1BTkFHRVJdIENhbiBub3QgbG9hZCBmaWxlcyBmb3IgZm9sZGVyICcgKyBmb2xkZXJJZFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTW92ZUZpbGVzU3VjY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB0aXRsZTogJ01vdmUgZmlsZXMnLFxuICAgICAgbWVzc2FnZTogJ0ZpbGUgd2FzIHN1Y2Nlc3NmdWxseSBtb3ZlZCB0byBmb2xkZXInXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Nb3ZlRmlsZXNFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgdGl0bGU6ICdNb3ZlIGZpbGVzJyxcbiAgICAgIG1lc3NhZ2U6ICdGaWxlIHdhcyBub3Qgc3VjY2Vzc2Z1bGx5IG1vdmVkIHRvIG5ldyBmb2xkZXInXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==