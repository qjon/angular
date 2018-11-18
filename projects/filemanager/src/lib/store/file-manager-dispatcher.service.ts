import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {IFileManagerState} from './file-manager.reducer';
import {FileManagerActionsService} from './fileManagerActions.service';
import {IFileModel} from '../filesList/interface/IFileModel';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {ICropBounds} from '../crop/ICropBounds';
import {
  ChooseFilesAction,
  CropFileAction,
  DeleteFileAction,
  DeleteSelectedFilesAction,
  InverseFilesSelectionAction,
  LoadFilesAction,
  SelectAllFilesAction,
  SelectFileAction,
  UnSelectAllFilesAction,
  UnSelectFileAction, UploadFilesAction, UploadFilesErrorAction, UploadFilesSuccessAction
} from './file-manager.action';

/**
 * @Deprecated - Will be removed in 3.0.0
 */
@Injectable()
export class FileManagerDispatcherService {

  constructor(private store: Store<IFileManagerState>, private fileManagerActions: FileManagerActionsService) {
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
   */
  public chooseFiles(files: IOuterFile[]): void {
    this.store.dispatch(new ChooseFilesAction({files}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
   */
  public cropFile(file: IFileModel, bounds: ICropBounds): void {
    this.store.dispatch(new CropFileAction({bounds, file}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
   */
  public deleteFile(file: IFileModel): void {
    this.store.dispatch(new DeleteFileAction({file}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
   */
  public deleteSelectedFiles(files: string[]): void {
    this.store.dispatch(new DeleteSelectedFilesAction({files}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
   */
  public inverseSelection(): void {
    this.store.dispatch(new InverseFilesSelectionAction());
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
   */
  public loadFiles(folderId: string | null): void {
    this.store.dispatch(new LoadFilesAction({folderId}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
   */
  public selectAllFiles(): void {
    this.store.dispatch(new SelectAllFilesAction());
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
   */
  public selectFile(file: IFileModel): void {
    this.store.dispatch(new SelectFileAction({file}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
   */
  public unSelectAllFiles(): void {
    this.store.dispatch(new UnSelectAllFilesAction());
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
   */
  public unSelectFile(file: IFileModel): void {
    this.store.dispatch(new UnSelectFileAction({file}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
   */
  public uploadError(file: IOuterFile) {
    this.store.dispatch(new UploadFilesErrorAction({files: [file]}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
   */
  public upload(file: IOuterFile) {
    this.store.dispatch(new UploadFilesAction({files: [file]}));
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
   */
  public uploadSuccess(file: IOuterFile) {
    this.store.dispatch(new UploadFilesSuccessAction({files: [file]}));
  }
}
