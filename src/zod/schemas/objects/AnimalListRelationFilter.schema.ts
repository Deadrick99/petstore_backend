import { z } from 'zod';
import { AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalListRelationFilter> = z
  .object({
    every: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
    some: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
    none: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalListRelationFilterObjectSchema = Schema;
