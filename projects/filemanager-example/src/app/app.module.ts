import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {EffectsModule} from '@ngrx/effects';
import {
  FILEMANAGER_TRANSLATION_TOKEN,
  FileManagerApiService,
  FileManagerModule,
  IFileManagerConfiguration
} from '@rign/angular2-filemanager';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TREE_TRANSLATION_TOKEN, TreeModule} from '@rign/angular2-tree';
import {ContextMenuModule} from 'ngx-contextmenu';
import {DndModule} from 'ng2-dnd';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {TranslationService} from './translations';


const fileManagerConfiguration: IFileManagerConfiguration = {
  urls: {
    foldersUrl: '/api/folder',
    filesUrl: null,
    folderMoveUrl: '/api/folder/move'
  },
  isMultiSelection: true,
  mimeTypes: ['image/jpg', 'image/jpeg', 'image/png'],
  maxFileSize: 50 * 1024,
  allowChooseMultipleFiles: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ContextMenuModule.forRoot({
      useBootstrap4: true
    }),
    ConfirmationPopoverModule.forRoot(),
    DndModule.forRoot(),
    EffectsModule.forRoot([]),
    FileManagerModule.forRoot(fileManagerConfiguration),
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    TreeModule.forRoot(),
  ],
  providers: [
    FileManagerApiService,
    {provide: TREE_TRANSLATION_TOKEN, useClass: TranslationService},
    {provide: FILEMANAGER_TRANSLATION_TOKEN, useClass: TranslationService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor() {
  }
}
