import { z } from 'zod';
import { CategoryWhereInputObjectSchema } from './objects/CategoryWhereInput.schema';
import { CategoryOrderByWithAggregationInputObjectSchema } from './objects/CategoryOrderByWithAggregationInput.schema';
import { CategoryScalarWhereWithAggregatesInputObjectSchema } from './objects/CategoryScalarWhereWithAggregatesInput.schema';
import { CategoryScalarFieldEnumSchema } from './enums/CategoryScalarFieldEnum.schema';

export const CategoryGroupBySchema = z.object({
  where: CategoryWhereInputObjectSchema.optional(),
  orderBy: CategoryOrderByWithAggregationInputObjectSchema,
  having: CategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CategoryScalarFieldEnumSchema),
});
