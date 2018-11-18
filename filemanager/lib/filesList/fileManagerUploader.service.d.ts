import { ExtendedFileUploader } from '../services/extendedFileUplaoder.service';
import { IFileManagerConfiguration } from '../configuration/IFileManagerConfiguration';
import { FilemanagerNotifcations } from '../services/FilemanagerNotifcations';
export declare class FileManagerUploader {
    uploader: ExtendedFileUploader;
    constructor(configuration: IFileManagerConfiguration, filemanagerNotification: FilemanagerNotifcations);
    clear(): void;
    getDefaultOptions(): {};
    setAuthorizationToken(token: string): void;
    setDirectoryId(directoryId: string | number): FileManagerUploader;
}
