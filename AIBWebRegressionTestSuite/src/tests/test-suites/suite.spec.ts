import{test} from '@playwright/test'

import * as login from '../login.spec';
import * as receipt from '../receipt.spec';
import * as payment from '../payment.spec';
import * as withdraw from '../withdraw.spec'


test.use(login);
test.use(receipt);
test.use(payment);
test.use(withdraw);