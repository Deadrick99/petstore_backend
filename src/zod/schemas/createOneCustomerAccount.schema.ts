import { z } from 'zod';
import { CustomerAccountCreateInputObjectSchema } from './objects/CustomerAccountCreateInput.schema';

export const CustomerAccountCreateOneSchema = z.object({
  data: CustomerAccountCreateInputObjectSchema,
});
