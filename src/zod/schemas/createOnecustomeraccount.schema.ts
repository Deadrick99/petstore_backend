import { z } from 'zod';
import { customeraccountCreateInputObjectSchema } from './objects/customeraccountCreateInput.schema';

export const customeraccountCreateOneSchema = z.object({
  data: customeraccountCreateInputObjectSchema,
});
