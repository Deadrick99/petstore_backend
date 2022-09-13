import { z } from 'zod';
import { SaleItemUpdateInputObjectSchema } from './objects/SaleItemUpdateInput.schema';
import { SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';

export const SaleItemUpdateOneSchema = z.object({
  data: SaleItemUpdateInputObjectSchema,
  where: SaleItemWhereUniqueInputObjectSchema,
});
