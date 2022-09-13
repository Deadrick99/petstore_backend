import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderAvgOrderByAggregateInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MerchandiseOrderAvgOrderByAggregateInputObjectSchema = Schema;
