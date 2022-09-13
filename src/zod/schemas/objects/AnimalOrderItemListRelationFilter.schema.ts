import { z } from 'zod';
import { AnimalOrderItemWhereInputObjectSchema } from './AnimalOrderItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemListRelationFilter> = z
  .object({
    every: z.lazy(() => AnimalOrderItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => AnimalOrderItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => AnimalOrderItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalOrderItemListRelationFilterObjectSchema = Schema;
