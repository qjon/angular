/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
export class FileManagerConfiguration {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU1qRCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBOERuQyxZQUFnRCxhQUF3QztRQTVEakYsb0JBQWUsR0FBZ0I7WUFDcEM7Z0JBQ0UsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7YUFDWjtZQUNEO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2FBQ1o7U0FDRixDQUFDO1FBRUsscUJBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUV0QyxvQkFBZSxHQUFzQjtZQUMxQztnQkFDRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxPQUFPLEVBQUUsY0FBYztnQkFDdkIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLGVBQWUsRUFBRSxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztnQkFDekUsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2dCQUM3RixPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDdkUsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUMxQixPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGLENBQUM7UUFHSyxZQUFPLEdBQUcsWUFBWSxDQUFDO2NBV3RCLEVBQUMsVUFBVSxFQUFFLGFBQWEsRUFBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBQyxVQUFVLEVBQUUsYUFBYSxFQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQztRQUNoRSxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGFBQWEsQ0FBQyx3QkFBd0IsSUFBSSxLQUFLLENBQUM7SUFDbEYsQ0FBQzs7O1lBdkVGLFVBQVU7Ozs7NENBK0RJLE1BQU0sU0FBQywwQkFBMEI7Ozs7SUE1RDlDLG1EQVdFOztJQUVGLG9EQUE2Qzs7SUFFN0MsbURBZ0NFOztJQUVGLDhDQUErRDs7SUFDL0QsMkNBQThCOztJQUU5QixvREFBaUM7O0lBRWpDLCtDQUEyQjs7SUFFM0IsNkNBQWtDOztJQUVsQyw0REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lDb250ZXh0TWVudX0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lGaWxlVHlwZUZpbHRlcn0gZnJvbSAnLi4vdG9vbGJhci9pbnRlcmZhY2UvSUZpbGVUeXBlRmlsdGVyJztcbmltcG9ydCB7SUNyb3BTaXplfSBmcm9tICcuLi9jcm9wL0lDcm9wU2l6ZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24ge1xuXG4gIHB1YmxpYyBhbGxvd2VkQ3JvcFNpemU6IElDcm9wU2l6ZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdSSV9GTV9CVE5fTEFORFNDQVBFJyxcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBoZWlnaHQ6IDEwMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1JJX0ZNX0JUTl9QT1JUUkFJVCcsXG4gICAgICB3aWR0aDogMjAwLFxuICAgICAgaGVpZ2h0OiAzMDBcbiAgICB9XG4gIF07XG5cbiAgcHVibGljIGNvbnRleHRNZW51SXRlbXM6IElDb250ZXh0TWVudVtdID0gW107XG5cbiAgcHVibGljIGZpbGVUeXBlc0ZpbHRlcjogSUZpbGVUeXBlRmlsdGVyW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0FMTCcsXG4gICAgICBtaW1lczogW10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtZmlsZS1vJyxcbiAgICAgIHRleHQ6ICdBbGwgZmlsZXMnLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSU1BR0VTJyxcbiAgICAgIG1pbWVzOiBbJ2ltYWdlL2pwZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdpbWFnZS9naWYnLCAnaW1hZ2UvcG5nJ10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtcGljdHVyZS1vJyxcbiAgICAgIHRleHQ6ICdJbWFnZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQVVESU8nLFxuICAgICAgbWltZXM6IFsnYXVkaW8vbXBlZycsICdhdWRpby94LW1zLXdtYScsICdhdWRpby92bmQucm4tcmVhbGF1ZGlvJywgJ2F1ZGlvL3gtd2F2JywgJ2F1ZGlvL21wMyddLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWZpbGUtYXVkaW8tbycsXG4gICAgICB0ZXh0OiAnQXVkaW8nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVklERU8nLFxuICAgICAgbWltZXM6IFsndmlkZW8vbXBlZycsICd2aWRlby9tcDQnLCAndmlkZW8vcXVpY2t0aW1lJywgJ3ZpZGVvL3gtbXMtd212J10sXG4gICAgICBpY29uQ2xzOiAnZmEgZmEtZmlsZS12aWRlby1vJyxcbiAgICAgIHRleHQ6ICdWaWRlbydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBUkNISVZFJyxcbiAgICAgIG1pbWVzOiBbJ2FwcGxpY2F0aW9uL3ppcCddLFxuICAgICAgaWNvbkNsczogJ2ZhIGZhLWZpbGUtYXJjaGl2ZS1vJyxcbiAgICAgIHRleHQ6ICdBcmNoaXZlJ1xuICAgIH1cbiAgXTtcblxuICBwdWJsaWMgZm9sZGVyVXJsczoge2ZvbGRlcnNVcmw6IHN0cmluZywgZm9sZGVyTW92ZVVybDogc3RyaW5nfTtcbiAgcHVibGljIGZpbGVVcmwgPSAnL2FwaS9maWxlcyc7XG5cbiAgcHVibGljIGlzTXVsdGlTZWxlY3Rpb246IGJvb2xlYW47XG5cbiAgcHVibGljIG1heEZpbGVTaXplOiBudW1iZXI7XG5cbiAgcHVibGljIG1pbWVUeXBlczogc3RyaW5nW10gfCBudWxsO1xuXG4gIHB1YmxpYyBhbGxvd0Nob29zZU11bHRpcGxlRmlsZXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJykgY29uZmlndXJhdGlvbjogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IHtmb2xkZXJzVXJsLCBmb2xkZXJNb3ZlVXJsfSA9IGNvbmZpZ3VyYXRpb24udXJscztcbiAgICB0aGlzLmZvbGRlclVybHMgPSB7Zm9sZGVyc1VybCwgZm9sZGVyTW92ZVVybH07XG4gICAgdGhpcy5maWxlVXJsID0gY29uZmlndXJhdGlvbi51cmxzLmZpbGVzVXJsO1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdGlvbiA9IGNvbmZpZ3VyYXRpb24uaXNNdWx0aVNlbGVjdGlvbiB8fCBmYWxzZTtcbiAgICB0aGlzLm1heEZpbGVTaXplID0gY29uZmlndXJhdGlvbi5tYXhGaWxlU2l6ZSB8fCAwO1xuICAgIHRoaXMubWltZVR5cGVzID0gY29uZmlndXJhdGlvbi5taW1lVHlwZXMgfHwgbnVsbDtcbiAgICB0aGlzLmFsbG93Q2hvb3NlTXVsdGlwbGVGaWxlcyA9IGNvbmZpZ3VyYXRpb24uYWxsb3dDaG9vc2VNdWx0aXBsZUZpbGVzIHx8IGZhbHNlO1xuICB9XG59XG4iXX0=