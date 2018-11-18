/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContextMenuComponent, ContextMenuService } from 'ngx-contextmenu';
import { TreeActionTypes, TreeCollapseNodeAction, TreeDeleteNodeAction, TreeExpandNodeAction, TreeSaveNodeAction, TreeSelectNodeAction } from '../store/treeActions.service';
import { TreeModel } from '../models/TreeModel';
import { Actions } from '@ngrx/effects';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { select, Store } from '@ngrx/store';
import { NEW_NODE_ID, previouslySelectedNodeSelector } from '../store/treeReducer';
import { filter } from 'rxjs/operators';
import { empty, Subscription } from 'rxjs';
/**
 * @return {?}
 */
export function expand() {
    return trigger('expand', [
        state('*', style({ 'overflow-y': 'hidden' })),
        state('void', style({ 'overflow-y': 'hidden' })),
        transition('* => void', [
            style({ height: '*' }),
            animate(300, style({ height: 0 }))
        ]),
        transition('void => *', [
            style({ height: '0' }),
            animate(300, style({ height: '*' }))
        ])
    ]);
}
export class ItemComponent {
    /**
     * @param {?} contextMenuService
     * @param {?} actions$
     * @param {?} store
     * @param {?} cdr
     */
    constructor(contextMenuService, actions$, store, cdr) {
        this.contextMenuService = contextMenuService;
        this.actions$ = actions$;
        this.store = store;
        this.cdr = cdr;
        this.isExpanded = false;
        this.isSelected = false;
        /**
         * Form field to change data name
         */
        this.nameField = new FormControl();
        this.isEditMode = false;
        this.children$ = empty();
        this.isStartSave = false;
        this.subscription = new Subscription();
    }
    /**
     * Node instance
     * @param {?} node
     * @return {?}
     */
    set node(node) {
        this._node = node;
        this.initEditModeIfNeeded(node);
    }
    /**
     * @return {?}
     */
    get node() {
        return this._node;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    ngOnChanges(values) {
        // if node is added to the tree then some part of nodes is moving down
        // and the new one is inserted, then all sub nodes should be rewritten
        /** @type {?} */
        const node = values.node;
        if (node && !node.firstChange && node.previousValue.id !== node.currentValue.id) {
            this.children$ = this.getChildren();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.children$ = this.getChildren();
        this.subscribeForOnEdit();
        this.subscription.add(this.store
            .pipe(select(previouslySelectedNodeSelector(this.node.treeId)), filter((previouslySelected) => previouslySelected === this.node.id))
            .subscribe(() => this.cdr.markForCheck()));
    }
    /**
     * Collapse node
     * @return {?}
     */
    collapse() {
        this.store.dispatch(new TreeCollapseNodeAction({
            treeId: this.treeModel.treeId,
            id: this.node.id,
        }));
    }
    /**
     * Expand node
     * @return {?}
     */
    expand() {
        this.store.dispatch(new TreeExpandNodeAction({ treeId: this.treeModel.treeId, id: this.node.id }));
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this.isStartSave) {
            this.isStartSave = false;
        }
        else {
            this.undoChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        event.stopPropagation();
        if (event.keyCode === 27) {
            this.undoChanges();
        }
        else if (event.keyCode === 13) {
            this.isStartSave = true;
            /** @type {?} */
            const node = {
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
    /**
     * @param {?} $event
     * @return {?}
     */
    onContextMenu($event) {
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
    /**
     * @return {?}
     */
    onSelect() {
        if (this.isSelected) {
            this.store.dispatch(new TreeSelectNodeAction({
                treeId: this.treeModel.treeId,
                node: null,
            }));
        }
        else {
            this.store.dispatch(new TreeSelectNodeAction({
                treeId: this.treeModel.treeId,
                node: this.node,
            }));
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    trackByFn(item) {
        return item.id;
    }
    /**
     * @protected
     * @return {?}
     */
    getChildren() {
        return this.treeModel.getChildren(this.node.id);
    }
    /**
     * @protected
     * @param {?} node
     * @return {?}
     */
    initEditModeIfNeeded(node) {
        if (!node) {
            return;
        }
        this.isEditMode = node.id === NEW_NODE_ID;
        if (this.isEditMode) {
            this.nameField.setValue('');
            this.setFocus();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    isNewNode() {
        return this.node.id === NEW_NODE_ID;
    }
    /**
     * @protected
     * @return {?}
     */
    setFocus() {
        setTimeout(() => this.input.nativeElement.focus(), 0);
    }
    /**
     * @protected
     * @return {?}
     */
    subscribeForOnEdit() {
        this.subscription.add(this.actions$
            .ofType(TreeActionTypes.TREE_EDIT_NODE_START)
            .pipe(filter((action) => action.payload.node === this.node))
            .subscribe((action) => {
            this.nameField.setValue(this.node.name);
            this.isEditMode = true;
            this.cdr.markForCheck();
            this.setFocus();
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    undoChanges() {
        this.isEditMode = false;
        if (this.isNewNode()) {
            this.store.dispatch(new TreeDeleteNodeAction({
                treeId: this.treeModel.treeId,
                node: this.node,
            }));
        }
    }
}
ItemComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'ri-tree-item',
                template: "<div class=\"tree-item\"\n     [ngClass]=\"{'tree-item-selected': isSelected && !treeModel.wasPreviouslySelected(node.id)}\"\n     (contextmenu)=\"onContextMenu($event)\"\n     riDroppable\n     riDraggable\n     [dragZone]=\"treeModel.configuration.dragZone\"\n     [dropConfig]=\"{dropAllowedCssClass: 'drop-allowed', dropZone: treeModel.configuration.dropZone}\"\n     [data]=\"node\"\n     id=\"node-{{node.id}}\"\n>\n  <i *ngIf=\"!isExpanded\" (click)=\"expand()\" class=\"fa fa-caret-right pointer\"></i>\n  <i *ngIf=\"isExpanded\" (click)=\"collapse()\" class=\"fa fa-caret-down pointer\"></i>\n  <span *ngIf=\"!isEditMode\" class=\"tree-item-name\" (click)=\"onSelect()\">{{node.name}}</span>\n  <form name=\"form\">\n    <input #inputElement type=\"text\" class=\"form-control\" *ngIf=\"isEditMode\" [formControl]=\"nameField\"\n           name=\"name\" (keydown)=\"onChange($event)\" (blur)=\"onBlur()\"/>\n  </form>\n</div>\n<div class=\"tree\" *ngIf=\"isExpanded\" [@expand]>\n  <ri-tree-item *ngFor=\"let child of children$ | async; trackBy: trackByFn\"\n                [node]=\"child\"\n                [treeModel]=\"treeModel\"\n                [isExpanded]=\"treeModel.isExpanded(child)\"\n                [isSelected]=\"treeModel.isSelected(child)\"\n                [contextMenu]=\"contextMenu\"></ri-tree-item>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [expand()],
                styles: [""]
            }] }
];
/** @nocollapse */
ItemComponent.ctorParameters = () => [
    { type: ContextMenuService },
    { type: Actions },
    { type: Store },
    { type: ChangeDetectorRef }
];
ItemComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['inputElement',] }],
    node: [{ type: Input }],
    treeModel: [{ type: Input }],
    contextMenu: [{ type: Input }],
    isExpanded: [{ type: Input }],
    isSelected: [{ type: Input }]
};
if (false) {
    /**
     * Input field where we can change data name
     * @type {?}
     */
    ItemComponent.prototype.input;
    /** @type {?} */
    ItemComponent.prototype.treeModel;
    /** @type {?} */
    ItemComponent.prototype.contextMenu;
    /** @type {?} */
    ItemComponent.prototype.isExpanded;
    /** @type {?} */
    ItemComponent.prototype.isSelected;
    /**
     * Form field to change data name
     * @type {?}
     */
    ItemComponent.prototype.nameField;
    /** @type {?} */
    ItemComponent.prototype.isEditMode;
    /** @type {?} */
    ItemComponent.prototype.children$;
    /**
     * @type {?}
     * @protected
     */
    ItemComponent.prototype.isStartSave;
    /**
     * @type {?}
     * @protected
     */
    ItemComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    ItemComponent.prototype._node;
    /**
     * @type {?}
     * @protected
     */
    ItemComponent.prototype.contextMenuService;
    /**
     * @type {?}
     * @protected
     */
    ItemComponent.prototype.actions$;
    /**
     * @type {?}
     * @protected
     */
    ItemComponent.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    ItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBSUwsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLG9CQUFvQixFQUFFLGtCQUFrQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxFQUNMLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBRXBCLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3JCLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRSxPQUFPLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUMsV0FBVyxFQUFFLDhCQUE4QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakYsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxLQUFLLEVBQWMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBR3JELE1BQU0sVUFBVSxNQUFNO0lBQ3BCLE9BQU8sT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN2QixLQUFLLENBQUMsR0FBRyxF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O0lBQ2hELGlDQUEyQjs7Ozs7SUFDM0IsOEJBQWtDOzs7OztJQUNsQyw0QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbnRleHRNZW51Q29tcG9uZW50LCBDb250ZXh0TWVudVNlcnZpY2V9IGZyb20gJ25neC1jb250ZXh0bWVudSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge1xuICBUcmVlQWN0aW9uVHlwZXMsXG4gIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24sXG4gIFRyZWVEZWxldGVOb2RlQWN0aW9uLFxuICBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbixcbiAgVHJlZUV4cGFuZE5vZGVBY3Rpb24sXG4gIFRyZWVTYXZlTm9kZUFjdGlvbixcbiAgVHJlZVNlbGVjdE5vZGVBY3Rpb25cbn0gZnJvbSAnLi4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge0FjdGlvbnN9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGF9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvc3JjL2FuaW1hdGlvbl9tZXRhZGF0YSc7XG5pbXBvcnQge3NlbGVjdCwgU3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SVRyZWVTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge05FV19OT0RFX0lELCBwcmV2aW91c2x5U2VsZWN0ZWROb2RlU2VsZWN0b3J9IGZyb20gJy4uL3N0b3JlL3RyZWVSZWR1Y2VyJztcbmltcG9ydCB7ZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2VtcHR5LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmQoKTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIHtcbiAgcmV0dXJuIHRyaWdnZXIoJ2V4cGFuZCcsIFtcbiAgICBzdGF0ZSgnKicsIHN0eWxlKHsnb3ZlcmZsb3cteSc6ICdoaWRkZW4nfSkpLFxuICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeydvdmVyZmxvdy15JzogJ2hpZGRlbid9KSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgc3R5bGUoe2hlaWdodDogJyonfSksXG4gICAgICBhbmltYXRlKDMwMCwgc3R5bGUoe2hlaWdodDogMH0pKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHtoZWlnaHQ6ICcwJ30pLFxuICAgICAgYW5pbWF0ZSgzMDAsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKVxuICAgIF0pXG4gIF0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdyaS10cmVlLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtleHBhbmQoKV1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogSW5wdXQgZmllbGQgd2hlcmUgd2UgY2FuIGNoYW5nZSBkYXRhIG5hbWVcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0OiBhbnk7XG5cbiAgLyoqXG4gICAqIE5vZGUgaW5zdGFuY2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbm9kZShub2RlOiBJT3V0ZXJOb2RlKSB7XG4gICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICB0aGlzLmluaXRFZGl0TW9kZUlmTmVlZGVkKG5vZGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBub2RlKCk6IElPdXRlck5vZGUge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb250ZXh0TWVudTogQ29udGV4dE1lbnVDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzRXhwYW5kZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBGb3JtIGZpZWxkIHRvIGNoYW5nZSBkYXRhIG5hbWVcbiAgICovXG4gIHB1YmxpYyBuYW1lRmllbGQgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBwdWJsaWMgaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjaGlsZHJlbiQ6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiA9IGVtcHR5KCk7XG5cbiAgcHJvdGVjdGVkIGlzU3RhcnRTYXZlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcm90ZWN0ZWQgX25vZGU6IElPdXRlck5vZGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb250ZXh0TWVudVNlcnZpY2U6IENvbnRleHRNZW51U2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKHZhbHVlcyk6IHZvaWQge1xuICAgIC8vIGlmIG5vZGUgaXMgYWRkZWQgdG8gdGhlIHRyZWUgdGhlbiBzb21lIHBhcnQgb2Ygbm9kZXMgaXMgbW92aW5nIGRvd25cbiAgICAvLyBhbmQgdGhlIG5ldyBvbmUgaXMgaW5zZXJ0ZWQsIHRoZW4gYWxsIHN1YiBub2RlcyBzaG91bGQgYmUgcmV3cml0dGVuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlcy5ub2RlO1xuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZmlyc3RDaGFuZ2UgJiYgbm9kZS5wcmV2aW91c1ZhbHVlLmlkICE9PSBub2RlLmN1cnJlbnRWYWx1ZS5pZCkge1xuICAgICAgdGhpcy5jaGlsZHJlbiQgPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiQgPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUZvck9uRWRpdCgpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zdG9yZVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzZWxlY3QocHJldmlvdXNseVNlbGVjdGVkTm9kZVNlbGVjdG9yKHRoaXMubm9kZS50cmVlSWQpKSxcbiAgICAgICAgICBmaWx0ZXIoKHByZXZpb3VzbHlTZWxlY3RlZDogc3RyaW5nKSA9PiBwcmV2aW91c2x5U2VsZWN0ZWQgPT09IHRoaXMubm9kZS5pZClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGFwc2Ugbm9kZVxuICAgKi9cbiAgcHVibGljIGNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24oe1xuICAgICAgdHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsXG4gICAgICBpZDogdGhpcy5ub2RlLmlkLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmQgbm9kZVxuICAgKi9cbiAgcHVibGljIGV4cGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlRXhwYW5kTm9kZUFjdGlvbih7dHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsIGlkOiB0aGlzLm5vZGUuaWR9KSk7XG4gIH1cblxuICBwdWJsaWMgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLmlzU3RhcnRTYXZlKSB7XG4gICAgICB0aGlzLmlzU3RhcnRTYXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5kb0NoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy51bmRvQ2hhbmdlcygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuaXNTdGFydFNhdmUgPSB0cnVlO1xuICAgICAgY29uc3Qgbm9kZTogSU91dGVyTm9kZSA9IHtcbiAgICAgICAgaWQ6IHRoaXMubm9kZS5pZCxcbiAgICAgICAgdHJlZUlkOiB0aGlzLm5vZGUudHJlZUlkLFxuICAgICAgICBuYW1lOiB0aGlzLm5hbWVGaWVsZC52YWx1ZSxcbiAgICAgICAgcGFyZW50SWQ6IHRoaXMubm9kZS5wYXJlbnRJZCxcbiAgICAgICAgY2hpbGRyZW46IHRoaXMubm9kZS5jaGlsZHJlbixcbiAgICAgICAgcGFyZW50czogdGhpcy5ub2RlLnBhcmVudHMsXG4gICAgICAgIGlzRXhwYW5kZWQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2F2ZU5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZSxcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KCRldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy50cmVlTW9kZWwuY29uZmlndXJhdGlvbi5kaXNhYmxlQ29udGV4dE1lbnUpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVTZXJ2aWNlLnNob3cubmV4dCh7XG4gICAgICAgIGNvbnRleHRNZW51OiB0aGlzLmNvbnRleHRNZW51LFxuICAgICAgICBldmVudDogJGV2ZW50LFxuICAgICAgICBpdGVtOiB0aGlzLm5vZGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlOiBudWxsLFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlOiB0aGlzLm5vZGUsXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrQnlGbihpdGVtOiBJT3V0ZXJOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDaGlsZHJlbigpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbC5nZXRDaGlsZHJlbih0aGlzLm5vZGUuaWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRFZGl0TW9kZUlmTmVlZGVkKG5vZGU6IElPdXRlck5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzRWRpdE1vZGUgPSBub2RlLmlkID09PSBORVdfTk9ERV9JRDtcblxuICAgIGlmICh0aGlzLmlzRWRpdE1vZGUpIHtcbiAgICAgIHRoaXMubmFtZUZpZWxkLnNldFZhbHVlKCcnKTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNOZXdOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUuaWQgPT09IE5FV19OT0RFX0lEO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldEZvY3VzKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUZvck9uRWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAgIC5vZlR5cGUoVHJlZUFjdGlvblR5cGVzLlRSRUVfRURJVF9OT0RFX1NUQVJUKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZUVkaXROb2RlU3RhcnRBY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkLm5vZGUgPT09IHRoaXMubm9kZSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChhY3Rpb246IFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5uYW1lRmllbGQuc2V0VmFsdWUodGhpcy5ub2RlLm5hbWUpO1xuICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdW5kb0NoYW5nZXMoKSB7XG4gICAgdGhpcy5pc0VkaXRNb2RlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5pc05ld05vZGUoKSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZURlbGV0ZU5vZGVBY3Rpb24oe1xuICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgbm9kZTogdGhpcy5ub2RlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxufVxuIl19