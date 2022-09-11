import { z } from 'zod';
import { orderitemWhereInputObjectSchema } from './orderitemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderitemListRelationFilter> = z
  .object({
    every: z.lazy(() => orderitemWhereInputObjectSchema).optional(),
    some: z.lazy(() => orderitemWhereInputObjectSchema).optional(),
    none: z.lazy(() => orderitemWhereInputObjectSchema).optional(),
  })
  .strict();

export const OrderitemListRelationFilterObjectSchema = Schema;
