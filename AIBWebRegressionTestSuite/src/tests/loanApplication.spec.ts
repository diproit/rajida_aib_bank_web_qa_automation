import { test } from '../fixtures/auth.fixture';
import { LoanApplicationPage } from '../features/pages/LoanApplicationPage';
import { LoanApplicationListPage } from '../features/pages/LoanApplicationListPage';
import { TestData } from '../utils/testData';

test('TC06 - Loan Application', async ({ page }) => {

  const loanApplicationPage = new LoanApplicationPage(page);

  await page.goto('/loans/application');

  const { loanCustomerNumber, loanProduct, amount } = TestData.loanApplication;

  await loanApplicationPage.loanApplication(loanCustomerNumber, loanProduct, amount);

  const loanApplicationListPage = new LoanApplicationListPage(page);

  await page.goto('/loans/application-list');

  const { customerNumber, applicationStatus, applicationStatus2, applicationStatus3, applicationLoanProduct, customerNumberSearch, loanPeriod, loanInterest, guarantorType, guarantorNumber, comment, disbursementAmount, disbursementType, disbursementMethod } = TestData.loanApplicationList;

  await loanApplicationListPage.loanDoAppraisal(customerNumber, applicationStatus, applicationLoanProduct, customerNumberSearch,loanPeriod, loanInterest, guarantorType, guarantorNumber, comment);
  await loanApplicationListPage.loanDoApproval(customerNumber, applicationStatus2, applicationLoanProduct, customerNumberSearch);
  await loanApplicationListPage.loanDoDisburse(customerNumber, applicationStatus3, applicationLoanProduct, customerNumberSearch, disbursementAmount, disbursementType, disbursementMethod);
});