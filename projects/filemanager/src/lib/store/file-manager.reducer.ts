import {IOuterFile} from '../filesList/interface/IOuterFile';
import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';
import {
  CropFileSuccessAction, DeleteFileSuccessAction,
  FileManagerAction,
  FileManagerActionTypes,
  LoadFilesSuccessAction,
  MoveFilesSuccessAction, SelectFileAction, UnSelectFileAction, UploadFilesSuccessAction
} from './file-manager.action';

export interface StoreEntities {
  [key: string]: IOuterFile;
}

export interface IFileManagerState {
  entities: StoreEntities;
  files: string[];
  selectedFiles: string[];
}


function cropFile(state: IFileManagerState, action: CropFileSuccessAction): IFileManagerState {
  const file = action.payload.file;
  const id = file.getId().toString();

  state.entities[id] = <IOuterFile>{...file.toJSON()};

  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: state.selectedFiles
  };
}

function inverseFilesSelection(state: IFileManagerState): IFileManagerState {
  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: state.files.filter((i: string) => state.selectedFiles.indexOf(i) === -1)
  };
}

function loadFiles(state: IFileManagerState, action: LoadFilesSuccessAction): IFileManagerState {
  const entities: StoreEntities = {};
  const files: string[] = [];

  action.payload.files.map((file: IOuterFile) => {
    const id = file.id.toString();

    entities[id] = file;
    files.push(id);
  });


  return {
    entities: entities,
    files: files,
    selectedFiles: []
  };
}


function moveFiles(state: IFileManagerState, action: MoveFilesSuccessAction): IFileManagerState {
  const files = action.payload.files;
  const ids: string[] = files.map(file => file.id.toString());
  const folderId = action.payload.folderId ? action.payload.folderId.toString() : '';

  const entities = {...state.entities};

  ids.forEach((id: string) => {
    const oldEntity = {...entities[id]};
    oldEntity.folderId = folderId;

    entities[id] = oldEntity;
  });

  return {
    entities: entities,
    files: state.files.filter((i: string) => ids.indexOf(i) === -1),
    selectedFiles: state.selectedFiles.filter((i: string) => ids.indexOf(i) === -1)
  };
}

function removeFile(state: IFileManagerState, action: DeleteFileSuccessAction): IFileManagerState {
  const id = action.payload.file.getId();

  delete state.entities[id];

  return {
    entities: state.entities,
    files: state.files.filter((i: string) => i !== id),
    selectedFiles: state.selectedFiles
  };
}

function removeSelectedFiles(state: IFileManagerState): IFileManagerState {
  const files: string[] = state.files.filter((i: string) => state.selectedFiles.indexOf(i) === -1);
  const entities: StoreEntities = {};

  files.forEach((fileId: string) => {
    entities[fileId] = state.entities[fileId];
  });

  return {
    entities: entities,
    files: files,
    selectedFiles: []
  };
}

function selectFile(state: IFileManagerState, action: SelectFileAction): IFileManagerState {
  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: [...state.selectedFiles, action.payload.file.getId().toString()]
  };
}

function selectAllFiles(state: IFileManagerState): IFileManagerState {
  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: [...state.files]
  };
}

function uploadFiles(state: IFileManagerState, action: UploadFilesSuccessAction): IFileManagerState {
  const newState = {
    entities: {...state.entities},
    files: [...state.files],
    selectedFiles: []
  };

  action.payload.files.forEach((file: IOuterFile) => {
    const id = file.id.toString();

    newState.entities[id] = file;
    newState.files.push(id);
  });


  return newState;
}


function unSelectAllFiles(state: IFileManagerState): IFileManagerState {
  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: []
  };
}

function unSelectFile(state: IFileManagerState, action: UnSelectFileAction): IFileManagerState {
  const fileId = action.payload.file.getId().toString();

  return {
    entities: state.entities,
    files: state.files,
    selectedFiles: state.selectedFiles.filter((id: string) => id !== fileId)
  };
}

export function fileManagerReducer(state: IFileManagerState = {
  entities: {},
  files: [],
  selectedFiles: []
}, action: FileManagerAction): IFileManagerState {
  switch (action.type) {
    case FileManagerActionTypes.CROP_FILE_SUCCESS:
      return cropFile(state, action);
    case FileManagerActionTypes.INVERSE_FILE_SELECTION:
      return inverseFilesSelection(state);
    case FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS:
      return removeSelectedFiles(state);
    case FileManagerActionTypes.DELETE_FILE_SUCCESS:
      return removeFile(state, action);
    case FileManagerActionTypes.MOVE_FILES_SUCCESS:
      return moveFiles(state, action);
    case FileManagerActionTypes.LOAD_FILES_SUCCESS:
      return loadFiles(state, action);
    case FileManagerActionTypes.SELECT_ALL:
      return selectAllFiles(state);
    case FileManagerActionTypes.SELECT_FILE:
      return selectFile(state, action);
    case FileManagerActionTypes.UNSELECT_ALL:
      return unSelectAllFiles(state);
    case FileManagerActionTypes.UNSELECT_FILE:
      return unSelectFile(state, action);
    case FileManagerActionTypes.UPLOAD_FILE_SUCCESS:
      return uploadFiles(state, action);
    case FileManagerActionTypes.DELETE_FILE_SELECTION:
    case FileManagerActionTypes.CROP_FILE:
    case FileManagerActionTypes.DELETE_FILE:
    case FileManagerActionTypes.LOAD_FILES:
    case FileManagerActionTypes.MOVE_FILES_ERROR:
      return state;
    default:
      return state;
  }
}

export const filemanagerStateSelector: MemoizedSelector<object, IFileManagerState> = createFeatureSelector<IFileManagerState>('files');

export const getAll = (state: IFileManagerState): IOuterFile[] => {
  return state.files.map((id: string) => state.entities[id]);
};

export const isChangeStateFiles = (newState: IFileManagerState, prevState: IFileManagerState): boolean => {
  return prevState.files.length !== newState.files.length || prevState.files.filter((i: string) => newState.files.indexOf(i) === -1).length > 0;
};

export const isChangeStateSelectedFiles = (newState: IFileManagerState, prevState: IFileManagerState): boolean => {
  return prevState.selectedFiles.length !== newState.selectedFiles.length || prevState.selectedFiles.filter((i: string) => newState.selectedFiles.indexOf(i) === -1).length > 0;
};
