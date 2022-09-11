import { z } from 'zod';
import { animalorderitemUpdateInputObjectSchema } from './objects/animalorderitemUpdateInput.schema';
import { animalorderitemWhereUniqueInputObjectSchema } from './objects/animalorderitemWhereUniqueInput.schema';

export const animalorderitemUpdateOneSchema = z.object({
  data: animalorderitemUpdateInputObjectSchema,
  where: animalorderitemWhereUniqueInputObjectSchema,
});
