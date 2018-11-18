import { FileItem, FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { FilemanagerNotifcations } from './FilemanagerNotifcations';
import { FileLikeObject } from 'ng2-file-upload/file-upload/file-like-object.class';
export declare class ExtendedFileUploader extends FileUploader {
    private filemanagerNotification;
    constructor(options: FileUploaderOptions, filemanagerNotification: FilemanagerNotifcations);
    onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: FileUploaderOptions): void;
    uploadItem(value: FileItem): void;
}
