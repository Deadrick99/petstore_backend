import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { cityCountOrderByAggregateInputObjectSchema } from './cityCountOrderByAggregateInput.schema';
import { cityAvgOrderByAggregateInputObjectSchema } from './cityAvgOrderByAggregateInput.schema';
import { cityMaxOrderByAggregateInputObjectSchema } from './cityMaxOrderByAggregateInput.schema';
import { cityMinOrderByAggregateInputObjectSchema } from './cityMinOrderByAggregateInput.schema';
import { citySumOrderByAggregateInputObjectSchema } from './citySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityOrderByWithAggregationInput> = z
  .object({
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITY: z.lazy(() => SortOrderSchema).optional(),
    STATE: z.lazy(() => SortOrderSchema).optional(),
    AREACODE: z.lazy(() => SortOrderSchema).optional(),
    POPULATION1990: z.lazy(() => SortOrderSchema).optional(),
    POPULATION1980: z.lazy(() => SortOrderSchema).optional(),
    COUNTRY: z.lazy(() => SortOrderSchema).optional(),
    LATITUDE: z.lazy(() => SortOrderSchema).optional(),
    LONGITUDE: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => cityCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => cityAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => cityMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => cityMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => citySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const cityOrderByWithAggregationInputObjectSchema = Schema;
