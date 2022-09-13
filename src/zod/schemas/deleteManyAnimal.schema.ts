import { z } from 'zod';
import { AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';

export const AnimalDeleteManySchema = z.object({
  where: AnimalWhereInputObjectSchema.optional(),
});
