import {Component, OnDestroy, OnInit} from '@angular/core';
import {IConfiguration, IContextMenu, IOuterNode, ITreeData, TreeModel} from '@rign/angular2-tree';
import {Observable} from 'rxjs';
import {TreeTwoNodeService} from './treeTwoNode.service';
import {TreeInitializerService} from '@rign/angular2-tree';

@Component({
  selector: 'app-tree-two',
  templateUrl: './treeTwo.component.html'
})
export class TreeTwoComponent implements OnInit, OnDestroy {
  public folders: Observable<ITreeData>;

  public contextMenu: IContextMenu[] = [];

  public treeConfiguration: IConfiguration = {
    showAddButton: true,
    disableMoveNodes: false,
    treeId: 'tree2',
    dragZone: 'tree2',
    dropZone: ['tree2']
  };

  public treeModel: TreeModel;

  public constructor(private treeInitializerService: TreeInitializerService,
                     private treeTwoNodeService: TreeTwoNodeService) {
  }

  public ngOnInit(): void {
    this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeTwoNodeService);
  }

  public ngOnDestroy(): void {
    this.treeModel.destroy();
  }

  public trackByFn(item: IOuterNode): string {
    return item.id;
  }
}
