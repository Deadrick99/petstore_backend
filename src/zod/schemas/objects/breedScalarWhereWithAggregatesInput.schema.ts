import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => breedScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => breedScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => breedScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => breedScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => breedScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    CATEGORY: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    BREED: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const breedScalarWhereWithAggregatesInputObjectSchema = Schema;
