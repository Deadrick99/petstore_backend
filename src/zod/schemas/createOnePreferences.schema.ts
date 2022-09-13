import { z } from 'zod';
import { PreferencesCreateInputObjectSchema } from './objects/PreferencesCreateInput.schema';

export const PreferencesCreateOneSchema = z.object({
  data: PreferencesCreateInputObjectSchema,
});
