import { z } from 'zod';
import { SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';
import { SaleItemOrderByWithAggregationInputObjectSchema } from './objects/SaleItemOrderByWithAggregationInput.schema';
import { SaleItemScalarWhereWithAggregatesInputObjectSchema } from './objects/SaleItemScalarWhereWithAggregatesInput.schema';
import { SaleItemScalarFieldEnumSchema } from './enums/SaleItemScalarFieldEnum.schema';

export const SaleItemGroupBySchema = z.object({
  where: SaleItemWhereInputObjectSchema.optional(),
  orderBy: SaleItemOrderByWithAggregationInputObjectSchema,
  having: SaleItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SaleItemScalarFieldEnumSchema),
});
