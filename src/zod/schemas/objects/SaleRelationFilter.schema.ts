import { z } from 'zod';
import { SaleWhereInputObjectSchema } from './SaleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleRelationFilter> = z
  .object({
    is: z.lazy(() => SaleWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => SaleWhereInputObjectSchema).optional(),
  })
  .strict();

export const SaleRelationFilterObjectSchema = Schema;
