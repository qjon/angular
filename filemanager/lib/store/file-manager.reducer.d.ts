import { IOuterFile } from '../filesList/interface/IOuterFile';
import { MemoizedSelector } from '@ngrx/store';
import { FileManagerAction } from './file-manager.action';
export interface StoreEntities {
    [key: string]: IOuterFile;
}
export interface IFileManagerState {
    entities: StoreEntities;
    files: string[];
    selectedFiles: string[];
}
export declare function fileManagerReducer(state: IFileManagerState, action: FileManagerAction): IFileManagerState;
export declare const filemanagerStateSelector: MemoizedSelector<object, IFileManagerState>;
export declare const getAll: (state: IFileManagerState) => IOuterFile[];
export declare const isChangeStateFiles: (newState: IFileManagerState, prevState: IFileManagerState) => boolean;
export declare const isChangeStateSelectedFiles: (newState: IFileManagerState, prevState: IFileManagerState) => boolean;
