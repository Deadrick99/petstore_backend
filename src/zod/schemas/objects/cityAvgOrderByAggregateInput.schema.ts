import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityAvgOrderByAggregateInput> = z
  .object({
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    POPULATION1990: z.lazy(() => SortOrderSchema).optional(),
    POPULATION1980: z.lazy(() => SortOrderSchema).optional(),
    LATITUDE: z.lazy(() => SortOrderSchema).optional(),
    LONGITUDE: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const cityAvgOrderByAggregateInputObjectSchema = Schema;
