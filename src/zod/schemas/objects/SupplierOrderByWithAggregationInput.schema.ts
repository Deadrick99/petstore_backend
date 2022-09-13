import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SupplierCountOrderByAggregateInputObjectSchema } from './SupplierCountOrderByAggregateInput.schema';
import { SupplierAvgOrderByAggregateInputObjectSchema } from './SupplierAvgOrderByAggregateInput.schema';
import { SupplierMaxOrderByAggregateInputObjectSchema } from './SupplierMaxOrderByAggregateInput.schema';
import { SupplierMinOrderByAggregateInputObjectSchema } from './SupplierMinOrderByAggregateInput.schema';
import { SupplierSumOrderByAggregateInputObjectSchema } from './SupplierSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierOrderByWithAggregationInput> = z
  .object({
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    NAME: z.lazy(() => SortOrderSchema).optional(),
    CONTACTNAME: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SupplierCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SupplierAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SupplierMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SupplierMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SupplierSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SupplierOrderByWithAggregationInputObjectSchema = Schema;
