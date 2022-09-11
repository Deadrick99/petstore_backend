import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => categoryScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => categoryScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => categoryScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => categoryScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => categoryScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    CATEGORY: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    REGISTRATION: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const categoryScalarWhereWithAggregatesInputObjectSchema = Schema;
