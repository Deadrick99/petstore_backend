import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.revisionMinOrderByAggregateInput> = z
  .object({
    REVISIONID: z.lazy(() => SortOrderSchema).optional(),
    VERSION: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    AUTHOR: z.lazy(() => SortOrderSchema).optional(),
    RELEASEDATE: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const revisionMinOrderByAggregateInputObjectSchema = Schema;
