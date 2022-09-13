import { z } from 'zod';

export const OrderItemScalarFieldEnumSchema = z.enum([
  'PONUMBER',
  'ITEMID',
  'QUANTITY',
  'COST',
]);
