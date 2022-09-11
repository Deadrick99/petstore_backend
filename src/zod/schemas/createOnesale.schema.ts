import { z } from 'zod';
import { saleCreateInputObjectSchema } from './objects/saleCreateInput.schema';

export const saleCreateOneSchema = z.object({
  data: saleCreateInputObjectSchema,
});
