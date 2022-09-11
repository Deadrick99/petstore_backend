import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './objects/animalWhereUniqueInput.schema';

export const animalFindUniqueSchema = z.object({
  where: animalWhereUniqueInputObjectSchema,
});
