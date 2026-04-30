import { Page, Locator, expect } from '@playwright/test';

export class PawningItemsAssessedPage {
    readonly page: Page;

    readonly setupMenu: Locator;
    readonly pawningItemsAssessedTab: Locator;
    readonly createValue: Locator;
    readonly carat: Locator;
    readonly marketValue: Locator;
    readonly gramValue: Locator;
    readonly create: Locator;

    constructor(page: Page) {
        this.page = page;

        this.setupMenu = page.getByRole('button', { name: 'Setup' });
        this.pawningItemsAssessedTab = page.getByRole('menuitem', { name: 'Pawning Items Setup' });
        this.createValue = page.getByRole('button', { name: 'Create' });
        this.carat = page.getByRole('textbox', { name: 'Name (English)' });
        this.marketValue = page.getByRole('textbox', { name: 'Name (Sinhala)' });
        this.gramValue = page.getByRole('textbox', { name: 'Name (Tamil)' });
        this.create = page.getByRole('button', { name: 'Create' });
    }

    async addPawningItemsAssessedValue(carat: string, marketValue: string, gramValue: string) {
        await this.setupMenu.click();
        await this.pawningItemsAssessedTab.click();
        await this.page.waitForTimeout(3000);

        await this.createValue.click();
        await this.page.waitForTimeout(3000);

        await this.carat.fill(carat);
        await this.page.waitForTimeout(3000);
        
        await this.marketValue.fill(marketValue);
        await this.page.waitForTimeout(3000);
        
        await this.gramValue.fill(gramValue);
        await this.page.waitForTimeout(3000);

        await this.create.click();

    }

}