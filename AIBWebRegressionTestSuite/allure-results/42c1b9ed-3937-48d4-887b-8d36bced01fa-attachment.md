# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC07 - Loan Application Disburse
- Location: src\tests\loanApplicationList.spec.js:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('row').first().getByRole('button', { name: 'Do Appraisal' })

```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class LoanApplicationListPage {
  4   |     readonly page: Page;
  5   |     private clickedTxnNo: string = '';
  6   | 
  7   |     // Approval Locators
  8   |     readonly loansMenu: Locator;
  9   |     readonly loanApplicationListTab: Locator;
  10  |     readonly loanPeriod: Locator;
  11  |     readonly loanInterest: Locator;
  12  |     readonly writeComment: Locator;
  13  |     readonly addCommentButton: Locator;
  14  |     readonly guarantorType: Locator;
  15  |     readonly guarantorName: Locator;
  16  |     readonly sendToApprove: Locator;
  17  |     readonly yes: Locator;
  18  |     readonly next: Locator;
  19  |     readonly sendToDisburse: Locator;
  20  |     readonly disbursementAmount: Locator;
  21  | 
  22  |     constructor(page: Page) {
  23  |         this.page = page;
  24  | 
  25  |         // Approval Locators
  26  |         this.loansMenu = page.getByRole('button', { name: 'Loans' });
  27  |         this.loanApplicationListTab = page.getByRole('menuitem', { name: 'Loan Application List' });
  28  |         this.loanPeriod = page.getByRole('spinbutton', { name: 'Loan Period' });
  29  |         this.loanInterest = page.getByRole('spinbutton', { name: 'Interest Rate (%)' });
  30  |         this.next = page.getByRole('button', { name: 'Next' });
  31  |         this.writeComment = page.getByRole('textbox', { name: 'Add Comment' });
  32  |         this.addCommentButton = page.getByRole('button', { name: 'Add Comment' });
  33  |         this.guarantorType = page.getByLabel('Guarantor Type')
  34  |         this.guarantorName = page.getByRole('textbox', { name: 'Enter NIC or customer number' });
  35  |         this.sendToApprove = page.getByRole('button', { name: 'Send To Approve' });
  36  |         this.yes = page.getByRole('button', { name: 'Yes, Send' });
  37  |         this.sendToDisburse = page.getByRole('button', { name: 'Send To Disburse' });
  38  |         this.disbursementAmount = page.getByRole('spinbutton', { name: 'Disbursement Amount' });
  39  |     }
  40  | 
  41  |     // Method to get dynamic guarantorNameFill locator
  42  |     getGuarantorNameLocator(guarantorName: string): Locator {
  43  |         return this.page.getByText(guarantorName);
  44  |     }
  45  | 
  46  | 
  47  |     async loanDoAppraisal(customerNumber: string, loanPeriod: string, loanInterest: string, guarantorType: string, guarantorName: string, comment: string) {
  48  |         await this.loansMenu.click();
  49  |         await this.loanApplicationListTab.click();
  50  | 
  51  |         // Find and click the first payment row with the matching description
  52  |         const DoAppraisalButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
> 53  |         await DoAppraisalButtonLocator.getByRole('button', { name: 'Do Appraisal' }).click();        
      |                                                                                      ^ Error: locator.click: Target page, context or browser has been closed
  54  |         await this.page.waitForTimeout(3000);
  55  | 
  56  |         await this.loanPeriod.click();
  57  |         await this.loanPeriod.fill(loanPeriod);
  58  |         await this.loanInterest.click();
  59  |         await this.loanInterest.fill(loanInterest);
  60  |         await this.page.waitForTimeout(3000);
  61  |         await this.next.click();
  62  | 
  63  |         await this.guarantorType.click();
  64  |         await this.guarantorType.selectOption(guarantorType);
  65  |         await this.page.waitForTimeout(3000);
  66  | 
  67  |         await this.guarantorName.fill(guarantorName);
  68  |         const guarantorNameLocator = this.getGuarantorNameLocator(guarantorName);
  69  |         await guarantorNameLocator.click();
  70  |         await this.page.waitForTimeout(3000);
  71  |         await this.next.click();
  72  | 
  73  |         await this.next.click();
  74  | 
  75  |         await this.page.waitForTimeout(3000);
  76  | 
  77  |         await this.writeComment.fill(comment);
  78  |         await this.page.waitForTimeout(3000);
  79  |         await this.addCommentButton.click();
  80  |         await this.page.waitForTimeout(3000);
  81  |         await this.sendToApprove.click();
  82  |         await this.page.waitForTimeout(3000);
  83  |         await this.yes.click();
  84  |     }
  85  |     async loanDoApproval(customerNumber: string) {
  86  |         const DoApprovalButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
  87  |         await DoApprovalButtonLocator.locator('button').click();
  88  |         await this.page.waitForTimeout(3000);
  89  | 
  90  |         await this.next.click();
  91  |         await this.page.waitForTimeout(3000);
  92  | 
  93  |         await this.next.click();
  94  |         await this.page.waitForTimeout(3000);
  95  | 
  96  |         await this.next.click();
  97  |         await this.page.waitForTimeout(3000);
  98  | 
  99  |         await this.sendToDisburse.click();
  100 |         await this.page.waitForTimeout(3000);
  101 |         await this.yes.click();
  102 |         await this.page.waitForTimeout(3000);
  103 |     }
  104 | 
  105 |     async loanDoDisburse(customerNumber: string, disbursementAmount: string, disbursementType: string, disbursementMethod: string) {
  106 | 
  107 |         const DoDisburseButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
  108 |         await DoDisburseButtonLocator.locator('button').click();
  109 |         await this.page.waitForTimeout(3000);
  110 | 
  111 |         await this.disbursementAmount.click();
  112 |         await this.disbursementAmount.fill(disbursementAmount);
  113 | 
  114 |         const disbursementTypeLocator = this.page.locator('label').filter({ hasText: disbursementType });
  115 |         await disbursementTypeLocator.click();
  116 |         await this.page.waitForTimeout(3000);
  117 | 
  118 |         const disbursementMethodLocator = this.page.locator('label').filter({ hasText: disbursementMethod });
  119 |         await disbursementMethodLocator.click();
  120 |         await this.page.waitForTimeout(3000);
  121 |     }
  122 | 
  123 |     async validateLoanDisbursementSuccess() {
  124 |         await this.page.waitForTimeout(3000);
  125 |         const expectedMessage = `Transaction ${this.clickedTxnNo} Approved`;
  126 |         const successMessage = this.page.getByText(expectedMessage, { exact: false });
  127 |         await expect(successMessage).toBeVisible();
  128 |         await this.page.waitForTimeout(3000);
  129 |     }
  130 | 
  131 | 
  132 | }
```