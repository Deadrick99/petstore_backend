import { z } from 'zod';

export const CustomerAccountScalarFieldEnumSchema = z.enum([
  'ACCOUNTID',
  'CUSTOMERID',
  'BALANCE',
]);
