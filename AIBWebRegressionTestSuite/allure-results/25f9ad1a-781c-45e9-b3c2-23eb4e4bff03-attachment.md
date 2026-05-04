# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC03 - Payment Transaction
- Location: src\tests\payment.spec.ts:9:5

# Error details

```
ReferenceError: paymentPage is not defined
```

# Test source

```ts
  1  | import { test } from '../fixtures/auth.fixture';
  2  | import { PaymentPage } from '../features/pages/PaymentPage';
  3  | import { LoginPage } from '../features/pages/LoginPage';
  4  | import { SignOffPage } from '../features/pages/SignOffPage';
  5  | 
  6  | 
  7  | import { TestData } from '../utils/testData';
  8  | 
  9  | test('TC03 - Payment Transaction', async ({ page }) => {
  10 | 
  11 |   // const paymentPage = new PaymentPage(page);
  12 | 
  13 |   // await page.goto('/transactions/payment');
  14 | 
  15 |   // const { branch, section, accountName, payTo, description, amount } = TestData.payment;
  16 | 
  17 |   // await paymentPage.payment(branch, section, accountName, payTo, description, amount);
  18 | 
  19 |   const signOffPage = new SignOffPage(page);
  20 | 
  21 |   //Uncomment only when running payment alone
  22 | 
  23 |   // await page.goto('/');
  24 | 
  25 |   // await signOffPage.cashierSignOff();
  26 | 
  27 |   const { currentUser } = TestData.paymentApproval;
  28 | 
> 29 |   await paymentPage.logoutFromCurrentUser(currentUser);
     |   ^ ReferenceError: paymentPage is not defined
  30 | 
  31 |   const loginPage = new LoginPage(page);
  32 | 
  33 |   const { username2, password2 } = TestData.paymentApproval;
  34 | 
  35 |   await loginPage.login(username2, password2);
  36 | 
  37 |   const { cashBook, openingCashAmount } = TestData.cashier;
  38 | 
  39 |   await loginPage.cashierSignIn(cashBook, openingCashAmount);
  40 | 
  41 |   // await page.goto('/transactions/approvals');
  42 | 
  43 |   // const { user } = TestData.paymentApproval;
  44 | 
  45 |   // await paymentPage.approvePayment(user);
  46 | 
  47 |   await page.goto('/');
  48 | 
  49 |   await signOffPage.cashierSignOff();
  50 | 
  51 |   const { currentUser2 } = TestData.paymentApproval;
  52 | 
  53 |   await paymentPage.logoutFromCurrentUser2(currentUser2);
  54 | 
  55 |   const { username, password } = TestData.validUser;
  56 | 
  57 |   await loginPage.login(username, password);
  58 | });
```