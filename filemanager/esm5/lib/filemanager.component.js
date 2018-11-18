/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, HostListener, EventEmitter, Output } from '@angular/core';
import { TreeComponent, NodeService, NodeDispatcherService, TreeInitializerService, } from '@rign/angular2-tree';
import { NotificationsService } from 'angular2-notifications';
import { Button } from './toolbar/models/button.model';
import { FilesListComponent } from './filesList/filesList.component';
import { FileManagerConfiguration } from './configuration/fileManagerConfiguration.service';
import { Store } from '@ngrx/store';
import { FileManagerEffectsService } from './store/fileManagerEffects.service';
import { FileManagerApiService } from './store/fileManagerApi.service';
import { FilemanagerNotifcations } from './services/FilemanagerNotifcations';
import { CurrentDirectoryFilesService } from './services/currentDirectoryFiles.service';
import { FILEMANAGER_TREE_NAME } from './store/fileManagerApiAbstract.class';
import { ChooseFilesAction, DeleteSelectedFilesAction, InverseFilesSelectionAction, LoadFilesAction, SelectAllFilesAction, UnSelectAllFilesAction } from './store/file-manager.action';
import { combineLatest, Subscription } from 'rxjs';
var FileManagerComponent = /** @class */ (function () {
    function FileManagerComponent(store, nodeDispatcherService, treeService, notifications, configuration, fileManagerEffects, filemanagerNotifcations, currentDirectoryFilesService, treeInitializerService) {
        var _this = this;
        this.store = store;
        this.nodeDispatcherService = nodeDispatcherService;
        this.treeService = treeService;
        this.notifications = notifications;
        this.configuration = configuration;
        this.fileManagerEffects = fileManagerEffects;
        this.filemanagerNotifcations = filemanagerNotifcations;
        this.currentDirectoryFilesService = currentDirectoryFilesService;
        this.treeInitializerService = treeInitializerService;
        this.onSingleFileSelect = new EventEmitter();
        this.treeConfiguration = {
            showAddButton: false,
            disableMoveNodes: false,
            treeId: FILEMANAGER_TREE_NAME,
            dragZone: FILEMANAGER_TREE_NAME,
            dropZone: [FILEMANAGER_TREE_NAME]
        };
        /**
         * UNSED *
         */
        this.contextMenu = [];
        this.currentSelectedFilesIds = [];
        this.currentSelectedFiles = [];
        this.isPreviewMode = false;
        this.isCropMode = false;
        this.notificationOptions = {
            position: ['bottom', 'right'],
            timeOut: 3000,
            lastOnBottom: false,
            preventDuplicates: true,
            rtl: false,
            showProgressBar: true,
            pauseOnHover: true
        };
        this.subscription = new Subscription();
        this.menu = configuration.contextMenuItems;
        this.filemanagerNotifcations.getNotificationStream()
            .subscribe(function (notification) {
            var type = notification.type, title = notification.title, message = notification.message;
            _this.notifications[type](title, message);
        });
        this.subscription.add(this.currentDirectoryFilesService.selectedFiles$
            .subscribe(function (data) {
            _this.currentSelectedFilesIds = data;
        }));
        this.subscription.add(combineLatest(this.currentDirectoryFilesService.selectedFiles$, this.currentDirectoryFilesService.entities$)
            .subscribe(function (_a) {
            var _b = tslib_1.__read(_a, 2), ids = _b[0], entities = _b[1];
            _this.currentSelectedFiles = ids.map(function (id) { return entities[id]; });
        }));
    }
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeService);
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe(function (node) { return _this.currentSelectedFolder = node; }));
        /*** START - init files ***/
        this.files$ = this.currentDirectoryFilesService.files$;
        this.filteredFiles$ = this.currentDirectoryFilesService.filteredFiles$;
        this.selectedFiles$ = this.currentDirectoryFilesService.selectedFiles$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe(function (node) {
            _this.loadFiles(node ? node.id : '');
        }));
        /*** END - init files ***/
        this.subscription.add(this.fileManagerEffects.cropFileSuccess$
            .subscribe(function () {
            _this.closeModal();
        }));
    };
    Object.defineProperty(FileManagerComponent.prototype, "currentSelectedFolderId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentSelectedFolder ? this.currentSelectedFolder.id : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.onAddFolder = /**
     * @return {?}
     */
    function () {
        this.treeComponent.onAdd();
    };
    /***********************************************************************
     * FILE EVENTS
     **********************************************************************/
    /**
     * Run when all files are uploaded
     */
    /***********************************************************************
       * FILE EVENTS
       **********************************************************************/
    /**
     * Run when all files are uploaded
     * @param {?} folderId
     * @return {?}
     */
    FileManagerComponent.prototype.onUpload = /***********************************************************************
       * FILE EVENTS
       **********************************************************************/
    /**
     * Run when all files are uploaded
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        this.notifications.success('File upload', 'Upload complete');
    };
    /**
     * @param {?} fileEventData
     * @return {?}
     */
    FileManagerComponent.prototype.onPreviewFile = /**
     * @param {?} fileEventData
     * @return {?}
     */
    function (fileEventData) {
        this.isPreviewMode = true;
        this.currentSelectedFile = fileEventData.file;
    };
    /**
     * @param {?} fileEventData
     * @return {?}
     */
    FileManagerComponent.prototype.onOpenCropFileEditor = /**
     * @param {?} fileEventData
     * @return {?}
     */
    function (fileEventData) {
        this.isCropMode = true;
        this.currentSelectedFile = fileEventData.file;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileManagerComponent.prototype.onSelectFile = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSingleFileSelect.next(event.getSelectData());
    };
    /***********************************************************************
     * TOOLBAR EVENTS
     **********************************************************************/
    /**
     * ********************************************************************
     * TOOLBAR EVENTS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    FileManagerComponent.prototype.onMenuButtonClick = /**
     * ********************************************************************
     * TOOLBAR EVENTS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.name) {
            case Button.CHOOSE_SELECTION:
                this.store.dispatch(new ChooseFilesAction({ files: this.currentSelectedFiles }));
                break;
            case Button.DELETE_SELECTION:
                this.store.dispatch(new DeleteSelectedFilesAction({ files: this.currentSelectedFilesIds }));
                break;
            case Button.SELECT_ALL:
                this.store.dispatch(new SelectAllFilesAction());
                break;
            case Button.UNSELECT_ALL:
                this.store.dispatch(new UnSelectAllFilesAction());
                break;
            case Button.INVERSE_SELECTION:
                this.store.dispatch(new InverseFilesSelectionAction());
                break;
            case Button.REFRESH_FILES_LIST:
                this.reloadFiles();
                break;
        }
    };
    /***********************************************************************
     * OTHER FUNCTIONS
     **********************************************************************/
    /**
     * ********************************************************************
     * OTHER FUNCTIONS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    FileManagerComponent.prototype.keyEvents = /**
     * ********************************************************************
     * OTHER FUNCTIONS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isPreviewMode || this.isCropMode) {
            if (event.keyCode === 27) {
                this.closeModal();
            }
        }
    };
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.isPreviewMode = false;
        this.isCropMode = false;
    };
    /**
     * @private
     * @param {?} folderId
     * @return {?}
     */
    FileManagerComponent.prototype.loadFiles = /**
     * @private
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        this.store.dispatch(new LoadFilesAction({ folderId: folderId || '' }));
    };
    /**
     * @private
     * @return {?}
     */
    FileManagerComponent.prototype.reloadFiles = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var id = this.currentSelectedFolder ? this.currentSelectedFolder.id : '';
        this.loadFiles(id);
    };
    FileManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-filemanager',
                    providers: [NodeService, NotificationsService],
                    template: "<div class=\"filemanager-container\">\n  <div class=\"fm-header\">\n    <ri-toolbar\n      #toolbar\n      [currentFolderId]=\"currentSelectedFolderId\"\n      (onAddFolderClick)=\"onAddFolder()\"\n      (onUpload)=\"onUpload($event)\"\n      (onMenuButtonClick)=\"onMenuButtonClick($event)\"\n    ></ri-toolbar>\n  </div>\n  <div class=\"fm-main-box\">\n    <div class=\"folders-box\">\n      <ri-tree [treeModel]=\"treeModel\"></ri-tree>\n    </div>\n    <div class=\"files-box\">\n      <ri-tree-parents-list [treeModel]=\"treeModel\"></ri-tree-parents-list>\n      <ri-files-list [files]=\"filteredFiles$ | async\"\n                     [selectedFiles]=\"selectedFiles$ | async\"\n                     (onPreviewFile)=\"onPreviewFile($event)\"\n                     (onCropFile)=\"onOpenCropFileEditor($event)\"\n                     (onSelectFile)=\"onSelectFile($event)\"\n      ></ri-files-list>\n    </div>\n  </div>\n  <div *ngIf=\"isPreviewMode || isCropMode\" class=\"backdrop\">\n    <div class=\"modal-view\">\n      <div class=\"modal-close\">\n        <i class=\"fa fa-2x fa-times\" (click)=\"closeModal()\"></i>\n      </div>\n      <ri-file-preview *ngIf=\"isPreviewMode\" [files]=\"filteredFiles$ | async\"\n                       [file]=\"currentSelectedFile\"></ri-file-preview>\n      <crop-image *ngIf=\"isCropMode\" [file]=\"currentSelectedFile\"></crop-image>\n    </div>\n  </div>\n  <simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n</div>\n",
                    styles: [".filemanager-container{width:990px;height:700px}.filemanager-container .tree .dropdown{position:relative}.filemanager-container .tree .dropdown-menu{position:fixed!important}.fm-main-box{position:relative;height:100%}.fm-main-box .folders-box{display:block;position:absolute;top:0;bottom:0;width:300px;overflow:hidden;overflow-y:auto}.fm-main-box .files-box{display:block;position:absolute;left:300px;top:0;bottom:0;overflow:hidden;overflow-y:auto}.fm-main-box .files-box ri-tree-parents-list{margin:0 0 10px 20px;display:block}.backdrop{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:1000}.modal-view{margin:50px auto;max-width:600px}.modal-view .modal-close{text-align:right;margin:5px 0;color:#fff}.modal-view .modal-close .fa{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    FileManagerComponent.ctorParameters = function () { return [
        { type: Store },
        { type: NodeDispatcherService },
        { type: FileManagerApiService },
        { type: NotificationsService },
        { type: FileManagerConfiguration },
        { type: FileManagerEffectsService },
        { type: FilemanagerNotifcations },
        { type: CurrentDirectoryFilesService },
        { type: TreeInitializerService }
    ]; };
    FileManagerComponent.propDecorators = {
        onSingleFileSelect: [{ type: Output }],
        treeComponent: [{ type: ViewChild, args: [TreeComponent,] }],
        filesList: [{ type: ViewChild, args: [FilesListComponent,] }],
        keyEvents: [{ type: HostListener, args: ['window:keydown', ['$event'],] }]
    };
    return FileManagerComponent;
}());
export { FileManagerComponent };
if (false) {
    /** @type {?} */
    FileManagerComponent.prototype.onSingleFileSelect;
    /** @type {?} */
    FileManagerComponent.prototype.treeComponent;
    /** @type {?} */
    FileManagerComponent.prototype.filesList;
    /**
     * List of files for current selected directory
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.files$;
    /** @type {?} */
    FileManagerComponent.prototype.filteredFiles$;
    /** @type {?} */
    FileManagerComponent.prototype.selectedFiles$;
    /** @type {?} */
    FileManagerComponent.prototype.folders;
    /** @type {?} */
    FileManagerComponent.prototype.treeConfiguration;
    /** @type {?} */
    FileManagerComponent.prototype.treeModel;
    /**
     * UNSED *
     * @type {?}
     */
    FileManagerComponent.prototype.contextMenu;
    /** @type {?} */
    FileManagerComponent.prototype.currentSelectedFile;
    /** @type {?} */
    FileManagerComponent.prototype.currentSelectedFilesIds;
    /** @type {?} */
    FileManagerComponent.prototype.currentSelectedFiles;
    /** @type {?} */
    FileManagerComponent.prototype.isPreviewMode;
    /** @type {?} */
    FileManagerComponent.prototype.isCropMode;
    /** @type {?} */
    FileManagerComponent.prototype.notificationOptions;
    /**
     * List of context menu
     * @type {?}
     */
    FileManagerComponent.prototype.menu;
    /**
     * @type {?}
     * @protected
     */
    FileManagerComponent.prototype.currentSelectedFolder;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.nodeDispatcherService;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.treeService;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.notifications;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.fileManagerEffects;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.filemanagerNotifcations;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.currentDirectoryFilesService;
    /**
     * @type {?}
     * @private
     */
    FileManagerComponent.prototype.treeInitializerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvZmlsZW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBVSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQ2pFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsV0FBVyxFQU9YLHFCQUFxQixFQUFFLHNCQUFzQixHQUM5QyxNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTVELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUduRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx1QkFBdUIsRUFBZ0IsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUV0RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLGVBQWUsRUFDdkUsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN2QixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxhQUFhLEVBQWMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdEO0lBaUVFLDhCQUEyQixLQUF3QixFQUN4QixxQkFBNEMsRUFDNUMsV0FBa0MsRUFDbEMsYUFBbUMsRUFDbkMsYUFBdUMsRUFDdkMsa0JBQTZDLEVBQzdDLHVCQUFnRCxFQUNoRCw0QkFBMEQsRUFDMUQsc0JBQThDO1FBUnpFLGlCQW1DQztRQW5DMEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJCO1FBQzdDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUMxRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBakVsRSx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBa0J4QyxzQkFBaUIsR0FBbUI7WUFDekMsYUFBYSxFQUFFLEtBQUs7WUFDcEIsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixNQUFNLEVBQUUscUJBQXFCO1lBQzdCLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbEMsQ0FBQzs7OztRQUtLLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyw0QkFBdUIsR0FBYSxFQUFFLENBQUM7UUFDdkMseUJBQW9CLEdBQWlCLEVBQUUsQ0FBQztRQUV4QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLHdCQUFtQixHQUFHO1lBQzNCLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7WUFDN0IsT0FBTyxFQUFFLElBQUk7WUFDYixZQUFZLEVBQUUsS0FBSztZQUNuQixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsZUFBZSxFQUFFLElBQUk7WUFDckIsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQztRQVNNLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVl4QyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUUzQyxJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLEVBQUU7YUFDakQsU0FBUyxDQUFDLFVBQUMsWUFBMkI7WUFDOUIsSUFBQSx3QkFBSSxFQUFFLDBCQUFLLEVBQUUsOEJBQU87WUFFM0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGNBQWM7YUFDN0MsU0FBUyxDQUFDLFVBQUMsSUFBYztZQUN4QixLQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsYUFBYSxDQUNYLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxjQUFjLEVBQ2hELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQzVDO2FBQ0UsU0FBUyxDQUFDLFVBQUMsRUFBMEQ7Z0JBQTFELDBCQUEwRCxFQUF6RCxXQUFHLEVBQUUsZ0JBQVE7WUFDeEIsS0FBSSxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSwwQ0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRU0sdUNBQVE7OztJQUFmO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQjthQUNoQyxTQUFTLENBQUMsVUFBQyxJQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksRUFBakMsQ0FBaUMsQ0FBQyxDQUN0RSxDQUFDO1FBRUYsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxjQUFjLENBQUM7UUFDdkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsY0FBYyxDQUFDO1FBR3ZFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQjthQUNoQyxTQUFTLENBQUMsVUFBQyxJQUF1QjtZQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUVGLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQjthQUNyQyxTQUFTLENBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFFRCxzQkFBSSx5REFBdUI7Ozs7UUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNFLENBQUM7OztPQUFBOzs7O0lBR00sMENBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs0RUFFd0U7SUFDeEU7O09BRUc7Ozs7Ozs7OztJQUNJLHVDQUFROzs7Ozs7OztJQUFmLFVBQWdCLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBR00sNENBQWE7Ozs7SUFBcEIsVUFBcUIsYUFBeUI7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFHTSxtREFBb0I7Ozs7SUFBM0IsVUFBNEIsYUFBeUI7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFHTSwyQ0FBWTs7OztJQUFuQixVQUFvQixLQUFnQjtRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7NEVBRXdFOzs7Ozs7OztJQUdqRSxnREFBaUI7Ozs7Ozs7SUFBeEIsVUFBeUIsS0FBb0I7UUFDM0MsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2xCLEtBQUssTUFBTSxDQUFDLGdCQUFnQjtnQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLE1BQU07WUFDUixLQUFLLE1BQU0sQ0FBQyxnQkFBZ0I7Z0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkseUJBQXlCLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRixNQUFNO1lBQ1IsS0FBSyxNQUFNLENBQUMsVUFBVTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7Z0JBQ2hELE1BQU07WUFDUixLQUFLLE1BQU0sQ0FBQyxZQUFZO2dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUMsQ0FBQztnQkFDbEQsTUFBTTtZQUNSLEtBQUssTUFBTSxDQUFDLGlCQUFpQjtnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBMkIsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELE1BQU07WUFDUixLQUFLLE1BQU0sQ0FBQyxrQkFBa0I7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVEOzs0RUFFd0U7Ozs7Ozs7O0lBRWpFLHdDQUFTOzs7Ozs7O0lBRGhCLFVBQ2lCLEtBQW9CO1FBQ25DLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3pDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLHlDQUFVOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFHTyx3Q0FBUzs7Ozs7SUFBakIsVUFBa0IsUUFBZ0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQUVPLDBDQUFXOzs7O0lBQW5COztZQUNRLEVBQUUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFFMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQixDQUFDOztnQkFsT0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQztvQkFFOUMscytDQUFpQzs7aUJBQ2xDOzs7O2dCQXBCTyxLQUFLO2dCQVZYLHFCQUFxQjtnQkFZZixxQkFBcUI7Z0JBVHJCLG9CQUFvQjtnQkFNcEIsd0JBQXdCO2dCQUV4Qix5QkFBeUI7Z0JBRXpCLHVCQUF1QjtnQkFDdkIsNEJBQTRCO2dCQWRYLHNCQUFzQjs7O3FDQWdDNUMsTUFBTTtnQ0FHTixTQUFTLFNBQUMsYUFBYTs0QkFHdkIsU0FBUyxTQUFDLGtCQUFrQjs0QkE4TDVCLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF3QjVDLDJCQUFDO0NBQUEsQUFuT0QsSUFtT0M7U0E3Tlksb0JBQW9COzs7SUFDL0Isa0RBQytDOztJQUUvQyw2Q0FDb0M7O0lBRXBDLHlDQUNxQzs7Ozs7O0lBS3JDLHNDQUF3Qzs7SUFFeEMsOENBQStDOztJQUMvQyw4Q0FBNEM7O0lBRTVDLHVDQUFzQzs7SUFFdEMsaURBTUU7O0lBRUYseUNBQTRCOzs7OztJQUc1QiwyQ0FBd0M7O0lBRXhDLG1EQUF1Qzs7SUFDdkMsdURBQThDOztJQUM5QyxvREFBK0M7O0lBRS9DLDZDQUE2Qjs7SUFDN0IsMENBQTBCOztJQUUxQixtREFRRTs7Ozs7SUFLRixvQ0FBNEI7Ozs7O0lBRTVCLHFEQUE0Qzs7Ozs7SUFFNUMsNENBQTBDOzs7OztJQUV2QixxQ0FBZ0M7Ozs7O0lBQ2hDLHFEQUFvRDs7Ozs7SUFDcEQsMkNBQTBDOzs7OztJQUMxQyw2Q0FBMkM7Ozs7O0lBQzNDLDZDQUErQzs7Ozs7SUFDL0Msa0RBQXFEOzs7OztJQUNyRCx1REFBd0Q7Ozs7O0lBQ3hELDREQUFrRTs7Ozs7SUFDbEUsc0RBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVHJlZUNvbXBvbmVudCxcbiAgTm9kZVNlcnZpY2UsXG4gIElDb250ZXh0TWVudSxcbiAgSU91dGVyTm9kZSxcbiAgSVRyZWVEYXRhLFxuICBJVHJlZVN0YXRlLFxuICBJQ29uZmlndXJhdGlvbixcbiAgVHJlZU1vZGVsLFxuICBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsIFRyZWVJbml0aWFsaXplclNlcnZpY2UsXG59IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4vZmlsZXNMaXN0L2ZpbGUubW9kZWwnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zU2VydmljZX0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQge0lGaWxlRXZlbnR9IGZyb20gJy4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuL3Rvb2xiYXIvbW9kZWxzL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0ZpbGVzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9maWxlc0xpc3QvZmlsZXNMaXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4vdG9vbGJhci9pbnRlcmZhY2UvSVRvb2xiYXJFdmVudCc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBcGlTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyQXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9ucywgSU5vdGlmaWNhdGlvbn0gZnJvbSAnLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge0N1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0ZJTEVNQU5BR0VSX1RSRUVfTkFNRX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFwaUFic3RyYWN0LmNsYXNzJztcbmltcG9ydCB7XG4gIENob29zZUZpbGVzQWN0aW9uLFxuICBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uLCBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24sIExvYWRGaWxlc0FjdGlvbixcbiAgU2VsZWN0QWxsRmlsZXNBY3Rpb24sXG4gIFVuU2VsZWN0QWxsRmlsZXNBY3Rpb25cbn0gZnJvbSAnLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZmlsZW1hbmFnZXInLFxuICBwcm92aWRlcnM6IFtOb2RlU2VydmljZSwgTm90aWZpY2F0aW9uc1NlcnZpY2VdLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGVtYW5hZ2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgcHVibGljIG9uU2luZ2xlRmlsZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKFRyZWVDb21wb25lbnQpXG4gIHB1YmxpYyB0cmVlQ29tcG9uZW50OiBUcmVlQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoRmlsZXNMaXN0Q29tcG9uZW50KVxuICBwdWJsaWMgZmlsZXNMaXN0OiBGaWxlc0xpc3RDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgZmlsZXMgZm9yIGN1cnJlbnQgc2VsZWN0ZWQgZGlyZWN0b3J5XG4gICAqL1xuICBwcml2YXRlIGZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT47XG5cbiAgcHVibGljIGZpbHRlcmVkRmlsZXMkOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPjtcbiAgcHVibGljIHNlbGVjdGVkRmlsZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBwdWJsaWMgZm9sZGVyczogT2JzZXJ2YWJsZTxJVHJlZURhdGE+O1xuXG4gIHB1YmxpYyB0cmVlQ29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24gPSB7XG4gICAgc2hvd0FkZEJ1dHRvbjogZmFsc2UsXG4gICAgZGlzYWJsZU1vdmVOb2RlczogZmFsc2UsXG4gICAgdHJlZUlkOiBGSUxFTUFOQUdFUl9UUkVFX05BTUUsXG4gICAgZHJhZ1pvbmU6IEZJTEVNQU5BR0VSX1RSRUVfTkFNRSxcbiAgICBkcm9wWm9uZTogW0ZJTEVNQU5BR0VSX1RSRUVfTkFNRV1cbiAgfTtcblxuICBwdWJsaWMgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG5cbiAgLyoqIFVOU0VEICoqL1xuICBwdWJsaWMgY29udGV4dE1lbnU6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIGN1cnJlbnRTZWxlY3RlZEZpbGU6IElGaWxlTW9kZWw7XG4gIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRGaWxlc0lkczogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIGN1cnJlbnRTZWxlY3RlZEZpbGVzOiBJT3V0ZXJGaWxlW10gPSBbXTtcblxuICBwdWJsaWMgaXNQcmV2aWV3TW9kZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNDcm9wTW9kZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBub3RpZmljYXRpb25PcHRpb25zID0ge1xuICAgIHBvc2l0aW9uOiBbJ2JvdHRvbScsICdyaWdodCddLFxuICAgIHRpbWVPdXQ6IDMwMDAsXG4gICAgbGFzdE9uQm90dG9tOiBmYWxzZSxcbiAgICBwcmV2ZW50RHVwbGljYXRlczogdHJ1ZSxcbiAgICBydGw6IGZhbHNlLFxuICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogTGlzdCBvZiBjb250ZXh0IG1lbnVcbiAgICovXG4gIHB1YmxpYyBtZW51OiBJQ29udGV4dE1lbnVbXTtcblxuICBwcm90ZWN0ZWQgY3VycmVudFNlbGVjdGVkRm9sZGVyOiBJT3V0ZXJOb2RlO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHRyZWVTZXJ2aWNlOiBGaWxlTWFuYWdlckFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyRWZmZWN0czogRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmlsZW1hbmFnZXJOb3RpZmNhdGlvbnM6IEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlOiBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmVlSW5pdGlhbGl6ZXJTZXJ2aWNlOiBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLm1lbnUgPSBjb25maWd1cmF0aW9uLmNvbnRleHRNZW51SXRlbXM7XG5cbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLmdldE5vdGlmaWNhdGlvblN0cmVhbSgpXG4gICAgICAuc3Vic2NyaWJlKChub3RpZmljYXRpb246IElOb3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHRpdGxlLCBtZXNzYWdlfSA9IG5vdGlmaWNhdGlvbjtcblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNbdHlwZV0odGl0bGUsIG1lc3NhZ2UpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uuc2VsZWN0ZWRGaWxlcyRcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZEZpbGVzSWRzID0gZGF0YTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLnNlbGVjdGVkRmlsZXMkLFxuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZW50aXRpZXMkLFxuICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChbaWRzLCBlbnRpdGllc106IFtzdHJpbmdbXSwgeyBba2V5OiBzdHJpbmddOiBJT3V0ZXJGaWxlIH1dKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlcyA9IGlkcy5tYXAoKGlkKSA9PiBlbnRpdGllc1tpZF0pO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyZWVNb2RlbCA9IHRoaXMudHJlZUluaXRpYWxpemVyU2VydmljZS5pbml0KHRoaXMudHJlZUNvbmZpZ3VyYXRpb24sIHRoaXMudHJlZVNlcnZpY2UpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy50cmVlTW9kZWwuY3VycmVudFNlbGVjdGVkTm9kZSRcbiAgICAgICAgLnN1YnNjcmliZSgobm9kZTogSU91dGVyTm9kZSkgPT4gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIgPSBub2RlKVxuICAgICk7XG5cbiAgICAvKioqIFNUQVJUIC0gaW5pdCBmaWxlcyAqKiovXG4gICAgdGhpcy5maWxlcyQgPSB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZmlsZXMkO1xuICAgIHRoaXMuZmlsdGVyZWRGaWxlcyQgPSB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZmlsdGVyZWRGaWxlcyQ7XG4gICAgdGhpcy5zZWxlY3RlZEZpbGVzJCA9IHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5zZWxlY3RlZEZpbGVzJDtcblxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy50cmVlTW9kZWwuY3VycmVudFNlbGVjdGVkTm9kZSRcbiAgICAgICAgLnN1YnNjcmliZSgobm9kZTogSU91dGVyTm9kZSB8IG51bGwpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRGaWxlcyhub2RlID8gbm9kZS5pZCA6ICcnKTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgLyoqKiBFTkQgLSBpbml0IGZpbGVzICoqKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmZpbGVNYW5hZ2VyRWZmZWN0cy5jcm9wRmlsZVN1Y2Nlc3MkXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXQgY3VycmVudFNlbGVjdGVkRm9sZGVySWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyID8gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIuaWQgOiBudWxsO1xuICB9XG5cblxuICBwdWJsaWMgb25BZGRGb2xkZXIoKSB7XG4gICAgdGhpcy50cmVlQ29tcG9uZW50Lm9uQWRkKCk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogRklMRSBFVkVOVFNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKlxuICAgKiBSdW4gd2hlbiBhbGwgZmlsZXMgYXJlIHVwbG9hZGVkXG4gICAqL1xuICBwdWJsaWMgb25VcGxvYWQoZm9sZGVySWQ6IHN0cmluZykge1xuICAgIHRoaXMubm90aWZpY2F0aW9ucy5zdWNjZXNzKCdGaWxlIHVwbG9hZCcsICdVcGxvYWQgY29tcGxldGUnKTtcbiAgfVxuXG5cbiAgcHVibGljIG9uUHJldmlld0ZpbGUoZmlsZUV2ZW50RGF0YTogSUZpbGVFdmVudCkge1xuICAgIHRoaXMuaXNQcmV2aWV3TW9kZSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlID0gZmlsZUV2ZW50RGF0YS5maWxlO1xuICB9XG5cblxuICBwdWJsaWMgb25PcGVuQ3JvcEZpbGVFZGl0b3IoZmlsZUV2ZW50RGF0YTogSUZpbGVFdmVudCkge1xuICAgIHRoaXMuaXNDcm9wTW9kZSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlID0gZmlsZUV2ZW50RGF0YS5maWxlO1xuICB9XG5cblxuICBwdWJsaWMgb25TZWxlY3RGaWxlKGV2ZW50OiBGaWxlTW9kZWwpIHtcbiAgICB0aGlzLm9uU2luZ2xlRmlsZVNlbGVjdC5uZXh0KGV2ZW50LmdldFNlbGVjdERhdGEoKSk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogVE9PTEJBUiBFVkVOVFNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICBwdWJsaWMgb25NZW51QnV0dG9uQ2xpY2soZXZlbnQ6IElUb29sYmFyRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgQnV0dG9uLkNIT09TRV9TRUxFQ1RJT046XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENob29zZUZpbGVzQWN0aW9uKHtmaWxlczogdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlc30pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5ERUxFVEVfU0VMRUNUSU9OOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uKHtmaWxlczogdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlc0lkc30pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5TRUxFQ1RfQUxMOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5VTlNFTEVDVF9BTEw6XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCdXR0b24uSU5WRVJTRV9TRUxFQ1RJT046XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbigpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5SRUZSRVNIX0ZJTEVTX0xJU1Q6XG4gICAgICAgIHRoaXMucmVsb2FkRmlsZXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIE9USEVSIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5RXZlbnRzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaXNQcmV2aWV3TW9kZSB8fCB0aGlzLmlzQ3JvcE1vZGUpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmlzUHJldmlld01vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ3JvcE1vZGUgPSBmYWxzZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRGaWxlc0FjdGlvbih7Zm9sZGVySWQ6IGZvbGRlcklkIHx8ICcnfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWxvYWRGaWxlcygpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyID8gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIuaWQgOiAnJztcblxuICAgIHRoaXMubG9hZEZpbGVzKGlkKTtcbiAgfVxufVxuIl19