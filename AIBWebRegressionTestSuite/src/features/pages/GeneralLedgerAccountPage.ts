import { Page, Locator, expect } from '@playwright/test';

export class GeneralLedgerAccountPage {
    readonly page: Page;

    readonly setupMenu: Locator;
    readonly glAccountTab: Locator;
    readonly addGLAccount: Locator;
    readonly section: Locator;
    readonly coa: Locator;
    readonly budget: Locator;
    readonly create: Locator;

    constructor(page: Page) {
        this.page = page;

        this.setupMenu = page.getByRole('button', { name: 'Setup' });
        this.glAccountTab = page.getByRole('menuitem', { name: 'General Ledger Account' });
        this.addGLAccount = page.getByRole('button', { name: 'Add New GL Account' });
        this.section = page.getByLabel('Section *');
        this.coa = page.getByLabel('Chart of Account *');
        this.budget = page.getByRole('spinbutton', { name: 'Budget' });
        this.create = page.getByRole('button', { name: 'Create' });
    }

    async addGeneralLedgerAccount(section: string, coa: string, budget: string) {
        await this.setupMenu.click();
        await this.glAccountTab.click();
        await this.page.waitForTimeout(3000);

        await this.addGLAccount.click();
        await this.page.waitForTimeout(3000);

        await this.section.click();
        await this.section.selectOption({ label: section });
        await this.page.waitForTimeout(3000);

        await this.coa.click();
        await this.coa.selectOption({ label: coa });
        await this.page.waitForTimeout(3000);

        await this.budget.fill(budget);
        await this.page.waitForTimeout(3000);

        await this.create.click();

    }

}