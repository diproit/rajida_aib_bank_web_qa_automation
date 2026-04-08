import { test as base } from '@playwright/test';
import { LoginPage } from '../features/pages/LoginPage';

type BaseFixtures = {
  login: LoginPage;
};

export const test = base.extend<BaseFixtures>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});