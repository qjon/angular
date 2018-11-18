import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IOuterNode } from '../interfaces/IOuterNode';
import { IApiConfig } from '../IApiConfig.service';
import { HttpClient } from '@angular/common/http';
export interface INodeService {
    readonly treeId: string;
    load(nodeId: string): Observable<IOuterNode[]>;
    add(node: IOuterNode, parentNodeId: string | null): Observable<IOuterNode>;
    move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;
    update(node: IOuterNode): Observable<IOuterNode>;
    remove(nodeId: string): Observable<IOuterNode>;
    setAllNodes(nodes: IOuterNode[]): void;
}
export declare const NODE_SERVICE: InjectionToken<{}>;
export declare class NodeService implements INodeService {
    protected http: HttpClient;
    protected apiConfig: IApiConfig;
    readonly treeId: string;
    constructor(http: HttpClient);
    setAllNodes(nodes: IOuterNode[]): void;
    load(nodeId?: string): Observable<IOuterNode[]>;
    add(node: IOuterNode, parentNodeId?: string): Observable<IOuterNode>;
    move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;
    update(node: IOuterNode): Observable<IOuterNode>;
    remove(nodeId: string): Observable<IOuterNode>;
    protected getPath(type: string, nodeId: string, destNodeId?: string): string;
    protected replaceNodeId(url: string, nodeId: string): string;
    protected replaceDestNodeId(url: string, nodeId: string): string;
}
