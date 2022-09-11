import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.preferencesCountOrderByAggregateInput> = z
  .object({
    KEYID: z.lazy(() => SortOrderSchema).optional(),
    VALUE: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const preferencesCountOrderByAggregateInputObjectSchema = Schema;
