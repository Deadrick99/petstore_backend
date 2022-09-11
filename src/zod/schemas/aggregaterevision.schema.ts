import { z } from 'zod';
import { revisionWhereInputObjectSchema } from './objects/revisionWhereInput.schema';
import { revisionOrderByWithRelationInputObjectSchema } from './objects/revisionOrderByWithRelationInput.schema';
import { revisionWhereUniqueInputObjectSchema } from './objects/revisionWhereUniqueInput.schema';

export const revisionAggregateSchema = z.object({
  where: revisionWhereInputObjectSchema.optional(),
  orderBy: revisionOrderByWithRelationInputObjectSchema.optional(),
  cursor: revisionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
