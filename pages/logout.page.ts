import { Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;
  readonly logoutButton: string;
  readonly confirmYesButton: string;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = '//span[@class="login-bar-link" and @data-bind="click: logout"]';
    this.confirmYesButton = '//a[normalize-space()="Yes"]';
  }

  /**
   * Click the logout button
   */
  async clickLogout() {
    await this.page.locator(this.logoutButton).click();
  }

  /**
   * Confirm logout by clicking Yes in the confirmation modal
   */
  async confirmLogout() {
    await this.page.locator(this.confirmYesButton).click();
  }

  /**
   * Perform full logout flow
   */
  async logout() {
    await this.performLogout();
  }

  /**
   * Perform full logout flow
   */
  async performLogout() {
    await this.clickLogout();
    await this.confirmLogout();
    await this.page.close();
  }
}
