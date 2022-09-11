import { z } from 'zod';
import { animalorderitemWhereInputObjectSchema } from './objects/animalorderitemWhereInput.schema';

export const animalorderitemDeleteManySchema = z.object({
  where: animalorderitemWhereInputObjectSchema.optional(),
});
