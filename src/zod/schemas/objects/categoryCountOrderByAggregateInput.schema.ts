import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCountOrderByAggregateInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    REGISTRATION: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const categoryCountOrderByAggregateInputObjectSchema = Schema;
