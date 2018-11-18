/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
export class DragAndDrop {
    constructor() {
        this.dropStream$ = new Subject();
        this.dragStream$ = new BehaviorSubject(null);
        this.drop$ = this.dropStream$
            .pipe(withLatestFrom(this.dragStream$), map(([dropNode, dragNode]) => {
            return { dragNode: dragNode, dropNode: dropNode, type: dragNode.type };
        }));
    }
    /**
     * @param {?} dragElement
     * @return {?}
     */
    dragStart(dragElement) {
        this.dragStream$.next(dragElement);
    }
    /**
     * @param {?} dropElement
     * @return {?}
     */
    dragEnd(dropElement) {
        this.dropStream$.next(dropElement);
    }
    /**
     * @return {?}
     */
    getDragStream() {
        return this.dragStream$;
    }
    /**
     * @return {?}
     */
    getLastDragElement() {
        return this.dragStream$.getValue();
    }
}
DragAndDrop.DROP_DATA_TYPE = 'TREE_NODE';
DragAndDrop.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DragAndDrop.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ0FuZERyb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvZHJhZ0FuZERyb3AvZHJhZ0FuZERyb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsZUFBZSxFQUFjLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUMsR0FBRyxFQUFFLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE1BQU0sT0FBTyxXQUFXO0lBUXRCO1FBTFUsZ0JBQVcsR0FBaUMsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMxRCxnQkFBVyxHQUF5QyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUt0RixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzFCLElBQUksQ0FDSCxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUNoQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQStCLEVBQWdCLEVBQUU7WUFDdkUsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxXQUF5QjtRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVNLE9BQU8sQ0FBQyxXQUFnQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sYUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLGtCQUFrQjtRQUN2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7QUEvQmEsMEJBQWMsR0FBRyxXQUFXLENBQUM7O1lBRjVDLFVBQVU7Ozs7OztJQUVULDJCQUEyQzs7Ozs7SUFFM0Msa0NBQW9FOzs7OztJQUNwRSxrQ0FBd0Y7O0lBRXhGLDRCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lEcmFnQW5kRHJvcCwgSURyYWdFbGVtZW50LCBJRHJvcEVsZW1lbnR9IGZyb20gJy4uL2ludGVyZmFjZXMvSURyYWdBbmREcm9wJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCB3aXRoTGF0ZXN0RnJvbX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3Age1xuICBwdWJsaWMgc3RhdGljIERST1BfREFUQV9UWVBFID0gJ1RSRUVfTk9ERSc7XG5cbiAgcHJvdGVjdGVkIGRyb3BTdHJlYW0kOiBTdWJqZWN0PElEcm9wRWxlbWVudCB8IG51bGw+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJvdGVjdGVkIGRyYWdTdHJlYW0kOiBCZWhhdmlvclN1YmplY3Q8SURyYWdFbGVtZW50IHwgbnVsbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIHB1YmxpYyBkcm9wJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRyb3AkID0gdGhpcy5kcm9wU3RyZWFtJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuZHJhZ1N0cmVhbSQpLFxuICAgICAgICBtYXAoKFtkcm9wTm9kZSwgZHJhZ05vZGVdOiBbSURyb3BFbGVtZW50LCBJRHJhZ0VsZW1lbnRdKTogSURyYWdBbmREcm9wID0+IHtcbiAgICAgICAgICByZXR1cm4ge2RyYWdOb2RlOiBkcmFnTm9kZSwgZHJvcE5vZGU6IGRyb3BOb2RlLCB0eXBlOiBkcmFnTm9kZS50eXBlfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgZHJhZ1N0YXJ0KGRyYWdFbGVtZW50OiBJRHJhZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmRyYWdTdHJlYW0kLm5leHQoZHJhZ0VsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIGRyYWdFbmQoZHJvcEVsZW1lbnQ6IElEcm9wRWxlbWVudCB8IG51bGwpIHtcbiAgICB0aGlzLmRyb3BTdHJlYW0kLm5leHQoZHJvcEVsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIGdldERyYWdTdHJlYW0oKTogQmVoYXZpb3JTdWJqZWN0PElEcmFnRWxlbWVudCB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5kcmFnU3RyZWFtJDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMYXN0RHJhZ0VsZW1lbnQoKTogSURyYWdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5kcmFnU3RyZWFtJC5nZXRWYWx1ZSgpO1xuICB9XG59XG4iXX0=