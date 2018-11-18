/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FileUploader } from 'ng2-file-upload';
import { ImageDataConverter } from './imageDataConverter.service';
var ExtendedFileUploader = /** @class */ (function (_super) {
    tslib_1.__extends(ExtendedFileUploader, _super);
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
}(FileUploader));
export { ExtendedFileUploader };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExtendedFileUploader.prototype.filemanagerNotification;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5kZWRGaWxlVXBsYW9kZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4dGVuZGVkRmlsZVVwbGFvZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVcsWUFBWSxFQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQzVFLE9BQU8sRUFBc0Isa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUlyRjtJQUEwQyxnREFBWTtJQUVwRCw4QkFBbUIsT0FBNEIsRUFBVSx1QkFBZ0Q7UUFBekcsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQUZ3RCw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCOztJQUV6RyxDQUFDOzs7Ozs7O0lBRU0scURBQXNCOzs7Ozs7SUFBN0IsVUFBOEIsSUFBb0IsRUFBRSxNQUFXLEVBQUUsT0FBNEI7O1lBQ3JGLFlBQVksR0FBa0I7WUFDbEMsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsbUJBQW1CO1lBQzFCLE9BQU8sRUFBRSx1QkFBdUI7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLFlBQVksQ0FBQyxPQUFPLEdBQUcsMkNBQXlDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxRQUFLLENBQUM7U0FDakc7YUFBTTtZQUNMLFlBQVksQ0FBQyxPQUFPLEdBQUcsc0JBQW1CLElBQUksQ0FBQyxJQUFJLHNCQUFrQixDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU0seUNBQVU7Ozs7SUFBakIsVUFBa0IsS0FBZTtRQUFqQyxpQkF3QkM7UUF2QkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNwQixpQkFBTSxVQUFVLFlBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7YUFBTTs7Z0JBQ0Msa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRTtZQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUvQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztnQkFFbEIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUExQixDQUEwQixDQUFDO1lBRXJGLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ3hELFNBQVMsQ0FBQyxVQUFDLElBQXlCO2dCQUNuQyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFFekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBOUNELENBQTBDLFlBQVksR0E4Q3JEOzs7Ozs7O0lBNUNrRCx1REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVJdGVtLCBGaWxlVXBsb2FkZXIsIEZpbGVVcGxvYWRlck9wdGlvbnN9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5pbXBvcnQge0lGaWxlRGF0YVByb3BlcnRpZXMsIEltYWdlRGF0YUNvbnZlcnRlcn0gZnJvbSAnLi9pbWFnZURhdGFDb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLCBJTm90aWZpY2F0aW9ufSBmcm9tICcuL0ZpbGVtYW5hZ2VyTm90aWZjYXRpb25zJztcbmltcG9ydCB7RmlsZUxpa2VPYmplY3R9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9maWxlLXVwbG9hZC9maWxlLWxpa2Utb2JqZWN0LmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRmlsZVVwbG9hZGVyIGV4dGVuZHMgRmlsZVVwbG9hZGVyIHtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucywgcHJpdmF0ZSBmaWxlbWFuYWdlck5vdGlmaWNhdGlvbjogRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvbldoZW5BZGRpbmdGaWxlRmFpbGVkKGl0ZW06IEZpbGVMaWtlT2JqZWN0LCBmaWx0ZXI6IGFueSwgb3B0aW9uczogRmlsZVVwbG9hZGVyT3B0aW9ucykge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHR5cGU6ICdhbGVydCcsXG4gICAgICB0aXRsZTogJ0FkZCBmaWxlIHRvIHF1ZXVlJyxcbiAgICAgIG1lc3NhZ2U6IGBGaWxlIG5vdCBhZGQgdG8gcXVldWVgXG4gICAgfTtcblxuICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gJ2ZpbGVTaXplJykge1xuICAgICAgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPSBgRmlsZSBzaXplIGlzIHRvbyBsYXJnZSAtIG1heCBzaXplICBpcyAke29wdGlvbnMubWF4RmlsZVNpemUgLyAxMDI0fSBLQmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGlmaWNhdGlvbi5tZXNzYWdlID0gYEZpbGUgbWltZSB0eXBlIFwiJHtpdGVtLnR5cGV9XCIgaXMgbm90IGFsbG93ZWRgO1xuICAgIH1cbiAgICB0aGlzLmZpbGVtYW5hZ2VyTm90aWZpY2F0aW9uLnNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWRJdGVtKHZhbHVlOiBGaWxlSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXJsKSB7XG4gICAgICBzdXBlci51cGxvYWRJdGVtKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1hZ2VEYXRhQ29udmVydGVyID0gbmV3IEltYWdlRGF0YUNvbnZlcnRlcigpO1xuICAgICAgdGhpcy5fb25Qcm9ncmVzc0l0ZW0odmFsdWUsIDApO1xuXG4gICAgICBpZiAodGhpcy5pc1VwbG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm9wdGlvbnMuaGVhZGVycy5maW5kKChvYmplY3Q6IGFueSkgPT4gb2JqZWN0Lm5hbWUgPT09ICdmb2xkZXJJZCcpO1xuXG4gICAgICB0aGlzLl9vblByb2dyZXNzSXRlbSh2YWx1ZSwgNTApO1xuICAgICAgaW1hZ2VEYXRhQ29udmVydGVyLmdldFByb3BlcnRpZXModmFsdWUuX2ZpbGUsIGhlYWRlci52YWx1ZSlcbiAgICAgICAgLnN1YnNjcmliZSgoZmlsZTogSUZpbGVEYXRhUHJvcGVydGllcykgPT4ge1xuICAgICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuX29uUHJvZ3Jlc3NJdGVtKHZhbHVlLCAxMDApO1xuICAgICAgICAgIHRoaXMuX29uQ29tcGxldGVJdGVtKHZhbHVlLCBKU09OLnN0cmluZ2lmeShmaWxlKSwgMjAwLCB7fSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19