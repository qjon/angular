import {Injectable} from '@angular/core';
import {IConfiguration} from '../interfaces/IConfiguration';
import {TreeModel} from '../models/TreeModel';
import {treeSelector} from '../store/treeReducer';
import {Store} from '@ngrx/store';
import {ITreeState} from '../store/ITreeState';
import {NodeDispatcherService} from './nodesDispatcher.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {
  TreeMarkAsFullyLoadedAction,
  TreeRegisterAction,
  TreeSetConfigurationAction
} from '../store/treeActions.service';

@Injectable()
export class TreeModelGeneratorService {
  public constructor(private nodeDispatcherService: NodeDispatcherService,
                     private store: Store<ITreeState>) {
  }

  public createTreeModel(configuration: IConfiguration, nodes: IOuterNode[] = null): TreeModel {
    const treeId = configuration.treeId;
    const isFullyLoaded = Boolean(nodes);

    // register new tree in store
    this.store.dispatch(new TreeRegisterAction({
      treeId,
      silent: isFullyLoaded,
      nodes
    }));

    // init tree configuration
    this.store.dispatch(new TreeSetConfigurationAction({treeId, configuration}));

    if (Boolean(nodes)) {
      this.nodeDispatcherService.get(treeId).setAllNodes(nodes);
      this.store.dispatch(new TreeMarkAsFullyLoadedAction({treeId}));
    }

    const folders$ = this.store.select(treeSelector(configuration.treeId));

    return new TreeModel(this.store, folders$, configuration, isFullyLoaded);
  }
}
