import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { customeraccountCountOrderByAggregateInputObjectSchema } from './customeraccountCountOrderByAggregateInput.schema';
import { customeraccountAvgOrderByAggregateInputObjectSchema } from './customeraccountAvgOrderByAggregateInput.schema';
import { customeraccountMaxOrderByAggregateInputObjectSchema } from './customeraccountMaxOrderByAggregateInput.schema';
import { customeraccountMinOrderByAggregateInputObjectSchema } from './customeraccountMinOrderByAggregateInput.schema';
import { customeraccountSumOrderByAggregateInputObjectSchema } from './customeraccountSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customeraccountOrderByWithAggregationInput> = z
  .object({
    ACCOUNTID: z.lazy(() => SortOrderSchema).optional(),
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    BALANCE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => customeraccountCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => customeraccountAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => customeraccountMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => customeraccountMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => customeraccountSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const customeraccountOrderByWithAggregationInputObjectSchema = Schema;
