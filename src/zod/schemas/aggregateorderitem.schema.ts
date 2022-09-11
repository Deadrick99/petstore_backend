import { z } from 'zod';
import { orderitemWhereInputObjectSchema } from './objects/orderitemWhereInput.schema';
import { orderitemOrderByWithRelationInputObjectSchema } from './objects/orderitemOrderByWithRelationInput.schema';
import { orderitemWhereUniqueInputObjectSchema } from './objects/orderitemWhereUniqueInput.schema';

export const orderitemAggregateSchema = z.object({
  where: orderitemWhereInputObjectSchema.optional(),
  orderBy: orderitemOrderByWithRelationInputObjectSchema.optional(),
  cursor: orderitemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
