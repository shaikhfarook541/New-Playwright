import { test, expect } from '@playwright/test';

test('Add last product to cart and complete checkout', async ({ page }) => {
  // Step 1: Navigate to GreenKart
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await expect(page).toHaveTitle('GreenKart - veg and fruits kart');

  // Step 2: Select the last product and click Add to Cart
  // The last product on the page is "Walnuts - 1/4 Kg"
  const lastAddToCartBtn = page.locator('.product-action button').last();
  const lastProductCard = lastAddToCartBtn.locator('xpath=ancestor::div[contains(@class,"product-action")]/parent::div');
  const lastProductName = await page.locator('h4').last().innerText();

  await lastAddToCartBtn.click();

  // Verify cart count updated to 1
  await expect(page.locator('strong').first()).toHaveText('1');

  // Step 3: Open cart dropdown
  await page.getByRole('link', { name: 'Cart' }).click();

  // Verify the last product appears in the cart dropdown
  await expect(page.locator('ul li p').first()).toContainText(lastProductName);

  // Step 4: Click Proceed to Checkout
  await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  await expect(page).toHaveURL(/\#\/cart/);

  // Step 5: Verify product appears in cart table
  await expect(page.locator('table tbody tr').first().locator('td').nth(1)).toContainText(lastProductName);

  // Step 6: Place Order
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page).toHaveURL(/\#\/country/);

  // Step 7: Select country
  await page.getByRole('combobox').selectOption('India');

  // Step 8: Agree to Terms & Conditions
  await page.getByRole('checkbox').check();

  // Step 9: Click Proceed
  await page.getByRole('button', { name: 'Proceed' }).click();

  // Step 10: Verify order is placed - redirected back to home with empty cart
  await expect(page).toHaveURL(/seleniumPractise/);
  // Cart items count in the header resets to 0
  await page.close();
});
