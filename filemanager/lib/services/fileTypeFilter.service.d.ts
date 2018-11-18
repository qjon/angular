import { BehaviorSubject } from 'rxjs';
import { IFileTypeFilter } from '../toolbar/interface/IFileTypeFilter';
export declare class FileTypeFilterService {
    /**
     * File type filter
     */
    filter$: BehaviorSubject<IFileTypeFilter | null>;
    getValue(): IFileTypeFilter | null;
    setValue(value: IFileTypeFilter | null): void;
}
