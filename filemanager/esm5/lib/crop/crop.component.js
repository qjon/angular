/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import { FileModel } from '../filesList/file.model';
import { CropperSettings } from 'ng2-img-cropper/src/cropperSettings';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { Store } from '@ngrx/store';
import { CropFileAction } from '../store/file-manager.action';
var CropComponent = /** @class */ (function () {
    function CropComponent(resolver, configuration, store) {
        this.resolver = resolver;
        this.configuration = configuration;
        this.store = store;
        this.onCrop = new EventEmitter();
        this.cropSizeList = configuration.allowedCropSize;
    }
    /**
     * @param {?} cropSize
     * @return {?}
     */
    CropComponent.prototype.updateCropSize = /**
     * @param {?} cropSize
     * @return {?}
     */
    function (cropSize) {
        var _this = this;
        /** @type {?} */
        var image = new Image();
        /** @type {?} */
        var cropperComponent = this.resolver.resolveComponentFactory(ImageCropperComponent);
        /** @type {?} */
        var cropperComponentRef = this.container.createComponent(cropperComponent);
        if (this.container.length > 1) {
            this.container.detach(0);
        }
        this.currentCropSize = cropSize;
        cropperComponentRef.instance.settings = this.getCropperSettings();
        cropperComponentRef.instance.image = {};
        cropperComponentRef.instance.onCrop
            .subscribe(function (bounds) { return _this.bounds = bounds; });
        setTimeout(function () {
            image.src = _this.file.url;
            cropperComponentRef.instance.setImage(image);
        });
    };
    /**
     * @return {?}
     */
    CropComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateCropSize(this.cropSizeList[0]);
    };
    /**
     * @return {?}
     */
    CropComponent.prototype.cropImage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var bounds = {
            x: this.bounds.left,
            y: this.bounds.top,
            width: this.bounds.width,
            height: this.bounds.height
        };
        this.store.dispatch(new CropFileAction({ file: this.file, bounds: bounds }));
    };
    /**
     * @private
     * @return {?}
     */
    CropComponent.prototype.getCropperSettings = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cropperSettings = new CropperSettings();
        /** @type {?} */
        var scale = this.calculateScale();
        /** @type {?} */
        var width = scale * this.file.getWidth();
        /** @type {?} */
        var height = scale * this.file.getHeight();
        cropperSettings.noFileInput = true;
        cropperSettings.width = this.currentCropSize.width;
        cropperSettings.height = this.currentCropSize.height;
        cropperSettings.canvasWidth = width;
        cropperSettings.canvasHeight = height;
        return cropperSettings;
    };
    /**
     * Calculates scale between current file dimensions and box 600x600
     */
    /**
     * Calculates scale between current file dimensions and box 600x600
     * @private
     * @return {?}
     */
    CropComponent.prototype.calculateScale = /**
     * Calculates scale between current file dimensions and box 600x600
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scale = this.file.getWidth() / this.file.getHeight();
        if (scale > 1) {
            if (this.file.getWidth() > 600) {
                return 600 / this.file.getWidth();
            }
        }
        else {
            if (this.file.getHeight() > 600) {
                return 600 / this.file.getHeight();
            }
        }
        return 1;
    };
    CropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'crop-image',
                    template: "\n    <div class=\"crop-image\">\n      <div class=\"crop-workbench\">\n        <div #container></div>\n      </div>\n      <div class=\"btn-toolbar\">\n        <div class=\"btn-group\">\n          <button class=\"btn btn-primary\" *ngFor=\"let cropSize of cropSizeList\" (click)=\"updateCropSize(cropSize)\"\n                  [ngClass]=\"{'active': cropSize == currentCropSize}\">{{cropSize.name | translate}}\n          </button>\n        </div>\n        <div class=\"btn-group pull-right\">\n          <button class=\"btn btn-success btn-icon\" (click)=\"cropImage()\">\n            <i class=\"fa fa-check\"></i>\n            <span>{{'RI_FM_BTN_SAVE' | translate}}</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: [".btn-toolbar{margin:5px 0}.btn-toolbar .btn-group{margin:0}.crop-workbench{width:600px;height:400px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    CropComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: FileManagerConfiguration },
        { type: Store }
    ]; };
    CropComponent.propDecorators = {
        file: [{ type: Input }],
        onCrop: [{ type: Output }],
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
        cropper: [{ type: ViewChild, args: ['cropper',] }]
    };
    return CropComponent;
}());
export { CropComponent };
if (false) {
    /** @type {?} */
    CropComponent.prototype.file;
    /** @type {?} */
    CropComponent.prototype.onCrop;
    /** @type {?} */
    CropComponent.prototype.container;
    /** @type {?} */
    CropComponent.prototype.cropper;
    /**
     * @type {?}
     * @private
     */
    CropComponent.prototype.bounds;
    /** @type {?} */
    CropComponent.prototype.cropSizeList;
    /** @type {?} */
    CropComponent.prototype.currentCropSize;
    /**
     * @type {?}
     * @private
     */
    CropComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    CropComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    CropComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9jcm9wL2Nyb3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUMvRSxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUVwRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUczRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUU1RDtJQTJDRSx1QkFBb0IsUUFBa0MsRUFDbEMsYUFBdUMsRUFDdkMsS0FBK0I7UUFGL0IsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3ZDLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBZjVDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBZ0JqQyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxzQ0FBYzs7OztJQUFkLFVBQWUsUUFBbUI7UUFBbEMsaUJBbUJDOztZQWxCTyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUU7O1lBQ25CLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUM7O1lBQy9FLG1CQUFt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O2dCQUMvQixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BDO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7O2dCQXRIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBRXRCLFFBQVEsRUFBRSx3dUJBbUJUOztpQkFDRjs7OztnQkFyQ2dELHdCQUF3QjtnQkFNakUsd0JBQXdCO2dCQUt4QixLQUFLOzs7dUJBNkJWLEtBQUs7eUJBR0wsTUFBTTs0QkFHTixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDOzBCQUcvQyxTQUFTLFNBQUMsU0FBUzs7SUFvRnRCLG9CQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0E5RlksYUFBYTs7O0lBQ3hCLDZCQUN1Qjs7SUFFdkIsK0JBQ21DOztJQUVuQyxrQ0FDbUM7O0lBRW5DLGdDQUNzQzs7Ozs7SUFFdEMsK0JBQXVCOztJQUV2QixxQ0FBaUM7O0lBQ2pDLHdDQUFrQzs7Ozs7SUFFdEIsaUNBQTBDOzs7OztJQUMxQyxzQ0FBK0M7Ozs7O0lBQy9DLDhCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvZmlsZS5tb2RlbCc7XG5pbXBvcnQge0Nyb3BwZXJTZXR0aW5nc30gZnJvbSAnbmcyLWltZy1jcm9wcGVyL3NyYy9jcm9wcGVyU2V0dGluZ3MnO1xuaW1wb3J0IHtJQ3JvcFNpemV9IGZyb20gJy4vSUNyb3BTaXplJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuLi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7Qm91bmRzfSBmcm9tICduZzItaW1nLWNyb3BwZXIvc3JjL21vZGVsL2JvdW5kcyc7XG5pbXBvcnQge0lDcm9wQm91bmRzfSBmcm9tICcuL0lDcm9wQm91bmRzJztcbmltcG9ydCB7SW1hZ2VDcm9wcGVyQ29tcG9uZW50fSBmcm9tICduZzItaW1nLWNyb3BwZXInO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLnJlZHVjZXInO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtDcm9wRmlsZUFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nyb3AtaW1hZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9wLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY3JvcC1pbWFnZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNyb3Atd29ya2JlbmNoXCI+XG4gICAgICAgIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKm5nRm9yPVwibGV0IGNyb3BTaXplIG9mIGNyb3BTaXplTGlzdFwiIChjbGljayk9XCJ1cGRhdGVDcm9wU2l6ZShjcm9wU2l6ZSlcIlxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBjcm9wU2l6ZSA9PSBjdXJyZW50Q3JvcFNpemV9XCI+e3tjcm9wU2l6ZS5uYW1lIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgcHVsbC1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWljb25cIiAoY2xpY2spPVwiY3JvcEltYWdlKClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+XG4gICAgICAgICAgICA8c3Bhbj57eydSSV9GTV9CVE5fU0FWRScgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENyb3BDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgcHVibGljIGZpbGU6IEZpbGVNb2RlbDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uQ3JvcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gIHB1YmxpYyBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQFZpZXdDaGlsZCgnY3JvcHBlcicpXG4gIHB1YmxpYyBjcm9wcGVyOiBJbWFnZUNyb3BwZXJDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBib3VuZHM6IEJvdW5kcztcblxuICBwdWJsaWMgY3JvcFNpemVMaXN0OiBJQ3JvcFNpemVbXTtcbiAgcHVibGljIGN1cnJlbnRDcm9wU2l6ZTogSUNyb3BTaXplO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElGaWxlTWFuYWdlclN0YXRlPikge1xuICAgIHRoaXMuY3JvcFNpemVMaXN0ID0gY29uZmlndXJhdGlvbi5hbGxvd2VkQ3JvcFNpemU7XG4gIH1cblxuICB1cGRhdGVDcm9wU2l6ZShjcm9wU2l6ZTogSUNyb3BTaXplKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBjcm9wcGVyQ29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShJbWFnZUNyb3BwZXJDb21wb25lbnQpO1xuICAgIGNvbnN0IGNyb3BwZXJDb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY3JvcHBlckNvbXBvbmVudCk7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5jb250YWluZXIuZGV0YWNoKDApO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudENyb3BTaXplID0gY3JvcFNpemU7XG4gICAgY3JvcHBlckNvbXBvbmVudFJlZi5pbnN0YW5jZS5zZXR0aW5ncyA9IHRoaXMuZ2V0Q3JvcHBlclNldHRpbmdzKCk7XG4gICAgY3JvcHBlckNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbWFnZSA9IHt9O1xuICAgIGNyb3BwZXJDb21wb25lbnRSZWYuaW5zdGFuY2Uub25Dcm9wXG4gICAgICAuc3Vic2NyaWJlKChib3VuZHM6IEJvdW5kcykgPT4gdGhpcy5ib3VuZHMgPSBib3VuZHMpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbWFnZS5zcmMgPSB0aGlzLmZpbGUudXJsO1xuICAgICAgY3JvcHBlckNvbXBvbmVudFJlZi5pbnN0YW5jZS5zZXRJbWFnZShpbWFnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ3JvcFNpemUodGhpcy5jcm9wU2l6ZUxpc3RbMF0pO1xuICB9XG5cbiAgcHVibGljIGNyb3BJbWFnZSgpIHtcbiAgICBjb25zdCBib3VuZHM6IElDcm9wQm91bmRzID0ge1xuICAgICAgeDogdGhpcy5ib3VuZHMubGVmdCxcbiAgICAgIHk6IHRoaXMuYm91bmRzLnRvcCxcbiAgICAgIHdpZHRoOiB0aGlzLmJvdW5kcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5ib3VuZHMuaGVpZ2h0XG4gICAgfTtcblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENyb3BGaWxlQWN0aW9uKHtmaWxlOiB0aGlzLmZpbGUsIGJvdW5kc30pKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRDcm9wcGVyU2V0dGluZ3MoKTogQ3JvcHBlclNldHRpbmdzIHtcbiAgICBjb25zdCBjcm9wcGVyU2V0dGluZ3MgPSBuZXcgQ3JvcHBlclNldHRpbmdzKCk7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmNhbGN1bGF0ZVNjYWxlKCk7XG4gICAgY29uc3Qgd2lkdGggPSBzY2FsZSAqIHRoaXMuZmlsZS5nZXRXaWR0aCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHNjYWxlICogdGhpcy5maWxlLmdldEhlaWdodCgpO1xuXG4gICAgY3JvcHBlclNldHRpbmdzLm5vRmlsZUlucHV0ID0gdHJ1ZTtcbiAgICBjcm9wcGVyU2V0dGluZ3Mud2lkdGggPSB0aGlzLmN1cnJlbnRDcm9wU2l6ZS53aWR0aDtcbiAgICBjcm9wcGVyU2V0dGluZ3MuaGVpZ2h0ID0gdGhpcy5jdXJyZW50Q3JvcFNpemUuaGVpZ2h0O1xuICAgIGNyb3BwZXJTZXR0aW5ncy5jYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgIGNyb3BwZXJTZXR0aW5ncy5jYW52YXNIZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICByZXR1cm4gY3JvcHBlclNldHRpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgc2NhbGUgYmV0d2VlbiBjdXJyZW50IGZpbGUgZGltZW5zaW9ucyBhbmQgYm94IDYwMHg2MDBcbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlU2NhbGUoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuZmlsZS5nZXRXaWR0aCgpIC8gdGhpcy5maWxlLmdldEhlaWdodCgpO1xuXG4gICAgaWYgKHNjYWxlID4gMSkge1xuICAgICAgaWYgKHRoaXMuZmlsZS5nZXRXaWR0aCgpID4gNjAwKSB7XG4gICAgICAgIHJldHVybiA2MDAgLyB0aGlzLmZpbGUuZ2V0V2lkdGgoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZmlsZS5nZXRIZWlnaHQoKSA+IDYwMCkge1xuICAgICAgICByZXR1cm4gNjAwIC8gdGhpcy5maWxlLmdldEhlaWdodCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG59XG4iXX0=