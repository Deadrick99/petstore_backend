import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerAccountCountOrderByAggregateInputObjectSchema } from './CustomerAccountCountOrderByAggregateInput.schema';
import { CustomerAccountAvgOrderByAggregateInputObjectSchema } from './CustomerAccountAvgOrderByAggregateInput.schema';
import { CustomerAccountMaxOrderByAggregateInputObjectSchema } from './CustomerAccountMaxOrderByAggregateInput.schema';
import { CustomerAccountMinOrderByAggregateInputObjectSchema } from './CustomerAccountMinOrderByAggregateInput.schema';
import { CustomerAccountSumOrderByAggregateInputObjectSchema } from './CustomerAccountSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerAccountOrderByWithAggregationInput> = z
  .object({
    ACCOUNTID: z.lazy(() => SortOrderSchema).optional(),
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    BALANCE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CustomerAccountCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => CustomerAccountAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => CustomerAccountMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => CustomerAccountMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => CustomerAccountSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerAccountOrderByWithAggregationInputObjectSchema = Schema;
