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
    branch: 'Maharagama',
    section: 'Bank',
    accountName: 'Electracity Bill Expenses',
    payTo: 'Test Automation',
    description: 'Test Automation',
    amount: '3000',

  },

  withdrawal: {
    customerNumber: '1M0051',
    account: '004-10062 - Saving Deposit',
    amount: '2000'
  },

  journal: {
    branch: 'Maharagama',
    section: 'Bank',
    accountName1: 'Stationeries Stock In Hand (Office)',
    description1: 'Test Automation',
    credit: '7000',
    accountName2: 'Pension Fund',
    description2: 'Test Automation',
    debit: '7000',
  },

  loanApplication: {
    loanCustomerNumber: '1M0051',
    loanProduct: 'Housing Loan',
    amount: '20000'
  },

  loanApplicationList: {
    customerNumber: '1M0051',
    applicationStatus: 'Pending',
    applicationStatus2: 'In Approval',
    applicationStatus3: 'In Disburse',
    applicationLoanProduct: 'Housing Loan',
    fdLoanProduct: 'Advance Loan',
    loanPeriod: '12',
    loanInterest: '6',
    guarantorType: 'Gur 1',
    guarantorNumber: '1N2363',
    comment: 'Test Automation',
    disbursementAmount: '2000',
    disbursementType: 'Cash',
    disbursementMethod: 'Manual'
  },

  fdAdvance: {
    fdCustomerNumber: '1M0051',
    fdLoanProduct: 'Advance Loan',
    accountNumber: '006-10614',
    accountName: 'Member Fixed',
    requestLoanAmount: '10000',
    fdLoanPeriod: '12',
    fdCertificate: 'C:/Users/nilki/Downloads/Test Document.pdf'
  },

  members: {
    customerType: 'Member',
    nic: '974759553v',
    title: 'Mr',
    fullNameEng: 'Test Automation Member',
    initialNameEng: 'T A C',
    addressEng: '35/A, Test Automation',
    gender: 'Male',
    dob: '1997-10-05',
    memberDate: '2026-04-17',
    marriedStatus: 'Single',
    mobile1: '0712442493',
    city: 'Colombo',
    occupation: 'Test Occupation',
    employer: 'Test Employer',
    profileImage: 'C:/Users/nilki/OneDrive/Desktop/Images/person.png',
    signatureImage: 'C:/Users/nilki/OneDrive/Desktop/Images/signature.png',
    nicImage: 'C:/Users/nilki/Downloads/Test Document.pdf'
  },

  savingApplication: {
    customerNumber: '1M0051',
    savingProduct: 'Member Fixed Deposit (Anually)',
    period: '12',
    interestRate: '6',
    interestUpdateAccount: '002-10049',
    maturityOption: 'Monthly Interest Credit to Savings Account',
    initialAmount: '20000',
    withdrawalInstruction: 'Test Automation'
  },

  chartOfAccount: {
    typeGroup: 'Expences',
    coaType: 'Staff expenses',
    nameEng: 'Test Automation COA'
  },

  savingProduct: {
    productNameEng: 'Test Automation Saving Product',
    autoNumberCreation: 'Enable', //Enable/Disable
    operatingType: 'Normal Savings',
    interestPolicy: 'Monthly Interest (Normal Savings)',
    interestUpdatePolicy: 'Updates end of month',
    interestRateMin: '0',
    interestRateMax: '6',
    periodMin: '1',
    periodMax: '12',
    minimumBalance: '600',
    pbType: 'Pass Book',
    decimalNumber: '1',
    glAccount: 'Member Savings',
    interestAccount: 'Savings Interest Expenses',
    reservationAccount: 'Payble Office Rent Expenses',
    taxAccount: 'Abans Auto Pvt Ltd'
  }

};