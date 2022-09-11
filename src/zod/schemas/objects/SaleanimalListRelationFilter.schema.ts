import { z } from 'zod';
import { saleanimalWhereInputObjectSchema } from './saleanimalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleanimalListRelationFilter> = z
  .object({
    every: z.lazy(() => saleanimalWhereInputObjectSchema).optional(),
    some: z.lazy(() => saleanimalWhereInputObjectSchema).optional(),
    none: z.lazy(() => saleanimalWhereInputObjectSchema).optional(),
  })
  .strict();

export const SaleanimalListRelationFilterObjectSchema = Schema;
