import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.revisionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => revisionWhereInputObjectSchema),
        z.lazy(() => revisionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => revisionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => revisionWhereInputObjectSchema),
        z.lazy(() => revisionWhereInputObjectSchema).array(),
      ])
      .optional(),
    REVISIONID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    VERSION: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    DESCRIPTION: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    AUTHOR: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    RELEASEDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
  })
  .strict();

export const revisionWhereInputObjectSchema = Schema;
