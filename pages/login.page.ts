import { Page, expect } from '@playwright/test';

export class LoginPage {
  static login(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  readonly page: Page;
  readonly loginURL = 'https://woundexpert-integration.nhsinc.com/Security/Login?ReturnUrl=%2f#/scheduler';
  readonly usernameField = 'input[type="text"]';
  readonly passwordField = 'input[type="password"]';
  readonly loginButton = '//input[@id="Login"]';
  readonly facilityDropdown = 'select#FacilityId';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the login page
   */
  async gotoLoginPage() {
    await this.navigateToLogin();
  }

  /**
   * Navigate to the login page
   */
  async navigateToLogin() {
    await this.page.goto(this.loginURL);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Enter username in the username field
   */
  async enterUsername(username: string) {
    await this.page.fill(this.usernameField, username);
  }

  /**
   * Enter password in the password field
   */
  async enterPassword(password: string) {
    await this.page.fill(this.passwordField, password);
  }

  /**
   * Click the login button
   */
  async clickLogin() {
    await this.page.click(this.loginButton);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Select facility from dropdown by label
   */
  async selectFacility(facilityName: string) {
    await this.page.getByLabel('Facility: ').selectOption(facilityName);
  }

  /**
   * Select the first option from the facility dropdown
   */
  async selectFirstFacility() {
    await this.page.locator(this.facilityDropdown).selectOption({ index: 0 });
  }

  /**
   * Click the login button (second login after facility selection)
   */
  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  /**
   * Verify successful login by checking URL
   */
  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/scheduler/);
  }

  /**
   * Complete the entire login flow
   */
  async login(username: string, password: string, facilityName?: string) {
    await this.navigateToLogin();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
    
    if (facilityName) {
      await this.selectFacility(facilityName);
    } else {
      await this.selectFirstFacility();
    }
    
    await this.clickLoginButton();
    await this.verifyLoginSuccess();
  }

  /**
   * Click on user menu/profile icon
   */
  async clickUserMenu() {
    // Common selectors for user menu - adjust based on actual HTML
    await this.page.click("//span[normalize-space()='log out']");
  }

  /**
   * Click logout button/link
   */
  async clickLogout() {
    // Try to find logout button by text
    await this.page.locator("//a[@data-bind='click: logout' and normalize-space()='Yes']").click();
  }

  /**
   * Verify logout was successful by checking if redirected to login page
   */
  async verifyLogoutSuccess() {
    await expect(this.page).toHaveURL(/login|signin/i);
  }

  /**
   * Complete logout flow
   */
  async logout() {
    await this.clickUserMenu();
    await this.clickLogout();
  }
}
