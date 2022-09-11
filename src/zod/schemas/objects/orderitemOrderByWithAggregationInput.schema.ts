import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { orderitemCountOrderByAggregateInputObjectSchema } from './orderitemCountOrderByAggregateInput.schema';
import { orderitemAvgOrderByAggregateInputObjectSchema } from './orderitemAvgOrderByAggregateInput.schema';
import { orderitemMaxOrderByAggregateInputObjectSchema } from './orderitemMaxOrderByAggregateInput.schema';
import { orderitemMinOrderByAggregateInputObjectSchema } from './orderitemMinOrderByAggregateInput.schema';
import { orderitemSumOrderByAggregateInputObjectSchema } from './orderitemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemOrderByWithAggregationInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => orderitemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => orderitemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => orderitemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => orderitemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => orderitemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const orderitemOrderByWithAggregationInputObjectSchema = Schema;
