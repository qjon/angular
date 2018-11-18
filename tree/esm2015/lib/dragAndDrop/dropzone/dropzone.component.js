/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TreeModel } from '../../models/TreeModel';
import { DragAndDrop } from '../dragAndDrop.service';
import { map } from 'rxjs/operators';
import { merge } from 'rxjs';
export class DropzoneComponent {
    /**
     * @param {?} dragAndDrop
     */
    constructor(dragAndDrop) {
        this.dragAndDrop = dragAndDrop;
        this.dropZone = [];
        /** @type {?} */
        const isDragStart$ = this.dragAndDrop.getDragStream()
            .pipe(map((dragElement) => {
            /** @type {?} */
            const isDragElement = !!dragElement && !!dragElement.data;
            if (isDragElement) {
                if (dragElement.type === DragAndDrop.DROP_DATA_TYPE) {
                    /** @type {?} */
                    const isNotRootElement = dragElement.data.parentId;
                    /** @type {?} */
                    const isFromCurrentTree = dragElement.data.treeId === this.treeModel.treeId;
                    return (isNotRootElement && isFromCurrentTree) ? true : false;
                }
                else {
                    return true;
                }
            }
            return false;
        }));
        /** @type {?} */
        const isDragEnd$ = this.dragAndDrop.drop$
            .pipe(map((data) => {
            return false;
        }));
        this.isOpen$ = merge(isDragStart$, isDragEnd$);
    }
    /**
     * @return {?}
     */
    onDrop() {
        this.dragAndDrop.dragEnd(null);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDragOver($event) {
        $event.preventDefault();
    }
}
DropzoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-dropzone',
                template: "<div *ngIf=\"isOpen$ | async\" (drop)=\"onDrop()\" (dragover)=\"onDragOver($event)\" class=\"dropzone\">\n  {{'RI_TREE_LBL_DROP_ZONE' | translate}}\n</div>\n",
                styles: [".dropzone{display:inline-block;border:1px dotted red;padding:10px;background-color:rgba(255,0,0,.3)}"]
            }] }
];
/** @nocollapse */
DropzoneComponent.ctorParameters = () => [
    { type: DragAndDrop }
];
DropzoneComponent.propDecorators = {
    treeModel: [{ type: Input }],
    dropZone: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHpvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9kcmFnQW5kRHJvcC9kcm9wem9uZS9kcm9wem9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxLQUFLLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFPdkMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQU01QixZQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpsQyxhQUFRLEdBQWEsRUFBRSxDQUFDOztjQU16QixZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7YUFDbEQsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLFdBQXlCLEVBQVcsRUFBRTs7a0JBQ25DLGFBQWEsR0FBRyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSTtZQUV6RCxJQUFJLGFBQWEsRUFBRTtnQkFDakIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxjQUFjLEVBQUU7OzBCQUM3QyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVE7OzBCQUM1QyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07b0JBRTNFLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDL0Q7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQ0g7O2NBRUcsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSzthQUN0QyxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsSUFBa0IsRUFBVyxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQ0g7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxNQUFNO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix5S0FBd0M7O2FBRXpDOzs7O1lBVE8sV0FBVzs7O3dCQVdoQixLQUFLO3VCQUNMLEtBQUs7Ozs7SUFETixzQ0FBOEI7O0lBQzlCLHFDQUFpQzs7SUFFakMsb0NBQW9DOztJQUV4Qix3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmVlTW9kZWx9IGZyb20gJy4uLy4uL21vZGVscy9UcmVlTW9kZWwnO1xuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi4vZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0lEcmFnQW5kRHJvcCwgSURyYWdFbGVtZW50fSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lEcmFnQW5kRHJvcCc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHttZXJnZSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWRyb3B6b25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3B6b25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcHpvbmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wem9uZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuICBASW5wdXQoKSBkcm9wWm9uZTogc3RyaW5nW10gPSBbXTtcblxuICBwdWJsaWMgaXNPcGVuJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZHJhZ0FuZERyb3A6IERyYWdBbmREcm9wKSB7XG5cbiAgICBjb25zdCBpc0RyYWdTdGFydCQgPSB0aGlzLmRyYWdBbmREcm9wLmdldERyYWdTdHJlYW0oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoZHJhZ0VsZW1lbnQ6IElEcmFnRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRHJhZ0VsZW1lbnQgPSAhIWRyYWdFbGVtZW50ICYmICEhZHJhZ0VsZW1lbnQuZGF0YTtcblxuICAgICAgICAgIGlmIChpc0RyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZHJhZ0VsZW1lbnQudHlwZSA9PT0gRHJhZ0FuZERyb3AuRFJPUF9EQVRBX1RZUEUpIHtcbiAgICAgICAgICAgICAgY29uc3QgaXNOb3RSb290RWxlbWVudCA9IGRyYWdFbGVtZW50LmRhdGEucGFyZW50SWQ7XG4gICAgICAgICAgICAgIGNvbnN0IGlzRnJvbUN1cnJlbnRUcmVlID0gZHJhZ0VsZW1lbnQuZGF0YS50cmVlSWQgPT09IHRoaXMudHJlZU1vZGVsLnRyZWVJZDtcblxuICAgICAgICAgICAgICByZXR1cm4gKGlzTm90Um9vdEVsZW1lbnQgJiYgaXNGcm9tQ3VycmVudFRyZWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnN0IGlzRHJhZ0VuZCQgPSB0aGlzLmRyYWdBbmREcm9wLmRyb3AkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkYXRhOiBJRHJhZ0FuZERyb3ApOiBib29sZWFuID0+IHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgdGhpcy5pc09wZW4kID0gbWVyZ2UoaXNEcmFnU3RhcnQkLCBpc0RyYWdFbmQkKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyb3AoKSB7XG4gICAgdGhpcy5kcmFnQW5kRHJvcC5kcmFnRW5kKG51bGwpO1xuICB9XG5cbiAgcHVibGljIG9uRHJhZ092ZXIoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiJdfQ==