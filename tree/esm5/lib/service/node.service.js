/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
/**
 * @record
 */
export function INodeService() { }
if (false) {
    /** @type {?} */
    INodeService.prototype.treeId;
    /**
     * @param {?} nodeId
     * @return {?}
     */
    INodeService.prototype.load = function (nodeId) { };
    /**
     * @param {?} node
     * @param {?} parentNodeId
     * @return {?}
     */
    INodeService.prototype.add = function (node, parentNodeId) { };
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    INodeService.prototype.move = function (srcNode, targetNode) { };
    /**
     * @param {?} node
     * @return {?}
     */
    INodeService.prototype.update = function (node) { };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    INodeService.prototype.remove = function (nodeId) { };
    /**
     * @param {?} nodes
     * @return {?}
     */
    INodeService.prototype.setAllNodes = function (nodes) { };
}
/** @type {?} */
export var NODE_SERVICE = new InjectionToken('NODE_SERVICE');
var NodeService = /** @class */ (function () {
    function NodeService(http) {
        this.http = http;
        this.apiConfig = {
            addUrl: '/api/nodes',
            getUrl: '/api/nodes',
            moveUrl: '/api/nodes/move',
            updateUrl: '/api/nodes',
            removeUrl: '/api/nodes',
        };
    }
    Object.defineProperty(NodeService.prototype, "treeId", {
        get: /**
         * @return {?}
         */
        function () {
            return 'tree';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} nodes
     * @return {?}
     */
    NodeService.prototype.setAllNodes = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
    };
    /**
     * @param {?=} nodeId
     * @return {?}
     */
    NodeService.prototype.load = /**
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        if (nodeId === void 0) { nodeId = ''; }
        /** @type {?} */
        var params = new HttpParams().set('nodeId', nodeId);
        return this.http.get(this.getPath('GET', nodeId), { params: params });
    };
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    NodeService.prototype.add = /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    function (node, parentNodeId) {
        if (parentNodeId === void 0) { parentNodeId = null; }
        return this.http.post(this.getPath('CREATE', parentNodeId), {
            node: node,
            parentNodeId: parentNodeId
        });
    };
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    NodeService.prototype.move = /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    function (srcNode, targetNode) {
        /** @type {?} */
        var srcId = srcNode.id;
        /** @type {?} */
        var targetId = targetNode ? targetNode.id : null;
        return this.http.put(this.getPath('MOVE', srcId, targetId), { source: srcId, target: targetId });
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NodeService.prototype.update = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.http.put(this.getPath('UPDATE', node.id), node);
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.remove = /**
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        /** @type {?} */
        var params = new HttpParams().set('nodeId', nodeId);
        return this.http.delete(this.getPath('REMOVE', nodeId), { params: params });
    };
    /**
     * @protected
     * @param {?} type
     * @param {?} nodeId
     * @param {?=} destNodeId
     * @return {?}
     */
    NodeService.prototype.getPath = /**
     * @protected
     * @param {?} type
     * @param {?} nodeId
     * @param {?=} destNodeId
     * @return {?}
     */
    function (type, nodeId, destNodeId) {
        if (destNodeId === void 0) { destNodeId = null; }
        if (!this.apiConfig) {
            throw new Error('No API configuration for Tree');
        }
        /** @type {?} */
        var urlMap = {
            'GET': this.apiConfig.getUrl,
            'CREATE': this.apiConfig.addUrl,
            'REMOVE': this.apiConfig.removeUrl,
            'UPDATE': this.apiConfig.updateUrl,
            'MOVE': this.apiConfig.moveUrl
        };
        /** @type {?} */
        var path = this.replaceNodeId(urlMap[type], nodeId);
        if (destNodeId) {
            path = this.replaceDestNodeId(path, destNodeId);
        }
        return path;
    };
    /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.replaceNodeId = /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    function (url, nodeId) {
        return url.replace('{nodeId}', nodeId);
    };
    /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.replaceDestNodeId = /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    function (url, nodeId) {
        return url.replace('{destNodeId}', nodeId);
    };
    NodeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NodeService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return NodeService;
}());
export { NodeService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NodeService.prototype.apiConfig;
    /**
     * @type {?}
     * @protected
     */
    NodeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL25vZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUU1RCxrQ0FjQzs7O0lBYkMsOEJBQXdCOzs7OztJQUV4QixvREFBK0M7Ozs7OztJQUUvQywrREFBMkU7Ozs7OztJQUUzRSxpRUFBaUY7Ozs7O0lBRWpGLG9EQUFpRDs7Ozs7SUFFakQsc0RBQStDOzs7OztJQUUvQywwREFBdUM7OztBQUd6QyxNQUFNLEtBQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUU5RDtJQWNFLHFCQUE2QixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBWm5DLGNBQVMsR0FBZTtZQUNoQyxNQUFNLEVBQUUsWUFBWTtZQUNwQixNQUFNLEVBQUUsWUFBWTtZQUNwQixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUM7SUFPRixDQUFDO0lBTEQsc0JBQVcsK0JBQU07Ozs7UUFBakI7WUFDRSxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDOzs7T0FBQTs7Ozs7SUFLTSxpQ0FBVzs7OztJQUFsQixVQUFtQixLQUFtQjtJQUV0QyxDQUFDOzs7OztJQUVNLDBCQUFJOzs7O0lBQVgsVUFBWSxNQUFXO1FBQVgsdUJBQUEsRUFBQSxXQUFXOztZQUNmLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO1FBRXJELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENB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QUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Z0JBaEZGLFVBQVU7Ozs7Z0JBcEJILFVBQVU7O0lBcUdsQixrQkFBQztDQUFBLEFBakZELElBaUZDO1NBaEZZLFdBQVc7Ozs7OztJQUN0QixnQ0FNRTs7Ozs7SUFNaUIsMkJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtJT3V0ZXJOb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lPdXRlck5vZGUnO1xuaW1wb3J0IHtJQXBpQ29uZmlnfSBmcm9tICcuLi9JQXBpQ29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vZGVTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgdHJlZUlkOiBzdHJpbmc7XG5cbiAgbG9hZChub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPjtcblxuICBhZGQobm9kZTogSU91dGVyTm9kZSwgcGFyZW50Tm9kZUlkOiBzdHJpbmcgfCBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcblxuICBtb3ZlKHNyY05vZGU6IElPdXRlck5vZGUsIHRhcmdldE5vZGU6IElPdXRlck5vZGUgfCBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcblxuICB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG5cbiAgcmVtb3ZlKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPjtcblxuICBzZXRBbGxOb2Rlcyhub2RlczogSU91dGVyTm9kZVtdKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5PREVfU0VSVklDRSA9IG5ldyBJbmplY3Rpb25Ub2tlbignTk9ERV9TRVJWSUNFJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb2RlU2VydmljZSBpbXBsZW1lbnRzIElOb2RlU2VydmljZSB7XG4gIHByb3RlY3RlZCBhcGlDb25maWc6IElBcGlDb25maWcgPSB7XG4gICAgYWRkVXJsOiAnL2FwaS9ub2RlcycsXG4gICAgZ2V0VXJsOiAnL2FwaS9ub2RlcycsXG4gICAgbW92ZVVybDogJy9hcGkvbm9kZXMvbW92ZScsXG4gICAgdXBkYXRlVXJsOiAnL2FwaS9ub2RlcycsXG4gICAgcmVtb3ZlVXJsOiAnL2FwaS9ub2RlcycsXG4gIH07XG5cbiAgcHVibGljIGdldCB0cmVlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3RyZWUnO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICBwdWJsaWMgc2V0QWxsTm9kZXMobm9kZXM6IElPdXRlck5vZGVbXSk6IHZvaWQge1xuXG4gIH1cblxuICBwdWJsaWMgbG9hZChub2RlSWQgPSAnJyk6IE9ic2VydmFibGU8SU91dGVyTm9kZVtdPiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ25vZGVJZCcsIG5vZGVJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJT3V0ZXJOb2RlW10+KHRoaXMuZ2V0UGF0aCgnR0VUJywgbm9kZUlkKSwge3BhcmFtc30pO1xuICB9XG5cblxuICBwdWJsaWMgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxJT3V0ZXJOb2RlPih0aGlzLmdldFBhdGgoJ0NSRUFURScsIHBhcmVudE5vZGVJZCksIHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBwYXJlbnROb2RlSWQ6IHBhcmVudE5vZGVJZFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG1vdmUoc3JjTm9kZTogSU91dGVyTm9kZSwgdGFyZ2V0Tm9kZTogSU91dGVyTm9kZSB8IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICBjb25zdCBzcmNJZCA9IHNyY05vZGUuaWQ7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSB0YXJnZXROb2RlID8gdGFyZ2V0Tm9kZS5pZCA6IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxJT3V0ZXJOb2RlPih0aGlzLmdldFBhdGgoJ01PVkUnLCBzcmNJZCwgdGFyZ2V0SWQpLCB7c291cmNlOiBzcmNJZCwgdGFyZ2V0OiB0YXJnZXRJZH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShub2RlOiBJT3V0ZXJOb2RlKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8SU91dGVyTm9kZT4odGhpcy5nZXRQYXRoKCdVUERBVEUnLCBub2RlLmlkKSwgbm9kZSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKG5vZGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ25vZGVJZCcsIG5vZGVJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxJT3V0ZXJOb2RlPih0aGlzLmdldFBhdGgoJ1JFTU9WRScsIG5vZGVJZCksIHtwYXJhbXN9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYXRoKHR5cGU6IHN0cmluZywgbm9kZUlkOiBzdHJpbmcsIGRlc3ROb2RlSWQ6IHN0cmluZyA9IG51bGwpIHtcbiAgICBpZiAoIXRoaXMuYXBpQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEFQSSBjb25maWd1cmF0aW9uIGZvciBUcmVlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsTWFwID0ge1xuICAgICAgJ0dFVCc6IHRoaXMuYXBpQ29uZmlnLmdldFVybCxcbiAgICAgICdDUkVBVEUnOiB0aGlzLmFwaUNvbmZpZy5hZGRVcmwsXG4gICAgICAnUkVNT1ZFJzogdGhpcy5hcGlDb25maWcucmVtb3ZlVXJsLFxuICAgICAgJ1VQREFURSc6IHRoaXMuYXBpQ29uZmlnLnVwZGF0ZVVybCxcbiAgICAgICdNT1ZFJzogdGhpcy5hcGlDb25maWcubW92ZVVybFxuICAgIH07XG5cbiAgICBsZXQgcGF0aCA9IHRoaXMucmVwbGFjZU5vZGVJZCh1cmxNYXBbdHlwZV0sIG5vZGVJZCk7XG5cbiAgICBpZiAoZGVzdE5vZGVJZCkge1xuICAgICAgcGF0aCA9IHRoaXMucmVwbGFjZURlc3ROb2RlSWQocGF0aCwgZGVzdE5vZGVJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVwbGFjZU5vZGVJZCh1cmw6IHN0cmluZywgbm9kZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLnJlcGxhY2UoJ3tub2RlSWR9Jywgbm9kZUlkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXBsYWNlRGVzdE5vZGVJZCh1cmw6IHN0cmluZywgbm9kZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLnJlcGxhY2UoJ3tkZXN0Tm9kZUlkfScsIG5vZGVJZCk7XG4gIH1cbn1cbiJdfQ==