/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IFileManagerApi() { }
if (false) {
    /**
     * @param {?} node
     * @param {?} parentNodeId
     * @return {?}
     */
    IFileManagerApi.prototype.add = function (node, parentNodeId) { };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    IFileManagerApi.prototype.load = function (nodeId) { };
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    IFileManagerApi.prototype.move = function (srcNode, targetNode) { };
    /**
     * @param {?} node
     * @return {?}
     */
    IFileManagerApi.prototype.update = function (node) { };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    IFileManagerApi.prototype.remove = function (nodeId) { };
    /**
     * @param {?} file
     * @param {?} bounds
     * @return {?}
     */
    IFileManagerApi.prototype.cropFile = function (file, bounds) { };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    IFileManagerApi.prototype.loadFiles = function (nodeId) { };
    /**
     * @param {?} file
     * @return {?}
     */
    IFileManagerApi.prototype.removeFile = function (file) { };
    /**
     * @param {?} selectedFiles
     * @return {?}
     */
    IFileManagerApi.prototype.removeSelectedFiles = function (selectedFiles) { };
    /**
     * @param {?} file
     * @return {?}
     */
    IFileManagerApi.prototype.uploadFile = function (file) { };
    /**
     * @param {?} files
     * @param {?} node
     * @return {?}
     */
    IFileManagerApi.prototype.moveFile = function (files, node) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZpbGVNYW5hZ2VyQXBpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItZmlsZW1hbmFnZXIvIiwic291cmNlcyI6WyJsaWIvc3RvcmUvSUZpbGVNYW5hZ2VyQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxxQ0FjQzs7Ozs7OztJQWJDLGtFQUFvRTs7Ozs7SUFDcEUsdURBQStDOzs7Ozs7SUFDL0Msb0VBQWlGOzs7OztJQUNqRix1REFBaUQ7Ozs7O0lBQ2pELHlEQUErQzs7Ozs7O0lBRS9DLGlFQUF3RTs7Ozs7SUFDeEUsNERBQW9EOzs7OztJQUNwRCwyREFBa0Q7Ozs7O0lBQ2xELDZFQUFrRTs7Ozs7SUFDbEUsMkRBQXFEOzs7Ozs7SUFFckQsZ0VBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnQHJpZ24vYW5ndWxhcjItdHJlZSc7XG5pbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4uL2ZpbGVzTGlzdC9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lDcm9wQm91bmRzfSBmcm9tICcuLi9jcm9wL0lDcm9wQm91bmRzJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlTWFuYWdlckFwaSB7XG4gIGFkZChub2RlOiBJT3V0ZXJOb2RlLCBwYXJlbnROb2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG4gIGxvYWQobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT47XG4gIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuICB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG4gIHJlbW92ZShub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG5cbiAgY3JvcEZpbGUoZmlsZTogSU91dGVyRmlsZSwgYm91bmRzOiBJQ3JvcEJvdW5kcyk6IE9ic2VydmFibGU8SU91dGVyRmlsZT47XG4gIGxvYWRGaWxlcyhub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPjtcbiAgcmVtb3ZlRmlsZShmaWxlOiBJT3V0ZXJGaWxlKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcmVtb3ZlU2VsZWN0ZWRGaWxlcyhzZWxlY3RlZEZpbGVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHVwbG9hZEZpbGUoZmlsZTogSU91dGVyRmlsZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZT47XG5cbiAgbW92ZUZpbGUoZmlsZXM6IElPdXRlckZpbGVbXSwgbm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyRmlsZVtdPjtcbn1cbiJdfQ==