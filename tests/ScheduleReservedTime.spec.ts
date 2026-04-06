import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { reservedtime } from '../pages/reservedtime';
import { LogoutPage } from '../pages/logout.page';
import * as testData from '../utils/testData.utils';


test.describe('Reserved Time Scheduling', () => {
  test('should schedule reserved time successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const reservedTimePage = new reservedtime(page);
    const dashboardPage = new DashboardPage(page); const today = new Date();

    // Format as mm/dd/yyyy
    const formattedDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')
      }/${today.getFullYear()}`;

    console.log(formattedDate);
    await loginPage.login('pbiswas', 'Simplify!12345');
    await dashboardPage.clickAdd();
    // Click "Schedule Reserved Time"
    await reservedTimePage.clickScheduleReservedTime();
    // Fill event title
    await reservedTimePage.eventTitle('Automation Test Event');
    // Select start date (currently hardcoded to 31 in your class)
    await reservedTimePage.startDate(formattedDate);
    // Select end date
    await reservedTimePage.endDate(formattedDate);
    // Select start time
    await reservedTimePage.startTime('05:00 PM');
    // Select end time
    await reservedTimePage.endTime('06:00 PM');
    // Select physician
    await reservedTimePage.physician('Hilll, Minnie');
    // Save reserved time
    await reservedTimePage.saveReservedTime();
  
  });
});