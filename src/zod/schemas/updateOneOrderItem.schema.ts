import { z } from 'zod';
import { OrderItemUpdateInputObjectSchema } from './objects/OrderItemUpdateInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemUpdateOneSchema = z.object({
  data: OrderItemUpdateInputObjectSchema,
  where: OrderItemWhereUniqueInputObjectSchema,
});
