import { Subject } from 'rxjs';
export interface INotification {
    type: 'alert' | 'error' | 'success';
    title: string;
    message?: string;
}
export declare class FilemanagerNotifcations {
    private notification$;
    sendNotification(notification: INotification): void;
    getNotificationStream(): Subject<INotification>;
}
