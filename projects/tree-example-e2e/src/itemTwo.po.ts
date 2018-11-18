import {browser} from 'protractor';
import {TreeItem} from './item.po';

export class TreeItemTwo extends TreeItem {
  public collapse(): void {
    this.item.$$('.fa-minus').click();
    browser.sleep(500);
  }

  public deleteClick(): void {
    this.item.$$('button').get(1).click();
  }

  public editClick(): void {
    this.item.$$('button').get(0).click();
  }

  public expand(): void {
    this.item.$$('.fa-plus').click();
    browser.sleep(500);
  }

  public getChildren() {
    return this.item.$$('new-tree-item');
  }

  public isCollapsed(): any {
    return this.item.$('.fa.fa-plus').isDisplayed();
  }

  public isExpanded(): any {
    return this.item.$('.fa.fa-minus').isDisplayed();
  }
}
