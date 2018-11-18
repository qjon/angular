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
export class ToolbarComponent {
    /**
     * @param {?} configuration
     * @param {?} fileManagerUploader
     * @param {?} store
     */
    constructor(configuration, fileManagerUploader, store) {
        this.configuration = configuration;
        this.fileManagerUploader = fileManagerUploader;
        this.store = store;
        this.onAddFolderClick = new EventEmitter();
        this.onUpload = new EventEmitter();
        this.onMenuButtonClick = new EventEmitter();
        this.fileManagerUploader.clear();
        this.fileManagerUploader.uploader.onCompleteAll = () => {
            this.onUpload.emit(this.currentFolderId || '');
        };
        this.fileManagerUploader.uploader.onCompleteItem = (item, response, status, headers) => {
            if (status === 200) {
                this.store.dispatch(new UploadFilesAction({ files: JSON.parse(response) }));
            }
            else {
                this.store.dispatch(new UploadFilesErrorAction({ files: JSON.parse(response) }));
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.fileManagerUploader.setDirectoryId(this.currentFolderId || '');
    }
    /**
     * @return {?}
     */
    addFolder() {
        /** @type {?} */
        let event = new ToolbarEventModel(Button.ADD_FOLDER, 'Nowy folder');
        this.onAddFolderClick.emit(event);
    }
    /**
     * @return {?}
     */
    onRefreshFilesList() {
        /** @type {?} */
        let event = new ToolbarEventModel(Button.REFRESH_FILES_LIST);
        this.onMenuButtonClick.emit(event);
    }
}
ToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-toolbar',
                template: "<div class=\"toolbar row\">\n  <div class=\"col-md-6\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-secondary\" (click)=\"addFolder()\">\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-folder-o\"></i>\n      </button>\n      <span class=\"hidden-input-file\">\n        <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"fileManagerUploader.uploader\" multiple/>\n      </span>\n      <button class=\"btn btn-secondary\" (click)=\"fileInput.click()\">\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-file-o\"></i>\n      </button>\n    </div>\n    <ri-selection-dropdown (onMenuButtonClick)=\"onMenuButtonClick.next($event)\"></ri-selection-dropdown>\n    <div class=\"btn-group\">\n      <button class=\"btn btn-secondary\" (click)=\"onRefreshFilesList()\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <ri-file-type-filter [typeFilterList]=\"configuration.fileTypesFilter\"></ri-file-type-filter>\n  </div>\n  <div class=\"col-md-3\">\n    <ri-search-file></ri-search-file>\n  </div>\n</div>\n",
                styles: [".toolbar{margin-bottom:10px}.btn{height:34px}.btn-file{position:relative;overflow:hidden}.hidden-input-file{visibility:hidden;position:absolute;overflow:hidden;width:0;height:0;border:none;margin:0;padding:0}.btn-group,ri-selection-dropdown{padding:0 2px 0 0}"]
            }] }
];
/** @nocollapse */
ToolbarComponent.ctorParameters = () => [
    { type: FileManagerConfiguration },
    { type: FileManagerUploader },
    { type: Store }
];
ToolbarComponent.propDecorators = {
    currentFolderId: [{ type: Input }],
    onAddFolderClick: [{ type: Output }],
    onUpload: [{ type: Output }],
    onMenuButtonClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWxDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBUXZGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQVEzQixZQUEwQixhQUF1QyxFQUN2QyxtQkFBd0MsRUFDdkMsS0FBK0I7UUFGaEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3ZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDdkMsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFQaEQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTy9DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxHQUFHLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQVMsRUFBRSxRQUFhLEVBQUUsTUFBYyxFQUFFLE9BQVksRUFBRSxFQUFFO1lBQzVHLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRU0sU0FBUzs7WUFDVixLQUFLLEdBQWtCLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7UUFDbEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRU0sa0JBQWtCOztZQUNuQixLQUFLLEdBQWtCLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQzNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFFdEIsNG1DQUE2Qjs7YUFDOUI7Ozs7WUFWTyx3QkFBd0I7WUFDeEIsbUJBQW1CO1lBQ25CLEtBQUs7Ozs4QkFXVixLQUFLOytCQUVMLE1BQU07dUJBQ04sTUFBTTtnQ0FDTixNQUFNOzs7O0lBSlAsMkNBQWlDOztJQUVqQyw0Q0FBZ0Q7O0lBQ2hELG9DQUF3Qzs7SUFDeEMsNkNBQWlEOztJQUc5Qix5Q0FBOEM7O0lBQzlDLCtDQUErQzs7Ozs7SUFDL0MsaUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuL21vZGVscy9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtUb29sYmFyRXZlbnRNb2RlbH0gZnJvbSAnLi9tb2RlbHMvdG9vbGJhckV2ZW50Lm1vZGVsJztcbmltcG9ydCB7SVRvb2xiYXJFdmVudH0gZnJvbSAnLi9pbnRlcmZhY2UvSVRvb2xiYXJFdmVudCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyVXBsb2FkZXJ9IGZyb20gJy4uL2ZpbGVzTGlzdC9maWxlTWFuYWdlclVwbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLnJlZHVjZXInO1xuaW1wb3J0IHtVcGxvYWRGaWxlc0FjdGlvbiwgVXBsb2FkRmlsZXNFcnJvckFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLXRvb2xiYXInLFxuICBzdHlsZVVybHM6IFsnLi90b29sYmFyLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY3VycmVudEZvbGRlcklkOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uQWRkRm9sZGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTWVudUJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwdWJsaWMgZmlsZU1hbmFnZXJVcGxvYWRlcjogRmlsZU1hbmFnZXJVcGxvYWRlcixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElGaWxlTWFuYWdlclN0YXRlPikge1xuXG4gICAgdGhpcy5maWxlTWFuYWdlclVwbG9hZGVyLmNsZWFyKCk7XG5cbiAgICB0aGlzLmZpbGVNYW5hZ2VyVXBsb2FkZXIudXBsb2FkZXIub25Db21wbGV0ZUFsbCA9ICgpID0+IHtcbiAgICAgIHRoaXMub25VcGxvYWQuZW1pdCh0aGlzLmN1cnJlbnRGb2xkZXJJZCB8fCAnJyk7XG4gICAgfTtcblxuICAgIHRoaXMuZmlsZU1hbmFnZXJVcGxvYWRlci51cGxvYWRlci5vbkNvbXBsZXRlSXRlbSA9IChpdGVtOiBhbnksIHJlc3BvbnNlOiBhbnksIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBhbnkpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGxvYWRGaWxlc0FjdGlvbih7ZmlsZXM6IEpTT04ucGFyc2UocmVzcG9uc2UpfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNFcnJvckFjdGlvbih7ZmlsZXM6IEpTT04ucGFyc2UocmVzcG9uc2UpfSkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5maWxlTWFuYWdlclVwbG9hZGVyLnNldERpcmVjdG9yeUlkKHRoaXMuY3VycmVudEZvbGRlcklkIHx8ICcnKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRGb2xkZXIoKSB7XG4gICAgbGV0IGV2ZW50OiBJVG9vbGJhckV2ZW50ID0gbmV3IFRvb2xiYXJFdmVudE1vZGVsKEJ1dHRvbi5BRERfRk9MREVSLCAnTm93eSBmb2xkZXInKTtcbiAgICB0aGlzLm9uQWRkRm9sZGVyQ2xpY2suZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgb25SZWZyZXNoRmlsZXNMaXN0KCkge1xuICAgIGxldCBldmVudDogSVRvb2xiYXJFdmVudCA9IG5ldyBUb29sYmFyRXZlbnRNb2RlbChCdXR0b24uUkVGUkVTSF9GSUxFU19MSVNUKTtcbiAgICB0aGlzLm9uTWVudUJ1dHRvbkNsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=