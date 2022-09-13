import { z } from 'zod';

export const AutoNumberScalarFieldEnumSchema = z.enum([
  'TABLENAME',
  'KEYVALUE',
  'KEYINCREMENT',
]);
