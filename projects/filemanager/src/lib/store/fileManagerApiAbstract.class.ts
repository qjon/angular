import {IOuterNode} from '@rign/angular2-tree';
import {IFileDataProperties} from '../services/imageDataConverter.service';

export const FILEMANAGER_TREE_NAME = 'fileManagerTree';

export abstract class AbstractFileManagerApiService {

  protected treeName = FILEMANAGER_TREE_NAME;
  protected fileManagerName = 'fileManagerFiles';


  protected nodes: IOuterNode[];
  protected files: IFileDataProperties[];

  protected currentNodeId = '';
}
