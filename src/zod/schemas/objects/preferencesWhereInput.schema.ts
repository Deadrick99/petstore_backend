import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.preferencesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => preferencesWhereInputObjectSchema),
        z.lazy(() => preferencesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => preferencesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => preferencesWhereInputObjectSchema),
        z.lazy(() => preferencesWhereInputObjectSchema).array(),
      ])
      .optional(),
    KEYID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    VALUE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    DESCRIPTION: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const preferencesWhereInputObjectSchema = Schema;
