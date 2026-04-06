import { Page, expect } from '@playwright/test';

export class PhysicianPage {
    readonly page: Page;
    readonly firstNameField: any;
    readonly lastNameField: any;
    readonly physicianTypeDropdown: any;
    readonly saveButton: any;
    readonly successMessage: any;

    constructor(page: Page) {
        this.page = page;
        // Store locators in constructor
        this.firstNameField = page.getByRole('textbox', { name: 'First Name:' });
        this.lastNameField = page.getByRole('textbox', { name: 'Last Name:' });
        this.physicianTypeDropdown = page.getByRole('checkbox', { name: 'Physician Type: Wound Care' });
        this.saveButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.getByText('Save was successful!');
    }
    /**
     * Enter physician first name
     */
    async enterFirstName(firstName: string) {
        await this.firstNameField.fill(firstName);
    }

    /**
     * Enter physician last name
     */
    async enterLastName(lastName: string) {
        await this.lastNameField.fill(lastName);
    }

    /**
     * Select physician type - Wound Care Physician
     */
    async selectPhysicianType() {
        await this.physicianTypeDropdown.check();
    }

    /**
     * Click submit button to save physician
     */
    async savePhysician() {
        await this.saveButton.click();
    }

    /**
     * Verify physician was added successfully
     */
    async verifyPhysicianAdded() {
        await expect(this.successMessage).toBeVisible();
    }

}

