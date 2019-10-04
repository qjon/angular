import {Injectable} from '@angular/core';
import {IOuterNode, TreeActionTypes, TreeMoveNodeAction} from '@rign/angular2-tree';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {empty, Observable, of} from 'rxjs';
import {IFileModel} from '../filesList/interface/IFileModel';
import {ICropBounds} from '../crop/ICropBounds';
import {FileManagerApiService} from './fileManagerApi.service';
import {FilemanagerNotifications} from '../services/FilemanagerNotifications';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {
  CropFileAction,
  CropFileErrorAction,
  CropFileSuccessAction,
  DeleteFileAction,
  DeleteFileSuccessAction,
  DeleteSelectedFilesAction,
  DeleteSelectedFilesSuccessAction,
  FileManagerAction,
  FileManagerActionTypes,
  LoadFilesAction,
  LoadFilesSuccessAction,
  MoveFilesErrorAction,
  MoveFilesSuccessAction,
  UploadFilesAction,
  UploadFilesErrorAction,
  UploadFilesSuccessAction
} from './file-manager.action';

@Injectable()
export class FileManagerEffectsService {

  public cropFileSuccess$: Observable<CropFileSuccessAction> = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.CROP_FILE_SUCCESS)
    );

  public deleteFileSuccess$: Observable<DeleteFileSuccessAction> = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.DELETE_FILE_SUCCESS)
    );

  @Effect()
  public loadFiles$ = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.LOAD_FILES),
      switchMap((action: LoadFilesAction) => this.loadFiles(action.payload.folderId)
        .pipe(
          map((files: IOuterFile[]): FileManagerAction => {
            return new LoadFilesSuccessAction({files});
          }),
          catchError((e) => {
            return of(this.onLoadFilesError(action.payload.folderId));
          })
        )
      )
    );

  @Effect()
  public cropFile$ = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.CROP_FILE),
      switchMap((action: CropFileAction) => this.cropFile(action.payload.file, action.payload.bounds)
        .pipe(
          map((result: IOuterFile): CropFileSuccessAction => {
            this.filemanagerNotification.send({
              type: 'success',
              title: 'Crop Image.',
              message: 'Image has been cropped.'
            });
            return new CropFileSuccessAction({file: action.payload.file});
          }),
          catchError(() => of(new CropFileErrorAction({file: action.payload.file})))
        )
      )
    );

  @Effect()
  public deleteFile$ = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.DELETE_FILE),
      switchMap((action: DeleteFileAction) => this.deleteFile(action.payload.file)
        .pipe(
          map((result: boolean): DeleteFileSuccessAction => {
            return new DeleteFileSuccessAction({file: action.payload.file});
          }),
          catchError(() => of(this.onDeleteFileError(action.payload.file)))
        )
      )
    );

  @Effect()
  public deleteFilesSelection$ = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.DELETE_FILE_SELECTION),
      switchMap((action: DeleteSelectedFilesAction) => this.deleteFilesSelection(action.payload.files)
        .pipe(
          map((result: boolean): FileManagerAction => {
            return new DeleteSelectedFilesSuccessAction({files: action.payload.files});
          }),
          catchError(() => of(this.onDeleteFilesSelectionError()))
        )
      )
    );


  @Effect()
  public uploadFile$ = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.UPLOAD_FILE),
      switchMap((action: UploadFilesAction) => this.uploadFile(action.payload.files[0])
        .pipe(
          map((result: IOuterFile): UploadFilesSuccessAction => {
            return new UploadFilesSuccessAction({files: [result]});
          }),
          catchError(() => {
            return empty();
          })
        )
      )
    );

  @Effect()
  public moveFile$ = this.actions$
    .pipe(
      ofType(TreeActionTypes.TREE_MOVE_NODE),
      filter((action: TreeMoveNodeAction) => {
        return action.payload.sourceOfDroppedData === 'FILE';
      }),
      switchMap((action: TreeMoveNodeAction) => this.moveFiles([<IOuterFile>action.payload.oldNode], action.payload.node)
        .pipe(
          map((result: IOuterFile[]): FileManagerAction => {
            const folderId = (<IOuterFile>action.payload.oldNode).folderId;

            return new MoveFilesSuccessAction({files: result, folderId});
          }),
          catchError(() => {
            return of(new MoveFilesErrorAction({files: [<IOuterFile>action.payload.oldNode]}));
          })
        )
      )
    );

  @Effect()
  public filesMoveSuccess$ = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.MOVE_FILES_SUCCESS),
      map((action: MoveFilesSuccessAction) => {
        this.onMoveFilesSuccess();

        return new LoadFilesAction({folderId: action.payload.folderId});
      })
    );

  @Effect({dispatch: false})
  public deleteFileSuccessEffect$ = this.deleteFileSuccess$
    .pipe(
      map((action: DeleteFileSuccessAction) => {
        this.filemanagerNotification.send({
          type: 'success',
          title: 'File delete',
          message: `${action.payload.file.name} has been deleted`
        });
      })
    );

  public uploadError$ = this.actions$
    .pipe(
      ofType(FileManagerActionTypes.UPLOAD_FILE_ERROR),
      map((action: UploadFilesErrorAction) => {
        this.filemanagerNotification.send({
          type: 'alert',
          title: 'File upload',
          message: `${action.payload.files[0].name} exists on the server in this directory`
        });
      })
    );

  constructor(private actions$: Actions,
              private filemanagerNotification: FilemanagerNotifications,
              private fileManagerApiService: FileManagerApiService) {


    this.actions$
      .pipe(
        ofType(FileManagerActionTypes.CROP_FILE_ERROR)
      )
      .subscribe((action: CropFileAction) => {
        this.onCropFileError(action.payload.file);
      });

    this.actions$
      .pipe(
        ofType(FileManagerActionTypes.MOVE_FILES_ERROR)
      )
      .subscribe((action: MoveFilesErrorAction) => {
        this.onMoveFilesError();
      });
  }

  protected cropFile(file: IFileModel, bounds: ICropBounds): Observable<IOuterFile> {
    return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
  }

  protected deleteFile(file: IFileModel): Observable<boolean> {
    return this.fileManagerApiService.removeFile(file.toJSON());
  }

  protected deleteFilesSelection(files: string[]): Observable<boolean> {
    return this.fileManagerApiService.removeSelectedFiles(files);
  }

  protected loadFiles(folderId: string | null): Observable<IOuterFile[]> {
    return this.fileManagerApiService.loadFiles(folderId);
  }

  protected uploadFile(file: IOuterFile): Observable<IOuterFile> {
    return this.fileManagerApiService.uploadFile(file);
  }

  protected moveFiles(files: IOuterFile[], folder: IOuterNode = null): Observable<IOuterFile[]> {
    return this.fileManagerApiService.moveFile(files, folder);
  }

  protected onCropFileError(file: IFileModel): void {
    this.filemanagerNotification.send({
      type: 'alert',
      title: 'Crop Image',
      message: '[FILEMANAGER] Can not crop file'
    });
  }

  protected onDeleteFileError(file: IFileModel): void {
    this.filemanagerNotification.send({
      type: 'error',
      title: 'Delete file',
      message: '[FILEMANAGER] Can not delete file' + file.name
    });
  }

  protected onDeleteFilesSelectionError(): void {
    this.filemanagerNotification.send({
      type: 'error',
      title: 'Delete selected files',
      message: '[FILEMANAGER] Not all files were deleted'
    });
  }

  protected onLoadFilesError(folderId: string): void {
    this.filemanagerNotification.send({
      type: 'error',
      title: 'Load files',
      message: '[FILEMANAGER] Can not load files for folder ' + folderId
    });
  }

  protected onMoveFilesSuccess(): void {
    this.filemanagerNotification.send({
      type: 'success',
      title: 'Move files',
      message: 'File was successfully moved to folder'
    });
  }

  protected onMoveFilesError(): void {
    this.filemanagerNotification.send({
      type: 'error',
      title: 'Move files',
      message: 'File was not successfully moved to new folder'
    });
  }
}
