import { test } from '../fixtures/auth.fixture';
import { SignOffPage } from '../features/pages/SignOffPage';

test('TC01 - Cashier Sign Off', async ({ page }) => {
  
  const signOffPage = new SignOffPage(page);

  await page.goto('/');

  await signOffPage.cashierSignOff();
  await signOffPage.validateSigninSuccess();
});