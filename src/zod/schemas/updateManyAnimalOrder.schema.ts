import { z } from 'zod';
import { AnimalOrderUpdateManyMutationInputObjectSchema } from './objects/AnimalOrderUpdateManyMutationInput.schema';
import { AnimalOrderWhereInputObjectSchema } from './objects/AnimalOrderWhereInput.schema';

export const AnimalOrderUpdateManySchema = z.object({
  data: AnimalOrderUpdateManyMutationInputObjectSchema,
  where: AnimalOrderWhereInputObjectSchema.optional(),
});
