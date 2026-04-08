export const TestData = {
  validUser: {
    username: 'NilkiHR',
    password: 'nilki123'
  },

  cashier:{
    cashBook: 'Cash Book',
    openingCashAmount: '20000'
  },

  receipt:{
    customerNumber: '1M0051',
    accountNumber: '004-10062',
    amount: '1600'
  },

  payment:{
    branchId: '1', // Add gl_branch.id 
    sectionId: '1', // Add gl_section.id
    accountName:'Electracity Bill Expenses',
    payTo:'Test Automation',
    description:'Test Automation',
    amount:'3000',
    
  },

  withdrawal:{
    customerNumber: '1M0051',
    accountNumberId: '102921', //Add the pl_account.id of the account to select //004-10062
    amount: '2000'
  },

  journal:{
    branchId: '1', // Add gl_branch.id 
    sectionId: '1', // Add gl_section.id    
    accountName1:'Stationeries Stock In Hand (Office)',
    description1:'Test Automation',
    credit:'100000',
    accountName2:'Pension Fund',
    description2:'Test Automation',
    debit:'100000'

  }

};