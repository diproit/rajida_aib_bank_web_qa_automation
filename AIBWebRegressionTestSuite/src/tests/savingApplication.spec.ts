import { test } from '../fixtures/auth.fixture';
import { SavingApplicationPage } from '../features/pages/SavingApplicationPage';
import { TestData } from '../utils/testData';

test('TC09 - Saving Application', async ({ page }) => {

  const savingApplicationPage = new SavingApplicationPage(page);

  await page.goto('/savings/application');

  const { customerNumber, savingProduct, period, interestRate, maturityOption, interestUpdateAccount, initialAmount, withdrawalInstruction } = TestData.savingApplication;

  await savingApplicationPage.savingApplication(customerNumber, savingProduct, period, interestRate, maturityOption, interestUpdateAccount, initialAmount, withdrawalInstruction);

});