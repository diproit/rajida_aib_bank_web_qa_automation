import { test } from '@playwright/test';
import { PaymentPage } from '../features/pages/PaymentPage';
import { TestData } from '../utils/testData';

test('TC02 - Payment Transaction', async ({ page }) => {
  const paymentPage = new PaymentPage(page);

  await page.goto('/transactions/payment');

 const { accountName, payTo, description, amount} = TestData.payment;
  
    await paymentPage.payment(accountName, payTo, description, amount);
    await paymentPage.validatePaymentSuccess();
    
    await paymentPage.approvePayment();
    await paymentPage.validateApproveSuccess();
  });
