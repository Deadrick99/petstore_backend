import { z } from 'zod';
import { saleitemWhereInputObjectSchema } from './objects/saleitemWhereInput.schema';
import { saleitemOrderByWithAggregationInputObjectSchema } from './objects/saleitemOrderByWithAggregationInput.schema';
import { saleitemScalarWhereWithAggregatesInputObjectSchema } from './objects/saleitemScalarWhereWithAggregatesInput.schema';
import { saleitemScalarFieldEnumSchema } from './enums/saleitemScalarFieldEnum.schema';

export const saleitemGroupBySchema = z.object({
  where: saleitemWhereInputObjectSchema.optional(),
  orderBy: saleitemOrderByWithAggregationInputObjectSchema,
  having: saleitemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(saleitemScalarFieldEnumSchema),
});
