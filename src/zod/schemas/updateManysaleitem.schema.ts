import { z } from 'zod';
import { saleitemUpdateManyMutationInputObjectSchema } from './objects/saleitemUpdateManyMutationInput.schema';
import { saleitemWhereInputObjectSchema } from './objects/saleitemWhereInput.schema';

export const saleitemUpdateManySchema = z.object({
  data: saleitemUpdateManyMutationInputObjectSchema,
  where: saleitemWhereInputObjectSchema.optional(),
});
