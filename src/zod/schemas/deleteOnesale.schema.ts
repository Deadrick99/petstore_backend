import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './objects/saleWhereUniqueInput.schema';

export const saleDeleteOneSchema = z.object({
  where: saleWhereUniqueInputObjectSchema,
});
