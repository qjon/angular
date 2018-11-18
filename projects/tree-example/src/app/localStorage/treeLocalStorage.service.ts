import {Injectable} from '@angular/core';
import {IOuterNode, NodeService} from '@rign/angular2-tree';
import {UUID} from 'angular2-uuid';
import {Observable, of, throwError} from 'rxjs';

@Injectable()
export class TreeLocalStorageNodeService extends NodeService {
  protected treeName = 'tree';

  protected nodes: IOuterNode[];

  public load(nodeId = ''): Observable<IOuterNode[]> {
    if (!this.nodes) {
      this.nodes = this.getAllDataFromLocalStorage();
    }

    const nodes = this.getChildren(nodeId);

    return of(nodes);
  }

  public add(node: IOuterNode, parentNodeId: string = null): Observable<IOuterNode> {
    node.parentId = parentNodeId;
    node.id = UUID.UUID();

    this.nodes.push(node);

    this.saveNodes();

    return of(node);
  }

  public move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode> {
    const srcId = srcNode.id;
    const oldParentId = srcNode.parentId;
    const targetId = targetNode ? targetNode.id : null;

    const index = this.findIndexByNodeId(srcId);

    this.nodes[index] = {...this.nodes[index]};
    this.nodes[index].parentId = targetId;

    if (oldParentId) {
      const oldParentIndex = this.findIndexByNodeId(oldParentId);

      this.nodes[oldParentIndex].children = this.nodes[oldParentIndex].children.filter(id => id !== srcId);
    }

    if (targetId) {
      const newParentIndex = this.findIndexByNodeId(targetId);
      this.nodes[newParentIndex].children.push(srcId);
    }

    this.saveNodes();

    return of(this.nodes[index]);
  }

  public update(node: IOuterNode): Observable<IOuterNode> {
    const index = this.findIndexByNodeId(node.id);

    this.nodes[index] = node;
    this.saveNodes();

    return of(node);
  }

  public remove(nodeId: string): Observable<IOuterNode> {
    const index = this.findIndexByNodeId(nodeId);
    const node = this.nodes[index];

    const hasChildren = this.getChildren(nodeId).length > 0;

    if (!hasChildren) {
      this.nodes.splice(index, 1);

      this.saveNodes();

      return of(node);
    } else {
      return throwError('Node is not empty');
    }
  }

  public setAllNodes(nodes: IOuterNode[]): void {
    this.nodes = [...nodes];
  }

  private findIndexByNodeId(nodeId: string): number {
    return this.nodes.findIndex((node) => {
      return node.id === nodeId;
    });
  }

  private getChildren(nodeId: string): IOuterNode[] {
    return this.nodes.filter((node: IOuterNode) => node.parentId === nodeId);
  }


  protected getAllDataFromLocalStorage(): IOuterNode[] {
    try {
      const data = localStorage.getItem(this.treeName);

      if (data) {
        return JSON.parse(data);
      }

      return [];

    } catch (e) {
      return [];
    }
  }

  private saveNodes() {
    try {
      localStorage.setItem(this.treeName, JSON.stringify(this.nodes.map((node) => {
        const newNode = {...node};

        return newNode;
      })));
    } catch (e) {
      console.warn('State not save');
    }
  }
}
