/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * @record
 */
export function INotification() { }
if (false) {
    /** @type {?} */
    INotification.prototype.type;
    /** @type {?} */
    INotification.prototype.title;
    /** @type {?|undefined} */
    INotification.prototype.message;
}
export class FilemanagerNotifcations {
    constructor() {
        this.notification$ = new Subject();
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    sendNotification(notification) {
        this.notification$.next(notification);
    }
    /**
     * @return {?}
     */
    getNotificationStream() {
        return this.notification$;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilemanagerNotifcations.prototype.notification$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQUU3QixtQ0FJQzs7O0lBSEMsNkJBQW9DOztJQUNwQyw4QkFBYzs7SUFDZCxnQ0FBaUI7O0FBR25CLE1BQU0sT0FBTyx1QkFBdUI7SUFBcEM7UUFDVSxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO0lBU3ZELENBQUM7Ozs7O0lBUFEsZ0JBQWdCLENBQUMsWUFBMkI7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVNLHFCQUFxQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7Ozs7SUFUQyxnREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElOb3RpZmljYXRpb24ge1xuICB0eXBlOiAnYWxlcnQnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJztcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVtYW5hZ2VyTm90aWZjYXRpb25zIHtcbiAgcHJpdmF0ZSBub3RpZmljYXRpb24kID0gbmV3IFN1YmplY3Q8SU5vdGlmaWNhdGlvbj4oKTtcblxuICBwdWJsaWMgc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IElOb3RpZmljYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbiQubmV4dChub3RpZmljYXRpb24pO1xuICB9XG5cbiAgcHVibGljIGdldE5vdGlmaWNhdGlvblN0cmVhbSgpOiBTdWJqZWN0PElOb3RpZmljYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb24kO1xuICB9XG59XG4iXX0=