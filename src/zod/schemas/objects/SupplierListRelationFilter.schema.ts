import { z } from 'zod';
import { SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierListRelationFilter> = z
  .object({
    every: z.lazy(() => SupplierWhereInputObjectSchema).optional(),
    some: z.lazy(() => SupplierWhereInputObjectSchema).optional(),
    none: z.lazy(() => SupplierWhereInputObjectSchema).optional(),
  })
  .strict();

export const SupplierListRelationFilterObjectSchema = Schema;
