import {FilemanagerNotifications} from './FilemanagerNotifications';
import {INotification} from '../interfaces/filemanager-notification.interface';

describe('FilemanagerNotifications', () => {
  let notification: INotification;
  let service: FilemanagerNotifications;

  beforeEach(() => {
    notification = {
      type: 'alert',
      title: 'Title',
      message: 'Message'
    };

    service = new FilemanagerNotifications();
  });

  describe('sendNotification', () => {
    it('should set new value', () => {
      const handler = jasmine.createSpy('handler');

      service.notification$
        .subscribe(handler);

      service.send(notification);

      expect(handler).toHaveBeenCalledWith(notification);
    });
  });
});
