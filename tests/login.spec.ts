import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Login with facility selection', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // Complete login flow with first facility option
  await loginPage.login('pbiswas', 'Simplify!12345');
});

test('Login with specific facility', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // Complete login flow with specific facility
  await loginPage.login('pbiswas', 'Simplify!12345', 'SQA_WC');
});

test('Logout after successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // Step 1: Login
  await loginPage.login('pbiswas', 'Simplify!12345');
  
  // Step 2: Verify we're logged in
  await expect(page).toHaveURL(/scheduler/);
  
  // Step 3: Logout
  await loginPage.logout();
  
  // Step 4: Verify we're back at login page
  await loginPage.verifyLogoutSuccess();
});
