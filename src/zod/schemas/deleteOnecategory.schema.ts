import { z } from 'zod';
import { categoryWhereUniqueInputObjectSchema } from './objects/categoryWhereUniqueInput.schema';

export const categoryDeleteOneSchema = z.object({
  where: categoryWhereUniqueInputObjectSchema,
});
