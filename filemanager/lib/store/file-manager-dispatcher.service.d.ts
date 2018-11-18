import { Store } from '@ngrx/store';
import { IFileManagerState } from './file-manager.reducer';
import { FileManagerActionsService } from './fileManagerActions.service';
import { IFileModel } from '../filesList/interface/IFileModel';
import { IOuterFile } from '../filesList/interface/IOuterFile';
import { ICropBounds } from '../crop/ICropBounds';
/**
 * @Deprecated - Will be removed in 3.0.0
 */
export declare class FileManagerDispatcherService {
    private store;
    private fileManagerActions;
    constructor(store: Store<IFileManagerState>, fileManagerActions: FileManagerActionsService);
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     */
    chooseFiles(files: IOuterFile[]): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     */
    cropFile(file: IFileModel, bounds: ICropBounds): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     */
    deleteFile(file: IFileModel): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     */
    deleteSelectedFiles(files: string[]): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     */
    inverseSelection(): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     */
    loadFiles(folderId: string | null): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     */
    selectAllFiles(): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     */
    selectFile(file: IFileModel): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     */
    unSelectAllFiles(): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     */
    unSelectFile(file: IFileModel): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     */
    uploadError(file: IOuterFile): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     */
    upload(file: IOuterFile): void;
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     */
    uploadSuccess(file: IOuterFile): void;
}
