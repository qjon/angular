import { OnChanges } from '@angular/core';
import { IFileModel } from '../filesList/interface/IFileModel';
export declare class PreviewComponent implements OnChanges {
    /**
     * Collection of files
     */
    files: IFileModel[];
    /**
     * Current viewed file
     */
    file: IFileModel;
    /**
     * Current index
     */
    currentIndex: number;
    length: number;
    ngOnChanges(): void;
    next(): void;
    prev(): void;
    keyEvent(event: KeyboardEvent): void;
}
