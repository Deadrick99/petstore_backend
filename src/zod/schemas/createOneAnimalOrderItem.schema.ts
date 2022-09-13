import { z } from 'zod';
import { AnimalOrderItemCreateInputObjectSchema } from './objects/AnimalOrderItemCreateInput.schema';

export const AnimalOrderItemCreateOneSchema = z.object({
  data: AnimalOrderItemCreateInputObjectSchema,
});
