/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const FileManagerActionTypes = {
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
export class ChooseFilesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CHOOSE_FILES;
    }
}
if (false) {
    /** @type {?} */
    ChooseFilesAction.prototype.type;
    /** @type {?} */
    ChooseFilesAction.prototype.payload;
}
export class CropFileAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE;
    }
}
if (false) {
    /** @type {?} */
    CropFileAction.prototype.type;
    /** @type {?} */
    CropFileAction.prototype.payload;
}
export class CropFileErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE_ERROR;
    }
}
if (false) {
    /** @type {?} */
    CropFileErrorAction.prototype.type;
    /** @type {?} */
    CropFileErrorAction.prototype.payload;
}
export class CropFileSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CropFileSuccessAction.prototype.type;
    /** @type {?} */
    CropFileSuccessAction.prototype.payload;
}
export class DeleteFileAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE;
    }
}
if (false) {
    /** @type {?} */
    DeleteFileAction.prototype.type;
    /** @type {?} */
    DeleteFileAction.prototype.payload;
}
export class DeleteFileSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    DeleteFileSuccessAction.prototype.type;
    /** @type {?} */
    DeleteFileSuccessAction.prototype.payload;
}
export class DeleteSelectedFilesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SELECTION;
    }
}
if (false) {
    /** @type {?} */
    DeleteSelectedFilesAction.prototype.type;
    /** @type {?} */
    DeleteSelectedFilesAction.prototype.payload;
}
export class DeleteSelectedFilesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    DeleteSelectedFilesSuccessAction.prototype.type;
    /** @type {?} */
    DeleteSelectedFilesSuccessAction.prototype.payload;
}
export class InverseFilesSelectionAction {
    constructor() {
        this.type = FileManagerActionTypes.INVERSE_FILE_SELECTION;
    }
}
if (false) {
    /** @type {?} */
    InverseFilesSelectionAction.prototype.type;
}
export class LoadFilesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.LOAD_FILES;
    }
}
if (false) {
    /** @type {?} */
    LoadFilesAction.prototype.type;
    /** @type {?} */
    LoadFilesAction.prototype.payload;
}
export class LoadFilesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.LOAD_FILES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadFilesSuccessAction.prototype.type;
    /** @type {?} */
    LoadFilesSuccessAction.prototype.payload;
}
export class MoveFilesErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.MOVE_FILES_ERROR;
    }
}
if (false) {
    /** @type {?} */
    MoveFilesErrorAction.prototype.type;
    /** @type {?} */
    MoveFilesErrorAction.prototype.payload;
}
export class MoveFilesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.MOVE_FILES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    MoveFilesSuccessAction.prototype.type;
    /** @type {?} */
    MoveFilesSuccessAction.prototype.payload;
}
export class SelectAllFilesAction {
    constructor() {
        this.type = FileManagerActionTypes.SELECT_ALL;
    }
}
if (false) {
    /** @type {?} */
    SelectAllFilesAction.prototype.type;
}
export class SelectFileAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.SELECT_FILE;
    }
}
if (false) {
    /** @type {?} */
    SelectFileAction.prototype.type;
    /** @type {?} */
    SelectFileAction.prototype.payload;
}
export class UnSelectAllFilesAction {
    constructor() {
        this.type = FileManagerActionTypes.UNSELECT_ALL;
    }
}
if (false) {
    /** @type {?} */
    UnSelectAllFilesAction.prototype.type;
}
export class UnSelectFileAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UNSELECT_FILE;
    }
}
if (false) {
    /** @type {?} */
    UnSelectFileAction.prototype.type;
    /** @type {?} */
    UnSelectFileAction.prototype.payload;
}
export class UploadFilesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE;
    }
}
if (false) {
    /** @type {?} */
    UploadFilesAction.prototype.type;
    /** @type {?} */
    UploadFilesAction.prototype.payload;
}
export class UploadFilesErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE_ERROR;
    }
}
if (false) {
    /** @type {?} */
    UploadFilesErrorAction.prototype.type;
    /** @type {?} */
    UploadFilesErrorAction.prototype.payload;
}
export class UploadFilesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    UploadFilesSuccessAction.prototype.type;
    /** @type {?} */
    UploadFilesSuccessAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1tYW5hZ2VyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsY0FBZSwwQkFBMEI7SUFDekMsV0FBWSx1QkFBdUI7SUFDbkMsbUJBQW9CLCtCQUErQjtJQUNuRCxpQkFBa0IsNkJBQTZCO0lBQy9DLGFBQWMseUJBQXlCO0lBQ3ZDLHFCQUFzQixpQ0FBaUM7SUFDdkQsdUJBQXdCLG1DQUFtQztJQUMzRCwrQkFBZ0MsMkNBQTJDO0lBQzNFLHdCQUF5QixvQ0FBb0M7SUFDN0QsWUFBYSx3QkFBd0I7SUFDckMsb0JBQXFCLGdDQUFnQztJQUNyRCxvQkFBcUIsZ0NBQWdDO0lBQ3JELGtCQUFtQiw4QkFBOEI7SUFDakQsWUFBYSx3QkFBd0I7SUFDckMsYUFBYyx5QkFBeUI7SUFDdkMsZUFBZ0IsMkJBQTJCO0lBQzNDLGNBQWUsMEJBQTBCO0lBQ3pDLGFBQWMseUJBQXlCO0lBQ3ZDLG1CQUFvQiwrQkFBK0I7SUFDbkQscUJBQXNCLGlDQUFpQzs7O0FBR3pELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFHNUIsWUFBMEIsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFGakQsU0FBSSxHQUFHLHNCQUFzQixDQUFDLFlBQVksQ0FBQztJQUlwRCxDQUFDO0NBQ0Y7OztJQUxDLGlDQUFvRDs7SUFFakMsb0NBQXVDOztBQUs1RCxNQUFNLE9BQU8sY0FBYzs7OztJQUd6QixZQUEwQixPQUFrRDtRQUFsRCxZQUFPLEdBQVAsT0FBTyxDQUEyQztRQUZuRSxTQUFJLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDO0lBSWpELENBQUM7Q0FDRjs7O0lBTEMsOEJBQWlEOztJQUU5QixpQ0FBeUQ7O0FBSzlFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFHOUIsWUFBMEIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFGN0MsU0FBSSxHQUFHLHNCQUFzQixDQUFDLGVBQWUsQ0FBQztJQUl2RCxDQUFDO0NBQ0Y7OztJQUxDLG1DQUF1RDs7SUFFcEMsc0NBQW1DOztBQUt4RCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBR2hDLFlBQTBCLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBRjdDLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUl6RCxDQUFDO0NBQ0Y7OztJQUxDLHFDQUF5RDs7SUFFdEMsd0NBQW1DOztBQUt4RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRzNCLFlBQTBCLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBRjdDLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxXQUFXLENBQUM7SUFJbkQsQ0FBQztDQUNGOzs7SUFMQyxnQ0FBbUQ7O0lBRWhDLG1DQUFtQzs7QUFLeEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUdsQyxZQUEwQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUY3QyxTQUFJLEdBQUcsc0JBQXNCLENBQUMsbUJBQW1CLENBQUM7SUFJM0QsQ0FBQztDQUNGOzs7SUFMQyx1Q0FBMkQ7O0lBRXhDLDBDQUFtQzs7QUFLeEQsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUdwQyxZQUEwQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUY1QyxTQUFJLEdBQUcsc0JBQXNCLENBQUMscUJBQXFCLENBQUM7SUFJN0QsQ0FBQztDQUNGOzs7SUFMQyx5Q0FBNkQ7O0lBRTFDLDRDQUFrQzs7QUFLdkQsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUczQyxZQUEwQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUY1QyxTQUFJLEdBQUcsc0JBQXNCLENBQUMsNkJBQTZCLENBQUM7SUFJckUsQ0FBQztDQUNGOzs7SUFMQyxnREFBcUU7O0lBRWxELG1EQUFrQzs7QUFLdkQsTUFBTSxPQUFPLDJCQUEyQjtJQUF4QztRQUNXLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUVoRSxDQUFDO0NBQUE7OztJQUZDLDJDQUE4RDs7QUFJaEUsTUFBTSxPQUFPLGVBQWU7Ozs7SUFHMUIsWUFBMEIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFGN0MsU0FBSSxHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQztJQUlsRCxDQUFDO0NBQ0Y7OztJQUxDLCtCQUFrRDs7SUFFL0Isa0NBQW1DOztBQUt4RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQTBCLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBRmhELFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUkxRCxDQUFDO0NBQ0Y7OztJQUxDLHNDQUEwRDs7SUFFdkMseUNBQXNDOztBQUszRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQTBCLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBRmhELFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUl4RCxDQUFDO0NBQ0Y7OztJQUxDLG9DQUF3RDs7SUFFckMsdUNBQXNDOztBQUszRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQTBCLE9BQWlEO1FBQWpELFlBQU8sR0FBUCxPQUFPLENBQTBDO1FBRmxFLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUkxRCxDQUFDO0NBQ0Y7OztJQUxDLHNDQUEwRDs7SUFFdkMseUNBQXdEOztBQUs3RSxNQUFNLE9BQU8sb0JBQW9CO0lBQWpDO1FBQ1csU0FBSSxHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQztJQUNwRCxDQUFDO0NBQUE7OztJQURDLG9DQUFrRDs7QUFHcEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUczQixZQUEwQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUY3QyxTQUFJLEdBQUcsc0JBQXNCLENBQUMsV0FBVyxDQUFDO0lBSW5ELENBQUM7Q0FDRjs7O0lBTEMsZ0NBQW1EOztJQUVoQyxtQ0FBbUM7O0FBS3hELE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFDVyxTQUFJLEdBQUcsc0JBQXNCLENBQUMsWUFBWSxDQUFDO0lBQ3RELENBQUM7Q0FBQTs7O0lBREMsc0NBQW9EOztBQUd0RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRzdCLFlBQTBCLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBRjdDLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7SUFJckQsQ0FBQztDQUNGOzs7SUFMQyxrQ0FBcUQ7O0lBRWxDLHFDQUFtQzs7QUFLeEQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUc1QixZQUEwQixPQUErQjtRQUEvQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUZoRCxTQUFJLEdBQUcsc0JBQXNCLENBQUMsV0FBVyxDQUFDO0lBSW5ELENBQUM7Q0FDRjs7O0lBTEMsaUNBQW1EOztJQUVoQyxvQ0FBc0M7O0FBSzNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFHakMsWUFBMEIsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFGaEQsU0FBSSxHQUFHLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDO0lBSXpELENBQUM7Q0FDRjs7O0lBTEMsc0NBQXlEOztJQUV0Qyx5Q0FBc0M7O0FBSzNELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFHbkMsWUFBMEIsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFGaEQsU0FBSSxHQUFHLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO0lBSTNELENBQUM7Q0FDRjs7O0lBTEMsd0NBQTJEOztJQUV4QywyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5cbmV4cG9ydCBlbnVtIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMge1xuICBDSE9PU0VfRklMRVMgPSAnRklMRU1BTkFHRVJfQ0hPT1NFX0ZJTEVTJyxcbiAgQ1JPUF9GSUxFID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRScsXG4gIENST1BfRklMRV9TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTJyxcbiAgQ1JPUF9GSUxFX0VSUk9SID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRV9FUlJPUicsXG4gIERFTEVURV9GSUxFID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFJyxcbiAgREVMRVRFX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TVUNDRVNTJyxcbiAgREVMRVRFX0ZJTEVfU0VMRUNUSU9OID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTicsXG4gIERFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTJyxcbiAgSU5WRVJTRV9GSUxFX1NFTEVDVElPTiA9ICdGSUxFTUFOQUdFUl9JTlZFUlNFX0ZJTEVfU0VMRUNUSU9OJyxcbiAgTE9BRF9GSUxFUyA9ICdGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTJyxcbiAgTE9BRF9GSUxFU19TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVNfU1VDQ0VTUycsXG4gIE1PVkVfRklMRVNfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MnLFxuICBNT1ZFX0ZJTEVTX0VSUk9SID0gJ0ZJTEVNQU5BR0VSX01PVkVfRklMRVNfRVJST1InLFxuICBTRUxFQ1RfQUxMID0gJ0ZJTEVNQU5BR0VSX1NFTEVDVF9BTEwnLFxuICBTRUxFQ1RfRklMRSA9ICdGSUxFTUFOQUdFUl9TRUxFQ1RfRklMRScsXG4gIFVOU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfVU5TRUxFQ1RfRklMRScsXG4gIFVOU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwnLFxuICBVUExPQURfRklMRSA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRScsXG4gIFVQTE9BRF9GSUxFX0VSUk9SID0gJ0ZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX0VSUk9SJyxcbiAgVVBMT0FEX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9TVUNDRVNTJyxcbn1cblxuZXhwb3J0IGNsYXNzIENob29zZUZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuQ0hPT1NFX0ZJTEVTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogSU91dGVyRmlsZVtdIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcm9wRmlsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNST1BfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbCwgYm91bmRzOiBJQ3JvcEJvdW5kcyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcEZpbGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNST1BfRklMRV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVGaWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlOiBJRmlsZU1vZGVsfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TRUxFQ1RJT047XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGVzOiBzdHJpbmdbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkRFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogc3RyaW5nW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuSU5WRVJTRV9GSUxFX1NFTEVDVElPTjtcblxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuTE9BRF9GSUxFUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZm9sZGVySWQ6IHN0cmluZ30pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogSU91dGVyRmlsZVtdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVGaWxlc0Vycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuTU9WRV9GSUxFU19FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuTU9WRV9GSUxFU19TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmb2xkZXJJZDogc3RyaW5nLCBmaWxlczogSU91dGVyRmlsZVtdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdEFsbEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuU0VMRUNUX0FMTDtcbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpbGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5TRUxFQ1RfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVblNlbGVjdEFsbEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVU5TRUxFQ1RfQUxMO1xufVxuXG5leHBvcnQgY2xhc3MgVW5TZWxlY3RGaWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVU5TRUxFQ1RfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVQTE9BRF9GSUxFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogSU91dGVyRmlsZVtdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogSU91dGVyRmlsZVtdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRmlsZU1hbmFnZXJBY3Rpb24gPVxuICBDaG9vc2VGaWxlc0FjdGlvblxuICB8IENyb3BGaWxlQWN0aW9uXG4gIHwgQ3JvcEZpbGVFcnJvckFjdGlvblxuICB8IENyb3BGaWxlU3VjY2Vzc0FjdGlvblxuICB8IERlbGV0ZUZpbGVBY3Rpb25cbiAgfCBEZWxldGVGaWxlU3VjY2Vzc0FjdGlvblxuICB8IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb25cbiAgfCBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvblxuICB8IEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvblxuICB8IExvYWRGaWxlc0FjdGlvblxuICB8IExvYWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBNb3ZlRmlsZXNFcnJvckFjdGlvblxuICB8IE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBTZWxlY3RBbGxGaWxlc0FjdGlvblxuICB8IFNlbGVjdEZpbGVBY3Rpb25cbiAgfCBVblNlbGVjdEFsbEZpbGVzQWN0aW9uXG4gIHwgVW5TZWxlY3RGaWxlQWN0aW9uXG4gIHwgVXBsb2FkRmlsZXNBY3Rpb25cbiAgfCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uXG4gIHwgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uXG47XG4iXX0=