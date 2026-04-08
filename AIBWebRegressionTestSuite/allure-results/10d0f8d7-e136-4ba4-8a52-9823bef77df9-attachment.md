# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC03 - Payment Transaction
- Location: src\tests\payment.spec.ts:5:5

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 50000ms exceeded.
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
    91 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - img "Logo" [ref=e9]
        - generic [ref=e10]: Colombo District TCCS Union Ltd. In Sri Lanka.
        - generic [ref=e12]:
          - generic [ref=e14]:
            - img [ref=e17]
            - generic [ref=e19]: Maharagama
          - generic [ref=e21]:
            - img [ref=e24]
            - generic [ref=e26]: Payment
      - generic [ref=e28]:
        - generic [ref=e30]:
          - img [ref=e33]
          - generic [ref=e35]: 08 Apr 2026
        - generic [ref=e37]:
          - img [ref=e40]
          - generic [ref=e43]: 11:25:46 AM
        - generic [ref=e44]: "|"
        - generic [ref=e46]:
          - img [ref=e49]
          - generic [ref=e52]: connected
        - combobox "Language" [ref=e53]:
          - option "English" [selected]
          - option "සිංහල"
          - option "தமிழ்"
          - option "Tagalog"
          - option "ไทย"
      - button "@NilkiHR" [ref=e56] [cursor=pointer]:
        - generic [ref=e59]:
          - img [ref=e62]
          - generic [ref=e64]: "@NilkiHR"
    - generic [ref=e67]:
      - link "Dashboard" [ref=e69] [cursor=pointer]:
        - /url: /
        - generic [ref=e70]: Dashboard
      - link "Members" [ref=e72] [cursor=pointer]:
        - /url: /members
        - generic [ref=e73]: Members
      - link "Ledgers" [ref=e75] [cursor=pointer]:
        - /url: /ledgers
        - generic [ref=e76]: Ledgers
      - button "Savings" [ref=e78] [cursor=pointer]:
        - generic [ref=e79]:
          - text: Savings
          - img [ref=e81]
      - button "Loans" [ref=e84] [cursor=pointer]:
        - generic [ref=e85]:
          - text: Loans
          - img [ref=e87]
      - button "Transactions" [ref=e90] [cursor=pointer]:
        - generic [ref=e91]:
          - text: Transactions
          - img [ref=e93]
      - button "View" [ref=e96] [cursor=pointer]:
        - generic [ref=e97]:
          - text: View
          - img [ref=e99]
      - button "Process" [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - text: Process
          - img [ref=e105]
      - button "Setup" [ref=e108] [cursor=pointer]:
        - generic [ref=e109]:
          - text: Setup
          - img [ref=e111]
      - link "Reports" [ref=e114] [cursor=pointer]:
        - /url: /reports
        - generic [ref=e115]: Reports
      - button "Help" [ref=e117] [cursor=pointer]:
        - generic [ref=e118]:
          - text: Help
          - img [ref=e120]
      - generic "Cashier Status" [ref=e122] [cursor=pointer]:
        - generic [ref=e123]:
          - img [ref=e124]
          - generic "Cash Book" [ref=e129]:
            - generic [ref=e131]: Cash Book
          - generic "signed in" [ref=e133]:
            - generic [ref=e135]: signed in
    - generic [ref=e137]:
      - generic [ref=e142]:
        - checkbox "Cheque" [ref=e143] [cursor=pointer]
        - generic [ref=e144]:
          - generic:
            - generic:
              - generic:
                - img
              - generic:
                - img
          - generic:
            - generic:
              - generic:
                - img
              - generic:
                - img
        - generic [ref=e148] [cursor=pointer]: Cheque
      - generic [ref=e151]:
        - generic [ref=e154]:
          - generic [ref=e156]:
            - strong [ref=e161]: Branch
            - generic [ref=e163]:
              - combobox "Branch" [ref=e164]:
                - option "Maharagama" [selected]
                - option "Hanwella"
                - option "Homagama"
                - option "Kaduwela"
                - option "Kesbewa"
                - option "Kolonnawa"
                - option "All"
              - generic:
                - generic:
                  - generic:
                    - img
          - generic [ref=e166]:
            - strong [ref=e171]: Section
            - generic [ref=e173]:
              - combobox "Section" [ref=e174]:
                - option "Select Section" [selected]
                - option "Bank"
              - generic:
                - generic:
                  - generic:
                    - img
        - table "Payment Details" [ref=e176]:
          - rowgroup [ref=e177]:
            - row "Payments" [ref=e178]:
              - columnheader "Payments" [ref=e179]:
                - generic [ref=e180]: Payments
            - row "Account No Account Name Pay To Description Amount Action" [ref=e181]:
              - columnheader "Account No" [ref=e182]:
                - generic [ref=e183]: Account No
              - columnheader "Account Name" [ref=e184]:
                - generic [ref=e185]: Account Name
              - columnheader "Pay To" [ref=e186]:
                - generic [ref=e187]: Pay To
              - columnheader "Description" [ref=e188]:
                - generic [ref=e189]: Description
              - columnheader "Amount" [ref=e190]:
                - generic [ref=e192]: Amount
              - columnheader "Action" [ref=e193]:
                - generic [ref=e195]: Action
          - rowgroup [ref=e196]:
            - row "-" [ref=e197]:
              - cell "-" [ref=e198]:
                - generic [ref=e201]: "-"
              - cell [ref=e202]:
                - textbox "Type account name..." [ref=e205]
              - cell [ref=e206]:
                - textbox "Payee Name" [ref=e207]
              - cell [ref=e208]:
                - textbox "Description" [ref=e209]
              - cell [ref=e210]:
                - spinbutton [ref=e212]
              - cell [ref=e213]:
                - button [ref=e215] [cursor=pointer]:
                  - generic [ref=e216]:
                    - generic:
                      - generic:
                        - generic:
                          - img
            - row "Total 0.00" [ref=e217]:
              - cell "Total" [ref=e218]:
                - generic [ref=e220]: Total
              - cell "0.00" [ref=e221]:
                - generic [ref=e223]: "0.00"
              - cell [ref=e224]
            - row "Send to Approval" [ref=e225]:
              - cell "Send to Approval" [ref=e226]:
                - button "Send to Approval" [ref=e229] [cursor=pointer]:
                  - generic [ref=e230]:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - img
                          - text: ⁠
                        - text: Send to Approval
      - table "Status and actions" [ref=e234]:
        - rowgroup [ref=e235]:
          - row "Payments History" [ref=e236]:
            - columnheader "Payments History" [ref=e237]:
              - generic [ref=e238]: Payments History
          - row "Voucher No Amount Status" [ref=e239]:
            - columnheader "Voucher No" [ref=e240]:
              - generic [ref=e241]: Voucher No
            - columnheader "Amount" [ref=e242]:
              - generic [ref=e243]: Amount
            - columnheader "Status" [ref=e244]:
              - generic [ref=e245]: Status
        - rowgroup [ref=e246]:
          - row "No transactions yet" [ref=e247]:
            - cell "No transactions yet" [ref=e248]:
              - generic [ref=e249]: No transactions yet
    - button [ref=e250] [cursor=pointer]:
      - img [ref=e251]
  - generic [ref=e254]: © 2026 AIB Bank Web • All rights reserved to Colombo District TCCS Union Ltd. In Sri Lanka.
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
      |                       ^ Error: locator.selectOption: Test timeout of 50000ms exceeded.
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