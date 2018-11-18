import { BehaviorSubject } from 'rxjs';
export declare class SearchFilterService {
    /**
     * File type filter
     */
    filter$: BehaviorSubject<string>;
    getValue(): string;
    setValue(value: string): void;
}
