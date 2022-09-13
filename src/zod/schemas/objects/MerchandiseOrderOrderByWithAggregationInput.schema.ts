import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MerchandiseOrderCountOrderByAggregateInputObjectSchema } from './MerchandiseOrderCountOrderByAggregateInput.schema';
import { MerchandiseOrderAvgOrderByAggregateInputObjectSchema } from './MerchandiseOrderAvgOrderByAggregateInput.schema';
import { MerchandiseOrderMaxOrderByAggregateInputObjectSchema } from './MerchandiseOrderMaxOrderByAggregateInput.schema';
import { MerchandiseOrderMinOrderByAggregateInputObjectSchema } from './MerchandiseOrderMinOrderByAggregateInput.schema';
import { MerchandiseOrderSumOrderByAggregateInputObjectSchema } from './MerchandiseOrderSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderOrderByWithAggregationInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    ORDERDATE: z.lazy(() => SortOrderSchema).optional(),
    RECEIVEDATE: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MerchandiseOrderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MerchandiseOrderAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MerchandiseOrderMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MerchandiseOrderMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MerchandiseOrderSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseOrderOrderByWithAggregationInputObjectSchema = Schema;
