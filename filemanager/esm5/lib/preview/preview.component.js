/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostListener } from '@angular/core';
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
        /**
         * Current index
         */
        this.currentIndex = 0;
        this.length = 0;
    }
    /**
     * @return {?}
     */
    PreviewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.length = this.files.length;
        /** @type {?} */
        var selectedFiles = this.files
            .filter(function (file) { return file.getId() === _this.file.getId(); });
        this.currentIndex = selectedFiles.length === 1 ? this.files.indexOf(selectedFiles[0]) : -1;
    };
    /**
     * @return {?}
     */
    PreviewComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.currentIndex < this.length - 1) {
            this.currentIndex++;
        }
    };
    /**
     * @return {?}
     */
    PreviewComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PreviewComponent.prototype.keyEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 37 || event.keyCode === 74) {
            this.prev();
        }
        if (event.keyCode === 39 || event.keyCode === 75) {
            this.next();
        }
    };
    PreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-file-preview',
                    template: "<div class=\"filemanager-preview\">\n  <div class=\"carousel slide\">\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item\" *ngFor=\"let file of files; let i = index;\" [ngClass]=\"{'active': i == currentIndex}\">\n        <img src=\"{{file.url}}\" alt=\"{{file.name}}\" style=\"margin: 0 auto; display: block;\">\n        <div class=\"carousel-caption\">{{file.name}}</div>\n      </div>\n    </div>\n    <a class=\"left carousel-control-prev\" role=\"button\" (click)=\"prev()\" *ngIf=\"currentIndex != 0\">\n      <span class=\"fa fa-3x fa-chevron-left\" aria-hidden=\"true\"></span>\n    </a>\n    <a class=\"right carousel-control-next\" role=\"button\" (click)=\"next()\" *ngIf=\"currentIndex + 1 < length\">\n      <span class=\"fa fa-3x fa-chevron-right\" aria-hidden=\"true\"></span>\n    </a>\n  </div>\n</div>\n"
                }] }
    ];
    PreviewComponent.propDecorators = {
        files: [{ type: Input }],
        file: [{ type: Input }],
        keyEvent: [{ type: HostListener, args: ['window:keydown', ['$event'],] }]
    };
    return PreviewComponent;
}());
export { PreviewComponent };
if (false) {
    /**
     * Collection of files
     * @type {?}
     */
    PreviewComponent.prototype.files;
    /**
     * Current viewed file
     * @type {?}
     */
    PreviewComponent.prototype.file;
    /**
     * Current index
     * @type {?}
     */
    PreviewComponent.prototype.currentIndex;
    /** @type {?} */
    PreviewComponent.prototype.length;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBYSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJeEU7SUFBQTs7OztRQW1CUyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBaUNwQixDQUFDOzs7O0lBL0JDLHNDQUFXOzs7SUFBWDtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7WUFFMUIsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQzdCLE1BQU0sQ0FBQyxVQUFDLElBQWUsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFsQyxDQUFrQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7O0lBRU0sK0JBQUk7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFTSwrQkFBSTs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBR00sbUNBQVE7Ozs7SUFEZixVQUNnQixLQUFvQjtRQUNsQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IscTJCQUE2QjtpQkFDOUI7Ozt3QkFNRSxLQUFLO3VCQUtMLEtBQUs7MkJBOEJMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFVNUMsdUJBQUM7Q0FBQSxBQXRERCxJQXNEQztTQWpEWSxnQkFBZ0I7Ozs7OztJQUkzQixpQ0FBNkI7Ozs7O0lBSzdCLGdDQUEwQjs7Ozs7SUFLMUIsd0NBQXdCOztJQUV4QixrQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgSG9zdExpc3RlbmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7RmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvZmlsZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGUtcHJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmV2aWV3Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIGZpbGVzXG4gICAqL1xuICBASW5wdXQoKSBmaWxlczogSUZpbGVNb2RlbFtdO1xuXG4gIC8qKlxuICAgKiBDdXJyZW50IHZpZXdlZCBmaWxlXG4gICAqL1xuICBASW5wdXQoKSBmaWxlOiBJRmlsZU1vZGVsO1xuXG4gIC8qKlxuICAgKiBDdXJyZW50IGluZGV4XG4gICAqL1xuICBwdWJsaWMgY3VycmVudEluZGV4ID0gMDtcblxuICBwdWJsaWMgbGVuZ3RoID0gMDtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWxlcyA9IHRoaXMuZmlsZXNcbiAgICAgIC5maWx0ZXIoKGZpbGU6IEZpbGVNb2RlbCkgPT4gZmlsZS5nZXRJZCgpID09PSB0aGlzLmZpbGUuZ2V0SWQoKSk7XG5cbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHNlbGVjdGVkRmlsZXMubGVuZ3RoID09PSAxID8gdGhpcy5maWxlcy5pbmRleE9mKHNlbGVjdGVkRmlsZXNbMF0pIDogLTE7XG4gIH1cblxuICBwdWJsaWMgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHByZXYoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA3NCkge1xuICAgICAgdGhpcy5wcmV2KCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5IHx8IGV2ZW50LmtleUNvZGUgPT09IDc1KSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==