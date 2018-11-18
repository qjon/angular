import { ElementRef, OnInit, Renderer } from '@angular/core';
import { DragAndDrop } from './dragAndDrop.service';
export declare class DraggableDirective implements OnInit {
    protected el: ElementRef;
    private renderer;
    protected dragAndDrop: DragAndDrop;
    data: any;
    dragZone: string | null;
    sourceType: string;
    dragEnabled: boolean;
    constructor(el: ElementRef, renderer: Renderer, dragAndDrop: DragAndDrop);
    private onDragStart;
    ngOnInit(): void;
}
