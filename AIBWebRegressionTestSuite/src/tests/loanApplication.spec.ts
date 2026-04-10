import { test } from '../fixtures/auth.fixture';
import { LoanApplicationPage } from '../features/pages/LoanApplicationPage';
import { TestData } from '../utils/testData';

test('TC06 - Loan Application', async ({ page }) => {

  const loanApplicationPage = new LoanApplicationPage(page);

  await page.goto('/loans/application');

  const { customerNumber, loanProductId, amount } = TestData.loanApplication;

  await loanApplicationPage.loanApplication(customerNumber, loanProductId, amount);
  //   await loanApplicationPage.validateLoanApplicationSuccess();


});