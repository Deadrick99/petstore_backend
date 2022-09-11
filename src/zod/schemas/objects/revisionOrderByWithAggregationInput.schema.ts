import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { revisionCountOrderByAggregateInputObjectSchema } from './revisionCountOrderByAggregateInput.schema';
import { revisionAvgOrderByAggregateInputObjectSchema } from './revisionAvgOrderByAggregateInput.schema';
import { revisionMaxOrderByAggregateInputObjectSchema } from './revisionMaxOrderByAggregateInput.schema';
import { revisionMinOrderByAggregateInputObjectSchema } from './revisionMinOrderByAggregateInput.schema';
import { revisionSumOrderByAggregateInputObjectSchema } from './revisionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.revisionOrderByWithAggregationInput> = z
  .object({
    REVISIONID: z.lazy(() => SortOrderSchema).optional(),
    VERSION: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    AUTHOR: z.lazy(() => SortOrderSchema).optional(),
    RELEASEDATE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => revisionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => revisionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => revisionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => revisionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => revisionSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const revisionOrderByWithAggregationInputObjectSchema = Schema;
