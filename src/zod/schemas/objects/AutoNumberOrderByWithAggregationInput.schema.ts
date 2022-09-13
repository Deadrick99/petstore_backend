import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AutoNumberCountOrderByAggregateInputObjectSchema } from './AutoNumberCountOrderByAggregateInput.schema';
import { AutoNumberAvgOrderByAggregateInputObjectSchema } from './AutoNumberAvgOrderByAggregateInput.schema';
import { AutoNumberMaxOrderByAggregateInputObjectSchema } from './AutoNumberMaxOrderByAggregateInput.schema';
import { AutoNumberMinOrderByAggregateInputObjectSchema } from './AutoNumberMinOrderByAggregateInput.schema';
import { AutoNumberSumOrderByAggregateInputObjectSchema } from './AutoNumberSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AutoNumberOrderByWithAggregationInput> = z
  .object({
    TABLENAME: z.lazy(() => SortOrderSchema).optional(),
    KEYVALUE: z.lazy(() => SortOrderSchema).optional(),
    KEYINCREMENT: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AutoNumberCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => AutoNumberAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AutoNumberMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AutoNumberMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => AutoNumberSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AutoNumberOrderByWithAggregationInputObjectSchema = Schema;
