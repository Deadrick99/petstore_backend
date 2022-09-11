import { z } from 'zod';
import { customerWhereInputObjectSchema } from './objects/customerWhereInput.schema';
import { customerOrderByWithAggregationInputObjectSchema } from './objects/customerOrderByWithAggregationInput.schema';
import { customerScalarWhereWithAggregatesInputObjectSchema } from './objects/customerScalarWhereWithAggregatesInput.schema';
import { customerScalarFieldEnumSchema } from './enums/customerScalarFieldEnum.schema';

export const customerGroupBySchema = z.object({
  where: customerWhereInputObjectSchema.optional(),
  orderBy: customerOrderByWithAggregationInputObjectSchema,
  having: customerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(customerScalarFieldEnumSchema),
});
