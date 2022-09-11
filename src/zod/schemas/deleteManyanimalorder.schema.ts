import { z } from 'zod';
import { animalorderWhereInputObjectSchema } from './objects/animalorderWhereInput.schema';

export const animalorderDeleteManySchema = z.object({
  where: animalorderWhereInputObjectSchema.optional(),
});
