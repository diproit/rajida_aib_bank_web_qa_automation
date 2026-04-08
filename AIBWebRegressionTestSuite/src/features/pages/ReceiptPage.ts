import { Page, Locator, expect } from '@playwright/test';

export class ReceiptPage {
  readonly page: Page;

  // Receipt Locators
  readonly transactionsMenu: Locator;
  readonly receiptTab: Locator;
  readonly customerNumber: Locator;
  readonly next: Locator;
  readonly update: Locator;
  readonly receiptSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Receipt Locators
    this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
    this.receiptTab = page.getByRole('menuitem', { name: 'Receipt', exact: true });
    this.customerNumber = page.getByRole('textbox', { name: 'Customer Number' });
    this.next = page.getByRole('button', { name: 'Next' });
    this.update = page.getByRole('button', { name: 'Update' });
    this.receiptSuccessMessage = page.getByText('Transaction processed successfully.');

  }

  // Method to get dynamic amount locator based on account number
  getAmountLocator(accountNumber: string): Locator {
    return this.page.getByRole('row', { name: `${accountNumber} Savings Saving Deposit` }).getByPlaceholder('0.00');
  }

  // Receipt method
  async receipt(customerNumber: string, accountNumber: string, amount: string) {
    await this.transactionsMenu.click();
    await this.receiptTab.click();
    await this.page.waitForTimeout(3000);
    await this.customerNumber.click();
    await this.customerNumber.fill(customerNumber);
    await this.next.click();
    await this.page.waitForTimeout(3000);
    const amountLocator = this.getAmountLocator(accountNumber);
    await amountLocator.fill(amount);
    await this.update.click();
    await this.page.waitForTimeout(3000);
    await this.update.click();
    await this.page.waitForTimeout(3000);
  }

  async validateReceiptSuccess() {
    await this.page.waitForTimeout(3000);
    await expect(this.receiptSuccessMessage).toBeVisible();
    await this.page.waitForTimeout(3000);
  }


}