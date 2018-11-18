import { IOuterNode, INodeService } from '@rign/angular2-tree';
import { IFileManagerApi } from './IFileManagerApi';
import { IOuterFile } from '../filesList/interface/IOuterFile';
import { IFileDataProperties } from '../services/imageDataConverter.service';
import { ICropBounds } from '../crop/ICropBounds';
import { FilemanagerNotifcations } from '../services/FilemanagerNotifcations';
import { AbstractFileManagerApiService } from './fileManagerApiAbstract.class';
import { Observable } from 'rxjs';
export declare class FileManagerApiService extends AbstractFileManagerApiService implements IFileManagerApi, INodeService {
    private filemanagerNotfication;
    constructor(filemanagerNotfication: FilemanagerNotifcations);
    readonly treeId: string;
    load(nodeId?: string): Observable<IOuterNode[]>;
    add(node: IOuterNode, parentNodeId?: string): Observable<IOuterNode>;
    move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;
    update(node: IOuterNode): Observable<IOuterNode>;
    remove(nodeId: string): Observable<IOuterNode>;
    setAllNodes(nodes: IOuterNode[]): void;
    /**
     * Crop file
     */
    cropFile(file: IOuterFile, bounds: ICropBounds): Observable<IOuterFile>;
    /**
     * Load files from directory
     */
    loadFiles(nodeId?: string): Observable<IOuterFile[]>;
    removeFile(file: IOuterFile): Observable<boolean>;
    removeSelectedFiles(selectedFiles: string[]): Observable<boolean>;
    uploadFile(file: IOuterFile): Observable<IOuterFile>;
    moveFile(files: IOuterFile[], node?: IOuterNode): Observable<IOuterFile[]>;
    private findIndexByNodeId;
    private findIndexByFileId;
    private getChildren;
    private getFilesFromFolder;
    protected getAllDataFromLocalStorage(): IOuterNode[];
    protected getAllFileDataFromLocalStorage(): IFileDataProperties[];
    private saveNodes;
    private saveFiles;
    private convertLocalData2IOuterFile;
    private convertIOuterFile2LocalData;
}
