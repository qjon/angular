import { EventEmitter } from '@angular/core';
import { FileModel } from './file.model';
import { IFileEvent } from './interface/IFileEvent';
import { IFileModel } from './interface/IFileModel';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { FileManagerDispatcherService } from '../store/file-manager-dispatcher.service';
import { NotificationsService } from 'angular2-notifications';
import { FileManagerEffectsService } from '../store/fileManagerEffects.service';
import { Store } from '@ngrx/store';
import { IFileManagerState } from '../store/file-manager.reducer';
export declare class FilesListComponent {
    configuration: FileManagerConfiguration;
    private store;
    private fileManagerDispatcher;
    files: FileModel[];
    selectedFiles: string[];
    onPreviewFile: EventEmitter<{}>;
    onCropFile: EventEmitter<{}>;
    onSelectFile: EventEmitter<{}>;
    removeTitle: string;
    dragZone: string;
    constructor(configuration: FileManagerConfiguration, store: Store<IFileManagerState>, fileManagerDispatcher: FileManagerDispatcherService, notifications: NotificationsService, fileManagerEffects: FileManagerEffectsService);
    /**
     * Fired when clicked on button "delete file"
     *
     * @param file
     */
    deleteFile(file: IFileModel): void;
    getRemoveMessage(file: IFileModel): string;
    openPreview(fileEvent: IFileEvent): void;
    openCrop(fileEvent: IFileEvent): void;
    toggleSelection(file: IFileModel): void;
    isSelected(file: FileModel): boolean;
}
