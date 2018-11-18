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
export class DroppableDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} dragAndDrop
     */
    constructor(el, renderer, dragAndDrop) {
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dropConfig = {};
        this.isDropAllowed = function () {
            /** @type {?} */
            const lastDragElement = this.dragAndDrop.getLastDragElement();
            /** @type {?} */
            const source = lastDragElement.data;
            /** @type {?} */
            const target = this.data;
            /** @type {?} */
            const dropZone = this.dropConfig.dropZone;
            if (dropZone && dropZone.length > 0 && dropZone.indexOf(lastDragElement.zoneId) === -1) {
                return false;
            }
            // todo: check drag and drop zones
            return !(source === target || target.id === source.parentId || target.parents.indexOf(source.id) > -1);
        };
        renderer.listen(el.nativeElement, 'dragover', ($event) => {
            $event.preventDefault();
            /** @type {?} */
            const dropAllowed = this.isDropAllowed();
            this.changeTargetCursor($event, dropAllowed);
            this.toggleDropClass(dropAllowed);
        });
        renderer.listen(el.nativeElement, 'dragleave', ($event) => {
            $event.preventDefault();
            this.toggleDropClass(false);
        });
        renderer.listen(el.nativeElement, 'drop', () => {
            this.toggleDropClass(false);
            if (this.isDropAllowed()) {
                this.dragAndDrop.dragEnd({ zones: this.dropConfig.dropZone, data: this.data });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initConfig();
        if (!this.data) {
            throw new Error('DroppableDirective needs data');
        }
    }
    /**
     * Add or remove additional class when drop allowed
     * @private
     * @param {?=} dropAllowed
     * @return {?}
     */
    toggleDropClass(dropAllowed = false) {
        this.renderer.setElementClass(this.el.nativeElement, this.dropConfig.dropAllowedCssClass, dropAllowed);
    }
    /**
     * Change drag event cursor
     * @private
     * @param {?} $event
     * @param {?=} add
     * @return {?}
     */
    changeTargetCursor($event, add = false) {
        /** @type {?} */
        const cursorType = add ? 'copy' : 'none';
        $event.dataTransfer.effectAllowed = cursorType;
        $event.dataTransfer.dropEffect = cursorType;
    }
    /**
     * initialize configuration options, use default or passed
     * @private
     * @return {?}
     */
    initConfig() {
        /** @type {?} */
        const defaultConfig = {
            dropAllowedCssClass: 'drop-allowed'
        };
        for (const key in defaultConfig) {
            if (defaultConfig.hasOwnProperty(key)) {
                this.dropConfig[key] = this.dropConfig[key] || defaultConfig[key];
            }
        }
    }
}
DroppableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[riDroppable]'
            },] }
];
/** @nocollapse */
DroppableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer },
    { type: DragAndDrop }
];
DroppableDirective.propDecorators = {
    data: [{ type: Input }],
    dropConfig: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvZHJhZ0FuZERyb3AvZHJvcHBhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHbEQsZ0NBR0M7OztJQUZDLHlDQUE2Qjs7SUFDN0IsOEJBQTJCOztBQU83QixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFJN0IsWUFBNkIsRUFBYyxFQUFVLFFBQWtCLEVBQVksV0FBd0I7UUFBOUUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBWSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZsRyxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBeUM3QixrQkFBYSxHQUFHOztrQkFDaEIsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUU7O2tCQUN2RCxNQUFNLEdBQUcsZUFBZSxDQUFDLElBQUk7O2tCQUM3QixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUk7O2tCQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBRXpDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN0RixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsa0NBQWtDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsUUFBUSxJQUFJ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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3BDb25maWcge1xuICBkcm9wQWxsb3dlZENzc0NsYXNzPzogc3RyaW5nO1xuICBkcm9wWm9uZT86IHN0cmluZ1tdIHwgbnVsbDtcbn1cblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmlEcm9wcGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhOiBJT3V0ZXJOb2RlO1xuICBASW5wdXQoKSBkcm9wQ29uZmlnOiBEcm9wQ29uZmlnID0ge307XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByb3RlY3RlZCBkcmFnQW5kRHJvcDogRHJhZ0FuZERyb3ApIHtcbiAgICByZW5kZXJlci5saXN0ZW4oZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJywgKCRldmVudCkgPT4ge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkcm9wQWxsb3dlZCA9IHRoaXMuaXNEcm9wQWxsb3dlZCgpO1xuXG4gICAgICB0aGlzLmNoYW5nZVRhcmdldEN1cnNvcigkZXZlbnQsIGRyb3BBbGxvd2VkKTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcENsYXNzKGRyb3BBbGxvd2VkKTtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLmxpc3RlbihlbC5uYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJywgKCRldmVudCkgPT4ge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvZ2dsZURyb3BDbGFzcyhmYWxzZSk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJlci5saXN0ZW4oZWwubmF0aXZlRWxlbWVudCwgJ2Ryb3AnLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZURyb3BDbGFzcyhmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoKSkge1xuICAgICAgICB0aGlzLmRyYWdBbmREcm9wLmRyYWdFbmQoe3pvbmVzOiB0aGlzLmRyb3BDb25maWcuZHJvcFpvbmUsIGRhdGE6IHRoaXMuZGF0YX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdENvbmZpZygpO1xuXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHJvcHBhYmxlRGlyZWN0aXZlIG5lZWRzIGRhdGEnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9yIHJlbW92ZSBhZGRpdGlvbmFsIGNsYXNzIHdoZW4gZHJvcCBhbGxvd2VkXG4gICAqIEBwYXJhbSBkcm9wQWxsb3dlZFxuICAgKi9cbiAgcHJpdmF0ZSB0b2dnbGVEcm9wQ2xhc3MoZHJvcEFsbG93ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5kcm9wQ29uZmlnLmRyb3BBbGxvd2VkQ3NzQ2xhc3MsIGRyb3BBbGxvd2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEcm9wQWxsb3dlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsYXN0RHJhZ0VsZW1lbnQgPSB0aGlzLmRyYWdBbmREcm9wLmdldExhc3REcmFnRWxlbWVudCgpO1xuICAgIGNvbnN0IHNvdXJjZSA9IGxhc3REcmFnRWxlbWVudC5kYXRhO1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkcm9wWm9uZSA9IHRoaXMuZHJvcENvbmZpZy5kcm9wWm9uZTtcblxuICAgIGlmIChkcm9wWm9uZSAmJiBkcm9wWm9uZS5sZW5ndGggPiAwICYmIGRyb3Bab25lLmluZGV4T2YobGFzdERyYWdFbGVtZW50LnpvbmVJZCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdG9kbzogY2hlY2sgZHJhZyBhbmQgZHJvcCB6b25lc1xuICAgIHJldHVybiAhKHNvdXJjZSA9PT0gdGFyZ2V0IHx8IHRhcmdldC5pZCA9PT0gc291cmNlLnBhcmVudElkIHx8IHRhcmdldC5wYXJlbnRzLmluZGV4T2Yoc291cmNlLmlkKSA+IC0xKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hhbmdlIGRyYWcgZXZlbnQgY3Vyc29yXG4gICAqIEBwYXJhbSAkZXZlbnRcbiAgICogQHBhcmFtIGFkZFxuICAgKi9cbiAgcHJpdmF0ZSBjaGFuZ2VUYXJnZXRDdXJzb3IoJGV2ZW50OiBEcmFnRXZlbnQsIGFkZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3Vyc29yVHlwZSA9IGFkZCA/ICdjb3B5JyA6ICdub25lJztcblxuICAgICRldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IGN1cnNvclR5cGU7XG4gICAgJGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gY3Vyc29yVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIGNvbmZpZ3VyYXRpb24gb3B0aW9ucywgdXNlIGRlZmF1bHQgb3IgcGFzc2VkXG4gICAqL1xuICBwcml2YXRlIGluaXRDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZzogRHJvcENvbmZpZyA9IHtcbiAgICAgIGRyb3BBbGxvd2VkQ3NzQ2xhc3M6ICdkcm9wLWFsbG93ZWQnXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHRDb25maWcpIHtcbiAgICAgIGlmIChkZWZhdWx0Q29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5kcm9wQ29uZmlnW2tleV0gPSB0aGlzLmRyb3BDb25maWdba2V5XSB8fCBkZWZhdWx0Q29uZmlnW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=