import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierSumOrderByAggregateInput> = z
  .object({
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SupplierSumOrderByAggregateInputObjectSchema = Schema;
