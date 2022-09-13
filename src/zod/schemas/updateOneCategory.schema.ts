import { z } from 'zod';
import { CategoryUpdateInputObjectSchema } from './objects/CategoryUpdateInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';

export const CategoryUpdateOneSchema = z.object({
  data: CategoryUpdateInputObjectSchema,
  where: CategoryWhereUniqueInputObjectSchema,
});
