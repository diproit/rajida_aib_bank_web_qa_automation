import { Page, Locator, expect } from '@playwright/test';

export class SavingApplicationPage {
    readonly page: Page;

    // SavingApplication Locators
    readonly savingsMenu: Locator;
    readonly savingApplicationTab: Locator;
    readonly customerNumber: Locator;
    readonly next: Locator;
    readonly savingProduct: Locator;
    readonly period: Locator;
    readonly interestRate: Locator;
    readonly checkBox: Locator;
    readonly interestUpdateAccount: Locator;
    readonly maturityOption: Locator;
    readonly initialAmount: Locator;
    readonly withdrawalInstruction: Locator;
    readonly save: Locator;
    readonly confirm: Locator;
        readonly savingSuccessMessage: Locator;



    constructor(page: Page) {
        this.page = page;

        // SavingApplication Locators
        this.savingsMenu = page.getByRole('button', { name: 'Savings' });
        this.savingApplicationTab = page.getByRole('menuitem', { name: 'Saving Application' });
        this.customerNumber = page.getByRole('textbox', { name: 'Customer Number' });
        this.next = page.getByRole('button', { name: 'Next' });
        this.savingProduct = page.getByLabel('Saving Product');
        this.period = page.getByRole('textbox', { name: 'Period' });
        this.interestRate = page.getByRole('textbox', { name: 'Interest Rate' });
        this.checkBox = page.getByRole('checkbox', { name: 'Interest Update Account' });
        this.interestUpdateAccount = page.getByLabel('interest update label');
        this.maturityOption = page.getByLabel('Maturity Options');
        this.initialAmount = page.getByRole('spinbutton', { name: 'Initial Amount' });
        this.withdrawalInstruction = page.getByRole('textbox', { name: 'Withdrawal Instruction' });
        this.save = page.getByRole('button', { name: 'Save' });
        this.confirm = page.getByRole('button', { name: 'Confirm & Create' });
        this.savingSuccessMessage = page.getByText('Savings account created');

    }

    // SavingApplication method
    async savingApplication(customerNumber: string, savingProduct: string, period: string, interestRate: string, maturityOption: string, interestUpdateAccount: string, initialAmount: string, withdrawalInstruction: string) {
        await this.savingsMenu.click();
        await this.savingApplicationTab.click();
        await this.customerNumber.fill(customerNumber);
        await this.next.click();
        await this.page.waitForTimeout(3000);

        await this.savingProduct.click();
        await this.page.waitForTimeout(3000);
        await this.savingProduct.selectOption({ label: savingProduct });
        await this.page.waitForTimeout(3000);

        await this.period.fill(period);
        await this.page.waitForTimeout(3000);

        await this.interestRate.fill(interestRate);
        await this.page.waitForTimeout(3000);

        await this.checkBox.check();
        await this.page.waitForTimeout(3000);
        await this.interestUpdateAccount.click();
        await this.page.waitForTimeout(3000);
        await this.interestUpdateAccount.selectOption({ label: interestUpdateAccount });
        await this.page.waitForTimeout(3000);

        await this.maturityOption.click();
        await this.page.waitForTimeout(3000);
        await this.maturityOption.selectOption({ label: maturityOption });
        await this.page.waitForTimeout(3000);

        await this.initialAmount.fill(initialAmount);
        await this.page.waitForTimeout(3000);

        await this.withdrawalInstruction.fill(withdrawalInstruction);
        await this.page.waitForTimeout(3000);

        await this.save.click();
        await this.page.waitForTimeout(3000);

        await this.confirm.click();
        await this.page.waitForTimeout(3000);
    }


}