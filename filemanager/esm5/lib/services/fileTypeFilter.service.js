/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var FileTypeFilterService = /** @class */ (function () {
    function FileTypeFilterService() {
        /**
         * File type filter
         */
        this.filter$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    FileTypeFilterService.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.filter$.getValue();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileTypeFilterService.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.filter$.next(value);
    };
    FileTypeFilterService.decorators = [
        { type: Injectable }
    ];
    return FileTypeFilterService;
}());
export { FileTypeFilterService };
if (false) {
    /**
     * File type filter
     * @type {?}
     */
    FileTypeFilterService.prototype.filter$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZVR5cGVGaWx0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUdyQztJQUFBOzs7O1FBTVMsWUFBTyxHQUE0QyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQVN0RixDQUFDOzs7O0lBUFEsd0NBQVE7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRU0sd0NBQVE7Ozs7SUFBZixVQUFnQixLQUE2QjtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFkRixVQUFVOztJQWVYLDRCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFkscUJBQXFCOzs7Ozs7SUFLaEMsd0NBQW9GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7SUZpbGVUeXBlRmlsdGVyfSBmcm9tICcuLi90b29sYmFyL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVGaWx0ZXJTZXJ2aWNlIHtcblxuICAvKipcbiAgICogRmlsZSB0eXBlIGZpbHRlclxuICAgKi9cbiAgcHVibGljIGZpbHRlciQ6IEJlaGF2aW9yU3ViamVjdDxJRmlsZVR5cGVGaWx0ZXIgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHVibGljIGdldFZhbHVlKCk6IElGaWxlVHlwZUZpbHRlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogSUZpbGVUeXBlRmlsdGVyIHwgbnVsbCkge1xuICAgIHRoaXMuZmlsdGVyJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIl19