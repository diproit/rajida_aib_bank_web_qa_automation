import { test } from '../../fixtures/auth.fixture';
import * as receipt from '../receipt.spec';
import * as payment from '../payment.spec';
import * as withdraw from '../withdraw.spec';


// test.use(receipt);
// test.use(payment);
test.use(withdraw);