import { IOuterNode } from '@rign/angular2-tree';
import { IFileDataProperties } from '../services/imageDataConverter.service';
export declare const FILEMANAGER_TREE_NAME = "fileManagerTree";
export declare abstract class AbstractFileManagerApiService {
    protected treeName: string;
    protected fileManagerName: string;
    protected nodes: IOuterNode[];
    protected files: IFileDataProperties[];
    protected currentNodeId: string;
}
