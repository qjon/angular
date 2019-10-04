import {Component, EventEmitter, Inject, Input, Output, ViewEncapsulation} from '@angular/core';
import {IFileModel} from '../interface/IFileModel';
import {FileManagerConfiguration} from '../../configuration/fileManagerConfiguration.service';
import {IFileEvent} from '../interface/IFileEvent';
import {Store} from '@ngrx/store';
import {IFileManagerState} from '../../store/file-manager.reducer';
import {ChooseFilesAction, DeleteFileAction, SelectFileAction, UnSelectFileAction} from '../../store/file-manager.action';
import {FILEMANAGER_TRANSLATION_TOKEN} from '../../services/filemanager-translation.token';
import {IFilemanagerTranslation} from '../../interfaces/filemanager-translation.interface';

@Component({
  selector: 'ri-file-component',
  templateUrl: './file.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FileComponent {
  @Input()
  public file: IFileModel;

  @Output()
  public onPreviewFile = new EventEmitter();

  @Output()
  public onCropFile = new EventEmitter();

  @Output()
  public onSelectFile = new EventEmitter();

  public constructor(public configuration: FileManagerConfiguration,
                     private store: Store<IFileManagerState>,
                     @Inject(FILEMANAGER_TRANSLATION_TOKEN) public filemanagerTranslations: IFilemanagerTranslation) {
  }

  /**
   * Fired when clicked on button "delete file"
   */
  public deleteFile($event: MouseEvent, file: IFileModel) {
    this.store.dispatch(new DeleteFileAction({file}));

    $event.preventDefault();
    $event.stopPropagation();
  }

  public getRemoveMessage(file: IFileModel) {
    return this.filemanagerTranslations.RI_FM_MSG_REMOVE_QUESTION.replace('${FILENAME}', file.name);
  }

  public openPreview($event: MouseEvent): void {
    const fileEvent: IFileEvent = {
      eventName: 'onPreviewFile',
      file: this.file
    };
    this.onPreviewFile.emit(fileEvent);

    $event.preventDefault();
    $event.stopPropagation();
  }

  public openCrop($event: MouseEvent): void {
    const fileEvent: IFileEvent = {
      eventName: 'onCropFile',
      file: this.file
    };
    this.onCropFile.emit(fileEvent);

    $event.preventDefault();
    $event.stopPropagation();
  }

  public selectFile(): void {
    this.store.dispatch(new SelectFileAction({file: this.file}));
  }

  public unSelectFile(): void {
    this.store.dispatch(new UnSelectFileAction({file: this.file}));
  }

  public chooseFile($event: MouseEvent, file: IFileModel): void {
    this.store.dispatch(new ChooseFilesAction({files: [file.toJSON()]}));

    $event.preventDefault();
    $event.stopPropagation();
  }
}
