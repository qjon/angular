import {AppPage} from './app.po';
import {Tree} from './tree.po';
import {TreeItem} from './item.po';
import {browser} from 'protractor';
import {code as dragAndDrop} from 'html-dnd';
import {TreeItemTwo} from './itemTwo.po';


describe('e2e App', () => {
  let page: AppPage;
  let treeOne: Tree;

  beforeEach(() => {
    page = new AppPage();
    treeOne = new Tree('app-tree-one')
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Angular2 - Tree v4.0.0');
  });

  describe('add node', () => {
    it('should add series of five nodes', () => {
      treeOne.createNewNode('Node 1');
      treeOne.createNewNode('Node 2');
      treeOne.createNewNode('Node 3');
      treeOne.createNewNode('Node 4');
      treeOne.createNewNode('Node 5');

      expect(treeOne.getRootElements().count()).toBe(5);
      page.takeScreenshot('root-nodes-created');
    });

    it('should select second node, expand it and add two sub nodes', () => {
      const secondElement = new TreeItem(treeOne.getRootNodeElementByIndex(2));
      secondElement.clickLabel();

      treeOne.createNewNode('Node 2.1');
      treeOne.createNewNode('Node 2.2');

      expect(secondElement.getChildren().count()).toBe(2);
      expect(secondElement.isExpanded()).toBeTruthy();

      page.takeScreenshot('sub-nodes-created');
    });
  });

  describe('expand / collapse', () => {
    it('should expand and collapse node', () => {
      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(2));

      expect(nodeElement.isExpanded()).toBeTruthy();

      nodeElement.collapse();

      expect(nodeElement.getChildren().count()).toBe(0);

      nodeElement.expand();

      expect(nodeElement.getChildren().count()).toBe(2);
      nodeElement.collapse();
    });
  });

  describe('context menu', () => {
    it('should display context menu after right click', () => {
      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(3));

      page.rightClick(nodeElement.getLabelElement());

      expect(page.isDisplayedContextMenu()).toBeTruthy();
      page.hideContextMenu();
      nodeElement.clickLabel();
      page.takeScreenshot('unselect node');
    });
  });

  xdescribe('edit node', () => {
    let revertedNodeName: string;
    let newNodeName: string;

    beforeEach(() => {
      revertedNodeName = 'Node 4';
      newNodeName = 'Node 4 - new';
    });

    it('should update node name if ENTER is pressed', () => {
      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(3));

      page.rightClick(nodeElement.getLabelElement());
      page.takeScreenshot('edit - dropdown show');
      page.clickEditButton();
      page.takeScreenshot('edit - click edit');
      nodeElement.enterName(newNodeName);
      page.takeScreenshot('edit - pass new name');
      page.pressEnterKey();

      page.takeScreenshot('edit - click enter');

      expect(nodeElement.getLabelElement().getText()).toBe(newNodeName);
    });

    it('should not update node name if ESC is pressed', () => {
      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(3));

      page.rightClick(nodeElement.getLabelElement());
      page.clickEditButton();
      nodeElement.enterName(revertedNodeName);
      page.pressEscKey();

      expect(nodeElement.getLabelElement().getText()).toBe(newNodeName);

      page.takeScreenshot('update node name 2');
    });

    it('should not update node name if lose focus', () => {
      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(3));

      page.rightClick(nodeElement.getLabelElement());
      page.clickEditButton();
      nodeElement.enterName(revertedNodeName);
      page.pressTabKey();

      expect(nodeElement.getLabelElement().getText()).toBe(newNodeName);

      page.takeScreenshot('update node name 3');
    });
  });

  describe('remove node', () => {
    it('should remove first node', () => {
      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(0));

      page.rightClick(nodeElement.getLabelElement());
      page.clickDeleteButton();

      expect(treeOne.getRootElements().count()).toBe(4);

      page.takeScreenshot('delete root node');
    });

    it('should not remove node if it is not empty', () => {
      treeOne = new Tree('app-tree-one');
      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(1));

      expect(nodeElement.getLabelElement().getText()).toBe('Node 3');

      page.rightClick(nodeElement.getLabelElement());
      page.clickDeleteButton();

      expect(treeOne.getRootElements().count()).toBe(4);
      page.takeScreenshot('delete root node 2');
    });
  });

  describe('move node', () => {
    it('should move node to another node', () => {
      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(0));
      const targetElement = new TreeItem(treeOne.getRootNodeElementByIndex(3));

      browser.executeScript(dragAndDrop, nodeElement.getDragableElement(), targetElement.getDropElement(), 1, 1);

      expect(treeOne.getRootElements().count()).toBe(3);
      page.takeScreenshot('move node to sub node');
    });

    it('move node with subnodes to new node', () => {

      const nodeElement = new TreeItem(treeOne.getRootNodeElementByIndex(2));
      const targetElement = new TreeItem(treeOne.getRootNodeElementByIndex(0));

      browser.executeScript(dragAndDrop, nodeElement.getDragableElement(), targetElement.getDropElement(), 1, 1);

      expect(treeOne.getRootElements().count()).toBe(2);
      page.takeScreenshot('move node with subnodes');
    });

    // @todo: figure out how to catch DROZONE for root
    xit('move node with subnodes to root node', () => {
      const firstRootNode = new TreeItem(treeOne.getRootNodeElementByIndex(0));

      firstRootNode.expand();
      const nodeElement = new TreeItem(firstRootNode.getChildren().get(0));
      const targetElement = treeOne.getDropZone();

      browser.executeScript(dragAndDrop, nodeElement.getDragableElement(), targetElement.getWebElement(), 1, 1);


      expect(treeOne.getRootElements().count()).toBe(4);
      page.takeScreenshot('move node with subnodes');
    });
  });

  describe('parents list', () => {
    it('expand two nodes and select one of them should display parents list', () => {
      page.navigateTo();

      const grandParentName = 'Z Grand parent';
      const parentName = 'Parent';
      const childName = 'Child';


      treeOne.createNewNode(grandParentName);
      const grandParent = new TreeItem(treeOne.getRootElements().last());
      grandParent.select()
      treeOne.createNewNode(parentName);
      const parent = new TreeItem(grandParent.getChildren().first());
      parent.select();
      treeOne.createNewNode(childName);
      const child = new TreeItem(parent.getChildren().first());
      child.select();

      expect(treeOne.getParentsListElements().count()).toBe(4);
    });
  });

  describe('second tree add elements', () => {
    let treeTwo: Tree;

    beforeEach(() => {
      treeTwo = new Tree('app-tree-two');
      page.navigateTo();
    });

    describe('should create tree structure', () => {
      it('should add series of five nodes', () => {
        treeTwo.createNewNode('Node 1');
        treeTwo.createNewNode('Node 2');
        treeTwo.createNewNode('Node 3');
        treeTwo.createNewNode('Node 4');
        treeTwo.createNewNode('Node 5');

        expect(treeTwo.getRootElements().count()).toBe(5);
      });

      it('should select second node, expand it and add two sub nodes', () => {
        const secondElement = new TreeItemTwo(treeTwo.getRootNodeElementByIndex(2));
        secondElement.clickLabel();

        treeTwo.createNewNode('Node 2.1');
        treeTwo.createNewNode('Node 2.2');

        expect(secondElement.getChildren().count()).toBe(2);
        expect(secondElement.isExpanded()).toBeTruthy();
      });
    });

    xdescribe('edit node', () => {
      it('should change second root node name to "RI"', () => {
        const secondElement = new TreeItemTwo(treeTwo.getRootNodeElementByIndex(2));

        secondElement.editClick();
        secondElement.enterName('RI');
        page.pressEnterKey();
        page.navigateTo();

        const newSecondElement = new TreeItemTwo(treeTwo.getRootNodeElementByIndex(4));

        expect(newSecondElement.getLabelElement().getText()).toBe('RI');
      });
    });
  });

});
