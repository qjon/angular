import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {IFileModel} from '../interface/IFileModel';
import {FileManagerConfiguration} from '../../configuration/fileManagerConfiguration.service';
import {IFileEvent} from '../interface/IFileEvent';
import {Store} from '@ngrx/store';
import {IFileManagerState} from '../../store/file-manager.reducer';
import {
  ChooseFilesAction,
  DeleteFileAction,
  SelectFileAction,
  UnSelectFileAction
} from '../../store/file-manager.action';

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

  public removeTitle = 'Remove file';

  public constructor(public configuration: FileManagerConfiguration,
                     private store: Store<IFileManagerState>) {
  }

  /**
   * Fired when clicked on button "delete file"
   *
   * @param file
   */
  public deleteFile($event: MouseEvent, file: IFileModel) {
    this.store.dispatch(new DeleteFileAction({file}));

    $event.preventDefault();
    $event.stopPropagation();
  }

  public getRemoveMessage(file: IFileModel) {
    return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
  }

  public openPreview($event: MouseEvent): void {
    let fileEvent: IFileEvent = {
      eventName: 'onPreviewFile',
      file: this.file
    };
    this.onPreviewFile.emit(fileEvent);

    $event.preventDefault();
    $event.stopPropagation();
  }

  public openCrop($event: MouseEvent): void {
    let fileEvent: IFileEvent = {
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
