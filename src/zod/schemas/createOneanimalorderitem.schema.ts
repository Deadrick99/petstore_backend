import { z } from 'zod';
import { animalorderitemCreateInputObjectSchema } from './objects/animalorderitemCreateInput.schema';

export const animalorderitemCreateOneSchema = z.object({
  data: animalorderitemCreateInputObjectSchema,
});
