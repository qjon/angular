import {NodeService} from './node.service';
import {Observable, of} from 'rxjs';
import {IOuterNode} from '../interfaces/IOuterNode';
import {HttpClient, HttpParams} from '@angular/common/http';

describe('NodeService', () => {
  let service: NodeService;
  let handler: any;
  let http: any;
  let response: string;
  let node: IOuterNode;
  let targetNode: IOuterNode;

  beforeEach(() => {
    http = <HttpClient>jasmine.createSpyObj('Http', ['delete', 'get', 'post', 'put']);
    handler = jasmine.createSpy('handler');
    response = '[{"id":"60b69f7 e-6c77-c92d-1ab5-6c16dff16408","treeId":"tree3","name":"abc","parentId":"60b69f7e-6c77-c92d-1ab5-6c16dff16408","children":["5610ff44-5bf4-e4e7-09f9-f98ddfb7d760","acf34b93-0a4e-c533-5167-ce7cc7e35bc8"],"parents":[]},{"id":"5453bc8d-2222-eb27-bc51-d5bad036915e","treeId":"tree3","name":"xyz dfhjasdhklfa","parentId":null,"children":["cca2ccca-fcb1-e44d-6623-7cebf40dd05a"],"parents":[]},{"id":"5610ff44-5bf4-e4e7-09f9-f98ddfb7d760","treeId":"tree3","name":"1","parentId":"5610ff44-5bf4-e4e7-09f9-f98ddfb7d760","children":[],"parents":[]},{"id":"acf34b93-0a4e-c533-5167-ce7cc7e35bc8","treeId":"tree3","name":"3","parentId":"60b69f7e-6c77-c92d-1ab5-6c16dff16408","children":[],"parents":["60b69f7e-6c77-c92d-1ab5-6c16dff16408"]},{"id":"f620148c-f483-63c1-2b85-d4298cfe599f","treeId":"tree3","name":"123","parentId":"f620148c-f483-63c1-2b85-d4298cfe599f","children":[],"parents":[]},{"id":"cca2ccca-fcb1-e44d-6623-7cebf40dd05a","treeId":"tree3","name":"sdfgsdfg","parentId":null,"children":["ed361d54-ee45-09ea-b913-59bca72c531e","2b023d48-62fb-36e2-4fde-a2228a139ddb","863b2a83-d700-1df7-bb2f-86a1dd08190f","6fc85a55-44e9-3e65-43ae-cde385641d16","9b399ed9-9dcb-9c6d-f779-03b336dfadea"],"parents":[]},{"id":"e9c23e63-1857-94ea-aab8-b5c804bb17d5","treeId":"tree3","name":"434352","parentId":"e9c23e63-1857-94ea-aab8-b5c804bb17d5","children":[],"parents":[]},{"id":"eb593e65-b62b-9e6c-8394-fe887df9ec01","treeId":"tree3","name":"aaaaaa","parentId":null,"children":["ed361d54-ee45-09ea-b913-59bca72c531e"],"parents":[]},{"id":"ed361d54-ee45-09ea-b913-59bca72c531e","treeId":"tree3","name":"123","parentId":"cca2ccca-fcb1-e44d-6623-7cebf40dd05a","children":["23f21e59-d6cb-0df5-d1f7-6da067b9812e","d6ef9328-ba01-6cdd-c155-38e71fe211a2"],"parents":["cca2ccca-fcb1-e44d-6623-7cebf40dd05a"]},{"id":"2b023d48-62fb-36e2-4fde-a2228a139ddb","treeId":"tree3","name":"456","parentId":"cca2ccca-fcb1-e44d-6623-7cebf40dd05a","children":[],"parents":["cca2ccca-fcb1-e44d-6623-7cebf40dd05a"]},{"id":"863b2a83-d700-1df7-bb2f-86a1dd08190f","treeId":"tree3","name":"457","parentId":"cca2ccca-fcb1-e44d-6623-7cebf40dd05a","children":[],"parents":["cca2ccca-fcb1-e44d-6623-7cebf40dd05a"]},{"id":"6fc85a55-44e9-3e65-43ae-cde385641d16","treeId":"tree3","name":"458","parentId":"cca2ccca-fcb1-e44d-6623-7cebf40dd05a","children":[],"parents":["cca2ccca-fcb1-e44d-6623-7cebf40dd05a"]},{"id":"9b399ed9-9dcb-9c6d-f779-03b336dfadea","treeId":"tree3","name":"23452","parentId":"cca2ccca-fcb1-e44d-6623-7cebf40dd05a","children":["ecbbfa01-d402-0f9b-f0ce-40688c53a41a","39d8f150-35a9-4d5b-c494-8048eab4b1e7","73f922db-c053-9fcc-d758-8198b2b47f9f","2bbdec63-6a0d-2635-b481-69f98a0da337"],"parents":["cca2ccca-fcb1-e44d-6623-7cebf40dd05a"]},{"id":"23f21e59-d6cb-0df5-d1f7-6da067b9812e","treeId":"tree3","name":"fsdlgsjldfjglsdf","parentId":"ed361d54-ee45-09ea-b913-59bca72c531e","children":[],"parents":[]},{"id":"d6ef9328-ba01-6cdd-c155-38e71fe211a2","treeId":"tree3","name":"sdfgsdfgsdfgsdf","parentId":"ed361d54-ee45-09ea-b913-59bca72c531e","children":[],"parents":[]},{"id":"137fa9f1-d9ec-2b4b-7250-472cf1d1732b","treeId":"tree3","name":"dfklgsjjg lskdjflgkj s;lkjgfs","parentId":"ed361d54-ee45-09ea-b913-59bca72c531e","children":[],"parents":[]},{"id":"ecbbfa01-d402-0f9b-f0ce-40688c53a41a","treeId":"tree3","name":"1224312","parentId":"9b399ed9-9dcb-9c6d-f779-03b336dfadea","children":[],"parents":[]},{"id":"39d8f150-35a9-4d5b-c494-8048eab4b1e7","treeId":"tree3","name":"1243123412","parentId":"9b399ed9-9dcb-9c6d-f779-03b336dfadea","children":[],"parents":[]},{"id":"73f922db-c053-9fcc-d758-8198b2b47f9f","treeId":"tree3","name":"1241243123412341243","parentId":"9b399ed9-9dcb-9c6d-f779-03b336dfadea","children":[],"parents":[]},{"id":"2bbdec63-6a0d-2635-b481-69f98a0da337","treeId":"tree3","name":"2143132 1324 1234 1324 1","parentId":"9b399ed9-9dcb-9c6d-f779-03b336dfadea","children":[],"parents":[]},{"id":"8d9b6664-1cba-e063-0d29-a74d698b258c","treeId":"tree3","name":"1234 1234 1234 1324","parentId":"9b399ed9-9dcb-9c6d-f779-03b336dfadea","children":[],"parents":[]}]';
    node = {
      id: '60b69f7 e-6c77-c92d-1ab5-6c16dff16408',
      treeId: 'tree3',
      name: 'abc',
      parentId: null,
      children: ['5610ff44-5bf4-e4e7-09f9-f98ddfb7d760', 'acf34b93-0a4e-c533-5167-ce7cc7e35bc8'],
      parents: [],
      isExpanded: false,
    };

    targetNode = {
      id: '5453bc8d-2222-eb27-bc51-d5bad036915e',
      treeId: 'tree3',
      name: 'xyz dfhjasdhklfa',
      parentId: null,
      children: ['cca2ccca-fcb1-e44d-6623-7cebf40dd05a'],
      parents: [],
      isExpanded: false,
    };

    service = new NodeService(http);
  });

  describe('load', () => {
    it('should call http.get with proper params and return proper response', () => {
      const params = new HttpParams().set('nodeId', '5');
      const json = JSON.parse(response);

      http.get.and.returnValue(of(json));

      service.load('5')
        .subscribe(handler);

      expect(http.get).toHaveBeenCalledWith('/api/nodes', {params});
      expect(handler).toHaveBeenCalledWith(json);
    });
  });

  describe('add', () => {
    it('should call POST with proper params and return proper response', () => {
      const newParentId = targetNode.id;
      const newNode: IOuterNode = Object.assign({}, node);
      newNode.parentId = newParentId;

      http.post.and.returnValue(of(newNode));

      service.add(node, newParentId)
        .subscribe(handler);

      expect(http.post).toHaveBeenCalledWith('/api/nodes', {node: node, parentNodeId: newParentId});
      expect(handler).toHaveBeenCalledWith(newNode);
    });
  });

  describe('move', () => {
    it('should call POST with proper params', () => {
      http.put.and.returnValue(of({}));

      service.move(node, targetNode)
        .subscribe(handler);

      expect(http.put).toHaveBeenCalledWith('/api/nodes/move', {source: node.id, target: targetNode.id});
    });
  });

  describe('update', () => {
    it('should call PUT with proper params', () => {
      http.put.and.returnValue(of(node));

      service.update(node)
        .subscribe(handler);

      expect(http.put).toHaveBeenCalledWith('/api/nodes', node);
      expect(handler).toHaveBeenCalledWith(node);
    });
  });

  describe('remove', () => {
    it('should call DELETE with proper params', () => {
      const params = new HttpParams().set('nodeId', node.id);

      http.delete.and.returnValue(of({}));

      service.remove(node.id)
        .subscribe(handler);

      expect(http.delete).toHaveBeenCalledWith('/api/nodes', {params});
    });
  });
});
