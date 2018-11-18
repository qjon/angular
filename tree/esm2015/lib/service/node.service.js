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
export const NODE_SERVICE = new InjectionToken('NODE_SERVICE');
export class NodeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.apiConfig = {
            addUrl: '/api/nodes',
            getUrl: '/api/nodes',
            moveUrl: '/api/nodes/move',
            updateUrl: '/api/nodes',
            removeUrl: '/api/nodes',
        };
    }
    /**
     * @return {?}
     */
    get treeId() {
        return 'tree';
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    setAllNodes(nodes) {
    }
    /**
     * @param {?=} nodeId
     * @return {?}
     */
    load(nodeId = '') {
        /** @type {?} */
        const params = new HttpParams().set('nodeId', nodeId);
        return this.http.get(this.getPath('GET', nodeId), { params });
    }
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    add(node, parentNodeId = null) {
        return this.http.post(this.getPath('CREATE', parentNodeId), {
            node: node,
            parentNodeId: parentNodeId
        });
    }
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    move(srcNode, targetNode) {
        /** @type {?} */
        const srcId = srcNode.id;
        /** @type {?} */
        const targetId = targetNode ? targetNode.id : null;
        return this.http.put(this.getPath('MOVE', srcId, targetId), { source: srcId, target: targetId });
    }
    /**
     * @param {?} node
     * @return {?}
     */
    update(node) {
        return this.http.put(this.getPath('UPDATE', node.id), node);
    }
    /**
     * @param {?} nodeId
     * @return {?}
     */
    remove(nodeId) {
        /** @type {?} */
        const params = new HttpParams().set('nodeId', nodeId);
        return this.http.delete(this.getPath('REMOVE', nodeId), { params });
    }
    /**
     * @protected
     * @param {?} type
     * @param {?} nodeId
     * @param {?=} destNodeId
     * @return {?}
     */
    getPath(type, nodeId, destNodeId = null) {
        if (!this.apiConfig) {
            throw new Error('No API configuration for Tree');
        }
        /** @type {?} */
        const urlMap = {
            'GET': this.apiConfig.getUrl,
            'CREATE': this.apiConfig.addUrl,
            'REMOVE': this.apiConfig.removeUrl,
            'UPDATE': this.apiConfig.updateUrl,
            'MOVE': this.apiConfig.moveUrl
        };
        /** @type {?} */
        let path = this.replaceNodeId(urlMap[type], nodeId);
        if (destNodeId) {
            path = this.replaceDestNodeId(path, destNodeId);
        }
        return path;
    }
    /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    replaceNodeId(url, nodeId) {
        return url.replace('{nodeId}', nodeId);
    }
    /**
     * @protected
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    replaceDestNodeId(url, nodeId) {
        return url.replace('{destNodeId}', nodeId);
    }
}
NodeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NodeService.ctorParameters = () => [
    { type: HttpClient }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJpZ24vYW5ndWxhcjItdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL25vZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUU1RCxrQ0FjQzs7O0lBYkMsOEJBQXdCOzs7OztJQUV4QixvREFBK0M7Ozs7OztJQUUvQywrREFBMkU7Ozs7OztJQUUzRSxpRUFBaUY7Ozs7O0lBRWpGLG9EQUFpRDs7Ozs7SUFFakQsc0RBQStDOzs7OztJQUUvQywwREFBdUM7OztBQUd6QyxNQUFNLE9BQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUc5RCxNQUFNLE9BQU8sV0FBVzs7OztJQWF0QixZQUE2QixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBWm5DLGNBQVMsR0FBZTtZQUNoQyxNQUFNLEVBQUUsWUFBWTtZQUNwQixNQUFNLEVBQUUsWUFBWTtZQUNwQixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUM7SUFPRixDQUFDOzs7O0lBTEQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFLTSxXQUFXLENBQUMsS0FBbUI7SUFFdEMsQ0FBQzs7Ozs7SUFFTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7O2NBQ2YsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7UUFFckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUss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J0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SU91dGVyTm9kZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JT3V0ZXJOb2RlJztcbmltcG9ydCB7SUFwaUNvbmZpZ30gZnJvbSAnLi4vSUFwaUNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElOb2RlU2VydmljZSB7XG4gIHJlYWRvbmx5IHRyZWVJZDogc3RyaW5nO1xuXG4gIGxvYWQobm9kZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT47XG5cbiAgYWRkKG5vZGU6IElPdXRlck5vZGUsIHBhcmVudE5vZGVJZDogc3RyaW5nIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG5cbiAgbW92ZShzcmNOb2RlOiBJT3V0ZXJOb2RlLCB0YXJnZXROb2RlOiBJT3V0ZXJOb2RlIHwgbnVsbCk6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG5cbiAgdXBkYXRlKG5vZGU6IElPdXRlck5vZGUpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+O1xuXG4gIHJlbW92ZShub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZT47XG5cbiAgc2V0QWxsTm9kZXMobm9kZXM6IElPdXRlck5vZGVbXSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOT0RFX1NFUlZJQ0UgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05PREVfU0VSVklDRScpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm9kZVNlcnZpY2UgaW1wbGVtZW50cyBJTm9kZVNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgYXBpQ29uZmlnOiBJQXBpQ29uZmlnID0ge1xuICAgIGFkZFVybDogJy9hcGkvbm9kZXMnLFxuICAgIGdldFVybDogJy9hcGkvbm9kZXMnLFxuICAgIG1vdmVVcmw6ICcvYXBpL25vZGVzL21vdmUnLFxuICAgIHVwZGF0ZVVybDogJy9hcGkvbm9kZXMnLFxuICAgIHJlbW92ZVVybDogJy9hcGkvbm9kZXMnLFxuICB9O1xuXG4gIHB1YmxpYyBnZXQgdHJlZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICd0cmVlJztcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgcHVibGljIHNldEFsbE5vZGVzKG5vZGVzOiBJT3V0ZXJOb2RlW10pOiB2b2lkIHtcblxuICB9XG5cbiAgcHVibGljIGxvYWQobm9kZUlkID0gJycpOiBPYnNlcnZhYmxlPElPdXRlck5vZGVbXT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdub2RlSWQnLCBub2RlSWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SU91dGVyTm9kZVtdPih0aGlzLmdldFBhdGgoJ0dFVCcsIG5vZGVJZCksIHtwYXJhbXN9KTtcbiAgfVxuXG5cbiAgcHVibGljIGFkZChub2RlOiBJT3V0ZXJOb2RlLCBwYXJlbnROb2RlSWQ6IHN0cmluZyA9IG51bGwpOiBPYnNlcnZhYmxlPElPdXRlck5vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8SU91dGVyTm9kZT4odGhpcy5nZXRQYXRoKCdDUkVBVEUnLCBwYXJlbnROb2RlSWQpLCB7XG4gICAgICBub2RlOiBub2RlLFxuICAgICAgcGFyZW50Tm9kZUlkOiBwYXJlbnROb2RlSWRcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlKHNyY05vZGU6IElPdXRlck5vZGUsIHRhcmdldE5vZGU6IElPdXRlck5vZGUgfCBudWxsKTogT2JzZXJ2YWJsZTxJT3V0ZXJOb2RlPiB7XG4gICAgY29uc3Qgc3JjSWQgPSBzcmNOb2RlLmlkO1xuICAgIGNvbnN0IHRhcmdldElkID0gdGFyZ2V0Tm9kZSA/IHRhcmdldE5vZGUuaWQgOiBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8SU91dGVyTm9kZT4odGhpcy5nZXRQYXRoKCdNT1ZFJywgc3JjSWQsIHRhcmdldElkKSwge3NvdXJjZTogc3JjSWQsIHRhcmdldDogdGFyZ2V0SWR9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUobm9kZTogSU91dGVyTm9kZSk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PElPdXRlck5vZGU+KHRoaXMuZ2V0UGF0aCgnVVBEQVRFJywgbm9kZS5pZCksIG5vZGUpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShub2RlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SU91dGVyTm9kZT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdub2RlSWQnLCBub2RlSWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8SU91dGVyTm9kZT4odGhpcy5nZXRQYXRoKCdSRU1PVkUnLCBub2RlSWQpLCB7cGFyYW1zfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGF0aCh0eXBlOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nLCBkZXN0Tm9kZUlkOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgaWYgKCF0aGlzLmFwaUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBBUEkgY29uZmlndXJhdGlvbiBmb3IgVHJlZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybE1hcCA9IHtcbiAgICAgICdHRVQnOiB0aGlzLmFwaUNvbmZpZy5nZXRVcmwsXG4gICAgICAnQ1JFQVRFJzogdGhpcy5hcGlDb25maWcuYWRkVXJsLFxuICAgICAgJ1JFTU9WRSc6IHRoaXMuYXBpQ29uZmlnLnJlbW92ZVVybCxcbiAgICAgICdVUERBVEUnOiB0aGlzLmFwaUNvbmZpZy51cGRhdGVVcmwsXG4gICAgICAnTU9WRSc6IHRoaXMuYXBpQ29uZmlnLm1vdmVVcmxcbiAgICB9O1xuXG4gICAgbGV0IHBhdGggPSB0aGlzLnJlcGxhY2VOb2RlSWQodXJsTWFwW3R5cGVdLCBub2RlSWQpO1xuXG4gICAgaWYgKGRlc3ROb2RlSWQpIHtcbiAgICAgIHBhdGggPSB0aGlzLnJlcGxhY2VEZXN0Tm9kZUlkKHBhdGgsIGRlc3ROb2RlSWQpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcGxhY2VOb2RlSWQodXJsOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHVybC5yZXBsYWNlKCd7bm9kZUlkfScsIG5vZGVJZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVwbGFjZURlc3ROb2RlSWQodXJsOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHVybC5yZXBsYWNlKCd7ZGVzdE5vZGVJZH0nLCBub2RlSWQpO1xuICB9XG59XG4iXX0=