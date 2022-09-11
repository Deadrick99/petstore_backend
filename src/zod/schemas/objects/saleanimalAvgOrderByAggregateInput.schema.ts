import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalAvgOrderByAggregateInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const saleanimalAvgOrderByAggregateInputObjectSchema = Schema;
