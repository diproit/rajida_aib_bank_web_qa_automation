# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC01 - Cashier Sign Off
- Location: src\tests\signOff.spec.ts:4:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://qaaibweb.aibanker.cloud/", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '../fixtures/auth.fixture';
  2  | import { SignInPage } from '../features/pages/SignOffPage';
  3  | 
  4  | test('TC01 - Cashier Sign Off', async ({ page }) => {
  5  |   
  6  |   const signInPage = new SignInPage(page);
  7  | 
> 8  |   await page.goto('/');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  9  | 
  10 |   await signInPage.cashierSignOff();
  11 |   await signInPage.validateSigninSuccess();
  12 | });
```