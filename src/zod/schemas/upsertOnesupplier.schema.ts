import { z } from 'zod';
import { supplierWhereUniqueInputObjectSchema } from './objects/supplierWhereUniqueInput.schema';
import { supplierCreateInputObjectSchema } from './objects/supplierCreateInput.schema';
import { supplierUpdateInputObjectSchema } from './objects/supplierUpdateInput.schema';

export const supplierUpsertSchema = z.object({
  where: supplierWhereUniqueInputObjectSchema,
  create: supplierCreateInputObjectSchema,
  update: supplierUpdateInputObjectSchema,
});
