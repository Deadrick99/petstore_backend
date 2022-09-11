import { z } from 'zod';
import { supplierUpdateManyMutationInputObjectSchema } from './objects/supplierUpdateManyMutationInput.schema';
import { supplierWhereInputObjectSchema } from './objects/supplierWhereInput.schema';

export const supplierUpdateManySchema = z.object({
  data: supplierUpdateManyMutationInputObjectSchema,
  where: supplierWhereInputObjectSchema.optional(),
});
