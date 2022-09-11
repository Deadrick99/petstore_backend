import { z } from 'zod';
import { categoryWhereInputObjectSchema } from './objects/categoryWhereInput.schema';
import { categoryOrderByWithAggregationInputObjectSchema } from './objects/categoryOrderByWithAggregationInput.schema';
import { categoryScalarWhereWithAggregatesInputObjectSchema } from './objects/categoryScalarWhereWithAggregatesInput.schema';
import { categoryScalarFieldEnumSchema } from './enums/categoryScalarFieldEnum.schema';

export const categoryGroupBySchema = z.object({
  where: categoryWhereInputObjectSchema.optional(),
  orderBy: categoryOrderByWithAggregationInputObjectSchema,
  having: categoryScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(categoryScalarFieldEnumSchema),
});
