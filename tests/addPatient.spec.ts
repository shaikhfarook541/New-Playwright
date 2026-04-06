import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PatientPage } from '../pages/patient.page';
import { DashboardPage } from '../pages/dashboard.page';
import { PhysicianPage } from '../pages/physician.page';
import { LogoutPage } from '../pages/logout.page';
import * as testDataUtils from '../utils/testData.utils';


test('Add multiple patients', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const patientPage = new PatientPage(page);
    const physicianPage = new PhysicianPage(page);
    const dashboardPage = new DashboardPage(page);
    const logoutPage = new LogoutPage(page);

    // Step 1: Login
    await loginPage.login('pbiswas', 'Simplify!12345');

    await dashboardPage.clickAdd();
    await dashboardPage.clickAddPatient();

    // Step 2: Add first patient
    await patientPage.enterFirstName(testDataUtils.firstName());
    await patientPage.enterLastName(testDataUtils.lastName());

    // Step 3: Add contact information
    await patientPage.contactinformation();
    await patientPage.email(testDataUtils.randomEmail());

    // Step 4: Add admission information
    await patientPage.clickAdmissionInformationTab();
    await patientPage.selectFacility('again');
    await patientPage.fillAdmissionDate(testDataUtils.todaysDate());

    

});
