import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { TreeComponent, IContextMenu, IOuterNode, ITreeData, ITreeState, IConfiguration, TreeModel, NodeDispatcherService, TreeInitializerService } from '@rign/angular2-tree';
import { FileModel } from './filesList/file.model';
import { NotificationsService } from 'angular2-notifications';
import { IFileEvent } from './filesList/interface/IFileEvent';
import { FilesListComponent } from './filesList/filesList.component';
import { IToolbarEvent } from './toolbar/interface/IToolbarEvent';
import { IFileModel } from './filesList/interface/IFileModel';
import { FileManagerConfiguration } from './configuration/fileManagerConfiguration.service';
import { Store } from '@ngrx/store';
import { FileManagerEffectsService } from './store/fileManagerEffects.service';
import { FileManagerApiService } from './store/fileManagerApi.service';
import { FilemanagerNotifcations } from './services/FilemanagerNotifcations';
import { CurrentDirectoryFilesService } from './services/currentDirectoryFiles.service';
import { IOuterFile } from './filesList/interface/IOuterFile';
import { Observable } from 'rxjs';
export declare class FileManagerComponent implements OnInit, OnDestroy {
    private store;
    private nodeDispatcherService;
    private treeService;
    private notifications;
    private configuration;
    private fileManagerEffects;
    private filemanagerNotifcations;
    private currentDirectoryFilesService;
    private treeInitializerService;
    onSingleFileSelect: EventEmitter<{}>;
    treeComponent: TreeComponent;
    filesList: FilesListComponent;
    /**
     * List of files for current selected directory
     */
    private files$;
    filteredFiles$: Observable<FileModel[]>;
    selectedFiles$: Observable<string[]>;
    folders: Observable<ITreeData>;
    treeConfiguration: IConfiguration;
    treeModel: TreeModel;
    /** UNSED **/
    contextMenu: IContextMenu[];
    currentSelectedFile: IFileModel;
    currentSelectedFilesIds: string[];
    currentSelectedFiles: IOuterFile[];
    isPreviewMode: boolean;
    isCropMode: boolean;
    notificationOptions: {
        position: string[];
        timeOut: number;
        lastOnBottom: boolean;
        preventDuplicates: boolean;
        rtl: boolean;
        showProgressBar: boolean;
        pauseOnHover: boolean;
    };
    /**
     * List of context menu
     */
    menu: IContextMenu[];
    protected currentSelectedFolder: IOuterNode;
    private subscription;
    constructor(store: Store<ITreeState>, nodeDispatcherService: NodeDispatcherService, treeService: FileManagerApiService, notifications: NotificationsService, configuration: FileManagerConfiguration, fileManagerEffects: FileManagerEffectsService, filemanagerNotifcations: FilemanagerNotifcations, currentDirectoryFilesService: CurrentDirectoryFilesService, treeInitializerService: TreeInitializerService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    readonly currentSelectedFolderId: string | null;
    onAddFolder(): void;
    /***********************************************************************
     * FILE EVENTS
     **********************************************************************/
    /**
     * Run when all files are uploaded
     */
    onUpload(folderId: string): void;
    onPreviewFile(fileEventData: IFileEvent): void;
    onOpenCropFileEditor(fileEventData: IFileEvent): void;
    onSelectFile(event: FileModel): void;
    /***********************************************************************
     * TOOLBAR EVENTS
     **********************************************************************/
    onMenuButtonClick(event: IToolbarEvent): void;
    /***********************************************************************
     * OTHER FUNCTIONS
     **********************************************************************/
    keyEvents(event: KeyboardEvent): void;
    closeModal(): void;
    private loadFiles;
    private reloadFiles;
}
