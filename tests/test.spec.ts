import { test, expect } from '@playwright/test';

test.describe('Demo Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://example.com');
    });

    test('should have title', async ({ page }) => {
        await expect(page).toHaveTitle(/Example Domain/);
    });

    test('should find and click element', async ({ page }) => {
        const link = page.locator('a');
        await expect(link).toBeVisible();
        await link.click();
    });

    test('should fill form and submit', async ({ page }) => {
        const input = page.locator('input[type="text"]');
        await input.fill('test value');
        await expect(input).toHaveValue('test value');
    });
});