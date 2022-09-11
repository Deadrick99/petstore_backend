import { z } from 'zod';
import { supplierCreateInputObjectSchema } from './objects/supplierCreateInput.schema';

export const supplierCreateOneSchema = z.object({
  data: supplierCreateInputObjectSchema,
});
