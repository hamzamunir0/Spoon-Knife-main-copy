// @ts-check
import { test, expect } from '@playwright/test';
const path = require('path')
test('test', async ({ page }) => {
  const filePath = `file://${path.resolve(__dirname, '../index.html')}`; 
  await page.goto(filePath);
  await page.pause();
//  await page.pause();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('hamza');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#message')).toContainText('Form is submitted!');
});
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
