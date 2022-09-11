import { z } from 'zod';
import { saleitemWhereInputObjectSchema } from './saleitemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleitemListRelationFilter> = z
  .object({
    every: z.lazy(() => saleitemWhereInputObjectSchema).optional(),
    some: z.lazy(() => saleitemWhereInputObjectSchema).optional(),
    none: z.lazy(() => saleitemWhereInputObjectSchema).optional(),
  })
  .strict();

export const SaleitemListRelationFilterObjectSchema = Schema;
