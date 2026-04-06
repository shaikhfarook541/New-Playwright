import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PhysicianPage } from '../pages/physician.page';
import { DashboardPage } from '../pages/dashboard.page';
import { LogoutPage } from '../pages/logout.page';
import * as testDataUtils from '../utils/testData.utils';


test('Add Physician', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const logoutPage = new LogoutPage(page);
    const lastName= testDataUtils.lastName();

    // Step 1: Login
    await loginPage.login('pbiswas', 'Simplify!12345');

    // Step 2: Navigate to Add Physician
    await dashboardPage.clickAdd();
    await dashboardPage.clickAddPhysician();
    const page1Promise = page.waitForEvent('popup');
    const page1 = await page1Promise;
    const physicianPage = new PhysicianPage(page1);
    // Step 3: Fill physician details
    await physicianPage.enterFirstName(testDataUtils.firstName());
    await physicianPage.enterLastName(lastName);
    
    // Step 4: Select Physician Type - Wound Care Physician
    await physicianPage.selectPhysicianType();

    // Step 5: Save physician
    await physicianPage.savePhysician();

    await dashboardPage.clickSearchMenu();
    await dashboardPage.searchFor('Physician');
    await dashboardPage.searchInput(lastName);
    await dashboardPage.SearchBtn();

    await expect(page.locator(`//span[@data-bind='text: physicianLName']`)).toHaveText(lastName);

    // Step 7: Logout
    await logoutPage.performLogout();
});
