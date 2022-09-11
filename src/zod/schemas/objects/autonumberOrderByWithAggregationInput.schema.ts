import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { autonumberCountOrderByAggregateInputObjectSchema } from './autonumberCountOrderByAggregateInput.schema';
import { autonumberAvgOrderByAggregateInputObjectSchema } from './autonumberAvgOrderByAggregateInput.schema';
import { autonumberMaxOrderByAggregateInputObjectSchema } from './autonumberMaxOrderByAggregateInput.schema';
import { autonumberMinOrderByAggregateInputObjectSchema } from './autonumberMinOrderByAggregateInput.schema';
import { autonumberSumOrderByAggregateInputObjectSchema } from './autonumberSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.autonumberOrderByWithAggregationInput> = z
  .object({
    TABLENAME: z.lazy(() => SortOrderSchema).optional(),
    KEYVALUE: z.lazy(() => SortOrderSchema).optional(),
    KEYINCREMENT: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => autonumberCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => autonumberAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => autonumberMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => autonumberMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => autonumberSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const autonumberOrderByWithAggregationInputObjectSchema = Schema;
