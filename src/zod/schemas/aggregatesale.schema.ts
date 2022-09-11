import { z } from 'zod';
import { saleWhereInputObjectSchema } from './objects/saleWhereInput.schema';
import { saleOrderByWithRelationInputObjectSchema } from './objects/saleOrderByWithRelationInput.schema';
import { saleWhereUniqueInputObjectSchema } from './objects/saleWhereUniqueInput.schema';

export const saleAggregateSchema = z.object({
  where: saleWhereInputObjectSchema.optional(),
  orderBy: saleOrderByWithRelationInputObjectSchema.optional(),
  cursor: saleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
