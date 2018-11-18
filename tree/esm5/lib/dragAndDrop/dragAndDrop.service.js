/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
var DragAndDrop = /** @class */ (function () {
    function DragAndDrop() {
        this.dropStream$ = new Subject();
        this.dragStream$ = new BehaviorSubject(null);
        this.drop$ = this.dropStream$
            .pipe(withLatestFrom(this.dragStream$), map(function (_a) {
            var _b = tslib_1.__read(_a, 2), dropNode = _b[0], dragNode = _b[1];
            return { dragNode: dragNode, dropNode: dropNode, type: dragNode.type };
        }));
    }
    /**
     * @param {?} dragElement
     * @return {?}
     */
    DragAndDrop.prototype.dragStart = /**
     * @param {?} dragElement
     * @return {?}
     */
    function (dragElement) {
        this.dragStream$.next(dragElement);
    };
    /**
     * @param {?} dropElement
     * @return {?}
     */
    DragAndDrop.prototype.dragEnd = /**
     * @param {?} dropElement
     * @return {?}
     */
    function (dropElement) {
        this.dropStream$.next(dropElement);
    };
    /**
     * @return {?}
     */
    DragAndDrop.prototype.getDragStream = /**
     * @return {?}
     */
    function () {
        return this.dragStream$;
    };
    /**
     * @return {?}
     */
    DragAndDrop.prototype.getLastDragElement = /**
     * @return {?}
     */
    function () {
        return this.dragStream$.getValue();
    };
    DragAndDrop.DROP_DATA_TYPE = 'TREE_NODE';
    DragAndDrop.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DragAndDrop.ctorParameters = function () { return []; };
    return DragAndDrop;
}());
export { DragAndDrop };
if (false) {
    /** @type {?} */
    DragAndDrop.DROP_DATA_TYPE;
    /**
     * @type {?}
     * @protected
     */
    DragAndDrop.prototype.dropStream$;
    /**
     * @type {?}
     * @protected
     */
    DragAndDrop.prototype.dragStream$;
    /** @type {?} */
    DragAndDrop.prototype.drop$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ0FuZERyb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvZHJhZ0FuZERyb3AvZHJhZ0FuZERyb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRDtJQVNFO1FBTFUsZ0JBQVcsR0FBaUMsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMxRCxnQkFBVyxHQUF5QyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUt0RixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzFCLElBQUksQ0FDSCxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUNoQyxHQUFHLENBQUMsVUFBQyxFQUFrRDtnQkFBbEQsMEJBQWtELEVBQWpELGdCQUFRLEVBQUUsZ0JBQVE7WUFDdEIsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7OztJQUVNLCtCQUFTOzs7O0lBQWhCLFVBQWlCLFdBQXlCO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU0sNkJBQU87Ozs7SUFBZCxVQUFlLFdBQWdDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFTSxtQ0FBYTs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFTSx3Q0FBa0I7OztJQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBL0JhLDBCQUFjLEdBQUcsV0FBVyxDQUFDOztnQkFGNUMsVUFBVTs7OztJQWtDWCxrQkFBQztDQUFBLEFBbENELElBa0NDO1NBakNZLFdBQVc7OztJQUN0QiwyQkFBMkM7Ozs7O0lBRTNDLGtDQUFvRTs7Ozs7SUFDcEUsa0NBQXdGOztJQUV4Riw0QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRHJhZ0FuZERyb3AsIElEcmFnRWxlbWVudCwgSURyb3BFbGVtZW50fSBmcm9tICcuLi9pbnRlcmZhY2VzL0lEcmFnQW5kRHJvcCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgd2l0aExhdGVzdEZyb219IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wIHtcbiAgcHVibGljIHN0YXRpYyBEUk9QX0RBVEFfVFlQRSA9ICdUUkVFX05PREUnO1xuXG4gIHByb3RlY3RlZCBkcm9wU3RyZWFtJDogU3ViamVjdDxJRHJvcEVsZW1lbnQgfCBudWxsPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByb3RlY3RlZCBkcmFnU3RyZWFtJDogQmVoYXZpb3JTdWJqZWN0PElEcmFnRWxlbWVudCB8IG51bGw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBwdWJsaWMgZHJvcCQ6IE9ic2VydmFibGU8YW55PjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kcm9wJCA9IHRoaXMuZHJvcFN0cmVhbSRcbiAgICAgIC5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmRyYWdTdHJlYW0kKSxcbiAgICAgICAgbWFwKChbZHJvcE5vZGUsIGRyYWdOb2RlXTogW0lEcm9wRWxlbWVudCwgSURyYWdFbGVtZW50XSk6IElEcmFnQW5kRHJvcCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtkcmFnTm9kZTogZHJhZ05vZGUsIGRyb3BOb2RlOiBkcm9wTm9kZSwgdHlwZTogZHJhZ05vZGUudHlwZX07XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGRyYWdTdGFydChkcmFnRWxlbWVudDogSURyYWdFbGVtZW50KSB7XG4gICAgdGhpcy5kcmFnU3RyZWFtJC5uZXh0KGRyYWdFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmFnRW5kKGRyb3BFbGVtZW50OiBJRHJvcEVsZW1lbnQgfCBudWxsKSB7XG4gICAgdGhpcy5kcm9wU3RyZWFtJC5uZXh0KGRyb3BFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREcmFnU3RyZWFtKCk6IEJlaGF2aW9yU3ViamVjdDxJRHJhZ0VsZW1lbnQgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ1N0cmVhbSQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGFzdERyYWdFbGVtZW50KCk6IElEcmFnRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ1N0cmVhbSQuZ2V0VmFsdWUoKTtcbiAgfVxufVxuIl19