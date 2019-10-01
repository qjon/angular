import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FileModel} from '../filesList/file.model';
import {CropperSettings} from 'ng2-img-cropper/src/cropperSettings';
import {ICropSize} from './ICropSize';
import {FileManagerConfiguration} from '../configuration/fileManagerConfiguration.service';
import {Bounds} from 'ng2-img-cropper/src/model/bounds';
import {ICropBounds} from './ICropBounds';
import {ImageCropperComponent} from 'ng2-img-cropper';
import {IFileManagerState} from '../store/file-manager.reducer';
import {Store} from '@ngrx/store';
import {CropFileAction} from '../store/file-manager.action';
import {FILEMANAGER_TRANSLATION_TOKEN} from '../services/filemanager-translation.token';
import {IFilemanagerTranslation} from '../interfaces/filemanager-translation.interface';

@Component({
  selector: 'crop-image',
  styleUrls: ['./crop.scss'],
  template: `
      <div class="crop-image">
          <div class="crop-workbench">
              <div #container></div>
          </div>
          <div class="btn-toolbar">
              <div class="btn-group">
                  <button class="btn btn-primary" *ngFor="let cropSize of cropSizeList" (click)="updateCropSize(cropSize)"
                          [ngClass]="{'active': cropSize == currentCropSize}">{{cropSize.name}}
                  </button>
              </div>
              <div class="btn-group pull-right">
                  <button class="btn btn-success btn-icon" (click)="cropImage()">
                      <i class="fa fa-check"></i>
                      <span>{{ filemanagerTranslations.RI_FM_BTN_SAVE }}</span>
                  </button>
              </div>
          </div>
      </div>
  `
})

export class CropComponent implements AfterContentInit {
  @Input()
  public file: FileModel;

  @Output()
  public onCrop = new EventEmitter();

  @ViewChild('container', {read: ViewContainerRef, static: true})
  public container: ViewContainerRef;

  @ViewChild('cropper', {static: false})
  public cropper: ImageCropperComponent;

  private bounds: Bounds;

  public cropSizeList: ICropSize[];
  public currentCropSize: ICropSize;

  constructor(private resolver: ComponentFactoryResolver,
              private configuration: FileManagerConfiguration,
              private store: Store<IFileManagerState>,
              @Inject(FILEMANAGER_TRANSLATION_TOKEN) public filemanagerTranslations: IFilemanagerTranslation) {
    this.cropSizeList = configuration.allowedCropSize;
  }

  updateCropSize(cropSize: ICropSize) {
    const image = new Image();
    const cropperComponent = this.resolver.resolveComponentFactory(ImageCropperComponent);
    const cropperComponentRef = this.container.createComponent(cropperComponent);

    if (this.container.length > 1) {
      this.container.detach(0);
    }

    this.currentCropSize = cropSize;
    cropperComponentRef.instance.settings = this.getCropperSettings();
    cropperComponentRef.instance.image = {};
    cropperComponentRef.instance.onCrop
      .subscribe((bounds: Bounds) => this.bounds = bounds);

    setTimeout(() => {
      image.src = this.file.url;
      cropperComponentRef.instance.setImage(image);
    });
  }

  public ngAfterContentInit(): void {
    this.updateCropSize(this.cropSizeList[0]);
  }

  public cropImage() {
    const bounds: ICropBounds = {
      x: this.bounds.left,
      y: this.bounds.top,
      width: this.bounds.width,
      height: this.bounds.height
    };

    this.store.dispatch(new CropFileAction({file: this.file, bounds}));
  }


  private getCropperSettings(): CropperSettings {
    const cropperSettings = new CropperSettings();
    const scale = this.calculateScale();
    const width = scale * this.file.getWidth();
    const height = scale * this.file.getHeight();

    cropperSettings.noFileInput = true;
    cropperSettings.width = this.currentCropSize.width;
    cropperSettings.height = this.currentCropSize.height;
    cropperSettings.canvasWidth = width;
    cropperSettings.canvasHeight = height;

    return cropperSettings;
  }

  /**
   * Calculates scale between current file dimensions and box 600x600
   */
  private calculateScale(): number {
    const scale = this.file.getWidth() / this.file.getHeight();

    if (scale > 1) {
      if (this.file.getWidth() > 600) {
        return 600 / this.file.getWidth();
      }
    } else {
      if (this.file.getHeight() > 600) {
        return 600 / this.file.getHeight();
      }
    }

    return 1;
  }
}
