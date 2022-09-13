import { z } from 'zod';
import { AnimalOrderItemWhereInputObjectSchema } from './objects/AnimalOrderItemWhereInput.schema';

export const AnimalOrderItemDeleteManySchema = z.object({
  where: AnimalOrderItemWhereInputObjectSchema.optional(),
});
