import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeModule} from '@rign/angular2-tree';
import {TreeTwoComponent} from './treeTwo.component';
import {NewItemComponent} from './newItem.component';
import {TreeLocalStorageModule} from '../localStorage/treeLocalStorage.module';
import {HttpClientModule} from '@angular/common/http';
import {TreeTwoNodeService} from './treeTwoNode.service';
import {TreeTwoNodeBackendService} from './treeTwoNodeBackend.service';

@NgModule({
  declarations: [
    TreeTwoComponent,
    NewItemComponent
  ],
  exports: [TreeTwoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeLocalStorageModule,
    ReactiveFormsModule,
    TreeModule
  ],
  providers: [
    TreeTwoNodeService,
    TreeTwoNodeBackendService,
  ]
})
export class TreeTwoModule {
}
