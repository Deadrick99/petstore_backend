import { z } from 'zod';
import { preferencesCreateInputObjectSchema } from './objects/preferencesCreateInput.schema';

export const preferencesCreateOneSchema = z.object({
  data: preferencesCreateInputObjectSchema,
});
