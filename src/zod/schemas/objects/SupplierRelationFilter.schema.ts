import { z } from 'zod';
import { supplierWhereInputObjectSchema } from './supplierWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierRelationFilter> = z
  .object({
    is: z
      .lazy(() => supplierWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => supplierWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SupplierRelationFilterObjectSchema = Schema;
