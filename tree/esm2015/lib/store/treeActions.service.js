/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const TreeActionTypes = {
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
export class TreeCollapseNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_COLLAPSE_NODE;
    }
}
if (false) {
    /** @type {?} */
    TreeCollapseNodeAction.prototype.type;
    /** @type {?} */
    TreeCollapseNodeAction.prototype.payload;
}
export class TreeDeleteNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE;
    }
}
if (false) {
    /** @type {?} */
    TreeDeleteNodeAction.prototype.type;
    /** @type {?} */
    TreeDeleteNodeAction.prototype.payload;
}
export class TreeDeleteNodeErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE_ERROR;
    }
}
if (false) {
    /** @type {?} */
    TreeDeleteNodeErrorAction.prototype.type;
    /** @type {?} */
    TreeDeleteNodeErrorAction.prototype.payload;
}
export class TreeDeleteNodeSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_DELETE_NODE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    TreeDeleteNodeSuccessAction.prototype.type;
    /** @type {?} */
    TreeDeleteNodeSuccessAction.prototype.payload;
}
export class TreeEditNodeStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_EDIT_NODE_START;
    }
}
if (false) {
    /** @type {?} */
    TreeEditNodeStartAction.prototype.type;
    /** @type {?} */
    TreeEditNodeStartAction.prototype.payload;
}
export class TreeExpandNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_EXPAND_NODE;
    }
}
if (false) {
    /** @type {?} */
    TreeExpandNodeAction.prototype.type;
    /** @type {?} */
    TreeExpandNodeAction.prototype.payload;
}
export class TreeInsertNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_INSERT_NODE;
    }
}
if (false) {
    /** @type {?} */
    TreeInsertNodeAction.prototype.type;
    /** @type {?} */
    TreeInsertNodeAction.prototype.payload;
}
export class TreeLoadNodesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD;
    }
}
if (false) {
    /** @type {?} */
    TreeLoadNodesAction.prototype.type;
    /** @type {?} */
    TreeLoadNodesAction.prototype.payload;
}
export class TreeLoadNodesErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_ERROR;
    }
}
if (false) {
    /** @type {?} */
    TreeLoadNodesErrorAction.prototype.type;
    /** @type {?} */
    TreeLoadNodesErrorAction.prototype.payload;
}
export class TreeLoadNodesSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    TreeLoadNodesSuccessAction.prototype.type;
    /** @type {?} */
    TreeLoadNodesSuccessAction.prototype.payload;
}
export class TreeLoadPathAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_LOAD_PATH;
    }
}
if (false) {
    /** @type {?} */
    TreeLoadPathAction.prototype.type;
    /** @type {?} */
    TreeLoadPathAction.prototype.payload;
}
export class TreeMarkAsFullyLoadedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MARK_AS_FULLY_LOADED;
    }
}
if (false) {
    /** @type {?} */
    TreeMarkAsFullyLoadedAction.prototype.type;
    /** @type {?} */
    TreeMarkAsFullyLoadedAction.prototype.payload;
}
export class TreeMoveNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE;
    }
}
if (false) {
    /** @type {?} */
    TreeMoveNodeAction.prototype.type;
    /** @type {?} */
    TreeMoveNodeAction.prototype.payload;
}
export class TreeMoveNodeErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE_ERROR;
    }
}
if (false) {
    /** @type {?} */
    TreeMoveNodeErrorAction.prototype.type;
    /** @type {?} */
    TreeMoveNodeErrorAction.prototype.payload;
}
export class TreeMoveNodeSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_MOVE_NODE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    TreeMoveNodeSuccessAction.prototype.type;
    /** @type {?} */
    TreeMoveNodeSuccessAction.prototype.payload;
}
export class TreeRegisterAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_REGISTER;
    }
}
if (false) {
    /** @type {?} */
    TreeRegisterAction.prototype.type;
    /** @type {?} */
    TreeRegisterAction.prototype.payload;
}
export class TreeSaveNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE;
    }
}
if (false) {
    /** @type {?} */
    TreeSaveNodeAction.prototype.type;
    /** @type {?} */
    TreeSaveNodeAction.prototype.payload;
}
export class TreeSaveNodeErrorAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE_ERROR;
    }
}
if (false) {
    /** @type {?} */
    TreeSaveNodeErrorAction.prototype.type;
    /** @type {?} */
    TreeSaveNodeErrorAction.prototype.payload;
}
export class TreeSaveNodeSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SAVE_NODE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    TreeSaveNodeSuccessAction.prototype.type;
    /** @type {?} */
    TreeSaveNodeSuccessAction.prototype.payload;
}
export class TreeSelectNodeAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SELECT_NODE;
    }
}
if (false) {
    /** @type {?} */
    TreeSelectNodeAction.prototype.type;
    /** @type {?} */
    TreeSelectNodeAction.prototype.payload;
}
export class TreeSetAllNodesAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SET_ALL_NODES;
    }
}
if (false) {
    /** @type {?} */
    TreeSetAllNodesAction.prototype.type;
    /** @type {?} */
    TreeSetAllNodesAction.prototype.payload;
}
export class TreeSetConfigurationAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TreeActionTypes.TREE_SET_CONFIGURATION;
    }
}
if (false) {
    /** @type {?} */
    TreeSetConfigurationAction.prototype.type;
    /** @type {?} */
    TreeSetConfigurationAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZUFjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLXRyZWUvIiwic291cmNlcyI6WyJsaWIvc3RvcmUvdHJlZUFjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSxnQkFBaUIsZ0JBQWdCO0lBQ2pDLHdCQUF5Qix3QkFBd0I7SUFDakQsc0JBQXVCLHNCQUFzQjtJQUM3QyxrQkFBbUIsa0JBQWtCO0lBQ3JDLDBCQUEyQiwwQkFBMEI7SUFDckQsd0JBQXlCLHdCQUF3QjtJQUNqRCxzQkFBdUIsc0JBQXNCO0lBQzdDLG9CQUFxQixvQkFBb0I7SUFDekMsa0JBQW1CLGtCQUFrQjtJQUNyQyxrQkFBbUIsa0JBQWtCO0lBQ3JDLFdBQVksV0FBVztJQUN2QixnQkFBaUIsZ0JBQWdCO0lBQ2pDLG1CQUFvQixtQkFBbUI7SUFDdkMsaUJBQWtCLGlCQUFpQjtJQUNuQywyQkFBNEIsMkJBQTJCO0lBQ3ZELGdCQUFpQixnQkFBZ0I7SUFDakMsd0JBQXlCLHdCQUF3QjtJQUNqRCxzQkFBdUIsc0JBQXNCO0lBQzdDLGVBQWdCLGVBQWU7SUFDL0Isa0JBQW1CLGtCQUFrQjtJQUNyQyxvQkFBcUIsb0JBQW9CO0lBQ3pDLHdCQUF5Qix3QkFBd0I7OztBQUduRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQTBCLE9BQXVDO1FBQXZDLFlBQU8sR0FBUCxPQUFPLENBQWdDO1FBRnhELFNBQUksR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUM7SUFJbkQsQ0FBQztDQUNGOzs7SUFMQyxzQ0FBbUQ7O0lBRWhDLHlDQUE4Qzs7QUFLbkUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUcvQixZQUEwQixPQUE2QztRQUE3QyxZQUFPLEdBQVAsT0FBTyxDQUFzQztRQUY5RCxTQUFJLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDO0lBSWpELENBQUM7Q0FDRjs7O0lBTEMsb0NBQWlEOztJQUU5Qix1Q0FB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ZSxDQUFDLGdCQUFnQixDQUFDO0lBSWpELENBQUM7Q0FDRjs7O0lBTEMsb0NBQWlEOztJQUU5Qix1Q0FBb0Q7O0FBS3pFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFHaEMsWUFBMEIsT0FBZ0Q7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFGakUsU0FBSSxHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztJQUluRCxDQUFDO0NBQ0Y7OztJQUxDLHFDQUFtRDs7SUFFaEMsd0NBQXVEOztBQUs1RSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR3JDLFlBQTBCLE9BQTBEO1FBQTFELFlBQU8sR0FBUCxPQUFPLENBQW1EO1FBRjNFLFNBQUksR0FBRyxlQUFlLENBQUMsc0JBQXNCLENBQUM7SUFJdkQsQ0FBQztDQUNGOzs7SUFMQywwQ0FBdUQ7O0lBRXBDLDZDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7QWN0aW9ufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0lDb25maWd1cmF0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lDb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGVudW0gVHJlZUFjdGlvblR5cGVzIHtcbiAgVFJFRV9TQVZFX05PREUgPSAnVFJFRV9TQVZFX05PREUnLFxuICBUUkVFX1NBVkVfTk9ERV9TVUNDRVNTID0gJ1RSRUVfU0FWRV9OT0RFX1NVQ0NFU1MnLFxuICBUUkVFX1NBVkVfTk9ERV9FUlJPUiA9ICdUUkVFX1NBVkVfTk9ERV9FUlJPUicsXG4gIFRSRUVfREVMRVRFX05PREUgPSAnVFJFRV9ERUxFVEVfTk9ERScsXG4gIFRSRUVfREVMRVRFX05PREVfU1VDQ0VTUyA9ICdUUkVFX0RFTEVURV9OT0RFX1NVQ0NFU1MnLFxuICBUUkVFX0RFTEVURV9OT0RFX0VSUk9SID0gJ1RSRUVfREVMRVRFX05PREVfRVJST1InLFxuICBUUkVFX0VESVRfTk9ERV9TVEFSVCA9ICdUUkVFX0VESVRfTk9ERV9TVEFSVCcsXG4gIFRSRUVfQ09MTEFQU0VfTk9ERSA9ICdUUkVFX0NPTExBUFNFX05PREUnLFxuICBUUkVFX0VYUEFORF9OT0RFID0gJ1RSRUVfRVhQQU5EX05PREUnLFxuICBUUkVFX0lOU0VSVF9OT0RFID0gJ1RSRUVfSU5TRVJUX05PREUnLFxuICBUUkVFX0xPQUQgPSAnVFJFRV9MT0FEJyxcbiAgVFJFRV9MT0FEX1BBVEggPSAnVFJFRV9MT0FEX1BBVEgnLFxuICBUUkVFX0xPQURfU1VDQ0VTUyA9ICdUUkVFX0xPQURfU1VDQ0VTUycsXG4gIFRSRUVfTE9BRF9FUlJPUiA9ICdUUkVFX0xPQURfRVJST1InLFxuICBUUkVFX01BUktfQVNfRlVMTFlfTE9BREVEID0gJ1RSRUVfTUFSS19BU19GVUxMWV9MT0FERUQnLFxuICBUUkVFX01PVkVfTk9ERSA9ICdUUkVFX01PVkVfTk9ERScsXG4gIFRSRUVfTU9WRV9OT0RFX1NVQ0NFU1MgPSAnVFJFRV9NT1ZFX05PREVfU1VDQ0VTUycsXG4gIFRSRUVfTU9WRV9OT0RFX0VSUk9SID0gJ1RSRUVfTU9WRV9OT0RFX0VSUk9SJyxcbiAgVFJFRV9SRUdJU1RFUiA9ICdUUkVFX1JFR0lTVEVSJyxcbiAgVFJFRV9TRUxFQ1RfTk9ERSA9ICdUUkVFX1NFTEVDVF9OT0RFJyxcbiAgVFJFRV9TRVRfQUxMX05PREVTID0gJ1RSRUVfU0VUX0FMTF9OT0RFUycsXG4gIFRSRUVfU0VUX0NPTkZJR1VSQVRJT04gPSAnVFJFRV9TRVRfQ09ORklHVVJBVElPTidcbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfQ09MTEFQU0VfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVEZWxldGVOb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0RFTEVURV9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZURlbGV0ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERV9FUlJPUjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGU6IElPdXRlck5vZGUgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVEZWxldGVOb2RlU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9ERUxFVEVfTk9ERV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUVkaXROb2RlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfRURJVF9OT0RFX1NUQVJUO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlRXhwYW5kTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9FWFBBTkRfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcgfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVJbnNlcnROb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0lOU0VSVF9OT0RFO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgcGFyZW50SWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUxvYWROb2Rlc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZUxvYWROb2Rlc0Vycm9yQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX0xPQURfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9MT0FEX1NVQ0NFU1M7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBpZDogc3RyaW5nLCBub2RlczogSU91dGVyTm9kZVtdIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTG9hZFBhdGhBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfTE9BRF9QQVRIO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgaWRzOiBzdHJpbmdbXSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1hcmtBc0Z1bGx5TG9hZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX01BUktfQVNfRlVMTFlfTE9BREVEO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZyB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1vdmVOb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX01PVkVfTk9ERTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHNvdXJjZU9mRHJvcHBlZERhdGE6IHN0cmluZywgb2xkTm9kZTogYW55LCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTW92ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBzb3VyY2U6IElPdXRlck5vZGUsIHRhcmdldDogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9NT1ZFX05PREVfU1VDQ0VTUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIHNvdXJjZTogSU91dGVyTm9kZSwgdGFyZ2V0OiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlUmVnaXN0ZXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfUkVHSVNURVI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBzaWxlbnQ6IGJvb2xlYW4sIG5vZGVzOiBJT3V0ZXJOb2RlW10gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTYXZlTm9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2F2ZU5vZGVFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBUcmVlQWN0aW9uVHlwZXMuVFJFRV9TQVZFX05PREVfRVJST1I7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2F2ZU5vZGVTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NBVkVfTk9ERV9TVUNDRVNTO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgbm9kZTogSU91dGVyTm9kZSwgb2xkTm9kZTogSU91dGVyTm9kZSB9KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVNlbGVjdE5vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VMRUNUX05PREU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRyZWVJZDogc3RyaW5nLCBub2RlOiBJT3V0ZXJOb2RlIH0pIHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlU2V0QWxsTm9kZXNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVHJlZUFjdGlvblR5cGVzLlRSRUVfU0VUX0FMTF9OT0RFUztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHJlZUlkOiBzdHJpbmcsIG5vZGVzOiBJT3V0ZXJOb2RlW10gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVTZXRDb25maWd1cmF0aW9uQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRyZWVBY3Rpb25UeXBlcy5UUkVFX1NFVF9DT05GSUdVUkFUSU9OO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0cmVlSWQ6IHN0cmluZywgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24gfSkge1xuXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVHJlZUFjdGlvbiA9XG4gIFRyZWVDb2xsYXBzZU5vZGVBY3Rpb25cbiAgfCBUcmVlRGVsZXRlTm9kZUFjdGlvblxuICB8IFRyZWVEZWxldGVOb2RlRXJyb3JBY3Rpb25cbiAgfCBUcmVlRGVsZXRlTm9kZVN1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlRWRpdE5vZGVTdGFydEFjdGlvblxuICB8IFRyZWVFeHBhbmROb2RlQWN0aW9uXG4gIHwgVHJlZUluc2VydE5vZGVBY3Rpb25cbiAgfCBUcmVlTG9hZE5vZGVzQWN0aW9uXG4gIHwgVHJlZUxvYWROb2Rlc0Vycm9yQWN0aW9uXG4gIHwgVHJlZUxvYWROb2Rlc1N1Y2Nlc3NBY3Rpb25cbiAgfCBUcmVlTG9hZE5vZGVzU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVMb2FkUGF0aEFjdGlvblxuICB8IFRyZWVNYXJrQXNGdWxseUxvYWRlZEFjdGlvblxuICB8IFRyZWVNb3ZlTm9kZUFjdGlvblxuICB8IFRyZWVNb3ZlTm9kZUVycm9yQWN0aW9uXG4gIHwgVHJlZU1vdmVOb2RlU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVSZWdpc3RlckFjdGlvblxuICB8IFRyZWVTYXZlTm9kZUFjdGlvblxuICB8IFRyZWVTYXZlTm9kZUVycm9yQWN0aW9uXG4gIHwgVHJlZVNhdmVOb2RlU3VjY2Vzc0FjdGlvblxuICB8IFRyZWVTZWxlY3ROb2RlQWN0aW9uXG4gIHwgVHJlZVNldEFsbE5vZGVzQWN0aW9uXG4gIHwgVHJlZVNldENvbmZpZ3VyYXRpb25BY3Rpb25cbiAgO1xuIl19