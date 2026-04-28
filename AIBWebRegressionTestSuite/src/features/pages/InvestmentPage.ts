import { Page, Locator, expect } from '@playwright/test';

export class InvestmentPage {
    readonly page: Page;

    // Loan Product Locators
    readonly transactionsMenu: Locator;
    readonly investmentTab: Locator;
    readonly addAccount: Locator;
    readonly accountType: Locator;
    readonly amount: Locator;
    readonly add: Locator;
    readonly addToList: Locator;
    readonly process: Locator;
    readonly transactionTypeDeposit: Locator;
    readonly branch: Locator;
    readonly depositInvestmentAccount: Locator;
    readonly depositAmount: Locator;
    readonly interestRate: Locator;
    readonly period: Locator;
    readonly note: Locator;
    readonly transactionTypeWithdraw: Locator;
    readonly withdrawInvestmentAccount: Locator;
    readonly withdrawAmount: Locator;

    constructor(page: Page) {
        this.page = page;

        // Loan Product Locators
        this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
        this.investmentTab = page.getByRole('menuitem', { name: 'Investment Payment & Receipt' });
        this.addAccount = page.getByRole('button', { name: 'New' });
        this.accountType = page.getByLabel('Account Type');
        this.amount = page.getByRole('spinbutton', { name: 'Amount' });
        this.add = page.getByRole('button', { name: 'Add' });
        this.addToList = page.getByRole('button', { name: 'Add to list' });
        this.process = page.locator('button').filter({ hasText: 'Process' });
        this.transactionTypeDeposit = page.getByLabel('Transaction Type');
        this.branch = page.getByLabel('Branch');
        this.depositInvestmentAccount = page.getByLabel('Investment Account');
        this.depositAmount = page.getByRole('spinbutton', { name: 'Amount' });
        this.interestRate = page.getByRole('spinbutton', { name: 'Interest Rate (%)' });
        this.period = page.getByRole('spinbutton', { name: 'Period (months)' });
        this.note = page.getByRole('textbox', { name: 'Note' });
        this.transactionTypeWithdraw = page.getByLabel('Transaction Type');
        this.withdrawInvestmentAccount = page.getByLabel('Investment Account');
        this.withdrawAmount = page.getByRole('spinbutton', { name: 'Amount' });
    }

    // Loan Product method
    async addInvestmentAccount(transactionTypeDeposit: string, branch: string, accountType: string, amount: string, interestRate: string, period: string, note: string) {
        await this.transactionsMenu.click();
        await this.investmentTab.click();

        await this.transactionTypeDeposit.click();
        await this.transactionTypeDeposit.selectOption({ label: transactionTypeDeposit });
        await this.page.waitForTimeout(2000);

        await this.branch.click();
        await this.branch.selectOption({ label: branch });
        await this.page.waitForTimeout(2000);

        await this.addAccount.click();
        await this.page.waitForTimeout(2000);

        await this.accountType.click();
        await this.accountType.selectOption({ label: accountType });
        await this.page.waitForTimeout(2000);

        await this.amount.fill(amount);
        await this.page.waitForTimeout(2000);

        await this.interestRate.fill(interestRate);
        await this.page.waitForTimeout(2000);

        await this.period.fill(period);
        await this.page.waitForTimeout(2000);

        await this.note.fill(note);
        await this.page.waitForTimeout(2000);

        await this.add.click();
        await this.page.waitForTimeout(2000);
    }

    async depositToInvestment(depositInvestmentAccount: string, depositAmount: string) {

        await this.depositInvestmentAccount.click();
        await this.depositInvestmentAccount.selectOption({ label: depositInvestmentAccount });
        await this.page.waitForTimeout(2000);

        await this.depositAmount.fill(depositAmount);
        await this.page.waitForTimeout(3000);

        await this.addToList.click();
        await this.page.waitForTimeout(3000);

        await this.process.click();
        await this.page.waitForTimeout(3000);
    }

    async withdrawFromInvestment(transactionTypeWithdraw: string, branch: string, withdrawInvestmentAccount: string, withdrawAmount: string) {
        await this.transactionTypeWithdraw.click();
        await this.transactionTypeWithdraw.selectOption({ label: transactionTypeWithdraw });
        await this.page.waitForTimeout(2000);

        await this.branch.click();
        await this.branch.selectOption({ label: branch });
        await this.page.waitForTimeout(2000);

        await this.withdrawInvestmentAccount.click();
        await this.withdrawInvestmentAccount.selectOption({ label: withdrawInvestmentAccount });
        await this.page.waitForTimeout(2000);

        await this.withdrawAmount.fill(withdrawAmount);
        await this.page.waitForTimeout(3000);

        await this.addToList.click();
        await this.page.waitForTimeout(3000);

        await this.process.click();
        await this.page.waitForTimeout(3000);
    }

}