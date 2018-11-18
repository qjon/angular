/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Button } from './models/button.model';
import { ToolbarEventModel } from './models/toolbarEvent.model';
import { FileManagerConfiguration } from '../configuration/fileManagerConfiguration.service';
import { FileManagerUploader } from '../filesList/fileManagerUploader.service';
import { Store } from '@ngrx/store';
import { UploadFilesAction, UploadFilesErrorAction } from '../store/file-manager.action';
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(configuration, fileManagerUploader, store) {
        var _this = this;
        this.configuration = configuration;
        this.fileManagerUploader = fileManagerUploader;
        this.store = store;
        this.onAddFolderClick = new EventEmitter();
        this.onUpload = new EventEmitter();
        this.onMenuButtonClick = new EventEmitter();
        this.fileManagerUploader.clear();
        this.fileManagerUploader.uploader.onCompleteAll = function () {
            _this.onUpload.emit(_this.currentFolderId || '');
        };
        this.fileManagerUploader.uploader.onCompleteItem = function (item, response, status, headers) {
            if (status === 200) {
                _this.store.dispatch(new UploadFilesAction({ files: JSON.parse(response) }));
            }
            else {
                _this.store.dispatch(new UploadFilesErrorAction({ files: JSON.parse(response) }));
            }
        };
    }
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.fileManagerUploader.setDirectoryId(this.currentFolderId || '');
    };
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.addFolder = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = new ToolbarEventModel(Button.ADD_FOLDER, 'Nowy folder');
        this.onAddFolderClick.emit(event);
    };
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.onRefreshFilesList = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = new ToolbarEventModel(Button.REFRESH_FILES_LIST);
        this.onMenuButtonClick.emit(event);
    };
    ToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-toolbar',
                    template: "<div class=\"toolbar row\">\n  <div class=\"col-md-6\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-secondary\" (click)=\"addFolder()\">\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-folder-o\"></i>\n      </button>\n      <span class=\"hidden-input-file\">\n        <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"fileManagerUploader.uploader\" multiple/>\n      </span>\n      <button class=\"btn btn-secondary\" (click)=\"fileInput.click()\">\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-file-o\"></i>\n      </button>\n    </div>\n    <ri-selection-dropdown (onMenuButtonClick)=\"onMenuButtonClick.next($event)\"></ri-selection-dropdown>\n    <div class=\"btn-group\">\n      <button class=\"btn btn-secondary\" (click)=\"onRefreshFilesList()\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <ri-file-type-filter [typeFilterList]=\"configuration.fileTypesFilter\"></ri-file-type-filter>\n  </div>\n  <div class=\"col-md-3\">\n    <ri-search-file></ri-search-file>\n  </div>\n</div>\n",
                    styles: [".toolbar{margin-bottom:10px}.btn{height:34px}.btn-file{position:relative;overflow:hidden}.hidden-input-file{visibility:hidden;position:absolute;overflow:hidden;width:0;height:0;border:none;margin:0;padding:0}.btn-group,ri-selection-dropdown{padding:0 2px 0 0}"]
                }] }
    ];
    /** @nocollapse */
    ToolbarComponent.ctorParameters = function () { return [
        { type: FileManagerConfiguration },
        { type: FileManagerUploader },
        { type: Store }
    ]; };
    ToolbarComponent.propDecorators = {
        currentFolderId: [{ type: Input }],
        onAddFolderClick: [{ type: Output }],
        onUpload: [{ type: Output }],
        onMenuButtonClick: [{ type: Output }]
    };
    return ToolbarComponent;
}());
export { ToolbarComponent };
if (false) {
    /** @type {?} */
    ToolbarComponent.prototype.currentFolderId;
    /** @type {?} */
    ToolbarComponent.prototype.onAddFolderClick;
    /** @type {?} */
    ToolbarComponent.prototype.onUpload;
    /** @type {?} */
    ToolbarComponent.prototype.onMenuButtonClick;
    /** @type {?} */
    ToolbarComponent.prototype.configuration;
    /** @type {?} */
    ToolbarComponent.prototype.fileManagerUploader;
    /**
     * @type {?}
     * @private
     */
    ToolbarComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWxDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXZGO0lBY0UsMEJBQTBCLGFBQXVDLEVBQ3ZDLG1CQUF3QyxFQUN2QyxLQUErQjtRQUYxRCxpQkFpQkM7UUFqQnlCLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3ZDLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBUGhELHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU8vQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUc7WUFDaEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxVQUFDLElBQVMsRUFBRSxRQUFhLEVBQUUsTUFBYyxFQUFFLE9BQVk7WUFDeEcsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUNsQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0U7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHNDQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVNLG9DQUFTOzs7SUFBaEI7O1lBQ00sS0FBSyxHQUFrQixJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVNLDZDQUFrQjs7O0lBQXpCOztZQUNNLEtBQUssR0FBa0IsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDM0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUV0Qiw0bUNBQTZCOztpQkFDOUI7Ozs7Z0JBVk8sd0JBQXdCO2dCQUN4QixtQkFBbUI7Z0JBQ25CLEtBQUs7OztrQ0FXVixLQUFLO21DQUVMLE1BQU07MkJBQ04sTUFBTTtvQ0FDTixNQUFNOztJQW1DVCx1QkFBQztDQUFBLEFBOUNELElBOENDO1NBeENZLGdCQUFnQjs7O0lBQzNCLDJDQUFpQzs7SUFFakMsNENBQWdEOztJQUNoRCxvQ0FBd0M7O0lBQ3hDLDZDQUFpRDs7SUFHOUIseUNBQThDOztJQUM5QywrQ0FBK0M7Ozs7O0lBQy9DLGlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi9tb2RlbHMvYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7VG9vbGJhckV2ZW50TW9kZWx9IGZyb20gJy4vbW9kZWxzL3Rvb2xiYXJFdmVudC5tb2RlbCc7XG5pbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4vaW50ZXJmYWNlL0lUb29sYmFyRXZlbnQnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlclVwbG9hZGVyfSBmcm9tICcuLi9maWxlc0xpc3QvZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyU3RhdGV9IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7VXBsb2FkRmlsZXNBY3Rpb24sIFVwbG9hZEZpbGVzRXJyb3JBY3Rpb259IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS10b29sYmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGN1cnJlbnRGb2xkZXJJZDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbkFkZEZvbGRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1lbnVCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHVibGljIGZpbGVNYW5hZ2VyVXBsb2FkZXI6IEZpbGVNYW5hZ2VyVXBsb2FkZXIsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4pIHtcblxuICAgIHRoaXMuZmlsZU1hbmFnZXJVcGxvYWRlci5jbGVhcigpO1xuXG4gICAgdGhpcy5maWxlTWFuYWdlclVwbG9hZGVyLnVwbG9hZGVyLm9uQ29tcGxldGVBbGwgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBsb2FkLmVtaXQodGhpcy5jdXJyZW50Rm9sZGVySWQgfHwgJycpO1xuICAgIH07XG5cbiAgICB0aGlzLmZpbGVNYW5hZ2VyVXBsb2FkZXIudXBsb2FkZXIub25Db21wbGV0ZUl0ZW0gPSAoaXRlbTogYW55LCByZXNwb25zZTogYW55LCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogYW55KSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNBY3Rpb24oe2ZpbGVzOiBKU09OLnBhcnNlKHJlc3BvbnNlKX0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oe2ZpbGVzOiBKU09OLnBhcnNlKHJlc3BvbnNlKX0pKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsZU1hbmFnZXJVcGxvYWRlci5zZXREaXJlY3RvcnlJZCh0aGlzLmN1cnJlbnRGb2xkZXJJZCB8fCAnJyk7XG4gIH1cblxuICBwdWJsaWMgYWRkRm9sZGVyKCkge1xuICAgIGxldCBldmVudDogSVRvb2xiYXJFdmVudCA9IG5ldyBUb29sYmFyRXZlbnRNb2RlbChCdXR0b24uQUREX0ZPTERFUiwgJ05vd3kgZm9sZGVyJyk7XG4gICAgdGhpcy5vbkFkZEZvbGRlckNsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIG9uUmVmcmVzaEZpbGVzTGlzdCgpIHtcbiAgICBsZXQgZXZlbnQ6IElUb29sYmFyRXZlbnQgPSBuZXcgVG9vbGJhckV2ZW50TW9kZWwoQnV0dG9uLlJFRlJFU0hfRklMRVNfTElTVCk7XG4gICAgdGhpcy5vbk1lbnVCdXR0b25DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19