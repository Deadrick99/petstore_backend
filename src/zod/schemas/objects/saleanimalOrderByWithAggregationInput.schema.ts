import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { saleanimalCountOrderByAggregateInputObjectSchema } from './saleanimalCountOrderByAggregateInput.schema';
import { saleanimalAvgOrderByAggregateInputObjectSchema } from './saleanimalAvgOrderByAggregateInput.schema';
import { saleanimalMaxOrderByAggregateInputObjectSchema } from './saleanimalMaxOrderByAggregateInput.schema';
import { saleanimalMinOrderByAggregateInputObjectSchema } from './saleanimalMinOrderByAggregateInput.schema';
import { saleanimalSumOrderByAggregateInputObjectSchema } from './saleanimalSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalOrderByWithAggregationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => saleanimalCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => saleanimalAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => saleanimalMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => saleanimalMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => saleanimalSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleanimalOrderByWithAggregationInputObjectSchema = Schema;
