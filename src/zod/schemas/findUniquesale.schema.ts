import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './objects/saleWhereUniqueInput.schema';

export const saleFindUniqueSchema = z.object({
  where: saleWhereUniqueInputObjectSchema,
});
