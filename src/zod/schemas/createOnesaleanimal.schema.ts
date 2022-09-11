import { z } from 'zod';
import { saleanimalCreateInputObjectSchema } from './objects/saleanimalCreateInput.schema';

export const saleanimalCreateOneSchema = z.object({
  data: saleanimalCreateInputObjectSchema,
});
