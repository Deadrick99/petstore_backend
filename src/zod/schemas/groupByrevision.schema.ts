import { z } from 'zod';
import { revisionWhereInputObjectSchema } from './objects/revisionWhereInput.schema';
import { revisionOrderByWithAggregationInputObjectSchema } from './objects/revisionOrderByWithAggregationInput.schema';
import { revisionScalarWhereWithAggregatesInputObjectSchema } from './objects/revisionScalarWhereWithAggregatesInput.schema';
import { revisionScalarFieldEnumSchema } from './enums/revisionScalarFieldEnum.schema';

export const revisionGroupBySchema = z.object({
  where: revisionWhereInputObjectSchema.optional(),
  orderBy: revisionOrderByWithAggregationInputObjectSchema,
  having: revisionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(revisionScalarFieldEnumSchema),
});
