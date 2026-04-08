import { test } from '../fixtures/auth.fixture';
import { WithdrawalPage } from '../features/pages/WithdrawPage';
import { TestData } from '../utils/testData';

test('TC03 - Withdraw Transaction', async ({ page }) => {
  const withdrawalPage = new WithdrawalPage(page);

  await page.goto('/transactions/withdrawal');

 const { customerNumber, accountNumberValue, amount} = TestData.withdrawal;
  
    await withdrawalPage.withdrawal(customerNumber, accountNumberValue, amount);
    // await withdrawalPage.validateWithdrawalSuccess();
  
  });
