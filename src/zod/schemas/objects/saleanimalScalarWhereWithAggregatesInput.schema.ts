import { z } from 'zod';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saleanimalScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => saleanimalScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saleanimalScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saleanimalScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => saleanimalScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    SALEID: z
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
    SALEPRICE: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const saleanimalScalarWhereWithAggregatesInputObjectSchema = Schema;
