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
var ItemComponent = /** @class */ (function () {
    function ItemComponent(contextMenuService, actions$, store, cdr) {
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
    Object.defineProperty(ItemComponent.prototype, "node", {
        get: /**
         * @return {?}
         */
        function () {
            return this._node;
        },
        /**
         * Node instance
         */
        set: /**
         * Node instance
         * @param {?} node
         * @return {?}
         */
        function (node) {
            this._node = node;
            this.initEditModeIfNeeded(node);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} values
     * @return {?}
     */
    ItemComponent.prototype.ngOnChanges = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        // if node is added to the tree then some part of nodes is moving down
        // and the new one is inserted, then all sub nodes should be rewritten
        /** @type {?} */
        var node = values.node;
        if (node && !node.firstChange && node.previousValue.id !== node.currentValue.id) {
            this.children$ = this.getChildren();
        }
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.children$ = this.getChildren();
        this.subscribeForOnEdit();
        this.subscription.add(this.store
            .pipe(select(previouslySelectedNodeSelector(this.node.treeId)), filter(function (previouslySelected) { return previouslySelected === _this.node.id; }))
            .subscribe(function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * Collapse node
     */
    /**
     * Collapse node
     * @return {?}
     */
    ItemComponent.prototype.collapse = /**
     * Collapse node
     * @return {?}
     */
    function () {
        this.store.dispatch(new TreeCollapseNodeAction({
            treeId: this.treeModel.treeId,
            id: this.node.id,
        }));
    };
    /**
     * Expand node
     */
    /**
     * Expand node
     * @return {?}
     */
    ItemComponent.prototype.expand = /**
     * Expand node
     * @return {?}
     */
    function () {
        this.store.dispatch(new TreeExpandNodeAction({ treeId: this.treeModel.treeId, id: this.node.id }));
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        if (this.isStartSave) {
            this.isStartSave = false;
        }
        else {
            this.undoChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (event.keyCode === 27) {
            this.undoChanges();
        }
        else if (event.keyCode === 13) {
            this.isStartSave = true;
            /** @type {?} */
            var node = {
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
                node: node,
            }));
            this.isEditMode = false;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ItemComponent.prototype.onContextMenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.treeModel.configuration.disableContextMenu) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: $event,
                item: this.node
            });
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.onSelect = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemComponent.prototype.trackByFn = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.id;
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.getChildren = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.treeModel.getChildren(this.node.id);
    };
    /**
     * @protected
     * @param {?} node
     * @return {?}
     */
    ItemComponent.prototype.initEditModeIfNeeded = /**
     * @protected
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!node) {
            return;
        }
        this.isEditMode = node.id === NEW_NODE_ID;
        if (this.isEditMode) {
            this.nameField.setValue('');
            this.setFocus();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.isNewNode = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.node.id === NEW_NODE_ID;
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.setFocus = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.input.nativeElement.focus(); }, 0);
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.subscribeForOnEdit = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.actions$
            .ofType(TreeActionTypes.TREE_EDIT_NODE_START)
            .pipe(filter(function (action) { return action.payload.node === _this.node; }))
            .subscribe(function (action) {
            _this.nameField.setValue(_this.node.name);
            _this.isEditMode = true;
            _this.cdr.markForCheck();
            _this.setFocus();
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    ItemComponent.prototype.undoChanges = /**
     * @protected
     * @return {?}
     */
    function () {
        this.isEditMode = false;
        if (this.isNewNode()) {
            this.store.dispatch(new TreeDeleteNodeAction({
                treeId: this.treeModel.treeId,
                node: this.node,
            }));
        }
    };
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
    ItemComponent.ctorParameters = function () { return [
        { type: ContextMenuService },
        { type: Actions },
        { type: Store },
        { type: ChangeDetectorRef }
    ]; };
    ItemComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['inputElement',] }],
        node: [{ type: Input }],
        treeModel: [{ type: Input }],
        contextMenu: [{ type: Input }],
        isExpanded: [{ type: Input }],
        isSelected: [{ type: Input }]
    };
    return ItemComponent;
}());
export { ItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBSUwsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLG9CQUFvQixFQUFFLGtCQUFrQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxFQUNMLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBRXBCLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3JCLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRSxPQUFPLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUMsV0FBVyxFQUFFLDhCQUE4QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakYsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxLQUFLLEVBQWMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBR3JELE1BQU0sVUFBVSxNQUFNO0lBQ3BCLE9BQU8sT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN2QixLQUFLLENBQUMsR0FBRyxF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Szs4QkFHTCxLQUFLOzZCQUdMLEtBQUs7NkJBR0wsS0FBSzs7SUF5TFIsb0JBQUM7Q0FBQSxBQTlORCxJQThOQztTQXROWSxhQUFhOzs7Ozs7SUFJeEIsOEJBQXNDOztJQWdCdEMsa0NBQzRCOztJQUU1QixvQ0FDeUM7O0lBRXpDLG1DQUMwQjs7SUFFMUIsbUNBQzBCOzs7OztJQUsxQixrQ0FBcUM7O0lBRXJDLG1DQUEwQjs7SUFFMUIsa0NBQXFEOzs7OztJQUVyRCxvQ0FBOEI7Ozs7O0lBRTlCLHFDQUE0Qzs7Ozs7SUFFNUMsOEJBQTRCOzs7OztJQUVULDJDQUFnRDs7Ozs7SUFDaEQsaUNBQTJCOzs7OztJQUMzQiw4QkFBa0M7Ozs7O0lBQ2xDLDRCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29udGV4dE1lbnVDb21wb25lbnQsIENvbnRleHRNZW51U2VydmljZX0gZnJvbSAnbmd4LWNvbnRleHRtZW51JztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7XG4gIFRyZWVBY3Rpb25UeXBlcyxcbiAgVHJlZUNvbGxhcHNlTm9kZUFjdGlvbixcbiAgVHJlZURlbGV0ZU5vZGVBY3Rpb24sXG4gIFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uLFxuICBUcmVlRXhwYW5kTm9kZUFjdGlvbixcbiAgVHJlZVNhdmVOb2RlQWN0aW9uLFxuICBUcmVlU2VsZWN0Tm9kZUFjdGlvblxufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuLi9tb2RlbHMvVHJlZU1vZGVsJztcbmltcG9ydCB7QWN0aW9uc30gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0FuaW1hdGlvblRyaWdnZXJNZXRhZGF0YX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucy9zcmMvYW5pbWF0aW9uX21ldGFkYXRhJztcbmltcG9ydCB7c2VsZWN0LCBTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICcuLi9zdG9yZS9JVHJlZVN0YXRlJztcbmltcG9ydCB7TkVXX05PREVfSUQsIHByZXZpb3VzbHlTZWxlY3RlZE5vZGVTZWxlY3Rvcn0gZnJvbSAnLi4vc3RvcmUvdHJlZVJlZHVjZXInO1xuaW1wb3J0IHtmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7ZW1wdHksIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZCgpOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcignZXhwYW5kJywgW1xuICAgIHN0YXRlKCcqJywgc3R5bGUoeydvdmVyZmxvdy15JzogJ2hpZGRlbid9KSksXG4gICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7J292ZXJmbG93LXknOiAnaGlkZGVuJ30pKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICBzdHlsZSh7aGVpZ2h0OiAnKid9KSxcbiAgICAgIGFuaW1hdGUoMzAwLCBzdHlsZSh7aGVpZ2h0OiAwfSkpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoe2hlaWdodDogJzAnfSksXG4gICAgICBhbmltYXRlKDMwMCwgc3R5bGUoe2hlaWdodDogJyonfSkpXG4gICAgXSlcbiAgXSk7XG59XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ3JpLXRyZWUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaXRlbS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW2V4cGFuZCgpXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBJbnB1dCBmaWVsZCB3aGVyZSB3ZSBjYW4gY2hhbmdlIGRhdGEgbmFtZVxuICAgKi9cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXQ6IGFueTtcblxuICAvKipcbiAgICogTm9kZSBpbnN0YW5jZVxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBub2RlKG5vZGU6IElPdXRlck5vZGUpIHtcbiAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgIHRoaXMuaW5pdEVkaXRNb2RlSWZOZWVkZWQobm9kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5vZGUoKTogSU91dGVyTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbnRleHRNZW51OiBDb250ZXh0TWVudUNvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNFeHBhbmRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEZvcm0gZmllbGQgdG8gY2hhbmdlIGRhdGEgbmFtZVxuICAgKi9cbiAgcHVibGljIG5hbWVGaWVsZCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIHB1YmxpYyBpc0VkaXRNb2RlID0gZmFsc2U7XG5cbiAgcHVibGljIGNoaWxkcmVuJDogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+ID0gZW1wdHkoKTtcblxuICBwcm90ZWN0ZWQgaXNTdGFydFNhdmUgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHByb3RlY3RlZCBfbm9kZTogSU91dGVyTm9kZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbnRleHRNZW51U2VydmljZTogQ29udGV4dE1lbnVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXModmFsdWVzKTogdm9pZCB7XG4gICAgLy8gaWYgbm9kZSBpcyBhZGRlZCB0byB0aGUgdHJlZSB0aGVuIHNvbWUgcGFydCBvZiBub2RlcyBpcyBtb3ZpbmcgZG93blxuICAgIC8vIGFuZCB0aGUgbmV3IG9uZSBpcyBpbnNlcnRlZCwgdGhlbiBhbGwgc3ViIG5vZGVzIHNob3VsZCBiZSByZXdyaXR0ZW5cbiAgICBjb25zdCBub2RlID0gdmFsdWVzLm5vZGU7XG5cbiAgICBpZiAobm9kZSAmJiAhbm9kZS5maXJzdENoYW5nZSAmJiBub2RlLnByZXZpb3VzVmFsdWUuaWQgIT09IG5vZGUuY3VycmVudFZhbHVlLmlkKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuJCA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoaWxkcmVuJCA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlRm9yT25FZGl0KCk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnN0b3JlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNlbGVjdChwcmV2aW91c2x5U2VsZWN0ZWROb2RlU2VsZWN0b3IodGhpcy5ub2RlLnRyZWVJZCkpLFxuICAgICAgICAgIGZpbHRlcigocHJldmlvdXNseVNlbGVjdGVkOiBzdHJpbmcpID0+IHByZXZpb3VzbHlTZWxlY3RlZCA9PT0gdGhpcy5ub2RlLmlkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsYXBzZSBub2RlXG4gICAqL1xuICBwdWJsaWMgY29sbGFwc2UoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZUNvbGxhcHNlTm9kZUFjdGlvbih7XG4gICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgIGlkOiB0aGlzLm5vZGUuaWQsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZCBub2RlXG4gICAqL1xuICBwdWJsaWMgZXhwYW5kKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVFeHBhbmROb2RlQWN0aW9uKHt0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCwgaWQ6IHRoaXMubm9kZS5pZH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuaXNTdGFydFNhdmUpIHtcbiAgICAgIHRoaXMuaXNTdGFydFNhdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmRvQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLnVuZG9DaGFuZ2VzKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5pc1N0YXJ0U2F2ZSA9IHRydWU7XG4gICAgICBjb25zdCBub2RlOiBJT3V0ZXJOb2RlID0ge1xuICAgICAgICBpZDogdGhpcy5ub2RlLmlkLFxuICAgICAgICB0cmVlSWQ6IHRoaXMubm9kZS50cmVlSWQsXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZUZpZWxkLnZhbHVlLFxuICAgICAgICBwYXJlbnRJZDogdGhpcy5ub2RlLnBhcmVudElkLFxuICAgICAgICBjaGlsZHJlbjogdGhpcy5ub2RlLmNoaWxkcmVuLFxuICAgICAgICBwYXJlbnRzOiB0aGlzLm5vZGUucGFyZW50cyxcbiAgICAgICAgaXNFeHBhbmRlZDogZmFsc2VcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVTYXZlTm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlLFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5pc0VkaXRNb2RlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ29udGV4dE1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnRyZWVNb2RlbC5jb25maWd1cmF0aW9uLmRpc2FibGVDb250ZXh0TWVudSkge1xuICAgICAgdGhpcy5jb250ZXh0TWVudVNlcnZpY2Uuc2hvdy5uZXh0KHtcbiAgICAgICAgY29udGV4dE1lbnU6IHRoaXMuY29udGV4dE1lbnUsXG4gICAgICAgIGV2ZW50OiAkZXZlbnQsXG4gICAgICAgIGl0ZW06IHRoaXMubm9kZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0KCkge1xuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVTZWxlY3ROb2RlQWN0aW9uKHtcbiAgICAgICAgdHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsXG4gICAgICAgIG5vZGU6IG51bGwsXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVTZWxlY3ROb2RlQWN0aW9uKHtcbiAgICAgICAgdHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsXG4gICAgICAgIG5vZGU6IHRoaXMubm9kZSxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdHJhY2tCeUZuKGl0ZW06IElPdXRlck5vZGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBpdGVtLmlkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENoaWxkcmVuKCk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsLmdldENoaWxkcmVuKHRoaXMubm9kZS5pZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdEVkaXRNb2RlSWZOZWVkZWQobm9kZTogSU91dGVyTm9kZSkge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNFZGl0TW9kZSA9IG5vZGUuaWQgPT09IE5FV19OT0RFX0lEO1xuXG4gICAgaWYgKHRoaXMuaXNFZGl0TW9kZSkge1xuICAgICAgdGhpcy5uYW1lRmllbGQuc2V0VmFsdWUoJycpO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpc05ld05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5pZCA9PT0gTkVXX05PREVfSUQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Rm9jdXMoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlRm9yT25FZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuYWN0aW9ucyRcbiAgICAgICAgLm9mVHlwZShUcmVlQWN0aW9uVHlwZXMuVFJFRV9FRElUX05PREVfU1RBUlQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoYWN0aW9uOiBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQubm9kZSA9PT0gdGhpcy5ub2RlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogVHJlZUVkaXROb2RlU3RhcnRBY3Rpb24pID0+IHtcbiAgICAgICAgICB0aGlzLm5hbWVGaWVsZC5zZXRWYWx1ZSh0aGlzLm5vZGUubmFtZSk7XG4gICAgICAgICAgdGhpcy5pc0VkaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1bmRvQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmlzTmV3Tm9kZSgpKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlRGVsZXRlTm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlOiB0aGlzLm5vZGUsXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG59XG4iXX0=