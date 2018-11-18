export interface IOuterNode {
  id: string;
  treeId?: string;
  name: string;
  parentId?: string | null;
  children?: Array<string>;
  parents?: Array<string>;
  isExpanded: boolean;
}
