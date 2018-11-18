import { OnInit } from '@angular/core';
import { TreeModel } from '../models/TreeModel';
import { Observable } from 'rxjs';
import { IOuterNode } from '../interfaces/IOuterNode';
import { ITreeState } from '../store/ITreeState';
import { Store } from '@ngrx/store';
export declare class ParentsListComponent implements OnInit {
    protected store: Store<ITreeState>;
    treeModel: TreeModel;
    parents$: Observable<IOuterNode[]>;
    constructor(store: Store<ITreeState>);
    ngOnInit(): void;
    selectNode(node: IOuterNode, isCurrentSelectedNode: boolean): void;
}
