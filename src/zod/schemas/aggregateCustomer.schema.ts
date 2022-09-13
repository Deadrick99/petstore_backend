import { z } from 'zod';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './objects/CustomerOrderByWithRelationInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';

export const CustomerAggregateSchema = z.object({
  where: CustomerWhereInputObjectSchema.optional(),
  orderBy: CustomerOrderByWithRelationInputObjectSchema.optional(),
  cursor: CustomerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
