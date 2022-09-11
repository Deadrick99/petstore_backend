import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { merchandiseCountOrderByAggregateInputObjectSchema } from './merchandiseCountOrderByAggregateInput.schema';
import { merchandiseAvgOrderByAggregateInputObjectSchema } from './merchandiseAvgOrderByAggregateInput.schema';
import { merchandiseMaxOrderByAggregateInputObjectSchema } from './merchandiseMaxOrderByAggregateInput.schema';
import { merchandiseMinOrderByAggregateInputObjectSchema } from './merchandiseMinOrderByAggregateInput.schema';
import { merchandiseSumOrderByAggregateInputObjectSchema } from './merchandiseSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseOrderByWithAggregationInput> = z
  .object({
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    QUANTITYONHAND: z.lazy(() => SortOrderSchema).optional(),
    LISTPRICE: z.lazy(() => SortOrderSchema).optional(),
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => merchandiseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => merchandiseAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => merchandiseMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => merchandiseMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => merchandiseSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const merchandiseOrderByWithAggregationInputObjectSchema = Schema;
