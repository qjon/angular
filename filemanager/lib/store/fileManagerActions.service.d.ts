import { Action } from '@ngrx/store';
import { IOuterFile } from '../filesList/interface/IOuterFile';
import { IFileModel } from '../filesList/interface/IFileModel';
import { ICropBounds } from '../crop/ICropBounds';
export interface IFileManagerPayloadData {
    folderId?: string;
    files?: IOuterFile[];
    file?: IFileModel;
    fileIds?: string[];
    bounds?: ICropBounds;
}
export interface IFileManagerAction extends Action {
    payload: IFileManagerPayloadData;
}
/**
 * @Deprecated - Will be removed in 3.0.0
 */
export declare class FileManagerActionsService {
    static FILEMANAGER_CHOOSE_FILES: string;
    static FILEMANAGER_CROP_FILE: string;
    static FILEMANAGER_CROP_FILE_SUCCESS: string;
    static FILEMANAGER_CROP_FILE_ERROR: string;
    static FILEMANAGER_DELETE_FILE: string;
    static FILEMANAGER_DELETE_FILE_SUCCESS: string;
    static FILEMANAGER_DELETE_FILE_SELECTION: string;
    static FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS: string;
    static FILEMANAGER_INVERSE_FILE_SELECTION: string;
    static FILEMANAGER_LOAD_FILES: string;
    static FILEMANAGER_LOAD_FILES_SUCCESS: string;
    static FILEMANAGER_MOVE_FILES_SUCCESS: string;
    static FILEMANAGER_MOVE_FILES_ERROR: string;
    static FILEMANAGER_SELECT_ALL: string;
    static FILEMANAGER_SELECT_FILE: string;
    static FILEMANAGER_UNSELECT_FILE: string;
    static FILEMANAGER_UNSELECT_ALL: string;
    static FILEMANAGER_UPLOAD_FILE: string;
    static FILEMANAGER_UPLOAD_FILE_ERROR: string;
    static FILEMANAGER_UPLOAD_FILE_SUCCESS: string;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
     */
    chooseFiles(files: IOuterFile[]): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
     */
    cropFile(file: IFileModel, bounds: ICropBounds): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
     */
    cropFileSuccess(file: IFileModel): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
     */
    cropFileError(file: IFileModel): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
     */
    deleteFile(file: IFileModel): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
     */
    deleteFileSuccess(file: IFileModel): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
     */
    deleteSelectedFiles(fileIds: string[]): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
     */
    deleteSelectedFilesSuccess(files: IOuterFile[]): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
     */
    loadFiles(folderId: string): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
     */
    inverseFileSelection(): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
     */
    loadFilesSuccess(folderId: string, files: IOuterFile[]): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
     */
    moveFileSuccess(files: IOuterFile[], folderId: string): {
        type: string;
        payload: {
            folderId: string;
            files: IOuterFile[];
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
     */
    moveFileError(files: IOuterFile[]): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
     */
    selectAllFiles(): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
     */
    selectFile(file: IFileModel): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
     */
    unSelectAll(): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
     */
    unSelectFile(file: IFileModel): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
     */
    upload(file: IOuterFile): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
     */
    uploadSuccess(file: IOuterFile): IFileManagerAction;
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
     */
    uploadError(file: IOuterFile): IFileManagerAction;
}
