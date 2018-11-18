/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TreeModel } from '../models/TreeModel';
import { TreeSelectNodeAction } from '../store/treeActions.service';
import { Store } from '@ngrx/store';
export class ParentsListComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.parents$ = this.treeModel.getParentsList();
    }
    /**
     * @param {?} node
     * @param {?} isCurrentSelectedNode
     * @return {?}
     */
    selectNode(node, isCurrentSelectedNode) {
        if (!isCurrentSelectedNode) {
            this.store.dispatch(new TreeSelectNodeAction({
                treeId: this.treeModel.treeId,
                node,
            }));
        }
    }
}
ParentsListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-tree-parents-list',
                template: "<ul class=\"ri-tree-parents-list\">\n  <li class=\"fa fa-home\" (click)=\"selectNode(null, false)\"></li>\n  <li *ngFor=\"let node of parents$ | async; last as isLast\" (click)=\"selectNode(node, isLast)\">{{node.name}}\n  </li>\n</ul>\n",
                styles: [".ri-tree-parents-list{list-style-type:none;margin:0;padding:0}.ri-tree-parents-list li{display:inline-block;cursor:pointer;color:#777}.ri-tree-parents-list li:after,.ri-tree-parents-list li:first-child,.ri-tree-parents-list li:last-child{color:#000}.ri-tree-parents-list li:not(:last-child):after{content:'/';display:inline-block;width:10px;text-align:center}"]
            }] }
];
/** @nocollapse */
ParentsListComponent.ctorParameters = () => [
    { type: Store }
];
ParentsListComponent.propDecorators = {
    treeModel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ParentsListComponent.prototype.treeModel;
    /** @type {?} */
    ParentsListComponent.prototype.parents$;
    /**
     * @type {?}
     * @protected
     */
    ParentsListComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvcGFyZW50cy1saXN0L3BhcmVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUc5QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBT2xDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFNL0IsWUFBNkIsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7SUFFckQsQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLElBQWdCLEVBQUUscUJBQThCO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDO2dCQUMzQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNO2dCQUM3QixJQUFJO2FBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTDtJQUNILENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMseVBBQTRDOzthQUU3Qzs7OztZQU5PLEtBQUs7Ozt3QkFRVixLQUFLOzs7O0lBQU4seUNBQzRCOztJQUU1Qix3Q0FBMEM7Ozs7O0lBRXZCLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJlZU1vZGVsfSBmcm9tICcuLi9tb2RlbHMvVHJlZU1vZGVsJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge1RyZWVTZWxlY3ROb2RlQWN0aW9ufSBmcm9tICcuLi9zdG9yZS90cmVlQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SVRyZWVTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvSVRyZWVTdGF0ZSc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLXRyZWUtcGFyZW50cy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmVudHMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhcmVudHMtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIHB1YmxpYyBwYXJlbnRzJDogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlW10+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPElUcmVlU3RhdGU+KSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudHMkID0gdGhpcy50cmVlTW9kZWwuZ2V0UGFyZW50c0xpc3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3ROb2RlKG5vZGU6IElPdXRlck5vZGUsIGlzQ3VycmVudFNlbGVjdGVkTm9kZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghaXNDdXJyZW50U2VsZWN0ZWROb2RlKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUcmVlU2VsZWN0Tm9kZUFjdGlvbih7XG4gICAgICAgIHRyZWVJZDogdGhpcy50cmVlTW9kZWwudHJlZUlkLFxuICAgICAgICBub2RlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=