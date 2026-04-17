import { Page, Locator, expect } from '@playwright/test';

export class JournalPage {
  readonly page: Page;
  private clickedTxnNo: string = '';

  // Journal Locators
  readonly transactionsMenu: Locator;
  readonly journalTab: Locator;
  readonly branch: Locator;
  readonly section: Locator;
  readonly accountName1: Locator;
  readonly description1: Locator;
  readonly credit: Locator;
  readonly accountName2: Locator;
  readonly description2: Locator;
  readonly debit: Locator;
  readonly sendToApproval: Locator;
  readonly journalSuccessMessage: Locator;

  // Approval Locators
  readonly approvalTab: Locator;
  readonly allSections: Locator;
  readonly journalTxn: Locator;
  readonly approveBtn: Locator;
  readonly approveSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Journal Locators
    this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
    this.journalTab = page.getByRole('menuitem', { name: 'Journal', exact: true });
    this.branch = page.getByLabel('Branch');
    this.section = page.getByLabel('Section');
    this.accountName1 = page.getByRole('textbox', { name: 'Type account name...' });
    this.description1 = page.getByRole('textbox', { name: 'Description' });
    this.credit = page.getByPlaceholder('0.00').first();
    this.accountName2 = page.getByRole('textbox', { name: 'Type account name...' });
    this.description2 = page.getByRole('textbox', { name: 'Description' });
    this.debit = page.getByPlaceholder('0.00').nth(1);
    this.sendToApproval = page.getByRole('button', { name: 'Send to Approve' });
    this.journalSuccessMessage = page.getByText('Journal transaction processed');

    // Approval Locators
    this.approvalTab = page.getByRole('menuitem', { name: 'Approvals' });
    this.allSections = page.getByRole('button', { name: 'All Sections' });
    this.journalTxn = page.getByRole('menuitem', { name: 'Journals' });
    this.approveBtn = page.getByRole('button', { name: 'Approve' });
    this.approveSuccessMessage = page.getByText('Transaction Approved', { exact: false });
  }

  // Method to get dynamic accountNameFill locator
  getAccountName1Locator(accountName1: string): Locator {
    return this.page.getByText(accountName1);
  }

  getAccountName2Locator(accountName2: string): Locator {
    return this.page.getByText(accountName2);
  }

  // Method to get dynamic addToList locator
  getAddToList1Locator(accountName1: string, description1: string): Locator {
    return this.page.getByRole('row', { name: `${accountName1} ${description1} ` }).locator('button');
  }

  getAddToList2Locator(accountName2: string, description2: string): Locator {
    return this.page.getByRole('row', { name: `${accountName2} ${description2} ` }).locator('button');
  }

  // Journal method
  async journal(branch: string, section: string, accountName1: string, description1: string, credit: string, accountName2: string, description2: string, debit: string) {
    await this.transactionsMenu.click();
    await this.journalTab.click();
    await this.branch.click();
    await this.branch.selectOption({ label: branch });
    await this.section.click();
    await this.section.selectOption({ label: section });
    await this.page.waitForTimeout(3000);
    await this.accountName1.fill(accountName1);
    const accountName1Locator = this.getAccountName1Locator(accountName1);
    await accountName1Locator.click();
    await this.description1.fill(description1);
    await this.credit.fill(credit);
    await this.page.waitForTimeout(3000);
    const addToList1Locator = this.getAddToList1Locator(accountName1, description1);
    await addToList1Locator.click();
    await this.page.waitForTimeout(3000);
     await this.accountName2.fill(accountName2);
    const accountName2Locator = this.getAccountName1Locator(accountName2);
    await accountName2Locator.click();
    await this.description2.fill(description2);
    await this.debit.fill(debit);
    await this.page.waitForTimeout(3000);
    const addToList2Locator = this.getAddToList2Locator(accountName2, description2);
    await addToList2Locator.click();
    await this.page.waitForTimeout(3000);
    await this.sendToApproval.click();
    await this.page.waitForTimeout(3000);
  }

  async validateJournalSuccess() {
    await this.page.waitForTimeout(3000);
    await expect(this.journalSuccessMessage).toBeVisible();
    await this.page.waitForTimeout(3000);
  }

  // Approve journal method
  async approveJournal() {
    await this.transactionsMenu.click();
    await this.approvalTab.click();
    await this.page.waitForTimeout(3000);
    await this.allSections.click();
    await this.journalTxn.click();
    await this.page.waitForTimeout(3000);
    // Find and click the first journal row with the matching description and user
    const journalRow = this.page.getByRole('row').filter({ hasText: 'Journal Entry' }).first();
    this.clickedTxnNo = await journalRow.getByText(/-T\d+/).textContent() || '';
    await journalRow.click();
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