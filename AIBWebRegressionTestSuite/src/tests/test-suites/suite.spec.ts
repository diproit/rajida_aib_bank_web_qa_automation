import{test} from '@playwright/test'

import * as login from '../login.spec'
import * as payment from '../payment.spec'

test.use(login);
test.use(payment);