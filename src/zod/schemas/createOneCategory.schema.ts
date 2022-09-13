import { z } from 'zod';
import { CategoryCreateInputObjectSchema } from './objects/CategoryCreateInput.schema';

export const CategoryCreateOneSchema = z.object({
  data: CategoryCreateInputObjectSchema,
});
