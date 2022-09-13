import { z } from 'zod';
import { AnimalUpdateManyMutationInputObjectSchema } from './objects/AnimalUpdateManyMutationInput.schema';
import { AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';

export const AnimalUpdateManySchema = z.object({
  data: AnimalUpdateManyMutationInputObjectSchema,
  where: AnimalWhereInputObjectSchema.optional(),
});
