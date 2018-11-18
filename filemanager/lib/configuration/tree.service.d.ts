import { NodeService } from '@rign/angular2-tree';
import { IFileManagerConfiguration } from './IFileManagerConfiguration';
import { HttpClient } from '@angular/common/http';
export declare class TreeService extends NodeService {
    protected http: HttpClient;
    constructor(http: HttpClient, configuration: IFileManagerConfiguration);
}
