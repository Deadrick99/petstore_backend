import { z } from 'zod';
import { saleitemWhereInputObjectSchema } from './objects/saleitemWhereInput.schema';

export const saleitemDeleteManySchema = z.object({
  where: saleitemWhereInputObjectSchema.optional(),
});
