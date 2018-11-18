import {Directive, ElementRef, Input, OnInit, Renderer} from '@angular/core';
import {DragAndDrop} from './dragAndDrop.service';

@Directive({
  selector: '[riDraggable]'
})
export class DraggableDirective implements OnInit {
  @Input() data: any;
  @Input() dragZone: string | null = null;
  @Input() sourceType: string = DragAndDrop.DROP_DATA_TYPE;

  public dragEnabled = true;

  public constructor(protected el: ElementRef,
                     private renderer: Renderer,
                     protected dragAndDrop: DragAndDrop) {
    renderer.listen(el.nativeElement, 'dragstart', ($event) => {
      if (this.dragEnabled) {
        this.onDragStart($event);
      }
    });

    renderer.listen(el.nativeElement, 'dragend', () => {
      // on drag end we reset last drag element (this event is fired after drop)
      this.dragAndDrop.dragStart(null);
    });
  }

  private onDragStart($event: DragEvent) {
    this.dragAndDrop.dragStart({zoneId: this.dragZone, data: this.data, type: this.sourceType});

    $event.dataTransfer.effectAllowed = 'copy';
    $event.dataTransfer.dropEffect = 'copy';
  }

  public ngOnInit() {
    this.el.nativeElement.draggable = this.dragEnabled;

    if (!this.data) {
      throw new Error('DraggableDirective needs data');
    }
  }
}
