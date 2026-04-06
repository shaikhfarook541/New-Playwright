import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { LogoutPage } from '../pages/logout.page';

test('Login and select first available facility', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const logoutPage = new LogoutPage(page);

    await loginPage.login('pbiswas', 'Simplify!12345');

    await dashboardPage.selectFacility('SQA_WC');
    await page.waitForTimeout(2000); // Wait for the facility selection to process
    await logoutPage.performLogout();
});

