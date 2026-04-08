import { test } from '../fixtures/auth.fixture';
import { JournalPage } from '../features/pages/JournalPage';
import { TestData } from '../utils/testData';

test('TC03 - Journal Transaction', async ({ page }) => {
  
  const journalPage = new JournalPage(page);

  await page.goto('/transactions/journal');

  const { branchId, sectionId, accountName1, description1, credit, accountName2, description2, debit } = TestData.journal;

  await journalPage.journal(branchId, sectionId, accountName1, description1, credit, accountName2, description2, debit);
//   await journalPage.validateJournalSuccess();

//   await journalPage.approveJournal(description1);
//   await journalPage.validateApproveSuccess();
});