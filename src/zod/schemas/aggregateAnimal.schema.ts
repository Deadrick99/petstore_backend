import { z } from 'zod';
import { AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';
import { AnimalOrderByWithRelationInputObjectSchema } from './objects/AnimalOrderByWithRelationInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';

export const AnimalAggregateSchema = z.object({
  where: AnimalWhereInputObjectSchema.optional(),
  orderBy: AnimalOrderByWithRelationInputObjectSchema.optional(),
  cursor: AnimalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
