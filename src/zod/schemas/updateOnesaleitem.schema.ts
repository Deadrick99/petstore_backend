import { z } from 'zod';
import { saleitemUpdateInputObjectSchema } from './objects/saleitemUpdateInput.schema';
import { saleitemWhereUniqueInputObjectSchema } from './objects/saleitemWhereUniqueInput.schema';

export const saleitemUpdateOneSchema = z.object({
  data: saleitemUpdateInputObjectSchema,
  where: saleitemWhereUniqueInputObjectSchema,
});
