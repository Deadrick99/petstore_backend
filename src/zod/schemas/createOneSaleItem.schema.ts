import { z } from 'zod';
import { SaleItemCreateInputObjectSchema } from './objects/SaleItemCreateInput.schema';

export const SaleItemCreateOneSchema = z.object({
  data: SaleItemCreateInputObjectSchema,
});
