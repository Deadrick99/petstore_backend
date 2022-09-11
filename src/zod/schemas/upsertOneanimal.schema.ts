import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './objects/animalWhereUniqueInput.schema';
import { animalCreateInputObjectSchema } from './objects/animalCreateInput.schema';
import { animalUpdateInputObjectSchema } from './objects/animalUpdateInput.schema';

export const animalUpsertSchema = z.object({
  where: animalWhereUniqueInputObjectSchema,
  create: animalCreateInputObjectSchema,
  update: animalUpdateInputObjectSchema,
});
