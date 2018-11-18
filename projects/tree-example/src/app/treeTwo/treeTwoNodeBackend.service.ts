import {Injectable} from '@angular/core';
import {TreeLocalStorageNodeService} from '../localStorage/treeLocalStorage.service';
import {IOuterNode} from '@rign/angular2-tree';
import {Observable} from 'rxjs';

@Injectable()
export class TreeTwoNodeBackendService extends TreeLocalStorageNodeService {
  protected treeName = 'treeTwo';

  public get treeId(): string {
    return 'tree2';
  }

  public add(node: IOuterNode, parentNodeId: string = null): Observable<IOuterNode> {
    const newNode: Partial<IOuterNode> = {
      name: node.name,
      parentId: node.parentId,
      treeId: node.treeId,
    };

    return this.http.post<IOuterNode>(`/api/tree`, newNode);
  }


  public load(nodeId = ''): Observable<IOuterNode[]> {
    return this.http.get<IOuterNode[]>(`/api/tree/${nodeId}`);
  }

  public move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode> {
    const node = {...srcNode, parentId: targetNode.id || null};

    return this.update(node);
  }

  public update(node: IOuterNode): Observable<IOuterNode> {
    return this.http.put<IOuterNode>(`/api/tree/${node.id}`, node);
  }

  public remove(nodeId: string): Observable<IOuterNode> {
    return this.http.delete<IOuterNode>(`/api/tree/${nodeId}`);
  }
}
