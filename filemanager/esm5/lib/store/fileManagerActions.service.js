/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @record
 */
export function IFileManagerPayloadData() { }
if (false) {
    /** @type {?|undefined} */
    IFileManagerPayloadData.prototype.folderId;
    /** @type {?|undefined} */
    IFileManagerPayloadData.prototype.files;
    /** @type {?|undefined} */
    IFileManagerPayloadData.prototype.file;
    /** @type {?|undefined} */
    IFileManagerPayloadData.prototype.fileIds;
    /** @type {?|undefined} */
    IFileManagerPayloadData.prototype.bounds;
}
/**
 * @record
 */
export function IFileManagerAction() { }
if (false) {
    /** @type {?} */
    IFileManagerAction.prototype.payload;
}
/**
 * \@Deprecated - Will be removed in 3.0.0
 */
var FileManagerActionsService = /** @class */ (function () {
    function FileManagerActionsService() {
    }
    /**
     * @Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerActionsService.prototype.chooseFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CHOOSE_FILES,
            payload: { files: files }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerActionsService.prototype.cropFile = /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE,
            payload: {
                file: file,
                bounds: bounds
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.cropFileSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.cropFileError = /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.deleteFile = /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.deleteFileSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
     * @param {?} fileIds
     * @return {?}
     */
    FileManagerActionsService.prototype.deleteSelectedFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
     * @param {?} fileIds
     * @return {?}
     */
    function (fileIds) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
            payload: { fileIds: fileIds }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerActionsService.prototype.deleteSelectedFilesSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS,
            payload: { files: files }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
     * @param {?} folderId
     * @return {?}
     */
    FileManagerActionsService.prototype.loadFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        return {
            type: FileManagerActionsService.FILEMANAGER_LOAD_FILES,
            payload: {
                folderId: folderId
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
     * @return {?}
     */
    FileManagerActionsService.prototype.inverseFileSelection = /**
     * \@Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
     * @return {?}
     */
    function () {
        return {
            type: FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION,
            payload: {}
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
     * @param {?} folderId
     * @param {?} files
     * @return {?}
     */
    FileManagerActionsService.prototype.loadFilesSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
     * @param {?} folderId
     * @param {?} files
     * @return {?}
     */
    function (folderId, files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS,
            payload: {
                folderId: folderId,
                files: files
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
     * @param {?} files
     * @param {?} folderId
     * @return {?}
     */
    FileManagerActionsService.prototype.moveFileSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
     * @param {?} files
     * @param {?} folderId
     * @return {?}
     */
    function (files, folderId) {
        return {
            type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS,
            payload: { folderId: folderId, files: files }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerActionsService.prototype.moveFileError = /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR,
            payload: { files: files }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
     * @return {?}
     */
    FileManagerActionsService.prototype.selectAllFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
     * @return {?}
     */
    function () {
        return {
            type: FileManagerActionsService.FILEMANAGER_SELECT_ALL,
            payload: {}
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.selectFile = /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_SELECT_FILE,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
     * @return {?}
     */
    FileManagerActionsService.prototype.unSelectAll = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
     * @return {?}
     */
    function () {
        return {
            type: FileManagerActionsService.FILEMANAGER_UNSELECT_ALL,
            payload: {}
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.unSelectFile = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UNSELECT_FILE,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.upload = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE,
            payload: {
                files: [file]
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.uploadSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS,
            payload: {
                files: [file]
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.uploadError = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR,
            payload: {
                files: [file]
            }
        };
    };
    FileManagerActionsService.FILEMANAGER_CHOOSE_FILES = 'FILEMANAGER_CHOOSE_FILES';
    FileManagerActionsService.FILEMANAGER_CROP_FILE = 'FILEMANAGER_CROP_FILE';
    FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS = 'FILEMANAGER_CROP_FILE_SUCCESS';
    FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR = 'FILEMANAGER_CROP_FILE_ERROR';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE = 'FILEMANAGER_DELETE_FILE';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS = 'FILEMANAGER_DELETE_FILE_SUCCESS';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION = 'FILEMANAGER_DELETE_FILE_SELECTION';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS = 'FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS';
    FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION = 'FILEMANAGER_INVERSE_FILE_SELECTION';
    FileManagerActionsService.FILEMANAGER_LOAD_FILES = 'FILEMANAGER_LOAD_FILES';
    FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS = 'FILEMANAGER_LOAD_FILES_SUCCESS';
    FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS = 'FILEMANAGER_MOVE_FILES_SUCCESS';
    FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR = 'FILEMANAGER_MOVE_FILES_ERROR';
    FileManagerActionsService.FILEMANAGER_SELECT_ALL = 'FILEMANAGER_SELECT_ALL';
    FileManagerActionsService.FILEMANAGER_SELECT_FILE = 'FILEMANAGER_SELECT_FILE';
    FileManagerActionsService.FILEMANAGER_UNSELECT_FILE = 'FILEMANAGER_UNSELECT_FILE';
    FileManagerActionsService.FILEMANAGER_UNSELECT_ALL = 'FILEMANAGER_UNSELECT_ALL';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE = 'FILEMANAGER_UPLOAD_FILE';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR = 'FILEMANAGER_UPLOAD_FILE_ERROR';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS = 'FILEMANAGER_UPLOAD_FILE_SUCCESS';
    FileManagerActionsService.decorators = [
        { type: Injectable }
    ];
    return FileManagerActionsService;
}());
export { FileManagerActionsService };
if (false) {
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_CHOOSE_FILES;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_CROP_FILE;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_DELETE_FILE;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_LOAD_FILES;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_SELECT_ALL;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_SELECT_FILE;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_UNSELECT_FILE;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_UNSELECT_ALL;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR;
    /** @type {?} */
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJBY3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQU16Qyw2Q0FNQzs7O0lBTEMsMkNBQWtCOztJQUNsQix3Q0FBcUI7O0lBQ3JCLHVDQUFrQjs7SUFDbEIsMENBQW1COztJQUNuQix5Q0FBcUI7Ozs7O0FBR3ZCLHdDQUVDOzs7SUFEQyxxQ0FBaUM7Ozs7O0FBTW5DO0lBQUE7SUF5UEEsQ0FBQztJQWpPQzs7T0FFRzs7Ozs7O0lBQ0ksK0NBQVc7Ozs7O0lBQWxCLFVBQW1CLEtBQW1CO1FBQ3BDLE9BQU87WUFDTCxJQUFJLEVBQUUseUJBQXlCLENBQUMsd0JBQXdCO1lBQ3hELE9BQU8sRUFBRSxFQUFDLEtBQUssT0FBQSxFQUFDO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSSw0Q0FBUTs7Ozs7O0lBQWYsVUFBZ0IsSUFBZ0IsRUFBRSxNQUFtQjtRQUNuRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLHlCQUF5QixDQUFDLHFCQUFxQjtZQUNyRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07YUFDZjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLG1EQUFlOzs7OztJQUF0QixVQUF1QixJQUFnQjtRQUNyQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLHlCQUF5QixDQUFDLDZCQUE2QjtZQUM3RCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLElBQUk7YUFDWDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLGlEQUFhOzs7OztJQUFwQixVQUFx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SUFDNUQsaURBQXVCLEdBQUcseUJBQXlCLENBQUM7SUFDcEQseURBQStCLEdBQUcsaUNBQWlDLENBQUM7SUFDcEUsMkRBQWlDLEdBQUcsbUNBQW1DLENBQUM7SUFDeEUsbUVBQXlDLEdBQUcsMkNBQTJDLENBQUM7SUFDeEYsNERBQWtDLEdBQUcsb0NBQW9DLENBQUM7SUFDMUUsZ0RBQXNCLEdBQUcsd0JBQXdCLENBQUM7SUFDbEQsd0RBQThCLEdBQUcsZ0NBQWdDLENBQUM7SUFDbEUsd0RBQThCLEdBQUcsZ0NBQWdDLENBQUM7SUFDbEUsc0RBQTRCLEdBQUcsOEJBQThCLENBQUM7SUFDOUQsZ0RBQXNCLEdBQUcsd0JBQXdCLENBQUM7SUFDbEQsaURBQXVCLEdBQUcseUJBQXlCLENBQUM7SUFDcEQsbURBQXlCLEdBQUcsMkJBQTJCLENBQUM7SUFDeEQsa0RBQXdCLEdBQUcsMEJBQTBCLENBQUM7SUFDdEQsaURBQXVCLEdBQUcseUJBQXlCLENBQUM7SUFDcEQsdURBQTZCLEdBQUcsK0JBQStCLENBQUM7SUFDaEUseURBQStCLEdBQUcsaUNBQWlDLENBQUM7O2dCQXJCNUUsVUFBVTs7SUF5UFgsZ0NBQUM7Q0FBQSxBQXpQRCxJQXlQQztTQXhQWSx5QkFBeUI7OztJQUNwQyxtREFBNkQ7O0lBQzdELGdEQUF1RDs7SUFDdkQsd0RBQXVFOztJQUN2RSxzREFBbUU7O0lBQ25FLGtEQUEyRDs7SUFDM0QsMERBQTJFOztJQUMzRSw0REFBK0U7O0lBQy9FLG9FQUErRjs7SUFDL0YsNkRBQWlGOztJQUNqRixpREFBeUQ7O0lBQ3pELHlEQUF5RTs7SUFDekUseURBQXlFOztJQUN6RSx1REFBcUU7O0lBQ3JFLGlEQUF5RDs7SUFDekQsa0RBQTJEOztJQUMzRCxvREFBK0Q7O0lBQy9ELG1EQUE2RDs7SUFDN0Qsa0RBQTJEOztJQUMzRCx3REFBdUU7O0lBQ3ZFLDBEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVNYW5hZ2VyUGF5bG9hZERhdGEge1xuICBmb2xkZXJJZD86IHN0cmluZztcbiAgZmlsZXM/OiBJT3V0ZXJGaWxlW107XG4gIGZpbGU/OiBJRmlsZU1vZGVsO1xuICBmaWxlSWRzPzogc3RyaW5nW107XG4gIGJvdW5kcz86IElDcm9wQm91bmRzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlTWFuYWdlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHBheWxvYWQ6IElGaWxlTWFuYWdlclBheWxvYWREYXRhO1xufVxuXG4vKipcbiAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlIHtcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0NIT09TRV9GSUxFUyA9ICdGSUxFTUFOQUdFUl9DSE9PU0VfRklMRVMnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfQ1JPUF9GSUxFID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRSc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1IgPSAnRklMRU1BTkFHRVJfQ1JPUF9GSUxFX0VSUk9SJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0lOVkVSU0VfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfSU5WRVJTRV9GSUxFX1NFTEVDVElPTic7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVMnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfTE9BRF9GSUxFU19TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVNfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX01PVkVfRklMRVNfRVJST1IgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUic7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9TRUxFQ1RfQUxMID0gJ0ZJTEVNQU5BR0VSX1NFTEVDVF9BTEwnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVU5TRUxFQ1RfRklMRSA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9GSUxFJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX1VOU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1IgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1InO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9TVUNDRVNTJztcblxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDaG9vc2VGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjaG9vc2VGaWxlcyhmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DSE9PU0VfRklMRVMsXG4gICAgICBwYXlsb2FkOiB7ZmlsZXN9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZUFjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJRmlsZU1vZGVsLCBib3VuZHM6IElDcm9wQm91bmRzKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgIGJvdW5kczogYm91bmRzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgY3JvcEZpbGVTdWNjZXNzKGZpbGU6IElGaWxlTW9kZWwpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZUVycm9yQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlRXJyb3IoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfQ1JPUF9GSUxFX0VSUk9SLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBEZWxldGVGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGVTdWNjZXNzKGZpbGU6IElGaWxlTW9kZWwpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlU2VsZWN0ZWRGaWxlcyhmaWxlSWRzOiBzdHJpbmdbXSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OLFxuICAgICAgcGF5bG9hZDoge2ZpbGVJZHN9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBkZWxldGVTZWxlY3RlZEZpbGVzU3VjY2VzcyhmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUyxcbiAgICAgIHBheWxvYWQ6IHtmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IExvYWRGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTE9BRF9GSUxFUyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZm9sZGVySWQ6IGZvbGRlcklkXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgaW52ZXJzZUZpbGVTZWxlY3Rpb24oKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9JTlZFUlNFX0ZJTEVfU0VMRUNUSU9OLFxuICAgICAgcGF5bG9hZDoge31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IExvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgbG9hZEZpbGVzU3VjY2Vzcyhmb2xkZXJJZDogc3RyaW5nLCBmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9MT0FEX0ZJTEVTX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgICAgZmlsZXM6IGZpbGVzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIG1vdmVGaWxlU3VjY2VzcyhmaWxlczogSU91dGVyRmlsZVtdLCBmb2xkZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTLFxuICAgICAgcGF5bG9hZDoge2ZvbGRlcklkLCBmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IE1vdmVGaWxlc0Vycm9yQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIG1vdmVGaWxlRXJyb3IoZmlsZXM6IElPdXRlckZpbGVbXSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUixcbiAgICAgIHBheWxvYWQ6IHtmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFNlbGVjdEFsbEZpbGVzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEFsbEZpbGVzKCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfU0VMRUNUX0FMTCxcbiAgICAgIHBheWxvYWQ6IHt9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBTZWxlY3RGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdW5TZWxlY3RBbGwoKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwsXG4gICAgICBwYXlsb2FkOiB7fVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIHVzZSBuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0RmlsZShmaWxlOiBJRmlsZU1vZGVsKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VTlNFTEVDVF9GSUxFLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBVcGxvYWRGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWQoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWRTdWNjZXNzKGZpbGU6IElPdXRlckZpbGUpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRXJyb3IoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1IsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=