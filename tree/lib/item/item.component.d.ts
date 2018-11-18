import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContextMenuComponent, ContextMenuService } from 'ngx-contextmenu';
import { IOuterNode } from '../interfaces/IOuterNode';
import { TreeModel } from '../models/TreeModel';
import { Actions } from '@ngrx/effects';
import { AnimationTriggerMetadata } from '@angular/animations/src/animation_metadata';
import { Store } from '@ngrx/store';
import { ITreeState } from '../store/ITreeState';
import { Observable, Subscription } from 'rxjs';
export declare function expand(): AnimationTriggerMetadata;
export declare class ItemComponent implements OnInit, OnDestroy, OnChanges {
    protected contextMenuService: ContextMenuService;
    protected actions$: Actions;
    protected store: Store<ITreeState>;
    protected cdr: ChangeDetectorRef;
    /**
     * Input field where we can change data name
     */
    input: any;
    /**
     * Node instance
     */
    node: IOuterNode;
    treeModel: TreeModel;
    contextMenu: ContextMenuComponent;
    isExpanded: boolean;
    isSelected: boolean;
    /**
     * Form field to change data name
     */
    nameField: FormControl;
    isEditMode: boolean;
    children$: Observable<IOuterNode[]>;
    protected isStartSave: boolean;
    protected subscription: Subscription;
    protected _node: IOuterNode;
    constructor(contextMenuService: ContextMenuService, actions$: Actions, store: Store<ITreeState>, cdr: ChangeDetectorRef);
    ngOnChanges(values: any): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    /**
     * Collapse node
     */
    collapse(): void;
    /**
     * Expand node
     */
    expand(): void;
    onBlur(): void;
    onChange(event: KeyboardEvent): void;
    onContextMenu($event: MouseEvent): void;
    onSelect(): void;
    trackByFn(item: IOuterNode): string;
    protected getChildren(): Observable<IOuterNode[]>;
    protected initEditModeIfNeeded(node: IOuterNode): void;
    protected isNewNode(): boolean;
    protected setFocus(): void;
    protected subscribeForOnEdit(): void;
    protected undoChanges(): void;
}
