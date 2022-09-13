import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AutoNumberSumOrderByAggregateInput> = z
  .object({
    KEYVALUE: z.lazy(() => SortOrderSchema).optional(),
    KEYINCREMENT: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AutoNumberSumOrderByAggregateInputObjectSchema = Schema;
