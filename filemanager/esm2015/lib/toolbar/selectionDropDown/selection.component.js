/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonClass } from '../../dropdown/Button.class';
import { Button } from '../models/button.model';
import { ButtonDividerClass } from '../../dropdown/ButtonDivider.class';
import { CurrentDirectoryFilesService } from '../../services/currentDirectoryFiles.service';
import { combineLatest } from 'rxjs';
import { FileManagerConfiguration } from '../../configuration/fileManagerConfiguration.service';
import { ToolbarEventModel } from '../models/toolbarEvent.model';
import { distinctUntilChanged } from 'rxjs/operators';
export class SelectionComponent {
    /**
     * @param {?} configuration
     * @param {?} currentDirectoryFilesService
     */
    constructor(configuration, currentDirectoryFilesService) {
        this.configuration = configuration;
        this.currentDirectoryFilesService = currentDirectoryFilesService;
        this.onMenuButtonClick = new EventEmitter();
        this.selectAllButton = new ButtonClass({
            symbol: Button.SELECT_ALL,
            name: 'RI_FM_LBL_SELECT_ALL',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-check-square-o'
        });
        this.unselectAllButton = new ButtonClass({
            symbol: Button.UNSELECT_ALL,
            name: 'RI_FM_LBL_UNSELECT_ALL',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-square-o'
        });
        this.inverseSelectionButton = new ButtonClass({
            symbol: Button.INVERSE_SELECTION,
            name: 'RI_FM_LBL_INVERSE_SELECTION',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-check-square'
        });
        this.deleteSelectionButton = new ButtonClass({
            symbol: Button.DELETE_SELECTION,
            name: 'RI_FM_LBL_DELETE_SELECTION',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-trash'
        });
        this.chooseSelectionButton = new ButtonClass({
            symbol: Button.CHOOSE_SELECTION,
            name: 'RI_FM_LBL_CHOOSE_SELECTION',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-image'
        });
        this.selectButtonsList = this.createBasicButtons();
        this.initListenOnLoadFiles();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onLoadFilesSubscriber.unsubscribe();
    }
    /**
     * Initialize listener on load files
     * @return {?}
     */
    initListenOnLoadFiles() {
        this.onLoadFilesSubscriber = combineLatest(this.currentDirectoryFilesService.currentDirectoryFileIds$, this.currentDirectoryFilesService.selectedFiles$)
            .pipe(distinctUntilChanged())
            .subscribe((data) => {
            /** @type {?} */
            const numberOfFiles = data[0].length;
            /** @type {?} */
            const numberOfSelectedFiles = data[1].length;
            this.disableAllButtons();
            if (numberOfFiles > 0) {
                if (numberOfSelectedFiles > 0) {
                    this.enableAllButtons();
                }
                else {
                    this.enableSelectAllButton();
                }
            }
        });
    }
    /**
     * @param {?} button
     * @return {?}
     */
    onSelectDropdownClick(button) {
        /** @type {?} */
        const event = new ToolbarEventModel(button.symbol);
        this.onMenuButtonClick.emit(event);
    }
    /**
     * Disable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    disableAllButtons() {
        this.selectAllButton.disabled = true;
        this.selectButtonsList
            .filter((button) => {
            return !button.isDivider();
        })
            .forEach((button) => {
            button.disabled = true;
        });
    }
    /**
     * Enable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    enableAllButtons() {
        this.selectAllButton.disabled = false;
        this.selectButtonsList
            .forEach((button) => {
            button.disabled = false;
        });
    }
    /**
     * Create list of buttons
     * @private
     * @return {?}
     */
    createBasicButtons() {
        /** @type {?} */
        const buttons = [
            this.selectAllButton,
            this.unselectAllButton,
            this.inverseSelectionButton,
            new ButtonDividerClass(),
            this.deleteSelectionButton,
        ];
        if (this.configuration.allowChooseMultipleFiles) {
            buttons.push(new ButtonDividerClass());
            buttons.push(this.chooseSelectionButton);
        }
        return buttons;
    }
    /**
     * Enable only select button
     * @private
     * @return {?}
     */
    enableSelectAllButton() {
        this.selectAllButton.disabled = false;
        this.inverseSelectionButton.disabled = false;
    }
}
SelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ri-selection-dropdown',
                template: "<ri-dropdown *ngIf=\"configuration.isMultiSelection\" [mainButton]=\"selectAllButton\" [buttons]=\"selectButtonsList\"\n             (onClick)=\"onSelectDropdownClick($event)\"></ri-dropdown>\n"
            }] }
];
/** @nocollapse */
SelectionComponent.ctorParameters = () => [
    { type: FileManagerConfiguration },
    { type: CurrentDirectoryFilesService }
];
SelectionComponent.propDecorators = {
    onMenuButtonClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SelectionComponent.prototype.onMenuButtonClick;
    /** @type {?} */
    SelectionComponent.prototype.selectButtonsList;
    /** @type {?} */
    SelectionComponent.prototype.selectAllButton;
    /**
     * @type {?}
     * @private
     */
    SelectionComponent.prototype.unselectAllButton;
    /**
     * @type {?}
     * @private
     */
    SelectionComponent.prototype.inverseSelectionButton;
    /**
     * @type {?}
     * @private
     */
    SelectionComponent.prototype.deleteSelectionButton;
    /**
     * @type {?}
     * @private
     */
    SelectionComponent.prototype.chooseSelectionButton;
    /**
     * @type {?}
     * @private
     */
    SelectionComponent.prototype.onLoadFilesSubscriber;
    /** @type {?} */
    SelectionComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    SelectionComponent.prototype.currentDirectoryFilesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvc2VsZWN0aW9uRHJvcERvd24vc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQWEsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFDLGFBQWEsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUU5RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU1wRCxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQWdEN0IsWUFBMEIsYUFBdUMsRUFDdEMsNEJBQTBEO1FBRDNELGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN0QyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBL0M5RSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXZDLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDdkMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLFlBQVksRUFBRSxz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dGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lCdXR0b24sIElCdXR0b25EYXRhfSBmcm9tICcuLi8uLi9kcm9wZG93bi9JQnV0dG9uJztcbmltcG9ydCB7QnV0dG9uQ2xhc3N9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL0J1dHRvbi5jbGFzcyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vbW9kZWxzL2J1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0J1dHRvbkRpdmlkZXJDbGFzc30gZnJvbSAnLi4vLi4vZHJvcGRvd24vQnV0dG9uRGl2aWRlci5jbGFzcyc7XG5pbXBvcnQge0N1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2N1cnJlbnREaXJlY3RvcnlGaWxlcy5zZXJ2aWNlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmlsZU1hbmFnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uL2ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7SVRvb2xiYXJFdmVudH0gZnJvbSAnLi4vaW50ZXJmYWNlL0lUb29sYmFyRXZlbnQnO1xuaW1wb3J0IHtUb29sYmFyRXZlbnRNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL3Rvb2xiYXJFdmVudC5tb2RlbCc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpLXNlbGVjdGlvbi1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Rpb24uZHJvcGRvd24uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbk1lbnVCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgc2VsZWN0QnV0dG9uc0xpc3Q6IElCdXR0b25bXTtcblxuICBwdWJsaWMgc2VsZWN0QWxsQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5TRUxFQ1RfQUxMLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfU0VMRUNUX0FMTCcsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS1jaGVjay1zcXVhcmUtbydcbiAgfSk7XG5cbiAgcHJpdmF0ZSB1bnNlbGVjdEFsbEJ1dHRvbiA9IG5ldyBCdXR0b25DbGFzcyh7XG4gICAgc3ltYm9sOiBCdXR0b24uVU5TRUxFQ1RfQUxMLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfVU5TRUxFQ1RfQUxMJyxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBpY29uOiB0cnVlLFxuICAgIGljb25Dc3NDbGFzczogJ2ZhIGZhLXNxdWFyZS1vJ1xuICB9KTtcblxuICBwcml2YXRlIGludmVyc2VTZWxlY3Rpb25CdXR0b24gPSBuZXcgQnV0dG9uQ2xhc3Moe1xuICAgIHN5bWJvbDogQnV0dG9uLklOVkVSU0VfU0VMRUNUSU9OLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfSU5WRVJTRV9TRUxFQ1RJT04nLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGljb246IHRydWUsXG4gICAgaWNvbkNzc0NsYXNzOiAnZmEgZmEtY2hlY2stc3F1YXJlJ1xuICB9KTtcblxuICBwcml2YXRlIGRlbGV0ZVNlbGVjdGlvbkJ1dHRvbiA9IG5ldyBCdXR0b25DbGFzcyh7XG4gICAgc3ltYm9sOiBCdXR0b24uREVMRVRFX1NFTEVDVElPTixcbiAgICBuYW1lOiAnUklfRk1fTEJMX0RFTEVURV9TRUxFQ1RJT04nLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGljb246IHRydWUsXG4gICAgaWNvbkNzc0NsYXNzOiAnZmEgZmEtdHJhc2gnXG4gIH0pO1xuXG4gIHByaXZhdGUgY2hvb3NlU2VsZWN0aW9uQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5DSE9PU0VfU0VMRUNUSU9OLFxuICAgIG5hbWU6ICdSSV9GTV9MQkxfQ0hPT1NFX1NFTEVDVElPTicsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS1pbWFnZSdcbiAgfSk7XG5cbiAgcHJpdmF0ZSBvbkxvYWRGaWxlc1N1YnNjcmliZXI6IFN1YnNjcmlwdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ3VyYXRpb246IEZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZTogQ3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZSkge1xuXG4gICAgdGhpcy5zZWxlY3RCdXR0b25zTGlzdCA9IHRoaXMuY3JlYXRlQmFzaWNCdXR0b25zKCk7XG5cbiAgICB0aGlzLmluaXRMaXN0ZW5PbkxvYWRGaWxlcygpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25Mb2FkRmlsZXNTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBsaXN0ZW5lciBvbiBsb2FkIGZpbGVzXG4gICAqL1xuICBwdWJsaWMgaW5pdExpc3Rlbk9uTG9hZEZpbGVzKCkge1xuICAgIHRoaXMub25Mb2FkRmlsZXNTdWJzY3JpYmVyID0gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVzU2VydmljZS5jdXJyZW50RGlyZWN0b3J5RmlsZUlkcyQsXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uuc2VsZWN0ZWRGaWxlcyRcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nW11bXSkgPT4ge1xuICAgICAgICBjb25zdCBudW1iZXJPZkZpbGVzID0gZGF0YVswXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG51bWJlck9mU2VsZWN0ZWRGaWxlcyA9IGRhdGFbMV0ubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZUFsbEJ1dHRvbnMoKTtcblxuICAgICAgICBpZiAobnVtYmVyT2ZGaWxlcyA+IDApIHtcbiAgICAgICAgICBpZiAobnVtYmVyT2ZTZWxlY3RlZEZpbGVzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVBbGxCdXR0b25zKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU2VsZWN0QWxsQnV0dG9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIG9uU2VsZWN0RHJvcGRvd25DbGljayhidXR0b246IElCdXR0b25EYXRhKSB7XG4gICAgY29uc3QgZXZlbnQ6IElUb29sYmFyRXZlbnQgPSBuZXcgVG9vbGJhckV2ZW50TW9kZWwoYnV0dG9uLnN5bWJvbCk7XG4gICAgdGhpcy5vbk1lbnVCdXR0b25DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFsbCBkcm9wZG93biBidXR0b25zIGFuZCBtYWluIGJ1dHRvblxuICAgKi9cbiAgcHJpdmF0ZSBkaXNhYmxlQWxsQnV0dG9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNlbGVjdEJ1dHRvbnNMaXN0XG4gICAgICAuZmlsdGVyKChidXR0b246IElCdXR0b24pID0+IHtcbiAgICAgICAgcmV0dXJuICFidXR0b24uaXNEaXZpZGVyKCk7XG4gICAgICB9KVxuICAgICAgLmZvckVhY2goKGJ1dHRvbjogSUJ1dHRvbkRhdGEpID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbGwgZHJvcGRvd24gYnV0dG9ucyBhbmQgbWFpbiBidXR0b25cbiAgICovXG4gIHByaXZhdGUgZW5hYmxlQWxsQnV0dG9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZWxlY3RCdXR0b25zTGlzdFxuICAgICAgLmZvckVhY2goKGJ1dHRvbjogSUJ1dHRvbkRhdGEpID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbGlzdCBvZiBidXR0b25zXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUJhc2ljQnV0dG9ucygpOiBJQnV0dG9uW10ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgICB0aGlzLnNlbGVjdEFsbEJ1dHRvbixcbiAgICAgIHRoaXMudW5zZWxlY3RBbGxCdXR0b24sXG4gICAgICB0aGlzLmludmVyc2VTZWxlY3Rpb25CdXR0b24sXG4gICAgICBuZXcgQnV0dG9uRGl2aWRlckNsYXNzKCksXG4gICAgICB0aGlzLmRlbGV0ZVNlbGVjdGlvbkJ1dHRvbixcbiAgICBdO1xuXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hbGxvd0Nob29zZU11bHRpcGxlRmlsZXMpIHtcbiAgICAgIGJ1dHRvbnMucHVzaChuZXcgQnV0dG9uRGl2aWRlckNsYXNzKCkpO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMuY2hvb3NlU2VsZWN0aW9uQnV0dG9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb25seSBzZWxlY3QgYnV0dG9uXG4gICAqL1xuICBwcml2YXRlIGVuYWJsZVNlbGVjdEFsbEJ1dHRvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW52ZXJzZVNlbGVjdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG59XG4iXX0=