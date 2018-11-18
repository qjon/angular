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
var CurrentDirectoryFilesService = /** @class */ (function () {
    function CurrentDirectoryFilesService(store, fileTypeFilter, searchFilterService) {
        this.store = store;
        this.fileTypeFilter = fileTypeFilter;
        this.searchFilterService = searchFilterService;
        /** @type {?} */
        var store$ = this.store.select(filemanagerStateSelector);
        /** @type {?} */
        var observable$ = store$;
        this.entities$ = observable$
            .pipe(map(function (state) { return state.entities; }), distinctUntilChanged());
        this.currentDirectoryFileIds$ = observable$
            .pipe(map(function (state) { return state.files; }), distinctUntilChanged());
        this.selectedFiles$ = store$
            .pipe(map(function (state) { return state.selectedFiles; }));
        this.files$ = this.getFilesStream();
        this.filteredFiles$ = this.getCurrentDirectoryFilesStream();
    }
    /**
     * Return stream of files
     */
    /**
     * Return stream of files
     * @private
     * @return {?}
     */
    CurrentDirectoryFilesService.prototype.getFilesStream = /**
     * Return stream of files
     * @private
     * @return {?}
     */
    function () {
        return this.currentDirectoryFileIds$
            .pipe(withLatestFrom(this.entities$), map(function (ar) {
            return {
                entities: ar[1],
                files: ar[0]
            };
        }), map(function (state) {
            return getAll(state)
                .map(function (file) {
                return new FileModel(file);
            });
        }));
    };
    /**
     * Return stream of current directory filtered files
     */
    /**
     * Return stream of current directory filtered files
     * @private
     * @return {?}
     */
    CurrentDirectoryFilesService.prototype.getCurrentDirectoryFilesStream = /**
     * Return stream of current directory filtered files
     * @private
     * @return {?}
     */
    function () {
        return combineLatest(this.files$, this.fileTypeFilter.filter$, this.searchFilterService.filter$)
            .pipe(map(function (data) {
            /** @type {?} */
            var files = data[0];
            /** @type {?} */
            var fileTypeFilter = data[1];
            /** @type {?} */
            var search = data[2].toLocaleLowerCase();
            if (search !== '') {
                files = files.filter(function (file) {
                    return file.name.toLocaleLowerCase().indexOf(search) > -1;
                });
            }
            if (fileTypeFilter && fileTypeFilter.mimes.length > 0) {
                files = files.filter(function (file) {
                    return fileTypeFilter.mimes.indexOf(file.getMime()) > -1;
                });
            }
            return files;
        }));
    };
    CurrentDirectoryFilesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrentDirectoryFilesService.ctorParameters = function () { return [
        { type: Store },
        { type: FileTypeFilterService },
        { type: SearchFilterService }
    ]; };
    return CurrentDirectoryFilesService;
}());
export { CurrentDirectoryFilesService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudERpcmVjdG9yeUZpbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acmlnbi9hbmd1bGFyMi1maWxlbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jdXJyZW50RGlyZWN0b3J5RmlsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNsQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQztBQUdqSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFDLGFBQWEsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUUvQztJQTRCRSxzQ0FBMkIsS0FBK0IsRUFDL0IsY0FBcUMsRUFDckMsbUJBQXdDO1FBRnhDLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOztZQUUzRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUM7O1lBQ3BELFdBQVcsR0FBRyxNQUFNO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVzthQUN6QixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsS0FBd0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFDLEVBQ2pELG9C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O0lBQ3ZDLHNEQUE2Qzs7Ozs7SUFDN0MsMkRBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVHJlZVN0YXRlfSBmcm9tICdAcmlnbi9hbmd1bGFyMi10cmVlJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyU2VydmljZX0gZnJvbSAnLi9zZWFyY2hGaWx0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpbGVUeXBlRmlsdGVyU2VydmljZX0gZnJvbSAnLi9maWxlVHlwZUZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7RmlsZU1vZGVsfSBmcm9tICcuLi9maWxlc0xpc3QvZmlsZS5tb2RlbCc7XG5pbXBvcnQge2ZpbGVtYW5hZ2VyU3RhdGVTZWxlY3RvciwgZ2V0QWxsLCBJRmlsZU1hbmFnZXJTdGF0ZSwgU3RvcmVFbnRpdGllc30gZnJvbSAnLi4vc3RvcmUvZmlsZS1tYW5hZ2VyLnJlZHVjZXInO1xuaW1wb3J0IHtJT3V0ZXJGaWxlfSBmcm9tICcuLi9maWxlc0xpc3QvaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZVR5cGVGaWx0ZXJ9IGZyb20gJy4uL3Rvb2xiYXIvaW50ZXJmYWNlL0lGaWxlVHlwZUZpbHRlcic7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB3aXRoTGF0ZXN0RnJvbX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbnREaXJlY3RvcnlGaWxlc1NlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBmaWxlc1xuICAgKi9cbiAgcHVibGljIGZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTW9kZWxbXT47XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgZmlsZXMgZm9yIGN1cnJlbnQgc2VsZWN0ZWQgZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgZmlsdGVyZWRGaWxlcyQ6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBmaWxlcyBhcyBKU09OIGRhdGFcbiAgICovXG4gIHB1YmxpYyBlbnRpdGllcyQ6IE9ic2VydmFibGU8U3RvcmVFbnRpdGllcz47XG5cbiAgLyoqXG4gICAqIExpc3Qgb2Ygc2VsZWN0ZWQgZmlsZSBpZHNcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZEZpbGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGZpbGVzIGluIGN1cnJlbnQgZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgY3VycmVudERpcmVjdG9yeUZpbGVJZHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8SUZpbGVNYW5hZ2VyU3RhdGU+LFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlVHlwZUZpbHRlcjogRmlsZVR5cGVGaWx0ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBzZWFyY2hGaWx0ZXJTZXJ2aWNlOiBTZWFyY2hGaWx0ZXJTZXJ2aWNlKSB7XG5cbiAgICBjb25zdCBzdG9yZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChmaWxlbWFuYWdlclN0YXRlU2VsZWN0b3IpO1xuICAgIGNvbnN0IG9ic2VydmFibGUkID0gc3RvcmUkO1xuICAgIHRoaXMuZW50aXRpZXMkID0gb2JzZXJ2YWJsZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHN0YXRlOiBJRmlsZU1hbmFnZXJTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXMpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApO1xuXG4gICAgdGhpcy5jdXJyZW50RGlyZWN0b3J5RmlsZUlkcyQgPSBvYnNlcnZhYmxlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoc3RhdGU6IElGaWxlTWFuYWdlclN0YXRlKSA9PiBzdGF0ZS5maWxlcyksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICk7XG5cbiAgICB0aGlzLnNlbGVjdGVkRmlsZXMkID0gc3RvcmUkXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChzdGF0ZTogSUZpbGVNYW5hZ2VyU3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsZXMpXG4gICAgICApO1xuXG4gICAgdGhpcy5maWxlcyQgPSB0aGlzLmdldEZpbGVzU3RyZWFtKCk7XG4gICAgdGhpcy5maWx0ZXJlZEZpbGVzJCA9IHRoaXMuZ2V0Q3VycmVudERpcmVjdG9yeUZpbGVzU3RyZWFtKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHN0cmVhbSBvZiBmaWxlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRGaWxlc1N0cmVhbSgpOiBPYnNlcnZhYmxlPEZpbGVNb2RlbFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERpcmVjdG9yeUZpbGVJZHMkXG4gICAgICAucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5lbnRpdGllcyQpLFxuICAgICAgICBtYXAoKGFyOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW50aXRpZXM6IGFyWzFdLFxuICAgICAgICAgICAgZmlsZXM6IGFyWzBdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoc3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBnZXRBbGwoc3RhdGUpXG4gICAgICAgICAgICAubWFwKChmaWxlOiBJT3V0ZXJGaWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgRmlsZU1vZGVsKGZpbGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBzdHJlYW0gb2YgY3VycmVudCBkaXJlY3RvcnkgZmlsdGVyZWQgZmlsZXNcbiAgICovXG4gIHByaXZhdGUgZ2V0Q3VycmVudERpcmVjdG9yeUZpbGVzU3RyZWFtKCk6IE9ic2VydmFibGU8RmlsZU1vZGVsW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuZmlsZXMkLFxuICAgICAgdGhpcy5maWxlVHlwZUZpbHRlci5maWx0ZXIkLFxuICAgICAgdGhpcy5zZWFyY2hGaWx0ZXJTZXJ2aWNlLmZpbHRlciRcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChkYXRhOiBbRmlsZU1vZGVsW10sIElGaWxlVHlwZUZpbHRlciwgc3RyaW5nXSk6IEZpbGVNb2RlbFtdID0+IHtcbiAgICAgICAgICBsZXQgZmlsZXMgPSBkYXRhWzBdO1xuICAgICAgICAgIGNvbnN0IGZpbGVUeXBlRmlsdGVyID0gZGF0YVsxXTtcbiAgICAgICAgICBjb25zdCBzZWFyY2ggPSBkYXRhWzJdLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoc2VhcmNoICE9PSAnJykge1xuICAgICAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoKGZpbGU6IEZpbGVNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZmlsZS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGlmIChmaWxlVHlwZUZpbHRlciAmJiBmaWxlVHlwZUZpbHRlci5taW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZTogRmlsZU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBmaWxlVHlwZUZpbHRlci5taW1lcy5pbmRleE9mKGZpbGUuZ2V0TWltZSgpKSA+IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZpbGVzO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIl19