import { ViewContainerRef, ComponentFactoryResolver, EventEmitter, AfterContentInit } from '@angular/core';
import { FileModel } from '../filesList/file.model';
import { ICropSize } from './ICropSize';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { IFileManagerState } from '../store/file-manager.reducer';
import { Store } from '@ngrx/store';
export declare class CropComponent implements AfterContentInit {
    private resolver;
    private configuration;
    private store;
    file: FileModel;
    onCrop: EventEmitter<{}>;
    container: ViewContainerRef;
    cropper: ImageCropperComponent;
    private bounds;
    cropSizeList: ICropSize[];
    currentCropSize: ICropSize;
    constructor(resolver: ComponentFactoryResolver, configuration: FileManagerConfiguration, store: Store<IFileManagerState>);
    updateCropSize(cropSize: ICropSize): void;
    ngAfterContentInit(): void;
    cropImage(): void;
    private getCropperSettings;
    /**
     * Calculates scale between current file dimensions and box 600x600
     */
    private calculateScale;
}
