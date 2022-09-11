import { z } from 'zod';
import { animalorderWhereInputObjectSchema } from './objects/animalorderWhereInput.schema';
import { animalorderOrderByWithRelationInputObjectSchema } from './objects/animalorderOrderByWithRelationInput.schema';
import { animalorderWhereUniqueInputObjectSchema } from './objects/animalorderWhereUniqueInput.schema';

export const animalorderAggregateSchema = z.object({
  where: animalorderWhereInputObjectSchema.optional(),
  orderBy: animalorderOrderByWithRelationInputObjectSchema.optional(),
  cursor: animalorderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
