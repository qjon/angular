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
export var NODE_DISPATCHER_TOKEN = new InjectionToken('NodeDispatcherService');
var TreeModule = /** @class */ (function () {
    function TreeModule(translate) {
        this.translate = translate;
        this.setTranslationForEN();
        this.setTranslationForPL();
        this.translate.setDefaultLang('en');
    }
    /**
     * @return {?}
     */
    TreeModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    TreeModule.forFeature = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TreeModule,
            providers: [],
        };
    };
    /**
     * @private
     * @return {?}
     */
    TreeModule.prototype.setTranslationForPL = /**
     * @private
     * @return {?}
     */
    function () {
        this.translate.setTranslation('pl', {
            RI_TREE_LBL_ADD_NODE: 'Dodaj',
            RI_TREE_LBL_EDIT_NODE: 'Edytuj',
            RI_TREE_LBL_REMOVE_NODE: 'Usuń',
            RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj'
        });
    };
    /**
     * @private
     * @return {?}
     */
    TreeModule.prototype.setTranslationForEN = /**
     * @private
     * @return {?}
     */
    function () {
        this.translate.setTranslation('en', {
            RI_TREE_LBL_ADD_NODE: 'Add data',
            RI_TREE_LBL_EDIT_NODE: 'Edit data',
            RI_TREE_LBL_REMOVE_NODE: 'Delete data',
            RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level'
        });
    };
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
    TreeModule.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    return TreeModule;
}());
export { TreeModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeModule.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi10cmVlLyIsInNvdXJjZXMiOlsibGliL3RyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUF1QixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxF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QW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0l0ZW1Db21wb25lbnR9IGZyb20gJy4vaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1RyZWVDb21wb25lbnR9IGZyb20gJy4vdHJlZS5jb21wb25lbnQnO1xuaW1wb3J0IHtEbmRNb2R1bGUsIERyYWdnYWJsZUNvbXBvbmVudH0gZnJvbSAnbmcyLWRuZCc7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tICcuL2RyYWdBbmREcm9wL2RyYWdBbmREcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHtEcmFnZ2FibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0Ryb3BwYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9kcmFnQW5kRHJvcC9kcm9wcGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7RHJvcHpvbmVDb21wb25lbnR9IGZyb20gJy4vZHJhZ0FuZERyb3AvZHJvcHpvbmUvZHJvcHpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7U3RvcmVNb2R1bGV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7RWZmZWN0c01vZHVsZX0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1RyZWVFZmZlY3RzU2VydmljZX0gZnJvbSAnLi9zdG9yZS90cmVlRWZmZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7Tm9kZURpc3BhdGNoZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2Uvbm9kZXNEaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0NvbnRleHRNZW51TW9kdWxlfSBmcm9tICduZ3gtY29udGV4dG1lbnUnO1xuaW1wb3J0IHt0cmVlUmVkdWNlcn0gZnJvbSAnLi9zdG9yZS90cmVlUmVkdWNlcic7XG5pbXBvcnQge1RyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2V9IGZyb20gJy4vc2VydmljZS90cmVlTW9kZWxHZW5lcmF0b3Iuc2VydmljZSc7XG5pbXBvcnQge1BhcmVudHNMaXN0Q29tcG9uZW50fSBmcm9tICcuL3BhcmVudHMtbGlzdC9wYXJlbnRzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Tk9ERV9TRVJWSUNFLCBOb2RlU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL25vZGUuc2VydmljZSc7XG5pbXBvcnQge1RyZWVJbml0aWFsaXplclNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9pbml0aWFsaXplci5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IE5PREVfRElTUEFUQ0hFUl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOb2RlRGlzcGF0Y2hlclNlcnZpY2U+KCdOb2RlRGlzcGF0Y2hlclNlcnZpY2UnKTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb250ZXh0TWVudU1vZHVsZSxcbiAgICBEbmRNb2R1bGUsXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtUcmVlRWZmZWN0c1NlcnZpY2VdKSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgndHJlZXMnLCB0cmVlUmVkdWNlciksXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUcmVlQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnQsXG4gICAgRHJhZ2dhYmxlRGlyZWN0aXZlLFxuICAgIERyb3BwYWJsZURpcmVjdGl2ZSxcbiAgICBEcm9wem9uZUNvbXBvbmVudCxcbiAgICBQYXJlbnRzTGlzdENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyZWVDb21wb25lbnQsXG4gICAgSXRlbUNvbXBvbmVudCxcbiAgICBEcmFnZ2FibGVEaXJlY3RpdmUsXG4gICAgRHJvcHBhYmxlRGlyZWN0aXZlLFxuICAgIERyb3B6b25lQ29tcG9uZW50LFxuICAgIERyYWdnYWJsZUNvbXBvbmVudCxcbiAgICBQYXJlbnRzTGlzdENvbXBvbmVudCxcbiAgICBTdG9yZU1vZHVsZSxcbiAgICBFZmZlY3RzTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogTk9ERV9TRVJWSUNFLCB1c2VDbGFzczogTm9kZVNlcnZpY2UsIG11bHRpOiB0cnVlfVxuICBdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZU1vZHVsZSB7XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHJlZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEcmFnQW5kRHJvcCxcbiAgICAgICAgTm9kZURpc3BhdGNoZXJTZXJ2aWNlLFxuICAgICAgICBUcmVlRWZmZWN0c1NlcnZpY2UsXG4gICAgICAgIFRyZWVJbml0aWFsaXplclNlcnZpY2UsXG4gICAgICAgIFRyZWVNb2RlbEdlbmVyYXRvclNlcnZpY2UsXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yRmVhdHVyZSgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRyZWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICB0aGlzLnNldFRyYW5zbGF0aW9uRm9yRU4oKTtcbiAgICB0aGlzLnNldFRyYW5zbGF0aW9uRm9yUEwoKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJhbnNsYXRpb25Gb3JQTCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbigncGwnLCB7XG4gICAgICBSSV9UUkVFX0xCTF9BRERfTk9ERTogJ0RvZGFqJyxcbiAgICAgIFJJX1RSRUVfTEJMX0VESVRfTk9ERTogJ0VkeXR1aicsXG4gICAgICBSSV9UUkVFX0xCTF9SRU1PVkVfTk9ERTogJ1VzdcWEJyxcbiAgICAgIFJJX1RSRUVfTEJMX0RST1BfWk9ORTogJ1VwdcWbxIcgdHV0YWonXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyYW5zbGF0aW9uRm9yRU4oKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ2VuJywge1xuICAgICAgUklfVFJFRV9MQkxfQUREX05PREU6ICdBZGQgZGF0YScsXG4gICAgICBSSV9UUkVFX0xCTF9FRElUX05PREU6ICdFZGl0IGRhdGEnLFxuICAgICAgUklfVFJFRV9MQkxfUkVNT1ZFX05PREU6ICdEZWxldGUgZGF0YScsXG4gICAgICBSSV9UUkVFX0xCTF9EUk9QX1pPTkU6ICdEcm9wIGhlcmUgdG8gbW92ZSBkYXRhIHRvIHJvb3QgbGV2ZWwnXG4gICAgfSk7XG4gIH1cbn1cblxuIl19