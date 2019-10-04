import {Component, OnInit} from '@angular/core';
import {FileManagerConfiguration, FilemanagerNotifications, UnSelectAllFilesAction} from '@rign/angular2-filemanager';
import {Store} from '@ngrx/store';
import {INotification} from '../../../filemanager/src/lib/interfaces/filemanager-notification.interface';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'rie-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public notificationOptions = {
    position: ['bottom', 'right'],
    timeOut: 3000,
    lastOnBottom: false,
    preventDuplicates: true,
    rtl: false,
    showProgressBar: true,
    pauseOnHover: true
  };

  public constructor(public fileManagerConfiguration: FileManagerConfiguration,
                     private store: Store<any>,
                     private filemanagerNotifications: FilemanagerNotifications,
                     private notifications: NotificationsService) {
  }

  public ngOnInit(): void {
    this.filemanagerNotifications.notification$
      .subscribe((notification: INotification) => {
        console.log(notification);

        const {type, title, message} = notification;

        this.notifications[type](title, message);
      });
  }

  public toggleMultiSelection() {
    this.fileManagerConfiguration.isMultiSelection = !this.fileManagerConfiguration.isMultiSelection;

    if (!this.fileManagerConfiguration.isMultiSelection) {
      this.store.dispatch(new UnSelectAllFilesAction());
    }
  }
}

