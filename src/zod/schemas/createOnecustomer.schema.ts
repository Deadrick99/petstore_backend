import { z } from 'zod';
import { customerCreateInputObjectSchema } from './objects/customerCreateInput.schema';

export const customerCreateOneSchema = z.object({
  data: customerCreateInputObjectSchema,
});
