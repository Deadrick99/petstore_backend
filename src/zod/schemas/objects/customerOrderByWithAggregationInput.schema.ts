import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { customerCountOrderByAggregateInputObjectSchema } from './customerCountOrderByAggregateInput.schema';
import { customerAvgOrderByAggregateInputObjectSchema } from './customerAvgOrderByAggregateInput.schema';
import { customerMaxOrderByAggregateInputObjectSchema } from './customerMaxOrderByAggregateInput.schema';
import { customerMinOrderByAggregateInputObjectSchema } from './customerMinOrderByAggregateInput.schema';
import { customerSumOrderByAggregateInputObjectSchema } from './customerSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerOrderByWithAggregationInput> = z
  .object({
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    FIRSTNAME: z.lazy(() => SortOrderSchema).optional(),
    LASTNAME: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => customerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => customerAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => customerMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => customerMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => customerSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const customerOrderByWithAggregationInputObjectSchema = Schema;
