/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FileTypeFilterService } from '../../services/fileTypeFilter.service';
export class FileTypeFilterComponent {
    /**
     * @param {?} fileTypeFilter
     */
    constructor(fileTypeFilter) {
        this.fileTypeFilter = fileTypeFilter;
        this.typeFilterList = [];
        this.selectedType = null;
        this.fileTypeFilter.filter$
            .subscribe((type) => {
            this.selectedType = type;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** init file type filter **/
        this.typeFilterList
            .filter((type) => {
            return type.defaultSelected;
        })
            .forEach((type) => {
            this.fileTypeFilter.setValue(type);
        });
    }
    /**
     * Set current filter and fire event
     * @param {?} type
     * @return {?}
     */
    setFilterType(type) {
        this.fileTypeFilter.setValue(type);
    }
}
FileTypeFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-file-type-filter',
                template: "<div class=\"btn-group\">\n  <button *ngFor=\"let type of typeFilterList\" class=\"btn btn-secondary\" [ngClass]=\"{'active': type === selectedType}\"\n          (click)=\"setFilterType(type)\">\n    <i class=\"{{type.iconCls}}\"></i>\n  </button>\n</div>\n"
            }] }
];
/** @nocollapse */
FileTypeFilterComponent.ctorParameters = () => [
    { type: FileTypeFilterService }
];
FileTypeFilterComponent.propDecorators = {
    typeFilterList: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZVR5cGVGaWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci9maWxlVHlwZUZpbHRlci9maWxlVHlwZUZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBTzVFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFLbEMsWUFBb0IsY0FBcUM7UUFBckMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBSmhELG1CQUFjLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxpQkFBWSxHQUFvQixJQUFJLENBQUM7UUFHMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPO2FBQ3hCLFNBQVMsQ0FBQyxDQUFDLElBQTRCLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxjQUFjO2FBQ2hCLE1BQU0sQ0FBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQyxDQUFDO2FBQ0QsT0FBTyxDQUFDLENBQUMsSUFBcUIsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBTU0sYUFBYSxDQUFDLElBQXFCO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsNlFBQThDO2FBQy9DOzs7O1lBTE8scUJBQXFCOzs7NkJBUTFCLEtBQUs7Ozs7SUFBTixpREFBZ0Q7O0lBRWhELCtDQUE0Qzs7Ozs7SUFFaEMsaURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRmlsZVR5cGVGaWx0ZXJ9IGZyb20gJy4uL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuaW1wb3J0IHtGaWxlVHlwZUZpbHRlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1maWxlLXR5cGUtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGVUeXBlRmlsdGVyLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVUeXBlRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdHlwZUZpbHRlckxpc3Q6IElGaWxlVHlwZUZpbHRlcltdID0gW107XG5cbiAgcHVibGljIHNlbGVjdGVkVHlwZTogSUZpbGVUeXBlRmlsdGVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVUeXBlRmlsdGVyOiBGaWxlVHlwZUZpbHRlclNlcnZpY2UpIHtcbiAgICB0aGlzLmZpbGVUeXBlRmlsdGVyLmZpbHRlciRcbiAgICAgIC5zdWJzY3JpYmUoKHR5cGU6IElGaWxlVHlwZUZpbHRlciB8IG51bGwpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFR5cGUgPSB0eXBlO1xuICAgICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qKiBpbml0IGZpbGUgdHlwZSBmaWx0ZXIgKiovXG4gICAgdGhpcy50eXBlRmlsdGVyTGlzdFxuICAgICAgLmZpbHRlcigodHlwZTogSUZpbGVUeXBlRmlsdGVyKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlLmRlZmF1bHRTZWxlY3RlZDtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaCgodHlwZTogSUZpbGVUeXBlRmlsdGVyKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZVR5cGVGaWx0ZXIuc2V0VmFsdWUodHlwZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY3VycmVudCBmaWx0ZXIgYW5kIGZpcmUgZXZlbnRcbiAgICogQHBhcmFtIHR5cGVcbiAgICovXG4gIHB1YmxpYyBzZXRGaWx0ZXJUeXBlKHR5cGU6IElGaWxlVHlwZUZpbHRlcikge1xuICAgIHRoaXMuZmlsZVR5cGVGaWx0ZXIuc2V0VmFsdWUodHlwZSk7XG4gIH1cbn1cbiJdfQ==