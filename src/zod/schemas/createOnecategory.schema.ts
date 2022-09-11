import { z } from 'zod';
import { categoryCreateInputObjectSchema } from './objects/categoryCreateInput.schema';

export const categoryCreateOneSchema = z.object({
  data: categoryCreateInputObjectSchema,
});
