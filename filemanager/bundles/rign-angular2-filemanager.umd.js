(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@rign/angular2-tree'), require('@angular/common/http'), require('ng2-img-cropper/src/cropperSettings'), require('ng2-img-cropper'), require('@ngrx/store'), require('angular2-uuid'), require('rxjs/operators'), require('rxjs'), require('ng2-file-upload'), require('@ngrx/effects'), require('angular2-notifications'), require('@angular/forms'), require('angular-confirmation-popover'), require('@ngx-translate/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@rign/angular2-filemanager', ['exports', '@angular/core', '@rign/angular2-tree', '@angular/common/http', 'ng2-img-cropper/src/cropperSettings', 'ng2-img-cropper', '@ngrx/store', 'angular2-uuid', 'rxjs/operators', 'rxjs', 'ng2-file-upload', '@ngrx/effects', 'angular2-notifications', '@angular/forms', 'angular-confirmation-popover', '@ngx-translate/core', '@angular/common'], factory) :
    (factory((global.rign = global.rign || {}, global.rign['angular2-filemanager'] = {}),global.ng.core,global.angular2Tree,global.ng.common.http,global.cropperSettings,global.ng2ImgCropper,global.store,global.angular2Uuid,global.rxjs.operators,global.rxjs,global.ng2FileUpload,global.effects,global.angular2Notifications,global.ng.forms,global.angularConfirmationPopover,global.core$1,global.ng.common));
}(this, (function (exports,core,angular2Tree,http,cropperSettings,ng2ImgCropper,store,angular2Uuid,operators,rxjs,ng2FileUpload,effects,angular2Notifications,forms,angularConfirmationPopover,core$1,common) { 'use strict';

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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FileManagerConfiguration.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['fileManagerConfiguration',] }] }
            ];
        };
        return FileManagerConfiguration;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IUrlConfiguration = /** @class */ (function () {
        function IUrlConfiguration() {
        }
        return IUrlConfiguration;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TreeService = /** @class */ (function (_super) {
        __extends(TreeService, _super);
        function TreeService(http$$1, configuration) {
            var _this = _super.call(this, http$$1) || this;
            _this.http = http$$1;
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TreeService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: undefined, decorators: [{ type: core.Inject, args: ['fileManagerConfiguration',] }] }
            ];
        };
        return TreeService;
    }(angular2Tree.NodeService));

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
        function CropComponent(resolver, configuration, store$$1) {
            this.resolver = resolver;
            this.configuration = configuration;
            this.store = store$$1;
            this.onCrop = new core.EventEmitter();
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
                var cropperComponent = this.resolver.resolveComponentFactory(ng2ImgCropper.ImageCropperComponent);
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
                var cropperSettings$$1 = new cropperSettings.CropperSettings();
                /** @type {?} */
                var scale = this.calculateScale();
                /** @type {?} */
                var width = scale * this.file.getWidth();
                /** @type {?} */
                var height = scale * this.file.getHeight();
                cropperSettings$$1.noFileInput = true;
                cropperSettings$$1.width = this.currentCropSize.width;
                cropperSettings$$1.height = this.currentCropSize.height;
                cropperSettings$$1.canvasWidth = width;
                cropperSettings$$1.canvasHeight = height;
                return cropperSettings$$1;
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
            { type: core.Component, args: [{
                        selector: 'crop-image',
                        template: "\n    <div class=\"crop-image\">\n      <div class=\"crop-workbench\">\n        <div #container></div>\n      </div>\n      <div class=\"btn-toolbar\">\n        <div class=\"btn-group\">\n          <button class=\"btn btn-primary\" *ngFor=\"let cropSize of cropSizeList\" (click)=\"updateCropSize(cropSize)\"\n                  [ngClass]=\"{'active': cropSize == currentCropSize}\">{{cropSize.name | translate}}\n          </button>\n        </div>\n        <div class=\"btn-group pull-right\">\n          <button class=\"btn btn-success btn-icon\" (click)=\"cropImage()\">\n            <i class=\"fa fa-check\"></i>\n            <span>{{'RI_FM_BTN_SAVE' | translate}}</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  ",
                        styles: [".btn-toolbar{margin:5px 0}.btn-toolbar .btn-group{margin:0}.crop-workbench{width:600px;height:400px;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        CropComponent.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: FileManagerConfiguration },
                { type: store.Store }
            ];
        };
        CropComponent.propDecorators = {
            file: [{ type: core.Input }],
            onCrop: [{ type: core.Output }],
            container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef },] }],
            cropper: [{ type: core.ViewChild, args: ['cropper',] }]
        };
        return CropComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownComponent = /** @class */ (function () {
        function DropdownComponent() {
            this.onClick = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ri-dropdown',
                        template: "<div class=\"btn-group dropdown\" [ngClass]=\"{'show': isOpen}\">\n  <button class=\"btn btn-secondary\" [ngClass]=\"{disabled: mainButton.disabled}\" (click)=\"selectButton(mainButton)\">\n    <span *ngIf=\"displayMainButtonLabel\">{{mainButton.name}}</span>\n    <i *ngIf=\"mainButton.icon\" class=\"{{mainButton.iconCssClass}}\"></i>\n  </button><!--\n  --><button class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" id=\"dropdownMenuButton\"\n          [ngClass]=\"{disabled: mainButton.disabled}\"\n          (click)=\"toggleOpen()\">\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\" (mouseleave)=\"hide()\"\n      [ngClass]=\"{'show': isOpen}\">\n    <li class=\"\"\n        [ngClass]=\"{'dropdown-divider': button.isDivider(), 'dropdown-item': !button.isDivider(), disabled: button.disabled}\"\n        *ngFor=\"let button of buttons \" (click)=\"selectButton(button)\">\n      <span *ngIf=\"button.icon\" class=\"{{button.iconCssClass}}\"></span>\n      <span *ngIf=\"button.label\">{{button.name | translate}}</span>\n    </li>\n  </ul>\n</div>\n",
                        styles: [".dropdown{display:inline-block;height:34px}.dropdown .btn{height:34px}.dropdown li{cursor:pointer}.dropdown li:hover:not(.disabled){background:rgba(0,123,255,.45)}"]
                    }] }
        ];
        DropdownComponent.propDecorators = {
            mainButton: [{ type: core.Input }],
            buttons: [{ type: core.Input }],
            displayMainButtonLabel: [{ type: core.Input }],
            onClick: [{ type: core.Output }]
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
                    id: angular2Uuid.UUID.UUID(),
                    folderId: folderId,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    data: ''
                };
                /** @type {?} */
                var reader = this.getBase64FromFile(file);
                return reader
                    .pipe(operators.concatMap(function (data) {
                    properties.data = data;
                    if (properties.type.indexOf('image') === 0) {
                        return _this.getImageDimensions(data);
                    }
                    else {
                        return rxjs.of({ width: 0, height: 0 });
                    }
                }), operators.map(function (dimensions) {
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
                return rxjs.fromEvent(reader, 'load')
                    .pipe(operators.map(function () {
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
                var loadImage = rxjs.fromEvent(image, 'load')
                    .pipe(operators.map(function () {
                    return {
                        width: image.naturalWidth,
                        height: image.naturalHeight
                    };
                }));
                document.body.appendChild(image);
                return loadImage;
            };
        ImageDataConverter.decorators = [
            { type: core.Injectable }
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
            function (item, filter, options) {
                /** @type {?} */
                var notification = {
                    type: 'alert',
                    title: 'Add file to queue',
                    message: "File not add to queue"
                };
                if (filter.name === 'fileSize') {
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
    }(ng2FileUpload.FileUploader));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FilemanagerNotifcations = /** @class */ (function () {
        function FilemanagerNotifcations() {
            this.notification$ = new rxjs.Subject();
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FileManagerUploader.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['fileManagerConfiguration',] }] },
                { type: FilemanagerNotifcations }
            ];
        };
        return FileManagerUploader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FileComponent = /** @class */ (function () {
        function FileComponent(configuration, store$$1) {
            this.configuration = configuration;
            this.store = store$$1;
            this.onPreviewFile = new core.EventEmitter();
            this.onCropFile = new core.EventEmitter();
            this.onSelectFile = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ri-file-component',
                        template: "<div *ngIf=\"configuration.isMultiSelection\" class=\"file-selection-input\">\n  <i class=\"fa fa-2x checked fa-check-square-o\" (click)=\"unSelectFile()\"></i>\n  <i class=\"fa fa-2x unchecked fa-square-o\" (click)=\"selectFile()\"></i>\n</div>\n<div class=\"rounded file-img\" [ngClass]=\"{'file-img-symbol': !file.isImage()}\"\n     [style.background-image]=\"'url(' + file.thumbnailUrl + ')'\"></div>\n<span class=\"file-name\">{{file.name}}</span>\n<div class=\"file-menu\">\n  <div class=\"btn-group btn-group-sm\">\n    <!-- Add message: [message]=\"getRemoveMessage(file)\" -->\n    <button mwlConfirmationPopover [title]=\"removeTitle\" [appendToBody]=\"true\"\n            [confirmText]=\"'Yes'\" [cancelText]=\"'No'\" placement=\"bottom\" (confirm)=\"deleteFile($event, file)\"\n            class=\"btn btn-sm btn-danger btn-icon\">\n      <i class=\"fa fa-trash\"></i>\n    </button>\n    <button (click)=\"openPreview($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-search\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"openCrop($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-crop\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"chooseFile($event, file)\" class=\"btn btn-sm btn-primary btn-icon\">\n      <i class=\"fa fa-image\"></i>\n    </button>\n  </div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        FileComponent.ctorParameters = function () {
            return [
                { type: FileManagerConfiguration },
                { type: store.Store }
            ];
        };
        FileComponent.propDecorators = {
            file: [{ type: core.Input }],
            onPreviewFile: [{ type: core.Output }],
            onCropFile: [{ type: core.Output }],
            onSelectFile: [{ type: core.Output }]
        };
        return FileComponent;
    }());

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
            { type: core.Injectable }
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
        function FileManagerDispatcherService(store$$1, fileManagerActions) {
            this.store = store$$1;
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FileManagerDispatcherService.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: FileManagerActionsService }
            ];
        };
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
    var /**
     * @abstract
     */ AbstractFileManagerApiService = /** @class */ (function () {
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
             */ function () {
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
                if (nodeId === void 0) {
                    nodeId = '';
                }
                if (!this.nodes) {
                    this.nodes = this.getAllDataFromLocalStorage();
                }
                /** @type {?} */
                var nodes = this.getChildren(nodeId);
                return rxjs.of(nodes);
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
                if (parentNodeId === void 0) {
                    parentNodeId = null;
                }
                node.parentId = parentNodeId;
                node.id = angular2Uuid.UUID.UUID();
                this.nodes.push(node);
                if (this.saveNodes()) {
                    return rxjs.of(node);
                }
                else {
                    return rxjs.empty();
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
                    return rxjs.of(this.nodes[index]);
                }
                else {
                    return rxjs.empty();
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
                    return rxjs.of(node);
                }
                else {
                    return rxjs.empty();
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
                    return rxjs.of(node);
                }
                else {
                    return rxjs.throwError('Node is not empty');
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
                return rxjs.throwError('This functionality is not available with LocalStorage');
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
                if (nodeId === void 0) {
                    nodeId = '';
                }
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
                return rxjs.of(newFiles);
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
                    return rxjs.of(false);
                }
                this.files.splice(index, 1);
                this.saveFiles();
                return rxjs.of(true);
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
                return rxjs.of((this.files.length + selectedFiles.length === numberOfFiles));
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
                    return rxjs.of(this.convertLocalData2IOuterFile(fileData));
                }
                else {
                    return rxjs.Observable.throw('Upload error');
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
                if (node === void 0) {
                    node = null;
                }
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
                            return rxjs.Observable.throw(errorMsg);
                        }
                    }
                    file.folderId = folderId;
                });
                if (this.saveFiles()) {
                    return rxjs.of(movedFiles.map(function (file) { return _this.convertLocalData2IOuterFile(file); }));
                }
                else {
                    return rxjs.Observable.throw('Move files error');
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FileManagerApiService.ctorParameters = function () {
            return [
                { type: FilemanagerNotifcations }
            ];
        };
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
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_LOAD_FILES), operators.switchMap(function (action) {
                return _this.loadFiles(action.payload.folderId)
                    .pipe(operators.map(function (files) {
                    return new LoadFilesSuccessAction({ files: files });
                }), operators.catchError(function (e) {
                    return rxjs.of(_this.onLoadFilesError(action.payload.folderId));
                }));
            }));
            this.cropFile$ = this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE), operators.switchMap(function (action) {
                return _this.cropFile(action.payload.file, action.payload.bounds)
                    .pipe(operators.map(function (result) {
                    _this.filemanagerNotfication.sendNotification({
                        type: 'success',
                        title: 'Crop Image.',
                        message: 'Image has been cropped.'
                    });
                    return new CropFileSuccessAction({ file: action.payload.file });
                }), operators.catchError(function () { return rxjs.of(new CropFileErrorAction({ file: action.payload.file })); }));
            }));
            this.deleteFile$ = this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE), operators.switchMap(function (action) {
                return _this.deleteFile(action.payload.file)
                    .pipe(operators.map(function (result) {
                    return new DeleteFileSuccessAction({ file: action.payload.file });
                }), operators.catchError(function () { return rxjs.of(_this.onDeleteFileError(action.payload.file)); }));
            }));
            this.deleteFilesSelection$ = this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION), operators.switchMap(function (action) {
                return _this.deleteFilesSelection(action.payload.fileIds)
                    .pipe(operators.map(function (result) {
                    return new DeleteSelectedFilesSuccessAction({ files: action.payload.fileIds });
                }), operators.catchError(function () { return rxjs.of(_this.onDeleteFilesSelectionError(action.payload.files)); }));
            }));
            this.uploadFile$ = this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE), operators.switchMap(function (action) {
                return _this.uploadFile(action.payload.files[0])
                    .pipe(operators.map(function (result) {
                    return new UploadFilesSuccessAction({ files: [result] });
                }), operators.catchError(function () {
                    return rxjs.empty();
                }));
            }));
            this.moveFile$ = this.actions$
                .pipe(effects.ofType(angular2Tree.TreeActionTypes.TREE_MOVE_NODE), operators.filter(function (action) {
                return action.payload.sourceOfDroppedData === 'FILE';
            }), operators.switchMap(function (action) {
                return _this.moveFiles([( /** @type {?} */(action.payload.oldNode))], action.payload.node)
                    .pipe(operators.map(function (result) {
                    /** @type {?} */
                    var folderId = (( /** @type {?} */(action.payload.oldNode))).folderId;
                    return new MoveFilesSuccessAction({ files: result, folderId: folderId });
                }), operators.catchError(function () {
                    return rxjs.of(new MoveFilesErrorAction({ files: [( /** @type {?} */(action.payload.oldNode))] }));
                }));
            }));
            this.filesMoveSuccess$ = this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS), operators.map(function (action) {
                _this.onMoveFilesSuccess();
                return new LoadFilesAction({ folderId: action.payload.folderId });
            }));
            this.uploadError$ = this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR), operators.map(function (action) {
                _this.filemanagerNotfication.sendNotification({
                    type: 'alert',
                    title: 'File upload',
                    message: action.payload.files[0].name + " exists on the server in this directory"
                });
            }));
            this.cropFileSuccess$ = this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS));
            this.deleteFileSuccess$ = this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS));
            this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR))
                .subscribe(function (action) {
                _this.onCropFileError(action.payload.file);
            });
            this.actions$
                .pipe(effects.ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR))
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
                if (folder === void 0) {
                    folder = null;
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FileManagerEffectsService.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: FileManagerActionsService },
                { type: FilemanagerNotifcations },
                { type: FileManagerApiService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FileManagerEffectsService.prototype, "loadFiles$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FileManagerEffectsService.prototype, "cropFile$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FileManagerEffectsService.prototype, "deleteFile$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FileManagerEffectsService.prototype, "deleteFilesSelection$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FileManagerEffectsService.prototype, "uploadFile$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FileManagerEffectsService.prototype, "moveFile$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FileManagerEffectsService.prototype, "filesMoveSuccess$", void 0);
        return FileManagerEffectsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FilesListComponent = /** @class */ (function () {
        function FilesListComponent(configuration, store$$1, fileManagerDispatcher, notifications, fileManagerEffects) {
            this.configuration = configuration;
            this.store = store$$1;
            this.fileManagerDispatcher = fileManagerDispatcher;
            this.onPreviewFile = new core.EventEmitter();
            this.onCropFile = new core.EventEmitter();
            this.onSelectFile = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ri-files-list',
                        template: "<div class=\"files-list\">\n  <div class=\"file\" *ngFor=\"let file of files\" [ngClass]=\"{'selected': isSelected(file)}\"  riDraggable [data]=\"file.toJSON()\" [sourceType]=\"'FILE'\" [dragZone]=\"dragZone\">\n    <ri-file-component [file]=\"file\" (onPreviewFile)=\"openPreview($event)\" (onCropFile)=\"openCrop($event)\"></ri-file-component>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".files-list .file{display:inline-block;position:relative;cursor:pointer;text-align:center;width:140px;height:110px;padding:5px;border:1px solid #ccc;background-color:#eee;border-radius:10px;margin:0 0 20px 20px}.files-list .file .file-img{width:128px;height:98px;background-size:cover;background-repeat:no-repeat}.files-list .file .file-img.file-img-symbol{background-size:contain;background-position-x:50%}.files-list .file .file-name{display:none;position:absolute;bottom:0;left:0;right:0;text-align:center;background-color:rgba(238,238,238,.5)}.files-list .file .file-menu{display:none;position:absolute;top:30%;left:0;right:0;text-align:center}.files-list .file .file-selection-input{display:none;position:absolute;top:3px;left:3px;cursor:pointer;z-index:10}.files-list .file .file-selection-input .checked{display:none}.files-list .file .file-selection-input .unchecked{display:block}.files-list .file:hover .file-img{opacity:.3}.files-list .file:hover .file-menu,.files-list .file:hover .file-name,.files-list .file:hover .file-selection-input{display:block}.files-list .file.selected{border-color:#fff33a;background-color:rgba(255,243,58,.5)}.files-list .file.selected .file-name{background-color:rgba(255,243,58,.5)}.files-list .file.selected .file-menu,.files-list .file.selected .file-selection-input{display:none}.files-list .file.selected .file-selection-input .checked{display:block}.files-list .file.selected .file-selection-input .unchecked{display:none}.files-list .file.selected:hover .file-selection-input{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        FilesListComponent.ctorParameters = function () {
            return [
                { type: FileManagerConfiguration },
                { type: store.Store },
                { type: FileManagerDispatcherService },
                { type: angular2Notifications.NotificationsService },
                { type: FileManagerEffectsService }
            ];
        };
        FilesListComponent.propDecorators = {
            files: [{ type: core.Input }],
            selectedFiles: [{ type: core.Input }],
            onPreviewFile: [{ type: core.Output }],
            onCropFile: [{ type: core.Output }],
            onSelectFile: [{ type: core.Output }]
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
            { type: core.Component, args: [{
                        selector: 'ri-file-preview',
                        template: "<div class=\"filemanager-preview\">\n  <div class=\"carousel slide\">\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item\" *ngFor=\"let file of files; let i = index;\" [ngClass]=\"{'active': i == currentIndex}\">\n        <img src=\"{{file.url}}\" alt=\"{{file.name}}\" style=\"margin: 0 auto; display: block;\">\n        <div class=\"carousel-caption\">{{file.name}}</div>\n      </div>\n    </div>\n    <a class=\"left carousel-control-prev\" role=\"button\" (click)=\"prev()\" *ngIf=\"currentIndex != 0\">\n      <span class=\"fa fa-3x fa-chevron-left\" aria-hidden=\"true\"></span>\n    </a>\n    <a class=\"right carousel-control-next\" role=\"button\" (click)=\"next()\" *ngIf=\"currentIndex + 1 < length\">\n      <span class=\"fa fa-3x fa-chevron-right\" aria-hidden=\"true\"></span>\n    </a>\n  </div>\n</div>\n"
                    }] }
        ];
        PreviewComponent.propDecorators = {
            files: [{ type: core.Input }],
            file: [{ type: core.Input }],
            keyEvent: [{ type: core.HostListener, args: ['window:keydown', ['$event'],] }]
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
            this.filter$ = new rxjs.BehaviorSubject('');
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
            { type: core.Injectable }
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
            this.filter$ = new rxjs.BehaviorSubject(null);
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
            { type: core.Injectable }
        ];
        return FileTypeFilterService;
    }());

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
             */ function () {
                return this._name;
            },
            set: /**
             * @param {?} name
             * @return {?}
             */ function (name) {
                this._name = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileModel.prototype, "thumbnailUrl", {
            get: /**
             * @return {?}
             */ function () {
                return this.isImage() ? this._orgData.thumbnailUrl : "" + FileModel.smallIconsFolder + this.getFileExt() + ".png";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileModel.prototype, "url", {
            get: /**
             * @return {?}
             */ function () {
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
        state.entities[id] = ( /** @type {?} */(__assign({}, file.toJSON())));
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
        if (state === void 0) {
            state = {
                entities: {},
                files: [],
                selectedFiles: []
            };
        }
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
    var filemanagerStateSelector = store.createFeatureSelector('files');
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
        function CurrentDirectoryFilesService(store$$1, fileTypeFilter, searchFilterService) {
            this.store = store$$1;
            this.fileTypeFilter = fileTypeFilter;
            this.searchFilterService = searchFilterService;
            /** @type {?} */
            var store$ = this.store.select(filemanagerStateSelector);
            /** @type {?} */
            var observable$ = store$;
            this.entities$ = observable$
                .pipe(operators.map(function (state) { return state.entities; }), operators.distinctUntilChanged());
            this.currentDirectoryFileIds$ = observable$
                .pipe(operators.map(function (state) { return state.files; }), operators.distinctUntilChanged());
            this.selectedFiles$ = store$
                .pipe(operators.map(function (state) { return state.selectedFiles; }));
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
                    .pipe(operators.withLatestFrom(this.entities$), operators.map(function (ar) {
                    return {
                        entities: ar[1],
                        files: ar[0]
                    };
                }), operators.map(function (state) {
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
                return rxjs.combineLatest(this.files$, this.fileTypeFilter.filter$, this.searchFilterService.filter$)
                    .pipe(operators.map(function (data) {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CurrentDirectoryFilesService.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: FileTypeFilterService },
                { type: SearchFilterService }
            ];
        };
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
             */ function () {
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
                if (nodeId === void 0) {
                    nodeId = '';
                }
                /** @type {?} */
                var nodeIds = this.nodes.map(function (node) { return node.id; });
                /** @type {?} */
                var params = new http.HttpParams().set('nodeId', nodeId || '');
                return this.$http.get(this.configuration.folderUrls.foldersUrl, { params: params })
                    .pipe(operators.map(function (nodes) {
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
                if (parentNodeId === void 0) {
                    parentNodeId = null;
                }
                /** @type {?} */
                var data = {
                    node: node,
                    parentNodeId: parentNodeId
                };
                return this.$http.post(this.configuration.folderUrls.foldersUrl, data)
                    .pipe(operators.map(function (newNode) {
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
                    .pipe(operators.map(function (movedNode) {
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
                    .pipe(operators.map(function (newNode) {
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
                    var params = new http.HttpParams().set('nodeId', nodeId);
                    return this.$http.delete(this.configuration.folderUrls.foldersUrl, { params: params })
                        .pipe(operators.map(function (removedNode) {
                        _this.nodes.splice(index, 1);
                        return removedNode;
                    }));
                }
                else {
                    return rxjs.Observable.throw('Node is not empty');
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
                if (nodeId === void 0) {
                    nodeId = '';
                }
                this.currentNodeId = nodeId;
                /** @type {?} */
                var params = new http.HttpParams().set('dirId', nodeId);
                return this.$http.get(this.configuration.fileUrl, { params: params })
                    .pipe(operators.map(function (files) {
                    _this.files = files.map(function (file) { return ( /** @type {?} */(file)); });
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
                    return rxjs.of(false);
                }
                /** @type {?} */
                var params = new http.HttpParams().set('id', file.id.toString());
                return this.$http.delete(this.configuration.fileUrl, { params: params })
                    .pipe(operators.map(function () {
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
                var params = new http.HttpParams().set('id', selectedFiles.join('|'));
                return this.$http.delete(this.configuration.fileUrl, { params: params })
                    .pipe(operators.map(function () {
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
                var fileData = ( /** @type {?} */(file));
                this.files.push(fileData);
                return rxjs.of(file);
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FileManagerBackendApiService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: FileManagerConfiguration }
            ];
        };
        return FileManagerBackendApiService;
    }(AbstractFileManagerApiService));

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
            { type: core.Component, args: [{
                        selector: 'ri-file-type-filter',
                        template: "<div class=\"btn-group\">\n  <button *ngFor=\"let type of typeFilterList\" class=\"btn btn-secondary\" [ngClass]=\"{'active': type === selectedType}\"\n          (click)=\"setFilterType(type)\">\n    <i class=\"{{type.iconCls}}\"></i>\n  </button>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        FileTypeFilterComponent.ctorParameters = function () {
            return [
                { type: FileTypeFilterService }
            ];
        };
        FileTypeFilterComponent.propDecorators = {
            typeFilterList: [{ type: core.Input }]
        };
        return FileTypeFilterComponent;
    }());

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
            if (value === void 0) {
                value = null;
            }
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
            this.searchField = new forms.FormControl();
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
                    .pipe(operators.debounceTime(250))
                    .subscribe(function (value) { return _this.searchFilterService.setValue(value); });
            };
        SearchFileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ri-search-file',
                        template: "<div class=\"input-group\">\n  <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'RI_FM_LBL_SEARCH_FOR' | translate}}\">\n  <span class=\"input-group-append\">\n      <button (click)=\"searchField.reset('')\" class=\"btn btn-secondary\" type=\"button\">\n          <i class=\"fa fa-times\"></i>\n      </button>\n  </span>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        SearchFileComponent.ctorParameters = function () {
            return [
                { type: SearchFilterService }
            ];
        };
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
     */ AbstractButtonClass = /** @class */ (function () {
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
            this.onMenuButtonClick = new core.EventEmitter();
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
                this.onLoadFilesSubscriber = rxjs.combineLatest(this.currentDirectoryFilesService.currentDirectoryFileIds$, this.currentDirectoryFilesService.selectedFiles$)
                    .pipe(operators.distinctUntilChanged())
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
            { type: core.Component, args: [{
                        selector: 'ri-selection-dropdown',
                        template: "<ri-dropdown *ngIf=\"configuration.isMultiSelection\" [mainButton]=\"selectAllButton\" [buttons]=\"selectButtonsList\"\n             (onClick)=\"onSelectDropdownClick($event)\"></ri-dropdown>\n"
                    }] }
        ];
        /** @nocollapse */
        SelectionComponent.ctorParameters = function () {
            return [
                { type: FileManagerConfiguration },
                { type: CurrentDirectoryFilesService }
            ];
        };
        SelectionComponent.propDecorators = {
            onMenuButtonClick: [{ type: core.Output }]
        };
        return SelectionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToolbarComponent = /** @class */ (function () {
        function ToolbarComponent(configuration, fileManagerUploader, store$$1) {
            var _this = this;
            this.configuration = configuration;
            this.fileManagerUploader = fileManagerUploader;
            this.store = store$$1;
            this.onAddFolderClick = new core.EventEmitter();
            this.onUpload = new core.EventEmitter();
            this.onMenuButtonClick = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ri-toolbar',
                        template: "<div class=\"toolbar row\">\n  <div class=\"col-md-6\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-secondary\" (click)=\"addFolder()\">\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-folder-o\"></i>\n      </button>\n      <span class=\"hidden-input-file\">\n        <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"fileManagerUploader.uploader\" multiple/>\n      </span>\n      <button class=\"btn btn-secondary\" (click)=\"fileInput.click()\">\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-file-o\"></i>\n      </button>\n    </div>\n    <ri-selection-dropdown (onMenuButtonClick)=\"onMenuButtonClick.next($event)\"></ri-selection-dropdown>\n    <div class=\"btn-group\">\n      <button class=\"btn btn-secondary\" (click)=\"onRefreshFilesList()\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <ri-file-type-filter [typeFilterList]=\"configuration.fileTypesFilter\"></ri-file-type-filter>\n  </div>\n  <div class=\"col-md-3\">\n    <ri-search-file></ri-search-file>\n  </div>\n</div>\n",
                        styles: [".toolbar{margin-bottom:10px}.btn{height:34px}.btn-file{position:relative;overflow:hidden}.hidden-input-file{visibility:hidden;position:absolute;overflow:hidden;width:0;height:0;border:none;margin:0;padding:0}.btn-group,ri-selection-dropdown{padding:0 2px 0 0}"]
                    }] }
        ];
        /** @nocollapse */
        ToolbarComponent.ctorParameters = function () {
            return [
                { type: FileManagerConfiguration },
                { type: FileManagerUploader },
                { type: store.Store }
            ];
        };
        ToolbarComponent.propDecorators = {
            currentFolderId: [{ type: core.Input }],
            onAddFolderClick: [{ type: core.Output }],
            onUpload: [{ type: core.Output }],
            onMenuButtonClick: [{ type: core.Output }]
        };
        return ToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FileManagerComponent = /** @class */ (function () {
        function FileManagerComponent(store$$1, nodeDispatcherService, treeService, notifications, configuration, fileManagerEffects, filemanagerNotifcations, currentDirectoryFilesService, treeInitializerService) {
            var _this = this;
            this.store = store$$1;
            this.nodeDispatcherService = nodeDispatcherService;
            this.treeService = treeService;
            this.notifications = notifications;
            this.configuration = configuration;
            this.fileManagerEffects = fileManagerEffects;
            this.filemanagerNotifcations = filemanagerNotifcations;
            this.currentDirectoryFilesService = currentDirectoryFilesService;
            this.treeInitializerService = treeInitializerService;
            this.onSingleFileSelect = new core.EventEmitter();
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
            this.subscription = new rxjs.Subscription();
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
            this.subscription.add(rxjs.combineLatest(this.currentDirectoryFilesService.selectedFiles$, this.currentDirectoryFilesService.entities$)
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'ri-filemanager',
                        providers: [angular2Tree.NodeService, angular2Notifications.NotificationsService],
                        template: "<div class=\"filemanager-container\">\n  <div class=\"fm-header\">\n    <ri-toolbar\n      #toolbar\n      [currentFolderId]=\"currentSelectedFolderId\"\n      (onAddFolderClick)=\"onAddFolder()\"\n      (onUpload)=\"onUpload($event)\"\n      (onMenuButtonClick)=\"onMenuButtonClick($event)\"\n    ></ri-toolbar>\n  </div>\n  <div class=\"fm-main-box\">\n    <div class=\"folders-box\">\n      <ri-tree [treeModel]=\"treeModel\"></ri-tree>\n    </div>\n    <div class=\"files-box\">\n      <ri-tree-parents-list [treeModel]=\"treeModel\"></ri-tree-parents-list>\n      <ri-files-list [files]=\"filteredFiles$ | async\"\n                     [selectedFiles]=\"selectedFiles$ | async\"\n                     (onPreviewFile)=\"onPreviewFile($event)\"\n                     (onCropFile)=\"onOpenCropFileEditor($event)\"\n                     (onSelectFile)=\"onSelectFile($event)\"\n      ></ri-files-list>\n    </div>\n  </div>\n  <div *ngIf=\"isPreviewMode || isCropMode\" class=\"backdrop\">\n    <div class=\"modal-view\">\n      <div class=\"modal-close\">\n        <i class=\"fa fa-2x fa-times\" (click)=\"closeModal()\"></i>\n      </div>\n      <ri-file-preview *ngIf=\"isPreviewMode\" [files]=\"filteredFiles$ | async\"\n                       [file]=\"currentSelectedFile\"></ri-file-preview>\n      <crop-image *ngIf=\"isCropMode\" [file]=\"currentSelectedFile\"></crop-image>\n    </div>\n  </div>\n  <simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n</div>\n",
                        styles: [".filemanager-container{width:990px;height:700px}.filemanager-container .tree .dropdown{position:relative}.filemanager-container .tree .dropdown-menu{position:fixed!important}.fm-main-box{position:relative;height:100%}.fm-main-box .folders-box{display:block;position:absolute;top:0;bottom:0;width:300px;overflow:hidden;overflow-y:auto}.fm-main-box .files-box{display:block;position:absolute;left:300px;top:0;bottom:0;overflow:hidden;overflow-y:auto}.fm-main-box .files-box ri-tree-parents-list{margin:0 0 10px 20px;display:block}.backdrop{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:1000}.modal-view{margin:50px auto;max-width:600px}.modal-view .modal-close{text-align:right;margin:5px 0;color:#fff}.modal-view .modal-close .fa{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        FileManagerComponent.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: angular2Tree.NodeDispatcherService },
                { type: FileManagerApiService },
                { type: angular2Notifications.NotificationsService },
                { type: FileManagerConfiguration },
                { type: FileManagerEffectsService },
                { type: FilemanagerNotifcations },
                { type: CurrentDirectoryFilesService },
                { type: angular2Tree.TreeInitializerService }
            ];
        };
        FileManagerComponent.propDecorators = {
            onSingleFileSelect: [{ type: core.Output }],
            treeComponent: [{ type: core.ViewChild, args: [angular2Tree.TreeComponent,] }],
            filesList: [{ type: core.ViewChild, args: [FilesListComponent,] }],
            keyEvents: [{ type: core.HostListener, args: ['window:keydown', ['$event'],] }]
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
                if (apiProvider === void 0) {
                    apiProvider = null;
                }
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
                        angular2Notifications.NotificationsService,
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
                if (apiProvider === void 0) {
                    apiProvider = null;
                }
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
                        angular2Notifications.NotificationsService,
                        SearchFilterService,
                        TreeService,
                        { provide: 'fileManagerConfiguration', useValue: config },
                        apiProvider ? apiProvider : FileManagerApiService
                    ]
                };
            };
        FileManagerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            angularConfirmationPopover.ConfirmationPopoverModule,
                            effects.EffectsModule.forFeature([FileManagerEffectsService]),
                            forms.FormsModule,
                            ng2FileUpload.FileUploadModule,
                            http.HttpClientModule,
                            ng2ImgCropper.ImageCropperModule,
                            forms.ReactiveFormsModule,
                            angular2Notifications.SimpleNotificationsModule,
                            store.StoreModule.forFeature('files', fileManagerReducer),
                            core$1.TranslateModule,
                            angular2Tree.TreeModule
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
                            ng2ImgCropper.ImageCropperComponent
                        ],
                        exports: [FileManagerComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
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

    exports.FileManagerConfiguration = FileManagerConfiguration;
    exports.IUrlConfiguration = IUrlConfiguration;
    exports.TreeService = TreeService;
    exports.CropComponent = CropComponent;
    exports.DropdownComponent = DropdownComponent;
    exports.FileManagerUploader = FileManagerUploader;
    exports.FileComponent = FileComponent;
    exports.FilesListComponent = FilesListComponent;
    exports.PreviewComponent = PreviewComponent;
    exports.CurrentDirectoryFilesService = CurrentDirectoryFilesService;
    exports.ExtendedFileUploader = ExtendedFileUploader;
    exports.FilemanagerNotifcations = FilemanagerNotifcations;
    exports.FileTypeFilterService = FileTypeFilterService;
    exports.ImageDataConverter = ImageDataConverter;
    exports.SearchFilterService = SearchFilterService;
    exports.FileManagerActionTypes = FileManagerActionTypes;
    exports.ChooseFilesAction = ChooseFilesAction;
    exports.CropFileAction = CropFileAction;
    exports.CropFileErrorAction = CropFileErrorAction;
    exports.CropFileSuccessAction = CropFileSuccessAction;
    exports.DeleteFileAction = DeleteFileAction;
    exports.DeleteFileSuccessAction = DeleteFileSuccessAction;
    exports.DeleteSelectedFilesAction = DeleteSelectedFilesAction;
    exports.DeleteSelectedFilesSuccessAction = DeleteSelectedFilesSuccessAction;
    exports.InverseFilesSelectionAction = InverseFilesSelectionAction;
    exports.LoadFilesAction = LoadFilesAction;
    exports.LoadFilesSuccessAction = LoadFilesSuccessAction;
    exports.MoveFilesErrorAction = MoveFilesErrorAction;
    exports.MoveFilesSuccessAction = MoveFilesSuccessAction;
    exports.SelectAllFilesAction = SelectAllFilesAction;
    exports.SelectFileAction = SelectFileAction;
    exports.UnSelectAllFilesAction = UnSelectAllFilesAction;
    exports.UnSelectFileAction = UnSelectFileAction;
    exports.UploadFilesAction = UploadFilesAction;
    exports.UploadFilesErrorAction = UploadFilesErrorAction;
    exports.UploadFilesSuccessAction = UploadFilesSuccessAction;
    exports.fileManagerReducer = fileManagerReducer;
    exports.filemanagerStateSelector = filemanagerStateSelector;
    exports.getAll = getAll;
    exports.isChangeStateFiles = isChangeStateFiles;
    exports.isChangeStateSelectedFiles = isChangeStateSelectedFiles;
    exports.FileManagerDispatcherService = FileManagerDispatcherService;
    exports.FileManagerActionsService = FileManagerActionsService;
    exports.FileManagerApiService = FileManagerApiService;
    exports.FILEMANAGER_TREE_NAME = FILEMANAGER_TREE_NAME;
    exports.AbstractFileManagerApiService = AbstractFileManagerApiService;
    exports.FileManagerBackendApiService = FileManagerBackendApiService;
    exports.FileManagerEffectsService = FileManagerEffectsService;
    exports.FileTypeFilterComponent = FileTypeFilterComponent;
    exports.IUploadItemEvent = IUploadItemEvent;
    exports.Button = Button;
    exports.ToolbarEventModel = ToolbarEventModel;
    exports.SearchFileComponent = SearchFileComponent;
    exports.SelectionComponent = SelectionComponent;
    exports.ToolbarComponent = ToolbarComponent;
    exports.FileManagerComponent = FileManagerComponent;
    exports.FileManagerModule = FileManagerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnbi1hbmd1bGFyMi1maWxlbWFuYWdlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvY29uZmlndXJhdGlvbi9JVXJsQ29uZmlndXJhdGlvbi50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9jb25maWd1cmF0aW9uL3RyZWUuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24udHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9jcm9wL2Nyb3AuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvaW1hZ2VEYXRhQ29udmVydGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zZXJ2aWNlcy9leHRlbmRlZEZpbGVVcGxhb2Rlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9maWxlc0xpc3QvZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZXNMaXN0L2ZpbGUvZmlsZS5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zdG9yZS9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGUtbWFuYWdlci1kaXNwYXRjaGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zdG9yZS9maWxlTWFuYWdlckFwaUFic3RyYWN0LmNsYXNzLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc3RvcmUvZmlsZU1hbmFnZXJBcGkuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZXNMaXN0L2ZpbGVzTGlzdC5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvc2VhcmNoRmlsdGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zZXJ2aWNlcy9maWxlVHlwZUZpbHRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZXNMaXN0L2ZpbGUubW9kZWwudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlci50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3NlcnZpY2VzL2N1cnJlbnREaXJlY3RvcnlGaWxlcy5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc3RvcmUvZmlsZU1hbmFnZXJCYWNrZW5kQXBpLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi90b29sYmFyL2ZpbGVUeXBlRmlsdGVyL2ZpbGVUeXBlRmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3Rvb2xiYXIvaW50ZXJmYWNlL0lVcGxvYWRJdGVtRXZlbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi90b29sYmFyL21vZGVscy9idXR0b24ubW9kZWwudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi90b29sYmFyL21vZGVscy90b29sYmFyRXZlbnQubW9kZWwudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi90b29sYmFyL3NlYXJjaEZpbGUvc2VhcmNoRmlsZS5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9kcm9wZG93bi9BYnN0cmFjdEJ1dHRvbi5jbGFzcy50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL2Ryb3Bkb3duL0J1dHRvbi5jbGFzcy50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL2Ryb3Bkb3duL0J1dHRvbkRpdmlkZXIuY2xhc3MudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi90b29sYmFyL3NlbGVjdGlvbkRyb3BEb3duL3NlbGVjdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZW1hbmFnZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZW1hbmFnZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUNvbnRleHRNZW51fSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUZpbGVUeXBlRmlsdGVyfSBmcm9tICcuLi90b29sYmFyL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuaW1wb3J0IHtJQ3JvcFNpemV9IGZyb20gJy4uL2Nyb3AvSUNyb3BTaXplJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9JRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbiB7XG5cbiAgcHVibGljIGFsbG93ZWRDcm9wU2l6ZTogSUNyb3BTaXplW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1JJX0ZNX0JUTl9MQU5EU0NBUEUnLFxuICAgICAgd2lkdGg6IDMwMCxcbiAgICAgIGhlaWdodDogMTAwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUklfRk1fQlROX1BPUlRSQUlUJyxcbiAgICAgIHdpZHRoOiAyMDAsXG4gICAgICBoZWlnaHQ6IDMwMFxuICAgIH1cbiAgXTtcblxuICBwdWJsaWMgY29udGV4dE1lbnVJdGVtczogSUNvbnRleHRNZW51W10gPSBbXTtcblxuICBwdWJsaWMgZmlsZVR5cGVzRmlsdGVyOiBJRmlsZVR5cGVGaWx0ZXJbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQUxMJyxcbiAgICAgIG1pbWVzOiBbXSxcbiAgICAgIGljb25DbHM6ICdmYSBmYS1maWxlLW8nLFxuICAgICAgdGV4dDogJ0FsbCBmaWxlcycsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdJTUFHRVMnLFxuICAgICAgbWltZXM6IFsnaW1hZ2UvanBnJywgJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL2dpZicsICdpbWFnZS9wbmcnXSxcbiAgICAgIGljb25DbHM6ICdmYSBmYS1waWN0dXJlLW8nLFxuICAgICAgdGV4dDogJ0ltYWdlcydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBVURJTycsXG4gICAgICBtaW1lczogWydhdWRpby9tcGVnJywgJ2F1ZGlvL3gtbXMtd21hJywgJ2F1ZGlvL3ZuZC5ybi1yZWFsYXVkaW8nLCAnYXVkaW8veC13YXYnLCAnYXVkaW8vbXAzJ10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtZmlsZS1hdWRpby1vJyxcbiAgICAgIHRleHQ6ICdBdWRpbydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdWSURFTycsXG4gICAgICBtaW1lczogWyd2aWRlby9tcGVnJywgJ3ZpZGVvL21wNCcsICd2aWRlby9xdWlja3RpbWUnLCAndmlkZW8veC1tcy13bXYnXSxcbiAgICAgIGljb25DbHM6ICdmYSBmYS1maWxlLXZpZGVvLW8nLFxuICAgICAgdGV4dDogJ1ZpZGVvJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FSQ0hJVkUnLFxuICAgICAgbWltZXM6IFsnYXBwbGljYXRpb24vemlwJ10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtZmlsZS1hcmNoaXZlLW8nLFxuICAgICAgdGV4dDogJ0FyY2hpdmUnXG4gICAgfVxuICBdO1xuXG4gIHB1YmxpYyBmb2xkZXJVcmxzOiB7Zm9sZGVyc1VybDogc3RyaW5nLCBmb2xkZXJNb3ZlVXJsOiBzdHJpbmd9O1xuICBwdWJsaWMgZmlsZVVybCA9ICcvYXBpL2ZpbGVzJztcblxuICBwdWJsaWMgaXNNdWx0aVNlbGVjdGlvbjogYm9vbGVhbjtcblxuICBwdWJsaWMgbWF4RmlsZVNpemU6IG51bWJlcjtcblxuICBwdWJsaWMgbWltZVR5cGVzOiBzdHJpbmdbXSB8IG51bGw7XG5cbiAgcHVibGljIGFsbG93Q2hvb3NlTXVsdGlwbGVGaWxlczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdmaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24nKSBjb25maWd1cmF0aW9uOiBJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uKSB7XG4gICAgY29uc3Qge2ZvbGRlcnNVcmwsIGZvbGRlck1vdmVVcmx9ID0gY29uZmlndXJhdGlvbi51cmxzO1xuICAgIHRoaXMuZm9sZGVyVXJscyA9IHtmb2xkZXJzVXJsLCBmb2xkZXJNb3ZlVXJsfTtcbiAgICB0aGlzLmZpbGVVcmwgPSBjb25maWd1cmF0aW9uLnVybHMuZmlsZXNVcmw7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0aW9uID0gY29uZmlndXJhdGlvbi5pc011bHRpU2VsZWN0aW9uIHx8IGZhbHNlO1xuICAgIHRoaXMubWF4RmlsZVNpemUgPSBjb25maWd1cmF0aW9uLm1heEZpbGVTaXplIHx8IDA7XG4gICAgdGhpcy5taW1lVHlwZXMgPSBjb25maWd1cmF0aW9uLm1pbWVUeXBlcyB8fCBudWxsO1xuICAgIHRoaXMuYWxsb3dDaG9vc2VNdWx0aXBsZUZpbGVzID0gY29uZmlndXJhdGlvbi5hbGxvd0Nob29zZU11bHRpcGxlRmlsZXMgfHwgZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBJVXJsQ29uZmlndXJhdGlvbiB7XG4gIGZpbGVzVXJsOiBzdHJpbmcgfCBudWxsO1xuICBmb2xkZXJzVXJsOiBzdHJpbmc7XG4gIGZvbGRlck1vdmVVcmw6IHN0cmluZztcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOb2RlU2VydmljZX0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVTZXJ2aWNlIGV4dGVuZHMgTm9kZVNlcnZpY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbicpIGNvbmZpZ3VyYXRpb246IElGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24pIHtcbiAgICBzdXBlcihodHRwKTtcblxuICAgIHRoaXMuYXBpQ29uZmlnID0ge1xuICAgICAgYWRkVXJsOiBjb25maWd1cmF0aW9uLnVybHMuZm9sZGVyc1VybCxcbiAgICAgIGdldFVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlcnNVcmwsXG4gICAgICB1cGRhdGVVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJzVXJsLFxuICAgICAgcmVtb3ZlVXJsOiBjb25maWd1cmF0aW9uLnVybHMuZm9sZGVyc1VybCxcbiAgICAgIG1vdmVVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJNb3ZlVXJsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuXG5leHBvcnQgZW51bSBGaWxlTWFuYWdlckFjdGlvblR5cGVzIHtcbiAgQ0hPT1NFX0ZJTEVTID0gJ0ZJTEVNQU5BR0VSX0NIT09TRV9GSUxFUycsXG4gIENST1BfRklMRSA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEUnLFxuICBDUk9QX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUycsXG4gIENST1BfRklMRV9FUlJPUiA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1InLFxuICBERUxFVEVfRklMRSA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRScsXG4gIERFTEVURV9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU1VDQ0VTUycsXG4gIERFTEVURV9GSUxFX1NFTEVDVElPTiA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT04nLFxuICBERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUycsXG4gIElOVkVSU0VfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfSU5WRVJTRV9GSUxFX1NFTEVDVElPTicsXG4gIExPQURfRklMRVMgPSAnRklMRU1BTkFHRVJfTE9BRF9GSUxFUycsXG4gIExPQURfRklMRVNfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTX1NVQ0NFU1MnLFxuICBNT1ZFX0ZJTEVTX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTJyxcbiAgTU9WRV9GSUxFU19FUlJPUiA9ICdGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX0VSUk9SJyxcbiAgU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9TRUxFQ1RfQUxMJyxcbiAgU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUnLFxuICBVTlNFTEVDVF9GSUxFID0gJ0ZJTEVNQU5BR0VSX1VOU0VMRUNUX0ZJTEUnLFxuICBVTlNFTEVDVF9BTEwgPSAnRklMRU1BTkFHRVJfVU5TRUxFQ1RfQUxMJyxcbiAgVVBMT0FEX0ZJTEUgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUnLFxuICBVUExPQURfRklMRV9FUlJPUiA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9FUlJPUicsXG4gIFVQTE9BRF9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfU1VDQ0VTUycsXG59XG5cbmV4cG9ydCBjbGFzcyBDaG9vc2VGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNIT09TRV9GSUxFUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcEZpbGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWwsIGJvdW5kczogSUNyb3BCb3VuZHMgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyb3BGaWxlRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcEZpbGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuQ1JPUF9GSUxFX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlRmlsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkRFTEVURV9GSUxFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlOiBJRmlsZU1vZGVsfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEVfU0VMRUNUSU9OO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogc3RyaW5nW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlU2VsZWN0ZWRGaWxlc1N1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IHN0cmluZ1tdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLklOVkVSU0VfRklMRV9TRUxFQ1RJT047XG5cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVM7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZvbGRlcklkOiBzdHJpbmd9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVNfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlRmlsZXNFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGVzOiBJT3V0ZXJGaWxlW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUZpbGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZm9sZGVySWQ6IHN0cmluZywgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlNFTEVDVF9BTEw7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuU0VMRUNUX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVOU0VMRUNUX0FMTDtcbn1cblxuZXhwb3J0IGNsYXNzIFVuU2VsZWN0RmlsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVOU0VMRUNUX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVVBMT0FEX0ZJTEVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGVzOiBJT3V0ZXJGaWxlW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVVBMT0FEX0ZJTEVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEZpbGVNYW5hZ2VyQWN0aW9uID1cbiAgQ2hvb3NlRmlsZXNBY3Rpb25cbiAgfCBDcm9wRmlsZUFjdGlvblxuICB8IENyb3BGaWxlRXJyb3JBY3Rpb25cbiAgfCBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb25cbiAgfCBEZWxldGVGaWxlQWN0aW9uXG4gIHwgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb25cbiAgfCBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uXG4gIHwgRGVsZXRlU2VsZWN0ZWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb25cbiAgfCBMb2FkRmlsZXNBY3Rpb25cbiAgfCBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uXG4gIHwgTW92ZUZpbGVzRXJyb3JBY3Rpb25cbiAgfCBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uXG4gIHwgU2VsZWN0QWxsRmlsZXNBY3Rpb25cbiAgfCBTZWxlY3RGaWxlQWN0aW9uXG4gIHwgVW5TZWxlY3RBbGxGaWxlc0FjdGlvblxuICB8IFVuU2VsZWN0RmlsZUFjdGlvblxuICB8IFVwbG9hZEZpbGVzQWN0aW9uXG4gIHwgVXBsb2FkRmlsZXNFcnJvckFjdGlvblxuICB8IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvblxuO1xuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLCBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9maWxlLm1vZGVsJztcbmltcG9ydCB7Q3JvcHBlclNldHRpbmdzfSBmcm9tICduZzItaW1nLWNyb3BwZXIvc3JjL2Nyb3BwZXJTZXR0aW5ncyc7XG5pbXBvcnQge0lDcm9wU2l6ZX0gZnJvbSAnLi9JQ3JvcFNpemUnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtCb3VuZHN9IGZyb20gJ25nMi1pbWctY3JvcHBlci9zcmMvbW9kZWwvYm91bmRzJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4vSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJbWFnZUNyb3BwZXJDb21wb25lbnR9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0Nyb3BGaWxlQWN0aW9ufSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3JvcC1pbWFnZScsXG4gIHN0eWxlVXJsczogWycuL2Nyb3Auc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjcm9wLWltYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JvcC13b3JrYmVuY2hcIj5cbiAgICAgICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvb2xiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAqbmdGb3I9XCJsZXQgY3JvcFNpemUgb2YgY3JvcFNpemVMaXN0XCIgKGNsaWNrKT1cInVwZGF0ZUNyb3BTaXplKGNyb3BTaXplKVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IGNyb3BTaXplID09IGN1cnJlbnRDcm9wU2l6ZX1cIj57e2Nyb3BTaXplLm5hbWUgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4taWNvblwiIChjbGljayk9XCJjcm9wSW1hZ2UoKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuPnt7J1JJX0ZNX0JUTl9TQVZFJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ3JvcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsZTogRmlsZU1vZGVsO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25Dcm9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgcHVibGljIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCdjcm9wcGVyJylcbiAgcHVibGljIGNyb3BwZXI6IEltYWdlQ3JvcHBlckNvbXBvbmVudDtcblxuICBwcml2YXRlIGJvdW5kczogQm91bmRzO1xuXG4gIHB1YmxpYyBjcm9wU2l6ZUxpc3Q6IElDcm9wU2l6ZVtdO1xuICBwdWJsaWMgY3VycmVudENyb3BTaXplOiBJQ3JvcFNpemU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+KSB7XG4gICAgdGhpcy5jcm9wU2l6ZUxpc3QgPSBjb25maWd1cmF0aW9uLmFsbG93ZWRDcm9wU2l6ZTtcbiAgfVxuXG4gIHVwZGF0ZUNyb3BTaXplKGNyb3BTaXplOiBJQ3JvcFNpemUpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGNyb3BwZXJDb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEltYWdlQ3JvcHBlckNvbXBvbmVudCk7XG4gICAgY29uc3QgY3JvcHBlckNvbXBvbmVudFJlZiA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjcm9wcGVyQ29tcG9uZW50KTtcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lci5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5kZXRhY2goMCk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50Q3JvcFNpemUgPSBjcm9wU2l6ZTtcbiAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLnNldHRpbmdzID0gdGhpcy5nZXRDcm9wcGVyU2V0dGluZ3MoKTtcbiAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLmltYWdlID0ge307XG4gICAgY3JvcHBlckNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkNyb3BcbiAgICAgIC5zdWJzY3JpYmUoKGJvdW5kczogQm91bmRzKSA9PiB0aGlzLmJvdW5kcyA9IGJvdW5kcyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuZmlsZS51cmw7XG4gICAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLnNldEltYWdlKGltYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDcm9wU2l6ZSh0aGlzLmNyb3BTaXplTGlzdFswXSk7XG4gIH1cblxuICBwdWJsaWMgY3JvcEltYWdlKCkge1xuICAgIGNvbnN0IGJvdW5kczogSUNyb3BCb3VuZHMgPSB7XG4gICAgICB4OiB0aGlzLmJvdW5kcy5sZWZ0LFxuICAgICAgeTogdGhpcy5ib3VuZHMudG9wLFxuICAgICAgd2lkdGg6IHRoaXMuYm91bmRzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JvcEZpbGVBY3Rpb24oe2ZpbGU6IHRoaXMuZmlsZSwgYm91bmRzfSkpO1xuICB9XG5cblxuICBwcml2YXRlIGdldENyb3BwZXJTZXR0aW5ncygpOiBDcm9wcGVyU2V0dGluZ3Mge1xuICAgIGNvbnN0IGNyb3BwZXJTZXR0aW5ncyA9IG5ldyBDcm9wcGVyU2V0dGluZ3MoKTtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuY2FsY3VsYXRlU2NhbGUoKTtcbiAgICBjb25zdCB3aWR0aCA9IHNjYWxlICogdGhpcy5maWxlLmdldFdpZHRoKCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2NhbGUgKiB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjcm9wcGVyU2V0dGluZ3Mubm9GaWxlSW5wdXQgPSB0cnVlO1xuICAgIGNyb3BwZXJTZXR0aW5ncy53aWR0aCA9IHRoaXMuY3VycmVudENyb3BTaXplLndpZHRoO1xuICAgIGNyb3BwZXJTZXR0aW5ncy5oZWlnaHQgPSB0aGlzLmN1cnJlbnRDcm9wU2l6ZS5oZWlnaHQ7XG4gICAgY3JvcHBlclNldHRpbmdzLmNhbnZhc1dpZHRoID0gd2lkdGg7XG4gICAgY3JvcHBlclNldHRpbmdzLmNhbnZhc0hlaWdodCA9IGhlaWdodDtcblxuICAgIHJldHVybiBjcm9wcGVyU2V0dGluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBzY2FsZSBiZXR3ZWVuIGN1cnJlbnQgZmlsZSBkaW1lbnNpb25zIGFuZCBib3ggNjAweDYwMFxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTY2FsZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5maWxlLmdldFdpZHRoKCkgLyB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAoc2NhbGUgPiAxKSB7XG4gICAgICBpZiAodGhpcy5maWxlLmdldFdpZHRoKCkgPiA2MDApIHtcbiAgICAgICAgcmV0dXJuIDYwMCAvIHRoaXMuZmlsZS5nZXRXaWR0aCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5maWxlLmdldEhlaWdodCgpID4gNjAwKSB7XG4gICAgICAgIHJldHVybiA2MDAgLyB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQnV0dG9uRGF0YX0gZnJvbSAnLi9JQnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZHJvcGRvd24nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIG1haW5CdXR0b246IElCdXR0b25EYXRhO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBidXR0b25zOiBJQnV0dG9uRGF0YVtdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNwbGF5TWFpbkJ1dHRvbkxhYmVsOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgaXNPcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RCdXR0b24oYnV0dG9uOiBJQnV0dG9uRGF0YSk6IHZvaWQge1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIHRoaXMub25DbGljay5lbWl0KGJ1dHRvbik7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlT3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtVVUlEfSBmcm9tICdhbmd1bGFyMi11dWlkJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbmNhdE1hcCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2Zyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlRGF0YVByb3BlcnRpZXMge1xuICBpZDogc3RyaW5nIHwgbnVtYmVyO1xuICBmb2xkZXJJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgZGF0YTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEaW1lbnNpb25zIHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZURhdGFDb252ZXJ0ZXIge1xuICBwdWJsaWMgZ2V0UHJvcGVydGllcyhmaWxlOiBGaWxlLCBmb2xkZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJRmlsZURhdGFQcm9wZXJ0aWVzPiB7XG4gICAgY29uc3QgcHJvcGVydGllczogSUZpbGVEYXRhUHJvcGVydGllcyA9IHtcbiAgICAgIGlkOiBVVUlELlVVSUQoKSxcbiAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGRhdGE6ICcnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlYWRlciA9IHRoaXMuZ2V0QmFzZTY0RnJvbUZpbGUoZmlsZSk7XG5cbiAgICByZXR1cm4gcmVhZGVyXG4gICAgICAucGlwZShcbiAgICAgICAgY29uY2F0TWFwKChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBwcm9wZXJ0aWVzLmRhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMudHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZURpbWVuc2lvbnMoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZih7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoZGltZW5zaW9uczogSUltYWdlRGltZW5zaW9ucykgPT4ge1xuICAgICAgICAgIHByb3BlcnRpZXMud2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgICAgIHByb3BlcnRpZXMuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG9ic2VydmFibGUgd2hpY2ggcmV0dXJuIGltYWdlIGFzIGJhc2U2NCBkYXRhXG4gICAqL1xuICBwcml2YXRlIGdldEJhc2U2NEZyb21GaWxlKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cblxuICAgIHJldHVybiBmcm9tRXZlbnQocmVhZGVyLCAnbG9hZCcpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVhZGVyLnJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb2JzZXJ2YWJsZSB3aGljaCByZXR1cm4gZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0SW1hZ2VEaW1lbnNpb25zKGRhdGE6IHN0cmluZyk6IE9ic2VydmFibGU8SUltYWdlRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gZGF0YTtcbiAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgbG9hZEltYWdlID0gZnJvbUV2ZW50KGltYWdlLCAnbG9hZCcpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGltYWdlLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICByZXR1cm4gbG9hZEltYWdlO1xuICB9XG59XG4iLCJpbXBvcnQge0ZpbGVJdGVtLCBGaWxlVXBsb2FkZXIsIEZpbGVVcGxvYWRlck9wdGlvbnN9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXMsIEltYWdlRGF0YUNvbnZlcnRlcn0gZnJvbSAnLi9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLCBJTm90aWZpY2F0aW9ufSBmcm9tICcuL0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zJztcbmltcG9ydCB7RmlsZUxpa2VPYmplY3R9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9maWxlLXVwbG9hZC9maWxlLWxpa2Utb2JqZWN0LmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRmlsZVVwbG9hZGVyIGV4dGVuZHMgRmlsZVVwbG9hZGVyIHtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucywgcHJpdmF0ZSBmaWxlbWFuYWdlck5vdGlmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvbldoZW5BZGRpbmdGaWxlRmFpbGVkKGl0ZW06IEZpbGVMaWtlT2JqZWN0LCBmaWx0ZXI6IGFueSwgb3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucykge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHR5cGU6ICdhbGVydCcsXG4gICAgICB0aXRsZTogJ0FkZCBmaWxlIHRvIHF1ZXVlJyxcbiAgICAgIG1lc3NhZ2U6IGBGaWxlIG5vdCBhZGQgdG8gcXVldWVgXG4gICAgfTtcblxuICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gJ2ZpbGVTaXplJykge1xuICAgICAgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPSBgRmlsZSBzaXplIGlzIHRvbyBsYXJnZSAtIG1heCBzaXplICBpcyAke29wdGlvbnMubWF4RmlsZVNpemUgLyAxMDI0fSBLQmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGlmaWNhdGlvbi5tZXNzYWdlID0gYEZpbGUgbWltZSB0eXBlIFwiJHtpdGVtLnR5cGV9XCIgaXMgbm90IGFsbG93ZWRgO1xuICAgIH1cbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWRJdGVtKHZhbHVlOiBGaWxlSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXJsKSB7XG4gICAgICBzdXBlci51cGxvYWRJdGVtKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1hZ2VEYXRhQ29udmVydGVyID0gbmV3IEltYWdlRGF0YUNvbnZlcnRlcigpO1xuICAgICAgdGhpcy5fb25Qcm9ncmVzc0l0ZW0odmFsdWUsIDApO1xuXG4gICAgICBpZiAodGhpcy5pc1VwbG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm9wdGlvbnMuaGVhZGVycy5maW5kKChvYmplY3Q6IGFueSkgPT4gb2JqZWN0Lm5hbWUgPT09ICdmb2xkZXJJZCcpO1xuXG4gICAgICB0aGlzLl9vblByb2dyZXNzSXRlbSh2YWx1ZSwgNTApO1xuICAgICAgaW1hZ2VEYXRhQ29udmVydGVyLmdldFByb3BlcnRpZXModmFsdWUuX2ZpbGUsIGhlYWRlci52YWx1ZSlcbiAgICAgICAgLnN1YnNjcmliZSgoZmlsZTogSUZpbGVEYXRhUHJvcGVydGllcykgPT4ge1xuICAgICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuX29uUHJvZ3Jlc3NJdGVtKHZhbHVlLCAxMDApO1xuICAgICAgICAgIHRoaXMuX29uQ29tcGxldGVJdGVtKHZhbHVlLCBKU09OLnN0cmluZ2lmeShmaWxlKSwgMjAwLCB7fSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uIHtcbiAgdHlwZTogJ2FsZXJ0JyB8ICdlcnJvcicgfCAnc3VjY2Vzcyc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucyB7XG4gIHByaXZhdGUgbm90aWZpY2F0aW9uJCA9IG5ldyBTdWJqZWN0PElOb3RpZmljYXRpb24+KCk7XG5cbiAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb24kLm5leHQobm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROb3RpZmljYXRpb25TdHJlYW0oKTogU3ViamVjdDxJTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uJDtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFeHRlbmRlZEZpbGVVcGxvYWRlcn0gZnJvbSAnLi4vc2VydmljZXMvZXh0ZW5kZWRGaWxlVXBsYW9kZXIuc2VydmljZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zfSBmcm9tICcuLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge0ZpbGVVcGxvYWRlck9wdGlvbnN9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlclVwbG9hZGVyIHtcbiAgcHVibGljIHVwbG9hZGVyOiBFeHRlbmRlZEZpbGVVcGxvYWRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIGZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uOiBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucykge1xuICAgIGNvbnN0IG9wdGlvbnM6IEZpbGVVcGxvYWRlck9wdGlvbnMgPSB7XG4gICAgICBhbGxvd2VkTWltZVR5cGU6IGNvbmZpZ3VyYXRpb24ubWltZVR5cGVzLFxuICAgICAgdXJsOiBjb25maWd1cmF0aW9uLnVybHMuZmlsZXNVcmwsXG4gICAgICBtYXhGaWxlU2l6ZTogY29uZmlndXJhdGlvbi5tYXhGaWxlU2l6ZVxuICAgIH07XG5cbiAgICB0aGlzLnVwbG9hZGVyID0gbmV3IEV4dGVuZGVkRmlsZVVwbG9hZGVyKG9wdGlvbnMsIGZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLnVwbG9hZGVyLmF1dGhUb2tlbiA9IG51bGw7XG4gICAgdGhpcy51cGxvYWRlci5zZXRPcHRpb25zKHRoaXMuZ2V0RGVmYXVsdE9wdGlvbnMoKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICAgIG9wdGlvbnNbJ3JlbW92ZUFmdGVyVXBsb2FkJ10gPSB0cnVlO1xuICAgIG9wdGlvbnNbJ2F1dG9VcGxvYWQnXSA9IHRydWU7XG4gICAgb3B0aW9uc1snbWV0aG9kJ10gPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBzZXRBdXRob3JpemF0aW9uVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIHRoaXMudXBsb2FkZXIuYXV0aFRva2VuID0gdG9rZW47XG4gIH1cblxuICBwdWJsaWMgc2V0RGlyZWN0b3J5SWQoZGlyZWN0b3J5SWQ6IHN0cmluZyB8IG51bWJlcik6IEZpbGVNYW5hZ2VyVXBsb2FkZXIge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldERlZmF1bHRPcHRpb25zKCk7XG5cbiAgICBvcHRpb25zWydoZWFkZXJzJ10gPSBbe25hbWU6ICdmb2xkZXJJZCcsIHZhbHVlOiBkaXJlY3RvcnlJZC50b1N0cmluZygpfV07XG5cbiAgICB0aGlzLnVwbG9hZGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0lGaWxlRXZlbnR9IGZyb20gJy4uL2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyU3RhdGV9IGZyb20gJy4uLy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIENob29zZUZpbGVzQWN0aW9uLFxuICBEZWxldGVGaWxlQWN0aW9uLFxuICBTZWxlY3RGaWxlQWN0aW9uLFxuICBVblNlbGVjdEZpbGVBY3Rpb25cbn0gZnJvbSAnLi4vLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsZTogSUZpbGVNb2RlbDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uUHJldmlld0ZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkNyb3BGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25TZWxlY3RGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyByZW1vdmVUaXRsZSA9ICdSZW1vdmUgZmlsZSc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGNsaWNrZWQgb24gYnV0dG9uIFwiZGVsZXRlIGZpbGVcIlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoJGV2ZW50OiBNb3VzZUV2ZW50LCBmaWxlOiBJRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlRmlsZUFjdGlvbih7ZmlsZX0pKTtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZW1vdmVNZXNzYWdlKGZpbGU6IElGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gJ1lvdSBhcmUgdHJ5IHRvIGRlbGV0ZSA8Yj4nICsgZmlsZS5uYW1lICsgJzwvYj4uIEFyZSB5b3Ugc3VyZT8nO1xuICB9XG5cbiAgcHVibGljIG9wZW5QcmV2aWV3KCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGxldCBmaWxlRXZlbnQ6IElGaWxlRXZlbnQgPSB7XG4gICAgICBldmVudE5hbWU6ICdvblByZXZpZXdGaWxlJyxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZVxuICAgIH07XG4gICAgdGhpcy5vblByZXZpZXdGaWxlLmVtaXQoZmlsZUV2ZW50KTtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuQ3JvcCgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZmlsZUV2ZW50OiBJRmlsZUV2ZW50ID0ge1xuICAgICAgZXZlbnROYW1lOiAnb25Dcm9wRmlsZScsXG4gICAgICBmaWxlOiB0aGlzLmZpbGVcbiAgICB9O1xuICAgIHRoaXMub25Dcm9wRmlsZS5lbWl0KGZpbGVFdmVudCk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0RmlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RGaWxlQWN0aW9uKHtmaWxlOiB0aGlzLmZpbGV9KSk7XG4gIH1cblxuICBwdWJsaWMgdW5TZWxlY3RGaWxlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0RmlsZUFjdGlvbih7ZmlsZTogdGhpcy5maWxlfSkpO1xuICB9XG5cbiAgcHVibGljIGNob29zZUZpbGUoJGV2ZW50OiBNb3VzZUV2ZW50LCBmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hvb3NlRmlsZXNBY3Rpb24oe2ZpbGVzOiBbZmlsZS50b0pTT04oKV19KSk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVNYW5hZ2VyUGF5bG9hZERhdGEge1xuICBmb2xkZXJJZD86IHN0cmluZztcbiAgZmlsZXM/OiBJT3V0ZXJGaWxlW107XG4gIGZpbGU/OiBJRmlsZU1vZGVsO1xuICBmaWxlSWRzPzogc3RyaW5nW107XG4gIGJvdW5kcz86IElDcm9wQm91bmRzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlTWFuYWdlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHBheWxvYWQ6IElGaWxlTWFuYWdlclBheWxvYWREYXRhO1xufVxuXG4vKipcbiAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlIHtcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0NIT09TRV9GSUxFUyA9ICdGSUxFTUFOQUdFUl9DSE9PU0VfRklMRVMnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfQ1JPUF9GSUxFID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRSc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1IgPSAnRklMRU1BTkFHRVJfQ1JPUF9GSUxFX0VSUk9SJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0lOVkVSU0VfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfSU5WRVJTRV9GSUxFX1NFTEVDVElPTic7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVMnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfTE9BRF9GSUxFU19TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVNfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX01PVkVfRklMRVNfRVJST1IgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUic7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9TRUxFQ1RfQUxMID0gJ0ZJTEVNQU5BR0VSX1NFTEVDVF9BTEwnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVU5TRUxFQ1RfRklMRSA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9GSUxFJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX1VOU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1IgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1InO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9TVUNDRVNTJztcblxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDaG9vc2VGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjaG9vc2VGaWxlcyhmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DSE9PU0VfRklMRVMsXG4gICAgICBwYXlsb2FkOiB7ZmlsZXN9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZUFjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJRmlsZU1vZGVsLCBib3VuZHM6IElDcm9wQm91bmRzKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgIGJvdW5kczogYm91bmRzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgY3JvcEZpbGVTdWNjZXNzKGZpbGU6IElGaWxlTW9kZWwpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZUVycm9yQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlRXJyb3IoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfQ1JPUF9GSUxFX0VSUk9SLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBEZWxldGVGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGVTdWNjZXNzKGZpbGU6IElGaWxlTW9kZWwpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlU2VsZWN0ZWRGaWxlcyhmaWxlSWRzOiBzdHJpbmdbXSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OLFxuICAgICAgcGF5bG9hZDoge2ZpbGVJZHN9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBkZWxldGVTZWxlY3RlZEZpbGVzU3VjY2VzcyhmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUyxcbiAgICAgIHBheWxvYWQ6IHtmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IExvYWRGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTE9BRF9GSUxFUyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZm9sZGVySWQ6IGZvbGRlcklkXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgaW52ZXJzZUZpbGVTZWxlY3Rpb24oKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9JTlZFUlNFX0ZJTEVfU0VMRUNUSU9OLFxuICAgICAgcGF5bG9hZDoge31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IExvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgbG9hZEZpbGVzU3VjY2Vzcyhmb2xkZXJJZDogc3RyaW5nLCBmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9MT0FEX0ZJTEVTX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgICAgZmlsZXM6IGZpbGVzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIG1vdmVGaWxlU3VjY2VzcyhmaWxlczogSU91dGVyRmlsZVtdLCBmb2xkZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTLFxuICAgICAgcGF5bG9hZDoge2ZvbGRlcklkLCBmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IE1vdmVGaWxlc0Vycm9yQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIG1vdmVGaWxlRXJyb3IoZmlsZXM6IElPdXRlckZpbGVbXSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUixcbiAgICAgIHBheWxvYWQ6IHtmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFNlbGVjdEFsbEZpbGVzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEFsbEZpbGVzKCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfU0VMRUNUX0FMTCxcbiAgICAgIHBheWxvYWQ6IHt9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBTZWxlY3RGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdW5TZWxlY3RBbGwoKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwsXG4gICAgICBwYXlsb2FkOiB7fVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIHVzZSBuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0RmlsZShmaWxlOiBJRmlsZU1vZGVsKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VTlNFTEVDVF9GSUxFLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBVcGxvYWRGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWQoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWRTdWNjZXNzKGZpbGU6IElPdXRlckZpbGUpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRXJyb3IoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1IsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJTdGF0ZX0gZnJvbSAnLi9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2V9IGZyb20gJy4vZmlsZU1hbmFnZXJBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5pbXBvcnQge1xuICBDaG9vc2VGaWxlc0FjdGlvbixcbiAgQ3JvcEZpbGVBY3Rpb24sXG4gIERlbGV0ZUZpbGVBY3Rpb24sXG4gIERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24sXG4gIEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbixcbiAgTG9hZEZpbGVzQWN0aW9uLFxuICBTZWxlY3RBbGxGaWxlc0FjdGlvbixcbiAgU2VsZWN0RmlsZUFjdGlvbixcbiAgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbixcbiAgVW5TZWxlY3RGaWxlQWN0aW9uLCBVcGxvYWRGaWxlc0FjdGlvbiwgVXBsb2FkRmlsZXNFcnJvckFjdGlvbiwgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4vZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbi8qKlxuICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElGaWxlTWFuYWdlclN0YXRlPiwgcHJpdmF0ZSBmaWxlTWFuYWdlckFjdGlvbnM6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggQ2hvb3NlRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNob29zZUZpbGVzKGZpbGVzOiBJT3V0ZXJGaWxlW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaG9vc2VGaWxlc0FjdGlvbih7ZmlsZXN9KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIENyb3BGaWxlQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJRmlsZU1vZGVsLCBib3VuZHM6IElDcm9wQm91bmRzKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JvcEZpbGVBY3Rpb24oe2JvdW5kcywgZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggRGVsZXRlRmlsZUFjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlRmlsZShmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlRmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggRGVsZXRlU2VsZWN0ZWRGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlU2VsZWN0ZWRGaWxlcyhmaWxlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uKHtmaWxlc30pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBpbnZlcnNlU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggTG9hZEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBMb2FkRmlsZXNBY3Rpb24oe2ZvbGRlcklkfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBTZWxlY3RBbGxGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgc2VsZWN0QWxsRmlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFNlbGVjdEZpbGVBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlbGVjdEZpbGVBY3Rpb24oe2ZpbGV9KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0QWxsRmlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVW5TZWxlY3RGaWxlQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1blNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0RmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVXBsb2FkRmlsZXNFcnJvckFjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRXJyb3IoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oe2ZpbGVzOiBbZmlsZV19KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFVwbG9hZEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWQoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzQWN0aW9uKHtmaWxlczogW2ZpbGVdfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVwbG9hZFN1Y2Nlc3MoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXM6IFtmaWxlXX0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7SUZpbGVEYXRhUHJvcGVydGllc30gZnJvbSAnLi4vc2VydmljZXMvaW1hZ2VEYXRhQ29udmVydGVyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgRklMRU1BTkFHRVJfVFJFRV9OQU1FID0gJ2ZpbGVNYW5hZ2VyVHJlZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSB7XG5cbiAgcHJvdGVjdGVkIHRyZWVOYW1lID0gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICBwcm90ZWN0ZWQgZmlsZU1hbmFnZXJOYW1lID0gJ2ZpbGVNYW5hZ2VyRmlsZXMnO1xuXG5cbiAgcHJvdGVjdGVkIG5vZGVzOiBJT3V0ZXJOb2RlW107XG4gIHByb3RlY3RlZCBmaWxlczogSUZpbGVEYXRhUHJvcGVydGllc1tdO1xuXG4gIHByb3RlY3RlZCBjdXJyZW50Tm9kZUlkID0gJyc7XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlLCBJTm9kZVNlcnZpY2V9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtVVUlEfSBmcm9tICdhbmd1bGFyMi11dWlkJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQXBpfSBmcm9tICcuL0lGaWxlTWFuYWdlckFwaSc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXN9IGZyb20gJy4uL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9uc30gZnJvbSAnLi4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSwgRklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtlbXB0eSwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJBcGlTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RGaWxlTWFuYWdlckFwaVNlcnZpY2UgaW1wbGVtZW50cyBJRmlsZU1hbmFnZXJBcGksIElOb2RlU2VydmljZSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZW1hbmFnZXJOb3RmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICB9XG5cbiAgcHVibGljIGxvYWQobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIGlmICghdGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5ub2RlcyA9IHRoaXMuZ2V0QWxsRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKTtcblxuICAgIHJldHVybiBvZihub2Rlcyk7XG4gIH1cblxuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIG5vZGUucGFyZW50SWQgPSBwYXJlbnROb2RlSWQ7XG4gICAgbm9kZS5pZCA9IFVVSUQuVVVJRCgpO1xuXG4gICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc2F2ZU5vZGVzKCkpIHtcbiAgICAgIHJldHVybiBvZihub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVtcHR5KCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHNyY0lkID0gc3JjTm9kZS5pZDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldE5vZGUgPyB0YXJnZXROb2RlLmlkIDogJyc7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQoc3JjSWQpO1xuXG4gICAgdGhpcy5ub2Rlc1tpbmRleF0ucGFyZW50SWQgPSB0YXJnZXRJZDtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5ub2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlLmlkKTtcblxuICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbm9kZTtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQobm9kZUlkKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpbmRleF07XG5cbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKS5sZW5ndGggPiAwO1xuXG4gICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLnNhdmVOb2RlcygpO1xuXG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdOb2RlIGlzIG5vdCBlbXB0eScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlcyA9IFsuLi5ub2Rlc107XG5cbiAgICB0aGlzLnNhdmVOb2RlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgZmlsZVxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlKGZpbGU6IElPdXRlckZpbGUsIGJvdW5kczogSUNyb3BCb3VuZHMpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICByZXR1cm4gdGhyb3dFcnJvcignVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG5vdCBhdmFpbGFibGUgd2l0aCBMb2NhbFN0b3JhZ2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGZpbGVzIGZyb20gZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgbG9hZEZpbGVzKG5vZGVJZCA9ICcnKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICB0aGlzLmN1cnJlbnROb2RlSWQgPSBub2RlSWQ7XG5cbiAgICBpZiAoIXRoaXMuZmlsZXMpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmdldEFsbEZpbGVEYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlc0Zyb21Gb2xkZXIobm9kZUlkKTtcblxuICAgIGNvbnN0IG5ld0ZpbGVzOiBJT3V0ZXJGaWxlW10gPSBmaWxlcy5tYXAoKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZihuZXdGaWxlcyk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5RmlsZUlkKGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNhdmVGaWxlcygpO1xuXG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkRmlsZXMoc2VsZWN0ZWRGaWxlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBudW1iZXJPZkZpbGVzID0gdGhpcy5maWxlcy5sZW5ndGg7XG5cbiAgICBzZWxlY3RlZEZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zYXZlRmlsZXMoKTtcblxuICAgIHJldHVybiBvZigodGhpcy5maWxlcy5sZW5ndGggKyBzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gbnVtYmVyT2ZGaWxlcykpO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZEZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIGNvbnN0IGZpbGVEYXRhID0gdGhpcy5jb252ZXJ0SU91dGVyRmlsZTJMb2NhbERhdGEoZmlsZSk7XG4gICAgdGhpcy5maWxlcy5wdXNoKGZpbGVEYXRhKTtcblxuICAgIGlmICh0aGlzLnNhdmVGaWxlcygpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5jb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZURhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ1VwbG9hZCBlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb3ZlRmlsZShmaWxlczogSU91dGVyRmlsZVtdLCBub2RlOiBJT3V0ZXJOb2RlID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUuaWQudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZm9sZGVySWQgPSBub2RlID8gbm9kZS5pZC50b1N0cmluZygpIDogJyc7XG5cbiAgICBjb25zdCBtb3ZlZEZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBpZHMuaW5kZXhPZihmaWxlLmlkLnRvU3RyaW5nKCkpID4gLTEpO1xuICAgIGNvbnN0IGVycm9yTXNnID0gJ0NhbiBub3QgbW92ZSBmaWxlIHRvIHRoZSBzYW1lIGZvbGRlcic7XG5cbiAgICBjb25zdCBpc01vdmVkVG9TYW1lRm9sZGVyID0gZmFsc2U7XG5cbiAgICBtb3ZlZEZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmlkID09PSBmaWxlLmZvbGRlcklkKSB7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmaWxlLmZvbGRlcklkID09PSAnJyB8fCBmaWxlLmZvbGRlcklkID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JNc2cpO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgZmlsZS5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzTW92ZWRUb1NhbWVGb2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JNc2cpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNhdmVGaWxlcygpKSB7XG4gICAgICByZXR1cm4gb2YobW92ZWRGaWxlcy5tYXAoZmlsZSA9PiB0aGlzLmNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnTW92ZSBmaWxlcyBlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlOb2RlSWQobm9kZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbmRJbmRleCgobm9kZSkgPT4ge1xuICAgICAgcmV0dXJuIG5vZGUuaWQgPT09IG5vZGVJZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbmRJbmRleCgoZmlsZSkgPT4gZmlsZS5pZCA9PT0gZmlsZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4obm9kZUlkOiBzdHJpbmcpOiBJT3V0ZXJOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbHRlcigobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5wYXJlbnRJZCA9PT0gbm9kZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsZXNGcm9tRm9sZGVyKG5vZGVJZDogc3RyaW5nKTogSUZpbGVEYXRhUHJvcGVydGllc1tdIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpID0+IGZpbGUuZm9sZGVySWQgPT09IG5vZGVJZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QWxsRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTogSU91dGVyTm9kZVtdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudHJlZU5hbWUpO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBbGxGaWxlRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTogSUZpbGVEYXRhUHJvcGVydGllc1tdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZmlsZU1hbmFnZXJOYW1lKTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVOb2RlcygpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50cmVlTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5ub2RlcykpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnU3RhdGUgaXMgbm90IHNhdmVkLicsXG4gICAgICAgIG1lc3NhZ2U6ICdSZWxvYWQgcHJldmlvdXMgc3RhdGUuJ1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlsZXMgPSBudWxsO1xuICAgICAgdGhpcy5ub2RlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlRmlsZXMoKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZmlsZU1hbmFnZXJOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbGVzKSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdTdGF0ZSBpcyBub3Qgc2F2ZWQuJyxcbiAgICAgICAgbWVzc2FnZTogJ1JlbG9hZCBwcmV2aW91cyBzdGF0ZS4nXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgbm9kZUlkID0gdGhpcy5maWxlc1sodGhpcy5maWxlcy5sZW5ndGggLSAxKV0uZm9sZGVySWQgfHwgbnVsbDtcblxuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9hZChub2RlSWQpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZTogSUZpbGVEYXRhUHJvcGVydGllcyk6IElPdXRlckZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZmlsZS5pZCxcbiAgICAgIGZvbGRlcklkOiBmaWxlLmZvbGRlcklkLFxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgdGh1bWJuYWlsVXJsOiBmaWxlLmRhdGEsXG4gICAgICB1cmw6IGZpbGUuZGF0YSxcbiAgICAgIHdpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaWxlLmhlaWdodCxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRJT3V0ZXJGaWxlMkxvY2FsRGF0YShmaWxlOiBJT3V0ZXJGaWxlKTogSUZpbGVEYXRhUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBmaWxlLmlkLnRvU3RyaW5nKCksXG4gICAgICBmb2xkZXJJZDogZmlsZS5mb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGRhdGE6IGZpbGUuZGF0YSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHdpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaWxlLmhlaWdodFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyZWVBY3Rpb25UeXBlc30gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0FjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7SU91dGVyTm9kZSwgVHJlZU1vdmVOb2RlQWN0aW9ufSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSwgSUZpbGVNYW5hZ2VyQWN0aW9ufSBmcm9tICcuL2ZpbGVNYW5hZ2VyQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7ZW1wdHksIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckFwaVNlcnZpY2V9IGZyb20gJy4vZmlsZU1hbmFnZXJBcGkuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zfSBmcm9tICcuLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENyb3BGaWxlQWN0aW9uLFxuICBDcm9wRmlsZUVycm9yQWN0aW9uLFxuICBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24sXG4gIERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uLCBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbiwgRmlsZU1hbmFnZXJBY3Rpb24sIExvYWRGaWxlc0FjdGlvbixcbiAgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbiwgTW92ZUZpbGVzRXJyb3JBY3Rpb24sIE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24sIFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24sIFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvblxufSBmcm9tICcuL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSB7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBsb2FkRmlsZXMkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTE9BRF9GSUxFUyksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB0aGlzLmxvYWRGaWxlcyhhY3Rpb24ucGF5bG9hZC5mb2xkZXJJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChmaWxlczogSU91dGVyRmlsZVtdKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlc30pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZih0aGlzLm9uTG9hZEZpbGVzRXJyb3IoYWN0aW9uLnBheWxvYWQuZm9sZGVySWQpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGNyb3BGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRSksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB0aGlzLmNyb3BGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGUsIGFjdGlvbi5wYXlsb2FkLmJvdW5kcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IElPdXRlckZpbGUpOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdDcm9wIEltYWdlLicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbWFnZSBoYXMgYmVlbiBjcm9wcGVkLidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24oe2ZpbGU6IGFjdGlvbi5wYXlsb2FkLmZpbGV9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBDcm9wRmlsZUVycm9yQWN0aW9uKHtmaWxlOiBhY3Rpb24ucGF5bG9hZC5maWxlfSkpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGRlbGV0ZUZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy5kZWxldGVGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBib29sZWFuKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWxldGVGaWxlU3VjY2Vzc0FjdGlvbih7ZmlsZTogYWN0aW9uLnBheWxvYWQuZmlsZX0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YodGhpcy5vbkRlbGV0ZUZpbGVFcnJvcihhY3Rpb24ucGF5bG9hZC5maWxlKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgZGVsZXRlRmlsZXNTZWxlY3Rpb24kID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBJRmlsZU1hbmFnZXJBY3Rpb24pID0+IHRoaXMuZGVsZXRlRmlsZXNTZWxlY3Rpb24oYWN0aW9uLnBheWxvYWQuZmlsZUlkcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IGJvb2xlYW4pOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogYWN0aW9uLnBheWxvYWQuZmlsZUlkc30pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YodGhpcy5vbkRlbGV0ZUZpbGVzU2VsZWN0aW9uRXJyb3IoYWN0aW9uLnBheWxvYWQuZmlsZXMpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cblxuICBARWZmZWN0KClcbiAgcHVibGljIHVwbG9hZEZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy51cGxvYWRGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGVzWzBdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogSU91dGVyRmlsZSk6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogW3Jlc3VsdF19KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgbW92ZUZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERSksXG4gICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZU1vdmVOb2RlQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5zb3VyY2VPZkRyb3BwZWREYXRhID09PSAnRklMRSc7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlTW92ZU5vZGVBY3Rpb24pID0+IHRoaXMubW92ZUZpbGVzKFs8SU91dGVyRmlsZT5hY3Rpb24ucGF5bG9hZC5vbGROb2RlXSwgYWN0aW9uLnBheWxvYWQubm9kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IElPdXRlckZpbGVbXSk6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlcklkID0gKDxJT3V0ZXJGaWxlPmFjdGlvbi5wYXlsb2FkLm9sZE5vZGUpLmZvbGRlcklkO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24oe2ZpbGVzOiByZXN1bHQsIGZvbGRlcklkfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IE1vdmVGaWxlc0Vycm9yQWN0aW9uKHtmaWxlczogWzxJT3V0ZXJGaWxlPmFjdGlvbi5wYXlsb2FkLm9sZE5vZGVdfSkpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgZmlsZXNNb3ZlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MpLFxuICAgICAgbWFwKChhY3Rpb246IE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5vbk1vdmVGaWxlc1N1Y2Nlc3MoKTtcblxuICAgICAgICByZXR1cm4gbmV3IExvYWRGaWxlc0FjdGlvbih7Zm9sZGVySWQ6IGFjdGlvbi5wYXlsb2FkLmZvbGRlcklkfSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgcHVibGljIHVwbG9hZEVycm9yJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX0VSUk9SKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgICAgIHRpdGxlOiAnRmlsZSB1cGxvYWQnLFxuICAgICAgICAgIG1lc3NhZ2U6IGAke2FjdGlvbi5wYXlsb2FkLmZpbGVzWzBdLm5hbWV9IGV4aXN0cyBvbiB0aGUgc2VydmVyIGluIHRoaXMgZGlyZWN0b3J5YFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICBwdWJsaWMgY3JvcEZpbGVTdWNjZXNzJDogT2JzZXJ2YWJsZTxDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24+O1xuICBwdWJsaWMgZGVsZXRlRmlsZVN1Y2Nlc3MkOiBPYnNlcnZhYmxlPERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyQWN0aW9uczogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlbWFuYWdlck5vdGZpY2F0aW9uOiBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlTWFuYWdlckFwaVNlcnZpY2U6IEZpbGVNYW5hZ2VyQXBpU2VydmljZSkge1xuXG4gICAgdGhpcy5jcm9wRmlsZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTKVxuICAgICAgKTtcblxuICAgIHRoaXMuZGVsZXRlRmlsZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MpXG4gICAgICApO1xuXG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9FUlJPUilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub25Dcm9wRmlsZUVycm9yKGFjdGlvbi5wYXlsb2FkLmZpbGUpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub25Nb3ZlRmlsZXNFcnJvcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JvcEZpbGUoZmlsZTogSUZpbGVNb2RlbCwgYm91bmRzOiBJQ3JvcEJvdW5kcyk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5jcm9wRmlsZShmaWxlLnRvSlNPTigpLCBib3VuZHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5yZW1vdmVGaWxlKGZpbGUudG9KU09OKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlbGV0ZUZpbGVzU2VsZWN0aW9uKGZpbGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5yZW1vdmVTZWxlY3RlZEZpbGVzKGZpbGVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlckZpbGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5sb2FkRmlsZXMoZm9sZGVySWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwbG9hZEZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS51cGxvYWRGaWxlKGZpbGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1vdmVGaWxlcyhmaWxlczogSU91dGVyRmlsZVtdLCBmb2xkZXI6IElPdXRlck5vZGUgPSBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UubW92ZUZpbGUoZmlsZXMsIGZvbGRlcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Dcm9wRmlsZUVycm9yKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgdGl0bGU6ICdDcm9wIEltYWdlJyxcbiAgICAgIG1lc3NhZ2U6ICdbRklMRU1BTkFHRVJdIENhbiBub3QgY3JvcCBmaWxlJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGVsZXRlRmlsZUVycm9yKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgdGl0bGU6ICdEZWxldGUgZmlsZScsXG4gICAgICBtZXNzYWdlOiAnW0ZJTEVNQU5BR0VSXSBDYW4gbm90IGRlbGV0ZSBmaWxlJyArIGZpbGUubmFtZVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGVsZXRlRmlsZXNTZWxlY3Rpb25FcnJvcihmaWxlczogSU91dGVyRmlsZVtdKTogdm9pZCB7XG4gICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIHRpdGxlOiAnRGVsZXRlIHNlbGVjdGVkIGZpbGVzJyxcbiAgICAgIG1lc3NhZ2U6ICdbRklMRU1BTkFHRVJdIE5vdCBhbGwgZmlsZXMgd2VyZSBkZWxldGVkJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTG9hZEZpbGVzRXJyb3IoZm9sZGVySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ0xvYWQgZmlsZXMnLFxuICAgICAgbWVzc2FnZTogJ1tGSUxFTUFOQUdFUl0gQ2FuIG5vdCBsb2FkIGZpbGVzIGZvciBmb2xkZXIgJyArIGZvbGRlcklkXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Nb3ZlRmlsZXNTdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiAnTW92ZSBmaWxlcycsXG4gICAgICBtZXNzYWdlOiAnRmlsZSB3YXMgc3VjY2Vzc2Z1bGx5IG1vdmVkIHRvIGZvbGRlcidcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbk1vdmVGaWxlc0Vycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ01vdmUgZmlsZXMnLFxuICAgICAgbWVzc2FnZTogJ0ZpbGUgd2FzIG5vdCBzdWNjZXNzZnVsbHkgbW92ZWQgdG8gbmV3IGZvbGRlcidcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZU1vZGVsfSBmcm9tICcuL2ZpbGUubW9kZWwnO1xuaW1wb3J0IHtJRmlsZUV2ZW50fSBmcm9tICcuL2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvZmlsZU1hbmFnZXJBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckRpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXItZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuLi9zdG9yZS9maWxlTWFuYWdlckVmZmVjdHMuc2VydmljZSc7XG5pbXBvcnQge0ZJTEVNQU5BR0VSX1RSRUVfTkFNRX0gZnJvbSAnLi4vc3RvcmUvZmlsZU1hbmFnZXJBcGlBYnN0cmFjdC5jbGFzcyc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0RlbGV0ZUZpbGVBY3Rpb24sIFNlbGVjdEZpbGVBY3Rpb24sIFVuU2VsZWN0RmlsZUFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGVzLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZXMuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGVzLWxpc3Quc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVzTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaWxlczogRmlsZU1vZGVsW107XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNlbGVjdGVkRmlsZXM6IHN0cmluZ1tdO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25QcmV2aWV3RmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uQ3JvcEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblNlbGVjdEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHJlbW92ZVRpdGxlID0gJ1JlbW92ZSBmaWxlJztcblxuICBwdWJsaWMgZHJhZ1pvbmUgPSBGSUxFTUFOQUdFUl9UUkVFX05BTUU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyRGlzcGF0Y2hlcjogRmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgZmlsZU1hbmFnZXJFZmZlY3RzOiBGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlKSB7XG5cbiAgICBmaWxlTWFuYWdlckVmZmVjdHMuZGVsZXRlRmlsZVN1Y2Nlc3MkXG4gICAgICAuc3Vic2NyaWJlKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25zLnN1Y2Nlc3MoJ0ZpbGUgZGVsZXRlJywgYCR7YWN0aW9uLnBheWxvYWQuZmlsZS5uYW1lfSBoYXMgYmVlbiBkZWxldGVkYCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGNsaWNrZWQgb24gYnV0dG9uIFwiZGVsZXRlIGZpbGVcIlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZUZpbGVBY3Rpb24oe2ZpbGV9KSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVtb3ZlTWVzc2FnZShmaWxlOiBJRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuICdZb3UgYXJlIHRyeSB0byBkZWxldGUgPGI+JyArIGZpbGUubmFtZSArICc8L2I+LiBBcmUgeW91IHN1cmU/JztcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUHJldmlldyhmaWxlRXZlbnQ6IElGaWxlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uUHJldmlld0ZpbGUuZW1pdChmaWxlRXZlbnQpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Dcm9wKGZpbGVFdmVudDogSUZpbGVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Dcm9wRmlsZS5lbWl0KGZpbGVFdmVudCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0aW9uKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoZmlsZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGZpbGU6IEZpbGVNb2RlbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRmlsZXMuaW5kZXhPZihmaWxlLmdldElkKCkudG9TdHJpbmcoKSkgPiAtMTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNb2RlbH0gZnJvbSAnLi4vZmlsZXNMaXN0L2ZpbGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1maWxlLXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJldmlldy5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBmaWxlc1xuICAgKi9cbiAgQElucHV0KCkgZmlsZXM6IElGaWxlTW9kZWxbXTtcblxuICAvKipcbiAgICogQ3VycmVudCB2aWV3ZWQgZmlsZVxuICAgKi9cbiAgQElucHV0KCkgZmlsZTogSUZpbGVNb2RlbDtcblxuICAvKipcbiAgICogQ3VycmVudCBpbmRleFxuICAgKi9cbiAgcHVibGljIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgcHVibGljIGxlbmd0aCA9IDA7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmZpbGVzLmxlbmd0aDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRmlsZXMgPSB0aGlzLmZpbGVzXG4gICAgICAuZmlsdGVyKChmaWxlOiBGaWxlTW9kZWwpID0+IGZpbGUuZ2V0SWQoKSA9PT0gdGhpcy5maWxlLmdldElkKCkpO1xuXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gMSA/IHRoaXMuZmlsZXMuaW5kZXhPZihzZWxlY3RlZEZpbGVzWzBdKSA6IC0xO1xuICB9XG5cbiAgcHVibGljIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcmV2KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNzQpIHtcbiAgICAgIHRoaXMucHJldigpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSB8fCBldmVudC5rZXlDb2RlID09PSA3NSkge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsdGVyU2VydmljZSB7XG4gIC8qKlxuICAgKiBGaWxlIHR5cGUgZmlsdGVyXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcblxuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIkLmdldFZhbHVlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7SUZpbGVUeXBlRmlsdGVyfSBmcm9tICcuLi90b29sYmFyL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVGaWx0ZXJTZXJ2aWNlIHtcblxuICAvKipcbiAgICogRmlsZSB0eXBlIGZpbHRlclxuICAgKi9cbiAgcHVibGljIGZpbHRlciQ6IEJlaGF2aW9yU3ViamVjdDxJRmlsZVR5cGVGaWx0ZXIgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHVibGljIGdldFZhbHVlKCk6IElGaWxlVHlwZUZpbHRlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogSUZpbGVUeXBlRmlsdGVyIHwgbnVsbCkge1xuICAgIHRoaXMuZmlsdGVyJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuL2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0lTZWxlY3RGaWxlfSBmcm9tICcuL2ludGVyZmFjZS9JU2VsZWN0RmlsZSc7XG5cbmV4cG9ydCBjbGFzcyBGaWxlTW9kZWwgaW1wbGVtZW50cyBJRmlsZU1vZGVsIHtcbiAgc3RhdGljIHNtYWxsSWNvbnNGb2xkZXIgPSAnL2ljb25zLzEyOHB4Lyc7XG4gIHN0YXRpYyBiaWdJY29uc0ZvbGRlciA9ICcvaWNvbnMvNTEycHgvJztcblxuICBwcml2YXRlIF9vcmdEYXRhOiBJT3V0ZXJGaWxlO1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfaWNvbnNGb2xkZXIgPSBGaWxlTW9kZWwuc21hbGxJY29uc0ZvbGRlcjtcblxuICBwdWJsaWMgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IHRodW1ibmFpbFVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ltYWdlKCkgPyB0aGlzLl9vcmdEYXRhLnRodW1ibmFpbFVybCA6IGAke0ZpbGVNb2RlbC5zbWFsbEljb25zRm9sZGVyfSR7dGhpcy5nZXRGaWxlRXh0KCl9LnBuZ2A7XG4gIH1cblxuICBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmlzSW1hZ2UoKSA/IHRoaXMuX29yZ0RhdGEudXJsIDogYCR7RmlsZU1vZGVsLmJpZ0ljb25zRm9sZGVyfSR7dGhpcy5nZXRGaWxlRXh0KCl9LnBuZ2A7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuZnJvbUpTT04oZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZnJvbUpTT04oZGF0YTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuX29yZ0RhdGEgPSBkYXRhO1xuXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRhLnNlbGVjdGVkIHx8IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JnRGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JnRGF0YS5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3JnRGF0YS5oZWlnaHQgfHwgMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWxlRXh0KCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLnR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3JnRGF0YS53aWR0aCB8fCAwO1xuICB9XG5cbiAgcHVibGljIGlzSW1hZ2UoKSB7XG4gICAgcmV0dXJuIFsnaW1hZ2UvanBnJywgJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL2dpZicsICdpbWFnZS9wbmcnXS5pbmRleE9mKHRoaXMuZ2V0TWltZSgpKSA+IC0xO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdERhdGEoKTogSVNlbGVjdEZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgIHdpZHRoOiB0aGlzLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICBtaW1lOiB0aGlzLmdldE1pbWUoKVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7Y3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24sIERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uLFxuICBGaWxlTWFuYWdlckFjdGlvbixcbiAgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcyxcbiAgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbixcbiAgTW92ZUZpbGVzU3VjY2Vzc0FjdGlvbiwgU2VsZWN0RmlsZUFjdGlvbiwgVW5TZWxlY3RGaWxlQWN0aW9uLCBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBTdG9yZUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogSU91dGVyRmlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIGVudGl0aWVzOiBTdG9yZUVudGl0aWVzO1xuICBmaWxlczogc3RyaW5nW107XG4gIHNlbGVjdGVkRmlsZXM6IHN0cmluZ1tdO1xufVxuXG5cbmZ1bmN0aW9uIGNyb3BGaWxlKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24pOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIGNvbnN0IGZpbGUgPSBhY3Rpb24ucGF5bG9hZC5maWxlO1xuICBjb25zdCBpZCA9IGZpbGUuZ2V0SWQoKS50b1N0cmluZygpO1xuXG4gIHN0YXRlLmVudGl0aWVzW2lkXSA9IDxJT3V0ZXJGaWxlPnsuLi5maWxlLnRvSlNPTigpfTtcblxuICByZXR1cm4ge1xuICAgIGVudGl0aWVzOiBzdGF0ZS5lbnRpdGllcyxcbiAgICBmaWxlczogc3RhdGUuZmlsZXMsXG4gICAgc2VsZWN0ZWRGaWxlczogc3RhdGUuc2VsZWN0ZWRGaWxlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZlcnNlRmlsZXNTZWxlY3Rpb24oc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICByZXR1cm4ge1xuICAgIGVudGl0aWVzOiBzdGF0ZS5lbnRpdGllcyxcbiAgICBmaWxlczogc3RhdGUuZmlsZXMsXG4gICAgc2VsZWN0ZWRGaWxlczogc3RhdGUuZmlsZXMuZmlsdGVyKChpOiBzdHJpbmcpID0+IHN0YXRlLnNlbGVjdGVkRmlsZXMuaW5kZXhPZihpKSA9PT0gLTEpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRGaWxlcyhzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIGFjdGlvbjogTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbik6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgY29uc3QgZW50aXRpZXM6IFN0b3JlRW50aXRpZXMgPSB7fTtcbiAgY29uc3QgZmlsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgYWN0aW9uLnBheWxvYWQuZmlsZXMubWFwKChmaWxlOiBJT3V0ZXJGaWxlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBmaWxlLmlkLnRvU3RyaW5nKCk7XG5cbiAgICBlbnRpdGllc1tpZF0gPSBmaWxlO1xuICAgIGZpbGVzLnB1c2goaWQpO1xuICB9KTtcblxuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IGVudGl0aWVzLFxuICAgIGZpbGVzOiBmaWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBbXVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIG1vdmVGaWxlcyhzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIGFjdGlvbjogTW92ZUZpbGVzU3VjY2Vzc0FjdGlvbik6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgY29uc3QgZmlsZXMgPSBhY3Rpb24ucGF5bG9hZC5maWxlcztcbiAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUuaWQudG9TdHJpbmcoKSk7XG4gIGNvbnN0IGZvbGRlcklkID0gYWN0aW9uLnBheWxvYWQuZm9sZGVySWQgPyBhY3Rpb24ucGF5bG9hZC5mb2xkZXJJZC50b1N0cmluZygpIDogJyc7XG5cbiAgY29uc3QgZW50aXRpZXMgPSB7Li4uc3RhdGUuZW50aXRpZXN9O1xuXG4gIGlkcy5mb3JFYWNoKChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgb2xkRW50aXR5ID0gey4uLmVudGl0aWVzW2lkXX07XG4gICAgb2xkRW50aXR5LmZvbGRlcklkID0gZm9sZGVySWQ7XG5cbiAgICBlbnRpdGllc1tpZF0gPSBvbGRFbnRpdHk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IGVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcy5maWx0ZXIoKGk6IHN0cmluZykgPT4gaWRzLmluZGV4T2YoaSkgPT09IC0xKSxcbiAgICBzZWxlY3RlZEZpbGVzOiBzdGF0ZS5zZWxlY3RlZEZpbGVzLmZpbHRlcigoaTogc3RyaW5nKSA9PiBpZHMuaW5kZXhPZihpKSA9PT0gLTEpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZpbGUoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlLCBhY3Rpb246IERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICBjb25zdCBpZCA9IGFjdGlvbi5wYXlsb2FkLmZpbGUuZ2V0SWQoKTtcblxuICBkZWxldGUgc3RhdGUuZW50aXRpZXNbaWRdO1xuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcy5maWx0ZXIoKGk6IHN0cmluZykgPT4gaSAhPT0gaWQpLFxuICAgIHNlbGVjdGVkRmlsZXM6IHN0YXRlLnNlbGVjdGVkRmlsZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2VsZWN0ZWRGaWxlcyhzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIGNvbnN0IGZpbGVzOiBzdHJpbmdbXSA9IHN0YXRlLmZpbGVzLmZpbHRlcigoaTogc3RyaW5nKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbGVzLmluZGV4T2YoaSkgPT09IC0xKTtcbiAgY29uc3QgZW50aXRpZXM6IFN0b3JlRW50aXRpZXMgPSB7fTtcblxuICBmaWxlcy5mb3JFYWNoKChmaWxlSWQ6IHN0cmluZykgPT4ge1xuICAgIGVudGl0aWVzW2ZpbGVJZF0gPSBzdGF0ZS5lbnRpdGllc1tmaWxlSWRdO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGVudGl0aWVzOiBlbnRpdGllcyxcbiAgICBmaWxlczogZmlsZXMsXG4gICAgc2VsZWN0ZWRGaWxlczogW11cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0RmlsZShzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIGFjdGlvbjogU2VsZWN0RmlsZUFjdGlvbik6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogc3RhdGUuZW50aXRpZXMsXG4gICAgZmlsZXM6IHN0YXRlLmZpbGVzLFxuICAgIHNlbGVjdGVkRmlsZXM6IFsuLi5zdGF0ZS5zZWxlY3RlZEZpbGVzLCBhY3Rpb24ucGF5bG9hZC5maWxlLmdldElkKCkudG9TdHJpbmcoKV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0QWxsRmlsZXMoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICByZXR1cm4ge1xuICAgIGVudGl0aWVzOiBzdGF0ZS5lbnRpdGllcyxcbiAgICBmaWxlczogc3RhdGUuZmlsZXMsXG4gICAgc2VsZWN0ZWRGaWxlczogWy4uLnN0YXRlLmZpbGVzXVxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGxvYWRGaWxlcyhzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIGFjdGlvbjogVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICBlbnRpdGllczogey4uLnN0YXRlLmVudGl0aWVzfSxcbiAgICBmaWxlczogWy4uLnN0YXRlLmZpbGVzXSxcbiAgICBzZWxlY3RlZEZpbGVzOiBbXVxuICB9O1xuXG4gIGFjdGlvbi5wYXlsb2FkLmZpbGVzLmZvckVhY2goKGZpbGU6IElPdXRlckZpbGUpID0+IHtcbiAgICBjb25zdCBpZCA9IGZpbGUuaWQudG9TdHJpbmcoKTtcblxuICAgIG5ld1N0YXRlLmVudGl0aWVzW2lkXSA9IGZpbGU7XG4gICAgbmV3U3RhdGUuZmlsZXMucHVzaChpZCk7XG4gIH0pO1xuXG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5cbmZ1bmN0aW9uIHVuU2VsZWN0QWxsRmlsZXMoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICByZXR1cm4ge1xuICAgIGVudGl0aWVzOiBzdGF0ZS5lbnRpdGllcyxcbiAgICBmaWxlczogc3RhdGUuZmlsZXMsXG4gICAgc2VsZWN0ZWRGaWxlczogW11cbiAgfTtcbn1cblxuZnVuY3Rpb24gdW5TZWxlY3RGaWxlKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBVblNlbGVjdEZpbGVBY3Rpb24pOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIGNvbnN0IGZpbGVJZCA9IGFjdGlvbi5wYXlsb2FkLmZpbGUuZ2V0SWQoKS50b1N0cmluZygpO1xuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBzdGF0ZS5zZWxlY3RlZEZpbGVzLmZpbHRlcigoaWQ6IHN0cmluZykgPT4gaWQgIT09IGZpbGVJZClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVNYW5hZ2VyUmVkdWNlcihzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fSxcbiAgZmlsZXM6IFtdLFxuICBzZWxlY3RlZEZpbGVzOiBbXVxufSwgYWN0aW9uOiBGaWxlTWFuYWdlckFjdGlvbik6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBjcm9wRmlsZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuSU5WRVJTRV9GSUxFX1NFTEVDVElPTjpcbiAgICAgIHJldHVybiBpbnZlcnNlRmlsZXNTZWxlY3Rpb24oc3RhdGUpO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUzpcbiAgICAgIHJldHVybiByZW1vdmVTZWxlY3RlZEZpbGVzKHN0YXRlKTtcbiAgICBjYXNlIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiByZW1vdmVGaWxlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5NT1ZFX0ZJTEVTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gbW92ZUZpbGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gbG9hZEZpbGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5TRUxFQ1RfQUxMOlxuICAgICAgcmV0dXJuIHNlbGVjdEFsbEZpbGVzKHN0YXRlKTtcbiAgICBjYXNlIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuU0VMRUNUX0ZJTEU6XG4gICAgICByZXR1cm4gc2VsZWN0RmlsZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVU5TRUxFQ1RfQUxMOlxuICAgICAgcmV0dXJuIHVuU2VsZWN0QWxsRmlsZXMoc3RhdGUpO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VTlNFTEVDVF9GSUxFOlxuICAgICAgcmV0dXJuIHVuU2VsZWN0RmlsZShzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVVBMT0FEX0ZJTEVfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB1cGxvYWRGaWxlcyhzdGF0ZSwgYWN0aW9uKTtcbiAgICBjYXNlIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEVfU0VMRUNUSU9OOlxuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEU6XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkRFTEVURV9GSUxFOlxuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTOlxuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5NT1ZFX0ZJTEVTX0VSUk9SOlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbGVtYW5hZ2VyU3RhdGVTZWxlY3RvcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIElGaWxlTWFuYWdlclN0YXRlPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxJRmlsZU1hbmFnZXJTdGF0ZT4oJ2ZpbGVzJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGwgPSAoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKTogSU91dGVyRmlsZVtdID0+IHtcbiAgcmV0dXJuIHN0YXRlLmZpbGVzLm1hcCgoaWQ6IHN0cmluZykgPT4gc3RhdGUuZW50aXRpZXNbaWRdKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0NoYW5nZVN0YXRlRmlsZXMgPSAobmV3U3RhdGU6IElGaWxlTWFuYWdlclN0YXRlLCBwcmV2U3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBwcmV2U3RhdGUuZmlsZXMubGVuZ3RoICE9PSBuZXdTdGF0ZS5maWxlcy5sZW5ndGggfHwgcHJldlN0YXRlLmZpbGVzLmZpbHRlcigoaTogc3RyaW5nKSA9PiBuZXdTdGF0ZS5maWxlcy5pbmRleE9mKGkpID09PSAtMSkubGVuZ3RoID4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0NoYW5nZVN0YXRlU2VsZWN0ZWRGaWxlcyA9IChuZXdTdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIHByZXZTdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIHByZXZTdGF0ZS5zZWxlY3RlZEZpbGVzLmxlbmd0aCAhPT0gbmV3U3RhdGUuc2VsZWN0ZWRGaWxlcy5sZW5ndGggfHwgcHJldlN0YXRlLnNlbGVjdGVkRmlsZXMuZmlsdGVyKChpOiBzdHJpbmcpID0+IG5ld1N0YXRlLnNlbGVjdGVkRmlsZXMuaW5kZXhPZihpKSA9PT0gLTEpLmxlbmd0aCA+IDA7XG59O1xuIiwiaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyU2VydmljZX0gZnJvbSAnLi9zZWFyY2hGaWx0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVUeXBlRmlsdGVyU2VydmljZX0gZnJvbSAnLi9maWxlVHlwZUZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7RmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvZmlsZS5tb2RlbCc7XG5pbXBvcnQge2ZpbGVtYW5hZ2VyU3RhdGVTZWxlY3RvciwgZ2V0QWxsLCBJRmlsZU1hbmFnZXJTdGF0ZSwgU3RvcmVFbnRpdGllc30gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLnJlZHVjZXInO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZVR5cGVGaWx0ZXJ9IGZyb20gJy4uL3Rvb2xiYXIvaW50ZXJmYWNlL0lGaWxlVHlwZUZpbHRlcic7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB3aXRoTGF0ZXN0RnJvbX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBmaWxlc1xuICAgKi9cbiAgcHVibGljIGZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT47XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgZmlsZXMgZm9yIGN1cnJlbnQgc2VsZWN0ZWQgZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgZmlsdGVyZWRGaWxlcyQ6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBmaWxlcyBhcyBKU09OIGRhdGFcbiAgICovXG4gIHB1YmxpYyBlbnRpdGllcyQ6IE9ic2VydmFibGU8U3RvcmVFbnRpdGllcz47XG5cbiAgLyoqXG4gICAqIExpc3Qgb2Ygc2VsZWN0ZWQgZmlsZSBpZHNcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZEZpbGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGZpbGVzIGluIGN1cnJlbnQgZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgY3VycmVudERpcmVjdG9yeUZpbGVJZHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlVHlwZUZpbHRlcjogRmlsZVR5cGVGaWx0ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBzZWFyY2hGaWx0ZXJTZXJ2aWNlOiBTZWFyY2hGaWx0ZXJTZXJ2aWNlKSB7XG5cbiAgICBjb25zdCBzdG9yZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChmaWxlbWFuYWdlclN0YXRlU2VsZWN0b3IpO1xuICAgIGNvbnN0IG9ic2VydmFibGUkID0gc3RvcmUkO1xuICAgIHRoaXMuZW50aXRpZXMkID0gb2JzZXJ2YWJsZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXMpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApO1xuXG4gICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZUlkcyQgPSBvYnNlcnZhYmxlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKSA9PiBzdGF0ZS5maWxlcyksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICk7XG5cbiAgICB0aGlzLnNlbGVjdGVkRmlsZXMkID0gc3RvcmUkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsZXMpXG4gICAgICApO1xuXG4gICAgdGhpcy5maWxlcyQgPSB0aGlzLmdldEZpbGVzU3RyZWFtKCk7XG4gICAgdGhpcy5maWx0ZXJlZEZpbGVzJCA9IHRoaXMuZ2V0Q3VycmVudERpcmVjdG9yeUZpbGVzU3RyZWFtKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHN0cmVhbSBvZiBmaWxlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRGaWxlc1N0cmVhbSgpOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVJZHMkXG4gICAgICAucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5lbnRpdGllcyQpLFxuICAgICAgICBtYXAoKGFyOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW50aXRpZXM6IGFyWzFdLFxuICAgICAgICAgICAgZmlsZXM6IGFyWzBdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoc3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBnZXRBbGwoc3RhdGUpXG4gICAgICAgICAgICAubWFwKChmaWxlOiBJT3V0ZXJGaWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgRmlsZU1vZGVsKGZpbGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBzdHJlYW0gb2YgY3VycmVudCBkaXJlY3RvcnkgZmlsdGVyZWQgZmlsZXNcbiAgICovXG4gIHByaXZhdGUgZ2V0Q3VycmVudERpcmVjdG9yeUZpbGVzU3RyZWFtKCk6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuZmlsZXMkLFxuICAgICAgdGhpcy5maWxlVHlwZUZpbHRlci5maWx0ZXIkLFxuICAgICAgdGhpcy5zZWFyY2hGaWx0ZXJTZXJ2aWNlLmZpbHRlciRcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkYXRhOiBbRmlsZU1vZGVsW10sIElGaWxlVHlwZUZpbHRlciwgc3RyaW5nXSk6IEZpbGVNb2RlbFtdID0+IHtcbiAgICAgICAgICBsZXQgZmlsZXMgPSBkYXRhWzBdO1xuICAgICAgICAgIGNvbnN0IGZpbGVUeXBlRmlsdGVyID0gZGF0YVsxXTtcbiAgICAgICAgICBjb25zdCBzZWFyY2ggPSBkYXRhWzJdLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoc2VhcmNoICE9PSAnJykge1xuICAgICAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoKGZpbGU6IEZpbGVNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZmlsZS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGlmIChmaWxlVHlwZUZpbHRlciAmJiBmaWxlVHlwZUZpbHRlci5taW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZTogRmlsZU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBmaWxlVHlwZUZpbHRlci5taW1lcy5pbmRleE9mKGZpbGUuZ2V0TWltZSgpKSA+IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZpbGVzO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SU5vZGVTZXJ2aWNlLCBJT3V0ZXJOb2RlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSwgRklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckFwaX0gZnJvbSAnLi9JRmlsZU1hbmFnZXJBcGknO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJRmlsZURhdGFQcm9wZXJ0aWVzfSBmcm9tICcuLi9zZXJ2aWNlcy9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckJhY2tlbmRBcGlTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RGaWxlTWFuYWdlckFwaVNlcnZpY2UgaW1wbGVtZW50cyBJRmlsZU1hbmFnZXJBcGksIElOb2RlU2VydmljZSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHJlZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEZJTEVNQU5BR0VSX1RSRUVfTkFNRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGZvbGRlciBjaGlkbHMgZm9yIGdpdmVuIGZvbGRlciBpZFxuICAgKi9cbiAgcHVibGljIGxvYWQobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIGNvbnN0IG5vZGVJZHMgPSB0aGlzLm5vZGVzLm1hcCgobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5pZCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnbm9kZUlkJywgbm9kZUlkIHx8ICcnKTtcblxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldDxJT3V0ZXJOb2RlW10+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlcnNVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobm9kZXM6IElPdXRlck5vZGVbXSkgPT4ge1xuICAgICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlSWRzLmluZGV4T2Yobm9kZS5pZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ub2Rlcy5maW5kSW5kZXgoKGl0ZW06IElPdXRlck5vZGUpID0+IG5vZGUuaWQgPT09IGl0ZW0uaWQpO1xuICAgICAgICAgICAgICB0aGlzLm5vZGVzW2luZGV4XSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgZm9sZGVyXG4gICAqL1xuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBub2RlOiBub2RlLFxuICAgICAgcGFyZW50Tm9kZUlkOiBwYXJlbnROb2RlSWRcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJzVXJsLCBkYXRhKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobmV3Tm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXdOb2RlKTtcblxuICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGZvbGRlciBmcm9tIHNvdXJjZSBwYXJlbnQgdG8gdGFyZ2V0IHBhcmVudFxuICAgKi9cbiAgcHVibGljIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBzcmNJZCA9IHNyY05vZGUuaWQ7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSB0YXJnZXROb2RlID8gdGFyZ2V0Tm9kZS5pZCA6IG51bGw7XG5cblxuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJNb3ZlVXJsLCB7c291cmNlOiBzcmNJZCwgdGFyZ2V0OiB0YXJnZXRJZH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChtb3ZlZE5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQoc3JjSWQpO1xuICAgICAgICAgIHRoaXMubm9kZXNbaW5kZXhdLnBhcmVudElkID0gdGFyZ2V0SWQ7XG5cbiAgICAgICAgICByZXR1cm4gbW92ZWROb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZm9sZGVyIG5hbWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJzVXJsLCBub2RlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobmV3Tm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlLmlkKTtcblxuICAgICAgICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbmV3Tm9kZTtcblxuICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbm9kZSBieSBnaXZlbiBpZFxuICAgKi9cbiAgcHVibGljIHJlbW92ZShub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlSWQpO1xuXG4gICAgY29uc3QgaGFzQ2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKG5vZGVJZCkubGVuZ3RoID4gMDtcblxuICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdub2RlSWQnLCBub2RlSWQpO1xuXG4gICAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGU8SU91dGVyTm9kZT4odGhpcy5jb25maWd1cmF0aW9uLmZvbGRlclVybHMuZm9sZGVyc1VybCwge3BhcmFtc30pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVtb3ZlZE5vZGU6IElPdXRlck5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWROb2RlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdOb2RlIGlzIG5vdCBlbXB0eScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlcyA9IFsuLi5ub2Rlc107XG4gIH1cblxuICAvKipcbiAgICogQ3JvcCBmaWxlXG4gICAqL1xuICBwdWJsaWMgY3JvcEZpbGUoZmlsZTogSU91dGVyRmlsZSwgYm91bmRzOiBJQ3JvcEJvdW5kcyk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJGaWxlPih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge2lkOiBmaWxlLmlkLCBib3VuZHM6IGJvdW5kc30pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgZmlsZXMgZnJvbSBkaXJlY3RvcnlcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlckZpbGVbXT4ge1xuICAgIHRoaXMuY3VycmVudE5vZGVJZCA9IG5vZGVJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnZGlySWQnLCBub2RlSWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0PElPdXRlckZpbGVbXT4odGhpcy5jb25maWd1cmF0aW9uLmZpbGVVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoZmlsZXM6IElPdXRlckZpbGVbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcy5tYXAoKGZpbGU6IElPdXRlckZpbGUpID0+IDxJRmlsZURhdGFQcm9wZXJ0aWVzPmZpbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpbGVzO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZmlsZSBmcm9tIGZvbGRlclxuICAgKi9cbiAgcHVibGljIHJlbW92ZUZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeUZpbGVJZChmaWxlLmlkLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnaWQnLCBmaWxlLmlkLnRvU3RyaW5nKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZGVsZXRlPGFueT4odGhpcy5jb25maWd1cmF0aW9uLmZpbGVVcmwsIHtwYXJhbXN9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkRmlsZXMoc2VsZWN0ZWRGaWxlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnaWQnLCBzZWxlY3RlZEZpbGVzLmpvaW4oJ3wnKSk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGU8YW55Pih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICBzZWxlY3RlZEZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHN1Y2Nlc3MgbWV0aG9kLCByZWFsIHVwbG9hZCBpcyBkb25lIGluIEV4dGVuZGVkRmlsZVVwbG9hZGVyXG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlPiB7XG4gICAgY29uc3QgZmlsZURhdGEgPSA8SUZpbGVEYXRhUHJvcGVydGllcz5maWxlO1xuICAgIHRoaXMuZmlsZXMucHVzaChmaWxlRGF0YSk7XG5cbiAgICByZXR1cm4gb2YoZmlsZSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZUZpbGUoZmlsZXM6IElPdXRlckZpbGVbXSwgbm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wdXQ8SU91dGVyRmlsZVtdPih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge2ZpbGVzOiBpZHMsIGZvbGRlcklkOiBub2RlID8gbm9kZS5pZCA6ICcnfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRJbmRleEJ5Tm9kZUlkKG5vZGVJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maW5kSW5kZXgoKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBub2RlLmlkID09PSBub2RlSWQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRJbmRleEJ5RmlsZUlkKGZpbGVJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maW5kSW5kZXgoKGZpbGUpID0+IGZpbGUuaWQgPT09IGZpbGVJZCk7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuKG5vZGVJZDogc3RyaW5nKTogSU91dGVyTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maWx0ZXIoKG5vZGU6IElPdXRlck5vZGUpID0+IG5vZGUucGFyZW50SWQgPT09IG5vZGVJZCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlOiBJRmlsZURhdGFQcm9wZXJ0aWVzKTogSU91dGVyRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBmaWxlLmlkLFxuICAgICAgZm9sZGVySWQ6IGZpbGUuZm9sZGVySWQsXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICB0aHVtYm5haWxVcmw6IGZpbGUuZGF0YSxcbiAgICAgIHVybDogZmlsZS5kYXRhLFxuICAgICAgd2lkdGg6IGZpbGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpbGUuaGVpZ2h0LFxuICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgc2l6ZTogZmlsZS5zaXplXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydElPdXRlckZpbGUyTG9jYWxEYXRhKGZpbGU6IElPdXRlckZpbGUpOiBJRmlsZURhdGFQcm9wZXJ0aWVzIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGZpbGUuaWQudG9TdHJpbmcoKSxcbiAgICAgIGZvbGRlcklkOiBmaWxlLmZvbGRlcklkLFxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgZGF0YTogZmlsZS5kYXRhLFxuICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgd2lkdGg6IGZpbGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGZpbGUuaGVpZ2h0XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRmlsZVR5cGVGaWx0ZXJ9IGZyb20gJy4uL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuaW1wb3J0IHtGaWxlVHlwZUZpbHRlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1maWxlLXR5cGUtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGVUeXBlRmlsdGVyLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVUeXBlRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdHlwZUZpbHRlckxpc3Q6IElGaWxlVHlwZUZpbHRlcltdID0gW107XG5cbiAgcHVibGljIHNlbGVjdGVkVHlwZTogSUZpbGVUeXBlRmlsdGVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVUeXBlRmlsdGVyOiBGaWxlVHlwZUZpbHRlclNlcnZpY2UpIHtcbiAgICB0aGlzLmZpbGVUeXBlRmlsdGVyLmZpbHRlciRcbiAgICAgIC5zdWJzY3JpYmUoKHR5cGU6IElGaWxlVHlwZUZpbHRlciB8IG51bGwpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFR5cGUgPSB0eXBlO1xuICAgICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qKiBpbml0IGZpbGUgdHlwZSBmaWx0ZXIgKiovXG4gICAgdGhpcy50eXBlRmlsdGVyTGlzdFxuICAgICAgLmZpbHRlcigodHlwZTogSUZpbGVUeXBlRmlsdGVyKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlLmRlZmF1bHRTZWxlY3RlZDtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaCgodHlwZTogSUZpbGVUeXBlRmlsdGVyKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZVR5cGVGaWx0ZXIuc2V0VmFsdWUodHlwZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY3VycmVudCBmaWx0ZXIgYW5kIGZpcmUgZXZlbnRcbiAgICogQHBhcmFtIHR5cGVcbiAgICovXG4gIHB1YmxpYyBzZXRGaWx0ZXJUeXBlKHR5cGU6IElGaWxlVHlwZUZpbHRlcikge1xuICAgIHRoaXMuZmlsZVR5cGVGaWx0ZXIuc2V0VmFsdWUodHlwZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBJVXBsb2FkSXRlbUV2ZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICByZXNwb25zZTogYW55O1xuICBzdGF0dXM6IG51bWJlcjtcbn1cbiIsImV4cG9ydCBlbnVtIEJ1dHRvbiB7XG4gIEFERF9GT0xERVIgPSAnQUREX0ZPTERFUicsXG4gIENIT09TRV9TRUxFQ1RJT04gPSAnQ0hPT1NFX1NFTEVDVElPTicsXG4gIERFTEVURV9TRUxFQ1RJT04gPSAnREVMRVRFX1NFTEVDVElPTicsXG4gIElOVkVSU0VfU0VMRUNUSU9OID0gJ0lOVkVSU0VfU0VMRUNUSU9OJyxcbiAgUkVGUkVTSF9GSUxFU19MSVNUID0gJ1JFRlJFU0hfRklMRVNfTElTVCcsXG4gIFNFTEVDVF9BTEwgPSAnU0VMRUNUX0FMTCcsXG4gIFVOU0VMRUNUX0FMTCA9ICdVTlNFTEVDVF9BTEwnLFxufVxuIiwiaW1wb3J0IHtJVG9vbGJhckV2ZW50fSBmcm9tICcuLi9pbnRlcmZhY2UvSVRvb2xiYXJFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUb29sYmFyRXZlbnRNb2RlbCBpbXBsZW1lbnRzIElUb29sYmFyRXZlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZyA9IG51bGwpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaEZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLXNlYXJjaC1maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaEZpbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHNlYXJjaEZpZWxkID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWFyY2hGaWx0ZXJTZXJ2aWNlOiBTZWFyY2hGaWx0ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLnNlYXJjaEZpbHRlclNlcnZpY2Uuc2V0VmFsdWUodmFsdWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJQnV0dG9uLCBJQnV0dG9uRGF0YX0gZnJvbSAnLi9JQnV0dG9uJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QnV0dG9uQ2xhc3MgaW1wbGVtZW50cyBJQnV0dG9uIHtcbiAgcHVibGljIHN5bWJvbDogc3RyaW5nO1xuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgbGFiZWw6IGJvb2xlYW47XG4gIHB1YmxpYyBpY29uOiBib29sZWFuO1xuICBwdWJsaWMgaWNvbkNzc0NsYXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IElCdXR0b25EYXRhKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBkYXRhLnN5bWJvbDtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5sYWJlbCA9IGRhdGEubGFiZWw7XG4gICAgdGhpcy5pY29uID0gZGF0YS5pY29uO1xuICAgIHRoaXMuaWNvbkNzc0NsYXNzID0gZGF0YS5pY29uQ3NzQ2xhc3M7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRhdGEuZGlzYWJsZWQ7XG4gIH1cblxuICBhYnN0cmFjdCBpc0RpdmlkZXIoKTogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7QWJzdHJhY3RCdXR0b25DbGFzc30gZnJvbSAnLi9BYnN0cmFjdEJ1dHRvbi5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b25DbGFzcyBleHRlbmRzIEFic3RyYWN0QnV0dG9uQ2xhc3Mge1xuICBwdWJsaWMgaXNEaXZpZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEJ1dHRvbkNsYXNzfSBmcm9tICcuL0Fic3RyYWN0QnV0dG9uLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpdmlkZXJDbGFzcyBleHRlbmRzIEFic3RyYWN0QnV0dG9uQ2xhc3Mge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgc3ltYm9sOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgbGFiZWw6IGZhbHNlLFxuICAgICAgaWNvbjogZmFsc2UsXG4gICAgICBpY29uQ3NzQ2xhc3M6ICcnXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNEaXZpZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lCdXR0b24sIElCdXR0b25EYXRhfSBmcm9tICcuLi8uLi9kcm9wZG93bi9JQnV0dG9uJztcbmltcG9ydCB7QnV0dG9uQ2xhc3N9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL0J1dHRvbi5jbGFzcyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vbW9kZWxzL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0J1dHRvbkRpdmlkZXJDbGFzc30gZnJvbSAnLi4vLi4vZHJvcGRvd24vQnV0dG9uRGl2aWRlci5jbGFzcyc7XG5pbXBvcnQge0N1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2N1cnJlbnREaXJlY3RvcnlGaWxlcy5zZXJ2aWNlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7SVRvb2xiYXJFdmVudH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lUb29sYmFyRXZlbnQnO1xuaW1wb3J0IHtUb29sYmFyRXZlbnRNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL3Rvb2xiYXJFdmVudC5tb2RlbCc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLXNlbGVjdGlvbi1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Rpb24uZHJvcGRvd24uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbk1lbnVCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgc2VsZWN0QnV0dG9uc0xpc3Q6IElCdXR0b25bXTtcblxuICBwdWJsaWMgc2VsZWN0QWxsQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5TRUxFQ1RfQUxMLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfU0VMRUNUX0FMTCcsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS1jaGVjay1zcXVhcmUtbydcbiAgfSk7XG5cbiAgcHJpdmF0ZSB1bnNlbGVjdEFsbEJ1dHRvbiA9IG5ldyBCdXR0b25DbGFzcyh7XG4gICAgc3ltYm9sOiBCdXR0b24uVU5TRUxFQ1RfQUxMLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfVU5TRUxFQ1RfQUxMJyxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBpY29uOiB0cnVlLFxuICAgIGljb25Dc3NDbGFzczogJ2ZhIGZhLXNxdWFyZS1vJ1xuICB9KTtcblxuICBwcml2YXRlIGludmVyc2VTZWxlY3Rpb25CdXR0b24gPSBuZXcgQnV0dG9uQ2xhc3Moe1xuICAgIHN5bWJvbDogQnV0dG9uLklOVkVSU0VfU0VMRUNUSU9OLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfSU5WRVJTRV9TRUxFQ1RJT04nLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGljb246IHRydWUsXG4gICAgaWNvbkNzc0NsYXNzOiAnZmEgZmEtY2hlY2stc3F1YXJlJ1xuICB9KTtcblxuICBwcml2YXRlIGRlbGV0ZVNlbGVjdGlvbkJ1dHRvbiA9IG5ldyBCdXR0b25DbGFzcyh7XG4gICAgc3ltYm9sOiBCdXR0b24uREVMRVRFX1NFTEVDVElPTixcbiAgICBuYW1lOiAnUklfRk1fTEJMX0RFTEVURV9TRUxFQ1RJT04nLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGljb246IHRydWUsXG4gICAgaWNvbkNzc0NsYXNzOiAnZmEgZmEtdHJhc2gnXG4gIH0pO1xuXG4gIHByaXZhdGUgY2hvb3NlU2VsZWN0aW9uQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5DSE9PU0VfU0VMRUNUSU9OLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfQ0hPT1NFX1NFTEVDVElPTicsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS1pbWFnZSdcbiAgfSk7XG5cbiAgcHJpdmF0ZSBvbkxvYWRGaWxlc1N1YnNjcmliZXI6IFN1YnNjcmlwdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZTogQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSkge1xuXG4gICAgdGhpcy5zZWxlY3RCdXR0b25zTGlzdCA9IHRoaXMuY3JlYXRlQmFzaWNCdXR0b25zKCk7XG5cbiAgICB0aGlzLmluaXRMaXN0ZW5PbkxvYWRGaWxlcygpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25Mb2FkRmlsZXNTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBsaXN0ZW5lciBvbiBsb2FkIGZpbGVzXG4gICAqL1xuICBwdWJsaWMgaW5pdExpc3Rlbk9uTG9hZEZpbGVzKCkge1xuICAgIHRoaXMub25Mb2FkRmlsZXNTdWJzY3JpYmVyID0gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5jdXJyZW50RGlyZWN0b3J5RmlsZUlkcyQsXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uuc2VsZWN0ZWRGaWxlcyRcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nW11bXSkgPT4ge1xuICAgICAgICBjb25zdCBudW1iZXJPZkZpbGVzID0gZGF0YVswXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG51bWJlck9mU2VsZWN0ZWRGaWxlcyA9IGRhdGFbMV0ubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZUFsbEJ1dHRvbnMoKTtcblxuICAgICAgICBpZiAobnVtYmVyT2ZGaWxlcyA+IDApIHtcbiAgICAgICAgICBpZiAobnVtYmVyT2ZTZWxlY3RlZEZpbGVzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVBbGxCdXR0b25zKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU2VsZWN0QWxsQnV0dG9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIG9uU2VsZWN0RHJvcGRvd25DbGljayhidXR0b246IElCdXR0b25EYXRhKSB7XG4gICAgY29uc3QgZXZlbnQ6IElUb29sYmFyRXZlbnQgPSBuZXcgVG9vbGJhckV2ZW50TW9kZWwoYnV0dG9uLnN5bWJvbCk7XG4gICAgdGhpcy5vbk1lbnVCdXR0b25DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFsbCBkcm9wZG93biBidXR0b25zIGFuZCBtYWluIGJ1dHRvblxuICAgKi9cbiAgcHJpdmF0ZSBkaXNhYmxlQWxsQnV0dG9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNlbGVjdEJ1dHRvbnNMaXN0XG4gICAgICAuZmlsdGVyKChidXR0b246IElCdXR0b24pID0+IHtcbiAgICAgICAgcmV0dXJuICFidXR0b24uaXNEaXZpZGVyKCk7XG4gICAgICB9KVxuICAgICAgLmZvckVhY2goKGJ1dHRvbjogSUJ1dHRvbkRhdGEpID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbGwgZHJvcGRvd24gYnV0dG9ucyBhbmQgbWFpbiBidXR0b25cbiAgICovXG4gIHByaXZhdGUgZW5hYmxlQWxsQnV0dG9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZWxlY3RCdXR0b25zTGlzdFxuICAgICAgLmZvckVhY2goKGJ1dHRvbjogSUJ1dHRvbkRhdGEpID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbGlzdCBvZiBidXR0b25zXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUJhc2ljQnV0dG9ucygpOiBJQnV0dG9uW10ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgICB0aGlzLnNlbGVjdEFsbEJ1dHRvbixcbiAgICAgIHRoaXMudW5zZWxlY3RBbGxCdXR0b24sXG4gICAgICB0aGlzLmludmVyc2VTZWxlY3Rpb25CdXR0b24sXG4gICAgICBuZXcgQnV0dG9uRGl2aWRlckNsYXNzKCksXG4gICAgICB0aGlzLmRlbGV0ZVNlbGVjdGlvbkJ1dHRvbixcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hbGxvd0Nob29zZU11bHRpcGxlRmlsZXMpIHtcbiAgICAgIGJ1dHRvbnMucHVzaChuZXcgQnV0dG9uRGl2aWRlckNsYXNzKCkpO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMuY2hvb3NlU2VsZWN0aW9uQnV0dG9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb25seSBzZWxlY3QgYnV0dG9uXG4gICAqL1xuICBwcml2YXRlIGVuYWJsZVNlbGVjdEFsbEJ1dHRvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW52ZXJzZVNlbGVjdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vbW9kZWxzL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge1Rvb2xiYXJFdmVudE1vZGVsfSBmcm9tICcuL21vZGVscy90b29sYmFyRXZlbnQubW9kZWwnO1xuaW1wb3J0IHtJVG9vbGJhckV2ZW50fSBmcm9tICcuL2ludGVyZmFjZS9JVG9vbGJhckV2ZW50JztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuLi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJVcGxvYWRlcn0gZnJvbSAnLi4vZmlsZXNMaXN0L2ZpbGVNYW5hZ2VyVXBsb2FkZXIuc2VydmljZSc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge1VwbG9hZEZpbGVzQWN0aW9uLCBVcGxvYWRGaWxlc0Vycm9yQWN0aW9ufSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktdG9vbGJhcicsXG4gIHN0eWxlVXJsczogWycuL3Rvb2xiYXIuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjdXJyZW50Rm9sZGVySWQ6IHN0cmluZztcblxuICBAT3V0cHV0KCkgb25BZGRGb2xkZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uVXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25NZW51QnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyBmaWxlTWFuYWdlclVwbG9hZGVyOiBGaWxlTWFuYWdlclVwbG9hZGVyLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+KSB7XG5cbiAgICB0aGlzLmZpbGVNYW5hZ2VyVXBsb2FkZXIuY2xlYXIoKTtcblxuICAgIHRoaXMuZmlsZU1hbmFnZXJVcGxvYWRlci51cGxvYWRlci5vbkNvbXBsZXRlQWxsID0gKCkgPT4ge1xuICAgICAgdGhpcy5vblVwbG9hZC5lbWl0KHRoaXMuY3VycmVudEZvbGRlcklkIHx8ICcnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5maWxlTWFuYWdlclVwbG9hZGVyLnVwbG9hZGVyLm9uQ29tcGxldGVJdGVtID0gKGl0ZW06IGFueSwgcmVzcG9uc2U6IGFueSwgc3RhdHVzOiBudW1iZXIsIGhlYWRlcnM6IGFueSkgPT4ge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzQWN0aW9uKHtmaWxlczogSlNPTi5wYXJzZShyZXNwb25zZSl9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uKHtmaWxlczogSlNPTi5wYXJzZShyZXNwb25zZSl9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmZpbGVNYW5hZ2VyVXBsb2FkZXIuc2V0RGlyZWN0b3J5SWQodGhpcy5jdXJyZW50Rm9sZGVySWQgfHwgJycpO1xuICB9XG5cbiAgcHVibGljIGFkZEZvbGRlcigpIHtcbiAgICBsZXQgZXZlbnQ6IElUb29sYmFyRXZlbnQgPSBuZXcgVG9vbGJhckV2ZW50TW9kZWwoQnV0dG9uLkFERF9GT0xERVIsICdOb3d5IGZvbGRlcicpO1xuICAgIHRoaXMub25BZGRGb2xkZXJDbGljay5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBvblJlZnJlc2hGaWxlc0xpc3QoKSB7XG4gICAgbGV0IGV2ZW50OiBJVG9vbGJhckV2ZW50ID0gbmV3IFRvb2xiYXJFdmVudE1vZGVsKEJ1dHRvbi5SRUZSRVNIX0ZJTEVTX0xJU1QpO1xuICAgIHRoaXMub25NZW51QnV0dG9uQ2xpY2suZW1pdChldmVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFRyZWVDb21wb25lbnQsXG4gIE5vZGVTZXJ2aWNlLFxuICBJQ29udGV4dE1lbnUsXG4gIElPdXRlck5vZGUsXG4gIElUcmVlRGF0YSxcbiAgSVRyZWVTdGF0ZSxcbiAgSUNvbmZpZ3VyYXRpb24sXG4gIFRyZWVNb2RlbCxcbiAgTm9kZURpc3BhdGNoZXJTZXJ2aWNlLCBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlLFxufSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7RmlsZU1vZGVsfSBmcm9tICcuL2ZpbGVzTGlzdC9maWxlLm1vZGVsJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtJRmlsZUV2ZW50fSBmcm9tICcuL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVFdmVudCc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi90b29sYmFyL21vZGVscy9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtGaWxlc0xpc3RDb21wb25lbnR9IGZyb20gJy4vZmlsZXNMaXN0L2ZpbGVzTGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtJVG9vbGJhckV2ZW50fSBmcm9tICcuL3Rvb2xiYXIvaW50ZXJmYWNlL0lUb29sYmFyRXZlbnQnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckVmZmVjdHMuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQXBpU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFwaS5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMsIElOb3RpZmljYXRpb259IGZyb20gJy4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2N1cnJlbnREaXJlY3RvcnlGaWxlcy5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtGSUxFTUFOQUdFUl9UUkVFX05BTUV9IGZyb20gJy4vc3RvcmUvZmlsZU1hbmFnZXJBcGlBYnN0cmFjdC5jbGFzcyc7XG5pbXBvcnQge1xuICBDaG9vc2VGaWxlc0FjdGlvbixcbiAgRGVsZXRlU2VsZWN0ZWRGaWxlc0FjdGlvbiwgSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uLCBMb2FkRmlsZXNBY3Rpb24sXG4gIFNlbGVjdEFsbEZpbGVzQWN0aW9uLFxuICBVblNlbGVjdEFsbEZpbGVzQWN0aW9uXG59IGZyb20gJy4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGVtYW5hZ2VyJyxcbiAgcHJvdmlkZXJzOiBbTm9kZVNlcnZpY2UsIE5vdGlmaWNhdGlvbnNTZXJ2aWNlXSxcbiAgc3R5bGVVcmxzOiBbJy4vbWFpbi5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlbWFuYWdlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblNpbmdsZUZpbGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChUcmVlQ29tcG9uZW50KVxuICBwdWJsaWMgdHJlZUNvbXBvbmVudDogVHJlZUNvbXBvbmVudDtcblxuICBAVmlld0NoaWxkKEZpbGVzTGlzdENvbXBvbmVudClcbiAgcHVibGljIGZpbGVzTGlzdDogRmlsZXNMaXN0Q29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGZpbGVzIGZvciBjdXJyZW50IHNlbGVjdGVkIGRpcmVjdG9yeVxuICAgKi9cbiAgcHJpdmF0ZSBmaWxlcyQ6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+O1xuXG4gIHB1YmxpYyBmaWx0ZXJlZEZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT47XG4gIHB1YmxpYyBzZWxlY3RlZEZpbGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgcHVibGljIGZvbGRlcnM6IE9ic2VydmFibGU8SVRyZWVEYXRhPjtcblxuICBwdWJsaWMgdHJlZUNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uID0ge1xuICAgIHNob3dBZGRCdXR0b246IGZhbHNlLFxuICAgIGRpc2FibGVNb3ZlTm9kZXM6IGZhbHNlLFxuICAgIHRyZWVJZDogRklMRU1BTkFHRVJfVFJFRV9OQU1FLFxuICAgIGRyYWdab25lOiBGSUxFTUFOQUdFUl9UUkVFX05BTUUsXG4gICAgZHJvcFpvbmU6IFtGSUxFTUFOQUdFUl9UUkVFX05BTUVdXG4gIH07XG5cbiAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xuXG4gIC8qKiBVTlNFRCAqKi9cbiAgcHVibGljIGNvbnRleHRNZW51OiBJQ29udGV4dE1lbnVbXSA9IFtdO1xuXG4gIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRGaWxlOiBJRmlsZU1vZGVsO1xuICBwdWJsaWMgY3VycmVudFNlbGVjdGVkRmlsZXNJZHM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRGaWxlczogSU91dGVyRmlsZVtdID0gW107XG5cbiAgcHVibGljIGlzUHJldmlld01vZGUgPSBmYWxzZTtcbiAgcHVibGljIGlzQ3JvcE1vZGUgPSBmYWxzZTtcblxuICBwdWJsaWMgbm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcbiAgICBwb3NpdGlvbjogWydib3R0b20nLCAncmlnaHQnXSxcbiAgICB0aW1lT3V0OiAzMDAwLFxuICAgIGxhc3RPbkJvdHRvbTogZmFsc2UsXG4gICAgcHJldmVudER1cGxpY2F0ZXM6IHRydWUsXG4gICAgcnRsOiBmYWxzZSxcbiAgICBzaG93UHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgcGF1c2VPbkhvdmVyOiB0cnVlXG4gIH07XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgY29udGV4dCBtZW51XG4gICAqL1xuICBwdWJsaWMgbWVudTogSUNvbnRleHRNZW51W107XG5cbiAgcHJvdGVjdGVkIGN1cnJlbnRTZWxlY3RlZEZvbGRlcjogSU91dGVyTm9kZTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8SVRyZWVTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIG5vZGVEaXNwYXRjaGVyU2VydmljZTogTm9kZURpc3BhdGNoZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmVlU2VydmljZTogRmlsZU1hbmFnZXJBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlTWFuYWdlckVmZmVjdHM6IEZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVtYW5hZ2VyTm90aWZjYXRpb25zOiBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZTogQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgdHJlZUluaXRpYWxpemVyU2VydmljZTogVHJlZUluaXRpYWxpemVyU2VydmljZSkge1xuXG4gICAgdGhpcy5tZW51ID0gY29uZmlndXJhdGlvbi5jb250ZXh0TWVudUl0ZW1zO1xuXG4gICAgdGhpcy5maWxlbWFuYWdlck5vdGlmY2F0aW9ucy5nZXROb3RpZmljYXRpb25TdHJlYW0oKVxuICAgICAgLnN1YnNjcmliZSgobm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHt0eXBlLCB0aXRsZSwgbWVzc2FnZX0gPSBub3RpZmljYXRpb247XG5cbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zW3R5cGVdKHRpdGxlLCBtZXNzYWdlKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLnNlbGVjdGVkRmlsZXMkXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlc0lkcyA9IGRhdGE7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5zZWxlY3RlZEZpbGVzJCxcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLmVudGl0aWVzJCxcbiAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoW2lkcywgZW50aXRpZXNdOiBbc3RyaW5nW10sIHsgW2tleTogc3RyaW5nXTogSU91dGVyRmlsZSB9XSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkRmlsZXMgPSBpZHMubWFwKChpZCkgPT4gZW50aXRpZXNbaWRdKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50cmVlTW9kZWwgPSB0aGlzLnRyZWVJbml0aWFsaXplclNlcnZpY2UuaW5pdCh0aGlzLnRyZWVDb25maWd1cmF0aW9uLCB0aGlzLnRyZWVTZXJ2aWNlKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudHJlZU1vZGVsLmN1cnJlbnRTZWxlY3RlZE5vZGUkXG4gICAgICAgIC5zdWJzY3JpYmUoKG5vZGU6IElPdXRlck5vZGUpID0+IHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyID0gbm9kZSlcbiAgICApO1xuXG4gICAgLyoqKiBTVEFSVCAtIGluaXQgZmlsZXMgKioqL1xuICAgIHRoaXMuZmlsZXMkID0gdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLmZpbGVzJDtcbiAgICB0aGlzLmZpbHRlcmVkRmlsZXMkID0gdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLmZpbHRlcmVkRmlsZXMkO1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlcyQgPSB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uuc2VsZWN0ZWRGaWxlcyQ7XG5cblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMudHJlZU1vZGVsLmN1cnJlbnRTZWxlY3RlZE5vZGUkXG4gICAgICAgIC5zdWJzY3JpYmUoKG5vZGU6IElPdXRlck5vZGUgfCBudWxsKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkRmlsZXMobm9kZSA/IG5vZGUuaWQgOiAnJyk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8qKiogRU5EIC0gaW5pdCBmaWxlcyAqKiovXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5maWxlTWFuYWdlckVmZmVjdHMuY3JvcEZpbGVTdWNjZXNzJFxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRTZWxlY3RlZEZvbGRlcklkKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3RlZEZvbGRlciA/IHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyLmlkIDogbnVsbDtcbiAgfVxuXG5cbiAgcHVibGljIG9uQWRkRm9sZGVyKCkge1xuICAgIHRoaXMudHJlZUNvbXBvbmVudC5vbkFkZCgpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIEZJTEUgRVZFTlRTXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKipcbiAgICogUnVuIHdoZW4gYWxsIGZpbGVzIGFyZSB1cGxvYWRlZFxuICAgKi9cbiAgcHVibGljIG9uVXBsb2FkKGZvbGRlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc3VjY2VzcygnRmlsZSB1cGxvYWQnLCAnVXBsb2FkIGNvbXBsZXRlJyk7XG4gIH1cblxuXG4gIHB1YmxpYyBvblByZXZpZXdGaWxlKGZpbGVFdmVudERhdGE6IElGaWxlRXZlbnQpIHtcbiAgICB0aGlzLmlzUHJldmlld01vZGUgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGVkRmlsZSA9IGZpbGVFdmVudERhdGEuZmlsZTtcbiAgfVxuXG5cbiAgcHVibGljIG9uT3BlbkNyb3BGaWxlRWRpdG9yKGZpbGVFdmVudERhdGE6IElGaWxlRXZlbnQpIHtcbiAgICB0aGlzLmlzQ3JvcE1vZGUgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGVkRmlsZSA9IGZpbGVFdmVudERhdGEuZmlsZTtcbiAgfVxuXG5cbiAgcHVibGljIG9uU2VsZWN0RmlsZShldmVudDogRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5vblNpbmdsZUZpbGVTZWxlY3QubmV4dChldmVudC5nZXRTZWxlY3REYXRhKCkpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFRPT0xCQVIgRVZFTlRTXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgcHVibGljIG9uTWVudUJ1dHRvbkNsaWNrKGV2ZW50OiBJVG9vbGJhckV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5uYW1lKSB7XG4gICAgICBjYXNlIEJ1dHRvbi5DSE9PU0VfU0VMRUNUSU9OOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaG9vc2VGaWxlc0FjdGlvbih7ZmlsZXM6IHRoaXMuY3VycmVudFNlbGVjdGVkRmlsZXN9KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCdXR0b24uREVMRVRFX1NFTEVDVElPTjpcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlU2VsZWN0ZWRGaWxlc0FjdGlvbih7ZmlsZXM6IHRoaXMuY3VycmVudFNlbGVjdGVkRmlsZXNJZHN9KSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCdXR0b24uU0VMRUNUX0FMTDpcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCdXR0b24uVU5TRUxFQ1RfQUxMOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVblNlbGVjdEFsbEZpbGVzQWN0aW9uKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQnV0dG9uLklOVkVSU0VfU0VMRUNUSU9OOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24oKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCdXR0b24uUkVGUkVTSF9GSUxFU19MSVNUOlxuICAgICAgICB0aGlzLnJlbG9hZEZpbGVzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBPVEhFUiBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleUV2ZW50cyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmlzUHJldmlld01vZGUgfHwgdGhpcy5pc0Nyb3BNb2RlKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5pc1ByZXZpZXdNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BNb2RlID0gZmFsc2U7XG4gIH1cblxuXG4gIHByaXZhdGUgbG9hZEZpbGVzKGZvbGRlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBMb2FkRmlsZXNBY3Rpb24oe2ZvbGRlcklkOiBmb2xkZXJJZCB8fCAnJ30pKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVsb2FkRmlsZXMoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmN1cnJlbnRTZWxlY3RlZEZvbGRlciA/IHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyLmlkIDogJyc7XG5cbiAgICB0aGlzLmxvYWRGaWxlcyhpZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7TmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIFByb3ZpZGVyLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VHJlZU1vZHVsZX0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlLCBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb21wb25lbnR9IGZyb20gJy4vZmlsZW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7VG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7RmlsZXNMaXN0Q29tcG9uZW50fSBmcm9tICcuL2ZpbGVzTGlzdC9maWxlc0xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7SW1hZ2VDcm9wcGVyQ29tcG9uZW50LCBJbWFnZUNyb3BwZXJNb2R1bGV9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XG5pbXBvcnQge0Nyb3BDb21wb25lbnR9IGZyb20gJy4vY3JvcC9jcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQge1ByZXZpZXdDb21wb25lbnR9IGZyb20gJy4vcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQge0Ryb3Bkb3duQ29tcG9uZW50fSBmcm9tICcuL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpbGVVcGxvYWRNb2R1bGV9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJVcGxvYWRlcn0gZnJvbSAnLi9maWxlc0xpc3QvZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7VHJlZVNlcnZpY2V9IGZyb20gJy4vY29uZmlndXJhdGlvbi90cmVlLnNlcnZpY2UnO1xuaW1wb3J0IHtFZmZlY3RzTW9kdWxlfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7RmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckVmZmVjdHMuc2VydmljZSc7XG5pbXBvcnQge1N0b3JlTW9kdWxlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge2ZpbGVNYW5hZ2VyUmVkdWNlcn0gZnJvbSAnLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2V9IGZyb20gJy4vc3RvcmUvZmlsZU1hbmFnZXJBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yZURldnRvb2xzTW9kdWxlfSBmcm9tICdAbmdyeC9zdG9yZS1kZXZ0b29scyc7XG5pbXBvcnQge0ZpbGVUeXBlRmlsdGVyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9maWxlVHlwZUZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2hGaWx0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2V9IGZyb20gJy4vc3RvcmUvZmlsZS1tYW5hZ2VyLWRpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVUeXBlRmlsdGVyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIvZmlsZVR5cGVGaWx0ZXIvZmlsZVR5cGVGaWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoRmlsZUNvbXBvbmVudH0gZnJvbSAnLi90b29sYmFyL3NlYXJjaEZpbGUvc2VhcmNoRmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckFwaVNlcnZpY2V9IGZyb20gJy4vc3RvcmUvZmlsZU1hbmFnZXJBcGkuc2VydmljZSc7XG5pbXBvcnQge0ltYWdlRGF0YUNvbnZlcnRlcn0gZnJvbSAnLi9zZXJ2aWNlcy9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zfSBmcm9tICcuL3NlcnZpY2VzL0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zJztcbmltcG9ydCB7Q29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZX0gZnJvbSAnYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlcic7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQmFja2VuZEFwaVNlcnZpY2V9IGZyb20gJy4vc3RvcmUvZmlsZU1hbmFnZXJCYWNrZW5kQXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2N1cnJlbnREaXJlY3RvcnlGaWxlcy5zZXJ2aWNlJztcbmltcG9ydCB7U2VsZWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIvc2VsZWN0aW9uRHJvcERvd24vc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpbGVDb21wb25lbnR9IGZyb20gJy4vZmlsZXNMaXN0L2ZpbGUvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGV9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUsXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlXSksXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnZmlsZXMnLCBmaWxlTWFuYWdlclJlZHVjZXIpLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBUcmVlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZpbGVNYW5hZ2VyQ29tcG9uZW50LFxuICAgIEZpbGVDb21wb25lbnQsXG4gICAgRmlsZVR5cGVGaWx0ZXJDb21wb25lbnQsXG4gICAgVG9vbGJhckNvbXBvbmVudCxcbiAgICBGaWxlc0xpc3RDb21wb25lbnQsXG4gICAgRHJvcGRvd25Db21wb25lbnQsXG4gICAgUHJldmlld0NvbXBvbmVudCxcbiAgICBDcm9wQ29tcG9uZW50LFxuICAgIFNlYXJjaEZpbGVDb21wb25lbnQsXG4gICAgU2VsZWN0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEltYWdlQ3JvcHBlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbRmlsZU1hbmFnZXJDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJNb2R1bGUge1xuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IElGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sIGFwaVByb3ZpZGVyOiBQcm92aWRlciA9IG51bGwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZpbGVNYW5hZ2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyQXBpU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJCYWNrZW5kQXBpU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICBGaWxlTWFuYWdlckRpc3BhdGNoZXJTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlLFxuICAgICAgICBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucyxcbiAgICAgICAgRmlsZU1hbmFnZXJVcGxvYWRlcixcbiAgICAgICAgRmlsZVR5cGVGaWx0ZXJTZXJ2aWNlLFxuICAgICAgICBJbWFnZURhdGFDb252ZXJ0ZXIsXG4gICAgICAgIE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICBTZWFyY2hGaWx0ZXJTZXJ2aWNlLFxuICAgICAgICBUcmVlU2VydmljZSxcbiAgICAgICAge3Byb3ZpZGU6ICdmaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgYXBpUHJvdmlkZXIgPyBhcGlQcm92aWRlciA6IEZpbGVNYW5hZ2VyQXBpU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKGNvbmZpZzogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbiwgYXBpUHJvdmlkZXI6IFByb3ZpZGVyID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlsZU1hbmFnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJBcGlTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckJhY2tlbmRBcGlTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgIEZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2UsXG4gICAgICAgIEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLFxuICAgICAgICBGaWxlTWFuYWdlclVwbG9hZGVyLFxuICAgICAgICBGaWxlVHlwZUZpbHRlclNlcnZpY2UsXG4gICAgICAgIEltYWdlRGF0YUNvbnZlcnRlcixcbiAgICAgICAgTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgIFNlYXJjaEZpbHRlclNlcnZpY2UsXG4gICAgICAgIFRyZWVTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZTogJ2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbicsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICBhcGlQcm92aWRlciA/IGFwaVByb3ZpZGVyIDogRmlsZU1hbmFnZXJBcGlTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJJbmplY3QiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsImh0dHAiLCJIdHRwQ2xpZW50IiwiTm9kZVNlcnZpY2UiLCJzdG9yZSIsIkV2ZW50RW1pdHRlciIsIkltYWdlQ3JvcHBlckNvbXBvbmVudCIsImNyb3BwZXJTZXR0aW5ncyIsIkNyb3BwZXJTZXR0aW5ncyIsIkNvbXBvbmVudCIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIlN0b3JlIiwiSW5wdXQiLCJPdXRwdXQiLCJWaWV3Q2hpbGQiLCJWaWV3Q29udGFpbmVyUmVmIiwiVVVJRCIsImNvbmNhdE1hcCIsIm9mIiwibWFwIiwiZnJvbUV2ZW50IiwiRmlsZVVwbG9hZGVyIiwiU3ViamVjdCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiZW1wdHkiLCJ0aHJvd0Vycm9yIiwiT2JzZXJ2YWJsZSIsIm9mVHlwZSIsInN3aXRjaE1hcCIsImNhdGNoRXJyb3IiLCJUcmVlQWN0aW9uVHlwZXMiLCJmaWx0ZXIiLCJBY3Rpb25zIiwidHNsaWJfMS5fX2RlY29yYXRlIiwiRWZmZWN0IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJOb3RpZmljYXRpb25zU2VydmljZSIsIkhvc3RMaXN0ZW5lciIsIkJlaGF2aW9yU3ViamVjdCIsImNyZWF0ZUZlYXR1cmVTZWxlY3RvciIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwid2l0aExhdGVzdEZyb20iLCJjb21iaW5lTGF0ZXN0IiwiSHR0cFBhcmFtcyIsIkZvcm1Db250cm9sIiwiZGVib3VuY2VUaW1lIiwiU3Vic2NyaXB0aW9uIiwiTm9kZURpc3BhdGNoZXJTZXJ2aWNlIiwiVHJlZUluaXRpYWxpemVyU2VydmljZSIsIlRyZWVDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUiLCJFZmZlY3RzTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJGaWxlVXBsb2FkTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkltYWdlQ3JvcHBlck1vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlIiwiU3RvcmVNb2R1bGUiLCJUcmFuc2xhdGVNb2R1bGUiLCJUcmVlTW9kdWxlIiwiQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO1FBb0VFLGtDQUFnRCxhQUF3QztZQTVEakYsb0JBQWUsR0FBZ0I7Z0JBQ3BDO29CQUNFLElBQUksRUFBRSxxQkFBcUI7b0JBQzNCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxHQUFHO2lCQUNaO2dCQUNEO29CQUNFLElBQUksRUFBRSxvQkFBb0I7b0JBQzFCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxHQUFHO2lCQUNaO2FBQ0YsQ0FBQztZQUVLLHFCQUFnQixHQUFtQixFQUFFLENBQUM7WUFFdEMsb0JBQWUsR0FBc0I7Z0JBQzFDO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEtBQUssRUFBRSxFQUFFO29CQUNULE9BQU8sRUFBRSxjQUFjO29CQUN2QixJQUFJLEVBQUUsV0FBVztvQkFDakIsZUFBZSxFQUFFLElBQUk7aUJBQ3RCO2dCQUNEO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7b0JBQ3pFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLElBQUksRUFBRSxRQUFRO2lCQUNmO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO29CQUM3RixPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixJQUFJLEVBQUUsT0FBTztpQkFDZDtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDO29CQUN2RSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixJQUFJLEVBQUUsT0FBTztpQkFDZDtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsSUFBSSxFQUFFLFNBQVM7aUJBQ2hCO2FBQ0YsQ0FBQztZQUdLLFlBQU8sR0FBRyxZQUFZLENBQUM7WUFXdEIsSUFBQSx1QkFBZ0QsRUFBL0MsMEJBQVUsRUFBRSxnQ0FBbUM7WUFDdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFDLFVBQVUsWUFBQSxFQUFFLGFBQWEsZUFBQSxFQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQztZQUNoRSxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7WUFDakQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGFBQWEsQ0FBQyx3QkFBd0IsSUFBSSxLQUFLLENBQUM7U0FDakY7O29CQXZFRkEsZUFBVTs7Ozs7d0RBK0RJQyxXQUFNLFNBQUMsMEJBQTBCOzs7UUFTaEQsK0JBQUM7S0F4RUQ7Ozs7OztBQ05BO1FBQUE7U0FJQztRQUFELHdCQUFDO0lBQUQsQ0FBQzs7SUNKRDs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsYUFBZ0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7QUFFRCxJQUFPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFT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