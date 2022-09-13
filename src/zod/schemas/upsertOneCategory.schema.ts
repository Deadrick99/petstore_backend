import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';
import { CategoryCreateInputObjectSchema } from './objects/CategoryCreateInput.schema';
import { CategoryUpdateInputObjectSchema } from './objects/CategoryUpdateInput.schema';

export const CategoryUpsertSchema = z.object({
  where: CategoryWhereUniqueInputObjectSchema,
  create: CategoryCreateInputObjectSchema,
  update: CategoryUpdateInputObjectSchema,
});
