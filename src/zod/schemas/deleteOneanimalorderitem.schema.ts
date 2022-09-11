import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './objects/animalorderitemWhereUniqueInput.schema';

export const animalorderitemDeleteOneSchema = z.object({
  where: animalorderitemWhereUniqueInputObjectSchema,
});
