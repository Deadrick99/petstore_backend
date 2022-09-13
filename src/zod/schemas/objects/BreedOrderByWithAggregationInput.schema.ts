import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BreedCountOrderByAggregateInputObjectSchema } from './BreedCountOrderByAggregateInput.schema';
import { BreedMaxOrderByAggregateInputObjectSchema } from './BreedMaxOrderByAggregateInput.schema';
import { BreedMinOrderByAggregateInputObjectSchema } from './BreedMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedOrderByWithAggregationInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    BREED: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BreedCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => BreedMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => BreedMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const BreedOrderByWithAggregationInputObjectSchema = Schema;
