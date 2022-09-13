import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleCreateInputObjectSchema } from './objects/SaleCreateInput.schema';
import { SaleUpdateInputObjectSchema } from './objects/SaleUpdateInput.schema';

export const SaleUpsertSchema = z.object({
  where: SaleWhereUniqueInputObjectSchema,
  create: SaleCreateInputObjectSchema,
  update: SaleUpdateInputObjectSchema,
});
