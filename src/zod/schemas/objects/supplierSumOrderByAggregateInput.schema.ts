import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierSumOrderByAggregateInput> = z
  .object({
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const supplierSumOrderByAggregateInputObjectSchema = Schema;
