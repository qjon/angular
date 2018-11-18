import {Injectable} from '@angular/core';
import {TreeModelGeneratorService} from './treeModelGenerator.service';
import {NodeDispatcherService} from './nodesDispatcher.service';
import {INodeService} from './node.service';
import {TreeModel} from '../models/TreeModel';
import {IOuterNode} from '../interfaces/IOuterNode';
import {IConfiguration} from '../interfaces/IConfiguration';

@Injectable()
export class TreeInitializerService {
  public constructor(private treeModelGeneratorService: TreeModelGeneratorService,
                     private nodeDispatcherService: NodeDispatcherService) {

  }

  public init(treeConfiguration: IConfiguration,
              treeApi: INodeService,
              loadedNodes?: IOuterNode[]): TreeModel {
    this.nodeDispatcherService.registerService(treeConfiguration.treeId, treeApi);

    return this.treeModelGeneratorService.createTreeModel(treeConfiguration, loadedNodes);
  }
}
