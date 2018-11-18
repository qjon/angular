import { ElementRef, OnInit, Renderer } from '@angular/core';
import { DragAndDrop } from './dragAndDrop.service';
import { IOuterNode } from '../interfaces/IOuterNode';
export interface DropConfig {
    dropAllowedCssClass?: string;
    dropZone?: string[] | null;
}
export declare class DroppableDirective implements OnInit {
    protected el: ElementRef;
    private renderer;
    protected dragAndDrop: DragAndDrop;
    data: IOuterNode;
    dropConfig: DropConfig;
    constructor(el: ElementRef, renderer: Renderer, dragAndDrop: DragAndDrop);
    ngOnInit(): void;
    /**
     * Add or remove additional class when drop allowed
     * @param dropAllowed
     */
    private toggleDropClass;
    private isDropAllowed;
    /**
     * Change drag event cursor
     * @param $event
     * @param add
     */
    private changeTargetCursor;
    /**
     * initialize configuration options, use default or passed
     */
    private initConfig;
}
