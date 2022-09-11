import { z } from 'zod';
import { cityWhereInputObjectSchema } from './objects/cityWhereInput.schema';
import { cityOrderByWithAggregationInputObjectSchema } from './objects/cityOrderByWithAggregationInput.schema';
import { cityScalarWhereWithAggregatesInputObjectSchema } from './objects/cityScalarWhereWithAggregatesInput.schema';
import { cityScalarFieldEnumSchema } from './enums/cityScalarFieldEnum.schema';

export const cityGroupBySchema = z.object({
  where: cityWhereInputObjectSchema.optional(),
  orderBy: cityOrderByWithAggregationInputObjectSchema,
  having: cityScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(cityScalarFieldEnumSchema),
});
