import { z } from 'zod';
import { saleWhereInputObjectSchema } from './saleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleListRelationFilter> = z
  .object({
    every: z.lazy(() => saleWhereInputObjectSchema).optional(),
    some: z.lazy(() => saleWhereInputObjectSchema).optional(),
    none: z.lazy(() => saleWhereInputObjectSchema).optional(),
  })
  .strict();

export const SaleListRelationFilterObjectSchema = Schema;
