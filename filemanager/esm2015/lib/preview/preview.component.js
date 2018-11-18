/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostListener } from '@angular/core';
export class PreviewComponent {
    constructor() {
        /**
         * Current index
         */
        this.currentIndex = 0;
        this.length = 0;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.length = this.files.length;
        /** @type {?} */
        const selectedFiles = this.files
            .filter((file) => file.getId() === this.file.getId());
        this.currentIndex = selectedFiles.length === 1 ? this.files.indexOf(selectedFiles[0]) : -1;
    }
    /**
     * @return {?}
     */
    next() {
        if (this.currentIndex < this.length - 1) {
            this.currentIndex++;
        }
    }
    /**
     * @return {?}
     */
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyEvent(event) {
        if (event.keyCode === 37 || event.keyCode === 74) {
            this.prev();
        }
        if (event.keyCode === 39 || event.keyCode === 75) {
            this.next();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBYSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFTeEUsTUFBTSxPQUFPLGdCQUFnQjtJQUw3Qjs7OztRQW1CUyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBaUNwQixDQUFDOzs7O0lBL0JDLFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOztjQUUxQixhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDN0IsTUFBTSxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsRSxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7OztJQUVNLElBQUk7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVNLElBQUk7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBR00sUUFBUSxDQUFDLEtBQW9CO1FBQ2xDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxMkJBQTZCO2FBQzlCOzs7b0JBTUUsS0FBSzttQkFLTCxLQUFLO3VCQThCTCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFuQzFDLGlDQUE2Qjs7Ozs7SUFLN0IsZ0NBQTBCOzs7OztJQUsxQix3Q0FBd0I7O0lBRXhCLGtDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9maWxlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZmlsZS1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZXZpZXcuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgZmlsZXNcbiAgICovXG4gIEBJbnB1dCgpIGZpbGVzOiBJRmlsZU1vZGVsW107XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgdmlld2VkIGZpbGVcbiAgICovXG4gIEBJbnB1dCgpIGZpbGU6IElGaWxlTW9kZWw7XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBjdXJyZW50SW5kZXggPSAwO1xuXG4gIHB1YmxpYyBsZW5ndGggPSAwO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5maWxlcy5sZW5ndGg7XG5cbiAgICBjb25zdCBzZWxlY3RlZEZpbGVzID0gdGhpcy5maWxlc1xuICAgICAgLmZpbHRlcigoZmlsZTogRmlsZU1vZGVsKSA9PiBmaWxlLmdldElkKCkgPT09IHRoaXMuZmlsZS5nZXRJZCgpKTtcblxuICAgIHRoaXMuY3VycmVudEluZGV4ID0gc2VsZWN0ZWRGaWxlcy5sZW5ndGggPT09IDEgPyB0aGlzLmZpbGVzLmluZGV4T2Yoc2VsZWN0ZWRGaWxlc1swXSkgOiAtMTtcbiAgfVxuXG4gIHB1YmxpYyBuZXh0KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcHJldigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleUV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDc0KSB7XG4gICAgICB0aGlzLnByZXYoKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5Q29kZSA9PT0gNzUpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgfVxufVxuIl19