/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FileModel {
    /**
     * @param {?} data
     */
    constructor(data) {
        this._iconsFolder = FileModel.smallIconsFolder;
        this.selected = false;
        this.fromJSON(data);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @return {?}
     */
    get thumbnailUrl() {
        return this.isImage() ? this._orgData.thumbnailUrl : `${FileModel.smallIconsFolder}${this.getFileExt()}.png`;
    }
    /**
     * @return {?}
     */
    get url() {
        return this.isImage() ? this._orgData.url : `${FileModel.bigIconsFolder}${this.getFileExt()}.png`;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    fromJSON(data) {
        this._orgData = data;
        this.name = data.name;
        this.selected = data.selected || false;
    }
    /**
     * @return {?}
     */
    toJSON() {
        return this._orgData;
    }
    /**
     * @return {?}
     */
    getId() {
        return this._orgData.id;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this._orgData.height || 0;
    }
    /**
     * @return {?}
     */
    getFileExt() {
        return this.name.split('.').pop();
    }
    /**
     * @return {?}
     */
    getMime() {
        return this._orgData.type;
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this._orgData.width || 0;
    }
    /**
     * @return {?}
     */
    isImage() {
        return ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'].indexOf(this.getMime()) > -1;
    }
    /**
     * @return {?}
     */
    getSelectData() {
        return {
            id: this.getId(),
            name: this.name,
            url: this.url,
            width: this.getWidth(),
            height: this.getHeight(),
            mime: this.getMime()
        };
    }
}
FileModel.smallIconsFolder = '/icons/128px/';
FileModel.bigIconsFolder = '/icons/512px/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByaWduL2FuZ3VsYXIyLWZpbGVtYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL2ZpbGVzTGlzdC9maWxlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxNQUFNLE9BQU8sU0FBUzs7OztJQTJCcEIsWUFBbUIsSUFBZ0I7UUFwQjNCLGlCQUFZLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBRTNDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFtQnRCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFsQkQsSUFBSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO0lBQy9HLENBQUM7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztJQUNwRyxDQUFDOzs7OztJQU1NLFFBQVEsQ0FBQyxJQUFnQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU0sS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLE9BQU87UUFDWixPQUFPLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RyxDQUFDOzs7O0lBRU0sYUFBYTtRQUNsQixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7U0FDckIsQ0FBQztJQUNKLENBQUM7O0FBMUVNLDBCQUFnQixHQUFHLGVBQWUsQ0FBQztBQUNuQyx3QkFBYyxHQUFHLGVBQWUsQ0FBQzs7O0lBRHhDLDJCQUEwQzs7SUFDMUMseUJBQXdDOzs7OztJQUV4Qyw2QkFBNkI7Ozs7O0lBQzdCLDBCQUFzQjs7Ozs7SUFFdEIsaUNBQWtEOztJQUVsRCw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lPdXRlckZpbGV9IGZyb20gJy4vaW50ZXJmYWNlL0lPdXRlckZpbGUnO1xuaW1wb3J0IHtJRmlsZU1vZGVsfSBmcm9tICcuL2ludGVyZmFjZS9JRmlsZU1vZGVsJztcbmltcG9ydCB7SVNlbGVjdEZpbGV9IGZyb20gJy4vaW50ZXJmYWNlL0lTZWxlY3RGaWxlJztcblxuZXhwb3J0IGNsYXNzIEZpbGVNb2RlbCBpbXBsZW1lbnRzIElGaWxlTW9kZWwge1xuICBzdGF0aWMgc21hbGxJY29uc0ZvbGRlciA9ICcvaWNvbnMvMTI4cHgvJztcbiAgc3RhdGljIGJpZ0ljb25zRm9sZGVyID0gJy9pY29ucy81MTJweC8nO1xuXG4gIHByaXZhdGUgX29yZ0RhdGE6IElPdXRlckZpbGU7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcblxuICBwcml2YXRlIF9pY29uc0ZvbGRlciA9IEZpbGVNb2RlbC5zbWFsbEljb25zRm9sZGVyO1xuXG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgdGh1bWJuYWlsVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmlzSW1hZ2UoKSA/IHRoaXMuX29yZ0RhdGEudGh1bWJuYWlsVXJsIDogYCR7RmlsZU1vZGVsLnNtYWxsSWNvbnNGb2xkZXJ9JHt0aGlzLmdldEZpbGVFeHQoKX0ucG5nYDtcbiAgfVxuXG4gIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbWFnZSgpID8gdGhpcy5fb3JnRGF0YS51cmwgOiBgJHtGaWxlTW9kZWwuYmlnSWNvbnNGb2xkZXJ9JHt0aGlzLmdldEZpbGVFeHQoKX0ucG5nYDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5mcm9tSlNPTihkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBmcm9tSlNPTihkYXRhOiBJT3V0ZXJGaWxlKSB7XG4gICAgdGhpcy5fb3JnRGF0YSA9IGRhdGE7XG5cbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGEuc2VsZWN0ZWQgfHwgZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhO1xuICB9XG5cbiAgcHVibGljIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLmlkO1xuICB9XG5cbiAgcHVibGljIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLmhlaWdodCB8fCAwO1xuICB9XG5cbiAgcHVibGljIGdldEZpbGVFeHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICB9XG5cbiAgcHVibGljIGdldE1pbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZ0RhdGEudHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmdEYXRhLndpZHRoIHx8IDA7XG4gIH1cblxuICBwdWJsaWMgaXNJbWFnZSgpIHtcbiAgICByZXR1cm4gWydpbWFnZS9qcGcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2UvZ2lmJywgJ2ltYWdlL3BuZyddLmluZGV4T2YodGhpcy5nZXRNaW1lKCkpID4gLTE7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0RGF0YSgpOiBJU2VsZWN0RmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIG1pbWU6IHRoaXMuZ2V0TWltZSgpXG4gICAgfTtcbiAgfVxufVxuIl19