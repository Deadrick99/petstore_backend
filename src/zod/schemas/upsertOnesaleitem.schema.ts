import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './objects/saleitemWhereUniqueInput.schema';
import { saleitemCreateInputObjectSchema } from './objects/saleitemCreateInput.schema';
import { saleitemUpdateInputObjectSchema } from './objects/saleitemUpdateInput.schema';

export const saleitemUpsertSchema = z.object({
  where: saleitemWhereUniqueInputObjectSchema,
  create: saleitemCreateInputObjectSchema,
  update: saleitemUpdateInputObjectSchema,
});
