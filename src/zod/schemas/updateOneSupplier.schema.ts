import { z } from 'zod';
import { SupplierUpdateInputObjectSchema } from './objects/SupplierUpdateInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';

export const SupplierUpdateOneSchema = z.object({
  data: SupplierUpdateInputObjectSchema,
  where: SupplierWhereUniqueInputObjectSchema,
});
