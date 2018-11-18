import {Injectable} from '@angular/core';
import {IDragAndDrop, IDragElement, IDropElement} from '../interfaces/IDragAndDrop';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, withLatestFrom} from 'rxjs/operators';

@Injectable()
export class DragAndDrop {
  public static DROP_DATA_TYPE = 'TREE_NODE';

  protected dropStream$: Subject<IDropElement | null> = new Subject();
  protected dragStream$: BehaviorSubject<IDragElement | null> = new BehaviorSubject(null);

  public drop$: Observable<any>;

  public constructor() {
    this.drop$ = this.dropStream$
      .pipe(
        withLatestFrom(this.dragStream$),
        map(([dropNode, dragNode]: [IDropElement, IDragElement]): IDragAndDrop => {
          return {dragNode: dragNode, dropNode: dropNode, type: dragNode.type};
        })
      );
  }

  public dragStart(dragElement: IDragElement) {
    this.dragStream$.next(dragElement);
  }

  public dragEnd(dropElement: IDropElement | null) {
    this.dropStream$.next(dropElement);
  }

  public getDragStream(): BehaviorSubject<IDragElement | null> {
    return this.dragStream$;
  }

  public getLastDragElement(): IDragElement {
    return this.dragStream$.getValue();
  }
}
