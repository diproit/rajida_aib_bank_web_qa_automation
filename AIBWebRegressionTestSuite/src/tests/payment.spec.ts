import { test } from '../fixtures/auth.fixture';
import { PaymentPage } from '../features/pages/PaymentPage';
import { LoginPage } from '../features/pages/LoginPage';
import { SignOffPage } from '../features/pages/SignOffPage';


import { TestData } from '../utils/testData';

test('TC03 - Payment Transaction', async ({ page }) => {

  const paymentPage = new PaymentPage(page);

  await page.goto('/transactions/payment');

  const { branch, section, accountName, payTo, description, amount } = TestData.payment;

  await paymentPage.payment(branch, section, accountName, payTo, description, amount);

  const signOffPage = new SignOffPage(page);

  await page.goto('/');

  await signOffPage.cashierSignOff();

  const { currentUser } = TestData.approval;

  await paymentPage.logoutFromCurrentUser(currentUser);

  const loginPage = new LoginPage(page);

  const { username2, password2 } = TestData.approval;

  await loginPage.login(username2, password2);

  const { cashBook, openingCashAmount } = TestData.cashier;

  await loginPage.cashierSignIn(cashBook, openingCashAmount);

  await page.goto('/transactions/approvals');

  const { user } = TestData.approval;

  await paymentPage.approvePayment(user);

  await page.goto('/');

  await signOffPage.cashierSignOff();

  const { currentUser2 } = TestData.approval;

  await paymentPage.logoutFromCurrentUser2(currentUser2);

  const { username, password } = TestData.validUser;

  await loginPage.login(username, password);

  await loginPage.cashierSignIn(cashBook, openingCashAmount);

  //Save logged-in state
  await page.context().storageState({ path: 'storageState.json' });
});