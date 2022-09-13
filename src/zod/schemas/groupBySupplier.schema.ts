import { z } from 'zod';
import { SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';
import { SupplierOrderByWithAggregationInputObjectSchema } from './objects/SupplierOrderByWithAggregationInput.schema';
import { SupplierScalarWhereWithAggregatesInputObjectSchema } from './objects/SupplierScalarWhereWithAggregatesInput.schema';
import { SupplierScalarFieldEnumSchema } from './enums/SupplierScalarFieldEnum.schema';

export const SupplierGroupBySchema = z.object({
  where: SupplierWhereInputObjectSchema.optional(),
  orderBy: SupplierOrderByWithAggregationInputObjectSchema,
  having: SupplierScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SupplierScalarFieldEnumSchema),
});
