import { z } from 'zod';

export const AnimalOrderItemScalarFieldEnumSchema = z.enum([
  'ORDERID',
  'ANIMALID',
  'COST',
]);
