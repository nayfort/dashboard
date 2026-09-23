import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('/customers'); });

test('pagination updates the selected customer only', async ({ page }) => {
  await expect(page.locator('tbody tr')).toHaveCount(8);
  await page.getByRole('button', { name: 'Next page' }).click();
  await expect(page.locator('tbody tr')).toHaveCount(1);
  await page.getByRole('button', { name: 'Toggle status for Ray Pole' }).click();
  await expect(page.getByRole('button', { name: 'Toggle status for Ray Pole' })).toHaveText('Inactive');
  await page.getByRole('button', { name: 'Previous page' }).click();
  await expect(page.getByRole('button', { name: 'Toggle status for Jane Cooper' })).toHaveText('Active');
  await page.getByRole('button', { name: 'Next page' }).click();
  await expect(page.getByRole('button', { name: 'Toggle status for Ray Pole' })).toHaveText('Inactive');
});

test('search resets pages and toggles the matching customer', async ({ page }) => {
  await page.getByRole('button', { name: 'Next page' }).click();
  await page.getByRole('searchbox').fill('  FLOYD  ');
  await expect(page.locator('tbody tr')).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Next page' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Page 2', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Toggle status for Floyd Miles' }).click();
  await page.getByRole('searchbox').fill('');
  await expect(page.getByRole('button', { name: 'Toggle status for Floyd Miles' })).toHaveText('Active');
  await expect(page.getByRole('button', { name: 'Toggle status for Jane Cooper' })).toHaveText('Active');
});

test('empty search results have valid counts and disabled navigation', async ({ page }) => {
  await page.getByRole('searchbox').fill('no such customer');
  await expect(page.getByText('No customers found. Try another search.')).toBeVisible();
  await expect(page.getByText('Showing data 0 to 0 of 0 entries')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Previous page' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Next page' })).toBeDisabled();
});

test('mobile layout adapts on resize without document overflow', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator('.sideLink').first()).toBeVisible();
  for (const width of [375, 320]) {
    await page.setViewportSize({ width, height: 812 });
    await expect(page.locator('.sideLink').first()).toBeHidden();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Customers' })).toBeVisible();
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator('.sideLink').first()).toBeVisible();
});

test('existing routes render without browser errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const name of ['Dashboard', 'Product', 'Income', 'Promote', 'Help', 'Customers']) {
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name, exact: true }).click();
    await expect(page.getByRole('heading', { name: name === 'Customers' ? 'All Customers' : name, exact: true })).toBeVisible();
  }
  expect(errors).toEqual([]);
});
