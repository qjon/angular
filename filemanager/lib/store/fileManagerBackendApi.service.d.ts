import { INodeService, IOuterNode } from '@rign/angular2-tree';
import { Observable } from 'rxjs';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { AbstractFileManagerApiService } from './fileManagerApiAbstract.class';
import { HttpClient } from '@angular/common/http';
import { IFileManagerApi } from './IFileManagerApi';
import { IOuterFile } from '../filesList/interface/IOuterFile';
import { ICropBounds } from '../crop/ICropBounds';
export declare class FileManagerBackendApiService extends AbstractFileManagerApiService implements IFileManagerApi, INodeService {
    private $http;
    private configuration;
    constructor($http: HttpClient, configuration: FileManagerConfiguration);
    readonly treeId: string;
    /**
     * Load folder chidls for given folder id
     */
    load(nodeId?: string): Observable<IOuterNode[]>;
    /**
     * Create new folder
     */
    add(node: IOuterNode, parentNodeId?: string): Observable<IOuterNode>;
    /**
     * Move folder from source parent to target parent
     */
    move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;
    /**
     * Update folder name
     */
    update(node: IOuterNode): Observable<IOuterNode>;
    /**
     * Remove node by given id
     */
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
    /**
     * Remove file from folder
     */
    removeFile(file: IOuterFile): Observable<boolean>;
    removeSelectedFiles(selectedFiles: string[]): Observable<boolean>;
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     */
    uploadFile(file: IOuterFile): Observable<IOuterFile>;
    moveFile(files: IOuterFile[], node: IOuterNode): Observable<IOuterFile[]>;
    private findIndexByNodeId;
    private findIndexByFileId;
    private getChildren;
    private convertLocalData2IOuterFile;
    private convertIOuterFile2LocalData;
}
