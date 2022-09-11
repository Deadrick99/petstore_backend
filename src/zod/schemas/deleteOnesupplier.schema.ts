import { z } from 'zod';
import { supplierWhereUniqueInputObjectSchema } from './objects/supplierWhereUniqueInput.schema';

export const supplierDeleteOneSchema = z.object({
  where: supplierWhereUniqueInputObjectSchema,
});
