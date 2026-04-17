// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',
  timeout: 0,
  workers: 1,
  // retries: 1,
  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        detail: true,
        outputFolder: 'allure-results',
        suiteTitle: true,
      },
    ],
  ],
  use: {
    baseURL: 'https://qaaibweb.aibanker.cloud/', 
    headless: false,
    slowMo: 5000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
  {
    name: 'setup',
    testMatch: /.*login\.spec\.ts/, // ✅ FIXED (regex, not string)
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'chromium',
    use: { 
      ...devices['Desktop Chrome'],
      storageState: 'storageState.json', // ✅ Step 2 applied here
    },
    dependencies: ['setup'], // ✅ ensures login runs first
  },
],
});