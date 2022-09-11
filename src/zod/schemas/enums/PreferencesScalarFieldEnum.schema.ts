import { z } from 'zod';

export const PreferencesScalarFieldEnumSchema = z.enum([
  'KEYID',
  'VALUE',
  'DESCRIPTION',
]);
