import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropzoneComponent} from './dropzone.component';
import {DragAndDrop} from '../dragAndDrop.service';
import {TreeModel} from '../../models/TreeModel';
import {IDragElement} from '../../interfaces/IDragAndDrop';
import {TranslateModule} from '@ngx-translate/core';


describe('DropzoneComponent', () => {
  const TREE_ID = 'treeId';
  let component: DropzoneComponent;
  let fixture: ComponentFixture<DropzoneComponent>;
  let handler: any;
  let treeModel: TreeModel;
  let dragAndDrop: DragAndDrop;
  let treeDragElement: IDragElement;
  let notTreeDragElement: IDragElement;

  beforeEach(async(() => {
    handler = jasmine.createSpy('handler');

    dragAndDrop = new DragAndDrop();

    notTreeDragElement = {
      type: 'NOT_TREE_NODE',
      data: {some: 'data'},
      zoneId: 'zone'
    };

    treeDragElement = {
      type: DragAndDrop.DROP_DATA_TYPE,
      data: {
        some: 'data'
      },
      zoneId: 'zone'
    };

    treeModel = <TreeModel>{
      treeId: TREE_ID
    };

    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        {provide: DragAndDrop, useValue: dragAndDrop}
      ],
      declarations: [DropzoneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropzoneComponent);
    component = fixture.componentInstance;

    component.treeModel = treeModel;

    fixture.detectChanges();
  });

  describe('constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should "isOpen" to be ste to false', () => {
      component.isOpen$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(false);
    });
  });

  describe('drag start', () => {
    it('should set isOpen to true if drag element is not tree element', () => {
      dragAndDrop.dragStart(notTreeDragElement);

      component.isOpen$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(true);
    });

    it('should set isOpen to true if drag element is tree element from the same tree', () => {
      treeDragElement.data.treeId = TREE_ID;
      treeDragElement.data.parentId = 'parent';

      dragAndDrop.dragStart(treeDragElement);

      component.isOpen$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(true);
    });

    it('should set isOpen to false if drag element is tree element from the same tree but it is root element', () => {
      treeDragElement.data.treeId = TREE_ID;
      treeDragElement.data.parentId = null;

      dragAndDrop.dragStart(treeDragElement);

      component.isOpen$
        .subscribe(handler);

      expect(handler).toHaveBeenCalledWith(false);
    });
  });

  describe('drag end', () => {
    it('should set isOpen to false if drag end event appear', () => {
      treeDragElement.data.treeId = TREE_ID;
      treeDragElement.data.parentId = 'parent';

      component.isOpen$
        .subscribe(handler);

      dragAndDrop.dragStart(treeDragElement);
      component.onDrop();

      // first call init, dragStart, dragEnd
      expect(handler.calls.count()).toBe(3);
      expect(handler.calls.allArgs()).toEqual([[false], [true], [false]]);
    });
  });

  describe('onDragOver', () => {
    it('should prevent $event default', () => {
      const event = <Event>jasmine.createSpyObj('event', ['preventDefault']);

      component.onDragOver(event);

      expect(event.preventDefault).toHaveBeenCalled();
    });
  });


});
