import { TreeModelGeneratorService } from './treeModelGenerator.service';
import { NodeDispatcherService } from './nodesDispatcher.service';
import { INodeService } from './node.service';
import { TreeModel } from '../models/TreeModel';
import { IOuterNode } from '../interfaces/IOuterNode';
import { IConfiguration } from '../interfaces/IConfiguration';
export declare class TreeInitializerService {
    private treeModelGeneratorService;
    private nodeDispatcherService;
    constructor(treeModelGeneratorService: TreeModelGeneratorService, nodeDispatcherService: NodeDispatcherService);
    init(treeConfiguration: IConfiguration, treeApi: INodeService, loadedNodes?: IOuterNode[]): TreeModel;
}
