import { z } from 'zod';
import { animalUpdateManyMutationInputObjectSchema } from './objects/animalUpdateManyMutationInput.schema';
import { animalWhereInputObjectSchema } from './objects/animalWhereInput.schema';

export const animalUpdateManySchema = z.object({
  data: animalUpdateManyMutationInputObjectSchema,
  where: animalWhereInputObjectSchema.optional(),
});
