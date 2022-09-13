import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemAvgOrderByAggregateInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SaleItemAvgOrderByAggregateInputObjectSchema = Schema;
