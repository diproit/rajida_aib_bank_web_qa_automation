import { Page, Locator, expect } from '@playwright/test';

export class WithdrawalPage {
  readonly page: Page;
  private clickedTxnNo: string = '';

  // Withdrawal Locators
  readonly transactionsMenu: Locator;
  readonly withdrawalTab: Locator;
  readonly customerNumber: Locator;
  readonly next: Locator;
  readonly accountNumber: Locator;
  readonly amount: Locator;
  readonly update: Locator;
  readonly withdrawalSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Withdrawal Locators
    this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
    this.withdrawalTab = page.getByRole('menuitem', { name: 'Withdrawal', exact: true });
    this.customerNumber = page.getByRole('textbox', { name: 'Customer Number' });
    this.next = page.getByRole('button', { name: 'Next' });
    this.accountNumber = page.getByPlaceholder('Select Account');
    this.amount = page.getByRole('textbox', { name: 'Enter Amount' });
    this.update = page.getByRole('button', { name: 'Update' });
    this.withdrawalSuccessMessage = page.getByText('Transaction processed successfully.');

   
  }

  // Withdrawal method
  async withdrawal(customerNumber: string, accountNumberValue: string, amount: string) {
    await this.transactionsMenu.click();
    await this.withdrawalTab.click();
    await this.customerNumber.fill(customerNumber);
    await this.next.click();
    await this.page.waitForTimeout(2000);
    // Click to open dropdown
    await this.accountNumber.click();
    await this.page.waitForTimeout(1000);
    // Wait for the account dropdown options to load
    await this.accountNumber.selectOption(accountNumberValue);
    await this.amount.fill(amount);
    await this.update.click();
    await this.page.waitForTimeout(3000);
  }

  async validateWithdrawalSuccess() {
    await this.page.waitForTimeout(3000);
    await expect(this.withdrawalSuccessMessage).toBeVisible();
    await this.page.waitForTimeout(3000);
  }

  


}