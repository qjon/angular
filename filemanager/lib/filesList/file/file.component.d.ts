import { EventEmitter } from '@angular/core';
import { IFileModel } from '../interface/IFileModel';
import { FileManagerConfiguration } from '../../configuration/fileManagerConfiguration.service';
import { Store } from '@ngrx/store';
import { IFileManagerState } from '../../store/file-manager.reducer';
export declare class FileComponent {
    configuration: FileManagerConfiguration;
    private store;
    file: IFileModel;
    onPreviewFile: EventEmitter<{}>;
    onCropFile: EventEmitter<{}>;
    onSelectFile: EventEmitter<{}>;
    removeTitle: string;
    constructor(configuration: FileManagerConfiguration, store: Store<IFileManagerState>);
    /**
     * Fired when clicked on button "delete file"
     *
     * @param file
     */
    deleteFile($event: MouseEvent, file: IFileModel): void;
    getRemoveMessage(file: IFileModel): string;
    openPreview($event: MouseEvent): void;
    openCrop($event: MouseEvent): void;
    selectFile(): void;
    unSelectFile(): void;
    chooseFile($event: MouseEvent, file: IFileModel): void;
}
