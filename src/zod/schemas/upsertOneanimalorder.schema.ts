import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './objects/animalorderWhereUniqueInput.schema';
import { animalorderCreateInputObjectSchema } from './objects/animalorderCreateInput.schema';
import { animalorderUpdateInputObjectSchema } from './objects/animalorderUpdateInput.schema';

export const animalorderUpsertSchema = z.object({
  where: animalorderWhereUniqueInputObjectSchema,
  create: animalorderCreateInputObjectSchema,
  update: animalorderUpdateInputObjectSchema,
});
