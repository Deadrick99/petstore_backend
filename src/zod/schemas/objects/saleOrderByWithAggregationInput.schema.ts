import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { saleCountOrderByAggregateInputObjectSchema } from './saleCountOrderByAggregateInput.schema';
import { saleAvgOrderByAggregateInputObjectSchema } from './saleAvgOrderByAggregateInput.schema';
import { saleMaxOrderByAggregateInputObjectSchema } from './saleMaxOrderByAggregateInput.schema';
import { saleMinOrderByAggregateInputObjectSchema } from './saleMinOrderByAggregateInput.schema';
import { saleSumOrderByAggregateInputObjectSchema } from './saleSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleOrderByWithAggregationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    SALEDATE: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    SALESTAX: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => saleCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => saleAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => saleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => saleMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => saleSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const saleOrderByWithAggregationInputObjectSchema = Schema;
