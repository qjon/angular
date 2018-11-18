import {Component} from '@angular/core';
import {FileManagerConfiguration, UnSelectAllFilesAction} from '@rign/angular2-filemanager';
import {Store} from '@ngrx/store';

@Component({
  selector: 'rie-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(public fileManagerConfiguration: FileManagerConfiguration,
                     private store: Store<any>) {
  }

  public toggleMultiSelection() {
    this.fileManagerConfiguration.isMultiSelection = !this.fileManagerConfiguration.isMultiSelection;

    if (!this.fileManagerConfiguration.isMultiSelection) {
      this.store.dispatch(new UnSelectAllFilesAction());
    }
  }
}

