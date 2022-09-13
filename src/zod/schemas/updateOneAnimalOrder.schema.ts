import { z } from 'zod';
import { AnimalOrderUpdateInputObjectSchema } from './objects/AnimalOrderUpdateInput.schema';
import { AnimalOrderWhereUniqueInputObjectSchema } from './objects/AnimalOrderWhereUniqueInput.schema';

export const AnimalOrderUpdateOneSchema = z.object({
  data: AnimalOrderUpdateInputObjectSchema,
  where: AnimalOrderWhereUniqueInputObjectSchema,
});
