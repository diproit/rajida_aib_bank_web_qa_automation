import { test } from '../fixtures/auth.fixture';
import { ChartOfAccountPage } from '../features/pages/ChartOfAccountPage';
import { TestData } from '../utils/testData';

test('TC10 - Add New Chart Of Account', async ({ page }) => {

  const chartOfAccountPage = new ChartOfAccountPage(page);

  await page.goto('/setup/chart-of-account');

  const { typeGroup, coaType, nameEng } = TestData.chartOfAccount;

  await chartOfAccountPage.addChartOfAccount(typeGroup, coaType, nameEng);

  await chartOfAccountPage.validateCOASuccess();
 
});