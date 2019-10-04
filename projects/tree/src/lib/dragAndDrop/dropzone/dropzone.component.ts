import {Component, Inject, Input} from '@angular/core';
import {TreeModel} from '../../models/TreeModel';
import {DragAndDrop} from '../dragAndDrop.service';
import {IDragAndDrop, IDragElement} from '../../interfaces/IDragAndDrop';
import {map} from 'rxjs/operators';
import {merge, Observable} from 'rxjs';
import {TREE_TRANSLATION_TOKEN} from '../../service/tree-translation-token';
import {ITreeTranslations} from '../../interfaces/ITreeTranslations';

@Component({
  selector: 'ri-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent {
  @Input() treeModel: TreeModel;
  @Input() dropZone: string[] = [];

  public isOpen$: Observable<boolean>;

  constructor(public dragAndDrop: DragAndDrop,
              @Inject(TREE_TRANSLATION_TOKEN) public treeTranslationService: ITreeTranslations) {

    const isDragStart$ = this.dragAndDrop.getDragStream()
      .pipe(
        map((dragElement: IDragElement): boolean => {
          const isDragElement = !!dragElement && !!dragElement.data;

          if (isDragElement) {
            if (dragElement.type === DragAndDrop.DROP_DATA_TYPE) {
              const isNotRootElement = dragElement.data.parentId;
              const isFromCurrentTree = dragElement.data.treeId === this.treeModel.treeId;

              return (isNotRootElement && isFromCurrentTree) ? true : false;
            } else {
              return true;
            }
          }

          return false;
        })
      );

    const isDragEnd$ = this.dragAndDrop.drop$
      .pipe(
        map((data: IDragAndDrop): boolean => {
          return false;
        })
      );

    this.isOpen$ = merge(isDragStart$, isDragEnd$);
  }

  public onDrop() {
    this.dragAndDrop.dragEnd(null);
  }

  public onDragOver($event) {
    $event.preventDefault();
  }
}
