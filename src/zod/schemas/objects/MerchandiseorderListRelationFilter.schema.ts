import { z } from 'zod';
import { merchandiseorderWhereInputObjectSchema } from './merchandiseorderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseorderListRelationFilter> = z
  .object({
    every: z.lazy(() => merchandiseorderWhereInputObjectSchema).optional(),
    some: z.lazy(() => merchandiseorderWhereInputObjectSchema).optional(),
    none: z.lazy(() => merchandiseorderWhereInputObjectSchema).optional(),
  })
  .strict();

export const MerchandiseorderListRelationFilterObjectSchema = Schema;
