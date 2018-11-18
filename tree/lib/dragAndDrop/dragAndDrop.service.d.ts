import { IDragElement, IDropElement } from '../interfaces/IDragAndDrop';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
export declare class DragAndDrop {
    static DROP_DATA_TYPE: string;
    protected dropStream$: Subject<IDropElement | null>;
    protected dragStream$: BehaviorSubject<IDragElement | null>;
    drop$: Observable<any>;
    constructor();
    dragStart(dragElement: IDragElement): void;
    dragEnd(dropElement: IDropElement | null): void;
    getDragStream(): BehaviorSubject<IDragElement | null>;
    getLastDragElement(): IDragElement;
}
