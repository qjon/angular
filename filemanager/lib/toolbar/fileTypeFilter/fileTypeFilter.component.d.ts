import { OnInit } from '@angular/core';
import { IFileTypeFilter } from '../interface/IFileTypeFilter';
import { FileTypeFilterService } from '../../services/fileTypeFilter.service';
export declare class FileTypeFilterComponent implements OnInit {
    private fileTypeFilter;
    typeFilterList: IFileTypeFilter[];
    selectedType: IFileTypeFilter;
    constructor(fileTypeFilter: FileTypeFilterService);
    ngOnInit(): void;
    /**
     * Set current filter and fire event
     * @param type
     */
    setFilterType(type: IFileTypeFilter): void;
}
