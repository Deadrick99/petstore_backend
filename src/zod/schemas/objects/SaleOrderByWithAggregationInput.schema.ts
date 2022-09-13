import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SaleCountOrderByAggregateInputObjectSchema } from './SaleCountOrderByAggregateInput.schema';
import { SaleAvgOrderByAggregateInputObjectSchema } from './SaleAvgOrderByAggregateInput.schema';
import { SaleMaxOrderByAggregateInputObjectSchema } from './SaleMaxOrderByAggregateInput.schema';
import { SaleMinOrderByAggregateInputObjectSchema } from './SaleMinOrderByAggregateInput.schema';
import { SaleSumOrderByAggregateInputObjectSchema } from './SaleSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleOrderByWithAggregationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    SALEDATE: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    SALESTAX: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SaleCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => SaleAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SaleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SaleMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SaleSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SaleOrderByWithAggregationInputObjectSchema = Schema;
