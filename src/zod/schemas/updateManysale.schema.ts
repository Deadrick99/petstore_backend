import { z } from 'zod';
import { saleUpdateManyMutationInputObjectSchema } from './objects/saleUpdateManyMutationInput.schema';
import { saleWhereInputObjectSchema } from './objects/saleWhereInput.schema';

export const saleUpdateManySchema = z.object({
  data: saleUpdateManyMutationInputObjectSchema,
  where: saleWhereInputObjectSchema.optional(),
});
