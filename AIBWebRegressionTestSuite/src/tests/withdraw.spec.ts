import { test } from '../fixtures/auth.fixture';
import { WithdrawalPage } from '../features/pages/WithdrawPage';
import { TestData } from '../utils/testData';

test('TC04 - Withdraw Transaction', async ({ page }) => {
  const withdrawalPage = new WithdrawalPage(page);

  await page.goto('/transactions/withdrawal');

 const { customerNumber, accountNumberId, amount} = TestData.withdrawal;
  
    await withdrawalPage.withdrawal(customerNumber, accountNumberId, amount);
    // await withdrawalPage.validateWithdrawalSuccess();
  
  });
