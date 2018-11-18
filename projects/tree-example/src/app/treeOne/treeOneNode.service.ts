import {Injectable} from '@angular/core';
import {TreeLocalStorageNodeService} from '../localStorage/treeLocalStorage.service';

export const TREE_ONE_ID = 'tree3';

@Injectable()
export class TreeOneNodeService extends TreeLocalStorageNodeService {
  protected treeName = 'treeOne';


  public get treeId(): string {
    return TREE_ONE_ID;
  }
}

