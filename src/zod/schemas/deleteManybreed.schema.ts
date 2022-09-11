import { z } from 'zod';
import { breedWhereInputObjectSchema } from './objects/breedWhereInput.schema';

export const breedDeleteManySchema = z.object({
  where: breedWhereInputObjectSchema.optional(),
});
