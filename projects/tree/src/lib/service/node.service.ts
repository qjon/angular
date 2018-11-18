import {Injectable, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {IOuterNode} from '../interfaces/IOuterNode';
import {IApiConfig} from '../IApiConfig.service';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface INodeService {
  readonly treeId: string;

  load(nodeId: string): Observable<IOuterNode[]>;

  add(node: IOuterNode, parentNodeId: string | null): Observable<IOuterNode>;

  move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;

  update(node: IOuterNode): Observable<IOuterNode>;

  remove(nodeId: string): Observable<IOuterNode>;

  setAllNodes(nodes: IOuterNode[]): void;
}

export const NODE_SERVICE = new InjectionToken('NODE_SERVICE');

@Injectable()
export class NodeService implements INodeService {
  protected apiConfig: IApiConfig = {
    addUrl: '/api/nodes',
    getUrl: '/api/nodes',
    moveUrl: '/api/nodes/move',
    updateUrl: '/api/nodes',
    removeUrl: '/api/nodes',
  };

  public get treeId(): string {
    return 'tree';
  }

  public constructor(protected http: HttpClient) {
  }

  public setAllNodes(nodes: IOuterNode[]): void {

  }

  public load(nodeId = ''): Observable<IOuterNode[]> {
    const params = new HttpParams().set('nodeId', nodeId);

    return this.http.get<IOuterNode[]>(this.getPath('GET', nodeId), {params});
  }


  public add(node: IOuterNode, parentNodeId: string = null): Observable<IOuterNode> {
    return this.http.post<IOuterNode>(this.getPath('CREATE', parentNodeId), {
      node: node,
      parentNodeId: parentNodeId
    });
  }

  public move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode> {
    const srcId = srcNode.id;
    const targetId = targetNode ? targetNode.id : null;

    return this.http.put<IOuterNode>(this.getPath('MOVE', srcId, targetId), {source: srcId, target: targetId});
  }

  public update(node: IOuterNode): Observable<IOuterNode> {
    return this.http.put<IOuterNode>(this.getPath('UPDATE', node.id), node);
  }

  public remove(nodeId: string): Observable<IOuterNode> {
    const params = new HttpParams().set('nodeId', nodeId);

    return this.http.delete<IOuterNode>(this.getPath('REMOVE', nodeId), {params});
  }

  protected getPath(type: string, nodeId: string, destNodeId: string = null) {
    if (!this.apiConfig) {
      throw new Error('No API configuration for Tree');
    }

    const urlMap = {
      'GET': this.apiConfig.getUrl,
      'CREATE': this.apiConfig.addUrl,
      'REMOVE': this.apiConfig.removeUrl,
      'UPDATE': this.apiConfig.updateUrl,
      'MOVE': this.apiConfig.moveUrl
    };

    let path = this.replaceNodeId(urlMap[type], nodeId);

    if (destNodeId) {
      path = this.replaceDestNodeId(path, destNodeId);
    }

    return path;
  }

  protected replaceNodeId(url: string, nodeId: string) {
    return url.replace('{nodeId}', nodeId);
  }

  protected replaceDestNodeId(url: string, nodeId: string) {
    return url.replace('{destNodeId}', nodeId);
  }
}
