import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { breedCountOrderByAggregateInputObjectSchema } from './breedCountOrderByAggregateInput.schema';
import { breedMaxOrderByAggregateInputObjectSchema } from './breedMaxOrderByAggregateInput.schema';
import { breedMinOrderByAggregateInputObjectSchema } from './breedMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedOrderByWithAggregationInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    BREED: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => breedCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => breedMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => breedMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const breedOrderByWithAggregationInputObjectSchema = Schema;
