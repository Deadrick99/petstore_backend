import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { categoryCountOrderByAggregateInputObjectSchema } from './categoryCountOrderByAggregateInput.schema';
import { categoryMaxOrderByAggregateInputObjectSchema } from './categoryMaxOrderByAggregateInput.schema';
import { categoryMinOrderByAggregateInputObjectSchema } from './categoryMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryOrderByWithAggregationInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    REGISTRATION: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => categoryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => categoryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => categoryMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const categoryOrderByWithAggregationInputObjectSchema = Schema;
