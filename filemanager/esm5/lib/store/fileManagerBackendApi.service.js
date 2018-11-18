/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { AbstractFileManagerApiService, FILEMANAGER_TREE_NAME } from './fileManagerApiAbstract.class';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
var FileManagerBackendApiService = /** @class */ (function (_super) {
    tslib_1.__extends(FileManagerBackendApiService, _super);
    function FileManagerBackendApiService($http, configuration) {
        var _this = _super.call(this) || this;
        _this.$http = $http;
        _this.configuration = configuration;
        _this.nodes = [];
        _this.files = [];
        return _this;
    }
    Object.defineProperty(FileManagerBackendApiService.prototype, "treeId", {
        get: /**
         * @return {?}
         */
        function () {
            return FILEMANAGER_TREE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Load folder chidls for given folder id
     */
    /**
     * Load folder chidls for given folder id
     * @param {?=} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.load = /**
     * Load folder chidls for given folder id
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        /** @type {?} */
        var nodeIds = this.nodes.map(function (node) { return node.id; });
        /** @type {?} */
        var params = new HttpParams().set('nodeId', nodeId || '');
        return this.$http.get(this.configuration.folderUrls.foldersUrl, { params: params })
            .pipe(map(function (nodes) {
            nodes.forEach(function (node) {
                if (nodeIds.indexOf(node.id) === -1) {
                    _this.nodes.push(node);
                }
                else {
                    /** @type {?} */
                    var index = _this.nodes.findIndex(function (item) { return node.id === item.id; });
                    _this.nodes[index] = node;
                }
            });
            return nodes;
        }));
    };
    /**
     * Create new folder
     */
    /**
     * Create new folder
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.add = /**
     * Create new folder
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    function (node, parentNodeId) {
        var _this = this;
        if (parentNodeId === void 0) { parentNodeId = null; }
        /** @type {?} */
        var data = {
            node: node,
            parentNodeId: parentNodeId
        };
        return this.$http.post(this.configuration.folderUrls.foldersUrl, data)
            .pipe(map(function (newNode) {
            _this.nodes.push(newNode);
            return newNode;
        }));
    };
    /**
     * Move folder from source parent to target parent
     */
    /**
     * Move folder from source parent to target parent
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    FileManagerBackendApiService.prototype.move = /**
     * Move folder from source parent to target parent
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    function (srcNode, targetNode) {
        var _this = this;
        /** @type {?} */
        var srcId = srcNode.id;
        /** @type {?} */
        var targetId = targetNode ? targetNode.id : null;
        return this.$http.put(this.configuration.folderUrls.folderMoveUrl, { source: srcId, target: targetId })
            .pipe(map(function (movedNode) {
            /** @type {?} */
            var index = _this.findIndexByNodeId(srcId);
            _this.nodes[index].parentId = targetId;
            return movedNode;
        }));
    };
    /**
     * Update folder name
     */
    /**
     * Update folder name
     * @param {?} node
     * @return {?}
     */
    FileManagerBackendApiService.prototype.update = /**
     * Update folder name
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        return this.$http.put(this.configuration.folderUrls.foldersUrl, node)
            .pipe(map(function (newNode) {
            /** @type {?} */
            var index = _this.findIndexByNodeId(node.id);
            _this.nodes[index] = newNode;
            return newNode;
        }));
    };
    /**
     * Remove node by given id
     */
    /**
     * Remove node by given id
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.remove = /**
     * Remove node by given id
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        /** @type {?} */
        var index = this.findIndexByNodeId(nodeId);
        /** @type {?} */
        var hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            /** @type {?} */
            var params = new HttpParams().set('nodeId', nodeId);
            return this.$http.delete(this.configuration.folderUrls.foldersUrl, { params: params })
                .pipe(map(function (removedNode) {
                _this.nodes.splice(index, 1);
                return removedNode;
            }));
        }
        else {
            return Observable.throw('Node is not empty');
        }
    };
    /**
     * @param {?} nodes
     * @return {?}
     */
    FileManagerBackendApiService.prototype.setAllNodes = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        this.nodes = tslib_1.__spread(nodes);
    };
    /**
     * Crop file
     */
    /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerBackendApiService.prototype.cropFile = /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        return this.$http.put(this.configuration.fileUrl, { id: file.id, bounds: bounds });
    };
    /**
     * Load files from directory
     */
    /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.loadFiles = /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        this.currentNodeId = nodeId;
        /** @type {?} */
        var params = new HttpParams().set('dirId', nodeId);
        return this.$http.get(this.configuration.fileUrl, { params: params })
            .pipe(map(function (files) {
            _this.files = files.map(function (file) { return (/** @type {?} */ (file)); });
            return files;
        }));
    };
    /**
     * Remove file from folder
     */
    /**
     * Remove file from folder
     * @param {?} file
     * @return {?}
     */
    FileManagerBackendApiService.prototype.removeFile = /**
     * Remove file from folder
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        /** @type {?} */
        var index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return of(false);
        }
        /** @type {?} */
        var params = new HttpParams().set('id', file.id.toString());
        return this.$http.delete(this.configuration.fileUrl, { params: params })
            .pipe(map(function () {
            _this.files.splice(index, 1);
            return true;
        }));
    };
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    FileManagerBackendApiService.prototype.removeSelectedFiles = /**
     * @param {?} selectedFiles
     * @return {?}
     */
    function (selectedFiles) {
        var _this = this;
        /** @type {?} */
        var params = new HttpParams().set('id', selectedFiles.join('|'));
        return this.$http.delete(this.configuration.fileUrl, { params: params })
            .pipe(map(function () {
            selectedFiles.forEach(function (fileId) {
                /** @type {?} */
                var index = _this.findIndexByFileId(fileId);
                if (index > -1) {
                    _this.files.splice(index, 1);
                }
            });
            return true;
        }));
    };
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     */
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     * @param {?} file
     * @return {?}
     */
    FileManagerBackendApiService.prototype.uploadFile = /**
     * This method is success method, real upload is done in ExtendedFileUploader
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var fileData = (/** @type {?} */ (file));
        this.files.push(fileData);
        return of(file);
    };
    /**
     * @param {?} files
     * @param {?} node
     * @return {?}
     */
    FileManagerBackendApiService.prototype.moveFile = /**
     * @param {?} files
     * @param {?} node
     * @return {?}
     */
    function (files, node) {
        /** @type {?} */
        var ids = files.map(function (file) { return file.id.toString(); });
        return this.$http.put(this.configuration.fileUrl, { files: ids, folderId: node ? node.id : '' });
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.findIndexByNodeId = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.nodes.findIndex(function (node) {
            return node.id === nodeId;
        });
    };
    /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.findIndexByFileId = /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    function (fileId) {
        return this.files.findIndex(function (file) { return file.id === fileId; });
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.getChildren = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.nodes.filter(function (node) { return node.parentId === nodeId; });
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    FileManagerBackendApiService.prototype.convertLocalData2IOuterFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
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
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    FileManagerBackendApiService.prototype.convertIOuterFile2LocalData = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
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
    };
    FileManagerBackendApiService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerBackendApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: FileManagerConfiguration }
    ]; };
    return FileManagerBackendApiService;
}(AbstractFileManagerApiService));
export { FileManagerBackendApiService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJCYWNrZW5kQXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS9maWxlTWFuYWdlckJhY2tlbmRBcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLDZCQUE2QixFQUFFLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEcsT0FBTyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUU1RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLbkM7SUFDa0Qsd0RBQTZCO0lBRTdFLHNDQUEyQixLQUFpQixFQUNqQixhQUF1QztRQURsRSxZQUVFLGlCQUFPLFNBR1I7UUFMMEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFFaEUsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7O0lBQ2xCLENBQUM7SUFFRCxzQkFBVyxnREFBTTs7OztRQUFqQjtZQUNFLE9BQU8scUJBQXFCLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksMkNBQUk7Ozs7O0lBQVgsVUFBWSxNQUFXO1FBQXZCLGlCQW9CQztRQXBCVyx1QkFBQSxFQUFBLFdBQVc7O1lBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBZ0IsSUFBSyxPQUFB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QXlCO1FBQzNELE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3ZCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxrRUFBMkI7Ozs7O0lBQW5DLFVBQW9DLElBQWdCO1FBQ2xELE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7O2dCQWpQRixVQUFVOzs7O2dCQVBILFVBQVU7Z0JBRlYsd0JBQXdCOztJQTJQaEMsbUNBQUM7Q0FBQSxBQWxQRCxDQUNrRCw2QkFBNkIsR0FpUDlFO1NBalBZLDRCQUE0Qjs7Ozs7O0lBRXBCLDZDQUF5Qjs7Ozs7SUFDekIscURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SU5vZGVTZXJ2aWNlLCBJT3V0ZXJOb2RlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSwgRklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckFwaX0gZnJvbSAnLi9JRmlsZU1hbmFnZXJBcGknO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJRmlsZURhdGFQcm9wZXJ0aWVzfSBmcm9tICcuLi9zZXJ2aWNlcy9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckJhY2tlbmRBcGlTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RGaWxlTWFuYWdlckFwaVNlcnZpY2UgaW1wbGVtZW50cyBJRmlsZU1hbmFnZXJBcGksIElOb2RlU2VydmljZSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHJlZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEZJTEVNQU5BR0VSX1RSRUVfTkFNRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGZvbGRlciBjaGlkbHMgZm9yIGdpdmVuIGZvbGRlciBpZFxuICAgKi9cbiAgcHVibGljIGxvYWQobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIGNvbnN0IG5vZGVJZHMgPSB0aGlzLm5vZGVzLm1hcCgobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5pZCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnbm9kZUlkJywgbm9kZUlkIHx8ICcnKTtcblxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldDxJT3V0ZXJOb2RlW10+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlcnNVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobm9kZXM6IElPdXRlck5vZGVbXSkgPT4ge1xuICAgICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlSWRzLmluZGV4T2Yobm9kZS5pZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ub2Rlcy5maW5kSW5kZXgoKGl0ZW06IElPdXRlck5vZGUpID0+IG5vZGUuaWQgPT09IGl0ZW0uaWQpO1xuICAgICAgICAgICAgICB0aGlzLm5vZGVzW2luZGV4XSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgZm9sZGVyXG4gICAqL1xuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBub2RlOiBub2RlLFxuICAgICAgcGFyZW50Tm9kZUlkOiBwYXJlbnROb2RlSWRcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJzVXJsLCBkYXRhKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobmV3Tm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXdOb2RlKTtcblxuICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGZvbGRlciBmcm9tIHNvdXJjZSBwYXJlbnQgdG8gdGFyZ2V0IHBhcmVudFxuICAgKi9cbiAgcHVibGljIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBzcmNJZCA9IHNyY05vZGUuaWQ7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSB0YXJnZXROb2RlID8gdGFyZ2V0Tm9kZS5pZCA6IG51bGw7XG5cblxuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJNb3ZlVXJsLCB7c291cmNlOiBzcmNJZCwgdGFyZ2V0OiB0YXJnZXRJZH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChtb3ZlZE5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQoc3JjSWQpO1xuICAgICAgICAgIHRoaXMubm9kZXNbaW5kZXhdLnBhcmVudElkID0gdGFyZ2V0SWQ7XG5cbiAgICAgICAgICByZXR1cm4gbW92ZWROb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZm9sZGVyIG5hbWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJzVXJsLCBub2RlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobmV3Tm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlLmlkKTtcblxuICAgICAgICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbmV3Tm9kZTtcblxuICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbm9kZSBieSBnaXZlbiBpZFxuICAgKi9cbiAgcHVibGljIHJlbW92ZShub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlSWQpO1xuXG4gICAgY29uc3QgaGFzQ2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKG5vZGVJZCkubGVuZ3RoID4gMDtcblxuICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdub2RlSWQnLCBub2RlSWQpO1xuXG4gICAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGU8SU91dGVyTm9kZT4odGhpcy5jb25maWd1cmF0aW9uLmZvbGRlclVybHMuZm9sZGVyc1VybCwge3BhcmFtc30pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVtb3ZlZE5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWROb2RlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdOb2RlIGlzIG5vdCBlbXB0eScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlcyA9IFsuLi5ub2Rlc107XG4gIH1cblxuICAvKipcbiAgICogQ3JvcCBmaWxlXG4gICAqL1xuICBwdWJsaWMgY3JvcEZpbGUoZmlsZTogSU91dGVyRmlsZSwgYm91bmRzOiBJQ3JvcEJvdW5kcyk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJGaWxlPih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge2lkOiBmaWxlLmlkLCBib3VuZHM6IGJvdW5kc30pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgZmlsZXMgZnJvbSBkaXJlY3RvcnlcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlckZpbGVbXT4ge1xuICAgIHRoaXMuY3VycmVudE5vZGVJZCA9IG5vZGVJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnZGlySWQnLCBub2RlSWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0PElPdXRlckZpbGVbXT4odGhpcy5jb25maWd1cmF0aW9uLmZpbGVVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoZmlsZXM6IElPdXRlckZpbGVbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcy5tYXAoKGZpbGU6IElPdXRlckZpbGUpID0+IDxJRmlsZURhdGFQcm9wZXJ0aWVzPmZpbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpbGVzO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZmlsZSBmcm9tIGZvbGRlclxuICAgKi9cbiAgcHVibGljIHJlbW92ZUZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeUZpbGVJZChmaWxlLmlkLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnaWQnLCBmaWxlLmlkLnRvU3RyaW5nKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZGVsZXRlPGFueT4odGhpcy5jb25maWd1cmF0aW9uLmZpbGVVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkRmlsZXMoc2VsZWN0ZWRGaWxlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnaWQnLCBzZWxlY3RlZEZpbGVzLmpvaW4oJ3wnKSk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGU8YW55Pih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICBzZWxlY3RlZEZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHN1Y2Nlc3MgbWV0aG9kLCByZWFsIHVwbG9hZCBpcyBkb25lIGluIEV4dGVuZGVkRmlsZVVwbG9hZGVyXG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlPiB7XG4gICAgY29uc3QgZmlsZURhdGEgPSA8SUZpbGVEYXRhUHJvcGVydGllcz5maWxlO1xuICAgIHRoaXMuZmlsZXMucHVzaChmaWxlRGF0YSk7XG5cbiAgICByZXR1cm4gb2YoZmlsZSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZUZpbGUoZmlsZXM6IElPdXRlckZpbGVbXSwgbm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQ8SU91dGVyRmlsZVtdPih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge2ZpbGVzOiBpZHMsIGZvbGRlcklkOiBub2RlID8gbm9kZS5pZCA6ICcnfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRJbmRleEJ5Tm9kZUlkKG5vZGVJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maW5kSW5kZXgoKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBub2RlLmlkID09PSBub2RlSWQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRJbmRleEJ5RmlsZUlkKGZpbGVJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maW5kSW5kZXgoKGZpbGUpID0+IGZpbGUuaWQgPT09IGZpbGVJZCk7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKG5vZGVJZDogc3RyaW5nKTogSU91dGVyTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maWx0ZXIoKG5vZGU6IElPdXRlck5vZGUpID0+IG5vZGUucGFyZW50SWQgPT09IG5vZGVJZCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlOiBJRmlsZURhdGFQcm9wZXJ0aWVzKTogSU91dGVyRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBmaWxlLmlkLFxuICAgICAgZm9sZGVySWQ6IGZpbGUuZm9sZGVySWQsXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICB0aHVtYm5haWxVcmw6IGZpbGUuZGF0YSxcbiAgICAgIHVybDogZmlsZS5kYXRhLFxuICAgICAgd2lkdGg6IGZpbGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpbGUuaGVpZ2h0LFxuICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgc2l6ZTogZmlsZS5zaXplXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydElPdXRlckZpbGUyTG9jYWxEYXRhKGZpbGU6IElPdXRlckZpbGUpOiBJRmlsZURhdGFQcm9wZXJ0aWVzIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGZpbGUuaWQudG9TdHJpbmcoKSxcbiAgICAgIGZvbGRlcklkOiBmaWxlLmZvbGRlcklkLFxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgZGF0YTogZmlsZS5kYXRhLFxuICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgd2lkdGg6IGZpbGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpbGUuaGVpZ2h0XG4gICAgfTtcbiAgfVxufVxuIl19