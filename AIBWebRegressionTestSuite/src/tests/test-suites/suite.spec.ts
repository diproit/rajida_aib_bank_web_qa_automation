import { test } from '../../fixtures/auth.fixture';
import * as receipt from '../receipt.spec';
import * as payment from '../payment.spec';
import * as withdraw from '../withdraw.spec';
import * as journal from '../journal.spec';
import * as loanApplication from '../loanApplication.spec';
import * as fdAdvance from '../fdAdvance.spec';
import * as members from '../members.spec';
import * as savingApplication from '../savingApplication.spec' 
import * as coa from '../chartOfAccount.spec'
import * as savingProduct from '../savingProduct.spec'
import * as investmentProduct from '../investmentProduct.spec'
import * as loanProduct from '../loanProduct.spec'
import * as investment from '../investment.spec'
import * as signOff from '../signOff.spec';


// test.use(receipt);
// test.use(payment);
// test.use(withdraw);
// test.use(journal);
// test.use(loanApplication);
// test.use(fdAdvance);
// test.use(members);
// test.use(savingApplication);
// test.use(coa);
// test.use(savingProduct);
// test.use(investmentProduct);
// test.use(loanProduct);
test.use(investment);



test.use(signOff);