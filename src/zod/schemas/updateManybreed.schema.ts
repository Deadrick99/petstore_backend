import { z } from 'zod';
import { breedUpdateManyMutationInputObjectSchema } from './objects/breedUpdateManyMutationInput.schema';
import { breedWhereInputObjectSchema } from './objects/breedWhereInput.schema';

export const breedUpdateManySchema = z.object({
  data: breedUpdateManyMutationInputObjectSchema,
  where: breedWhereInputObjectSchema.optional(),
});
