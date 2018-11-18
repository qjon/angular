/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { FilemanagerNotifcations } from '../services/FilemanagerNotifcations';
import { AbstractFileManagerApiService, FILEMANAGER_TREE_NAME } from './fileManagerApiAbstract.class';
import { empty, Observable, of, throwError } from 'rxjs';
export class FileManagerApiService extends AbstractFileManagerApiService {
    /**
     * @param {?} filemanagerNotfication
     */
    constructor(filemanagerNotfication) {
        super();
        this.filemanagerNotfication = filemanagerNotfication;
    }
    /**
     * @return {?}
     */
    get treeId() {
        return FILEMANAGER_TREE_NAME;
    }
    /**
     * @param {?=} nodeId
     * @return {?}
     */
    load(nodeId = '') {
        if (!this.nodes) {
            this.nodes = this.getAllDataFromLocalStorage();
        }
        /** @type {?} */
        const nodes = this.getChildren(nodeId);
        return of(nodes);
    }
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    add(node, parentNodeId = null) {
        node.parentId = parentNodeId;
        node.id = UUID.UUID();
        this.nodes.push(node);
        if (this.saveNodes()) {
            return of(node);
        }
        else {
            return empty();
        }
    }
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    move(srcNode, targetNode) {
        /** @type {?} */
        const srcId = srcNode.id;
        /** @type {?} */
        const targetId = targetNode ? targetNode.id : '';
        /** @type {?} */
        const index = this.findIndexByNodeId(srcId);
        this.nodes[index].parentId = targetId;
        if (this.saveNodes()) {
            return of(this.nodes[index]);
        }
        else {
            return empty();
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    update(node) {
        /** @type {?} */
        const index = this.findIndexByNodeId(node.id);
        this.nodes[index] = node;
        if (this.saveNodes()) {
            return of(node);
        }
        else {
            return empty();
        }
    }
    /**
     * @param {?} nodeId
     * @return {?}
     */
    remove(nodeId) {
        /** @type {?} */
        const index = this.findIndexByNodeId(nodeId);
        /** @type {?} */
        const node = this.nodes[index];
        /** @type {?} */
        const hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            this.nodes.splice(index, 1);
            this.saveNodes();
            return of(node);
        }
        else {
            return throwError('Node is not empty');
        }
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    setAllNodes(nodes) {
        this.nodes = [...nodes];
        this.saveNodes();
    }
    /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        return throwError('This functionality is not available with LocalStorage');
    }
    /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    loadFiles(nodeId = '') {
        this.currentNodeId = nodeId;
        if (!this.files) {
            this.files = this.getAllFileDataFromLocalStorage();
        }
        /** @type {?} */
        const files = this.getFilesFromFolder(nodeId);
        /** @type {?} */
        const newFiles = files.map((file) => {
            return this.convertLocalData2IOuterFile(file);
        });
        return of(newFiles);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    removeFile(file) {
        /** @type {?} */
        const index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return of(false);
        }
        this.files.splice(index, 1);
        this.saveFiles();
        return of(true);
    }
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    removeSelectedFiles(selectedFiles) {
        /** @type {?} */
        const numberOfFiles = this.files.length;
        selectedFiles.forEach((fileId) => {
            /** @type {?} */
            const index = this.findIndexByFileId(fileId);
            if (index > -1) {
                this.files.splice(index, 1);
            }
        });
        this.saveFiles();
        return of((this.files.length + selectedFiles.length === numberOfFiles));
    }
    /**
     * @param {?} file
     * @return {?}
     */
    uploadFile(file) {
        /** @type {?} */
        const fileData = this.convertIOuterFile2LocalData(file);
        this.files.push(fileData);
        if (this.saveFiles()) {
            return of(this.convertLocalData2IOuterFile(fileData));
        }
        else {
            return Observable.throw('Upload error');
        }
    }
    /**
     * @param {?} files
     * @param {?=} node
     * @return {?}
     */
    moveFile(files, node = null) {
        /** @type {?} */
        const ids = files.map(file => file.id.toString());
        /** @type {?} */
        const folderId = node ? node.id.toString() : '';
        /** @type {?} */
        const movedFiles = this.files.filter(file => ids.indexOf(file.id.toString()) > -1);
        /** @type {?} */
        const errorMsg = 'Can not move file to the same folder';
        /** @type {?} */
        const isMovedToSameFolder = false;
        movedFiles.forEach((file) => {
            if (node) {
                if (node.id === file.folderId) {
                }
            }
            else {
                if (file.folderId === '' || file.folderId === null) {
                    return Observable.throw(errorMsg);
                }
            }
            file.folderId = folderId;
        });
        if (isMovedToSameFolder) {
            return Observable.throw(errorMsg);
        }
        if (this.saveFiles()) {
            return of(movedFiles.map(file => this.convertLocalData2IOuterFile(file)));
        }
        else {
            return Observable.throw('Move files error');
        }
    }
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    findIndexByNodeId(nodeId) {
        return this.nodes.findIndex((node) => {
            return node.id === nodeId;
        });
    }
    /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    findIndexByFileId(fileId) {
        return this.files.findIndex((file) => file.id === fileId);
    }
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    getChildren(nodeId) {
        return this.nodes.filter((node) => node.parentId === nodeId);
    }
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    getFilesFromFolder(nodeId) {
        return this.files.filter((file) => file.folderId === nodeId);
    }
    /**
     * @protected
     * @return {?}
     */
    getAllDataFromLocalStorage() {
        try {
            /** @type {?} */
            const data = localStorage.getItem(this.treeName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getAllFileDataFromLocalStorage() {
        try {
            /** @type {?} */
            const data = localStorage.getItem(this.fileManagerName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveNodes() {
        try {
            localStorage.setItem(this.treeName, JSON.stringify(this.nodes));
            return true;
        }
        catch (e) {
            this.filemanagerNotfication.sendNotification({
                type: 'error',
                title: 'State is not saved.',
                message: 'Reload previous state.'
            });
            this.files = null;
            this.nodes = null;
            this.load();
            return false;
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveFiles() {
        try {
            localStorage.setItem(this.fileManagerName, JSON.stringify(this.files));
            return true;
        }
        catch (e) {
            this.filemanagerNotfication.sendNotification({
                type: 'error',
                title: 'State is not saved.',
                message: 'Reload previous state.'
            });
            /** @type {?} */
            const nodeId = this.files[(this.files.length - 1)].folderId || null;
            this.files = null;
            this.load(nodeId);
            return false;
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    convertLocalData2IOuterFile(file) {
        return {
            id: file.id,
            folderId: file.folderId,
            name: file.name,
            thumbnailUrl: file.data,
            url: file.data,
            width: file.width,
            height: file.height,
            type: file.type,
            size: file.size
        };
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    convertIOuterFile2LocalData(file) {
        return {
            id: file.id.toString(),
            folderId: file.folderId,
            name: file.name,
            type: file.type,
            data: file.data,
            size: file.size,
            width: file.width,
            height: file.height
        };
    }
}
FileManagerApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerApiService.ctorParameters = () => [
    { type: FilemanagerNotifcations }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileManagerApiService.prototype.filemanagerNotfication;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJBcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3N0b3JlL2ZpbGVNYW5hZ2VyQXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUtuQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsNkJBQTZCLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRyxPQUFPLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR3ZELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSw2QkFBNkI7Ozs7SUFFdEUsWUFBMkIsc0JBQStDO1FBQ3hFLEtBQUssRUFBRSxDQUFDO1FBRGlCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBeUI7SUFFMUUsQ0FBQzs7OztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1NBQ2hEOztjQUVLLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUV0QyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTSxHQUFHLENBQUMsSUFBZ0IsRUFBRSxlQUF1QixJQUFJO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FB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QUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7OztZQTlTRixVQUFVOzs7O1lBSkgsdUJBQXVCOzs7Ozs7O0lBT1YsdURBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SU91dGVyTm9kZSwgSU5vZGVTZXJ2aWNlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7VVVJRH0gZnJvbSAnYW5ndWxhcjItdXVpZCc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckFwaX0gZnJvbSAnLi9JRmlsZU1hbmFnZXJBcGknO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZURhdGFQcm9wZXJ0aWVzfSBmcm9tICcuLi9zZXJ2aWNlcy9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0lDcm9wQm91bmRzfSBmcm9tICcuLi9jcm9wL0lDcm9wQm91bmRzJztcbmltcG9ydCB7RmlsZW1hbmFnZXJOb3RpZmNhdGlvbnN9IGZyb20gJy4uL3NlcnZpY2VzL0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zJztcbmltcG9ydCB7QWJzdHJhY3RGaWxlTWFuYWdlckFwaVNlcnZpY2UsIEZJTEVNQU5BR0VSX1RSRUVfTkFNRX0gZnJvbSAnLi9maWxlTWFuYWdlckFwaUFic3RyYWN0LmNsYXNzJztcbmltcG9ydCB7ZW1wdHksIE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyQXBpU2VydmljZSBleHRlbmRzIEFic3RyYWN0RmlsZU1hbmFnZXJBcGlTZXJ2aWNlIGltcGxlbWVudHMgSUZpbGVNYW5hZ2VyQXBpLCBJTm9kZVNlcnZpY2Uge1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVtYW5hZ2VyTm90ZmljYXRpb246IEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHJlZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEZJTEVNQU5BR0VSX1RSRUVfTkFNRTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKG5vZGVJZCA9ICcnKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+IHtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHtcbiAgICAgIHRoaXMubm9kZXMgPSB0aGlzLmdldEFsbERhdGFGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmdldENoaWxkcmVuKG5vZGVJZCk7XG5cbiAgICByZXR1cm4gb2Yobm9kZXMpO1xuICB9XG5cbiAgcHVibGljIGFkZChub2RlOiBJT3V0ZXJOb2RlLCBwYXJlbnROb2RlSWQ6IHN0cmluZyA9IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBub2RlLnBhcmVudElkID0gcGFyZW50Tm9kZUlkO1xuICAgIG5vZGUuaWQgPSBVVUlELlVVSUQoKTtcblxuICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBzcmNJZCA9IHNyY05vZGUuaWQ7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSB0YXJnZXROb2RlID8gdGFyZ2V0Tm9kZS5pZCA6ICcnO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5Tm9kZUlkKHNyY0lkKTtcblxuICAgIHRoaXMubm9kZXNbaW5kZXhdLnBhcmVudElkID0gdGFyZ2V0SWQ7XG5cbiAgICBpZiAodGhpcy5zYXZlTm9kZXMoKSkge1xuICAgICAgcmV0dXJuIG9mKHRoaXMubm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVtcHR5KCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKG5vZGU6IElPdXRlck5vZGUpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQobm9kZS5pZCk7XG5cbiAgICB0aGlzLm5vZGVzW2luZGV4XSA9IG5vZGU7XG5cbiAgICBpZiAodGhpcy5zYXZlTm9kZXMoKSkge1xuICAgICAgcmV0dXJuIG9mKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5Tm9kZUlkKG5vZGVJZCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZXNbaW5kZXhdO1xuXG4gICAgY29uc3QgaGFzQ2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKG5vZGVJZCkubGVuZ3RoID4gMDtcblxuICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgdGhpcy5zYXZlTm9kZXMoKTtcblxuICAgICAgcmV0dXJuIG9mKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignTm9kZSBpcyBub3QgZW1wdHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0QWxsTm9kZXMobm9kZXM6IElPdXRlck5vZGVbXSk6IHZvaWQge1xuICAgIHRoaXMubm9kZXMgPSBbLi4ubm9kZXNdO1xuXG4gICAgdGhpcy5zYXZlTm9kZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIGZpbGVcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJT3V0ZXJGaWxlLCBib3VuZHM6IElDcm9wQm91bmRzKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlPiB7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoJ1RoaXMgZnVuY3Rpb25hbGl0eSBpcyBub3QgYXZhaWxhYmxlIHdpdGggTG9jYWxTdG9yYWdlJyk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBmaWxlcyBmcm9tIGRpcmVjdG9yeVxuICAgKi9cbiAgcHVibGljIGxvYWRGaWxlcyhub2RlSWQgPSAnJyk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgdGhpcy5jdXJyZW50Tm9kZUlkID0gbm9kZUlkO1xuXG4gICAgaWYgKCF0aGlzLmZpbGVzKSB7XG4gICAgICB0aGlzLmZpbGVzID0gdGhpcy5nZXRBbGxGaWxlRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXNGcm9tRm9sZGVyKG5vZGVJZCk7XG5cbiAgICBjb25zdCBuZXdGaWxlczogSU91dGVyRmlsZVtdID0gZmlsZXMubWFwKChmaWxlOiBJRmlsZURhdGFQcm9wZXJ0aWVzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2YobmV3RmlsZXMpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeUZpbGVJZChmaWxlLmlkLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5zYXZlRmlsZXMoKTtcblxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVTZWxlY3RlZEZpbGVzKHNlbGVjdGVkRmlsZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZGaWxlcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuXG4gICAgc2VsZWN0ZWRGaWxlcy5mb3JFYWNoKChmaWxlSWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5RmlsZUlkKGZpbGVJZCk7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2F2ZUZpbGVzKCk7XG5cbiAgICByZXR1cm4gb2YoKHRoaXMuZmlsZXMubGVuZ3RoICsgc2VsZWN0ZWRGaWxlcy5sZW5ndGggPT09IG51bWJlck9mRmlsZXMpKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWRGaWxlKGZpbGU6IElPdXRlckZpbGUpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICBjb25zdCBmaWxlRGF0YSA9IHRoaXMuY29udmVydElPdXRlckZpbGUyTG9jYWxEYXRhKGZpbGUpO1xuICAgIHRoaXMuZmlsZXMucHVzaChmaWxlRGF0YSk7XG5cbiAgICBpZiAodGhpcy5zYXZlRmlsZXMoKSkge1xuICAgICAgcmV0dXJuIG9mKHRoaXMuY29udmVydExvY2FsRGF0YTJJT3V0ZXJGaWxlKGZpbGVEYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdVcGxvYWQgZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbW92ZUZpbGUoZmlsZXM6IElPdXRlckZpbGVbXSwgbm9kZTogSU91dGVyTm9kZSA9IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlckZpbGVbXT4ge1xuICAgIGNvbnN0IGlkczogc3RyaW5nW10gPSBmaWxlcy5tYXAoZmlsZSA9PiBmaWxlLmlkLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGZvbGRlcklkID0gbm9kZSA/IG5vZGUuaWQudG9TdHJpbmcoKSA6ICcnO1xuXG4gICAgY29uc3QgbW92ZWRGaWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gaWRzLmluZGV4T2YoZmlsZS5pZC50b1N0cmluZygpKSA+IC0xKTtcbiAgICBjb25zdCBlcnJvck1zZyA9ICdDYW4gbm90IG1vdmUgZmlsZSB0byB0aGUgc2FtZSBmb2xkZXInO1xuXG4gICAgY29uc3QgaXNNb3ZlZFRvU2FtZUZvbGRlciA9IGZhbHNlO1xuXG4gICAgbW92ZWRGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5pZCA9PT0gZmlsZS5mb2xkZXJJZCkge1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmlsZS5mb2xkZXJJZCA9PT0gJycgfHwgZmlsZS5mb2xkZXJJZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yTXNnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGZpbGUuZm9sZGVySWQgPSBmb2xkZXJJZDtcbiAgICB9KTtcblxuICAgIGlmIChpc01vdmVkVG9TYW1lRm9sZGVyKSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yTXNnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zYXZlRmlsZXMoKSkge1xuICAgICAgcmV0dXJuIG9mKG1vdmVkRmlsZXMubWFwKGZpbGUgPT4gdGhpcy5jb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ01vdmUgZmlsZXMgZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRJbmRleEJ5Tm9kZUlkKG5vZGVJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maW5kSW5kZXgoKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBub2RlLmlkID09PSBub2RlSWQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRJbmRleEJ5RmlsZUlkKGZpbGVJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maW5kSW5kZXgoKGZpbGUpID0+IGZpbGUuaWQgPT09IGZpbGVJZCk7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKG5vZGVJZDogc3RyaW5nKTogSU91dGVyTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maWx0ZXIoKG5vZGU6IElPdXRlck5vZGUpID0+IG5vZGUucGFyZW50SWQgPT09IG5vZGVJZCk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpbGVzRnJvbUZvbGRlcihub2RlSWQ6IHN0cmluZyk6IElGaWxlRGF0YVByb3BlcnRpZXNbXSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKChmaWxlOiBJRmlsZURhdGFQcm9wZXJ0aWVzKSA9PiBmaWxlLmZvbGRlcklkID09PSBub2RlSWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEFsbERhdGFGcm9tTG9jYWxTdG9yYWdlKCk6IElPdXRlck5vZGVbXSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRyZWVOYW1lKTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QWxsRmlsZURhdGFGcm9tTG9jYWxTdG9yYWdlKCk6IElGaWxlRGF0YVByb3BlcnRpZXNbXSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmZpbGVNYW5hZ2VyTmFtZSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW107XG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlTm9kZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudHJlZU5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMubm9kZXMpKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICB0aXRsZTogJ1N0YXRlIGlzIG5vdCBzYXZlZC4nLFxuICAgICAgICBtZXNzYWdlOiAnUmVsb2FkIHByZXZpb3VzIHN0YXRlLidcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZpbGVzID0gbnVsbDtcbiAgICAgIHRoaXMubm9kZXMgPSBudWxsO1xuXG4gICAgICB0aGlzLmxvYWQoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUZpbGVzKCk6IGJvb2xlYW4ge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmZpbGVNYW5hZ2VyTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5maWxlcykpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnU3RhdGUgaXMgbm90IHNhdmVkLicsXG4gICAgICAgIG1lc3NhZ2U6ICdSZWxvYWQgcHJldmlvdXMgc3RhdGUuJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5vZGVJZCA9IHRoaXMuZmlsZXNbKHRoaXMuZmlsZXMubGVuZ3RoIC0gMSldLmZvbGRlcklkIHx8IG51bGw7XG5cbiAgICAgIHRoaXMuZmlsZXMgPSBudWxsO1xuXG4gICAgICB0aGlzLmxvYWQobm9kZUlkKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29udmVydExvY2FsRGF0YTJJT3V0ZXJGaWxlKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpOiBJT3V0ZXJGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGZpbGUuaWQsXG4gICAgICBmb2xkZXJJZDogZmlsZS5mb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHRodW1ibmFpbFVybDogZmlsZS5kYXRhLFxuICAgICAgdXJsOiBmaWxlLmRhdGEsXG4gICAgICB3aWR0aDogZmlsZS53aWR0aCxcbiAgICAgIGhlaWdodDogZmlsZS5oZWlnaHQsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBzaXplOiBmaWxlLnNpemVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0SU91dGVyRmlsZTJMb2NhbERhdGEoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlRGF0YVByb3BlcnRpZXMge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZmlsZS5pZC50b1N0cmluZygpLFxuICAgICAgZm9sZGVySWQ6IGZpbGUuZm9sZGVySWQsXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBkYXRhOiBmaWxlLmRhdGEsXG4gICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB3aWR0aDogZmlsZS53aWR0aCxcbiAgICAgIGhlaWdodDogZmlsZS5oZWlnaHRcbiAgICB9O1xuICB9XG59XG4iXX0=