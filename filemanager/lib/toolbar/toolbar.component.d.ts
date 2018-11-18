import { EventEmitter, OnChanges } from '@angular/core';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { FileManagerUploader } from '../filesList/fileManagerUploader.service';
import { Store } from '@ngrx/store';
import { IFileManagerState } from '../store/file-manager.reducer';
export declare class ToolbarComponent implements OnChanges {
    configuration: FileManagerConfiguration;
    fileManagerUploader: FileManagerUploader;
    private store;
    currentFolderId: string;
    onAddFolderClick: EventEmitter<{}>;
    onUpload: EventEmitter<{}>;
    onMenuButtonClick: EventEmitter<{}>;
    constructor(configuration: FileManagerConfiguration, fileManagerUploader: FileManagerUploader, store: Store<IFileManagerState>);
    ngOnChanges(): void;
    addFolder(): void;
    onRefreshFilesList(): void;
}
