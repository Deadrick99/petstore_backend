import { z } from 'zod';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
import { OrderItemOrderByWithRelationInputObjectSchema } from './objects/OrderItemOrderByWithRelationInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';
import { OrderItemScalarFieldEnumSchema } from './enums/OrderItemScalarFieldEnum.schema';

export const OrderItemFindFirstSchema = z.object({
  where: OrderItemWhereInputObjectSchema.optional(),
  orderBy: OrderItemOrderByWithRelationInputObjectSchema.optional(),
  cursor: OrderItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OrderItemScalarFieldEnumSchema).optional(),
});
