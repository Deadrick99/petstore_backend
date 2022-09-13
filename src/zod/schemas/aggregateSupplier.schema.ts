import { z } from 'zod';
import { SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';
import { SupplierOrderByWithRelationInputObjectSchema } from './objects/SupplierOrderByWithRelationInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';

export const SupplierAggregateSchema = z.object({
  where: SupplierWhereInputObjectSchema.optional(),
  orderBy: SupplierOrderByWithRelationInputObjectSchema.optional(),
  cursor: SupplierWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
