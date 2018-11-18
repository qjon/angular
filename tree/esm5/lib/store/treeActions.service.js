/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var TreeActionTypes = {
    TREE_SAVE_NODE: 'TREE_SAVE_NODE',
    TREE_SAVE_NODE_SUCCESS: 'TREE_SAVE_NODE_SUCCESS',
    TREE_SAVE_NODE_ERROR: 'TREE_SAVE_NODE_ERROR',
    TREE_DELETE_NODE: 'TREE_DELETE_NODE',
    TREE_DELETE_NODE_SUCCESS: 'TREE_DELETE_NODE_SUCCESS',
    TREE_DELETE_NODE_ERROR: 'TREE_DELETE_NODE_ERROR',
    TREE_EDIT_NODE_START: 'TREE_EDIT_NODE_START',
    TREE_COLLAPSE_NODE: 'TREE_COLLAPSE_NODE',
    TREE_EXPAND_NODE: 'TREE_EXPAND_NODE',
    TREE_INSERT_NODE: 'TREE_INSERT_NODE',
    TREE_LOAD: 'TREE_LOAD',
    TREE_LOAD_PATH: 'TREE_LOAD_PATH',
    TREE_LOAD_SUCCESS: 'TREE_LOAD_SUCCESS',
    TREE_LOAD_ERROR: 'TREE_LOAD_ERROR',
    TREE_MARK_AS_FULLY_LOADED: 'TREE_MARK_AS_FULLY_LOADED',
    TREE_MOVE_NODE: 'TREE_MOVE_NODE',
    TREE_MOVE_NODE_SUCCESS: 'TREE_MOVE_NODE_SUCCESS',
    TREE_MOVE_NODE_ERROR: 'TREE_MOVE_NODE_ERROR',
    TREE_REGISTER: 'TREE_REGISTER',
    TREE_SELECT_NODE: 'TREE_SELECT_NODE',
    TREE_SET_ALL_NODES: 'TREE_SET_ALL_NODES',
    TREE_SET_CONFIGURATION: 'TREE_SET_CONFIGURATION',
};
export { TreeActionTypes };
var TreeCollapseNodeAction = /** @class */ (function () {
    function TreeCollapseNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_COLLAPSE_NODE;
    }
    return TreeCollapseNodeAction;
}());
export { TreeCollapseNodeAction };
if (false) {
    /** @type {?} */
    TreeCollapseNodeAction.prototype.type;
    /** @type {?} */
    TreeCollapseNodeAction.prototype.payload;
}
var TreeDeleteNodeAction = /** @class */ (function () {
    function TreeDeleteNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE;
    }
    return TreeDeleteNodeAction;
}());
export { TreeDeleteNodeAction };
if (false) {
    /** @type {?} */
    TreeDeleteNodeAction.prototype.type;
    /** @type {?} */
    TreeDeleteNodeAction.prototype.payload;
}
var TreeDeleteNodeErrorAction = /** @class */ (function () {
    function TreeDeleteNodeErrorAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE_ERROR;
    }
    return TreeDeleteNodeErrorAction;
}());
export { TreeDeleteNodeErrorAction };
if (false) {
    /** @type {?} */
    TreeDeleteNodeErrorAction.prototype.type;
    /** @type {?} */
    TreeDeleteNodeErrorAction.prototype.payload;
}
var TreeDeleteNodeSuccessAction = /** @class */ (function () {
    function TreeDeleteNodeSuccessAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE_SUCCESS;
    }
    return TreeDeleteNodeSuccessAction;
}());
export { TreeDeleteNodeSuccessAction };
if (false) {
    /** @type {?} */
    TreeDeleteNodeSuccessAction.prototype.type;
    /** @type {?} */
    TreeDeleteNodeSuccessAction.prototype.payload;
}
var TreeEditNodeStartAction = /** @class */ (function () {
    function TreeEditNodeStartAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_EDIT_NODE_START;
    }
    return TreeEditNodeStartAction;
}());
export { TreeEditNodeStartAction };
if (false) {
    /** @type {?} */
    TreeEditNodeStartAction.prototype.type;
    /** @type {?} */
    TreeEditNodeStartAction.prototype.payload;
}
var TreeExpandNodeAction = /** @class */ (function () {
    function TreeExpandNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_EXPAND_NODE;
    }
    return TreeExpandNodeAction;
}());
export { TreeExpandNodeAction };
if (false) {
    /** @type {?} */
    TreeExpandNodeAction.prototype.type;
    /** @type {?} */
    TreeExpandNodeAction.prototype.payload;
}
var TreeInsertNodeAction = /** @class */ (function () {
    function TreeInsertNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_INSERT_NODE;
    }
    return TreeInsertNodeAction;
}());
export { TreeInsertNodeAction };
if (false) {
    /** @type {?} */
    TreeInsertNodeAction.prototype.type;
    /** @type {?} */
    TreeInsertNodeAction.prototype.payload;
}
var TreeLoadNodesAction = /** @class */ (function () {
    function TreeLoadNodesAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD;
    }
    return TreeLoadNodesAction;
}());
export { TreeLoadNodesAction };
if (false) {
    /** @type {?} */
    TreeLoadNodesAction.prototype.type;
    /** @type {?} */
    TreeLoadNodesAction.prototype.payload;
}
var TreeLoadNodesErrorAction = /** @class */ (function () {
    function TreeLoadNodesErrorAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_ERROR;
    }
    return TreeLoadNodesErrorAction;
}());
export { TreeLoadNodesErrorAction };
if (false) {
    /** @type {?} */
    TreeLoadNodesErrorAction.prototype.type;
    /** @type {?} */
    TreeLoadNodesErrorAction.prototype.payload;
}
var TreeLoadNodesSuccessAction = /** @class */ (function () {
    function TreeLoadNodesSuccessAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_SUCCESS;
    }
    return TreeLoadNodesSuccessAction;
}());
export { TreeLoadNodesSuccessAction };
if (false) {
    /** @type {?} */
    TreeLoadNodesSuccessAction.prototype.type;
    /** @type {?} */
    TreeLoadNodesSuccessAction.prototype.payload;
}
var TreeLoadPathAction = /** @class */ (function () {
    function TreeLoadPathAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_PATH;
    }
    return TreeLoadPathAction;
}());
export { TreeLoadPathAction };
if (false) {
    /** @type {?} */
    TreeLoadPathAction.prototype.type;
    /** @type {?} */
    TreeLoadPathAction.prototype.payload;
}
var TreeMarkAsFullyLoadedAction = /** @class */ (function () {
    function TreeMarkAsFullyLoadedAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MARK_AS_FULLY_LOADED;
    }
    return TreeMarkAsFullyLoadedAction;
}());
export { TreeMarkAsFullyLoadedAction };
if (false) {
    /** @type {?} */
    TreeMarkAsFullyLoadedAction.prototype.type;
    /** @type {?} */
    TreeMarkAsFullyLoadedAction.prototype.payload;
}
var TreeMoveNodeAction = /** @class */ (function () {
    function TreeMoveNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE;
    }
    return TreeMoveNodeAction;
}());
export { TreeMoveNodeAction };
if (false) {
    /** @type {?} */
    TreeMoveNodeAction.prototype.type;
    /** @type {?} */
    TreeMoveNodeAction.prototype.payload;
}
var TreeMoveNodeErrorAction = /** @class */ (function () {
    function TreeMoveNodeErrorAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE_ERROR;
    }
    return TreeMoveNodeErrorAction;
}());
export { TreeMoveNodeErrorAction };
if (false) {
    /** @type {?} */
    TreeMoveNodeErrorAction.prototype.type;
    /** @type {?} */
    TreeMoveNodeErrorAction.prototype.payload;
}
var TreeMoveNodeSuccessAction = /** @class */ (function () {
    function TreeMoveNodeSuccessAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE_SUCCESS;
    }
    return TreeMoveNodeSuccessAction;
}());
export { TreeMoveNodeSuccessAction };
if (false) {
    /** @type {?} */
    TreeMoveNodeSuccessAction.prototype.type;
    /** @type {?} */
    TreeMoveNodeSuccessAction.prototype.payload;
}
var TreeRegisterAction = /** @class */ (function () {
    function TreeRegisterAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_REGISTER;
    }
    return TreeRegisterAction;
}());
export { TreeRegisterAction };
if (false) {
    /** @type {?} */
    TreeRegisterAction.prototype.type;
    /** @type {?} */
    TreeRegisterAction.prototype.payload;
}
var TreeSaveNodeAction = /** @class */ (function () {
    function TreeSaveNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE;
    }
    return TreeSaveNodeAction;
}());
export { TreeSaveNodeAction };
if (false) {
    /** @type {?} */
    TreeSaveNodeAction.prototype.type;
    /** @type {?} */
    TreeSaveNodeAction.prototype.payload;
}
var TreeSaveNodeErrorAction = /** @class */ (function () {
    function TreeSaveNodeErrorAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE_ERROR;
    }
    return TreeSaveNodeErrorAction;
}());
export { TreeSaveNodeErrorAction };
if (false) {
    /** @type {?} */
    TreeSaveNodeErrorAction.prototype.type;
    /** @type {?} */
    TreeSaveNodeErrorAction.prototype.payload;
}
var TreeSaveNodeSuccessAction = /** @class */ (function () {
    function TreeSaveNodeSuccessAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE_SUCCESS;
    }
    return TreeSaveNodeSuccessAction;
}());
export { TreeSaveNodeSuccessAction };
if (false) {
    /** @type {?} */
    TreeSaveNodeSuccessAction.prototype.type;
    /** @type {?} */
    TreeSaveNodeSuccessAction.prototype.payload;
}
var TreeSelectNodeAction = /** @class */ (function () {
    function TreeSelectNodeAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SELECT_NODE;
    }
    return TreeSelectNodeAction;
}());
export { TreeSelectNodeAction };
if (false) {
    /** @type {?} */
    TreeSelectNodeAction.prototype.type;
    /** @type {?} */
    TreeSelectNodeAction.prototype.payload;
}
var TreeSetAllNodesAction = /** @class */ (function () {
    function TreeSetAllNodesAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SET_ALL_NODES;
    }
    return TreeSetAllNodesAction;
}());
export { TreeSetAllNodesAction };
if (false) {
    /** @type {?} */
    TreeSetAllNodesAction.prototype.type;
    /** @type {?} */
    TreeSetAllNodesAction.prototype.payload;
}
var TreeSetConfigurationAction = /** @class */ (function () {
    function TreeSetConfigurationAction(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SET_CONFIGURATION;
    }
    return TreeSetConfigurationAction;
}());
export { TreeSetConfigurationAction };
if (false) {
    /** @type {?} */
    TreeSetConfigurationAction.prototype.type;
    /** @type {?} */
    TreeSetConfigurationAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZUFjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSxnQkFBaUIsZ0JBQWdCO0lBQ2pDLHdCQUF5Qix3QkFBd0I7SUFDakQsc0JBQXVCLHNCQUFzQjtJQUM3QyxrQkFBbUIsa0JBQWtCO0lBQ3JDLDBCQUEyQiwwQkFBMEI7SUFDckQsd0JBQXlCLHdCQUF3QjtJQUNqRCxzQkFBdUIsc0JBQXNCO0lBQzdDLG9CQUFxQixvQkFBb0I7SUFDekMsa0JBQW1CLGtCQUFrQjtJQUNyQyxrQkFBbUIsa0JBQWtCO0lBQ3JDLFdBQVksV0FBVztJQUN2QixnQkFBaUIsZ0JBQWdCO0lBQ2pDLG1CQUFvQixtQkFBbUI7SUFDdkMsaUJBQWtCLGlCQUFpQjtJQUNuQywyQkFBNEIsMkJBQTJCO0lBQ3ZELGdCQUFpQixnQkFBZ0I7SUFDakMsd0JBQXlCLHdCQUF3QjtJQUNqRCxzQkFBdUIsc0JBQXNCO0lBQzdDLGVBQWdCLGVBQWU7SUFDL0Isa0JBQW1CLGtCQUFrQjtJQUNyQyxvQkFBcUIsb0JBQW9CO0lBQ3pDLHdCQUF5Qix3QkFBd0I7OztBQUduRDtJQUdFLGdDQUEwQixPQUF1QztRQUF2QyxZQUFPLEdBQVAsT0FBTyxDQUFnQztRQUZ4RCxTQUFJLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDO0lBSW5ELENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsc0NBQW1EOztJQUVoQyx5Q0FBOEM7O0FBS25FO0lBR0UsOEJBQTBCLE9BQTZDO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQXNDO1FBRjlELFNBQUksR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFJakQsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxvQ0FB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QUMsQUFORCxJQU1DOzs7O0lBTEMseUNBQXVEOztJQUVwQyw0Q0FBeUU7O0FBSzlGO0lBR0UsOEJBQTBCLE9BQTZDO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQXNDO1FBRjlELFNBQUksR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFJakQsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxvQ0FBaUQ7O0lBRTlCLHVDQUFvRDs7QUFLekU7SUFHRSwrQkFBMEIsT0FBZ0Q7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFGakUsU0FBSSxHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztJQUluRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLHFDQUFtRDs7SUFFaEMsd0NBQXVEOztBQUs1RTtJQUdFLG9DQUEwQixPQUEwRDtRQUExRCxZQUFPLEdBQVAsT0FBTyxDQUFtRDtRQUYzRSxTQUFJLEdBQUcsZUFBZSxDQUFDLHNCQUFzQixDQUFDO0lBSXZELENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsMENBQXVEOztJQUVwQyw2Q0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lPdXRlck5vZGV9IGZyb20gJy4uL2ludGVyZmFjZXMvSU91dGVyTm9kZSc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBlbnVtIFRyZWVBY3Rpb25UeXBlcyB7XG4gIFRSRUVfU0FWRV9OT0RFID0gJ1RSRUVfU0FWRV9OT0RFJyxcbiAgVFJFRV9TQVZFX05PREVfU1VDQ0VTUyA9ICdUUkVFX1NBVkVfTk9ERV9TVUNDRVNTJyxcbiAgVFJFRV9TQVZFX05PREVfRVJST1IgPSAnVFJFRV9TQVZFX05PREVfRVJST1InLFxuICBUUkVFX0RFTEVURV9OT0RFID0gJ1RSRUVfREVMRVRFX05PREUnLFxuICBUUkVFX0RFTEVURV9OT0RFX1NVQ0NFU1MgPSAnVFJFRV9ERUxFVEVfTk9ERV9TVUNDRVNTJyxcbiAgVFJFRV9ERUxFVEVfTk9ERV9FUlJPUiA9ICdUUkVFX0RFTEVURV9OT0RFX0VSUk9SJyxcbiAgVFJFRV9FRElUX05PREVfU1RBUlQgPSAnVFJFRV9FRElUX05PREVfU1RBUlQnLFxuICBUUkVFX0NPTExBUFNFX05PREUgPSAnVFJFRV9DT0xMQVBTRV9OT0RFJyxcbiAgVFJFRV9FWFBBTkRfTk9ERSA9ICdUUkVFX0VYUEFORF9OT0RFJyxcbiAgVFJFRV9JTlNFUlRfTk9ERSA9ICdUUkVFX0lOU0VSVF9OT0RFJyxcbiAgVFJFRV9MT0FEID0gJ1RSRUVfTE9BRCcsXG4gIFRSRUVfTE9BRF9QQVRIID0gJ1RSRUVfTE9BRF9QQVRIJyxcbiAgVFJFRV9MT0FEX1NVQ0NFU1MgPSAnVFJFRV9MT0FEX1NVQ0NFU1MnLFxuICBUUkVFX0xPQURfRVJST1IgPSAnVFJFRV9MT0FEX0VSUk9SJyxcbiAgVFJFRV9NQVJLX0FTX0ZVTExZX0xPQURFRCA9ICdUUkVFX01BUktfQVNfRlVMTFlfTE9BREVEJyxcbiAgVFJFRV9NT1ZFX05PREUgPSAnVFJFRV9NT1ZFX05PREUnLFxuICBUUkVFX01PVkVfTk9ERV9TVUNDRVNTID0gJ1RSRUVfTU9WRV9OT0RFX1NVQ0NFU1MnLFxuICBUUkVFX01PVkVfTk9ERV9FUlJPUiA9ICdUUkVFX01PVkVfTk9ERV9FUlJPUicsXG4gIFRSRUVfUkVHSVNURVIgPSAnVFJFRV9SRUdJU1RFUicsXG4gIFRSRUVfU0VMRUNUX05PREUgPSAnVFJFRV9TRUxFQ1RfTk9ERScsXG4gIFRSRUVfU0VUX0FMTF9OT0RFUyA9ICdUUkVFX1NFVF9BTExfTk9ERVMnLFxuICBUUkVFX1NFVF9DT05GSUdVUkFUSU9OID0gJ1RSRUVfU0VUX0NPTkZJR1VSQVRJT04nXG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlQ29sbGFwc2VOb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0NPTExBUFNFX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlRGVsZXRlTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVEZWxldGVOb2RlRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfREVMRVRFX05PREVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfREVMRVRFX05PREVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVFZGl0Tm9kZVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0VESVRfTk9ERV9TVEFSVDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUV4cGFuZE5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfRVhQQU5EX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlSW5zZXJ0Tm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9JTlNFUlRfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHBhcmVudElkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVMb2FkTm9kZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVMb2FkTm9kZXNFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX0VSUk9SO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRF9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZywgbm9kZXM6IElPdXRlck5vZGVbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUxvYWRQYXRoQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQURfUEFUSDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkczogc3RyaW5nW10gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NQVJLX0FTX0ZVTExZX0xPQURFRDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVNb3ZlTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBzb3VyY2VPZkRyb3BwZWREYXRhOiBzdHJpbmcsIG9sZE5vZGU6IGFueSwgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1vdmVOb2RlRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTU9WRV9OT0RFX0VSUk9SO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgc291cmNlOiBJT3V0ZXJOb2RlLCB0YXJnZXQ6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTU9WRV9OT0RFX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBzb3VyY2U6IElPdXRlck5vZGUsIHRhcmdldDogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVJlZ2lzdGVyQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1JFR0lTVEVSO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgc2lsZW50OiBib29sZWFuLCBub2RlczogSU91dGVyTm9kZVtdIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2F2ZU5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0FWRV9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVNhdmVOb2RlRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0FWRV9OT0RFX0VSUk9SO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUsIG9sZE5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTZWxlY3ROb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFTEVDVF9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVNldEFsbE5vZGVzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFVF9BTExfTk9ERVM7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlczogSU91dGVyTm9kZVtdIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2V0Q29uZmlndXJhdGlvbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TRVRfQ09ORklHVVJBVElPTjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFRyZWVBY3Rpb24gPVxuICBUcmVlQ29sbGFwc2VOb2RlQWN0aW9uXG4gIHwgVHJlZURlbGV0ZU5vZGVBY3Rpb25cbiAgfCBUcmVlRGVsZXRlTm9kZUVycm9yQWN0aW9uXG4gIHwgVHJlZURlbGV0ZU5vZGVTdWNjZXNzQWN0aW9uXG4gIHwgVHJlZUVkaXROb2RlU3RhcnRBY3Rpb25cbiAgfCBUcmVlRXhwYW5kTm9kZUFjdGlvblxuICB8IFRyZWVJbnNlcnROb2RlQWN0aW9uXG4gIHwgVHJlZUxvYWROb2Rlc0FjdGlvblxuICB8IFRyZWVMb2FkTm9kZXNFcnJvckFjdGlvblxuICB8IFRyZWVMb2FkTm9kZXNTdWNjZXNzQWN0aW9uXG4gIHwgVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlTG9hZFBhdGhBY3Rpb25cbiAgfCBUcmVlTWFya0FzRnVsbHlMb2FkZWRBY3Rpb25cbiAgfCBUcmVlTW92ZU5vZGVBY3Rpb25cbiAgfCBUcmVlTW92ZU5vZGVFcnJvckFjdGlvblxuICB8IFRyZWVNb3ZlTm9kZVN1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlUmVnaXN0ZXJBY3Rpb25cbiAgfCBUcmVlU2F2ZU5vZGVBY3Rpb25cbiAgfCBUcmVlU2F2ZU5vZGVFcnJvckFjdGlvblxuICB8IFRyZWVTYXZlTm9kZVN1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlU2VsZWN0Tm9kZUFjdGlvblxuICB8IFRyZWVTZXRBbGxOb2Rlc0FjdGlvblxuICB8IFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uXG4gIDtcbiJdfQ==