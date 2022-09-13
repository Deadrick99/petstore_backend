import { z } from 'zod';
import { OrderItemUpdateManyMutationInputObjectSchema } from './objects/OrderItemUpdateManyMutationInput.schema';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';

export const OrderItemUpdateManySchema = z.object({
  data: OrderItemUpdateManyMutationInputObjectSchema,
  where: OrderItemWhereInputObjectSchema.optional(),
});
