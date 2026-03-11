import { test, expect } from '@playwright/test';

test('Login válido', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('.title')).toHaveText('Products');

});

test('Login com senha inválida', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'senha_errada');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();

});

test('Login com campos vazios', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();

});