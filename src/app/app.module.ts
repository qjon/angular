import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContextMenuModule} from 'ngx-contextmenu';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {DndModule} from 'ng2-dnd';
import {EffectsModule} from '@ngrx/effects';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {TranslateModule} from '@ngx-translate/core';
import {TREE_TRANSLATION_TOKEN, TreeModule} from '@rign/angular2-tree';
import {
  FILEMANAGER_TRANSLATION_TOKEN,
  FileManagerApiService,
  FileManagerModule,
  IFileManagerConfiguration
} from '@rign/angular2-filemanager';
import {AppRoutingModule} from './app-routing.module';
import {TreeOneModule} from '../../projects/tree-example/src/app/treeOne/treeOne.module';
import {TreeTwoModule} from '../../projects/tree-example/src/app/treeTwo/treeTwo.module';
import {TreeExampleComponent} from './tree-example/tree-example.component';
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
    AppComponent,
    TreeExampleComponent
  ],
  imports: [
    AppRoutingModule,
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
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    TreeModule.forRoot(),
    TreeOneModule,
    TreeTwoModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    FileManagerApiService,
    {provide: TREE_TRANSLATION_TOKEN, useClass: TranslationService},
    {provide: FILEMANAGER_TRANSLATION_TOKEN, useClass: TranslationService},
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
