import { z } from 'zod';
import { categoryWhereInputObjectSchema } from './objects/categoryWhereInput.schema';
import { categoryOrderByWithRelationInputObjectSchema } from './objects/categoryOrderByWithRelationInput.schema';
import { categoryWhereUniqueInputObjectSchema } from './objects/categoryWhereUniqueInput.schema';

export const categoryAggregateSchema = z.object({
  where: categoryWhereInputObjectSchema.optional(),
  orderBy: categoryOrderByWithRelationInputObjectSchema.optional(),
  cursor: categoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
