import { test } from '../fixtures/auth.fixture';
import { PawningItemsAssessedPage } from '../features/pages/PawningItemsAssessedPage';
import { TestData } from '../utils/testData';

test('TC17 - Add New Pawning Items Assessed Value', async ({ page }) => {

  const pawningItemsAssessedPage = new PawningItemsAssessedPage(page);

  await page.goto('/setup/general-ledger-account');

  const { carat, marketValue, gramValue } = TestData.pawningItemsAssessed;

  await pawningItemsAssessedPage.addPawningItemsAssessedValue(carat, marketValue, gramValue);
 
});