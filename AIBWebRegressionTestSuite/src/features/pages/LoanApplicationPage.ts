import { Page, Locator, expect } from '@playwright/test';

export class LoanApplicationPage {
  readonly page: Page;

  // LoanApplication Locators
  readonly loansMenu: Locator;
  readonly loanApplicationTab: Locator;
  readonly loanCustomerNumber: Locator;
  readonly next: Locator;
  readonly loanProduct: Locator;
  readonly amount: Locator;
  readonly update: Locator;
  readonly loanApplicationSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // LoanApplication Locators
    this.loansMenu = page.getByRole('button', { name: 'Loans' });
    this.loanApplicationTab = page.getByRole('menuitem', { name: 'Loan Application', exact: true });
    this.loanCustomerNumber = page.getByRole('textbox', { name: 'Customer Number' });
    this.next = page.getByRole('button', { name: 'Next' });
    this.loanProduct = page.getByPlaceholder('Select Loan Product');
    this.amount = page.getByRole('textbox', { name: 'Request Amount' });
    this.update = page.getByRole('button', { name: 'Save' });
    this.loanApplicationSuccessMessage = page.getByText('Loan application created');
  }

  // LoanApplication method
  async loanApplication(loanCustomerNumber: string, loanProduct: string, amount: string) {
    await this.loansMenu.click();
    await this.loanApplicationTab.click();
    await this.loanCustomerNumber.fill(loanCustomerNumber);
    await this.next.click();
    await this.page.waitForTimeout(3000);
    // Click to open dropdown
    await this.loanProduct.click();
    await this.page.waitForTimeout(3000);
    // Wait for the loan product dropdown options to load
    await this.loanProduct.selectOption({ label: loanProduct });
    await this.amount.fill(amount);
    await this.page.waitForTimeout(3000);
    await this.update.click();
    await this.page.waitForTimeout(3000);
  }

  async validateLoanApplicationSuccess() {
    await this.page.waitForTimeout(3000);
    await expect(this.loanApplicationSuccessMessage).toBeVisible();
    await this.page.waitForTimeout(3000);
  }

}