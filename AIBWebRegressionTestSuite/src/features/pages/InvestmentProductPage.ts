import { Page, Locator, expect } from '@playwright/test';

export class InvestmentProductPage {
    readonly page: Page;

    // Investment Product Locators
    readonly setupMenu: Locator;
    readonly investmentProductTab: Locator;
    readonly addNewProduct: Locator;
    readonly productNamePri: Locator;
        readonly accountCode: Locator;
    readonly operatingType: Locator;
    readonly interestPolicy: Locator;
    readonly interestUpdatePolicy: Locator;
    readonly interestRateMin: Locator;
    readonly interestRateMax: Locator;
    readonly periodMin: Locator;
    readonly periodMax: Locator;
    readonly decimalNumber: Locator;
    readonly generalLedgersName: Locator;
    readonly taxGLAccount: Locator;
    readonly interestAccount: Locator;
    readonly interestReservationAccount: Locator;
    readonly next: Locator;
    readonly save: Locator;

    constructor(page: Page) {
        this.page = page;

        // Investment Product Locators
        this.setupMenu = page.getByRole('button', { name: 'Setup' });
        this.investmentProductTab = page.getByRole('menuitem', { name: 'Investment Product' });
        this.addNewProduct = page.getByRole('button', { name: 'Add New Product' });
        this.productNamePri = page.getByRole('textbox', { name: 'Product Name (Primary) *' });
        this.accountCode = page.getByRole('textbox', { name: 'Account Code *' });
        this.operatingType = page.getByLabel('Operating Type');
        this.interestPolicy = page.getByLabel('Interest Policy');
        this.interestUpdatePolicy = page.getByLabel('Interest Update Policy');
        this.interestRateMin = page.getByRole('spinbutton', { name: 'Interest Rate Min' });
        this.interestRateMax = page.getByRole('spinbutton', { name: 'Interest Rate Max' });
        this.periodMin = page.getByRole('spinbutton', { name: 'Period Min' });
        this.periodMax = page.getByRole('spinbutton', { name: 'Period Max' });
        this.decimalNumber = page.getByRole('spinbutton', { name: 'Decimal Number *' });
        this.generalLedgersName = page.getByLabel('General Ledgers Name');
        this.taxGLAccount = page.getByLabel('Tax GL Account');
        this.interestAccount = page.getByLabel('Interest Account');
        this.interestReservationAccount = page.getByLabel('Interest Reservation Account');
        this.next = page.getByRole('button', { name: 'Next' });
        this.save = page.getByRole('button', { name: 'Save Finish' });
    }

    // Investment Product method
    async addinvestmentProduct(productNamePri: string, accountCode: string, operatingType: string, interestPolicy: string, interestUpdatePolicy: string, interestRateMin: string, interestRateMax: string, periodMin: string, periodMax: string, decimalNumber: string, generalLedgersName: string, taxGLAccount: string, interestAccount: string, interestReservationAccount: string) {
        await this.setupMenu.click();
        await this.investmentProductTab.click();
        await this.page.waitForTimeout(2000);

        await this.addNewProduct.click();
        await this.page.waitForTimeout(2000);

        await this.productNamePri.fill(productNamePri);
        await this.page.waitForTimeout(2000);

        await this.accountCode.fill(accountCode);
        await this.page.waitForTimeout(2000);

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

        await this.decimalNumber.fill(decimalNumber);
        await this.page.waitForTimeout(2000);

        await this.generalLedgersName.click();
        await this.generalLedgersName.selectOption({ label: generalLedgersName });
        await this.page.waitForTimeout(2000);

        await this.taxGLAccount.click();
        await this.taxGLAccount.selectOption({ label: taxGLAccount });
        await this.page.waitForTimeout(2000);

        await this.interestAccount.click();
        await this.interestAccount.selectOption({ label: interestAccount });
        await this.page.waitForTimeout(2000);

        await this.interestReservationAccount.click();
        await this.interestReservationAccount.selectOption({ label: interestReservationAccount });
        await this.page.waitForTimeout(2000);

        await this.next.click();
        await this.page.waitForTimeout(2000);

        await this.save.click();
        await this.page.waitForTimeout(2000);

    }

}