import { Page, Locator, expect } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  private clickedTxnNo: string = '';

  // Payment Locators
  readonly transactionsMenu: Locator;
  readonly paymentTab: Locator;
  readonly branch: Locator;
  readonly section: Locator;
  readonly accountName: Locator;
  readonly payTo: Locator;
  readonly description: Locator;
  readonly amount: Locator;
  readonly sendToApproval: Locator;

  readonly logoutButton: Locator;

  // Approval Locators
  readonly approvalTab: Locator;
  readonly allSection: Locator;
  readonly paymentSection: Locator;
  readonly approveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Payment Locators
    this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
    this.paymentTab = page.getByRole('menuitem', { name: 'Payment', exact: true });
    this.branch = page.getByLabel('Branch');
    this.section = page.getByLabel('Section');
    this.accountName = page.getByRole('textbox', { name: 'Type account name...' });
    this.payTo = page.getByRole('textbox', { name: 'Payee Name' });
    this.description = page.getByRole('textbox', { name: 'Description' });
    this.amount = page.getByPlaceholder('0.00');
    this.sendToApproval = page.getByRole('button', { name: 'Send to Approval' });

    this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });

    // Approval Loactors
    this.approvalTab = page.getByRole('menuitem', { name: 'Approvals' });
    this.allSection = page.getByRole('button', { name: 'All Sections' });
    this.paymentSection = this.page.getByRole('menuitem', { name: 'Payment' });
    this.approveButton = page.getByRole('button', { name: 'Approve' });

  }



  //Click the current  user
  currentUserLocator(currentUser: string): Locator {
    return this.page.getByText(currentUser);
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
  async payment(branchId: string, section: string, accountName: string, payTo: string, description: string, amount: string) {
    await this.transactionsMenu.click();
    await this.paymentTab.click();
    await this.branch.click();
    await this.branch.selectOption(branchId);
    await this.section.click();
    await this.section.selectOption({ label: section });
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

  async logoutFromCurrentUser(currentUser: string) {
    const currentUserLocator = this.currentUserLocator(currentUser);
    await currentUserLocator.click();
    await this.page.waitForTimeout(3000);

    await this.logoutButton.click();
    await this.page.waitForTimeout(3000);
  }

  async approvePayment(user: string) {
    await this.transactionsMenu.click();
    await this.approvalTab.click();
    await this.page.waitForTimeout(3000);

    await this.allSection.click();
    await this.page.waitForTimeout(3000);

    await this.paymentSection.click();
    await this.page.waitForTimeout(3000);

    const clickPayment = this.page.getByText(user).first();
    await clickPayment.click();
    await this.page.waitForTimeout(3000);
    await this.approveButton.click();
    await this.page.waitForTimeout(3000);

  }

  async logoutFromCurrentUser2(currentUser2: string) {
    const currentUserLocator = this.currentUserLocator(currentUser2);
    await currentUserLocator.click();
    await this.page.waitForTimeout(3000);

    await this.logoutButton.click();
    await this.page.waitForTimeout(3000);
  }


}