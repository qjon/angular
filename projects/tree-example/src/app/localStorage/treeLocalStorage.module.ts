import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {TreeModule} from '@rign/angular2-tree';
import {TreeLocalStorageNodeService} from './treeLocalStorage.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    BrowserModule,
    HttpModule,
    TreeModule
  ],
  providers: [TreeLocalStorageNodeService]
})
export class TreeLocalStorageModule {
}
