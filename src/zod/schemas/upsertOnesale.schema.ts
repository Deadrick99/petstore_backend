import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './objects/saleWhereUniqueInput.schema';
import { saleCreateInputObjectSchema } from './objects/saleCreateInput.schema';
import { saleUpdateInputObjectSchema } from './objects/saleUpdateInput.schema';

export const saleUpsertSchema = z.object({
  where: saleWhereUniqueInputObjectSchema,
  create: saleCreateInputObjectSchema,
  update: saleUpdateInputObjectSchema,
});
