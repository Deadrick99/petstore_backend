import { z } from 'zod';
import { NestedBytesNullableFilterObjectSchema } from './NestedBytesNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BytesNullableFilter> = z
  .object({
    not: z
      .lazy(() => NestedBytesNullableFilterObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BytesNullableFilterObjectSchema = Schema;
