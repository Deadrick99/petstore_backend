import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { preferencesCountOrderByAggregateInputObjectSchema } from './preferencesCountOrderByAggregateInput.schema';
import { preferencesMaxOrderByAggregateInputObjectSchema } from './preferencesMaxOrderByAggregateInput.schema';
import { preferencesMinOrderByAggregateInputObjectSchema } from './preferencesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.preferencesOrderByWithAggregationInput> = z
  .object({
    KEYID: z.lazy(() => SortOrderSchema).optional(),
    VALUE: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => preferencesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => preferencesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => preferencesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const preferencesOrderByWithAggregationInputObjectSchema = Schema;
