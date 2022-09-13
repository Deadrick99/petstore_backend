import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemDeleteOneSchema = z.object({
  where: OrderItemWhereUniqueInputObjectSchema,
});
