import { test } from '../fixtures/auth.fixture';
import { InvestmentProductPage } from '../features/pages/InvestmentProductPage';
import { TestData } from '../utils/testData';

test('TC12 - Add New Investment Product', async ({ page }) => {

  const investmentProductPage = new InvestmentProductPage(page);

  await page.goto('/setup/investment-product');

  const { productNamePri, accountCode, operatingType, interestPolicy, interestUpdatePolicy, interestRateMin, interestRateMax, periodMin, periodMax, decimalNumber, generalLedgersName, taxGLAccount, interestAccount, interestReservationAccount } = TestData.investmentProduct;

  await investmentProductPage.addinvestmentProduct(productNamePri, accountCode, operatingType, interestPolicy, interestUpdatePolicy, interestRateMin, interestRateMax, periodMin, periodMax, decimalNumber, generalLedgersName, taxGLAccount, interestAccount, interestReservationAccount);

 
});