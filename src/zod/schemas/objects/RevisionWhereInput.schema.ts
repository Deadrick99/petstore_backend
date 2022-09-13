import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RevisionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RevisionWhereInputObjectSchema),
        z.lazy(() => RevisionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RevisionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RevisionWhereInputObjectSchema),
        z.lazy(() => RevisionWhereInputObjectSchema).array(),
      ])
      .optional(),
    REVISIONID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
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

export const RevisionWhereInputObjectSchema = Schema;
