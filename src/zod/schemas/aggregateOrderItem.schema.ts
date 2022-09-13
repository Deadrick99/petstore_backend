import { z } from 'zod';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
import { OrderItemOrderByWithRelationInputObjectSchema } from './objects/OrderItemOrderByWithRelationInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemAggregateSchema = z.object({
  where: OrderItemWhereInputObjectSchema.optional(),
  orderBy: OrderItemOrderByWithRelationInputObjectSchema.optional(),
  cursor: OrderItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
