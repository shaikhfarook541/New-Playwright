import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  clickScheduleReservedTime() {
      throw new Error('Method not implemented.');
  }

  readonly page: Page;
  readonly addButton: Locator;
  readonly addPatientButton: Locator;
  readonly addClinicianButton: Locator;
  readonly addPhysicianButton: Locator;
  readonly searchMenu: Locator;
  readonly _searchInput: Locator;
  readonly _searchforPatient: Locator;
  readonly _SearchBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // Store locators in constructor
    this.addButton = page.locator('a').filter({ hasText: /^Add$/ });
    this.addPatientButton = page.locator('a').filter({ hasText: 'Add Patient' });
    this.addClinicianButton = page.locator('a').filter({ hasText: 'Add Clinician' });
    this.addPhysicianButton = page.locator('a').filter({ hasText: 'Add Physician' });
    this.searchMenu = page.locator('//li[@id="left-nav-menu-search"]');
    this._searchInput = page.locator('//input[@id="search-input"]');
    this._searchforPatient = page.locator("//select[@data-bind='value: searchFilter, event:{change: clearSearch(true)}']");
    this._SearchBtn = page.locator("(//button[normalize-space()='Search'])[1]");
  }

  /** Click Add button */
  async add() {
    await this.clickAdd();
  }

  /** Click Add button */
  async clickAdd() {
    await this.addButton.click();
  }

  /** Click Add Patient button */
  async clickAddPatient() {
    await this.addPatientButton.click();
  }

  /** Click Add Clinician button */
  async addClinician() {
    await this.addClinicianButton.click();
  }

  /** Click Add Physician button */
  async clickAddPhysician() {
    await this.addPhysicianButton.click();
  }

  /** Select facility by name */
  async selectFacility(facilityName: string) {
    await this.page.locator("//a[@class='practitioner']//span[@data-bind='text: menuName'][normalize-space()='89 Degrees Test']").click();
    const facilityLocator = this.page.locator(`(//a[normalize-space(text())='${facilityName}'])[2]`);
    await facilityLocator.waitFor({ state: 'visible' });
    await facilityLocator.click();
  }

  /** Click Search menu */
  async clickSearchMenu() {
    await this.searchMenu.click();
  }

  async searchFor(searchFor: string) {
    await this.page.getByRole('combobox').first().selectOption(searchFor);

  }

  /** Fill search input */
  async searchInput(lastName: string) {
    await this._searchInput.fill(lastName);
  }

  /** Click Search button */
  async SearchBtn() {
    await this._SearchBtn.click();
  }

  /** Click Calendar menu */
  async clickCalendar() {
    await this.page.locator("//li[@id='left-nav-menu-calendar']//a[@title='Calendar']").click();
    await this.page.locator("//div[normalize-space(text())='31']").click();
  }
}