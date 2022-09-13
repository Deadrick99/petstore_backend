import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';

export const SaleItemFindUniqueSchema = z.object({
  where: SaleItemWhereUniqueInputObjectSchema,
});
