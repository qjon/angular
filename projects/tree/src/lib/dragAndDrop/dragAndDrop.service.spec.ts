import {DragAndDrop} from './dragAndDrop.service';
import {IDragElement, IDropElement} from '../interfaces/IDragAndDrop';

describe('DragAndDrop', () => {
  let service: DragAndDrop;
  let dragElement: IDragElement;
  let dropElement: IDropElement;

  beforeEach(() => {
    service = new DragAndDrop();

    dragElement = {
      zoneId: 'tree',
      data: {some: 'data'},
      type: DragAndDrop.DROP_DATA_TYPE
    };

    dropElement = {
      zones: ['tree'],
      data: {id: 'data-id'}
    };
  });

  describe('static data', () => {
    it('DROP_DATA_TYPE should be set to "TREE_NODE"', () => {
      expect(DragAndDrop.DROP_DATA_TYPE).toBe('TREE_NODE');
    });
  });

  describe('dragStart', () => {
    it('should emit new drag element', () => {
      const handler = jasmine.createSpy('handler');

      service.getDragStream()
        .subscribe(handler);

      service.dragStart(dragElement);

      expect(handler).toHaveBeenCalledWith(dragElement);
    });
  });

  describe('dragEnd', () => {
    it('should emit drop element', () => {
      const handler = jasmine.createSpy('handler');

      service.drop$
        .subscribe(handler);

      service.dragStart(dragElement);
      service.dragEnd(dropElement);

      expect(handler).toHaveBeenCalledWith({
        dragNode: dragElement,
        dropNode: dropElement,
        type: DragAndDrop.DROP_DATA_TYPE
      });
    });
  });

  describe('getLastDragElement', () => {
    it('should return last dragged element', () => {
      service.dragStart(dragElement);

      expect(service.getLastDragElement()).toEqual(dragElement);
    });
  });

});
