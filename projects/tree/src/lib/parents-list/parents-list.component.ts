import {Component, Input, OnInit} from '@angular/core';
import {TreeModel} from '../models/TreeModel';
import {Observable} from 'rxjs';
import {IOuterNode} from '../interfaces/IOuterNode';
import {TreeSelectNodeAction} from '../store/treeActions.service';
import {ITreeState} from '../store/ITreeState';
import {Store} from '@ngrx/store';

@Component({
  selector: 'ri-tree-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.scss']
})
export class ParentsListComponent implements OnInit {
  @Input()
  public treeModel: TreeModel;

  public parents$: Observable<IOuterNode[]>;

  public constructor(protected store: Store<ITreeState>) {

  }

  public ngOnInit(): void {
    this.parents$ = this.treeModel.getParentsList();
  }

  public selectNode(node: IOuterNode, isCurrentSelectedNode: boolean): void {
    if (!isCurrentSelectedNode) {
      this.store.dispatch(new TreeSelectNodeAction({
        treeId: this.treeModel.treeId,
        node,
      }));
    }
  }

}
