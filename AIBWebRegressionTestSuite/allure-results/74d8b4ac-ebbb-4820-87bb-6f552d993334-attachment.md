# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC03 - Journal Transaction
- Location: src\tests\journal.spec.ts:5:5

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.click: Test timeout of 50000ms exceeded.
Call log:
  - waiting for getByRole('row', { name: 'Stationeries Stock In Hand (Office) Test Automation 100000' }).locator('button')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - img "Logo" [ref=e9]
        - generic [ref=e10]: Colombo District TCCS Union Ltd. In Sri Lanka.
        - generic [ref=e12]:
          - generic [ref=e14]:
            - img [ref=e17]
            - generic [ref=e19]: Maharagama
          - generic [ref=e21]:
            - img [ref=e24]
            - generic [ref=e26]: Journal Entries
      - generic [ref=e28]:
        - generic [ref=e30]:
          - img [ref=e33]
          - generic [ref=e35]: 08 Apr 2026
        - generic [ref=e37]:
          - img [ref=e40]
          - generic [ref=e43]: 12:12:17 PM
        - generic [ref=e44]: "|"
        - generic [ref=e46]:
          - img [ref=e49]
          - generic [ref=e52]: connected
        - combobox "Language" [ref=e53]:
          - option "English" [selected]
          - option "සිංහල"
          - option "தமிழ்"
          - option "Tagalog"
          - option "ไทย"
      - button "@NilkiHR" [ref=e56] [cursor=pointer]:
        - generic [ref=e59]:
          - img [ref=e62]
          - generic [ref=e64]: "@NilkiHR"
    - generic [ref=e67]:
      - link "Dashboard" [ref=e69] [cursor=pointer]:
        - /url: /
        - generic [ref=e70]: Dashboard
      - link "Members" [ref=e72] [cursor=pointer]:
        - /url: /members
        - generic [ref=e73]: Members
      - link "Ledgers" [ref=e75] [cursor=pointer]:
        - /url: /ledgers
        - generic [ref=e76]: Ledgers
      - button "Savings" [ref=e78] [cursor=pointer]:
        - generic [ref=e79]:
          - text: Savings
          - img [ref=e81]
      - button "Loans" [ref=e84] [cursor=pointer]:
        - generic [ref=e85]:
          - text: Loans
          - img [ref=e87]
      - button "Transactions" [ref=e90] [cursor=pointer]:
        - generic [ref=e91]:
          - text: Transactions
          - img [ref=e93]
      - button "View" [ref=e96] [cursor=pointer]:
        - generic [ref=e97]:
          - text: View
          - img [ref=e99]
      - button "Process" [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - text: Process
          - img [ref=e105]
      - button "Setup" [ref=e108] [cursor=pointer]:
        - generic [ref=e109]:
          - text: Setup
          - img [ref=e111]
      - link "Reports" [ref=e114] [cursor=pointer]:
        - /url: /reports
        - generic [ref=e115]: Reports
      - button "Help" [ref=e117] [cursor=pointer]:
        - generic [ref=e118]:
          - text: Help
          - img [ref=e120]
      - generic "Cashier Status" [ref=e122] [cursor=pointer]:
        - generic [ref=e123]:
          - img [ref=e124]
          - generic "Cash Book" [ref=e129]:
            - generic [ref=e131]: Cash Book
          - generic "signed in" [ref=e133]:
            - generic [ref=e135]: signed in
    - generic [ref=e138]:
      - generic [ref=e141]:
        - generic [ref=e143]:
          - generic [ref=e144]: Branch
          - generic [ref=e147]:
            - combobox "Filter by branch" [ref=e148]:
              - option "Maharagama" [selected]
              - option "Hanwella"
              - option "Homagama"
              - option "Kaduwela"
              - option "Kesbewa"
              - option "Kolonnawa"
              - option "All"
            - generic:
              - generic:
                - generic:
                  - img
        - generic [ref=e150]:
          - generic [ref=e151]: Section
          - generic [ref=e154]:
            - combobox "Filter by section" [ref=e155]:
              - option "All Sections"
              - option "Bank" [selected]
            - generic:
              - generic:
                - generic:
                  - img
      - table "GL Accounts" [ref=e159]:
        - rowgroup [ref=e160]:
          - row "Account no Account name Description Credit Debit Action" [ref=e161]:
            - columnheader "Account no" [ref=e162]:
              - generic [ref=e163]: Account no
            - columnheader "Account name" [ref=e164]:
              - generic [ref=e165]: Account name
            - columnheader "Description" [ref=e166]:
              - generic [ref=e167]: Description
            - columnheader "Credit" [ref=e168]:
              - generic [ref=e170]: Credit
            - columnheader "Debit" [ref=e171]:
              - generic [ref=e173]: Debit
            - columnheader "Action" [ref=e174]:
              - generic [ref=e176]: Action
        - rowgroup [ref=e177]:
          - row "2804 Stationeries Stock In Hand (Office) Test Automation" [ref=e178]:
            - cell "2804" [ref=e179]:
              - generic [ref=e182]: "2804"
            - cell "Stationeries Stock In Hand (Office)" [ref=e183]:
              - textbox "Type account name..." [ref=e185]: Stationeries Stock In Hand (Office)
            - cell "Test Automation" [ref=e186]:
              - textbox "Description" [ref=e187]: Test Automation
            - cell [ref=e188]:
              - spinbutton [active] [ref=e190]: "100000"
            - cell [ref=e191]:
              - spinbutton [disabled] [ref=e193]
            - cell [ref=e194]:
              - button [ref=e196] [cursor=pointer]:
                - generic [ref=e197]:
                  - generic:
                    - generic:
                      - generic:
                        - img
          - row "Looking to add personal accounts? Add Personal Accounts" [ref=e198]:
            - cell "Looking to add personal accounts? Add Personal Accounts" [ref=e199]:
              - generic [ref=e201]:
                - generic [ref=e202]: Looking to add personal accounts?
                - generic [ref=e205]:
                  - combobox "Add Personal Accounts" [ref=e206]:
                    - option "Add Personal Accounts" [disabled] [selected]
                    - option "-- Select an action --"
                    - option "Add Personal Account"
                    - option "Equipment (Debit)"
                    - option "Equipment (Credit)"
                    - option "Investment (Debit)"
                    - option "Investment (Credit)"
                  - generic:
                    - generic:
                      - generic:
                        - img
          - row "Total 0.00 0.00" [ref=e207]:
            - cell "Total" [ref=e208]:
              - generic [ref=e210]: Total
            - cell "0.00" [ref=e211]:
              - generic [ref=e213]: "0.00"
            - cell "0.00" [ref=e214]:
              - generic [ref=e216]: "0.00"
            - cell [ref=e217]
          - row [ref=e218]:
            - cell [ref=e219]
      - generic [ref=e220]:
        - generic [ref=e222] [cursor=pointer]: "Last journal: (1-J2600001244): 100.00 on 3/22/2026, 5:13:47 PM"
        - generic [ref=e225] [cursor=pointer]:
          - img [ref=e228]
          - generic [ref=e230]: or list last 10
      - generic [ref=e231]:
        - heading "Journal Transactions" [level=4] [ref=e232]
        - table "Journal Transactions" [ref=e234]:
          - rowgroup [ref=e235]:
            - row "Journal no Amount Status" [ref=e236]:
              - columnheader "Journal no" [ref=e237]:
                - generic [ref=e238]: Journal no
              - columnheader "Amount" [ref=e239]:
                - generic [ref=e241]: Amount
              - columnheader "Status" [ref=e242]:
                - generic [ref=e244]: Status
          - rowgroup [ref=e245]:
            - row "1-T2600002712 100,000.00 Pending" [ref=e246]:
              - cell "1-T2600002712" [ref=e247]:
                - generic [ref=e249] [cursor=pointer]: 1-T2600002712
              - cell "100,000.00" [ref=e250]:
                - generic [ref=e252]: 100,000.00
              - cell "Pending" [ref=e253]:
                - generic "Pending" [ref=e257]:
                  - generic [ref=e259]: Pending
            - row "1-T2600002642 100,000.00 Pending" [ref=e260]:
              - cell "1-T2600002642" [ref=e261]:
                - generic [ref=e263] [cursor=pointer]: 1-T2600002642
              - cell "100,000.00" [ref=e264]:
                - generic [ref=e266]: 100,000.00
              - cell "Pending" [ref=e267]:
                - generic "Pending" [ref=e271]:
                  - generic [ref=e273]: Pending
            - row "1-J2600001244 100.00 Approved" [ref=e274]:
              - cell "1-J2600001244" [ref=e275]:
                - generic [ref=e277] [cursor=pointer]: 1-J2600001244
              - cell "100.00" [ref=e278]:
                - generic [ref=e280]: "100.00"
              - cell "Approved" [ref=e281]:
                - generic "Approved" [ref=e285]:
                  - generic [ref=e287]: Approved
            - row "2-J2600000328 700.00 Approved" [ref=e288]:
              - cell "2-J2600000328" [ref=e289]:
                - generic [ref=e291] [cursor=pointer]: 2-J2600000328
              - cell "700.00" [ref=e292]:
                - generic [ref=e294]: "700.00"
              - cell "Approved" [ref=e295]:
                - generic "Approved" [ref=e299]:
                  - generic [ref=e301]: Approved
            - row "2-J2600000327 600.00 Approved" [ref=e302]:
              - cell "2-J2600000327" [ref=e303]:
                - generic [ref=e305] [cursor=pointer]: 2-J2600000327
              - cell "600.00" [ref=e306]:
                - generic [ref=e308]: "600.00"
              - cell "Approved" [ref=e309]:
                - generic "Approved" [ref=e313]:
                  - generic [ref=e315]: Approved
            - row "2-J2600000318 500.00 Approved" [ref=e316]:
              - cell "2-J2600000318" [ref=e317]:
                - generic [ref=e319] [cursor=pointer]: 2-J2600000318
              - cell "500.00" [ref=e320]:
                - generic [ref=e322]: "500.00"
              - cell "Approved" [ref=e323]:
                - generic "Approved" [ref=e327]:
                  - generic [ref=e329]: Approved
            - row "2-J2600000317 100.00 Approved" [ref=e330]:
              - cell "2-J2600000317" [ref=e331]:
                - generic [ref=e333] [cursor=pointer]: 2-J2600000317
              - cell "100.00" [ref=e334]:
                - generic [ref=e336]: "100.00"
              - cell "Approved" [ref=e337]:
                - generic "Approved" [ref=e341]:
                  - generic [ref=e343]: Approved
            - row "2-J2600000316 200.00 Approved" [ref=e344]:
              - cell "2-J2600000316" [ref=e345]:
                - generic [ref=e347] [cursor=pointer]: 2-J2600000316
              - cell "200.00" [ref=e348]:
                - generic [ref=e350]: "200.00"
              - cell "Approved" [ref=e351]:
                - generic "Approved" [ref=e355]:
                  - generic [ref=e357]: Approved
            - row "1-T2600002626 100,000.00 Rejected" [ref=e358]:
              - cell "1-T2600002626" [ref=e359]:
                - generic [ref=e361] [cursor=pointer]: 1-T2600002626
              - cell "100,000.00" [ref=e362]:
                - generic [ref=e364]: 100,000.00
              - cell "Rejected" [ref=e365]:
                - generic "Rejected" [ref=e369]:
                  - generic [ref=e371]: Rejected
            - row "1-J2600001230 100,000.00 Approved" [ref=e372]:
              - cell "1-J2600001230" [ref=e373]:
                - generic [ref=e375] [cursor=pointer]: 1-J2600001230
              - cell "100,000.00" [ref=e376]:
                - generic [ref=e378]: 100,000.00
              - cell "Approved" [ref=e379]:
                - generic "Approved" [ref=e383]:
                  - generic [ref=e385]: Approved
            - row "1-J2600001228 500.00 Approved" [ref=e386]:
              - cell "1-J2600001228" [ref=e387]:
                - generic [ref=e389] [cursor=pointer]: 1-J2600001228
              - cell "500.00" [ref=e390]:
                - generic [ref=e392]: "500.00"
              - cell "Approved" [ref=e393]:
                - generic "Approved" [ref=e397]:
                  - generic [ref=e399]: Approved
            - row "1-T2600002608 100,000.00 Rejected" [ref=e400]:
              - cell "1-T2600002608" [ref=e401]:
                - generic [ref=e403] [cursor=pointer]: 1-T2600002608
              - cell "100,000.00" [ref=e404]:
                - generic [ref=e406]: 100,000.00
              - cell "Rejected" [ref=e407]:
                - generic "Rejected" [ref=e411]:
                  - generic [ref=e413]: Rejected
            - row "1-J2600001209 1,000.00 Approved" [ref=e414]:
              - cell "1-J2600001209" [ref=e415]:
                - generic [ref=e417] [cursor=pointer]: 1-J2600001209
              - cell "1,000.00" [ref=e418]:
                - generic [ref=e420]: 1,000.00
              - cell "Approved" [ref=e421]:
                - generic "Approved" [ref=e425]:
                  - generic [ref=e427]: Approved
            - row "1-J2600001201 1,000.00 Approved" [ref=e428]:
              - cell "1-J2600001201" [ref=e429]:
                - generic [ref=e431] [cursor=pointer]: 1-J2600001201
              - cell "1,000.00" [ref=e432]:
                - generic [ref=e434]: 1,000.00
              - cell "Approved" [ref=e435]:
                - generic "Approved" [ref=e439]:
                  - generic [ref=e441]: Approved
    - button [ref=e442] [cursor=pointer]:
      - img [ref=e443]
  - generic [ref=e446]: © 2026 AIB Bank Web • All rights reserved to Colombo District TCCS Union Ltd. In Sri Lanka.
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class JournalPage {
  4   |   readonly page: Page;
  5   |   private clickedTxnNo: string = '';
  6   | 
  7   |   // Journal Locators
  8   |   readonly transactionsMenu: Locator;
  9   |   readonly journalTab: Locator;
  10  |   readonly branch: Locator;
  11  |   readonly section: Locator;
  12  |   readonly accountName1: Locator;
  13  |   readonly description1: Locator;
  14  |   readonly credit: Locator;
  15  |   readonly accountName2: Locator;
  16  |   readonly description2: Locator;
  17  |   readonly debit: Locator;
  18  |   readonly sendToApproval: Locator;
  19  |   readonly journalSuccessMessage: Locator;
  20  | 
  21  |   // Approval Locators
  22  |   readonly approvalTab: Locator;
  23  |   readonly allSections: Locator;
  24  |   readonly journalTxn: Locator;
  25  |   readonly approveBtn: Locator;
  26  |   readonly approveSuccessMessage: Locator;
  27  | 
  28  |   constructor(page: Page) {
  29  |     this.page = page;
  30  | 
  31  |     // Journal Locators
  32  |     this.transactionsMenu = page.getByRole('button', { name: 'Transactions' });
  33  |     this.journalTab = page.getByRole('menuitem', { name: 'Journal', exact: true });
  34  |     this.branch = page.getByLabel('Branch');
  35  |     this.section = page.getByLabel('Section');
  36  |     this.accountName1 = page.getByRole('textbox', { name: 'Type account name...' });
  37  |     this.description1 = page.getByRole('textbox', { name: 'Description' });
  38  |     this.credit = page.getByPlaceholder('0.00').first();
  39  |     this.accountName2 = page.getByRole('textbox', { name: 'Type account name...' });
  40  |     this.description2 = page.getByRole('textbox', { name: 'Description' });
  41  |     this.debit = page.getByPlaceholder('0.00').nth(1);
  42  |     this.sendToApproval = page.getByRole('button', { name: 'Send to Approve' });
  43  |     this.journalSuccessMessage = page.getByText('Journal transaction processed');
  44  | 
  45  |     // Approval Locators
  46  |     this.approvalTab = page.getByRole('menuitem', { name: 'Approvals' });
  47  |     this.allSections = page.getByRole('button', { name: 'All Sections' });
  48  |     this.journalTxn = page.getByRole('menuitem', { name: 'Payment' });
  49  |     this.approveBtn = page.getByRole('button', { name: 'Approve' });
  50  |     this.approveSuccessMessage = page.getByText('Transaction Approved', { exact: false });
  51  |   }
  52  | 
  53  |   // Method to get dynamic accountNameFill locator
  54  |   getAccountName1Locator(accountName1: string): Locator {
  55  |     return this.page.getByText(accountName1);
  56  |   }
  57  | 
  58  |   getAccountName2Locator(accountName2: string): Locator {
  59  |     return this.page.getByText(accountName2);
  60  |   }
  61  | 
  62  |   // Method to get dynamic addToList locator
  63  |   getAddToList1Locator(accountName1: string, description1: string, credit: string): Locator {
  64  |     return this.page.getByRole('row', { name: `${accountName1} ${description1} ${credit}` }).locator('button');
  65  |   }
  66  | 
  67  |   getAddToList2Locator(accountName2: string, description2: string, debit: string): Locator {
  68  |     return this.page.getByRole('row', { name: `${accountName2} ${description2} ${debit}` }).locator('button');
  69  |   }
  70  | 
  71  |   // Journal method
  72  |   async journal(branchId: string, sectionId: string, accountName1: string, description1: string, credit: string, accountName2: string, description2: string, debit: string) {
  73  |     await this.transactionsMenu.click();
  74  |     await this.journalTab.click();
  75  |     // await this.branch.click();
  76  |     // await this.branch.selectOption(branchId);
  77  |     await this.section.click();
  78  |     await this.section.selectOption(sectionId);
  79  |     await this.page.waitForTimeout(3000);
  80  |     await this.accountName1.fill(accountName1);
  81  |     const accountName1Locator = this.getAccountName1Locator(accountName1);
  82  |     await accountName1Locator.click();
  83  |     await this.description1.fill(description1);
  84  |     await this.credit.fill(credit);
  85  |     await this.page.waitForTimeout(3000);
  86  |     const addToList1Locator = this.getAddToList1Locator(accountName1, description1, credit);
> 87  |     await addToList1Locator.click();
      |                             ^ Error: locator.click: Test timeout of 50000ms exceeded.
  88  |     await this.page.waitForTimeout(3000);
  89  |      await this.accountName2.fill(accountName2);
  90  |     const accountName2Locator = this.getAccountName1Locator(accountName2);
  91  |     await accountName2Locator.click();
  92  |     await this.description2.fill(description2);
  93  |     await this.debit.fill(debit);
  94  |     await this.page.waitForTimeout(3000);
  95  |     const addToList2Locator = this.getAddToList2Locator(accountName2, description2, debit);
  96  |     await addToList2Locator.click();
  97  |     await this.page.waitForTimeout(3000);
  98  |     await this.sendToApproval.click();
  99  |     await this.page.waitForTimeout(3000);
  100 |   }
  101 | 
  102 |   async validateJournalSuccess() {
  103 |     await this.page.waitForTimeout(3000);
  104 |     await expect(this.journalSuccessMessage).toBeVisible();
  105 |     await this.page.waitForTimeout(3000);
  106 |   }
  107 | 
  108 |   // Approve journal method
  109 |   async approveJournal(description: string) {
  110 |     await this.transactionsMenu.click();
  111 |     await this.approvalTab.click();
  112 |     await this.page.waitForTimeout(3000);
  113 |     await this.allSections.click();
  114 |     await this.journalTxn.click();
  115 |     await this.page.waitForTimeout(3000);
  116 |     // Find and click the first payment row with the matching description
  117 |     const journalRow = this.page.getByRole('row').filter({ hasText: description }).first();
  118 |     this.clickedTxnNo = await journalRow.getByText(/-T\d+/).textContent() || '';
  119 |     await journalRow.click();
  120 |     await this.page.waitForTimeout(3000);
  121 |     await this.approveBtn.click();
  122 |   }
  123 | 
  124 |   async validateApproveSuccess() {
  125 |     await this.page.waitForTimeout(3000);
  126 |     const expectedMessage = `Transaction ${this.clickedTxnNo} Approved`;
  127 |     const successMessage = this.page.getByText(expectedMessage, { exact: false });
  128 |     await expect(successMessage).toBeVisible();
  129 |     await this.page.waitForTimeout(3000);
  130 |   }
  131 | 
  132 | 
  133 | }
```