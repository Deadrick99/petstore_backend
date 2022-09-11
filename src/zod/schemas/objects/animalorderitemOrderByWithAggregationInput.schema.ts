import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { animalorderitemCountOrderByAggregateInputObjectSchema } from './animalorderitemCountOrderByAggregateInput.schema';
import { animalorderitemAvgOrderByAggregateInputObjectSchema } from './animalorderitemAvgOrderByAggregateInput.schema';
import { animalorderitemMaxOrderByAggregateInputObjectSchema } from './animalorderitemMaxOrderByAggregateInput.schema';
import { animalorderitemMinOrderByAggregateInputObjectSchema } from './animalorderitemMinOrderByAggregateInput.schema';
import { animalorderitemSumOrderByAggregateInputObjectSchema } from './animalorderitemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemOrderByWithAggregationInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => animalorderitemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => animalorderitemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => animalorderitemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => animalorderitemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => animalorderitemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalorderitemOrderByWithAggregationInputObjectSchema = Schema;
