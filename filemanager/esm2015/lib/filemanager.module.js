/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from '@rign/angular2-tree';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { FileManagerComponent } from './filemanager.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FilesListComponent } from './filesList/filesList.component';
import { ImageCropperComponent, ImageCropperModule } from 'ng2-img-cropper';
import { CropComponent } from './crop/crop.component';
import { PreviewComponent } from './preview/preview.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FileManagerConfiguration } from './configuration/fileManagerConfiguration.service';
import { FileManagerUploader } from './filesList/fileManagerUploader.service';
import { TreeService } from './configuration/tree.service';
import { EffectsModule } from '@ngrx/effects';
import { FileManagerEffectsService } from './store/fileManagerEffects.service';
import { StoreModule } from '@ngrx/store';
import { fileManagerReducer } from './store/file-manager.reducer';
import { FileManagerActionsService } from './store/fileManagerActions.service';
import { FileTypeFilterService } from './services/fileTypeFilter.service';
import { SearchFilterService } from './services/searchFilter.service';
import { FileManagerDispatcherService } from './store/file-manager-dispatcher.service';
import { FileTypeFilterComponent } from './toolbar/fileTypeFilter/fileTypeFilter.component';
import { SearchFileComponent } from './toolbar/searchFile/searchFile.component';
import { FileManagerApiService } from './store/fileManagerApi.service';
import { ImageDataConverter } from './services/imageDataConverter.service';
import { FilemanagerNotifcations } from './services/FilemanagerNotifcations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FileManagerBackendApiService } from './store/fileManagerBackendApi.service';
import { CurrentDirectoryFilesService } from './services/currentDirectoryFiles.service';
import { SelectionComponent } from './toolbar/selectionDropDown/selection.component';
import { FileComponent } from './filesList/file/file.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
export class FileManagerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvZmlsZW1hbmFnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFN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QUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHlCQUF5QjtvQkFDekIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQ3JELFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDO29CQUNuRCxlQUFlO29CQUNmLFVBQVU7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsYUFBYTtvQkFDYix1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgUHJvdmlkZXIsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUcmVlTW9kdWxlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2UsIFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGV9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckNvbXBvbmVudH0gZnJvbSAnLi9maWxlbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWxlc0xpc3RDb21wb25lbnR9IGZyb20gJy4vZmlsZXNMaXN0L2ZpbGVzTGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtJbWFnZUNyb3BwZXJDb21wb25lbnQsIEltYWdlQ3JvcHBlck1vZHVsZX0gZnJvbSAnbmcyLWltZy1jcm9wcGVyJztcbmltcG9ydCB7Q3JvcENvbXBvbmVudH0gZnJvbSAnLi9jcm9wL2Nyb3AuY29tcG9uZW50JztcbmltcG9ydCB7UHJldmlld0NvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7RHJvcGRvd25Db21wb25lbnR9IGZyb20gJy4vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlTWFuYWdlclVwbG9hZGVyfSBmcm9tICcuL2ZpbGVzTGlzdC9maWxlTWFuYWdlclVwbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlU2VydmljZX0gZnJvbSAnLi9jb25maWd1cmF0aW9uL3RyZWUuc2VydmljZSc7XG5pbXBvcnQge0VmZmVjdHNNb2R1bGV9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtGaWxlTWFuYWdlckVmZmVjdHNTZXJ2aWNlfSBmcm9tICcuL3N0b3JlL2ZpbGVNYW5hZ2VyRWZmZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmVNb2R1bGV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7ZmlsZU1hbmFnZXJSZWR1Y2VyfSBmcm9tICcuL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7RmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQge1N0b3JlRGV2dG9vbHNNb2R1bGV9IGZyb20gJ0BuZ3J4L3N0b3JlLWRldnRvb2xzJztcbmltcG9ydCB7RmlsZVR5cGVGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2ZpbGVUeXBlRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaEZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlLW1hbmFnZXItZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZVR5cGVGaWx0ZXJDb21wb25lbnR9IGZyb20gJy4vdG9vbGJhci9maWxlVHlwZUZpbHRlci9maWxlVHlwZUZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hGaWxlQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIvc2VhcmNoRmlsZS9zZWFyY2hGaWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQXBpU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckFwaS5zZXJ2aWNlJztcbmltcG9ydCB7SW1hZ2VEYXRhQ29udmVydGVyfSBmcm9tICcuL3NlcnZpY2VzL2ltYWdlRGF0YUNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsZW1hbmFnZXJOb3RpZmNhdGlvbnN9IGZyb20gJy4vc2VydmljZXMvRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Qb3BvdmVyTW9kdWxlfSBmcm9tICdhbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyJztcbmltcG9ydCB7RmlsZU1hbmFnZXJCYWNrZW5kQXBpU2VydmljZX0gZnJvbSAnLi9zdG9yZS9maWxlTWFuYWdlckJhY2tlbmRBcGkuc2VydmljZSc7XG5pbXBvcnQge0N1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gJy4vdG9vbGJhci9zZWxlY3Rpb25Ecm9wRG93bi9zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7RmlsZUNvbXBvbmVudH0gZnJvbSAnLi9maWxlc0xpc3QvZmlsZS9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge0lGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb259IGZyb20gJy4vY29uZmlndXJhdGlvbi9JRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0ZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2VdKSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSW1hZ2VDcm9wcGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdmaWxlcycsIGZpbGVNYW5hZ2VyUmVkdWNlciksXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIFRyZWVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmlsZU1hbmFnZXJDb21wb25lbnQsXG4gICAgRmlsZUNvbXBvbmVudCxcbiAgICBGaWxlVHlwZUZpbHRlckNvbXBvbmVudCxcbiAgICBUb29sYmFyQ29tcG9uZW50LFxuICAgIEZpbGVzTGlzdENvbXBvbmVudCxcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcbiAgICBQcmV2aWV3Q29tcG9uZW50LFxuICAgIENyb3BDb21wb25lbnQsXG4gICAgU2VhcmNoRmlsZUNvbXBvbmVudCxcbiAgICBTZWxlY3Rpb25Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSW1hZ2VDcm9wcGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtGaWxlTWFuYWdlckNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlTWFuYWdlck1vZHVsZSB7XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSUZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbiwgYXBpUHJvdmlkZXI6IFByb3ZpZGVyID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlsZU1hbmFnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJBY3Rpb25zU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJBcGlTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckJhY2tlbmRBcGlTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgIEZpbGVNYW5hZ2VyRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyRWZmZWN0c1NlcnZpY2UsXG4gICAgICAgIEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zLFxuICAgICAgICBGaWxlTWFuYWdlclVwbG9hZGVyLFxuICAgICAgICBGaWxlVHlwZUZpbHRlclNlcnZpY2UsXG4gICAgICAgIEltYWdlRGF0YUNvbnZlcnRlcixcbiAgICAgICAgTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgIFNlYXJjaEZpbHRlclNlcnZpY2UsXG4gICAgICAgIFRyZWVTZXJ2aWNlLFxuICAgICAgICB7cHJvdmlkZTogJ2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbicsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICBhcGlQcm92aWRlciA/IGFwaVByb3ZpZGVyIDogRmlsZU1hbmFnZXJBcGlTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnOiBJRmlsZU1hbmFnZXJDb25maWd1cmF0aW9uLCBhcGlQcm92aWRlcjogUHJvdmlkZXIgPSBudWxsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGaWxlTWFuYWdlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckFjdGlvbnNTZXJ2aWNlLFxuICAgICAgICBGaWxlTWFuYWdlckFwaVNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyQmFja2VuZEFwaVNlcnZpY2UsXG4gICAgICAgIEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgRmlsZU1hbmFnZXJEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJFZmZlY3RzU2VydmljZSxcbiAgICAgICAgRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMsXG4gICAgICAgIEZpbGVNYW5hZ2VyVXBsb2FkZXIsXG4gICAgICAgIEZpbGVUeXBlRmlsdGVyU2VydmljZSxcbiAgICAgICAgSW1hZ2VEYXRhQ29udmVydGVyLFxuICAgICAgICBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgU2VhcmNoRmlsdGVyU2VydmljZSxcbiAgICAgICAgVHJlZVNlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlOiAnZmlsZU1hbmFnZXJDb25maWd1cmF0aW9uJywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIGFwaVByb3ZpZGVyID8gYXBpUHJvdmlkZXIgOiBGaWxlTWFuYWdlckFwaVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=