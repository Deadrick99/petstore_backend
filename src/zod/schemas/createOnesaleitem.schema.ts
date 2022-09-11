import { z } from 'zod';
import { saleitemCreateInputObjectSchema } from './objects/saleitemCreateInput.schema';

export const saleitemCreateOneSchema = z.object({
  data: saleitemCreateInputObjectSchema,
});
