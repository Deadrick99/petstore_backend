import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';

export const SupplierDeleteOneSchema = z.object({
  where: SupplierWhereUniqueInputObjectSchema,
});
