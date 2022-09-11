import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { animalorderCountOrderByAggregateInputObjectSchema } from './animalorderCountOrderByAggregateInput.schema';
import { animalorderAvgOrderByAggregateInputObjectSchema } from './animalorderAvgOrderByAggregateInput.schema';
import { animalorderMaxOrderByAggregateInputObjectSchema } from './animalorderMaxOrderByAggregateInput.schema';
import { animalorderMinOrderByAggregateInputObjectSchema } from './animalorderMinOrderByAggregateInput.schema';
import { animalorderSumOrderByAggregateInputObjectSchema } from './animalorderSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderOrderByWithAggregationInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ORDERDATE: z.lazy(() => SortOrderSchema).optional(),
    RECEIVEDATE: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => animalorderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => animalorderAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => animalorderMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => animalorderMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => animalorderSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalorderOrderByWithAggregationInputObjectSchema = Schema;
