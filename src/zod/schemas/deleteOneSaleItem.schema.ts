import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';

export const SaleItemDeleteOneSchema = z.object({
  where: SaleItemWhereUniqueInputObjectSchema,
});
