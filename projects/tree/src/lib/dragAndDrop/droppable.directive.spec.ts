import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {DragAndDrop} from './dragAndDrop.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {By} from '@angular/platform-browser';
import {DropConfig, DroppableDirective} from './droppable.directive';


@Component({
  template: `
    <div riDroppable [data]="data" [dropConfig]="dropConfig"></div>`
})
class FakeComponent {
  public data: any;
  public dropConfig: DropConfig;
}

describe('DroppableDirective', () => {
  const DROP_CSS_CLASS = 'drop-css-class';
  const TREE_ID = 'tree';
  const ZONE_ID = 'tree-zone-id';
  let fakeComponent: FakeComponent;
  let fixture: ComponentFixture<FakeComponent>;
  let dragAndDropMock: any;
  let $element: DebugElement;
  let dragElement: IOuterNode;
  let dropElement: IOuterNode;
  let dropConfig: DropConfig;

  beforeEach(() => {
    dragAndDropMock = <DragAndDrop>jasmine.createSpyObj('dragAndDrop', ['getLastDragElement', 'dragEnd']);

    dropConfig = {
      dropZone: [ZONE_ID],
      dropAllowedCssClass: DROP_CSS_CLASS
    };

    dragElement = {
      id: 'node-id',
      name: 'name',
      treeId: TREE_ID,
      children: [],
      parents: [],
      isExpanded: false,
    };

    dropElement = {
      id: 'node-id-2',
      name: 'name 2',
      treeId: TREE_ID,
      children: [],
      parents: [],
      isExpanded: false,
    };


    TestBed.configureTestingModule({
      declarations: [FakeComponent, DroppableDirective],
      providers: [
        {provide: DragAndDrop, useValue: dragAndDropMock}
      ]
    })
      .compileComponents();


    fixture = TestBed.createComponent(FakeComponent);
    fakeComponent = fixture.componentInstance;
    fakeComponent.data = dropElement;
    fakeComponent.dropConfig = dropConfig;

    fixture.detectChanges();

    $element = fixture.debugElement.query(By.directive(DroppableDirective));
  });

  describe('constructor', () => {
    it('should create instance', () => {
      expect(fakeComponent).toBeDefined();
    });
  });

  describe('constructor', () => {
    it('should listen on "dragover" and add drop CSS class if "drop" action is allowed', () => {
      const event = <DragEvent>{
        type: 'dragover',
        dataTransfer: {},
        preventDefault: () => {
        }
      };

      spyOn(event, 'preventDefault');

      dragAndDropMock.getLastDragElement.and.returnValue({data: dragElement, zoneId: ZONE_ID});
      $element.triggerEventHandler('dragover', event);

      expect($element.nativeElement.className.indexOf(DROP_CSS_CLASS) > -1).toBe(true);
      expect(event.dataTransfer.effectAllowed).toBe('copy');
      expect(event.dataTransfer.dropEffect).toBe('copy');
    });

    it('should listen on "dragover" and not add drop CSS class if "drop" action is not allowed', () => {
      const event = <DragEvent>{
        type: 'dragover',
        dataTransfer: {},
        preventDefault: () => {
        }
      };

      spyOn(event, 'preventDefault');

      dragAndDropMock.getLastDragElement.and.returnValue({data: dragElement, zoneId: 'other_zone'});
      $element.triggerEventHandler('dragover', event);

      expect($element.nativeElement.className.indexOf(DROP_CSS_CLASS) === -1).toBe(true);
    });

    it('should listen on "dragleave" and remove drop CSS class', () => {
      const event = <DragEvent>{
        type: 'dragleave',
        preventDefault: () => {
        }
      };

      spyOn(event, 'preventDefault');

      $element.nativeElement.className = DROP_CSS_CLASS;

      $element.triggerEventHandler('dragleave', event);

      expect($element.nativeElement.className.indexOf(DROP_CSS_CLASS) === -1).toBe(true);
    });

    it('should listen on "drop" and call "dragEnd" ', () => {
      const event = <MouseEvent>{
        type: 'drop'
      };
      dragAndDropMock.getLastDragElement.and.returnValue({data: dragElement, zoneId: ZONE_ID});

      $element.triggerEventHandler('drop', event);

      expect(dragAndDropMock.dragEnd).toHaveBeenCalledWith({
        zones: dropConfig.dropZone,
        data: dropElement
      });
    });

    it('should listen on "drop" and not call "dragEnd" if drop is not allowed', () => {
      const event = <MouseEvent>{
        type: 'drop',
      };
      dragAndDropMock.getLastDragElement.and.returnValue({data: dragElement, zoneId: 'othe-zone'});

      $element.triggerEventHandler('drop', event);

      expect(dragAndDropMock.dragEnd).not.toHaveBeenCalled();
    });
  });
});
