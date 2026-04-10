import { test } from '../fixtures/auth.fixture';
import { LoanApplicationListPage } from '../features/pages/LoanApplicationListPage';
import { TestData } from '../utils/testData';

test('TC07 - Loan Application Disburse', async ({ page }) => {

    const loanApplicationListPage = new LoanApplicationListPage(page);

    await page.goto('/loans/application-list');

    const { customerNumber, loanPeriod, loanInterest, guarantorType, guarantorNumber, comment, disbursementAmount, disbursementType, disbursementMethod } = TestData.loanApplicationList;

    await loanApplicationListPage.loanDoAppraisal(customerNumber, loanPeriod, loanInterest, guarantorType, guarantorNumber, comment);
    await loanApplicationListPage.loanDoApproval(customerNumber);
    await loanApplicationListPage.loanDoDisburse(customerNumber, disbursementAmount, disbursementType, disbursementMethod);
    // await loanApplicationListPage.validateLoanDisbursementSuccess();
});