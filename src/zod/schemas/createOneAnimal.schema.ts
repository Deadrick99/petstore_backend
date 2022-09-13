import { z } from 'zod';
import { AnimalCreateInputObjectSchema } from './objects/AnimalCreateInput.schema';

export const AnimalCreateOneSchema = z.object({
  data: AnimalCreateInputObjectSchema,
});
