import { z } from 'zod';
import { SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';

export const SupplierDeleteManySchema = z.object({
  where: SupplierWhereInputObjectSchema.optional(),
});
