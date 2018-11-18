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
var SelectionComponent = /** @class */ (function () {
    function SelectionComponent(configuration, currentDirectoryFilesService) {
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
    SelectionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onLoadFilesSubscriber.unsubscribe();
    };
    /**
     * Initialize listener on load files
     */
    /**
     * Initialize listener on load files
     * @return {?}
     */
    SelectionComponent.prototype.initListenOnLoadFiles = /**
     * Initialize listener on load files
     * @return {?}
     */
    function () {
        var _this = this;
        this.onLoadFilesSubscriber = combineLatest(this.currentDirectoryFilesService.currentDirectoryFileIds$, this.currentDirectoryFilesService.selectedFiles$)
            .pipe(distinctUntilChanged())
            .subscribe(function (data) {
            /** @type {?} */
            var numberOfFiles = data[0].length;
            /** @type {?} */
            var numberOfSelectedFiles = data[1].length;
            _this.disableAllButtons();
            if (numberOfFiles > 0) {
                if (numberOfSelectedFiles > 0) {
                    _this.enableAllButtons();
                }
                else {
                    _this.enableSelectAllButton();
                }
            }
        });
    };
    /**
     * @param {?} button
     * @return {?}
     */
    SelectionComponent.prototype.onSelectDropdownClick = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        /** @type {?} */
        var event = new ToolbarEventModel(button.symbol);
        this.onMenuButtonClick.emit(event);
    };
    /**
     * Disable all dropdown buttons and main button
     */
    /**
     * Disable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    SelectionComponent.prototype.disableAllButtons = /**
     * Disable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    function () {
        this.selectAllButton.disabled = true;
        this.selectButtonsList
            .filter(function (button) {
            return !button.isDivider();
        })
            .forEach(function (button) {
            button.disabled = true;
        });
    };
    /**
     * Enable all dropdown buttons and main button
     */
    /**
     * Enable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    SelectionComponent.prototype.enableAllButtons = /**
     * Enable all dropdown buttons and main button
     * @private
     * @return {?}
     */
    function () {
        this.selectAllButton.disabled = false;
        this.selectButtonsList
            .forEach(function (button) {
            button.disabled = false;
        });
    };
    /**
     * Create list of buttons
     */
    /**
     * Create list of buttons
     * @private
     * @return {?}
     */
    SelectionComponent.prototype.createBasicButtons = /**
     * Create list of buttons
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var buttons = [
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
    };
    /**
     * Enable only select button
     */
    /**
     * Enable only select button
     * @private
     * @return {?}
     */
    SelectionComponent.prototype.enableSelectAllButton = /**
     * Enable only select button
     * @private
     * @return {?}
     */
    function () {
        this.selectAllButton.disabled = false;
        this.inverseSelectionButton.disabled = false;
    };
    SelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-selection-dropdown',
                    template: "<ri-dropdown *ngIf=\"configuration.isMultiSelection\" [mainButton]=\"selectAllButton\" [buttons]=\"selectButtonsList\"\n             (onClick)=\"onSelectDropdownClick($event)\"></ri-dropdown>\n"
                }] }
    ];
    /** @nocollapse */
    SelectionComponent.ctorParameters = function () { return [
        { type: FileManagerConfiguration },
        { type: CurrentDirectoryFilesService }
    ]; };
    SelectionComponent.propDecorators = {
        onMenuButtonClick: [{ type: Output }]
    };
    return SelectionComponent;
}());
export { SelectionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvc2VsZWN0aW9uRHJvcERvd24vc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQWEsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFDLGFBQWEsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUU5RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRDtJQW9ERSw0QkFBMEIsYUFBdUMsRUFDdEMsNEJBQTBEO1FBRDNELGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN0QyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBL0M5RSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXZDLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDdkMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLFlBQVksRUFBRSxzQkFBc0I7U0FDckMsQ0FBQyxDQUFD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SUFFSCwrQ0FNRzs7Ozs7SUFFSCxvREFNRzs7Ozs7SUFFSCxtREFNRzs7Ozs7SUFFSCxtREFNRzs7Ozs7SUFFSCxtREFBNEM7O0lBRXpCLDJDQUE4Qzs7Ozs7SUFDOUMsMERBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQnV0dG9uLCBJQnV0dG9uRGF0YX0gZnJvbSAnLi4vLi4vZHJvcGRvd24vSUJ1dHRvbic7XG5pbXBvcnQge0J1dHRvbkNsYXNzfSBmcm9tICcuLi8uLi9kcm9wZG93bi9CdXR0b24uY2xhc3MnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL21vZGVscy9idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtCdXR0b25EaXZpZGVyQ2xhc3N9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL0J1dHRvbkRpdmlkZXIuY2xhc3MnO1xuaW1wb3J0IHtDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXJyZW50RGlyZWN0b3J5RmlsZXMuc2VydmljZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0ZpbGVNYW5hZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi9maWxlTWFuYWdlckNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0lUb29sYmFyRXZlbnR9IGZyb20gJy4uL2ludGVyZmFjZS9JVG9vbGJhckV2ZW50JztcbmltcG9ydCB7VG9vbGJhckV2ZW50TW9kZWx9IGZyb20gJy4uL21vZGVscy90b29sYmFyRXZlbnQubW9kZWwnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaS1zZWxlY3Rpb24tZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0aW9uLmRyb3Bkb3duLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25NZW51QnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHNlbGVjdEJ1dHRvbnNMaXN0OiBJQnV0dG9uW107XG5cbiAgcHVibGljIHNlbGVjdEFsbEJ1dHRvbiA9IG5ldyBCdXR0b25DbGFzcyh7XG4gICAgc3ltYm9sOiBCdXR0b24uU0VMRUNUX0FMTCxcbiAgICBuYW1lOiAnUklfRk1fTEJMX1NFTEVDVF9BTEwnLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGljb246IHRydWUsXG4gICAgaWNvbkNzc0NsYXNzOiAnZmEgZmEtY2hlY2stc3F1YXJlLW8nXG4gIH0pO1xuXG4gIHByaXZhdGUgdW5zZWxlY3RBbGxCdXR0b24gPSBuZXcgQnV0dG9uQ2xhc3Moe1xuICAgIHN5bWJvbDogQnV0dG9uLlVOU0VMRUNUX0FMTCxcbiAgICBuYW1lOiAnUklfRk1fTEJMX1VOU0VMRUNUX0FMTCcsXG4gICAgbGFiZWw6IHRydWUsXG4gICAgaWNvbjogdHJ1ZSxcbiAgICBpY29uQ3NzQ2xhc3M6ICdmYSBmYS1zcXVhcmUtbydcbiAgfSk7XG5cbiAgcHJpdmF0ZSBpbnZlcnNlU2VsZWN0aW9uQnV0dG9uID0gbmV3IEJ1dHRvbkNsYXNzKHtcbiAgICBzeW1ib2w6IEJ1dHRvbi5JTlZFUlNFX1NFTEVDVElPTixcbiAgICBuYW1lOiAnUklfRk1fTEJMX0lOVkVSU0VfU0VMRUNUSU9OJyxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBpY29uOiB0cnVlLFxuICAgIGljb25Dc3NDbGFzczogJ2ZhIGZhLWNoZWNrLXNxdWFyZSdcbiAgfSk7XG5cbiAgcHJpdmF0ZSBkZWxldGVTZWxlY3Rpb25CdXR0b24gPSBuZXcgQnV0dG9uQ2xhc3Moe1xuICAgIHN5bWJvbDogQnV0dG9uLkRFTEVURV9TRUxFQ1RJT04sXG4gICAgbmFtZTogJ1JJX0ZNX0xCTF9ERUxFVEVfU0VMRUNUSU9OJyxcbiAgICBsYWJlbDogdHJ1ZSxcbiAgICBpY29uOiB0cnVlLFxuICAgIGljb25Dc3NDbGFzczogJ2ZhIGZhLXRyYXNoJ1xuICB9KTtcblxuICBwcml2YXRlIGNob29zZVNlbGVjdGlvbkJ1dHRvbiA9IG5ldyBCdXR0b25DbGFzcyh7XG4gICAgc3ltYm9sOiBCdXR0b24uQ0hPT1NFX1NFTEVDVElPTixcbiAgICBuYW1lOiAnUklfRk1fTEJMX0NIT09TRV9TRUxFQ1RJT04nLFxuICAgIGxhYmVsOiB0cnVlLFxuICAgIGljb246IHRydWUsXG4gICAgaWNvbkNzc0NsYXNzOiAnZmEgZmEtaW1hZ2UnXG4gIH0pO1xuXG4gIHByaXZhdGUgb25Mb2FkRmlsZXNTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb247XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBGaWxlTWFuYWdlckNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2U6IEN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UpIHtcblxuICAgIHRoaXMuc2VsZWN0QnV0dG9uc0xpc3QgPSB0aGlzLmNyZWF0ZUJhc2ljQnV0dG9ucygpO1xuXG4gICAgdGhpcy5pbml0TGlzdGVuT25Mb2FkRmlsZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uTG9hZEZpbGVzU3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgbGlzdGVuZXIgb24gbG9hZCBmaWxlc1xuICAgKi9cbiAgcHVibGljIGluaXRMaXN0ZW5PbkxvYWRGaWxlcygpIHtcbiAgICB0aGlzLm9uTG9hZEZpbGVzU3Vic2NyaWJlciA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2UuY3VycmVudERpcmVjdG9yeUZpbGVJZHMkLFxuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlLnNlbGVjdGVkRmlsZXMkXG4gICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IHN0cmluZ1tdW10pID0+IHtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZGaWxlcyA9IGRhdGFbMF0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBudW1iZXJPZlNlbGVjdGVkRmlsZXMgPSBkYXRhWzFdLmxlbmd0aDtcblxuICAgICAgICB0aGlzLmRpc2FibGVBbGxCdXR0b25zKCk7XG5cbiAgICAgICAgaWYgKG51bWJlck9mRmlsZXMgPiAwKSB7XG4gICAgICAgICAgaWYgKG51bWJlck9mU2VsZWN0ZWRGaWxlcyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQWxsQnV0dG9ucygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVNlbGVjdEFsbEJ1dHRvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBvblNlbGVjdERyb3Bkb3duQ2xpY2soYnV0dG9uOiBJQnV0dG9uRGF0YSkge1xuICAgIGNvbnN0IGV2ZW50OiBJVG9vbGJhckV2ZW50ID0gbmV3IFRvb2xiYXJFdmVudE1vZGVsKGJ1dHRvbi5zeW1ib2wpO1xuICAgIHRoaXMub25NZW51QnV0dG9uQ2xpY2suZW1pdChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhbGwgZHJvcGRvd24gYnV0dG9ucyBhbmQgbWFpbiBidXR0b25cbiAgICovXG4gIHByaXZhdGUgZGlzYWJsZUFsbEJ1dHRvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RBbGxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZWxlY3RCdXR0b25zTGlzdFxuICAgICAgLmZpbHRlcigoYnV0dG9uOiBJQnV0dG9uKSA9PiB7XG4gICAgICAgIHJldHVybiAhYnV0dG9uLmlzRGl2aWRlcigpO1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKChidXR0b246IElCdXR0b25EYXRhKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYWxsIGRyb3Bkb3duIGJ1dHRvbnMgYW5kIG1haW4gYnV0dG9uXG4gICAqL1xuICBwcml2YXRlIGVuYWJsZUFsbEJ1dHRvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RBbGxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2VsZWN0QnV0dG9uc0xpc3RcbiAgICAgIC5mb3JFYWNoKChidXR0b246IElCdXR0b25EYXRhKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGxpc3Qgb2YgYnV0dG9uc1xuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVCYXNpY0J1dHRvbnMoKTogSUJ1dHRvbltdIHtcbiAgICBjb25zdCBidXR0b25zID0gW1xuICAgICAgdGhpcy5zZWxlY3RBbGxCdXR0b24sXG4gICAgICB0aGlzLnVuc2VsZWN0QWxsQnV0dG9uLFxuICAgICAgdGhpcy5pbnZlcnNlU2VsZWN0aW9uQnV0dG9uLFxuICAgICAgbmV3IEJ1dHRvbkRpdmlkZXJDbGFzcygpLFxuICAgICAgdGhpcy5kZWxldGVTZWxlY3Rpb25CdXR0b24sXG4gICAgXTtcblxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYWxsb3dDaG9vc2VNdWx0aXBsZUZpbGVzKSB7XG4gICAgICBidXR0b25zLnB1c2gobmV3IEJ1dHRvbkRpdmlkZXJDbGFzcygpKTtcbiAgICAgIGJ1dHRvbnMucHVzaCh0aGlzLmNob29zZVNlbGVjdGlvbkJ1dHRvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9ubHkgc2VsZWN0IGJ1dHRvblxuICAgKi9cbiAgcHJpdmF0ZSBlbmFibGVTZWxlY3RBbGxCdXR0b24oKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RBbGxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmludmVyc2VTZWxlY3Rpb25CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxuIl19