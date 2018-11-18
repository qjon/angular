import {Injectable} from '@angular/core';
import {INodeService} from './node.service';

@Injectable()
export class NodeDispatcherService {
  private nodeServices: { [key: string]: INodeService } = {};

  public registerService(name: string, nodeService: INodeService): void {
    this.nodeServices[name] = nodeService;
  }

  public get(name: string): INodeService {
    if (Boolean(this.nodeServices[name])) {
      return this.nodeServices[name];
    } else {
      // default node service provider
      throw Error(`No tree service with name ${name}`);
    }
  }
}
