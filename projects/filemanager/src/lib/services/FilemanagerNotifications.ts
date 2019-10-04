import {Subject} from 'rxjs';
import {INotification, INotificationService} from '../interfaces/filemanager-notification.interface';

export class FilemanagerNotifications implements INotificationService {
  private _notification$ = new Subject<INotification>();

  public notification$ = this._notification$.asObservable();

  public send(notification: INotification): void {
    this._notification$.next(notification);
  }
}
