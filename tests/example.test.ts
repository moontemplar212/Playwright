import { test, expect } from '@playwright/test';

test.describe('feature foo', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('https://playwright.dev/');
  });

  test('basic test', async ({ page }) => {
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });

  test('my test', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  
    await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
  
    await expect(page.locator('text=Learn more').first()).toBeVisible();
  
    await page.click('text=Get Started');
  
    await expect(page.locator('text=Introduction').first()).toBeVisible();
  });
});
