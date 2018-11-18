import { IConfiguration } from '../interfaces/IConfiguration';
import { TreeModel } from '../models/TreeModel';
import { Store } from '@ngrx/store';
import { ITreeState } from '../store/ITreeState';
import { NodeDispatcherService } from './nodesDispatcher.service';
import { IOuterNode } from '../interfaces/IOuterNode';
export declare class TreeModelGeneratorService {
    private nodeDispatcherService;
    private store;
    constructor(nodeDispatcherService: NodeDispatcherService, store: Store<ITreeState>);
    createTreeModel(configuration: IConfiguration, nodes?: IOuterNode[]): TreeModel;
}
