import { z } from 'zod';
import { OrderItemWhereInputObjectSchema } from './OrderItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemListRelationFilter> = z
  .object({
    every: z.lazy(() => OrderItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => OrderItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => OrderItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const OrderItemListRelationFilterObjectSchema = Schema;
