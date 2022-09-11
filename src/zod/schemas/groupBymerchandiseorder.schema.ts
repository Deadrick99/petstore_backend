import { z } from 'zod';
import { merchandiseorderWhereInputObjectSchema } from './objects/merchandiseorderWhereInput.schema';
import { merchandiseorderOrderByWithAggregationInputObjectSchema } from './objects/merchandiseorderOrderByWithAggregationInput.schema';
import { merchandiseorderScalarWhereWithAggregatesInputObjectSchema } from './objects/merchandiseorderScalarWhereWithAggregatesInput.schema';
import { merchandiseorderScalarFieldEnumSchema } from './enums/merchandiseorderScalarFieldEnum.schema';

export const merchandiseorderGroupBySchema = z.object({
  where: merchandiseorderWhereInputObjectSchema.optional(),
  orderBy: merchandiseorderOrderByWithAggregationInputObjectSchema,
  having: merchandiseorderScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(merchandiseorderScalarFieldEnumSchema),
});
