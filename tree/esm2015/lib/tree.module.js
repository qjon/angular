/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './tree.component';
import { DndModule, DraggableComponent } from 'ng2-dnd';
import { DragAndDrop } from './dragAndDrop/dragAndDrop.service';
import { DraggableDirective } from './dragAndDrop/draggable.directive';
import { DroppableDirective } from './dragAndDrop/droppable.directive';
import { DropzoneComponent } from './dragAndDrop/dropzone/dropzone.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TreeEffectsService } from './store/treeEffects.service';
import { NodeDispatcherService } from './service/nodesDispatcher.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ContextMenuModule } from 'ngx-contextmenu';
import { treeReducer } from './store/treeReducer';
import { TreeModelGeneratorService } from './service/treeModelGenerator.service';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { NODE_SERVICE, NodeService } from './service/node.service';
import { TreeInitializerService } from './service/initializer.service';
/** @type {?} */
export const NODE_DISPATCHER_TOKEN = new InjectionToken('NodeDispatcherService');
export class TreeModule {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
        this.setTranslationForEN();
        this.setTranslationForPL();
        this.translate.setDefaultLang('en');
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TreeModule,
            providers: [
                DragAndDrop,
                NodeDispatcherService,
                TreeEffectsService,
                TreeInitializerService,
                TreeModelGeneratorService,
            ]
        };
    }
    /**
     * @return {?}
     */
    static forFeature() {
        return {
            ngModule: TreeModule,
            providers: [],
        };
    }
    /**
     * @private
     * @return {?}
     */
    setTranslationForPL() {
        this.translate.setTranslation('pl', {
            RI_TREE_LBL_ADD_NODE: 'Dodaj',
            RI_TREE_LBL_EDIT_NODE: 'Edytuj',
            RI_TREE_LBL_REMOVE_NODE: 'Usuń',
            RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj'
        });
    }
    /**
     * @private
     * @return {?}
     */
    setTranslationForEN() {
        this.translate.setTranslation('en', {
            RI_TREE_LBL_ADD_NODE: 'Add data',
            RI_TREE_LBL_EDIT_NODE: 'Edit data',
            RI_TREE_LBL_REMOVE_NODE: 'Delete data',
            RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level'
        });
    }
}
TreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ContextMenuModule,
                    DndModule,
                    EffectsModule.forFeature([TreeEffectsService]),
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    StoreModule.forFeature('trees', treeReducer),
                    TranslateModule,
                ],
                declarations: [
                    TreeComponent,
                    ItemComponent,
                    DraggableDirective,
                    DroppableDirective,
                    DropzoneComponent,
                    ParentsListComponent,
                ],
                exports: [
                    TreeComponent,
                    ItemComponent,
                    DraggableDirective,
                    DroppableDirective,
                    DropzoneComponent,
                    DraggableComponent,
                    ParentsListComponent,
                    StoreModule,
                    EffectsModule,
                ],
                providers: [
                    { provide: NODE_SERVICE, useClass: NodeService, multi: true }
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
TreeModule.ctorParameters = () => [
    { type: TranslateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeModule.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3RyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUF1QixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxF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VE9NX0VMRU1FTlRTX1NDSEVNQSwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJdGVtQ29tcG9uZW50fSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUcmVlQ29tcG9uZW50fSBmcm9tICcuL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7RG5kTW9kdWxlLCBEcmFnZ2FibGVDb21wb25lbnR9IGZyb20gJ25nMi1kbmQnO1xuaW1wb3J0IHtEcmFnQW5kRHJvcH0gZnJvbSAnLi9kcmFnQW5kRHJvcC9kcmFnQW5kRHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7RHJhZ2dhYmxlRGlyZWN0aXZlfSBmcm9tICcuL2RyYWdBbmREcm9wL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtEcm9wcGFibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJvcHBhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0Ryb3B6b25lQ29tcG9uZW50fSBmcm9tICcuL2RyYWdBbmREcm9wL2Ryb3B6b25lL2Ryb3B6b25lLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0b3JlTW9kdWxlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0VmZmVjdHNNb2R1bGV9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtUcmVlRWZmZWN0c1NlcnZpY2V9IGZyb20gJy4vc3RvcmUvdHJlZUVmZmVjdHMuc2VydmljZSc7XG5pbXBvcnQge05vZGVEaXNwYXRjaGVyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL25vZGVzRGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb250ZXh0TWVudU1vZHVsZX0gZnJvbSAnbmd4LWNvbnRleHRtZW51JztcbmltcG9ydCB7dHJlZVJlZHVjZXJ9IGZyb20gJy4vc3RvcmUvdHJlZVJlZHVjZXInO1xuaW1wb3J0IHtUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvdHJlZU1vZGVsR2VuZXJhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtQYXJlbnRzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9wYXJlbnRzLWxpc3QvcGFyZW50cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge05PREVfU0VSVklDRSwgTm9kZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9ub2RlLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBOT0RFX0RJU1BBVENIRVJfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Tm9kZURpc3BhdGNoZXJTZXJ2aWNlPignTm9kZURpc3BhdGNoZXJTZXJ2aWNlJyk7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgRG5kTW9kdWxlLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbVHJlZUVmZmVjdHNTZXJ2aWNlXSksXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ3RyZWVzJywgdHJlZVJlZHVjZXIpLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJlZUNvbXBvbmVudCxcbiAgICBJdGVtQ29tcG9uZW50LFxuICAgIERyYWdnYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wcGFibGVEaXJlY3RpdmUsXG4gICAgRHJvcHpvbmVDb21wb25lbnQsXG4gICAgUGFyZW50c0xpc3RDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmVlQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnQsXG4gICAgRHJhZ2dhYmxlRGlyZWN0aXZlLFxuICAgIERyb3BwYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wem9uZUNvbXBvbmVudCxcbiAgICBEcmFnZ2FibGVDb21wb25lbnQsXG4gICAgUGFyZW50c0xpc3RDb21wb25lbnQsXG4gICAgU3RvcmVNb2R1bGUsXG4gICAgRWZmZWN0c01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE5PREVfU0VSVklDRSwgdXNlQ2xhc3M6IE5vZGVTZXJ2aWNlLCBtdWx0aTogdHJ1ZX1cbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge1xuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRyZWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRHJhZ0FuZERyb3AsXG4gICAgICAgIE5vZGVEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgVHJlZUVmZmVjdHNTZXJ2aWNlLFxuICAgICAgICBUcmVlSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgICAgICBUcmVlTW9kZWxHZW5lcmF0b3JTZXJ2aWNlLFxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvckZlYXR1cmUoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmVlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXRUcmFuc2xhdGlvbkZvckVOKCk7XG4gICAgdGhpcy5zZXRUcmFuc2xhdGlvbkZvclBMKCk7XG4gICAgdGhpcy50cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyYW5zbGF0aW9uRm9yUEwoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ3BsJywge1xuICAgICAgUklfVFJFRV9MQkxfQUREX05PREU6ICdEb2RhaicsXG4gICAgICBSSV9UUkVFX0xCTF9FRElUX05PREU6ICdFZHl0dWonLFxuICAgICAgUklfVFJFRV9MQkxfUkVNT1ZFX05PREU6ICdVc3XFhCcsXG4gICAgICBSSV9UUkVFX0xCTF9EUk9QX1pPTkU6ICdVcHXFm8SHIHR1dGFqJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmFuc2xhdGlvbkZvckVOKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKCdlbicsIHtcbiAgICAgIFJJX1RSRUVfTEJMX0FERF9OT0RFOiAnQWRkIGRhdGEnLFxuICAgICAgUklfVFJFRV9MQkxfRURJVF9OT0RFOiAnRWRpdCBkYXRhJyxcbiAgICAgIFJJX1RSRUVfTEJMX1JFTU9WRV9OT0RFOiAnRGVsZXRlIGRhdGEnLFxuICAgICAgUklfVFJFRV9MQkxfRFJPUF9aT05FOiAnRHJvcCBoZXJlIHRvIG1vdmUgZGF0YSB0byByb290IGxldmVsJ1xuICAgIH0pO1xuICB9XG59XG5cbiJdfQ==