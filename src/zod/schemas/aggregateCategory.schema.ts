import { z } from 'zod';
import { CategoryWhereInputObjectSchema } from './objects/CategoryWhereInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './objects/CategoryOrderByWithRelationInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';

export const CategoryAggregateSchema = z.object({
  where: CategoryWhereInputObjectSchema.optional(),
  orderBy: CategoryOrderByWithRelationInputObjectSchema.optional(),
  cursor: CategoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
