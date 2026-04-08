import { test } from '../fixtures/auth.fixture';
import { TestData } from '../utils/testData';

test('TC00 - Login With Valid Credentials And Cashier Sign In', async ({ login, page }) => {
  const { username, password } = TestData.validUser;

  await login.loadpage(); // Load page at test start
  await login.login(username, password);
  await login.validateLoginSuccess();

  const { cashBook, openingCashAmount } = TestData.cashier;

  await login.cashierSignIn(cashBook, openingCashAmount);
  await login.validateSigninSuccess();

  //Save logged-in state
  await page.context().storageState({ path: 'storageState.json' });
});