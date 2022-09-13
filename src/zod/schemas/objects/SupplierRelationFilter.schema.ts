import { z } from 'zod';
import { SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierRelationFilter> = z
  .object({
    is: z
      .lazy(() => SupplierWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SupplierWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SupplierRelationFilterObjectSchema = Schema;
