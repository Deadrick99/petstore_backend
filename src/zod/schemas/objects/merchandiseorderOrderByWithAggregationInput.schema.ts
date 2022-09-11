import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { merchandiseorderCountOrderByAggregateInputObjectSchema } from './merchandiseorderCountOrderByAggregateInput.schema';
import { merchandiseorderAvgOrderByAggregateInputObjectSchema } from './merchandiseorderAvgOrderByAggregateInput.schema';
import { merchandiseorderMaxOrderByAggregateInputObjectSchema } from './merchandiseorderMaxOrderByAggregateInput.schema';
import { merchandiseorderMinOrderByAggregateInputObjectSchema } from './merchandiseorderMinOrderByAggregateInput.schema';
import { merchandiseorderSumOrderByAggregateInputObjectSchema } from './merchandiseorderSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderOrderByWithAggregationInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    ORDERDATE: z.lazy(() => SortOrderSchema).optional(),
    RECEIVEDATE: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => merchandiseorderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => merchandiseorderAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => merchandiseorderMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => merchandiseorderMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => merchandiseorderSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const merchandiseorderOrderByWithAggregationInputObjectSchema = Schema;
