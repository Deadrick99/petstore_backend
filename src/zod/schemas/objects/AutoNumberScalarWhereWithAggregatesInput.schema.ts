import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AutoNumberScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AutoNumberScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => AutoNumberScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AutoNumberScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AutoNumberScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => AutoNumberScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    TABLENAME: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    KEYVALUE: z
      .union([
        z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    KEYINCREMENT: z
      .union([
        z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const AutoNumberScalarWhereWithAggregatesInputObjectSchema = Schema;
