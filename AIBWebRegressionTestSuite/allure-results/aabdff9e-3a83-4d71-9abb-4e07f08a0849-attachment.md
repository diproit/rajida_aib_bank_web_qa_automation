# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> TC00 - Login With Valid Credentials And Cashier Sign In
- Location: src\tests\login.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Welcome to the Dashboard')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Welcome to the Dashboard')

```

# Page snapshot

```yaml
- generic [ref=e8]:
  - generic [ref=e9]:
    - img "AIB Bank Logo" [ref=e11]
    - heading "Welcome Back" [level=2] [ref=e12]
    - paragraph [ref=e13]: Sign in to continue to your account
  - generic [ref=e15]:
    - textbox "Enter your username" [active] [ref=e17]
    - generic [ref=e18]:
      - textbox "Enter your password" [ref=e19]
      - button [ref=e20] [cursor=pointer]:
        - img [ref=e21]
    - button "Sign In" [ref=e26] [cursor=pointer]
  - paragraph [ref=e28]: © 2026 Rajida AIB Bank. All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly username: Locator;
  6  |   readonly password: Locator;
  7  |   readonly loginBtn: Locator;
  8  |   readonly dashboard: Locator;
  9  |   readonly signedOff: Locator;
  10 |   readonly cashBook: Locator;
  11 |   readonly cashBookOption: Locator;
  12 |   readonly openingCashAmount: Locator;
  13 |   readonly signIn: Locator;
  14 |   readonly successMessage: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     this.page = page;
  18 |     this.username = page.getByRole('textbox', { name: 'Enter your username' });
  19 |     this.password = page.getByRole('textbox', { name: 'Enter your password' });
  20 |     this.loginBtn = page.getByRole('button', { name: 'Sign In' });
  21 |     this.dashboard = page.getByText('Welcome to the Dashboard');
  22 | 
  23 |     this.signedOff = page.getByText('signed off').nth(1);
  24 |     this.cashBook = page.getByRole('combobox', { name: 'Cash Book' })
  25 |     this.cashBookOption = page.locator('span').filter({ hasText: 'Cash Book' }).nth(4);
  26 |     this.openingCashAmount = page.getByRole('textbox', { name: 'Opening Cash Book' });
  27 |     this.signIn = page.getByRole('button', { name: 'Sign In' });
  28 |     this.successMessage = page.getByText('Cashier Signed In Successfully');
  29 |   }
  30 | 
  31 |   async loadpage() {
  32 |     await this.page.goto('/');
  33 |   }
  34 | 
  35 |   async login(username: string, password: string) {
  36 |     await this.username.fill(username);
  37 |     await this.password.fill(password);
  38 |     await this.page.waitForTimeout(2000);
  39 |     await this.loginBtn.click();
  40 |   }
  41 | 
  42 |   async validateLoginSuccess() {
  43 |     await this.page.waitForTimeout(2000);
> 44 |     await expect(this.dashboard).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  45 |   }
  46 |  
  47 |   async cashierSignIn(cashBook: string, openingCashAmount: string) {
  48 |     await this.signedOff.click();
  49 |     await this.cashBook.click();
  50 |     await this.cashBookOption.click();
  51 |     await this.openingCashAmount.fill(openingCashAmount);
  52 |     await this.page.waitForTimeout(2000);
  53 |     await this.signIn.click();
  54 |   }
  55 | 
  56 |   async validateSigninSuccess() {
  57 |     await this.page.waitForTimeout(2000);
  58 |     await expect(this.successMessage).toBeVisible();
  59 |   }
  60 | }
```