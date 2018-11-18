/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FileTypeFilterService } from '../../services/fileTypeFilter.service';
var FileTypeFilterComponent = /** @class */ (function () {
    function FileTypeFilterComponent(fileTypeFilter) {
        var _this = this;
        this.fileTypeFilter = fileTypeFilter;
        this.typeFilterList = [];
        this.selectedType = null;
        this.fileTypeFilter.filter$
            .subscribe(function (type) {
            _this.selectedType = type;
        });
    }
    /**
     * @return {?}
     */
    FileTypeFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** init file type filter **/
        this.typeFilterList
            .filter(function (type) {
            return type.defaultSelected;
        })
            .forEach(function (type) {
            _this.fileTypeFilter.setValue(type);
        });
    };
    /**
     * Set current filter and fire event
     * @param type
     */
    /**
     * Set current filter and fire event
     * @param {?} type
     * @return {?}
     */
    FileTypeFilterComponent.prototype.setFilterType = /**
     * Set current filter and fire event
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.fileTypeFilter.setValue(type);
    };
    FileTypeFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-file-type-filter',
                    template: "<div class=\"btn-group\">\n  <button *ngFor=\"let type of typeFilterList\" class=\"btn btn-secondary\" [ngClass]=\"{'active': type === selectedType}\"\n          (click)=\"setFilterType(type)\">\n    <i class=\"{{type.iconCls}}\"></i>\n  </button>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    FileTypeFilterComponent.ctorParameters = function () { return [
        { type: FileTypeFilterService }
    ]; };
    FileTypeFilterComponent.propDecorators = {
        typeFilterList: [{ type: Input }]
    };
    return FileTypeFilterComponent;
}());
export { FileTypeFilterComponent };
if (false) {
    /** @type {?} */
    FileTypeFilterComponent.prototype.typeFilterList;
    /** @type {?} */
    FileTypeFilterComponent.prototype.selectedType;
    /**
     * @type {?}
     * @private
     */
    FileTypeFilterComponent.prototype.fileTypeFilter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZVR5cGVGaWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci9maWxlVHlwZUZpbHRlci9maWxlVHlwZUZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRTVFO0lBVUUsaUNBQW9CLGNBQXFDO1FBQXpELGlCQUtDO1FBTG1CLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUpoRCxtQkFBYyxHQUFzQixFQUFFLENBQUM7UUFFekMsaUJBQVksR0FBb0IsSUFBSSxDQUFDO1FBRzFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTzthQUN4QixTQUFTLENBQUMsVUFBQyxJQUE0QjtZQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJDLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsY0FBYzthQUNoQixNQUFNLENBQUMsVUFBQyxJQUFxQjtZQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQyxDQUFDO2FBQ0QsT0FBTyxDQUFDLFVBQUMsSUFBcUI7WUFDN0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSwrQ0FBYTs7Ozs7SUFBcEIsVUFBcUIsSUFBcUI7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw2UUFBOEM7aUJBQy9DOzs7O2dCQUxPLHFCQUFxQjs7O2lDQVExQixLQUFLOztJQTZCUiw4QkFBQztDQUFBLEFBbkNELElBbUNDO1NBOUJZLHVCQUF1Qjs7O0lBQ2xDLGlEQUFnRDs7SUFFaEQsK0NBQTRDOzs7OztJQUVoQyxpREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlVHlwZUZpbHRlcn0gZnJvbSAnLi4vaW50ZXJmYWNlL0lGaWxlVHlwZUZpbHRlcic7XG5pbXBvcnQge0ZpbGVUeXBlRmlsdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmlsZVR5cGVGaWx0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGUtdHlwZS1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZVR5cGVGaWx0ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0eXBlRmlsdGVyTGlzdDogSUZpbGVUeXBlRmlsdGVyW10gPSBbXTtcblxuICBwdWJsaWMgc2VsZWN0ZWRUeXBlOiBJRmlsZVR5cGVGaWx0ZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZVR5cGVGaWx0ZXI6IEZpbGVUeXBlRmlsdGVyU2VydmljZSkge1xuICAgIHRoaXMuZmlsZVR5cGVGaWx0ZXIuZmlsdGVyJFxuICAgICAgLnN1YnNjcmliZSgodHlwZTogSUZpbGVUeXBlRmlsdGVyIHwgbnVsbCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVHlwZSA9IHR5cGU7XG4gICAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqIGluaXQgZmlsZSB0eXBlIGZpbHRlciAqKi9cbiAgICB0aGlzLnR5cGVGaWx0ZXJMaXN0XG4gICAgICAuZmlsdGVyKCh0eXBlOiBJRmlsZVR5cGVGaWx0ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGUuZGVmYXVsdFNlbGVjdGVkO1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKCh0eXBlOiBJRmlsZVR5cGVGaWx0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5maWxlVHlwZUZpbHRlci5zZXRWYWx1ZSh0eXBlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjdXJyZW50IGZpbHRlciBhbmQgZmlyZSBldmVudFxuICAgKiBAcGFyYW0gdHlwZVxuICAgKi9cbiAgcHVibGljIHNldEZpbHRlclR5cGUodHlwZTogSUZpbGVUeXBlRmlsdGVyKSB7XG4gICAgdGhpcy5maWxlVHlwZUZpbHRlci5zZXRWYWx1ZSh0eXBlKTtcbiAgfVxufVxuIl19