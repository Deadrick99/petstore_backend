import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderMinOrderByAggregateInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ORDERDATE: z.lazy(() => SortOrderSchema).optional(),
    RECEIVEDATE: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AnimalOrderMinOrderByAggregateInputObjectSchema = Schema;
