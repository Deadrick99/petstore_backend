import { z } from 'zod';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
import { OrderItemOrderByWithAggregationInputObjectSchema } from './objects/OrderItemOrderByWithAggregationInput.schema';
import { OrderItemScalarWhereWithAggregatesInputObjectSchema } from './objects/OrderItemScalarWhereWithAggregatesInput.schema';
import { OrderItemScalarFieldEnumSchema } from './enums/OrderItemScalarFieldEnum.schema';

export const OrderItemGroupBySchema = z.object({
  where: OrderItemWhereInputObjectSchema.optional(),
  orderBy: OrderItemOrderByWithAggregationInputObjectSchema,
  having: OrderItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(OrderItemScalarFieldEnumSchema),
});
