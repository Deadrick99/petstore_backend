import { z } from 'zod';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';
import { CustomerOrderByWithAggregationInputObjectSchema } from './objects/CustomerOrderByWithAggregationInput.schema';
import { CustomerScalarWhereWithAggregatesInputObjectSchema } from './objects/CustomerScalarWhereWithAggregatesInput.schema';
import { CustomerScalarFieldEnumSchema } from './enums/CustomerScalarFieldEnum.schema';

export const CustomerGroupBySchema = z.object({
  where: CustomerWhereInputObjectSchema.optional(),
  orderBy: CustomerOrderByWithAggregationInputObjectSchema,
  having: CustomerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CustomerScalarFieldEnumSchema),
});
