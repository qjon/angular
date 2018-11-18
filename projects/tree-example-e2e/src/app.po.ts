import {browser, by, element, ElementFinder, protractor} from 'protractor';

const screenshots = require('protractor-take-screenshots-on-demand');

export class AppPage {
  public navigateTo(): any {
    return browser.get('/');
  }

  public getTitle(): any {
    return element(by.css('h1')).getText();
  }

  public isDisplayedContextMenu(): any {
    return element(by.css('.dropdown-menu')).isDisplayed();
  }

  public clickDeleteButton(): any {
    element(by.css('.fa-trash')).click();
  }

  public clickEditButton(): any {
    element(by.css('.fa-edit')).click();
    this.takeScreenshot('click edit!!!');
  }

  public hideContextMenu(): void {
    browser.actions()
      .mouseMove({x: -100, y: -100})
      .click()
      .perform();
  }

  public pressEnterKey(): void {
    browser.actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }

  public pressEscKey(): void {
    browser.actions()
      .sendKeys(protractor.Key.ESCAPE)
      .perform();
  }

  public pressTabKey(): void {
    browser.actions()
      .sendKeys(protractor.Key.TAB)
      .perform();
  }

  public rightClick(el: ElementFinder): void {
    browser.actions()
      .click(el, protractor.Button.RIGHT)
      .perform();
  }

  public takeScreenshot(name: string): void {
    screenshots.takeScreenshot(name);
  }
}
