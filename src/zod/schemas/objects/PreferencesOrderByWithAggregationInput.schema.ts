import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PreferencesCountOrderByAggregateInputObjectSchema } from './PreferencesCountOrderByAggregateInput.schema';
import { PreferencesMaxOrderByAggregateInputObjectSchema } from './PreferencesMaxOrderByAggregateInput.schema';
import { PreferencesMinOrderByAggregateInputObjectSchema } from './PreferencesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PreferencesOrderByWithAggregationInput> = z
  .object({
    KEYID: z.lazy(() => SortOrderSchema).optional(),
    VALUE: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PreferencesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PreferencesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PreferencesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PreferencesOrderByWithAggregationInputObjectSchema = Schema;
