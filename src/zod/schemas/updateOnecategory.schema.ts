import { z } from 'zod';
import { categoryUpdateInputObjectSchema } from './objects/categoryUpdateInput.schema';
import { categoryWhereUniqueInputObjectSchema } from './objects/categoryWhereUniqueInput.schema';

export const categoryUpdateOneSchema = z.object({
  data: categoryUpdateInputObjectSchema,
  where: categoryWhereUniqueInputObjectSchema,
});
