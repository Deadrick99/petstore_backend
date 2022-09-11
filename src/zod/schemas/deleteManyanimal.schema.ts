import { z } from 'zod';
import { animalWhereInputObjectSchema } from './objects/animalWhereInput.schema';

export const animalDeleteManySchema = z.object({
  where: animalWhereInputObjectSchema.optional(),
});
