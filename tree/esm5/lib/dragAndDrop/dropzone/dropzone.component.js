/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TreeModel } from '../../models/TreeModel';
import { DragAndDrop } from '../dragAndDrop.service';
import { map } from 'rxjs/operators';
import { merge } from 'rxjs';
var DropzoneComponent = /** @class */ (function () {
    function DropzoneComponent(dragAndDrop) {
        var _this = this;
        this.dragAndDrop = dragAndDrop;
        this.dropZone = [];
        /** @type {?} */
        var isDragStart$ = this.dragAndDrop.getDragStream()
            .pipe(map(function (dragElement) {
            /** @type {?} */
            var isDragElement = !!dragElement && !!dragElement.data;
            if (isDragElement) {
                if (dragElement.type === DragAndDrop.DROP_DATA_TYPE) {
                    /** @type {?} */
                    var isNotRootElement = dragElement.data.parentId;
                    /** @type {?} */
                    var isFromCurrentTree = dragElement.data.treeId === _this.treeModel.treeId;
                    return (isNotRootElement && isFromCurrentTree) ? true : false;
                }
                else {
                    return true;
                }
            }
            return false;
        }));
        /** @type {?} */
        var isDragEnd$ = this.dragAndDrop.drop$
            .pipe(map(function (data) {
            return false;
        }));
        this.isOpen$ = merge(isDragStart$, isDragEnd$);
    }
    /**
     * @return {?}
     */
    DropzoneComponent.prototype.onDrop = /**
     * @return {?}
     */
    function () {
        this.dragAndDrop.dragEnd(null);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DropzoneComponent.prototype.onDragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
    };
    DropzoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-dropzone',
                    template: "<div *ngIf=\"isOpen$ | async\" (drop)=\"onDrop()\" (dragover)=\"onDragOver($event)\" class=\"dropzone\">\n  {{'RI_TREE_LBL_DROP_ZONE' | translate}}\n</div>\n",
                    styles: [".dropzone{display:inline-block;border:1px dotted red;padding:10px;background-color:rgba(255,0,0,.3)}"]
                }] }
    ];
    /** @nocollapse */
    DropzoneComponent.ctorParameters = function () { return [
        { type: DragAndDrop }
    ]; };
    DropzoneComponent.propDecorators = {
        treeModel: [{ type: Input }],
        dropZone: [{ type: Input }]
    };
    return DropzoneComponent;
}());
export { DropzoneComponent };
if (false) {
    /** @type {?} */
    DropzoneComponent.prototype.treeModel;
    /** @type {?} */
    DropzoneComponent.prototype.dropZone;
    /** @type {?} */
    DropzoneComponent.prototype.isOpen$;
    /** @type {?} */
    DropzoneComponent.prototype.dragAndDrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHpvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9kcmFnQW5kRHJvcC9kcm9wem9uZS9kcm9wem9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxLQUFLLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFFdkM7SUFXRSwyQkFBbUIsV0FBd0I7UUFBM0MsaUJBOEJDO1FBOUJrQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpsQyxhQUFRLEdBQWEsRUFBRSxDQUFDOztZQU16QixZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7YUFDbEQsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLFdBQXlCOztnQkFDdEIsYUFBYSxHQUFHLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1lBRXpELElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLGNBQWMsRUFBRTs7d0JBQzdDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUTs7d0JBQzVDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtvQkFFM0UsT0FBTyxDQUFDLGdCQUFnQixJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUMvRDtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSDs7WUFFRyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2FBQ3RDLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxJQUFrQjtZQUNyQixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUNIO1FBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFTSxrQ0FBTTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVNLHNDQUFVOzs7O0lBQWpCLFVBQWtCLE1BQU07UUFDdEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHlLQUF3Qzs7aUJBRXpDOzs7O2dCQVRPLFdBQVc7Ozs0QkFXaEIsS0FBSzsyQkFDTCxLQUFLOztJQTJDUix3QkFBQztDQUFBLEFBbERELElBa0RDO1NBN0NZLGlCQUFpQjs7O0lBQzVCLHNDQUE4Qjs7SUFDOUIscUNBQWlDOztJQUVqQyxvQ0FBb0M7O0lBRXhCLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyZWVNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWxzL1RyZWVNb2RlbCc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuLi9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7SURyYWdBbmREcm9wLCBJRHJhZ0VsZW1lbnR9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSURyYWdBbmREcm9wJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge21lcmdlLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZHJvcHpvbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcHpvbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wem9uZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3B6b25lQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG4gIEBJbnB1dCgpIGRyb3Bab25lOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHB1YmxpYyBpc09wZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkcmFnQW5kRHJvcDogRHJhZ0FuZERyb3ApIHtcblxuICAgIGNvbnN0IGlzRHJhZ1N0YXJ0JCA9IHRoaXMuZHJhZ0FuZERyb3AuZ2V0RHJhZ1N0cmVhbSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkcmFnRWxlbWVudDogSURyYWdFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgY29uc3QgaXNEcmFnRWxlbWVudCA9ICEhZHJhZ0VsZW1lbnQgJiYgISFkcmFnRWxlbWVudC5kYXRhO1xuXG4gICAgICAgICAgaWYgKGlzRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChkcmFnRWxlbWVudC50eXBlID09PSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCBpc05vdFJvb3RFbGVtZW50ID0gZHJhZ0VsZW1lbnQuZGF0YS5wYXJlbnRJZDtcbiAgICAgICAgICAgICAgY29uc3QgaXNGcm9tQ3VycmVudFRyZWUgPSBkcmFnRWxlbWVudC5kYXRhLnRyZWVJZCA9PT0gdGhpcy50cmVlTW9kZWwudHJlZUlkO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoaXNOb3RSb290RWxlbWVudCAmJiBpc0Zyb21DdXJyZW50VHJlZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29uc3QgaXNEcmFnRW5kJCA9IHRoaXMuZHJhZ0FuZERyb3AuZHJvcCRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGRhdGE6IElEcmFnQW5kRHJvcCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICB0aGlzLmlzT3BlbiQgPSBtZXJnZShpc0RyYWdTdGFydCQsIGlzRHJhZ0VuZCQpO1xuICB9XG5cbiAgcHVibGljIG9uRHJvcCgpIHtcbiAgICB0aGlzLmRyYWdBbmREcm9wLmRyYWdFbmQobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgb25EcmFnT3ZlcigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIl19