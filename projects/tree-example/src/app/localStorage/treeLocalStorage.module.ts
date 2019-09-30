import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TreeModule} from '@rign/angular2-tree';
import {TreeLocalStorageNodeService} from './treeLocalStorage.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    BrowserModule,
    TreeModule,
  ],
  providers: [TreeLocalStorageNodeService]
})
export class TreeLocalStorageModule {
}
