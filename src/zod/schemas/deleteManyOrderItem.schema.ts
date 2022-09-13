import { z } from 'zod';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';

export const OrderItemDeleteManySchema = z.object({
  where: OrderItemWhereInputObjectSchema.optional(),
});
