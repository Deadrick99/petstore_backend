import { z } from 'zod';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerAccountScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => CustomerAccountScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => CustomerAccountScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CustomerAccountScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => CustomerAccountScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => CustomerAccountScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      ACCOUNTID: z
        .union([
          z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional(),
      CUSTOMERID: z
        .union([
          z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      BALANCE: z
        .union([
          z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const CustomerAccountScalarWhereWithAggregatesInputObjectSchema = Schema;
