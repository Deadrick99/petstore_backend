import { z } from 'zod';
import { merchandiseWhereInputObjectSchema } from './objects/merchandiseWhereInput.schema';
import { merchandiseOrderByWithAggregationInputObjectSchema } from './objects/merchandiseOrderByWithAggregationInput.schema';
import { merchandiseScalarWhereWithAggregatesInputObjectSchema } from './objects/merchandiseScalarWhereWithAggregatesInput.schema';
import { merchandiseScalarFieldEnumSchema } from './enums/merchandiseScalarFieldEnum.schema';

export const merchandiseGroupBySchema = z.object({
  where: merchandiseWhereInputObjectSchema.optional(),
  orderBy: merchandiseOrderByWithAggregationInputObjectSchema,
  having: merchandiseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(merchandiseScalarFieldEnumSchema),
});
