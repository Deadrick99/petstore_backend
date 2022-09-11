import { z } from 'zod';
import { merchandiseCreateInputObjectSchema } from './objects/merchandiseCreateInput.schema';

export const merchandiseCreateOneSchema = z.object({
  data: merchandiseCreateInputObjectSchema,
});
