import { z } from 'zod';

export const SaleItemScalarFieldEnumSchema = z.enum([
  'SALEID',
  'ITEMID',
  'QUANTITY',
  'SALEPRICE',
]);
