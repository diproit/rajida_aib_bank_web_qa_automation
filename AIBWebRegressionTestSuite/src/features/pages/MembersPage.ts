import { Page, Locator, expect } from '@playwright/test';

export class MembersPage {
    readonly page: Page;

    // Members Locators
    readonly membersMenu: Locator;
    readonly addNewMember: Locator;
    readonly customerType: Locator;
    readonly nic: Locator;
    readonly title: Locator;
    readonly fullNameEng: Locator;
    readonly initialNameEng: Locator;
    readonly addressEng: Locator;
    readonly gender: Locator;
    readonly dob: Locator;
    readonly memberDate: Locator;
    readonly marriedStatus: Locator;
    readonly mobile1: Locator;
    readonly city: Locator;
    readonly next: Locator;
    readonly occupation: Locator;
    readonly employer: Locator;
    readonly save: Locator;
    readonly approve: Locator;
    readonly approve2: Locator;


    constructor(page: Page) {
        this.page = page;

        // Members Locators
        this.membersMenu = page.getByRole('link', { name: 'Members' });
        this.addNewMember = page.getByRole('button', { name: 'Add New Member' });
        this.customerType = page.getByLabel('Customer Type *');
        this.nic = page.getByRole('textbox', { name: 'NIC *' });
        this.title = page.getByLabel('Title (English) *');
        this.fullNameEng = page.getByRole('textbox', { name: 'Full Name (English) *' });
        this.initialNameEng = page.getByRole('textbox', { name: 'Initial Name (English) *' });
        this.addressEng = page.getByRole('textbox', { name: 'Address (English) *' });
        this.gender = page.getByLabel('Gender *');
        this.dob = page.getByRole('textbox', { name: 'Date of Birth *' });
        this.memberDate = page.getByRole('textbox', { name: 'Member Date *' });
        this.marriedStatus = page.getByLabel('Married Status *');
        this.mobile1 = page.getByRole('textbox', { name: 'Mobile 1 *' });
        this.city = page.getByLabel('City *');
        this.next = page.getByRole('button', { name: 'Next' });
        this.occupation = page.getByRole('textbox', { name: 'Occupation' });
        this.employer = page.getByRole('textbox', { name: 'Employer' });
        this.save = page.getByRole('button', { name: 'Save' });
        this.approve = page.getByRole('button', { name: 'Approve' }).first();
        this.approve2 = page.getByRole('button', { name: 'Approve' });
    }

    // Members method
    async newMember(customerType: string, nic: string, title: string, fullNameEng: string, initialNameEng: string, addressEng: string, gender: string, dob: string, memberDate: string, marriedStatus: string, mobile1: string, city: string, occupation: string, employer: string, profileImage: string, signatureImage: string, nicImage: string) {
        await this.membersMenu.click();
        await this.addNewMember.click();
        await this.page.waitForTimeout(3000);
        await this.customerType.selectOption({ label: customerType });
        await this.nic.fill(nic);
        await this.title.selectOption({ label: title });
        await this.fullNameEng.fill(fullNameEng);
        await this.initialNameEng.fill(initialNameEng);
        await this.addressEng.fill(addressEng);
        await this.gender.selectOption({ label: gender });
        await this.dob.fill(dob);
        await this.memberDate.fill(memberDate);
        await this.marriedStatus.selectOption({ label: marriedStatus });
        await this.mobile1.fill(mobile1);
        await this.city.selectOption({ label: city });
        await this.page.waitForTimeout(3000);

        //Upload Profile Image
        const uploadProfileImage = this.page.getByRole('button', { name: 'Choose File' }).first();
        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            uploadProfileImage.click(),
        ]);
        await fileChooser.setFiles(profileImage);
        await this.page.waitForTimeout(3000);

        //Upload Signature Image
        const uploadSignatureImage = this.page.getByRole('button', { name: 'Choose File' }).nth(1);
        const [fileChooser2] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            uploadSignatureImage.click(),
        ]);
        await fileChooser2.setFiles(signatureImage);
        await this.page.waitForTimeout(3000);

        await this.next.click();
        await this.page.waitForTimeout(3000);

        await this.occupation.fill(occupation);
        await this.employer.fill(employer);
        await this.page.waitForTimeout(3000);

        //Upload NIC
        const uploadNIC = this.page.getByRole('button', { name: 'Choose File' });
        const [fileChooser3] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            uploadNIC.click(),
        ]);
        await fileChooser3.setFiles(nicImage);
        await this.page.waitForTimeout(3000);


        await this.save.click();
        await this.page.waitForTimeout(3000);
        await this.approve.click();
        await this.page.waitForTimeout(3000);

        await this.approve2.click();



    }




}