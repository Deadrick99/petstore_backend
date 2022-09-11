import { z } from 'zod';
import { supplierWhereInputObjectSchema } from './objects/supplierWhereInput.schema';
import { supplierOrderByWithAggregationInputObjectSchema } from './objects/supplierOrderByWithAggregationInput.schema';
import { supplierScalarWhereWithAggregatesInputObjectSchema } from './objects/supplierScalarWhereWithAggregatesInput.schema';
import { supplierScalarFieldEnumSchema } from './enums/supplierScalarFieldEnum.schema';

export const supplierGroupBySchema = z.object({
  where: supplierWhereInputObjectSchema.optional(),
  orderBy: supplierOrderByWithAggregationInputObjectSchema,
  having: supplierScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(supplierScalarFieldEnumSchema),
});
