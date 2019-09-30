import {Component, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {IOuterNode} from './interfaces/IOuterNode';
import {IContextMenu} from './interfaces/IContextMenu';
import {TreeModel} from './models/TreeModel';
import {ContextMenuComponent} from 'ngx-contextmenu';
import {DragAndDrop} from './dragAndDrop/dragAndDrop.service';
import {IDragAndDrop} from './interfaces/IDragAndDrop';
import {Store} from '@ngrx/store';
import {ITreeState} from './store/ITreeState';
import {filter} from 'rxjs/operators';
import {
  TreeDeleteNodeAction,
  TreeEditNodeStartAction,
  TreeInsertNodeAction,
  TreeMoveNodeAction
} from './store/treeActions.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ri-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnChanges, OnDestroy {
  @Input() treeModel: TreeModel;

  @ViewChild('contextMenu', { static: true }) contextMenu: ContextMenuComponent;

  /**
   * List of default options for context menu
   */
  private defaultOptions: IContextMenu[] = [
    {
      name: 'onEdit',
      text: 'RI_TREE_LBL_EDIT_NODE',
      iconCls: 'fa fa-edit'
    },
    {
      name: 'onDelete',
      text: 'RI_TREE_LBL_REMOVE_NODE',
      iconCls: 'fa fa-trash'
    }
  ];

  /**
   * List of context menu items
   */
  public menuList: IContextMenu[] = [];

  public rootNodes$: Observable<IOuterNode[]>;

  protected currentSelectedNode: IOuterNode;

  protected subscription = new Subscription();

  public constructor(protected store: Store<ITreeState>,
                     protected dragAndDrop: DragAndDrop) {

  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngOnInit() {
    this.registerMove();

    this.rootNodes$ = this.treeModel.rootNodes$;

    this.subscription.add(
      this.treeModel.currentSelectedNode$
        .subscribe((node: IOuterNode) => this.currentSelectedNode = node)
    );
  }

  public ngOnChanges(data: any) {
    this.menuList = [];
    this.defaultOptions.forEach((item) => this.menuList.push(item));
  }

  public onAdd() {
    const parentId = this.currentSelectedNode ? this.currentSelectedNode.id : null;

    this.store.dispatch(new TreeInsertNodeAction({treeId: this.treeModel.treeId, parentId}));
  }

  /**
   * On select item from context menu
   *
   * @param name - name of the event
   * @param node - data item
   */
  public onContextMenuClick(name: string, node: IOuterNode) {

    switch (name) {
      case 'onEdit':
        event.stopPropagation();
        this.store.dispatch(new TreeEditNodeStartAction({node}));
        break;
      case 'onDelete':
        this.store.dispatch(new TreeDeleteNodeAction({treeId: this.treeModel.treeId, node}));
        break;
      default:
        console.warn('Unknown context menu action: ' + name);
    }
  }

  public trackByFn(item: IOuterNode): string {
    return item.id;
  }

  /**
   * Register data "move event"
   */
  protected registerMove(): void {
    if (this.treeModel.configuration.disableMoveNodes) {
      return;
    }

    this.dragAndDrop.drop$
      .pipe(
        filter((data: IDragAndDrop) => {
          if (data.type === DragAndDrop.DROP_DATA_TYPE) {
            if (data.dropNode) {
              return data.dropNode.data.treeId === this.treeModel.treeId;
            } else {
              return data.dragNode.data.treeId === this.treeModel.treeId;
            }
          } else {
            if (data.dropNode && data.dropNode.zones && data.dropNode.zones.indexOf(data.dragNode.zoneId) === -1) {
              return false;
            }

            return true;
          }
        })
      )
      .subscribe((data: IDragAndDrop) => {
        const dropNode = data.dropNode ? data.dropNode.data : null;
        this.store.dispatch(new TreeMoveNodeAction({
            sourceOfDroppedData: data.type,
            treeId: this.treeModel.treeId,
            oldNode: data.dragNode.data,
            node: dropNode
          }
        ));
      });
  }
}
