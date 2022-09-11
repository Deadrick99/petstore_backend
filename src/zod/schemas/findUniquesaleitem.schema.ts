import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './objects/saleitemWhereUniqueInput.schema';

export const saleitemFindUniqueSchema = z.object({
  where: saleitemWhereUniqueInputObjectSchema,
});
