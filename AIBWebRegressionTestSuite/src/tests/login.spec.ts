import { test } from '@playwright/test';
import { LoginPage } from '../features/pages/LoginPage';
import { TestData } from '../utils/testData';

test('TC01 - Login With Valid Credentials And Cashier Sign In', async ({ page }) => {
  const loginPage = new LoginPage(page);


  await page.goto('/login');

  const { username, password } = TestData.validUser;

  await loginPage.login(username, password);
  await loginPage.validateLoginSuccess();

  const { cashBook, openingCashAmount } = TestData.cashier;

  await loginPage.cashierSignIn(cashBook, openingCashAmount);
  await loginPage.validateSigninSuccess();

});
 
