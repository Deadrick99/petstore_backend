import { z } from 'zod';
import { saleWhereInputObjectSchema } from './objects/saleWhereInput.schema';

export const saleDeleteManySchema = z.object({
  where: saleWhereInputObjectSchema.optional(),
});
