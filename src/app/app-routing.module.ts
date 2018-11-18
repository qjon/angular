import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FileManagerComponent} from '@rign/angular2-filemanager';
import {TreeExampleComponent} from './tree-example/tree-example.component';

const routes: Routes = [
  {
    path: 'tree',
    component: TreeExampleComponent,
  },
  {
    path: 'filemanager',
    component: FileManagerComponent,
  },
  {
    path: '**',
    redirectTo: 'tree'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
