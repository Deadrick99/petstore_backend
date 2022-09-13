import { z } from 'zod';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    PONUMBER: z
      .union([
        z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional(),
    ITEMID: z
      .union([
        z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional(),
    QUANTITY: z
      .union([
        z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    COST: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const OrderItemScalarWhereWithAggregatesInputObjectSchema = Schema;
