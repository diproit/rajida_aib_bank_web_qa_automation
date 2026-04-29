import { Page, Locator, expect } from '@playwright/test';

export class ChartOfAccountPage {
    readonly page: Page;

    readonly setupMenu: Locator;
    readonly coaTab: Locator;
    readonly addCoa: Locator;
    readonly typeGroup: Locator;
    readonly coaType: Locator;
    readonly nameEng: Locator;
    readonly save: Locator;
    readonly coaAddSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // COA Locators
        this.setupMenu = page.getByRole('button', { name: 'Setup' });
        this.coaTab = page.getByRole('menuitem', { name: 'Chart of Account' });
        this.addCoa = page.getByRole('button', { name: 'Add Chart of Account' });
        this.typeGroup = page.getByLabel('Type Group *');
        this.coaType = page.getByLabel('Chart of Account Type *');
        this.nameEng = page.getByRole('textbox', { name: 'Name (English) *' });
        this.save = page.getByRole('button', { name: 'Save' });
        this.coaAddSuccessMessage = page.getByText('Chart of Account created');
    }

    // COA method
    async addChartOfAccount(typeGroup: string, coaType: string, nameEng: string) {
        await this.setupMenu.click();
        await this.coaTab.click();
        await this.page.waitForTimeout(3000);

        await this.addCoa.click();
        await this.page.waitForTimeout(3000);

        await this.typeGroup.click();
        await this.typeGroup.selectOption({ label: typeGroup });
        await this.page.waitForTimeout(3000);

        await this.coaType.click();
        await this.coaType.selectOption({ label: coaType });
        await this.page.waitForTimeout(3000);

        await this.nameEng.fill(nameEng);
        await this.page.waitForTimeout(3000);

        await this.save.click();

    }

    async validateCOASuccess() {
        await this.page.waitForTimeout(3000);
        await expect(this.coaAddSuccessMessage).toBeVisible();
        await this.page.waitForTimeout(3000);
    }

}