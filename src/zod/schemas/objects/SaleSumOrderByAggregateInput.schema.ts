import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleSumOrderByAggregateInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    SALESTAX: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SaleSumOrderByAggregateInputObjectSchema = Schema;
