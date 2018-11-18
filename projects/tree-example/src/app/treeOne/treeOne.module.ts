import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TreeModule} from '@rign/angular2-tree';
import {TreeOneNodeService} from './treeOneNode.service';
import {TreeOneComponent} from './treeOne.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [TreeOneComponent],
  exports: [TreeOneComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeModule,
  ],
  providers: [
    TreeOneNodeService,
  ]
})
export class TreeOneModule {
}
