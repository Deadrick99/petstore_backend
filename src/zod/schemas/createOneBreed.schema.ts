import { z } from 'zod';
import { BreedCreateInputObjectSchema } from './objects/BreedCreateInput.schema';

export const BreedCreateOneSchema = z.object({
  data: BreedCreateInputObjectSchema,
});
