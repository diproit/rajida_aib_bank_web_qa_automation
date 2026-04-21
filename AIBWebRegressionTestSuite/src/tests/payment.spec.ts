import { test } from '../fixtures/auth.fixture';
import { PaymentPage } from '../features/pages/PaymentPage';
import { TestData } from '../utils/testData';

test('TC03 - Payment Transaction', async ({ page }) => {
  
  const paymentPage = new PaymentPage(page);

  await page.goto('/transactions/payment');

  const { branch, section, accountName, payTo, description, amount } = TestData.payment;

  await paymentPage.payment(branch, section, accountName, payTo, description, amount);

});