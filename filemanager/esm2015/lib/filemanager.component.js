/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class FileManagerComponent {
    /**
     * @param {?} store
     * @param {?} nodeDispatcherService
     * @param {?} treeService
     * @param {?} notifications
     * @param {?} configuration
     * @param {?} fileManagerEffects
     * @param {?} filemanagerNotifcations
     * @param {?} currentDirectoryFilesService
     * @param {?} treeInitializerService
     */
    constructor(store, nodeDispatcherService, treeService, notifications, configuration, fileManagerEffects, filemanagerNotifcations, currentDirectoryFilesService, treeInitializerService) {
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
            .subscribe((notification) => {
            const { type, title, message } = notification;
            this.notifications[type](title, message);
        });
        this.subscription.add(this.currentDirectoryFilesService.selectedFiles$
            .subscribe((data) => {
            this.currentSelectedFilesIds = data;
        }));
        this.subscription.add(combineLatest(this.currentDirectoryFilesService.selectedFiles$, this.currentDirectoryFilesService.entities$)
            .subscribe(([ids, entities]) => {
            this.currentSelectedFiles = ids.map((id) => entities[id]);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeService);
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe((node) => this.currentSelectedFolder = node));
        /*** START - init files ***/
        this.files$ = this.currentDirectoryFilesService.files$;
        this.filteredFiles$ = this.currentDirectoryFilesService.filteredFiles$;
        this.selectedFiles$ = this.currentDirectoryFilesService.selectedFiles$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe((node) => {
            this.loadFiles(node ? node.id : '');
        }));
        /*** END - init files ***/
        this.subscription.add(this.fileManagerEffects.cropFileSuccess$
            .subscribe(() => {
            this.closeModal();
        }));
    }
    /**
     * @return {?}
     */
    get currentSelectedFolderId() {
        return this.currentSelectedFolder ? this.currentSelectedFolder.id : null;
    }
    /**
     * @return {?}
     */
    onAddFolder() {
        this.treeComponent.onAdd();
    }
    /***********************************************************************
       * FILE EVENTS
       **********************************************************************/
    /**
     * Run when all files are uploaded
     * @param {?} folderId
     * @return {?}
     */
    onUpload(folderId) {
        this.notifications.success('File upload', 'Upload complete');
    }
    /**
     * @param {?} fileEventData
     * @return {?}
     */
    onPreviewFile(fileEventData) {
        this.isPreviewMode = true;
        this.currentSelectedFile = fileEventData.file;
    }
    /**
     * @param {?} fileEventData
     * @return {?}
     */
    onOpenCropFileEditor(fileEventData) {
        this.isCropMode = true;
        this.currentSelectedFile = fileEventData.file;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectFile(event) {
        this.onSingleFileSelect.next(event.getSelectData());
    }
    /**
     * ********************************************************************
     * TOOLBAR EVENTS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    onMenuButtonClick(event) {
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
    }
    /**
     * ********************************************************************
     * OTHER FUNCTIONS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    keyEvents(event) {
        if (this.isPreviewMode || this.isCropMode) {
            if (event.keyCode === 27) {
                this.closeModal();
            }
        }
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.isPreviewMode = false;
        this.isCropMode = false;
    }
    /**
     * @private
     * @param {?} folderId
     * @return {?}
     */
    loadFiles(folderId) {
        this.store.dispatch(new LoadFilesAction({ folderId: folderId || '' }));
    }
    /**
     * @private
     * @return {?}
     */
    reloadFiles() {
        /** @type {?} */
        const id = this.currentSelectedFolder ? this.currentSelectedFolder.id : '';
        this.loadFiles(id);
    }
}
FileManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-filemanager',
                providers: [NodeService, NotificationsService],
                template: "<div class=\"filemanager-container\">\n  <div class=\"fm-header\">\n    <ri-toolbar\n      #toolbar\n      [currentFolderId]=\"currentSelectedFolderId\"\n      (onAddFolderClick)=\"onAddFolder()\"\n      (onUpload)=\"onUpload($event)\"\n      (onMenuButtonClick)=\"onMenuButtonClick($event)\"\n    ></ri-toolbar>\n  </div>\n  <div class=\"fm-main-box\">\n    <div class=\"folders-box\">\n      <ri-tree [treeModel]=\"treeModel\"></ri-tree>\n    </div>\n    <div class=\"files-box\">\n      <ri-tree-parents-list [treeModel]=\"treeModel\"></ri-tree-parents-list>\n      <ri-files-list [files]=\"filteredFiles$ | async\"\n                     [selectedFiles]=\"selectedFiles$ | async\"\n                     (onPreviewFile)=\"onPreviewFile($event)\"\n                     (onCropFile)=\"onOpenCropFileEditor($event)\"\n                     (onSelectFile)=\"onSelectFile($event)\"\n      ></ri-files-list>\n    </div>\n  </div>\n  <div *ngIf=\"isPreviewMode || isCropMode\" class=\"backdrop\">\n    <div class=\"modal-view\">\n      <div class=\"modal-close\">\n        <i class=\"fa fa-2x fa-times\" (click)=\"closeModal()\"></i>\n      </div>\n      <ri-file-preview *ngIf=\"isPreviewMode\" [files]=\"filteredFiles$ | async\"\n                       [file]=\"currentSelectedFile\"></ri-file-preview>\n      <crop-image *ngIf=\"isCropMode\" [file]=\"currentSelectedFile\"></crop-image>\n    </div>\n  </div>\n  <simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n</div>\n",
                styles: [".filemanager-container{width:990px;height:700px}.filemanager-container .tree .dropdown{position:relative}.filemanager-container .tree .dropdown-menu{position:fixed!important}.fm-main-box{position:relative;height:100%}.fm-main-box .folders-box{display:block;position:absolute;top:0;bottom:0;width:300px;overflow:hidden;overflow-y:auto}.fm-main-box .files-box{display:block;position:absolute;left:300px;top:0;bottom:0;overflow:hidden;overflow-y:auto}.fm-main-box .files-box ri-tree-parents-list{margin:0 0 10px 20px;display:block}.backdrop{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:1000}.modal-view{margin:50px auto;max-width:600px}.modal-view .modal-close{text-align:right;margin:5px 0;color:#fff}.modal-view .modal-close .fa{cursor:pointer}"]
            }] }
];
/** @nocollapse */
FileManagerComponent.ctorParameters = () => [
    { type: Store },
    { type: NodeDispatcherService },
    { type: FileManagerApiService },
    { type: NotificationsService },
    { type: FileManagerConfiguration },
    { type: FileManagerEffectsService },
    { type: FilemanagerNotifcations },
    { type: CurrentDirectoryFilesService },
    { type: TreeInitializerService }
];
FileManagerComponent.propDecorators = {
    onSingleFileSelect: [{ type: Output }],
    treeComponent: [{ type: ViewChild, args: [TreeComponent,] }],
    filesList: [{ type: ViewChild, args: [FilesListComponent,] }],
    keyEvents: [{ type: HostListener, args: ['window:keydown', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvZmlsZW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDakUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGFBQWEsRUFDYixXQUFXLEVBT1gscUJBQXFCLEVBQUUsc0JBQXNCLEdBQzlDLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBR25FLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDbEMsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDN0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLHVCQUF1QixFQUFnQixNQUFNLG9DQUFvQyxDQUFDO0FBQzFGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRXRGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsZUFBZSxFQUN2RSxvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3ZCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFDLGFBQWEsRUFB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b21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBUcmVlQ29tcG9uZW50LFxuICBOb2RlU2VydmljZSxcbiAgSUNvbnRleHRNZW51LFxuICBJT3V0ZXJOb2RlLFxuICBJVHJlZURhdGEsXG4gIElUcmVlU3RhdGUsXG4gIElDb25maWd1cmF0aW9uLFxuICBUcmVlTW9kZWwsXG4gIE5vZGVEaXNwYXRjaGVyU2VydmljZSwgVHJlZUluaXRpYWxpemVyU2VydmljZSxcbn0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0ZpbGVNb2RlbH0gZnJvbSAnLi9maWxlc0xpc3QvZmlsZS5tb2RlbCc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcbmltcG9ydCB7SUZpbGVFdmVudH0gZnJvbSAnLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlRXZlbnQnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vdG9vbGJhci9tb2RlbHMvYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7RmlsZXNMaXN0Q29tcG9uZW50fSBmcm9tICcuL2ZpbGVzTGlzdC9maWxlc0xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7SVRvb2xiYXJFdmVudH0gZnJvbSAnLi90b29sYmFyL2ludGVyZmFjZS9JVG9vbGJhckV2ZW50JztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2V9IGZyb20gJy4vc3RvcmUvZmlsZU1hbmFnZXJFZmZlY3RzLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckFwaVNlcnZpY2V9IGZyb20gJy4vc3RvcmUvZmlsZU1hbmFnZXJBcGkuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLCBJTm90aWZpY2F0aW9ufSBmcm9tICcuL3NlcnZpY2VzL0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zJztcbmltcG9ydCB7Q3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9jdXJyZW50RGlyZWN0b3J5RmlsZXMuc2VydmljZSc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7RklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtcbiAgQ2hvb3NlRmlsZXNBY3Rpb24sXG4gIERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24sIEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbiwgTG9hZEZpbGVzQWN0aW9uLFxuICBTZWxlY3RBbGxGaWxlc0FjdGlvbixcbiAgVW5TZWxlY3RBbGxGaWxlc0FjdGlvblxufSBmcm9tICcuL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1maWxlbWFuYWdlcicsXG4gIHByb3ZpZGVyczogW05vZGVTZXJ2aWNlLCBOb3RpZmljYXRpb25zU2VydmljZV0sXG4gIHN0eWxlVXJsczogWycuL21haW4uc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZW1hbmFnZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25TaW5nbGVGaWxlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoVHJlZUNvbXBvbmVudClcbiAgcHVibGljIHRyZWVDb21wb25lbnQ6IFRyZWVDb21wb25lbnQ7XG5cbiAgQFZpZXdDaGlsZChGaWxlc0xpc3RDb21wb25lbnQpXG4gIHB1YmxpYyBmaWxlc0xpc3Q6IEZpbGVzTGlzdENvbXBvbmVudDtcblxuICAvKipcbiAgICogTGlzdCBvZiBmaWxlcyBmb3IgY3VycmVudCBzZWxlY3RlZCBkaXJlY3RvcnlcbiAgICovXG4gIHByaXZhdGUgZmlsZXMkOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPjtcblxuICBwdWJsaWMgZmlsdGVyZWRGaWxlcyQ6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+O1xuICBwdWJsaWMgc2VsZWN0ZWRGaWxlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIHB1YmxpYyBmb2xkZXJzOiBPYnNlcnZhYmxlPElUcmVlRGF0YT47XG5cbiAgcHVibGljIHRyZWVDb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbiA9IHtcbiAgICBzaG93QWRkQnV0dG9uOiBmYWxzZSxcbiAgICBkaXNhYmxlTW92ZU5vZGVzOiBmYWxzZSxcbiAgICB0cmVlSWQ6IEZJTEVNQU5BR0VSX1RSRUVfTkFNRSxcbiAgICBkcmFnWm9uZTogRklMRU1BTkFHRVJfVFJFRV9OQU1FLFxuICAgIGRyb3Bab25lOiBbRklMRU1BTkFHRVJfVFJFRV9OQU1FXVxuICB9O1xuXG4gIHB1YmxpYyB0cmVlTW9kZWw6IFRyZWVNb2RlbDtcblxuICAvKiogVU5TRUQgKiovXG4gIHB1YmxpYyBjb250ZXh0TWVudTogSUNvbnRleHRNZW51W10gPSBbXTtcblxuICBwdWJsaWMgY3VycmVudFNlbGVjdGVkRmlsZTogSUZpbGVNb2RlbDtcbiAgcHVibGljIGN1cnJlbnRTZWxlY3RlZEZpbGVzSWRzOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgY3VycmVudFNlbGVjdGVkRmlsZXM6IElPdXRlckZpbGVbXSA9IFtdO1xuXG4gIHB1YmxpYyBpc1ByZXZpZXdNb2RlID0gZmFsc2U7XG4gIHB1YmxpYyBpc0Nyb3BNb2RlID0gZmFsc2U7XG5cbiAgcHVibGljIG5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG4gICAgcG9zaXRpb246IFsnYm90dG9tJywgJ3JpZ2h0J10sXG4gICAgdGltZU91dDogMzAwMCxcbiAgICBsYXN0T25Cb3R0b206IGZhbHNlLFxuICAgIHByZXZlbnREdXBsaWNhdGVzOiB0cnVlLFxuICAgIHJ0bDogZmFsc2UsXG4gICAgc2hvd1Byb2dyZXNzQmFyOiB0cnVlLFxuICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZVxuICB9O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvbnRleHQgbWVudVxuICAgKi9cbiAgcHVibGljIG1lbnU6IElDb250ZXh0TWVudVtdO1xuXG4gIHByb3RlY3RlZCBjdXJyZW50U2VsZWN0ZWRGb2xkZXI6IElPdXRlck5vZGU7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBub2RlRGlzcGF0Y2hlclNlcnZpY2U6IE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgdHJlZVNlcnZpY2U6IEZpbGVNYW5hZ2VyQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmlsZU1hbmFnZXJFZmZlY3RzOiBGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlbWFuYWdlck5vdGlmY2F0aW9uczogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2U6IEN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHRyZWVJbml0aWFsaXplclNlcnZpY2U6IFRyZWVJbml0aWFsaXplclNlcnZpY2UpIHtcblxuICAgIHRoaXMubWVudSA9IGNvbmZpZ3VyYXRpb24uY29udGV4dE1lbnVJdGVtcztcblxuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMuZ2V0Tm90aWZpY2F0aW9uU3RyZWFtKClcbiAgICAgIC5zdWJzY3JpYmUoKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB7dHlwZSwgdGl0bGUsIG1lc3NhZ2V9ID0gbm90aWZpY2F0aW9uO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1t0eXBlXSh0aXRsZSwgbWVzc2FnZSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5zZWxlY3RlZEZpbGVzJFxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkRmlsZXNJZHMgPSBkYXRhO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uuc2VsZWN0ZWRGaWxlcyQsXG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5lbnRpdGllcyQsXG4gICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKFtpZHMsIGVudGl0aWVzXTogW3N0cmluZ1tdLCB7IFtrZXk6IHN0cmluZ106IElPdXRlckZpbGUgfV0pID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZEZpbGVzID0gaWRzLm1hcCgoaWQpID0+IGVudGl0aWVzW2lkXSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudHJlZU1vZGVsID0gdGhpcy50cmVlSW5pdGlhbGl6ZXJTZXJ2aWNlLmluaXQodGhpcy50cmVlQ29uZmlndXJhdGlvbiwgdGhpcy50cmVlU2VydmljZSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnRyZWVNb2RlbC5jdXJyZW50U2VsZWN0ZWROb2RlJFxuICAgICAgICAuc3Vic2NyaWJlKChub2RlOiBJT3V0ZXJOb2RlKSA9PiB0aGlzLmN1cnJlbnRTZWxlY3RlZEZvbGRlciA9IG5vZGUpXG4gICAgKTtcblxuICAgIC8qKiogU1RBUlQgLSBpbml0IGZpbGVzICoqKi9cbiAgICB0aGlzLmZpbGVzJCA9IHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5maWxlcyQ7XG4gICAgdGhpcy5maWx0ZXJlZEZpbGVzJCA9IHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5maWx0ZXJlZEZpbGVzJDtcbiAgICB0aGlzLnNlbGVjdGVkRmlsZXMkID0gdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLnNlbGVjdGVkRmlsZXMkO1xuXG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnRyZWVNb2RlbC5jdXJyZW50U2VsZWN0ZWROb2RlJFxuICAgICAgICAuc3Vic2NyaWJlKChub2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZEZpbGVzKG5vZGUgPyBub2RlLmlkIDogJycpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvKioqIEVORCAtIGluaXQgZmlsZXMgKioqL1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuZmlsZU1hbmFnZXJFZmZlY3RzLmNyb3BGaWxlU3VjY2VzcyRcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50U2VsZWN0ZWRGb2xkZXJJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIgPyB0aGlzLmN1cnJlbnRTZWxlY3RlZEZvbGRlci5pZCA6IG51bGw7XG4gIH1cblxuXG4gIHB1YmxpYyBvbkFkZEZvbGRlcigpIHtcbiAgICB0aGlzLnRyZWVDb21wb25lbnQub25BZGQoKTtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBGSUxFIEVWRU5UU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLyoqXG4gICAqIFJ1biB3aGVuIGFsbCBmaWxlcyBhcmUgdXBsb2FkZWRcbiAgICovXG4gIHB1YmxpYyBvblVwbG9hZChmb2xkZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25zLnN1Y2Nlc3MoJ0ZpbGUgdXBsb2FkJywgJ1VwbG9hZCBjb21wbGV0ZScpO1xuICB9XG5cblxuICBwdWJsaWMgb25QcmV2aWV3RmlsZShmaWxlRXZlbnREYXRhOiBJRmlsZUV2ZW50KSB7XG4gICAgdGhpcy5pc1ByZXZpZXdNb2RlID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZEZpbGUgPSBmaWxlRXZlbnREYXRhLmZpbGU7XG4gIH1cblxuXG4gIHB1YmxpYyBvbk9wZW5Dcm9wRmlsZUVkaXRvcihmaWxlRXZlbnREYXRhOiBJRmlsZUV2ZW50KSB7XG4gICAgdGhpcy5pc0Nyb3BNb2RlID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZEZpbGUgPSBmaWxlRXZlbnREYXRhLmZpbGU7XG4gIH1cblxuXG4gIHB1YmxpYyBvblNlbGVjdEZpbGUoZXZlbnQ6IEZpbGVNb2RlbCkge1xuICAgIHRoaXMub25TaW5nbGVGaWxlU2VsZWN0Lm5leHQoZXZlbnQuZ2V0U2VsZWN0RGF0YSgpKTtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBUT09MQkFSIEVWRU5UU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gIHB1YmxpYyBvbk1lbnVCdXR0b25DbGljayhldmVudDogSVRvb2xiYXJFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQubmFtZSkge1xuICAgICAgY2FzZSBCdXR0b24uQ0hPT1NFX1NFTEVDVElPTjpcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hvb3NlRmlsZXNBY3Rpb24oe2ZpbGVzOiB0aGlzLmN1cnJlbnRTZWxlY3RlZEZpbGVzfSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQnV0dG9uLkRFTEVURV9TRUxFQ1RJT046XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24oe2ZpbGVzOiB0aGlzLmN1cnJlbnRTZWxlY3RlZEZpbGVzSWRzfSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQnV0dG9uLlNFTEVDVF9BTEw6XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlbGVjdEFsbEZpbGVzQWN0aW9uKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQnV0dG9uLlVOU0VMRUNUX0FMTDpcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5JTlZFUlNFX1NFTEVDVElPTjpcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQnV0dG9uLlJFRlJFU0hfRklMRVNfTElTVDpcbiAgICAgICAgdGhpcy5yZWxvYWRGaWxlcygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogT1RIRVIgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBrZXlFdmVudHMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5pc1ByZXZpZXdNb2RlIHx8IHRoaXMuaXNDcm9wTW9kZSkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuaXNQcmV2aWV3TW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDcm9wTW9kZSA9IGZhbHNlO1xuICB9XG5cblxuICBwcml2YXRlIGxvYWRGaWxlcyhmb2xkZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTG9hZEZpbGVzQWN0aW9uKHtmb2xkZXJJZDogZm9sZGVySWQgfHwgJyd9KSk7XG4gIH1cblxuICBwcml2YXRlIHJlbG9hZEZpbGVzKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIgPyB0aGlzLmN1cnJlbnRTZWxlY3RlZEZvbGRlci5pZCA6ICcnO1xuXG4gICAgdGhpcy5sb2FkRmlsZXMoaWQpO1xuICB9XG59XG4iXX0=