import { Page, Locator, expect } from '@playwright/test';

export class LoanApplicationListPage {
    readonly page: Page;
    private clickedTxnNo: string = '';

    // Approval Locators
    readonly loansMenu: Locator;
    readonly loanApplicationListTab: Locator;
    readonly applicationStatus: Locator;
    readonly applicationLoanProduct: Locator;
    readonly customerNumberSearch: Locator;
    readonly search: Locator;
    readonly loanPeriod: Locator;
    readonly loanInterest: Locator;
    readonly writeComment: Locator;
    readonly addCommentButton: Locator;
    readonly guarantorType: Locator;
    readonly guarantorNumber: Locator;
    readonly sendToApprove: Locator;
    readonly yes: Locator;
    readonly next: Locator;
    readonly sendToDisburse: Locator;
    readonly disbursementAmount: Locator;
    readonly disburseButton: Locator;



    constructor(page: Page) {
        this.page = page;

        // Approval Locators
        this.loansMenu = page.getByRole('button', { name: 'Loans' });
        this.loanApplicationListTab = page.getByRole('menuitem', { name: 'Loan Application List' });
        this.loanPeriod = page.getByRole('spinbutton', { name: 'Loan Period' });
        this.loanInterest = page.getByRole('spinbutton', { name: 'Interest Rate (%)' });
        this.next = page.getByRole('button', { name: 'Next' });
        this.writeComment = page.getByRole('textbox', { name: 'Add Comment' });
        this.addCommentButton = page.getByRole('button', { name: 'Add Comment' });
        this.guarantorType = page.getByLabel('Guarantor Type')
        this.guarantorNumber = page.getByRole('textbox', { name: 'Enter NIC or customer number' });
        this.sendToApprove = page.getByRole('button', { name: 'Send To Approve' });
        this.yes = page.getByRole('button', { name: 'Yes, Send' });
        this.sendToDisburse = page.getByRole('button', { name: 'Send To Disburse' });
        this.disbursementAmount = page.getByRole('spinbutton', { name: 'Disbursement Amount' });
        this.disburseButton = page.getByRole('button', { name: 'Disburse' });
        this.applicationStatus = page.getByLabel('Status', { exact: true });
        this.applicationLoanProduct = page.getByLabel('Product');
        this.customerNumberSearch = page.getByRole('textbox', { name: 'Search' });
        this.search = page.getByRole('button', { name: 'Search' });

    }

    // Method to get dynamic guarantorNameFill locator
    getGuarantorNumberLocator(guarantorNumber: string): Locator {
        return this.page.getByText(guarantorNumber);
    }


    async loanDoAppraisal(customerNumber: string, applicationStatus: string, applicationLoanProduct: string, loanPeriod: string, loanInterest: string, guarantorType: string, guarantorNumber: string, comment: string) {
        await this.loansMenu.click();
        await this.loanApplicationListTab.click();

        await this.applicationStatus.click();
        await this.applicationStatus.selectOption({ label: applicationStatus });

        await this.applicationLoanProduct.click();
        await this.applicationLoanProduct.selectOption({ label: applicationLoanProduct });

        await this.customerNumberSearch.click();
        await this.customerNumberSearch.fill(customerNumber);

        await this.search.click();

        const DoAppraisalButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
        await DoAppraisalButtonLocator.locator('button').click();
        await this.page.waitForTimeout(3000);

        await this.page.waitForTimeout(3000);

        await this.loanPeriod.click();
        await this.loanPeriod.fill(loanPeriod);
        await this.loanInterest.click();
        await this.loanInterest.fill(loanInterest);
        await this.page.waitForTimeout(3000);
        await this.next.click();

        // await this.guarantorType.click();
        // await this.guarantorType.selectOption(guarantorType);

        await this.page.waitForTimeout(3000);

        await this.guarantorNumber.click();
        await this.guarantorNumber.fill(guarantorNumber);
        const guarantorNameLocator = this.getGuarantorNumberLocator(guarantorNumber);
        await guarantorNameLocator.click();
        await this.page.waitForTimeout(3000);
        await this.next.click();

        await this.next.click();

        await this.page.waitForTimeout(3000);

        await this.writeComment.fill(comment);
        await this.page.waitForTimeout(3000);
        await this.addCommentButton.click();
        await this.page.waitForTimeout(3000);
        await this.sendToApprove.click();
        await this.page.waitForTimeout(3000);
        await this.yes.click();
    }

    async loanDoApproval(customerNumber: string, applicationStatus2: string, applicationLoanProduct: string) {

        await this.applicationStatus.click();
        await this.applicationStatus.selectOption({ label: applicationStatus2 });

        await this.applicationLoanProduct.click();
        await this.applicationLoanProduct.selectOption({ label: applicationLoanProduct });

        await this.customerNumberSearch.click();
        await this.customerNumberSearch.fill(customerNumber);

        await this.search.click();

        const DoApprovalButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
        await DoApprovalButtonLocator.locator('button').click();
        await this.page.waitForTimeout(3000);

        await this.next.click();
        await this.page.waitForTimeout(3000);

        await this.next.click();
        await this.page.waitForTimeout(3000);

        await this.next.click();
        await this.page.waitForTimeout(3000);

        await this.sendToDisburse.click();
        await this.page.waitForTimeout(3000);
        await this.yes.click();
        await this.page.waitForTimeout(3000);
    }

    async loanDoDisburse(customerNumber: string, applicationStatus3: string, applicationLoanProduct: string, disbursementAmount: string, disbursementType: string, disbursementMethod: string) {

        await this.applicationStatus.click();
        await this.applicationStatus.selectOption({ label: applicationStatus3 });

        await this.applicationLoanProduct.click();
        await this.applicationLoanProduct.selectOption({ label: applicationLoanProduct });

        await this.customerNumberSearch.click();
        await this.customerNumberSearch.fill(customerNumber);

        await this.search.click();

        const DoDisburseButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
        await DoDisburseButtonLocator.locator('button').click();
        await this.page.waitForTimeout(3000);

        await this.disbursementAmount.click();
        await this.disbursementAmount.fill(disbursementAmount);

        const disbursementTypeLocator = this.page.locator('label').filter({ hasText: disbursementType });
        await disbursementTypeLocator.click();
        await this.page.waitForTimeout(3000);

        const disbursementMethodLocator = this.page.locator('label').filter({ hasText: disbursementMethod });
        await disbursementMethodLocator.click();
        await this.page.waitForTimeout(3000);

        await this.disburseButton.click();

        await this.page.waitForTimeout(3000);
    }

    async fdDoApproval(customerNumber: string, applicationStatus2: string, fdLoanProduct: string, guarantorNumber: string, comment: string) {

        await this.applicationStatus.click();
        await this.applicationStatus.selectOption({ label: applicationStatus2 });

        await this.applicationLoanProduct.click();
        await this.applicationLoanProduct.selectOption({ label: fdLoanProduct });

        await this.customerNumberSearch.click();
        await this.customerNumberSearch.fill(customerNumber);

        await this.search.click();

        const DoApprovalButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
        await DoApprovalButtonLocator.locator('button').click();
        await this.page.waitForTimeout(3000);

        await this.next.click();
        await this.page.waitForTimeout(3000);

        await this.guarantorNumber.click();
        await this.guarantorNumber.fill(guarantorNumber);
        const guarantorNameLocator = this.getGuarantorNumberLocator(guarantorNumber);
        await guarantorNameLocator.click();
        await this.page.waitForTimeout(3000);
        await this.next.click();

        await this.page.waitForTimeout(3000);

        await this.next.click();
        await this.page.waitForTimeout(3000);

        await this.writeComment.fill(comment);
        await this.page.waitForTimeout(3000);
        await this.addCommentButton.click();
        await this.page.waitForTimeout(3000);

        await this.sendToDisburse.click();
        await this.page.waitForTimeout(3000);
        await this.yes.click();
        await this.page.waitForTimeout(3000);
    }

    async fdDoDisburse(customerNumber: string, applicationStatus3: string, fdLoanProduct: string, disbursementAmount: string, disbursementType: string, disbursementMethod: string) {

        await this.applicationStatus.click();
        await this.applicationStatus.selectOption({ label: applicationStatus3 });

        await this.applicationLoanProduct.click();
        await this.applicationLoanProduct.selectOption({ label: fdLoanProduct });

        await this.customerNumberSearch.click();
        await this.customerNumberSearch.fill(customerNumber);

        await this.search.click();

        const DoDisburseButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
        await DoDisburseButtonLocator.locator('button').click();
        await this.page.waitForTimeout(3000);

        await this.disbursementAmount.click();
        await this.disbursementAmount.fill(disbursementAmount);

        const disbursementTypeLocator = this.page.locator('label').filter({ hasText: disbursementType });
        await disbursementTypeLocator.click();
        await this.page.waitForTimeout(3000);

        const disbursementMethodLocator = this.page.locator('label').filter({ hasText: disbursementMethod });
        await disbursementMethodLocator.click();
        await this.page.waitForTimeout(3000);

        await this.disburseButton.click();

        await this.page.waitForTimeout(3000);
    }

}