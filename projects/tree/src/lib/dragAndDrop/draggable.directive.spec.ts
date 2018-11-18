import {DraggableDirective} from './draggable.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {DragAndDrop} from './dragAndDrop.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {By} from '@angular/platform-browser';


@Component({
  template: `
    <div riDraggable [data]="data" [dragZone]="dragZone"></div>`
})
class FakeComponent {
  public data: any;
  public dragZone: string;
}

describe('DraggableDirective', () => {
  const TREE_ID = 'tree';
  let fakeComponent: FakeComponent;
  let fixture: ComponentFixture<FakeComponent>;
  let dragAndDropMock: DragAndDrop;
  let $element: DebugElement;
  let node: IOuterNode;

  beforeEach(() => {
    dragAndDropMock = <DragAndDrop>jasmine.createSpyObj('dragAndDrop', ['dragStart']);


    node = {
      id: 'node-id',
      name: 'name',
      treeId: TREE_ID,
      children: [],
      isExpanded: false
    };

    TestBed.configureTestingModule({
      declarations: [FakeComponent, DraggableDirective],
      providers: [
        {provide: DragAndDrop, useValue: dragAndDropMock}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FakeComponent);
    fakeComponent = fixture.componentInstance;
    fakeComponent.data = node;
    fakeComponent.dragZone = TREE_ID;

    fixture.detectChanges();

    $element = fixture.debugElement.query(By.directive(DraggableDirective));
  });

  describe('constructor', () => {
    it('should create instance', () => {
      expect(fakeComponent).toBeDefined();
    });
  });

  describe('constructor', () => {
    it('should listen on "dragstart"', () => {
      const event = <DragEvent>{
        type: 'dragstart',
        dataTransfer: {}
      };
      const expectedValue = {
        zoneId: TREE_ID,
        data: node,
        type: DragAndDrop.DROP_DATA_TYPE
      };
      $element.triggerEventHandler('dragstart', event);

      expect(dragAndDropMock.dragStart).toHaveBeenCalledWith(expectedValue);

      expect(event.dataTransfer.effectAllowed).toBe('copy');
      expect(event.dataTransfer.dropEffect).toBe('copy');
    });

    it('should listen on "dragend"', () => {
      const event = <MouseEvent>{
        type: 'dragend'
      };
      $element.triggerEventHandler('dragend', event);

      expect(dragAndDropMock.dragStart).toHaveBeenCalledWith(null);
    });
  });

});
