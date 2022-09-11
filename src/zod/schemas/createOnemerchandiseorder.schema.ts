import { z } from 'zod';
import { merchandiseorderCreateInputObjectSchema } from './objects/merchandiseorderCreateInput.schema';

export const merchandiseorderCreateOneSchema = z.object({
  data: merchandiseorderCreateInputObjectSchema,
});
