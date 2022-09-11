import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.autonumberScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => autonumberScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => autonumberScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => autonumberScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => autonumberScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => autonumberScalarWhereWithAggregatesInputObjectSchema)
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

export const autonumberScalarWhereWithAggregatesInputObjectSchema = Schema;
