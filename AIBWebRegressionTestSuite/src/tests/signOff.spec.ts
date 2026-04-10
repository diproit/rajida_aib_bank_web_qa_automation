import { test } from '../fixtures/auth.fixture';
import { SignInPage } from '../features/pages/SignOffPage';

test('TC01 - Cashier Sign Off', async ({ page }) => {
  
  const signInPage = new SignInPage(page);

  await page.goto('/');

  await signInPage.cashierSignOff();
  await signInPage.validateSigninSuccess();
});