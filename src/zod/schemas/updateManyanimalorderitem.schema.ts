import { z } from 'zod';
import { animalorderitemUpdateManyMutationInputObjectSchema } from './objects/animalorderitemUpdateManyMutationInput.schema';
import { animalorderitemWhereInputObjectSchema } from './objects/animalorderitemWhereInput.schema';

export const animalorderitemUpdateManySchema = z.object({
  data: animalorderitemUpdateManyMutationInputObjectSchema,
  where: animalorderitemWhereInputObjectSchema.optional(),
});
