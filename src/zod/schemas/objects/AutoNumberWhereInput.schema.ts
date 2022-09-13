import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AutoNumberWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AutoNumberWhereInputObjectSchema),
        z.lazy(() => AutoNumberWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AutoNumberWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AutoNumberWhereInputObjectSchema),
        z.lazy(() => AutoNumberWhereInputObjectSchema).array(),
      ])
      .optional(),
    TABLENAME: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    KEYVALUE: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    KEYINCREMENT: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const AutoNumberWhereInputObjectSchema = Schema;
