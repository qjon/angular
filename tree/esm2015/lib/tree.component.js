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
export class TreeComponent {
    /**
     * @param {?} store
     * @param {?} dragAndDrop
     */
    constructor(store, dragAndDrop) {
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.registerMove();
        this.rootNodes$ = this.treeModel.rootNodes$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe((node) => this.currentSelectedNode = node));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ngOnChanges(data) {
        this.menuList = [];
        this.defaultOptions.forEach((item) => this.menuList.push(item));
    }
    /**
     * @return {?}
     */
    onAdd() {
        /** @type {?} */
        const parentId = this.currentSelectedNode ? this.currentSelectedNode.id : null;
        this.store.dispatch(new TreeInsertNodeAction({ treeId: this.treeModel.treeId, parentId }));
    }
    /**
     * On select item from context menu
     *
     * @param {?} name - name of the event
     * @param {?} node - data item
     * @return {?}
     */
    onContextMenuClick(name, node) {
        switch (name) {
            case 'onEdit':
                event.stopPropagation();
                this.store.dispatch(new TreeEditNodeStartAction({ node }));
                break;
            case 'onDelete':
                this.store.dispatch(new TreeDeleteNodeAction({ treeId: this.treeModel.treeId, node }));
                break;
            default:
                console.warn('Unknown context menu action: ' + name);
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
     * Register data "move event"
     * @protected
     * @return {?}
     */
    registerMove() {
        if (this.treeModel.configuration.disableMoveNodes) {
            return;
        }
        this.dragAndDrop.drop$
            .pipe(filter((data) => {
            if (data.type === DragAndDrop.DROP_DATA_TYPE) {
                if (data.dropNode) {
                    return data.dropNode.data.treeId === this.treeModel.treeId;
                }
                else {
                    return data.dragNode.data.treeId === this.treeModel.treeId;
                }
            }
            else {
                if (data.dropNode && data.dropNode.zones && data.dropNode.zones.indexOf(data.dragNode.zoneId) === -1) {
                    return false;
                }
                return true;
            }
        }))
            .subscribe((data) => {
            /** @type {?} */
            const dropNode = data.dropNode ? data.dropNode.data : null;
            this.store.dispatch(new TreeMoveNodeAction({
                sourceOfDroppedData: data.type,
                treeId: this.treeModel.treeId,
                oldNode: data.dragNode.data,
                node: dropNode
            }));
        });
    }
}
TreeComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'ri-tree',
                template: "<div class=\"tree\">\n  <button *ngIf=\"treeModel.configuration.showAddButton\" class=\"btn btn-dark add-node-button\" (click)=\"onAdd()\">\n    <i class=\"fa fa-plus\"></i> {{'RI_TREE_LBL_ADD_NODE' | translate}}\n  </button>\n  <!--@formatter:off-->\n  <div #customTemplate><ng-content></ng-content></div>\n  <!--@formatter:on-->\n  <div *ngIf=\"customTemplate.childNodes.length === 0\">\n    <ri-tree-item\n      class=\"root-node\"\n      *ngFor=\"let node of rootNodes$ | async; trackBy: trackByFn\"\n      [node]=\"node\"\n      [treeModel]=\"treeModel\"\n      [isSelected]=\"treeModel.isSelected(node)\"\n      [isExpanded]=\"treeModel.isExpanded(node)\"\n      [contextMenu]=\"contextMenu\"></ri-tree-item>\n  </div>\n  <ri-dropzone [treeModel]=\"treeModel\"></ri-dropzone>\n  <context-menu id=\"context-menu-{{treeModel.treeId}}\" #contextMenu>\n    <ng-template *ngFor=\"let menuItem of menuList\" contextMenuItem let-item\n                 (execute)=\"onContextMenuClick(menuItem.name, $event.item)\">\n      <span class=\"{{menuItem.iconCls}}\" style=\"width: 20px; display: inline-block;\"></span>\n      {{menuItem.text | translate}}\n    </ng-template>\n  </context-menu>\n</div>\n",
                styles: [".tree{list-style-type:none;margin:0;padding-left:0;position:relative}.tree .dropdown{position:inherit}.tree .dropdown-menu{position:absolute!important}.tree .pointer{cursor:pointer}.tree .tree{margin-left:20px}.tree .tree-edit-btn,.tree .tree-remove-btn{display:none}.tree .tree-item{padding:2px 0}.tree .tree-item.drop-allowed .tree-item-name{background-color:rgba(255,0,0,.3)}.tree .tree-item.tree-item-selected>.tree-item-name{padding:0 1px;border:1px solid #4684ee;background-color:#549dee}.tree .tree-item i{text-align:center}.tree .tree-item .no-children{display:inline-block;width:8px}.tree .tree-item .tree-item-name{display:inline-block;line-height:22px;height:22px;padding:0 2px;cursor:pointer}.tree .tree-item .tree-item-name:hover{background-color:rgba(161,197,238,.2)}.tree .tree-item .tree-item-name:hover .tree-edit-btn,.tree .tree-item .tree-item-name:hover .tree-remove-btn,.tree .tree-item form{display:inline-block}.tree .tree-item form input{width:auto}"]
            }] }
];
/** @nocollapse */
TreeComponent.ctorParameters = () => [
    { type: Store },
    { type: DragAndDrop }
];
TreeComponent.propDecorators = {
    treeModel: [{ type: Input }],
    contextMenu: [{ type: ViewChild, args: ['contextMenu',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBZ0MsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzNHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFOUQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUVsQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUNMLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNuQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBYSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFROUMsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBZ0N4QixZQUE2QixLQUF3QixFQUN4QixXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTs7OztRQXpCN0MsbUJBQWMsR0FBbUI7WUFDdkM7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsT0FBTyxFQUFFLFlBQVk7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsT0FBTyxFQUFFLGFBQWE7YUFDdkI7U0FDRixDQUFDOzs7O1FBS0ssYUFBUSxHQUFtQixFQUFFLENBQUM7UUFNM0IsaUJBQVksR0FB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QUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3BHLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2dCQUVELE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FBQyxDQUFDLElBQWtCLEVBQUUsRUFBRTs7a0JBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO2dCQUN2QyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDM0IsSUFBSSxFQUFFLFFBQVE7YUFDZixDQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBbElGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHdyQ0FBb0M7O2FBRXJDOzs7O1lBaEJPLEtBQUs7WUFGTCxXQUFXOzs7d0JBb0JoQixLQUFLOzBCQUVMLFNBQVMsU0FBQyxhQUFhOzs7O0lBRnhCLGtDQUE4Qjs7SUFFOUIsb0NBQTREOzs7Ozs7SUFLNUQsdUNBV0U7Ozs7O0lBS0YsaUNBQXFDOztJQUVyQyxtQ0FBNEM7Ozs7O0lBRTVDLDRDQUEwQzs7Ozs7SUFFMUMscUNBQTRDOzs7OztJQUV6Qiw4QkFBa0M7Ozs7O0lBQ2xDLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7SUNvbnRleHRNZW51fSBmcm9tICcuL2ludGVyZmFjZXMvSUNvbnRleHRNZW51JztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtDb250ZXh0TWVudUNvbXBvbmVudH0gZnJvbSAnbmd4LWNvbnRleHRtZW51JztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0lEcmFnQW5kRHJvcH0gZnJvbSAnLi9pbnRlcmZhY2VzL0lEcmFnQW5kRHJvcCc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lUcmVlU3RhdGV9IGZyb20gJy4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgVHJlZURlbGV0ZU5vZGVBY3Rpb24sXG4gIFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uLFxuICBUcmVlSW5zZXJ0Tm9kZUFjdGlvbixcbiAgVHJlZU1vdmVOb2RlQWN0aW9uXG59IGZyb20gJy4vc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ3JpLXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRleHRNZW51JykgY29udGV4dE1lbnU6IENvbnRleHRNZW51Q29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGRlZmF1bHQgb3B0aW9ucyBmb3IgY29udGV4dCBtZW51XG4gICAqL1xuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBJQ29udGV4dE1lbnVbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnb25FZGl0JyxcbiAgICAgIHRleHQ6ICdSSV9UUkVFX0xCTF9FRElUX05PREUnLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWVkaXQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnb25EZWxldGUnLFxuICAgICAgdGV4dDogJ1JJX1RSRUVfTEJMX1JFTU9WRV9OT0RFJyxcbiAgICAgIGljb25DbHM6ICdmYSBmYS10cmFzaCdcbiAgICB9XG4gIF07XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgY29udGV4dCBtZW51IGl0ZW1zXG4gICAqL1xuICBwdWJsaWMgbWVudUxpc3Q6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIHJvb3ROb2RlcyQ6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPjtcblxuICBwcm90ZWN0ZWQgY3VycmVudFNlbGVjdGVkTm9kZTogSU91dGVyTm9kZTtcblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGRyYWdBbmREcm9wOiBEcmFnQW5kRHJvcCkge1xuXG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyTW92ZSgpO1xuXG4gICAgdGhpcy5yb290Tm9kZXMkID0gdGhpcy50cmVlTW9kZWwucm9vdE5vZGVzJDtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudHJlZU1vZGVsLmN1cnJlbnRTZWxlY3RlZE5vZGUkXG4gICAgICAgIC5zdWJzY3JpYmUoKG5vZGU6IElPdXRlck5vZGUpID0+IHRoaXMuY3VycmVudFNlbGVjdGVkTm9kZSA9IG5vZGUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLm1lbnVMaXN0ID0gW107XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLm1lbnVMaXN0LnB1c2goaXRlbSkpO1xuICB9XG5cbiAgcHVibGljIG9uQWRkKCkge1xuICAgIGNvbnN0IHBhcmVudElkID0gdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlID8gdGhpcy5jdXJyZW50U2VsZWN0ZWROb2RlLmlkIDogbnVsbDtcblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVJbnNlcnROb2RlQWN0aW9uKHt0cmVlSWQ6IHRoaXMudHJlZU1vZGVsLnRyZWVJZCwgcGFyZW50SWR9KSk7XG4gIH1cblxuICAvKipcbiAgICogT24gc2VsZWN0IGl0ZW0gZnJvbSBjb250ZXh0IG1lbnVcbiAgICpcbiAgICogQHBhcmFtIG5hbWUgLSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0gbm9kZSAtIGRhdGEgaXRlbVxuICAgKi9cbiAgcHVibGljIG9uQ29udGV4dE1lbnVDbGljayhuYW1lOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUpIHtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnb25FZGl0JzpcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uKHtub2RlfSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29uRGVsZXRlJzpcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZURlbGV0ZU5vZGVBY3Rpb24oe3RyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLCBub2RlfSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybignVW5rbm93biBjb250ZXh0IG1lbnUgYWN0aW9uOiAnICsgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrQnlGbihpdGVtOiBJT3V0ZXJOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBkYXRhIFwibW92ZSBldmVudFwiXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXJNb3ZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyZWVNb2RlbC5jb25maWd1cmF0aW9uLmRpc2FibGVNb3ZlTm9kZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdBbmREcm9wLmRyb3AkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChkYXRhOiBJRHJhZ0FuZERyb3ApID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuZHJvcE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZHJvcE5vZGUuZGF0YS50cmVlSWQgPT09IHRoaXMudHJlZU1vZGVsLnRyZWVJZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLmRyYWdOb2RlLmRhdGEudHJlZUlkID09PSB0aGlzLnRyZWVNb2RlbC50cmVlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmRyb3BOb2RlICYmIGRhdGEuZHJvcE5vZGUuem9uZXMgJiYgZGF0YS5kcm9wTm9kZS56b25lcy5pbmRleE9mKGRhdGEuZHJhZ05vZGUuem9uZUlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiBJRHJhZ0FuZERyb3ApID0+IHtcbiAgICAgICAgY29uc3QgZHJvcE5vZGUgPSBkYXRhLmRyb3BOb2RlID8gZGF0YS5kcm9wTm9kZS5kYXRhIDogbnVsbDtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVHJlZU1vdmVOb2RlQWN0aW9uKHtcbiAgICAgICAgICAgIHNvdXJjZU9mRHJvcHBlZERhdGE6IGRhdGEudHlwZSxcbiAgICAgICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICAgICAgb2xkTm9kZTogZGF0YS5kcmFnTm9kZS5kYXRhLFxuICAgICAgICAgICAgbm9kZTogZHJvcE5vZGVcbiAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==