import { test } from '../fixtures/auth.fixture';
import { JournalPage } from '../features/pages/JournalPage';
import { TestData } from '../utils/testData';
import { LoginPage } from '../features/pages/LoginPage';
import { SignOffPage } from '../features/pages/SignOffPage';

test('TC05 - Journal Transaction', async ({ page }) => {
  
  const journalPage = new JournalPage(page);

  await page.goto('/transactions/journal');

  const { branch, section, accountName1, description1, credit, accountName2, description2, debit} = TestData.journal;

  await journalPage.journal(branch, section, accountName1, description1, credit, accountName2, description2, debit);

   const signOffPage = new SignOffPage(page);
  
    await page.goto('/');
  
    await signOffPage.cashierSignOff();
  
    const { currentUser } = TestData.approval;
  
    await journalPage.logoutFromCurrentUser(currentUser);
  
    const loginPage = new LoginPage(page);
  
    const { username2, password2 } = TestData.approval;
  
    await loginPage.login(username2, password2);
  
    const { cashBook, openingCashAmount } = TestData.cashier;
  
    await loginPage.cashierSignIn(cashBook, openingCashAmount);
  
    await page.goto('/transactions/approvals');
  
    const { user } = TestData.approval;
  
    await journalPage.approveJournal(user);
  
    await page.goto('/');
  
    await signOffPage.cashierSignOff();
  
    const { currentUser2 } = TestData.approval;
  
    await journalPage.logoutFromCurrentUser2(currentUser2);
  
    const { username, password } = TestData.validUser;
  
    await loginPage.login(username, password);
  
    await loginPage.cashierSignIn(cashBook, openingCashAmount);
  
    //Save logged-in state
    await page.context().storageState({ path: 'storageState.json' });

});