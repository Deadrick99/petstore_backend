import { z } from 'zod';
import { SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';
import { SaleItemOrderByWithRelationInputObjectSchema } from './objects/SaleItemOrderByWithRelationInput.schema';
import { SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';

export const SaleItemAggregateSchema = z.object({
  where: SaleItemWhereInputObjectSchema.optional(),
  orderBy: SaleItemOrderByWithRelationInputObjectSchema.optional(),
  cursor: SaleItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
