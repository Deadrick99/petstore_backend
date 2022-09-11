import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './objects/saleitemWhereUniqueInput.schema';

export const saleitemDeleteOneSchema = z.object({
  where: saleitemWhereUniqueInputObjectSchema,
});
