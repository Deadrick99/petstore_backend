import { z } from 'zod';

export const SaleitemScalarFieldEnumSchema = z.enum([
  'SALEID',
  'ITEMID',
  'QUANTITY',
  'SALEPRICE',
]);
