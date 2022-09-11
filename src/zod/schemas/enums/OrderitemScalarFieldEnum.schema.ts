import { z } from 'zod';

export const OrderitemScalarFieldEnumSchema = z.enum([
  'PONUMBER',
  'ITEMID',
  'QUANTITY',
  'COST',
]);
