import { z } from 'zod';
import { orderitemWhereInputObjectSchema } from './objects/orderitemWhereInput.schema';
import { orderitemOrderByWithAggregationInputObjectSchema } from './objects/orderitemOrderByWithAggregationInput.schema';
import { orderitemScalarWhereWithAggregatesInputObjectSchema } from './objects/orderitemScalarWhereWithAggregatesInput.schema';
import { orderitemScalarFieldEnumSchema } from './enums/orderitemScalarFieldEnum.schema';

export const orderitemGroupBySchema = z.object({
  where: orderitemWhereInputObjectSchema.optional(),
  orderBy: orderitemOrderByWithAggregationInputObjectSchema,
  having: orderitemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(orderitemScalarFieldEnumSchema),
});
