import { z } from 'zod';
import { SaleUpdateInputObjectSchema } from './objects/SaleUpdateInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';

export const SaleUpdateOneSchema = z.object({
  data: SaleUpdateInputObjectSchema,
  where: SaleWhereUniqueInputObjectSchema,
});
