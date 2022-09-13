import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './objects/AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderCreateInputObjectSchema } from './objects/AnimalOrderCreateInput.schema';
import { AnimalOrderUpdateInputObjectSchema } from './objects/AnimalOrderUpdateInput.schema';

export const AnimalOrderUpsertSchema = z.object({
  where: AnimalOrderWhereUniqueInputObjectSchema,
  create: AnimalOrderCreateInputObjectSchema,
  update: AnimalOrderUpdateInputObjectSchema,
});
