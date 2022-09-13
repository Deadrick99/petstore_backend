import { z } from 'zod';
import { OrderItemCreateInputObjectSchema } from './objects/OrderItemCreateInput.schema';

export const OrderItemCreateOneSchema = z.object({
  data: OrderItemCreateInputObjectSchema,
});
