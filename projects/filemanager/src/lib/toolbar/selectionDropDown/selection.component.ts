import {Component, EventEmitter, Inject, OnDestroy, Output} from '@angular/core';
import {IButton, IButtonData} from '../../dropdown/IButton';
import {ButtonClass} from '../../dropdown/Button.class';
import {Button} from '../models/button.model';
import {ButtonDividerClass} from '../../dropdown/ButtonDivider.class';
import {CurrentDirectoryFilesService} from '../../services/currentDirectoryFiles.service';
import {combineLatest, Subscription} from 'rxjs';
import {FileManagerConfiguration} from '../../configuration/fileManagerConfiguration.service';
import {IToolbarEvent} from '../interface/IToolbarEvent';
import {ToolbarEventModel} from '../models/toolbarEvent.model';
import {distinctUntilChanged} from 'rxjs/operators';
import {FILEMANAGER_TRANSLATION_TOKEN} from '../../services/filemanager-translation.token';
import {IFilemanagerTranslation} from '../../interfaces/filemanager-translation.interface';

@Component({
  selector: 'ri-selection-dropdown',
  templateUrl: './selection.dropdown.html'
})
export class SelectionComponent implements OnDestroy {
  @Output()
  public onMenuButtonClick = new EventEmitter();

  public selectButtonsList: IButton[];

  public selectAllButton = new ButtonClass({
    symbol: Button.SELECT_ALL,
    name: this.filemanagerTranslations.RI_FM_LBL_SELECT_ALL,
    label: true,
    icon: true,
    iconCssClass: 'fa fa-check-square-o'
  });

  private unselectAllButton = new ButtonClass({
    symbol: Button.UNSELECT_ALL,
    name: this.filemanagerTranslations.RI_FM_LBL_UNSELECT_ALL,
    label: true,
    icon: true,
    iconCssClass: 'fa fa-square-o'
  });

  private inverseSelectionButton = new ButtonClass({
    symbol: Button.INVERSE_SELECTION,
    name: this.filemanagerTranslations.RI_FM_LBL_INVERSE_SELECTION,
    label: true,
    icon: true,
    iconCssClass: 'fa fa-check-square'
  });

  private deleteSelectionButton = new ButtonClass({
    symbol: Button.DELETE_SELECTION,
    name: this.filemanagerTranslations.RI_FM_LBL_DELETE_SELECTION,
    label: true,
    icon: true,
    iconCssClass: 'fa fa-trash'
  });

  private chooseSelectionButton = new ButtonClass({
    symbol: Button.CHOOSE_SELECTION,
    name: this.filemanagerTranslations.RI_FM_LBL_CHOOSE_SELECTION,
    label: true,
    icon: true,
    iconCssClass: 'fa fa-image'
  });

  private onLoadFilesSubscriber: Subscription;

  public constructor(public configuration: FileManagerConfiguration,
                     private currentDirectoryFilesService: CurrentDirectoryFilesService,
                     @Inject(FILEMANAGER_TRANSLATION_TOKEN) public filemanagerTranslations: IFilemanagerTranslation) {

    this.selectButtonsList = this.createBasicButtons();

    this.initListenOnLoadFiles();
  }

  public ngOnDestroy() {
    this.onLoadFilesSubscriber.unsubscribe();
  }

  /**
   * Initialize listener on load files
   */
  public initListenOnLoadFiles() {
    this.onLoadFilesSubscriber = combineLatest(
      this.currentDirectoryFilesService.currentDirectoryFileIds$,
      this.currentDirectoryFilesService.selectedFiles$
    )
      .pipe(
        distinctUntilChanged()
      )
      .subscribe((data: string[][]) => {
        const numberOfFiles = data[0].length;
        const numberOfSelectedFiles = data[1].length;

        this.disableAllButtons();

        if (numberOfFiles > 0) {
          if (numberOfSelectedFiles > 0) {
            this.enableAllButtons();
          } else {
            this.enableSelectAllButton();
          }
        }
      });
  }


  public onSelectDropdownClick(button: IButtonData) {
    const event: IToolbarEvent = new ToolbarEventModel(button.symbol);
    this.onMenuButtonClick.emit(event);
  }

  /**
   * Disable all dropdown buttons and main button
   */
  private disableAllButtons(): void {
    this.selectAllButton.disabled = true;

    this.selectButtonsList
      .filter((button: IButton) => {
        return !button.isDivider();
      })
      .forEach((button: IButtonData) => {
        button.disabled = true;
      });
  }

  /**
   * Enable all dropdown buttons and main button
   */
  private enableAllButtons(): void {
    this.selectAllButton.disabled = false;

    this.selectButtonsList
      .forEach((button: IButtonData) => {
        button.disabled = false;
      });
  }

  /**
   * Create list of buttons
   */
  private createBasicButtons(): IButton[] {
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
   */
  private enableSelectAllButton(): void {
    this.selectAllButton.disabled = false;
    this.inverseSelectionButton.disabled = false;
  }
}
