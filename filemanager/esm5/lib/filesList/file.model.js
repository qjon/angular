/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileModel = /** @class */ (function () {
    function FileModel(data) {
        this._iconsFolder = FileModel.smallIconsFolder;
        this.selected = false;
        this.fromJSON(data);
    }
    Object.defineProperty(FileModel.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileModel.prototype, "thumbnailUrl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isImage() ? this._orgData.thumbnailUrl : "" + FileModel.smallIconsFolder + this.getFileExt() + ".png";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileModel.prototype, "url", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isImage() ? this._orgData.url : "" + FileModel.bigIconsFolder + this.getFileExt() + ".png";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    FileModel.prototype.fromJSON = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._orgData = data;
        this.name = data.name;
        this.selected = data.selected || false;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return this._orgData;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this._orgData.id;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this._orgData.height || 0;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getFileExt = /**
     * @return {?}
     */
    function () {
        return this.name.split('.').pop();
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getMime = /**
     * @return {?}
     */
    function () {
        return this._orgData.type;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this._orgData.width || 0;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.isImage = /**
     * @return {?}
     */
    function () {
        return ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'].indexOf(this.getMime()) > -1;
    };
    /**
     * @return {?}
     */
    FileModel.prototype.getSelectData = /**
     * @return {?}
     */
    function () {
        return {
            id: this.getId(),
            name: this.name,
            url: this.url,
            width: this.getWidth(),
            height: this.getHeight(),
            mime: this.getMime()
        };
    };
    FileModel.smallIconsFolder = '/icons/128px/';
    FileModel.bigIconsFolder = '/icons/512px/';
    return FileModel;
}());
export { FileModel };
if (false) {
    /** @type {?} */
    FileModel.smallIconsFolder;
    /** @type {?} */
    FileModel.bigIconsFolder;
    /**
     * @type {?}
     * @private
     */
    FileModel.prototype._orgData;
    /**
     * @type {?}
     * @private
     */
    FileModel.prototype._name;
    /**
     * @type {?}
     * @private
     */
    FileModel.prototype._iconsFolder;
    /** @type {?} */
    FileModel.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL2ZpbGVzTGlzdC9maWxlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQTtJQTJCRSxtQkFBbUIsSUFBZ0I7UUFwQjNCLGlCQUFZLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBRTNDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFtQnRCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQWxCRCxzQkFBSSwyQkFBSTs7OztRQUlSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBTkQsVUFBUyxJQUFZO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksbUNBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUcsU0FBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBTSxDQUFDO1FBQy9HLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMEJBQUc7Ozs7UUFBUDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBRyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBTSxDQUFDO1FBQ3BHLENBQUM7OztPQUFBOzs7OztJQU1NLDRCQUFROzs7O0lBQWYsVUFBZ0IsSUFBZ0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7SUFDekMsQ0FBQzs7OztJQUVNLDBCQUFNOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU0seUJBQUs7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sNkJBQVM7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFTSw4QkFBVTs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRU0sMkJBQU87OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDOzs7O0lBRU0sNEJBQVE7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLDJCQUFPOzs7SUFBZDtRQUNFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7Ozs7SUFFTSxpQ0FBYTs7O0lBQXBCO1FBQ0UsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBMUVNLDBCQUFnQixHQUFHLGVBQWUsQ0FBQztJQUNuQyx3QkFBYyxHQUFHLGVBQWUsQ0FBQztJQTBFMUMsZ0JBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQTVFWSxTQUFTOzs7SUFDcEIsMkJBQTBDOztJQUMxQyx5QkFBd0M7Ozs7O0lBRXhDLDZCQUE2Qjs7Ozs7SUFDN0IsMEJBQXNCOzs7OztJQUV0QixpQ0FBa0Q7O0lBRWxELDZCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU91dGVyRmlsZX0gZnJvbSAnLi9pbnRlcmZhY2UvSU91dGVyRmlsZSc7XG5pbXBvcnQge0lGaWxlTW9kZWx9IGZyb20gJy4vaW50ZXJmYWNlL0lGaWxlTW9kZWwnO1xuaW1wb3J0IHtJU2VsZWN0RmlsZX0gZnJvbSAnLi9pbnRlcmZhY2UvSVNlbGVjdEZpbGUnO1xuXG5leHBvcnQgY2xhc3MgRmlsZU1vZGVsIGltcGxlbWVudHMgSUZpbGVNb2RlbCB7XG4gIHN0YXRpYyBzbWFsbEljb25zRm9sZGVyID0gJy9pY29ucy8xMjhweC8nO1xuICBzdGF0aWMgYmlnSWNvbnNGb2xkZXIgPSAnL2ljb25zLzUxMnB4Lyc7XG5cbiAgcHJpdmF0ZSBfb3JnRGF0YTogSU91dGVyRmlsZTtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2ljb25zRm9sZGVyID0gRmlsZU1vZGVsLnNtYWxsSWNvbnNGb2xkZXI7XG5cbiAgcHVibGljIHNlbGVjdGVkID0gZmFsc2U7XG5cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCB0aHVtYm5haWxVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbWFnZSgpID8gdGhpcy5fb3JnRGF0YS50aHVtYm5haWxVcmwgOiBgJHtGaWxlTW9kZWwuc21hbGxJY29uc0ZvbGRlcn0ke3RoaXMuZ2V0RmlsZUV4dCgpfS5wbmdgO1xuICB9XG5cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ltYWdlKCkgPyB0aGlzLl9vcmdEYXRhLnVybCA6IGAke0ZpbGVNb2RlbC5iaWdJY29uc0ZvbGRlcn0ke3RoaXMuZ2V0RmlsZUV4dCgpfS5wbmdgO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IElPdXRlckZpbGUpIHtcbiAgICB0aGlzLmZyb21KU09OKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGZyb21KU09OKGRhdGE6IElPdXRlckZpbGUpIHtcbiAgICB0aGlzLl9vcmdEYXRhID0gZGF0YTtcblxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0YS5zZWxlY3RlZCB8fCBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZ0RhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZ0RhdGEuaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29yZ0RhdGEuaGVpZ2h0IHx8IDA7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsZUV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lLnNwbGl0KCcuJykucG9wKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JnRGF0YS50eXBlO1xuICB9XG5cbiAgcHVibGljIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29yZ0RhdGEud2lkdGggfHwgMDtcbiAgfVxuXG4gIHB1YmxpYyBpc0ltYWdlKCkge1xuICAgIHJldHVybiBbJ2ltYWdlL2pwZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdpbWFnZS9naWYnLCAnaW1hZ2UvcG5nJ10uaW5kZXhPZih0aGlzLmdldE1pbWUoKSkgPiAtMTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3REYXRhKCk6IElTZWxlY3RGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICB3aWR0aDogdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgbWltZTogdGhpcy5nZXRNaW1lKClcbiAgICB9O1xuICB9XG59XG4iXX0=