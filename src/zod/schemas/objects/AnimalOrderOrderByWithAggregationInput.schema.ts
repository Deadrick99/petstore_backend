import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalOrderCountOrderByAggregateInputObjectSchema } from './AnimalOrderCountOrderByAggregateInput.schema';
import { AnimalOrderAvgOrderByAggregateInputObjectSchema } from './AnimalOrderAvgOrderByAggregateInput.schema';
import { AnimalOrderMaxOrderByAggregateInputObjectSchema } from './AnimalOrderMaxOrderByAggregateInput.schema';
import { AnimalOrderMinOrderByAggregateInputObjectSchema } from './AnimalOrderMinOrderByAggregateInput.schema';
import { AnimalOrderSumOrderByAggregateInputObjectSchema } from './AnimalOrderSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderOrderByWithAggregationInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ORDERDATE: z.lazy(() => SortOrderSchema).optional(),
    RECEIVEDATE: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AnimalOrderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => AnimalOrderAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AnimalOrderMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AnimalOrderMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => AnimalOrderSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalOrderOrderByWithAggregationInputObjectSchema = Schema;
