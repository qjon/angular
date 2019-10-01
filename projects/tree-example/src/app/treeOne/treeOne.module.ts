import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TREE_TRANSLATION_TOKEN, TreeModule} from '@rign/angular2-tree';
import {TreeOneNodeService} from './treeOneNode.service';
import {TreeOneComponent} from './treeOne.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {TreeOneTranslationService} from './tree-one-translations';

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
    {provide: TREE_TRANSLATION_TOKEN, useClass: TreeOneTranslationService},
  ]
})
export class TreeOneModule {
}
