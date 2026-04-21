import { test } from '../fixtures/auth.fixture';
import { JournalPage } from '../features/pages/JournalPage';
import { TestData } from '../utils/testData';

test('TC05 - Journal Transaction', async ({ page }) => {
  
  const journalPage = new JournalPage(page);

  await page.goto('/transactions/journal');

  const { branch, section, accountName1, description1, credit, accountName2, description2, debit} = TestData.journal;

  await journalPage.journal(branch, section, accountName1, description1, credit, accountName2, description2, debit);

});