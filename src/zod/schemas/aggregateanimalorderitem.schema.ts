import { z } from 'zod';
import { animalorderitemWhereInputObjectSchema } from './objects/animalorderitemWhereInput.schema';
import { animalorderitemOrderByWithRelationInputObjectSchema } from './objects/animalorderitemOrderByWithRelationInput.schema';
import { animalorderitemWhereUniqueInputObjectSchema } from './objects/animalorderitemWhereUniqueInput.schema';

export const animalorderitemAggregateSchema = z.object({
  where: animalorderitemWhereInputObjectSchema.optional(),
  orderBy: animalorderitemOrderByWithRelationInputObjectSchema.optional(),
  cursor: animalorderitemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
