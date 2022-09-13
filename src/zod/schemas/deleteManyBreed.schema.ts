import { z } from 'zod';
import { BreedWhereInputObjectSchema } from './objects/BreedWhereInput.schema';

export const BreedDeleteManySchema = z.object({
  where: BreedWhereInputObjectSchema.optional(),
});
