import { Page, Locator, expect } from '@playwright/test';

export class LoanProductPage {
    readonly page: Page;

    // Loan Product Locators
    readonly setupMenu: Locator;
    readonly loanProductTab: Locator;
    readonly addNewProduct: Locator;
    readonly productNameEng: Locator;
    readonly productNameSin: Locator;
    readonly operatingType: Locator;
    readonly interestPolicy: Locator;
    readonly penaltyPolicy: Locator;
    readonly insurancePolicy: Locator;
    readonly feePolicy: Locator;
    readonly pastDuePolicy: Locator;
    readonly interestRateMin: Locator;
    readonly interestRateMax: Locator;
    readonly periodMin: Locator;
    readonly periodMax: Locator;
    readonly penaltyRate: Locator;
    readonly insuranceRate: Locator;
    readonly feeRate: Locator;
    readonly noOfLoanGuarantors: Locator;
    readonly fieldCollection: Locator;
    readonly pbType: Locator;
    readonly decimalNumber: Locator;
    readonly glAccount: Locator;
    readonly glInterestAccount: Locator;
    readonly glPenaltyAccount: Locator;
    readonly glInsuranceAccount: Locator;
    readonly glFeeAccount: Locator;
    readonly next: Locator;
    readonly save: Locator;

    constructor(page: Page) {
        this.page = page;

        // Loan Product Locators
        this.setupMenu = page.getByRole('button', { name: 'Setup' });
        this.loanProductTab = page.getByRole('menuitem', { name: 'Loan Product' });
        this.addNewProduct = page.getByRole('button', { name: 'Add New Product' });
        this.productNameEng = page.getByRole('textbox', { name: 'Product Name (English) *' });
        this.productNameSin = page.getByRole('textbox', { name: 'Product Name (Sinhala) *' });
        this.operatingType = page.getByLabel('Operating Type');
        this.interestPolicy = page.getByLabel('Interest Policy *');
        this.penaltyPolicy = page.getByLabel('Penalty Policy *');
        this.insurancePolicy = page.getByLabel('Insurance Policy *');
        this.feePolicy = page.getByLabel('Fee Policy *');
        this.pastDuePolicy = page.getByLabel('Past Due Policy *');
        this.interestRateMin = page.getByRole('spinbutton', { name: 'Interest Rate Min' });
        this.interestRateMax = page.getByRole('spinbutton', { name: 'Interest Rate Max' });
        this.periodMin = page.getByRole('spinbutton', { name: 'Period Min' });
        this.periodMax = page.getByRole('spinbutton', { name: 'Period Max' });
        this.penaltyRate = page.getByRole('spinbutton', { name: 'Penalty Rate' });
        this.insuranceRate = page.getByRole('spinbutton', { name: 'Insurance Rate' });
        this.feeRate = page.getByRole('spinbutton', { name: 'Fee Rate' });
        this.noOfLoanGuarantors = page.getByRole('spinbutton', { name: 'No. of Loan Guarantors' });
        this.fieldCollection = page.getByLabel('Field Collection *');
        this.pbType = page.getByLabel('PB Type *');
        this.decimalNumber = page.getByRole('spinbutton', { name: 'Decimal Number *' });
        this.glAccount = page.getByLabel('GL Account *');
        this.glInterestAccount = page.getByLabel('GL Interest Account *');
        this.glPenaltyAccount = page.getByLabel('GL Penalty Account *');
        this.glInsuranceAccount = page.getByLabel('GL Insurance Account *');
        this.glFeeAccount = page.getByLabel('GL Fee Account *');
        this.next = page.getByRole('button', { name: 'Next' });
        this.save = page.getByRole('button', { name: 'Save' });
    }

    // Loan Product method
    async addLoanProduct(productNameEng: string, productNameSin: string, autoNumberCreation: string, operatingType: string, interestPolicy: string, penaltyPolicy: string, insurancePolicy: string, feePolicy: string, pastDuePolicy: string, interestRateMin: string, interestRateMax: string, periodMin: string, periodMax: string, penaltyRate: string, insuranceRate: string, feeRate: string, noOfLoanGuarantors: string, fieldCollection: string, pbType: string, decimalNumber: string, glAccount: string, glInterestAccount: string, glPenaltyAccount: string, glInsuranceAccount: string, glFeeAccount: string) {
        await this.setupMenu.click();
        await this.loanProductTab.click();
        await this.page.waitForTimeout(2000);

        await this.addNewProduct.click();
        await this.page.waitForTimeout(2000);

        await this.productNameEng.fill(productNameEng);
        await this.page.waitForTimeout(2000);

        await this.productNameSin.fill(productNameSin);
        await this.page.waitForTimeout(2000);

        const autoNumberCreationSelection = this.page.locator('label').filter({ hasText: autoNumberCreation });
        await autoNumberCreationSelection.click();

        await this.operatingType.click();
        await this.operatingType.selectOption({ label: operatingType });
        await this.page.waitForTimeout(2000);

        await this.interestPolicy.click();
        await this.interestPolicy.selectOption({ label: interestPolicy });
        await this.page.waitForTimeout(2000);

        await this.penaltyPolicy.click();
        await this.penaltyPolicy.selectOption({ label: penaltyPolicy });
        await this.page.waitForTimeout(2000);

        await this.insurancePolicy.click();
        await this.insurancePolicy.selectOption({ label: insurancePolicy });
        await this.page.waitForTimeout(2000);

        await this.feePolicy.click();
        await this.feePolicy.selectOption({ label: feePolicy });
        await this.page.waitForTimeout(2000);

        await this.pastDuePolicy.click();
        await this.pastDuePolicy.selectOption({ label: pastDuePolicy });
        await this.page.waitForTimeout(2000);

        await this.interestRateMin.fill(interestRateMin);
        await this.page.waitForTimeout(2000);

        await this.interestRateMax.fill(interestRateMax);
        await this.page.waitForTimeout(2000);

        await this.periodMin.fill(periodMin);
        await this.page.waitForTimeout(2000);

        await this.periodMax.fill(periodMax);
        await this.page.waitForTimeout(2000);

        await this.penaltyRate.fill(penaltyRate);
        await this.page.waitForTimeout(2000);

         await this.insuranceRate.fill(insuranceRate);
        await this.page.waitForTimeout(2000);

        await this.feeRate.fill(feeRate);
        await this.page.waitForTimeout(2000);

        await this.noOfLoanGuarantors.fill(noOfLoanGuarantors);
        await this.page.waitForTimeout(2000);

        await this.fieldCollection.click();
        await this.fieldCollection.selectOption({ label: fieldCollection });
        await this.page.waitForTimeout(2000);

        await this.pbType.click();
        await this.pbType.selectOption({ label: pbType });
        await this.page.waitForTimeout(2000);

        await this.decimalNumber.fill(decimalNumber);
        await this.page.waitForTimeout(2000);

        await this.glAccount.click();
        await this.glAccount.selectOption({ label: glAccount });
        await this.page.waitForTimeout(2000);

        await this.glInterestAccount.click();
        await this.glInterestAccount.selectOption({ label: glInterestAccount });
        await this.page.waitForTimeout(2000);

        await this.glPenaltyAccount.click();
        await this.glPenaltyAccount.selectOption({ label: glPenaltyAccount });
        await this.page.waitForTimeout(2000);

        await this.glInsuranceAccount.click();
        await this.glInsuranceAccount.selectOption({ label: glInsuranceAccount });
        await this.page.waitForTimeout(2000);

        await this.glFeeAccount.click();
        await this.glFeeAccount.selectOption({ label: glFeeAccount });
        await this.page.waitForTimeout(2000);

        await this.next.click();
        await this.page.waitForTimeout(2000);

        await this.next.click();
        await this.page.waitForTimeout(1500);

        await this.next.click();
        await this.page.waitForTimeout(1500);

        await this.save.click();
        await this.page.waitForTimeout(2000);

    }

}