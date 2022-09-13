import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';
import { SupplierCreateInputObjectSchema } from './objects/SupplierCreateInput.schema';
import { SupplierUpdateInputObjectSchema } from './objects/SupplierUpdateInput.schema';

export const SupplierUpsertSchema = z.object({
  where: SupplierWhereUniqueInputObjectSchema,
  create: SupplierCreateInputObjectSchema,
  update: SupplierUpdateInputObjectSchema,
});
