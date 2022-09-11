import { z } from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum([
  'CUSTOMERID',
  'PHONE',
  'FIRSTNAME',
  'LASTNAME',
  'ADDRESS',
  'ZIPCODE',
  'CITYID',
]);
