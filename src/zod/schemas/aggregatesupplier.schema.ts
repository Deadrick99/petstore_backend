import { z } from 'zod';
import { supplierWhereInputObjectSchema } from './objects/supplierWhereInput.schema';
import { supplierOrderByWithRelationInputObjectSchema } from './objects/supplierOrderByWithRelationInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './objects/supplierWhereUniqueInput.schema';

export const supplierAggregateSchema = z.object({
  where: supplierWhereInputObjectSchema.optional(),
  orderBy: supplierOrderByWithRelationInputObjectSchema.optional(),
  cursor: supplierWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
