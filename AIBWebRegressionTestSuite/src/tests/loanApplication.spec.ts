import { test } from '../fixtures/auth.fixture';
import { LoanApplicationPage } from '../features/pages/LoanApplicationPage';
import { LoanApplicationListPage } from '../features/pages/LoanApplicationListPage';
import { TestData } from '../utils/testData';

test('TC06 - Loan Application', async ({ page }) => {

  const loanApplicationPage = new LoanApplicationPage(page);

  await page.goto('/loans/application');

  const { loanCustomerNumber, loanProductId, amount } = TestData.loanApplication;

  await loanApplicationPage.loanApplication(loanCustomerNumber, loanProductId, amount);

  const loanApplicationListPage = new LoanApplicationListPage(page);

  await page.goto('/loans/application-list');

  const { customerNumber, loanPeriod, loanInterest, guarantorType, guarantorNumber, comment, disbursementAmount, disbursementType, disbursementMethod } = TestData.loanApplicationList;

  await loanApplicationListPage.loanDoAppraisal(customerNumber, loanPeriod, loanInterest, guarantorType, guarantorNumber, comment);
  await loanApplicationListPage.loanDoApproval(customerNumber);
  await loanApplicationListPage.loanDoDisburse(customerNumber, disbursementAmount, disbursementType, disbursementMethod);
});