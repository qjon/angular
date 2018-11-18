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
var FilemanagerNotifcations = /** @class */ (function () {
    function FilemanagerNotifcations() {
        this.notification$ = new Subject();
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    FilemanagerNotifcations.prototype.sendNotification = /**
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        this.notification$.next(notification);
    };
    /**
     * @return {?}
     */
    FilemanagerNotifcations.prototype.getNotificationStream = /**
     * @return {?}
     */
    function () {
        return this.notification$;
    };
    return FilemanagerNotifcations;
}());
export { FilemanagerNotifcations };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilemanagerNotifcations.prototype.notification$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9GaWxlbWFuYWdlck5vdGlmY2F0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQUU3QixtQ0FJQzs7O0lBSEMsNkJBQW9DOztJQUNwQyw4QkFBYzs7SUFDZCxnQ0FBaUI7O0FBR25CO0lBQUE7UUFDVSxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO0lBU3ZELENBQUM7Ozs7O0lBUFEsa0RBQWdCOzs7O0lBQXZCLFVBQXdCLFlBQTJCO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSx1REFBcUI7OztJQUE1QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7Ozs7OztJQVRDLGdEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvbiB7XG4gIHR5cGU6ICdhbGVydCcgfCAnZXJyb3InIHwgJ3N1Y2Nlc3MnO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZW1hbmFnZXJOb3RpZmNhdGlvbnMge1xuICBwcml2YXRlIG5vdGlmaWNhdGlvbiQgPSBuZXcgU3ViamVjdDxJTm90aWZpY2F0aW9uPigpO1xuXG4gIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbik6IHZvaWQge1xuICAgIHRoaXMubm90aWZpY2F0aW9uJC5uZXh0KG5vdGlmaWNhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZ2V0Tm90aWZpY2F0aW9uU3RyZWFtKCk6IFN1YmplY3Q8SU5vdGlmaWNhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbiQ7XG4gIH1cbn1cbiJdfQ==