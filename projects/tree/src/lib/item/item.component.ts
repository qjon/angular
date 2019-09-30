import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ContextMenuComponent, ContextMenuService} from 'ngx-contextmenu';
import {IOuterNode} from '../interfaces/IOuterNode';
import {
  TreeActionTypes,
  TreeCollapseNodeAction,
  TreeDeleteNodeAction,
  TreeEditNodeStartAction,
  TreeExpandNodeAction,
  TreeSaveNodeAction,
  TreeSelectNodeAction
} from '../store/treeActions.service';
import {TreeModel} from '../models/TreeModel';
import {Actions} from '@ngrx/effects';
import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';
import {select, Store} from '@ngrx/store';
import {ITreeState} from '../store/ITreeState';
import {NEW_NODE_ID, previouslySelectedNodeSelector} from '../store/treeReducer';
import {filter} from 'rxjs/operators';
import {empty, Observable, Subscription} from 'rxjs';


export function expand(): AnimationTriggerMetadata {
  return trigger('expand', [
    state('*', style({'overflow-y': 'hidden'})),
    state('void', style({'overflow-y': 'hidden'})),
    transition('* => void', [
      style({height: '*'}),
      animate(300, style({height: 0}))
    ]),
    transition('void => *', [
      style({height: '0'}),
      animate(300, style({height: '*'}))
    ])
  ]);
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ri-tree-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expand()]
})
export class ItemComponent implements OnInit, OnDestroy, OnChanges {
  /**
   * Input field where we can change data name
   */
  @ViewChild('inputElement', {static: false}) input: any;

  /**
   * Node instance
   */
  @Input()
  public set node(node: IOuterNode) {
    this._node = node;

    this.initEditModeIfNeeded(node);
  }

  public get node(): IOuterNode {
    return this._node;
  }

  @Input()
  public treeModel: TreeModel;

  @Input()
  public contextMenu: ContextMenuComponent;

  @Input()
  public isExpanded = false;

  @Input()
  public isSelected = false;

  /**
   * Form field to change data name
   */
  public nameField = new FormControl();

  public isEditMode = false;

  public children$: Observable<IOuterNode[]> = empty();

  protected isStartSave = false;

  protected subscription = new Subscription();

  protected _node: IOuterNode;

  public constructor(protected contextMenuService: ContextMenuService,
                     protected actions$: Actions,
                     protected store: Store<ITreeState>,
                     protected cdr: ChangeDetectorRef) {
  }

  public ngOnChanges(values): void {
    // if node is added to the tree then some part of nodes is moving down
    // and the new one is inserted, then all sub nodes should be rewritten
    const node = values.node;

    if (node && !node.firstChange && node.previousValue.id !== node.currentValue.id) {
      this.children$ = this.getChildren();
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngOnInit() {
    this.children$ = this.getChildren();

    this.subscribeForOnEdit();

    this.subscription.add(
      this.store
        .pipe(
          select(previouslySelectedNodeSelector(this.node.treeId)),
          filter((previouslySelected: string) => previouslySelected === this.node.id)
        )
        .subscribe(() => this.cdr.markForCheck())
    );
  }

  /**
   * Collapse node
   */
  public collapse(): void {
    this.store.dispatch(new TreeCollapseNodeAction({
      treeId: this.treeModel.treeId,
      id: this.node.id,
    }));
  }

  /**
   * Expand node
   */
  public expand(): void {
    this.store.dispatch(new TreeExpandNodeAction({treeId: this.treeModel.treeId, id: this.node.id}));
  }

  public onBlur() {
    if (this.isStartSave) {
      this.isStartSave = false;
    } else {
      this.undoChanges();
    }
  }

  public onChange(event: KeyboardEvent) {
    event.stopPropagation();

    if (event.keyCode === 27) {
      this.undoChanges();
    } else if (event.keyCode === 13) {
      this.isStartSave = true;
      const node: IOuterNode = {
        id: this.node.id,
        treeId: this.node.treeId,
        name: this.nameField.value,
        parentId: this.node.parentId,
        children: this.node.children,
        parents: this.node.parents,
        isExpanded: false
      };

      this.store.dispatch(new TreeSaveNodeAction({
        treeId: this.treeModel.treeId,
        node,
      }));
      this.isEditMode = false;
    }
  }

  public onContextMenu($event: MouseEvent) {
    if (!this.treeModel.configuration.disableContextMenu) {
      this.contextMenuService.show.next({
        contextMenu: this.contextMenu,
        event: $event,
        item: this.node
      });
    }

    $event.preventDefault();
    $event.stopPropagation();
  }

  public onSelect() {
    if (this.isSelected) {
      this.store.dispatch(new TreeSelectNodeAction({
        treeId: this.treeModel.treeId,
        node: null,
      }));
    } else {
      this.store.dispatch(new TreeSelectNodeAction({
        treeId: this.treeModel.treeId,
        node: this.node,
      }));
    }
  }

  public trackByFn(item: IOuterNode): string {
    return item.id;
  }

  protected getChildren(): Observable<IOuterNode[]> {
    return this.treeModel.getChildren(this.node.id);
  }

  protected initEditModeIfNeeded(node: IOuterNode) {
    if (!node) {
      return;
    }

    this.isEditMode = node.id === NEW_NODE_ID;

    if (this.isEditMode) {
      this.nameField.setValue('');
      this.setFocus();
    }
  }

  protected isNewNode() {
    return this.node.id === NEW_NODE_ID;
  }

  protected setFocus() {
    setTimeout(() => this.input.nativeElement.focus(), 0);
  }

  protected subscribeForOnEdit(): void {
    this.subscription.add(
      this.actions$
        .ofType(TreeActionTypes.TREE_EDIT_NODE_START)
        .pipe(
          filter((action: TreeEditNodeStartAction) => action.payload.node === this.node)
        )
        .subscribe((action: TreeEditNodeStartAction) => {
          this.nameField.setValue(this.node.name);
          this.isEditMode = true;
          this.cdr.markForCheck();
          this.setFocus();
        })
    );
  }

  protected undoChanges() {
    this.isEditMode = false;

    if (this.isNewNode()) {
      this.store.dispatch(new TreeDeleteNodeAction({
        treeId: this.treeModel.treeId,
        node: this.node,
      }));
    }
  }
}
