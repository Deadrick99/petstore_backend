import { z } from 'zod';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => AnimalOrderItemScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => AnimalOrderItemScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AnimalOrderItemScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => AnimalOrderItemScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => AnimalOrderItemScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      ORDERID: z
        .union([
          z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional(),
      ANIMALID: z
        .union([
          z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional(),
      COST: z
        .union([
          z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const AnimalOrderItemScalarWhereWithAggregatesInputObjectSchema = Schema;
