/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class NodeDispatcherService {
    constructor() {
        this.nodeServices = {};
    }
    /**
     * @param {?} name
     * @param {?} nodeService
     * @return {?}
     */
    registerService(name, nodeService) {
        this.nodeServices[name] = nodeService;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        if (Boolean(this.nodeServices[name])) {
            return this.nodeServices[name];
        }
        else {
            // default node service provider
            throw Error(`No tree service with name ${name}`);
        }
    }
}
NodeDispatcherService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NodeDispatcherService.prototype.nodeServices;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZXNEaXNwYXRjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2Uvbm9kZXNEaXNwYXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekMsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUVVLGlCQUFZLEdBQW9DLEVBQUUsQ0FBQztJQWM3RCxDQUFDOzs7Ozs7SUFaUSxlQUFlLENBQUMsSUFBWSxFQUFFLFdBQXlCO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU0sR0FBRyxDQUFDLElBQVk7UUFDckIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsZ0NBQWdDO1lBQ2hDLE1BQU0sS0FBSyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7O1lBZkYsVUFBVTs7Ozs7OztJQUVULDZDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lOb2RlU2VydmljZX0gZnJvbSAnLi9ub2RlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm9kZURpc3BhdGNoZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub2RlU2VydmljZXM6IHsgW2tleTogc3RyaW5nXTogSU5vZGVTZXJ2aWNlIH0gPSB7fTtcblxuICBwdWJsaWMgcmVnaXN0ZXJTZXJ2aWNlKG5hbWU6IHN0cmluZywgbm9kZVNlcnZpY2U6IElOb2RlU2VydmljZSk6IHZvaWQge1xuICAgIHRoaXMubm9kZVNlcnZpY2VzW25hbWVdID0gbm9kZVNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IElOb2RlU2VydmljZSB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy5ub2RlU2VydmljZXNbbmFtZV0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlU2VydmljZXNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlZmF1bHQgbm9kZSBzZXJ2aWNlIHByb3ZpZGVyXG4gICAgICB0aHJvdyBFcnJvcihgTm8gdHJlZSBzZXJ2aWNlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gICAgfVxuICB9XG59XG4iXX0=