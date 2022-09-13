import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './objects/AnimalOrderItemWhereUniqueInput.schema';

export const AnimalOrderItemDeleteOneSchema = z.object({
  where: AnimalOrderItemWhereUniqueInputObjectSchema,
});
