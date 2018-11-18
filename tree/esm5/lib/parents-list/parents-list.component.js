/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TreeModel } from '../models/TreeModel';
import { TreeSelectNodeAction } from '../store/treeActions.service';
import { Store } from '@ngrx/store';
var ParentsListComponent = /** @class */ (function () {
    function ParentsListComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ParentsListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.parents$ = this.treeModel.getParentsList();
    };
    /**
     * @param {?} node
     * @param {?} isCurrentSelectedNode
     * @return {?}
     */
    ParentsListComponent.prototype.selectNode = /**
     * @param {?} node
     * @param {?} isCurrentSelectedNode
     * @return {?}
     */
    function (node, isCurrentSelectedNode) {
        if (!isCurrentSelectedNode) {
            this.store.dispatch(new TreeSelectNodeAction({
                treeId: this.treeModel.treeId,
                node: node,
            }));
        }
    };
    ParentsListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-tree-parents-list',
                    template: "<ul class=\"ri-tree-parents-list\">\n  <li class=\"fa fa-home\" (click)=\"selectNode(null, false)\"></li>\n  <li *ngFor=\"let node of parents$ | async; last as isLast\" (click)=\"selectNode(node, isLast)\">{{node.name}}\n  </li>\n</ul>\n",
                    styles: [".ri-tree-parents-list{list-style-type:none;margin:0;padding:0}.ri-tree-parents-list li{display:inline-block;cursor:pointer;color:#777}.ri-tree-parents-list li:after,.ri-tree-parents-list li:first-child,.ri-tree-parents-list li:last-child{color:#000}.ri-tree-parents-list li:not(:last-child):after{content:'/';display:inline-block;width:10px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ParentsListComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    ParentsListComponent.propDecorators = {
        treeModel: [{ type: Input }]
    };
    return ParentsListComponent;
}());
export { ParentsListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvcGFyZW50cy1saXN0L3BhcmVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUc5QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWxDO0lBV0UsOEJBQTZCLEtBQXdCO1FBQXhCLFVBQUssR0FBTCxLQUFLLENBQW1CO0lBRXJELENBQUM7Ozs7SUFFTSx1Q0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRU0seUNBQVU7Ozs7O0lBQWpCLFVBQWtCLElBQWdCLEVBQUUscUJBQThCO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDO2dCQUMzQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNO2dCQUM3QixJQUFJLE1BQUE7YUFDTCxDQUFDLENBQUMsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx5UEFBNEM7O2lCQUU3Qzs7OztnQkFOTyxLQUFLOzs7NEJBUVYsS0FBSzs7SUFzQlIsMkJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXZCWSxvQkFBb0I7OztJQUMvQix5Q0FDNEI7O0lBRTVCLHdDQUEwQzs7Ozs7SUFFdkIscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmVlTW9kZWx9IGZyb20gJy4uL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7VHJlZVNlbGVjdE5vZGVBY3Rpb259IGZyb20gJy4uL3N0b3JlL3RyZWVBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICcuLi9zdG9yZS9JVHJlZVN0YXRlJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktdHJlZS1wYXJlbnRzLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyZW50cy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyZW50cy1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFyZW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG5cbiAgcHVibGljIHBhcmVudHMkOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4pIHtcblxuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGFyZW50cyQgPSB0aGlzLnRyZWVNb2RlbC5nZXRQYXJlbnRzTGlzdCgpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE5vZGUobm9kZTogSU91dGVyTm9kZSwgaXNDdXJyZW50U2VsZWN0ZWROb2RlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFpc0N1cnJlbnRTZWxlY3RlZE5vZGUpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRyZWVTZWxlY3ROb2RlQWN0aW9uKHtcbiAgICAgICAgdHJlZUlkOiB0aGlzLnRyZWVNb2RlbC50cmVlSWQsXG4gICAgICAgIG5vZGUsXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==