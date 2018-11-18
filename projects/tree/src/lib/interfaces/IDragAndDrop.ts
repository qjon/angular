export interface IDragElement {
  zoneId: string | null;
  data: any | null;
  type: string;
}

export interface IDropElement {
  zones: string[] | null;
  data: any | null;
}

export interface IDragAndDrop {
  dragNode: IDragElement;
  dropNode: IDropElement;
  type: string;
}
