import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './objects/AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemCreateInputObjectSchema } from './objects/AnimalOrderItemCreateInput.schema';
import { AnimalOrderItemUpdateInputObjectSchema } from './objects/AnimalOrderItemUpdateInput.schema';

export const AnimalOrderItemUpsertSchema = z.object({
  where: AnimalOrderItemWhereUniqueInputObjectSchema,
  create: AnimalOrderItemCreateInputObjectSchema,
  update: AnimalOrderItemUpdateInputObjectSchema,
});
