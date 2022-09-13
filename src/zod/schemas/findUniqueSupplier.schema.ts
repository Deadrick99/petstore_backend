import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';

export const SupplierFindUniqueSchema = z.object({
  where: SupplierWhereUniqueInputObjectSchema,
});
