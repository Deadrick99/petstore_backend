import { z } from 'zod';
import { SupplierCreateInputObjectSchema } from './objects/SupplierCreateInput.schema';

export const SupplierCreateOneSchema = z.object({
  data: SupplierCreateInputObjectSchema,
});
