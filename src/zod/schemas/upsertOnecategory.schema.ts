import { z } from 'zod';
import { categoryWhereUniqueInputObjectSchema } from './objects/categoryWhereUniqueInput.schema';
import { categoryCreateInputObjectSchema } from './objects/categoryCreateInput.schema';
import { categoryUpdateInputObjectSchema } from './objects/categoryUpdateInput.schema';

export const categoryUpsertSchema = z.object({
  where: categoryWhereUniqueInputObjectSchema,
  create: categoryCreateInputObjectSchema,
  update: categoryUpdateInputObjectSchema,
});
