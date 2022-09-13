import { z } from 'zod';
import { SaleAnimalCreateInputObjectSchema } from './objects/SaleAnimalCreateInput.schema';

export const SaleAnimalCreateOneSchema = z.object({
  data: SaleAnimalCreateInputObjectSchema,
});
