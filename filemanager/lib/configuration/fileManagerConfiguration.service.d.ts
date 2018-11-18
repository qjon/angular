import { IContextMenu } from '@rign/angular2-tree';
import { IFileTypeFilter } from '../toolbar/interface/IFileTypeFilter';
import { ICropSize } from '../crop/ICropSize';
import { IFileManagerConfiguration } from './IFileManagerConfiguration';
export declare class FileManagerConfiguration {
    allowedCropSize: ICropSize[];
    contextMenuItems: IContextMenu[];
    fileTypesFilter: IFileTypeFilter[];
    folderUrls: {
        foldersUrl: string;
        folderMoveUrl: string;
    };
    fileUrl: string;
    isMultiSelection: boolean;
    maxFileSize: number;
    mimeTypes: string[] | null;
    allowChooseMultipleFiles: boolean;
    constructor(configuration: IFileManagerConfiguration);
}
