/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var NodeDispatcherService = /** @class */ (function () {
    function NodeDispatcherService() {
        this.nodeServices = {};
    }
    /**
     * @param {?} name
     * @param {?} nodeService
     * @return {?}
     */
    NodeDispatcherService.prototype.registerService = /**
     * @param {?} name
     * @param {?} nodeService
     * @return {?}
     */
    function (name, nodeService) {
        this.nodeServices[name] = nodeService;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NodeDispatcherService.prototype.get = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (Boolean(this.nodeServices[name])) {
            return this.nodeServices[name];
        }
        else {
            // default node service provider
            throw Error("No tree service with name " + name);
        }
    };
    NodeDispatcherService.decorators = [
        { type: Injectable }
    ];
    return NodeDispatcherService;
}());
export { NodeDispatcherService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NodeDispatcherService.prototype.nodeServices;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZXNEaXNwYXRjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2Uvbm9kZXNEaXNwYXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekM7SUFBQTtRQUVVLGlCQUFZLEdBQW9DLEVBQUUsQ0FBQztJQWM3RCxDQUFDOzs7Ozs7SUFaUSwrQ0FBZTs7Ozs7SUFBdEIsVUFBdUIsSUFBWSxFQUFFLFdBQXlCO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU0sbUNBQUc7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsZ0NBQWdDO1lBQ2hDLE1BQU0sS0FBSyxDQUFDLCtCQUE2QixJQUFNLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7O2dCQWZGLFVBQVU7O0lBZ0JYLDRCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxxQkFBcUI7Ozs7OztJQUNoQyw2Q0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJTm9kZVNlcnZpY2V9IGZyb20gJy4vbm9kZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vZGVEaXNwYXRjaGVyU2VydmljZSB7XG4gIHByaXZhdGUgbm9kZVNlcnZpY2VzOiB7IFtrZXk6IHN0cmluZ106IElOb2RlU2VydmljZSB9ID0ge307XG5cbiAgcHVibGljIHJlZ2lzdGVyU2VydmljZShuYW1lOiBzdHJpbmcsIG5vZGVTZXJ2aWNlOiBJTm9kZVNlcnZpY2UpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGVTZXJ2aWNlc1tuYW1lXSA9IG5vZGVTZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBJTm9kZVNlcnZpY2Uge1xuICAgIGlmIChCb29sZWFuKHRoaXMubm9kZVNlcnZpY2VzW25hbWVdKSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZVNlcnZpY2VzW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWZhdWx0IG5vZGUgc2VydmljZSBwcm92aWRlclxuICAgICAgdGhyb3cgRXJyb3IoYE5vIHRyZWUgc2VydmljZSB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICAgIH1cbiAgfVxufVxuIl19