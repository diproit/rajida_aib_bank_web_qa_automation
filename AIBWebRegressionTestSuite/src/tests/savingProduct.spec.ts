import { test } from '../fixtures/auth.fixture';
import { SavingProductPage } from '../features/pages/SavingProductPage';
import { TestData } from '../utils/testData';

test('TC11 - Add New Saving Product', async ({ page }) => {

  const savingProductPage = new SavingProductPage(page);

  await page.goto('/setup/saving-product');

  const { productNameEng, autoNumberCreation, operatingType, interestPolicy, interestUpdatePolicy, interestRateMin, interestRateMax, periodMin, periodMax, minimumBalance, pbType, decimalNumber,glAccount, interestAccount, reservationAccount, taxAccount } = TestData.savingProduct;

  await savingProductPage.addSavingProduct(productNameEng, autoNumberCreation, operatingType, interestPolicy, interestUpdatePolicy, interestRateMin, interestRateMax, periodMin, periodMax, minimumBalance, pbType, decimalNumber,glAccount, interestAccount, reservationAccount, taxAccount);

 
});