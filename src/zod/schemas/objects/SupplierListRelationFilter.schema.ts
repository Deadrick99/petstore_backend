import { z } from 'zod';
import { supplierWhereInputObjectSchema } from './supplierWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierListRelationFilter> = z
  .object({
    every: z.lazy(() => supplierWhereInputObjectSchema).optional(),
    some: z.lazy(() => supplierWhereInputObjectSchema).optional(),
    none: z.lazy(() => supplierWhereInputObjectSchema).optional(),
  })
  .strict();

export const SupplierListRelationFilterObjectSchema = Schema;
