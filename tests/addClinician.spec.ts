import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { ClinicianPage } from '../pages/clinician';
import { LogoutPage } from '../pages/logout.page';
import * as testDataUtils from '../utils/testData.utils';


test('add Clinician', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const logoutPage = new LogoutPage(page);
    const firstName = testDataUtils.firstName();
    const lastName = testDataUtils.lastName();


    await loginPage.login('pbiswas', 'Simplify!12345');
    // Navigate to Add Clinician
    await dashboardPage.clickAdd();
    await dashboardPage.addClinician();
    const page1Promise = page.waitForEvent('popup');
    const page1 = await page1Promise;
    const clinicianPage = new ClinicianPage(page1);
    await dashboardPage.addClinician();
    // Fill form
    await clinicianPage.selectTitle('4');
    await clinicianPage.fillFirstName(firstName);
    await clinicianPage.fillLastName(lastName);
    await clinicianPage.submitForm();

    await dashboardPage.clickSearchMenu();
    await dashboardPage.searchFor('Clinician');
    await dashboardPage.searchInput(lastName);
    await dashboardPage.SearchBtn();
    await expect(page.locator(`//span[@data-bind='text: clinicianLName']`)).toHaveText(lastName);

    // Logout
    await logoutPage.logout();

    await page.close();
});