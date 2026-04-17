import { test } from '../fixtures/auth.fixture';
import { MembersPage } from '../features/pages/MembersPage';
import { TestData } from '../utils/testData';

test('TC08 - Create And Approve New Member', async ({ page }) => {
  const membersPage = new MembersPage(page);

 const { customerType, nic, title, fullNameEng, initialNameEng, addressEng, gender, dob, memberDate, marriedStatus, mobile1, city, occupation, employer, profileImage, signatureImage, nicImage} = TestData.members;
  
    await membersPage.newMember(customerType, nic, title, fullNameEng, initialNameEng, addressEng, gender, dob, memberDate, marriedStatus, mobile1, city, occupation, employer, profileImage, signatureImage, nicImage);    
    
  });
