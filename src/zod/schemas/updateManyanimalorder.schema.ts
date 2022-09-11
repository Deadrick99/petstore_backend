import { z } from 'zod';
import { animalorderUpdateManyMutationInputObjectSchema } from './objects/animalorderUpdateManyMutationInput.schema';
import { animalorderWhereInputObjectSchema } from './objects/animalorderWhereInput.schema';

export const animalorderUpdateManySchema = z.object({
  data: animalorderUpdateManyMutationInputObjectSchema,
  where: animalorderWhereInputObjectSchema.optional(),
});
