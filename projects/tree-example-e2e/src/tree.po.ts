import {browser, by, element, ElementArrayFinder, protractor} from 'protractor';
import {ElementFinder} from 'protractor/built/element';

export class Tree {
  public constructor(protected treeTagName) {

  }

  public createNewNode(name): void {
    this.clickAddButton();
    this.enterNewNodeName(name);

    browser.actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }

  public clickAddButton(): void {
    element(by.css(`${this.treeTagName} .add-node-button`)).click();
  }


  public getRootNodeElementByIndex(index): ElementFinder {
    return this.getRootElements().get(index);
  }

  public getRootElements(): ElementArrayFinder {
    return element.all(by.css(`${this.treeTagName}  .root-node`));
  }

  public getDropZone(): ElementFinder {
    return element(by.css(`${this.treeTagName} ri-dropzone`));
  }

  public getParentsListElements(): ElementArrayFinder {
    return element.all(by.css(`${this.treeTagName} ri-tree-parents-list li`));
  }

  protected enterNewNodeName(name): void {
    element(by.css('#node-ri-new-node-id input'))
      .sendKeys(name);
  }
}
