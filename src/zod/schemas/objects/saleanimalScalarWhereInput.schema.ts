import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saleanimalScalarWhereInputObjectSchema),
        z.lazy(() => saleanimalScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saleanimalScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saleanimalScalarWhereInputObjectSchema),
        z.lazy(() => saleanimalScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    SALEID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    ANIMALID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    SALEPRICE: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const saleanimalScalarWhereInputObjectSchema = Schema;
