import { z } from 'zod';
import { saleUpdateInputObjectSchema } from './objects/saleUpdateInput.schema';
import { saleWhereUniqueInputObjectSchema } from './objects/saleWhereUniqueInput.schema';

export const saleUpdateOneSchema = z.object({
  data: saleUpdateInputObjectSchema,
  where: saleWhereUniqueInputObjectSchema,
});
