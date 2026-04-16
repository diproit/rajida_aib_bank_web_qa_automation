import { test } from '../fixtures/auth.fixture';
import { FDAdvancePage } from '../features/pages/FDAdvancePage';
import { LoanApplicationListPage } from '../features/pages/LoanApplicationListPage';
import { TestData } from '../utils/testData';

test('TC07 - FD Advance', async ({ page }) => {

    const fdAdvancePage = new FDAdvancePage(page);

    await page.goto('/loans/fd-advance');

    const { fdCustomerNumber, fdLoanProductId, accountNumber, accountName, requestLoanAmount, fdLoanPeriod, fdCertificate } = TestData.fdAdvance;

    await fdAdvancePage.fdAdvance(fdCustomerNumber, fdLoanProductId, accountNumber, accountName, requestLoanAmount, fdLoanPeriod, fdCertificate);
    
    const loanApplicationListPage = new LoanApplicationListPage(page);

    await page.goto('/loans/application-list');

    const { customerNumber, loanPeriod, loanInterest, guarantorType, guarantorNumber, comment, disbursementAmount, disbursementType, disbursementMethod } = TestData.loanApplicationList;

    await loanApplicationListPage.fdDoApproval(customerNumber, loanPeriod, loanInterest, guarantorType, guarantorNumber, comment);
    await loanApplicationListPage.loanDoDisburse(customerNumber, disbursementAmount, disbursementType, disbursementMethod);
    
});