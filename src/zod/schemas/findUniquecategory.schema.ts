import { z } from 'zod';
import { categoryWhereUniqueInputObjectSchema } from './objects/categoryWhereUniqueInput.schema';

export const categoryFindUniqueSchema = z.object({
  where: categoryWhereUniqueInputObjectSchema,
});
