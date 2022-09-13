import { z } from 'zod';
import { AnimalOrderCreateInputObjectSchema } from './objects/AnimalOrderCreateInput.schema';

export const AnimalOrderCreateOneSchema = z.object({
  data: AnimalOrderCreateInputObjectSchema,
});
