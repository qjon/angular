/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { AbstractFileManagerApiService, FILEMANAGER_TREE_NAME } from './fileManagerApiAbstract.class';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
export class FileManagerBackendApiService extends AbstractFileManagerApiService {
    /**
     * @param {?} $http
     * @param {?} configuration
     */
    constructor($http, configuration) {
        super();
        this.$http = $http;
        this.configuration = configuration;
        this.nodes = [];
        this.files = [];
    }
    /**
     * @return {?}
     */
    get treeId() {
        return FILEMANAGER_TREE_NAME;
    }
    /**
     * Load folder chidls for given folder id
     * @param {?=} nodeId
     * @return {?}
     */
    load(nodeId = '') {
        /** @type {?} */
        const nodeIds = this.nodes.map((node) => node.id);
        /** @type {?} */
        const params = new HttpParams().set('nodeId', nodeId || '');
        return this.$http.get(this.configuration.folderUrls.foldersUrl, { params })
            .pipe(map((nodes) => {
            nodes.forEach((node) => {
                if (nodeIds.indexOf(node.id) === -1) {
                    this.nodes.push(node);
                }
                else {
                    /** @type {?} */
                    const index = this.nodes.findIndex((item) => node.id === item.id);
                    this.nodes[index] = node;
                }
            });
            return nodes;
        }));
    }
    /**
     * Create new folder
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    add(node, parentNodeId = null) {
        /** @type {?} */
        const data = {
            node: node,
            parentNodeId: parentNodeId
        };
        return this.$http.post(this.configuration.folderUrls.foldersUrl, data)
            .pipe(map((newNode) => {
            this.nodes.push(newNode);
            return newNode;
        }));
    }
    /**
     * Move folder from source parent to target parent
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    move(srcNode, targetNode) {
        /** @type {?} */
        const srcId = srcNode.id;
        /** @type {?} */
        const targetId = targetNode ? targetNode.id : null;
        return this.$http.put(this.configuration.folderUrls.folderMoveUrl, { source: srcId, target: targetId })
            .pipe(map((movedNode) => {
            /** @type {?} */
            const index = this.findIndexByNodeId(srcId);
            this.nodes[index].parentId = targetId;
            return movedNode;
        }));
    }
    /**
     * Update folder name
     * @param {?} node
     * @return {?}
     */
    update(node) {
        return this.$http.put(this.configuration.folderUrls.foldersUrl, node)
            .pipe(map((newNode) => {
            /** @type {?} */
            const index = this.findIndexByNodeId(node.id);
            this.nodes[index] = newNode;
            return newNode;
        }));
    }
    /**
     * Remove node by given id
     * @param {?} nodeId
     * @return {?}
     */
    remove(nodeId) {
        /** @type {?} */
        const index = this.findIndexByNodeId(nodeId);
        /** @type {?} */
        const hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            /** @type {?} */
            const params = new HttpParams().set('nodeId', nodeId);
            return this.$http.delete(this.configuration.folderUrls.foldersUrl, { params })
                .pipe(map((removedNode) => {
                this.nodes.splice(index, 1);
                return removedNode;
            }));
        }
        else {
            return Observable.throw('Node is not empty');
        }
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    setAllNodes(nodes) {
        this.nodes = [...nodes];
    }
    /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        return this.$http.put(this.configuration.fileUrl, { id: file.id, bounds: bounds });
    }
    /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    loadFiles(nodeId = '') {
        this.currentNodeId = nodeId;
        /** @type {?} */
        const params = new HttpParams().set('dirId', nodeId);
        return this.$http.get(this.configuration.fileUrl, { params })
            .pipe(map((files) => {
            this.files = files.map((file) => (/** @type {?} */ (file)));
            return files;
        }));
    }
    /**
     * Remove file from folder
     * @param {?} file
     * @return {?}
     */
    removeFile(file) {
        /** @type {?} */
        const index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return of(false);
        }
        /** @type {?} */
        const params = new HttpParams().set('id', file.id.toString());
        return this.$http.delete(this.configuration.fileUrl, { params })
            .pipe(map(() => {
            this.files.splice(index, 1);
            return true;
        }));
    }
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    removeSelectedFiles(selectedFiles) {
        /** @type {?} */
        const params = new HttpParams().set('id', selectedFiles.join('|'));
        return this.$http.delete(this.configuration.fileUrl, { params })
            .pipe(map(() => {
            selectedFiles.forEach((fileId) => {
                /** @type {?} */
                const index = this.findIndexByFileId(fileId);
                if (index > -1) {
                    this.files.splice(index, 1);
                }
            });
            return true;
        }));
    }
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     * @param {?} file
     * @return {?}
     */
    uploadFile(file) {
        /** @type {?} */
        const fileData = (/** @type {?} */ (file));
        this.files.push(fileData);
        return of(file);
    }
    /**
     * @param {?} files
     * @param {?} node
     * @return {?}
     */
    moveFile(files, node) {
        /** @type {?} */
        const ids = files.map(file => file.id.toString());
        return this.$http.put(this.configuration.fileUrl, { files: ids, folderId: node ? node.id : '' });
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
FileManagerBackendApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerBackendApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: FileManagerConfiguration }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileManagerBackendApiService.prototype.$http;
    /**
     * @type {?}
     * @private
     */
    FileManagerBackendApiService.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJCYWNrZW5kQXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS9maWxlTWFuYWdlckJhY2tlbmRBcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUMsNkJBQTZCLEVBQUUscUJBQXFCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRyxPQUFPLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRTVELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU1uQyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsNkJBQTZCOzs7OztJQUU3RSxZQUEyQixLQUFpQixFQUNqQixhQUF1QztRQUNoRSxLQUFLLEVBQUUsQ0FBQztRQUZpQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUVoRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFLTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7O2NBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7Y0FFdkQsTUFBTSxHQUFHLElB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QUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7OztZQWpQRixVQUFVOzs7O1lBUEgsVUFBVTtZQUZWLHdCQUF3Qjs7Ozs7OztJQVlYLDZDQUF5Qjs7Ozs7SUFDekIscURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SU5vZGVTZXJ2aWNlLCBJT3V0ZXJOb2RlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSwgRklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckFwaX0gZnJvbSAnLi9JRmlsZU1hbmFnZXJBcGknO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJRmlsZURhdGFQcm9wZXJ0aWVzfSBmcm9tICcuLi9zZXJ2aWNlcy9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckJhY2tlbmRBcGlTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RGaWxlTWFuYWdlckFwaVNlcnZpY2UgaW1wbGVtZW50cyBJRmlsZU1hbmFnZXJBcGksIElOb2RlU2VydmljZSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHJlZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEZJTEVNQU5BR0VSX1RSRUVfTkFNRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGZvbGRlciBjaGlkbHMgZm9yIGdpdmVuIGZvbGRlciBpZFxuICAgKi9cbiAgcHVibGljIGxvYWQobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIGNvbnN0IG5vZGVJZHMgPSB0aGlzLm5vZGVzLm1hcCgobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5pZCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnbm9kZUlkJywgbm9kZUlkIHx8ICcnKTtcblxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldDxJT3V0ZXJOb2RlW10+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlcnNVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobm9kZXM6IElPdXRlck5vZGVbXSkgPT4ge1xuICAgICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlSWRzLmluZGV4T2Yobm9kZS5pZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ub2Rlcy5maW5kSW5kZXgoKGl0ZW06IElPdXRlck5vZGUpID0+IG5vZGUuaWQgPT09IGl0ZW0uaWQpO1xuICAgICAgICAgICAgICB0aGlzLm5vZGVzW2luZGV4XSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgZm9sZGVyXG4gICAqL1xuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBub2RlOiBub2RlLFxuICAgICAgcGFyZW50Tm9kZUlkOiBwYXJlbnROb2RlSWRcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJzVXJsLCBkYXRhKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobmV3Tm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXdOb2RlKTtcblxuICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGZvbGRlciBmcm9tIHNvdXJjZSBwYXJlbnQgdG8gdGFyZ2V0IHBhcmVudFxuICAgKi9cbiAgcHVibGljIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBzcmNJZCA9IHNyY05vZGUuaWQ7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSB0YXJnZXROb2RlID8gdGFyZ2V0Tm9kZS5pZCA6IG51bGw7XG5cblxuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJNb3ZlVXJsLCB7c291cmNlOiBzcmNJZCwgdGFyZ2V0OiB0YXJnZXRJZH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChtb3ZlZE5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQoc3JjSWQpO1xuICAgICAgICAgIHRoaXMubm9kZXNbaW5kZXhdLnBhcmVudElkID0gdGFyZ2V0SWQ7XG5cbiAgICAgICAgICByZXR1cm4gbW92ZWROb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZm9sZGVyIG5hbWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJzVXJsLCBub2RlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobmV3Tm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlLmlkKTtcblxuICAgICAgICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbmV3Tm9kZTtcblxuICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbm9kZSBieSBnaXZlbiBpZFxuICAgKi9cbiAgcHVibGljIHJlbW92ZShub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlSWQpO1xuXG4gICAgY29uc3QgaGFzQ2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKG5vZGVJZCkubGVuZ3RoID4gMDtcblxuICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdub2RlSWQnLCBub2RlSWQpO1xuXG4gICAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGU8SU91dGVyTm9kZT4odGhpcy5jb25maWd1cmF0aW9uLmZvbGRlclVybHMuZm9sZGVyc1VybCwge3BhcmFtc30pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVtb3ZlZE5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWROb2RlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdOb2RlIGlzIG5vdCBlbXB0eScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlcyA9IFsuLi5ub2Rlc107XG4gIH1cblxuICAvKipcbiAgICogQ3JvcCBmaWxlXG4gICAqL1xuICBwdWJsaWMgY3JvcEZpbGUoZmlsZTogSU91dGVyRmlsZSwgYm91bmRzOiBJQ3JvcEJvdW5kcyk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJGaWxlPih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge2lkOiBmaWxlLmlkLCBib3VuZHM6IGJvdW5kc30pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgZmlsZXMgZnJvbSBkaXJlY3RvcnlcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlckZpbGVbXT4ge1xuICAgIHRoaXMuY3VycmVudE5vZGVJZCA9IG5vZGVJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnZGlySWQnLCBub2RlSWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0PElPdXRlckZpbGVbXT4odGhpcy5jb25maWd1cmF0aW9uLmZpbGVVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoZmlsZXM6IElPdXRlckZpbGVbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcy5tYXAoKGZpbGU6IElPdXRlckZpbGUpID0+IDxJRmlsZURhdGFQcm9wZXJ0aWVzPmZpbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpbGVzO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZmlsZSBmcm9tIGZvbGRlclxuICAgKi9cbiAgcHVibGljIHJlbW92ZUZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeUZpbGVJZChmaWxlLmlkLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnaWQnLCBmaWxlLmlkLnRvU3RyaW5nKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZGVsZXRlPGFueT4odGhpcy5jb25maWd1cmF0aW9uLmZpbGVVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkRmlsZXMoc2VsZWN0ZWRGaWxlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnaWQnLCBzZWxlY3RlZEZpbGVzLmpvaW4oJ3wnKSk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGU8YW55Pih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICBzZWxlY3RlZEZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHN1Y2Nlc3MgbWV0aG9kLCByZWFsIHVwbG9hZCBpcyBkb25lIGluIEV4dGVuZGVkRmlsZVVwbG9hZGVyXG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlPiB7XG4gICAgY29uc3QgZmlsZURhdGEgPSA8SUZpbGVEYXRhUHJvcGVydGllcz5maWxlO1xuICAgIHRoaXMuZmlsZXMucHVzaChmaWxlRGF0YSk7XG5cbiAgICByZXR1cm4gb2YoZmlsZSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZUZpbGUoZmlsZXM6IElPdXRlckZpbGVbXSwgbm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQ8SU91dGVyRmlsZVtdPih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge2ZpbGVzOiBpZHMsIGZvbGRlcklkOiBub2RlID8gbm9kZS5pZCA6ICcnfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRJbmRleEJ5Tm9kZUlkKG5vZGVJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maW5kSW5kZXgoKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBub2RlLmlkID09PSBub2RlSWQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRJbmRleEJ5RmlsZUlkKGZpbGVJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maW5kSW5kZXgoKGZpbGUpID0+IGZpbGUuaWQgPT09IGZpbGVJZCk7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKG5vZGVJZDogc3RyaW5nKTogSU91dGVyTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maWx0ZXIoKG5vZGU6IElPdXRlck5vZGUpID0+IG5vZGUucGFyZW50SWQgPT09IG5vZGVJZCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlOiBJRmlsZURhdGFQcm9wZXJ0aWVzKTogSU91dGVyRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBmaWxlLmlkLFxuICAgICAgZm9sZGVySWQ6IGZpbGUuZm9sZGVySWQsXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICB0aHVtYm5haWxVcmw6IGZpbGUuZGF0YSxcbiAgICAgIHVybDogZmlsZS5kYXRhLFxuICAgICAgd2lkdGg6IGZpbGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpbGUuaGVpZ2h0LFxuICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgc2l6ZTogZmlsZS5zaXplXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydElPdXRlckZpbGUyTG9jYWxEYXRhKGZpbGU6IElPdXRlckZpbGUpOiBJRmlsZURhdGFQcm9wZXJ0aWVzIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGZpbGUuaWQudG9TdHJpbmcoKSxcbiAgICAgIGZvbGRlcklkOiBmaWxlLmZvbGRlcklkLFxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgZGF0YTogZmlsZS5kYXRhLFxuICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgd2lkdGg6IGZpbGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpbGUuaGVpZ2h0XG4gICAgfTtcbiAgfVxufVxuIl19