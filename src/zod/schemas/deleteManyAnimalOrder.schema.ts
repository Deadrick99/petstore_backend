import { z } from 'zod';
import { AnimalOrderWhereInputObjectSchema } from './objects/AnimalOrderWhereInput.schema';

export const AnimalOrderDeleteManySchema = z.object({
  where: AnimalOrderWhereInputObjectSchema.optional(),
});
