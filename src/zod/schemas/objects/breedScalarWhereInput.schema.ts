import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => breedScalarWhereInputObjectSchema),
        z.lazy(() => breedScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => breedScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => breedScalarWhereInputObjectSchema),
        z.lazy(() => breedScalarWhereInputObjectSchema).array(),
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

export const breedScalarWhereInputObjectSchema = Schema;
