import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RevisionCountOrderByAggregateInputObjectSchema } from './RevisionCountOrderByAggregateInput.schema';
import { RevisionAvgOrderByAggregateInputObjectSchema } from './RevisionAvgOrderByAggregateInput.schema';
import { RevisionMaxOrderByAggregateInputObjectSchema } from './RevisionMaxOrderByAggregateInput.schema';
import { RevisionMinOrderByAggregateInputObjectSchema } from './RevisionMinOrderByAggregateInput.schema';
import { RevisionSumOrderByAggregateInputObjectSchema } from './RevisionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RevisionOrderByWithAggregationInput> = z
  .object({
    REVISIONID: z.lazy(() => SortOrderSchema).optional(),
    VERSION: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    AUTHOR: z.lazy(() => SortOrderSchema).optional(),
    RELEASEDATE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RevisionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => RevisionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RevisionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RevisionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RevisionSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RevisionOrderByWithAggregationInputObjectSchema = Schema;
