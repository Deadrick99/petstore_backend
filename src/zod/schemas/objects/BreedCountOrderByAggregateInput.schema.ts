import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCountOrderByAggregateInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    BREED: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BreedCountOrderByAggregateInputObjectSchema = Schema;
