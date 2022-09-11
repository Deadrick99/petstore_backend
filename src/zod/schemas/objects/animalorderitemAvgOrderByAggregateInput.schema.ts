import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemAvgOrderByAggregateInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const animalorderitemAvgOrderByAggregateInputObjectSchema = Schema;
