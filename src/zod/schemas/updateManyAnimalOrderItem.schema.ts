import { z } from 'zod';
import { AnimalOrderItemUpdateManyMutationInputObjectSchema } from './objects/AnimalOrderItemUpdateManyMutationInput.schema';
import { AnimalOrderItemWhereInputObjectSchema } from './objects/AnimalOrderItemWhereInput.schema';

export const AnimalOrderItemUpdateManySchema = z.object({
  data: AnimalOrderItemUpdateManyMutationInputObjectSchema,
  where: AnimalOrderItemWhereInputObjectSchema.optional(),
});
