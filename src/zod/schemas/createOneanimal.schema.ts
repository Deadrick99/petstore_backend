import { z } from 'zod';
import { animalCreateInputObjectSchema } from './objects/animalCreateInput.schema';

export const animalCreateOneSchema = z.object({
  data: animalCreateInputObjectSchema,
});
