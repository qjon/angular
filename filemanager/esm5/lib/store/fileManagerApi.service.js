/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { FilemanagerNotifcations } from '../services/FilemanagerNotifcations';
import { AbstractFileManagerApiService, FILEMANAGER_TREE_NAME } from './fileManagerApiAbstract.class';
import { empty, Observable, of, throwError } from 'rxjs';
var FileManagerApiService = /** @class */ (function (_super) {
    tslib_1.__extends(FileManagerApiService, _super);
    function FileManagerApiService(filemanagerNotfication) {
        var _this = _super.call(this) || this;
        _this.filemanagerNotfication = filemanagerNotfication;
        return _this;
    }
    Object.defineProperty(FileManagerApiService.prototype, "treeId", {
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
     * @param {?=} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.load = /**
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        if (nodeId === void 0) { nodeId = ''; }
        if (!this.nodes) {
            this.nodes = this.getAllDataFromLocalStorage();
        }
        /** @type {?} */
        var nodes = this.getChildren(nodeId);
        return of(nodes);
    };
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    FileManagerApiService.prototype.add = /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    function (node, parentNodeId) {
        if (parentNodeId === void 0) { parentNodeId = null; }
        node.parentId = parentNodeId;
        node.id = UUID.UUID();
        this.nodes.push(node);
        if (this.saveNodes()) {
            return of(node);
        }
        else {
            return empty();
        }
    };
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    FileManagerApiService.prototype.move = /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    function (srcNode, targetNode) {
        /** @type {?} */
        var srcId = srcNode.id;
        /** @type {?} */
        var targetId = targetNode ? targetNode.id : '';
        /** @type {?} */
        var index = this.findIndexByNodeId(srcId);
        this.nodes[index].parentId = targetId;
        if (this.saveNodes()) {
            return of(this.nodes[index]);
        }
        else {
            return empty();
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    FileManagerApiService.prototype.update = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.findIndexByNodeId(node.id);
        this.nodes[index] = node;
        if (this.saveNodes()) {
            return of(node);
        }
        else {
            return empty();
        }
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.remove = /**
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        /** @type {?} */
        var index = this.findIndexByNodeId(nodeId);
        /** @type {?} */
        var node = this.nodes[index];
        /** @type {?} */
        var hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            this.nodes.splice(index, 1);
            this.saveNodes();
            return of(node);
        }
        else {
            return throwError('Node is not empty');
        }
    };
    /**
     * @param {?} nodes
     * @return {?}
     */
    FileManagerApiService.prototype.setAllNodes = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        this.nodes = tslib_1.__spread(nodes);
        this.saveNodes();
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
    FileManagerApiService.prototype.cropFile = /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        return throwError('This functionality is not available with LocalStorage');
    };
    /**
     * Load files from directory
     */
    /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.loadFiles = /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        this.currentNodeId = nodeId;
        if (!this.files) {
            this.files = this.getAllFileDataFromLocalStorage();
        }
        /** @type {?} */
        var files = this.getFilesFromFolder(nodeId);
        /** @type {?} */
        var newFiles = files.map(function (file) {
            return _this.convertLocalData2IOuterFile(file);
        });
        return of(newFiles);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FileManagerApiService.prototype.removeFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return of(false);
        }
        this.files.splice(index, 1);
        this.saveFiles();
        return of(true);
    };
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    FileManagerApiService.prototype.removeSelectedFiles = /**
     * @param {?} selectedFiles
     * @return {?}
     */
    function (selectedFiles) {
        var _this = this;
        /** @type {?} */
        var numberOfFiles = this.files.length;
        selectedFiles.forEach(function (fileId) {
            /** @type {?} */
            var index = _this.findIndexByFileId(fileId);
            if (index > -1) {
                _this.files.splice(index, 1);
            }
        });
        this.saveFiles();
        return of((this.files.length + selectedFiles.length === numberOfFiles));
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FileManagerApiService.prototype.uploadFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var fileData = this.convertIOuterFile2LocalData(file);
        this.files.push(fileData);
        if (this.saveFiles()) {
            return of(this.convertLocalData2IOuterFile(fileData));
        }
        else {
            return Observable.throw('Upload error');
        }
    };
    /**
     * @param {?} files
     * @param {?=} node
     * @return {?}
     */
    FileManagerApiService.prototype.moveFile = /**
     * @param {?} files
     * @param {?=} node
     * @return {?}
     */
    function (files, node) {
        var _this = this;
        if (node === void 0) { node = null; }
        /** @type {?} */
        var ids = files.map(function (file) { return file.id.toString(); });
        /** @type {?} */
        var folderId = node ? node.id.toString() : '';
        /** @type {?} */
        var movedFiles = this.files.filter(function (file) { return ids.indexOf(file.id.toString()) > -1; });
        /** @type {?} */
        var errorMsg = 'Can not move file to the same folder';
        /** @type {?} */
        var isMovedToSameFolder = false;
        movedFiles.forEach(function (file) {
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
            return of(movedFiles.map(function (file) { return _this.convertLocalData2IOuterFile(file); }));
        }
        else {
            return Observable.throw('Move files error');
        }
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.findIndexByNodeId = /**
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
    FileManagerApiService.prototype.findIndexByFileId = /**
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
    FileManagerApiService.prototype.getChildren = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.nodes.filter(function (node) { return node.parentId === nodeId; });
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.getFilesFromFolder = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.files.filter(function (file) { return file.folderId === nodeId; });
    };
    /**
     * @protected
     * @return {?}
     */
    FileManagerApiService.prototype.getAllDataFromLocalStorage = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var data = localStorage.getItem(this.treeName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    };
    /**
     * @protected
     * @return {?}
     */
    FileManagerApiService.prototype.getAllFileDataFromLocalStorage = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var data = localStorage.getItem(this.fileManagerName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    };
    /**
     * @private
     * @return {?}
     */
    FileManagerApiService.prototype.saveNodes = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    FileManagerApiService.prototype.saveFiles = /**
     * @private
     * @return {?}
     */
    function () {
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
            var nodeId = this.files[(this.files.length - 1)].folderId || null;
            this.files = null;
            this.load(nodeId);
            return false;
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    FileManagerApiService.prototype.convertLocalData2IOuterFile = /**
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
    FileManagerApiService.prototype.convertIOuterFile2LocalData = /**
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
    FileManagerApiService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerApiService.ctorParameters = function () { return [
        { type: FilemanagerNotifcations }
    ]; };
    return FileManagerApiService;
}(AbstractFileManagerApiService));
export { FileManagerApiService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileManagerApiService.prototype.filemanagerNotfication;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJBcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3N0b3JlL2ZpbGVNYW5hZ2VyQXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLbkMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFDLDZCQUE2QixFQUFFLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEcsT0FBTyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV2RDtJQUMyQyxpREFBNkI7SUFFdEUsK0JBQTJCLHNCQUErQztRQUExRSxZQUNFLGlCQUFPLFNBQ1I7UUFGMEIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF5Qjs7SUFFMUUsQ0FBQztJQUVELHNCQUFXLHlDQUFNOzs7O1FBQWpCO1lBQ0UsT0FBTyxxQkFBcUIsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFFTSxvQ0FBSTs7OztJQUFYLFVBQVksTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7U0FDaEQ7O1lBRUssS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRXRDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVNLG1DQUFHOzs7OztJQUFWLFVBQVcsSUFBZ0IsRUFBRSxZQUEyQjtRQUEzQiw2QkFBQSxF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QUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUN2QixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sMkRBQTJCOzs7OztJQUFuQyxVQUFvQyxJQUFnQjtRQUNsRCxPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDOztnQkE5U0YsVUFBVTs7OztnQkFKSCx1QkFBdUI7O0lBbVQvQiw0QkFBQztDQUFBLEFBL1NELENBQzJDLDZCQUE2QixHQThTdkU7U0E5U1kscUJBQXFCOzs7Ozs7SUFFYix1REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlLCBJTm9kZVNlcnZpY2V9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtVVUlEfSBmcm9tICdhbmd1bGFyMi11dWlkJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQXBpfSBmcm9tICcuL0lGaWxlTWFuYWdlckFwaSc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXN9IGZyb20gJy4uL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9uc30gZnJvbSAnLi4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSwgRklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtlbXB0eSwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJBcGlTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RGaWxlTWFuYWdlckFwaVNlcnZpY2UgaW1wbGVtZW50cyBJRmlsZU1hbmFnZXJBcGksIElOb2RlU2VydmljZSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZW1hbmFnZXJOb3RmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICB9XG5cbiAgcHVibGljIGxvYWQobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIGlmICghdGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5ub2RlcyA9IHRoaXMuZ2V0QWxsRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKTtcblxuICAgIHJldHVybiBvZihub2Rlcyk7XG4gIH1cblxuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIG5vZGUucGFyZW50SWQgPSBwYXJlbnROb2RlSWQ7XG4gICAgbm9kZS5pZCA9IFVVSUQuVVVJRCgpO1xuXG4gICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc2F2ZU5vZGVzKCkpIHtcbiAgICAgIHJldHVybiBvZihub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVtcHR5KCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHNyY0lkID0gc3JjTm9kZS5pZDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldE5vZGUgPyB0YXJnZXROb2RlLmlkIDogJyc7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQoc3JjSWQpO1xuXG4gICAgdGhpcy5ub2Rlc1tpbmRleF0ucGFyZW50SWQgPSB0YXJnZXRJZDtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5ub2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlLmlkKTtcblxuICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbm9kZTtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQobm9kZUlkKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpbmRleF07XG5cbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKS5sZW5ndGggPiAwO1xuXG4gICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLnNhdmVOb2RlcygpO1xuXG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdOb2RlIGlzIG5vdCBlbXB0eScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlcyA9IFsuLi5ub2Rlc107XG5cbiAgICB0aGlzLnNhdmVOb2RlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgZmlsZVxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlKGZpbGU6IElPdXRlckZpbGUsIGJvdW5kczogSUNyb3BCb3VuZHMpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICByZXR1cm4gdGhyb3dFcnJvcignVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG5vdCBhdmFpbGFibGUgd2l0aCBMb2NhbFN0b3JhZ2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGZpbGVzIGZyb20gZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgbG9hZEZpbGVzKG5vZGVJZCA9ICcnKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICB0aGlzLmN1cnJlbnROb2RlSWQgPSBub2RlSWQ7XG5cbiAgICBpZiAoIXRoaXMuZmlsZXMpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmdldEFsbEZpbGVEYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlc0Zyb21Gb2xkZXIobm9kZUlkKTtcblxuICAgIGNvbnN0IG5ld0ZpbGVzOiBJT3V0ZXJGaWxlW10gPSBmaWxlcy5tYXAoKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZihuZXdGaWxlcyk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5RmlsZUlkKGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNhdmVGaWxlcygpO1xuXG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkRmlsZXMoc2VsZWN0ZWRGaWxlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBudW1iZXJPZkZpbGVzID0gdGhpcy5maWxlcy5sZW5ndGg7XG5cbiAgICBzZWxlY3RlZEZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zYXZlRmlsZXMoKTtcblxuICAgIHJldHVybiBvZigodGhpcy5maWxlcy5sZW5ndGggKyBzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gbnVtYmVyT2ZGaWxlcykpO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZEZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIGNvbnN0IGZpbGVEYXRhID0gdGhpcy5jb252ZXJ0SU91dGVyRmlsZTJMb2NhbERhdGEoZmlsZSk7XG4gICAgdGhpcy5maWxlcy5wdXNoKGZpbGVEYXRhKTtcblxuICAgIGlmICh0aGlzLnNhdmVGaWxlcygpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5jb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZURhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ1VwbG9hZCBlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb3ZlRmlsZShmaWxlczogSU91dGVyRmlsZVtdLCBub2RlOiBJT3V0ZXJOb2RlID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUuaWQudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZm9sZGVySWQgPSBub2RlID8gbm9kZS5pZC50b1N0cmluZygpIDogJyc7XG5cbiAgICBjb25zdCBtb3ZlZEZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBpZHMuaW5kZXhPZihmaWxlLmlkLnRvU3RyaW5nKCkpID4gLTEpO1xuICAgIGNvbnN0IGVycm9yTXNnID0gJ0NhbiBub3QgbW92ZSBmaWxlIHRvIHRoZSBzYW1lIGZvbGRlcic7XG5cbiAgICBjb25zdCBpc01vdmVkVG9TYW1lRm9sZGVyID0gZmFsc2U7XG5cbiAgICBtb3ZlZEZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmlkID09PSBmaWxlLmZvbGRlcklkKSB7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmaWxlLmZvbGRlcklkID09PSAnJyB8fCBmaWxlLmZvbGRlcklkID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JNc2cpO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgZmlsZS5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzTW92ZWRUb1NhbWVGb2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JNc2cpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNhdmVGaWxlcygpKSB7XG4gICAgICByZXR1cm4gb2YobW92ZWRGaWxlcy5tYXAoZmlsZSA9PiB0aGlzLmNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnTW92ZSBmaWxlcyBlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlOb2RlSWQobm9kZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbmRJbmRleCgobm9kZSkgPT4ge1xuICAgICAgcmV0dXJuIG5vZGUuaWQgPT09IG5vZGVJZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbmRJbmRleCgoZmlsZSkgPT4gZmlsZS5pZCA9PT0gZmlsZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4obm9kZUlkOiBzdHJpbmcpOiBJT3V0ZXJOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbHRlcigobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5wYXJlbnRJZCA9PT0gbm9kZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsZXNGcm9tRm9sZGVyKG5vZGVJZDogc3RyaW5nKTogSUZpbGVEYXRhUHJvcGVydGllc1tdIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpID0+IGZpbGUuZm9sZGVySWQgPT09IG5vZGVJZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QWxsRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTogSU91dGVyTm9kZVtdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudHJlZU5hbWUpO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBbGxGaWxlRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTogSUZpbGVEYXRhUHJvcGVydGllc1tdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZmlsZU1hbmFnZXJOYW1lKTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVOb2RlcygpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50cmVlTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5ub2RlcykpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnU3RhdGUgaXMgbm90IHNhdmVkLicsXG4gICAgICAgIG1lc3NhZ2U6ICdSZWxvYWQgcHJldmlvdXMgc3RhdGUuJ1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlsZXMgPSBudWxsO1xuICAgICAgdGhpcy5ub2RlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlRmlsZXMoKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZmlsZU1hbmFnZXJOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbGVzKSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdTdGF0ZSBpcyBub3Qgc2F2ZWQuJyxcbiAgICAgICAgbWVzc2FnZTogJ1JlbG9hZCBwcmV2aW91cyBzdGF0ZS4nXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgbm9kZUlkID0gdGhpcy5maWxlc1sodGhpcy5maWxlcy5sZW5ndGggLSAxKV0uZm9sZGVySWQgfHwgbnVsbDtcblxuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9hZChub2RlSWQpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZTogSUZpbGVEYXRhUHJvcGVydGllcyk6IElPdXRlckZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZmlsZS5pZCxcbiAgICAgIGZvbGRlcklkOiBmaWxlLmZvbGRlcklkLFxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgdGh1bWJuYWlsVXJsOiBmaWxlLmRhdGEsXG4gICAgICB1cmw6IGZpbGUuZGF0YSxcbiAgICAgIHdpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaWxlLmhlaWdodCxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRJT3V0ZXJGaWxlMkxvY2FsRGF0YShmaWxlOiBJT3V0ZXJGaWxlKTogSUZpbGVEYXRhUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBmaWxlLmlkLnRvU3RyaW5nKCksXG4gICAgICBmb2xkZXJJZDogZmlsZS5mb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGRhdGE6IGZpbGUuZGF0YSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHdpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaWxlLmhlaWdodFxuICAgIH07XG4gIH1cbn1cbiJdfQ==