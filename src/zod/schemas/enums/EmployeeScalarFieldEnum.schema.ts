import { z } from 'zod';

export const EmployeeScalarFieldEnumSchema = z.enum([
  'EMPLOYEEID',
  'LASTNAME',
  'FIRSTNAME',
  'PHONE',
  'ADDRESS',
  'ZIPCODE',
  'CITYID',
  'TAXPAYERID',
  'DATEHIRED',
  'DATERELEASED',
  'MANAGERID',
  'EMPLOYEELEVEL',
  'TITLE',
]);
