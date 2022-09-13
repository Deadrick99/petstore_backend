import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';
import { AnimalCreateInputObjectSchema } from './objects/AnimalCreateInput.schema';
import { AnimalUpdateInputObjectSchema } from './objects/AnimalUpdateInput.schema';

export const AnimalUpsertSchema = z.object({
  where: AnimalWhereUniqueInputObjectSchema,
  create: AnimalCreateInputObjectSchema,
  update: AnimalUpdateInputObjectSchema,
});
