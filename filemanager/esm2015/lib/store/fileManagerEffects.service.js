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
export class FileManagerEffectsService {
    /**
     * @param {?} actions$
     * @param {?} fileManagerActions
     * @param {?} filemanagerNotfication
     * @param {?} fileManagerApiService
     */
    constructor(actions$, fileManagerActions, filemanagerNotfication, fileManagerApiService) {
        this.actions$ = actions$;
        this.fileManagerActions = fileManagerActions;
        this.filemanagerNotfication = filemanagerNotfication;
        this.fileManagerApiService = fileManagerApiService;
        this.loadFiles$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_LOAD_FILES), switchMap((action) => this.loadFiles(action.payload.folderId)
            .pipe(map((files) => {
            return new LoadFilesSuccessAction({ files });
        }), catchError((e) => {
            return of(this.onLoadFilesError(action.payload.folderId));
        }))));
        this.cropFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE), switchMap((action) => this.cropFile(action.payload.file, action.payload.bounds)
            .pipe(map((result) => {
            this.filemanagerNotfication.sendNotification({
                type: 'success',
                title: 'Crop Image.',
                message: 'Image has been cropped.'
            });
            return new CropFileSuccessAction({ file: action.payload.file });
        }), catchError(() => of(new CropFileErrorAction({ file: action.payload.file }))))));
        this.deleteFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE), switchMap((action) => this.deleteFile(action.payload.file)
            .pipe(map((result) => {
            return new DeleteFileSuccessAction({ file: action.payload.file });
        }), catchError(() => of(this.onDeleteFileError(action.payload.file))))));
        this.deleteFilesSelection$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION), switchMap((action) => this.deleteFilesSelection(action.payload.fileIds)
            .pipe(map((result) => {
            return new DeleteSelectedFilesSuccessAction({ files: action.payload.fileIds });
        }), catchError(() => of(this.onDeleteFilesSelectionError(action.payload.files))))));
        this.uploadFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE), switchMap((action) => this.uploadFile(action.payload.files[0])
            .pipe(map((result) => {
            return new UploadFilesSuccessAction({ files: [result] });
        }), catchError(() => {
            return empty();
        }))));
        this.moveFile$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_MOVE_NODE), filter((action) => {
            return action.payload.sourceOfDroppedData === 'FILE';
        }), switchMap((action) => this.moveFiles([(/** @type {?} */ (action.payload.oldNode))], action.payload.node)
            .pipe(map((result) => {
            /** @type {?} */
            const folderId = ((/** @type {?} */ (action.payload.oldNode))).folderId;
            return new MoveFilesSuccessAction({ files: result, folderId });
        }), catchError(() => {
            return of(new MoveFilesErrorAction({ files: [(/** @type {?} */ (action.payload.oldNode))] }));
        }))));
        this.filesMoveSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS), map((action) => {
            this.onMoveFilesSuccess();
            return new LoadFilesAction({ folderId: action.payload.folderId });
        }));
        this.uploadError$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR), map((action) => {
            this.filemanagerNotfication.sendNotification({
                type: 'alert',
                title: 'File upload',
                message: `${action.payload.files[0].name} exists on the server in this directory`
            });
        }));
        this.cropFileSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS));
        this.deleteFileSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS));
        this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR))
            .subscribe((action) => {
            this.onCropFileError(action.payload.file);
        });
        this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR))
            .subscribe((action) => {
            this.onMoveFilesError();
        });
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
    }
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        return this.fileManagerApiService.removeFile(file.toJSON());
    }
    /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    deleteFilesSelection(files) {
        return this.fileManagerApiService.removeSelectedFiles(files);
    }
    /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    loadFiles(folderId) {
        return this.fileManagerApiService.loadFiles(folderId);
    }
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    uploadFile(file) {
        return this.fileManagerApiService.uploadFile(file);
    }
    /**
     * @protected
     * @param {?} files
     * @param {?=} folder
     * @return {?}
     */
    moveFiles(files, folder = null) {
        return this.fileManagerApiService.moveFile(files, folder);
    }
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    onCropFileError(file) {
        this.filemanagerNotfication.sendNotification({
            type: 'alert',
            title: 'Crop Image',
            message: '[FILEMANAGER] Can not crop file'
        });
    }
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    onDeleteFileError(file) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete file',
            message: '[FILEMANAGER] Can not delete file' + file.name
        });
    }
    /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    onDeleteFilesSelectionError(files) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete selected files',
            message: '[FILEMANAGER] Not all files were deleted'
        });
    }
    /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    onLoadFilesError(folderId) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Load files',
            message: '[FILEMANAGER] Can not load files for folder ' + folderId
        });
    }
    /**
     * @protected
     * @return {?}
     */
    onMoveFilesSuccess() {
        this.filemanagerNotfication.sendNotification({
            type: 'success',
            title: 'Move files',
            message: 'File was successfully moved to folder'
        });
    }
    /**
     * @protected
     * @return {?}
     */
    onMoveFilesError() {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Move files',
            message: 'File was not successfully moved to new folder'
        });
    }
}
FileManagerEffectsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerEffectsService.ctorParameters = () => [
    { type: Actions },
    { type: FileManagerActionsService },
    { type: FilemanagerNotifcations },
    { type: FileManagerApiService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJFZmZlY3RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS9maWxlTWFuYWdlckVmZmVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUMseUJBQXlCLEVBQXFCLE1BQU0sOEJBQThCLENBQUM7QUFFM0YsT0FBTyxFQUFDLEtBQUssRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHM0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFFTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUFFLGdDQUFnQyxFQUFxQixlQUFlLEVBQzdGLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUEwQix3QkFBd0IsRUFDdkgsTUFBTSx1QkFBdUIsQ0FBQztBQUcvQixNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBaUlwQyxZQUFvQixRQUFpQixFQUNqQixrQkFBNkMsRUFDN0Msc0JBQStDLEVBQy9DLHFCQUE0QztRQUg1QyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFDN0MsMkJBQXNCLEdBQXRCLHNCQUFz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Ozs7OztJQUN2RCwwREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmVlQWN0aW9uVHlwZXN9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZX0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge0lPdXRlck5vZGUsIFRyZWVNb3ZlTm9kZUFjdGlvbn0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UsIElGaWxlTWFuYWdlckFjdGlvbn0gZnJvbSAnLi9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge2VtcHR5LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0lDcm9wQm91bmRzfSBmcm9tICcuLi9jcm9wL0lDcm9wQm91bmRzJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBcGlTZXJ2aWNlfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9uc30gZnJvbSAnLi4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDcm9wRmlsZUFjdGlvbixcbiAgQ3JvcEZpbGVFcnJvckFjdGlvbixcbiAgQ3JvcEZpbGVTdWNjZXNzQWN0aW9uLFxuICBEZWxldGVGaWxlU3VjY2Vzc0FjdGlvbiwgRGVsZXRlU2VsZWN0ZWRGaWxlc1N1Y2Nlc3NBY3Rpb24sIEZpbGVNYW5hZ2VyQWN0aW9uLCBMb2FkRmlsZXNBY3Rpb24sXG4gIExvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24sIE1vdmVGaWxlc0Vycm9yQWN0aW9uLCBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uLCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uLCBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2Uge1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgbG9hZEZpbGVzJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0xPQURfRklMRVMpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy5sb2FkRmlsZXMoYWN0aW9uLnBheWxvYWQuZm9sZGVySWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZmlsZXM6IElPdXRlckZpbGVbXSk6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXN9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YodGhpcy5vbkxvYWRGaWxlc0Vycm9yKGFjdGlvbi5wYXlsb2FkLmZvbGRlcklkKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBjcm9wRmlsZSQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy5jcm9wRmlsZShhY3Rpb24ucGF5bG9hZC5maWxlLCBhY3Rpb24ucGF5bG9hZC5ib3VuZHMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBJT3V0ZXJGaWxlKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIHRpdGxlOiAnQ3JvcCBJbWFnZS4nLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnSW1hZ2UgaGFzIGJlZW4gY3JvcHBlZC4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3JvcEZpbGVTdWNjZXNzQWN0aW9uKHtmaWxlOiBhY3Rpb24ucGF5bG9hZC5maWxlfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgQ3JvcEZpbGVFcnJvckFjdGlvbih7ZmlsZTogYWN0aW9uLnBheWxvYWQuZmlsZX0pKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBkZWxldGVGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBJRmlsZU1hbmFnZXJBY3Rpb24pID0+IHRoaXMuZGVsZXRlRmlsZShhY3Rpb24ucGF5bG9hZC5maWxlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogYm9vbGVhbik6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb24oe2ZpbGU6IGFjdGlvbi5wYXlsb2FkLmZpbGV9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHRoaXMub25EZWxldGVGaWxlRXJyb3IoYWN0aW9uLnBheWxvYWQuZmlsZSkpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGRlbGV0ZUZpbGVzU2VsZWN0aW9uJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTiksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB0aGlzLmRlbGV0ZUZpbGVzU2VsZWN0aW9uKGFjdGlvbi5wYXlsb2FkLmZpbGVJZHMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBib29sZWFuKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXM6IGFjdGlvbi5wYXlsb2FkLmZpbGVJZHN9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHRoaXMub25EZWxldGVGaWxlc1NlbGVjdGlvbkVycm9yKGFjdGlvbi5wYXlsb2FkLmZpbGVzKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyB1cGxvYWRGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBJRmlsZU1hbmFnZXJBY3Rpb24pID0+IHRoaXMudXBsb2FkRmlsZShhY3Rpb24ucGF5bG9hZC5maWxlc1swXSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IElPdXRlckZpbGUpOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXM6IFtyZXN1bHRdfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIG1vdmVGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREUpLFxuICAgICAgZmlsdGVyKChhY3Rpb246IFRyZWVNb3ZlTm9kZUFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuc291cmNlT2ZEcm9wcGVkRGF0YSA9PT0gJ0ZJTEUnO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogVHJlZU1vdmVOb2RlQWN0aW9uKSA9PiB0aGlzLm1vdmVGaWxlcyhbPElPdXRlckZpbGU+YWN0aW9uLnBheWxvYWQub2xkTm9kZV0sIGFjdGlvbi5wYXlsb2FkLm5vZGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBJT3V0ZXJGaWxlW10pOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJJZCA9ICg8SU91dGVyRmlsZT5hY3Rpb24ucGF5bG9hZC5vbGROb2RlKS5mb2xkZXJJZDtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogcmVzdWx0LCBmb2xkZXJJZH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBNb3ZlRmlsZXNFcnJvckFjdGlvbih7ZmlsZXM6IFs8SU91dGVyRmlsZT5hY3Rpb24ucGF5bG9hZC5vbGROb2RlXX0pKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGZpbGVzTW92ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub25Nb3ZlRmlsZXNTdWNjZXNzKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBMb2FkRmlsZXNBY3Rpb24oe2ZvbGRlcklkOiBhY3Rpb24ucGF5bG9hZC5mb2xkZXJJZH0pO1xuICAgICAgfSlcbiAgICApO1xuXG4gIHB1YmxpYyB1cGxvYWRFcnJvciQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VUExPQURfRklMRV9FUlJPUiksXG4gICAgICBtYXAoKGFjdGlvbjogVXBsb2FkRmlsZXNFcnJvckFjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdHlwZTogJ2FsZXJ0JyxcbiAgICAgICAgICB0aXRsZTogJ0ZpbGUgdXBsb2FkJyxcbiAgICAgICAgICBtZXNzYWdlOiBgJHthY3Rpb24ucGF5bG9hZC5maWxlc1swXS5uYW1lfSBleGlzdHMgb24gdGhlIHNlcnZlciBpbiB0aGlzIGRpcmVjdG9yeWBcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgcHVibGljIGNyb3BGaWxlU3VjY2VzcyQ6IE9ic2VydmFibGU8Q3JvcEZpbGVTdWNjZXNzQWN0aW9uPjtcbiAgcHVibGljIGRlbGV0ZUZpbGVTdWNjZXNzJDogT2JzZXJ2YWJsZTxEZWxldGVGaWxlU3VjY2Vzc0FjdGlvbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlTWFuYWdlckFjdGlvbnM6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZmlsZW1hbmFnZXJOb3RmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgZmlsZU1hbmFnZXJBcGlTZXJ2aWNlOiBGaWxlTWFuYWdlckFwaVNlcnZpY2UpIHtcblxuICAgIHRoaXMuY3JvcEZpbGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUylcbiAgICAgICk7XG5cbiAgICB0aGlzLmRlbGV0ZUZpbGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TVUNDRVNTKVxuICAgICAgKTtcblxuICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgIC5waXBlKFxuICAgICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1IpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLm9uQ3JvcEZpbGVFcnJvcihhY3Rpb24ucGF5bG9hZC5maWxlKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX01PVkVfRklMRVNfRVJST1IpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLm9uTW92ZUZpbGVzRXJyb3IoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyb3BGaWxlKGZpbGU6IElGaWxlTW9kZWwsIGJvdW5kczogSUNyb3BCb3VuZHMpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UuY3JvcEZpbGUoZmlsZS50b0pTT04oKSwgYm91bmRzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWxldGVGaWxlKGZpbGU6IElGaWxlTW9kZWwpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UucmVtb3ZlRmlsZShmaWxlLnRvSlNPTigpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWxldGVGaWxlc1NlbGVjdGlvbihmaWxlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UucmVtb3ZlU2VsZWN0ZWRGaWxlcyhmaWxlcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9hZEZpbGVzKGZvbGRlcklkOiBzdHJpbmcgfCBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UubG9hZEZpbGVzKGZvbGRlcklkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGxvYWRGaWxlKGZpbGU6IElPdXRlckZpbGUpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UudXBsb2FkRmlsZShmaWxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBtb3ZlRmlsZXMoZmlsZXM6IElPdXRlckZpbGVbXSwgZm9sZGVyOiBJT3V0ZXJOb2RlID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZU1hbmFnZXJBcGlTZXJ2aWNlLm1vdmVGaWxlKGZpbGVzLCBmb2xkZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uQ3JvcEZpbGVFcnJvcihmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2FsZXJ0JyxcbiAgICAgIHRpdGxlOiAnQ3JvcCBJbWFnZScsXG4gICAgICBtZXNzYWdlOiAnW0ZJTEVNQU5BR0VSXSBDYW4gbm90IGNyb3AgZmlsZSdcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlbGV0ZUZpbGVFcnJvcihmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIHRpdGxlOiAnRGVsZXRlIGZpbGUnLFxuICAgICAgbWVzc2FnZTogJ1tGSUxFTUFOQUdFUl0gQ2FuIG5vdCBkZWxldGUgZmlsZScgKyBmaWxlLm5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlbGV0ZUZpbGVzU2VsZWN0aW9uRXJyb3IoZmlsZXM6IElPdXRlckZpbGVbXSk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ0RlbGV0ZSBzZWxlY3RlZCBmaWxlcycsXG4gICAgICBtZXNzYWdlOiAnW0ZJTEVNQU5BR0VSXSBOb3QgYWxsIGZpbGVzIHdlcmUgZGVsZXRlZCdcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkxvYWRGaWxlc0Vycm9yKGZvbGRlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgdGl0bGU6ICdMb2FkIGZpbGVzJyxcbiAgICAgIG1lc3NhZ2U6ICdbRklMRU1BTkFHRVJdIENhbiBub3QgbG9hZCBmaWxlcyBmb3IgZm9sZGVyICcgKyBmb2xkZXJJZFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTW92ZUZpbGVzU3VjY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB0aXRsZTogJ01vdmUgZmlsZXMnLFxuICAgICAgbWVzc2FnZTogJ0ZpbGUgd2FzIHN1Y2Nlc3NmdWxseSBtb3ZlZCB0byBmb2xkZXInXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Nb3ZlRmlsZXNFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgdGl0bGU6ICdNb3ZlIGZpbGVzJyxcbiAgICAgIG1lc3NhZ2U6ICdGaWxlIHdhcyBub3Qgc3VjY2Vzc2Z1bGx5IG1vdmVkIHRvIG5ldyBmb2xkZXInXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==