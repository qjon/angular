import { Provider, ModuleWithProviders } from '@angular/core';
import { IFileManagerConfiguration } from './configuration/IFileManagerConfiguration';
export declare class FileManagerModule {
    static forRoot(config: IFileManagerConfiguration, apiProvider?: Provider): ModuleWithProviders;
    static forChild(config: IFileManagerConfiguration, apiProvider?: Provider): ModuleWithProviders;
}
