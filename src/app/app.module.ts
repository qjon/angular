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
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {TreeModule} from '@rign/angular2-tree';
import {FileManagerModule, FileManagerApiService, IFileManagerConfiguration} from '@rign/angular2-filemanager';
import {AppRoutingModule} from './app-routing.module';
import {TreeOneModule} from '../../projects/tree-example/src/app/treeOne/treeOne.module';
import {TreeTwoModule} from '../../projects/tree-example/src/app/treeTwo/treeTwo.module';
import { TreeExampleComponent } from './tree-example/tree-example.component';

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
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    TreeModule.forRoot(),
    TreeOneModule,
    TreeTwoModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    FileManagerApiService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

  public constructor(private translate: TranslateService) {
    this.setTranslationForEN();
    this.translate.setDefaultLang('en');
  }

  private setTranslationForEN(): void {
    this.translate.setTranslation('en', {
      RI_TREE_LBL_ADD_NODE: 'Add data',
      RI_TREE_LBL_EDIT_NODE: 'Edit data',
      RI_TREE_LBL_REMOVE_NODE: 'Delete data',
      RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level',
      RI_FM_BTN_LANDSCAPE: 'Landscape',
      RI_FM_BTN_PORTRAIT: 'Portrait',
      RI_FM_BTN_SAVE: 'Save',
      RI_FM_LBL_CHOOSE_SELECTION: 'Choose selection',
      RI_FM_LBL_DELETE_SELECTION: 'Delete selection',
      RI_FM_LBL_INVERSE_SELECTION: 'Inverse selection',
      RI_FM_LBL_SEARCH_FOR: 'Search for...',
      RI_FM_LBL_SELECT_ALL: 'Select all',
      RI_FM_LBL_UNSELECT_ALL: 'Unselect all',
    });
  }
}
