import { z } from 'zod';
import { saleanimalWhereInputObjectSchema } from './objects/saleanimalWhereInput.schema';
import { saleanimalOrderByWithAggregationInputObjectSchema } from './objects/saleanimalOrderByWithAggregationInput.schema';
import { saleanimalScalarWhereWithAggregatesInputObjectSchema } from './objects/saleanimalScalarWhereWithAggregatesInput.schema';
import { saleanimalScalarFieldEnumSchema } from './enums/saleanimalScalarFieldEnum.schema';

export const saleanimalGroupBySchema = z.object({
  where: saleanimalWhereInputObjectSchema.optional(),
  orderBy: saleanimalOrderByWithAggregationInputObjectSchema,
  having: saleanimalScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(saleanimalScalarFieldEnumSchema),
});
