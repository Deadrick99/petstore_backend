import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CityCountOrderByAggregateInputObjectSchema } from './CityCountOrderByAggregateInput.schema';
import { CityAvgOrderByAggregateInputObjectSchema } from './CityAvgOrderByAggregateInput.schema';
import { CityMaxOrderByAggregateInputObjectSchema } from './CityMaxOrderByAggregateInput.schema';
import { CityMinOrderByAggregateInputObjectSchema } from './CityMinOrderByAggregateInput.schema';
import { CitySumOrderByAggregateInputObjectSchema } from './CitySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityOrderByWithAggregationInput> = z
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
    _count: z.lazy(() => CityCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => CityAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CityMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CityMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CitySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CityOrderByWithAggregationInputObjectSchema = Schema;
