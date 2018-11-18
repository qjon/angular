import { EventEmitter } from '@angular/core';
import { IButtonData } from './IButton';
export declare class DropdownComponent {
    mainButton: IButtonData;
    buttons: IButtonData[];
    displayMainButtonLabel: boolean;
    onClick: EventEmitter<{}>;
    isOpen: boolean;
    hide(): void;
    selectButton(button: IButtonData): void;
    toggleOpen(): void;
}
