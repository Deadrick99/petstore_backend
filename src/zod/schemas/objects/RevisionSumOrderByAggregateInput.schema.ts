import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RevisionSumOrderByAggregateInput> = z
  .object({
    REVISIONID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RevisionSumOrderByAggregateInputObjectSchema = Schema;
