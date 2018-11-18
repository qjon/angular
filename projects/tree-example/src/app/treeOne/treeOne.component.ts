import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ITreeData, IContextMenu, IConfiguration, TreeInitializerService, IOuterNode, TreeModel} from '@rign/angular2-tree';
import {TREE_ONE_ID, TreeOneNodeService} from './treeOneNode.service';

@Component({
  selector: 'app-tree-one',
  templateUrl: './treeOne.component.html',
})
export class TreeOneComponent implements OnInit, OnDestroy {
  public folders: Observable<ITreeData>;

  public contextMenu: IContextMenu[] = [];

  public treeConfiguration: IConfiguration = {
    showAddButton: true,
    disableMoveNodes: false,
    treeId: TREE_ONE_ID,
    dragZone: TREE_ONE_ID,
    dropZone: [TREE_ONE_ID],
    isAnimation: true
  };

  public treeModel: TreeModel;

  public constructor(private treeInitializerService: TreeInitializerService,
                     private treeOneNodeService: TreeOneNodeService) {
  }

  public ngOnInit(): void {
    const nodes: IOuterNode[] = JSON.parse(localStorage.getItem('treeOne')) || [];

    this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeOneNodeService, nodes);
    // this.treeModel.initPath(['e95569ed-afd4-bdf3-1b3f-448afad49d04', '69d2d75d-c0e7-ee94-2067-8554efaa7a1c', '8ba1210b-e503-f9a8-4b85-c315ca828844']);
  }

  public ngOnDestroy(): void {
    this.treeModel.destroy();
  }
}
