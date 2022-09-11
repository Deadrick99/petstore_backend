import { z } from 'zod';
import { categoryUpdateManyMutationInputObjectSchema } from './objects/categoryUpdateManyMutationInput.schema';
import { categoryWhereInputObjectSchema } from './objects/categoryWhereInput.schema';

export const categoryUpdateManySchema = z.object({
  data: categoryUpdateManyMutationInputObjectSchema,
  where: categoryWhereInputObjectSchema.optional(),
});
