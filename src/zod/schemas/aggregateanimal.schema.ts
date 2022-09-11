import { z } from 'zod';
import { animalWhereInputObjectSchema } from './objects/animalWhereInput.schema';
import { animalOrderByWithRelationInputObjectSchema } from './objects/animalOrderByWithRelationInput.schema';
import { animalWhereUniqueInputObjectSchema } from './objects/animalWhereUniqueInput.schema';

export const animalAggregateSchema = z.object({
  where: animalWhereInputObjectSchema.optional(),
  orderBy: animalOrderByWithRelationInputObjectSchema.optional(),
  cursor: animalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
