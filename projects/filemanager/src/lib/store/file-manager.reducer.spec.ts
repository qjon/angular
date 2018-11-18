import {fileManagerReducer, IFileManagerState} from './file-manager.reducer';
import {filesData} from '../../../_unitTestMocks/fileDataMock';
import {FileModel} from '../filesList/file.model';
import {
  CropFileAction, DeleteFileAction,
  DeleteFileSuccessAction, DeleteSelectedFilesAction,
  DeleteSelectedFilesSuccessAction,
  InverseFilesSelectionAction, LoadFilesAction,
  LoadFilesSuccessAction, MoveFilesErrorAction,
  MoveFilesSuccessAction,
  SelectAllFilesAction,
  SelectFileAction,
  UnSelectAllFilesAction,
  UnSelectFileAction,
  UploadFilesSuccessAction
} from './file-manager.action';
import {ICropBounds} from '../crop/ICropBounds';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {IFileModel} from '../filesList/interface/IFileModel';

describe('fileManagerReducer', () => {
  let state: IFileManagerState;

  beforeEach(() => {
    state = {
      entities: {},
      files: [],
      selectedFiles: []
    };

    filesData.forEach((file) => {
      state.entities[file.id] = file;
      state.files.push(file.id.toString());
    });
  });

  describe('cropFile', () => {
    it('should return proper state', () => {
      const fileData = filesData[2];
      const action = new CropFileAction({file: new FileModel(fileData), bounds: <ICropBounds>{}});

      expect(fileManagerReducer(state, action)).toEqual(state);
    });
  });

  describe('inverseFilesSelection', () => {
    it('should return proper state', () => {
      const fileData = filesData[2];

      state.selectedFiles.push(filesData[0].id.toString());
      state.selectedFiles.push(filesData[1].id.toString());

      const action = new InverseFilesSelectionAction();
      const expectedState = Object.assign({}, state);

      expectedState.selectedFiles = [fileData.id.toString()];

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('loadFiles', () => {
    it('should return proper state', () => {
      const newFile: IOuterFile = {
        id: 'abc.jpg',
        folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
        name: 'RK1409_7D_2544-Edit960px.jpg',
        thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
        url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
        type: 'image/jpeg',
        size: 6076,
        width: 960,
        height: 640,
        selected: true
      };

      const action = new LoadFilesSuccessAction({files: [newFile]});

      const expectedState = {
        entities: {},
        files: [newFile.id.toString()],
        selectedFiles: [],
      };

      expectedState.entities[newFile.id] = newFile;

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });


  describe('moveFiles', () => {
    it('should return proper new state', () => {
      const file = filesData[2];
      const folderId = null;
      const expectedFiles = [
        {
          id: 'BANER2.png',
          folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
          name: 'BANER2.png',
          thumbnailUrl: '/uploads/BANER2.png',
          url: '/uploads/BANER2.png',
          type: 'image/png',
          size: 6076,
          width: 1100,
          height: 300
        },
        {
          id: 'RK1409_7D_2500960px.jpg',
          folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
          name: 'RK1409_7D_2500960px.jpg',
          thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
          url: '/uploads/RK1409_7D_2500960px.jpg',
          type: 'image/jpeg',
          size: 6076,
          width: 960,
          height: 640
        },
        {
          id: 'RK1409_7D_2544-Edit960px.jpg',
          folderId: '',
          name: 'RK1409_7D_2544-Edit960px.jpg',
          thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
          url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
          type: 'image/jpeg',
          size: 6076,
          width: 960,
          height: 640,
          selected: true
        }];

      const action = new MoveFilesSuccessAction({
        folderId,
        files: [file],
      });

      const expectedState = {
        entities: {},
        files: [],
        selectedFiles: [...state.selectedFiles]
      };

      expectedFiles.forEach((f) => {
        expectedState.entities[f.id] = f;
        if (f.id !== file.id) {
          expectedState.files.push(f.id.toString());
        }
      });

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('removeFile', () => {
    it('should return proper state', () => {
      const expectedState: IFileManagerState = {
        entities: {
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640,
            selected: true
          }
        },
        files: ['RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: []
      };

      const file = new FileModel({
        id: 'BANER2.png',
        folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
        name: 'BANER2.png',
        thumbnailUrl: '/uploads/BANER2.png',
        url: '/uploads/BANER2.png',
        type: 'image/png',
        size: 6076,
        width: 1100,
        height: 300
      });

      const action = new DeleteFileSuccessAction({file});

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('removeSelectedFiles', () => {
    it('should return proper state', () => {
      const expectedState: IFileManagerState = {
        entities: {
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640,
            selected: true
          }
        },
        files: ['RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: []
      };
      state.selectedFiles.push('BANER2.png');

      const action = new DeleteSelectedFilesSuccessAction({files: ['BANER2.png']});

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('selectFile', () => {
    it('should return proper new state', () => {
      const file = new FileModel(filesData[0]);
      const action = new SelectFileAction({file})

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640,
            selected: true
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: ['BANER2.png']
      };

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('selectAllFiles', () => {
    it('should return proper new state', () => {
      const action = new SelectAllFilesAction();

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640,
            selected: true
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg']
      };

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('uploadFiles', () => {
    it('should return proper new state', () => {
      const action = new UploadFilesSuccessAction({
        files: [
          {
            id: 'BANER201.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          }
        ]
      });

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640,
            selected: true
          },
          'BANER201.png': {
            id: 'BANER201.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg', 'BANER201.png'],
        selectedFiles: []
      };

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('unSelectAllFiles', () => {
    it('should return proper new state', () => {
      const action = new UnSelectAllFilesAction();

      const expectedState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640,
            selected: true
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: []
      };

      state.selectedFiles = ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'];

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('unSelectFile', () => {
    it('should return proper new state', () => {
      const file = new FileModel(filesData[0]);
      const action = new UnSelectFileAction({file})

      const expectedState: IFileManagerState = {
        entities: {
          'BANER2.png': {
            id: 'BANER2.png',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'BANER2.png',
            thumbnailUrl: '/uploads/BANER2.png',
            url: '/uploads/BANER2.png',
            type: 'image/png',
            size: 6076,
            width: 1100,
            height: 300
          },
          'RK1409_7D_2500960px.jpg': {
            id: 'RK1409_7D_2500960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2500960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2500960px.jpg',
            url: '/uploads/RK1409_7D_2500960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640
          },
          'RK1409_7D_2544-Edit960px.jpg': {
            id: 'RK1409_7D_2544-Edit960px.jpg',
            folderId: 'dd9b20d8-260b-54c1-7eca-c22eae257edc',
            name: 'RK1409_7D_2544-Edit960px.jpg',
            thumbnailUrl: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            url: '/uploads/RK1409_7D_2544-Edit960px.jpg',
            type: 'image/jpeg',
            size: 6076,
            width: 960,
            height: 640,
            selected: true,
          }
        },
        files: ['BANER2.png', 'RK1409_7D_2500960px.jpg', 'RK1409_7D_2544-Edit960px.jpg'],
        selectedFiles: []
      };

      state.selectedFiles.push('BANER2.png');

      expect(fileManagerReducer(state, action)).toEqual(expectedState);
    });
  });

  describe('default', () => {
    let newState: IFileManagerState;

    beforeEach(() => {
      newState = Object.assign({}, state);
    });

    it('should return the same state for DELETE_FILE_SELECTION', () => {
      const action = new DeleteSelectedFilesAction({files: ['file.jpg']});

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for FILEMANAGER_CROP_FILE', () => {
      const action = new CropFileAction({file: <IFileModel>{}, bounds: <ICropBounds>{}});

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for FILEMANAGER_DELETE_FILE', () => {
      const action = new DeleteFileAction({file: <IFileModel>{}});

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for FILEMANAGER_LOAD_FILES', () => {
      const action = new LoadFilesAction({folderId: '312'});

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });

    it('should return the same state for FILEMANAGER_MOVE_FILES_ERROR', () => {
      const action = new MoveFilesErrorAction({files: [<IOuterFile>{}]});

      expect(fileManagerReducer(state, action)).toEqual(newState);
    });
  });
});
