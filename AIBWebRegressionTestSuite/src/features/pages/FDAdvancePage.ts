import { Page, Locator, expect } from '@playwright/test';

export class FDAdvancePage {
    readonly page: Page;

    // LoanApplication Locators
    readonly loansMenu: Locator;
    readonly fdAdvanceTab: Locator;
    readonly fdCustomerNumber: Locator;
    readonly next: Locator;
    readonly fdLoanProductId: Locator;
    readonly sendToApproval: Locator;


    constructor(page: Page) {
        this.page = page;

        // LoanApplication Locators
        this.loansMenu = page.getByRole('button', { name: 'Loans' });
        this.fdAdvanceTab = page.getByRole('menuitem', { name: 'FD Advance', exact: true });
        this.fdCustomerNumber = page.getByRole('textbox', { name: 'Customer Number' });
        this.next = page.getByRole('button', { name: 'Next' });
        this.fdLoanProductId = page.getByPlaceholder('Select FD Account Type');
        this.sendToApproval = page.getByRole('button', { name: 'Send to Approve' });
    }

    getRequestAmountLocator(accountNumber: string, accountName: string): Locator {
        return this.page.getByRole('row', { name: `${accountNumber} ${accountName}` }).getByPlaceholder('0.00');
    }

    getLoanPeriodLocator(accountNumber: string, accountName: string): Locator {
        return this.page.getByRole('row', { name: `${accountNumber} ${accountName}` }).getByPlaceholder('Enter period');
    }

    getCertificateUploadLocator(accountNumber: string, accountName: string): Locator {
        return this.page.getByRole('row', { name: `${accountNumber} ${accountName}` }).locator('button');
    }


    // FD Advance method
    async fdAdvance(fdCustomerNumber: string, fdLoanProductId: string, accountNumber: string, accountName: string, requestLoanAmount: string, fdLoanPeriod: string, fdCertificate: string) {
        await this.loansMenu.click();
        await this.fdAdvanceTab.click();
        await this.fdCustomerNumber.fill(fdCustomerNumber);
        await this.next.click();
        await this.page.waitForTimeout(3000);
        // Click to open dropdown
        await this.fdLoanProductId.click();
        await this.page.waitForTimeout(3000);
        // Wait for the loan product dropdown options to load
        await this.fdLoanProductId.selectOption(fdLoanProductId);
        const amountLocator = this.getRequestAmountLocator(accountNumber, accountName);
        await amountLocator.fill(requestLoanAmount);
        await this.page.waitForTimeout(3000);
        const periodLocator = this.getLoanPeriodLocator(accountNumber, accountName);
        await periodLocator.fill(fdLoanPeriod);
        await this.page.waitForTimeout(3000);
        //Fd Certificate Upload
        const uploadLocator = this.getCertificateUploadLocator(accountNumber, accountName);
        // await uploadLocator.click();
        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            uploadLocator.click(),
        ]);

        await fileChooser.setFiles(fdCertificate);

        await this.page.waitForTimeout(3000);
        await this.sendToApproval.click();
        await this.page.waitForTimeout(3000);
    }

    



}