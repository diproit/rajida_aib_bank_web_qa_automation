import { Page, Locator, expect } from '@playwright/test';

export class PawningItemTypesPage {
    readonly page: Page;

    readonly setupMenu: Locator;
    readonly pawningItemsSetupTab: Locator;
    readonly createItem: Locator;
    readonly nameEng: Locator;
    readonly nameSin: Locator;
    readonly nameTam: Locator;
    readonly create: Locator;

    constructor(page: Page) {
        this.page = page;

        this.setupMenu = page.getByRole('button', { name: 'Setup' });
        this.pawningItemsSetupTab = page.getByRole('menuitem', { name: 'Pawning Items Setup' });
        this.createItem = page.getByRole('button', { name: 'Create' });
        this.nameEng = page.getByRole('textbox', { name: 'Name (English)' });
        this.nameSin = page.getByRole('textbox', { name: 'Name (Sinhala)' });
        this.nameTam = page.getByRole('textbox', { name: 'Name (Tamil)' });
        this.create = page.getByRole('button', { name: 'Create' });
    }

    async addPawningItem(nameEng: string, nameSin: string, nameTam: string) {
        await this.setupMenu.click();
        await this.pawningItemsSetupTab.click();
        await this.page.waitForTimeout(3000);

        await this.createItem.click();
        await this.page.waitForTimeout(3000);

        await this.nameEng.fill(nameEng);
        await this.page.waitForTimeout(3000);
        
        await this.nameSin.fill(nameSin);
        await this.page.waitForTimeout(3000);
        
        await this.nameTam.fill(nameTam);
        await this.page.waitForTimeout(3000);

        await this.create.click();

    }

}