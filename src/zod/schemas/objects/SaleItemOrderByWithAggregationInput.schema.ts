import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SaleItemCountOrderByAggregateInputObjectSchema } from './SaleItemCountOrderByAggregateInput.schema';
import { SaleItemAvgOrderByAggregateInputObjectSchema } from './SaleItemAvgOrderByAggregateInput.schema';
import { SaleItemMaxOrderByAggregateInputObjectSchema } from './SaleItemMaxOrderByAggregateInput.schema';
import { SaleItemMinOrderByAggregateInputObjectSchema } from './SaleItemMinOrderByAggregateInput.schema';
import { SaleItemSumOrderByAggregateInputObjectSchema } from './SaleItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemOrderByWithAggregationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SaleItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SaleItemAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SaleItemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SaleItemMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SaleItemSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SaleItemOrderByWithAggregationInputObjectSchema = Schema;
