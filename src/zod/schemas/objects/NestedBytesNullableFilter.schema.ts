import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedBytesNullableFilter> = z
  .object({
    not: z
      .lazy(() => NestedBytesNullableFilterObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const NestedBytesNullableFilterObjectSchema = Schema;
