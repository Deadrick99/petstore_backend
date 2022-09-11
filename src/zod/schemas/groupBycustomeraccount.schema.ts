import { z } from 'zod';
import { customeraccountWhereInputObjectSchema } from './objects/customeraccountWhereInput.schema';
import { customeraccountOrderByWithAggregationInputObjectSchema } from './objects/customeraccountOrderByWithAggregationInput.schema';
import { customeraccountScalarWhereWithAggregatesInputObjectSchema } from './objects/customeraccountScalarWhereWithAggregatesInput.schema';
import { customeraccountScalarFieldEnumSchema } from './enums/customeraccountScalarFieldEnum.schema';

export const customeraccountGroupBySchema = z.object({
  where: customeraccountWhereInputObjectSchema.optional(),
  orderBy: customeraccountOrderByWithAggregationInputObjectSchema,
  having: customeraccountScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(customeraccountScalarFieldEnumSchema),
});
