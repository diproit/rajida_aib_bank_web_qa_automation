import { LoanApplicationPage } from "../features/pages/LoanApplicationPage";

export const TestData = {
  validUser: {
    username: 'NilkiHR',
    password: 'nilki123'
  },

  cashier: {
    cashBook: 'Cash Book',
    openingCashAmount: '20000'
  },

  receipt: {
    customerNumber: '1M0051',
    accountNumber: '004-10062',
    amount: '1600'
  },

  payment: {
    branchId: '1', // Add gl_branch.id 
    sectionId: '1', // Add gl_section.id
    accountName: 'Electracity Bill Expenses',
    payTo: 'Test Automation',
    description: 'Test Automation',
    amount: '3000',

  },

  withdrawal: {
    customerNumber: '1M0051',
    accountNumberId: '102921', //Add the pl_account.id of the account to select //004-10062
    amount: '2000'
  },

  journal: {
    branchId: '1', // Add gl_branch.id 
    sectionId: '1', // Add gl_section.id    
    accountName1: 'Stationeries Stock In Hand (Office)',
    description1: 'Test Automation',
    credit: '100000',
    accountName2: 'Pension Fund',
    description2: 'Test Automation',
    debit: '100000',
  },

  loanApplication: {
    loanCustomerNumber: '1M0051',
    loanProductId: '29', //Add the pl_account_type.id of the product to select //Housing Loan
    amount: '10000'
  },

  loanApplicationList: {
    customerNumber: '1M0051',
    loanPeriod: '12',
    loanInterest: '6',
    guarantorType: 'Gur 1',
    guarantorNumber: '1N2363',
    comment: 'Test Automation',
    disbursementAmount: '1000',
    disbursementType: 'Cash',
    disbursementMethod: 'Manual'
  },

  fdAdvance: {
    fdCustomerNumber: '1M0051',
    fdLoanProductId: '22',
    accountNumber: '006-10614',
    accountName:'Member Fixed',
    requestLoanAmount:'10000',
    fdLoanPeriod: '12',
    fdCertificate: 'C:/Users/nilki/Downloads/Test Document.pdf'
  }

};