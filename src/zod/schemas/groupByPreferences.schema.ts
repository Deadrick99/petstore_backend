import { z } from 'zod';
import { PreferencesWhereInputObjectSchema } from './objects/PreferencesWhereInput.schema';
import { PreferencesOrderByWithAggregationInputObjectSchema } from './objects/PreferencesOrderByWithAggregationInput.schema';
import { PreferencesScalarWhereWithAggregatesInputObjectSchema } from './objects/PreferencesScalarWhereWithAggregatesInput.schema';
import { PreferencesScalarFieldEnumSchema } from './enums/PreferencesScalarFieldEnum.schema';

export const PreferencesGroupBySchema = z.object({
  where: PreferencesWhereInputObjectSchema.optional(),
  orderBy: PreferencesOrderByWithAggregationInputObjectSchema,
  having: PreferencesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PreferencesScalarFieldEnumSchema),
});
