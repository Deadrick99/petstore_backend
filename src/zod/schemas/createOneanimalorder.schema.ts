import { z } from 'zod';
import { animalorderCreateInputObjectSchema } from './objects/animalorderCreateInput.schema';

export const animalorderCreateOneSchema = z.object({
  data: animalorderCreateInputObjectSchema,
});
