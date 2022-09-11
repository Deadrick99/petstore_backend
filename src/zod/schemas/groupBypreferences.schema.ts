import { z } from 'zod';
import { preferencesWhereInputObjectSchema } from './objects/preferencesWhereInput.schema';
import { preferencesOrderByWithAggregationInputObjectSchema } from './objects/preferencesOrderByWithAggregationInput.schema';
import { preferencesScalarWhereWithAggregatesInputObjectSchema } from './objects/preferencesScalarWhereWithAggregatesInput.schema';
import { preferencesScalarFieldEnumSchema } from './enums/preferencesScalarFieldEnum.schema';

export const preferencesGroupBySchema = z.object({
  where: preferencesWhereInputObjectSchema.optional(),
  orderBy: preferencesOrderByWithAggregationInputObjectSchema,
  having: preferencesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(preferencesScalarFieldEnumSchema),
});
