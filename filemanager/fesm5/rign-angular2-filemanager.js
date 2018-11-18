import { Injectable, Inject, Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, HostListener, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { __read, __extends, __assign, __spread, __decorate, __metadata } from 'tslib';
import { NodeService, TreeActionTypes, TreeComponent, NodeDispatcherService, TreeInitializerService, TreeModule } from '@rign/angular2-tree';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { CropperSettings } from 'ng2-img-cropper/src/cropperSettings';
import { ImageCropperComponent, ImageCropperModule } from 'ng2-img-cropper';
import { Store, createFeatureSelector, StoreModule } from '@ngrx/store';
import { UUID } from 'angular2-uuid';
import { concatMap, map, catchError, filter, switchMap, distinctUntilChanged, withLatestFrom, debounceTime } from 'rxjs/operators';
import { fromEvent, of, Subject, empty, Observable, throwError, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { Actions, Effect, ofType, EffectsModule } from '@ngrx/effects';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileManagerConfiguration = /** @class */ (function () {
    function FileManagerConfiguration(configuration) {
        this.allowedCropSize = [
            {
                name: 'RI_FM_BTN_LANDSCAPE',
                width: 300,
                height: 100
            },
            {
                name: 'RI_FM_BTN_PORTRAIT',
                width: 200,
                height: 300
            }
        ];
        this.contextMenuItems = [];
        this.fileTypesFilter = [
            {
                name: 'ALL',
                mimes: [],
                iconCls: 'fa fa-file-o',
                text: 'All files',
                defaultSelected: true
            },
            {
                name: 'IMAGES',
                mimes: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'],
                iconCls: 'fa fa-picture-o',
                text: 'Images'
            },
            {
                name: 'AUDIO',
                mimes: ['audio/mpeg', 'audio/x-ms-wma', 'audio/vnd.rn-realaudio', 'audio/x-wav', 'audio/mp3'],
                iconCls: 'fa fa-file-audio-o',
                text: 'Audio'
            },
            {
                name: 'VIDEO',
                mimes: ['video/mpeg', 'video/mp4', 'video/quicktime', 'video/x-ms-wmv'],
                iconCls: 'fa fa-file-video-o',
                text: 'Video'
            },
            {
                name: 'ARCHIVE',
                mimes: ['application/zip'],
                iconCls: 'fa fa-file-archive-o',
                text: 'Archive'
            }
        ];
        this.fileUrl = '/api/files';
        var _a = configuration.urls, foldersUrl = _a.foldersUrl, folderMoveUrl = _a.folderMoveUrl;
        this.folderUrls = { foldersUrl: foldersUrl, folderMoveUrl: folderMoveUrl };
        this.fileUrl = configuration.urls.filesUrl;
        this.isMultiSelection = configuration.isMultiSelection || false;
        this.maxFileSize = configuration.maxFileSize || 0;
        this.mimeTypes = configuration.mimeTypes || null;
        this.allowChooseMultipleFiles = configuration.allowChooseMultipleFiles || false;
    }
    FileManagerConfiguration.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerConfiguration.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] }
    ]; };
    return FileManagerConfiguration;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IUrlConfiguration = /** @class */ (function () {
    function IUrlConfiguration() {
    }
    return IUrlConfiguration;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeService = /** @class */ (function (_super) {
    __extends(TreeService, _super);
    function TreeService(http, configuration) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.apiConfig = {
            addUrl: configuration.urls.foldersUrl,
            getUrl: configuration.urls.foldersUrl,
            updateUrl: configuration.urls.foldersUrl,
            removeUrl: configuration.urls.foldersUrl,
            moveUrl: configuration.urls.folderMoveUrl
        };
        return _this;
    }
    TreeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TreeService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] }
    ]; };
    return TreeService;
}(NodeService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileModel = /** @class */ (function () {
    function FileModel(data) {
        this._iconsFolder = FileModel.smallIconsFolder;
        this.selected = false;
        this.fromJSON(data);
    }
    Object.defineProperty(FileModel.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileModel.prototype, "thumbnailUrl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isImage() ? this._orgData.thumbnailUrl : "" + FileModel.smallIconsFolder + this.getFileExt() + ".png";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileModel.prototype, "url", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isImage() ? this._orgData.url : "" + FileModel.bigIconsFolder + this.getFileExt() + ".png";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    FileModel.prototype.fromJSON = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._orgData = data;
        this.name = data.name;
        this.selected = data.selected || false;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return this._orgData;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this._orgData.id;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this._orgData.height || 0;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getFileExt = /**
     * @return {?}
     */
    function () {
        return this.name.split('.').pop();
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getMime = /**
     * @return {?}
     */
    function () {
        return this._orgData.type;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this._orgData.width || 0;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.isImage = /**
     * @return {?}
     */
    function () {
        return ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'].indexOf(this.getMime()) > -1;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getSelectData = /**
     * @return {?}
     */
    function () {
        return {
            id: this.getId(),
            name: this.name,
            url: this.url,
            width: this.getWidth(),
            height: this.getHeight(),
            mime: this.getMime()
        };
    };
    FileModel.smallIconsFolder = '/icons/128px/';
    FileModel.bigIconsFolder = '/icons/512px/';
    return FileModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var FileManagerActionTypes = {
    CHOOSE_FILES: 'FILEMANAGER_CHOOSE_FILES',
    CROP_FILE: 'FILEMANAGER_CROP_FILE',
    CROP_FILE_SUCCESS: 'FILEMANAGER_CROP_FILE_SUCCESS',
    CROP_FILE_ERROR: 'FILEMANAGER_CROP_FILE_ERROR',
    DELETE_FILE: 'FILEMANAGER_DELETE_FILE',
    DELETE_FILE_SUCCESS: 'FILEMANAGER_DELETE_FILE_SUCCESS',
    DELETE_FILE_SELECTION: 'FILEMANAGER_DELETE_FILE_SELECTION',
    DELETE_FILE_SELECTION_SUCCESS: 'FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS',
    INVERSE_FILE_SELECTION: 'FILEMANAGER_INVERSE_FILE_SELECTION',
    LOAD_FILES: 'FILEMANAGER_LOAD_FILES',
    LOAD_FILES_SUCCESS: 'FILEMANAGER_LOAD_FILES_SUCCESS',
    MOVE_FILES_SUCCESS: 'FILEMANAGER_MOVE_FILES_SUCCESS',
    MOVE_FILES_ERROR: 'FILEMANAGER_MOVE_FILES_ERROR',
    SELECT_ALL: 'FILEMANAGER_SELECT_ALL',
    SELECT_FILE: 'FILEMANAGER_SELECT_FILE',
    UNSELECT_FILE: 'FILEMANAGER_UNSELECT_FILE',
    UNSELECT_ALL: 'FILEMANAGER_UNSELECT_ALL',
    UPLOAD_FILE: 'FILEMANAGER_UPLOAD_FILE',
    UPLOAD_FILE_ERROR: 'FILEMANAGER_UPLOAD_FILE_ERROR',
    UPLOAD_FILE_SUCCESS: 'FILEMANAGER_UPLOAD_FILE_SUCCESS',
};
var ChooseFilesAction = /** @class */ (function () {
    function ChooseFilesAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CHOOSE_FILES;
    }
    return ChooseFilesAction;
}());
var CropFileAction = /** @class */ (function () {
    function CropFileAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE;
    }
    return CropFileAction;
}());
var CropFileErrorAction = /** @class */ (function () {
    function CropFileErrorAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE_ERROR;
    }
    return CropFileErrorAction;
}());
var CropFileSuccessAction = /** @class */ (function () {
    function CropFileSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE_SUCCESS;
    }
    return CropFileSuccessAction;
}());
var DeleteFileAction = /** @class */ (function () {
    function DeleteFileAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE;
    }
    return DeleteFileAction;
}());
var DeleteFileSuccessAction = /** @class */ (function () {
    function DeleteFileSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SUCCESS;
    }
    return DeleteFileSuccessAction;
}());
var DeleteSelectedFilesAction = /** @class */ (function () {
    function DeleteSelectedFilesAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SELECTION;
    }
    return DeleteSelectedFilesAction;
}());
var DeleteSelectedFilesSuccessAction = /** @class */ (function () {
    function DeleteSelectedFilesSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS;
    }
    return DeleteSelectedFilesSuccessAction;
}());
var InverseFilesSelectionAction = /** @class */ (function () {
    function InverseFilesSelectionAction() {
        this.type = FileManagerActionTypes.INVERSE_FILE_SELECTION;
    }
    return InverseFilesSelectionAction;
}());
var LoadFilesAction = /** @class */ (function () {
    function LoadFilesAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.LOAD_FILES;
    }
    return LoadFilesAction;
}());
var LoadFilesSuccessAction = /** @class */ (function () {
    function LoadFilesSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.LOAD_FILES_SUCCESS;
    }
    return LoadFilesSuccessAction;
}());
var MoveFilesErrorAction = /** @class */ (function () {
    function MoveFilesErrorAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.MOVE_FILES_ERROR;
    }
    return MoveFilesErrorAction;
}());
var MoveFilesSuccessAction = /** @class */ (function () {
    function MoveFilesSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.MOVE_FILES_SUCCESS;
    }
    return MoveFilesSuccessAction;
}());
var SelectAllFilesAction = /** @class */ (function () {
    function SelectAllFilesAction() {
        this.type = FileManagerActionTypes.SELECT_ALL;
    }
    return SelectAllFilesAction;
}());
var SelectFileAction = /** @class */ (function () {
    function SelectFileAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.SELECT_FILE;
    }
    return SelectFileAction;
}());
var UnSelectAllFilesAction = /** @class */ (function () {
    function UnSelectAllFilesAction() {
        this.type = FileManagerActionTypes.UNSELECT_ALL;
    }
    return UnSelectAllFilesAction;
}());
var UnSelectFileAction = /** @class */ (function () {
    function UnSelectFileAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UNSELECT_FILE;
    }
    return UnSelectFileAction;
}());
var UploadFilesAction = /** @class */ (function () {
    function UploadFilesAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE;
    }
    return UploadFilesAction;
}());
var UploadFilesErrorAction = /** @class */ (function () {
    function UploadFilesErrorAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE_ERROR;
    }
    return UploadFilesErrorAction;
}());
var UploadFilesSuccessAction = /** @class */ (function () {
    function UploadFilesSuccessAction(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE_SUCCESS;
    }
    return UploadFilesSuccessAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.onClick = new EventEmitter();
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    DropdownComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
    };
    /**
     * @param {?} button
     * @return {?}
     */
    DropdownComponent.prototype.selectButton = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        this.hide();
        this.onClick.emit(button);
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.toggleOpen = /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-dropdown',
                    template: "<div class=\"btn-group dropdown\" [ngClass]=\"{'show': isOpen}\">\n  <button class=\"btn btn-secondary\" [ngClass]=\"{disabled: mainButton.disabled}\" (click)=\"selectButton(mainButton)\">\n    <span *ngIf=\"displayMainButtonLabel\">{{mainButton.name}}</span>\n    <i *ngIf=\"mainButton.icon\" class=\"{{mainButton.iconCssClass}}\"></i>\n  </button><!--\n  --><button class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" id=\"dropdownMenuButton\"\n          [ngClass]=\"{disabled: mainButton.disabled}\"\n          (click)=\"toggleOpen()\">\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\" (mouseleave)=\"hide()\"\n      [ngClass]=\"{'show': isOpen}\">\n    <li class=\"\"\n        [ngClass]=\"{'dropdown-divider': button.isDivider(), 'dropdown-item': !button.isDivider(), disabled: button.disabled}\"\n        *ngFor=\"let button of buttons \" (click)=\"selectButton(button)\">\n      <span *ngIf=\"button.icon\" class=\"{{button.iconCssClass}}\"></span>\n      <span *ngIf=\"button.label\">{{button.name | translate}}</span>\n    </li>\n  </ul>\n</div>\n",
                    styles: [".dropdown{display:inline-block;height:34px}.dropdown .btn{height:34px}.dropdown li{cursor:pointer}.dropdown li:hover:not(.disabled){background:rgba(0,123,255,.45)}"]
                }] }
    ];
    DropdownComponent.propDecorators = {
        mainButton: [{ type: Input }],
        buttons: [{ type: Input }],
        displayMainButtonLabel: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return DropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageDataConverter = /** @class */ (function () {
    function ImageDataConverter() {
    }
    /**
     * @param {?} file
     * @param {?} folderId
     * @return {?}
     */
    ImageDataConverter.prototype.getProperties = /**
     * @param {?} file
     * @param {?} folderId
     * @return {?}
     */
    function (file, folderId) {
        var _this = this;
        /** @type {?} */
        var properties = {
            id: UUID.UUID(),
            folderId: folderId,
            name: file.name,
            size: file.size,
            type: file.type,
            data: ''
        };
        /** @type {?} */
        var reader = this.getBase64FromFile(file);
        return reader
            .pipe(concatMap(function (data) {
            properties.data = data;
            if (properties.type.indexOf('image') === 0) {
                return _this.getImageDimensions(data);
            }
            else {
                return of({ width: 0, height: 0 });
            }
        }), map(function (dimensions) {
            properties.width = dimensions.width;
            properties.height = dimensions.height;
            return properties;
        }));
    };
    /**
     * Create observable which return image as base64 data
     */
    /**
     * Create observable which return image as base64 data
     * @private
     * @param {?} file
     * @return {?}
     */
    ImageDataConverter.prototype.getBase64FromFile = /**
     * Create observable which return image as base64 data
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var reader = new FileReader();
        reader.readAsDataURL(file);
        return fromEvent(reader, 'load')
            .pipe(map(function () {
            return reader.result.toString();
        }));
    };
    /**
     * Create observable which return dimensions of the image
     */
    /**
     * Create observable which return dimensions of the image
     * @private
     * @param {?} data
     * @return {?}
     */
    ImageDataConverter.prototype.getImageDimensions = /**
     * Create observable which return dimensions of the image
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var image = new Image();
        image.src = data;
        image.style.display = 'none';
        /** @type {?} */
        var loadImage = fromEvent(image, 'load')
            .pipe(map(function () {
            return {
                width: image.naturalWidth,
                height: image.naturalHeight
            };
        }));
        document.body.appendChild(image);
        return loadImage;
    };
    ImageDataConverter.decorators = [
        { type: Injectable }
    ];
    return ImageDataConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExtendedFileUploader = /** @class */ (function (_super) {
    __extends(ExtendedFileUploader, _super);
    function ExtendedFileUploader(options, filemanagerNotification) {
        var _this = _super.call(this, options) || this;
        _this.filemanagerNotification = filemanagerNotification;
        return _this;
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    ExtendedFileUploader.prototype.onWhenAddingFileFailed = /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter$$1, options) {
        /** @type {?} */
        var notification = {
            type: 'alert',
            title: 'Add file to queue',
            message: "File not add to queue"
        };
        if (filter$$1.name === 'fileSize') {
            notification.message = "File size is too large - max size  is " + options.maxFileSize / 1024 + " KB";
        }
        else {
            notification.message = "File mime type \"" + item.type + "\" is not allowed";
        }
        this.filemanagerNotification.sendNotification(notification);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ExtendedFileUploader.prototype.uploadItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.options.url) {
            _super.prototype.uploadItem.call(this, value);
        }
        else {
            /** @type {?} */
            var imageDataConverter = new ImageDataConverter();
            this._onProgressItem(value, 0);
            if (this.isUploading) {
                return;
            }
            this.isUploading = true;
            /** @type {?} */
            var header = this.options.headers.find(function (object) { return object.name === 'folderId'; });
            this._onProgressItem(value, 50);
            imageDataConverter.getProperties(value._file, header.value)
                .subscribe(function (file) {
                _this.isUploading = false;
                _this._onProgressItem(value, 100);
                _this._onCompleteItem(value, JSON.stringify(file), 200, {});
            });
        }
    };
    return ExtendedFileUploader;
}(FileUploader));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilemanagerNotifcations = /** @class */ (function () {
    function FilemanagerNotifcations() {
        this.notification$ = new Subject();
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    FilemanagerNotifcations.prototype.sendNotification = /**
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        this.notification$.next(notification);
    };
    /**
     * @return {?}
     */
    FilemanagerNotifcations.prototype.getNotificationStream = /**
     * @return {?}
     */
    function () {
        return this.notification$;
    };
    return FilemanagerNotifcations;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileManagerUploader = /** @class */ (function () {
    function FileManagerUploader(configuration, filemanagerNotification) {
        /** @type {?} */
        var options = {
            allowedMimeType: configuration.mimeTypes,
            url: configuration.urls.filesUrl,
            maxFileSize: configuration.maxFileSize
        };
        this.uploader = new ExtendedFileUploader(options, filemanagerNotification);
    }
    /**
     * @return {?}
     */
    FileManagerUploader.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.uploader.authToken = null;
        this.uploader.setOptions(this.getDefaultOptions());
    };
    /**
     * @return {?}
     */
    FileManagerUploader.prototype.getDefaultOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        options['removeAfterUpload'] = true;
        options['autoUpload'] = true;
        options['method'] = 'POST';
        return options;
    };
    /**
     * @param {?} token
     * @return {?}
     */
    FileManagerUploader.prototype.setAuthorizationToken = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        this.uploader.authToken = token;
    };
    /**
     * @param {?} directoryId
     * @return {?}
     */
    FileManagerUploader.prototype.setDirectoryId = /**
     * @param {?} directoryId
     * @return {?}
     */
    function (directoryId) {
        /** @type {?} */
        var options = this.getDefaultOptions();
        options['headers'] = [{ name: 'folderId', value: directoryId.toString() }];
        this.uploader.setOptions(options);
        return this;
    };
    FileManagerUploader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerUploader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] },
        { type: FilemanagerNotifcations }
    ]; };
    return FileManagerUploader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileComponent = /** @class */ (function () {
    function FileComponent(configuration, store) {
        this.configuration = configuration;
        this.store = store;
        this.onPreviewFile = new EventEmitter();
        this.onCropFile = new EventEmitter();
        this.onSelectFile = new EventEmitter();
        this.removeTitle = 'Remove file';
    }
    /**
     * Fired when clicked on button "delete file"
     *
     * @param file
     */
    /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    FileComponent.prototype.deleteFile = /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    function ($event, file) {
        this.store.dispatch(new DeleteFileAction({ file: file }));
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FileComponent.prototype.getRemoveMessage = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FileComponent.prototype.openPreview = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var fileEvent = {
            eventName: 'onPreviewFile',
            file: this.file
        };
        this.onPreviewFile.emit(fileEvent);
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FileComponent.prototype.openCrop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var fileEvent = {
            eventName: 'onCropFile',
            file: this.file
        };
        this.onCropFile.emit(fileEvent);
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    FileComponent.prototype.selectFile = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new SelectFileAction({ file: this.file }));
    };
    /**
     * @return {?}
     */
    FileComponent.prototype.unSelectFile = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new UnSelectFileAction({ file: this.file }));
    };
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    FileComponent.prototype.chooseFile = /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    function ($event, file) {
        this.store.dispatch(new ChooseFilesAction({ files: [file.toJSON()] }));
        $event.preventDefault();
        $event.stopPropagation();
    };
    FileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-file-component',
                    template: "<div *ngIf=\"configuration.isMultiSelection\" class=\"file-selection-input\">\n  <i class=\"fa fa-2x checked fa-check-square-o\" (click)=\"unSelectFile()\"></i>\n  <i class=\"fa fa-2x unchecked fa-square-o\" (click)=\"selectFile()\"></i>\n</div>\n<div class=\"rounded file-img\" [ngClass]=\"{'file-img-symbol': !file.isImage()}\"\n     [style.background-image]=\"'url(' + file.thumbnailUrl + ')'\"></div>\n<span class=\"file-name\">{{file.name}}</span>\n<div class=\"file-menu\">\n  <div class=\"btn-group btn-group-sm\">\n    <!-- Add message: [message]=\"getRemoveMessage(file)\" -->\n    <button mwlConfirmationPopover [title]=\"removeTitle\" [appendToBody]=\"true\"\n            [confirmText]=\"'Yes'\" [cancelText]=\"'No'\" placement=\"bottom\" (confirm)=\"deleteFile($event, file)\"\n            class=\"btn btn-sm btn-danger btn-icon\">\n      <i class=\"fa fa-trash\"></i>\n    </button>\n    <button (click)=\"openPreview($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-search\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"openCrop($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-crop\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"chooseFile($event, file)\" class=\"btn btn-sm btn-primary btn-icon\">\n      <i class=\"fa fa-image\"></i>\n    </button>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    FileComponent.ctorParameters = function () { return [
        { type: FileManagerConfiguration },
        { type: Store }
    ]; };
    FileComponent.propDecorators = {
        file: [{ type: Input }],
        onPreviewFile: [{ type: Output }],
        onCropFile: [{ type: Output }],
        onSelectFile: [{ type: Output }]
    };
    return FileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@Deprecated - Will be removed in 3.0.0
 */
var FileManagerActionsService = /** @class */ (function () {
    function FileManagerActionsService() {
    }
    /**
     * @Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerActionsService.prototype.chooseFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CHOOSE_FILES,
            payload: { files: files }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerActionsService.prototype.cropFile = /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE,
            payload: {
                file: file,
                bounds: bounds
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.cropFileSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.cropFileError = /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.deleteFile = /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.deleteFileSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
     * @param {?} fileIds
     * @return {?}
     */
    FileManagerActionsService.prototype.deleteSelectedFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
     * @param {?} fileIds
     * @return {?}
     */
    function (fileIds) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
            payload: { fileIds: fileIds }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerActionsService.prototype.deleteSelectedFilesSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS,
            payload: { files: files }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
     * @param {?} folderId
     * @return {?}
     */
    FileManagerActionsService.prototype.loadFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        return {
            type: FileManagerActionsService.FILEMANAGER_LOAD_FILES,
            payload: {
                folderId: folderId
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
     * @return {?}
     */
    FileManagerActionsService.prototype.inverseFileSelection = /**
     * \@Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
     * @return {?}
     */
    function () {
        return {
            type: FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION,
            payload: {}
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
     * @param {?} folderId
     * @param {?} files
     * @return {?}
     */
    FileManagerActionsService.prototype.loadFilesSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
     * @param {?} folderId
     * @param {?} files
     * @return {?}
     */
    function (folderId, files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS,
            payload: {
                folderId: folderId,
                files: files
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
     * @param {?} files
     * @param {?} folderId
     * @return {?}
     */
    FileManagerActionsService.prototype.moveFileSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
     * @param {?} files
     * @param {?} folderId
     * @return {?}
     */
    function (files, folderId) {
        return {
            type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS,
            payload: { folderId: folderId, files: files }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerActionsService.prototype.moveFileError = /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR,
            payload: { files: files }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
     * @return {?}
     */
    FileManagerActionsService.prototype.selectAllFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
     * @return {?}
     */
    function () {
        return {
            type: FileManagerActionsService.FILEMANAGER_SELECT_ALL,
            payload: {}
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.selectFile = /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_SELECT_FILE,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
     * @return {?}
     */
    FileManagerActionsService.prototype.unSelectAll = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
     * @return {?}
     */
    function () {
        return {
            type: FileManagerActionsService.FILEMANAGER_UNSELECT_ALL,
            payload: {}
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.unSelectFile = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UNSELECT_FILE,
            payload: {
                file: file
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.upload = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE,
            payload: {
                files: [file]
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.uploadSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS,
            payload: {
                files: [file]
            }
        };
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerActionsService.prototype.uploadError = /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR,
            payload: {
                files: [file]
            }
        };
    };
    FileManagerActionsService.FILEMANAGER_CHOOSE_FILES = 'FILEMANAGER_CHOOSE_FILES';
    FileManagerActionsService.FILEMANAGER_CROP_FILE = 'FILEMANAGER_CROP_FILE';
    FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS = 'FILEMANAGER_CROP_FILE_SUCCESS';
    FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR = 'FILEMANAGER_CROP_FILE_ERROR';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE = 'FILEMANAGER_DELETE_FILE';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS = 'FILEMANAGER_DELETE_FILE_SUCCESS';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION = 'FILEMANAGER_DELETE_FILE_SELECTION';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS = 'FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS';
    FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION = 'FILEMANAGER_INVERSE_FILE_SELECTION';
    FileManagerActionsService.FILEMANAGER_LOAD_FILES = 'FILEMANAGER_LOAD_FILES';
    FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS = 'FILEMANAGER_LOAD_FILES_SUCCESS';
    FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS = 'FILEMANAGER_MOVE_FILES_SUCCESS';
    FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR = 'FILEMANAGER_MOVE_FILES_ERROR';
    FileManagerActionsService.FILEMANAGER_SELECT_ALL = 'FILEMANAGER_SELECT_ALL';
    FileManagerActionsService.FILEMANAGER_SELECT_FILE = 'FILEMANAGER_SELECT_FILE';
    FileManagerActionsService.FILEMANAGER_UNSELECT_FILE = 'FILEMANAGER_UNSELECT_FILE';
    FileManagerActionsService.FILEMANAGER_UNSELECT_ALL = 'FILEMANAGER_UNSELECT_ALL';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE = 'FILEMANAGER_UPLOAD_FILE';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR = 'FILEMANAGER_UPLOAD_FILE_ERROR';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS = 'FILEMANAGER_UPLOAD_FILE_SUCCESS';
    FileManagerActionsService.decorators = [
        { type: Injectable }
    ];
    return FileManagerActionsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@Deprecated - Will be removed in 3.0.0
 */
var FileManagerDispatcherService = /** @class */ (function () {
    function FileManagerDispatcherService(store, fileManagerActions) {
        this.store = store;
        this.fileManagerActions = fileManagerActions;
    }
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerDispatcherService.prototype.chooseFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.store.dispatch(new ChooseFilesAction({ files: files }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerDispatcherService.prototype.cropFile = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        this.store.dispatch(new CropFileAction({ bounds: bounds, file: file }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.deleteFile = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new DeleteFileAction({ file: file }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    FileManagerDispatcherService.prototype.deleteSelectedFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.store.dispatch(new DeleteSelectedFilesAction({ files: files }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     * @return {?}
     */
    FileManagerDispatcherService.prototype.inverseSelection = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     * @return {?}
     */
    function () {
        this.store.dispatch(new InverseFilesSelectionAction());
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     * @param {?} folderId
     * @return {?}
     */
    FileManagerDispatcherService.prototype.loadFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        this.store.dispatch(new LoadFilesAction({ folderId: folderId }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     * @return {?}
     */
    FileManagerDispatcherService.prototype.selectAllFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     * @return {?}
     */
    function () {
        this.store.dispatch(new SelectAllFilesAction());
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.selectFile = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new SelectFileAction({ file: file }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     * @return {?}
     */
    FileManagerDispatcherService.prototype.unSelectAllFiles = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     * @return {?}
     */
    function () {
        this.store.dispatch(new UnSelectAllFilesAction());
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.unSelectFile = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new UnSelectFileAction({ file: file }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.uploadError = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new UploadFilesErrorAction({ files: [file] }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.upload = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new UploadFilesAction({ files: [file] }));
    };
    /**
     * @Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     */
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     * @param {?} file
     * @return {?}
     */
    FileManagerDispatcherService.prototype.uploadSuccess = /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new UploadFilesSuccessAction({ files: [file] }));
    };
    FileManagerDispatcherService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerDispatcherService.ctorParameters = function () { return [
        { type: Store },
        { type: FileManagerActionsService }
    ]; };
    return FileManagerDispatcherService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FILEMANAGER_TREE_NAME = 'fileManagerTree';
/**
 * @abstract
 */
var  /**
 * @abstract
 */
AbstractFileManagerApiService = /** @class */ (function () {
    function AbstractFileManagerApiService() {
        this.treeName = FILEMANAGER_TREE_NAME;
        this.fileManagerName = 'fileManagerFiles';
        this.currentNodeId = '';
    }
    return AbstractFileManagerApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileManagerApiService = /** @class */ (function (_super) {
    __extends(FileManagerApiService, _super);
    function FileManagerApiService(filemanagerNotfication) {
        var _this = _super.call(this) || this;
        _this.filemanagerNotfication = filemanagerNotfication;
        return _this;
    }
    Object.defineProperty(FileManagerApiService.prototype, "treeId", {
        get: /**
         * @return {?}
         */
        function () {
            return FILEMANAGER_TREE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.load = /**
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        if (nodeId === void 0) { nodeId = ''; }
        if (!this.nodes) {
            this.nodes = this.getAllDataFromLocalStorage();
        }
        /** @type {?} */
        var nodes = this.getChildren(nodeId);
        return of(nodes);
    };
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    FileManagerApiService.prototype.add = /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    function (node, parentNodeId) {
        if (parentNodeId === void 0) { parentNodeId = null; }
        node.parentId = parentNodeId;
        node.id = UUID.UUID();
        this.nodes.push(node);
        if (this.saveNodes()) {
            return of(node);
        }
        else {
            return empty();
        }
    };
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    FileManagerApiService.prototype.move = /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    function (srcNode, targetNode) {
        /** @type {?} */
        var srcId = srcNode.id;
        /** @type {?} */
        var targetId = targetNode ? targetNode.id : '';
        /** @type {?} */
        var index = this.findIndexByNodeId(srcId);
        this.nodes[index].parentId = targetId;
        if (this.saveNodes()) {
            return of(this.nodes[index]);
        }
        else {
            return empty();
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    FileManagerApiService.prototype.update = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.findIndexByNodeId(node.id);
        this.nodes[index] = node;
        if (this.saveNodes()) {
            return of(node);
        }
        else {
            return empty();
        }
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.remove = /**
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        /** @type {?} */
        var index = this.findIndexByNodeId(nodeId);
        /** @type {?} */
        var node = this.nodes[index];
        /** @type {?} */
        var hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            this.nodes.splice(index, 1);
            this.saveNodes();
            return of(node);
        }
        else {
            return throwError('Node is not empty');
        }
    };
    /**
     * @param {?} nodes
     * @return {?}
     */
    FileManagerApiService.prototype.setAllNodes = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        this.nodes = __spread(nodes);
        this.saveNodes();
    };
    /**
     * Crop file
     */
    /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerApiService.prototype.cropFile = /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        return throwError('This functionality is not available with LocalStorage');
    };
    /**
     * Load files from directory
     */
    /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.loadFiles = /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        this.currentNodeId = nodeId;
        if (!this.files) {
            this.files = this.getAllFileDataFromLocalStorage();
        }
        /** @type {?} */
        var files = this.getFilesFromFolder(nodeId);
        /** @type {?} */
        var newFiles = files.map(function (file) {
            return _this.convertLocalData2IOuterFile(file);
        });
        return of(newFiles);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FileManagerApiService.prototype.removeFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return of(false);
        }
        this.files.splice(index, 1);
        this.saveFiles();
        return of(true);
    };
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    FileManagerApiService.prototype.removeSelectedFiles = /**
     * @param {?} selectedFiles
     * @return {?}
     */
    function (selectedFiles) {
        var _this = this;
        /** @type {?} */
        var numberOfFiles = this.files.length;
        selectedFiles.forEach(function (fileId) {
            /** @type {?} */
            var index = _this.findIndexByFileId(fileId);
            if (index > -1) {
                _this.files.splice(index, 1);
            }
        });
        this.saveFiles();
        return of((this.files.length + selectedFiles.length === numberOfFiles));
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FileManagerApiService.prototype.uploadFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var fileData = this.convertIOuterFile2LocalData(file);
        this.files.push(fileData);
        if (this.saveFiles()) {
            return of(this.convertLocalData2IOuterFile(fileData));
        }
        else {
            return Observable.throw('Upload error');
        }
    };
    /**
     * @param {?} files
     * @param {?=} node
     * @return {?}
     */
    FileManagerApiService.prototype.moveFile = /**
     * @param {?} files
     * @param {?=} node
     * @return {?}
     */
    function (files, node) {
        var _this = this;
        if (node === void 0) { node = null; }
        /** @type {?} */
        var ids = files.map(function (file) { return file.id.toString(); });
        /** @type {?} */
        var folderId = node ? node.id.toString() : '';
        /** @type {?} */
        var movedFiles = this.files.filter(function (file) { return ids.indexOf(file.id.toString()) > -1; });
        /** @type {?} */
        var errorMsg = 'Can not move file to the same folder';
        movedFiles.forEach(function (file) {
            if (node) {
                if (node.id === file.folderId) ;
            }
            else {
                if (file.folderId === '' || file.folderId === null) {
                    return Observable.throw(errorMsg);
                }
            }
            file.folderId = folderId;
        });
        if (this.saveFiles()) {
            return of(movedFiles.map(function (file) { return _this.convertLocalData2IOuterFile(file); }));
        }
        else {
            return Observable.throw('Move files error');
        }
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.findIndexByNodeId = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.nodes.findIndex(function (node) {
            return node.id === nodeId;
        });
    };
    /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    FileManagerApiService.prototype.findIndexByFileId = /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    function (fileId) {
        return this.files.findIndex(function (file) { return file.id === fileId; });
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.getChildren = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.nodes.filter(function (node) { return node.parentId === nodeId; });
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerApiService.prototype.getFilesFromFolder = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.files.filter(function (file) { return file.folderId === nodeId; });
    };
    /**
     * @protected
     * @return {?}
     */
    FileManagerApiService.prototype.getAllDataFromLocalStorage = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var data = localStorage.getItem(this.treeName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    };
    /**
     * @protected
     * @return {?}
     */
    FileManagerApiService.prototype.getAllFileDataFromLocalStorage = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var data = localStorage.getItem(this.fileManagerName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    };
    /**
     * @private
     * @return {?}
     */
    FileManagerApiService.prototype.saveNodes = /**
     * @private
     * @return {?}
     */
    function () {
        try {
            localStorage.setItem(this.treeName, JSON.stringify(this.nodes));
            return true;
        }
        catch (e) {
            this.filemanagerNotfication.sendNotification({
                type: 'error',
                title: 'State is not saved.',
                message: 'Reload previous state.'
            });
            this.files = null;
            this.nodes = null;
            this.load();
            return false;
        }
    };
    /**
     * @private
     * @return {?}
     */
    FileManagerApiService.prototype.saveFiles = /**
     * @private
     * @return {?}
     */
    function () {
        try {
            localStorage.setItem(this.fileManagerName, JSON.stringify(this.files));
            return true;
        }
        catch (e) {
            this.filemanagerNotfication.sendNotification({
                type: 'error',
                title: 'State is not saved.',
                message: 'Reload previous state.'
            });
            /** @type {?} */
            var nodeId = this.files[(this.files.length - 1)].folderId || null;
            this.files = null;
            this.load(nodeId);
            return false;
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    FileManagerApiService.prototype.convertLocalData2IOuterFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            id: file.id,
            folderId: file.folderId,
            name: file.name,
            thumbnailUrl: file.data,
            url: file.data,
            width: file.width,
            height: file.height,
            type: file.type,
            size: file.size
        };
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    FileManagerApiService.prototype.convertIOuterFile2LocalData = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            id: file.id.toString(),
            folderId: file.folderId,
            name: file.name,
            type: file.type,
            data: file.data,
            size: file.size,
            width: file.width,
            height: file.height
        };
    };
    FileManagerApiService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerApiService.ctorParameters = function () { return [
        { type: FilemanagerNotifcations }
    ]; };
    return FileManagerApiService;
}(AbstractFileManagerApiService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileManagerEffectsService = /** @class */ (function () {
    function FileManagerEffectsService(actions$, fileManagerActions, filemanagerNotfication, fileManagerApiService) {
        var _this = this;
        this.actions$ = actions$;
        this.fileManagerActions = fileManagerActions;
        this.filemanagerNotfication = filemanagerNotfication;
        this.fileManagerApiService = fileManagerApiService;
        this.loadFiles$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_LOAD_FILES), switchMap(function (action) { return _this.loadFiles(action.payload.folderId)
            .pipe(map(function (files) {
            return new LoadFilesSuccessAction({ files: files });
        }), catchError(function (e) {
            return of(_this.onLoadFilesError(action.payload.folderId));
        })); }));
        this.cropFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE), switchMap(function (action) { return _this.cropFile(action.payload.file, action.payload.bounds)
            .pipe(map(function (result) {
            _this.filemanagerNotfication.sendNotification({
                type: 'success',
                title: 'Crop Image.',
                message: 'Image has been cropped.'
            });
            return new CropFileSuccessAction({ file: action.payload.file });
        }), catchError(function () { return of(new CropFileErrorAction({ file: action.payload.file })); })); }));
        this.deleteFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE), switchMap(function (action) { return _this.deleteFile(action.payload.file)
            .pipe(map(function (result) {
            return new DeleteFileSuccessAction({ file: action.payload.file });
        }), catchError(function () { return of(_this.onDeleteFileError(action.payload.file)); })); }));
        this.deleteFilesSelection$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION), switchMap(function (action) { return _this.deleteFilesSelection(action.payload.fileIds)
            .pipe(map(function (result) {
            return new DeleteSelectedFilesSuccessAction({ files: action.payload.fileIds });
        }), catchError(function () { return of(_this.onDeleteFilesSelectionError(action.payload.files)); })); }));
        this.uploadFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE), switchMap(function (action) { return _this.uploadFile(action.payload.files[0])
            .pipe(map(function (result) {
            return new UploadFilesSuccessAction({ files: [result] });
        }), catchError(function () {
            return empty();
        })); }));
        this.moveFile$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_MOVE_NODE), filter(function (action) {
            return action.payload.sourceOfDroppedData === 'FILE';
        }), switchMap(function (action) { return _this.moveFiles([(/** @type {?} */ (action.payload.oldNode))], action.payload.node)
            .pipe(map(function (result) {
            /** @type {?} */
            var folderId = ((/** @type {?} */ (action.payload.oldNode))).folderId;
            return new MoveFilesSuccessAction({ files: result, folderId: folderId });
        }), catchError(function () {
            return of(new MoveFilesErrorAction({ files: [(/** @type {?} */ (action.payload.oldNode))] }));
        })); }));
        this.filesMoveSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS), map(function (action) {
            _this.onMoveFilesSuccess();
            return new LoadFilesAction({ folderId: action.payload.folderId });
        }));
        this.uploadError$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR), map(function (action) {
            _this.filemanagerNotfication.sendNotification({
                type: 'alert',
                title: 'File upload',
                message: action.payload.files[0].name + " exists on the server in this directory"
            });
        }));
        this.cropFileSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS));
        this.deleteFileSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS));
        this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR))
            .subscribe(function (action) {
            _this.onCropFileError(action.payload.file);
        });
        this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR))
            .subscribe(function (action) {
            _this.onMoveFilesError();
        });
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerEffectsService.prototype.cropFile = /**
     * @protected
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
    };
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    FileManagerEffectsService.prototype.deleteFile = /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this.fileManagerApiService.removeFile(file.toJSON());
    };
    /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    FileManagerEffectsService.prototype.deleteFilesSelection = /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return this.fileManagerApiService.removeSelectedFiles(files);
    };
    /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    FileManagerEffectsService.prototype.loadFiles = /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        return this.fileManagerApiService.loadFiles(folderId);
    };
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    FileManagerEffectsService.prototype.uploadFile = /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this.fileManagerApiService.uploadFile(file);
    };
    /**
     * @protected
     * @param {?} files
     * @param {?=} folder
     * @return {?}
     */
    FileManagerEffectsService.prototype.moveFiles = /**
     * @protected
     * @param {?} files
     * @param {?=} folder
     * @return {?}
     */
    function (files, folder) {
        if (folder === void 0) { folder = null; }
        return this.fileManagerApiService.moveFile(files, folder);
    };
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    FileManagerEffectsService.prototype.onCropFileError = /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.filemanagerNotfication.sendNotification({
            type: 'alert',
            title: 'Crop Image',
            message: '[FILEMANAGER] Can not crop file'
        });
    };
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    FileManagerEffectsService.prototype.onDeleteFileError = /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete file',
            message: '[FILEMANAGER] Can not delete file' + file.name
        });
    };
    /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    FileManagerEffectsService.prototype.onDeleteFilesSelectionError = /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete selected files',
            message: '[FILEMANAGER] Not all files were deleted'
        });
    };
    /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    FileManagerEffectsService.prototype.onLoadFilesError = /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Load files',
            message: '[FILEMANAGER] Can not load files for folder ' + folderId
        });
    };
    /**
     * @protected
     * @return {?}
     */
    FileManagerEffectsService.prototype.onMoveFilesSuccess = /**
     * @protected
     * @return {?}
     */
    function () {
        this.filemanagerNotfication.sendNotification({
            type: 'success',
            title: 'Move files',
            message: 'File was successfully moved to folder'
        });
    };
    /**
     * @protected
     * @return {?}
     */
    FileManagerEffectsService.prototype.onMoveFilesError = /**
     * @protected
     * @return {?}
     */
    function () {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Move files',
            message: 'File was not successfully moved to new folder'
        });
    };
    FileManagerEffectsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerEffectsService.ctorParameters = function () { return [
        { type: Actions },
        { type: FileManagerActionsService },
        { type: FilemanagerNotifcations },
        { type: FileManagerApiService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "loadFiles$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "cropFile$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "deleteFile$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "deleteFilesSelection$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "uploadFile$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "moveFile$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "filesMoveSuccess$", void 0);
    return FileManagerEffectsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilesListComponent = /** @class */ (function () {
    function FilesListComponent(configuration, store, fileManagerDispatcher, notifications, fileManagerEffects) {
        this.configuration = configuration;
        this.store = store;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onPreviewFile = new EventEmitter();
        this.onCropFile = new EventEmitter();
        this.onSelectFile = new EventEmitter();
        this.removeTitle = 'Remove file';
        this.dragZone = FILEMANAGER_TREE_NAME;
        fileManagerEffects.deleteFileSuccess$
            .subscribe(function (action) {
            notifications.success('File delete', action.payload.file.name + " has been deleted");
        });
    }
    /**
     * Fired when clicked on button "delete file"
     *
     * @param file
     */
    /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} file
     * @return {?}
     */
    FilesListComponent.prototype.deleteFile = /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.store.dispatch(new DeleteFileAction({ file: file }));
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FilesListComponent.prototype.getRemoveMessage = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    };
    /**
     * @param {?} fileEvent
     * @return {?}
     */
    FilesListComponent.prototype.openPreview = /**
     * @param {?} fileEvent
     * @return {?}
     */
    function (fileEvent) {
        this.onPreviewFile.emit(fileEvent);
    };
    /**
     * @param {?} fileEvent
     * @return {?}
     */
    FilesListComponent.prototype.openCrop = /**
     * @param {?} fileEvent
     * @return {?}
     */
    function (fileEvent) {
        this.onCropFile.emit(fileEvent);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FilesListComponent.prototype.toggleSelection = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (file.selected) {
            this.store.dispatch(new UnSelectFileAction({ file: file }));
        }
        else {
            this.store.dispatch(new SelectFileAction({ file: file }));
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    FilesListComponent.prototype.isSelected = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return this.selectedFiles.indexOf(file.getId().toString()) > -1;
    };
    FilesListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-files-list',
                    template: "<div class=\"files-list\">\n  <div class=\"file\" *ngFor=\"let file of files\" [ngClass]=\"{'selected': isSelected(file)}\"  riDraggable [data]=\"file.toJSON()\" [sourceType]=\"'FILE'\" [dragZone]=\"dragZone\">\n    <ri-file-component [file]=\"file\" (onPreviewFile)=\"openPreview($event)\" (onCropFile)=\"openCrop($event)\"></ri-file-component>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".files-list .file{display:inline-block;position:relative;cursor:pointer;text-align:center;width:140px;height:110px;padding:5px;border:1px solid #ccc;background-color:#eee;border-radius:10px;margin:0 0 20px 20px}.files-list .file .file-img{width:128px;height:98px;background-size:cover;background-repeat:no-repeat}.files-list .file .file-img.file-img-symbol{background-size:contain;background-position-x:50%}.files-list .file .file-name{display:none;position:absolute;bottom:0;left:0;right:0;text-align:center;background-color:rgba(238,238,238,.5)}.files-list .file .file-menu{display:none;position:absolute;top:30%;left:0;right:0;text-align:center}.files-list .file .file-selection-input{display:none;position:absolute;top:3px;left:3px;cursor:pointer;z-index:10}.files-list .file .file-selection-input .checked{display:none}.files-list .file .file-selection-input .unchecked{display:block}.files-list .file:hover .file-img{opacity:.3}.files-list .file:hover .file-menu,.files-list .file:hover .file-name,.files-list .file:hover .file-selection-input{display:block}.files-list .file.selected{border-color:#fff33a;background-color:rgba(255,243,58,.5)}.files-list .file.selected .file-name{background-color:rgba(255,243,58,.5)}.files-list .file.selected .file-menu,.files-list .file.selected .file-selection-input{display:none}.files-list .file.selected .file-selection-input .checked{display:block}.files-list .file.selected .file-selection-input .unchecked{display:none}.files-list .file.selected:hover .file-selection-input{display:block}"]
                }] }
    ];
    /** @nocollapse */
    FilesListComponent.ctorParameters = function () { return [
        { type: FileManagerConfiguration },
        { type: Store },
        { type: FileManagerDispatcherService },
        { type: NotificationsService },
        { type: FileManagerEffectsService }
    ]; };
    FilesListComponent.propDecorators = {
        files: [{ type: Input }],
        selectedFiles: [{ type: Input }],
        onPreviewFile: [{ type: Output }],
        onCropFile: [{ type: Output }],
        onSelectFile: [{ type: Output }]
    };
    return FilesListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchFilterService = /** @class */ (function () {
    function SearchFilterService() {
        /**
         * File type filter
         */
        this.filter$ = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    SearchFilterService.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.filter$.getValue();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchFilterService.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.filter$.next(value);
    };
    SearchFilterService.decorators = [
        { type: Injectable }
    ];
    return SearchFilterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileTypeFilterService = /** @class */ (function () {
    function FileTypeFilterService() {
        /**
         * File type filter
         */
        this.filter$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    FileTypeFilterService.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.filter$.getValue();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileTypeFilterService.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.filter$.next(value);
    };
    FileTypeFilterService.decorators = [
        { type: Injectable }
    ];
    return FileTypeFilterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function cropFile(state, action) {
    /** @type {?} */
    var file = action.payload.file;
    /** @type {?} */
    var id = file.getId().toString();
    state.entities[id] = (/** @type {?} */ (__assign({}, file.toJSON())));
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.selectedFiles
    };
}
/**
 * @param {?} state
 * @return {?}
 */
function inverseFilesSelection(state) {
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.files.filter(function (i) { return state.selectedFiles.indexOf(i) === -1; })
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function loadFiles(state, action) {
    /** @type {?} */
    var entities = {};
    /** @type {?} */
    var files = [];
    action.payload.files.map(function (file) {
        /** @type {?} */
        var id = file.id.toString();
        entities[id] = file;
        files.push(id);
    });
    return {
        entities: entities,
        files: files,
        selectedFiles: []
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function moveFiles(state, action) {
    /** @type {?} */
    var files = action.payload.files;
    /** @type {?} */
    var ids = files.map(function (file) { return file.id.toString(); });
    /** @type {?} */
    var folderId = action.payload.folderId ? action.payload.folderId.toString() : '';
    /** @type {?} */
    var entities = __assign({}, state.entities);
    ids.forEach(function (id) {
        /** @type {?} */
        var oldEntity = __assign({}, entities[id]);
        oldEntity.folderId = folderId;
        entities[id] = oldEntity;
    });
    return {
        entities: entities,
        files: state.files.filter(function (i) { return ids.indexOf(i) === -1; }),
        selectedFiles: state.selectedFiles.filter(function (i) { return ids.indexOf(i) === -1; })
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function removeFile(state, action) {
    /** @type {?} */
    var id = action.payload.file.getId();
    delete state.entities[id];
    return {
        entities: state.entities,
        files: state.files.filter(function (i) { return i !== id; }),
        selectedFiles: state.selectedFiles
    };
}
/**
 * @param {?} state
 * @return {?}
 */
function removeSelectedFiles(state) {
    /** @type {?} */
    var files = state.files.filter(function (i) { return state.selectedFiles.indexOf(i) === -1; });
    /** @type {?} */
    var entities = {};
    files.forEach(function (fileId) {
        entities[fileId] = state.entities[fileId];
    });
    return {
        entities: entities,
        files: files,
        selectedFiles: []
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function selectFile(state, action) {
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: __spread(state.selectedFiles, [action.payload.file.getId().toString()])
    };
}
/**
 * @param {?} state
 * @return {?}
 */
function selectAllFiles(state) {
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: __spread(state.files)
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function uploadFiles(state, action) {
    /** @type {?} */
    var newState = {
        entities: __assign({}, state.entities),
        files: __spread(state.files),
        selectedFiles: []
    };
    action.payload.files.forEach(function (file) {
        /** @type {?} */
        var id = file.id.toString();
        newState.entities[id] = file;
        newState.files.push(id);
    });
    return newState;
}
/**
 * @param {?} state
 * @return {?}
 */
function unSelectAllFiles(state) {
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: []
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function unSelectFile(state, action) {
    /** @type {?} */
    var fileId = action.payload.file.getId().toString();
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.selectedFiles.filter(function (id) { return id !== fileId; })
    };
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function fileManagerReducer(state, action) {
    if (state === void 0) { state = {
        entities: {},
        files: [],
        selectedFiles: []
    }; }
    switch (action.type) {
        case FileManagerActionTypes.CROP_FILE_SUCCESS:
            return cropFile(state, action);
        case FileManagerActionTypes.INVERSE_FILE_SELECTION:
            return inverseFilesSelection(state);
        case FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS:
            return removeSelectedFiles(state);
        case FileManagerActionTypes.DELETE_FILE_SUCCESS:
            return removeFile(state, action);
        case FileManagerActionTypes.MOVE_FILES_SUCCESS:
            return moveFiles(state, action);
        case FileManagerActionTypes.LOAD_FILES_SUCCESS:
            return loadFiles(state, action);
        case FileManagerActionTypes.SELECT_ALL:
            return selectAllFiles(state);
        case FileManagerActionTypes.SELECT_FILE:
            return selectFile(state, action);
        case FileManagerActionTypes.UNSELECT_ALL:
            return unSelectAllFiles(state);
        case FileManagerActionTypes.UNSELECT_FILE:
            return unSelectFile(state, action);
        case FileManagerActionTypes.UPLOAD_FILE_SUCCESS:
            return uploadFiles(state, action);
        case FileManagerActionTypes.DELETE_FILE_SELECTION:
        case FileManagerActionTypes.CROP_FILE:
        case FileManagerActionTypes.DELETE_FILE:
        case FileManagerActionTypes.LOAD_FILES:
        case FileManagerActionTypes.MOVE_FILES_ERROR:
            return state;
        default:
            return state;
    }
}
/** @type {?} */
var filemanagerStateSelector = createFeatureSelector('files');
/** @type {?} */
var getAll = function (state) {
    return state.files.map(function (id) { return state.entities[id]; });
};
/** @type {?} */
var isChangeStateFiles = function (newState, prevState) {
    return prevState.files.length !== newState.files.length || prevState.files.filter(function (i) { return newState.files.indexOf(i) === -1; }).length > 0;
};
/** @type {?} */
var isChangeStateSelectedFiles = function (newState, prevState) {
    return prevState.selectedFiles.length !== newState.selectedFiles.length || prevState.selectedFiles.filter(function (i) { return newState.selectedFiles.indexOf(i) === -1; }).length > 0;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CurrentDirectoryFilesService = /** @class */ (function () {
    function CurrentDirectoryFilesService(store, fileTypeFilter, searchFilterService) {
        this.store = store;
        this.fileTypeFilter = fileTypeFilter;
        this.searchFilterService = searchFilterService;
        /** @type {?} */
        var store$ = this.store.select(filemanagerStateSelector);
        /** @type {?} */
        var observable$ = store$;
        this.entities$ = observable$
            .pipe(map(function (state) { return state.entities; }), distinctUntilChanged());
        this.currentDirectoryFileIds$ = observable$
            .pipe(map(function (state) { return state.files; }), distinctUntilChanged());
        this.selectedFiles$ = store$
            .pipe(map(function (state) { return state.selectedFiles; }));
        this.files$ = this.getFilesStream();
        this.filteredFiles$ = this.getCurrentDirectoryFilesStream();
    }
    /**
     * Return stream of files
     */
    /**
     * Return stream of files
     * @private
     * @return {?}
     */
    CurrentDirectoryFilesService.prototype.getFilesStream = /**
     * Return stream of files
     * @private
     * @return {?}
     */
    function () {
        return this.currentDirectoryFileIds$
            .pipe(withLatestFrom(this.entities$), map(function (ar) {
            return {
                entities: ar[1],
                files: ar[0]
            };
        }), map(function (state) {
            return getAll(state)
                .map(function (file) {
                return new FileModel(file);
            });
        }));
    };
    /**
     * Return stream of current directory filtered files
     */
    /**
     * Return stream of current directory filtered files
     * @private
     * @return {?}
     */
    CurrentDirectoryFilesService.prototype.getCurrentDirectoryFilesStream = /**
     * Return stream of current directory filtered files
     * @private
     * @return {?}
     */
    function () {
        return combineLatest(this.files$, this.fileTypeFilter.filter$, this.searchFilterService.filter$)
            .pipe(map(function (data) {
            /** @type {?} */
            var files = data[0];
            /** @type {?} */
            var fileTypeFilter = data[1];
            /** @type {?} */
            var search = data[2].toLocaleLowerCase();
            if (search !== '') {
                files = files.filter(function (file) {
                    return file.name.toLocaleLowerCase().indexOf(search) > -1;
                });
            }
            if (fileTypeFilter && fileTypeFilter.mimes.length > 0) {
                files = files.filter(function (file) {
                    return fileTypeFilter.mimes.indexOf(file.getMime()) > -1;
                });
            }
            return files;
        }));
    };
    CurrentDirectoryFilesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrentDirectoryFilesService.ctorParameters = function () { return [
        { type: Store },
        { type: FileTypeFilterService },
        { type: SearchFilterService }
    ]; };
    return CurrentDirectoryFilesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileManagerBackendApiService = /** @class */ (function (_super) {
    __extends(FileManagerBackendApiService, _super);
    function FileManagerBackendApiService($http, configuration) {
        var _this = _super.call(this) || this;
        _this.$http = $http;
        _this.configuration = configuration;
        _this.nodes = [];
        _this.files = [];
        return _this;
    }
    Object.defineProperty(FileManagerBackendApiService.prototype, "treeId", {
        get: /**
         * @return {?}
         */
        function () {
            return FILEMANAGER_TREE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Load folder chidls for given folder id
     */
    /**
     * Load folder chidls for given folder id
     * @param {?=} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.load = /**
     * Load folder chidls for given folder id
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        /** @type {?} */
        var nodeIds = this.nodes.map(function (node) { return node.id; });
        /** @type {?} */
        var params = new HttpParams().set('nodeId', nodeId || '');
        return this.$http.get(this.configuration.folderUrls.foldersUrl, { params: params })
            .pipe(map(function (nodes) {
            nodes.forEach(function (node) {
                if (nodeIds.indexOf(node.id) === -1) {
                    _this.nodes.push(node);
                }
                else {
                    /** @type {?} */
                    var index = _this.nodes.findIndex(function (item) { return node.id === item.id; });
                    _this.nodes[index] = node;
                }
            });
            return nodes;
        }));
    };
    /**
     * Create new folder
     */
    /**
     * Create new folder
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.add = /**
     * Create new folder
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    function (node, parentNodeId) {
        var _this = this;
        if (parentNodeId === void 0) { parentNodeId = null; }
        /** @type {?} */
        var data = {
            node: node,
            parentNodeId: parentNodeId
        };
        return this.$http.post(this.configuration.folderUrls.foldersUrl, data)
            .pipe(map(function (newNode) {
            _this.nodes.push(newNode);
            return newNode;
        }));
    };
    /**
     * Move folder from source parent to target parent
     */
    /**
     * Move folder from source parent to target parent
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    FileManagerBackendApiService.prototype.move = /**
     * Move folder from source parent to target parent
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    function (srcNode, targetNode) {
        var _this = this;
        /** @type {?} */
        var srcId = srcNode.id;
        /** @type {?} */
        var targetId = targetNode ? targetNode.id : null;
        return this.$http.put(this.configuration.folderUrls.folderMoveUrl, { source: srcId, target: targetId })
            .pipe(map(function (movedNode) {
            /** @type {?} */
            var index = _this.findIndexByNodeId(srcId);
            _this.nodes[index].parentId = targetId;
            return movedNode;
        }));
    };
    /**
     * Update folder name
     */
    /**
     * Update folder name
     * @param {?} node
     * @return {?}
     */
    FileManagerBackendApiService.prototype.update = /**
     * Update folder name
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        return this.$http.put(this.configuration.folderUrls.foldersUrl, node)
            .pipe(map(function (newNode) {
            /** @type {?} */
            var index = _this.findIndexByNodeId(node.id);
            _this.nodes[index] = newNode;
            return newNode;
        }));
    };
    /**
     * Remove node by given id
     */
    /**
     * Remove node by given id
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.remove = /**
     * Remove node by given id
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        /** @type {?} */
        var index = this.findIndexByNodeId(nodeId);
        /** @type {?} */
        var hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            /** @type {?} */
            var params = new HttpParams().set('nodeId', nodeId);
            return this.$http.delete(this.configuration.folderUrls.foldersUrl, { params: params })
                .pipe(map(function (removedNode) {
                _this.nodes.splice(index, 1);
                return removedNode;
            }));
        }
        else {
            return Observable.throw('Node is not empty');
        }
    };
    /**
     * @param {?} nodes
     * @return {?}
     */
    FileManagerBackendApiService.prototype.setAllNodes = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        this.nodes = __spread(nodes);
    };
    /**
     * Crop file
     */
    /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    FileManagerBackendApiService.prototype.cropFile = /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    function (file, bounds) {
        return this.$http.put(this.configuration.fileUrl, { id: file.id, bounds: bounds });
    };
    /**
     * Load files from directory
     */
    /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.loadFiles = /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        this.currentNodeId = nodeId;
        /** @type {?} */
        var params = new HttpParams().set('dirId', nodeId);
        return this.$http.get(this.configuration.fileUrl, { params: params })
            .pipe(map(function (files) {
            _this.files = files.map(function (file) { return (/** @type {?} */ (file)); });
            return files;
        }));
    };
    /**
     * Remove file from folder
     */
    /**
     * Remove file from folder
     * @param {?} file
     * @return {?}
     */
    FileManagerBackendApiService.prototype.removeFile = /**
     * Remove file from folder
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        /** @type {?} */
        var index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return of(false);
        }
        /** @type {?} */
        var params = new HttpParams().set('id', file.id.toString());
        return this.$http.delete(this.configuration.fileUrl, { params: params })
            .pipe(map(function () {
            _this.files.splice(index, 1);
            return true;
        }));
    };
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    FileManagerBackendApiService.prototype.removeSelectedFiles = /**
     * @param {?} selectedFiles
     * @return {?}
     */
    function (selectedFiles) {
        var _this = this;
        /** @type {?} */
        var params = new HttpParams().set('id', selectedFiles.join('|'));
        return this.$http.delete(this.configuration.fileUrl, { params: params })
            .pipe(map(function () {
            selectedFiles.forEach(function (fileId) {
                /** @type {?} */
                var index = _this.findIndexByFileId(fileId);
                if (index > -1) {
                    _this.files.splice(index, 1);
                }
            });
            return true;
        }));
    };
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     */
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     * @param {?} file
     * @return {?}
     */
    FileManagerBackendApiService.prototype.uploadFile = /**
     * This method is success method, real upload is done in ExtendedFileUploader
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var fileData = (/** @type {?} */ (file));
        this.files.push(fileData);
        return of(file);
    };
    /**
     * @param {?} files
     * @param {?} node
     * @return {?}
     */
    FileManagerBackendApiService.prototype.moveFile = /**
     * @param {?} files
     * @param {?} node
     * @return {?}
     */
    function (files, node) {
        /** @type {?} */
        var ids = files.map(function (file) { return file.id.toString(); });
        return this.$http.put(this.configuration.fileUrl, { files: ids, folderId: node ? node.id : '' });
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.findIndexByNodeId = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.nodes.findIndex(function (node) {
            return node.id === nodeId;
        });
    };
    /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.findIndexByFileId = /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    function (fileId) {
        return this.files.findIndex(function (file) { return file.id === fileId; });
    };
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    FileManagerBackendApiService.prototype.getChildren = /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        return this.nodes.filter(function (node) { return node.parentId === nodeId; });
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    FileManagerBackendApiService.prototype.convertLocalData2IOuterFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            id: file.id,
            folderId: file.folderId,
            name: file.name,
            thumbnailUrl: file.data,
            url: file.data,
            width: file.width,
            height: file.height,
            type: file.type,
            size: file.size
        };
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    FileManagerBackendApiService.prototype.convertIOuterFile2LocalData = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            id: file.id.toString(),
            folderId: file.folderId,
            name: file.name,
            type: file.type,
            data: file.data,
            size: file.size,
            width: file.width,
            height: file.height
        };
    };
    FileManagerBackendApiService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FileManagerBackendApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: FileManagerConfiguration }
    ]; };
    return FileManagerBackendApiService;
}(AbstractFileManagerApiService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IUploadItemEvent = /** @class */ (function () {
    function IUploadItemEvent() {
    }
    return IUploadItemEvent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var Button = {
    ADD_FOLDER: 'ADD_FOLDER',
    CHOOSE_SELECTION: 'CHOOSE_SELECTION',
    DELETE_SELECTION: 'DELETE_SELECTION',
    INVERSE_SELECTION: 'INVERSE_SELECTION',
    REFRESH_FILES_LIST: 'REFRESH_FILES_LIST',
    SELECT_ALL: 'SELECT_ALL',
    UNSELECT_ALL: 'UNSELECT_ALL',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToolbarEventModel = /** @class */ (function () {
    function ToolbarEventModel(name, value) {
        if (value === void 0) { value = null; }
        this.name = name;
        this.value = value;
    }
    return ToolbarEventModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
AbstractButtonClass = /** @class */ (function () {
    function AbstractButtonClass(data) {
        this.symbol = data.symbol;
        this.name = data.name;
        this.label = data.label;
        this.icon = data.icon;
        this.iconCssClass = data.iconCssClass;
        this.disabled = data.disabled;
    }
    return AbstractButtonClass;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonClass = /** @class */ (function (_super) {
    __extends(ButtonClass, _super);
    function ButtonClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ButtonClass.prototype.isDivider = /**
     * @return {?}
     */
    function () {
        return false;
    };
    return ButtonClass;
}(AbstractButtonClass));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonDividerClass = /** @class */ (function (_super) {
    __extends(ButtonDividerClass, _super);
    function ButtonDividerClass() {
        return _super.call(this, {
            symbol: '',
            name: '',
            label: false,
            icon: false,
            iconCssClass: ''
        }) || this;
    }
    /**
     * @return {?}
     */
    ButtonDividerClass.prototype.isDivider = /**
     * @return {?}
     */
    function () {
        return true;
    };
    return ButtonDividerClass;
}(AbstractButtonClass));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectionComponent = /** @class */ (function () {
    function SelectionComponent(configuration, currentDirectoryFilesService) {
        this.configuration = configuration;
        this.currentDirectoryFilesService = currentDirectoryFilesService;
        this.onMenuButtonClick = new EventEmitter();
        this.selectAllButton = new ButtonClass({
            symbol: Button.SELECT_ALL,
            name: 'RI_FM_LBL_SELECT_ALL',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-check-square-o'
        });
        this.unselectAllButton = new ButtonClass({
            symbol: Button.UNSELECT_ALL,
            name: 'RI_FM_LBL_UNSELECT_ALL',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-square-o'
        });
        this.inverseSelectionButton = new ButtonClass({
            symbol: Button.INVERSE_SELECTION,
            name: 'RI_FM_LBL_INVERSE_SELECTION',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-check-square'
        });
        this.deleteSelectionButton = new ButtonClass({
            symbol: Button.DELETE_SELECTION,
            name: 'RI_FM_LBL_DELETE_SELECTION',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-trash'
        });
        this.chooseSelectionButton = new ButtonClass({
            symbol: Button.CHOOSE_SELECTION,
            name: 'RI_FM_LBL_CHOOSE_SELECTION',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-image'
        });
        this.selectButtonsList = this.createBasicButtons();
        this.initListenOnLoadFiles();
    }
    /**
     * @return {?}
     */
    SelectionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onLoadFilesSubscriber.unsubscribe();
    };
    /**
     * Initialize listener on load files
     */
    /**
     * Initialize listener on load files
     * @return {?}
     */
    SelectionComponent.prototype.initListenOnLoadFiles = /**
     * Initialize listener on load files
     * @return {?}
     */
    function () {
        var _this = this;
        this.onLoadFilesSubscriber = combineLatest(this.currentDirectoryFilesService.currentDirectoryFileIds$, this.currentDirectoryFilesService.selectedFiles$)
            .pipe(distinctUntilChanged())
            .subscribe(function (data) {
            /** @type {?} */
            var numberOfFiles = data[0].length;
            /** @type {?} */
            var numberOfSelectedFiles = data[1].length;
            _this.disableAllButtons();
            if (numberOfFiles > 0) {
                if (numberOfSelectedFiles > 0) {
                    _this.enableAllButtons();
                }
                else {
                    _this.enableSelectAllButton();
                }
            }
        });
    };
    /**
     * @param {?} button
     * @return {?}
     */
    SelectionComponent.prototype.onSelectDropdownClick = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        /** @type {?} */
        var event = new ToolbarEventModel(button.symbol);
        this.onMenuButtonClick.emit(event);
    };
    /**
     * Disable all dropdown buttons and main button
     */
    /**
     * Disable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    SelectionComponent.prototype.disableAllButtons = /**
     * Disable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    function () {
        this.selectAllButton.disabled = true;
        this.selectButtonsList
            .filter(function (button) {
            return !button.isDivider();
        })
            .forEach(function (button) {
            button.disabled = true;
        });
    };
    /**
     * Enable all dropdown buttons and main button
     */
    /**
     * Enable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    SelectionComponent.prototype.enableAllButtons = /**
     * Enable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    function () {
        this.selectAllButton.disabled = false;
        this.selectButtonsList
            .forEach(function (button) {
            button.disabled = false;
        });
    };
    /**
     * Create list of buttons
     */
    /**
     * Create list of buttons
     * @private
     * @return {?}
     */
    SelectionComponent.prototype.createBasicButtons = /**
     * Create list of buttons
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var buttons = [
            this.selectAllButton,
            this.unselectAllButton,
            this.inverseSelectionButton,
            new ButtonDividerClass(),
            this.deleteSelectionButton,
        ];
        if (this.configuration.allowChooseMultipleFiles) {
            buttons.push(new ButtonDividerClass());
            buttons.push(this.chooseSelectionButton);
        }
        return buttons;
    };
    /**
     * Enable only select button
     */
    /**
     * Enable only select button
     * @private
     * @return {?}
     */
    SelectionComponent.prototype.enableSelectAllButton = /**
     * Enable only select button
     * @private
     * @return {?}
     */
    function () {
        this.selectAllButton.disabled = false;
        this.inverseSelectionButton.disabled = false;
    };
    SelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-selection-dropdown',
                    template: "<ri-dropdown *ngIf=\"configuration.isMultiSelection\" [mainButton]=\"selectAllButton\" [buttons]=\"selectButtonsList\"\n             (onClick)=\"onSelectDropdownClick($event)\"></ri-dropdown>\n"
                }] }
    ];
    /** @nocollapse */
    SelectionComponent.ctorParameters = function () { return [
        { type: FileManagerConfiguration },
        { type: CurrentDirectoryFilesService }
    ]; };
    SelectionComponent.propDecorators = {
        onMenuButtonClick: [{ type: Output }]
    };
    return SelectionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileManagerComponent = /** @class */ (function () {
    function FileManagerComponent(store, nodeDispatcherService, treeService, notifications, configuration, fileManagerEffects, filemanagerNotifcations, currentDirectoryFilesService, treeInitializerService) {
        var _this = this;
        this.store = store;
        this.nodeDispatcherService = nodeDispatcherService;
        this.treeService = treeService;
        this.notifications = notifications;
        this.configuration = configuration;
        this.fileManagerEffects = fileManagerEffects;
        this.filemanagerNotifcations = filemanagerNotifcations;
        this.currentDirectoryFilesService = currentDirectoryFilesService;
        this.treeInitializerService = treeInitializerService;
        this.onSingleFileSelect = new EventEmitter();
        this.treeConfiguration = {
            showAddButton: false,
            disableMoveNodes: false,
            treeId: FILEMANAGER_TREE_NAME,
            dragZone: FILEMANAGER_TREE_NAME,
            dropZone: [FILEMANAGER_TREE_NAME]
        };
        /**
         * UNSED *
         */
        this.contextMenu = [];
        this.currentSelectedFilesIds = [];
        this.currentSelectedFiles = [];
        this.isPreviewMode = false;
        this.isCropMode = false;
        this.notificationOptions = {
            position: ['bottom', 'right'],
            timeOut: 3000,
            lastOnBottom: false,
            preventDuplicates: true,
            rtl: false,
            showProgressBar: true,
            pauseOnHover: true
        };
        this.subscription = new Subscription();
        this.menu = configuration.contextMenuItems;
        this.filemanagerNotifcations.getNotificationStream()
            .subscribe(function (notification) {
            var type = notification.type, title = notification.title, message = notification.message;
            _this.notifications[type](title, message);
        });
        this.subscription.add(this.currentDirectoryFilesService.selectedFiles$
            .subscribe(function (data) {
            _this.currentSelectedFilesIds = data;
        }));
        this.subscription.add(combineLatest(this.currentDirectoryFilesService.selectedFiles$, this.currentDirectoryFilesService.entities$)
            .subscribe(function (_a) {
            var _b = __read(_a, 2), ids = _b[0], entities = _b[1];
            _this.currentSelectedFiles = ids.map(function (id) { return entities[id]; });
        }));
    }
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeService);
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe(function (node) { return _this.currentSelectedFolder = node; }));
        /*** START - init files ***/
        this.files$ = this.currentDirectoryFilesService.files$;
        this.filteredFiles$ = this.currentDirectoryFilesService.filteredFiles$;
        this.selectedFiles$ = this.currentDirectoryFilesService.selectedFiles$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe(function (node) {
            _this.loadFiles(node ? node.id : '');
        }));
        /*** END - init files ***/
        this.subscription.add(this.fileManagerEffects.cropFileSuccess$
            .subscribe(function () {
            _this.closeModal();
        }));
    };
    Object.defineProperty(FileManagerComponent.prototype, "currentSelectedFolderId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentSelectedFolder ? this.currentSelectedFolder.id : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.onAddFolder = /**
     * @return {?}
     */
    function () {
        this.treeComponent.onAdd();
    };
    /***********************************************************************
     * FILE EVENTS
     **********************************************************************/
    /**
     * Run when all files are uploaded
     */
    /***********************************************************************
       * FILE EVENTS
       **********************************************************************/
    /**
     * Run when all files are uploaded
     * @param {?} folderId
     * @return {?}
     */
    FileManagerComponent.prototype.onUpload = /***********************************************************************
       * FILE EVENTS
       **********************************************************************/
    /**
     * Run when all files are uploaded
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        this.notifications.success('File upload', 'Upload complete');
    };
    /**
     * @param {?} fileEventData
     * @return {?}
     */
    FileManagerComponent.prototype.onPreviewFile = /**
     * @param {?} fileEventData
     * @return {?}
     */
    function (fileEventData) {
        this.isPreviewMode = true;
        this.currentSelectedFile = fileEventData.file;
    };
    /**
     * @param {?} fileEventData
     * @return {?}
     */
    FileManagerComponent.prototype.onOpenCropFileEditor = /**
     * @param {?} fileEventData
     * @return {?}
     */
    function (fileEventData) {
        this.isCropMode = true;
        this.currentSelectedFile = fileEventData.file;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileManagerComponent.prototype.onSelectFile = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSingleFileSelect.next(event.getSelectData());
    };
    /***********************************************************************
     * TOOLBAR EVENTS
     **********************************************************************/
    /**
     * ********************************************************************
     * TOOLBAR EVENTS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    FileManagerComponent.prototype.onMenuButtonClick = /**
     * ********************************************************************
     * TOOLBAR EVENTS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.name) {
            case Button.CHOOSE_SELECTION:
                this.store.dispatch(new ChooseFilesAction({ files: this.currentSelectedFiles }));
                break;
            case Button.DELETE_SELECTION:
                this.store.dispatch(new DeleteSelectedFilesAction({ files: this.currentSelectedFilesIds }));
                break;
            case Button.SELECT_ALL:
                this.store.dispatch(new SelectAllFilesAction());
                break;
            case Button.UNSELECT_ALL:
                this.store.dispatch(new UnSelectAllFilesAction());
                break;
            case Button.INVERSE_SELECTION:
                this.store.dispatch(new InverseFilesSelectionAction());
                break;
            case Button.REFRESH_FILES_LIST:
                this.reloadFiles();
                break;
        }
    };
    /***********************************************************************
     * OTHER FUNCTIONS
     **********************************************************************/
    /**
     * ********************************************************************
     * OTHER FUNCTIONS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    FileManagerComponent.prototype.keyEvents = /**
     * ********************************************************************
     * OTHER FUNCTIONS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isPreviewMode || this.isCropMode) {
            if (event.keyCode === 27) {
                this.closeModal();
            }
        }
    };
    /**
     * @return {?}
     */
    FileManagerComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.isPreviewMode = false;
        this.isCropMode = false;
    };
    /**
     * @private
     * @param {?} folderId
     * @return {?}
     */
    FileManagerComponent.prototype.loadFiles = /**
     * @private
     * @param {?} folderId
     * @return {?}
     */
    function (folderId) {
        this.store.dispatch(new LoadFilesAction({ folderId: folderId || '' }));
    };
    /**
     * @private
     * @return {?}
     */
    FileManagerComponent.prototype.reloadFiles = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var id = this.currentSelectedFolder ? this.currentSelectedFolder.id : '';
        this.loadFiles(id);
    };
    FileManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-filemanager',
                    providers: [NodeService, NotificationsService],
                    template: "<div class=\"filemanager-container\">\n  <div class=\"fm-header\">\n    <ri-toolbar\n      #toolbar\n      [currentFolderId]=\"currentSelectedFolderId\"\n      (onAddFolderClick)=\"onAddFolder()\"\n      (onUpload)=\"onUpload($event)\"\n      (onMenuButtonClick)=\"onMenuButtonClick($event)\"\n    ></ri-toolbar>\n  </div>\n  <div class=\"fm-main-box\">\n    <div class=\"folders-box\">\n      <ri-tree [treeModel]=\"treeModel\"></ri-tree>\n    </div>\n    <div class=\"files-box\">\n      <ri-tree-parents-list [treeModel]=\"treeModel\"></ri-tree-parents-list>\n      <ri-files-list [files]=\"filteredFiles$ | async\"\n                     [selectedFiles]=\"selectedFiles$ | async\"\n                     (onPreviewFile)=\"onPreviewFile($event)\"\n                     (onCropFile)=\"onOpenCropFileEditor($event)\"\n                     (onSelectFile)=\"onSelectFile($event)\"\n      ></ri-files-list>\n    </div>\n  </div>\n  <div *ngIf=\"isPreviewMode || isCropMode\" class=\"backdrop\">\n    <div class=\"modal-view\">\n      <div class=\"modal-close\">\n        <i class=\"fa fa-2x fa-times\" (click)=\"closeModal()\"></i>\n      </div>\n      <ri-file-preview *ngIf=\"isPreviewMode\" [files]=\"filteredFiles$ | async\"\n                       [file]=\"currentSelectedFile\"></ri-file-preview>\n      <crop-image *ngIf=\"isCropMode\" [file]=\"currentSelectedFile\"></crop-image>\n    </div>\n  </div>\n  <simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n</div>\n",
                    styles: [".filemanager-container{width:990px;height:700px}.filemanager-container .tree .dropdown{position:relative}.filemanager-container .tree .dropdown-menu{position:fixed!important}.fm-main-box{position:relative;height:100%}.fm-main-box .folders-box{display:block;position:absolute;top:0;bottom:0;width:300px;overflow:hidden;overflow-y:auto}.fm-main-box .files-box{display:block;position:absolute;left:300px;top:0;bottom:0;overflow:hidden;overflow-y:auto}.fm-main-box .files-box ri-tree-parents-list{margin:0 0 10px 20px;display:block}.backdrop{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:1000}.modal-view{margin:50px auto;max-width:600px}.modal-view .modal-close{text-align:right;margin:5px 0;color:#fff}.modal-view .modal-close .fa{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    FileManagerComponent.ctorParameters = function () { return [
        { type: Store },
        { type: NodeDispatcherService },
        { type: FileManagerApiService },
        { type: NotificationsService },
        { type: FileManagerConfiguration },
        { type: FileManagerEffectsService },
        { type: FilemanagerNotifcations },
        { type: CurrentDirectoryFilesService },
        { type: TreeInitializerService }
    ]; };
    FileManagerComponent.propDecorators = {
        onSingleFileSelect: [{ type: Output }],
        treeComponent: [{ type: ViewChild, args: [TreeComponent,] }],
        filesList: [{ type: ViewChild, args: [FilesListComponent,] }],
        keyEvents: [{ type: HostListener, args: ['window:keydown', ['$event'],] }]
    };
    return FileManagerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileManagerModule = /** @class */ (function () {
    function FileManagerModule() {
    }
    /**
     * @param {?} config
     * @param {?=} apiProvider
     * @return {?}
     */
    FileManagerModule.forRoot = /**
     * @param {?} config
     * @param {?=} apiProvider
     * @return {?}
     */
    function (config, apiProvider) {
        if (apiProvider === void 0) { apiProvider = null; }
        return {
            ngModule: FileManagerModule,
            providers: [
                CurrentDirectoryFilesService,
                FileManagerActionsService,
                FileManagerApiService,
                FileManagerBackendApiService,
                FileManagerConfiguration,
                FileManagerDispatcherService,
                FileManagerEffectsService,
                FilemanagerNotifcations,
                FileManagerUploader,
                FileTypeFilterService,
                ImageDataConverter,
                NotificationsService,
                SearchFilterService,
                TreeService,
                { provide: 'fileManagerConfiguration', useValue: config },
                apiProvider ? apiProvider : FileManagerApiService
            ]
        };
    };
    /**
     * @param {?} config
     * @param {?=} apiProvider
     * @return {?}
     */
    FileManagerModule.forChild = /**
     * @param {?} config
     * @param {?=} apiProvider
     * @return {?}
     */
    function (config, apiProvider) {
        if (apiProvider === void 0) { apiProvider = null; }
        return {
            ngModule: FileManagerModule,
            providers: [
                CurrentDirectoryFilesService,
                FileManagerActionsService,
                FileManagerApiService,
                FileManagerBackendApiService,
                FileManagerConfiguration,
                FileManagerDispatcherService,
                FileManagerEffectsService,
                FilemanagerNotifcations,
                FileManagerUploader,
                FileTypeFilterService,
                ImageDataConverter,
                NotificationsService,
                SearchFilterService,
                TreeService,
                { provide: 'fileManagerConfiguration', useValue: config },
                apiProvider ? apiProvider : FileManagerApiService
            ]
        };
    };
    FileManagerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfirmationPopoverModule,
                        EffectsModule.forFeature([FileManagerEffectsService]),
                        FormsModule,
                        FileUploadModule,
                        HttpClientModule,
                        ImageCropperModule,
                        ReactiveFormsModule,
                        SimpleNotificationsModule,
                        StoreModule.forFeature('files', fileManagerReducer),
                        TranslateModule,
                        TreeModule
                    ],
                    declarations: [
                        FileManagerComponent,
                        FileComponent,
                        FileTypeFilterComponent,
                        ToolbarComponent,
                        FilesListComponent,
                        DropdownComponent,
                        PreviewComponent,
                        CropComponent,
                        SearchFileComponent,
                        SelectionComponent
                    ],
                    entryComponents: [
                        ImageCropperComponent
                    ],
                    exports: [FileManagerComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return FileManagerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FileManagerConfiguration, IUrlConfiguration, TreeService, CropComponent, DropdownComponent, FileManagerUploader, FileComponent, FilesListComponent, PreviewComponent, CurrentDirectoryFilesService, ExtendedFileUploader, FilemanagerNotifcations, FileTypeFilterService, ImageDataConverter, SearchFilterService, FileManagerActionTypes, ChooseFilesAction, CropFileAction, CropFileErrorAction, CropFileSuccessAction, DeleteFileAction, DeleteFileSuccessAction, DeleteSelectedFilesAction, DeleteSelectedFilesSuccessAction, InverseFilesSelectionAction, LoadFilesAction, LoadFilesSuccessAction, MoveFilesErrorAction, MoveFilesSuccessAction, SelectAllFilesAction, SelectFileAction, UnSelectAllFilesAction, UnSelectFileAction, UploadFilesAction, UploadFilesErrorAction, UploadFilesSuccessAction, fileManagerReducer, filemanagerStateSelector, getAll, isChangeStateFiles, isChangeStateSelectedFiles, FileManagerDispatcherService, FileManagerActionsService, FileManagerApiService, FILEMANAGER_TREE_NAME, AbstractFileManagerApiService, FileManagerBackendApiService, FileManagerEffectsService, FileTypeFilterComponent, IUploadItemEvent, Button, ToolbarEventModel, SearchFileComponent, SelectionComponent, ToolbarComponent, FileManagerComponent, FileManagerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnbi1hbmd1bGFyMi1maWxlbWFuYWdlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9jb25maWd1cmF0aW9uL0lVcmxDb25maWd1cmF0aW9uLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvY29uZmlndXJhdGlvbi90cmVlLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9maWxlc0xpc3QvZmlsZS5tb2RlbC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24udHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9jcm9wL2Nyb3AuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvaW1hZ2VEYXRhQ29udmVydGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zZXJ2aWNlcy9leHRlbmRlZEZpbGVVcGxhb2Rlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9maWxlc0xpc3QvZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZXNMaXN0L2ZpbGUvZmlsZS5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zdG9yZS9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGUtbWFuYWdlci1kaXNwYXRjaGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zdG9yZS9maWxlTWFuYWdlckFwaUFic3RyYWN0LmNsYXNzLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc3RvcmUvZmlsZU1hbmFnZXJBcGkuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZXNMaXN0L2ZpbGVzTGlzdC5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvc2VhcmNoRmlsdGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zZXJ2aWNlcy9maWxlVHlwZUZpbHRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc3RvcmUvZmlsZS1tYW5hZ2VyLnJlZHVjZXIudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zZXJ2aWNlcy9jdXJyZW50RGlyZWN0b3J5RmlsZXMuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGVNYW5hZ2VyQmFja2VuZEFwaS5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9maWxlVHlwZUZpbHRlci9maWxlVHlwZUZpbHRlci5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi90b29sYmFyL2ludGVyZmFjZS9JVXBsb2FkSXRlbUV2ZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9tb2RlbHMvYnV0dG9uLm1vZGVsLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9tb2RlbHMvdG9vbGJhckV2ZW50Lm1vZGVsLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9zZWFyY2hGaWxlL3NlYXJjaEZpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZHJvcGRvd24vQWJzdHJhY3RCdXR0b24uY2xhc3MudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9kcm9wZG93bi9CdXR0b24uY2xhc3MudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9kcm9wZG93bi9CdXR0b25EaXZpZGVyLmNsYXNzLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9zZWxlY3Rpb25Ecm9wRG93bi9zZWxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL2ZpbGVtYW5hZ2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL2ZpbGVtYW5hZ2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lDb250ZXh0TWVudX0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlVHlwZUZpbHRlcn0gZnJvbSAnLi4vdG9vbGJhci9pbnRlcmZhY2UvSUZpbGVUeXBlRmlsdGVyJztcbmltcG9ydCB7SUNyb3BTaXplfSBmcm9tICcuLi9jcm9wL0lDcm9wU2l6ZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24ge1xuXG4gIHB1YmxpYyBhbGxvd2VkQ3JvcFNpemU6IElDcm9wU2l6ZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdSSV9GTV9CVE5fTEFORFNDQVBFJyxcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBoZWlnaHQ6IDEwMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1JJX0ZNX0JUTl9QT1JUUkFJVCcsXG4gICAgICB3aWR0aDogMjAwLFxuICAgICAgaGVpZ2h0OiAzMDBcbiAgICB9XG4gIF07XG5cbiAgcHVibGljIGNvbnRleHRNZW51SXRlbXM6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIGZpbGVUeXBlc0ZpbHRlcjogSUZpbGVUeXBlRmlsdGVyW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0FMTCcsXG4gICAgICBtaW1lczogW10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtZmlsZS1vJyxcbiAgICAgIHRleHQ6ICdBbGwgZmlsZXMnLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSU1BR0VTJyxcbiAgICAgIG1pbWVzOiBbJ2ltYWdlL2pwZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdpbWFnZS9naWYnLCAnaW1hZ2UvcG5nJ10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtcGljdHVyZS1vJyxcbiAgICAgIHRleHQ6ICdJbWFnZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQVVESU8nLFxuICAgICAgbWltZXM6IFsnYXVkaW8vbXBlZycsICdhdWRpby94LW1zLXdtYScsICdhdWRpby92bmQucm4tcmVhbGF1ZGlvJywgJ2F1ZGlvL3gtd2F2JywgJ2F1ZGlvL21wMyddLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWZpbGUtYXVkaW8tbycsXG4gICAgICB0ZXh0OiAnQXVkaW8nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVklERU8nLFxuICAgICAgbWltZXM6IFsndmlkZW8vbXBlZycsICd2aWRlby9tcDQnLCAndmlkZW8vcXVpY2t0aW1lJywgJ3ZpZGVvL3gtbXMtd212J10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtZmlsZS12aWRlby1vJyxcbiAgICAgIHRleHQ6ICdWaWRlbydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBUkNISVZFJyxcbiAgICAgIG1pbWVzOiBbJ2FwcGxpY2F0aW9uL3ppcCddLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWZpbGUtYXJjaGl2ZS1vJyxcbiAgICAgIHRleHQ6ICdBcmNoaXZlJ1xuICAgIH1cbiAgXTtcblxuICBwdWJsaWMgZm9sZGVyVXJsczoge2ZvbGRlcnNVcmw6IHN0cmluZywgZm9sZGVyTW92ZVVybDogc3RyaW5nfTtcbiAgcHVibGljIGZpbGVVcmwgPSAnL2FwaS9maWxlcyc7XG5cbiAgcHVibGljIGlzTXVsdGlTZWxlY3Rpb246IGJvb2xlYW47XG5cbiAgcHVibGljIG1heEZpbGVTaXplOiBudW1iZXI7XG5cbiAgcHVibGljIG1pbWVUeXBlczogc3RyaW5nW10gfCBudWxsO1xuXG4gIHB1YmxpYyBhbGxvd0Nob29zZU11bHRpcGxlRmlsZXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IHtmb2xkZXJzVXJsLCBmb2xkZXJNb3ZlVXJsfSA9IGNvbmZpZ3VyYXRpb24udXJscztcbiAgICB0aGlzLmZvbGRlclVybHMgPSB7Zm9sZGVyc1VybCwgZm9sZGVyTW92ZVVybH07XG4gICAgdGhpcy5maWxlVXJsID0gY29uZmlndXJhdGlvbi51cmxzLmZpbGVzVXJsO1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdGlvbiA9IGNvbmZpZ3VyYXRpb24uaXNNdWx0aVNlbGVjdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLm1heEZpbGVTaXplID0gY29uZmlndXJhdGlvbi5tYXhGaWxlU2l6ZSB8fCAwO1xuICAgIHRoaXMubWltZVR5cGVzID0gY29uZmlndXJhdGlvbi5taW1lVHlwZXMgfHwgbnVsbDtcbiAgICB0aGlzLmFsbG93Q2hvb3NlTXVsdGlwbGVGaWxlcyA9IGNvbmZpZ3VyYXRpb24uYWxsb3dDaG9vc2VNdWx0aXBsZUZpbGVzIHx8IGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSVVybENvbmZpZ3VyYXRpb24ge1xuICBmaWxlc1VybDogc3RyaW5nIHwgbnVsbDtcbiAgZm9sZGVyc1VybDogc3RyaW5nO1xuICBmb2xkZXJNb3ZlVXJsOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05vZGVTZXJ2aWNlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9JRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZVNlcnZpY2UgZXh0ZW5kcyBOb2RlU2VydmljZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIHN1cGVyKGh0dHApO1xuXG4gICAgdGhpcy5hcGlDb25maWcgPSB7XG4gICAgICBhZGRVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJzVXJsLFxuICAgICAgZ2V0VXJsOiBjb25maWd1cmF0aW9uLnVybHMuZm9sZGVyc1VybCxcbiAgICAgIHVwZGF0ZVVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlcnNVcmwsXG4gICAgICByZW1vdmVVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJzVXJsLFxuICAgICAgbW92ZVVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlck1vdmVVcmxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4vaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuL2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7SVNlbGVjdEZpbGV9IGZyb20gJy4vaW50ZXJmYWNlL0lTZWxlY3RGaWxlJztcblxuZXhwb3J0IGNsYXNzIEZpbGVNb2RlbCBpbXBsZW1lbnRzIElGaWxlTW9kZWwge1xuICBzdGF0aWMgc21hbGxJY29uc0ZvbGRlciA9ICcvaWNvbnMvMTI4cHgvJztcbiAgc3RhdGljIGJpZ0ljb25zRm9sZGVyID0gJy9pY29ucy81MTJweC8nO1xuXG4gIHByaXZhdGUgX29yZ0RhdGE6IElPdXRlckZpbGU7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcblxuICBwcml2YXRlIF9pY29uc0ZvbGRlciA9IEZpbGVNb2RlbC5zbWFsbEljb25zRm9sZGVyO1xuXG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmlzSW1hZ2UoKSA/IHRoaXMuX29yZ0RhdGEudGh1bWJuYWlsVXJsIDogYCR7RmlsZU1vZGVsLnNtYWxsSWNvbnNGb2xkZXJ9JHt0aGlzLmdldEZpbGVFeHQoKX0ucG5nYDtcbiAgfVxuXG4gIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbWFnZSgpID8gdGhpcy5fb3JnRGF0YS51cmwgOiBgJHtGaWxlTW9kZWwuYmlnSWNvbnNGb2xkZXJ9JHt0aGlzLmdldEZpbGVFeHQoKX0ucG5nYDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5mcm9tSlNPTihkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmcm9tSlNPTihkYXRhOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5fb3JnRGF0YSA9IGRhdGE7XG5cbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGEuc2VsZWN0ZWQgfHwgZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhO1xuICB9XG5cbiAgcHVibGljIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLmlkO1xuICB9XG5cbiAgcHVibGljIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLmhlaWdodCB8fCAwO1xuICB9XG5cbiAgcHVibGljIGdldEZpbGVFeHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICB9XG5cbiAgcHVibGljIGdldE1pbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZ0RhdGEudHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLndpZHRoIHx8IDA7XG4gIH1cblxuICBwdWJsaWMgaXNJbWFnZSgpIHtcbiAgICByZXR1cm4gWydpbWFnZS9qcGcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2UvZ2lmJywgJ2ltYWdlL3BuZyddLmluZGV4T2YodGhpcy5nZXRNaW1lKCkpID4gLTE7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0RGF0YSgpOiBJU2VsZWN0RmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIG1pbWU6IHRoaXMuZ2V0TWltZSgpXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuXG5leHBvcnQgZW51bSBGaWxlTWFuYWdlckFjdGlvblR5cGVzIHtcbiAgQ0hPT1NFX0ZJTEVTID0gJ0ZJTEVNQU5BR0VSX0NIT09TRV9GSUxFUycsXG4gIENST1BfRklMRSA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEUnLFxuICBDUk9QX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUycsXG4gIENST1BfRklMRV9FUlJPUiA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1InLFxuICBERUxFVEVfRklMRSA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRScsXG4gIERFTEVURV9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU1VDQ0VTUycsXG4gIERFTEVURV9GSUxFX1NFTEVDVElPTiA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT04nLFxuICBERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUycsXG4gIElOVkVSU0VfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfSU5WRVJTRV9GSUxFX1NFTEVDVElPTicsXG4gIExPQURfRklMRVMgPSAnRklMRU1BTkFHRVJfTE9BRF9GSUxFUycsXG4gIExPQURfRklMRVNfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTX1NVQ0NFU1MnLFxuICBNT1ZFX0ZJTEVTX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTJyxcbiAgTU9WRV9GSUxFU19FUlJPUiA9ICdGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX0VSUk9SJyxcbiAgU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9TRUxFQ1RfQUxMJyxcbiAgU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUnLFxuICBVTlNFTEVDVF9GSUxFID0gJ0ZJTEVNQU5BR0VSX1VOU0VMRUNUX0ZJTEUnLFxuICBVTlNFTEVDVF9BTEwgPSAnRklMRU1BTkFHRVJfVU5TRUxFQ1RfQUxMJyxcbiAgVVBMT0FEX0ZJTEUgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUnLFxuICBVUExPQURfRklMRV9FUlJPUiA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9FUlJPUicsXG4gIFVQTE9BRF9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfU1VDQ0VTUycsXG59XG5cbmV4cG9ydCBjbGFzcyBDaG9vc2VGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNIT09TRV9GSUxFUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcEZpbGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWwsIGJvdW5kczogSUNyb3BCb3VuZHMgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyb3BGaWxlRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcEZpbGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuQ1JPUF9GSUxFX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlRmlsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkRFTEVURV9GSUxFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlOiBJRmlsZU1vZGVsfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEVfU0VMRUNUSU9OO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogc3RyaW5nW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlU2VsZWN0ZWRGaWxlc1N1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IHN0cmluZ1tdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLklOVkVSU0VfRklMRV9TRUxFQ1RJT047XG5cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVM7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZvbGRlcklkOiBzdHJpbmd9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVNfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlRmlsZXNFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGVzOiBJT3V0ZXJGaWxlW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUZpbGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZm9sZGVySWQ6IHN0cmluZywgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlNFTEVDVF9BTEw7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuU0VMRUNUX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVOU0VMRUNUX0FMTDtcbn1cblxuZXhwb3J0IGNsYXNzIFVuU2VsZWN0RmlsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVOU0VMRUNUX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVVBMT0FEX0ZJTEVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGVzOiBJT3V0ZXJGaWxlW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVVBMT0FEX0ZJTEVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEZpbGVNYW5hZ2VyQWN0aW9uID1cbiAgQ2hvb3NlRmlsZXNBY3Rpb25cbiAgfCBDcm9wRmlsZUFjdGlvblxuICB8IENyb3BGaWxlRXJyb3JBY3Rpb25cbiAgfCBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb25cbiAgfCBEZWxldGVGaWxlQWN0aW9uXG4gIHwgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb25cbiAgfCBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uXG4gIHwgRGVsZXRlU2VsZWN0ZWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb25cbiAgfCBMb2FkRmlsZXNBY3Rpb25cbiAgfCBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uXG4gIHwgTW92ZUZpbGVzRXJyb3JBY3Rpb25cbiAgfCBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uXG4gIHwgU2VsZWN0QWxsRmlsZXNBY3Rpb25cbiAgfCBTZWxlY3RGaWxlQWN0aW9uXG4gIHwgVW5TZWxlY3RBbGxGaWxlc0FjdGlvblxuICB8IFVuU2VsZWN0RmlsZUFjdGlvblxuICB8IFVwbG9hZEZpbGVzQWN0aW9uXG4gIHwgVXBsb2FkRmlsZXNFcnJvckFjdGlvblxuICB8IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvblxuO1xuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLCBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9maWxlLm1vZGVsJztcbmltcG9ydCB7Q3JvcHBlclNldHRpbmdzfSBmcm9tICduZzItaW1nLWNyb3BwZXIvc3JjL2Nyb3BwZXJTZXR0aW5ncyc7XG5pbXBvcnQge0lDcm9wU2l6ZX0gZnJvbSAnLi9JQ3JvcFNpemUnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtCb3VuZHN9IGZyb20gJ25nMi1pbWctY3JvcHBlci9zcmMvbW9kZWwvYm91bmRzJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4vSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJbWFnZUNyb3BwZXJDb21wb25lbnR9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0Nyb3BGaWxlQWN0aW9ufSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3JvcC1pbWFnZScsXG4gIHN0eWxlVXJsczogWycuL2Nyb3Auc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjcm9wLWltYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JvcC13b3JrYmVuY2hcIj5cbiAgICAgICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvb2xiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAqbmdGb3I9XCJsZXQgY3JvcFNpemUgb2YgY3JvcFNpemVMaXN0XCIgKGNsaWNrKT1cInVwZGF0ZUNyb3BTaXplKGNyb3BTaXplKVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IGNyb3BTaXplID09IGN1cnJlbnRDcm9wU2l6ZX1cIj57e2Nyb3BTaXplLm5hbWUgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4taWNvblwiIChjbGljayk9XCJjcm9wSW1hZ2UoKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuPnt7J1JJX0ZNX0JUTl9TQVZFJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ3JvcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsZTogRmlsZU1vZGVsO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25Dcm9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgcHVibGljIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCdjcm9wcGVyJylcbiAgcHVibGljIGNyb3BwZXI6IEltYWdlQ3JvcHBlckNvbXBvbmVudDtcblxuICBwcml2YXRlIGJvdW5kczogQm91bmRzO1xuXG4gIHB1YmxpYyBjcm9wU2l6ZUxpc3Q6IElDcm9wU2l6ZVtdO1xuICBwdWJsaWMgY3VycmVudENyb3BTaXplOiBJQ3JvcFNpemU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+KSB7XG4gICAgdGhpcy5jcm9wU2l6ZUxpc3QgPSBjb25maWd1cmF0aW9uLmFsbG93ZWRDcm9wU2l6ZTtcbiAgfVxuXG4gIHVwZGF0ZUNyb3BTaXplKGNyb3BTaXplOiBJQ3JvcFNpemUpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGNyb3BwZXJDb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEltYWdlQ3JvcHBlckNvbXBvbmVudCk7XG4gICAgY29uc3QgY3JvcHBlckNvbXBvbmVudFJlZiA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjcm9wcGVyQ29tcG9uZW50KTtcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lci5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5kZXRhY2goMCk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50Q3JvcFNpemUgPSBjcm9wU2l6ZTtcbiAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLnNldHRpbmdzID0gdGhpcy5nZXRDcm9wcGVyU2V0dGluZ3MoKTtcbiAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLmltYWdlID0ge307XG4gICAgY3JvcHBlckNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkNyb3BcbiAgICAgIC5zdWJzY3JpYmUoKGJvdW5kczogQm91bmRzKSA9PiB0aGlzLmJvdW5kcyA9IGJvdW5kcyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuZmlsZS51cmw7XG4gICAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLnNldEltYWdlKGltYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDcm9wU2l6ZSh0aGlzLmNyb3BTaXplTGlzdFswXSk7XG4gIH1cblxuICBwdWJsaWMgY3JvcEltYWdlKCkge1xuICAgIGNvbnN0IGJvdW5kczogSUNyb3BCb3VuZHMgPSB7XG4gICAgICB4OiB0aGlzLmJvdW5kcy5sZWZ0LFxuICAgICAgeTogdGhpcy5ib3VuZHMudG9wLFxuICAgICAgd2lkdGg6IHRoaXMuYm91bmRzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JvcEZpbGVBY3Rpb24oe2ZpbGU6IHRoaXMuZmlsZSwgYm91bmRzfSkpO1xuICB9XG5cblxuICBwcml2YXRlIGdldENyb3BwZXJTZXR0aW5ncygpOiBDcm9wcGVyU2V0dGluZ3Mge1xuICAgIGNvbnN0IGNyb3BwZXJTZXR0aW5ncyA9IG5ldyBDcm9wcGVyU2V0dGluZ3MoKTtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuY2FsY3VsYXRlU2NhbGUoKTtcbiAgICBjb25zdCB3aWR0aCA9IHNjYWxlICogdGhpcy5maWxlLmdldFdpZHRoKCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2NhbGUgKiB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjcm9wcGVyU2V0dGluZ3Mubm9GaWxlSW5wdXQgPSB0cnVlO1xuICAgIGNyb3BwZXJTZXR0aW5ncy53aWR0aCA9IHRoaXMuY3VycmVudENyb3BTaXplLndpZHRoO1xuICAgIGNyb3BwZXJTZXR0aW5ncy5oZWlnaHQgPSB0aGlzLmN1cnJlbnRDcm9wU2l6ZS5oZWlnaHQ7XG4gICAgY3JvcHBlclNldHRpbmdzLmNhbnZhc1dpZHRoID0gd2lkdGg7XG4gICAgY3JvcHBlclNldHRpbmdzLmNhbnZhc0hlaWdodCA9IGhlaWdodDtcblxuICAgIHJldHVybiBjcm9wcGVyU2V0dGluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBzY2FsZSBiZXR3ZWVuIGN1cnJlbnQgZmlsZSBkaW1lbnNpb25zIGFuZCBib3ggNjAweDYwMFxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTY2FsZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5maWxlLmdldFdpZHRoKCkgLyB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAoc2NhbGUgPiAxKSB7XG4gICAgICBpZiAodGhpcy5maWxlLmdldFdpZHRoKCkgPiA2MDApIHtcbiAgICAgICAgcmV0dXJuIDYwMCAvIHRoaXMuZmlsZS5nZXRXaWR0aCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5maWxlLmdldEhlaWdodCgpID4gNjAwKSB7XG4gICAgICAgIHJldHVybiA2MDAgLyB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQnV0dG9uRGF0YX0gZnJvbSAnLi9JQnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZHJvcGRvd24nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIG1haW5CdXR0b246IElCdXR0b25EYXRhO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBidXR0b25zOiBJQnV0dG9uRGF0YVtdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNwbGF5TWFpbkJ1dHRvbkxhYmVsOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgaXNPcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RCdXR0b24oYnV0dG9uOiBJQnV0dG9uRGF0YSk6IHZvaWQge1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIHRoaXMub25DbGljay5lbWl0KGJ1dHRvbik7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlT3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtVVUlEfSBmcm9tICdhbmd1bGFyMi11dWlkJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbmNhdE1hcCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2Zyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlRGF0YVByb3BlcnRpZXMge1xuICBpZDogc3RyaW5nIHwgbnVtYmVyO1xuICBmb2xkZXJJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgZGF0YTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEaW1lbnNpb25zIHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZURhdGFDb252ZXJ0ZXIge1xuICBwdWJsaWMgZ2V0UHJvcGVydGllcyhmaWxlOiBGaWxlLCBmb2xkZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJRmlsZURhdGFQcm9wZXJ0aWVzPiB7XG4gICAgY29uc3QgcHJvcGVydGllczogSUZpbGVEYXRhUHJvcGVydGllcyA9IHtcbiAgICAgIGlkOiBVVUlELlVVSUQoKSxcbiAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGRhdGE6ICcnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlYWRlciA9IHRoaXMuZ2V0QmFzZTY0RnJvbUZpbGUoZmlsZSk7XG5cbiAgICByZXR1cm4gcmVhZGVyXG4gICAgICAucGlwZShcbiAgICAgICAgY29uY2F0TWFwKChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBwcm9wZXJ0aWVzLmRhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMudHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZURpbWVuc2lvbnMoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZih7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoZGltZW5zaW9uczogSUltYWdlRGltZW5zaW9ucykgPT4ge1xuICAgICAgICAgIHByb3BlcnRpZXMud2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgICAgIHByb3BlcnRpZXMuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG9ic2VydmFibGUgd2hpY2ggcmV0dXJuIGltYWdlIGFzIGJhc2U2NCBkYXRhXG4gICAqL1xuICBwcml2YXRlIGdldEJhc2U2NEZyb21GaWxlKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cblxuICAgIHJldHVybiBmcm9tRXZlbnQocmVhZGVyLCAnbG9hZCcpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVhZGVyLnJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb2JzZXJ2YWJsZSB3aGljaCByZXR1cm4gZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0SW1hZ2VEaW1lbnNpb25zKGRhdGE6IHN0cmluZyk6IE9ic2VydmFibGU8SUltYWdlRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gZGF0YTtcbiAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgbG9hZEltYWdlID0gZnJvbUV2ZW50KGltYWdlLCAnbG9hZCcpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGltYWdlLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICByZXR1cm4gbG9hZEltYWdlO1xuICB9XG59XG4iLCJpbXBvcnQge0ZpbGVJdGVtLCBGaWxlVXBsb2FkZXIsIEZpbGVVcGxvYWRlck9wdGlvbnN9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXMsIEltYWdlRGF0YUNvbnZlcnRlcn0gZnJvbSAnLi9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLCBJTm90aWZpY2F0aW9ufSBmcm9tICcuL0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zJztcbmltcG9ydCB7RmlsZUxpa2VPYmplY3R9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9maWxlLXVwbG9hZC9maWxlLWxpa2Utb2JqZWN0LmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRmlsZVVwbG9hZGVyIGV4dGVuZHMgRmlsZVVwbG9hZGVyIHtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucywgcHJpdmF0ZSBmaWxlbWFuYWdlck5vdGlmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvbldoZW5BZGRpbmdGaWxlRmFpbGVkKGl0ZW06IEZpbGVMaWtlT2JqZWN0LCBmaWx0ZXI6IGFueSwgb3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucykge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHR5cGU6ICdhbGVydCcsXG4gICAgICB0aXRsZTogJ0FkZCBmaWxlIHRvIHF1ZXVlJyxcbiAgICAgIG1lc3NhZ2U6IGBGaWxlIG5vdCBhZGQgdG8gcXVldWVgXG4gICAgfTtcblxuICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gJ2ZpbGVTaXplJykge1xuICAgICAgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPSBgRmlsZSBzaXplIGlzIHRvbyBsYXJnZSAtIG1heCBzaXplICBpcyAke29wdGlvbnMubWF4RmlsZVNpemUgLyAxMDI0fSBLQmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGlmaWNhdGlvbi5tZXNzYWdlID0gYEZpbGUgbWltZSB0eXBlIFwiJHtpdGVtLnR5cGV9XCIgaXMgbm90IGFsbG93ZWRgO1xuICAgIH1cbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWRJdGVtKHZhbHVlOiBGaWxlSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXJsKSB7XG4gICAgICBzdXBlci51cGxvYWRJdGVtKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1hZ2VEYXRhQ29udmVydGVyID0gbmV3IEltYWdlRGF0YUNvbnZlcnRlcigpO1xuICAgICAgdGhpcy5fb25Qcm9ncmVzc0l0ZW0odmFsdWUsIDApO1xuXG4gICAgICBpZiAodGhpcy5pc1VwbG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm9wdGlvbnMuaGVhZGVycy5maW5kKChvYmplY3Q6IGFueSkgPT4gb2JqZWN0Lm5hbWUgPT09ICdmb2xkZXJJZCcpO1xuXG4gICAgICB0aGlzLl9vblByb2dyZXNzSXRlbSh2YWx1ZSwgNTApO1xuICAgICAgaW1hZ2VEYXRhQ29udmVydGVyLmdldFByb3BlcnRpZXModmFsdWUuX2ZpbGUsIGhlYWRlci52YWx1ZSlcbiAgICAgICAgLnN1YnNjcmliZSgoZmlsZTogSUZpbGVEYXRhUHJvcGVydGllcykgPT4ge1xuICAgICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuX29uUHJvZ3Jlc3NJdGVtKHZhbHVlLCAxMDApO1xuICAgICAgICAgIHRoaXMuX29uQ29tcGxldGVJdGVtKHZhbHVlLCBKU09OLnN0cmluZ2lmeShmaWxlKSwgMjAwLCB7fSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uIHtcbiAgdHlwZTogJ2FsZXJ0JyB8ICdlcnJvcicgfCAnc3VjY2Vzcyc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucyB7XG4gIHByaXZhdGUgbm90aWZpY2F0aW9uJCA9IG5ldyBTdWJqZWN0PElOb3RpZmljYXRpb24+KCk7XG5cbiAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb24kLm5leHQobm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROb3RpZmljYXRpb25TdHJlYW0oKTogU3ViamVjdDxJTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uJDtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFeHRlbmRlZEZpbGVVcGxvYWRlcn0gZnJvbSAnLi4vc2VydmljZXMvZXh0ZW5kZWRGaWxlVXBsYW9kZXIuc2VydmljZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zfSBmcm9tICcuLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge0ZpbGVVcGxvYWRlck9wdGlvbnN9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlclVwbG9hZGVyIHtcbiAgcHVibGljIHVwbG9hZGVyOiBFeHRlbmRlZEZpbGVVcGxvYWRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIGZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uOiBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucykge1xuICAgIGNvbnN0IG9wdGlvbnM6IEZpbGVVcGxvYWRlck9wdGlvbnMgPSB7XG4gICAgICBhbGxvd2VkTWltZVR5cGU6IGNvbmZpZ3VyYXRpb24ubWltZVR5cGVzLFxuICAgICAgdXJsOiBjb25maWd1cmF0aW9uLnVybHMuZmlsZXNVcmwsXG4gICAgICBtYXhGaWxlU2l6ZTogY29uZmlndXJhdGlvbi5tYXhGaWxlU2l6ZVxuICAgIH07XG5cbiAgICB0aGlzLnVwbG9hZGVyID0gbmV3IEV4dGVuZGVkRmlsZVVwbG9hZGVyKG9wdGlvbnMsIGZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLnVwbG9hZGVyLmF1dGhUb2tlbiA9IG51bGw7XG4gICAgdGhpcy51cGxvYWRlci5zZXRPcHRpb25zKHRoaXMuZ2V0RGVmYXVsdE9wdGlvbnMoKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICAgIG9wdGlvbnNbJ3JlbW92ZUFmdGVyVXBsb2FkJ10gPSB0cnVlO1xuICAgIG9wdGlvbnNbJ2F1dG9VcGxvYWQnXSA9IHRydWU7XG4gICAgb3B0aW9uc1snbWV0aG9kJ10gPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBzZXRBdXRob3JpemF0aW9uVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIHRoaXMudXBsb2FkZXIuYXV0aFRva2VuID0gdG9rZW47XG4gIH1cblxuICBwdWJsaWMgc2V0RGlyZWN0b3J5SWQoZGlyZWN0b3J5SWQ6IHN0cmluZyB8IG51bWJlcik6IEZpbGVNYW5hZ2VyVXBsb2FkZXIge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldERlZmF1bHRPcHRpb25zKCk7XG5cbiAgICBvcHRpb25zWydoZWFkZXJzJ10gPSBbe25hbWU6ICdmb2xkZXJJZCcsIHZhbHVlOiBkaXJlY3RvcnlJZC50b1N0cmluZygpfV07XG5cbiAgICB0aGlzLnVwbG9hZGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0lGaWxlRXZlbnR9IGZyb20gJy4uL2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyU3RhdGV9IGZyb20gJy4uLy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIENob29zZUZpbGVzQWN0aW9uLFxuICBEZWxldGVGaWxlQWN0aW9uLFxuICBTZWxlY3RGaWxlQWN0aW9uLFxuICBVblNlbGVjdEZpbGVBY3Rpb25cbn0gZnJvbSAnLi4vLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsZTogSUZpbGVNb2RlbDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uUHJldmlld0ZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkNyb3BGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25TZWxlY3RGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyByZW1vdmVUaXRsZSA9ICdSZW1vdmUgZmlsZSc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGNsaWNrZWQgb24gYnV0dG9uIFwiZGVsZXRlIGZpbGVcIlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoJGV2ZW50OiBNb3VzZUV2ZW50LCBmaWxlOiBJRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlRmlsZUFjdGlvbih7ZmlsZX0pKTtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZW1vdmVNZXNzYWdlKGZpbGU6IElGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gJ1lvdSBhcmUgdHJ5IHRvIGRlbGV0ZSA8Yj4nICsgZmlsZS5uYW1lICsgJzwvYj4uIEFyZSB5b3Ugc3VyZT8nO1xuICB9XG5cbiAgcHVibGljIG9wZW5QcmV2aWV3KCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGxldCBmaWxlRXZlbnQ6IElGaWxlRXZlbnQgPSB7XG4gICAgICBldmVudE5hbWU6ICdvblByZXZpZXdGaWxlJyxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZVxuICAgIH07XG4gICAgdGhpcy5vblByZXZpZXdGaWxlLmVtaXQoZmlsZUV2ZW50KTtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuQ3JvcCgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZmlsZUV2ZW50OiBJRmlsZUV2ZW50ID0ge1xuICAgICAgZXZlbnROYW1lOiAnb25Dcm9wRmlsZScsXG4gICAgICBmaWxlOiB0aGlzLmZpbGVcbiAgICB9O1xuICAgIHRoaXMub25Dcm9wRmlsZS5lbWl0KGZpbGVFdmVudCk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0RmlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RGaWxlQWN0aW9uKHtmaWxlOiB0aGlzLmZpbGV9KSk7XG4gIH1cblxuICBwdWJsaWMgdW5TZWxlY3RGaWxlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0RmlsZUFjdGlvbih7ZmlsZTogdGhpcy5maWxlfSkpO1xuICB9XG5cbiAgcHVibGljIGNob29zZUZpbGUoJGV2ZW50OiBNb3VzZUV2ZW50LCBmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hvb3NlRmlsZXNBY3Rpb24oe2ZpbGVzOiBbZmlsZS50b0pTT04oKV19KSk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVNYW5hZ2VyUGF5bG9hZERhdGEge1xuICBmb2xkZXJJZD86IHN0cmluZztcbiAgZmlsZXM/OiBJT3V0ZXJGaWxlW107XG4gIGZpbGU/OiBJRmlsZU1vZGVsO1xuICBmaWxlSWRzPzogc3RyaW5nW107XG4gIGJvdW5kcz86IElDcm9wQm91bmRzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlTWFuYWdlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHBheWxvYWQ6IElGaWxlTWFuYWdlclBheWxvYWREYXRhO1xufVxuXG4vKipcbiAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlIHtcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0NIT09TRV9GSUxFUyA9ICdGSUxFTUFOQUdFUl9DSE9PU0VfRklMRVMnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfQ1JPUF9GSUxFID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRSc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1IgPSAnRklMRU1BTkFHRVJfQ1JPUF9GSUxFX0VSUk9SJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0lOVkVSU0VfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfSU5WRVJTRV9GSUxFX1NFTEVDVElPTic7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVMnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfTE9BRF9GSUxFU19TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVNfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX01PVkVfRklMRVNfRVJST1IgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUic7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9TRUxFQ1RfQUxMID0gJ0ZJTEVNQU5BR0VSX1NFTEVDVF9BTEwnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVU5TRUxFQ1RfRklMRSA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9GSUxFJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX1VOU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1IgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1InO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9TVUNDRVNTJztcblxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDaG9vc2VGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjaG9vc2VGaWxlcyhmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DSE9PU0VfRklMRVMsXG4gICAgICBwYXlsb2FkOiB7ZmlsZXN9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZUFjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJRmlsZU1vZGVsLCBib3VuZHM6IElDcm9wQm91bmRzKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgIGJvdW5kczogYm91bmRzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgY3JvcEZpbGVTdWNjZXNzKGZpbGU6IElGaWxlTW9kZWwpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZUVycm9yQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlRXJyb3IoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfQ1JPUF9GSUxFX0VSUk9SLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBEZWxldGVGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGVTdWNjZXNzKGZpbGU6IElGaWxlTW9kZWwpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlU2VsZWN0ZWRGaWxlcyhmaWxlSWRzOiBzdHJpbmdbXSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OLFxuICAgICAgcGF5bG9hZDoge2ZpbGVJZHN9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBkZWxldGVTZWxlY3RlZEZpbGVzU3VjY2VzcyhmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUyxcbiAgICAgIHBheWxvYWQ6IHtmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IExvYWRGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTE9BRF9GSUxFUyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZm9sZGVySWQ6IGZvbGRlcklkXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgaW52ZXJzZUZpbGVTZWxlY3Rpb24oKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9JTlZFUlNFX0ZJTEVfU0VMRUNUSU9OLFxuICAgICAgcGF5bG9hZDoge31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IExvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgbG9hZEZpbGVzU3VjY2Vzcyhmb2xkZXJJZDogc3RyaW5nLCBmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9MT0FEX0ZJTEVTX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgICAgZmlsZXM6IGZpbGVzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIG1vdmVGaWxlU3VjY2VzcyhmaWxlczogSU91dGVyRmlsZVtdLCBmb2xkZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTLFxuICAgICAgcGF5bG9hZDoge2ZvbGRlcklkLCBmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IE1vdmVGaWxlc0Vycm9yQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIG1vdmVGaWxlRXJyb3IoZmlsZXM6IElPdXRlckZpbGVbXSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUixcbiAgICAgIHBheWxvYWQ6IHtmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFNlbGVjdEFsbEZpbGVzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEFsbEZpbGVzKCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfU0VMRUNUX0FMTCxcbiAgICAgIHBheWxvYWQ6IHt9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBTZWxlY3RGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdW5TZWxlY3RBbGwoKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwsXG4gICAgICBwYXlsb2FkOiB7fVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIHVzZSBuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0RmlsZShmaWxlOiBJRmlsZU1vZGVsKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VTlNFTEVDVF9GSUxFLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBVcGxvYWRGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWQoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWRTdWNjZXNzKGZpbGU6IElPdXRlckZpbGUpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRXJyb3IoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1IsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJTdGF0ZX0gZnJvbSAnLi9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2V9IGZyb20gJy4vZmlsZU1hbmFnZXJBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5pbXBvcnQge1xuICBDaG9vc2VGaWxlc0FjdGlvbixcbiAgQ3JvcEZpbGVBY3Rpb24sXG4gIERlbGV0ZUZpbGVBY3Rpb24sXG4gIERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24sXG4gIEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbixcbiAgTG9hZEZpbGVzQWN0aW9uLFxuICBTZWxlY3RBbGxGaWxlc0FjdGlvbixcbiAgU2VsZWN0RmlsZUFjdGlvbixcbiAgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbixcbiAgVW5TZWxlY3RGaWxlQWN0aW9uLCBVcGxvYWRGaWxlc0FjdGlvbiwgVXBsb2FkRmlsZXNFcnJvckFjdGlvbiwgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4vZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbi8qKlxuICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElGaWxlTWFuYWdlclN0YXRlPiwgcHJpdmF0ZSBmaWxlTWFuYWdlckFjdGlvbnM6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggQ2hvb3NlRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNob29zZUZpbGVzKGZpbGVzOiBJT3V0ZXJGaWxlW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaG9vc2VGaWxlc0FjdGlvbih7ZmlsZXN9KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIENyb3BGaWxlQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJRmlsZU1vZGVsLCBib3VuZHM6IElDcm9wQm91bmRzKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JvcEZpbGVBY3Rpb24oe2JvdW5kcywgZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggRGVsZXRlRmlsZUFjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlRmlsZShmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlRmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggRGVsZXRlU2VsZWN0ZWRGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlU2VsZWN0ZWRGaWxlcyhmaWxlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uKHtmaWxlc30pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBpbnZlcnNlU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggTG9hZEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBMb2FkRmlsZXNBY3Rpb24oe2ZvbGRlcklkfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBTZWxlY3RBbGxGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgc2VsZWN0QWxsRmlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFNlbGVjdEZpbGVBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlbGVjdEZpbGVBY3Rpb24oe2ZpbGV9KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0QWxsRmlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVW5TZWxlY3RGaWxlQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1blNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0RmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVXBsb2FkRmlsZXNFcnJvckFjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRXJyb3IoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oe2ZpbGVzOiBbZmlsZV19KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFVwbG9hZEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWQoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzQWN0aW9uKHtmaWxlczogW2ZpbGVdfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVwbG9hZFN1Y2Nlc3MoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXM6IFtmaWxlXX0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7SUZpbGVEYXRhUHJvcGVydGllc30gZnJvbSAnLi4vc2VydmljZXMvaW1hZ2VEYXRhQ29udmVydGVyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgRklMRU1BTkFHRVJfVFJFRV9OQU1FID0gJ2ZpbGVNYW5hZ2VyVHJlZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSB7XG5cbiAgcHJvdGVjdGVkIHRyZWVOYW1lID0gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICBwcm90ZWN0ZWQgZmlsZU1hbmFnZXJOYW1lID0gJ2ZpbGVNYW5hZ2VyRmlsZXMnO1xuXG5cbiAgcHJvdGVjdGVkIG5vZGVzOiBJT3V0ZXJOb2RlW107XG4gIHByb3RlY3RlZCBmaWxlczogSUZpbGVEYXRhUHJvcGVydGllc1tdO1xuXG4gIHByb3RlY3RlZCBjdXJyZW50Tm9kZUlkID0gJyc7XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlLCBJTm9kZVNlcnZpY2V9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtVVUlEfSBmcm9tICdhbmd1bGFyMi11dWlkJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQXBpfSBmcm9tICcuL0lGaWxlTWFuYWdlckFwaSc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXN9IGZyb20gJy4uL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9uc30gZnJvbSAnLi4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSwgRklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtlbXB0eSwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJBcGlTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RGaWxlTWFuYWdlckFwaVNlcnZpY2UgaW1wbGVtZW50cyBJRmlsZU1hbmFnZXJBcGksIElOb2RlU2VydmljZSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZW1hbmFnZXJOb3RmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICB9XG5cbiAgcHVibGljIGxvYWQobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIGlmICghdGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5ub2RlcyA9IHRoaXMuZ2V0QWxsRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKTtcblxuICAgIHJldHVybiBvZihub2Rlcyk7XG4gIH1cblxuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIG5vZGUucGFyZW50SWQgPSBwYXJlbnROb2RlSWQ7XG4gICAgbm9kZS5pZCA9IFVVSUQuVVVJRCgpO1xuXG4gICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc2F2ZU5vZGVzKCkpIHtcbiAgICAgIHJldHVybiBvZihub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVtcHR5KCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHNyY0lkID0gc3JjTm9kZS5pZDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldE5vZGUgPyB0YXJnZXROb2RlLmlkIDogJyc7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQoc3JjSWQpO1xuXG4gICAgdGhpcy5ub2Rlc1tpbmRleF0ucGFyZW50SWQgPSB0YXJnZXRJZDtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5ub2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlLmlkKTtcblxuICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbm9kZTtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQobm9kZUlkKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpbmRleF07XG5cbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKS5sZW5ndGggPiAwO1xuXG4gICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLnNhdmVOb2RlcygpO1xuXG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdOb2RlIGlzIG5vdCBlbXB0eScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlcyA9IFsuLi5ub2Rlc107XG5cbiAgICB0aGlzLnNhdmVOb2RlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgZmlsZVxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlKGZpbGU6IElPdXRlckZpbGUsIGJvdW5kczogSUNyb3BCb3VuZHMpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICByZXR1cm4gdGhyb3dFcnJvcignVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG5vdCBhdmFpbGFibGUgd2l0aCBMb2NhbFN0b3JhZ2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGZpbGVzIGZyb20gZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgbG9hZEZpbGVzKG5vZGVJZCA9ICcnKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICB0aGlzLmN1cnJlbnROb2RlSWQgPSBub2RlSWQ7XG5cbiAgICBpZiAoIXRoaXMuZmlsZXMpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmdldEFsbEZpbGVEYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlc0Zyb21Gb2xkZXIobm9kZUlkKTtcblxuICAgIGNvbnN0IG5ld0ZpbGVzOiBJT3V0ZXJGaWxlW10gPSBmaWxlcy5tYXAoKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZihuZXdGaWxlcyk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5RmlsZUlkKGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNhdmVGaWxlcygpO1xuXG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkRmlsZXMoc2VsZWN0ZWRGaWxlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBudW1iZXJPZkZpbGVzID0gdGhpcy5maWxlcy5sZW5ndGg7XG5cbiAgICBzZWxlY3RlZEZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zYXZlRmlsZXMoKTtcblxuICAgIHJldHVybiBvZigodGhpcy5maWxlcy5sZW5ndGggKyBzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gbnVtYmVyT2ZGaWxlcykpO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZEZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIGNvbnN0IGZpbGVEYXRhID0gdGhpcy5jb252ZXJ0SU91dGVyRmlsZTJMb2NhbERhdGEoZmlsZSk7XG4gICAgdGhpcy5maWxlcy5wdXNoKGZpbGVEYXRhKTtcblxuICAgIGlmICh0aGlzLnNhdmVGaWxlcygpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5jb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZURhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ1VwbG9hZCBlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb3ZlRmlsZShmaWxlczogSU91dGVyRmlsZVtdLCBub2RlOiBJT3V0ZXJOb2RlID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUuaWQudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZm9sZGVySWQgPSBub2RlID8gbm9kZS5pZC50b1N0cmluZygpIDogJyc7XG5cbiAgICBjb25zdCBtb3ZlZEZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBpZHMuaW5kZXhPZihmaWxlLmlkLnRvU3RyaW5nKCkpID4gLTEpO1xuICAgIGNvbnN0IGVycm9yTXNnID0gJ0NhbiBub3QgbW92ZSBmaWxlIHRvIHRoZSBzYW1lIGZvbGRlcic7XG5cbiAgICBjb25zdCBpc01vdmVkVG9TYW1lRm9sZGVyID0gZmFsc2U7XG5cbiAgICBtb3ZlZEZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmlkID09PSBmaWxlLmZvbGRlcklkKSB7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmaWxlLmZvbGRlcklkID09PSAnJyB8fCBmaWxlLmZvbGRlcklkID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JNc2cpO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgZmlsZS5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzTW92ZWRUb1NhbWVGb2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JNc2cpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNhdmVGaWxlcygpKSB7XG4gICAgICByZXR1cm4gb2YobW92ZWRGaWxlcy5tYXAoZmlsZSA9PiB0aGlzLmNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnTW92ZSBmaWxlcyBlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlOb2RlSWQobm9kZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbmRJbmRleCgobm9kZSkgPT4ge1xuICAgICAgcmV0dXJuIG5vZGUuaWQgPT09IG5vZGVJZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbmRJbmRleCgoZmlsZSkgPT4gZmlsZS5pZCA9PT0gZmlsZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4obm9kZUlkOiBzdHJpbmcpOiBJT3V0ZXJOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbHRlcigobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5wYXJlbnRJZCA9PT0gbm9kZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsZXNGcm9tRm9sZGVyKG5vZGVJZDogc3RyaW5nKTogSUZpbGVEYXRhUHJvcGVydGllc1tdIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpID0+IGZpbGUuZm9sZGVySWQgPT09IG5vZGVJZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QWxsRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTogSU91dGVyTm9kZVtdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudHJlZU5hbWUpO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBbGxGaWxlRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTogSUZpbGVEYXRhUHJvcGVydGllc1tdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZmlsZU1hbmFnZXJOYW1lKTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVOb2RlcygpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50cmVlTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5ub2RlcykpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnU3RhdGUgaXMgbm90IHNhdmVkLicsXG4gICAgICAgIG1lc3NhZ2U6ICdSZWxvYWQgcHJldmlvdXMgc3RhdGUuJ1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlsZXMgPSBudWxsO1xuICAgICAgdGhpcy5ub2RlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlRmlsZXMoKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZmlsZU1hbmFnZXJOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbGVzKSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdTdGF0ZSBpcyBub3Qgc2F2ZWQuJyxcbiAgICAgICAgbWVzc2FnZTogJ1JlbG9hZCBwcmV2aW91cyBzdGF0ZS4nXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgbm9kZUlkID0gdGhpcy5maWxlc1sodGhpcy5maWxlcy5sZW5ndGggLSAxKV0uZm9sZGVySWQgfHwgbnVsbDtcblxuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9hZChub2RlSWQpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZTogSUZpbGVEYXRhUHJvcGVydGllcyk6IElPdXRlckZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZmlsZS5pZCxcbiAgICAgIGZvbGRlcklkOiBmaWxlLmZvbGRlcklkLFxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgdGh1bWJuYWlsVXJsOiBmaWxlLmRhdGEsXG4gICAgICB1cmw6IGZpbGUuZGF0YSxcbiAgICAgIHdpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaWxlLmhlaWdodCxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRJT3V0ZXJGaWxlMkxvY2FsRGF0YShmaWxlOiBJT3V0ZXJGaWxlKTogSUZpbGVEYXRhUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBmaWxlLmlkLnRvU3RyaW5nKCksXG4gICAgICBmb2xkZXJJZDogZmlsZS5mb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGRhdGE6IGZpbGUuZGF0YSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHdpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaWxlLmhlaWdodFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyZWVBY3Rpb25UeXBlc30gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0FjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7SU91dGVyTm9kZSwgVHJlZU1vdmVOb2RlQWN0aW9ufSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSwgSUZpbGVNYW5hZ2VyQWN0aW9ufSBmcm9tICcuL2ZpbGVNYW5hZ2VyQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7ZW1wdHksIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckFwaVNlcnZpY2V9IGZyb20gJy4vZmlsZU1hbmFnZXJBcGkuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zfSBmcm9tICcuLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENyb3BGaWxlQWN0aW9uLFxuICBDcm9wRmlsZUVycm9yQWN0aW9uLFxuICBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24sXG4gIERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uLCBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbiwgRmlsZU1hbmFnZXJBY3Rpb24sIExvYWRGaWxlc0FjdGlvbixcbiAgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbiwgTW92ZUZpbGVzRXJyb3JBY3Rpb24sIE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24sIFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24sIFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvblxufSBmcm9tICcuL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSB7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBsb2FkRmlsZXMkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTE9BRF9GSUxFUyksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB0aGlzLmxvYWRGaWxlcyhhY3Rpb24ucGF5bG9hZC5mb2xkZXJJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChmaWxlczogSU91dGVyRmlsZVtdKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlc30pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZih0aGlzLm9uTG9hZEZpbGVzRXJyb3IoYWN0aW9uLnBheWxvYWQuZm9sZGVySWQpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGNyb3BGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRSksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB0aGlzLmNyb3BGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGUsIGFjdGlvbi5wYXlsb2FkLmJvdW5kcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IElPdXRlckZpbGUpOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdDcm9wIEltYWdlLicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbWFnZSBoYXMgYmVlbiBjcm9wcGVkLidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24oe2ZpbGU6IGFjdGlvbi5wYXlsb2FkLmZpbGV9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBDcm9wRmlsZUVycm9yQWN0aW9uKHtmaWxlOiBhY3Rpb24ucGF5bG9hZC5maWxlfSkpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGRlbGV0ZUZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy5kZWxldGVGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBib29sZWFuKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWxldGVGaWxlU3VjY2Vzc0FjdGlvbih7ZmlsZTogYWN0aW9uLnBheWxvYWQuZmlsZX0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YodGhpcy5vbkRlbGV0ZUZpbGVFcnJvcihhY3Rpb24ucGF5bG9hZC5maWxlKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgZGVsZXRlRmlsZXNTZWxlY3Rpb24kID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBJRmlsZU1hbmFnZXJBY3Rpb24pID0+IHRoaXMuZGVsZXRlRmlsZXNTZWxlY3Rpb24oYWN0aW9uLnBheWxvYWQuZmlsZUlkcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IGJvb2xlYW4pOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogYWN0aW9uLnBheWxvYWQuZmlsZUlkc30pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YodGhpcy5vbkRlbGV0ZUZpbGVzU2VsZWN0aW9uRXJyb3IoYWN0aW9uLnBheWxvYWQuZmlsZXMpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cblxuICBARWZmZWN0KClcbiAgcHVibGljIHVwbG9hZEZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy51cGxvYWRGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGVzWzBdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogSU91dGVyRmlsZSk6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogW3Jlc3VsdF19KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgbW92ZUZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERSksXG4gICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZU1vdmVOb2RlQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5zb3VyY2VPZkRyb3BwZWREYXRhID09PSAnRklMRSc7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlTW92ZU5vZGVBY3Rpb24pID0+IHRoaXMubW92ZUZpbGVzKFs8SU91dGVyRmlsZT5hY3Rpb24ucGF5bG9hZC5vbGROb2RlXSwgYWN0aW9uLnBheWxvYWQubm9kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IElPdXRlckZpbGVbXSk6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlcklkID0gKDxJT3V0ZXJGaWxlPmFjdGlvbi5wYXlsb2FkLm9sZE5vZGUpLmZvbGRlcklkO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24oe2ZpbGVzOiByZXN1bHQsIGZvbGRlcklkfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IE1vdmVGaWxlc0Vycm9yQWN0aW9uKHtmaWxlczogWzxJT3V0ZXJGaWxlPmFjdGlvbi5wYXlsb2FkLm9sZE5vZGVdfSkpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgZmlsZXNNb3ZlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MpLFxuICAgICAgbWFwKChhY3Rpb246IE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5vbk1vdmVGaWxlc1N1Y2Nlc3MoKTtcblxuICAgICAgICByZXR1cm4gbmV3IExvYWRGaWxlc0FjdGlvbih7Zm9sZGVySWQ6IGFjdGlvbi5wYXlsb2FkLmZvbGRlcklkfSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgcHVibGljIHVwbG9hZEVycm9yJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX0VSUk9SKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgICAgIHRpdGxlOiAnRmlsZSB1cGxvYWQnLFxuICAgICAgICAgIG1lc3NhZ2U6IGAke2FjdGlvbi5wYXlsb2FkLmZpbGVzWzBdLm5hbWV9IGV4aXN0cyBvbiB0aGUgc2VydmVyIGluIHRoaXMgZGlyZWN0b3J5YFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICBwdWJsaWMgY3JvcEZpbGVTdWNjZXNzJDogT2JzZXJ2YWJsZTxDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24+O1xuICBwdWJsaWMgZGVsZXRlRmlsZVN1Y2Nlc3MkOiBPYnNlcnZhYmxlPERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyQWN0aW9uczogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlbWFuYWdlck5vdGZpY2F0aW9uOiBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlTWFuYWdlckFwaVNlcnZpY2U6IEZpbGVNYW5hZ2VyQXBpU2VydmljZSkge1xuXG4gICAgdGhpcy5jcm9wRmlsZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTKVxuICAgICAgKTtcblxuICAgIHRoaXMuZGVsZXRlRmlsZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MpXG4gICAgICApO1xuXG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9FUlJPUilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub25Dcm9wRmlsZUVycm9yKGFjdGlvbi5wYXlsb2FkLmZpbGUpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub25Nb3ZlRmlsZXNFcnJvcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JvcEZpbGUoZmlsZTogSUZpbGVNb2RlbCwgYm91bmRzOiBJQ3JvcEJvdW5kcyk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5jcm9wRmlsZShmaWxlLnRvSlNPTigpLCBib3VuZHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5yZW1vdmVGaWxlKGZpbGUudG9KU09OKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlbGV0ZUZpbGVzU2VsZWN0aW9uKGZpbGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5yZW1vdmVTZWxlY3RlZEZpbGVzKGZpbGVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlckZpbGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5sb2FkRmlsZXMoZm9sZGVySWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwbG9hZEZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS51cGxvYWRGaWxlKGZpbGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1vdmVGaWxlcyhmaWxlczogSU91dGVyRmlsZVtdLCBmb2xkZXI6IElPdXRlck5vZGUgPSBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UubW92ZUZpbGUoZmlsZXMsIGZvbGRlcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Dcm9wRmlsZUVycm9yKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgdGl0bGU6ICdDcm9wIEltYWdlJyxcbiAgICAgIG1lc3NhZ2U6ICdbRklMRU1BTkFHRVJdIENhbiBub3QgY3JvcCBmaWxlJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGVsZXRlRmlsZUVycm9yKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgdGl0bGU6ICdEZWxldGUgZmlsZScsXG4gICAgICBtZXNzYWdlOiAnW0ZJTEVNQU5BR0VSXSBDYW4gbm90IGRlbGV0ZSBmaWxlJyArIGZpbGUubmFtZVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGVsZXRlRmlsZXNTZWxlY3Rpb25FcnJvcihmaWxlczogSU91dGVyRmlsZVtdKTogdm9pZCB7XG4gICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIHRpdGxlOiAnRGVsZXRlIHNlbGVjdGVkIGZpbGVzJyxcbiAgICAgIG1lc3NhZ2U6ICdbRklMRU1BTkFHRVJdIE5vdCBhbGwgZmlsZXMgd2VyZSBkZWxldGVkJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTG9hZEZpbGVzRXJyb3IoZm9sZGVySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ0xvYWQgZmlsZXMnLFxuICAgICAgbWVzc2FnZTogJ1tGSUxFTUFOQUdFUl0gQ2FuIG5vdCBsb2FkIGZpbGVzIGZvciBmb2xkZXIgJyArIGZvbGRlcklkXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Nb3ZlRmlsZXNTdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiAnTW92ZSBmaWxlcycsXG4gICAgICBtZXNzYWdlOiAnRmlsZSB3YXMgc3VjY2Vzc2Z1bGx5IG1vdmVkIHRvIGZvbGRlcidcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbk1vdmVGaWxlc0Vycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ01vdmUgZmlsZXMnLFxuICAgICAgbWVzc2FnZTogJ0ZpbGUgd2FzIG5vdCBzdWNjZXNzZnVsbHkgbW92ZWQgdG8gbmV3IGZvbGRlcidcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZU1vZGVsfSBmcm9tICcuL2ZpbGUubW9kZWwnO1xuaW1wb3J0IHtJRmlsZUV2ZW50fSBmcm9tICcuL2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvZmlsZU1hbmFnZXJBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckRpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXItZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuLi9zdG9yZS9maWxlTWFuYWdlckVmZmVjdHMuc2VydmljZSc7XG5pbXBvcnQge0ZJTEVNQU5BR0VSX1RSRUVfTkFNRX0gZnJvbSAnLi4vc3RvcmUvZmlsZU1hbmFnZXJBcGlBYnN0cmFjdC5jbGFzcyc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0RlbGV0ZUZpbGVBY3Rpb24sIFNlbGVjdEZpbGVBY3Rpb24sIFVuU2VsZWN0RmlsZUFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGVzLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZXMuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGVzLWxpc3Quc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVzTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaWxlczogRmlsZU1vZGVsW107XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNlbGVjdGVkRmlsZXM6IHN0cmluZ1tdO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25QcmV2aWV3RmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uQ3JvcEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblNlbGVjdEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHJlbW92ZVRpdGxlID0gJ1JlbW92ZSBmaWxlJztcblxuICBwdWJsaWMgZHJhZ1pvbmUgPSBGSUxFTUFOQUdFUl9UUkVFX05BTUU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyRGlzcGF0Y2hlcjogRmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgZmlsZU1hbmFnZXJFZmZlY3RzOiBGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlKSB7XG5cbiAgICBmaWxlTWFuYWdlckVmZmVjdHMuZGVsZXRlRmlsZVN1Y2Nlc3MkXG4gICAgICAuc3Vic2NyaWJlKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25zLnN1Y2Nlc3MoJ0ZpbGUgZGVsZXRlJywgYCR7YWN0aW9uLnBheWxvYWQuZmlsZS5uYW1lfSBoYXMgYmVlbiBkZWxldGVkYCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGNsaWNrZWQgb24gYnV0dG9uIFwiZGVsZXRlIGZpbGVcIlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZUZpbGVBY3Rpb24oe2ZpbGV9KSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVtb3ZlTWVzc2FnZShmaWxlOiBJRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuICdZb3UgYXJlIHRyeSB0byBkZWxldGUgPGI+JyArIGZpbGUubmFtZSArICc8L2I+LiBBcmUgeW91IHN1cmU/JztcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUHJldmlldyhmaWxlRXZlbnQ6IElGaWxlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uUHJldmlld0ZpbGUuZW1pdChmaWxlRXZlbnQpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Dcm9wKGZpbGVFdmVudDogSUZpbGVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Dcm9wRmlsZS5lbWl0KGZpbGVFdmVudCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0aW9uKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoZmlsZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGZpbGU6IEZpbGVNb2RlbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRmlsZXMuaW5kZXhPZihmaWxlLmdldElkKCkudG9TdHJpbmcoKSkgPiAtMTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNb2RlbH0gZnJvbSAnLi4vZmlsZXNMaXN0L2ZpbGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1maWxlLXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJldmlldy5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBmaWxlc1xuICAgKi9cbiAgQElucHV0KCkgZmlsZXM6IElGaWxlTW9kZWxbXTtcblxuICAvKipcbiAgICogQ3VycmVudCB2aWV3ZWQgZmlsZVxuICAgKi9cbiAgQElucHV0KCkgZmlsZTogSUZpbGVNb2RlbDtcblxuICAvKipcbiAgICogQ3VycmVudCBpbmRleFxuICAgKi9cbiAgcHVibGljIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgcHVibGljIGxlbmd0aCA9IDA7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmZpbGVzLmxlbmd0aDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRmlsZXMgPSB0aGlzLmZpbGVzXG4gICAgICAuZmlsdGVyKChmaWxlOiBGaWxlTW9kZWwpID0+IGZpbGUuZ2V0SWQoKSA9PT0gdGhpcy5maWxlLmdldElkKCkpO1xuXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gMSA/IHRoaXMuZmlsZXMuaW5kZXhPZihzZWxlY3RlZEZpbGVzWzBdKSA6IC0xO1xuICB9XG5cbiAgcHVibGljIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcmV2KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNzQpIHtcbiAgICAgIHRoaXMucHJldigpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSB8fCBldmVudC5rZXlDb2RlID09PSA3NSkge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsdGVyU2VydmljZSB7XG4gIC8qKlxuICAgKiBGaWxlIHR5cGUgZmlsdGVyXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcblxuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIkLmdldFZhbHVlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7SUZpbGVUeXBlRmlsdGVyfSBmcm9tICcuLi90b29sYmFyL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVGaWx0ZXJTZXJ2aWNlIHtcblxuICAvKipcbiAgICogRmlsZSB0eXBlIGZpbHRlclxuICAgKi9cbiAgcHVibGljIGZpbHRlciQ6IEJlaGF2aW9yU3ViamVjdDxJRmlsZVR5cGVGaWx0ZXIgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHVibGljIGdldFZhbHVlKCk6IElGaWxlVHlwZUZpbHRlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogSUZpbGVUeXBlRmlsdGVyIHwgbnVsbCkge1xuICAgIHRoaXMuZmlsdGVyJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3J9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIENyb3BGaWxlU3VjY2Vzc0FjdGlvbiwgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb24sXG4gIEZpbGVNYW5hZ2VyQWN0aW9uLFxuICBGaWxlTWFuYWdlckFjdGlvblR5cGVzLFxuICBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uLFxuICBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uLCBTZWxlY3RGaWxlQWN0aW9uLCBVblNlbGVjdEZpbGVBY3Rpb24sIFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvblxufSBmcm9tICcuL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JlRW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBJT3V0ZXJGaWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlTWFuYWdlclN0YXRlIHtcbiAgZW50aXRpZXM6IFN0b3JlRW50aXRpZXM7XG4gIGZpbGVzOiBzdHJpbmdbXTtcbiAgc2VsZWN0ZWRGaWxlczogc3RyaW5nW107XG59XG5cblxuZnVuY3Rpb24gY3JvcEZpbGUoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlLCBhY3Rpb246IENyb3BGaWxlU3VjY2Vzc0FjdGlvbik6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgY29uc3QgZmlsZSA9IGFjdGlvbi5wYXlsb2FkLmZpbGU7XG4gIGNvbnN0IGlkID0gZmlsZS5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cbiAgc3RhdGUuZW50aXRpZXNbaWRdID0gPElPdXRlckZpbGU+ey4uLmZpbGUudG9KU09OKCl9O1xuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBzdGF0ZS5zZWxlY3RlZEZpbGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmVyc2VGaWxlc1NlbGVjdGlvbihzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBzdGF0ZS5maWxlcy5maWx0ZXIoKGk6IHN0cmluZykgPT4gc3RhdGUuc2VsZWN0ZWRGaWxlcy5pbmRleE9mKGkpID09PSAtMSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZEZpbGVzKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICBjb25zdCBlbnRpdGllczogU3RvcmVFbnRpdGllcyA9IHt9O1xuICBjb25zdCBmaWxlczogc3RyaW5nW10gPSBbXTtcblxuICBhY3Rpb24ucGF5bG9hZC5maWxlcy5tYXAoKGZpbGU6IElPdXRlckZpbGUpID0+IHtcbiAgICBjb25zdCBpZCA9IGZpbGUuaWQudG9TdHJpbmcoKTtcblxuICAgIGVudGl0aWVzW2lkXSA9IGZpbGU7XG4gICAgZmlsZXMucHVzaChpZCk7XG4gIH0pO1xuXG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogZW50aXRpZXMsXG4gICAgZmlsZXM6IGZpbGVzLFxuICAgIHNlbGVjdGVkRmlsZXM6IFtdXG4gIH07XG59XG5cblxuZnVuY3Rpb24gbW92ZUZpbGVzKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICBjb25zdCBmaWxlcyA9IGFjdGlvbi5wYXlsb2FkLmZpbGVzO1xuICBjb25zdCBpZHM6IHN0cmluZ1tdID0gZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5pZC50b1N0cmluZygpKTtcbiAgY29uc3QgZm9sZGVySWQgPSBhY3Rpb24ucGF5bG9hZC5mb2xkZXJJZCA/IGFjdGlvbi5wYXlsb2FkLmZvbGRlcklkLnRvU3RyaW5nKCkgOiAnJztcblxuICBjb25zdCBlbnRpdGllcyA9IHsuLi5zdGF0ZS5lbnRpdGllc307XG5cbiAgaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBvbGRFbnRpdHkgPSB7Li4uZW50aXRpZXNbaWRdfTtcbiAgICBvbGRFbnRpdHkuZm9sZGVySWQgPSBmb2xkZXJJZDtcblxuICAgIGVudGl0aWVzW2lkXSA9IG9sZEVudGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogZW50aXRpZXMsXG4gICAgZmlsZXM6IHN0YXRlLmZpbGVzLmZpbHRlcigoaTogc3RyaW5nKSA9PiBpZHMuaW5kZXhPZihpKSA9PT0gLTEpLFxuICAgIHNlbGVjdGVkRmlsZXM6IHN0YXRlLnNlbGVjdGVkRmlsZXMuZmlsdGVyKChpOiBzdHJpbmcpID0+IGlkcy5pbmRleE9mKGkpID09PSAtMSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmlsZShzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIGFjdGlvbjogRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb24pOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIGNvbnN0IGlkID0gYWN0aW9uLnBheWxvYWQuZmlsZS5nZXRJZCgpO1xuXG4gIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1tpZF07XG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogc3RhdGUuZW50aXRpZXMsXG4gICAgZmlsZXM6IHN0YXRlLmZpbGVzLmZpbHRlcigoaTogc3RyaW5nKSA9PiBpICE9PSBpZCksXG4gICAgc2VsZWN0ZWRGaWxlczogc3RhdGUuc2VsZWN0ZWRGaWxlc1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVTZWxlY3RlZEZpbGVzKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSk6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgY29uc3QgZmlsZXM6IHN0cmluZ1tdID0gc3RhdGUuZmlsZXMuZmlsdGVyKChpOiBzdHJpbmcpID0+IHN0YXRlLnNlbGVjdGVkRmlsZXMuaW5kZXhPZihpKSA9PT0gLTEpO1xuICBjb25zdCBlbnRpdGllczogU3RvcmVFbnRpdGllcyA9IHt9O1xuXG4gIGZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgZW50aXRpZXNbZmlsZUlkXSA9IHN0YXRlLmVudGl0aWVzW2ZpbGVJZF07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IGVudGl0aWVzLFxuICAgIGZpbGVzOiBmaWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBbXVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxlY3RGaWxlKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBTZWxlY3RGaWxlQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICByZXR1cm4ge1xuICAgIGVudGl0aWVzOiBzdGF0ZS5lbnRpdGllcyxcbiAgICBmaWxlczogc3RhdGUuZmlsZXMsXG4gICAgc2VsZWN0ZWRGaWxlczogWy4uLnN0YXRlLnNlbGVjdGVkRmlsZXMsIGFjdGlvbi5wYXlsb2FkLmZpbGUuZ2V0SWQoKS50b1N0cmluZygpXVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxlY3RBbGxGaWxlcyhzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBbLi4uc3RhdGUuZmlsZXNdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwbG9hZEZpbGVzKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24pOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIGVudGl0aWVzOiB7Li4uc3RhdGUuZW50aXRpZXN9LFxuICAgIGZpbGVzOiBbLi4uc3RhdGUuZmlsZXNdLFxuICAgIHNlbGVjdGVkRmlsZXM6IFtdXG4gIH07XG5cbiAgYWN0aW9uLnBheWxvYWQuZmlsZXMuZm9yRWFjaCgoZmlsZTogSU91dGVyRmlsZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gZmlsZS5pZC50b1N0cmluZygpO1xuXG4gICAgbmV3U3RhdGUuZW50aXRpZXNbaWRdID0gZmlsZTtcbiAgICBuZXdTdGF0ZS5maWxlcy5wdXNoKGlkKTtcbiAgfSk7XG5cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gdW5TZWxlY3RBbGxGaWxlcyhzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBbXVxuICB9O1xufVxuXG5mdW5jdGlvbiB1blNlbGVjdEZpbGUoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlLCBhY3Rpb246IFVuU2VsZWN0RmlsZUFjdGlvbik6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgY29uc3QgZmlsZUlkID0gYWN0aW9uLnBheWxvYWQuZmlsZS5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogc3RhdGUuZW50aXRpZXMsXG4gICAgZmlsZXM6IHN0YXRlLmZpbGVzLFxuICAgIHNlbGVjdGVkRmlsZXM6IHN0YXRlLnNlbGVjdGVkRmlsZXMuZmlsdGVyKChpZDogc3RyaW5nKSA9PiBpZCAhPT0gZmlsZUlkKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZU1hbmFnZXJSZWR1Y2VyKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxuICBmaWxlczogW10sXG4gIHNlbGVjdGVkRmlsZXM6IFtdXG59LCBhY3Rpb246IEZpbGVNYW5hZ2VyQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNST1BfRklMRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIGNyb3BGaWxlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5JTlZFUlNFX0ZJTEVfU0VMRUNUSU9OOlxuICAgICAgcmV0dXJuIGludmVyc2VGaWxlc1NlbGVjdGlvbihzdGF0ZSk7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkRFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHJlbW92ZVNlbGVjdGVkRmlsZXMoc3RhdGUpO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHJlbW92ZUZpbGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBtb3ZlRmlsZXMoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBsb2FkRmlsZXMoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlNFTEVDVF9BTEw6XG4gICAgICByZXR1cm4gc2VsZWN0QWxsRmlsZXMoc3RhdGUpO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5TRUxFQ1RfRklMRTpcbiAgICAgIHJldHVybiBzZWxlY3RGaWxlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VTlNFTEVDVF9BTEw6XG4gICAgICByZXR1cm4gdW5TZWxlY3RBbGxGaWxlcyhzdGF0ZSk7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVOU0VMRUNUX0ZJTEU6XG4gICAgICByZXR1cm4gdW5TZWxlY3RGaWxlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHVwbG9hZEZpbGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TRUxFQ1RJT046XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNST1BfRklMRTpcbiAgICBjYXNlIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEU6XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVM6XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfRVJST1I6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsZW1hbmFnZXJTdGF0ZVNlbGVjdG9yOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgSUZpbGVNYW5hZ2VyU3RhdGU+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPElGaWxlTWFuYWdlclN0YXRlPignZmlsZXMnKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbCA9IChzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJT3V0ZXJGaWxlW10gPT4ge1xuICByZXR1cm4gc3RhdGUuZmlsZXMubWFwKChpZDogc3RyaW5nKSA9PiBzdGF0ZS5lbnRpdGllc1tpZF0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQ2hhbmdlU3RhdGVGaWxlcyA9IChuZXdTdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIHByZXZTdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIHByZXZTdGF0ZS5maWxlcy5sZW5ndGggIT09IG5ld1N0YXRlLmZpbGVzLmxlbmd0aCB8fCBwcmV2U3RhdGUuZmlsZXMuZmlsdGVyKChpOiBzdHJpbmcpID0+IG5ld1N0YXRlLmZpbGVzLmluZGV4T2YoaSkgPT09IC0xKS5sZW5ndGggPiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQ2hhbmdlU3RhdGVTZWxlY3RlZEZpbGVzID0gKG5ld1N0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgcHJldlN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gcHJldlN0YXRlLnNlbGVjdGVkRmlsZXMubGVuZ3RoICE9PSBuZXdTdGF0ZS5zZWxlY3RlZEZpbGVzLmxlbmd0aCB8fCBwcmV2U3RhdGUuc2VsZWN0ZWRGaWxlcy5maWx0ZXIoKGk6IHN0cmluZykgPT4gbmV3U3RhdGUuc2VsZWN0ZWRGaWxlcy5pbmRleE9mKGkpID09PSAtMSkubGVuZ3RoID4gMDtcbn07XG4iLCJpbXBvcnQge0lUcmVlU3RhdGV9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlYXJjaEZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZVR5cGVGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9maWxlLm1vZGVsJztcbmltcG9ydCB7ZmlsZW1hbmFnZXJTdGF0ZVNlbGVjdG9yLCBnZXRBbGwsIElGaWxlTWFuYWdlclN0YXRlLCBTdG9yZUVudGl0aWVzfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lGaWxlVHlwZUZpbHRlcn0gZnJvbSAnLi4vdG9vbGJhci9pbnRlcmZhY2UvSUZpbGVUeXBlRmlsdGVyJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHdpdGhMYXRlc3RGcm9tfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGZpbGVzXG4gICAqL1xuICBwdWJsaWMgZmlsZXMkOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPjtcblxuICAvKipcbiAgICogTGlzdCBvZiBmaWxlcyBmb3IgY3VycmVudCBzZWxlY3RlZCBkaXJlY3RvcnlcbiAgICovXG4gIHB1YmxpYyBmaWx0ZXJlZEZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT47XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGZpbGVzIGFzIEpTT04gZGF0YVxuICAgKi9cbiAgcHVibGljIGVudGl0aWVzJDogT2JzZXJ2YWJsZTxTdG9yZUVudGl0aWVzPjtcblxuICAvKipcbiAgICogTGlzdCBvZiBzZWxlY3RlZCBmaWxlIGlkc1xuICAgKi9cbiAgcHVibGljIHNlbGVjdGVkRmlsZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgZmlsZXMgaW4gY3VycmVudCBkaXJlY3RvcnlcbiAgICovXG4gIHB1YmxpYyBjdXJyZW50RGlyZWN0b3J5RmlsZUlkcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVUeXBlRmlsdGVyOiBGaWxlVHlwZUZpbHRlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHNlYXJjaEZpbHRlclNlcnZpY2U6IFNlYXJjaEZpbHRlclNlcnZpY2UpIHtcblxuICAgIGNvbnN0IHN0b3JlJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGZpbGVtYW5hZ2VyU3RhdGVTZWxlY3Rvcik7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSQgPSBzdG9yZSQ7XG4gICAgdGhpcy5lbnRpdGllcyQgPSBvYnNlcnZhYmxlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKSA9PiBzdGF0ZS5lbnRpdGllcyksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICk7XG5cbiAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlSWRzJCA9IG9ic2VydmFibGUkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpID0+IHN0YXRlLmZpbGVzKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRGaWxlcyQgPSBzdG9yZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWxlcylcbiAgICAgICk7XG5cbiAgICB0aGlzLmZpbGVzJCA9IHRoaXMuZ2V0RmlsZXNTdHJlYW0oKTtcbiAgICB0aGlzLmZpbHRlcmVkRmlsZXMkID0gdGhpcy5nZXRDdXJyZW50RGlyZWN0b3J5RmlsZXNTdHJlYW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gc3RyZWFtIG9mIGZpbGVzXG4gICAqL1xuICBwcml2YXRlIGdldEZpbGVzU3RyZWFtKCk6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZUlkcyRcbiAgICAgIC5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmVudGl0aWVzJCksXG4gICAgICAgIG1hcCgoYXI6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRpdGllczogYXJbMV0sXG4gICAgICAgICAgICBmaWxlczogYXJbMF1cbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChzdGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdldEFsbChzdGF0ZSlcbiAgICAgICAgICAgIC5tYXAoKGZpbGU6IElPdXRlckZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWxlTW9kZWwoZmlsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHN0cmVhbSBvZiBjdXJyZW50IGRpcmVjdG9yeSBmaWx0ZXJlZCBmaWxlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRDdXJyZW50RGlyZWN0b3J5RmlsZXNTdHJlYW0oKTogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5maWxlcyQsXG4gICAgICB0aGlzLmZpbGVUeXBlRmlsdGVyLmZpbHRlciQsXG4gICAgICB0aGlzLnNlYXJjaEZpbHRlclNlcnZpY2UuZmlsdGVyJFxuICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGRhdGE6IFtGaWxlTW9kZWxbXSwgSUZpbGVUeXBlRmlsdGVyLCBzdHJpbmddKTogRmlsZU1vZGVsW10gPT4ge1xuICAgICAgICAgIGxldCBmaWxlcyA9IGRhdGFbMF07XG4gICAgICAgICAgY29uc3QgZmlsZVR5cGVGaWx0ZXIgPSBkYXRhWzFdO1xuICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IGRhdGFbMl0udG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChzZWFyY2ggIT09ICcnKSB7XG4gICAgICAgICAgICBmaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZTogRmlsZU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBmaWxlLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaCkgPiAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgaWYgKGZpbGVUeXBlRmlsdGVyICYmIGZpbGVUeXBlRmlsdGVyLm1pbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpbGVzID0gZmlsZXMuZmlsdGVyKChmaWxlOiBGaWxlTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbGVUeXBlRmlsdGVyLm1pbWVzLmluZGV4T2YoZmlsZS5nZXRNaW1lKCkpID4gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmlsZXM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJTm9kZVNlcnZpY2UsIElPdXRlck5vZGV9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0Fic3RyYWN0RmlsZU1hbmFnZXJBcGlTZXJ2aWNlLCBGSUxFTUFOQUdFUl9UUkVFX05BTUV9IGZyb20gJy4vZmlsZU1hbmFnZXJBcGlBYnN0cmFjdC5jbGFzcyc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQXBpfSBmcm9tICcuL0lGaWxlTWFuYWdlckFwaSc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXN9IGZyb20gJy4uL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyQmFja2VuZEFwaVNlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSBpbXBsZW1lbnRzIElGaWxlTWFuYWdlckFwaSwgSU5vZGVTZXJ2aWNlIHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSAkaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5vZGVzID0gW107XG4gICAgdGhpcy5maWxlcyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgZm9sZGVyIGNoaWRscyBmb3IgZ2l2ZW4gZm9sZGVyIGlkXG4gICAqL1xuICBwdWJsaWMgbG9hZChub2RlSWQgPSAnJyk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiB7XG4gICAgY29uc3Qgbm9kZUlkcyA9IHRoaXMubm9kZXMubWFwKChub2RlOiBJT3V0ZXJOb2RlKSA9PiBub2RlLmlkKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdub2RlSWQnLCBub2RlSWQgfHwgJycpO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0PElPdXRlck5vZGVbXT4odGhpcy5jb25maWd1cmF0aW9uLmZvbGRlclVybHMuZm9sZGVyc1VybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChub2RlczogSU91dGVyTm9kZVtdKSA9PiB7XG4gICAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGVJZHMuaW5kZXhPZihub2RlLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm5vZGVzLmZpbmRJbmRleCgoaXRlbTogSU91dGVyTm9kZSkgPT4gbm9kZS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgICAgICAgICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBmb2xkZXJcbiAgICovXG4gIHB1YmxpYyBhZGQobm9kZTogSU91dGVyTm9kZSwgcGFyZW50Tm9kZUlkOiBzdHJpbmcgPSBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBwYXJlbnROb2RlSWQ6IHBhcmVudE5vZGVJZFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0PElPdXRlck5vZGU+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlcnNVcmwsIGRhdGEpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChuZXdOb2RlOiBJT3V0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5ld05vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgZm9sZGVyIGZyb20gc291cmNlIHBhcmVudCB0byB0YXJnZXQgcGFyZW50XG4gICAqL1xuICBwdWJsaWMgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHNyY0lkID0gc3JjTm9kZS5pZDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldE5vZGUgPyB0YXJnZXROb2RlLmlkIDogbnVsbDtcblxuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0PElPdXRlck5vZGU+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlck1vdmVVcmwsIHtzb3VyY2U6IHNyY0lkLCB0YXJnZXQ6IHRhcmdldElkfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKG1vdmVkTm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChzcmNJZCk7XG4gICAgICAgICAgdGhpcy5ub2Rlc1tpbmRleF0ucGFyZW50SWQgPSB0YXJnZXRJZDtcblxuICAgICAgICAgIHJldHVybiBtb3ZlZE5vZGU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBmb2xkZXIgbmFtZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0PElPdXRlck5vZGU+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlcnNVcmwsIG5vZGUpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChuZXdOb2RlOiBJT3V0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5Tm9kZUlkKG5vZGUuaWQpO1xuXG4gICAgICAgICAgdGhpcy5ub2Rlc1tpbmRleF0gPSBuZXdOb2RlO1xuXG4gICAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBub2RlIGJ5IGdpdmVuIGlkXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5Tm9kZUlkKG5vZGVJZCk7XG5cbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKS5sZW5ndGggPiAwO1xuXG4gICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ25vZGVJZCcsIG5vZGVJZCk7XG5cbiAgICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZTxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJzVXJsLCB7cGFyYW1zfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZW1vdmVkTm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlZE5vZGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ05vZGUgaXMgbm90IGVtcHR5Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEFsbE5vZGVzKG5vZGVzOiBJT3V0ZXJOb2RlW10pOiB2b2lkIHtcbiAgICB0aGlzLm5vZGVzID0gWy4uLm5vZGVzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIGZpbGVcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJT3V0ZXJGaWxlLCBib3VuZHM6IElDcm9wQm91bmRzKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlPiB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0PElPdXRlckZpbGU+KHRoaXMuY29uZmlndXJhdGlvbi5maWxlVXJsLCB7aWQ6IGZpbGUuaWQsIGJvdW5kczogYm91bmRzfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBmaWxlcyBmcm9tIGRpcmVjdG9yeVxuICAgKi9cbiAgcHVibGljIGxvYWRGaWxlcyhub2RlSWQgPSAnJyk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgdGhpcy5jdXJyZW50Tm9kZUlkID0gbm9kZUlkO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdkaXJJZCcsIG5vZGVJZCk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQ8SU91dGVyRmlsZVtdPih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChmaWxlczogSU91dGVyRmlsZVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzLm1hcCgoZmlsZTogSU91dGVyRmlsZSkgPT4gPElGaWxlRGF0YVByb3BlcnRpZXM+ZmlsZSk7XG5cbiAgICAgICAgICByZXR1cm4gZmlsZXM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBmaWxlIGZyb20gZm9sZGVyXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5RmlsZUlkKGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdpZCcsIGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGU8YW55Pih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlU2VsZWN0ZWRGaWxlcyhzZWxlY3RlZEZpbGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdpZCcsIHNlbGVjdGVkRmlsZXMuam9pbignfCcpKTtcblxuICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZTxhbnk+KHRoaXMuY29uZmlndXJhdGlvbi5maWxlVXJsLCB7cGFyYW1zfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHNlbGVjdGVkRmlsZXMuZm9yRWFjaCgoZmlsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeUZpbGVJZChmaWxlSWQpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgc3VjY2VzcyBtZXRob2QsIHJlYWwgdXBsb2FkIGlzIGRvbmUgaW4gRXh0ZW5kZWRGaWxlVXBsb2FkZXJcbiAgICovXG4gIHB1YmxpYyB1cGxvYWRGaWxlKGZpbGU6IElPdXRlckZpbGUpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICBjb25zdCBmaWxlRGF0YSA9IDxJRmlsZURhdGFQcm9wZXJ0aWVzPmZpbGU7XG4gICAgdGhpcy5maWxlcy5wdXNoKGZpbGVEYXRhKTtcblxuICAgIHJldHVybiBvZihmaWxlKTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlRmlsZShmaWxlczogSU91dGVyRmlsZVtdLCBub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICBjb25zdCBpZHM6IHN0cmluZ1tdID0gZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5pZC50b1N0cmluZygpKTtcblxuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJGaWxlW10+KHRoaXMuY29uZmlndXJhdGlvbi5maWxlVXJsLCB7ZmlsZXM6IGlkcywgZm9sZGVySWQ6IG5vZGUgPyBub2RlLmlkIDogJyd9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlOb2RlSWQobm9kZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbmRJbmRleCgobm9kZSkgPT4ge1xuICAgICAgcmV0dXJuIG5vZGUuaWQgPT09IG5vZGVJZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbmRJbmRleCgoZmlsZSkgPT4gZmlsZS5pZCA9PT0gZmlsZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4obm9kZUlkOiBzdHJpbmcpOiBJT3V0ZXJOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbHRlcigobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5wYXJlbnRJZCA9PT0gbm9kZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydExvY2FsRGF0YTJJT3V0ZXJGaWxlKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpOiBJT3V0ZXJGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGZpbGUuaWQsXG4gICAgICBmb2xkZXJJZDogZmlsZS5mb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHRodW1ibmFpbFVybDogZmlsZS5kYXRhLFxuICAgICAgdXJsOiBmaWxlLmRhdGEsXG4gICAgICB3aWR0aDogZmlsZS53aWR0aCxcbiAgICAgIGhlaWdodDogZmlsZS5oZWlnaHQsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBzaXplOiBmaWxlLnNpemVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0SU91dGVyRmlsZTJMb2NhbERhdGEoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlRGF0YVByb3BlcnRpZXMge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZmlsZS5pZC50b1N0cmluZygpLFxuICAgICAgZm9sZGVySWQ6IGZpbGUuZm9sZGVySWQsXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBkYXRhOiBmaWxlLmRhdGEsXG4gICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB3aWR0aDogZmlsZS53aWR0aCxcbiAgICAgIGhlaWdodDogZmlsZS5oZWlnaHRcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlVHlwZUZpbHRlcn0gZnJvbSAnLi4vaW50ZXJmYWNlL0lGaWxlVHlwZUZpbHRlcic7XG5pbXBvcnQge0ZpbGVUeXBlRmlsdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmlsZVR5cGVGaWx0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGUtdHlwZS1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZVR5cGVGaWx0ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0eXBlRmlsdGVyTGlzdDogSUZpbGVUeXBlRmlsdGVyW10gPSBbXTtcblxuICBwdWJsaWMgc2VsZWN0ZWRUeXBlOiBJRmlsZVR5cGVGaWx0ZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZVR5cGVGaWx0ZXI6IEZpbGVUeXBlRmlsdGVyU2VydmljZSkge1xuICAgIHRoaXMuZmlsZVR5cGVGaWx0ZXIuZmlsdGVyJFxuICAgICAgLnN1YnNjcmliZSgodHlwZTogSUZpbGVUeXBlRmlsdGVyIHwgbnVsbCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVHlwZSA9IHR5cGU7XG4gICAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqIGluaXQgZmlsZSB0eXBlIGZpbHRlciAqKi9cbiAgICB0aGlzLnR5cGVGaWx0ZXJMaXN0XG4gICAgICAuZmlsdGVyKCh0eXBlOiBJRmlsZVR5cGVGaWx0ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGUuZGVmYXVsdFNlbGVjdGVkO1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKCh0eXBlOiBJRmlsZVR5cGVGaWx0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5maWxlVHlwZUZpbHRlci5zZXRWYWx1ZSh0eXBlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjdXJyZW50IGZpbHRlciBhbmQgZmlyZSBldmVudFxuICAgKiBAcGFyYW0gdHlwZVxuICAgKi9cbiAgcHVibGljIHNldEZpbHRlclR5cGUodHlwZTogSUZpbGVUeXBlRmlsdGVyKSB7XG4gICAgdGhpcy5maWxlVHlwZUZpbHRlci5zZXRWYWx1ZSh0eXBlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIElVcGxvYWRJdGVtRXZlbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlc3BvbnNlOiBhbnk7XG4gIHN0YXR1czogbnVtYmVyO1xufVxuIiwiZXhwb3J0IGVudW0gQnV0dG9uIHtcbiAgQUREX0ZPTERFUiA9ICdBRERfRk9MREVSJyxcbiAgQ0hPT1NFX1NFTEVDVElPTiA9ICdDSE9PU0VfU0VMRUNUSU9OJyxcbiAgREVMRVRFX1NFTEVDVElPTiA9ICdERUxFVEVfU0VMRUNUSU9OJyxcbiAgSU5WRVJTRV9TRUxFQ1RJT04gPSAnSU5WRVJTRV9TRUxFQ1RJT04nLFxuICBSRUZSRVNIX0ZJTEVTX0xJU1QgPSAnUkVGUkVTSF9GSUxFU19MSVNUJyxcbiAgU0VMRUNUX0FMTCA9ICdTRUxFQ1RfQUxMJyxcbiAgVU5TRUxFQ1RfQUxMID0gJ1VOU0VMRUNUX0FMTCcsXG59XG4iLCJpbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4uL2ludGVyZmFjZS9JVG9vbGJhckV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFRvb2xiYXJFdmVudE1vZGVsIGltcGxlbWVudHMgSVRvb2xiYXJFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nID0gbnVsbCkge1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktc2VhcmNoLWZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoRmlsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgc2VhcmNoRmllbGQgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlYXJjaEZpbHRlclNlcnZpY2U6IFNlYXJjaEZpbHRlclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDI1MClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2VhcmNoRmlsdGVyU2VydmljZS5zZXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG59XG4iLCJpbXBvcnQge0lCdXR0b24sIElCdXR0b25EYXRhfSBmcm9tICcuL0lCdXR0b24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCdXR0b25DbGFzcyBpbXBsZW1lbnRzIElCdXR0b24ge1xuICBwdWJsaWMgc3ltYm9sOiBzdHJpbmc7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBsYWJlbDogYm9vbGVhbjtcbiAgcHVibGljIGljb246IGJvb2xlYW47XG4gIHB1YmxpYyBpY29uQ3NzQ2xhc3M6IHN0cmluZztcbiAgcHVibGljIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUJ1dHRvbkRhdGEpIHtcbiAgICB0aGlzLnN5bWJvbCA9IGRhdGEuc3ltYm9sO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmxhYmVsID0gZGF0YS5sYWJlbDtcbiAgICB0aGlzLmljb24gPSBkYXRhLmljb247XG4gICAgdGhpcy5pY29uQ3NzQ2xhc3MgPSBkYXRhLmljb25Dc3NDbGFzcztcbiAgICB0aGlzLmRpc2FibGVkID0gZGF0YS5kaXNhYmxlZDtcbiAgfVxuXG4gIGFic3RyYWN0IGlzRGl2aWRlcigpOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEJ1dHRvbkNsYXNzfSBmcm9tICcuL0Fic3RyYWN0QnV0dG9uLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNsYXNzIGV4dGVuZHMgQWJzdHJhY3RCdXR0b25DbGFzcyB7XG4gIHB1YmxpYyBpc0RpdmlkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQge0Fic3RyYWN0QnV0dG9uQ2xhc3N9IGZyb20gJy4vQWJzdHJhY3RCdXR0b24uY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uRGl2aWRlckNsYXNzIGV4dGVuZHMgQWJzdHJhY3RCdXR0b25DbGFzcyB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBzeW1ib2w6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBsYWJlbDogZmFsc2UsXG4gICAgICBpY29uOiBmYWxzZSxcbiAgICAgIGljb25Dc3NDbGFzczogJydcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpc0RpdmlkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUJ1dHRvbiwgSUJ1dHRvbkRhdGF9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL0lCdXR0b24nO1xuaW1wb3J0IHtCdXR0b25DbGFzc30gZnJvbSAnLi4vLi4vZHJvcGRvd24vQnV0dG9uLmNsYXNzJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9tb2RlbHMvYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7QnV0dG9uRGl2aWRlckNsYXNzfSBmcm9tICcuLi8uLi9kcm9wZG93bi9CdXR0b25EaXZpZGVyLmNsYXNzJztcbmltcG9ydCB7Q3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtJVG9vbGJhckV2ZW50fSBmcm9tICcuLi9pbnRlcmZhY2UvSVRvb2xiYXJFdmVudCc7XG5pbXBvcnQge1Rvb2xiYXJFdmVudE1vZGVsfSBmcm9tICcuLi9tb2RlbHMvdG9vbGJhckV2ZW50Lm1vZGVsJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktc2VsZWN0aW9uLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdGlvbi5kcm9wZG93bi5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgcHVibGljIG9uTWVudUJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBzZWxlY3RCdXR0b25zTGlzdDogSUJ1dHRvbltdO1xuXG4gIHB1YmxpYyBzZWxlY3RBbGxCdXR0b24gPSBuZXcgQnV0dG9uQ2xhc3Moe1xuICAgIHN5bWJvbDogQnV0dG9uLlNFTEVDVF9BTEwsXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9TRUxFQ1RfQUxMJyxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBpY29uOiB0cnVlLFxuICAgIGljb25Dc3NDbGFzczogJ2ZhIGZhLWNoZWNrLXNxdWFyZS1vJ1xuICB9KTtcblxuICBwcml2YXRlIHVuc2VsZWN0QWxsQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5VTlNFTEVDVF9BTEwsXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9VTlNFTEVDVF9BTEwnLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGljb246IHRydWUsXG4gICAgaWNvbkNzc0NsYXNzOiAnZmEgZmEtc3F1YXJlLW8nXG4gIH0pO1xuXG4gIHByaXZhdGUgaW52ZXJzZVNlbGVjdGlvbkJ1dHRvbiA9IG5ldyBCdXR0b25DbGFzcyh7XG4gICAgc3ltYm9sOiBCdXR0b24uSU5WRVJTRV9TRUxFQ1RJT04sXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9JTlZFUlNFX1NFTEVDVElPTicsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS1jaGVjay1zcXVhcmUnXG4gIH0pO1xuXG4gIHByaXZhdGUgZGVsZXRlU2VsZWN0aW9uQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5ERUxFVEVfU0VMRUNUSU9OLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfREVMRVRFX1NFTEVDVElPTicsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS10cmFzaCdcbiAgfSk7XG5cbiAgcHJpdmF0ZSBjaG9vc2VTZWxlY3Rpb25CdXR0b24gPSBuZXcgQnV0dG9uQ2xhc3Moe1xuICAgIHN5bWJvbDogQnV0dG9uLkNIT09TRV9TRUxFQ1RJT04sXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9DSE9PU0VfU0VMRUNUSU9OJyxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBpY29uOiB0cnVlLFxuICAgIGljb25Dc3NDbGFzczogJ2ZhIGZhLWltYWdlJ1xuICB9KTtcblxuICBwcml2YXRlIG9uTG9hZEZpbGVzU3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlOiBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLnNlbGVjdEJ1dHRvbnNMaXN0ID0gdGhpcy5jcmVhdGVCYXNpY0J1dHRvbnMoKTtcblxuICAgIHRoaXMuaW5pdExpc3Rlbk9uTG9hZEZpbGVzKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkxvYWRGaWxlc1N1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGxpc3RlbmVyIG9uIGxvYWQgZmlsZXNcbiAgICovXG4gIHB1YmxpYyBpbml0TGlzdGVuT25Mb2FkRmlsZXMoKSB7XG4gICAgdGhpcy5vbkxvYWRGaWxlc1N1YnNjcmliZXIgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLmN1cnJlbnREaXJlY3RvcnlGaWxlSWRzJCxcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5zZWxlY3RlZEZpbGVzJFxuICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiBzdHJpbmdbXVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bWJlck9mRmlsZXMgPSBkYXRhWzBdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZTZWxlY3RlZEZpbGVzID0gZGF0YVsxXS5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlQWxsQnV0dG9ucygpO1xuXG4gICAgICAgIGlmIChudW1iZXJPZkZpbGVzID4gMCkge1xuICAgICAgICAgIGlmIChudW1iZXJPZlNlbGVjdGVkRmlsZXMgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUFsbEJ1dHRvbnMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVTZWxlY3RBbGxCdXR0b24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICBwdWJsaWMgb25TZWxlY3REcm9wZG93bkNsaWNrKGJ1dHRvbjogSUJ1dHRvbkRhdGEpIHtcbiAgICBjb25zdCBldmVudDogSVRvb2xiYXJFdmVudCA9IG5ldyBUb29sYmFyRXZlbnRNb2RlbChidXR0b24uc3ltYm9sKTtcbiAgICB0aGlzLm9uTWVudUJ1dHRvbkNsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYWxsIGRyb3Bkb3duIGJ1dHRvbnMgYW5kIG1haW4gYnV0dG9uXG4gICAqL1xuICBwcml2YXRlIGRpc2FibGVBbGxCdXR0b25zKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2VsZWN0QnV0dG9uc0xpc3RcbiAgICAgIC5maWx0ZXIoKGJ1dHRvbjogSUJ1dHRvbikgPT4ge1xuICAgICAgICByZXR1cm4gIWJ1dHRvbi5pc0RpdmlkZXIoKTtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaCgoYnV0dG9uOiBJQnV0dG9uRGF0YSkgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFsbCBkcm9wZG93biBidXR0b25zIGFuZCBtYWluIGJ1dHRvblxuICAgKi9cbiAgcHJpdmF0ZSBlbmFibGVBbGxCdXR0b25zKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNlbGVjdEJ1dHRvbnNMaXN0XG4gICAgICAuZm9yRWFjaCgoYnV0dG9uOiBJQnV0dG9uRGF0YSkgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBsaXN0IG9mIGJ1dHRvbnNcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlQmFzaWNCdXR0b25zKCk6IElCdXR0b25bXSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLFxuICAgICAgdGhpcy51bnNlbGVjdEFsbEJ1dHRvbixcbiAgICAgIHRoaXMuaW52ZXJzZVNlbGVjdGlvbkJ1dHRvbixcbiAgICAgIG5ldyBCdXR0b25EaXZpZGVyQ2xhc3MoKSxcbiAgICAgIHRoaXMuZGVsZXRlU2VsZWN0aW9uQnV0dG9uLFxuICAgIF07XG5cbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFsbG93Q2hvb3NlTXVsdGlwbGVGaWxlcykge1xuICAgICAgYnV0dG9ucy5wdXNoKG5ldyBCdXR0b25EaXZpZGVyQ2xhc3MoKSk7XG4gICAgICBidXR0b25zLnB1c2godGhpcy5jaG9vc2VTZWxlY3Rpb25CdXR0b24pO1xuICAgIH1cblxuICAgIHJldHVybiBidXR0b25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvbmx5IHNlbGVjdCBidXR0b25cbiAgICovXG4gIHByaXZhdGUgZW5hYmxlU2VsZWN0QWxsQnV0dG9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbnZlcnNlU2VsZWN0aW9uQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi9tb2RlbHMvYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7VG9vbGJhckV2ZW50TW9kZWx9IGZyb20gJy4vbW9kZWxzL3Rvb2xiYXJFdmVudC5tb2RlbCc7XG5pbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4vaW50ZXJmYWNlL0lUb29sYmFyRXZlbnQnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlclVwbG9hZGVyfSBmcm9tICcuLi9maWxlc0xpc3QvZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyU3RhdGV9IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7VXBsb2FkRmlsZXNBY3Rpb24sIFVwbG9hZEZpbGVzRXJyb3JBY3Rpb259IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS10b29sYmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGN1cnJlbnRGb2xkZXJJZDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbkFkZEZvbGRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1lbnVCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHVibGljIGZpbGVNYW5hZ2VyVXBsb2FkZXI6IEZpbGVNYW5hZ2VyVXBsb2FkZXIsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4pIHtcblxuICAgIHRoaXMuZmlsZU1hbmFnZXJVcGxvYWRlci5jbGVhcigpO1xuXG4gICAgdGhpcy5maWxlTWFuYWdlclVwbG9hZGVyLnVwbG9hZGVyLm9uQ29tcGxldGVBbGwgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBsb2FkLmVtaXQodGhpcy5jdXJyZW50Rm9sZGVySWQgfHwgJycpO1xuICAgIH07XG5cbiAgICB0aGlzLmZpbGVNYW5hZ2VyVXBsb2FkZXIudXBsb2FkZXIub25Db21wbGV0ZUl0ZW0gPSAoaXRlbTogYW55LCByZXNwb25zZTogYW55LCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogYW55KSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNBY3Rpb24oe2ZpbGVzOiBKU09OLnBhcnNlKHJlc3BvbnNlKX0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oe2ZpbGVzOiBKU09OLnBhcnNlKHJlc3BvbnNlKX0pKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsZU1hbmFnZXJVcGxvYWRlci5zZXREaXJlY3RvcnlJZCh0aGlzLmN1cnJlbnRGb2xkZXJJZCB8fCAnJyk7XG4gIH1cblxuICBwdWJsaWMgYWRkRm9sZGVyKCkge1xuICAgIGxldCBldmVudDogSVRvb2xiYXJFdmVudCA9IG5ldyBUb29sYmFyRXZlbnRNb2RlbChCdXR0b24uQUREX0ZPTERFUiwgJ05vd3kgZm9sZGVyJyk7XG4gICAgdGhpcy5vbkFkZEZvbGRlckNsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIG9uUmVmcmVzaEZpbGVzTGlzdCgpIHtcbiAgICBsZXQgZXZlbnQ6IElUb29sYmFyRXZlbnQgPSBuZXcgVG9vbGJhckV2ZW50TW9kZWwoQnV0dG9uLlJFRlJFU0hfRklMRVNfTElTVCk7XG4gICAgdGhpcy5vbk1lbnVCdXR0b25DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVHJlZUNvbXBvbmVudCxcbiAgTm9kZVNlcnZpY2UsXG4gIElDb250ZXh0TWVudSxcbiAgSU91dGVyTm9kZSxcbiAgSVRyZWVEYXRhLFxuICBJVHJlZVN0YXRlLFxuICBJQ29uZmlndXJhdGlvbixcbiAgVHJlZU1vZGVsLFxuICBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsIFRyZWVJbml0aWFsaXplclNlcnZpY2UsXG59IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4vZmlsZXNMaXN0L2ZpbGUubW9kZWwnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zU2VydmljZX0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQge0lGaWxlRXZlbnR9IGZyb20gJy4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuL3Rvb2xiYXIvbW9kZWxzL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0ZpbGVzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9maWxlc0xpc3QvZmlsZXNMaXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4vdG9vbGJhci9pbnRlcmZhY2UvSVRvb2xiYXJFdmVudCc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBcGlTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyQXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9ucywgSU5vdGlmaWNhdGlvbn0gZnJvbSAnLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge0N1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0ZJTEVNQU5BR0VSX1RSRUVfTkFNRX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFwaUFic3RyYWN0LmNsYXNzJztcbmltcG9ydCB7XG4gIENob29zZUZpbGVzQWN0aW9uLFxuICBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uLCBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24sIExvYWRGaWxlc0FjdGlvbixcbiAgU2VsZWN0QWxsRmlsZXNBY3Rpb24sXG4gIFVuU2VsZWN0QWxsRmlsZXNBY3Rpb25cbn0gZnJvbSAnLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZmlsZW1hbmFnZXInLFxuICBwcm92aWRlcnM6IFtOb2RlU2VydmljZSwgTm90aWZpY2F0aW9uc1NlcnZpY2VdLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGVtYW5hZ2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgcHVibGljIG9uU2luZ2xlRmlsZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKFRyZWVDb21wb25lbnQpXG4gIHB1YmxpYyB0cmVlQ29tcG9uZW50OiBUcmVlQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoRmlsZXNMaXN0Q29tcG9uZW50KVxuICBwdWJsaWMgZmlsZXNMaXN0OiBGaWxlc0xpc3RDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgZmlsZXMgZm9yIGN1cnJlbnQgc2VsZWN0ZWQgZGlyZWN0b3J5XG4gICAqL1xuICBwcml2YXRlIGZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT47XG5cbiAgcHVibGljIGZpbHRlcmVkRmlsZXMkOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPjtcbiAgcHVibGljIHNlbGVjdGVkRmlsZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBwdWJsaWMgZm9sZGVyczogT2JzZXJ2YWJsZTxJVHJlZURhdGE+O1xuXG4gIHB1YmxpYyB0cmVlQ29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24gPSB7XG4gICAgc2hvd0FkZEJ1dHRvbjogZmFsc2UsXG4gICAgZGlzYWJsZU1vdmVOb2RlczogZmFsc2UsXG4gICAgdHJlZUlkOiBGSUxFTUFOQUdFUl9UUkVFX05BTUUsXG4gICAgZHJhZ1pvbmU6IEZJTEVNQU5BR0VSX1RSRUVfTkFNRSxcbiAgICBkcm9wWm9uZTogW0ZJTEVNQU5BR0VSX1RSRUVfTkFNRV1cbiAgfTtcblxuICBwdWJsaWMgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG5cbiAgLyoqIFVOU0VEICoqL1xuICBwdWJsaWMgY29udGV4dE1lbnU6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIGN1cnJlbnRTZWxlY3RlZEZpbGU6IElGaWxlTW9kZWw7XG4gIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRGaWxlc0lkczogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIGN1cnJlbnRTZWxlY3RlZEZpbGVzOiBJT3V0ZXJGaWxlW10gPSBbXTtcblxuICBwdWJsaWMgaXNQcmV2aWV3TW9kZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNDcm9wTW9kZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBub3RpZmljYXRpb25PcHRpb25zID0ge1xuICAgIHBvc2l0aW9uOiBbJ2JvdHRvbScsICdyaWdodCddLFxuICAgIHRpbWVPdXQ6IDMwMDAsXG4gICAgbGFzdE9uQm90dG9tOiBmYWxzZSxcbiAgICBwcmV2ZW50RHVwbGljYXRlczogdHJ1ZSxcbiAgICBydGw6IGZhbHNlLFxuICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogTGlzdCBvZiBjb250ZXh0IG1lbnVcbiAgICovXG4gIHB1YmxpYyBtZW51OiBJQ29udGV4dE1lbnVbXTtcblxuICBwcm90ZWN0ZWQgY3VycmVudFNlbGVjdGVkRm9sZGVyOiBJT3V0ZXJOb2RlO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHRyZWVTZXJ2aWNlOiBGaWxlTWFuYWdlckFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyRWZmZWN0czogRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmlsZW1hbmFnZXJOb3RpZmNhdGlvbnM6IEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlOiBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmVlSW5pdGlhbGl6ZXJTZXJ2aWNlOiBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLm1lbnUgPSBjb25maWd1cmF0aW9uLmNvbnRleHRNZW51SXRlbXM7XG5cbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLmdldE5vdGlmaWNhdGlvblN0cmVhbSgpXG4gICAgICAuc3Vic2NyaWJlKChub3RpZmljYXRpb246IElOb3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHRpdGxlLCBtZXNzYWdlfSA9IG5vdGlmaWNhdGlvbjtcblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNbdHlwZV0odGl0bGUsIG1lc3NhZ2UpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uuc2VsZWN0ZWRGaWxlcyRcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZEZpbGVzSWRzID0gZGF0YTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLnNlbGVjdGVkRmlsZXMkLFxuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZW50aXRpZXMkLFxuICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChbaWRzLCBlbnRpdGllc106IFtzdHJpbmdbXSwgeyBba2V5OiBzdHJpbmddOiBJT3V0ZXJGaWxlIH1dKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlcyA9IGlkcy5tYXAoKGlkKSA9PiBlbnRpdGllc1tpZF0pO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyZWVNb2RlbCA9IHRoaXMudHJlZUluaXRpYWxpemVyU2VydmljZS5pbml0KHRoaXMudHJlZUNvbmZpZ3VyYXRpb24sIHRoaXMudHJlZVNlcnZpY2UpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy50cmVlTW9kZWwuY3VycmVudFNlbGVjdGVkTm9kZSRcbiAgICAgICAgLnN1YnNjcmliZSgobm9kZTogSU91dGVyTm9kZSkgPT4gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIgPSBub2RlKVxuICAgICk7XG5cbiAgICAvKioqIFNUQVJUIC0gaW5pdCBmaWxlcyAqKiovXG4gICAgdGhpcy5maWxlcyQgPSB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZmlsZXMkO1xuICAgIHRoaXMuZmlsdGVyZWRGaWxlcyQgPSB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZmlsdGVyZWRGaWxlcyQ7XG4gICAgdGhpcy5zZWxlY3RlZEZpbGVzJCA9IHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5zZWxlY3RlZEZpbGVzJDtcblxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy50cmVlTW9kZWwuY3VycmVudFNlbGVjdGVkTm9kZSRcbiAgICAgICAgLnN1YnNjcmliZSgobm9kZTogSU91dGVyTm9kZSB8IG51bGwpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRGaWxlcyhub2RlID8gbm9kZS5pZCA6ICcnKTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgLyoqKiBFTkQgLSBpbml0IGZpbGVzICoqKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmZpbGVNYW5hZ2VyRWZmZWN0cy5jcm9wRmlsZVN1Y2Nlc3MkXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXQgY3VycmVudFNlbGVjdGVkRm9sZGVySWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyID8gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIuaWQgOiBudWxsO1xuICB9XG5cblxuICBwdWJsaWMgb25BZGRGb2xkZXIoKSB7XG4gICAgdGhpcy50cmVlQ29tcG9uZW50Lm9uQWRkKCk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogRklMRSBFVkVOVFNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKlxuICAgKiBSdW4gd2hlbiBhbGwgZmlsZXMgYXJlIHVwbG9hZGVkXG4gICAqL1xuICBwdWJsaWMgb25VcGxvYWQoZm9sZGVySWQ6IHN0cmluZykge1xuICAgIHRoaXMubm90aWZpY2F0aW9ucy5zdWNjZXNzKCdGaWxlIHVwbG9hZCcsICdVcGxvYWQgY29tcGxldGUnKTtcbiAgfVxuXG5cbiAgcHVibGljIG9uUHJldmlld0ZpbGUoZmlsZUV2ZW50RGF0YTogSUZpbGVFdmVudCkge1xuICAgIHRoaXMuaXNQcmV2aWV3TW9kZSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlID0gZmlsZUV2ZW50RGF0YS5maWxlO1xuICB9XG5cblxuICBwdWJsaWMgb25PcGVuQ3JvcEZpbGVFZGl0b3IoZmlsZUV2ZW50RGF0YTogSUZpbGVFdmVudCkge1xuICAgIHRoaXMuaXNDcm9wTW9kZSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlID0gZmlsZUV2ZW50RGF0YS5maWxlO1xuICB9XG5cblxuICBwdWJsaWMgb25TZWxlY3RGaWxlKGV2ZW50OiBGaWxlTW9kZWwpIHtcbiAgICB0aGlzLm9uU2luZ2xlRmlsZVNlbGVjdC5uZXh0KGV2ZW50LmdldFNlbGVjdERhdGEoKSk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogVE9PTEJBUiBFVkVOVFNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICBwdWJsaWMgb25NZW51QnV0dG9uQ2xpY2soZXZlbnQ6IElUb29sYmFyRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgQnV0dG9uLkNIT09TRV9TRUxFQ1RJT046XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENob29zZUZpbGVzQWN0aW9uKHtmaWxlczogdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlc30pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5ERUxFVEVfU0VMRUNUSU9OOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uKHtmaWxlczogdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlc0lkc30pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5TRUxFQ1RfQUxMOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5VTlNFTEVDVF9BTEw6XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCdXR0b24uSU5WRVJTRV9TRUxFQ1RJT046XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbigpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5SRUZSRVNIX0ZJTEVTX0xJU1Q6XG4gICAgICAgIHRoaXMucmVsb2FkRmlsZXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIE9USEVSIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5RXZlbnRzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaXNQcmV2aWV3TW9kZSB8fCB0aGlzLmlzQ3JvcE1vZGUpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmlzUHJldmlld01vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ3JvcE1vZGUgPSBmYWxzZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRGaWxlc0FjdGlvbih7Zm9sZGVySWQ6IGZvbGRlcklkIHx8ICcnfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWxvYWRGaWxlcygpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyID8gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIuaWQgOiAnJztcblxuICAgIHRoaXMubG9hZEZpbGVzKGlkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgUHJvdmlkZXIsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUcmVlTW9kdWxlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2UsIFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGV9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbXBvbmVudH0gZnJvbSAnLi9maWxlbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWxlc0xpc3RDb21wb25lbnR9IGZyb20gJy4vZmlsZXNMaXN0L2ZpbGVzTGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtJbWFnZUNyb3BwZXJDb21wb25lbnQsIEltYWdlQ3JvcHBlck1vZHVsZX0gZnJvbSAnbmcyLWltZy1jcm9wcGVyJztcbmltcG9ydCB7Q3JvcENvbXBvbmVudH0gZnJvbSAnLi9jcm9wL2Nyb3AuY29tcG9uZW50JztcbmltcG9ydCB7UHJldmlld0NvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7RHJvcGRvd25Db21wb25lbnR9IGZyb20gJy4vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlclVwbG9hZGVyfSBmcm9tICcuL2ZpbGVzTGlzdC9maWxlTWFuYWdlclVwbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlU2VydmljZX0gZnJvbSAnLi9jb25maWd1cmF0aW9uL3RyZWUuc2VydmljZSc7XG5pbXBvcnQge0VmZmVjdHNNb2R1bGV9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmVNb2R1bGV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7ZmlsZU1hbmFnZXJSZWR1Y2VyfSBmcm9tICcuL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge1N0b3JlRGV2dG9vbHNNb2R1bGV9IGZyb20gJ0BuZ3J4L3N0b3JlLWRldnRvb2xzJztcbmltcG9ydCB7RmlsZVR5cGVGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaEZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlLW1hbmFnZXItZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZVR5cGVGaWx0ZXJDb21wb25lbnR9IGZyb20gJy4vdG9vbGJhci9maWxlVHlwZUZpbHRlci9maWxlVHlwZUZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hGaWxlQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIvc2VhcmNoRmlsZS9zZWFyY2hGaWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQXBpU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFwaS5zZXJ2aWNlJztcbmltcG9ydCB7SW1hZ2VEYXRhQ29udmVydGVyfSBmcm9tICcuL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZW1hbmFnZXJOb3RpZmNhdGlvbnN9IGZyb20gJy4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Qb3BvdmVyTW9kdWxlfSBmcm9tICdhbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyJztcbmltcG9ydCB7RmlsZU1hbmFnZXJCYWNrZW5kQXBpU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckJhY2tlbmRBcGkuc2VydmljZSc7XG5pbXBvcnQge0N1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gJy4vdG9vbGJhci9zZWxlY3Rpb25Ecm9wRG93bi9zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7RmlsZUNvbXBvbmVudH0gZnJvbSAnLi9maWxlc0xpc3QvZmlsZS9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vY29uZmlndXJhdGlvbi9JRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0ZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2VdKSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSW1hZ2VDcm9wcGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdmaWxlcycsIGZpbGVNYW5hZ2VyUmVkdWNlciksXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIFRyZWVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmlsZU1hbmFnZXJDb21wb25lbnQsXG4gICAgRmlsZUNvbXBvbmVudCxcbiAgICBGaWxlVHlwZUZpbHRlckNvbXBvbmVudCxcbiAgICBUb29sYmFyQ29tcG9uZW50LFxuICAgIEZpbGVzTGlzdENvbXBvbmVudCxcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcbiAgICBQcmV2aWV3Q29tcG9uZW50LFxuICAgIENyb3BDb21wb25lbnQsXG4gICAgU2VhcmNoRmlsZUNvbXBvbmVudCxcbiAgICBTZWxlY3Rpb25Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSW1hZ2VDcm9wcGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtGaWxlTWFuYWdlckNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlck1vZHVsZSB7XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbiwgYXBpUHJvdmlkZXI6IFByb3ZpZGVyID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlsZU1hbmFnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJBcGlTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckJhY2tlbmRBcGlTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgIEZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2UsXG4gICAgICAgIEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLFxuICAgICAgICBGaWxlTWFuYWdlclVwbG9hZGVyLFxuICAgICAgICBGaWxlVHlwZUZpbHRlclNlcnZpY2UsXG4gICAgICAgIEltYWdlRGF0YUNvbnZlcnRlcixcbiAgICAgICAgTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgIFNlYXJjaEZpbHRlclNlcnZpY2UsXG4gICAgICAgIFRyZWVTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZTogJ2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbicsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICBhcGlQcm92aWRlciA/IGFwaVByb3ZpZGVyIDogRmlsZU1hbmFnZXJBcGlTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnOiBJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLCBhcGlQcm92aWRlcjogUHJvdmlkZXIgPSBudWxsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGaWxlTWFuYWdlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckFwaVNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyQmFja2VuZEFwaVNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgRmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSxcbiAgICAgICAgRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMsXG4gICAgICAgIEZpbGVNYW5hZ2VyVXBsb2FkZXIsXG4gICAgICAgIEZpbGVUeXBlRmlsdGVyU2VydmljZSxcbiAgICAgICAgSW1hZ2VEYXRhQ29udmVydGVyLFxuICAgICAgICBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgU2VhcmNoRmlsdGVyU2VydmljZSxcbiAgICAgICAgVHJlZVNlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlOiAnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIGFwaVByb3ZpZGVyID8gYXBpUHJvdmlkZXIgOiBGaWxlTWFuYWdlckFwaVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJmaWx0ZXIiLCJ0c2xpYl8xLl9fZGVjb3JhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQW9FRSxrQ0FBZ0QsYUFBd0M7UUE1RGpGLG9CQUFlLEdBQWdCO1lBQ3BDO2dCQUNFLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2FBQ1o7WUFDRDtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRzthQUNaO1NBQ0YsQ0FBQztRQUVLLHFCQUFnQixHQUFtQixFQUFFLENBQUM7UUFFdEMsb0JBQWUsR0FBc0I7WUFDMUM7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLElBQUksRUFBRSxXQUFXO2dCQUNqQixlQUFlLEVBQUUsSUFBSTthQUN0QjtZQUNEO2dCQUNFLElB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