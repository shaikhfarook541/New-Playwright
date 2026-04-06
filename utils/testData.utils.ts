import { faker } from '@faker-js/faker';

/**
 * Utility function to generate random first names
 */
export function firstName(firstName?: string): string {
  return firstName || faker.person.firstName();
}

/**
 * Utility function to generate random last names
 */
export function lastName(lastName?: string): string {
  return lastName || faker.person.lastName();
}

/**
 * Generate random admission date (today to 30 days from now)
 */
export function todaysDate(): string {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // months are 0-based
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Generate random email
 */
export function randomEmail(): string {
  return faker.internet.email();
}

/**
 * Get random admission type
 */
export function getRandomAdmissionType(): string {
  const types = ['Emergency', 'Scheduled', 'Urgent', 'Planned', 'Walk-in'];
  return types[Math.floor(Math.random() * types.length)];
}

/**
 * Get random reason for admission
 */
export function getRandomReasonForAdmission(): string {
  const reasons = ['Fever', 'Fracture', 'Surgery', 'Chest Pain', 'Respiratory Issues', 'Injury', 'Post-Op Care', 'Acute Illness', 'Observation', 'Treatment'];
  return reasons[Math.floor(Math.random() * reasons.length)];
}

/**
 * Get random physician name
 */
export function getRandomPhysicianName(): string {
  const physicians = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Davis', 'Dr. Miller', 'Dr. Wilson', 'Dr. Moore', 'Dr. Taylor', 'Dr. Anderson'];
  return physicians[Math.floor(Math.random() * physicians.length)];
}

/**
 * Get random room number
 */
export function getRandomRoomNumber(): string {
  return 'Room ' + Math.floor(Math.random() * 500 + 100);
}

/**
 * Get random ward/department
 */
export function getRandomWardDepartment(): string {
  const wards = ['ICU', 'General Ward', 'Cardiac Unit', 'Pediatrics', 'Orthopedics', 'Neurology', 'Emergency', 'Surgery', 'Oncology', 'Maternity'];
  return wards[Math.floor(Math.random() * wards.length)];
}

