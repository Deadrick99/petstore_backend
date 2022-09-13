import { z } from 'zod';
import { AnimalOrderItemUpdateInputObjectSchema } from './objects/AnimalOrderItemUpdateInput.schema';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './objects/AnimalOrderItemWhereUniqueInput.schema';

export const AnimalOrderItemUpdateOneSchema = z.object({
  data: AnimalOrderItemUpdateInputObjectSchema,
  where: AnimalOrderItemWhereUniqueInputObjectSchema,
});
