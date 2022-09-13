import { z } from 'zod';
import { SaleCreateInputObjectSchema } from './objects/SaleCreateInput.schema';

export const SaleCreateOneSchema = z.object({
  data: SaleCreateInputObjectSchema,
});
