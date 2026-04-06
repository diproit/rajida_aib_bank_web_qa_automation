import { test } from '@playwright/test';
import { ReceiptPage } from '../features/pages/ReceiptPage';
import { TestData } from '../utils/testData';

test('TC03 - Receipt Transaction', async ({ page }) => {
  const receiptPage = new ReceiptPage(page);

  await page.goto('/transactions/receipt');

 const { customerNumber, accountNumber, amount} = TestData.receipt;
  
    await receiptPage.receipt(customerNumber, accountNumber, amount);
    await receiptPage.validateReceiptSuccess();
    
    
  });
