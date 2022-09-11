import { z } from 'zod';
import { saleWhereInputObjectSchema } from './saleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleRelationFilter> = z
  .object({
    is: z.lazy(() => saleWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => saleWhereInputObjectSchema).optional(),
  })
  .strict();

export const SaleRelationFilterObjectSchema = Schema;
