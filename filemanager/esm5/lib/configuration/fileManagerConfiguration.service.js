/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
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
export { FileManagerConfiguration };
if (false) {
    /** @type {?} */
    FileManagerConfiguration.prototype.allowedCropSize;
    /** @type {?} */
    FileManagerConfiguration.prototype.contextMenuItems;
    /** @type {?} */
    FileManagerConfiguration.prototype.fileTypesFilter;
    /** @type {?} */
    FileManagerConfiguration.prototype.folderUrls;
    /** @type {?} */
    FileManagerConfiguration.prototype.fileUrl;
    /** @type {?} */
    FileManagerConfiguration.prototype.isMultiSelection;
    /** @type {?} */
    FileManagerConfiguration.prototype.maxFileSize;
    /** @type {?} */
    FileManagerConfiguration.prototype.mimeTypes;
    /** @type {?} */
    FileManagerConfiguration.prototype.allowChooseMultipleFiles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUtqRDtJQStERSxrQ0FBZ0QsYUFBd0M7UUE1RGpGLG9CQUFlLEdBQWdCO1lBQ3BDO2dCQUNFLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2FBQ1o7WUFDRDtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRzthQUNaO1NBQ0YsQ0FBQztRQUVLLHFCQUFnQixHQUFtQixFQUFFLENBQUM7UUFFdEMsb0JBQWUsR0FBc0I7WUFDMUM7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLElBQUksRUFBRSxXQUFXO2dCQUNqQixlQUFlLEVBQUUsSUFBSTthQUN0QjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7Z0JBQ3pFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztnQkFDN0YsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3ZFLE9BQU8sRUFBRSxvQkFBb0I7Z0JBQzdCLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRixDQUFDO1FBR0ssWUFBTyxHQUFHLFlBQVksQ0FBQztRQVd0QixJQUFBLHVCQUFnRCxFQUEvQywwQkFBVSxFQUFFLGdDQUFtQztRQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUMsVUFBVSxZQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLElBQUksS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsYUFBYSxDQUFDLHdCQUF3QixJQUFJLEtBQUssQ0FBQztJQUNsRixDQUFDOztnQkF2RUYsVUFBVTs7OztnREErREksTUFBTSxTQUFDLDBCQUEwQjs7SUFTaEQsK0JBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQXZFWSx3QkFBd0I7OztJQUVuQyxtREFXRTs7SUFFRixvREFBNkM7O0lBRTdDLG1EQWdDRTs7SUFFRiw4Q0FBK0Q7O0lBQy9ELDJDQUE4Qjs7SUFFOUIsb0RBQWlDOztJQUVqQywrQ0FBMkI7O0lBRTNCLDZDQUFrQzs7SUFFbEMsNERBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ29udGV4dE1lbnV9IGZyb20gJ0ByaWduL2FuZ3VsYXIyLXRyZWUnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRmlsZVR5cGVGaWx0ZXJ9IGZyb20gJy4uL3Rvb2xiYXIvaW50ZXJmYWNlL0lGaWxlVHlwZUZpbHRlcic7XG5pbXBvcnQge0lDcm9wU2l6ZX0gZnJvbSAnLi4vY3JvcC9JQ3JvcFNpemUnO1xuaW1wb3J0IHtJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uIHtcblxuICBwdWJsaWMgYWxsb3dlZENyb3BTaXplOiBJQ3JvcFNpemVbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUklfRk1fQlROX0xBTkRTQ0FQRScsXG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgaGVpZ2h0OiAxMDBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSSV9GTV9CVE5fUE9SVFJBSVQnLFxuICAgICAgd2lkdGg6IDIwMCxcbiAgICAgIGhlaWdodDogMzAwXG4gICAgfVxuICBdO1xuXG4gIHB1YmxpYyBjb250ZXh0TWVudUl0ZW1zOiBJQ29udGV4dE1lbnVbXSA9IFtdO1xuXG4gIHB1YmxpYyBmaWxlVHlwZXNGaWx0ZXI6IElGaWxlVHlwZUZpbHRlcltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBTEwnLFxuICAgICAgbWltZXM6IFtdLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWZpbGUtbycsXG4gICAgICB0ZXh0OiAnQWxsIGZpbGVzJyxcbiAgICAgIGRlZmF1bHRTZWxlY3RlZDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0lNQUdFUycsXG4gICAgICBtaW1lczogWydpbWFnZS9qcGcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2UvZ2lmJywgJ2ltYWdlL3BuZyddLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLXBpY3R1cmUtbycsXG4gICAgICB0ZXh0OiAnSW1hZ2VzJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FVRElPJyxcbiAgICAgIG1pbWVzOiBbJ2F1ZGlvL21wZWcnLCAnYXVkaW8veC1tcy13bWEnLCAnYXVkaW8vdm5kLnJuLXJlYWxhdWRpbycsICdhdWRpby94LXdhdicsICdhdWRpby9tcDMnXSxcbiAgICAgIGljb25DbHM6ICdmYSBmYS1maWxlLWF1ZGlvLW8nLFxuICAgICAgdGV4dDogJ0F1ZGlvJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1ZJREVPJyxcbiAgICAgIG1pbWVzOiBbJ3ZpZGVvL21wZWcnLCAndmlkZW8vbXA0JywgJ3ZpZGVvL3F1aWNrdGltZScsICd2aWRlby94LW1zLXdtdiddLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWZpbGUtdmlkZW8tbycsXG4gICAgICB0ZXh0OiAnVmlkZW8nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQVJDSElWRScsXG4gICAgICBtaW1lczogWydhcHBsaWNhdGlvbi96aXAnXSxcbiAgICAgIGljb25DbHM6ICdmYSBmYS1maWxlLWFyY2hpdmUtbycsXG4gICAgICB0ZXh0OiAnQXJjaGl2ZSdcbiAgICB9XG4gIF07XG5cbiAgcHVibGljIGZvbGRlclVybHM6IHtmb2xkZXJzVXJsOiBzdHJpbmcsIGZvbGRlck1vdmVVcmw6IHN0cmluZ307XG4gIHB1YmxpYyBmaWxlVXJsID0gJy9hcGkvZmlsZXMnO1xuXG4gIHB1YmxpYyBpc011bHRpU2VsZWN0aW9uOiBib29sZWFuO1xuXG4gIHB1YmxpYyBtYXhGaWxlU2l6ZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBtaW1lVHlwZXM6IHN0cmluZ1tdIHwgbnVsbDtcblxuICBwdWJsaWMgYWxsb3dDaG9vc2VNdWx0aXBsZUZpbGVzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbicpIGNvbmZpZ3VyYXRpb246IElGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCB7Zm9sZGVyc1VybCwgZm9sZGVyTW92ZVVybH0gPSBjb25maWd1cmF0aW9uLnVybHM7XG4gICAgdGhpcy5mb2xkZXJVcmxzID0ge2ZvbGRlcnNVcmwsIGZvbGRlck1vdmVVcmx9O1xuICAgIHRoaXMuZmlsZVVybCA9IGNvbmZpZ3VyYXRpb24udXJscy5maWxlc1VybDtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3Rpb24gPSBjb25maWd1cmF0aW9uLmlzTXVsdGlTZWxlY3Rpb24gfHwgZmFsc2U7XG4gICAgdGhpcy5tYXhGaWxlU2l6ZSA9IGNvbmZpZ3VyYXRpb24ubWF4RmlsZVNpemUgfHwgMDtcbiAgICB0aGlzLm1pbWVUeXBlcyA9IGNvbmZpZ3VyYXRpb24ubWltZVR5cGVzIHx8IG51bGw7XG4gICAgdGhpcy5hbGxvd0Nob29zZU11bHRpcGxlRmlsZXMgPSBjb25maWd1cmF0aW9uLmFsbG93Q2hvb3NlTXVsdGlwbGVGaWxlcyB8fCBmYWxzZTtcbiAgfVxufVxuIl19