import { z } from 'zod';
import { CustomerAccountWhereInputObjectSchema } from './objects/CustomerAccountWhereInput.schema';
import { CustomerAccountOrderByWithAggregationInputObjectSchema } from './objects/CustomerAccountOrderByWithAggregationInput.schema';
import { CustomerAccountScalarWhereWithAggregatesInputObjectSchema } from './objects/CustomerAccountScalarWhereWithAggregatesInput.schema';
import { CustomerAccountScalarFieldEnumSchema } from './enums/CustomerAccountScalarFieldEnum.schema';

export const CustomerAccountGroupBySchema = z.object({
  where: CustomerAccountWhereInputObjectSchema.optional(),
  orderBy: CustomerAccountOrderByWithAggregationInputObjectSchema,
  having: CustomerAccountScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CustomerAccountScalarFieldEnumSchema),
});
