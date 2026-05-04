# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC04 - Withdraw Transaction
- Location: src\tests\withdraw.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Transactions' })
    - waiting for" https://qaaibweb.aibanker.cloud/login" navigation to finish...
    - navigated to "https://qaaibweb.aibanker.cloud/login"

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class WithdrawalPage {
  4  |   readonly page: Page;
  5  |   private clickedTxnNo: string = '';
  6  | 
  7  |   // Withdrawal Locators
  8  |   readonly transactionsMenu: Locator;
  9  |   readonly withdrawalTab: Locator;
  10 |   readonly customerNumber: Locator;
  11 |   readonly next: Locator;
  12 |   readonly accountNumber: Locator;
  13 |   readonly amount: Locator;
  14 |   readonly update: Locator;
  15 |   readonly withdrawalSuccessMessage: Locator;
  16 | 
  17 |   constructor(page: Page) {
  18 |     this.page = page;
  19 | 
  20 |     // Withdrawal Locators
  21 |     this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
  22 |     this.withdrawalTab = page.getByRole('menuitem', { name: 'Withdrawal', exact: true });
  23 |     this.customerNumber = page.getByRole('textbox', { name: 'Customer Number' });
  24 |     this.next = page.getByRole('button', { name: 'Next' });
  25 |     this.accountNumber = page.getByPlaceholder('Select Account');
  26 |     this.amount = page.getByRole('textbox', { name: 'Enter Amount' });
  27 |     this.update = page.getByRole('button', { name: 'Update' });
  28 |     this.withdrawalSuccessMessage = page.getByText('Transaction processed successfully.');
  29 | 
  30 |    
  31 |   }
  32 | 
  33 |   // Withdrawal method
  34 |   async withdrawal(customerNumber: string, account: string, amount: string) {
> 35 |     await this.transactionsMenu.click();
     |                                 ^ Error: locator.click: Target page, context or browser has been closed
  36 |     await this.withdrawalTab.click();
  37 |     await this.customerNumber.fill(customerNumber);
  38 |     await this.next.click();
  39 |     await this.page.waitForTimeout(2000);
  40 |     // Click to open dropdown
  41 |     await this.accountNumber.click();
  42 |     await this.page.waitForTimeout(1000);
  43 |     // Wait for the account dropdown options to load
  44 |     await this.accountNumber.selectOption({ label: account });
  45 |     await this.amount.fill(amount);
  46 |     await this.update.click();
  47 |     await this.page.waitForTimeout(3000);
  48 |   }
  49 | 
  50 |   async validateWithdrawalSuccess() {
  51 |     await this.page.waitForTimeout(3000);
  52 |     await expect(this.withdrawalSuccessMessage).toBeVisible();
  53 |     await this.page.waitForTimeout(3000);
  54 |   }
  55 | 
  56 |   
  57 | 
  58 | 
  59 | }
```