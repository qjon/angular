import { IToolbarEvent } from '../interface/IToolbarEvent';
export declare class ToolbarEventModel implements IToolbarEvent {
    name: string;
    value: string;
    constructor(name: string, value?: string);
}
