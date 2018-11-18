import { IOuterNode } from '../interfaces/IOuterNode';
import { IConfiguration } from '../interfaces/IConfiguration';
export interface ITreeNodes {
    [key: string]: IOuterNode;
}
export interface ITreeConfiguration extends IConfiguration {
    isFullyLoaded: boolean;
}
export interface ITreeData {
    nodes: {
        entities: ITreeNodes;
        previouslySelected: string;
        selected: string;
        rootNodes: string[];
        expanded: string[];
    };
    configuration: ITreeConfiguration;
}
export interface ITreeState {
    [key: string]: ITreeData;
}
export interface ITreeActionPayload {
    treeId: string;
    url?: string;
    id?: string | null;
    node?: IOuterNode;
    nodes?: IOuterNode[];
    oldNode?: any;
    source?: IOuterNode;
    target?: IOuterNode;
    sourceOfDroppedData?: string;
    ids?: string[];
    silent?: boolean;
    hasLoadedNodes?: boolean;
}
