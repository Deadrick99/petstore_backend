import { z } from 'zod';
import { cityCreateInputObjectSchema } from './objects/cityCreateInput.schema';

export const cityCreateOneSchema = z.object({
  data: cityCreateInputObjectSchema,
});
