import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BreedScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => BreedScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BreedScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BreedScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => BreedScalarWhereWithAggregatesInputObjectSchema).array(),
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

export const BreedScalarWhereWithAggregatesInputObjectSchema = Schema;
