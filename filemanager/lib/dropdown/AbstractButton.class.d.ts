import { IButton, IButtonData } from './IButton';
export declare abstract class AbstractButtonClass implements IButton {
    symbol: string;
    name: string;
    label: boolean;
    icon: boolean;
    iconCssClass: string;
    disabled?: boolean;
    constructor(data: IButtonData);
    abstract isDivider(): boolean;
}
