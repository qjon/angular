/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { DragAndDrop } from './dragAndDrop.service';
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, renderer, dragAndDrop) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dragZone = null;
        this.sourceType = DragAndDrop.DROP_DATA_TYPE;
        this.dragEnabled = true;
        renderer.listen(el.nativeElement, 'dragstart', function ($event) {
            if (_this.dragEnabled) {
                _this.onDragStart($event);
            }
        });
        renderer.listen(el.nativeElement, 'dragend', function () {
            // on drag end we reset last drag element (this event is fired after drop)
            _this.dragAndDrop.dragStart(null);
        });
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    DraggableDirective.prototype.onDragStart = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.dragAndDrop.dragStart({ zoneId: this.dragZone, data: this.data, type: this.sourceType });
        $event.dataTransfer.effectAllowed = 'copy';
        $event.dataTransfer.dropEffect = 'copy';
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.draggable = this.dragEnabled;
        if (!this.data) {
            throw new Error('DraggableDirective needs data');
        }
    };
    DraggableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[riDraggable]'
                },] }
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer },
        { type: DragAndDrop }
    ]; };
    DraggableDirective.propDecorators = {
        data: [{ type: Input }],
        dragZone: [{ type: Input }],
        sourceType: [{ type: Input }]
    };
    return DraggableDirective;
}());
export { DraggableDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvZHJhZ0FuZERyb3AvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFbEQ7SUFVRSw0QkFBNkIsRUFBYyxFQUNoQixRQUFrQixFQUNoQixXQUF3QjtRQUZyRCxpQkFhQztRQWI0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFQNUMsYUFBUSxHQUFrQixJQUFJLENBQUM7UUFDL0IsZUFBVSxHQUFXLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFFbEQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFLeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFDLE1BQU07WUFDcEQsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFO1lBQzNDLDBFQUEwRTtZQUMxRSxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLHdDQUFXOzs7OztJQUFuQixVQUFvQixNQUFpQjtRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUU1RixNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFTSxxQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVuRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQUxrQixVQUFVO2dCQUFpQixRQUFRO2dCQUM5QyxXQUFXOzs7dUJBTWhCLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQWlDUix5QkFBQztDQUFBLEFBdkNELElBdUNDO1NBcENZLGtCQUFrQjs7O0lBQzdCLGtDQUFtQjs7SUFDbkIsc0NBQXdDOztJQUN4Qyx3Q0FBeUQ7O0lBRXpELHlDQUEwQjs7Ozs7SUFFUCxnQ0FBd0I7Ozs7O0lBQ3hCLHNDQUEwQjs7Ozs7SUFDMUIseUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZ0FuZERyb3Auc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyaURyYWdnYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgZHJhZ1pvbmU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBzb3VyY2VUeXBlOiBzdHJpbmcgPSBEcmFnQW5kRHJvcC5EUk9QX0RBVEFfVFlQRTtcblxuICBwdWJsaWMgZHJhZ0VuYWJsZWQgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBkcmFnQW5kRHJvcDogRHJhZ0FuZERyb3ApIHtcbiAgICByZW5kZXJlci5saXN0ZW4oZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdzdGFydCcsICgkZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQoJGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIC8vIG9uIGRyYWcgZW5kIHdlIHJlc2V0IGxhc3QgZHJhZyBlbGVtZW50ICh0aGlzIGV2ZW50IGlzIGZpcmVkIGFmdGVyIGRyb3ApXG4gICAgICB0aGlzLmRyYWdBbmREcm9wLmRyYWdTdGFydChudWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnU3RhcnQoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICB0aGlzLmRyYWdBbmREcm9wLmRyYWdTdGFydCh7em9uZUlkOiB0aGlzLmRyYWdab25lLCBkYXRhOiB0aGlzLmRhdGEsIHR5cGU6IHRoaXMuc291cmNlVHlwZX0pO1xuXG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ2NvcHknO1xuICAgICRldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gdGhpcy5kcmFnRW5hYmxlZDtcblxuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RyYWdnYWJsZURpcmVjdGl2ZSBuZWVkcyBkYXRhJyk7XG4gICAgfVxuICB9XG59XG4iXX0=