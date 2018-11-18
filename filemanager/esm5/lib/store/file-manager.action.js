/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var FileManagerActionTypes = {
    CHOOSE_FILES: 'FILEMANAGER_CHOOSE_FILES',
    CROP_FILE: 'FILEMANAGER_CROP_FILE',
    CROP_FILE_SUCCESS: 'FILEMANAGER_CROP_FILE_SUCCESS',
    CROP_FILE_ERROR: 'FILEMANAGER_CROP_FILE_ERROR',
    DELETE_FILE: 'FILEMANAGER_DELETE_FILE',
    DELETE_FILE_SUCCESS: 'FILEMANAGER_DELETE_FILE_SUCCESS',
    DELETE_FILE_SELECTION: 'FILEMANAGER_DELETE_FILE_SELECTION',
    DELETE_FILE_SELECTION_SUCCESS: 'FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS',
    INVERSE_FILE_SELECTION: 'FILEMANAGER_INVERSE_FILE_SELECTION',
    LOAD_FILES: 'FILEMANAGER_LOAD_FILES',
    LOAD_FILES_SUCCESS: 'FILEMANAGER_LOAD_FILES_SUCCESS',
    MOVE_FILES_SUCCESS: 'FILEMANAGER_MOVE_FILES_SUCCESS',
    MOVE_FILES_ERROR: 'FILEMANAGER_MOVE_FILES_ERROR',
    SELECT_ALL: 'FILEMANAGER_SELECT_ALL',
    SELECT_FILE: 'FILEMANAGER_SELECT_FILE',
    UNSELECT_FILE: 'FILEMANAGER_UNSELECT_FILE',
    UNSELECT_ALL: 'FILEMANAGER_UNSELECT_ALL',
    UPLOAD_FILE: 'FILEMANAGER_UPLOAD_FILE',
    UPLOAD_FILE_ERROR: 'FILEMANAGER_UPLOAD_FILE_ERROR',
    UPLOAD_FILE_SUCCESS: 'FILEMANAGER_UPLOAD_FILE_SUCCESS',
};
export { FileManagerActionTypes };
var ChooseFilesAction = /** @class */ (function () {
    function ChooseFilesAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CHOOSE_FILES;
    }
    return ChooseFilesAction;
}());
export { ChooseFilesAction };
if (false) {
    /** @type {?} */
    ChooseFilesAction.prototype.type;
    /** @type {?} */
    ChooseFilesAction.prototype.payload;
}
var CropFileAction = /** @class */ (function () {
    function CropFileAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE;
    }
    return CropFileAction;
}());
export { CropFileAction };
if (false) {
    /** @type {?} */
    CropFileAction.prototype.type;
    /** @type {?} */
    CropFileAction.prototype.payload;
}
var CropFileErrorAction = /** @class */ (function () {
    function CropFileErrorAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE_ERROR;
    }
    return CropFileErrorAction;
}());
export { CropFileErrorAction };
if (false) {
    /** @type {?} */
    CropFileErrorAction.prototype.type;
    /** @type {?} */
    CropFileErrorAction.prototype.payload;
}
var CropFileSuccessAction = /** @class */ (function () {
    function CropFileSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE_SUCCESS;
    }
    return CropFileSuccessAction;
}());
export { CropFileSuccessAction };
if (false) {
    /** @type {?} */
    CropFileSuccessAction.prototype.type;
    /** @type {?} */
    CropFileSuccessAction.prototype.payload;
}
var DeleteFileAction = /** @class */ (function () {
    function DeleteFileAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE;
    }
    return DeleteFileAction;
}());
export { DeleteFileAction };
if (false) {
    /** @type {?} */
    DeleteFileAction.prototype.type;
    /** @type {?} */
    DeleteFileAction.prototype.payload;
}
var DeleteFileSuccessAction = /** @class */ (function () {
    function DeleteFileSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SUCCESS;
    }
    return DeleteFileSuccessAction;
}());
export { DeleteFileSuccessAction };
if (false) {
    /** @type {?} */
    DeleteFileSuccessAction.prototype.type;
    /** @type {?} */
    DeleteFileSuccessAction.prototype.payload;
}
var DeleteSelectedFilesAction = /** @class */ (function () {
    function DeleteSelectedFilesAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SELECTION;
    }
    return DeleteSelectedFilesAction;
}());
export { DeleteSelectedFilesAction };
if (false) {
    /** @type {?} */
    DeleteSelectedFilesAction.prototype.type;
    /** @type {?} */
    DeleteSelectedFilesAction.prototype.payload;
}
var DeleteSelectedFilesSuccessAction = /** @class */ (function () {
    function DeleteSelectedFilesSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS;
    }
    return DeleteSelectedFilesSuccessAction;
}());
export { DeleteSelectedFilesSuccessAction };
if (false) {
    /** @type {?} */
    DeleteSelectedFilesSuccessAction.prototype.type;
    /** @type {?} */
    DeleteSelectedFilesSuccessAction.prototype.payload;
}
var InverseFilesSelectionAction = /** @class */ (function () {
    function InverseFilesSelectionAction() {
        this.type = FileManagerActionTypes.INVERSE_FILE_SELECTION;
    }
    return InverseFilesSelectionAction;
}());
export { InverseFilesSelectionAction };
if (false) {
    /** @type {?} */
    InverseFilesSelectionAction.prototype.type;
}
var LoadFilesAction = /** @class */ (function () {
    function LoadFilesAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.LOAD_FILES;
    }
    return LoadFilesAction;
}());
export { LoadFilesAction };
if (false) {
    /** @type {?} */
    LoadFilesAction.prototype.type;
    /** @type {?} */
    LoadFilesAction.prototype.payload;
}
var LoadFilesSuccessAction = /** @class */ (function () {
    function LoadFilesSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.LOAD_FILES_SUCCESS;
    }
    return LoadFilesSuccessAction;
}());
export { LoadFilesSuccessAction };
if (false) {
    /** @type {?} */
    LoadFilesSuccessAction.prototype.type;
    /** @type {?} */
    LoadFilesSuccessAction.prototype.payload;
}
var MoveFilesErrorAction = /** @class */ (function () {
    function MoveFilesErrorAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.MOVE_FILES_ERROR;
    }
    return MoveFilesErrorAction;
}());
export { MoveFilesErrorAction };
if (false) {
    /** @type {?} */
    MoveFilesErrorAction.prototype.type;
    /** @type {?} */
    MoveFilesErrorAction.prototype.payload;
}
var MoveFilesSuccessAction = /** @class */ (function () {
    function MoveFilesSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.MOVE_FILES_SUCCESS;
    }
    return MoveFilesSuccessAction;
}());
export { MoveFilesSuccessAction };
if (false) {
    /** @type {?} */
    MoveFilesSuccessAction.prototype.type;
    /** @type {?} */
    MoveFilesSuccessAction.prototype.payload;
}
var SelectAllFilesAction = /** @class */ (function () {
    function SelectAllFilesAction() {
        this.type = FileManagerActionTypes.SELECT_ALL;
    }
    return SelectAllFilesAction;
}());
export { SelectAllFilesAction };
if (false) {
    /** @type {?} */
    SelectAllFilesAction.prototype.type;
}
var SelectFileAction = /** @class */ (function () {
    function SelectFileAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.SELECT_FILE;
    }
    return SelectFileAction;
}());
export { SelectFileAction };
if (false) {
    /** @type {?} */
    SelectFileAction.prototype.type;
    /** @type {?} */
    SelectFileAction.prototype.payload;
}
var UnSelectAllFilesAction = /** @class */ (function () {
    function UnSelectAllFilesAction() {
        this.type = FileManagerActionTypes.UNSELECT_ALL;
    }
    return UnSelectAllFilesAction;
}());
export { UnSelectAllFilesAction };
if (false) {
    /** @type {?} */
    UnSelectAllFilesAction.prototype.type;
}
var UnSelectFileAction = /** @class */ (function () {
    function UnSelectFileAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UNSELECT_FILE;
    }
    return UnSelectFileAction;
}());
export { UnSelectFileAction };
if (false) {
    /** @type {?} */
    UnSelectFileAction.prototype.type;
    /** @type {?} */
    UnSelectFileAction.prototype.payload;
}
var UploadFilesAction = /** @class */ (function () {
    function UploadFilesAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE;
    }
    return UploadFilesAction;
}());
export { UploadFilesAction };
if (false) {
    /** @type {?} */
    UploadFilesAction.prototype.type;
    /** @type {?} */
    UploadFilesAction.prototype.payload;
}
var UploadFilesErrorAction = /** @class */ (function () {
    function UploadFilesErrorAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE_ERROR;
    }
    return UploadFilesErrorAction;
}());
export { UploadFilesErrorAction };
if (false) {
    /** @type {?} */
    UploadFilesErrorAction.prototype.type;
    /** @type {?} */
    UploadFilesErrorAction.prototype.payload;
}
var UploadFilesSuccessAction = /** @class */ (function () {
    function UploadFilesSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE_SUCCESS;
    }
    return UploadFilesSuccessAction;
}());
export { UploadFilesSuccessAction };
if (false) {
    /** @type {?} */
    UploadFilesSuccessAction.prototype.type;
    /** @type {?} */
    UploadFilesSuccessAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1tYW5hZ2VyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsY0FBZSwwQkFBMEI7SUFDekMsV0FBWSx1QkFBdUI7SUFDbkMsbUJBQW9CLCtCQUErQjtJQUNuRCxpQkFBa0IsNkJBQTZCO0lBQy9DLGFBQWMseUJBQXlCO0lBQ3ZDLHFCQUFzQixpQ0FBaUM7SUFDdkQsdUJBQXdCLG1DQUFtQztJQUMzRCwrQkFBZ0MsMkNBQTJDO0lBQzNFLHdCQUF5QixvQ0FBb0M7SUFDN0QsWUFBYSx3QkFBd0I7SUFDckMsb0JBQXFCLGdDQUFnQztJQUNyRCxvQkFBcUIsZ0NBQWdDO0lBQ3JELGtCQUFtQiw4QkFBOEI7SUFDakQsWUFBYSx3QkFBd0I7SUFDckMsYUFBYyx5QkFBeUI7SUFDdkMsZUFBZ0IsMkJBQTJCO0lBQzNDLGNBQWUsMEJBQTBCO0lBQ3pDLGFBQWMseUJBQXlCO0lBQ3ZDLG1CQUFvQiwrQkFBK0I7SUFDbkQscUJBQXNCLGlDQUFpQzs7O0FBR3pEO0lBR0UsMkJBQTBCLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBRmpELFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLENBQUM7SUFJcEQsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxpQ0FBb0Q7O0lBRWpDLG9DQUF1Qzs7QUFLNUQ7SUFHRSx3QkFBMEIsT0FBa0Q7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBMkM7UUFGbkUsU0FBSSxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQztJQUlqRCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLDhCQUFpRDs7SUFFOUIsaUNBQXlEOztBQUs5RTtJQUdFLDZCQUEwQixPQUE0QjtR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O0lBTEMsd0NBQTJEOztJQUV4QywyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5cbmV4cG9ydCBlbnVtIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMge1xuICBDSE9PU0VfRklMRVMgPSAnRklMRU1BTkFHRVJfQ0hPT1NFX0ZJTEVTJyxcbiAgQ1JPUF9GSUxFID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRScsXG4gIENST1BfRklMRV9TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTJyxcbiAgQ1JPUF9GSUxFX0VSUk9SID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRV9FUlJPUicsXG4gIERFTEVURV9GSUxFID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFJyxcbiAgREVMRVRFX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TVUNDRVNTJyxcbiAgREVMRVRFX0ZJTEVfU0VMRUNUSU9OID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTicsXG4gIERFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTJyxcbiAgSU5WRVJTRV9GSUxFX1NFTEVDVElPTiA9ICdGSUxFTUFOQUdFUl9JTlZFUlNFX0ZJTEVfU0VMRUNUSU9OJyxcbiAgTE9BRF9GSUxFUyA9ICdGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTJyxcbiAgTE9BRF9GSUxFU19TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVNfU1VDQ0VTUycsXG4gIE1PVkVfRklMRVNfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MnLFxuICBNT1ZFX0ZJTEVTX0VSUk9SID0gJ0ZJTEVNQU5BR0VSX01PVkVfRklMRVNfRVJST1InLFxuICBTRUxFQ1RfQUxMID0gJ0ZJTEVNQU5BR0VSX1NFTEVDVF9BTEwnLFxuICBTRUxFQ1RfRklMRSA9ICdGSUxFTUFOQUdFUl9TRUxFQ1RfRklMRScsXG4gIFVOU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfVU5TRUxFQ1RfRklMRScsXG4gIFVOU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwnLFxuICBVUExPQURfRklMRSA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRScsXG4gIFVQTE9BRF9GSUxFX0VSUk9SID0gJ0ZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX0VSUk9SJyxcbiAgVVBMT0FEX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9TVUNDRVNTJyxcbn1cblxuZXhwb3J0IGNsYXNzIENob29zZUZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuQ0hPT1NFX0ZJTEVTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogSU91dGVyRmlsZVtdIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcm9wRmlsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNST1BfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbCwgYm91bmRzOiBJQ3JvcEJvdW5kcyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcEZpbGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNST1BfRklMRV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVGaWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlOiBJRmlsZU1vZGVsfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TRUxFQ1RJT047XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGVzOiBzdHJpbmdbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkRFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogc3RyaW5nW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuSU5WRVJTRV9GSUxFX1NFTEVDVElPTjtcblxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuTE9BRF9GSUxFUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZm9sZGVySWQ6IHN0cmluZ30pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogSU91dGVyRmlsZVtdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVGaWxlc0Vycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuTU9WRV9GSUxFU19FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuTU9WRV9GSUxFU19TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmb2xkZXJJZDogc3RyaW5nLCBmaWxlczogSU91dGVyRmlsZVtdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdEFsbEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuU0VMRUNUX0FMTDtcbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpbGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5TRUxFQ1RfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVblNlbGVjdEFsbEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVU5TRUxFQ1RfQUxMO1xufVxuXG5leHBvcnQgY2xhc3MgVW5TZWxlY3RGaWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVU5TRUxFQ1RfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVQTE9BRF9GSUxFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogSU91dGVyRmlsZVtdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogSU91dGVyRmlsZVtdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRmlsZU1hbmFnZXJBY3Rpb24gPVxuICBDaG9vc2VGaWxlc0FjdGlvblxuICB8IENyb3BGaWxlQWN0aW9uXG4gIHwgQ3JvcEZpbGVFcnJvckFjdGlvblxuICB8IENyb3BGaWxlU3VjY2Vzc0FjdGlvblxuICB8IERlbGV0ZUZpbGVBY3Rpb25cbiAgfCBEZWxldGVGaWxlU3VjY2Vzc0FjdGlvblxuICB8IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb25cbiAgfCBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvblxuICB8IEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvblxuICB8IExvYWRGaWxlc0FjdGlvblxuICB8IExvYWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBNb3ZlRmlsZXNFcnJvckFjdGlvblxuICB8IE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBTZWxlY3RBbGxGaWxlc0FjdGlvblxuICB8IFNlbGVjdEZpbGVBY3Rpb25cbiAgfCBVblNlbGVjdEFsbEZpbGVzQWN0aW9uXG4gIHwgVW5TZWxlY3RGaWxlQWN0aW9uXG4gIHwgVXBsb2FkRmlsZXNBY3Rpb25cbiAgfCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uXG4gIHwgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uXG47XG4iXX0=