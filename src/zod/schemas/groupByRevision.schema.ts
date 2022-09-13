import { z } from 'zod';
import { RevisionWhereInputObjectSchema } from './objects/RevisionWhereInput.schema';
import { RevisionOrderByWithAggregationInputObjectSchema } from './objects/RevisionOrderByWithAggregationInput.schema';
import { RevisionScalarWhereWithAggregatesInputObjectSchema } from './objects/RevisionScalarWhereWithAggregatesInput.schema';
import { RevisionScalarFieldEnumSchema } from './enums/RevisionScalarFieldEnum.schema';

export const RevisionGroupBySchema = z.object({
  where: RevisionWhereInputObjectSchema.optional(),
  orderBy: RevisionOrderByWithAggregationInputObjectSchema,
  having: RevisionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RevisionScalarFieldEnumSchema),
});
