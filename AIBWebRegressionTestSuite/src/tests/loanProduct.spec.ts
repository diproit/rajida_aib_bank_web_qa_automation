import { test } from '../fixtures/auth.fixture';
import { LoanProductPage } from '../features/pages/LoanProductPage';
import { TestData } from '../utils/testData';

test('TC13 - Add New Loan Product', async ({ page }) => {

  const loanProductPage = new LoanProductPage(page);

  await page.goto('/setup/loan-product');

  const { productNameEng, productNameSin, autoNumberCreation, operatingType, interestPolicy, penaltyPolicy, insurancePolicy, feePolicy, pastDuePolicy, interestRateMin, interestRateMax, periodMin, periodMax, penaltyRate, insuranceRate, feeRate, noOfLoanGuarantors, fieldCollection, pbType, decimalNumber, glAccount, glInterestAccount, glPenaltyAccount, glInsuranceAccount, glFeeAccount } = TestData.loanProduct;

  await loanProductPage.addLoanProduct(productNameEng, productNameSin, autoNumberCreation, operatingType, interestPolicy, penaltyPolicy, insurancePolicy, feePolicy, pastDuePolicy, interestRateMin, interestRateMax, periodMin, periodMax, penaltyRate, insuranceRate, feeRate, noOfLoanGuarantors, fieldCollection, pbType, decimalNumber, glAccount, glInterestAccount, glPenaltyAccount, glInsuranceAccount, glFeeAccount);

 
});