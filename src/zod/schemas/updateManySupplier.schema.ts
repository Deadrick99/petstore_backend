import { z } from 'zod';
import { SupplierUpdateManyMutationInputObjectSchema } from './objects/SupplierUpdateManyMutationInput.schema';
import { SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';

export const SupplierUpdateManySchema = z.object({
  data: SupplierUpdateManyMutationInputObjectSchema,
  where: SupplierWhereInputObjectSchema.optional(),
});
