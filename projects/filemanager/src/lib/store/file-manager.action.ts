import {Action} from '@ngrx/store';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {ICropBounds} from '../crop/ICropBounds';
import {IFileModel} from '../filesList/interface/IFileModel';

export enum FileManagerActionTypes {
  CHOOSE_FILES = 'FILEMANAGER_CHOOSE_FILES',
  CROP_FILE = 'FILEMANAGER_CROP_FILE',
  CROP_FILE_SUCCESS = 'FILEMANAGER_CROP_FILE_SUCCESS',
  CROP_FILE_ERROR = 'FILEMANAGER_CROP_FILE_ERROR',
  DELETE_FILE = 'FILEMANAGER_DELETE_FILE',
  DELETE_FILE_SUCCESS = 'FILEMANAGER_DELETE_FILE_SUCCESS',
  DELETE_FILE_SELECTION = 'FILEMANAGER_DELETE_FILE_SELECTION',
  DELETE_FILE_SELECTION_SUCCESS = 'FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS',
  INVERSE_FILE_SELECTION = 'FILEMANAGER_INVERSE_FILE_SELECTION',
  LOAD_FILES = 'FILEMANAGER_LOAD_FILES',
  LOAD_FILES_SUCCESS = 'FILEMANAGER_LOAD_FILES_SUCCESS',
  MOVE_FILES_SUCCESS = 'FILEMANAGER_MOVE_FILES_SUCCESS',
  MOVE_FILES_ERROR = 'FILEMANAGER_MOVE_FILES_ERROR',
  SELECT_ALL = 'FILEMANAGER_SELECT_ALL',
  SELECT_FILE = 'FILEMANAGER_SELECT_FILE',
  UNSELECT_FILE = 'FILEMANAGER_UNSELECT_FILE',
  UNSELECT_ALL = 'FILEMANAGER_UNSELECT_ALL',
  UPLOAD_FILE = 'FILEMANAGER_UPLOAD_FILE',
  UPLOAD_FILE_ERROR = 'FILEMANAGER_UPLOAD_FILE_ERROR',
  UPLOAD_FILE_SUCCESS = 'FILEMANAGER_UPLOAD_FILE_SUCCESS',
}

export class ChooseFilesAction implements Action {
  readonly type = FileManagerActionTypes.CHOOSE_FILES;

  public constructor(public payload: { files: IOuterFile[] }) {

  }
}

export class CropFileAction implements Action {
  readonly type = FileManagerActionTypes.CROP_FILE;

  public constructor(public payload: { file: IFileModel, bounds: ICropBounds }) {

  }
}

export class CropFileErrorAction implements Action {
  readonly type = FileManagerActionTypes.CROP_FILE_ERROR;

  public constructor(public payload: { file: IFileModel}) {

  }
}

export class CropFileSuccessAction implements Action {
  readonly type = FileManagerActionTypes.CROP_FILE_SUCCESS;

  public constructor(public payload: { file: IFileModel}) {

  }
}

export class DeleteFileAction implements Action {
  readonly type = FileManagerActionTypes.DELETE_FILE;

  public constructor(public payload: { file: IFileModel}) {

  }
}

export class DeleteFileSuccessAction implements Action {
  readonly type = FileManagerActionTypes.DELETE_FILE_SUCCESS;

  public constructor(public payload: { file: IFileModel}) {

  }
}

export class DeleteSelectedFilesAction implements Action {
  readonly type = FileManagerActionTypes.DELETE_FILE_SELECTION;

  public constructor(public payload: { files: string[]}) {

  }
}

export class DeleteSelectedFilesSuccessAction implements Action {
  readonly type = FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS;

  public constructor(public payload: { files: string[]}) {

  }
}

export class InverseFilesSelectionAction implements Action {
  readonly type = FileManagerActionTypes.INVERSE_FILE_SELECTION;

}

export class LoadFilesAction implements Action {
  readonly type = FileManagerActionTypes.LOAD_FILES;

  public constructor(public payload: { folderId: string}) {

  }
}

export class LoadFilesSuccessAction implements Action {
  readonly type = FileManagerActionTypes.LOAD_FILES_SUCCESS;

  public constructor(public payload: { files: IOuterFile[]}) {

  }
}

export class MoveFilesErrorAction implements Action {
  readonly type = FileManagerActionTypes.MOVE_FILES_ERROR;

  public constructor(public payload: { files: IOuterFile[]}) {

  }
}

export class MoveFilesSuccessAction implements Action {
  readonly type = FileManagerActionTypes.MOVE_FILES_SUCCESS;

  public constructor(public payload: { folderId: string, files: IOuterFile[]}) {

  }
}

export class SelectAllFilesAction implements Action {
  readonly type = FileManagerActionTypes.SELECT_ALL;
}

export class SelectFileAction implements Action {
  readonly type = FileManagerActionTypes.SELECT_FILE;

  public constructor(public payload: { file: IFileModel}) {

  }
}

export class UnSelectAllFilesAction implements Action {
  readonly type = FileManagerActionTypes.UNSELECT_ALL;
}

export class UnSelectFileAction implements Action {
  readonly type = FileManagerActionTypes.UNSELECT_FILE;

  public constructor(public payload: { file: IFileModel}) {

  }
}

export class UploadFilesAction implements Action {
  readonly type = FileManagerActionTypes.UPLOAD_FILE;

  public constructor(public payload: { files: IOuterFile[]}) {

  }
}

export class UploadFilesErrorAction implements Action {
  readonly type = FileManagerActionTypes.UPLOAD_FILE_ERROR;

  public constructor(public payload: { files: IOuterFile[]}) {

  }
}

export class UploadFilesSuccessAction implements Action {
  readonly type = FileManagerActionTypes.UPLOAD_FILE_SUCCESS;

  public constructor(public payload: { files: IOuterFile[]}) {

  }
}

export type FileManagerAction =
  ChooseFilesAction
  | CropFileAction
  | CropFileErrorAction
  | CropFileSuccessAction
  | DeleteFileAction
  | DeleteFileSuccessAction
  | DeleteSelectedFilesAction
  | DeleteSelectedFilesSuccessAction
  | InverseFilesSelectionAction
  | LoadFilesAction
  | LoadFilesSuccessAction
  | MoveFilesErrorAction
  | MoveFilesSuccessAction
  | SelectAllFilesAction
  | SelectFileAction
  | UnSelectAllFilesAction
  | UnSelectFileAction
  | UploadFilesAction
  | UploadFilesErrorAction
  | UploadFilesSuccessAction
;
