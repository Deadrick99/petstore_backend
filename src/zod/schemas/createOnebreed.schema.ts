import { z } from 'zod';
import { breedCreateInputObjectSchema } from './objects/breedCreateInput.schema';

export const breedCreateOneSchema = z.object({
  data: breedCreateInputObjectSchema,
});
