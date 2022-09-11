import { z } from 'zod';
import { supplierWhereInputObjectSchema } from './objects/supplierWhereInput.schema';

export const supplierDeleteManySchema = z.object({
  where: supplierWhereInputObjectSchema.optional(),
});
