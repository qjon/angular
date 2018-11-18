/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class FileTypeFilterService {
    constructor() {
        /**
         * File type filter
         */
        this.filter$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.filter$.getValue();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.filter$.next(value);
    }
}
FileTypeFilterService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * File type filter
     * @type {?}
     */
    FileTypeFilterService.prototype.filter$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZVR5cGVGaWx0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUlyQyxNQUFNLE9BQU8scUJBQXFCO0lBRGxDOzs7O1FBTVMsWUFBTyxHQUE0QyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQVN0RixDQUFDOzs7O0lBUFEsUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUE2QjtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFkRixVQUFVOzs7Ozs7O0lBTVQsd0NBQW9GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7SUZpbGVUeXBlRmlsdGVyfSBmcm9tICcuLi90b29sYmFyL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVGaWx0ZXJTZXJ2aWNlIHtcblxuICAvKipcbiAgICogRmlsZSB0eXBlIGZpbHRlclxuICAgKi9cbiAgcHVibGljIGZpbHRlciQ6IEJlaGF2aW9yU3ViamVjdDxJRmlsZVR5cGVGaWx0ZXIgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHVibGljIGdldFZhbHVlKCk6IElGaWxlVHlwZUZpbHRlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogSUZpbGVUeXBlRmlsdGVyIHwgbnVsbCkge1xuICAgIHRoaXMuZmlsdGVyJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIl19