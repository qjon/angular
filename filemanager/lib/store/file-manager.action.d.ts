import { Action } from '@ngrx/store';
import { IOuterFile } from '../filesList/interface/IOuterFile';
import { ICropBounds } from '../crop/ICropBounds';
import { IFileModel } from '../filesList/interface/IFileModel';
export declare enum FileManagerActionTypes {
    CHOOSE_FILES = "FILEMANAGER_CHOOSE_FILES",
    CROP_FILE = "FILEMANAGER_CROP_FILE",
    CROP_FILE_SUCCESS = "FILEMANAGER_CROP_FILE_SUCCESS",
    CROP_FILE_ERROR = "FILEMANAGER_CROP_FILE_ERROR",
    DELETE_FILE = "FILEMANAGER_DELETE_FILE",
    DELETE_FILE_SUCCESS = "FILEMANAGER_DELETE_FILE_SUCCESS",
    DELETE_FILE_SELECTION = "FILEMANAGER_DELETE_FILE_SELECTION",
    DELETE_FILE_SELECTION_SUCCESS = "FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS",
    INVERSE_FILE_SELECTION = "FILEMANAGER_INVERSE_FILE_SELECTION",
    LOAD_FILES = "FILEMANAGER_LOAD_FILES",
    LOAD_FILES_SUCCESS = "FILEMANAGER_LOAD_FILES_SUCCESS",
    MOVE_FILES_SUCCESS = "FILEMANAGER_MOVE_FILES_SUCCESS",
    MOVE_FILES_ERROR = "FILEMANAGER_MOVE_FILES_ERROR",
    SELECT_ALL = "FILEMANAGER_SELECT_ALL",
    SELECT_FILE = "FILEMANAGER_SELECT_FILE",
    UNSELECT_FILE = "FILEMANAGER_UNSELECT_FILE",
    UNSELECT_ALL = "FILEMANAGER_UNSELECT_ALL",
    UPLOAD_FILE = "FILEMANAGER_UPLOAD_FILE",
    UPLOAD_FILE_ERROR = "FILEMANAGER_UPLOAD_FILE_ERROR",
    UPLOAD_FILE_SUCCESS = "FILEMANAGER_UPLOAD_FILE_SUCCESS"
}
export declare class ChooseFilesAction implements Action {
    payload: {
        files: IOuterFile[];
    };
    readonly type = FileManagerActionTypes.CHOOSE_FILES;
    constructor(payload: {
        files: IOuterFile[];
    });
}
export declare class CropFileAction implements Action {
    payload: {
        file: IFileModel;
        bounds: ICropBounds;
    };
    readonly type = FileManagerActionTypes.CROP_FILE;
    constructor(payload: {
        file: IFileModel;
        bounds: ICropBounds;
    });
}
export declare class CropFileErrorAction implements Action {
    payload: {
        file: IFileModel;
    };
    readonly type = FileManagerActionTypes.CROP_FILE_ERROR;
    constructor(payload: {
        file: IFileModel;
    });
}
export declare class CropFileSuccessAction implements Action {
    payload: {
        file: IFileModel;
    };
    readonly type = FileManagerActionTypes.CROP_FILE_SUCCESS;
    constructor(payload: {
        file: IFileModel;
    });
}
export declare class DeleteFileAction implements Action {
    payload: {
        file: IFileModel;
    };
    readonly type = FileManagerActionTypes.DELETE_FILE;
    constructor(payload: {
        file: IFileModel;
    });
}
export declare class DeleteFileSuccessAction implements Action {
    payload: {
        file: IFileModel;
    };
    readonly type = FileManagerActionTypes.DELETE_FILE_SUCCESS;
    constructor(payload: {
        file: IFileModel;
    });
}
export declare class DeleteSelectedFilesAction implements Action {
    payload: {
        files: string[];
    };
    readonly type = FileManagerActionTypes.DELETE_FILE_SELECTION;
    constructor(payload: {
        files: string[];
    });
}
export declare class DeleteSelectedFilesSuccessAction implements Action {
    payload: {
        files: string[];
    };
    readonly type = FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS;
    constructor(payload: {
        files: string[];
    });
}
export declare class InverseFilesSelectionAction implements Action {
    readonly type = FileManagerActionTypes.INVERSE_FILE_SELECTION;
}
export declare class LoadFilesAction implements Action {
    payload: {
        folderId: string;
    };
    readonly type = FileManagerActionTypes.LOAD_FILES;
    constructor(payload: {
        folderId: string;
    });
}
export declare class LoadFilesSuccessAction implements Action {
    payload: {
        files: IOuterFile[];
    };
    readonly type = FileManagerActionTypes.LOAD_FILES_SUCCESS;
    constructor(payload: {
        files: IOuterFile[];
    });
}
export declare class MoveFilesErrorAction implements Action {
    payload: {
        files: IOuterFile[];
    };
    readonly type = FileManagerActionTypes.MOVE_FILES_ERROR;
    constructor(payload: {
        files: IOuterFile[];
    });
}
export declare class MoveFilesSuccessAction implements Action {
    payload: {
        folderId: string;
        files: IOuterFile[];
    };
    readonly type = FileManagerActionTypes.MOVE_FILES_SUCCESS;
    constructor(payload: {
        folderId: string;
        files: IOuterFile[];
    });
}
export declare class SelectAllFilesAction implements Action {
    readonly type = FileManagerActionTypes.SELECT_ALL;
}
export declare class SelectFileAction implements Action {
    payload: {
        file: IFileModel;
    };
    readonly type = FileManagerActionTypes.SELECT_FILE;
    constructor(payload: {
        file: IFileModel;
    });
}
export declare class UnSelectAllFilesAction implements Action {
    readonly type = FileManagerActionTypes.UNSELECT_ALL;
}
export declare class UnSelectFileAction implements Action {
    payload: {
        file: IFileModel;
    };
    readonly type = FileManagerActionTypes.UNSELECT_FILE;
    constructor(payload: {
        file: IFileModel;
    });
}
export declare class UploadFilesAction implements Action {
    payload: {
        files: IOuterFile[];
    };
    readonly type = FileManagerActionTypes.UPLOAD_FILE;
    constructor(payload: {
        files: IOuterFile[];
    });
}
export declare class UploadFilesErrorAction implements Action {
    payload: {
        files: IOuterFile[];
    };
    readonly type = FileManagerActionTypes.UPLOAD_FILE_ERROR;
    constructor(payload: {
        files: IOuterFile[];
    });
}
export declare class UploadFilesSuccessAction implements Action {
    payload: {
        files: IOuterFile[];
    };
    readonly type = FileManagerActionTypes.UPLOAD_FILE_SUCCESS;
    constructor(payload: {
        files: IOuterFile[];
    });
}
export declare type FileManagerAction = ChooseFilesAction | CropFileAction | CropFileErrorAction | CropFileSuccessAction | DeleteFileAction | DeleteFileSuccessAction | DeleteSelectedFilesAction | DeleteSelectedFilesSuccessAction | InverseFilesSelectionAction | LoadFilesAction | LoadFilesSuccessAction | MoveFilesErrorAction | MoveFilesSuccessAction | SelectAllFilesAction | SelectFileAction | UnSelectAllFilesAction | UnSelectFileAction | UploadFilesAction | UploadFilesErrorAction | UploadFilesSuccessAction;
