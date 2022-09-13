import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BreedScalarWhereInputObjectSchema),
        z.lazy(() => BreedScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BreedScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BreedScalarWhereInputObjectSchema),
        z.lazy(() => BreedScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    CATEGORY: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    BREED: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const BreedScalarWhereInputObjectSchema = Schema;
