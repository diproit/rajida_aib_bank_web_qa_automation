import { Page, Locator, expect } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  private clickedTxnNo: string = '';

  // Payment Locators
  readonly transactionsMenu: Locator;
  readonly paymentTab: Locator;
  readonly section: Locator;
  readonly accountName: Locator;
  readonly payTo: Locator;
  readonly description: Locator;
  readonly amount: Locator;
  readonly sendToApproval: Locator;
  readonly paymentSuccessMessage: Locator;

  // Approval Locators
  readonly approvalTab: Locator;
  readonly allSections: Locator;
  readonly paymentTxn: Locator;
  readonly approveBtn: Locator;
  readonly approveSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Payment Locators
    this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
    this.paymentTab = page.getByRole('menuitem', { name: 'Payment', exact: true });
    this.section = page.getByLabel('Section');
    this.accountName = page.getByRole('textbox', { name: 'Type account name...' });
    this.payTo = page.getByRole('textbox', { name: 'Payee Name' });
    this.description = page.getByRole('textbox', { name: 'Description' });
    this.amount = page.getByPlaceholder('0.00');
    this.sendToApproval = page.getByRole('button', { name: 'Send to Approval' });
    this.paymentSuccessMessage = page.getByText('Transactions saved with No');

    // Approval Locators
    this.approvalTab = page.getByRole('menuitem', { name: 'Approvals' });
    this.allSections = page.getByRole('button', { name: 'All Sections' });
    this.paymentTxn = page.getByRole('menuitem', { name: 'Payment' });
    this.approveBtn = page.getByRole('button', { name: 'Approve' });
    this.approveSuccessMessage = page.getByText('Transaction Approved', { exact: false });
  }

  // Method to get dynamic accountNameFill locator
  getAccountNameLocator(accountName: string): Locator {
    return this.page.getByText(accountName);
  }

  // Method to get dynamic addToList locator
  getAddToListLocator(accountName: string, payTo: string, description: string): Locator {
    return this.page.getByRole('row', { name: `${accountName} ${payTo} ${description}` }).locator('button');
  }

  // Payment method
  async payment(accountName: string, payTo: string, description: string, amount: string) {
    await this.transactionsMenu.click();
    await this.paymentTab.click();
    await this.section.selectOption('1');
    await this.page.waitForTimeout(3000);
    await this.accountName.fill(accountName);
    const accountNameLocator = this.getAccountNameLocator(accountName);
    await accountNameLocator.click();
    await this.payTo.fill(payTo);
    await this.description.fill(description);
    await this.amount.fill(amount);
    await this.page.waitForTimeout(3000);
    const addToListLocator = this.getAddToListLocator(accountName, payTo, description);
    await addToListLocator.click();
    await this.page.waitForTimeout(3000);
    await this.sendToApproval.click();
    await this.page.waitForTimeout(3000);
  }

  async validatePaymentSuccess() {
    await this.page.waitForTimeout(3000);
    await expect(this.paymentSuccessMessage).toBeVisible();
    await this.page.waitForTimeout(3000);
  }

  // Approve payment method
  async approvePayment(description: string) {
    await this.transactionsMenu.click();
    await this.approvalTab.click();
    await this.page.waitForTimeout(3000);
    await this.allSections.click();
    await this.paymentTxn.click();
    await this.page.waitForTimeout(3000);
    // Find and click the first payment row with the matching description
    const paymentRow = this.page.getByRole('row').filter({ hasText: description }).first();
    this.clickedTxnNo = await paymentRow.getByText(/-T\d+/).textContent() || '';
    await paymentRow.click();
    await this.page.waitForTimeout(3000);
    await this.approveBtn.click();
  }

  async validateApproveSuccess() {
    await this.page.waitForTimeout(3000);
    const expectedMessage = `Transaction ${this.clickedTxnNo} Approved`;
    const successMessage = this.page.getByText(expectedMessage, { exact: false });
    await expect(successMessage).toBeVisible();
    await this.page.waitForTimeout(3000);
  }


}