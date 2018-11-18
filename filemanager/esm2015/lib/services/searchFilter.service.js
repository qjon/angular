/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class SearchFilterService {
    constructor() {
        /**
         * File type filter
         */
        this.filter$ = new BehaviorSubject('');
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
SearchFilterService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * File type filter
     * @type {?}
     */
    SearchFilterService.prototype.filter$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoRmlsdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZWFyY2hGaWx0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR3JDLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7Ozs7UUFLUyxZQUFPLEdBQTRCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBU3BFLENBQUM7Ozs7SUFQUSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBYkYsVUFBVTs7Ozs7OztJQUtULHNDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEZpbGUgdHlwZSBmaWx0ZXJcbiAgICovXG4gIHB1YmxpYyBmaWx0ZXIkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuXG4gIHB1YmxpYyBnZXRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5maWx0ZXIkLm5leHQodmFsdWUpO1xuICB9XG59XG4iXX0=