import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { saleitemCountOrderByAggregateInputObjectSchema } from './saleitemCountOrderByAggregateInput.schema';
import { saleitemAvgOrderByAggregateInputObjectSchema } from './saleitemAvgOrderByAggregateInput.schema';
import { saleitemMaxOrderByAggregateInputObjectSchema } from './saleitemMaxOrderByAggregateInput.schema';
import { saleitemMinOrderByAggregateInputObjectSchema } from './saleitemMinOrderByAggregateInput.schema';
import { saleitemSumOrderByAggregateInputObjectSchema } from './saleitemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemOrderByWithAggregationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => saleitemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => saleitemAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => saleitemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => saleitemMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => saleitemSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const saleitemOrderByWithAggregationInputObjectSchema = Schema;
