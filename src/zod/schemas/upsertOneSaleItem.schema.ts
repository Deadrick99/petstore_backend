import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';
import { SaleItemCreateInputObjectSchema } from './objects/SaleItemCreateInput.schema';
import { SaleItemUpdateInputObjectSchema } from './objects/SaleItemUpdateInput.schema';

export const SaleItemUpsertSchema = z.object({
  where: SaleItemWhereUniqueInputObjectSchema,
  create: SaleItemCreateInputObjectSchema,
  update: SaleItemUpdateInputObjectSchema,
});
