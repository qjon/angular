/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { DragAndDrop } from './dragAndDrop.service';
export class DraggableDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} dragAndDrop
     */
    constructor(el, renderer, dragAndDrop) {
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dragZone = null;
        this.sourceType = DragAndDrop.DROP_DATA_TYPE;
        this.dragEnabled = true;
        renderer.listen(el.nativeElement, 'dragstart', ($event) => {
            if (this.dragEnabled) {
                this.onDragStart($event);
            }
        });
        renderer.listen(el.nativeElement, 'dragend', () => {
            // on drag end we reset last drag element (this event is fired after drop)
            this.dragAndDrop.dragStart(null);
        });
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    onDragStart($event) {
        this.dragAndDrop.dragStart({ zoneId: this.dragZone, data: this.data, type: this.sourceType });
        $event.dataTransfer.effectAllowed = 'copy';
        $event.dataTransfer.dropEffect = 'copy';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.draggable = this.dragEnabled;
        if (!this.data) {
            throw new Error('DraggableDirective needs data');
        }
    }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[riDraggable]'
            },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer },
    { type: DragAndDrop }
];
DraggableDirective.propDecorators = {
    data: [{ type: Input }],
    dragZone: [{ type: Input }],
    sourceType: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DraggableDirective.prototype.data;
    /** @type {?} */
    DraggableDirective.prototype.dragZone;
    /** @type {?} */
    DraggableDirective.prototype.sourceType;
    /** @type {?} */
    DraggableDirective.prototype.dragEnabled;
    /**
     * @type {?}
     * @protected
     */
    DraggableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    DraggableDirective.prototype.dragAndDrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvZHJhZ0FuZERyb3AvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFLbEQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBTzdCLFlBQTZCLEVBQWMsRUFDaEIsUUFBa0IsRUFDaEIsV0FBd0I7UUFGeEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUDVDLGFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQy9CLGVBQVUsR0FBVyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBRWxELGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBS3hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN4RCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFO1lBQ2hELDBFQUEwRTtZQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxNQUFpQjtRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUU1RixNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBTGtCLFVBQVU7WUFBaUIsUUFBUTtZQUM5QyxXQUFXOzs7bUJBTWhCLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzs7O0lBRk4sa0NBQW1COztJQUNuQixzQ0FBd0M7O0lBQ3hDLHdDQUF5RDs7SUFFekQseUNBQTBCOzs7OztJQUVQLGdDQUF3Qjs7Ozs7SUFDeEIsc0NBQTBCOzs7OztJQUMxQix5Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JpRHJhZ2dhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBkcmFnWm9uZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHNvdXJjZVR5cGU6IHN0cmluZyA9IERyYWdBbmREcm9wLkRST1BfREFUQV9UWVBFO1xuXG4gIHB1YmxpYyBkcmFnRW5hYmxlZCA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIGRyYWdBbmREcm9wOiBEcmFnQW5kRHJvcCkge1xuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJhZ3N0YXJ0JywgKCRldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vbkRyYWdTdGFydCgkZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIubGlzdGVuKGVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgLy8gb24gZHJhZyBlbmQgd2UgcmVzZXQgbGFzdCBkcmFnIGVsZW1lbnQgKHRoaXMgZXZlbnQgaXMgZmlyZWQgYWZ0ZXIgZHJvcClcbiAgICAgIHRoaXMuZHJhZ0FuZERyb3AuZHJhZ1N0YXJ0KG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdTdGFydCgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIHRoaXMuZHJhZ0FuZERyb3AuZHJhZ1N0YXJ0KHt6b25lSWQ6IHRoaXMuZHJhZ1pvbmUsIGRhdGE6IHRoaXMuZGF0YSwgdHlwZTogdGhpcy5zb3VyY2VUeXBlfSk7XG5cbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnY29weSc7XG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kcmFnZ2FibGUgPSB0aGlzLmRyYWdFbmFibGVkO1xuXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHJhZ2dhYmxlRGlyZWN0aXZlIG5lZWRzIGRhdGEnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==