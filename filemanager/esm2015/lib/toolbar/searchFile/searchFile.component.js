/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchFilterService } from '../../services/searchFilter.service';
import { debounceTime } from 'rxjs/operators';
export class SearchFileComponent {
    /**
     * @param {?} searchFilterService
     */
    constructor(searchFilterService) {
        this.searchFilterService = searchFilterService;
        this.searchField = new FormControl();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.searchField.valueChanges
            .pipe(debounceTime(250))
            .subscribe((value) => this.searchFilterService.setValue(value));
    }
}
SearchFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-search-file',
                template: "<div class=\"input-group\">\n  <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'RI_FM_LBL_SEARCH_FOR' | translate}}\">\n  <span class=\"input-group-append\">\n      <button (click)=\"searchField.reset('')\" class=\"btn btn-secondary\" type=\"button\">\n          <i class=\"fa fa-times\"></i>\n      </button>\n  </span>\n</div>\n"
            }] }
];
/** @nocollapse */
SearchFileComponent.ctorParameters = () => [
    { type: SearchFilterService }
];
if (false) {
    /** @type {?} */
    SearchFileComponent.prototype.searchField;
    /**
     * @type {?}
     * @private
     */
    SearchFileComponent.prototype.searchFilterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoRmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi90b29sYmFyL3NlYXJjaEZpbGUvc2VhcmNoRmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU81QyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBSTlCLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRnJELGdCQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUd2QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTthQUMxQixJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNsQjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZ1lBQTBDO2FBQzNDOzs7O1lBTk8sbUJBQW1COzs7O0lBVXpCLDBDQUF1Qzs7Ozs7SUFFM0Isa0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaEZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLXNlYXJjaC1maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaEZpbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHNlYXJjaEZpZWxkID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWFyY2hGaWx0ZXJTZXJ2aWNlOiBTZWFyY2hGaWx0ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLnNlYXJjaEZpbHRlclNlcnZpY2Uuc2V0VmFsdWUodmFsdWUpKTtcbiAgfVxufVxuIl19