import { test } from '../fixtures/auth.fixture';
import { GeneralLedgerAccountPage } from '../features/pages/GeneralLedgerAccountPage';
import { TestData } from '../utils/testData';

test('TC15 - Add New General Ledger Account', async ({ page }) => {

  const generalLedgerAccountPage = new GeneralLedgerAccountPage(page);

  await page.goto('/setup/general-ledger-account');

  const { section, coa, budget } = TestData.glAccount;

  await generalLedgerAccountPage.addGeneralLedgerAccount(section, coa, budget);
 
});