import {Component, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {
  IConfiguration,
  IContextMenu,
  IOuterNode,
  ITreeData,
  ITreeState,
  NodeDispatcherService,
  NodeService,
  TreeComponent,
  TreeInitializerService,
  TreeModel,
} from '@rign/angular2-tree';
import {FileModel} from './filesList/file.model';
import {IFileEvent} from './filesList/interface/IFileEvent';
import {Button} from './toolbar/models/button.model';
import {FilesListComponent} from './filesList/filesList.component';
import {IToolbarEvent} from './toolbar/interface/IToolbarEvent';
import {IFileModel} from './filesList/interface/IFileModel';
import {FileManagerConfiguration} from './configuration/fileManagerConfiguration.service';
import {Store} from '@ngrx/store';
import {FileManagerEffectsService} from './store/fileManagerEffects.service';
import {FileManagerApiService} from './store/fileManagerApi.service';
import {FilemanagerNotifications} from './services/FilemanagerNotifications';
import {CurrentDirectoryFilesService} from './services/currentDirectoryFiles.service';
import {IOuterFile} from './filesList/interface/IOuterFile';
import {FILEMANAGER_TREE_NAME} from './store/fileManagerApiAbstract.class';
import {
  ChooseFilesAction,
  DeleteSelectedFilesAction,
  InverseFilesSelectionAction,
  LoadFilesAction,
  SelectAllFilesAction,
  UnSelectAllFilesAction
} from './store/file-manager.action';
import {combineLatest, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'ri-filemanager',
  providers: [NodeService],
  styleUrls: ['./main.scss'],
  templateUrl: './filemanager.html'
})
export class FileManagerComponent implements OnInit, OnDestroy {
  @Output()
  public onSingleFileSelect = new EventEmitter();

  @ViewChild(TreeComponent, {static: true})
  public treeComponent: TreeComponent;

  @ViewChild(FilesListComponent, {static: true})
  public filesList: FilesListComponent;

  /**
   * List of files for current selected directory
   */
  private files$: Observable<FileModel[]>;

  public filteredFiles$: Observable<FileModel[]>;
  public selectedFiles$: Observable<string[]>;

  public folders: Observable<ITreeData>;

  public treeConfiguration: IConfiguration = {
    showAddButton: false,
    disableMoveNodes: false,
    treeId: FILEMANAGER_TREE_NAME,
    dragZone: FILEMANAGER_TREE_NAME,
    dropZone: [FILEMANAGER_TREE_NAME]
  };

  public treeModel: TreeModel;

  /** UNSED **/
  public contextMenu: IContextMenu[] = [];

  public currentSelectedFile: IFileModel;
  public currentSelectedFilesIds: string[] = [];
  public currentSelectedFiles: IOuterFile[] = [];

  public isPreviewMode = false;
  public isCropMode = false;

  /**
   * List of context menu
   */
  public menu: IContextMenu[];

  protected currentSelectedFolder: IOuterNode;

  private subscription = new Subscription();

  public constructor(private store: Store<ITreeState>,
                     private nodeDispatcherService: NodeDispatcherService,
                     private treeService: FileManagerApiService,
                     private configuration: FileManagerConfiguration,
                     private fileManagerEffects: FileManagerEffectsService,
                     private filemanagerNotifications: FilemanagerNotifications,
                     private currentDirectoryFilesService: CurrentDirectoryFilesService,
                     private treeInitializerService: TreeInitializerService) {

    this.menu = configuration.contextMenuItems;

    this.subscription.add(
      this.currentDirectoryFilesService.selectedFiles$
        .subscribe((data: string[]) => {
          this.currentSelectedFilesIds = data;
        })
    );

    this.subscription.add(
      combineLatest(
        this.currentDirectoryFilesService.selectedFiles$,
        this.currentDirectoryFilesService.entities$,
      )
        .subscribe(([ids, entities]: [string[], { [key: string]: IOuterFile }]) => {
          this.currentSelectedFiles = ids.map((id) => entities[id]);
        })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngOnInit(): void {
    this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeService);

    this.subscription.add(
      this.treeModel.currentSelectedNode$
        .subscribe((node: IOuterNode) => this.currentSelectedFolder = node)
    );

    /*** START - init files ***/
    this.files$ = this.currentDirectoryFilesService.files$;
    this.filteredFiles$ = this.currentDirectoryFilesService.filteredFiles$;
    this.selectedFiles$ = this.currentDirectoryFilesService.selectedFiles$;


    this.subscription.add(
      this.treeModel.currentSelectedNode$
        .subscribe((node: IOuterNode | null) => {
          this.loadFiles(node ? node.id : '');
        })
    );

    /*** END - init files ***/
    this.subscription.add(
      this.fileManagerEffects.cropFileSuccess$
        .subscribe(() => {
          this.closeModal();
        })
    );
  }

  get currentSelectedFolderId(): string | null {
    return this.currentSelectedFolder ? this.currentSelectedFolder.id : null;
  }


  public onAddFolder() {
    this.treeComponent.onAdd();
  }

  /***********************************************************************
   * FILE EVENTS
   **********************************************************************/
  /**
   * Run when all files are uploaded
   */
  public onUpload(folderId: string) {
    this.filemanagerNotifications.send({
      type: 'success',
      title: 'File upload',
      message: 'Upload complete',
    });
  }


  public onPreviewFile(fileEventData: IFileEvent) {
    this.isPreviewMode = true;
    this.currentSelectedFile = fileEventData.file;
  }


  public onOpenCropFileEditor(fileEventData: IFileEvent) {
    this.isCropMode = true;
    this.currentSelectedFile = fileEventData.file;
  }


  public onSelectFile(event: FileModel) {
    this.onSingleFileSelect.next(event.getSelectData());
  }

  /***********************************************************************
   * TOOLBAR EVENTS
   **********************************************************************/


  public onMenuButtonClick(event: IToolbarEvent) {
    switch (event.name) {
      case Button.CHOOSE_SELECTION:
        this.store.dispatch(new ChooseFilesAction({files: this.currentSelectedFiles}));
        break;
      case Button.DELETE_SELECTION:
        this.store.dispatch(new DeleteSelectedFilesAction({files: this.currentSelectedFilesIds}));
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

  /***********************************************************************
   * OTHER FUNCTIONS
   **********************************************************************/
  @HostListener('window:keydown', ['$event'])
  public keyEvents(event: KeyboardEvent) {
    if (this.isPreviewMode || this.isCropMode) {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    }
  }

  public closeModal() {
    this.isPreviewMode = false;
    this.isCropMode = false;
  }


  private loadFiles(folderId: string) {
    this.store.dispatch(new LoadFilesAction({folderId: folderId || ''}));
  }

  private reloadFiles() {
    const id = this.currentSelectedFolder ? this.currentSelectedFolder.id : '';

    this.loadFiles(id);
  }
}
