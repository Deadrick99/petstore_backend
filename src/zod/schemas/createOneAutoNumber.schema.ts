import { z } from 'zod';
import { AutoNumberCreateInputObjectSchema } from './objects/AutoNumberCreateInput.schema';

export const AutoNumberCreateOneSchema = z.object({
  data: AutoNumberCreateInputObjectSchema,
});
