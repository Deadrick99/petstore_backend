import { z } from 'zod';
import { AnimalOrderWhereInputObjectSchema } from './AnimalOrderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderListRelationFilter> = z
  .object({
    every: z.lazy(() => AnimalOrderWhereInputObjectSchema).optional(),
    some: z.lazy(() => AnimalOrderWhereInputObjectSchema).optional(),
    none: z.lazy(() => AnimalOrderWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalOrderListRelationFilterObjectSchema = Schema;
