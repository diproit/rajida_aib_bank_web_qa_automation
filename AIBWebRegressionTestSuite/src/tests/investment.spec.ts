import { test } from '../fixtures/auth.fixture';
import { InvestmentPage } from '../features/pages/InvestmentPage';
import { TestData } from '../utils/testData';

test('TC14 - Deposit And Withdraw Investments', async ({ page }) => {

    const investmentPage = new InvestmentPage(page);

    await page.goto('/transactions/investment');

    const { transactionTypeDeposit, branch, accountType, amount, interestRate, period, note } = TestData.investment;

    await investmentPage.addInvestmentAccount(transactionTypeDeposit, branch, accountType, amount, interestRate, period, note);

    const {  depositInvestmentAccount, depositAmount } = TestData.investment;

    await investmentPage.depositToInvestment( depositInvestmentAccount, depositAmount);

    const { transactionTypeWithdraw, withdrawInvestmentAccount, withdrawAmount } = TestData.investment;

    await investmentPage.withdrawFromInvestment(transactionTypeWithdraw, branch, withdrawInvestmentAccount, withdrawAmount);



});