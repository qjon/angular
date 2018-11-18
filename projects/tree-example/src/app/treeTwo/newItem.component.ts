import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ItemComponent, TreeDeleteNodeAction, TreeEditNodeStartAction} from '@rign/angular2-tree';

@Component({
  selector: 'new-tree-item',
  templateUrl: './newItem.component.html',
  styleUrls: ['./newItem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewItemComponent extends ItemComponent {
  public onDelete($event: MouseEvent): void {
    this.store.dispatch(new TreeDeleteNodeAction({
      treeId: this.treeModel.treeId,
      node: this.node,
    }));
  }

  public onEdit($event: MouseEvent): void {
    this.store.dispatch(new TreeEditNodeStartAction({
      node: this.node,
    }));
  }
}
