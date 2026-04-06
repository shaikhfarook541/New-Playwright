import { Page, expect } from '@playwright/test';

export class PatientPage {
    readonly page: Page;
    readonly firstNameField: any;
    readonly lastNameField: any;
    readonly contactInformationTab: any;
    readonly emailField: any;
    readonly facilityDropdown: any;
    readonly saveButton: any;
    readonly successMessage: any;
    readonly admissionInformationTab: any;
    readonly admissionDateField: any;

    constructor(page: Page) {
        this.page = page;
        // Store locators in constructor
        this.firstNameField = page.locator('//input[@id="firstName"]');
        this.lastNameField = page.locator('//input[@id="lastName"]');
        this.contactInformationTab = page.getByRole('tab', { name: 'Contact Information' });
        this.emailField = page.locator('//input[@id="emailPatientDemos"]');
        this.facilityDropdown = page.locator('#ddlCoc');
        this.saveButton = page.locator('//input[@id="btnSave"]');
        this.successMessage = page.getByText('Save was successful!');
        this.admissionInformationTab = page.getByRole('tab', { name: 'Admission Information' });
        this.admissionDateField = page.locator('#admissionDate');
    }

    /**
     * Enter patient first name
     */
    async enterFirstName(firstName: string) {
        await this.firstNameField.fill(firstName);
    }

    /**
     * Enter patient last name
     */
    async enterLastName(lastName: string) {
        await this.lastNameField.fill(lastName);
    }

    /**
     * Click on Contact Information tab
     */
    async contactinformation() {
        await this.contactInformationTab.click();
    }

    /**
     * Fill email
     */
    async email(emailAddress: string) {
        await this.emailField.fill(emailAddress);
    }

    /**
     * Select facility from dropdown
     */
    async selectFacility(facility: string) {
        await this.facilityDropdown.selectOption(facility);
    }

    /**
     * Click on Admission Information tab
     */
    async clickAdmissionInformationTab() {
        await this.admissionInformationTab.click();
    }

    

    /**
     * Fill admission date
     */
    async fillAdmissionDate(date: string) {
        await this.admissionDateField.fill(date);
    }

    /**
     * Click submit button to save patient
     */
    async savePatient() {
        await this.saveButton.click();
    }

    /**
     * Verify patient was added successfully
     */
    async verifyPatientAdded() {
        await expect(this.successMessage).toBeVisible();
    }


}

