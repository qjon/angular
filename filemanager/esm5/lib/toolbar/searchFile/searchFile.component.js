/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchFilterService } from '../../services/searchFilter.service';
import { debounceTime } from 'rxjs/operators';
var SearchFileComponent = /** @class */ (function () {
    function SearchFileComponent(searchFilterService) {
        this.searchFilterService = searchFilterService;
        this.searchField = new FormControl();
    }
    /**
     * @return {?}
     */
    SearchFileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.searchField.valueChanges
            .pipe(debounceTime(250))
            .subscribe(function (value) { return _this.searchFilterService.setValue(value); });
    };
    SearchFileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-search-file',
                    template: "<div class=\"input-group\">\n  <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'RI_FM_LBL_SEARCH_FOR' | translate}}\">\n  <span class=\"input-group-append\">\n      <button (click)=\"searchField.reset('')\" class=\"btn btn-secondary\" type=\"button\">\n          <i class=\"fa fa-times\"></i>\n      </button>\n  </span>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    SearchFileComponent.ctorParameters = function () { return [
        { type: SearchFilterService }
    ]; };
    return SearchFileComponent;
}());
export { SearchFileComponent };
if (false) {
    /** @type {?} */
    SearchFileComponent.prototype.searchField;
    /**
     * @type {?}
     * @private
     */
    SearchFileComponent.prototype.searchFilterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoRmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi90b29sYmFyL3NlYXJjaEZpbGUvc2VhcmNoRmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QztJQVNFLDZCQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUZyRCxnQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFHdkMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO2FBQzFCLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO2FBQ0EsU0FBUyxDQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ1lBQTBDO2lCQUMzQzs7OztnQkFOTyxtQkFBbUI7O0lBc0IzQiwwQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFksbUJBQW1COzs7SUFFOUIsMENBQXVDOzs7OztJQUUzQixrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktc2VhcmNoLWZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoRmlsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgc2VhcmNoRmllbGQgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlYXJjaEZpbHRlclNlcnZpY2U6IFNlYXJjaEZpbHRlclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDI1MClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2VhcmNoRmlsdGVyU2VydmljZS5zZXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG59XG4iXX0=