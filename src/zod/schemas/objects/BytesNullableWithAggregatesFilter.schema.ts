import { z } from 'zod';
import { NestedBytesNullableWithAggregatesFilterObjectSchema } from './NestedBytesNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedBytesNullableFilterObjectSchema } from './NestedBytesNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BytesNullableWithAggregatesFilter> = z
  .object({
    not: z
      .lazy(() => NestedBytesNullableWithAggregatesFilterObjectSchema)
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedBytesNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedBytesNullableFilterObjectSchema).optional(),
  })
  .strict();

export const BytesNullableWithAggregatesFilterObjectSchema = Schema;
