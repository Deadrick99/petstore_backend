import { z } from 'zod';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './objects/AnimalOrderItemWhereUniqueInput.schema';

export const AnimalOrderItemFindUniqueSchema = z.object({
  where: AnimalOrderItemWhereUniqueInputObjectSchema,
});
