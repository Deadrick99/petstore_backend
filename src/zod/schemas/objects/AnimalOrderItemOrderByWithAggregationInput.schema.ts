import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalOrderItemCountOrderByAggregateInputObjectSchema } from './AnimalOrderItemCountOrderByAggregateInput.schema';
import { AnimalOrderItemAvgOrderByAggregateInputObjectSchema } from './AnimalOrderItemAvgOrderByAggregateInput.schema';
import { AnimalOrderItemMaxOrderByAggregateInputObjectSchema } from './AnimalOrderItemMaxOrderByAggregateInput.schema';
import { AnimalOrderItemMinOrderByAggregateInputObjectSchema } from './AnimalOrderItemMinOrderByAggregateInput.schema';
import { AnimalOrderItemSumOrderByAggregateInputObjectSchema } from './AnimalOrderItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemOrderByWithAggregationInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AnimalOrderItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => AnimalOrderItemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AnimalOrderItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AnimalOrderItemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => AnimalOrderItemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalOrderItemOrderByWithAggregationInputObjectSchema = Schema;
