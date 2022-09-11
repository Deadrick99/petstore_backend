import { z } from 'zod';
import { supplierUpdateInputObjectSchema } from './objects/supplierUpdateInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './objects/supplierWhereUniqueInput.schema';

export const supplierUpdateOneSchema = z.object({
  data: supplierUpdateInputObjectSchema,
  where: supplierWhereUniqueInputObjectSchema,
});
