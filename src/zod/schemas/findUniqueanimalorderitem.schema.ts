import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './objects/animalorderitemWhereUniqueInput.schema';

export const animalorderitemFindUniqueSchema = z.object({
  where: animalorderitemWhereUniqueInputObjectSchema,
});
