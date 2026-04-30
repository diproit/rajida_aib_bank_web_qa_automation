import { test } from '../fixtures/auth.fixture';
import { PawningItemTypesPage } from '../features/pages/PawningItemTypesPage';
import { TestData } from '../utils/testData';

test('TC16 - Add New Pawning Item Type', async ({ page }) => {

  const pawningItemTypesPage = new PawningItemTypesPage(page);

  await page.goto('/setup/general-ledger-account');

  const { nameEng, nameSin, nameTam } = TestData.pawningItemTypes;

  await pawningItemTypesPage.addPawningItem(nameEng, nameSin, nameTam);
 
});