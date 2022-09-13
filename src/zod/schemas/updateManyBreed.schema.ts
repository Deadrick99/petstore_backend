import { z } from 'zod';
import { BreedUpdateManyMutationInputObjectSchema } from './objects/BreedUpdateManyMutationInput.schema';
import { BreedWhereInputObjectSchema } from './objects/BreedWhereInput.schema';

export const BreedUpdateManySchema = z.object({
  data: BreedUpdateManyMutationInputObjectSchema,
  where: BreedWhereInputObjectSchema.optional(),
});
