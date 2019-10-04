import {Observable} from 'rxjs';

export interface INotification {
  type: 'alert' | 'error' | 'success';
  title: string;
  message?: string;
}

export interface INotificationService {
  readonly notification$: Observable<INotification>;

  send(notification: INotification): void;
}
