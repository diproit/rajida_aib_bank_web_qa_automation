import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly dashboard: Locator;
  readonly signedOff: Locator;
  readonly cashBook: Locator;
  readonly cashBookOption: Locator;
  readonly openingCashAmount: Locator;
  readonly signIn: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Enter your username' });
    this.password = page.getByRole('textbox', { name: 'Enter your password' });
    this.loginBtn = page.getByRole('button', { name: 'Sign In' });
    this.dashboard = page.getByText('Welcome to the Dashboard');

    this.signedOff = page.getByText('signed off').nth(1);
    this.cashBook = page.getByRole('combobox', { name: 'Cash Book' })
    this.cashBookOption = page.locator('span').filter({ hasText: 'Cash Book' }).nth(4);
    this.openingCashAmount = page.getByRole('textbox', { name: 'Opening Cash Book' });
    this.signIn = page.getByRole('button', { name: 'Sign In' });
    this.successMessage = page.getByText('Cashier Signed In Successfully');
  }

  async loadpage() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.page.waitForTimeout(2000);
    await this.loginBtn.click();
  }

  async validateLoginSuccess() {
    await this.page.waitForTimeout(2000);
    await expect(this.dashboard).toBeVisible();
  }
 
  async cashierSignIn(cashBook: string, openingCashAmount: string) {
    await this.signedOff.click();
    await this.cashBook.click();
    await this.cashBookOption.click();
    await this.openingCashAmount.fill(openingCashAmount);
    await this.page.waitForTimeout(2000);
    await this.signIn.click();
  }

  async validateSigninSuccess() {
    await this.page.waitForTimeout(2000);
    await expect(this.successMessage).toBeVisible();
  }
}