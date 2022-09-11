import { z } from 'zod';
import { categoryWhereInputObjectSchema } from './objects/categoryWhereInput.schema';

export const categoryDeleteManySchema = z.object({
  where: categoryWhereInputObjectSchema.optional(),
});
