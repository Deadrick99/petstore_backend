import { z } from 'zod';
import { supplierWhereUniqueInputObjectSchema } from './objects/supplierWhereUniqueInput.schema';

export const supplierFindUniqueSchema = z.object({
  where: supplierWhereUniqueInputObjectSchema,
});
