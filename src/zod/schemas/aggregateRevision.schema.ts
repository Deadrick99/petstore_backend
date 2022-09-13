import { z } from 'zod';
import { RevisionWhereInputObjectSchema } from './objects/RevisionWhereInput.schema';
import { RevisionOrderByWithRelationInputObjectSchema } from './objects/RevisionOrderByWithRelationInput.schema';
import { RevisionWhereUniqueInputObjectSchema } from './objects/RevisionWhereUniqueInput.schema';

export const RevisionAggregateSchema = z.object({
  where: RevisionWhereInputObjectSchema.optional(),
  orderBy: RevisionOrderByWithRelationInputObjectSchema.optional(),
  cursor: RevisionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
