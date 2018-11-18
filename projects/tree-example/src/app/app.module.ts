import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TreeOneModule} from './treeOne/treeOne.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {DndModule} from 'ng2-dnd';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ContextMenuModule} from 'ngx-contextmenu';
import {TreeModule} from '@rign/angular2-tree';
import {TreeTwoModule} from './treeTwo/treeTwo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ContextMenuModule.forRoot({
      useBootstrap4: true
    }),
    DndModule.forRoot(),
    EffectsModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    TreeModule.forRoot(),
    TreeOneModule,
    TreeTwoModule,
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  public constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
