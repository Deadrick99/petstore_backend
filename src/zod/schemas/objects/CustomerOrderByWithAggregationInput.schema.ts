import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerCountOrderByAggregateInputObjectSchema } from './CustomerCountOrderByAggregateInput.schema';
import { CustomerAvgOrderByAggregateInputObjectSchema } from './CustomerAvgOrderByAggregateInput.schema';
import { CustomerMaxOrderByAggregateInputObjectSchema } from './CustomerMaxOrderByAggregateInput.schema';
import { CustomerMinOrderByAggregateInputObjectSchema } from './CustomerMinOrderByAggregateInput.schema';
import { CustomerSumOrderByAggregateInputObjectSchema } from './CustomerSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput> = z
  .object({
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    FIRSTNAME: z.lazy(() => SortOrderSchema).optional(),
    LASTNAME: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CustomerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => CustomerAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CustomerMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CustomerMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CustomerSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CustomerOrderByWithAggregationInputObjectSchema = Schema;
