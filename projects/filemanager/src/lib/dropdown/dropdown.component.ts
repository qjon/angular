import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IButtonData} from './IButton';

@Component({
  selector: 'ri-dropdown',
  styleUrls: ['./dropdown.scss'],
  templateUrl: './dropdown.html'
})

export class DropdownComponent {
  @Input()
  public mainButton: IButtonData;

  @Input()
  public buttons: IButtonData[];

  @Input()
  public displayMainButtonLabel: boolean;

  @Output()
  public onClick = new EventEmitter();

  public isOpen = false;

  public hide(): void {
    this.isOpen = false;
  }

  public selectButton(button: IButtonData): void {
    this.hide();
    this.onClick.emit(button);
  }

  public toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
