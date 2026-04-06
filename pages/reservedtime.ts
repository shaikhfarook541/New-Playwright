import { th } from '@faker-js/faker';
import { Locator, Page, expect } from '@playwright/test';

export class reservedtime {
    readonly page!: Page;
    readonly _clickScheduleReservedTime: Locator;
    readonly _eventTitle: Locator;
    readonly _startdate: Locator;
    readonly _endDate: Locator;
    readonly _startTime: Locator;
    readonly _endTime: Locator;
    readonly _clickOnPhysician: Locator;
    readonly _saveReservedTime: Locator;
    readonly _filter: Locator;
    readonly saveButton: any;

    constructor(page: Page) {
        this.page = page;
        this._clickScheduleReservedTime = page.locator("//span[normalize-space()='Schedule Reserved Time']");
        this._eventTitle = page.locator("//input[@id='reason']");
        this._startdate = page.locator("//input[@id='startDate']");
        this._endDate = page.locator("//input[@id='endDate']");
        this._startTime = page.locator("//input[@id='startTime']");
        this._endTime = page.locator("//input[@id='endTime']");
        this._clickOnPhysician = page.locator("//div[@id='providers']//div[@class='v-select__selections']");
        this._saveReservedTime = page.locator("//button[@class='primary button'][normalize-space()='Save']"); // Update locator as needed
        this._filter = page.locator('//input[@id="typeaheadFilter"]');
    }

    async clickScheduleReservedTime() {
        await this._clickScheduleReservedTime.click();
    }

    async eventTitle(eventTitle: string) {
        await this._eventTitle.fill(eventTitle);
    }

    async startDate(startDate: string) {
        await this._startdate.fill(startDate);
    }

    async endDate(endDate: string) {
        await this._endDate.fill(endDate);
    }
    async startTime(starttime: string) {
        await this._startTime.fill(starttime);
    }
    async endTime(endtime: string) {
        await this._endTime.fill(endtime);
    }

    async physician(physician: string) {
        await this._clickOnPhysician.click();
        await this._filter.fill(physician);
        await this.page.locator(`//div[@class="v-list-item__title" and normalize-space()='${physician}']`).click();
    }
    async saveReservedTime() {
        await this._saveReservedTime.click();
    }
    async savePatient() {
        await this.saveButton.click();
    }

}

