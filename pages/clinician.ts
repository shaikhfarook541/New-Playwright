import { Page, Locator } from "@playwright/test";

export class ClinicianPage {
    readonly page: Page;
    readonly titleDropdown: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleDropdown = page.getByLabel('Title:');
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name:' });
        this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name:' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name:' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async selectTitle(optionValue: string) {
        await this.titleDropdown.selectOption(optionValue);
    }

    async fillFirstName(name: string) {
        await this.firstNameInput.fill(name);
    }

    async fillLastName(name: string) {
        await this.lastNameInput.fill(name);
    }

    async submitForm() {
        await this.submitButton.click();
    }
}