import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { supplierCountOrderByAggregateInputObjectSchema } from './supplierCountOrderByAggregateInput.schema';
import { supplierAvgOrderByAggregateInputObjectSchema } from './supplierAvgOrderByAggregateInput.schema';
import { supplierMaxOrderByAggregateInputObjectSchema } from './supplierMaxOrderByAggregateInput.schema';
import { supplierMinOrderByAggregateInputObjectSchema } from './supplierMinOrderByAggregateInput.schema';
import { supplierSumOrderByAggregateInputObjectSchema } from './supplierSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierOrderByWithAggregationInput> = z
  .object({
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    NAME: z.lazy(() => SortOrderSchema).optional(),
    CONTACTNAME: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => supplierCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => supplierAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => supplierMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => supplierMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => supplierSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const supplierOrderByWithAggregationInputObjectSchema = Schema;
