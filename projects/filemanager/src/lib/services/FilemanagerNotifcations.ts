import {Subject} from 'rxjs';

export interface INotification {
  type: 'alert' | 'error' | 'success';
  title: string;
  message?: string;
}

export class FilemanagerNotifcations {
  private notification$ = new Subject<INotification>();

  public sendNotification(notification: INotification): void {
    this.notification$.next(notification);
  }

  public getNotificationStream(): Subject<INotification> {
    return this.notification$;
  }
}
