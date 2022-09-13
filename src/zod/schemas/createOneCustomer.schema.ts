import { z } from 'zod';
import { CustomerCreateInputObjectSchema } from './objects/CustomerCreateInput.schema';

export const CustomerCreateOneSchema = z.object({
  data: CustomerCreateInputObjectSchema,
});
