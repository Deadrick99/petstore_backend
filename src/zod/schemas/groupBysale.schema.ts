import { z } from 'zod';
import { saleWhereInputObjectSchema } from './objects/saleWhereInput.schema';
import { saleOrderByWithAggregationInputObjectSchema } from './objects/saleOrderByWithAggregationInput.schema';
import { saleScalarWhereWithAggregatesInputObjectSchema } from './objects/saleScalarWhereWithAggregatesInput.schema';
import { saleScalarFieldEnumSchema } from './enums/saleScalarFieldEnum.schema';

export const saleGroupBySchema = z.object({
  where: saleWhereInputObjectSchema.optional(),
  orderBy: saleOrderByWithAggregationInputObjectSchema,
  having: saleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(saleScalarFieldEnumSchema),
});
