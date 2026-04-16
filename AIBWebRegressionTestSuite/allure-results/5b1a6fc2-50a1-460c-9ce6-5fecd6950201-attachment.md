# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-suites\suite.spec.ts >> TC07 - FD Advance
- Location: src\tests\fdAdvance.spec.ts:6:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Add Comment' })

```

# Test source

```ts
  70  |         await this.page.waitForTimeout(3000);
  71  |         await this.next.click();
  72  | 
  73  |         await this.guarantorType.click();
  74  |         await this.guarantorType.selectOption(guarantorType);
  75  |         // await this.guarantorType.click();
  76  | 
  77  |         await this.page.waitForTimeout(3000);
  78  | 
  79  |         await this.guarantorNumber.click();
  80  |         await this.guarantorNumber.fill(guarantorNumber);
  81  |         const guarantorNameLocator = this.getGuarantorNumberLocator(guarantorNumber);
  82  |         await guarantorNameLocator.click();
  83  |         await this.page.waitForTimeout(3000);
  84  |         await this.next.click();
  85  | 
  86  |         await this.next.click();
  87  | 
  88  |         await this.page.waitForTimeout(3000);
  89  | 
  90  |         await this.writeComment.fill(comment);
  91  |         await this.page.waitForTimeout(3000);
  92  |         await this.addCommentButton.click();
  93  |         await this.page.waitForTimeout(3000);
  94  |         await this.sendToApprove.click();
  95  |         await this.page.waitForTimeout(3000);
  96  |         await this.yes.click();
  97  |     }
  98  |     async loanDoApproval(customerNumber: string) {
  99  |         const DoApprovalButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
  100 |         await DoApprovalButtonLocator.locator('button').click();
  101 |         await this.page.waitForTimeout(3000);
  102 | 
  103 |         await this.next.click();
  104 |         await this.page.waitForTimeout(3000);
  105 | 
  106 |         await this.next.click();
  107 |         await this.page.waitForTimeout(3000);
  108 | 
  109 |         await this.next.click();
  110 |         await this.page.waitForTimeout(3000);
  111 | 
  112 |         await this.sendToDisburse.click();
  113 |         await this.page.waitForTimeout(3000);
  114 |         await this.yes.click();
  115 |         await this.page.waitForTimeout(3000);
  116 |     }
  117 | 
  118 |     async loanDoDisburse(customerNumber: string, disbursementAmount: string, disbursementType: string, disbursementMethod: string) {
  119 | 
  120 |         const DoDisburseButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
  121 |         await DoDisburseButtonLocator.locator('button').click();
  122 |         await this.page.waitForTimeout(3000);
  123 | 
  124 |         await this.disbursementAmount.click();
  125 |         await this.disbursementAmount.fill(disbursementAmount);
  126 | 
  127 |         const disbursementTypeLocator = this.page.locator('label').filter({ hasText: disbursementType });
  128 |         await disbursementTypeLocator.click();
  129 |         await this.page.waitForTimeout(3000);
  130 | 
  131 |         const disbursementMethodLocator = this.page.locator('label').filter({ hasText: disbursementMethod });
  132 |         await disbursementMethodLocator.click();
  133 |         await this.page.waitForTimeout(3000);
  134 | 
  135 |         await this.disburseButton.click();
  136 | 
  137 |         await this.page.waitForTimeout(3000);
  138 | 
  139 |     }
  140 | 
  141 |     async fdDoApproval(customerNumber: string, loanPeriod: string, loanInterest: string, guarantorType: string, guarantorNumber: string, comment: string) {
  142 |         await this.loansMenu.click();
  143 |         await this.loanApplicationListTab.click();
  144 | 
  145 |         // await this.page.evaluate(() => { document.body.style.zoom = '50%'; });
  146 | 
  147 |         const DoApprovalButtonLocator = this.page.getByRole('row').filter({ hasText: customerNumber }).first();
  148 |         await DoApprovalButtonLocator.locator('button').click();
  149 |         await this.page.waitForTimeout(3000);
  150 | 
  151 |                 await this.next.click();
  152 | 
  153 | 
  154 |         await this.guarantorType.click();
  155 |         await this.guarantorType.selectOption(guarantorType);
  156 | 
  157 |         await this.page.waitForTimeout(3000);
  158 | 
  159 |         await this.guarantorNumber.click();
  160 |         await this.guarantorNumber.fill(guarantorNumber);
  161 |         const guarantorNameLocator = this.getGuarantorNumberLocator(guarantorNumber);
  162 |         await guarantorNameLocator.click();
  163 |         await this.page.waitForTimeout(3000);
  164 |         await this.next.click();
  165 | 
  166 |         await this.next.click();
  167 | 
  168 |         await this.page.waitForTimeout(3000);
  169 | 
> 170 |         await this.writeComment.fill(comment);
      |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  171 |         await this.page.waitForTimeout(3000);
  172 |         await this.addCommentButton.click();
  173 |         await this.page.waitForTimeout(3000);
  174 |         await this.sendToDisburse.click();
  175 |         await this.page.waitForTimeout(3000);
  176 |         await this.yes.click();
  177 |     }
  178 | 
  179 | 
  180 | }
```