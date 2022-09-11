import { z } from 'zod';
import { orderitemCreateInputObjectSchema } from './objects/orderitemCreateInput.schema';

export const orderitemCreateOneSchema = z.object({
  data: orderitemCreateInputObjectSchema,
});
