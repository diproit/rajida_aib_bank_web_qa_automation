# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC03 - Payment Transaction
- Location: src\tests\payment.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'All Sections' })

```

# Test source

```ts
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
  17  | 
  18  |   readonly logoutButton: Locator;
  19  | 
  20  |   // Approval Locators
  21  |   readonly approvalTab: Locator;
  22  |   readonly allSection: Locator;
  23  |   readonly paymentSection: Locator;
  24  |   readonly approveButton: Locator;
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
  39  | 
  40  |     this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
  41  | 
  42  |     // Approval Loactors
  43  |     this.approvalTab = page.getByRole('menuitem', { name: 'Payment', exact: true });
  44  |     this.allSection = page.getByRole('button', { name: 'All Sections' });
  45  |     this.paymentSection = this.page.getByRole('menuitem', { name: 'Payment' });
  46  |     this.approveButton = page.getByRole('button', { name: 'Approve' });
  47  | 
  48  |   }
  49  | 
  50  | 
  51  | 
  52  |   //Click the current  user
  53  |   currentUserLocator(currentUser: string): Locator {
  54  |     return this.page.getByText(currentUser);
  55  |   }
  56  | 
  57  | 
  58  |   // Method to get dynamic accountNameFill locator
  59  |   getAccountNameLocator(accountName: string): Locator {
  60  |     return this.page.getByText(accountName);
  61  |   }
  62  | 
  63  |   // Method to get dynamic addToList locator
  64  |   getAddToListLocator(accountName: string, payTo: string, description: string): Locator {
  65  |     return this.page.getByRole('row', { name: `${accountName} ${payTo} ${description}` }).locator('button');
  66  |   }
  67  | 
  68  |   // Payment method
  69  |   async payment(branchId: string, section: string, accountName: string, payTo: string, description: string, amount: string) {
  70  |     await this.transactionsMenu.click();
  71  |     await this.paymentTab.click();
  72  |     await this.branch.click();
  73  |     await this.branch.selectOption(branchId);
  74  |     await this.section.click();
  75  |     await this.section.selectOption({ label: section });
  76  |     await this.page.waitForTimeout(3000);
  77  |     await this.accountName.fill(accountName);
  78  |     const accountNameLocator = this.getAccountNameLocator(accountName);
  79  |     await accountNameLocator.click();
  80  |     await this.payTo.fill(payTo);
  81  |     await this.description.fill(description);
  82  |     await this.amount.fill(amount);
  83  |     await this.page.waitForTimeout(3000);
  84  |     const addToListLocator = this.getAddToListLocator(accountName, payTo, description);
  85  |     await addToListLocator.click();
  86  |     await this.page.waitForTimeout(3000);
  87  |     await this.sendToApproval.click();
  88  |     await this.page.waitForTimeout(3000);
  89  |   }
  90  | 
  91  |   async logoutFromCurrentUser(currentUser: string) {
  92  |     const currentUserLocator = this.currentUserLocator(currentUser);
  93  |     await currentUserLocator.click();
  94  |     await this.page.waitForTimeout(3000);
  95  | 
  96  |     await this.logoutButton.click();
  97  |     await this.page.waitForTimeout(3000);
  98  |   }
  99  | 
  100 |   async approvePayment(user: string) {
  101 |     await this.transactionsMenu.click();
  102 |     await this.approvalTab.click();
> 103 |     await this.allSection.click();
      |                           ^ Error: locator.click: Target page, context or browser has been closed
  104 |     await this.paymentSection.click();
  105 |     const clickPayment = this.page.getByText(user).first();
  106 |     await clickPayment.click();
  107 |     await this.page.waitForTimeout(3000);
  108 |     await this.approveButton.click();
  109 |   }
  110 | 
  111 | }
```