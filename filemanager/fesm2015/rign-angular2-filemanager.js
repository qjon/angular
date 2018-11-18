import { Injectable, Inject, Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, HostListener, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NodeService, TreeActionTypes, TreeComponent, NodeDispatcherService, TreeInitializerService, TreeModule } from '@rign/angular2-tree';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { CropperSettings } from 'ng2-img-cropper/src/cropperSettings';
import { ImageCropperComponent, ImageCropperModule } from 'ng2-img-cropper';
import { Store, createFeatureSelector, StoreModule } from '@ngrx/store';
import { UUID } from 'angular2-uuid';
import { concatMap, map, catchError, filter, switchMap, distinctUntilChanged, withLatestFrom, debounceTime } from 'rxjs/operators';
import { fromEvent, of, Subject, empty, Observable, throwError, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { __decorate, __metadata } from 'tslib';
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
class FileManagerConfiguration {
    /**
     * @param {?} configuration
     */
    constructor(configuration) {
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
        const { foldersUrl, folderMoveUrl } = configuration.urls;
        this.folderUrls = { foldersUrl, folderMoveUrl };
        this.fileUrl = configuration.urls.filesUrl;
        this.isMultiSelection = configuration.isMultiSelection || false;
        this.maxFileSize = configuration.maxFileSize || 0;
        this.mimeTypes = configuration.mimeTypes || null;
        this.allowChooseMultipleFiles = configuration.allowChooseMultipleFiles || false;
    }
}
FileManagerConfiguration.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerConfiguration.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IUrlConfiguration {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeService extends NodeService {
    /**
     * @param {?} http
     * @param {?} configuration
     */
    constructor(http, configuration) {
        super(http);
        this.http = http;
        this.apiConfig = {
            addUrl: configuration.urls.foldersUrl,
            getUrl: configuration.urls.foldersUrl,
            updateUrl: configuration.urls.foldersUrl,
            removeUrl: configuration.urls.foldersUrl,
            moveUrl: configuration.urls.folderMoveUrl
        };
    }
}
TreeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TreeService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileModel {
    /**
     * @param {?} data
     */
    constructor(data) {
        this._iconsFolder = FileModel.smallIconsFolder;
        this.selected = false;
        this.fromJSON(data);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @return {?}
     */
    get thumbnailUrl() {
        return this.isImage() ? this._orgData.thumbnailUrl : `${FileModel.smallIconsFolder}${this.getFileExt()}.png`;
    }
    /**
     * @return {?}
     */
    get url() {
        return this.isImage() ? this._orgData.url : `${FileModel.bigIconsFolder}${this.getFileExt()}.png`;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    fromJSON(data) {
        this._orgData = data;
        this.name = data.name;
        this.selected = data.selected || false;
    }
    /**
     * @return {?}
     */
    toJSON() {
        return this._orgData;
    }
    /**
     * @return {?}
     */
    getId() {
        return this._orgData.id;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this._orgData.height || 0;
    }
    /**
     * @return {?}
     */
    getFileExt() {
        return this.name.split('.').pop();
    }
    /**
     * @return {?}
     */
    getMime() {
        return this._orgData.type;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this._orgData.width || 0;
    }
    /**
     * @return {?}
     */
    isImage() {
        return ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'].indexOf(this.getMime()) > -1;
    }
    /**
     * @return {?}
     */
    getSelectData() {
        return {
            id: this.getId(),
            name: this.name,
            url: this.url,
            width: this.getWidth(),
            height: this.getHeight(),
            mime: this.getMime()
        };
    }
}
FileModel.smallIconsFolder = '/icons/128px/';
FileModel.bigIconsFolder = '/icons/512px/';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const FileManagerActionTypes = {
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
class ChooseFilesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CHOOSE_FILES;
    }
}
class CropFileAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE;
    }
}
class CropFileErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE_ERROR;
    }
}
class CropFileSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.CROP_FILE_SUCCESS;
    }
}
class DeleteFileAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE;
    }
}
class DeleteFileSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SUCCESS;
    }
}
class DeleteSelectedFilesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SELECTION;
    }
}
class DeleteSelectedFilesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS;
    }
}
class InverseFilesSelectionAction {
    constructor() {
        this.type = FileManagerActionTypes.INVERSE_FILE_SELECTION;
    }
}
class LoadFilesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.LOAD_FILES;
    }
}
class LoadFilesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.LOAD_FILES_SUCCESS;
    }
}
class MoveFilesErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.MOVE_FILES_ERROR;
    }
}
class MoveFilesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.MOVE_FILES_SUCCESS;
    }
}
class SelectAllFilesAction {
    constructor() {
        this.type = FileManagerActionTypes.SELECT_ALL;
    }
}
class SelectFileAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.SELECT_FILE;
    }
}
class UnSelectAllFilesAction {
    constructor() {
        this.type = FileManagerActionTypes.UNSELECT_ALL;
    }
}
class UnSelectFileAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UNSELECT_FILE;
    }
}
class UploadFilesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE;
    }
}
class UploadFilesErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE_ERROR;
    }
}
class UploadFilesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FileManagerActionTypes.UPLOAD_FILE_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CropComponent {
    /**
     * @param {?} resolver
     * @param {?} configuration
     * @param {?} store
     */
    constructor(resolver, configuration, store) {
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
    updateCropSize(cropSize) {
        /** @type {?} */
        const image = new Image();
        /** @type {?} */
        const cropperComponent = this.resolver.resolveComponentFactory(ImageCropperComponent);
        /** @type {?} */
        const cropperComponentRef = this.container.createComponent(cropperComponent);
        if (this.container.length > 1) {
            this.container.detach(0);
        }
        this.currentCropSize = cropSize;
        cropperComponentRef.instance.settings = this.getCropperSettings();
        cropperComponentRef.instance.image = {};
        cropperComponentRef.instance.onCrop
            .subscribe((bounds) => this.bounds = bounds);
        setTimeout(() => {
            image.src = this.file.url;
            cropperComponentRef.instance.setImage(image);
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateCropSize(this.cropSizeList[0]);
    }
    /**
     * @return {?}
     */
    cropImage() {
        /** @type {?} */
        const bounds = {
            x: this.bounds.left,
            y: this.bounds.top,
            width: this.bounds.width,
            height: this.bounds.height
        };
        this.store.dispatch(new CropFileAction({ file: this.file, bounds }));
    }
    /**
     * @private
     * @return {?}
     */
    getCropperSettings() {
        /** @type {?} */
        const cropperSettings = new CropperSettings();
        /** @type {?} */
        const scale = this.calculateScale();
        /** @type {?} */
        const width = scale * this.file.getWidth();
        /** @type {?} */
        const height = scale * this.file.getHeight();
        cropperSettings.noFileInput = true;
        cropperSettings.width = this.currentCropSize.width;
        cropperSettings.height = this.currentCropSize.height;
        cropperSettings.canvasWidth = width;
        cropperSettings.canvasHeight = height;
        return cropperSettings;
    }
    /**
     * Calculates scale between current file dimensions and box 600x600
     * @private
     * @return {?}
     */
    calculateScale() {
        /** @type {?} */
        const scale = this.file.getWidth() / this.file.getHeight();
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
    }
}
CropComponent.decorators = [
    { type: Component, args: [{
                selector: 'crop-image',
                template: `
    <div class="crop-image">
      <div class="crop-workbench">
        <div #container></div>
      </div>
      <div class="btn-toolbar">
        <div class="btn-group">
          <button class="btn btn-primary" *ngFor="let cropSize of cropSizeList" (click)="updateCropSize(cropSize)"
                  [ngClass]="{'active': cropSize == currentCropSize}">{{cropSize.name | translate}}
          </button>
        </div>
        <div class="btn-group pull-right">
          <button class="btn btn-success btn-icon" (click)="cropImage()">
            <i class="fa fa-check"></i>
            <span>{{'RI_FM_BTN_SAVE' | translate}}</span>
          </button>
        </div>
      </div>
    </div>
  `,
                styles: [".btn-toolbar{margin:5px 0}.btn-toolbar .btn-group{margin:0}.crop-workbench{width:600px;height:400px;text-align:center}"]
            }] }
];
/** @nocollapse */
CropComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: FileManagerConfiguration },
    { type: Store }
];
CropComponent.propDecorators = {
    file: [{ type: Input }],
    onCrop: [{ type: Output }],
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
    cropper: [{ type: ViewChild, args: ['cropper',] }]
};

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
class DropdownComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    hide() {
        this.isOpen = false;
    }
    /**
     * @param {?} button
     * @return {?}
     */
    selectButton(button) {
        this.hide();
        this.onClick.emit(button);
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageDataConverter {
    /**
     * @param {?} file
     * @param {?} folderId
     * @return {?}
     */
    getProperties(file, folderId) {
        /** @type {?} */
        const properties = {
            id: UUID.UUID(),
            folderId: folderId,
            name: file.name,
            size: file.size,
            type: file.type,
            data: ''
        };
        /** @type {?} */
        const reader = this.getBase64FromFile(file);
        return reader
            .pipe(concatMap((data) => {
            properties.data = data;
            if (properties.type.indexOf('image') === 0) {
                return this.getImageDimensions(data);
            }
            else {
                return of({ width: 0, height: 0 });
            }
        }), map((dimensions) => {
            properties.width = dimensions.width;
            properties.height = dimensions.height;
            return properties;
        }));
    }
    /**
     * Create observable which return image as base64 data
     * @private
     * @param {?} file
     * @return {?}
     */
    getBase64FromFile(file) {
        /** @type {?} */
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return fromEvent(reader, 'load')
            .pipe(map(() => {
            return reader.result.toString();
        }));
    }
    /**
     * Create observable which return dimensions of the image
     * @private
     * @param {?} data
     * @return {?}
     */
    getImageDimensions(data) {
        /** @type {?} */
        const image = new Image();
        image.src = data;
        image.style.display = 'none';
        /** @type {?} */
        const loadImage = fromEvent(image, 'load')
            .pipe(map(() => {
            return {
                width: image.naturalWidth,
                height: image.naturalHeight
            };
        }));
        document.body.appendChild(image);
        return loadImage;
    }
}
ImageDataConverter.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExtendedFileUploader extends FileUploader {
    /**
     * @param {?} options
     * @param {?} filemanagerNotification
     */
    constructor(options, filemanagerNotification) {
        super(options);
        this.filemanagerNotification = filemanagerNotification;
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter$$1, options) {
        /** @type {?} */
        const notification = {
            type: 'alert',
            title: 'Add file to queue',
            message: `File not add to queue`
        };
        if (filter$$1.name === 'fileSize') {
            notification.message = `File size is too large - max size  is ${options.maxFileSize / 1024} KB`;
        }
        else {
            notification.message = `File mime type "${item.type}" is not allowed`;
        }
        this.filemanagerNotification.sendNotification(notification);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        if (this.options.url) {
            super.uploadItem(value);
        }
        else {
            /** @type {?} */
            const imageDataConverter = new ImageDataConverter();
            this._onProgressItem(value, 0);
            if (this.isUploading) {
                return;
            }
            this.isUploading = true;
            /** @type {?} */
            const header = this.options.headers.find((object) => object.name === 'folderId');
            this._onProgressItem(value, 50);
            imageDataConverter.getProperties(value._file, header.value)
                .subscribe((file) => {
                this.isUploading = false;
                this._onProgressItem(value, 100);
                this._onCompleteItem(value, JSON.stringify(file), 200, {});
            });
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilemanagerNotifcations {
    constructor() {
        this.notification$ = new Subject();
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    sendNotification(notification) {
        this.notification$.next(notification);
    }
    /**
     * @return {?}
     */
    getNotificationStream() {
        return this.notification$;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileManagerUploader {
    /**
     * @param {?} configuration
     * @param {?} filemanagerNotification
     */
    constructor(configuration, filemanagerNotification) {
        /** @type {?} */
        const options = {
            allowedMimeType: configuration.mimeTypes,
            url: configuration.urls.filesUrl,
            maxFileSize: configuration.maxFileSize
        };
        this.uploader = new ExtendedFileUploader(options, filemanagerNotification);
    }
    /**
     * @return {?}
     */
    clear() {
        this.uploader.authToken = null;
        this.uploader.setOptions(this.getDefaultOptions());
    }
    /**
     * @return {?}
     */
    getDefaultOptions() {
        /** @type {?} */
        const options = {};
        options['removeAfterUpload'] = true;
        options['autoUpload'] = true;
        options['method'] = 'POST';
        return options;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    setAuthorizationToken(token) {
        this.uploader.authToken = token;
    }
    /**
     * @param {?} directoryId
     * @return {?}
     */
    setDirectoryId(directoryId) {
        /** @type {?} */
        const options = this.getDefaultOptions();
        options['headers'] = [{ name: 'folderId', value: directoryId.toString() }];
        this.uploader.setOptions(options);
        return this;
    }
}
FileManagerUploader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerUploader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['fileManagerConfiguration',] }] },
    { type: FilemanagerNotifcations }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileComponent {
    /**
     * @param {?} configuration
     * @param {?} store
     */
    constructor(configuration, store) {
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
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    deleteFile($event, file) {
        this.store.dispatch(new DeleteFileAction({ file }));
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getRemoveMessage(file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    openPreview($event) {
        /** @type {?} */
        let fileEvent = {
            eventName: 'onPreviewFile',
            file: this.file
        };
        this.onPreviewFile.emit(fileEvent);
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    openCrop($event) {
        /** @type {?} */
        let fileEvent = {
            eventName: 'onCropFile',
            file: this.file
        };
        this.onCropFile.emit(fileEvent);
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @return {?}
     */
    selectFile() {
        this.store.dispatch(new SelectFileAction({ file: this.file }));
    }
    /**
     * @return {?}
     */
    unSelectFile() {
        this.store.dispatch(new UnSelectFileAction({ file: this.file }));
    }
    /**
     * @param {?} $event
     * @param {?} file
     * @return {?}
     */
    chooseFile($event, file) {
        this.store.dispatch(new ChooseFilesAction({ files: [file.toJSON()] }));
        $event.preventDefault();
        $event.stopPropagation();
    }
}
FileComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-file-component',
                template: "<div *ngIf=\"configuration.isMultiSelection\" class=\"file-selection-input\">\n  <i class=\"fa fa-2x checked fa-check-square-o\" (click)=\"unSelectFile()\"></i>\n  <i class=\"fa fa-2x unchecked fa-square-o\" (click)=\"selectFile()\"></i>\n</div>\n<div class=\"rounded file-img\" [ngClass]=\"{'file-img-symbol': !file.isImage()}\"\n     [style.background-image]=\"'url(' + file.thumbnailUrl + ')'\"></div>\n<span class=\"file-name\">{{file.name}}</span>\n<div class=\"file-menu\">\n  <div class=\"btn-group btn-group-sm\">\n    <!-- Add message: [message]=\"getRemoveMessage(file)\" -->\n    <button mwlConfirmationPopover [title]=\"removeTitle\" [appendToBody]=\"true\"\n            [confirmText]=\"'Yes'\" [cancelText]=\"'No'\" placement=\"bottom\" (confirm)=\"deleteFile($event, file)\"\n            class=\"btn btn-sm btn-danger btn-icon\">\n      <i class=\"fa fa-trash\"></i>\n    </button>\n    <button (click)=\"openPreview($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-search\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"openCrop($event)\" class=\"btn btn-sm btn-secondary btn-icon\">\n      <i class=\"fa fa-crop\"></i>\n    </button>\n    <button *ngIf=\"file.isImage()\" (click)=\"chooseFile($event, file)\" class=\"btn btn-sm btn-primary btn-icon\">\n      <i class=\"fa fa-image\"></i>\n    </button>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
FileComponent.ctorParameters = () => [
    { type: FileManagerConfiguration },
    { type: Store }
];
FileComponent.propDecorators = {
    file: [{ type: Input }],
    onPreviewFile: [{ type: Output }],
    onCropFile: [{ type: Output }],
    onSelectFile: [{ type: Output }]
};

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
class FileManagerActionsService {
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
     * @param {?} files
     * @return {?}
     */
    chooseFiles(files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CHOOSE_FILES,
            payload: { files }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE,
            payload: {
                file: file,
                bounds: bounds
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    cropFileSuccess(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS,
            payload: {
                file: file
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    cropFileError(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR,
            payload: {
                file: file
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE,
            payload: {
                file: file
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    deleteFileSuccess(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS,
            payload: {
                file: file
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
     * @param {?} fileIds
     * @return {?}
     */
    deleteSelectedFiles(fileIds) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
            payload: { fileIds }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
     * @param {?} files
     * @return {?}
     */
    deleteSelectedFilesSuccess(files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS,
            payload: { files }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
     * @param {?} folderId
     * @return {?}
     */
    loadFiles(folderId) {
        return {
            type: FileManagerActionsService.FILEMANAGER_LOAD_FILES,
            payload: {
                folderId: folderId
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
     * @return {?}
     */
    inverseFileSelection() {
        return {
            type: FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION,
            payload: {}
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
     * @param {?} folderId
     * @param {?} files
     * @return {?}
     */
    loadFilesSuccess(folderId, files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS,
            payload: {
                folderId: folderId,
                files: files
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
     * @param {?} files
     * @param {?} folderId
     * @return {?}
     */
    moveFileSuccess(files, folderId) {
        return {
            type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS,
            payload: { folderId, files }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
     * @param {?} files
     * @return {?}
     */
    moveFileError(files) {
        return {
            type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR,
            payload: { files }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
     * @return {?}
     */
    selectAllFiles() {
        return {
            type: FileManagerActionsService.FILEMANAGER_SELECT_ALL,
            payload: {}
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    selectFile(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_SELECT_FILE,
            payload: {
                file: file
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
     * @return {?}
     */
    unSelectAll() {
        return {
            type: FileManagerActionsService.FILEMANAGER_UNSELECT_ALL,
            payload: {}
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
     * @param {?} file
     * @return {?}
     */
    unSelectFile(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UNSELECT_FILE,
            payload: {
                file: file
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
     * @param {?} file
     * @return {?}
     */
    upload(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE,
            payload: {
                files: [file]
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
     * @param {?} file
     * @return {?}
     */
    uploadSuccess(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS,
            payload: {
                files: [file]
            }
        };
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
     * @param {?} file
     * @return {?}
     */
    uploadError(file) {
        return {
            type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR,
            payload: {
                files: [file]
            }
        };
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@Deprecated - Will be removed in 3.0.0
 */
class FileManagerDispatcherService {
    /**
     * @param {?} store
     * @param {?} fileManagerActions
     */
    constructor(store, fileManagerActions) {
        this.store = store;
        this.fileManagerActions = fileManagerActions;
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch ChooseFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    chooseFiles(files) {
        this.store.dispatch(new ChooseFilesAction({ files }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch CropFileAction instead of it
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        this.store.dispatch(new CropFileAction({ bounds, file }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        this.store.dispatch(new DeleteFileAction({ file }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch DeleteSelectedFilesAction instead of it
     * @param {?} files
     * @return {?}
     */
    deleteSelectedFiles(files) {
        this.store.dispatch(new DeleteSelectedFilesAction({ files }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch InverseFilesSelectionAction instead of it
     * @return {?}
     */
    inverseSelection() {
        this.store.dispatch(new InverseFilesSelectionAction());
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch LoadFilesAction instead of it
     * @param {?} folderId
     * @return {?}
     */
    loadFiles(folderId) {
        this.store.dispatch(new LoadFilesAction({ folderId }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectAllFilesAction instead of it
     * @return {?}
     */
    selectAllFiles() {
        this.store.dispatch(new SelectAllFilesAction());
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch SelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    selectFile(file) {
        this.store.dispatch(new SelectFileAction({ file }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectAllFilesAction instead of it
     * @return {?}
     */
    unSelectAllFiles() {
        this.store.dispatch(new UnSelectAllFilesAction());
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UnSelectFileAction instead of it
     * @param {?} file
     * @return {?}
     */
    unSelectFile(file) {
        this.store.dispatch(new UnSelectFileAction({ file }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesErrorAction instead of it
     * @param {?} file
     * @return {?}
     */
    uploadError(file) {
        this.store.dispatch(new UploadFilesErrorAction({ files: [file] }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesAction instead of it
     * @param {?} file
     * @return {?}
     */
    upload(file) {
        this.store.dispatch(new UploadFilesAction({ files: [file] }));
    }
    /**
     * \@Deprecated - Will be removed in 3.0.0, dispatch UploadFilesSuccessAction instead of it
     * @param {?} file
     * @return {?}
     */
    uploadSuccess(file) {
        this.store.dispatch(new UploadFilesSuccessAction({ files: [file] }));
    }
}
FileManagerDispatcherService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerDispatcherService.ctorParameters = () => [
    { type: Store },
    { type: FileManagerActionsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FILEMANAGER_TREE_NAME = 'fileManagerTree';
/**
 * @abstract
 */
class AbstractFileManagerApiService {
    constructor() {
        this.treeName = FILEMANAGER_TREE_NAME;
        this.fileManagerName = 'fileManagerFiles';
        this.currentNodeId = '';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileManagerApiService extends AbstractFileManagerApiService {
    /**
     * @param {?} filemanagerNotfication
     */
    constructor(filemanagerNotfication) {
        super();
        this.filemanagerNotfication = filemanagerNotfication;
    }
    /**
     * @return {?}
     */
    get treeId() {
        return FILEMANAGER_TREE_NAME;
    }
    /**
     * @param {?=} nodeId
     * @return {?}
     */
    load(nodeId = '') {
        if (!this.nodes) {
            this.nodes = this.getAllDataFromLocalStorage();
        }
        /** @type {?} */
        const nodes = this.getChildren(nodeId);
        return of(nodes);
    }
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    add(node, parentNodeId = null) {
        node.parentId = parentNodeId;
        node.id = UUID.UUID();
        this.nodes.push(node);
        if (this.saveNodes()) {
            return of(node);
        }
        else {
            return empty();
        }
    }
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    move(srcNode, targetNode) {
        /** @type {?} */
        const srcId = srcNode.id;
        /** @type {?} */
        const targetId = targetNode ? targetNode.id : '';
        /** @type {?} */
        const index = this.findIndexByNodeId(srcId);
        this.nodes[index].parentId = targetId;
        if (this.saveNodes()) {
            return of(this.nodes[index]);
        }
        else {
            return empty();
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    update(node) {
        /** @type {?} */
        const index = this.findIndexByNodeId(node.id);
        this.nodes[index] = node;
        if (this.saveNodes()) {
            return of(node);
        }
        else {
            return empty();
        }
    }
    /**
     * @param {?} nodeId
     * @return {?}
     */
    remove(nodeId) {
        /** @type {?} */
        const index = this.findIndexByNodeId(nodeId);
        /** @type {?} */
        const node = this.nodes[index];
        /** @type {?} */
        const hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            this.nodes.splice(index, 1);
            this.saveNodes();
            return of(node);
        }
        else {
            return throwError('Node is not empty');
        }
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    setAllNodes(nodes) {
        this.nodes = [...nodes];
        this.saveNodes();
    }
    /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        return throwError('This functionality is not available with LocalStorage');
    }
    /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    loadFiles(nodeId = '') {
        this.currentNodeId = nodeId;
        if (!this.files) {
            this.files = this.getAllFileDataFromLocalStorage();
        }
        /** @type {?} */
        const files = this.getFilesFromFolder(nodeId);
        /** @type {?} */
        const newFiles = files.map((file) => {
            return this.convertLocalData2IOuterFile(file);
        });
        return of(newFiles);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    removeFile(file) {
        /** @type {?} */
        const index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return of(false);
        }
        this.files.splice(index, 1);
        this.saveFiles();
        return of(true);
    }
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    removeSelectedFiles(selectedFiles) {
        /** @type {?} */
        const numberOfFiles = this.files.length;
        selectedFiles.forEach((fileId) => {
            /** @type {?} */
            const index = this.findIndexByFileId(fileId);
            if (index > -1) {
                this.files.splice(index, 1);
            }
        });
        this.saveFiles();
        return of((this.files.length + selectedFiles.length === numberOfFiles));
    }
    /**
     * @param {?} file
     * @return {?}
     */
    uploadFile(file) {
        /** @type {?} */
        const fileData = this.convertIOuterFile2LocalData(file);
        this.files.push(fileData);
        if (this.saveFiles()) {
            return of(this.convertLocalData2IOuterFile(fileData));
        }
        else {
            return Observable.throw('Upload error');
        }
    }
    /**
     * @param {?} files
     * @param {?=} node
     * @return {?}
     */
    moveFile(files, node = null) {
        /** @type {?} */
        const ids = files.map(file => file.id.toString());
        /** @type {?} */
        const folderId = node ? node.id.toString() : '';
        /** @type {?} */
        const movedFiles = this.files.filter(file => ids.indexOf(file.id.toString()) > -1);
        /** @type {?} */
        const errorMsg = 'Can not move file to the same folder';
        movedFiles.forEach((file) => {
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
            return of(movedFiles.map(file => this.convertLocalData2IOuterFile(file)));
        }
        else {
            return Observable.throw('Move files error');
        }
    }
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    findIndexByNodeId(nodeId) {
        return this.nodes.findIndex((node) => {
            return node.id === nodeId;
        });
    }
    /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    findIndexByFileId(fileId) {
        return this.files.findIndex((file) => file.id === fileId);
    }
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    getChildren(nodeId) {
        return this.nodes.filter((node) => node.parentId === nodeId);
    }
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    getFilesFromFolder(nodeId) {
        return this.files.filter((file) => file.folderId === nodeId);
    }
    /**
     * @protected
     * @return {?}
     */
    getAllDataFromLocalStorage() {
        try {
            /** @type {?} */
            const data = localStorage.getItem(this.treeName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getAllFileDataFromLocalStorage() {
        try {
            /** @type {?} */
            const data = localStorage.getItem(this.fileManagerName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveNodes() {
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
    }
    /**
     * @private
     * @return {?}
     */
    saveFiles() {
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
            const nodeId = this.files[(this.files.length - 1)].folderId || null;
            this.files = null;
            this.load(nodeId);
            return false;
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    convertLocalData2IOuterFile(file) {
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
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    convertIOuterFile2LocalData(file) {
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
    }
}
FileManagerApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerApiService.ctorParameters = () => [
    { type: FilemanagerNotifcations }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileManagerEffectsService {
    /**
     * @param {?} actions$
     * @param {?} fileManagerActions
     * @param {?} filemanagerNotfication
     * @param {?} fileManagerApiService
     */
    constructor(actions$, fileManagerActions, filemanagerNotfication, fileManagerApiService) {
        this.actions$ = actions$;
        this.fileManagerActions = fileManagerActions;
        this.filemanagerNotfication = filemanagerNotfication;
        this.fileManagerApiService = fileManagerApiService;
        this.loadFiles$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_LOAD_FILES), switchMap((action) => this.loadFiles(action.payload.folderId)
            .pipe(map((files) => {
            return new LoadFilesSuccessAction({ files });
        }), catchError((e) => {
            return of(this.onLoadFilesError(action.payload.folderId));
        }))));
        this.cropFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE), switchMap((action) => this.cropFile(action.payload.file, action.payload.bounds)
            .pipe(map((result) => {
            this.filemanagerNotfication.sendNotification({
                type: 'success',
                title: 'Crop Image.',
                message: 'Image has been cropped.'
            });
            return new CropFileSuccessAction({ file: action.payload.file });
        }), catchError(() => of(new CropFileErrorAction({ file: action.payload.file }))))));
        this.deleteFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE), switchMap((action) => this.deleteFile(action.payload.file)
            .pipe(map((result) => {
            return new DeleteFileSuccessAction({ file: action.payload.file });
        }), catchError(() => of(this.onDeleteFileError(action.payload.file))))));
        this.deleteFilesSelection$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION), switchMap((action) => this.deleteFilesSelection(action.payload.fileIds)
            .pipe(map((result) => {
            return new DeleteSelectedFilesSuccessAction({ files: action.payload.fileIds });
        }), catchError(() => of(this.onDeleteFilesSelectionError(action.payload.files))))));
        this.uploadFile$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE), switchMap((action) => this.uploadFile(action.payload.files[0])
            .pipe(map((result) => {
            return new UploadFilesSuccessAction({ files: [result] });
        }), catchError(() => {
            return empty();
        }))));
        this.moveFile$ = this.actions$
            .pipe(ofType(TreeActionTypes.TREE_MOVE_NODE), filter((action) => {
            return action.payload.sourceOfDroppedData === 'FILE';
        }), switchMap((action) => this.moveFiles([(/** @type {?} */ (action.payload.oldNode))], action.payload.node)
            .pipe(map((result) => {
            /** @type {?} */
            const folderId = ((/** @type {?} */ (action.payload.oldNode))).folderId;
            return new MoveFilesSuccessAction({ files: result, folderId });
        }), catchError(() => {
            return of(new MoveFilesErrorAction({ files: [(/** @type {?} */ (action.payload.oldNode))] }));
        }))));
        this.filesMoveSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS), map((action) => {
            this.onMoveFilesSuccess();
            return new LoadFilesAction({ folderId: action.payload.folderId });
        }));
        this.uploadError$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR), map((action) => {
            this.filemanagerNotfication.sendNotification({
                type: 'alert',
                title: 'File upload',
                message: `${action.payload.files[0].name} exists on the server in this directory`
            });
        }));
        this.cropFileSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS));
        this.deleteFileSuccess$ = this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS));
        this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR))
            .subscribe((action) => {
            this.onCropFileError(action.payload.file);
        });
        this.actions$
            .pipe(ofType(FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR))
            .subscribe((action) => {
            this.onMoveFilesError();
        });
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
    }
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        return this.fileManagerApiService.removeFile(file.toJSON());
    }
    /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    deleteFilesSelection(files) {
        return this.fileManagerApiService.removeSelectedFiles(files);
    }
    /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    loadFiles(folderId) {
        return this.fileManagerApiService.loadFiles(folderId);
    }
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    uploadFile(file) {
        return this.fileManagerApiService.uploadFile(file);
    }
    /**
     * @protected
     * @param {?} files
     * @param {?=} folder
     * @return {?}
     */
    moveFiles(files, folder = null) {
        return this.fileManagerApiService.moveFile(files, folder);
    }
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    onCropFileError(file) {
        this.filemanagerNotfication.sendNotification({
            type: 'alert',
            title: 'Crop Image',
            message: '[FILEMANAGER] Can not crop file'
        });
    }
    /**
     * @protected
     * @param {?} file
     * @return {?}
     */
    onDeleteFileError(file) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete file',
            message: '[FILEMANAGER] Can not delete file' + file.name
        });
    }
    /**
     * @protected
     * @param {?} files
     * @return {?}
     */
    onDeleteFilesSelectionError(files) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete selected files',
            message: '[FILEMANAGER] Not all files were deleted'
        });
    }
    /**
     * @protected
     * @param {?} folderId
     * @return {?}
     */
    onLoadFilesError(folderId) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Load files',
            message: '[FILEMANAGER] Can not load files for folder ' + folderId
        });
    }
    /**
     * @protected
     * @return {?}
     */
    onMoveFilesSuccess() {
        this.filemanagerNotfication.sendNotification({
            type: 'success',
            title: 'Move files',
            message: 'File was successfully moved to folder'
        });
    }
    /**
     * @protected
     * @return {?}
     */
    onMoveFilesError() {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Move files',
            message: 'File was not successfully moved to new folder'
        });
    }
}
FileManagerEffectsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerEffectsService.ctorParameters = () => [
    { type: Actions },
    { type: FileManagerActionsService },
    { type: FilemanagerNotifcations },
    { type: FileManagerApiService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilesListComponent {
    /**
     * @param {?} configuration
     * @param {?} store
     * @param {?} fileManagerDispatcher
     * @param {?} notifications
     * @param {?} fileManagerEffects
     */
    constructor(configuration, store, fileManagerDispatcher, notifications, fileManagerEffects) {
        this.configuration = configuration;
        this.store = store;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onPreviewFile = new EventEmitter();
        this.onCropFile = new EventEmitter();
        this.onSelectFile = new EventEmitter();
        this.removeTitle = 'Remove file';
        this.dragZone = FILEMANAGER_TREE_NAME;
        fileManagerEffects.deleteFileSuccess$
            .subscribe((action) => {
            notifications.success('File delete', `${action.payload.file.name} has been deleted`);
        });
    }
    /**
     * Fired when clicked on button "delete file"
     *
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        this.store.dispatch(new DeleteFileAction({ file }));
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getRemoveMessage(file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    }
    /**
     * @param {?} fileEvent
     * @return {?}
     */
    openPreview(fileEvent) {
        this.onPreviewFile.emit(fileEvent);
    }
    /**
     * @param {?} fileEvent
     * @return {?}
     */
    openCrop(fileEvent) {
        this.onCropFile.emit(fileEvent);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    toggleSelection(file) {
        if (file.selected) {
            this.store.dispatch(new UnSelectFileAction({ file }));
        }
        else {
            this.store.dispatch(new SelectFileAction({ file }));
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    isSelected(file) {
        return this.selectedFiles.indexOf(file.getId().toString()) > -1;
    }
}
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
FilesListComponent.ctorParameters = () => [
    { type: FileManagerConfiguration },
    { type: Store },
    { type: FileManagerDispatcherService },
    { type: NotificationsService },
    { type: FileManagerEffectsService }
];
FilesListComponent.propDecorators = {
    files: [{ type: Input }],
    selectedFiles: [{ type: Input }],
    onPreviewFile: [{ type: Output }],
    onCropFile: [{ type: Output }],
    onSelectFile: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PreviewComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchFilterService {
    constructor() {
        /**
         * File type filter
         */
        this.filter$ = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.filter$.getValue();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.filter$.next(value);
    }
}
SearchFilterService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileTypeFilterService {
    constructor() {
        /**
         * File type filter
         */
        this.filter$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.filter$.getValue();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.filter$.next(value);
    }
}
FileTypeFilterService.decorators = [
    { type: Injectable }
];

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
    const file = action.payload.file;
    /** @type {?} */
    const id = file.getId().toString();
    state.entities[id] = (/** @type {?} */ (Object.assign({}, file.toJSON())));
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
        selectedFiles: state.files.filter((i) => state.selectedFiles.indexOf(i) === -1)
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function loadFiles(state, action) {
    /** @type {?} */
    const entities = {};
    /** @type {?} */
    const files = [];
    action.payload.files.map((file) => {
        /** @type {?} */
        const id = file.id.toString();
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
    const files = action.payload.files;
    /** @type {?} */
    const ids = files.map(file => file.id.toString());
    /** @type {?} */
    const folderId = action.payload.folderId ? action.payload.folderId.toString() : '';
    /** @type {?} */
    const entities = Object.assign({}, state.entities);
    ids.forEach((id) => {
        /** @type {?} */
        const oldEntity = Object.assign({}, entities[id]);
        oldEntity.folderId = folderId;
        entities[id] = oldEntity;
    });
    return {
        entities: entities,
        files: state.files.filter((i) => ids.indexOf(i) === -1),
        selectedFiles: state.selectedFiles.filter((i) => ids.indexOf(i) === -1)
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function removeFile(state, action) {
    /** @type {?} */
    const id = action.payload.file.getId();
    delete state.entities[id];
    return {
        entities: state.entities,
        files: state.files.filter((i) => i !== id),
        selectedFiles: state.selectedFiles
    };
}
/**
 * @param {?} state
 * @return {?}
 */
function removeSelectedFiles(state) {
    /** @type {?} */
    const files = state.files.filter((i) => state.selectedFiles.indexOf(i) === -1);
    /** @type {?} */
    const entities = {};
    files.forEach((fileId) => {
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
        selectedFiles: [...state.selectedFiles, action.payload.file.getId().toString()]
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
        selectedFiles: [...state.files]
    };
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function uploadFiles(state, action) {
    /** @type {?} */
    const newState = {
        entities: Object.assign({}, state.entities),
        files: [...state.files],
        selectedFiles: []
    };
    action.payload.files.forEach((file) => {
        /** @type {?} */
        const id = file.id.toString();
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
    const fileId = action.payload.file.getId().toString();
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.selectedFiles.filter((id) => id !== fileId)
    };
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function fileManagerReducer(state = {
    entities: {},
    files: [],
    selectedFiles: []
}, action) {
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
const filemanagerStateSelector = createFeatureSelector('files');
/** @type {?} */
const getAll = (state) => {
    return state.files.map((id) => state.entities[id]);
};
/** @type {?} */
const isChangeStateFiles = (newState, prevState) => {
    return prevState.files.length !== newState.files.length || prevState.files.filter((i) => newState.files.indexOf(i) === -1).length > 0;
};
/** @type {?} */
const isChangeStateSelectedFiles = (newState, prevState) => {
    return prevState.selectedFiles.length !== newState.selectedFiles.length || prevState.selectedFiles.filter((i) => newState.selectedFiles.indexOf(i) === -1).length > 0;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrentDirectoryFilesService {
    /**
     * @param {?} store
     * @param {?} fileTypeFilter
     * @param {?} searchFilterService
     */
    constructor(store, fileTypeFilter, searchFilterService) {
        this.store = store;
        this.fileTypeFilter = fileTypeFilter;
        this.searchFilterService = searchFilterService;
        /** @type {?} */
        const store$ = this.store.select(filemanagerStateSelector);
        /** @type {?} */
        const observable$ = store$;
        this.entities$ = observable$
            .pipe(map((state) => state.entities), distinctUntilChanged());
        this.currentDirectoryFileIds$ = observable$
            .pipe(map((state) => state.files), distinctUntilChanged());
        this.selectedFiles$ = store$
            .pipe(map((state) => state.selectedFiles));
        this.files$ = this.getFilesStream();
        this.filteredFiles$ = this.getCurrentDirectoryFilesStream();
    }
    /**
     * Return stream of files
     * @private
     * @return {?}
     */
    getFilesStream() {
        return this.currentDirectoryFileIds$
            .pipe(withLatestFrom(this.entities$), map((ar) => {
            return {
                entities: ar[1],
                files: ar[0]
            };
        }), map((state) => {
            return getAll(state)
                .map((file) => {
                return new FileModel(file);
            });
        }));
    }
    /**
     * Return stream of current directory filtered files
     * @private
     * @return {?}
     */
    getCurrentDirectoryFilesStream() {
        return combineLatest(this.files$, this.fileTypeFilter.filter$, this.searchFilterService.filter$)
            .pipe(map((data) => {
            /** @type {?} */
            let files = data[0];
            /** @type {?} */
            const fileTypeFilter = data[1];
            /** @type {?} */
            const search = data[2].toLocaleLowerCase();
            if (search !== '') {
                files = files.filter((file) => {
                    return file.name.toLocaleLowerCase().indexOf(search) > -1;
                });
            }
            if (fileTypeFilter && fileTypeFilter.mimes.length > 0) {
                files = files.filter((file) => {
                    return fileTypeFilter.mimes.indexOf(file.getMime()) > -1;
                });
            }
            return files;
        }));
    }
}
CurrentDirectoryFilesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrentDirectoryFilesService.ctorParameters = () => [
    { type: Store },
    { type: FileTypeFilterService },
    { type: SearchFilterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileManagerBackendApiService extends AbstractFileManagerApiService {
    /**
     * @param {?} $http
     * @param {?} configuration
     */
    constructor($http, configuration) {
        super();
        this.$http = $http;
        this.configuration = configuration;
        this.nodes = [];
        this.files = [];
    }
    /**
     * @return {?}
     */
    get treeId() {
        return FILEMANAGER_TREE_NAME;
    }
    /**
     * Load folder chidls for given folder id
     * @param {?=} nodeId
     * @return {?}
     */
    load(nodeId = '') {
        /** @type {?} */
        const nodeIds = this.nodes.map((node) => node.id);
        /** @type {?} */
        const params = new HttpParams().set('nodeId', nodeId || '');
        return this.$http.get(this.configuration.folderUrls.foldersUrl, { params })
            .pipe(map((nodes) => {
            nodes.forEach((node) => {
                if (nodeIds.indexOf(node.id) === -1) {
                    this.nodes.push(node);
                }
                else {
                    /** @type {?} */
                    const index = this.nodes.findIndex((item) => node.id === item.id);
                    this.nodes[index] = node;
                }
            });
            return nodes;
        }));
    }
    /**
     * Create new folder
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    add(node, parentNodeId = null) {
        /** @type {?} */
        const data = {
            node: node,
            parentNodeId: parentNodeId
        };
        return this.$http.post(this.configuration.folderUrls.foldersUrl, data)
            .pipe(map((newNode) => {
            this.nodes.push(newNode);
            return newNode;
        }));
    }
    /**
     * Move folder from source parent to target parent
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    move(srcNode, targetNode) {
        /** @type {?} */
        const srcId = srcNode.id;
        /** @type {?} */
        const targetId = targetNode ? targetNode.id : null;
        return this.$http.put(this.configuration.folderUrls.folderMoveUrl, { source: srcId, target: targetId })
            .pipe(map((movedNode) => {
            /** @type {?} */
            const index = this.findIndexByNodeId(srcId);
            this.nodes[index].parentId = targetId;
            return movedNode;
        }));
    }
    /**
     * Update folder name
     * @param {?} node
     * @return {?}
     */
    update(node) {
        return this.$http.put(this.configuration.folderUrls.foldersUrl, node)
            .pipe(map((newNode) => {
            /** @type {?} */
            const index = this.findIndexByNodeId(node.id);
            this.nodes[index] = newNode;
            return newNode;
        }));
    }
    /**
     * Remove node by given id
     * @param {?} nodeId
     * @return {?}
     */
    remove(nodeId) {
        /** @type {?} */
        const index = this.findIndexByNodeId(nodeId);
        /** @type {?} */
        const hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            /** @type {?} */
            const params = new HttpParams().set('nodeId', nodeId);
            return this.$http.delete(this.configuration.folderUrls.foldersUrl, { params })
                .pipe(map((removedNode) => {
                this.nodes.splice(index, 1);
                return removedNode;
            }));
        }
        else {
            return Observable.throw('Node is not empty');
        }
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    setAllNodes(nodes) {
        this.nodes = [...nodes];
    }
    /**
     * Crop file
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    cropFile(file, bounds) {
        return this.$http.put(this.configuration.fileUrl, { id: file.id, bounds: bounds });
    }
    /**
     * Load files from directory
     * @param {?=} nodeId
     * @return {?}
     */
    loadFiles(nodeId = '') {
        this.currentNodeId = nodeId;
        /** @type {?} */
        const params = new HttpParams().set('dirId', nodeId);
        return this.$http.get(this.configuration.fileUrl, { params })
            .pipe(map((files) => {
            this.files = files.map((file) => (/** @type {?} */ (file)));
            return files;
        }));
    }
    /**
     * Remove file from folder
     * @param {?} file
     * @return {?}
     */
    removeFile(file) {
        /** @type {?} */
        const index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return of(false);
        }
        /** @type {?} */
        const params = new HttpParams().set('id', file.id.toString());
        return this.$http.delete(this.configuration.fileUrl, { params })
            .pipe(map(() => {
            this.files.splice(index, 1);
            return true;
        }));
    }
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    removeSelectedFiles(selectedFiles) {
        /** @type {?} */
        const params = new HttpParams().set('id', selectedFiles.join('|'));
        return this.$http.delete(this.configuration.fileUrl, { params })
            .pipe(map(() => {
            selectedFiles.forEach((fileId) => {
                /** @type {?} */
                const index = this.findIndexByFileId(fileId);
                if (index > -1) {
                    this.files.splice(index, 1);
                }
            });
            return true;
        }));
    }
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     * @param {?} file
     * @return {?}
     */
    uploadFile(file) {
        /** @type {?} */
        const fileData = (/** @type {?} */ (file));
        this.files.push(fileData);
        return of(file);
    }
    /**
     * @param {?} files
     * @param {?} node
     * @return {?}
     */
    moveFile(files, node) {
        /** @type {?} */
        const ids = files.map(file => file.id.toString());
        return this.$http.put(this.configuration.fileUrl, { files: ids, folderId: node ? node.id : '' });
    }
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    findIndexByNodeId(nodeId) {
        return this.nodes.findIndex((node) => {
            return node.id === nodeId;
        });
    }
    /**
     * @private
     * @param {?} fileId
     * @return {?}
     */
    findIndexByFileId(fileId) {
        return this.files.findIndex((file) => file.id === fileId);
    }
    /**
     * @private
     * @param {?} nodeId
     * @return {?}
     */
    getChildren(nodeId) {
        return this.nodes.filter((node) => node.parentId === nodeId);
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    convertLocalData2IOuterFile(file) {
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
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    convertIOuterFile2LocalData(file) {
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
    }
}
FileManagerBackendApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileManagerBackendApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: FileManagerConfiguration }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileTypeFilterComponent {
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
class IUploadItemEvent {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Button = {
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
class ToolbarEventModel {
    /**
     * @param {?} name
     * @param {?=} value
     */
    constructor(name, value = null) {
        this.name = name;
        this.value = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchFileComponent {
    /**
     * @param {?} searchFilterService
     */
    constructor(searchFilterService) {
        this.searchFilterService = searchFilterService;
        this.searchField = new FormControl();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.searchField.valueChanges
            .pipe(debounceTime(250))
            .subscribe((value) => this.searchFilterService.setValue(value));
    }
}
SearchFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-search-file',
                template: "<div class=\"input-group\">\n  <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'RI_FM_LBL_SEARCH_FOR' | translate}}\">\n  <span class=\"input-group-append\">\n      <button (click)=\"searchField.reset('')\" class=\"btn btn-secondary\" type=\"button\">\n          <i class=\"fa fa-times\"></i>\n      </button>\n  </span>\n</div>\n"
            }] }
];
/** @nocollapse */
SearchFileComponent.ctorParameters = () => [
    { type: SearchFilterService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AbstractButtonClass {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.symbol = data.symbol;
        this.name = data.name;
        this.label = data.label;
        this.icon = data.icon;
        this.iconCssClass = data.iconCssClass;
        this.disabled = data.disabled;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonClass extends AbstractButtonClass {
    /**
     * @return {?}
     */
    isDivider() {
        return false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonDividerClass extends AbstractButtonClass {
    constructor() {
        super({
            symbol: '',
            name: '',
            label: false,
            icon: false,
            iconCssClass: ''
        });
    }
    /**
     * @return {?}
     */
    isDivider() {
        return true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectionComponent {
    /**
     * @param {?} configuration
     * @param {?} currentDirectoryFilesService
     */
    constructor(configuration, currentDirectoryFilesService) {
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
    ngOnDestroy() {
        this.onLoadFilesSubscriber.unsubscribe();
    }
    /**
     * Initialize listener on load files
     * @return {?}
     */
    initListenOnLoadFiles() {
        this.onLoadFilesSubscriber = combineLatest(this.currentDirectoryFilesService.currentDirectoryFileIds$, this.currentDirectoryFilesService.selectedFiles$)
            .pipe(distinctUntilChanged())
            .subscribe((data) => {
            /** @type {?} */
            const numberOfFiles = data[0].length;
            /** @type {?} */
            const numberOfSelectedFiles = data[1].length;
            this.disableAllButtons();
            if (numberOfFiles > 0) {
                if (numberOfSelectedFiles > 0) {
                    this.enableAllButtons();
                }
                else {
                    this.enableSelectAllButton();
                }
            }
        });
    }
    /**
     * @param {?} button
     * @return {?}
     */
    onSelectDropdownClick(button) {
        /** @type {?} */
        const event = new ToolbarEventModel(button.symbol);
        this.onMenuButtonClick.emit(event);
    }
    /**
     * Disable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    disableAllButtons() {
        this.selectAllButton.disabled = true;
        this.selectButtonsList
            .filter((button) => {
            return !button.isDivider();
        })
            .forEach((button) => {
            button.disabled = true;
        });
    }
    /**
     * Enable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    enableAllButtons() {
        this.selectAllButton.disabled = false;
        this.selectButtonsList
            .forEach((button) => {
            button.disabled = false;
        });
    }
    /**
     * Create list of buttons
     * @private
     * @return {?}
     */
    createBasicButtons() {
        /** @type {?} */
        const buttons = [
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
    }
    /**
     * Enable only select button
     * @private
     * @return {?}
     */
    enableSelectAllButton() {
        this.selectAllButton.disabled = false;
        this.inverseSelectionButton.disabled = false;
    }
}
SelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-selection-dropdown',
                template: "<ri-dropdown *ngIf=\"configuration.isMultiSelection\" [mainButton]=\"selectAllButton\" [buttons]=\"selectButtonsList\"\n             (onClick)=\"onSelectDropdownClick($event)\"></ri-dropdown>\n"
            }] }
];
/** @nocollapse */
SelectionComponent.ctorParameters = () => [
    { type: FileManagerConfiguration },
    { type: CurrentDirectoryFilesService }
];
SelectionComponent.propDecorators = {
    onMenuButtonClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToolbarComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileManagerComponent {
    /**
     * @param {?} store
     * @param {?} nodeDispatcherService
     * @param {?} treeService
     * @param {?} notifications
     * @param {?} configuration
     * @param {?} fileManagerEffects
     * @param {?} filemanagerNotifcations
     * @param {?} currentDirectoryFilesService
     * @param {?} treeInitializerService
     */
    constructor(store, nodeDispatcherService, treeService, notifications, configuration, fileManagerEffects, filemanagerNotifcations, currentDirectoryFilesService, treeInitializerService) {
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
            .subscribe((notification) => {
            const { type, title, message } = notification;
            this.notifications[type](title, message);
        });
        this.subscription.add(this.currentDirectoryFilesService.selectedFiles$
            .subscribe((data) => {
            this.currentSelectedFilesIds = data;
        }));
        this.subscription.add(combineLatest(this.currentDirectoryFilesService.selectedFiles$, this.currentDirectoryFilesService.entities$)
            .subscribe(([ids, entities]) => {
            this.currentSelectedFiles = ids.map((id) => entities[id]);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeService);
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe((node) => this.currentSelectedFolder = node));
        /*** START - init files ***/
        this.files$ = this.currentDirectoryFilesService.files$;
        this.filteredFiles$ = this.currentDirectoryFilesService.filteredFiles$;
        this.selectedFiles$ = this.currentDirectoryFilesService.selectedFiles$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe((node) => {
            this.loadFiles(node ? node.id : '');
        }));
        /*** END - init files ***/
        this.subscription.add(this.fileManagerEffects.cropFileSuccess$
            .subscribe(() => {
            this.closeModal();
        }));
    }
    /**
     * @return {?}
     */
    get currentSelectedFolderId() {
        return this.currentSelectedFolder ? this.currentSelectedFolder.id : null;
    }
    /**
     * @return {?}
     */
    onAddFolder() {
        this.treeComponent.onAdd();
    }
    /***********************************************************************
       * FILE EVENTS
       **********************************************************************/
    /**
     * Run when all files are uploaded
     * @param {?} folderId
     * @return {?}
     */
    onUpload(folderId) {
        this.notifications.success('File upload', 'Upload complete');
    }
    /**
     * @param {?} fileEventData
     * @return {?}
     */
    onPreviewFile(fileEventData) {
        this.isPreviewMode = true;
        this.currentSelectedFile = fileEventData.file;
    }
    /**
     * @param {?} fileEventData
     * @return {?}
     */
    onOpenCropFileEditor(fileEventData) {
        this.isCropMode = true;
        this.currentSelectedFile = fileEventData.file;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectFile(event) {
        this.onSingleFileSelect.next(event.getSelectData());
    }
    /**
     * ********************************************************************
     * TOOLBAR EVENTS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    onMenuButtonClick(event) {
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
    }
    /**
     * ********************************************************************
     * OTHER FUNCTIONS
     * ********************************************************************
     * @param {?} event
     * @return {?}
     */
    keyEvents(event) {
        if (this.isPreviewMode || this.isCropMode) {
            if (event.keyCode === 27) {
                this.closeModal();
            }
        }
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.isPreviewMode = false;
        this.isCropMode = false;
    }
    /**
     * @private
     * @param {?} folderId
     * @return {?}
     */
    loadFiles(folderId) {
        this.store.dispatch(new LoadFilesAction({ folderId: folderId || '' }));
    }
    /**
     * @private
     * @return {?}
     */
    reloadFiles() {
        /** @type {?} */
        const id = this.currentSelectedFolder ? this.currentSelectedFolder.id : '';
        this.loadFiles(id);
    }
}
FileManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-filemanager',
                providers: [NodeService, NotificationsService],
                template: "<div class=\"filemanager-container\">\n  <div class=\"fm-header\">\n    <ri-toolbar\n      #toolbar\n      [currentFolderId]=\"currentSelectedFolderId\"\n      (onAddFolderClick)=\"onAddFolder()\"\n      (onUpload)=\"onUpload($event)\"\n      (onMenuButtonClick)=\"onMenuButtonClick($event)\"\n    ></ri-toolbar>\n  </div>\n  <div class=\"fm-main-box\">\n    <div class=\"folders-box\">\n      <ri-tree [treeModel]=\"treeModel\"></ri-tree>\n    </div>\n    <div class=\"files-box\">\n      <ri-tree-parents-list [treeModel]=\"treeModel\"></ri-tree-parents-list>\n      <ri-files-list [files]=\"filteredFiles$ | async\"\n                     [selectedFiles]=\"selectedFiles$ | async\"\n                     (onPreviewFile)=\"onPreviewFile($event)\"\n                     (onCropFile)=\"onOpenCropFileEditor($event)\"\n                     (onSelectFile)=\"onSelectFile($event)\"\n      ></ri-files-list>\n    </div>\n  </div>\n  <div *ngIf=\"isPreviewMode || isCropMode\" class=\"backdrop\">\n    <div class=\"modal-view\">\n      <div class=\"modal-close\">\n        <i class=\"fa fa-2x fa-times\" (click)=\"closeModal()\"></i>\n      </div>\n      <ri-file-preview *ngIf=\"isPreviewMode\" [files]=\"filteredFiles$ | async\"\n                       [file]=\"currentSelectedFile\"></ri-file-preview>\n      <crop-image *ngIf=\"isCropMode\" [file]=\"currentSelectedFile\"></crop-image>\n    </div>\n  </div>\n  <simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n</div>\n",
                styles: [".filemanager-container{width:990px;height:700px}.filemanager-container .tree .dropdown{position:relative}.filemanager-container .tree .dropdown-menu{position:fixed!important}.fm-main-box{position:relative;height:100%}.fm-main-box .folders-box{display:block;position:absolute;top:0;bottom:0;width:300px;overflow:hidden;overflow-y:auto}.fm-main-box .files-box{display:block;position:absolute;left:300px;top:0;bottom:0;overflow:hidden;overflow-y:auto}.fm-main-box .files-box ri-tree-parents-list{margin:0 0 10px 20px;display:block}.backdrop{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:1000}.modal-view{margin:50px auto;max-width:600px}.modal-view .modal-close{text-align:right;margin:5px 0;color:#fff}.modal-view .modal-close .fa{cursor:pointer}"]
            }] }
];
/** @nocollapse */
FileManagerComponent.ctorParameters = () => [
    { type: Store },
    { type: NodeDispatcherService },
    { type: FileManagerApiService },
    { type: NotificationsService },
    { type: FileManagerConfiguration },
    { type: FileManagerEffectsService },
    { type: FilemanagerNotifcations },
    { type: CurrentDirectoryFilesService },
    { type: TreeInitializerService }
];
FileManagerComponent.propDecorators = {
    onSingleFileSelect: [{ type: Output }],
    treeComponent: [{ type: ViewChild, args: [TreeComponent,] }],
    filesList: [{ type: ViewChild, args: [FilesListComponent,] }],
    keyEvents: [{ type: HostListener, args: ['window:keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileManagerModule {
    /**
     * @param {?} config
     * @param {?=} apiProvider
     * @return {?}
     */
    static forRoot(config, apiProvider = null) {
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
    }
    /**
     * @param {?} config
     * @param {?=} apiProvider
     * @return {?}
     */
    static forChild(config, apiProvider = null) {
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
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FileManagerConfiguration, IUrlConfiguration, TreeService, CropComponent, DropdownComponent, FileManagerUploader, FileComponent, FilesListComponent, PreviewComponent, CurrentDirectoryFilesService, ExtendedFileUploader, FilemanagerNotifcations, FileTypeFilterService, ImageDataConverter, SearchFilterService, FileManagerActionTypes, ChooseFilesAction, CropFileAction, CropFileErrorAction, CropFileSuccessAction, DeleteFileAction, DeleteFileSuccessAction, DeleteSelectedFilesAction, DeleteSelectedFilesSuccessAction, InverseFilesSelectionAction, LoadFilesAction, LoadFilesSuccessAction, MoveFilesErrorAction, MoveFilesSuccessAction, SelectAllFilesAction, SelectFileAction, UnSelectAllFilesAction, UnSelectFileAction, UploadFilesAction, UploadFilesErrorAction, UploadFilesSuccessAction, fileManagerReducer, filemanagerStateSelector, getAll, isChangeStateFiles, isChangeStateSelectedFiles, FileManagerDispatcherService, FileManagerActionsService, FileManagerApiService, FILEMANAGER_TREE_NAME, AbstractFileManagerApiService, FileManagerBackendApiService, FileManagerEffectsService, FileTypeFilterComponent, IUploadItemEvent, Button, ToolbarEventModel, SearchFileComponent, SelectionComponent, ToolbarComponent, FileManagerComponent, FileManagerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlnbi1hbmd1bGFyMi1maWxlbWFuYWdlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9jb25maWd1cmF0aW9uL0lVcmxDb25maWd1cmF0aW9uLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvY29uZmlndXJhdGlvbi90cmVlLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9maWxlc0xpc3QvZmlsZS5tb2RlbC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24udHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9jcm9wL2Nyb3AuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvaW1hZ2VEYXRhQ29udmVydGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zZXJ2aWNlcy9leHRlbmRlZEZpbGVVcGxhb2Rlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9maWxlc0xpc3QvZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZXNMaXN0L2ZpbGUvZmlsZS5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zdG9yZS9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGUtbWFuYWdlci1kaXNwYXRjaGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zdG9yZS9maWxlTWFuYWdlckFwaUFic3RyYWN0LmNsYXNzLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc3RvcmUvZmlsZU1hbmFnZXJBcGkuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZmlsZXNMaXN0L2ZpbGVzTGlzdC5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc2VydmljZXMvc2VhcmNoRmlsdGVyLnNlcnZpY2UudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zZXJ2aWNlcy9maWxlVHlwZUZpbHRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvc3RvcmUvZmlsZS1tYW5hZ2VyLnJlZHVjZXIudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9zZXJ2aWNlcy9jdXJyZW50RGlyZWN0b3J5RmlsZXMuc2VydmljZS50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL3N0b3JlL2ZpbGVNYW5hZ2VyQmFja2VuZEFwaS5zZXJ2aWNlLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9maWxlVHlwZUZpbHRlci9maWxlVHlwZUZpbHRlci5jb21wb25lbnQudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi90b29sYmFyL2ludGVyZmFjZS9JVXBsb2FkSXRlbUV2ZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9tb2RlbHMvYnV0dG9uLm1vZGVsLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9tb2RlbHMvdG9vbGJhckV2ZW50Lm1vZGVsLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9zZWFyY2hGaWxlL3NlYXJjaEZpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvZHJvcGRvd24vQWJzdHJhY3RCdXR0b24uY2xhc3MudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9kcm9wZG93bi9CdXR0b24uY2xhc3MudHMiLCJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyL2xpYi9kcm9wZG93bi9CdXR0b25EaXZpZGVyLmNsYXNzLnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci9zZWxlY3Rpb25Ecm9wRG93bi9zZWxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci9saWIvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL2ZpbGVtYW5hZ2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvbGliL2ZpbGVtYW5hZ2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lDb250ZXh0TWVudX0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlVHlwZUZpbHRlcn0gZnJvbSAnLi4vdG9vbGJhci9pbnRlcmZhY2UvSUZpbGVUeXBlRmlsdGVyJztcbmltcG9ydCB7SUNyb3BTaXplfSBmcm9tICcuLi9jcm9wL0lDcm9wU2l6ZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24ge1xuXG4gIHB1YmxpYyBhbGxvd2VkQ3JvcFNpemU6IElDcm9wU2l6ZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdSSV9GTV9CVE5fTEFORFNDQVBFJyxcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBoZWlnaHQ6IDEwMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1JJX0ZNX0JUTl9QT1JUUkFJVCcsXG4gICAgICB3aWR0aDogMjAwLFxuICAgICAgaGVpZ2h0OiAzMDBcbiAgICB9XG4gIF07XG5cbiAgcHVibGljIGNvbnRleHRNZW51SXRlbXM6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIGZpbGVUeXBlc0ZpbHRlcjogSUZpbGVUeXBlRmlsdGVyW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0FMTCcsXG4gICAgICBtaW1lczogW10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtZmlsZS1vJyxcbiAgICAgIHRleHQ6ICdBbGwgZmlsZXMnLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSU1BR0VTJyxcbiAgICAgIG1pbWVzOiBbJ2ltYWdlL2pwZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdpbWFnZS9naWYnLCAnaW1hZ2UvcG5nJ10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtcGljdHVyZS1vJyxcbiAgICAgIHRleHQ6ICdJbWFnZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQVVESU8nLFxuICAgICAgbWltZXM6IFsnYXVkaW8vbXBlZycsICdhdWRpby94LW1zLXdtYScsICdhdWRpby92bmQucm4tcmVhbGF1ZGlvJywgJ2F1ZGlvL3gtd2F2JywgJ2F1ZGlvL21wMyddLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWZpbGUtYXVkaW8tbycsXG4gICAgICB0ZXh0OiAnQXVkaW8nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVklERU8nLFxuICAgICAgbWltZXM6IFsndmlkZW8vbXBlZycsICd2aWRlby9tcDQnLCAndmlkZW8vcXVpY2t0aW1lJywgJ3ZpZGVvL3gtbXMtd212J10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtZmlsZS12aWRlby1vJyxcbiAgICAgIHRleHQ6ICdWaWRlbydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBUkNISVZFJyxcbiAgICAgIG1pbWVzOiBbJ2FwcGxpY2F0aW9uL3ppcCddLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWZpbGUtYXJjaGl2ZS1vJyxcbiAgICAgIHRleHQ6ICdBcmNoaXZlJ1xuICAgIH1cbiAgXTtcblxuICBwdWJsaWMgZm9sZGVyVXJsczoge2ZvbGRlcnNVcmw6IHN0cmluZywgZm9sZGVyTW92ZVVybDogc3RyaW5nfTtcbiAgcHVibGljIGZpbGVVcmwgPSAnL2FwaS9maWxlcyc7XG5cbiAgcHVibGljIGlzTXVsdGlTZWxlY3Rpb246IGJvb2xlYW47XG5cbiAgcHVibGljIG1heEZpbGVTaXplOiBudW1iZXI7XG5cbiAgcHVibGljIG1pbWVUeXBlczogc3RyaW5nW10gfCBudWxsO1xuXG4gIHB1YmxpYyBhbGxvd0Nob29zZU11bHRpcGxlRmlsZXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IHtmb2xkZXJzVXJsLCBmb2xkZXJNb3ZlVXJsfSA9IGNvbmZpZ3VyYXRpb24udXJscztcbiAgICB0aGlzLmZvbGRlclVybHMgPSB7Zm9sZGVyc1VybCwgZm9sZGVyTW92ZVVybH07XG4gICAgdGhpcy5maWxlVXJsID0gY29uZmlndXJhdGlvbi51cmxzLmZpbGVzVXJsO1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdGlvbiA9IGNvbmZpZ3VyYXRpb24uaXNNdWx0aVNlbGVjdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLm1heEZpbGVTaXplID0gY29uZmlndXJhdGlvbi5tYXhGaWxlU2l6ZSB8fCAwO1xuICAgIHRoaXMubWltZVR5cGVzID0gY29uZmlndXJhdGlvbi5taW1lVHlwZXMgfHwgbnVsbDtcbiAgICB0aGlzLmFsbG93Q2hvb3NlTXVsdGlwbGVGaWxlcyA9IGNvbmZpZ3VyYXRpb24uYWxsb3dDaG9vc2VNdWx0aXBsZUZpbGVzIHx8IGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSVVybENvbmZpZ3VyYXRpb24ge1xuICBmaWxlc1VybDogc3RyaW5nIHwgbnVsbDtcbiAgZm9sZGVyc1VybDogc3RyaW5nO1xuICBmb2xkZXJNb3ZlVXJsOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05vZGVTZXJ2aWNlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9JRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZVNlcnZpY2UgZXh0ZW5kcyBOb2RlU2VydmljZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIHN1cGVyKGh0dHApO1xuXG4gICAgdGhpcy5hcGlDb25maWcgPSB7XG4gICAgICBhZGRVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJzVXJsLFxuICAgICAgZ2V0VXJsOiBjb25maWd1cmF0aW9uLnVybHMuZm9sZGVyc1VybCxcbiAgICAgIHVwZGF0ZVVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlcnNVcmwsXG4gICAgICByZW1vdmVVcmw6IGNvbmZpZ3VyYXRpb24udXJscy5mb2xkZXJzVXJsLFxuICAgICAgbW92ZVVybDogY29uZmlndXJhdGlvbi51cmxzLmZvbGRlck1vdmVVcmxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4vaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuL2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7SVNlbGVjdEZpbGV9IGZyb20gJy4vaW50ZXJmYWNlL0lTZWxlY3RGaWxlJztcblxuZXhwb3J0IGNsYXNzIEZpbGVNb2RlbCBpbXBsZW1lbnRzIElGaWxlTW9kZWwge1xuICBzdGF0aWMgc21hbGxJY29uc0ZvbGRlciA9ICcvaWNvbnMvMTI4cHgvJztcbiAgc3RhdGljIGJpZ0ljb25zRm9sZGVyID0gJy9pY29ucy81MTJweC8nO1xuXG4gIHByaXZhdGUgX29yZ0RhdGE6IElPdXRlckZpbGU7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcblxuICBwcml2YXRlIF9pY29uc0ZvbGRlciA9IEZpbGVNb2RlbC5zbWFsbEljb25zRm9sZGVyO1xuXG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmlzSW1hZ2UoKSA/IHRoaXMuX29yZ0RhdGEudGh1bWJuYWlsVXJsIDogYCR7RmlsZU1vZGVsLnNtYWxsSWNvbnNGb2xkZXJ9JHt0aGlzLmdldEZpbGVFeHQoKX0ucG5nYDtcbiAgfVxuXG4gIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbWFnZSgpID8gdGhpcy5fb3JnRGF0YS51cmwgOiBgJHtGaWxlTW9kZWwuYmlnSWNvbnNGb2xkZXJ9JHt0aGlzLmdldEZpbGVFeHQoKX0ucG5nYDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5mcm9tSlNPTihkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmcm9tSlNPTihkYXRhOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5fb3JnRGF0YSA9IGRhdGE7XG5cbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGEuc2VsZWN0ZWQgfHwgZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhO1xuICB9XG5cbiAgcHVibGljIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLmlkO1xuICB9XG5cbiAgcHVibGljIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLmhlaWdodCB8fCAwO1xuICB9XG5cbiAgcHVibGljIGdldEZpbGVFeHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICB9XG5cbiAgcHVibGljIGdldE1pbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZ0RhdGEudHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLndpZHRoIHx8IDA7XG4gIH1cblxuICBwdWJsaWMgaXNJbWFnZSgpIHtcbiAgICByZXR1cm4gWydpbWFnZS9qcGcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2UvZ2lmJywgJ2ltYWdlL3BuZyddLmluZGV4T2YodGhpcy5nZXRNaW1lKCkpID4gLTE7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0RGF0YSgpOiBJU2VsZWN0RmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIG1pbWU6IHRoaXMuZ2V0TWltZSgpXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuXG5leHBvcnQgZW51bSBGaWxlTWFuYWdlckFjdGlvblR5cGVzIHtcbiAgQ0hPT1NFX0ZJTEVTID0gJ0ZJTEVNQU5BR0VSX0NIT09TRV9GSUxFUycsXG4gIENST1BfRklMRSA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEUnLFxuICBDUk9QX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUycsXG4gIENST1BfRklMRV9FUlJPUiA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1InLFxuICBERUxFVEVfRklMRSA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRScsXG4gIERFTEVURV9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU1VDQ0VTUycsXG4gIERFTEVURV9GSUxFX1NFTEVDVElPTiA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT04nLFxuICBERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUycsXG4gIElOVkVSU0VfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfSU5WRVJTRV9GSUxFX1NFTEVDVElPTicsXG4gIExPQURfRklMRVMgPSAnRklMRU1BTkFHRVJfTE9BRF9GSUxFUycsXG4gIExPQURfRklMRVNfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTX1NVQ0NFU1MnLFxuICBNT1ZFX0ZJTEVTX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTJyxcbiAgTU9WRV9GSUxFU19FUlJPUiA9ICdGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX0VSUk9SJyxcbiAgU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9TRUxFQ1RfQUxMJyxcbiAgU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUnLFxuICBVTlNFTEVDVF9GSUxFID0gJ0ZJTEVNQU5BR0VSX1VOU0VMRUNUX0ZJTEUnLFxuICBVTlNFTEVDVF9BTEwgPSAnRklMRU1BTkFHRVJfVU5TRUxFQ1RfQUxMJyxcbiAgVVBMT0FEX0ZJTEUgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUnLFxuICBVUExPQURfRklMRV9FUlJPUiA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9FUlJPUicsXG4gIFVQTE9BRF9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfU1VDQ0VTUycsXG59XG5cbmV4cG9ydCBjbGFzcyBDaG9vc2VGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNIT09TRV9GSUxFUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcEZpbGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWwsIGJvdW5kczogSUNyb3BCb3VuZHMgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyb3BGaWxlRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5DUk9QX0ZJTEVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcEZpbGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuQ1JPUF9GSUxFX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlRmlsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkRFTEVURV9GSUxFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlOiBJRmlsZU1vZGVsfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZTogSUZpbGVNb2RlbH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEVfU0VMRUNUSU9OO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBmaWxlczogc3RyaW5nW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlU2VsZWN0ZWRGaWxlc1N1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IHN0cmluZ1tdfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLklOVkVSU0VfRklMRV9TRUxFQ1RJT047XG5cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVM7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZvbGRlcklkOiBzdHJpbmd9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVNfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlRmlsZXNFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGVzOiBJT3V0ZXJGaWxlW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUZpbGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZm9sZGVySWQ6IHN0cmluZywgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlNFTEVDVF9BTEw7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuU0VMRUNUX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVOU0VMRUNUX0FMTDtcbn1cblxuZXhwb3J0IGNsYXNzIFVuU2VsZWN0RmlsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVOU0VMRUNUX0ZJTEU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGU6IElGaWxlTW9kZWx9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVVBMT0FEX0ZJTEVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGZpbGVzOiBJT3V0ZXJGaWxlW119KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuVVBMT0FEX0ZJTEVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgZmlsZXM6IElPdXRlckZpbGVbXX0pIHtcblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEZpbGVNYW5hZ2VyQWN0aW9uID1cbiAgQ2hvb3NlRmlsZXNBY3Rpb25cbiAgfCBDcm9wRmlsZUFjdGlvblxuICB8IENyb3BGaWxlRXJyb3JBY3Rpb25cbiAgfCBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb25cbiAgfCBEZWxldGVGaWxlQWN0aW9uXG4gIHwgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb25cbiAgfCBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uXG4gIHwgRGVsZXRlU2VsZWN0ZWRGaWxlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb25cbiAgfCBMb2FkRmlsZXNBY3Rpb25cbiAgfCBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uXG4gIHwgTW92ZUZpbGVzRXJyb3JBY3Rpb25cbiAgfCBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uXG4gIHwgU2VsZWN0QWxsRmlsZXNBY3Rpb25cbiAgfCBTZWxlY3RGaWxlQWN0aW9uXG4gIHwgVW5TZWxlY3RBbGxGaWxlc0FjdGlvblxuICB8IFVuU2VsZWN0RmlsZUFjdGlvblxuICB8IFVwbG9hZEZpbGVzQWN0aW9uXG4gIHwgVXBsb2FkRmlsZXNFcnJvckFjdGlvblxuICB8IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvblxuO1xuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLCBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9maWxlLm1vZGVsJztcbmltcG9ydCB7Q3JvcHBlclNldHRpbmdzfSBmcm9tICduZzItaW1nLWNyb3BwZXIvc3JjL2Nyb3BwZXJTZXR0aW5ncyc7XG5pbXBvcnQge0lDcm9wU2l6ZX0gZnJvbSAnLi9JQ3JvcFNpemUnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtCb3VuZHN9IGZyb20gJ25nMi1pbWctY3JvcHBlci9zcmMvbW9kZWwvYm91bmRzJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4vSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtJbWFnZUNyb3BwZXJDb21wb25lbnR9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0Nyb3BGaWxlQWN0aW9ufSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3JvcC1pbWFnZScsXG4gIHN0eWxlVXJsczogWycuL2Nyb3Auc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjcm9wLWltYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JvcC13b3JrYmVuY2hcIj5cbiAgICAgICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvb2xiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAqbmdGb3I9XCJsZXQgY3JvcFNpemUgb2YgY3JvcFNpemVMaXN0XCIgKGNsaWNrKT1cInVwZGF0ZUNyb3BTaXplKGNyb3BTaXplKVwiXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IGNyb3BTaXplID09IGN1cnJlbnRDcm9wU2l6ZX1cIj57e2Nyb3BTaXplLm5hbWUgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4taWNvblwiIChjbGljayk9XCJjcm9wSW1hZ2UoKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuPnt7J1JJX0ZNX0JUTl9TQVZFJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ3JvcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsZTogRmlsZU1vZGVsO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25Dcm9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgcHVibGljIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCdjcm9wcGVyJylcbiAgcHVibGljIGNyb3BwZXI6IEltYWdlQ3JvcHBlckNvbXBvbmVudDtcblxuICBwcml2YXRlIGJvdW5kczogQm91bmRzO1xuXG4gIHB1YmxpYyBjcm9wU2l6ZUxpc3Q6IElDcm9wU2l6ZVtdO1xuICBwdWJsaWMgY3VycmVudENyb3BTaXplOiBJQ3JvcFNpemU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+KSB7XG4gICAgdGhpcy5jcm9wU2l6ZUxpc3QgPSBjb25maWd1cmF0aW9uLmFsbG93ZWRDcm9wU2l6ZTtcbiAgfVxuXG4gIHVwZGF0ZUNyb3BTaXplKGNyb3BTaXplOiBJQ3JvcFNpemUpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGNyb3BwZXJDb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEltYWdlQ3JvcHBlckNvbXBvbmVudCk7XG4gICAgY29uc3QgY3JvcHBlckNvbXBvbmVudFJlZiA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjcm9wcGVyQ29tcG9uZW50KTtcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lci5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5kZXRhY2goMCk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50Q3JvcFNpemUgPSBjcm9wU2l6ZTtcbiAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLnNldHRpbmdzID0gdGhpcy5nZXRDcm9wcGVyU2V0dGluZ3MoKTtcbiAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLmltYWdlID0ge307XG4gICAgY3JvcHBlckNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkNyb3BcbiAgICAgIC5zdWJzY3JpYmUoKGJvdW5kczogQm91bmRzKSA9PiB0aGlzLmJvdW5kcyA9IGJvdW5kcyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuZmlsZS51cmw7XG4gICAgICBjcm9wcGVyQ29tcG9uZW50UmVmLmluc3RhbmNlLnNldEltYWdlKGltYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDcm9wU2l6ZSh0aGlzLmNyb3BTaXplTGlzdFswXSk7XG4gIH1cblxuICBwdWJsaWMgY3JvcEltYWdlKCkge1xuICAgIGNvbnN0IGJvdW5kczogSUNyb3BCb3VuZHMgPSB7XG4gICAgICB4OiB0aGlzLmJvdW5kcy5sZWZ0LFxuICAgICAgeTogdGhpcy5ib3VuZHMudG9wLFxuICAgICAgd2lkdGg6IHRoaXMuYm91bmRzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JvcEZpbGVBY3Rpb24oe2ZpbGU6IHRoaXMuZmlsZSwgYm91bmRzfSkpO1xuICB9XG5cblxuICBwcml2YXRlIGdldENyb3BwZXJTZXR0aW5ncygpOiBDcm9wcGVyU2V0dGluZ3Mge1xuICAgIGNvbnN0IGNyb3BwZXJTZXR0aW5ncyA9IG5ldyBDcm9wcGVyU2V0dGluZ3MoKTtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuY2FsY3VsYXRlU2NhbGUoKTtcbiAgICBjb25zdCB3aWR0aCA9IHNjYWxlICogdGhpcy5maWxlLmdldFdpZHRoKCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2NhbGUgKiB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjcm9wcGVyU2V0dGluZ3Mubm9GaWxlSW5wdXQgPSB0cnVlO1xuICAgIGNyb3BwZXJTZXR0aW5ncy53aWR0aCA9IHRoaXMuY3VycmVudENyb3BTaXplLndpZHRoO1xuICAgIGNyb3BwZXJTZXR0aW5ncy5oZWlnaHQgPSB0aGlzLmN1cnJlbnRDcm9wU2l6ZS5oZWlnaHQ7XG4gICAgY3JvcHBlclNldHRpbmdzLmNhbnZhc1dpZHRoID0gd2lkdGg7XG4gICAgY3JvcHBlclNldHRpbmdzLmNhbnZhc0hlaWdodCA9IGhlaWdodDtcblxuICAgIHJldHVybiBjcm9wcGVyU2V0dGluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBzY2FsZSBiZXR3ZWVuIGN1cnJlbnQgZmlsZSBkaW1lbnNpb25zIGFuZCBib3ggNjAweDYwMFxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTY2FsZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5maWxlLmdldFdpZHRoKCkgLyB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAoc2NhbGUgPiAxKSB7XG4gICAgICBpZiAodGhpcy5maWxlLmdldFdpZHRoKCkgPiA2MDApIHtcbiAgICAgICAgcmV0dXJuIDYwMCAvIHRoaXMuZmlsZS5nZXRXaWR0aCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5maWxlLmdldEhlaWdodCgpID4gNjAwKSB7XG4gICAgICAgIHJldHVybiA2MDAgLyB0aGlzLmZpbGUuZ2V0SGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQnV0dG9uRGF0YX0gZnJvbSAnLi9JQnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZHJvcGRvd24nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIG1haW5CdXR0b246IElCdXR0b25EYXRhO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBidXR0b25zOiBJQnV0dG9uRGF0YVtdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNwbGF5TWFpbkJ1dHRvbkxhYmVsOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgaXNPcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RCdXR0b24oYnV0dG9uOiBJQnV0dG9uRGF0YSk6IHZvaWQge1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIHRoaXMub25DbGljay5lbWl0KGJ1dHRvbik7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlT3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtVVUlEfSBmcm9tICdhbmd1bGFyMi11dWlkJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbmNhdE1hcCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2Zyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlRGF0YVByb3BlcnRpZXMge1xuICBpZDogc3RyaW5nIHwgbnVtYmVyO1xuICBmb2xkZXJJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgZGF0YTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEaW1lbnNpb25zIHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZURhdGFDb252ZXJ0ZXIge1xuICBwdWJsaWMgZ2V0UHJvcGVydGllcyhmaWxlOiBGaWxlLCBmb2xkZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJRmlsZURhdGFQcm9wZXJ0aWVzPiB7XG4gICAgY29uc3QgcHJvcGVydGllczogSUZpbGVEYXRhUHJvcGVydGllcyA9IHtcbiAgICAgIGlkOiBVVUlELlVVSUQoKSxcbiAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGRhdGE6ICcnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlYWRlciA9IHRoaXMuZ2V0QmFzZTY0RnJvbUZpbGUoZmlsZSk7XG5cbiAgICByZXR1cm4gcmVhZGVyXG4gICAgICAucGlwZShcbiAgICAgICAgY29uY2F0TWFwKChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBwcm9wZXJ0aWVzLmRhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMudHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZURpbWVuc2lvbnMoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZih7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoZGltZW5zaW9uczogSUltYWdlRGltZW5zaW9ucykgPT4ge1xuICAgICAgICAgIHByb3BlcnRpZXMud2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgICAgIHByb3BlcnRpZXMuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG9ic2VydmFibGUgd2hpY2ggcmV0dXJuIGltYWdlIGFzIGJhc2U2NCBkYXRhXG4gICAqL1xuICBwcml2YXRlIGdldEJhc2U2NEZyb21GaWxlKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cblxuICAgIHJldHVybiBmcm9tRXZlbnQocmVhZGVyLCAnbG9hZCcpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVhZGVyLnJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb2JzZXJ2YWJsZSB3aGljaCByZXR1cm4gZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIHByaXZhdGUgZ2V0SW1hZ2VEaW1lbnNpb25zKGRhdGE6IHN0cmluZyk6IE9ic2VydmFibGU8SUltYWdlRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gZGF0YTtcbiAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgbG9hZEltYWdlID0gZnJvbUV2ZW50KGltYWdlLCAnbG9hZCcpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGltYWdlLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICByZXR1cm4gbG9hZEltYWdlO1xuICB9XG59XG4iLCJpbXBvcnQge0ZpbGVJdGVtLCBGaWxlVXBsb2FkZXIsIEZpbGVVcGxvYWRlck9wdGlvbnN9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXMsIEltYWdlRGF0YUNvbnZlcnRlcn0gZnJvbSAnLi9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLCBJTm90aWZpY2F0aW9ufSBmcm9tICcuL0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zJztcbmltcG9ydCB7RmlsZUxpa2VPYmplY3R9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9maWxlLXVwbG9hZC9maWxlLWxpa2Utb2JqZWN0LmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRmlsZVVwbG9hZGVyIGV4dGVuZHMgRmlsZVVwbG9hZGVyIHtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucywgcHJpdmF0ZSBmaWxlbWFuYWdlck5vdGlmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvbldoZW5BZGRpbmdGaWxlRmFpbGVkKGl0ZW06IEZpbGVMaWtlT2JqZWN0LCBmaWx0ZXI6IGFueSwgb3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucykge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHR5cGU6ICdhbGVydCcsXG4gICAgICB0aXRsZTogJ0FkZCBmaWxlIHRvIHF1ZXVlJyxcbiAgICAgIG1lc3NhZ2U6IGBGaWxlIG5vdCBhZGQgdG8gcXVldWVgXG4gICAgfTtcblxuICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gJ2ZpbGVTaXplJykge1xuICAgICAgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPSBgRmlsZSBzaXplIGlzIHRvbyBsYXJnZSAtIG1heCBzaXplICBpcyAke29wdGlvbnMubWF4RmlsZVNpemUgLyAxMDI0fSBLQmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGlmaWNhdGlvbi5tZXNzYWdlID0gYEZpbGUgbWltZSB0eXBlIFwiJHtpdGVtLnR5cGV9XCIgaXMgbm90IGFsbG93ZWRgO1xuICAgIH1cbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWRJdGVtKHZhbHVlOiBGaWxlSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXJsKSB7XG4gICAgICBzdXBlci51cGxvYWRJdGVtKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1hZ2VEYXRhQ29udmVydGVyID0gbmV3IEltYWdlRGF0YUNvbnZlcnRlcigpO1xuICAgICAgdGhpcy5fb25Qcm9ncmVzc0l0ZW0odmFsdWUsIDApO1xuXG4gICAgICBpZiAodGhpcy5pc1VwbG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm9wdGlvbnMuaGVhZGVycy5maW5kKChvYmplY3Q6IGFueSkgPT4gb2JqZWN0Lm5hbWUgPT09ICdmb2xkZXJJZCcpO1xuXG4gICAgICB0aGlzLl9vblByb2dyZXNzSXRlbSh2YWx1ZSwgNTApO1xuICAgICAgaW1hZ2VEYXRhQ29udmVydGVyLmdldFByb3BlcnRpZXModmFsdWUuX2ZpbGUsIGhlYWRlci52YWx1ZSlcbiAgICAgICAgLnN1YnNjcmliZSgoZmlsZTogSUZpbGVEYXRhUHJvcGVydGllcykgPT4ge1xuICAgICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuX29uUHJvZ3Jlc3NJdGVtKHZhbHVlLCAxMDApO1xuICAgICAgICAgIHRoaXMuX29uQ29tcGxldGVJdGVtKHZhbHVlLCBKU09OLnN0cmluZ2lmeShmaWxlKSwgMjAwLCB7fSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uIHtcbiAgdHlwZTogJ2FsZXJ0JyB8ICdlcnJvcicgfCAnc3VjY2Vzcyc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucyB7XG4gIHByaXZhdGUgbm90aWZpY2F0aW9uJCA9IG5ldyBTdWJqZWN0PElOb3RpZmljYXRpb24+KCk7XG5cbiAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb24kLm5leHQobm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROb3RpZmljYXRpb25TdHJlYW0oKTogU3ViamVjdDxJTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uJDtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFeHRlbmRlZEZpbGVVcGxvYWRlcn0gZnJvbSAnLi4vc2VydmljZXMvZXh0ZW5kZWRGaWxlVXBsYW9kZXIuc2VydmljZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zfSBmcm9tICcuLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge0ZpbGVVcGxvYWRlck9wdGlvbnN9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlclVwbG9hZGVyIHtcbiAgcHVibGljIHVwbG9hZGVyOiBFeHRlbmRlZEZpbGVVcGxvYWRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIGZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uOiBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucykge1xuICAgIGNvbnN0IG9wdGlvbnM6IEZpbGVVcGxvYWRlck9wdGlvbnMgPSB7XG4gICAgICBhbGxvd2VkTWltZVR5cGU6IGNvbmZpZ3VyYXRpb24ubWltZVR5cGVzLFxuICAgICAgdXJsOiBjb25maWd1cmF0aW9uLnVybHMuZmlsZXNVcmwsXG4gICAgICBtYXhGaWxlU2l6ZTogY29uZmlndXJhdGlvbi5tYXhGaWxlU2l6ZVxuICAgIH07XG5cbiAgICB0aGlzLnVwbG9hZGVyID0gbmV3IEV4dGVuZGVkRmlsZVVwbG9hZGVyKG9wdGlvbnMsIGZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLnVwbG9hZGVyLmF1dGhUb2tlbiA9IG51bGw7XG4gICAgdGhpcy51cGxvYWRlci5zZXRPcHRpb25zKHRoaXMuZ2V0RGVmYXVsdE9wdGlvbnMoKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICAgIG9wdGlvbnNbJ3JlbW92ZUFmdGVyVXBsb2FkJ10gPSB0cnVlO1xuICAgIG9wdGlvbnNbJ2F1dG9VcGxvYWQnXSA9IHRydWU7XG4gICAgb3B0aW9uc1snbWV0aG9kJ10gPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBzZXRBdXRob3JpemF0aW9uVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIHRoaXMudXBsb2FkZXIuYXV0aFRva2VuID0gdG9rZW47XG4gIH1cblxuICBwdWJsaWMgc2V0RGlyZWN0b3J5SWQoZGlyZWN0b3J5SWQ6IHN0cmluZyB8IG51bWJlcik6IEZpbGVNYW5hZ2VyVXBsb2FkZXIge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldERlZmF1bHRPcHRpb25zKCk7XG5cbiAgICBvcHRpb25zWydoZWFkZXJzJ10gPSBbe25hbWU6ICdmb2xkZXJJZCcsIHZhbHVlOiBkaXJlY3RvcnlJZC50b1N0cmluZygpfV07XG5cbiAgICB0aGlzLnVwbG9hZGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0lGaWxlRXZlbnR9IGZyb20gJy4uL2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyU3RhdGV9IGZyb20gJy4uLy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIENob29zZUZpbGVzQWN0aW9uLFxuICBEZWxldGVGaWxlQWN0aW9uLFxuICBTZWxlY3RGaWxlQWN0aW9uLFxuICBVblNlbGVjdEZpbGVBY3Rpb25cbn0gZnJvbSAnLi4vLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsZTogSUZpbGVNb2RlbDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uUHJldmlld0ZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkNyb3BGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25TZWxlY3RGaWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyByZW1vdmVUaXRsZSA9ICdSZW1vdmUgZmlsZSc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGNsaWNrZWQgb24gYnV0dG9uIFwiZGVsZXRlIGZpbGVcIlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoJGV2ZW50OiBNb3VzZUV2ZW50LCBmaWxlOiBJRmlsZU1vZGVsKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlRmlsZUFjdGlvbih7ZmlsZX0pKTtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZW1vdmVNZXNzYWdlKGZpbGU6IElGaWxlTW9kZWwpIHtcbiAgICByZXR1cm4gJ1lvdSBhcmUgdHJ5IHRvIGRlbGV0ZSA8Yj4nICsgZmlsZS5uYW1lICsgJzwvYj4uIEFyZSB5b3Ugc3VyZT8nO1xuICB9XG5cbiAgcHVibGljIG9wZW5QcmV2aWV3KCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGxldCBmaWxlRXZlbnQ6IElGaWxlRXZlbnQgPSB7XG4gICAgICBldmVudE5hbWU6ICdvblByZXZpZXdGaWxlJyxcbiAgICAgIGZpbGU6IHRoaXMuZmlsZVxuICAgIH07XG4gICAgdGhpcy5vblByZXZpZXdGaWxlLmVtaXQoZmlsZUV2ZW50KTtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuQ3JvcCgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZmlsZUV2ZW50OiBJRmlsZUV2ZW50ID0ge1xuICAgICAgZXZlbnROYW1lOiAnb25Dcm9wRmlsZScsXG4gICAgICBmaWxlOiB0aGlzLmZpbGVcbiAgICB9O1xuICAgIHRoaXMub25Dcm9wRmlsZS5lbWl0KGZpbGVFdmVudCk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0RmlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RGaWxlQWN0aW9uKHtmaWxlOiB0aGlzLmZpbGV9KSk7XG4gIH1cblxuICBwdWJsaWMgdW5TZWxlY3RGaWxlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0RmlsZUFjdGlvbih7ZmlsZTogdGhpcy5maWxlfSkpO1xuICB9XG5cbiAgcHVibGljIGNob29zZUZpbGUoJGV2ZW50OiBNb3VzZUV2ZW50LCBmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hvb3NlRmlsZXNBY3Rpb24oe2ZpbGVzOiBbZmlsZS50b0pTT04oKV19KSk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVNYW5hZ2VyUGF5bG9hZERhdGEge1xuICBmb2xkZXJJZD86IHN0cmluZztcbiAgZmlsZXM/OiBJT3V0ZXJGaWxlW107XG4gIGZpbGU/OiBJRmlsZU1vZGVsO1xuICBmaWxlSWRzPzogc3RyaW5nW107XG4gIGJvdW5kcz86IElDcm9wQm91bmRzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlTWFuYWdlckFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHBheWxvYWQ6IElGaWxlTWFuYWdlclBheWxvYWREYXRhO1xufVxuXG4vKipcbiAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlIHtcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0NIT09TRV9GSUxFUyA9ICdGSUxFTUFOQUdFUl9DSE9PU0VfRklMRVMnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfQ1JPUF9GSUxFID0gJ0ZJTEVNQU5BR0VSX0NST1BfRklMRSc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9DUk9QX0ZJTEVfRVJST1IgPSAnRklMRU1BTkFHRVJfQ1JPUF9GSUxFX0VSUk9SJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX0lOVkVSU0VfRklMRV9TRUxFQ1RJT04gPSAnRklMRU1BTkFHRVJfSU5WRVJTRV9GSUxFX1NFTEVDVElPTic7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9MT0FEX0ZJTEVTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVMnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfTE9BRF9GSUxFU19TVUNDRVNTID0gJ0ZJTEVNQU5BR0VSX0xPQURfRklMRVNfU1VDQ0VTUyc7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX01PVkVfRklMRVNfRVJST1IgPSAnRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUic7XG4gIHN0YXRpYyBGSUxFTUFOQUdFUl9TRUxFQ1RfQUxMID0gJ0ZJTEVNQU5BR0VSX1NFTEVDVF9BTEwnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUgPSAnRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVU5TRUxFQ1RfRklMRSA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9GSUxFJztcbiAgc3RhdGljIEZJTEVNQU5BR0VSX1VOU0VMRUNUX0FMTCA9ICdGSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUnO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1IgPSAnRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1InO1xuICBzdGF0aWMgRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfU1VDQ0VTUyA9ICdGSUxFTUFOQUdFUl9VUExPQURfRklMRV9TVUNDRVNTJztcblxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDaG9vc2VGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjaG9vc2VGaWxlcyhmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DSE9PU0VfRklMRVMsXG4gICAgICBwYXlsb2FkOiB7ZmlsZXN9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZUFjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJRmlsZU1vZGVsLCBib3VuZHM6IElDcm9wQm91bmRzKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9DUk9QX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgIGJvdW5kczogYm91bmRzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgY3JvcEZpbGVTdWNjZXNzKGZpbGU6IElGaWxlTW9kZWwpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBDcm9wRmlsZUVycm9yQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlRXJyb3IoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfQ1JPUF9GSUxFX0VSUk9SLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBEZWxldGVGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGVTdWNjZXNzKGZpbGU6IElGaWxlTW9kZWwpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlU2VsZWN0ZWRGaWxlcyhmaWxlSWRzOiBzdHJpbmdbXSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OLFxuICAgICAgcGF5bG9hZDoge2ZpbGVJZHN9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBkZWxldGVTZWxlY3RlZEZpbGVzU3VjY2VzcyhmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9ERUxFVEVfRklMRV9TRUxFQ1RJT05fU1VDQ0VTUyxcbiAgICAgIHBheWxvYWQ6IHtmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IExvYWRGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTE9BRF9GSUxFUyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZm9sZGVySWQ6IGZvbGRlcklkXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgaW52ZXJzZUZpbGVTZWxlY3Rpb24oKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9JTlZFUlNFX0ZJTEVfU0VMRUNUSU9OLFxuICAgICAgcGF5bG9hZDoge31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IExvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgbG9hZEZpbGVzU3VjY2Vzcyhmb2xkZXJJZDogc3RyaW5nLCBmaWxlczogSU91dGVyRmlsZVtdKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9MT0FEX0ZJTEVTX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgICAgZmlsZXM6IGZpbGVzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIG1vdmVGaWxlU3VjY2VzcyhmaWxlczogSU91dGVyRmlsZVtdLCBmb2xkZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19TVUNDRVNTLFxuICAgICAgcGF5bG9hZDoge2ZvbGRlcklkLCBmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IE1vdmVGaWxlc0Vycm9yQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIG1vdmVGaWxlRXJyb3IoZmlsZXM6IElPdXRlckZpbGVbXSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUixcbiAgICAgIHBheWxvYWQ6IHtmaWxlc31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFNlbGVjdEFsbEZpbGVzQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEFsbEZpbGVzKCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfU0VMRUNUX0FMTCxcbiAgICAgIHBheWxvYWQ6IHt9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBTZWxlY3RGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfU0VMRUNUX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdW5TZWxlY3RBbGwoKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VTlNFTEVDVF9BTEwsXG4gICAgICBwYXlsb2FkOiB7fVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIHVzZSBuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKCkgaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0RmlsZShmaWxlOiBJRmlsZU1vZGVsKTogSUZpbGVNYW5hZ2VyQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9VTlNFTEVDVF9GSUxFLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBmaWxlOiBmaWxlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgdXNlIG5ldyBVcGxvYWRGaWxlc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWQoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbigpIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWRTdWNjZXNzKGZpbGU6IElPdXRlckZpbGUpOiBJRmlsZU1hbmFnZXJBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCB1c2UgbmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oKSBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRXJyb3IoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlTWFuYWdlckFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEVfRVJST1IsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpbGVzOiBbZmlsZV1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJTdGF0ZX0gZnJvbSAnLi9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2V9IGZyb20gJy4vZmlsZU1hbmFnZXJBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5pbXBvcnQge1xuICBDaG9vc2VGaWxlc0FjdGlvbixcbiAgQ3JvcEZpbGVBY3Rpb24sXG4gIERlbGV0ZUZpbGVBY3Rpb24sXG4gIERlbGV0ZVNlbGVjdGVkRmlsZXNBY3Rpb24sXG4gIEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbixcbiAgTG9hZEZpbGVzQWN0aW9uLFxuICBTZWxlY3RBbGxGaWxlc0FjdGlvbixcbiAgU2VsZWN0RmlsZUFjdGlvbixcbiAgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbixcbiAgVW5TZWxlY3RGaWxlQWN0aW9uLCBVcGxvYWRGaWxlc0FjdGlvbiwgVXBsb2FkRmlsZXNFcnJvckFjdGlvbiwgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4vZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbi8qKlxuICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElGaWxlTWFuYWdlclN0YXRlPiwgcHJpdmF0ZSBmaWxlTWFuYWdlckFjdGlvbnM6IEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggQ2hvb3NlRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIGNob29zZUZpbGVzKGZpbGVzOiBJT3V0ZXJGaWxlW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaG9vc2VGaWxlc0FjdGlvbih7ZmlsZXN9KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIENyb3BGaWxlQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJRmlsZU1vZGVsLCBib3VuZHM6IElDcm9wQm91bmRzKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JvcEZpbGVBY3Rpb24oe2JvdW5kcywgZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggRGVsZXRlRmlsZUFjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlRmlsZShmaWxlOiBJRmlsZU1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlRmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggRGVsZXRlU2VsZWN0ZWRGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgZGVsZXRlU2VsZWN0ZWRGaWxlcyhmaWxlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uKHtmaWxlc30pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggSW52ZXJzZUZpbGVzU2VsZWN0aW9uQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBpbnZlcnNlU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggTG9hZEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBMb2FkRmlsZXNBY3Rpb24oe2ZvbGRlcklkfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBTZWxlY3RBbGxGaWxlc0FjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgc2VsZWN0QWxsRmlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFNlbGVjdEZpbGVBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlbGVjdEZpbGVBY3Rpb24oe2ZpbGV9KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVuU2VsZWN0QWxsRmlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVW5TZWxlY3RGaWxlQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1blNlbGVjdEZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0RmlsZUFjdGlvbih7ZmlsZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBARGVwcmVjYXRlZCAtIFdpbGwgYmUgcmVtb3ZlZCBpbiAzLjAuMCwgZGlzcGF0Y2ggVXBsb2FkRmlsZXNFcnJvckFjdGlvbiBpbnN0ZWFkIG9mIGl0XG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRXJyb3IoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oe2ZpbGVzOiBbZmlsZV19KSk7XG4gIH1cblxuICAvKipcbiAgICogQERlcHJlY2F0ZWQgLSBXaWxsIGJlIHJlbW92ZWQgaW4gMy4wLjAsIGRpc3BhdGNoIFVwbG9hZEZpbGVzQWN0aW9uIGluc3RlYWQgb2YgaXRcbiAgICovXG4gIHB1YmxpYyB1cGxvYWQoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzQWN0aW9uKHtmaWxlczogW2ZpbGVdfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBEZXByZWNhdGVkIC0gV2lsbCBiZSByZW1vdmVkIGluIDMuMC4wLCBkaXNwYXRjaCBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24gaW5zdGVhZCBvZiBpdFxuICAgKi9cbiAgcHVibGljIHVwbG9hZFN1Y2Nlc3MoZmlsZTogSU91dGVyRmlsZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvbih7ZmlsZXM6IFtmaWxlXX0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7SUZpbGVEYXRhUHJvcGVydGllc30gZnJvbSAnLi4vc2VydmljZXMvaW1hZ2VEYXRhQ29udmVydGVyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgRklMRU1BTkFHRVJfVFJFRV9OQU1FID0gJ2ZpbGVNYW5hZ2VyVHJlZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSB7XG5cbiAgcHJvdGVjdGVkIHRyZWVOYW1lID0gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICBwcm90ZWN0ZWQgZmlsZU1hbmFnZXJOYW1lID0gJ2ZpbGVNYW5hZ2VyRmlsZXMnO1xuXG5cbiAgcHJvdGVjdGVkIG5vZGVzOiBJT3V0ZXJOb2RlW107XG4gIHByb3RlY3RlZCBmaWxlczogSUZpbGVEYXRhUHJvcGVydGllc1tdO1xuXG4gIHByb3RlY3RlZCBjdXJyZW50Tm9kZUlkID0gJyc7XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlLCBJTm9kZVNlcnZpY2V9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtVVUlEfSBmcm9tICdhbmd1bGFyMi11dWlkJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQXBpfSBmcm9tICcuL0lGaWxlTWFuYWdlckFwaSc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXN9IGZyb20gJy4uL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9uc30gZnJvbSAnLi4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSwgRklMRU1BTkFHRVJfVFJFRV9OQU1FfSBmcm9tICcuL2ZpbGVNYW5hZ2VyQXBpQWJzdHJhY3QuY2xhc3MnO1xuaW1wb3J0IHtlbXB0eSwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJBcGlTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RGaWxlTWFuYWdlckFwaVNlcnZpY2UgaW1wbGVtZW50cyBJRmlsZU1hbmFnZXJBcGksIElOb2RlU2VydmljZSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZW1hbmFnZXJOb3RmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICB9XG5cbiAgcHVibGljIGxvYWQobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIGlmICghdGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5ub2RlcyA9IHRoaXMuZ2V0QWxsRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKTtcblxuICAgIHJldHVybiBvZihub2Rlcyk7XG4gIH1cblxuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIG5vZGUucGFyZW50SWQgPSBwYXJlbnROb2RlSWQ7XG4gICAgbm9kZS5pZCA9IFVVSUQuVVVJRCgpO1xuXG4gICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc2F2ZU5vZGVzKCkpIHtcbiAgICAgIHJldHVybiBvZihub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVtcHR5KCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHNyY0lkID0gc3JjTm9kZS5pZDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldE5vZGUgPyB0YXJnZXROb2RlLmlkIDogJyc7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQoc3JjSWQpO1xuXG4gICAgdGhpcy5ub2Rlc1tpbmRleF0ucGFyZW50SWQgPSB0YXJnZXRJZDtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5ub2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChub2RlLmlkKTtcblxuICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbm9kZTtcblxuICAgIGlmICh0aGlzLnNhdmVOb2RlcygpKSB7XG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlOb2RlSWQobm9kZUlkKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpbmRleF07XG5cbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKS5sZW5ndGggPiAwO1xuXG4gICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLnNhdmVOb2RlcygpO1xuXG4gICAgICByZXR1cm4gb2Yobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdOb2RlIGlzIG5vdCBlbXB0eScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlcyA9IFsuLi5ub2Rlc107XG5cbiAgICB0aGlzLnNhdmVOb2RlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgZmlsZVxuICAgKi9cbiAgcHVibGljIGNyb3BGaWxlKGZpbGU6IElPdXRlckZpbGUsIGJvdW5kczogSUNyb3BCb3VuZHMpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICByZXR1cm4gdGhyb3dFcnJvcignVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG5vdCBhdmFpbGFibGUgd2l0aCBMb2NhbFN0b3JhZ2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGZpbGVzIGZyb20gZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgbG9hZEZpbGVzKG5vZGVJZCA9ICcnKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICB0aGlzLmN1cnJlbnROb2RlSWQgPSBub2RlSWQ7XG5cbiAgICBpZiAoIXRoaXMuZmlsZXMpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmdldEFsbEZpbGVEYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlc0Zyb21Gb2xkZXIobm9kZUlkKTtcblxuICAgIGNvbnN0IG5ld0ZpbGVzOiBJT3V0ZXJGaWxlW10gPSBmaWxlcy5tYXAoKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZihuZXdGaWxlcyk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5RmlsZUlkKGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNhdmVGaWxlcygpO1xuXG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkRmlsZXMoc2VsZWN0ZWRGaWxlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBudW1iZXJPZkZpbGVzID0gdGhpcy5maWxlcy5sZW5ndGg7XG5cbiAgICBzZWxlY3RlZEZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zYXZlRmlsZXMoKTtcblxuICAgIHJldHVybiBvZigodGhpcy5maWxlcy5sZW5ndGggKyBzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gbnVtYmVyT2ZGaWxlcykpO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZEZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIGNvbnN0IGZpbGVEYXRhID0gdGhpcy5jb252ZXJ0SU91dGVyRmlsZTJMb2NhbERhdGEoZmlsZSk7XG4gICAgdGhpcy5maWxlcy5wdXNoKGZpbGVEYXRhKTtcblxuICAgIGlmICh0aGlzLnNhdmVGaWxlcygpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5jb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZURhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ1VwbG9hZCBlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb3ZlRmlsZShmaWxlczogSU91dGVyRmlsZVtdLCBub2RlOiBJT3V0ZXJOb2RlID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IGZpbGVzLm1hcChmaWxlID0+IGZpbGUuaWQudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZm9sZGVySWQgPSBub2RlID8gbm9kZS5pZC50b1N0cmluZygpIDogJyc7XG5cbiAgICBjb25zdCBtb3ZlZEZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoZmlsZSA9PiBpZHMuaW5kZXhPZihmaWxlLmlkLnRvU3RyaW5nKCkpID4gLTEpO1xuICAgIGNvbnN0IGVycm9yTXNnID0gJ0NhbiBub3QgbW92ZSBmaWxlIHRvIHRoZSBzYW1lIGZvbGRlcic7XG5cbiAgICBjb25zdCBpc01vdmVkVG9TYW1lRm9sZGVyID0gZmFsc2U7XG5cbiAgICBtb3ZlZEZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmlkID09PSBmaWxlLmZvbGRlcklkKSB7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmaWxlLmZvbGRlcklkID09PSAnJyB8fCBmaWxlLmZvbGRlcklkID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JNc2cpO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgZmlsZS5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzTW92ZWRUb1NhbWVGb2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JNc2cpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNhdmVGaWxlcygpKSB7XG4gICAgICByZXR1cm4gb2YobW92ZWRGaWxlcy5tYXAoZmlsZSA9PiB0aGlzLmNvbnZlcnRMb2NhbERhdGEySU91dGVyRmlsZShmaWxlKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnTW92ZSBmaWxlcyBlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlOb2RlSWQobm9kZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbmRJbmRleCgobm9kZSkgPT4ge1xuICAgICAgcmV0dXJuIG5vZGUuaWQgPT09IG5vZGVJZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbmRJbmRleCgoZmlsZSkgPT4gZmlsZS5pZCA9PT0gZmlsZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4obm9kZUlkOiBzdHJpbmcpOiBJT3V0ZXJOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbHRlcigobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5wYXJlbnRJZCA9PT0gbm9kZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsZXNGcm9tRm9sZGVyKG5vZGVJZDogc3RyaW5nKTogSUZpbGVEYXRhUHJvcGVydGllc1tdIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpID0+IGZpbGUuZm9sZGVySWQgPT09IG5vZGVJZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QWxsRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTogSU91dGVyTm9kZVtdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudHJlZU5hbWUpO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBbGxGaWxlRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTogSUZpbGVEYXRhUHJvcGVydGllc1tdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZmlsZU1hbmFnZXJOYW1lKTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVOb2RlcygpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50cmVlTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5ub2RlcykpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnU3RhdGUgaXMgbm90IHNhdmVkLicsXG4gICAgICAgIG1lc3NhZ2U6ICdSZWxvYWQgcHJldmlvdXMgc3RhdGUuJ1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlsZXMgPSBudWxsO1xuICAgICAgdGhpcy5ub2RlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlRmlsZXMoKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZmlsZU1hbmFnZXJOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbGVzKSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdTdGF0ZSBpcyBub3Qgc2F2ZWQuJyxcbiAgICAgICAgbWVzc2FnZTogJ1JlbG9hZCBwcmV2aW91cyBzdGF0ZS4nXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgbm9kZUlkID0gdGhpcy5maWxlc1sodGhpcy5maWxlcy5sZW5ndGggLSAxKV0uZm9sZGVySWQgfHwgbnVsbDtcblxuICAgICAgdGhpcy5maWxlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9hZChub2RlSWQpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0TG9jYWxEYXRhMklPdXRlckZpbGUoZmlsZTogSUZpbGVEYXRhUHJvcGVydGllcyk6IElPdXRlckZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZmlsZS5pZCxcbiAgICAgIGZvbGRlcklkOiBmaWxlLmZvbGRlcklkLFxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgdGh1bWJuYWlsVXJsOiBmaWxlLmRhdGEsXG4gICAgICB1cmw6IGZpbGUuZGF0YSxcbiAgICAgIHdpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaWxlLmhlaWdodCxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRJT3V0ZXJGaWxlMkxvY2FsRGF0YShmaWxlOiBJT3V0ZXJGaWxlKTogSUZpbGVEYXRhUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBmaWxlLmlkLnRvU3RyaW5nKCksXG4gICAgICBmb2xkZXJJZDogZmlsZS5mb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGRhdGE6IGZpbGUuZGF0YSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHdpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaWxlLmhlaWdodFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyZWVBY3Rpb25UeXBlc30gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0FjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7SU91dGVyTm9kZSwgVHJlZU1vdmVOb2RlQWN0aW9ufSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSwgSUZpbGVNYW5hZ2VyQWN0aW9ufSBmcm9tICcuL2ZpbGVNYW5hZ2VyQWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7ZW1wdHksIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7SUNyb3BCb3VuZHN9IGZyb20gJy4uL2Nyb3AvSUNyb3BCb3VuZHMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckFwaVNlcnZpY2V9IGZyb20gJy4vZmlsZU1hbmFnZXJBcGkuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zfSBmcm9tICcuLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENyb3BGaWxlQWN0aW9uLFxuICBDcm9wRmlsZUVycm9yQWN0aW9uLFxuICBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24sXG4gIERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uLCBEZWxldGVTZWxlY3RlZEZpbGVzU3VjY2Vzc0FjdGlvbiwgRmlsZU1hbmFnZXJBY3Rpb24sIExvYWRGaWxlc0FjdGlvbixcbiAgTG9hZEZpbGVzU3VjY2Vzc0FjdGlvbiwgTW92ZUZpbGVzRXJyb3JBY3Rpb24sIE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24sIFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24sIFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvblxufSBmcm9tICcuL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSB7XG5cbiAgQEVmZmVjdCgpXG4gIHB1YmxpYyBsb2FkRmlsZXMkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTE9BRF9GSUxFUyksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB0aGlzLmxvYWRGaWxlcyhhY3Rpb24ucGF5bG9hZC5mb2xkZXJJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChmaWxlczogSU91dGVyRmlsZVtdKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlc30pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZih0aGlzLm9uTG9hZEZpbGVzRXJyb3IoYWN0aW9uLnBheWxvYWQuZm9sZGVySWQpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGNyb3BGaWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRSksXG4gICAgICBzd2l0Y2hNYXAoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB0aGlzLmNyb3BGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGUsIGFjdGlvbi5wYXlsb2FkLmJvdW5kcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IElPdXRlckZpbGUpOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdDcm9wIEltYWdlLicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbWFnZSBoYXMgYmVlbiBjcm9wcGVkLidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24oe2ZpbGU6IGFjdGlvbi5wYXlsb2FkLmZpbGV9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBDcm9wRmlsZUVycm9yQWN0aW9uKHtmaWxlOiBhY3Rpb24ucGF5bG9hZC5maWxlfSkpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICBARWZmZWN0KClcbiAgcHVibGljIGRlbGV0ZUZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy5kZWxldGVGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBib29sZWFuKTogRmlsZU1hbmFnZXJBY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWxldGVGaWxlU3VjY2Vzc0FjdGlvbih7ZmlsZTogYWN0aW9uLnBheWxvYWQuZmlsZX0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YodGhpcy5vbkRlbGV0ZUZpbGVFcnJvcihhY3Rpb24ucGF5bG9hZC5maWxlKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgZGVsZXRlRmlsZXNTZWxlY3Rpb24kID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfREVMRVRFX0ZJTEVfU0VMRUNUSU9OKSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBJRmlsZU1hbmFnZXJBY3Rpb24pID0+IHRoaXMuZGVsZXRlRmlsZXNTZWxlY3Rpb24oYWN0aW9uLnBheWxvYWQuZmlsZUlkcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IGJvb2xlYW4pOiBGaWxlTWFuYWdlckFjdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERlbGV0ZVNlbGVjdGVkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogYWN0aW9uLnBheWxvYWQuZmlsZUlkc30pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YodGhpcy5vbkRlbGV0ZUZpbGVzU2VsZWN0aW9uRXJyb3IoYWN0aW9uLnBheWxvYWQuZmlsZXMpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cblxuICBARWZmZWN0KClcbiAgcHVibGljIHVwbG9hZEZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfVVBMT0FEX0ZJTEUpLFxuICAgICAgc3dpdGNoTWFwKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4gdGhpcy51cGxvYWRGaWxlKGFjdGlvbi5wYXlsb2FkLmZpbGVzWzBdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogSU91dGVyRmlsZSk6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXBsb2FkRmlsZXNTdWNjZXNzQWN0aW9uKHtmaWxlczogW3Jlc3VsdF19KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbXB0eSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgbW92ZUZpbGUkID0gdGhpcy5hY3Rpb25zJFxuICAgIC5waXBlKFxuICAgICAgb2ZUeXBlKFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERSksXG4gICAgICBmaWx0ZXIoKGFjdGlvbjogVHJlZU1vdmVOb2RlQWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5zb3VyY2VPZkRyb3BwZWREYXRhID09PSAnRklMRSc7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBUcmVlTW92ZU5vZGVBY3Rpb24pID0+IHRoaXMubW92ZUZpbGVzKFs8SU91dGVyRmlsZT5hY3Rpb24ucGF5bG9hZC5vbGROb2RlXSwgYWN0aW9uLnBheWxvYWQubm9kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IElPdXRlckZpbGVbXSk6IEZpbGVNYW5hZ2VyQWN0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlcklkID0gKDxJT3V0ZXJGaWxlPmFjdGlvbi5wYXlsb2FkLm9sZE5vZGUpLmZvbGRlcklkO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24oe2ZpbGVzOiByZXN1bHQsIGZvbGRlcklkfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IE1vdmVGaWxlc0Vycm9yQWN0aW9uKHtmaWxlczogWzxJT3V0ZXJGaWxlPmFjdGlvbi5wYXlsb2FkLm9sZE5vZGVdfSkpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIEBFZmZlY3QoKVxuICBwdWJsaWMgZmlsZXNNb3ZlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkXG4gICAgLnBpcGUoXG4gICAgICBvZlR5cGUoRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZS5GSUxFTUFOQUdFUl9NT1ZFX0ZJTEVTX1NVQ0NFU1MpLFxuICAgICAgbWFwKChhY3Rpb246IE1vdmVGaWxlc1N1Y2Nlc3NBY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5vbk1vdmVGaWxlc1N1Y2Nlc3MoKTtcblxuICAgICAgICByZXR1cm4gbmV3IExvYWRGaWxlc0FjdGlvbih7Zm9sZGVySWQ6IGFjdGlvbi5wYXlsb2FkLmZvbGRlcklkfSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgcHVibGljIHVwbG9hZEVycm9yJCA9IHRoaXMuYWN0aW9ucyRcbiAgICAucGlwZShcbiAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX1VQTE9BRF9GSUxFX0VSUk9SKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBVcGxvYWRGaWxlc0Vycm9yQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgICAgIHRpdGxlOiAnRmlsZSB1cGxvYWQnLFxuICAgICAgICAgIG1lc3NhZ2U6IGAke2FjdGlvbi5wYXlsb2FkLmZpbGVzWzBdLm5hbWV9IGV4aXN0cyBvbiB0aGUgc2VydmVyIGluIHRoaXMgZGlyZWN0b3J5YFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICBwdWJsaWMgY3JvcEZpbGVTdWNjZXNzJDogT2JzZXJ2YWJsZTxDcm9wRmlsZVN1Y2Nlc3NBY3Rpb24+O1xuICBwdWJsaWMgZGVsZXRlRmlsZVN1Y2Nlc3MkOiBPYnNlcnZhYmxlPERlbGV0ZUZpbGVTdWNjZXNzQWN0aW9uPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyQWN0aW9uczogRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlbWFuYWdlck5vdGZpY2F0aW9uOiBGaWxlbWFuYWdlck5vdGlmY2F0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlTWFuYWdlckFwaVNlcnZpY2U6IEZpbGVNYW5hZ2VyQXBpU2VydmljZSkge1xuXG4gICAgdGhpcy5jcm9wRmlsZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9TVUNDRVNTKVxuICAgICAgKTtcblxuICAgIHRoaXMuZGVsZXRlRmlsZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0RFTEVURV9GSUxFX1NVQ0NFU1MpXG4gICAgICApO1xuXG4gICAgdGhpcy5hY3Rpb25zJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG9mVHlwZShGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLkZJTEVNQU5BR0VSX0NST1BfRklMRV9FUlJPUilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub25Dcm9wRmlsZUVycm9yKGFjdGlvbi5wYXlsb2FkLmZpbGUpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmFjdGlvbnMkXG4gICAgICAucGlwZShcbiAgICAgICAgb2ZUeXBlKEZpbGVNYW5hZ2VyQWN0aW9uc1NlcnZpY2UuRklMRU1BTkFHRVJfTU9WRV9GSUxFU19FUlJPUilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogSUZpbGVNYW5hZ2VyQWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub25Nb3ZlRmlsZXNFcnJvcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JvcEZpbGUoZmlsZTogSUZpbGVNb2RlbCwgYm91bmRzOiBJQ3JvcEJvdW5kcyk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5jcm9wRmlsZShmaWxlLnRvSlNPTigpLCBib3VuZHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5yZW1vdmVGaWxlKGZpbGUudG9KU09OKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlbGV0ZUZpbGVzU2VsZWN0aW9uKGZpbGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5yZW1vdmVTZWxlY3RlZEZpbGVzKGZpbGVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZyB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlckZpbGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS5sb2FkRmlsZXMoZm9sZGVySWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwbG9hZEZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLmZpbGVNYW5hZ2VyQXBpU2VydmljZS51cGxvYWRGaWxlKGZpbGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1vdmVGaWxlcyhmaWxlczogSU91dGVyRmlsZVtdLCBmb2xkZXI6IElPdXRlck5vZGUgPSBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWFuYWdlckFwaVNlcnZpY2UubW92ZUZpbGUoZmlsZXMsIGZvbGRlcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Dcm9wRmlsZUVycm9yKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgdGl0bGU6ICdDcm9wIEltYWdlJyxcbiAgICAgIG1lc3NhZ2U6ICdbRklMRU1BTkFHRVJdIENhbiBub3QgY3JvcCBmaWxlJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGVsZXRlRmlsZUVycm9yKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90ZmljYXRpb24uc2VuZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgdGl0bGU6ICdEZWxldGUgZmlsZScsXG4gICAgICBtZXNzYWdlOiAnW0ZJTEVNQU5BR0VSXSBDYW4gbm90IGRlbGV0ZSBmaWxlJyArIGZpbGUubmFtZVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGVsZXRlRmlsZXNTZWxlY3Rpb25FcnJvcihmaWxlczogSU91dGVyRmlsZVtdKTogdm9pZCB7XG4gICAgdGhpcy5maWxlbWFuYWdlck5vdGZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIHRpdGxlOiAnRGVsZXRlIHNlbGVjdGVkIGZpbGVzJyxcbiAgICAgIG1lc3NhZ2U6ICdbRklMRU1BTkFHRVJdIE5vdCBhbGwgZmlsZXMgd2VyZSBkZWxldGVkJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTG9hZEZpbGVzRXJyb3IoZm9sZGVySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ0xvYWQgZmlsZXMnLFxuICAgICAgbWVzc2FnZTogJ1tGSUxFTUFOQUdFUl0gQ2FuIG5vdCBsb2FkIGZpbGVzIGZvciBmb2xkZXIgJyArIGZvbGRlcklkXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Nb3ZlRmlsZXNTdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiAnTW92ZSBmaWxlcycsXG4gICAgICBtZXNzYWdlOiAnRmlsZSB3YXMgc3VjY2Vzc2Z1bGx5IG1vdmVkIHRvIGZvbGRlcidcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbk1vdmVGaWxlc0Vycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsZW1hbmFnZXJOb3RmaWNhdGlvbi5zZW5kTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ01vdmUgZmlsZXMnLFxuICAgICAgbWVzc2FnZTogJ0ZpbGUgd2FzIG5vdCBzdWNjZXNzZnVsbHkgbW92ZWQgdG8gbmV3IGZvbGRlcidcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZU1vZGVsfSBmcm9tICcuL2ZpbGUubW9kZWwnO1xuaW1wb3J0IHtJRmlsZUV2ZW50fSBmcm9tICcuL2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7SUZpbGVNb2RlbH0gZnJvbSAnLi9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvZmlsZU1hbmFnZXJBY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckRpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXItZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuLi9zdG9yZS9maWxlTWFuYWdlckVmZmVjdHMuc2VydmljZSc7XG5pbXBvcnQge0ZJTEVNQU5BR0VSX1RSRUVfTkFNRX0gZnJvbSAnLi4vc3RvcmUvZmlsZU1hbmFnZXJBcGlBYnN0cmFjdC5jbGFzcyc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlclN0YXRlfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0RlbGV0ZUZpbGVBY3Rpb24sIFNlbGVjdEZpbGVBY3Rpb24sIFVuU2VsZWN0RmlsZUFjdGlvbn0gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGVzLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZXMuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGVzLWxpc3Quc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVzTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaWxlczogRmlsZU1vZGVsW107XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNlbGVjdGVkRmlsZXM6IHN0cmluZ1tdO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25QcmV2aWV3RmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uQ3JvcEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblNlbGVjdEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHJlbW92ZVRpdGxlID0gJ1JlbW92ZSBmaWxlJztcblxuICBwdWJsaWMgZHJhZ1pvbmUgPSBGSUxFTUFOQUdFUl9UUkVFX05BTUU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyRGlzcGF0Y2hlcjogRmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgZmlsZU1hbmFnZXJFZmZlY3RzOiBGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlKSB7XG5cbiAgICBmaWxlTWFuYWdlckVmZmVjdHMuZGVsZXRlRmlsZVN1Y2Nlc3MkXG4gICAgICAuc3Vic2NyaWJlKChhY3Rpb246IElGaWxlTWFuYWdlckFjdGlvbikgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25zLnN1Y2Nlc3MoJ0ZpbGUgZGVsZXRlJywgYCR7YWN0aW9uLnBheWxvYWQuZmlsZS5uYW1lfSBoYXMgYmVlbiBkZWxldGVkYCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGNsaWNrZWQgb24gYnV0dG9uIFwiZGVsZXRlIGZpbGVcIlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVxuICAgKi9cbiAgcHVibGljIGRlbGV0ZUZpbGUoZmlsZTogSUZpbGVNb2RlbCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZUZpbGVBY3Rpb24oe2ZpbGV9KSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVtb3ZlTWVzc2FnZShmaWxlOiBJRmlsZU1vZGVsKSB7XG4gICAgcmV0dXJuICdZb3UgYXJlIHRyeSB0byBkZWxldGUgPGI+JyArIGZpbGUubmFtZSArICc8L2I+LiBBcmUgeW91IHN1cmU/JztcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUHJldmlldyhmaWxlRXZlbnQ6IElGaWxlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uUHJldmlld0ZpbGUuZW1pdChmaWxlRXZlbnQpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Dcm9wKGZpbGVFdmVudDogSUZpbGVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Dcm9wRmlsZS5lbWl0KGZpbGVFdmVudCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0aW9uKGZpbGU6IElGaWxlTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAoZmlsZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVW5TZWxlY3RGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RGaWxlQWN0aW9uKHtmaWxlfSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKGZpbGU6IEZpbGVNb2RlbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRmlsZXMuaW5kZXhPZihmaWxlLmdldElkKCkudG9TdHJpbmcoKSkgPiAtMTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSUZpbGVNb2RlbCc7XG5pbXBvcnQge0ZpbGVNb2RlbH0gZnJvbSAnLi4vZmlsZXNMaXN0L2ZpbGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1maWxlLXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJldmlldy5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBmaWxlc1xuICAgKi9cbiAgQElucHV0KCkgZmlsZXM6IElGaWxlTW9kZWxbXTtcblxuICAvKipcbiAgICogQ3VycmVudCB2aWV3ZWQgZmlsZVxuICAgKi9cbiAgQElucHV0KCkgZmlsZTogSUZpbGVNb2RlbDtcblxuICAvKipcbiAgICogQ3VycmVudCBpbmRleFxuICAgKi9cbiAgcHVibGljIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgcHVibGljIGxlbmd0aCA9IDA7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmZpbGVzLmxlbmd0aDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRmlsZXMgPSB0aGlzLmZpbGVzXG4gICAgICAuZmlsdGVyKChmaWxlOiBGaWxlTW9kZWwpID0+IGZpbGUuZ2V0SWQoKSA9PT0gdGhpcy5maWxlLmdldElkKCkpO1xuXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBzZWxlY3RlZEZpbGVzLmxlbmd0aCA9PT0gMSA/IHRoaXMuZmlsZXMuaW5kZXhPZihzZWxlY3RlZEZpbGVzWzBdKSA6IC0xO1xuICB9XG5cbiAgcHVibGljIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcmV2KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNzQpIHtcbiAgICAgIHRoaXMucHJldigpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSB8fCBldmVudC5rZXlDb2RlID09PSA3NSkge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsdGVyU2VydmljZSB7XG4gIC8qKlxuICAgKiBGaWxlIHR5cGUgZmlsdGVyXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcblxuICBwdWJsaWMgZ2V0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIkLmdldFZhbHVlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7SUZpbGVUeXBlRmlsdGVyfSBmcm9tICcuLi90b29sYmFyL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVGaWx0ZXJTZXJ2aWNlIHtcblxuICAvKipcbiAgICogRmlsZSB0eXBlIGZpbHRlclxuICAgKi9cbiAgcHVibGljIGZpbHRlciQ6IEJlaGF2aW9yU3ViamVjdDxJRmlsZVR5cGVGaWx0ZXIgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHVibGljIGdldFZhbHVlKCk6IElGaWxlVHlwZUZpbHRlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogSUZpbGVUeXBlRmlsdGVyIHwgbnVsbCkge1xuICAgIHRoaXMuZmlsdGVyJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3J9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIENyb3BGaWxlU3VjY2Vzc0FjdGlvbiwgRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb24sXG4gIEZpbGVNYW5hZ2VyQWN0aW9uLFxuICBGaWxlTWFuYWdlckFjdGlvblR5cGVzLFxuICBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uLFxuICBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uLCBTZWxlY3RGaWxlQWN0aW9uLCBVblNlbGVjdEZpbGVBY3Rpb24sIFVwbG9hZEZpbGVzU3VjY2Vzc0FjdGlvblxufSBmcm9tICcuL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JlRW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBJT3V0ZXJGaWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlTWFuYWdlclN0YXRlIHtcbiAgZW50aXRpZXM6IFN0b3JlRW50aXRpZXM7XG4gIGZpbGVzOiBzdHJpbmdbXTtcbiAgc2VsZWN0ZWRGaWxlczogc3RyaW5nW107XG59XG5cblxuZnVuY3Rpb24gY3JvcEZpbGUoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlLCBhY3Rpb246IENyb3BGaWxlU3VjY2Vzc0FjdGlvbik6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgY29uc3QgZmlsZSA9IGFjdGlvbi5wYXlsb2FkLmZpbGU7XG4gIGNvbnN0IGlkID0gZmlsZS5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cbiAgc3RhdGUuZW50aXRpZXNbaWRdID0gPElPdXRlckZpbGU+ey4uLmZpbGUudG9KU09OKCl9O1xuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBzdGF0ZS5zZWxlY3RlZEZpbGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmVyc2VGaWxlc1NlbGVjdGlvbihzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBzdGF0ZS5maWxlcy5maWx0ZXIoKGk6IHN0cmluZykgPT4gc3RhdGUuc2VsZWN0ZWRGaWxlcy5pbmRleE9mKGkpID09PSAtMSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZEZpbGVzKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBMb2FkRmlsZXNTdWNjZXNzQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICBjb25zdCBlbnRpdGllczogU3RvcmVFbnRpdGllcyA9IHt9O1xuICBjb25zdCBmaWxlczogc3RyaW5nW10gPSBbXTtcblxuICBhY3Rpb24ucGF5bG9hZC5maWxlcy5tYXAoKGZpbGU6IElPdXRlckZpbGUpID0+IHtcbiAgICBjb25zdCBpZCA9IGZpbGUuaWQudG9TdHJpbmcoKTtcblxuICAgIGVudGl0aWVzW2lkXSA9IGZpbGU7XG4gICAgZmlsZXMucHVzaChpZCk7XG4gIH0pO1xuXG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogZW50aXRpZXMsXG4gICAgZmlsZXM6IGZpbGVzLFxuICAgIHNlbGVjdGVkRmlsZXM6IFtdXG4gIH07XG59XG5cblxuZnVuY3Rpb24gbW92ZUZpbGVzKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBNb3ZlRmlsZXNTdWNjZXNzQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICBjb25zdCBmaWxlcyA9IGFjdGlvbi5wYXlsb2FkLmZpbGVzO1xuICBjb25zdCBpZHM6IHN0cmluZ1tdID0gZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5pZC50b1N0cmluZygpKTtcbiAgY29uc3QgZm9sZGVySWQgPSBhY3Rpb24ucGF5bG9hZC5mb2xkZXJJZCA/IGFjdGlvbi5wYXlsb2FkLmZvbGRlcklkLnRvU3RyaW5nKCkgOiAnJztcblxuICBjb25zdCBlbnRpdGllcyA9IHsuLi5zdGF0ZS5lbnRpdGllc307XG5cbiAgaWRzLmZvckVhY2goKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBvbGRFbnRpdHkgPSB7Li4uZW50aXRpZXNbaWRdfTtcbiAgICBvbGRFbnRpdHkuZm9sZGVySWQgPSBmb2xkZXJJZDtcblxuICAgIGVudGl0aWVzW2lkXSA9IG9sZEVudGl0eTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogZW50aXRpZXMsXG4gICAgZmlsZXM6IHN0YXRlLmZpbGVzLmZpbHRlcigoaTogc3RyaW5nKSA9PiBpZHMuaW5kZXhPZihpKSA9PT0gLTEpLFxuICAgIHNlbGVjdGVkRmlsZXM6IHN0YXRlLnNlbGVjdGVkRmlsZXMuZmlsdGVyKChpOiBzdHJpbmcpID0+IGlkcy5pbmRleE9mKGkpID09PSAtMSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmlsZShzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIGFjdGlvbjogRGVsZXRlRmlsZVN1Y2Nlc3NBY3Rpb24pOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIGNvbnN0IGlkID0gYWN0aW9uLnBheWxvYWQuZmlsZS5nZXRJZCgpO1xuXG4gIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1tpZF07XG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogc3RhdGUuZW50aXRpZXMsXG4gICAgZmlsZXM6IHN0YXRlLmZpbGVzLmZpbHRlcigoaTogc3RyaW5nKSA9PiBpICE9PSBpZCksXG4gICAgc2VsZWN0ZWRGaWxlczogc3RhdGUuc2VsZWN0ZWRGaWxlc1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVTZWxlY3RlZEZpbGVzKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSk6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgY29uc3QgZmlsZXM6IHN0cmluZ1tdID0gc3RhdGUuZmlsZXMuZmlsdGVyKChpOiBzdHJpbmcpID0+IHN0YXRlLnNlbGVjdGVkRmlsZXMuaW5kZXhPZihpKSA9PT0gLTEpO1xuICBjb25zdCBlbnRpdGllczogU3RvcmVFbnRpdGllcyA9IHt9O1xuXG4gIGZpbGVzLmZvckVhY2goKGZpbGVJZDogc3RyaW5nKSA9PiB7XG4gICAgZW50aXRpZXNbZmlsZUlkXSA9IHN0YXRlLmVudGl0aWVzW2ZpbGVJZF07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IGVudGl0aWVzLFxuICAgIGZpbGVzOiBmaWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBbXVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxlY3RGaWxlKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBTZWxlY3RGaWxlQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICByZXR1cm4ge1xuICAgIGVudGl0aWVzOiBzdGF0ZS5lbnRpdGllcyxcbiAgICBmaWxlczogc3RhdGUuZmlsZXMsXG4gICAgc2VsZWN0ZWRGaWxlczogWy4uLnN0YXRlLnNlbGVjdGVkRmlsZXMsIGFjdGlvbi5wYXlsb2FkLmZpbGUuZ2V0SWQoKS50b1N0cmluZygpXVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxlY3RBbGxGaWxlcyhzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBbLi4uc3RhdGUuZmlsZXNdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwbG9hZEZpbGVzKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgYWN0aW9uOiBVcGxvYWRGaWxlc1N1Y2Nlc3NBY3Rpb24pOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIGVudGl0aWVzOiB7Li4uc3RhdGUuZW50aXRpZXN9LFxuICAgIGZpbGVzOiBbLi4uc3RhdGUuZmlsZXNdLFxuICAgIHNlbGVjdGVkRmlsZXM6IFtdXG4gIH07XG5cbiAgYWN0aW9uLnBheWxvYWQuZmlsZXMuZm9yRWFjaCgoZmlsZTogSU91dGVyRmlsZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gZmlsZS5pZC50b1N0cmluZygpO1xuXG4gICAgbmV3U3RhdGUuZW50aXRpZXNbaWRdID0gZmlsZTtcbiAgICBuZXdTdGF0ZS5maWxlcy5wdXNoKGlkKTtcbiAgfSk7XG5cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuZnVuY3Rpb24gdW5TZWxlY3RBbGxGaWxlcyhzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJRmlsZU1hbmFnZXJTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgZW50aXRpZXM6IHN0YXRlLmVudGl0aWVzLFxuICAgIGZpbGVzOiBzdGF0ZS5maWxlcyxcbiAgICBzZWxlY3RlZEZpbGVzOiBbXVxuICB9O1xufVxuXG5mdW5jdGlvbiB1blNlbGVjdEZpbGUoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlLCBhY3Rpb246IFVuU2VsZWN0RmlsZUFjdGlvbik6IElGaWxlTWFuYWdlclN0YXRlIHtcbiAgY29uc3QgZmlsZUlkID0gYWN0aW9uLnBheWxvYWQuZmlsZS5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbnRpdGllczogc3RhdGUuZW50aXRpZXMsXG4gICAgZmlsZXM6IHN0YXRlLmZpbGVzLFxuICAgIHNlbGVjdGVkRmlsZXM6IHN0YXRlLnNlbGVjdGVkRmlsZXMuZmlsdGVyKChpZDogc3RyaW5nKSA9PiBpZCAhPT0gZmlsZUlkKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZU1hbmFnZXJSZWR1Y2VyKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxuICBmaWxlczogW10sXG4gIHNlbGVjdGVkRmlsZXM6IFtdXG59LCBhY3Rpb246IEZpbGVNYW5hZ2VyQWN0aW9uKTogSUZpbGVNYW5hZ2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNST1BfRklMRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIGNyb3BGaWxlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5JTlZFUlNFX0ZJTEVfU0VMRUNUSU9OOlxuICAgICAgcmV0dXJuIGludmVyc2VGaWxlc1NlbGVjdGlvbihzdGF0ZSk7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkRFTEVURV9GSUxFX1NFTEVDVElPTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHJlbW92ZVNlbGVjdGVkRmlsZXMoc3RhdGUpO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHJlbW92ZUZpbGUoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBtb3ZlRmlsZXMoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBsb2FkRmlsZXMoc3RhdGUsIGFjdGlvbik7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlNFTEVDVF9BTEw6XG4gICAgICByZXR1cm4gc2VsZWN0QWxsRmlsZXMoc3RhdGUpO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5TRUxFQ1RfRklMRTpcbiAgICAgIHJldHVybiBzZWxlY3RGaWxlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VTlNFTEVDVF9BTEw6XG4gICAgICByZXR1cm4gdW5TZWxlY3RBbGxGaWxlcyhzdGF0ZSk7XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLlVOU0VMRUNUX0ZJTEU6XG4gICAgICByZXR1cm4gdW5TZWxlY3RGaWxlKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5VUExPQURfRklMRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHVwbG9hZEZpbGVzKHN0YXRlLCBhY3Rpb24pO1xuICAgIGNhc2UgRmlsZU1hbmFnZXJBY3Rpb25UeXBlcy5ERUxFVEVfRklMRV9TRUxFQ1RJT046XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkNST1BfRklMRTpcbiAgICBjYXNlIEZpbGVNYW5hZ2VyQWN0aW9uVHlwZXMuREVMRVRFX0ZJTEU6XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLkxPQURfRklMRVM6XG4gICAgY2FzZSBGaWxlTWFuYWdlckFjdGlvblR5cGVzLk1PVkVfRklMRVNfRVJST1I6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsZW1hbmFnZXJTdGF0ZVNlbGVjdG9yOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgSUZpbGVNYW5hZ2VyU3RhdGU+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPElGaWxlTWFuYWdlclN0YXRlPignZmlsZXMnKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbCA9IChzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBJT3V0ZXJGaWxlW10gPT4ge1xuICByZXR1cm4gc3RhdGUuZmlsZXMubWFwKChpZDogc3RyaW5nKSA9PiBzdGF0ZS5lbnRpdGllc1tpZF0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQ2hhbmdlU3RhdGVGaWxlcyA9IChuZXdTdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUsIHByZXZTdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIHByZXZTdGF0ZS5maWxlcy5sZW5ndGggIT09IG5ld1N0YXRlLmZpbGVzLmxlbmd0aCB8fCBwcmV2U3RhdGUuZmlsZXMuZmlsdGVyKChpOiBzdHJpbmcpID0+IG5ld1N0YXRlLmZpbGVzLmluZGV4T2YoaSkgPT09IC0xKS5sZW5ndGggPiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQ2hhbmdlU3RhdGVTZWxlY3RlZEZpbGVzID0gKG5ld1N0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSwgcHJldlN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gcHJldlN0YXRlLnNlbGVjdGVkRmlsZXMubGVuZ3RoICE9PSBuZXdTdGF0ZS5zZWxlY3RlZEZpbGVzLmxlbmd0aCB8fCBwcmV2U3RhdGUuc2VsZWN0ZWRGaWxlcy5maWx0ZXIoKGk6IHN0cmluZykgPT4gbmV3U3RhdGUuc2VsZWN0ZWRGaWxlcy5pbmRleE9mKGkpID09PSAtMSkubGVuZ3RoID4gMDtcbn07XG4iLCJpbXBvcnQge0lUcmVlU3RhdGV9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlYXJjaEZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZVR5cGVGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4uL2ZpbGVzTGlzdC9maWxlLm1vZGVsJztcbmltcG9ydCB7ZmlsZW1hbmFnZXJTdGF0ZVNlbGVjdG9yLCBnZXRBbGwsIElGaWxlTWFuYWdlclN0YXRlLCBTdG9yZUVudGl0aWVzfSBmcm9tICcuLi9zdG9yZS9maWxlLW1hbmFnZXIucmVkdWNlcic7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lGaWxlVHlwZUZpbHRlcn0gZnJvbSAnLi4vdG9vbGJhci9pbnRlcmZhY2UvSUZpbGVUeXBlRmlsdGVyJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHdpdGhMYXRlc3RGcm9tfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGZpbGVzXG4gICAqL1xuICBwdWJsaWMgZmlsZXMkOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPjtcblxuICAvKipcbiAgICogTGlzdCBvZiBmaWxlcyBmb3IgY3VycmVudCBzZWxlY3RlZCBkaXJlY3RvcnlcbiAgICovXG4gIHB1YmxpYyBmaWx0ZXJlZEZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT47XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGZpbGVzIGFzIEpTT04gZGF0YVxuICAgKi9cbiAgcHVibGljIGVudGl0aWVzJDogT2JzZXJ2YWJsZTxTdG9yZUVudGl0aWVzPjtcblxuICAvKipcbiAgICogTGlzdCBvZiBzZWxlY3RlZCBmaWxlIGlkc1xuICAgKi9cbiAgcHVibGljIHNlbGVjdGVkRmlsZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgZmlsZXMgaW4gY3VycmVudCBkaXJlY3RvcnlcbiAgICovXG4gIHB1YmxpYyBjdXJyZW50RGlyZWN0b3J5RmlsZUlkcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVUeXBlRmlsdGVyOiBGaWxlVHlwZUZpbHRlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHNlYXJjaEZpbHRlclNlcnZpY2U6IFNlYXJjaEZpbHRlclNlcnZpY2UpIHtcblxuICAgIGNvbnN0IHN0b3JlJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGZpbGVtYW5hZ2VyU3RhdGVTZWxlY3Rvcik7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSQgPSBzdG9yZSQ7XG4gICAgdGhpcy5lbnRpdGllcyQgPSBvYnNlcnZhYmxlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKSA9PiBzdGF0ZS5lbnRpdGllcyksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICk7XG5cbiAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlSWRzJCA9IG9ic2VydmFibGUkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpID0+IHN0YXRlLmZpbGVzKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRGaWxlcyQgPSBzdG9yZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWxlcylcbiAgICAgICk7XG5cbiAgICB0aGlzLmZpbGVzJCA9IHRoaXMuZ2V0RmlsZXNTdHJlYW0oKTtcbiAgICB0aGlzLmZpbHRlcmVkRmlsZXMkID0gdGhpcy5nZXRDdXJyZW50RGlyZWN0b3J5RmlsZXNTdHJlYW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gc3RyZWFtIG9mIGZpbGVzXG4gICAqL1xuICBwcml2YXRlIGdldEZpbGVzU3RyZWFtKCk6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZUlkcyRcbiAgICAgIC5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmVudGl0aWVzJCksXG4gICAgICAgIG1hcCgoYXI6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRpdGllczogYXJbMV0sXG4gICAgICAgICAgICBmaWxlczogYXJbMF1cbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChzdGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdldEFsbChzdGF0ZSlcbiAgICAgICAgICAgIC5tYXAoKGZpbGU6IElPdXRlckZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWxlTW9kZWwoZmlsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHN0cmVhbSBvZiBjdXJyZW50IGRpcmVjdG9yeSBmaWx0ZXJlZCBmaWxlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRDdXJyZW50RGlyZWN0b3J5RmlsZXNTdHJlYW0oKTogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5maWxlcyQsXG4gICAgICB0aGlzLmZpbGVUeXBlRmlsdGVyLmZpbHRlciQsXG4gICAgICB0aGlzLnNlYXJjaEZpbHRlclNlcnZpY2UuZmlsdGVyJFxuICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGRhdGE6IFtGaWxlTW9kZWxbXSwgSUZpbGVUeXBlRmlsdGVyLCBzdHJpbmddKTogRmlsZU1vZGVsW10gPT4ge1xuICAgICAgICAgIGxldCBmaWxlcyA9IGRhdGFbMF07XG4gICAgICAgICAgY29uc3QgZmlsZVR5cGVGaWx0ZXIgPSBkYXRhWzFdO1xuICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IGRhdGFbMl0udG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChzZWFyY2ggIT09ICcnKSB7XG4gICAgICAgICAgICBmaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZTogRmlsZU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBmaWxlLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaCkgPiAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgaWYgKGZpbGVUeXBlRmlsdGVyICYmIGZpbGVUeXBlRmlsdGVyLm1pbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpbGVzID0gZmlsZXMuZmlsdGVyKChmaWxlOiBGaWxlTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbGVUeXBlRmlsdGVyLm1pbWVzLmluZGV4T2YoZmlsZS5nZXRNaW1lKCkpID4gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmlsZXM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJTm9kZVNlcnZpY2UsIElPdXRlck5vZGV9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0Fic3RyYWN0RmlsZU1hbmFnZXJBcGlTZXJ2aWNlLCBGSUxFTUFOQUdFUl9UUkVFX05BTUV9IGZyb20gJy4vZmlsZU1hbmFnZXJBcGlBYnN0cmFjdC5jbGFzcyc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyQXBpfSBmcm9tICcuL0lGaWxlTWFuYWdlckFwaSc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJQ3JvcEJvdW5kc30gZnJvbSAnLi4vY3JvcC9JQ3JvcEJvdW5kcyc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXN9IGZyb20gJy4uL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyQmFja2VuZEFwaVNlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdEZpbGVNYW5hZ2VyQXBpU2VydmljZSBpbXBsZW1lbnRzIElGaWxlTWFuYWdlckFwaSwgSU5vZGVTZXJ2aWNlIHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSAkaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5vZGVzID0gW107XG4gICAgdGhpcy5maWxlcyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRklMRU1BTkFHRVJfVFJFRV9OQU1FO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgZm9sZGVyIGNoaWRscyBmb3IgZ2l2ZW4gZm9sZGVyIGlkXG4gICAqL1xuICBwdWJsaWMgbG9hZChub2RlSWQgPSAnJyk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiB7XG4gICAgY29uc3Qgbm9kZUlkcyA9IHRoaXMubm9kZXMubWFwKChub2RlOiBJT3V0ZXJOb2RlKSA9PiBub2RlLmlkKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdub2RlSWQnLCBub2RlSWQgfHwgJycpO1xuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0PElPdXRlck5vZGVbXT4odGhpcy5jb25maWd1cmF0aW9uLmZvbGRlclVybHMuZm9sZGVyc1VybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChub2RlczogSU91dGVyTm9kZVtdKSA9PiB7XG4gICAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGVJZHMuaW5kZXhPZihub2RlLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm5vZGVzLmZpbmRJbmRleCgoaXRlbTogSU91dGVyTm9kZSkgPT4gbm9kZS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgICAgICAgICAgIHRoaXMubm9kZXNbaW5kZXhdID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBmb2xkZXJcbiAgICovXG4gIHB1YmxpYyBhZGQobm9kZTogSU91dGVyTm9kZSwgcGFyZW50Tm9kZUlkOiBzdHJpbmcgPSBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBwYXJlbnROb2RlSWQ6IHBhcmVudE5vZGVJZFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5wb3N0PElPdXRlck5vZGU+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlcnNVcmwsIGRhdGEpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChuZXdOb2RlOiBJT3V0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5ld05vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgZm9sZGVyIGZyb20gc291cmNlIHBhcmVudCB0byB0YXJnZXQgcGFyZW50XG4gICAqL1xuICBwdWJsaWMgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHNyY0lkID0gc3JjTm9kZS5pZDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldE5vZGUgPyB0YXJnZXROb2RlLmlkIDogbnVsbDtcblxuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0PElPdXRlck5vZGU+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlck1vdmVVcmwsIHtzb3VyY2U6IHNyY0lkLCB0YXJnZXQ6IHRhcmdldElkfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKG1vdmVkTm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeU5vZGVJZChzcmNJZCk7XG4gICAgICAgICAgdGhpcy5ub2Rlc1tpbmRleF0ucGFyZW50SWQgPSB0YXJnZXRJZDtcblxuICAgICAgICAgIHJldHVybiBtb3ZlZE5vZGU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBmb2xkZXIgbmFtZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0PElPdXRlck5vZGU+KHRoaXMuY29uZmlndXJhdGlvbi5mb2xkZXJVcmxzLmZvbGRlcnNVcmwsIG5vZGUpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChuZXdOb2RlOiBJT3V0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5Tm9kZUlkKG5vZGUuaWQpO1xuXG4gICAgICAgICAgdGhpcy5ub2Rlc1tpbmRleF0gPSBuZXdOb2RlO1xuXG4gICAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBub2RlIGJ5IGdpdmVuIGlkXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5Tm9kZUlkKG5vZGVJZCk7XG5cbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4obm9kZUlkKS5sZW5ndGggPiAwO1xuXG4gICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ25vZGVJZCcsIG5vZGVJZCk7XG5cbiAgICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZTxJT3V0ZXJOb2RlPih0aGlzLmNvbmZpZ3VyYXRpb24uZm9sZGVyVXJscy5mb2xkZXJzVXJsLCB7cGFyYW1zfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZW1vdmVkTm9kZTogSU91dGVyTm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlZE5vZGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ05vZGUgaXMgbm90IGVtcHR5Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEFsbE5vZGVzKG5vZGVzOiBJT3V0ZXJOb2RlW10pOiB2b2lkIHtcbiAgICB0aGlzLm5vZGVzID0gWy4uLm5vZGVzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIGZpbGVcbiAgICovXG4gIHB1YmxpYyBjcm9wRmlsZShmaWxlOiBJT3V0ZXJGaWxlLCBib3VuZHM6IElDcm9wQm91bmRzKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlPiB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucHV0PElPdXRlckZpbGU+KHRoaXMuY29uZmlndXJhdGlvbi5maWxlVXJsLCB7aWQ6IGZpbGUuaWQsIGJvdW5kczogYm91bmRzfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBmaWxlcyBmcm9tIGRpcmVjdG9yeVxuICAgKi9cbiAgcHVibGljIGxvYWRGaWxlcyhub2RlSWQgPSAnJyk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPiB7XG4gICAgdGhpcy5jdXJyZW50Tm9kZUlkID0gbm9kZUlkO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdkaXJJZCcsIG5vZGVJZCk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQ8SU91dGVyRmlsZVtdPih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChmaWxlczogSU91dGVyRmlsZVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzLm1hcCgoZmlsZTogSU91dGVyRmlsZSkgPT4gPElGaWxlRGF0YVByb3BlcnRpZXM+ZmlsZSk7XG5cbiAgICAgICAgICByZXR1cm4gZmlsZXM7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBmaWxlIGZyb20gZm9sZGVyXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRJbmRleEJ5RmlsZUlkKGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdpZCcsIGZpbGUuaWQudG9TdHJpbmcoKSk7XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5kZWxldGU8YW55Pih0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZVVybCwge3BhcmFtc30pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlU2VsZWN0ZWRGaWxlcyhzZWxlY3RlZEZpbGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdpZCcsIHNlbGVjdGVkRmlsZXMuam9pbignfCcpKTtcblxuICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZTxhbnk+KHRoaXMuY29uZmlndXJhdGlvbi5maWxlVXJsLCB7cGFyYW1zfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHNlbGVjdGVkRmlsZXMuZm9yRWFjaCgoZmlsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhCeUZpbGVJZChmaWxlSWQpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgc3VjY2VzcyBtZXRob2QsIHJlYWwgdXBsb2FkIGlzIGRvbmUgaW4gRXh0ZW5kZWRGaWxlVXBsb2FkZXJcbiAgICovXG4gIHB1YmxpYyB1cGxvYWRGaWxlKGZpbGU6IElPdXRlckZpbGUpOiBPYnNlcnZhYmxlPElPdXRlckZpbGU+IHtcbiAgICBjb25zdCBmaWxlRGF0YSA9IDxJRmlsZURhdGFQcm9wZXJ0aWVzPmZpbGU7XG4gICAgdGhpcy5maWxlcy5wdXNoKGZpbGVEYXRhKTtcblxuICAgIHJldHVybiBvZihmaWxlKTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlRmlsZShmaWxlczogSU91dGVyRmlsZVtdLCBub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJGaWxlW10+IHtcbiAgICBjb25zdCBpZHM6IHN0cmluZ1tdID0gZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5pZC50b1N0cmluZygpKTtcblxuICAgIHJldHVybiB0aGlzLiRodHRwLnB1dDxJT3V0ZXJGaWxlW10+KHRoaXMuY29uZmlndXJhdGlvbi5maWxlVXJsLCB7ZmlsZXM6IGlkcywgZm9sZGVySWQ6IG5vZGUgPyBub2RlLmlkIDogJyd9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlOb2RlSWQobm9kZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbmRJbmRleCgobm9kZSkgPT4ge1xuICAgICAgcmV0dXJuIG5vZGUuaWQgPT09IG5vZGVJZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluZGV4QnlGaWxlSWQoZmlsZUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbmRJbmRleCgoZmlsZSkgPT4gZmlsZS5pZCA9PT0gZmlsZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW4obm9kZUlkOiBzdHJpbmcpOiBJT3V0ZXJOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbHRlcigobm9kZTogSU91dGVyTm9kZSkgPT4gbm9kZS5wYXJlbnRJZCA9PT0gbm9kZUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydExvY2FsRGF0YTJJT3V0ZXJGaWxlKGZpbGU6IElGaWxlRGF0YVByb3BlcnRpZXMpOiBJT3V0ZXJGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGZpbGUuaWQsXG4gICAgICBmb2xkZXJJZDogZmlsZS5mb2xkZXJJZCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHRodW1ibmFpbFVybDogZmlsZS5kYXRhLFxuICAgICAgdXJsOiBmaWxlLmRhdGEsXG4gICAgICB3aWR0aDogZmlsZS53aWR0aCxcbiAgICAgIGhlaWdodDogZmlsZS5oZWlnaHQsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBzaXplOiBmaWxlLnNpemVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0SU91dGVyRmlsZTJMb2NhbERhdGEoZmlsZTogSU91dGVyRmlsZSk6IElGaWxlRGF0YVByb3BlcnRpZXMge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZmlsZS5pZC50b1N0cmluZygpLFxuICAgICAgZm9sZGVySWQ6IGZpbGUuZm9sZGVySWQsXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBkYXRhOiBmaWxlLmRhdGEsXG4gICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB3aWR0aDogZmlsZS53aWR0aCxcbiAgICAgIGhlaWdodDogZmlsZS5oZWlnaHRcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlVHlwZUZpbHRlcn0gZnJvbSAnLi4vaW50ZXJmYWNlL0lGaWxlVHlwZUZpbHRlcic7XG5pbXBvcnQge0ZpbGVUeXBlRmlsdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmlsZVR5cGVGaWx0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLWZpbGUtdHlwZS1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZVR5cGVGaWx0ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0eXBlRmlsdGVyTGlzdDogSUZpbGVUeXBlRmlsdGVyW10gPSBbXTtcblxuICBwdWJsaWMgc2VsZWN0ZWRUeXBlOiBJRmlsZVR5cGVGaWx0ZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZVR5cGVGaWx0ZXI6IEZpbGVUeXBlRmlsdGVyU2VydmljZSkge1xuICAgIHRoaXMuZmlsZVR5cGVGaWx0ZXIuZmlsdGVyJFxuICAgICAgLnN1YnNjcmliZSgodHlwZTogSUZpbGVUeXBlRmlsdGVyIHwgbnVsbCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVHlwZSA9IHR5cGU7XG4gICAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqIGluaXQgZmlsZSB0eXBlIGZpbHRlciAqKi9cbiAgICB0aGlzLnR5cGVGaWx0ZXJMaXN0XG4gICAgICAuZmlsdGVyKCh0eXBlOiBJRmlsZVR5cGVGaWx0ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGUuZGVmYXVsdFNlbGVjdGVkO1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKCh0eXBlOiBJRmlsZVR5cGVGaWx0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5maWxlVHlwZUZpbHRlci5zZXRWYWx1ZSh0eXBlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjdXJyZW50IGZpbHRlciBhbmQgZmlyZSBldmVudFxuICAgKiBAcGFyYW0gdHlwZVxuICAgKi9cbiAgcHVibGljIHNldEZpbHRlclR5cGUodHlwZTogSUZpbGVUeXBlRmlsdGVyKSB7XG4gICAgdGhpcy5maWxlVHlwZUZpbHRlci5zZXRWYWx1ZSh0eXBlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIElVcGxvYWRJdGVtRXZlbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlc3BvbnNlOiBhbnk7XG4gIHN0YXR1czogbnVtYmVyO1xufVxuIiwiZXhwb3J0IGVudW0gQnV0dG9uIHtcbiAgQUREX0ZPTERFUiA9ICdBRERfRk9MREVSJyxcbiAgQ0hPT1NFX1NFTEVDVElPTiA9ICdDSE9PU0VfU0VMRUNUSU9OJyxcbiAgREVMRVRFX1NFTEVDVElPTiA9ICdERUxFVEVfU0VMRUNUSU9OJyxcbiAgSU5WRVJTRV9TRUxFQ1RJT04gPSAnSU5WRVJTRV9TRUxFQ1RJT04nLFxuICBSRUZSRVNIX0ZJTEVTX0xJU1QgPSAnUkVGUkVTSF9GSUxFU19MSVNUJyxcbiAgU0VMRUNUX0FMTCA9ICdTRUxFQ1RfQUxMJyxcbiAgVU5TRUxFQ1RfQUxMID0gJ1VOU0VMRUNUX0FMTCcsXG59XG4iLCJpbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4uL2ludGVyZmFjZS9JVG9vbGJhckV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFRvb2xiYXJFdmVudE1vZGVsIGltcGxlbWVudHMgSVRvb2xiYXJFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nID0gbnVsbCkge1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktc2VhcmNoLWZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoRmlsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgc2VhcmNoRmllbGQgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlYXJjaEZpbHRlclNlcnZpY2U6IFNlYXJjaEZpbHRlclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDI1MClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2VhcmNoRmlsdGVyU2VydmljZS5zZXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG59XG4iLCJpbXBvcnQge0lCdXR0b24sIElCdXR0b25EYXRhfSBmcm9tICcuL0lCdXR0b24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCdXR0b25DbGFzcyBpbXBsZW1lbnRzIElCdXR0b24ge1xuICBwdWJsaWMgc3ltYm9sOiBzdHJpbmc7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBsYWJlbDogYm9vbGVhbjtcbiAgcHVibGljIGljb246IGJvb2xlYW47XG4gIHB1YmxpYyBpY29uQ3NzQ2xhc3M6IHN0cmluZztcbiAgcHVibGljIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogSUJ1dHRvbkRhdGEpIHtcbiAgICB0aGlzLnN5bWJvbCA9IGRhdGEuc3ltYm9sO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmxhYmVsID0gZGF0YS5sYWJlbDtcbiAgICB0aGlzLmljb24gPSBkYXRhLmljb247XG4gICAgdGhpcy5pY29uQ3NzQ2xhc3MgPSBkYXRhLmljb25Dc3NDbGFzcztcbiAgICB0aGlzLmRpc2FibGVkID0gZGF0YS5kaXNhYmxlZDtcbiAgfVxuXG4gIGFic3RyYWN0IGlzRGl2aWRlcigpOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEJ1dHRvbkNsYXNzfSBmcm9tICcuL0Fic3RyYWN0QnV0dG9uLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNsYXNzIGV4dGVuZHMgQWJzdHJhY3RCdXR0b25DbGFzcyB7XG4gIHB1YmxpYyBpc0RpdmlkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQge0Fic3RyYWN0QnV0dG9uQ2xhc3N9IGZyb20gJy4vQWJzdHJhY3RCdXR0b24uY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uRGl2aWRlckNsYXNzIGV4dGVuZHMgQWJzdHJhY3RCdXR0b25DbGFzcyB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBzeW1ib2w6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBsYWJlbDogZmFsc2UsXG4gICAgICBpY29uOiBmYWxzZSxcbiAgICAgIGljb25Dc3NDbGFzczogJydcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpc0RpdmlkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUJ1dHRvbiwgSUJ1dHRvbkRhdGF9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL0lCdXR0b24nO1xuaW1wb3J0IHtCdXR0b25DbGFzc30gZnJvbSAnLi4vLi4vZHJvcGRvd24vQnV0dG9uLmNsYXNzJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9tb2RlbHMvYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7QnV0dG9uRGl2aWRlckNsYXNzfSBmcm9tICcuLi8uLi9kcm9wZG93bi9CdXR0b25EaXZpZGVyLmNsYXNzJztcbmltcG9ydCB7Q3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtJVG9vbGJhckV2ZW50fSBmcm9tICcuLi9pbnRlcmZhY2UvSVRvb2xiYXJFdmVudCc7XG5pbXBvcnQge1Rvb2xiYXJFdmVudE1vZGVsfSBmcm9tICcuLi9tb2RlbHMvdG9vbGJhckV2ZW50Lm1vZGVsJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktc2VsZWN0aW9uLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdGlvbi5kcm9wZG93bi5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgcHVibGljIG9uTWVudUJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBzZWxlY3RCdXR0b25zTGlzdDogSUJ1dHRvbltdO1xuXG4gIHB1YmxpYyBzZWxlY3RBbGxCdXR0b24gPSBuZXcgQnV0dG9uQ2xhc3Moe1xuICAgIHN5bWJvbDogQnV0dG9uLlNFTEVDVF9BTEwsXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9TRUxFQ1RfQUxMJyxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBpY29uOiB0cnVlLFxuICAgIGljb25Dc3NDbGFzczogJ2ZhIGZhLWNoZWNrLXNxdWFyZS1vJ1xuICB9KTtcblxuICBwcml2YXRlIHVuc2VsZWN0QWxsQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5VTlNFTEVDVF9BTEwsXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9VTlNFTEVDVF9BTEwnLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGljb246IHRydWUsXG4gICAgaWNvbkNzc0NsYXNzOiAnZmEgZmEtc3F1YXJlLW8nXG4gIH0pO1xuXG4gIHByaXZhdGUgaW52ZXJzZVNlbGVjdGlvbkJ1dHRvbiA9IG5ldyBCdXR0b25DbGFzcyh7XG4gICAgc3ltYm9sOiBCdXR0b24uSU5WRVJTRV9TRUxFQ1RJT04sXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9JTlZFUlNFX1NFTEVDVElPTicsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS1jaGVjay1zcXVhcmUnXG4gIH0pO1xuXG4gIHByaXZhdGUgZGVsZXRlU2VsZWN0aW9uQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5ERUxFVEVfU0VMRUNUSU9OLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfREVMRVRFX1NFTEVDVElPTicsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS10cmFzaCdcbiAgfSk7XG5cbiAgcHJpdmF0ZSBjaG9vc2VTZWxlY3Rpb25CdXR0b24gPSBuZXcgQnV0dG9uQ2xhc3Moe1xuICAgIHN5bWJvbDogQnV0dG9uLkNIT09TRV9TRUxFQ1RJT04sXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9DSE9PU0VfU0VMRUNUSU9OJyxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBpY29uOiB0cnVlLFxuICAgIGljb25Dc3NDbGFzczogJ2ZhIGZhLWltYWdlJ1xuICB9KTtcblxuICBwcml2YXRlIG9uTG9hZEZpbGVzU3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlOiBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLnNlbGVjdEJ1dHRvbnNMaXN0ID0gdGhpcy5jcmVhdGVCYXNpY0J1dHRvbnMoKTtcblxuICAgIHRoaXMuaW5pdExpc3Rlbk9uTG9hZEZpbGVzKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkxvYWRGaWxlc1N1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGxpc3RlbmVyIG9uIGxvYWQgZmlsZXNcbiAgICovXG4gIHB1YmxpYyBpbml0TGlzdGVuT25Mb2FkRmlsZXMoKSB7XG4gICAgdGhpcy5vbkxvYWRGaWxlc1N1YnNjcmliZXIgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLmN1cnJlbnREaXJlY3RvcnlGaWxlSWRzJCxcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5zZWxlY3RlZEZpbGVzJFxuICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiBzdHJpbmdbXVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bWJlck9mRmlsZXMgPSBkYXRhWzBdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZTZWxlY3RlZEZpbGVzID0gZGF0YVsxXS5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlQWxsQnV0dG9ucygpO1xuXG4gICAgICAgIGlmIChudW1iZXJPZkZpbGVzID4gMCkge1xuICAgICAgICAgIGlmIChudW1iZXJPZlNlbGVjdGVkRmlsZXMgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUFsbEJ1dHRvbnMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVTZWxlY3RBbGxCdXR0b24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICBwdWJsaWMgb25TZWxlY3REcm9wZG93bkNsaWNrKGJ1dHRvbjogSUJ1dHRvbkRhdGEpIHtcbiAgICBjb25zdCBldmVudDogSVRvb2xiYXJFdmVudCA9IG5ldyBUb29sYmFyRXZlbnRNb2RlbChidXR0b24uc3ltYm9sKTtcbiAgICB0aGlzLm9uTWVudUJ1dHRvbkNsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYWxsIGRyb3Bkb3duIGJ1dHRvbnMgYW5kIG1haW4gYnV0dG9uXG4gICAqL1xuICBwcml2YXRlIGRpc2FibGVBbGxCdXR0b25zKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2VsZWN0QnV0dG9uc0xpc3RcbiAgICAgIC5maWx0ZXIoKGJ1dHRvbjogSUJ1dHRvbikgPT4ge1xuICAgICAgICByZXR1cm4gIWJ1dHRvbi5pc0RpdmlkZXIoKTtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaCgoYnV0dG9uOiBJQnV0dG9uRGF0YSkgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGFsbCBkcm9wZG93biBidXR0b25zIGFuZCBtYWluIGJ1dHRvblxuICAgKi9cbiAgcHJpdmF0ZSBlbmFibGVBbGxCdXR0b25zKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNlbGVjdEJ1dHRvbnNMaXN0XG4gICAgICAuZm9yRWFjaCgoYnV0dG9uOiBJQnV0dG9uRGF0YSkgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBsaXN0IG9mIGJ1dHRvbnNcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlQmFzaWNCdXR0b25zKCk6IElCdXR0b25bXSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLFxuICAgICAgdGhpcy51bnNlbGVjdEFsbEJ1dHRvbixcbiAgICAgIHRoaXMuaW52ZXJzZVNlbGVjdGlvbkJ1dHRvbixcbiAgICAgIG5ldyBCdXR0b25EaXZpZGVyQ2xhc3MoKSxcbiAgICAgIHRoaXMuZGVsZXRlU2VsZWN0aW9uQnV0dG9uLFxuICAgIF07XG5cbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFsbG93Q2hvb3NlTXVsdGlwbGVGaWxlcykge1xuICAgICAgYnV0dG9ucy5wdXNoKG5ldyBCdXR0b25EaXZpZGVyQ2xhc3MoKSk7XG4gICAgICBidXR0b25zLnB1c2godGhpcy5jaG9vc2VTZWxlY3Rpb25CdXR0b24pO1xuICAgIH1cblxuICAgIHJldHVybiBidXR0b25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvbmx5IHNlbGVjdCBidXR0b25cbiAgICovXG4gIHByaXZhdGUgZW5hYmxlU2VsZWN0QWxsQnV0dG9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbnZlcnNlU2VsZWN0aW9uQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi9tb2RlbHMvYnV0dG9uLm1vZGVsJztcbmltcG9ydCB7VG9vbGJhckV2ZW50TW9kZWx9IGZyb20gJy4vbW9kZWxzL3Rvb2xiYXJFdmVudC5tb2RlbCc7XG5pbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4vaW50ZXJmYWNlL0lUb29sYmFyRXZlbnQnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlclVwbG9hZGVyfSBmcm9tICcuLi9maWxlc0xpc3QvZmlsZU1hbmFnZXJVcGxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7SUZpbGVNYW5hZ2VyU3RhdGV9IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7VXBsb2FkRmlsZXNBY3Rpb24sIFVwbG9hZEZpbGVzRXJyb3JBY3Rpb259IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5hY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS10b29sYmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGN1cnJlbnRGb2xkZXJJZDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbkFkZEZvbGRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25VcGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1lbnVCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgcHVibGljIGZpbGVNYW5hZ2VyVXBsb2FkZXI6IEZpbGVNYW5hZ2VyVXBsb2FkZXIsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJRmlsZU1hbmFnZXJTdGF0ZT4pIHtcblxuICAgIHRoaXMuZmlsZU1hbmFnZXJVcGxvYWRlci5jbGVhcigpO1xuXG4gICAgdGhpcy5maWxlTWFuYWdlclVwbG9hZGVyLnVwbG9hZGVyLm9uQ29tcGxldGVBbGwgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBsb2FkLmVtaXQodGhpcy5jdXJyZW50Rm9sZGVySWQgfHwgJycpO1xuICAgIH07XG5cbiAgICB0aGlzLmZpbGVNYW5hZ2VyVXBsb2FkZXIudXBsb2FkZXIub25Db21wbGV0ZUl0ZW0gPSAoaXRlbTogYW55LCByZXNwb25zZTogYW55LCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogYW55KSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBsb2FkRmlsZXNBY3Rpb24oe2ZpbGVzOiBKU09OLnBhcnNlKHJlc3BvbnNlKX0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwbG9hZEZpbGVzRXJyb3JBY3Rpb24oe2ZpbGVzOiBKU09OLnBhcnNlKHJlc3BvbnNlKX0pKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuZmlsZU1hbmFnZXJVcGxvYWRlci5zZXREaXJlY3RvcnlJZCh0aGlzLmN1cnJlbnRGb2xkZXJJZCB8fCAnJyk7XG4gIH1cblxuICBwdWJsaWMgYWRkRm9sZGVyKCkge1xuICAgIGxldCBldmVudDogSVRvb2xiYXJFdmVudCA9IG5ldyBUb29sYmFyRXZlbnRNb2RlbChCdXR0b24uQUREX0ZPTERFUiwgJ05vd3kgZm9sZGVyJyk7XG4gICAgdGhpcy5vbkFkZEZvbGRlckNsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIG9uUmVmcmVzaEZpbGVzTGlzdCgpIHtcbiAgICBsZXQgZXZlbnQ6IElUb29sYmFyRXZlbnQgPSBuZXcgVG9vbGJhckV2ZW50TW9kZWwoQnV0dG9uLlJFRlJFU0hfRklMRVNfTElTVCk7XG4gICAgdGhpcy5vbk1lbnVCdXR0b25DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVHJlZUNvbXBvbmVudCxcbiAgTm9kZVNlcnZpY2UsXG4gIElDb250ZXh0TWVudSxcbiAgSU91dGVyTm9kZSxcbiAgSVRyZWVEYXRhLFxuICBJVHJlZVN0YXRlLFxuICBJQ29uZmlndXJhdGlvbixcbiAgVHJlZU1vZGVsLFxuICBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsIFRyZWVJbml0aWFsaXplclNlcnZpY2UsXG59IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtGaWxlTW9kZWx9IGZyb20gJy4vZmlsZXNMaXN0L2ZpbGUubW9kZWwnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zU2VydmljZX0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQge0lGaWxlRXZlbnR9IGZyb20gJy4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZUV2ZW50JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuL3Rvb2xiYXIvbW9kZWxzL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0ZpbGVzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9maWxlc0xpc3QvZmlsZXNMaXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4vdG9vbGJhci9pbnRlcmZhY2UvSVRvb2xiYXJFdmVudCc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4vZmlsZXNMaXN0L2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBcGlTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyQXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlbWFuYWdlck5vdGlmY2F0aW9ucywgSU5vdGlmaWNhdGlvbn0gZnJvbSAnLi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucyc7XG5pbXBvcnQge0N1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0ZJTEVNQU5BR0VSX1RSRUVfTkFNRX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFwaUFic3RyYWN0LmNsYXNzJztcbmltcG9ydCB7XG4gIENob29zZUZpbGVzQWN0aW9uLFxuICBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uLCBJbnZlcnNlRmlsZXNTZWxlY3Rpb25BY3Rpb24sIExvYWRGaWxlc0FjdGlvbixcbiAgU2VsZWN0QWxsRmlsZXNBY3Rpb24sXG4gIFVuU2VsZWN0QWxsRmlsZXNBY3Rpb25cbn0gZnJvbSAnLi9zdG9yZS9maWxlLW1hbmFnZXIuYWN0aW9uJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmktZmlsZW1hbmFnZXInLFxuICBwcm92aWRlcnM6IFtOb2RlU2VydmljZSwgTm90aWZpY2F0aW9uc1NlcnZpY2VdLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGVtYW5hZ2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVNYW5hZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgcHVibGljIG9uU2luZ2xlRmlsZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKFRyZWVDb21wb25lbnQpXG4gIHB1YmxpYyB0cmVlQ29tcG9uZW50OiBUcmVlQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoRmlsZXNMaXN0Q29tcG9uZW50KVxuICBwdWJsaWMgZmlsZXNMaXN0OiBGaWxlc0xpc3RDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgZmlsZXMgZm9yIGN1cnJlbnQgc2VsZWN0ZWQgZGlyZWN0b3J5XG4gICAqL1xuICBwcml2YXRlIGZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT47XG5cbiAgcHVibGljIGZpbHRlcmVkRmlsZXMkOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPjtcbiAgcHVibGljIHNlbGVjdGVkRmlsZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBwdWJsaWMgZm9sZGVyczogT2JzZXJ2YWJsZTxJVHJlZURhdGE+O1xuXG4gIHB1YmxpYyB0cmVlQ29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24gPSB7XG4gICAgc2hvd0FkZEJ1dHRvbjogZmFsc2UsXG4gICAgZGlzYWJsZU1vdmVOb2RlczogZmFsc2UsXG4gICAgdHJlZUlkOiBGSUxFTUFOQUdFUl9UUkVFX05BTUUsXG4gICAgZHJhZ1pvbmU6IEZJTEVNQU5BR0VSX1RSRUVfTkFNRSxcbiAgICBkcm9wWm9uZTogW0ZJTEVNQU5BR0VSX1RSRUVfTkFNRV1cbiAgfTtcblxuICBwdWJsaWMgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG5cbiAgLyoqIFVOU0VEICoqL1xuICBwdWJsaWMgY29udGV4dE1lbnU6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIGN1cnJlbnRTZWxlY3RlZEZpbGU6IElGaWxlTW9kZWw7XG4gIHB1YmxpYyBjdXJyZW50U2VsZWN0ZWRGaWxlc0lkczogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIGN1cnJlbnRTZWxlY3RlZEZpbGVzOiBJT3V0ZXJGaWxlW10gPSBbXTtcblxuICBwdWJsaWMgaXNQcmV2aWV3TW9kZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNDcm9wTW9kZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBub3RpZmljYXRpb25PcHRpb25zID0ge1xuICAgIHBvc2l0aW9uOiBbJ2JvdHRvbScsICdyaWdodCddLFxuICAgIHRpbWVPdXQ6IDMwMDAsXG4gICAgbGFzdE9uQm90dG9tOiBmYWxzZSxcbiAgICBwcmV2ZW50RHVwbGljYXRlczogdHJ1ZSxcbiAgICBydGw6IGZhbHNlLFxuICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogTGlzdCBvZiBjb250ZXh0IG1lbnVcbiAgICovXG4gIHB1YmxpYyBtZW51OiBJQ29udGV4dE1lbnVbXTtcblxuICBwcm90ZWN0ZWQgY3VycmVudFNlbGVjdGVkRm9sZGVyOiBJT3V0ZXJOb2RlO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxJVHJlZVN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgbm9kZURpc3BhdGNoZXJTZXJ2aWNlOiBOb2RlRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHRyZWVTZXJ2aWNlOiBGaWxlTWFuYWdlckFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZpbGVNYW5hZ2VyRWZmZWN0czogRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmlsZW1hbmFnZXJOb3RpZmNhdGlvbnM6IEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlOiBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmVlSW5pdGlhbGl6ZXJTZXJ2aWNlOiBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLm1lbnUgPSBjb25maWd1cmF0aW9uLmNvbnRleHRNZW51SXRlbXM7XG5cbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLmdldE5vdGlmaWNhdGlvblN0cmVhbSgpXG4gICAgICAuc3Vic2NyaWJlKChub3RpZmljYXRpb246IElOb3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHRpdGxlLCBtZXNzYWdlfSA9IG5vdGlmaWNhdGlvbjtcblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNbdHlwZV0odGl0bGUsIG1lc3NhZ2UpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uuc2VsZWN0ZWRGaWxlcyRcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZEZpbGVzSWRzID0gZGF0YTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLnNlbGVjdGVkRmlsZXMkLFxuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZW50aXRpZXMkLFxuICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChbaWRzLCBlbnRpdGllc106IFtzdHJpbmdbXSwgeyBba2V5OiBzdHJpbmddOiBJT3V0ZXJGaWxlIH1dKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlcyA9IGlkcy5tYXAoKGlkKSA9PiBlbnRpdGllc1tpZF0pO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyZWVNb2RlbCA9IHRoaXMudHJlZUluaXRpYWxpemVyU2VydmljZS5pbml0KHRoaXMudHJlZUNvbmZpZ3VyYXRpb24sIHRoaXMudHJlZVNlcnZpY2UpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy50cmVlTW9kZWwuY3VycmVudFNlbGVjdGVkTm9kZSRcbiAgICAgICAgLnN1YnNjcmliZSgobm9kZTogSU91dGVyTm9kZSkgPT4gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIgPSBub2RlKVxuICAgICk7XG5cbiAgICAvKioqIFNUQVJUIC0gaW5pdCBmaWxlcyAqKiovXG4gICAgdGhpcy5maWxlcyQgPSB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZmlsZXMkO1xuICAgIHRoaXMuZmlsdGVyZWRGaWxlcyQgPSB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuZmlsdGVyZWRGaWxlcyQ7XG4gICAgdGhpcy5zZWxlY3RlZEZpbGVzJCA9IHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5zZWxlY3RlZEZpbGVzJDtcblxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy50cmVlTW9kZWwuY3VycmVudFNlbGVjdGVkTm9kZSRcbiAgICAgICAgLnN1YnNjcmliZSgobm9kZTogSU91dGVyTm9kZSB8IG51bGwpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRGaWxlcyhub2RlID8gbm9kZS5pZCA6ICcnKTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgLyoqKiBFTkQgLSBpbml0IGZpbGVzICoqKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmZpbGVNYW5hZ2VyRWZmZWN0cy5jcm9wRmlsZVN1Y2Nlc3MkXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXQgY3VycmVudFNlbGVjdGVkRm9sZGVySWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyID8gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIuaWQgOiBudWxsO1xuICB9XG5cblxuICBwdWJsaWMgb25BZGRGb2xkZXIoKSB7XG4gICAgdGhpcy50cmVlQ29tcG9uZW50Lm9uQWRkKCk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogRklMRSBFVkVOVFNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKlxuICAgKiBSdW4gd2hlbiBhbGwgZmlsZXMgYXJlIHVwbG9hZGVkXG4gICAqL1xuICBwdWJsaWMgb25VcGxvYWQoZm9sZGVySWQ6IHN0cmluZykge1xuICAgIHRoaXMubm90aWZpY2F0aW9ucy5zdWNjZXNzKCdGaWxlIHVwbG9hZCcsICdVcGxvYWQgY29tcGxldGUnKTtcbiAgfVxuXG5cbiAgcHVibGljIG9uUHJldmlld0ZpbGUoZmlsZUV2ZW50RGF0YTogSUZpbGVFdmVudCkge1xuICAgIHRoaXMuaXNQcmV2aWV3TW9kZSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlID0gZmlsZUV2ZW50RGF0YS5maWxlO1xuICB9XG5cblxuICBwdWJsaWMgb25PcGVuQ3JvcEZpbGVFZGl0b3IoZmlsZUV2ZW50RGF0YTogSUZpbGVFdmVudCkge1xuICAgIHRoaXMuaXNDcm9wTW9kZSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlID0gZmlsZUV2ZW50RGF0YS5maWxlO1xuICB9XG5cblxuICBwdWJsaWMgb25TZWxlY3RGaWxlKGV2ZW50OiBGaWxlTW9kZWwpIHtcbiAgICB0aGlzLm9uU2luZ2xlRmlsZVNlbGVjdC5uZXh0KGV2ZW50LmdldFNlbGVjdERhdGEoKSk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogVE9PTEJBUiBFVkVOVFNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICBwdWJsaWMgb25NZW51QnV0dG9uQ2xpY2soZXZlbnQ6IElUb29sYmFyRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgQnV0dG9uLkNIT09TRV9TRUxFQ1RJT046XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENob29zZUZpbGVzQWN0aW9uKHtmaWxlczogdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlc30pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5ERUxFVEVfU0VMRUNUSU9OOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVTZWxlY3RlZEZpbGVzQWN0aW9uKHtmaWxlczogdGhpcy5jdXJyZW50U2VsZWN0ZWRGaWxlc0lkc30pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5TRUxFQ1RfQUxMOlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWxlY3RBbGxGaWxlc0FjdGlvbigpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5VTlNFTEVDVF9BTEw6XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVuU2VsZWN0QWxsRmlsZXNBY3Rpb24oKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCdXR0b24uSU5WRVJTRV9TRUxFQ1RJT046XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEludmVyc2VGaWxlc1NlbGVjdGlvbkFjdGlvbigpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJ1dHRvbi5SRUZSRVNIX0ZJTEVTX0xJU1Q6XG4gICAgICAgIHRoaXMucmVsb2FkRmlsZXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIE9USEVSIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5RXZlbnRzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaXNQcmV2aWV3TW9kZSB8fCB0aGlzLmlzQ3JvcE1vZGUpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmlzUHJldmlld01vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ3JvcE1vZGUgPSBmYWxzZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBsb2FkRmlsZXMoZm9sZGVySWQ6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRGaWxlc0FjdGlvbih7Zm9sZGVySWQ6IGZvbGRlcklkIHx8ICcnfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWxvYWRGaWxlcygpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuY3VycmVudFNlbGVjdGVkRm9sZGVyID8gdGhpcy5jdXJyZW50U2VsZWN0ZWRGb2xkZXIuaWQgOiAnJztcblxuICAgIHRoaXMubG9hZEZpbGVzKGlkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgUHJvdmlkZXIsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUcmVlTW9kdWxlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2UsIFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGV9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbXBvbmVudH0gZnJvbSAnLi9maWxlbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWxlc0xpc3RDb21wb25lbnR9IGZyb20gJy4vZmlsZXNMaXN0L2ZpbGVzTGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtJbWFnZUNyb3BwZXJDb21wb25lbnQsIEltYWdlQ3JvcHBlck1vZHVsZX0gZnJvbSAnbmcyLWltZy1jcm9wcGVyJztcbmltcG9ydCB7Q3JvcENvbXBvbmVudH0gZnJvbSAnLi9jcm9wL2Nyb3AuY29tcG9uZW50JztcbmltcG9ydCB7UHJldmlld0NvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7RHJvcGRvd25Db21wb25lbnR9IGZyb20gJy4vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlclVwbG9hZGVyfSBmcm9tICcuL2ZpbGVzTGlzdC9maWxlTWFuYWdlclVwbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlU2VydmljZX0gZnJvbSAnLi9jb25maWd1cmF0aW9uL3RyZWUuc2VydmljZSc7XG5pbXBvcnQge0VmZmVjdHNNb2R1bGV9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmVNb2R1bGV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7ZmlsZU1hbmFnZXJSZWR1Y2VyfSBmcm9tICcuL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge1N0b3JlRGV2dG9vbHNNb2R1bGV9IGZyb20gJ0BuZ3J4L3N0b3JlLWRldnRvb2xzJztcbmltcG9ydCB7RmlsZVR5cGVGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaEZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlLW1hbmFnZXItZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZVR5cGVGaWx0ZXJDb21wb25lbnR9IGZyb20gJy4vdG9vbGJhci9maWxlVHlwZUZpbHRlci9maWxlVHlwZUZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hGaWxlQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIvc2VhcmNoRmlsZS9zZWFyY2hGaWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQXBpU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFwaS5zZXJ2aWNlJztcbmltcG9ydCB7SW1hZ2VEYXRhQ29udmVydGVyfSBmcm9tICcuL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZW1hbmFnZXJOb3RpZmNhdGlvbnN9IGZyb20gJy4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Qb3BvdmVyTW9kdWxlfSBmcm9tICdhbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyJztcbmltcG9ydCB7RmlsZU1hbmFnZXJCYWNrZW5kQXBpU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckJhY2tlbmRBcGkuc2VydmljZSc7XG5pbXBvcnQge0N1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gJy4vdG9vbGJhci9zZWxlY3Rpb25Ecm9wRG93bi9zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7RmlsZUNvbXBvbmVudH0gZnJvbSAnLi9maWxlc0xpc3QvZmlsZS9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vY29uZmlndXJhdGlvbi9JRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0ZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2VdKSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSW1hZ2VDcm9wcGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdmaWxlcycsIGZpbGVNYW5hZ2VyUmVkdWNlciksXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIFRyZWVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmlsZU1hbmFnZXJDb21wb25lbnQsXG4gICAgRmlsZUNvbXBvbmVudCxcbiAgICBGaWxlVHlwZUZpbHRlckNvbXBvbmVudCxcbiAgICBUb29sYmFyQ29tcG9uZW50LFxuICAgIEZpbGVzTGlzdENvbXBvbmVudCxcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcbiAgICBQcmV2aWV3Q29tcG9uZW50LFxuICAgIENyb3BDb21wb25lbnQsXG4gICAgU2VhcmNoRmlsZUNvbXBvbmVudCxcbiAgICBTZWxlY3Rpb25Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSW1hZ2VDcm9wcGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtGaWxlTWFuYWdlckNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlck1vZHVsZSB7XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbiwgYXBpUHJvdmlkZXI6IFByb3ZpZGVyID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlsZU1hbmFnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJBcGlTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckJhY2tlbmRBcGlTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgIEZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2UsXG4gICAgICAgIEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLFxuICAgICAgICBGaWxlTWFuYWdlclVwbG9hZGVyLFxuICAgICAgICBGaWxlVHlwZUZpbHRlclNlcnZpY2UsXG4gICAgICAgIEltYWdlRGF0YUNvbnZlcnRlcixcbiAgICAgICAgTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgIFNlYXJjaEZpbHRlclNlcnZpY2UsXG4gICAgICAgIFRyZWVTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZTogJ2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbicsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICBhcGlQcm92aWRlciA/IGFwaVByb3ZpZGVyIDogRmlsZU1hbmFnZXJBcGlTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnOiBJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLCBhcGlQcm92aWRlcjogUHJvdmlkZXIgPSBudWxsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGaWxlTWFuYWdlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckFwaVNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyQmFja2VuZEFwaVNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgRmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSxcbiAgICAgICAgRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMsXG4gICAgICAgIEZpbGVNYW5hZ2VyVXBsb2FkZXIsXG4gICAgICAgIEZpbGVUeXBlRmlsdGVyU2VydmljZSxcbiAgICAgICAgSW1hZ2VEYXRhQ29udmVydGVyLFxuICAgICAgICBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgU2VhcmNoRmlsdGVyU2VydmljZSxcbiAgICAgICAgVHJlZVNlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlOiAnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIGFwaVByb3ZpZGVyID8gYXBpUHJvdmlkZXIgOiBGaWxlTWFuYWdlckFwaVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwidHNsaWJfMS5fX2RlY29yYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFNYSx3QkFBd0I7Ozs7SUE4RG5DLFlBQWdELGFBQXdDO1FBNURqRixvQkFBZSxHQUFnQjtZQUNwQztnQkFDRSxJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRzthQUNaO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7YUFDWjtTQUNGLENBQUM7UUFFSyxxQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBRXRDLG9CQUFlLEdBQXNCO1lBQzFDO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxFQUFFO2dCQUNULE9BQU8sRUFBRSxjQUFjO2dCQUN2QixJQUFJLEVBQUUsV0FBVztnQkFDakIsZUFBZSxFQUFFLElBQUk7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVB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