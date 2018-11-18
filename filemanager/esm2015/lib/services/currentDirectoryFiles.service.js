/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SearchFilterService } from './searchFilter.service';
import { FileTypeFilterService } from './fileTypeFilter.service';
import { Store } from '@ngrx/store';
import { FileModel } from '../filesList/file.model';
import { filemanagerStateSelector, getAll } from '../store/file-manager.reducer';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, withLatestFrom } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
export class CurrentDirectoryFilesService {
    /**
     * @param {?} store
     * @param {?} fileTypeFilter
     * @param {?} searchFilterService
     */
    constructor(store, fileTypeFilter, searchFilterService) {
        this.store = store;
        this.fileTypeFilter = fileTypeFilter;
        this.searchFilterService = searchFilterService;
        /** @type {?} */
        const store$ = this.store.select(filemanagerStateSelector);
        /** @type {?} */
        const observable$ = store$;
        this.entities$ = observable$
            .pipe(map((state) => state.entities), distinctUntilChanged());
        this.currentDirectoryFileIds$ = observable$
            .pipe(map((state) => state.files), distinctUntilChanged());
        this.selectedFiles$ = store$
            .pipe(map((state) => state.selectedFiles));
        this.files$ = this.getFilesStream();
        this.filteredFiles$ = this.getCurrentDirectoryFilesStream();
    }
    /**
     * Return stream of files
     * @private
     * @return {?}
     */
    getFilesStream() {
        return this.currentDirectoryFileIds$
            .pipe(withLatestFrom(this.entities$), map((ar) => {
            return {
                entities: ar[1],
                files: ar[0]
            };
        }), map((state) => {
            return getAll(state)
                .map((file) => {
                return new FileModel(file);
            });
        }));
    }
    /**
     * Return stream of current directory filtered files
     * @private
     * @return {?}
     */
    getCurrentDirectoryFilesStream() {
        return combineLatest(this.files$, this.fileTypeFilter.filter$, this.searchFilterService.filter$)
            .pipe(map((data) => {
            /** @type {?} */
            let files = data[0];
            /** @type {?} */
            const fileTypeFilter = data[1];
            /** @type {?} */
            const search = data[2].toLocaleLowerCase();
            if (search !== '') {
                files = files.filter((file) => {
                    return file.name.toLocaleLowerCase().indexOf(search) > -1;
                });
            }
            if (fileTypeFilter && fileTypeFilter.mimes.length > 0) {
                files = files.filter((file) => {
                    return fileTypeFilter.mimes.indexOf(file.getMime()) > -1;
                });
            }
            return files;
        }));
    }
}
CurrentDirectoryFilesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrentDirectoryFilesService.ctorParameters = () => [
    { type: Store },
    { type: FileTypeFilterService },
    { type: SearchFilterService }
];
if (false) {
    /**
     * List of all files
     * @type {?}
     */
    CurrentDirectoryFilesService.prototype.files$;
    /**
     * List of files for current selected directory
     * @type {?}
     */
    CurrentDirectoryFilesService.prototype.filteredFiles$;
    /**
     * List of all files as JSON data
     * @type {?}
     */
    CurrentDirectoryFilesService.prototype.entities$;
    /**
     * List of selected file ids
     * @type {?}
     */
    CurrentDirectoryFilesService.prototype.selectedFiles$;
    /**
     * List of all files in current directory
     * @type {?}
     */
    CurrentDirectoryFilesService.prototype.currentDirectoryFileIds$;
    /**
     * @type {?}
     * @private
     */
    CurrentDirectoryFilesService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    CurrentDirectoryFilesService.prototype.fileTypeFilter;
    /**
     * @type {?}
     * @private
     */
    CurrentDirectoryFilesService.prototype.searchFilterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jdXJyZW50RGlyZWN0b3J5RmlsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNsQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQztBQUdqSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFDLGFBQWEsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUcvQyxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7SUEyQnZDLFlBQTJCLEtBQStCLEVBQy9CLGNBQXFDLEVBQ3JDLG1CQUF3QztRQUZ4QyxVQUFLLEdBQUwsS0FBSyxDQUEwQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjs7Y0FFM0QsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDOztjQUNwRCxXQUFXLEdBQUcsTUFBTTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVc7YUFDekIsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxR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QzdDLDJEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRyZWVTdGF0ZX0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclNlcnZpY2V9IGZyb20gJy4vc2VhcmNoRmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWxlVHlwZUZpbHRlclNlcnZpY2V9IGZyb20gJy4vZmlsZVR5cGVGaWx0ZXIuc2VydmljZSc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge0ZpbGVNb2RlbH0gZnJvbSAnLi4vZmlsZXNMaXN0L2ZpbGUubW9kZWwnO1xuaW1wb3J0IHtmaWxlbWFuYWdlclN0YXRlU2VsZWN0b3IsIGdldEFsbCwgSUZpbGVNYW5hZ2VyU3RhdGUsIFN0b3JlRW50aXRpZXN9IGZyb20gJy4uL3N0b3JlL2ZpbGUtbWFuYWdlci5yZWR1Y2VyJztcbmltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi4vZmlsZXNMaXN0L2ludGVyZmFjZS9JT3V0ZXJGaWxlJztcbmltcG9ydCB7SUZpbGVUeXBlRmlsdGVyfSBmcm9tICcuLi90b29sYmFyL2ludGVyZmFjZS9JRmlsZVR5cGVGaWx0ZXInO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgd2l0aExhdGVzdEZyb219IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW50RGlyZWN0b3J5RmlsZXNTZXJ2aWNlIHtcblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgZmlsZXNcbiAgICovXG4gIHB1YmxpYyBmaWxlcyQ6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGZpbGVzIGZvciBjdXJyZW50IHNlbGVjdGVkIGRpcmVjdG9yeVxuICAgKi9cbiAgcHVibGljIGZpbHRlcmVkRmlsZXMkOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPjtcblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgZmlsZXMgYXMgSlNPTiBkYXRhXG4gICAqL1xuICBwdWJsaWMgZW50aXRpZXMkOiBPYnNlcnZhYmxlPFN0b3JlRW50aXRpZXM+O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHNlbGVjdGVkIGZpbGUgaWRzXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0ZWRGaWxlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBmaWxlcyBpbiBjdXJyZW50IGRpcmVjdG9yeVxuICAgKi9cbiAgcHVibGljIGN1cnJlbnREaXJlY3RvcnlGaWxlSWRzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElGaWxlTWFuYWdlclN0YXRlPixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmlsZVR5cGVGaWx0ZXI6IEZpbGVUeXBlRmlsdGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgc2VhcmNoRmlsdGVyU2VydmljZTogU2VhcmNoRmlsdGVyU2VydmljZSkge1xuXG4gICAgY29uc3Qgc3RvcmUkID0gdGhpcy5zdG9yZS5zZWxlY3QoZmlsZW1hbmFnZXJTdGF0ZVNlbGVjdG9yKTtcbiAgICBjb25zdCBvYnNlcnZhYmxlJCA9IHN0b3JlJDtcbiAgICB0aGlzLmVudGl0aWVzJCA9IG9ic2VydmFibGUkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKTtcblxuICAgIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVJZHMkID0gb2JzZXJ2YWJsZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSkgPT4gc3RhdGUuZmlsZXMpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApO1xuXG4gICAgdGhpcy5zZWxlY3RlZEZpbGVzJCA9IHN0b3JlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbGVzKVxuICAgICAgKTtcblxuICAgIHRoaXMuZmlsZXMkID0gdGhpcy5nZXRGaWxlc1N0cmVhbSgpO1xuICAgIHRoaXMuZmlsdGVyZWRGaWxlcyQgPSB0aGlzLmdldEN1cnJlbnREaXJlY3RvcnlGaWxlc1N0cmVhbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBzdHJlYW0gb2YgZmlsZXNcbiAgICovXG4gIHByaXZhdGUgZ2V0RmlsZXNTdHJlYW0oKTogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnREaXJlY3RvcnlGaWxlSWRzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuZW50aXRpZXMkKSxcbiAgICAgICAgbWFwKChhcjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVudGl0aWVzOiBhclsxXSxcbiAgICAgICAgICAgIGZpbGVzOiBhclswXVxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHN0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gZ2V0QWxsKHN0YXRlKVxuICAgICAgICAgICAgLm1hcCgoZmlsZTogSU91dGVyRmlsZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpbGVNb2RlbChmaWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gc3RyZWFtIG9mIGN1cnJlbnQgZGlyZWN0b3J5IGZpbHRlcmVkIGZpbGVzXG4gICAqL1xuICBwcml2YXRlIGdldEN1cnJlbnREaXJlY3RvcnlGaWxlc1N0cmVhbSgpOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmZpbGVzJCxcbiAgICAgIHRoaXMuZmlsZVR5cGVGaWx0ZXIuZmlsdGVyJCxcbiAgICAgIHRoaXMuc2VhcmNoRmlsdGVyU2VydmljZS5maWx0ZXIkXG4gICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoZGF0YTogW0ZpbGVNb2RlbFtdLCBJRmlsZVR5cGVGaWx0ZXIsIHN0cmluZ10pOiBGaWxlTW9kZWxbXSA9PiB7XG4gICAgICAgICAgbGV0IGZpbGVzID0gZGF0YVswXTtcbiAgICAgICAgICBjb25zdCBmaWxlVHlwZUZpbHRlciA9IGRhdGFbMV07XG4gICAgICAgICAgY29uc3Qgc2VhcmNoID0gZGF0YVsyXS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKHNlYXJjaCAhPT0gJycpIHtcbiAgICAgICAgICAgIGZpbGVzID0gZmlsZXMuZmlsdGVyKChmaWxlOiBGaWxlTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbGUubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoKSA+IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBpZiAoZmlsZVR5cGVGaWx0ZXIgJiYgZmlsZVR5cGVGaWx0ZXIubWltZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoKGZpbGU6IEZpbGVNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZmlsZVR5cGVGaWx0ZXIubWltZXMuaW5kZXhPZihmaWxlLmdldE1pbWUoKSkgPiAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmaWxlcztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==