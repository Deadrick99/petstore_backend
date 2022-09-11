import { z } from 'zod';

export const SaleScalarFieldEnumSchema = z.enum([
  'SALEID',
  'SALEDATE',
  'EMPLOYEEID',
  'CUSTOMERID',
  'SALESTAX',
]);
