// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',
  timeout: 0,
  workers: 1,

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
    video: 'on',
    trace: 'on-first-retry',

    launchOptions: {
      args: ['--start-maximized'],
    },

    viewport: null, // ✅ maximize
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*login\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: null,
        deviceScaleFactor: undefined, // ✅ FIX
      },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storageState.json',
        viewport: null,
        deviceScaleFactor: undefined, // ✅ FIX
      },
      dependencies: ['setup'],
    },
  ],
});