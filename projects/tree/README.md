# Aangular Tree Component

Simple component to display tree structure

[![npm (scoped)](https://img.shields.io/npm/v/@rign/angular2-tree.svg)]()
[![Build Status](https://travis-ci.org/qjon/angular.svg?branch=master)](https://travis-ci.org/qjon/angular2-tree)
[![npm](https://img.shields.io/npm/dm/@rign\/angular2-tree.svg)](https://img.shields.io/npm/dm/@rign\/angular2-tree.svg)
[![npm](https://img.shields.io/npm/l/@rign\/angular2-tree.svg)](https://github.com/qjon/angular2-tree/blob/master/LICENSE)

## Installation

    npm i @rign/angular2-tree --save
   
It also require to install dependencies:

  * @angular/animations
  * @angular/cdk
  * @angular/common
  * @angular/core
  * @angular/forms
  * @angular/http
  * @ngrx/core
  * @ngrx/effects
  * @ngrx/store
  * @ngrx/store-devtools
  * @ngx-translate/core
  * angular2-uuid
  * bootstrap
  * core-js
  * font-awesome
  * lodash.isequal
  * ng2-dnd
  * ngx-contextmenu
  * rxjs
  * zone.js
  
You can install them using below command: 

    npm i @angular/cdk @angular/common @angular/core @angular/forms @angular/http @ngrx/core @ngrx/effects @ngrx/store @ngx-translate/core angular2-uuid bootstrap core-js font-awesome lodash.isequal ng2-dnd ngx-contextmenu rxjs zone.js --save 
  
# Usage    
    
First you have to create your own loader service        

    @Injectable()
    export class AppNodeService extends NodeService {
      public get treeId(): string {
        return 'tree3';
      }
      
      protected apiConfig = {
        addUrl: '/api/nodes',
        getUrl: '/api/nodes',
        updateUrl: '/api/nodes',
        removeUrl: '/api/nodes',
      }
    }

and use it to load/save/delete/etc. your node data. Or you can extend and rewrite all methods of that service to store your data wherever you want. See example _localStorage.service.ts_
    
Include _TreeModule_  in your application module and create Store with empty state and initialize Effects. Do not forget to pass yours _AppNodesService_ as a parameter of _TreeModule_.  

    import {TreeModule} from '@rign/angular2-tree';
    
    @NgModule({
      declarations: [
        ...
      ],
      imports: [
        ...
        TreeModule.forRoot(AppNodeService),
        EffectsModule.forRoot([]),
        StoreModule.forRoot({})
      ]
    })
    
You need also init translations and animations module, because Tree needs it to translate all labels and animate expanding and collapsing. 

    @NgModule({
      declarations: [
        ...
      ],
      imports: [
        ...
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        TreeModule.forRoot()
      ]
    })
    
More information about translations you can find below in section _Translation_.
    
In any html file put 

    <ri-tree [treeModel]="treeModel"></ri-tree>

In component where you create tree, you should create _TreeModel_ passing _configuration_ and _AppNodeService_.

    export class MyTreeComponent implements OnInit {
      public folders: Observable<ITreeData>;
    
      public contextMenu: IContextMenu[] = [];
    
      public treeConfiguration: IConfiguration = {
        showAddButton: true,
        disableMoveNodes: false,
        treeId: 'tree3',
        dragZone: 'tree3',
        dropZone: ['tree3'],
        isAnimation: true     // add animation to action "expand" and "collapse"
      };
    
      public treeModel: TreeModel;
    

      public constructor(private treeInitializerService: TreeInitializerService,
                         private appNodeService: AppNodeService) {
      }
    
      public ngOnInit(): void {
        const nodes: IOuterNode[] = JSON.parse(localStorage.getItem('treeOne')) || [];
    
        this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.appNodeService, nodes);
      }
    }
    
If function _init_ has got third parameter - array of nodes, then the tree will be marked as fully loaded. It will not use _load API_ function to get new subnodes it will use only passed nodes. 

### CSS Styles

To load default CSS styles and makes our tree looks nice you have to add 2 CSS files to your _angular-cli.json_ file:

    ...
    "styles": [
      "../node_modules/bootstrap/dist/css/bootstrap.css",
      "../node_modules/font-awesome/css/font-awesome.css",
      "styles.css"
    ],
  

### Create own item template

Also you can use your own template to display items. You can do that when you extend _ItemComponent_

    @Component({
      selector: 'new-tree-item',
      templateUrl: './newItem.component.html',
      styleUrls: ['./newItem.component.scss']
    })
    export class NewItemComponent extends ItemComponent {
    
    }
    
and _newItem.component.html_

    <div class="tree-item row"
         [ngClass]="{'tree-item-selected': isSelected}"
         riDroppable
         riDraggable
         [dragZone]="treeModel.configuration.dragZone"
         [dropConfig]="{dropAllowedCssClass: 'drop-enabled', dropZone: treeModel.configuration.dropZone}"
         [data]="node"
         id="node-{{node-id}}"
    >
      <div class="col-sm-8">
        <i *ngIf="!isExpanded" (click)="expand()" class="fa fa-plus pointer"></i>
        <i *ngIf="isExpanded" (click)="collapse()" class="fa fa-minus pointer"></i>
        <span *ngIf="!isEditMode" class="tree-item-name" (click)="onSelect()">{{node.name}}</span>
        <form name="form">
          <input #inputElement type="text" class="form-control" *ngIf="isEditMode" [formControl]="nameField"
                 name="name" (keydown)="onChange($event)" (blur)="onBlur($event)"/>
        </form>
      </div>
      <div class="col-sm-4 text-right">
          <span class="btn-group btn-group-sm">
            <button class="btn btn-primary" (click)="onEdit($event)" [disabled]="isEditMode">
              <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-danger" (click)="onDelete()" [disabled]="isEditMode">
              <i class="fa fa-trash"></i>
            </button>
          </span>
      </div>
    </div>
    <div class="tree" *ngIf="isExpanded" [@expand]>
      <ri-tree-item *ngFor="let child of children$ | async" [node]="child; trackBy: trackByFn"
                    [treeModel]="treeModel"
                    [isExpanded]="treeModel.isExpanded(child)"
                    [isSelected]="treeModel.isSelected(child)"
                    [contextMenu]="contextMenu"></ri-tree-item>
    </div>

    
Then when you create tree component in your application use such construction

    <rign-tree [treeModel]="treeModel">
      <new-tree-item *ngFor="let node of treeModel.getRootNodes() | async; trackBy: trackByFn" 
                      [node]="node" 
                      [treeModel]="treeModel" 
                      [isSelected]="treeModel.isSelected(node)"
                      [isExpanded]="treeModel.isExpanded(node)"
                      [contextMenu]="contextMenu"></new-tree-item>
    </rign-tree>
    
and that is all. Please see Demo where is such example.

### Open initial path

If you would like to open some path at the begin you can do that invoking such method after creating _TreeModel_.

     this.treeModel.initPath([
       // list of node ids sorted by level of node (grandparent id, parent id, child id)
     ]);
      
### Display parents path

From version 3.0.1 there is possibility to display current selected node path. To do that place in your component html file such code:

    <ri-tree-parents-list [treeModel]="treeModel"></ri-tree-parents-list>
    
The _treeModel_ value is the same object that is used in _ri-tree_.

## Events(Actions)

Using _ngrx/store_ you can listen on below actions and do whatever you want:

    TreeActionTypes.TREE_SAVE_NODE
    TreeActionTypes.TREE_SAVE_NODE_ERROR
    TreeActionTypes.TREE_SAVE_NODE_SUCCESS
    TreeActionTypes.TREE_DELETE_NODE
    TreeActionTypes.TREE_DELETE_NODE_ERROR
    TreeActionTypes.TREE_DELETE_NODE_SUCCESS
    TreeActionTypes.TREE_EDIT_NODE_START
    TreeActionTypes.TREE_EXPAND_NODE
    TreeActionTypes.TREE_LOAD
    TreeActionTypes.TREE_LOAD_ERROR
    TreeActionTypes.TREE_LOAD_SUCCESS
    TreeActionTypes.TREE_LOAD_PATH
    TreeActionTypes.TREE_MOVE_NODE
    TreeActionTypes.TREE_MOVE_NODE_ERROR
    TreeActionTypes.TREE_MOVE_NODE_SUCCESS
    TreeActionTypes.TREE_REGISTER
    TreeActionTypes.TREE_SET_ALL_NODES
    TreeActionTypes.TREE_SELECT_NODE

## Translation

From version 4.2.0 translation dependency is removed from _@rign/angular2-tree_. Now you have to create service which implements ITreeTranslation interface:

    import {ITreeTranslations} from '@rign/angular2-tree';
    
    export class TreeTranslationService implements ITreeTranslations {
      readonly RI_TREE_LBL_ADD_NODE = 'Add data';
      readonly RI_TREE_LBL_EDIT_NODE = 'Edit data';
      readonly RI_TREE_LBL_REMOVE_NODE = 'Delete data';
      readonly RI_TREE_LBL_DROP_ZONE = 'Drop here to move data to root level';
    }

and set is as provider in module which use _TreeModule_

    providers: [
        TreeOneNodeService,
        {provide: TREE_TRANSLATION_TOKEN, useClass: TreeTranslationService},
    ]

In such case you can use your own translation module and its implementation or even if you don't use translations in your app, you don't have to import additional dependency.
    
## Drop elements on tree node

Now you have new possibilities to move different elements to the tree (files or other data). To do that, you have to use _riDraggable_ directive in following way

    <div ri-draggable [dragZone]="treeModel.configuration.dragZone" [data]="your_data" [sourceType]="'YOUR_SOURCE_TYPE'">Drag element</div>  
    
where:
* _your_data_ - is any object
* _YOUR_SOURCE_TYPE_ - is any type of string which allow you to filter drop effect

Then you have to create _@Effects_ similar to that one in _[treeEffects.service](src/store/treeEffects.service.ts)_or create only Observable and subscribe to it.

    @Effect() move$ = this.actions$
      .pipe(
        ofType(TreeActionTypes.TREE_MOVE_NODE),
        filter((action: ITreeAction) => {
          return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
        }) 
      )
      ...
      
but you have to replace 

    ofType(TreeActionTypes.TREE_MOVE_NODE)

to 

    ofType('YOUR_SOURCE_TYPE')
      
At the end do not forget to add this effects to your app.
 
## Changes

### v4.2.0
* remove translation module
* add ITreeTranslation interface and TREE_TRANSLATION_TOKEN 

### v4.1.0
* update to Angular 8

### v4.0.0
* update to Angular 7
* switch from ng2-translate to ngx-translate
* replace LESS to SCSS
* move to new repository
* remove deprecated code

### v3.1.2
* fix Item template error 
* update bootstrap to 4.1.3

### v3.1.0
* change tree model initialize and injecting NodeService
* add NestJS server with new _TreeTwoNodeBackendService_ angular service to show how Tree works with real backend (details in _Demo_ section)
* actions and reducer
  * change events from TreeActionService to TreeActionTypes (the first one will be removed in 4.0.0)
  * rewrite actions from one class to many simpler classes
  * create one type _TreeAction_ which cover all tree actions
* rewrite _TreeItemComponent_ - improved performance and reduce code
   * move information about expanded nodes from _TreeItemComponent_ to _store_, these cause that _isExpanded_ is now _@Input()_ property for _TreeItemComponent_
   * _TreeItemComponent_ has new _@Input()_ property _isSelected_  
   * small changes in expand animation
* fix issue - when add new node parent node was expanded but not loaded

### v3.0.2
* small fixes with interfaces
* fix export CSS styles

### v3.0.1
* change the way of injecting NodeService provider
* save in store: tree root nodes list, tree configuration  and selected node
* display current selected node parents path with navigation
* add possibility to open path of the tree
  
### v2.3.0
* fix problem with building tree component in AOT
* fix few small issues

### v2.2.0
* add _forRoot_ static method
* change translation module to _ng2-translate_
* upgrade angular to verison _^5.0.0_
* upgrade @ngrx/store to version ^4.1.0 (use _forFeature_ to init store and effects)
* rename selector __ri-tree__

### v2.1.1
* fix bug with adding new node to root element

### v2.1.0
* add translation module
* drop elements on tree nodes 
* update and lock of some npm package versions
* add possibility to animate action _collapse_ and _expand_ nodes of tree, using in configuration property _isAnimation: true_

### v2.0.1
* add [MIT LICENSE](https://github.com/qjon/angular/blob/master/projects/tree/LICENSE)

### v2.0.0
* use ngrx/store to store data
* use actions and effects instead of events
* add TravisCI configuration
* remove backend example, move all functionality of demo to local storage

### v1.0.0

* use ngrx/store
* remove events ITreeItemEvents - use Actions and Effects
* remove NodeModel
* simplify using tree

### v0.8.1

* fix package.json

### v0.8.0

* allow to create own template for tree item (if not specify it use default) - look in demo
* input option _disableContextMenu_ to disable context menu (default: false)
* update Demo - add alternative view of tree

### v0.7.0

* remove API config service (see section _Usage_)

### v0.6.2

* change name FolderService to NodeService
* change params names from _dirId_ to _nodeId_
* now you can use in your API paths parameter _{nodeId}_ which will be replaced on _nodeId_

### v0.6.1

* expose _ConfigService_ - it allow override urls for create, edit, and delete folder

### v0.6.0

* upgrade angular/cli to version _beta.32.3_
* fix demo

### v0.5.0

* primary version with all features described below.


## Demo

Working demo with _local storage_ you can find [here](https://qjon.github.io/angular/tree).
To run Demo locally clone this repository and run

    ng start --project=tree-example
    
## License

Licensed under [MIT](https://github.com/qjon/angular/blob/master/projects/tree/LICENSE).
