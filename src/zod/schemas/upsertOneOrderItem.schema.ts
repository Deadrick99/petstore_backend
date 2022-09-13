import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';
import { OrderItemCreateInputObjectSchema } from './objects/OrderItemCreateInput.schema';
import { OrderItemUpdateInputObjectSchema } from './objects/OrderItemUpdateInput.schema';

export const OrderItemUpsertSchema = z.object({
  where: OrderItemWhereUniqueInputObjectSchema,
  create: OrderItemCreateInputObjectSchema,
  update: OrderItemUpdateInputObjectSchema,
});
