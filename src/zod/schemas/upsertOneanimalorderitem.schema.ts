import { z } from 'zod';
import { animalorderitemWhereUniqueInputObjectSchema } from './objects/animalorderitemWhereUniqueInput.schema';
import { animalorderitemCreateInputObjectSchema } from './objects/animalorderitemCreateInput.schema';
import { animalorderitemUpdateInputObjectSchema } from './objects/animalorderitemUpdateInput.schema';

export const animalorderitemUpsertSchema = z.object({
  where: animalorderitemWhereUniqueInputObjectSchema,
  create: animalorderitemCreateInputObjectSchema,
  update: animalorderitemUpdateInputObjectSchema,
});
