import { z } from 'zod';

export const AutonumberScalarFieldEnumSchema = z.enum([
  'TABLENAME',
  'KEYVALUE',
  'KEYINCREMENT',
]);
