import { z } from 'zod';

export const SaleAnimalScalarFieldEnumSchema = z.enum([
  'SALEID',
  'ANIMALID',
  'SALEPRICE',
]);
