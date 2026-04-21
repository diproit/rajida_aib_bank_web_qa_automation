import { Page, Locator, expect } from '@playwright/test';

export class SavingProductPage {
    readonly page: Page;

    // Saving Product Locators
    readonly setupMenu: Locator;
    readonly savingProductTab: Locator;
    readonly addNewProduct: Locator;
    readonly productNameEng: Locator;
    readonly operatingType: Locator;
    readonly interestPolicy: Locator;
    readonly interestUpdatePolicy: Locator;
    readonly interestRateMin: Locator;
    readonly interestRateMax: Locator;
    readonly periodMin: Locator;
    readonly periodMax: Locator;
    readonly minimumBalance: Locator;
    readonly pbType: Locator;
    readonly decimalNumber: Locator;
    readonly glAccount: Locator;
    readonly interestAccount: Locator;
    readonly reservationAccount: Locator;
    readonly taxAccount: Locator;
    readonly next: Locator;
    readonly save: Locator;

    constructor(page: Page) {
        this.page = page;

        // Saving Product Locators
        this.setupMenu = page.getByRole('button', { name: 'Setup' });
        this.savingProductTab = page.getByRole('menuitem', { name: 'Saving Product' });
        this.addNewProduct = page.getByRole('button', { name: 'Add New Product' });
        this.productNameEng = page.getByRole('textbox', { name: 'Product Name (English) *' });
        this.operatingType = page.getByLabel('Operating Type');
        this.interestPolicy = page.getByLabel('Interest Policy');
        this.interestUpdatePolicy = page.getByLabel('Interest Update Policy');
        this.interestRateMin = page.getByRole('spinbutton', { name: 'Interest Rate Min' });
        this.interestRateMax = page.getByRole('spinbutton', { name: 'Interest Rate Max' });
        this.periodMin = page.getByRole('spinbutton', { name: 'Period Min' });
        this.periodMax = page.getByRole('spinbutton', { name: 'Period Max' });
        this.minimumBalance = page.getByRole('spinbutton', { name: 'Minimum Balance' });
        this.pbType = page.getByLabel('PB Type');
        this.decimalNumber = page.getByRole('spinbutton', { name: 'Decimal Number' });
        this.glAccount = page.getByLabel('GL Account');
        this.interestAccount = page.getByLabel('Interest Account');
        this.reservationAccount = page.getByLabel('Reservation Account');
        this.taxAccount = page.getByLabel('Tax Account');
        this.next = page.getByRole('button', { name: 'Next' });
        this.save = page.getByRole('button', { name: 'Save' });
    }

    // Saving Product method
    async addSavingProduct(productNameEng: string, autoNumberCreation: string, operatingType: string, interestPolicy: string, interestUpdatePolicy: string, interestRateMin: string, interestRateMax: string, periodMin: string, periodMax: string, minimumBalance: string, pbType: string, decimalNumber: string, glAccount: string, interestAccount: string, reservationAccount: string, taxAccount: string) {
        await this.setupMenu.click();
        await this.savingProductTab.click();
        await this.page.waitForTimeout(2000);

        await this.addNewProduct.click();
        await this.page.waitForTimeout(2000);

        await this.productNameEng.fill(productNameEng);
        await this.page.waitForTimeout(2000);

        const autoNumberCreationSelection = this.page.locator('label').filter({ hasText: autoNumberCreation });
        await autoNumberCreationSelection.click();

        await this.operatingType.click();
        await this.operatingType.selectOption({ label: operatingType });
        await this.page.waitForTimeout(2000);

        await this.interestPolicy.click();
        await this.interestPolicy.selectOption({ label: interestPolicy });
        await this.page.waitForTimeout(2000);

        await this.interestUpdatePolicy.click();
        await this.interestUpdatePolicy.selectOption({ label: interestUpdatePolicy });
        await this.page.waitForTimeout(2000);

        await this.interestRateMin.fill(interestRateMin);
        await this.page.waitForTimeout(2000);

        await this.interestRateMax.fill(interestRateMax);
        await this.page.waitForTimeout(2000);

        await this.periodMin.fill(periodMin);
        await this.page.waitForTimeout(2000);

        await this.periodMax.fill(periodMax);
        await this.page.waitForTimeout(2000);

        await this.minimumBalance.fill(minimumBalance);
        await this.page.waitForTimeout(2000);

        await this.pbType.click();
        await this.pbType.selectOption({ label: pbType });
        await this.page.waitForTimeout(2000);

        await this.decimalNumber.fill(decimalNumber);
        await this.page.waitForTimeout(2000);

        await this.glAccount.click();
        await this.glAccount.selectOption({ label: glAccount });
        await this.page.waitForTimeout(2000);

        await this.interestAccount.click();
        await this.interestAccount.selectOption({ label: interestAccount });
        await this.page.waitForTimeout(2000);

        await this.reservationAccount.click();
        await this.reservationAccount.selectOption({ label: reservationAccount });
        await this.page.waitForTimeout(2000);

        await this.taxAccount.click();
        await this.taxAccount.selectOption({ label: taxAccount });
        await this.page.waitForTimeout(2000);

        await this.next.click();
        await this.page.waitForTimeout(2000);

        await this.next.click();
        await this.page.waitForTimeout(2000);

        await this.save.click();
        await this.page.waitForTimeout(2000);

    }

}