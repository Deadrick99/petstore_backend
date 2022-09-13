import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemAvgOrderByAggregateInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const OrderItemAvgOrderByAggregateInputObjectSchema = Schema;
