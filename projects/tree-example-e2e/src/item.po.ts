import {ElementFinder} from 'protractor/built/element';
import {browser, by, element} from 'protractor';

export class TreeItem {
  public constructor(protected item: ElementFinder) {

  }

  public enterName(name: string): void {
    const inputElement = this.item.$('form input');

    inputElement.clear();
    inputElement.sendKeys(name);
  }

  public getDragableElement(): any {
    return this.item.$('.tree-item').getWebElement();
  }

  public getDropElement(): any {
    return this.item.$('.tree-item-name').getWebElement();
  }

  public getLabelElement(): ElementFinder {
    return this.item.$('.tree-item-name');
  }

  public clickLabel(): void {
    this.getLabelElement().click();
  }

  public collapse(): void {
    this.item.$$('.fa-caret-down').click();
    browser.sleep(500);
  }

  public expand(): void {
    this.item.$$('.fa-caret-right').click();
    browser.sleep(500);
  }

  public getChildren() {
    return this.item.$$('ri-tree-item');
  }

  public isCollapsed(): any {
    return this.item.$('.fa.fa-caret-right').isDisplayed();
  }

  public isExpanded(): any {
    return this.item.$('.fa.fa-caret-down').isDisplayed();
  }

  public select(): void {
    this.getLabelElement().click();
  }

}
