/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { DragAndDrop } from './dragAndDrop.service';
/**
 * @record
 */
export function DropConfig() { }
if (false) {
    /** @type {?|undefined} */
    DropConfig.prototype.dropAllowedCssClass;
    /** @type {?|undefined} */
    DropConfig.prototype.dropZone;
}
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el, renderer, dragAndDrop) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dropConfig = {};
        this.isDropAllowed = function () {
            /** @type {?} */
            var lastDragElement = this.dragAndDrop.getLastDragElement();
            /** @type {?} */
            var source = lastDragElement.data;
            /** @type {?} */
            var target = this.data;
            /** @type {?} */
            var dropZone = this.dropConfig.dropZone;
            if (dropZone && dropZone.length > 0 && dropZone.indexOf(lastDragElement.zoneId) === -1) {
                return false;
            }
            // todo: check drag and drop zones
            return !(source === target || target.id === source.parentId || target.parents.indexOf(source.id) > -1);
        };
        renderer.listen(el.nativeElement, 'dragover', function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var dropAllowed = _this.isDropAllowed();
            _this.changeTargetCursor($event, dropAllowed);
            _this.toggleDropClass(dropAllowed);
        });
        renderer.listen(el.nativeElement, 'dragleave', function ($event) {
            $event.preventDefault();
            _this.toggleDropClass(false);
        });
        renderer.listen(el.nativeElement, 'drop', function () {
            _this.toggleDropClass(false);
            if (_this.isDropAllowed()) {
                _this.dragAndDrop.dragEnd({ zones: _this.dropConfig.dropZone, data: _this.data });
            }
        });
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initConfig();
        if (!this.data) {
            throw new Error('DroppableDirective needs data');
        }
    };
    /**
     * Add or remove additional class when drop allowed
     * @param dropAllowed
     */
    /**
     * Add or remove additional class when drop allowed
     * @private
     * @param {?=} dropAllowed
     * @return {?}
     */
    DroppableDirective.prototype.toggleDropClass = /**
     * Add or remove additional class when drop allowed
     * @private
     * @param {?=} dropAllowed
     * @return {?}
     */
    function (dropAllowed) {
        if (dropAllowed === void 0) { dropAllowed = false; }
        this.renderer.setElementClass(this.el.nativeElement, this.dropConfig.dropAllowedCssClass, dropAllowed);
    };
    /**
     * Change drag event cursor
     * @param $event
     * @param add
     */
    /**
     * Change drag event cursor
     * @private
     * @param {?} $event
     * @param {?=} add
     * @return {?}
     */
    DroppableDirective.prototype.changeTargetCursor = /**
     * Change drag event cursor
     * @private
     * @param {?} $event
     * @param {?=} add
     * @return {?}
     */
    function ($event, add) {
        if (add === void 0) { add = false; }
        /** @type {?} */
        var cursorType = add ? 'copy' : 'none';
        $event.dataTransfer.effectAllowed = cursorType;
        $event.dataTransfer.dropEffect = cursorType;
    };
    /**
     * initialize configuration options, use default or passed
     */
    /**
     * initialize configuration options, use default or passed
     * @private
     * @return {?}
     */
    DroppableDirective.prototype.initConfig = /**
     * initialize configuration options, use default or passed
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultConfig = {
            dropAllowedCssClass: 'drop-allowed'
        };
        for (var key in defaultConfig) {
            if (defaultConfig.hasOwnProperty(key)) {
                this.dropConfig[key] = this.dropConfig[key] || defaultConfig[key];
            }
        }
    };
    DroppableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[riDroppable]'
                },] }
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer },
        { type: DragAndDrop }
    ]; };
    DroppableDirective.propDecorators = {
        data: [{ type: Input }],
        dropConfig: [{ type: Input }]
    };
    return DroppableDirective;
}());
export { DroppableDirective };
if (false) {
    /** @type {?} */
    DroppableDirective.prototype.data;
    /** @type {?} */
    DroppableDirective.prototype.dropConfig;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.isDropAllowed;
    /**
     * @type {?}
     * @protected
     */
    DroppableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    DroppableDirective.prototype.dragAndDrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvZHJhZ0FuZERyb3AvZHJvcHBhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHbEQsZ0NBR0M7OztJQUZDLHlDQUE2Qjs7SUFDN0IsOEJBQTJCOztBQUk3QjtJQU9FLDRCQUE2QixFQUFjLEVBQVUsUUFBa0IsRUFBWSxXQUF3QjtRQUEzRyxpQkFxQkM7UUFyQjRCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGbEcsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQXlDN0Isa0JBQWEsR0FBRzs7Z0JBQ2hCLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFOztnQkFDdkQsTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJOztnQkFDN0IsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJOztnQkFDbEIsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUV6QyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDdEYsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELGtDQUFrQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENB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SUFzRkM7U0FuRlksa0JBQWtCOzs7SUFDN0Isa0NBQTBCOztJQUMxQix3Q0FBcUM7Ozs7O0lBeUNyQywyQ0FZRTs7Ozs7SUFuRGlCLGdDQUF3Qjs7Ozs7SUFBRSxzQ0FBMEI7Ozs7O0lBQUUseUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gJy4vZHJhZ0FuZERyb3Auc2VydmljZSc7XG5pbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcENvbmZpZyB7XG4gIGRyb3BBbGxvd2VkQ3NzQ2xhc3M/OiBzdHJpbmc7XG4gIGRyb3Bab25lPzogc3RyaW5nW10gfCBudWxsO1xufVxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyaURyb3BwYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IElPdXRlck5vZGU7XG4gIEBJbnB1dCgpIGRyb3BDb25maWc6IERyb3BDb25maWcgPSB7fTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJvdGVjdGVkIGRyYWdBbmREcm9wOiBEcmFnQW5kRHJvcCkge1xuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInLCAoJGV2ZW50KSA9PiB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRyb3BBbGxvd2VkID0gdGhpcy5pc0Ryb3BBbGxvd2VkKCk7XG5cbiAgICAgIHRoaXMuY2hhbmdlVGFyZ2V0Q3Vyc29yKCRldmVudCwgZHJvcEFsbG93ZWQpO1xuICAgICAgdGhpcy50b2dnbGVEcm9wQ2xhc3MoZHJvcEFsbG93ZWQpO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIubGlzdGVuKGVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnLCAoJGV2ZW50KSA9PiB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcENsYXNzKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJvcCcsICgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcENsYXNzKGZhbHNlKTtcblxuICAgICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZCgpKSB7XG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AuZHJhZ0VuZCh7em9uZXM6IHRoaXMuZHJvcENvbmZpZy5kcm9wWm9uZSwgZGF0YTogdGhpcy5kYXRhfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0Q29uZmlnKCk7XG5cbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcm9wcGFibGVEaXJlY3RpdmUgbmVlZHMgZGF0YScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb3IgcmVtb3ZlIGFkZGl0aW9uYWwgY2xhc3Mgd2hlbiBkcm9wIGFsbG93ZWRcbiAgICogQHBhcmFtIGRyb3BBbGxvd2VkXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZURyb3BDbGFzcyhkcm9wQWxsb3dlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmRyb3BDb25maWcuZHJvcEFsbG93ZWRDc3NDbGFzcywgZHJvcEFsbG93ZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Ryb3BBbGxvd2VkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxhc3REcmFnRWxlbWVudCA9IHRoaXMuZHJhZ0FuZERyb3AuZ2V0TGFzdERyYWdFbGVtZW50KCk7XG4gICAgY29uc3Qgc291cmNlID0gbGFzdERyYWdFbGVtZW50LmRhdGE7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRyb3Bab25lID0gdGhpcy5kcm9wQ29uZmlnLmRyb3Bab25lO1xuXG4gICAgaWYgKGRyb3Bab25lICYmIGRyb3Bab25lLmxlbmd0aCA+IDAgJiYgZHJvcFpvbmUuaW5kZXhPZihsYXN0RHJhZ0VsZW1lbnQuem9uZUlkKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0b2RvOiBjaGVjayBkcmFnIGFuZCBkcm9wIHpvbmVzXG4gICAgcmV0dXJuICEoc291cmNlID09PSB0YXJnZXQgfHwgdGFyZ2V0LmlkID09PSBzb3VyY2UucGFyZW50SWQgfHwgdGFyZ2V0LnBhcmVudHMuaW5kZXhPZihzb3VyY2UuaWQpID4gLTEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZHJhZyBldmVudCBjdXJzb3JcbiAgICogQHBhcmFtICRldmVudFxuICAgKiBAcGFyYW0gYWRkXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZVRhcmdldEN1cnNvcigkZXZlbnQ6IERyYWdFdmVudCwgYWRkID0gZmFsc2UpIHtcbiAgICBjb25zdCBjdXJzb3JUeXBlID0gYWRkID8gJ2NvcHknIDogJ25vbmUnO1xuXG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gY3Vyc29yVHlwZTtcbiAgICAkZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBjdXJzb3JUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIGluaXRpYWxpemUgY29uZmlndXJhdGlvbiBvcHRpb25zLCB1c2UgZGVmYXVsdCBvciBwYXNzZWRcbiAgICovXG4gIHByaXZhdGUgaW5pdENvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnOiBEcm9wQ29uZmlnID0ge1xuICAgICAgZHJvcEFsbG93ZWRDc3NDbGFzczogJ2Ryb3AtYWxsb3dlZCdcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdENvbmZpZykge1xuICAgICAgaWYgKGRlZmF1bHRDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLmRyb3BDb25maWdba2V5XSA9IHRoaXMuZHJvcENvbmZpZ1trZXldIHx8IGRlZmF1bHRDb25maWdba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==