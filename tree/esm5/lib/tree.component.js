/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeModel } from './models/TreeModel';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { DragAndDrop } from './dragAndDrop/dragAndDrop.service';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { TreeDeleteNodeAction, TreeEditNodeStartAction, TreeInsertNodeAction, TreeMoveNodeAction } from './store/treeActions.service';
import { Subscription } from 'rxjs';
var TreeComponent = /** @class */ (function () {
    function TreeComponent(store, dragAndDrop) {
        this.store = store;
        this.dragAndDrop = dragAndDrop;
        /**
         * List of default options for context menu
         */
        this.defaultOptions = [
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
        this.menuList = [];
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    TreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    TreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.registerMove();
        this.rootNodes$ = this.treeModel.rootNodes$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe(function (node) { return _this.currentSelectedNode = node; }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TreeComponent.prototype.ngOnChanges = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.menuList = [];
        this.defaultOptions.forEach(function (item) { return _this.menuList.push(item); });
    };
    /**
     * @return {?}
     */
    TreeComponent.prototype.onAdd = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parentId = this.currentSelectedNode ? this.currentSelectedNode.id : null;
        this.store.dispatch(new TreeInsertNodeAction({ treeId: this.treeModel.treeId, parentId: parentId }));
    };
    /**
     * On select item from context menu
     *
     * @param name - name of the event
     * @param node - data item
     */
    /**
     * On select item from context menu
     *
     * @param {?} name - name of the event
     * @param {?} node - data item
     * @return {?}
     */
    TreeComponent.prototype.onContextMenuClick = /**
     * On select item from context menu
     *
     * @param {?} name - name of the event
     * @param {?} node - data item
     * @return {?}
     */
    function (name, node) {
        switch (name) {
            case 'onEdit':
                event.stopPropagation();
                this.store.dispatch(new TreeEditNodeStartAction({ node: node }));
                break;
            case 'onDelete':
                this.store.dispatch(new TreeDeleteNodeAction({ treeId: this.treeModel.treeId, node: node }));
                break;
            default:
                console.warn('Unknown context menu action: ' + name);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TreeComponent.prototype.trackByFn = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.id;
    };
    /**
     * Register data "move event"
     */
    /**
     * Register data "move event"
     * @protected
     * @return {?}
     */
    TreeComponent.prototype.registerMove = /**
     * Register data "move event"
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.treeModel.configuration.disableMoveNodes) {
            return;
        }
        this.dragAndDrop.drop$
            .pipe(filter(function (data) {
            if (data.type === DragAndDrop.DROP_DATA_TYPE) {
                if (data.dropNode) {
                    return data.dropNode.data.treeId === _this.treeModel.treeId;
                }
                else {
                    return data.dragNode.data.treeId === _this.treeModel.treeId;
                }
            }
            else {
                if (data.dropNode && data.dropNode.zones && data.dropNode.zones.indexOf(data.dragNode.zoneId) === -1) {
                    return false;
                }
                return true;
            }
        }))
            .subscribe(function (data) {
            /** @type {?} */
            var dropNode = data.dropNode ? data.dropNode.data : null;
            _this.store.dispatch(new TreeMoveNodeAction({
                sourceOfDroppedData: data.type,
                treeId: _this.treeModel.treeId,
                oldNode: data.dragNode.data,
                node: dropNode
            }));
        });
    };
    TreeComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'ri-tree',
                    template: "<div class=\"tree\">\n  <button *ngIf=\"treeModel.configuration.showAddButton\" class=\"btn btn-dark add-node-button\" (click)=\"onAdd()\">\n    <i class=\"fa fa-plus\"></i> {{'RI_TREE_LBL_ADD_NODE' | translate}}\n  </button>\n  <!--@formatter:off-->\n  <div #customTemplate><ng-content></ng-content></div>\n  <!--@formatter:on-->\n  <div *ngIf=\"customTemplate.childNodes.length === 0\">\n    <ri-tree-item\n      class=\"root-node\"\n      *ngFor=\"let node of rootNodes$ | async; trackBy: trackByFn\"\n      [node]=\"node\"\n      [treeModel]=\"treeModel\"\n      [isSelected]=\"treeModel.isSelected(node)\"\n      [isExpanded]=\"treeModel.isExpanded(node)\"\n      [contextMenu]=\"contextMenu\"></ri-tree-item>\n  </div>\n  <ri-dropzone [treeModel]=\"treeModel\"></ri-dropzone>\n  <context-menu id=\"context-menu-{{treeModel.treeId}}\" #contextMenu>\n    <ng-template *ngFor=\"let menuItem of menuList\" contextMenuItem let-item\n                 (execute)=\"onContextMenuClick(menuItem.name, $event.item)\">\n      <span class=\"{{menuItem.iconCls}}\" style=\"width: 20px; display: inline-block;\"></span>\n      {{menuItem.text | translate}}\n    </ng-template>\n  </context-menu>\n</div>\n",
                    styles: [".tree{list-style-type:none;margin:0;padding-left:0;position:relative}.tree .dropdown{position:inherit}.tree .dropdown-menu{position:absolute!important}.tree .pointer{cursor:pointer}.tree .tree{margin-left:20px}.tree .tree-edit-btn,.tree .tree-remove-btn{display:none}.tree .tree-item{padding:2px 0}.tree .tree-item.drop-allowed .tree-item-name{background-color:rgba(255,0,0,.3)}.tree .tree-item.tree-item-selected>.tree-item-name{padding:0 1px;border:1px solid #4684ee;background-color:#549dee}.tree .tree-item i{text-align:center}.tree .tree-item .no-children{display:inline-block;width:8px}.tree .tree-item .tree-item-name{display:inline-block;line-height:22px;height:22px;padding:0 2px;cursor:pointer}.tree .tree-item .tree-item-name:hover{background-color:rgba(161,197,238,.2)}.tree .tree-item .tree-item-name:hover .tree-edit-btn,.tree .tree-item .tree-item-name:hover .tree-remove-btn,.tree .tree-item form{display:inline-block}.tree .tree-item form input{width:auto}"]
                }] }
    ];
    /** @nocollapse */
    TreeComponent.ctorParameters = function () { return [
        { type: Store },
        { type: DragAndDrop }
    ]; };
    TreeComponent.propDecorators = {
        treeModel: [{ type: Input }],
        contextMenu: [{ type: ViewChild, args: ['contextMenu',] }]
    };
    return TreeComponent;
}());
export { TreeComponent };
if (false) {
    /** @type {?} */
    TreeComponent.prototype.treeModel;
    /** @type {?} */
    TreeComponent.prototype.contextMenu;
    /**
     * List of default options for context menu
     * @type {?}
     * @private
     */
    TreeComponent.prototype.defaultOptions;
    /**
     * List of context menu items
     * @type {?}
     */
    TreeComponent.prototype.menuList;
    /** @type {?} */
    TreeComponent.prototype.rootNodes$;
    /**
     * @type {?}
     * @protected
     */
    TreeComponent.prototype.currentSelectedNode;
    /**
     * @type {?}
     * @protected
     */
    TreeComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    TreeComponent.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    TreeComponent.prototype.dragAndDrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBZ0MsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzNHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFOUQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUVsQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUNMLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNuQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBYSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFOUM7SUFzQ0UsdUJBQTZCLEtBQXdCLEVBQ3hCLFdBQXdCO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhOzs7O1FBekI3QyxtQkFBYyxHQUFtQjtZQUN2QztnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QixPQUFPLEVBQUUsWUFBWTthQUN0QjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixPQUFPLEVBQUUsYUFBYTthQUN2QjtTQUNGLENBQUM7Ozs7UUFLSyxhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQU0zQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENB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QTRDOzs7OztJQUU1Qyw0Q0FBMEM7Ozs7O0lBRTFDLHFDQUE0Qzs7Ozs7SUFFekIsOEJBQWtDOzs7OztJQUNsQyxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0lDb250ZXh0TWVudX0gZnJvbSAnLi9pbnRlcmZhY2VzL0lDb250ZXh0TWVudSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi9tb2RlbHMvVHJlZU1vZGVsJztcbmltcG9ydCB7Q29udGV4dE1lbnVDb21wb25lbnR9IGZyb20gJ25neC1jb250ZXh0bWVudSc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL2RyYWdBbmREcm9wL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHtJRHJhZ0FuZERyb3B9IGZyb20gJy4vaW50ZXJmYWNlcy9JRHJhZ0FuZERyb3AnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICcuL3N0b3JlL0lUcmVlU3RhdGUnO1xuaW1wb3J0IHtmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFRyZWVEZWxldGVOb2RlQWN0aW9uLFxuICBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbixcbiAgVHJlZUluc2VydE5vZGVBY3Rpb24sXG4gIFRyZWVNb3ZlTm9kZUFjdGlvblxufSBmcm9tICcuL3N0b3JlL3RyZWVBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdyaS10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmVlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB0cmVlTW9kZWw6IFRyZWVNb2RlbDtcblxuICBAVmlld0NoaWxkKCdjb250ZXh0TWVudScpIGNvbnRleHRNZW51OiBDb250ZXh0TWVudUNvbXBvbmVudDtcblxuICAvKipcbiAgICogTGlzdCBvZiBkZWZhdWx0IG9wdGlvbnMgZm9yIGNvbnRleHQgbWVudVxuICAgKi9cbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogSUNvbnRleHRNZW51W10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ29uRWRpdCcsXG4gICAgICB0ZXh0OiAnUklfVFJFRV9MQkxfRURJVF9OT0RFJyxcbiAgICAgIGljb25DbHM6ICdmYSBmYS1lZGl0J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ29uRGVsZXRlJyxcbiAgICAgIHRleHQ6ICdSSV9UUkVFX0xCTF9SRU1PVkVfTk9ERScsXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtdHJhc2gnXG4gICAgfVxuICBdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvbnRleHQgbWVudSBpdGVtc1xuICAgKi9cbiAgcHVibGljIG1lbnVMaXN0OiBJQ29udGV4dE1lbnVbXSA9IFtdO1xuXG4gIHB1YmxpYyByb290Tm9kZXMkOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT47XG5cbiAgcHJvdGVjdGVkIGN1cnJlbnRTZWxlY3RlZE5vZGU6IElPdXRlck5vZGU7XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBkcmFnQW5kRHJvcDogRHJhZ0FuZERyb3ApIHtcblxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWdpc3Rlck1vdmUoKTtcblxuICAgIHRoaXMucm9vdE5vZGVzJCA9IHRoaXMudHJlZU1vZGVsLnJvb3ROb2RlcyQ7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnRyZWVNb2RlbC5jdXJyZW50U2VsZWN0ZWROb2RlJFxuICAgICAgICAuc3Vic2NyaWJlKChub2RlOiBJT3V0ZXJOb2RlKSA9PiB0aGlzLmN1cnJlbnRTZWxlY3RlZE5vZGUgPSBub2RlKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoZGF0YTogYW55KSB7XG4gICAgdGhpcy5tZW51TGlzdCA9IFtdO1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5tZW51TGlzdC5wdXNoKGl0ZW0pKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFkZCgpIHtcbiAgICBjb25zdCBwYXJlbnRJZCA9IHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSA/IHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZS5pZCA6IG51bGw7XG5cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlSW5zZXJ0Tm9kZUFjdGlvbih7dHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsIHBhcmVudElkfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIHNlbGVjdCBpdGVtIGZyb20gY29udGV4dCBtZW51XG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIC0gbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIG5vZGUgLSBkYXRhIGl0ZW1cbiAgICovXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51Q2xpY2sobmFtZTogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlKSB7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ29uRWRpdCc6XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlRWRpdE5vZGVTdGFydEFjdGlvbih7bm9kZX0pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvbkRlbGV0ZSc6XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVEZWxldGVOb2RlQWN0aW9uKHt0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCwgbm9kZX0pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oJ1Vua25vd24gY29udGV4dCBtZW51IGFjdGlvbjogJyArIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0cmFja0J5Rm4oaXRlbTogSU91dGVyTm9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgZGF0YSBcIm1vdmUgZXZlbnRcIlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyTW92ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmVlTW9kZWwuY29uZmlndXJhdGlvbi5kaXNhYmxlTW92ZU5vZGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnQW5kRHJvcC5kcm9wJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZGF0YTogSURyYWdBbmREcm9wKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gRHJhZ0FuZERyb3AuRFJPUF9EQVRBX1RZUEUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmRyb3BOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLmRyb3BOb2RlLmRhdGEudHJlZUlkID09PSB0aGlzLnRyZWVNb2RlbC50cmVlSWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZGF0YS5kcmFnTm9kZS5kYXRhLnRyZWVJZCA9PT0gdGhpcy50cmVlTW9kZWwudHJlZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5kcm9wTm9kZSAmJiBkYXRhLmRyb3BOb2RlLnpvbmVzICYmIGRhdGEuZHJvcE5vZGUuem9uZXMuaW5kZXhPZihkYXRhLmRyYWdOb2RlLnpvbmVJZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogSURyYWdBbmREcm9wKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyb3BOb2RlID0gZGF0YS5kcm9wTm9kZSA/IGRhdGEuZHJvcE5vZGUuZGF0YSA6IG51bGw7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVNb3ZlTm9kZUFjdGlvbih7XG4gICAgICAgICAgICBzb3VyY2VPZkRyb3BwZWREYXRhOiBkYXRhLnR5cGUsXG4gICAgICAgICAgICB0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCxcbiAgICAgICAgICAgIG9sZE5vZGU6IGRhdGEuZHJhZ05vZGUuZGF0YSxcbiAgICAgICAgICAgIG5vZGU6IGRyb3BOb2RlXG4gICAgICAgICAgfVxuICAgICAgICApKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=