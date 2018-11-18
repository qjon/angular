import { SearchFilterService } from './searchFilter.service';
import { FileTypeFilterService } from './fileTypeFilter.service';
import { Store } from '@ngrx/store';
import { FileModel } from '../filesList/file.model';
import { IFileManagerState, StoreEntities } from '../store/file-manager.reducer';
import { Observable } from 'rxjs';
export declare class CurrentDirectoryFilesService {
    private store;
    private fileTypeFilter;
    private searchFilterService;
    /**
     * List of all files
     */
    files$: Observable<FileModel[]>;
    /**
     * List of files for current selected directory
     */
    filteredFiles$: Observable<FileModel[]>;
    /**
     * List of all files as JSON data
     */
    entities$: Observable<StoreEntities>;
    /**
     * List of selected file ids
     */
    selectedFiles$: Observable<string[]>;
    /**
     * List of all files in current directory
     */
    currentDirectoryFileIds$: Observable<string[]>;
    constructor(store: Store<IFileManagerState>, fileTypeFilter: FileTypeFilterService, searchFilterService: SearchFilterService);
    /**
     * Return stream of files
     */
    private getFilesStream;
    /**
     * Return stream of current directory filtered files
     */
    private getCurrentDirectoryFilesStream;
}
