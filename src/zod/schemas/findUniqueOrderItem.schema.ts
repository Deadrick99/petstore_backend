import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemFindUniqueSchema = z.object({
  where: OrderItemWhereUniqueInputObjectSchema,
});
