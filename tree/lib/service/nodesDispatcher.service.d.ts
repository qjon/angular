import { INodeService } from './node.service';
export declare class NodeDispatcherService {
    private nodeServices;
    registerService(name: string, nodeService: INodeService): void;
    get(name: string): INodeService;
}
