import { Page, Locator, expect } from '@playwright/test';

export class SignOffPage {
  readonly page: Page;
  readonly signedInButton: Locator;
  readonly signedOffButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signedInButton = page.getByText('signed in').nth(1);
    this.signedOffButton = page.getByRole('button', { name: 'Sign Off' });
    this.successMessage = page.getByText('Cashier signed off successfully');
 }

  
  async cashierSignOff() {
    await this.signedInButton.click();
    await this.page.waitForTimeout(3000);
    await this.signedOffButton.click();
  }

  async validateSigninSuccess() {
    await this.page.waitForTimeout(3000);
    await expect(this.successMessage).toBeVisible();
  }
}