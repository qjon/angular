import { IOuterNode } from '../interfaces/IOuterNode';
import { Action } from '@ngrx/store';
import { IConfiguration } from '../interfaces/IConfiguration';
export declare enum TreeActionTypes {
    TREE_SAVE_NODE = "TREE_SAVE_NODE",
    TREE_SAVE_NODE_SUCCESS = "TREE_SAVE_NODE_SUCCESS",
    TREE_SAVE_NODE_ERROR = "TREE_SAVE_NODE_ERROR",
    TREE_DELETE_NODE = "TREE_DELETE_NODE",
    TREE_DELETE_NODE_SUCCESS = "TREE_DELETE_NODE_SUCCESS",
    TREE_DELETE_NODE_ERROR = "TREE_DELETE_NODE_ERROR",
    TREE_EDIT_NODE_START = "TREE_EDIT_NODE_START",
    TREE_COLLAPSE_NODE = "TREE_COLLAPSE_NODE",
    TREE_EXPAND_NODE = "TREE_EXPAND_NODE",
    TREE_INSERT_NODE = "TREE_INSERT_NODE",
    TREE_LOAD = "TREE_LOAD",
    TREE_LOAD_PATH = "TREE_LOAD_PATH",
    TREE_LOAD_SUCCESS = "TREE_LOAD_SUCCESS",
    TREE_LOAD_ERROR = "TREE_LOAD_ERROR",
    TREE_MARK_AS_FULLY_LOADED = "TREE_MARK_AS_FULLY_LOADED",
    TREE_MOVE_NODE = "TREE_MOVE_NODE",
    TREE_MOVE_NODE_SUCCESS = "TREE_MOVE_NODE_SUCCESS",
    TREE_MOVE_NODE_ERROR = "TREE_MOVE_NODE_ERROR",
    TREE_REGISTER = "TREE_REGISTER",
    TREE_SELECT_NODE = "TREE_SELECT_NODE",
    TREE_SET_ALL_NODES = "TREE_SET_ALL_NODES",
    TREE_SET_CONFIGURATION = "TREE_SET_CONFIGURATION"
}
export declare class TreeCollapseNodeAction implements Action {
    payload: {
        treeId: string;
        id: string;
    };
    readonly type = TreeActionTypes.TREE_COLLAPSE_NODE;
    constructor(payload: {
        treeId: string;
        id: string;
    });
}
export declare class TreeDeleteNodeAction implements Action {
    payload: {
        treeId: string;
        node: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_DELETE_NODE;
    constructor(payload: {
        treeId: string;
        node: IOuterNode;
    });
}
export declare class TreeDeleteNodeErrorAction implements Action {
    payload: {
        treeId: string;
        node: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_DELETE_NODE_ERROR;
    constructor(payload: {
        treeId: string;
        node: IOuterNode;
    });
}
export declare class TreeDeleteNodeSuccessAction implements Action {
    payload: {
        treeId: string;
        node: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_DELETE_NODE_SUCCESS;
    constructor(payload: {
        treeId: string;
        node: IOuterNode;
    });
}
export declare class TreeEditNodeStartAction implements Action {
    payload: {
        node: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_EDIT_NODE_START;
    constructor(payload: {
        node: IOuterNode;
    });
}
export declare class TreeExpandNodeAction implements Action {
    payload: {
        treeId: string;
        id: string;
    };
    readonly type = TreeActionTypes.TREE_EXPAND_NODE;
    constructor(payload: {
        treeId: string;
        id: string;
    });
}
export declare class TreeInsertNodeAction implements Action {
    payload: {
        treeId: string;
        parentId: string;
    };
    readonly type = TreeActionTypes.TREE_INSERT_NODE;
    constructor(payload: {
        treeId: string;
        parentId: string;
    });
}
export declare class TreeLoadNodesAction implements Action {
    payload: {
        treeId: string;
        id: string;
    };
    readonly type = TreeActionTypes.TREE_LOAD;
    constructor(payload: {
        treeId: string;
        id: string;
    });
}
export declare class TreeLoadNodesErrorAction implements Action {
    payload: {
        treeId: string;
        id: string;
    };
    readonly type = TreeActionTypes.TREE_LOAD_ERROR;
    constructor(payload: {
        treeId: string;
        id: string;
    });
}
export declare class TreeLoadNodesSuccessAction implements Action {
    payload: {
        treeId: string;
        id: string;
        nodes: IOuterNode[];
    };
    readonly type = TreeActionTypes.TREE_LOAD_SUCCESS;
    constructor(payload: {
        treeId: string;
        id: string;
        nodes: IOuterNode[];
    });
}
export declare class TreeLoadPathAction implements Action {
    payload: {
        treeId: string;
        ids: string[];
    };
    readonly type = TreeActionTypes.TREE_LOAD_PATH;
    constructor(payload: {
        treeId: string;
        ids: string[];
    });
}
export declare class TreeMarkAsFullyLoadedAction implements Action {
    payload: {
        treeId: string;
    };
    readonly type = TreeActionTypes.TREE_MARK_AS_FULLY_LOADED;
    constructor(payload: {
        treeId: string;
    });
}
export declare class TreeMoveNodeAction implements Action {
    payload: {
        treeId: string;
        sourceOfDroppedData: string;
        oldNode: any;
        node: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_MOVE_NODE;
    constructor(payload: {
        treeId: string;
        sourceOfDroppedData: string;
        oldNode: any;
        node: IOuterNode;
    });
}
export declare class TreeMoveNodeErrorAction implements Action {
    payload: {
        treeId: string;
        source: IOuterNode;
        target: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_MOVE_NODE_ERROR;
    constructor(payload: {
        treeId: string;
        source: IOuterNode;
        target: IOuterNode;
    });
}
export declare class TreeMoveNodeSuccessAction implements Action {
    payload: {
        treeId: string;
        source: IOuterNode;
        target: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_MOVE_NODE_SUCCESS;
    constructor(payload: {
        treeId: string;
        source: IOuterNode;
        target: IOuterNode;
    });
}
export declare class TreeRegisterAction implements Action {
    payload: {
        treeId: string;
        silent: boolean;
        nodes: IOuterNode[];
    };
    readonly type = TreeActionTypes.TREE_REGISTER;
    constructor(payload: {
        treeId: string;
        silent: boolean;
        nodes: IOuterNode[];
    });
}
export declare class TreeSaveNodeAction implements Action {
    payload: {
        treeId: string;
        node: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_SAVE_NODE;
    constructor(payload: {
        treeId: string;
        node: IOuterNode;
    });
}
export declare class TreeSaveNodeErrorAction implements Action {
    payload: {
        treeId: string;
        node: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_SAVE_NODE_ERROR;
    constructor(payload: {
        treeId: string;
        node: IOuterNode;
    });
}
export declare class TreeSaveNodeSuccessAction implements Action {
    payload: {
        treeId: string;
        node: IOuterNode;
        oldNode: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_SAVE_NODE_SUCCESS;
    constructor(payload: {
        treeId: string;
        node: IOuterNode;
        oldNode: IOuterNode;
    });
}
export declare class TreeSelectNodeAction implements Action {
    payload: {
        treeId: string;
        node: IOuterNode;
    };
    readonly type = TreeActionTypes.TREE_SELECT_NODE;
    constructor(payload: {
        treeId: string;
        node: IOuterNode;
    });
}
export declare class TreeSetAllNodesAction implements Action {
    payload: {
        treeId: string;
        nodes: IOuterNode[];
    };
    readonly type = TreeActionTypes.TREE_SET_ALL_NODES;
    constructor(payload: {
        treeId: string;
        nodes: IOuterNode[];
    });
}
export declare class TreeSetConfigurationAction implements Action {
    payload: {
        treeId: string;
        configuration: IConfiguration;
    };
    readonly type = TreeActionTypes.TREE_SET_CONFIGURATION;
    constructor(payload: {
        treeId: string;
        configuration: IConfiguration;
    });
}
export declare type TreeAction = TreeCollapseNodeAction | TreeDeleteNodeAction | TreeDeleteNodeErrorAction | TreeDeleteNodeSuccessAction | TreeEditNodeStartAction | TreeExpandNodeAction | TreeInsertNodeAction | TreeLoadNodesAction | TreeLoadNodesErrorAction | TreeLoadNodesSuccessAction | TreeLoadNodesSuccessAction | TreeLoadPathAction | TreeMarkAsFullyLoadedAction | TreeMoveNodeAction | TreeMoveNodeErrorAction | TreeMoveNodeSuccessAction | TreeRegisterAction | TreeSaveNodeAction | TreeSaveNodeErrorAction | TreeSaveNodeSuccessAction | TreeSelectNodeAction | TreeSetAllNodesAction | TreeSetConfigurationAction;
