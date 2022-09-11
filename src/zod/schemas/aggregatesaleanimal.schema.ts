import { z } from 'zod';
import { saleanimalWhereInputObjectSchema } from './objects/saleanimalWhereInput.schema';
import { saleanimalOrderByWithRelationInputObjectSchema } from './objects/saleanimalOrderByWithRelationInput.schema';
import { saleanimalWhereUniqueInputObjectSchema } from './objects/saleanimalWhereUniqueInput.schema';

export const saleanimalAggregateSchema = z.object({
  where: saleanimalWhereInputObjectSchema.optional(),
  orderBy: saleanimalOrderByWithRelationInputObjectSchema.optional(),
  cursor: saleanimalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
