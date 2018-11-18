import { EventEmitter, OnDestroy } from '@angular/core';
import { IButton, IButtonData } from '../../dropdown/IButton';
import { ButtonClass } from '../../dropdown/Button.class';
import { CurrentDirectoryFilesService } from '../../services/currentDirectoryFiles.service';
import { FileManagerConfiguration } from '../../configuration/fileManagerConfiguration.service';
export declare class SelectionComponent implements OnDestroy {
    configuration: FileManagerConfiguration;
    private currentDirectoryFilesService;
    onMenuButtonClick: EventEmitter<{}>;
    selectButtonsList: IButton[];
    selectAllButton: ButtonClass;
    private unselectAllButton;
    private inverseSelectionButton;
    private deleteSelectionButton;
    private chooseSelectionButton;
    private onLoadFilesSubscriber;
    constructor(configuration: FileManagerConfiguration, currentDirectoryFilesService: CurrentDirectoryFilesService);
    ngOnDestroy(): void;
    /**
     * Initialize listener on load files
     */
    initListenOnLoadFiles(): void;
    onSelectDropdownClick(button: IButtonData): void;
    /**
     * Disable all dropdown buttons and main button
     */
    private disableAllButtons;
    /**
     * Enable all dropdown buttons and main button
     */
    private enableAllButtons;
    /**
     * Create list of buttons
     */
    private createBasicButtons;
    /**
     * Enable only select button
     */
    private enableSelectAllButton;
}
