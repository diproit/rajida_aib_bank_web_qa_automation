# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC01 - Cashier Sign Off
- Location: src\tests\signOff.spec.ts:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('signed in').nth(1)
    - waiting for" https://qaaibweb.aibanker.cloud/login" navigation to finish...
    - navigated to "https://qaaibweb.aibanker.cloud/login"

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class SignOffPage {
  4  |   readonly page: Page;
  5  |   readonly signedInButton: Locator;
  6  |   readonly signedOffButton: Locator;
  7  |   readonly successMessage: Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     this.page = page;
  11 |     this.signedInButton = page.getByText('signed in').nth(1);
  12 |     this.signedOffButton = page.getByRole('button', { name: 'Sign Off' });
  13 |     this.successMessage = page.getByText('Cashier signed off successfully');
  14 |  }
  15 | 
  16 |   
  17 |   async cashierSignOff() {
> 18 |     await this.signedInButton.click();
     |                               ^ Error: locator.click: Target page, context or browser has been closed
  19 |     await this.page.waitForTimeout(3000);
  20 |     await this.signedOffButton.click();
  21 |   }
  22 | 
  23 |   async validateSigninSuccess() {
  24 |     await this.page.waitForTimeout(3000);
  25 |     await expect(this.successMessage).toBeVisible();
  26 |   }
  27 | }
```