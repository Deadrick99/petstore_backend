import { z } from 'zod';

export const SaleanimalScalarFieldEnumSchema = z.enum([
  'SALEID',
  'ANIMALID',
  'SALEPRICE',
]);
