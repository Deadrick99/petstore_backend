import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.autonumberWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => autonumberWhereInputObjectSchema),
        z.lazy(() => autonumberWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => autonumberWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => autonumberWhereInputObjectSchema),
        z.lazy(() => autonumberWhereInputObjectSchema).array(),
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

export const autonumberWhereInputObjectSchema = Schema;
