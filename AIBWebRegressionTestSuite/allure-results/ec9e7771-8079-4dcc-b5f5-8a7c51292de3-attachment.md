# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC03 - Payment Transaction
- Location: src\tests\payment.spec.ts:5:5

# Error details

```
Error: locator.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Branch')
    - locator resolved to <select id="branchFilter" class="_14h31gj0 _14h31gjc _14h31gj9 _14h31gj1 _14h31gj6 _14h31gj7 _14h31gj8 _14h31gjb _7n536nq _7n536nbc _7n536n68 _1fy35uo0 _14jht9l0 _14jht9l1 ndjjoi0 ndjjoi1 ndjjoi1t ndjjoie ndjjoi1y ndjjoi10  _7n536n34">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    58 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class PaymentPage {
  4   |   readonly page: Page;
  5   |   private clickedTxnNo: string = '';
  6   | 
  7   |   // Payment Locators
  8   |   readonly transactionsMenu: Locator;
  9   |   readonly paymentTab: Locator;
  10  |   readonly branch: Locator;
  11  |   readonly section: Locator;
  12  |   readonly accountName: Locator;
  13  |   readonly payTo: Locator;
  14  |   readonly description: Locator;
  15  |   readonly amount: Locator;
  16  |   readonly sendToApproval: Locator;
  17  |   readonly paymentSuccessMessage: Locator;
  18  | 
  19  |   // Approval Locators
  20  |   readonly approvalTab: Locator;
  21  |   readonly allSections: Locator;
  22  |   readonly paymentTxn: Locator;
  23  |   readonly approveBtn: Locator;
  24  |   readonly approveSuccessMessage: Locator;
  25  | 
  26  |   constructor(page: Page) {
  27  |     this.page = page;
  28  | 
  29  |     // Payment Locators
  30  |     this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
  31  |     this.paymentTab = page.getByRole('menuitem', { name: 'Payment', exact: true });
  32  |     this.branch = page.getByLabel('Branch');
  33  |     this.section = page.getByLabel('Section');
  34  |     this.accountName = page.getByRole('textbox', { name: 'Type account name...' });
  35  |     this.payTo = page.getByRole('textbox', { name: 'Payee Name' });
  36  |     this.description = page.getByRole('textbox', { name: 'Description' });
  37  |     this.amount = page.getByPlaceholder('0.00');
  38  |     this.sendToApproval = page.getByRole('button', { name: 'Send to Approval' });
  39  |     this.paymentSuccessMessage = page.getByText('Transactions saved with No');
  40  | 
  41  |     // Approval Locators
  42  |     this.approvalTab = page.getByRole('menuitem', { name: 'Approvals' });
  43  |     this.allSections = page.getByRole('button', { name: 'All Sections' });
  44  |     this.paymentTxn = page.getByRole('menuitem', { name: 'Payment' });
  45  |     this.approveBtn = page.getByRole('button', { name: 'Approve' });
  46  |     this.approveSuccessMessage = page.getByText('Transaction Approved', { exact: false });
  47  |   }
  48  | 
  49  |   // Method to get dynamic accountNameFill locator
  50  |   getAccountNameLocator(accountName: string): Locator {
  51  |     return this.page.getByText(accountName);
  52  |   }
  53  | 
  54  |   // Method to get dynamic addToList locator
  55  |   getAddToListLocator(accountName: string, payTo: string, description: string): Locator {
  56  |     return this.page.getByRole('row', { name: `${accountName} ${payTo} ${description}` }).locator('button');
  57  |   }
  58  | 
  59  |   // Payment method
  60  |   async payment(branchId: string, sectionId: string, accountName: string, payTo: string, description: string, amount: string) {
  61  |     await this.transactionsMenu.click();
  62  |     await this.paymentTab.click();
> 63  |     await this.branch.selectOption(branchId);
      |                       ^ Error: locator.selectOption: Target page, context or browser has been closed
  64  |     await this.section.selectOption(sectionId);
  65  | 
  66  |     // await this.section.selectOption('1');
  67  |     await this.page.waitForTimeout(3000);
  68  |     await this.accountName.fill(accountName);
  69  |     const accountNameLocator = this.getAccountNameLocator(accountName);
  70  |     await accountNameLocator.click();
  71  |     await this.payTo.fill(payTo);
  72  |     await this.description.fill(description);
  73  |     await this.amount.fill(amount);
  74  |     await this.page.waitForTimeout(3000);
  75  |     const addToListLocator = this.getAddToListLocator(accountName, payTo, description);
  76  |     await addToListLocator.click();
  77  |     await this.page.waitForTimeout(3000);
  78  |     await this.sendToApproval.click();
  79  |     await this.page.waitForTimeout(3000);
  80  |   }
  81  | 
  82  |   async validatePaymentSuccess() {
  83  |     await this.page.waitForTimeout(3000);
  84  |     await expect(this.paymentSuccessMessage).toBeVisible();
  85  |     await this.page.waitForTimeout(3000);
  86  |   }
  87  | 
  88  |   // Approve payment method
  89  |   async approvePayment(description: string) {
  90  |     await this.transactionsMenu.click();
  91  |     await this.approvalTab.click();
  92  |     await this.page.waitForTimeout(3000);
  93  |     await this.allSections.click();
  94  |     await this.paymentTxn.click();
  95  |     await this.page.waitForTimeout(3000);
  96  |     // Find and click the first payment row with the matching description
  97  |     const paymentRow = this.page.getByRole('row').filter({ hasText: description }).first();
  98  |     this.clickedTxnNo = await paymentRow.getByText(/-T\d+/).textContent() || '';
  99  |     await paymentRow.click();
  100 |     await this.page.waitForTimeout(3000);
  101 |     await this.approveBtn.click();
  102 |   }
  103 | 
  104 |   async validateApproveSuccess() {
  105 |     await this.page.waitForTimeout(3000);
  106 |     const expectedMessage = `Transaction ${this.clickedTxnNo} Approved`;
  107 |     const successMessage = this.page.getByText(expectedMessage, { exact: false });
  108 |     await expect(successMessage).toBeVisible();
  109 |     await this.page.waitForTimeout(3000);
  110 |   }
  111 | 
  112 | 
  113 | }
```