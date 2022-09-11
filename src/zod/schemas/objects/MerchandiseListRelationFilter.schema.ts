import { z } from 'zod';
import { merchandiseWhereInputObjectSchema } from './merchandiseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseListRelationFilter> = z
  .object({
    every: z.lazy(() => merchandiseWhereInputObjectSchema).optional(),
    some: z.lazy(() => merchandiseWhereInputObjectSchema).optional(),
    none: z.lazy(() => merchandiseWhereInputObjectSchema).optional(),
  })
  .strict();

export const MerchandiseListRelationFilterObjectSchema = Schema;
